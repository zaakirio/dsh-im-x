import {
  normalizeDingtalkSessionWebhook,
  splitDingtalkText,
} from './dingtalk-api.mjs';
import { createDingTalkCardStream } from './dingtalk-card-stream.mjs';
import {
  harnessAnswerForQuestion,
  harnessQuestionText,
  validHarnessQuestion,
} from '../shared/harness-question.mjs';
import { HarnessApprovalQueue } from '../shared/harness-approval.mjs';
import { runCompactCommand } from '../shared/compact-command.mjs';
import {
  isControlCommand,
  runControlCommand,
} from '../shared/control-command.mjs';
import {
  isModelCommand,
  runModelCommand,
} from '../shared/model-command.mjs';
import {
  isPresetCommand,
  runPresetCommand,
} from '../shared/preset-command.mjs';
import { runWorkspaceCommand } from '../shared/workspace-command.mjs';
import { askInWorkspaceSession } from '../shared/workspace-session.mjs';
import {
  hasInboundImages,
  imagePromptUserMessage,
  promptContentForMessage,
} from '../shared/image-prompt.mjs';
import { rememberConnectionTestTarget } from '../shared/connection-test.mjs';
import {
  materializeOutboundArtifact,
  releaseOutboundArtifact,
} from '../shared/semantic/artifact.mjs';
import { helpText } from '../shared/bot-commands.mjs';
import { bridgeTranslatorFactory } from '../shared/conversation-locale.mjs';
import { defaultTranslator } from '../../i18n/index.mjs';
import {
  createArtifactFailureReceipt,
  createDeliveryReceipt,
  mergeDeliveryReceipts,
  providerMessageIdsFor,
} from '../shared/semantic/delivery.mjs';



const CHANNEL_LABEL = 'DingTalk';

function nonEmptyString(value) {
  return typeof value === 'string' && value.trim() ? value.trim() : null;
}

function dingtalkFileProviderIds(result) {
  const ids = providerMessageIdsFor(result);
  const processQueryKey = nonEmptyString(result?.processQueryKey);
  if (processQueryKey && !ids.includes(processQueryKey)) ids.push(processQueryKey);
  return ids;
}

function safeErrorDiagnostic(error) {
  const chain = [];
  const seen = new Set();
  let current = error;
  while (current && typeof current === 'object' && chain.length < 3 && !seen.has(current)) {
    seen.add(current);
    const name = nonEmptyString(current.name)?.slice(0, 80);
    const code = nonEmptyString(current.code)?.slice(0, 80);
    const providerCode = nonEmptyString(current.providerCode)?.slice(0, 160);
    const status = Number.isInteger(current.status) ? current.status : undefined;
    chain.push({
      ...(name ? { name } : {}),
      ...(code ? { code } : {}),
      ...(providerCode ? { providerCode } : {}),
      ...(status ? { status } : {}),
    });
    current = current.cause;
  }
  return chain;
}

function dingtalkImageErrorUserMessage(error, t = defaultTranslator) {
  let current = error;
  const seen = new Set();
  while (current && typeof current === 'object' && !seen.has(current)) {
    seen.add(current);
    if (current.code === 'image-download-address-failed') {
      return t('image.error.dingtalkDownloadCodeFailed');
    }
    if (current.code === 'invalid-image-download') {
      return t('image.error.dingtalkNoDownloadUrl');
    }
    if (current.code === 'image-content-download-failed') {
      return t('image.error.dingtalkTemporaryUrlUnreadable');
    }
    current = current.cause;
  }
  return imagePromptUserMessage(error, t);
}

function senderStaffId(message) {
  return nonEmptyString(message?.senderStaffId) ?? nonEmptyString(message?.senderId);
}

function parsedMessageContent(message) {
  if (message?.content && typeof message.content === 'object') return message.content;
  if (typeof message?.content !== 'string') return null;
  try {
    const parsed = JSON.parse(message.content);
    return parsed && typeof parsed === 'object' ? parsed : null;
  } catch {
    return null;
  }
}

function richTextEntries(content) {
  const entries = content?.richText ?? content?.rich_text;
  return Array.isArray(entries) ? entries : [];
}

function richTextEntryText(entry) {
  if (typeof entry?.text === 'string') return nonEmptyString(entry.text);
  if (typeof entry?.text?.content === 'string') return nonEmptyString(entry.text.content);
  if (String(entry?.type).toLowerCase() === 'text' && typeof entry?.content === 'string') {
    return nonEmptyString(entry.content);
  }
  return null;
}

function downloadCodeFor(value) {
  return nonEmptyString(value?.downloadCode) ?? nonEmptyString(value?.pictureDownloadCode);
}

/** Normalize DingTalk picture and richText callbacks into lazy image references. */
export function dingtalkInboundMessage(message, {
  api,
  clientId,
  clientSecret,
} = {}) {
  const msgtype = String(message?.msgtype ?? '').toLowerCase();
  const content = parsedMessageContent(message);
  const richEntries = msgtype === 'richtext' ? richTextEntries(content) : [];
  const text = msgtype === 'text'
    ? nonEmptyString(message?.text?.content) ?? ''
    : richEntries.map(richTextEntryText).filter(Boolean).join('\n');
  const imageCodes = [];
  if (msgtype === 'picture') {
    const code = downloadCodeFor(content);
    if (code) imageCodes.push(code);
  } else if (msgtype === 'richtext') {
    for (const entry of richEntries) {
      if (String(entry?.type ?? '').toLowerCase() !== 'picture') continue;
      const code = downloadCodeFor(entry);
      if (code) imageCodes.push(code);
    }
  }
  return {
    content: text,
    images: imageCodes.map((downloadCode, index) => ({
      name: index === 0 ? 'image' : `image-${index + 1}`,
      load: ({ signal, maxBytes }) => {
        if (typeof api?.downloadImage !== 'function') {
          throw new Error('DingTalk API does not support image downloads');
        }
        return api.downloadImage({
          clientId,
          clientSecret,
          robotCode: message?.robotCode,
          downloadCode,
          signal,
          maxBytes,
        });
      },
    })),
  };
}

function conversationKey(message, sender) {
  if (String(message?.conversationType) === '2') {
    const conversationId = nonEmptyString(message?.conversationId);
    if (!conversationId) throw new Error('DingTalk group message has no conversation id');
    return `group:${conversationId}`;
  }
  return `p2p:${sender}`;
}

function cardTarget(message, sender) {
  if (String(message?.conversationType) === '2') {
    return { type: 'group', openConversationId: nonEmptyString(message?.conversationId) };
  }
  return { type: 'user', userId: sender };
}

function fileTarget(message, sender, clientId) {
  const robotCode = nonEmptyString(message?.robotCode) ?? clientId;
  if (String(message?.conversationType) === '2') {
    return {
      type: 'group',
      openConversationId: nonEmptyString(message?.conversationId),
      robotCode,
    };
  }
  return { type: 'user', userId: sender, robotCode };
}

const DINGTALK_ARTIFACT_ERROR_KEYS = Object.freeze({
  'artifact-delivery-uncertain': 'artifact.uncertainShort',
  'artifact-permission-required': 'artifact.dingtalk.permission',
  'artifact-too-large': 'artifact.dingtalk.tooLarge',
  'artifact-rate-limited': 'artifact.dingtalk.rateLimited',
  'artifact-provider-rejected': 'artifact.dingtalk.rejected',
  'artifact-invalid': 'artifact.error.unavailable',
  'artifact-changed': 'artifact.error.unavailable',
  'artifact-unavailable': 'artifact.error.unavailable',
});

function artifactFailureText(fileName, error, t = defaultTranslator) {
  const fallback = t('artifact.fallbackName');
  const name = String(fileName ?? fallback).replace(/[\r\n]+/g, ' ').trim() || fallback;
  return t(DINGTALK_ARTIFACT_ERROR_KEYS[error?.code] ?? 'artifact.dingtalk.generic', { name });
}

function progressText(update, t = defaultTranslator) {
  if (update?.type === 'text' && nonEmptyString(update.text)) return update.text;
  if (update?.type === 'tool') {
    if (update.name === 'web_search') return `_${t('bridge.searchingWeb')}_`;
    return `_${t('bridge.usingTool', { name: nonEmptyString(update.name) ?? t('bridge.toolFallback') })}_`;
  }
  return `_${nonEmptyString(update?.text) ?? t('bridge.processing')}_`;
}

function canClaimInteractionReply(message, pending, sender) {
  if (pending.needsPresentation || !pending.questions[pending.index]) return false;
  if (pending.actor !== sender) return false;
  if (String(message?.conversationType) === '2' && message?.isInAtList !== true) return false;
  if (message?.msgtype !== 'text' || !nonEmptyString(message?.text?.content)) return false;
  try {
    normalizeDingtalkSessionWebhook(message.sessionWebhook);
    return true;
  } catch {
    return false;
  }
}

function ensureStats(status) {
  status.stats ??= {};
  for (const key of ['messagesReceived', 'messagesReplied', 'messagesRejected', 'messagesIgnored']) {
    status[key] ??= 0;
    status.stats[key] = status[key];
  }
  status.pendingSenders ??= [];
}

function increment(status, key) {
  status[key] = (status[key] ?? 0) + 1;
  status.stats ??= {};
  status.stats[key] = status[key];
}

export function createDingtalkBridgeStatus({ pendingSenders = [] } = {}) {
  return {
    messagesReceived: 0,
    messagesReplied: 0,
    messagesRejected: 0,
    messagesIgnored: 0,
    lastMessageAt: null,
    lastReplyAt: null,
    lastRejectedAt: null,
    lastError: null,
    pendingSenders: structuredClone(pendingSenders),
    stats: {
      messagesReceived: 0,
      messagesReplied: 0,
      messagesRejected: 0,
      messagesIgnored: 0,
    },
  };
}

export class DingtalkHarnessBridge {
  #api;
  #clientId;
  #clientSecret;
  #harness;
  #state;
  #translatorFor;
  #status;
  #logger;
  #replyTimeoutMs;
  #maxMessageChars;
  #signal;
  #queues = new Map();
  #pendingInteractions = new Map();
  #interactionKeys = new Map();
  #interactionTasks = new Set();
  #commandTasks = new Set();
  #acceptedMessageIds = new Set();
  #approvals;

  constructor({
    api,
    clientId,
    clientSecret,
    harness,
    state,
    status = createDingtalkBridgeStatus(),
    logger = console,
    replyTimeoutMs = 600_000,
    maxMessageChars = 4_000,
    signal,
    locale,
  }) {
    if (!api || typeof api.sendText !== 'function') throw new TypeError('DingTalk API is required');
    if (!nonEmptyString(clientId) || !nonEmptyString(clientSecret)) {
      throw new TypeError('DingTalk app credentials are required');
    }
    if (!harness || !state) throw new TypeError('Harness client and state store are required');
    this.#api = api;
    this.#clientId = clientId.trim();
    this.#clientSecret = clientSecret.trim();
    this.#harness = harness;
    this.#state = state;
    this.#status = status;
    this.#logger = logger;
    this.#approvals = new HarnessApprovalQueue({ label: 'DingTalk', logger });
    this.#replyTimeoutMs = replyTimeoutMs;
    this.#maxMessageChars = maxMessageChars;
    this.#signal = signal;
    this.#translatorFor = bridgeTranslatorFactory({ state, locale });
    ensureStats(this.#status);
    this.#refreshPendingSenders();
  }

  get status() {
    this.#refreshPendingSenders();
    return structuredClone(this.#status);
  }

  accept(message) {
    if (this.#signal?.aborted) return Promise.resolve();
    const messageId = nonEmptyString(message?.msgId);
    const sender = senderStaffId(message);
    if (!messageId || !sender || this.#state.hasSeen(messageId)
      || this.#acceptedMessageIds.has(messageId)) return Promise.resolve();
    this.#acceptedMessageIds.add(messageId);

    let key;
    try {
      key = conversationKey(message, sender);
    } catch {
      this.#acceptedMessageIds.delete(messageId);
      increment(this.#status, 'messagesRejected');
      this.#status.lastRejectedAt = new Date().toISOString();
      return Promise.resolve();
    }

    let sessionWebhook = null;
    try {
      sessionWebhook = normalizeDingtalkSessionWebhook(message.sessionWebhook);
    } catch {
      // An unsafe reply route must never be able to submit an approval.
    }
    if (sessionWebhook && String(message.conversationType) !== '2') {
      rememberConnectionTestTarget(this.#state, { sessionWebhook });
    }
    const pending = this.#pendingInteractions.get(key);
    const promptMessage = dingtalkInboundMessage(message, {
      api: this.#api,
      clientId: this.#clientId,
      clientSecret: this.#clientSecret,
    });
    const commandText = nonEmptyString(promptMessage.content) ?? '';
    const commandRunner = isControlCommand(commandText)
      ? runControlCommand
      : (isModelCommand(commandText)
          ? runModelCommand
          : (isPresetCommand(commandText) ? runPresetCommand : null));
    const addressed = String(message.conversationType) !== '2' || message?.isInAtList === true;
    if (commandRunner && sessionWebhook && addressed) {
      let task;
      task = this.#processFastCommand(
        message,
        messageId,
        key,
        sessionWebhook,
        promptMessage,
        commandRunner,
      ).catch((error) => {
        if (error?.code === 'turn-stopped' || this.#signal?.aborted) return;
        const t = this.#translatorFor(key, message);
        this.#status.lastError = t('bridge.error.commandFailed', { channel: CHANNEL_LABEL });
        this.#logger.error?.('[dsh-dingtalk] failed to process a command', safeErrorDiagnostic(error));
        return this.#send(sessionWebhook, t('bridge.messageFailed')).catch(() => undefined);
      }).finally(() => {
        this.#acceptedMessageIds.delete(messageId);
        this.#commandTasks.delete(task);
      });
      this.#commandTasks.add(task);
      return task;
    }
    const approvalReply = this.#approvals.claimReply({
      key,
      actor: sender,
      messageId,
      text: sessionWebhook && message?.msgtype === 'text'
        ? nonEmptyString(message?.text?.content) ?? ''
        : '',
      addressed: String(message?.conversationType) !== '2' || message?.isInAtList === true,
      hasPendingQuestion: Boolean(pending),
      questionCompletion: pending?.submitting || pending?.claimedReplyMessageId
        ? pending.queue
        : null,
      isQuestionPending: () => this.#pendingInteractions.has(key),
      send: sessionWebhook
        ? (reply) => this.#send(sessionWebhook, reply)
        : async () => undefined,
    });
    if (approvalReply) {
      let current;
      const approvalTranslator = this.#translatorFor(key, message);
      current = approvalReply.process(async () => {
          if (this.#state.hasSeen(messageId)) return false;
          await this.#state.markSeen(messageId);
          increment(this.#status, 'messagesReceived');
          this.#status.lastMessageAt = new Date().toISOString();
          if (!sessionWebhook) {
            increment(this.#status, 'messagesRejected');
            this.#status.lastRejectedAt = new Date().toISOString();
            this.#status.lastError = approvalTranslator('bridge.error.noSafeReplyTarget', { channel: CHANNEL_LABEL });
          }
          return true;
        })
        .catch((error) => {
          if (this.#signal?.aborted) return;
          this.#status.lastError = approvalTranslator('bridge.error.approvalFailed', { channel: CHANNEL_LABEL });
          this.#logger.error?.('[dsh-dingtalk] failed to process an approval reply', error);
        })
        .finally(() => {
          this.#acceptedMessageIds.delete(messageId);
          this.#interactionTasks.delete(current);
        });
      this.#interactionTasks.add(current);
      return current;
    }

    if (pending && pending.actor !== sender) {
      return this.#enqueueMessage(message, messageId, sender, key);
    }
    // Once one valid answer has been claimed, later messages are subsequent
    // prompts even if the network submission eventually needs a retry. Invalid
    // replies do not claim the question, so the next valid answer can still
    // pass through this interaction queue.
    if (pending?.submitting || pending?.claimedReplyMessageId) {
      return this.#enqueueMessage(message, messageId, sender, key);
    }
    if (pending) {
      if (canClaimInteractionReply(message, pending, sender)) {
        pending.claimedReplyMessageId = messageId;
      }
      const previous = pending.queue ?? Promise.resolve();
      const current = previous
        .catch(() => undefined)
        .then(() => this.#processInteractionReply(message, messageId, sender, key, pending))
        .finally(() => {
          this.#acceptedMessageIds.delete(messageId);
          if (pending.claimedReplyMessageId === messageId) {
            pending.claimedReplyMessageId = null;
          }
          if (pending.queue === current) pending.queue = null;
        });
      pending.queue = current;
      return current;
    }
    return this.#enqueueMessage(message, messageId, sender, key);
  }

  #enqueueMessage(message, messageId, sender, key, {
    releaseMessageId = true,
    alreadyRecorded = false,
  } = {}) {
    const previous = this.#queues.get(key) ?? Promise.resolve();
    const current = previous
      .catch(() => undefined)
      .then(() => this.#process(message, messageId, sender, key, { alreadyRecorded }))
      .finally(() => {
        if (releaseMessageId) this.#acceptedMessageIds.delete(messageId);
        if (this.#queues.get(key) === current) this.#queues.delete(key);
      });
    this.#queues.set(key, current);
    return current;
  }

  async waitForIdle() {
    await Promise.allSettled([
      ...this.#queues.values(),
      ...[...this.#pendingInteractions.values()].flatMap((pending) => (
        pending.queue ? [pending.queue] : []
      )),
      ...this.#interactionTasks,
      ...this.#commandTasks,
    ]);
  }

  async #processFastCommand(message, messageId, key, sessionWebhook, prompt, runner) {
    const t = this.#translatorFor(key, message);
    this.#signal?.throwIfAborted();
    if (this.#state.hasSeen(messageId)) return;
    await this.#state.markSeen(messageId);
    increment(this.#status, 'messagesReceived');
    this.#status.lastMessageAt = new Date().toISOString();
    const result = await runner(
      nonEmptyString(prompt.content) ?? '',
      this.#harness,
      this.#state,
      key,
      {
        signal: this.#signal,
        hasImages: hasInboundImages(prompt),
        pendingInteraction: this.#pendingInteractions.has(key)
          || this.#approvals.hasPending(key),
        control: { owner: this, key },
        t,
      },
    );
    if (result?.stopped) {
      await Promise.allSettled([
        this.#cancelPendingInteraction(key),
        this.#approvals.closeRoute(key),
      ]);
    }
    for (const reply of result?.messages ?? [result?.message]) {
      if (reply) await this.#send(sessionWebhook, reply);
    }
    this.#status.lastError = null;
  }

  async #process(message, messageId, sender, key, { alreadyRecorded = false } = {}) {
    const t = this.#translatorFor(key, message);
    this.#signal?.throwIfAborted();
    if (!alreadyRecorded) {
      if (this.#state.hasSeen(messageId)) return;
      await this.#state.markSeen(messageId);
      increment(this.#status, 'messagesReceived');
      this.#status.lastMessageAt = new Date().toISOString();
    }

    if (String(message.conversationType) === '2' && message.isInAtList !== true) {
      increment(this.#status, 'messagesIgnored');
      return;
    }

    let sessionWebhook;
    try {
      sessionWebhook = normalizeDingtalkSessionWebhook(message.sessionWebhook);
    } catch {
      increment(this.#status, 'messagesRejected');
      this.#status.lastRejectedAt = new Date().toISOString();
      this.#status.lastError = t('bridge.error.noSafeReplyTarget', { channel: CHANNEL_LABEL });
      return;
    }

    const promptMessage = dingtalkInboundMessage(message, {
      api: this.#api,
      clientId: this.#clientId,
      clientSecret: this.#clientSecret,
    });
    const text = promptMessage.content;
    const hasImages = hasInboundImages(promptMessage);
    const isPlainText = String(message?.msgtype).toLowerCase() === 'text';
    let cardStream = null;
    let cardStarted = false;
    try {
      if (!text && !hasImages) {
        await this.#send(sessionWebhook, t('bridge.textAndImagesOnly'));
        return;
      }

      const command = text.toLowerCase();
      if (isPlainText && !hasImages && command === '/help') {
        await this.#send(sessionWebhook, helpText(t, { channelLabel: CHANNEL_LABEL }));
        return;
      }
      if (isPlainText && !hasImages && command === '/status') {
        await this.#harness.ensureRunning({ signal: this.#signal });
        await this.#send(sessionWebhook, t('bridge.statusOk', { channel: CHANNEL_LABEL }));
        return;
      }
      if (isPlainText && !hasImages && command === '/new') {
        await this.#state.clearSession(key);
        await this.#send(sessionWebhook, t('bridge.newSession'));
        return;
      }
      const workspaceCommand = isPlainText && !hasImages
        ? await runWorkspaceCommand(text, this.#harness, key, { t })
        : null;
      if (workspaceCommand) {
        for (const reply of workspaceCommand.messages ?? [workspaceCommand.message]) {
          await this.#send(sessionWebhook, reply);
        }
        return;
      }
      const compactCommand = isPlainText && !hasImages
        ? await runCompactCommand(
            text,
            this.#harness,
            this.#state,
            key,
            { signal: this.#signal },
          )
        : null;
      if (compactCommand) {
        await this.#send(sessionWebhook, compactCommand.message);
        return;
      }

      const content = hasImages
        ? await promptContentForMessage(promptMessage, { signal: this.#signal })
        : undefined;
      if (typeof this.#api.createAiCard === 'function'
        && typeof this.#api.updateAiCard === 'function'
        && typeof this.#api.finishAiCard === 'function') {
        cardStream = createDingTalkCardStream({
          api: this.#api,
          clientId: this.#clientId,
          clientSecret: this.#clientSecret,
          target: cardTarget(message, sender),
          signal: this.#signal,
          logger: this.#logger,
        });
        cardStarted = await cardStream.start(t('bridge.connectedThinking'));
      }
      const { answer, artifacts = [] } = await askInWorkspaceSession({
        harness: this.#harness,
        state: this.#state,
        key,
        ...(hasImages ? { content } : { text }),
        createOptions: { signal: this.#signal },
        existsOptions: { signal: this.#signal },
        askOptions: {
          timeoutMs: this.#replyTimeoutMs,
          signal: this.#signal,
          control: { owner: this, key },
          onUpdate: cardStarted
            ? (update) => cardStream.push(progressText(update, t))
            : undefined,
          onInteraction: (interaction) => this.#handleInteraction(interaction, {
            t,
            key,
            actor: sender,
            sessionWebhook,
            requiresMention: String(message.conversationType) === '2',
          }),
          onInteractionResolved: (resolution) => this.#handleInteractionResolved(resolution),
        },
      });
      const answerText = typeof answer === 'string' && answer.trim()
        ? answer
        : artifacts.length > 0 ? t('artifact.generated') : answer;
      let textDeliveryError = null;
      let textReceipt = null;
      let streamed = false;
      try {
        streamed = cardStarted && await cardStream.finish(answerText);
        if (streamed) {
          textReceipt = createDeliveryReceipt({
            deliveryId: messageId,
            presentation: 'dingtalk-card',
          });
        } else {
          textReceipt = createDeliveryReceipt({
            deliveryId: messageId,
            presentation: 'dingtalk-text',
            providerMessageIds: await this.#send(sessionWebhook, answerText),
          });
        }
      } catch (error) {
        textDeliveryError = error;
      }
      const delivery = await this.#deliverArtifacts(
        fileTarget(message, sender, this.#clientId),
        sessionWebhook,
        messageId,
        artifacts,
        textReceipt,
        t,
      );
      if (textDeliveryError && !delivery.userVisible) throw textDeliveryError;
      increment(this.#status, 'messagesReplied');
      this.#status.lastReplyAt = new Date().toISOString();
      this.#status.lastError = null;
      return delivery.receipt;
    } catch (error) {
      if (error?.code === 'turn-stopped') {
        if (cardStarted) await cardStream.finish(t('bridge.stopped')).catch(() => undefined);
        return;
      }
      if (this.#signal?.aborted) return;
      this.#status.lastError = t('bridge.error.messageFailed', { channel: CHANNEL_LABEL });
      this.#logger.error?.(
        '[dsh-dingtalk] failed to process an inbound message',
        safeErrorDiagnostic(error),
      );
      try {
        const errorText = dingtalkImageErrorUserMessage(error, t) ?? t('bridge.messageFailed');
        const streamed = cardStarted && await cardStream.finish(errorText);
        if (!streamed) await this.#send(sessionWebhook, errorText);
      } catch {
        this.#logger.error?.('[dsh-dingtalk] failed to send the safe error reply');
      }
    } finally {
      await this.#cancelPendingInteraction(key);
      await this.#approvals.closeRoute(key);
    }
  }

  async #processInteractionReply(message, messageId, sender, key, expected) {
    const t = this.#translatorFor(key, message);
    this.#signal?.throwIfAborted();
    const current = this.#pendingInteractions.get(key);
    const claimed = expected.claimedReplyMessageId === messageId;
    if (!current || current !== expected || current.submitting) {
      if (claimed && (!current || current !== expected)) {
        return this.#discardResolvedInteractionReply(message, messageId, key);
      }
      return this.#enqueueMessage(message, messageId, sender, key, { releaseMessageId: false });
    }
    if (this.#state.hasSeen(messageId)) return;
    await this.#state.markSeen(messageId);
    increment(this.#status, 'messagesReceived');
    this.#status.lastMessageAt = new Date().toISOString();

    if (String(message.conversationType) === '2' && message.isInAtList !== true) {
      increment(this.#status, 'messagesIgnored');
      return;
    }

    let sessionWebhook;
    try {
      sessionWebhook = normalizeDingtalkSessionWebhook(message.sessionWebhook);
    } catch {
      increment(this.#status, 'messagesRejected');
      this.#status.lastRejectedAt = new Date().toISOString();
      this.#status.lastError = t('bridge.error.noSafeReplyTarget', { channel: CHANNEL_LABEL });
      return;
    }

    const text = message?.msgtype === 'text' ? nonEmptyString(message?.text?.content) : null;
    if (!text) {
      try {
        await this.#send(sessionWebhook, t('bridge.answerWithText'));
      } catch {
        this.#logger.error?.('[dsh-dingtalk] failed to reject a non-text interaction reply');
      }
      return;
    }

    const pending = this.#pendingInteractions.get(key);
    if (!pending || pending !== expected || pending.submitting) {
      if (claimed && (!pending || pending !== expected)) {
        try {
          await this.#send(sessionWebhook, t('bridge.interactionResolved'));
        } catch {
          this.#logger.error?.('[dsh-dingtalk] failed to send an expired interaction notice');
        }
        return;
      }
      return this.#enqueueMessage(message, messageId, sender, key, {
        releaseMessageId: false,
        alreadyRecorded: true,
      });
    }
    pending.sessionWebhook = sessionWebhook;
    if (pending.needsPresentation) {
      try {
        await this.#presentInteraction(pending);
      } catch {
        this.#status.lastError = t('bridge.error.interactionSendFailed', { channel: CHANNEL_LABEL });
        this.#logger.error?.('[dsh-dingtalk] failed to retry an interaction question');
        pending.interaction.reconnect?.();
      }
      return;
    }
    const question = pending.questions[pending.index];
    if (!question) return;

    pending.answers.push(harnessAnswerForQuestion(question, text));
    pending.index += 1;
    if (pending.index < pending.questions.length) {
      if (pending.claimedReplyMessageId === messageId) {
        pending.claimedReplyMessageId = null;
      }
      pending.needsPresentation = true;
      try {
        await this.#presentInteraction(pending);
      } catch {
        this.#status.lastError = t('bridge.error.interactionSendFailed', { channel: CHANNEL_LABEL });
        this.#logger.error?.('[dsh-dingtalk] failed to send the next interaction question');
        pending.interaction.reconnect?.();
      }
      return;
    }

    pending.submitting = true;
    try {
      await pending.interaction.respond({
        ok: true,
        value: {
          sessionId: pending.sessionId,
          answer: { answers: pending.answers },
        },
      });
      this.#clearPendingInteraction(key, pending.interactionId);
      this.#status.lastError = null;
    } catch (error) {
      if (this.#signal?.aborted) return;
      if (this.#pendingInteractions.get(key) !== pending) return;
      if (error?.code === 'interaction-not-pending') {
        this.#clearPendingInteraction(key, pending.interactionId);
        try {
          await this.#send(sessionWebhook, t('bridge.interactionResolved'));
        } catch {
          this.#logger.error?.('[dsh-dingtalk] failed to send an expired interaction notice');
        }
        return;
      }
      pending.submitting = false;
      pending.answers.pop();
      pending.index -= 1;
      this.#status.lastError = t('bridge.error.answerSubmitFailed');
      this.#logger.error?.('[dsh-dingtalk] failed to answer a Harness interaction');
      try {
        await this.#send(sessionWebhook, t('bridge.answerSubmitRetry'));
      } catch {
        this.#logger.error?.('[dsh-dingtalk] failed to send an interaction retry notice');
      }
    }
  }

  async #handleInteraction(interaction, {
    t = defaultTranslator,
    key,
    actor,
    sessionWebhook,
    requiresMention,
  }) {
    if (await this.#approvals.handleRequested(interaction, {
      key,
      actor,
      requiresMention,
      send: (text) => this.#send(sessionWebhook, text),
    })) return;

    // Approval requests return above; the existing question state machine stays unchanged.
    if (interaction?.kind !== 'question') return;
    const questions = interaction?.payload?.questions;
    const interactionId = typeof interaction?.interactionId === 'string'
      ? interaction.interactionId
      : interaction?.rpcId;
    if (typeof interaction.rpcId !== 'string'
      || typeof interactionId !== 'string'
      || typeof interaction.sessionId !== 'string'
      || !Array.isArray(questions)
      || questions.length === 0
      || questions.some((question) => !validHarnessQuestion(question))) {
      this.#logger.warn?.('[dsh-dingtalk] ignored an invalid Harness question interaction');
      return;
    }

    if (interaction.recovered === true) {
      await interaction.respond({
        ok: false,
        error: {
          code: 'cancelled',
          message: 'DingTalk safely cancelled an interaction left by an earlier client.',
          details: {},
        },
      });
      try {
        await this.#send(sessionWebhook, t('bridge.recoveredInteractionCancelled'));
      } catch {
        this.#logger.error?.('[dsh-dingtalk] failed to send an interaction recovery notice');
      }
      return;
    }

    const existing = this.#pendingInteractions.get(key);
    if (existing?.interactionId === interactionId) {
      existing.interaction = interaction;
      if (existing.needsPresentation) await this.#presentInteraction(existing);
      return;
    }
    if (this.#interactionKeys.has(interactionId)) return;
    if (existing) {
      this.#logger.warn?.('[dsh-dingtalk] cancelled a second pending Harness question');
      await interaction.respond({
        ok: false,
        error: {
          code: 'cancelled',
          message: 'DingTalk is already handling another user interaction.',
          details: {},
        },
      });
      return;
    }

    const pending = {
      kind: 'question',
      interactionId,
      sessionId: interaction.sessionId,
      interaction,
      actor,
      requiresMention,
      questions,
      answers: [],
      index: 0,
      sessionWebhook,
      queue: null,
      claimedReplyMessageId: null,
      submitting: false,
      needsPresentation: true,
    };
    this.#pendingInteractions.set(key, pending);
    this.#interactionKeys.set(pending.interactionId, key);
    await this.#presentInteraction(pending);
  }

  async #handleInteractionResolved(resolution) {
    if (await this.#approvals.handleResolved(resolution)) return;
    const interactionId = resolution?.interactionId;
    if (resolution?.kind !== 'question' || typeof interactionId !== 'string') return;
    const key = this.#interactionKeys.get(interactionId);
    if (!key) return;
    this.#clearPendingInteraction(key, interactionId);
  }

  async #presentInteraction(pending) {
    const question = pending.questions[pending.index];
    if (!question) return;
    await this.#send(
      pending.sessionWebhook,
      harnessQuestionText(
        question,
        pending.index,
        pending.questions.length,
        { requiresMention: pending.requiresMention },
      ),
    );
    pending.needsPresentation = false;
  }

  async #discardResolvedInteractionReply(message, messageId, key) {
    const t = this.#translatorFor(key, message);
    if (this.#state.hasSeen(messageId)) return;
    await this.#state.markSeen(messageId);
    increment(this.#status, 'messagesReceived');
    this.#status.lastMessageAt = new Date().toISOString();
    let sessionWebhook;
    try {
      sessionWebhook = normalizeDingtalkSessionWebhook(message.sessionWebhook);
    } catch {
      increment(this.#status, 'messagesRejected');
      this.#status.lastRejectedAt = new Date().toISOString();
      return;
    }
    try {
      await this.#send(sessionWebhook, t('bridge.interactionResolved'));
    } catch {
      this.#logger.error?.('[dsh-dingtalk] failed to send an expired interaction notice');
    }
  }

  #takePendingInteraction(key, interactionId) {
    const pending = this.#pendingInteractions.get(key);
    if (!pending
      || (interactionId !== undefined && pending.interactionId !== interactionId)) return null;
    this.#pendingInteractions.delete(key);
    this.#interactionKeys.delete(pending.interactionId);
    return pending;
  }

  #clearPendingInteraction(key, interactionId) {
    return this.#takePendingInteraction(key, interactionId) !== null;
  }

  async #cancelPendingInteraction(key) {
    const pending = this.#takePendingInteraction(key);
    if (!pending || pending.kind !== 'question') return;
    try {
      await pending.interaction.respond({
        ok: false,
        error: {
          code: 'cancelled',
          message: 'The DingTalk interaction ended before the user answered.',
          details: {},
        },
      }, { signal: AbortSignal.timeout(5_000) });
    } catch (error) {
      if (error?.code !== 'interaction-not-pending') {
        this.#logger.warn?.('[dsh-dingtalk] failed to cancel a pending Harness interaction');
      }
    }
  }

  #refreshPendingSenders() {
    if (typeof this.#state.pendingSenders === 'function') {
      this.#status.pendingSenders = this.#state.pendingSenders();
    }
  }

  async #send(sessionWebhook, text) {
    const providerMessageIds = [];
    for (const chunk of splitDingtalkText(text, this.#maxMessageChars)) {
      this.#signal?.throwIfAborted();
      const result = await this.#api.sendText({
        clientId: this.#clientId,
        clientSecret: this.#clientSecret,
        sessionWebhook,
        text: chunk,
        signal: this.#signal,
      });
      providerMessageIds.push(...providerMessageIdsFor(result));
    }
    return providerMessageIds;
  }

  async #deliverArtifacts(target, sessionWebhook, replyTo, artifacts, baseReceipt, t = defaultTranslator) {
    const receipts = baseReceipt ? [baseReceipt] : [];
    let userVisible = Boolean(baseReceipt);
    for (const artifact of artifacts) {
      this.#signal?.throwIfAborted();
      try {
        if (typeof this.#api.sendFile !== 'function') {
          const unavailable = new Error('DingTalk file delivery is unavailable');
          unavailable.code = 'artifact-provider-unavailable';
          throw unavailable;
        }
        const file = await materializeOutboundArtifact(artifact, {
          signal: this.#signal,
        });
        const result = await this.#api.sendFile({
          clientId: this.#clientId,
          clientSecret: this.#clientSecret,
          target,
          file,
          signal: this.#signal,
        });
        receipts.push(createDeliveryReceipt({
          deliveryId: file.deliveryKey,
          presentation: 'dingtalk-file',
          providerMessageIds: dingtalkFileProviderIds(result),
          artifacts: [{ artifactId: file.artifactId, outcome: 'sent' }],
        }));
        userVisible = true;
        this.#status.artifactsSent = (this.#status.artifactsSent ?? 0) + 1;
      } catch (error) {
        if (this.#signal?.aborted) throw error;
        this.#status.artifactSendErrors = (this.#status.artifactSendErrors ?? 0) + 1;
        this.#logger.warn?.(
          `[dsh-dingtalk] result file delivery failed (${error?.code ?? 'unknown'})`,
        );
        let noticeSent = false;
        const providerMessageIds = await this.#send(
          sessionWebhook,
          artifactFailureText(artifact?.fileName, error, t),
        ).then((ids) => {
          noticeSent = true;
          return ids;
        }).catch(() => []);
        const failureReceipt = createArtifactFailureReceipt({
          artifactId: artifact?.artifactId ?? 'unknown',
          deliveryId: artifact?.deliveryKey ?? artifact?.artifactId ?? 'unknown',
          error,
          providerMessageIds,
        });
        receipts.push(failureReceipt);
        if (noticeSent || failureReceipt.artifacts[0]?.outcome === 'unknown') userVisible = true;
      } finally {
        releaseOutboundArtifact(artifact);
      }
    }
    const receipt = receipts.length === 0
      ? null
      : receipts.length === 1
        ? receipts[0]
        : mergeDeliveryReceipts({
            deliveryId: replyTo,
            presentation: baseReceipt ? 'dingtalk-text-and-files' : 'dingtalk-files',
            receipts,
          });
    return { receipt, userVisible };
  }
}

export const DingTalkHarnessBridge = DingtalkHarnessBridge;
export const createDingTalkBridgeStatus = createDingtalkBridgeStatus;
