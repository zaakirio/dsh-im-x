import * as React from 'react';

import { WeixinLogoGlyph } from '../../channel-logos.js';
import { QrActionIcon } from '../../credential-binding.js';
import { h, t } from '../../i18n.js';
import {
  WEIXIN_ENDPOINTS,
  WEIXIN_RPC_CHANNEL,
  formatRemaining,
  normalizeProvisioning,
  normalizeSnapshot,
  presentError,
  safeQrSource,
  safeVerificationUrl,
  unwrapRpcResult,
} from './api.js';
import { createPollScheduler, useAnimationFrameScheduler } from '../../lifecycle.js';
import { WorkspaceEditor } from '../../workspace-editor.js';
import {
  AgentPresetCatalogContext,
  AgentPresetEditor,
  EMPTY_AGENT_PRESET_CATALOG,
} from '../../agent-preset.js';
import { useWorkspaceSnapshotFence } from '../../workspace-snapshot-fence.js';
import { BotStatusMeta, ChannelListHeading } from '../../channel-card-meta.js';
import { installWeixinStyles } from './styles.js';

const CHANNEL_LABEL = 'WeChat';

export const name = 'weixin-settings';
export const inject = ['slots', 'connection'];

const Button = React.forwardRef(function Button(
  { children, kind = 'secondary', className = '', ...props },
  ref,
) {
  return h('button', {
    ...props,
    ref,
    type: 'button',
    className: `dxw-button ${className}`.trim(),
    'data-kind': kind,
  }, children);
});

function Heading({ totals, adding, busy, onAdd, addButtonRef }) {
  return h('div', { className: 'dxw-heading' },
    h('div', { className: 'dxw-tools' },
      h(Button, {
        kind: 'primary',
        className: 'dim-scanButton',
        onClick: onAdd,
        disabled: adding || busy,
        ref: addButtonRef,
        'aria-label': t('ui.weixin.connectWechatBotByQrCode'),
      }, h(QrActionIcon), adding ? t('ui.dingtalk.connecting') : t('ui.dingtalk.scanQrCode')),
      totals.configured > 0
        ? h('div', { className: 'dxw-badge dim-onlineBadge' },
            h('span', null, t('ui.common.onlineCount', { connected: totals.connected, configured: totals.configured })))
        : null,
    ),
  );
}

function LoadingView() {
  return h('div', { className: 'dxw-card dxw-loading dim-surfaceCard dim-loadingView', 'aria-busy': 'true' },
    h('div', { className: 'dxw-spinner dim-spinner' }),
    h('span', null, t('ui.weixin.loadingWechatConnectionStatus')));
}

function EmptyView({ onStart, busy }) {
  return h('div', { className: 'dxw-card dim-surfaceCard' },
    h('div', { className: 'dxw-cardBody dxw-empty dim-surfaceBody dim-emptyView' },
      h('div', { className: 'dim-emptyCopy' },
        h('div', { className: 'dxw-stateLabel dim-stateLabel' },
          h('span', { className: 'dxw-dot dim-stateDot' }), h('span', null, t('ui.weixin.noWechatAccountConnectedYet'))),
        h('h3', null, t('ui.weixin.scanOnceToUseHarnessIn')),
        h('p', null, t('ui.weixin.theQrCodeIsIssuedBy')),
        h('div', { className: 'dxw-actions dim-viewActions' },
          h(Button, { kind: 'primary', onClick: onStart, disabled: busy },
            busy ? t('ui.dingtalk.generatingQrCode') : t('ui.weixin.generateWechatQrCode'))),
      ),
      h('div', { className: 'dxw-logo dim-emptyBrand', 'aria-hidden': 'true' }, h(WeixinLogoGlyph, { size: 64 })),
    ));
}

function QrPanel({ provision, now, busy, onRefresh, onCancel }) {
  const [imageFailed, setImageFailed] = React.useState(false);
  const source = safeQrSource(provision.qrCodeDataUrl);
  const href = safeVerificationUrl(provision.verificationUrl);
  const remaining = Math.max(0, provision.expiresAt - now);
  const expired = remaining === 0 || provision.status === 'expired';
  const duration = Math.max(1, provision.durationMs ?? 5 * 60_000);
  const progress = Math.round(Math.min(1, remaining / duration) * 100);
  React.useEffect(() => setImageFailed(false), [source]);

  return h('div', { className: 'dxw-card dim-surfaceCard' },
    h('div', { className: 'dxw-cardBody dxw-qrLayout dim-surfaceBody dim-qrLayout' },
      h('div', { className: 'dxw-qrColumn dim-qrColumn' },
        h('div', { className: 'dxw-qrFrame dim-qrFrame' },
          source && !imageFailed
            ? h('img', {
                src: source,
                alt: t('ui.weixin.oneTimeQrCodeForConnecting'),
                onError: () => setImageFailed(true),
              })
            : h('div', { className: 'dxw-qrFallback dim-qrFallback' }, t('ui.weixin.theQrCodeIsNotReady')),
          expired ? h('div', { className: 'dxw-expired dim-qrExpired' }, t('ui.common.qrExpiredRegenerate')) : null,
        ),
        h('div', { className: 'dxw-countdown dim-countdown' },
          h('div', { className: 'dim-countdownTop' }, h('span', null, t('ui.dingtalk.qrCodeExpiresIn')), h('strong', null, formatRemaining(remaining))),
          h('div', { className: 'dxw-progress dim-progress', 'aria-hidden': 'true' },
            h('span', { style: { '--dxw-progress': `${progress}%` } })),
        )),
      h('div', { className: 'dxw-qrCopy dim-qrCopy' },
        h('div', { className: 'dxw-stateLabel dim-stateLabel' },
          h('span', { className: 'dxw-dot dim-stateDot', 'data-tone': provision.status === 'scanned' ? 'success' : 'warning' }),
          h('span', null, provision.status === 'scanned' ? t('ui.weixin.scannedConfirmOnYourPhone') : t('ui.weixin.waitingForWechatScan'))),
        h('h3', null, expired ? t('ui.dingtalk.qrCodeExpired') : t('ui.weixin.scanWithWechatOnYourPhone')),
        h('p', null, t('ui.weixin.reviewAndConfirmAuthorizationOnYour')),
        h('ol', { className: 'dxw-steps dim-steps' },
          h('li', null, t('ui.weixin.openWechatOnYourPhoneAnd')),
          h('li', null, t('ui.weixin.confirmTheBotConnectionInWechat')),
          h('li', null, t('ui.weixin.keepThisPageOpenUntilLong'))),
        h('div', { className: 'dxw-actions dim-viewActions' },
          expired
            ? h(Button, { kind: 'primary', onClick: onRefresh, disabled: busy }, t('ui.dingtalk.generateANewQrCode2'))
            : null,
          href ? h('a', {
            className: 'dxw-button', href, target: '_blank', rel: 'noopener noreferrer',
          }, t('ui.weixin.openAlternateLink')) : null,
          !expired ? h(Button, { onClick: onRefresh, disabled: busy }, t('ui.dingtalk.getAnotherQrCode')) : null,
          h(Button, { onClick: onCancel, disabled: busy }, t('ui.dingtalk.cancel'))),
      ),
    ));
}

function VerificationPanel({ provision, busy, onSubmit, onCancel }) {
  const [code, setCode] = React.useState('');
  const valid = /^\d{4,8}$/.test(code);
  React.useEffect(() => setCode(''), [provision.attemptId]);
  return h('div', { className: 'dxw-card dim-surfaceCard' },
    h('form', {
      className: 'dxw-verify dim-specialView',
      onSubmit: (event) => {
        event.preventDefault();
        if (valid && !busy) onSubmit(code);
      },
    },
    h('div', { className: 'dxw-stateLabel' },
      h('span', { className: 'dxw-dot', 'data-tone': 'warning' }), h('span', null, t('ui.weixin.pairingCodeRequired'))),
    h('h3', null, t('ui.weixin.enterTheNumberShownInWechat')),
    h('p', null, t('ui.weixin.thisIsAnAdditionalWechatConfirmation')),
    h('div', { className: 'dxw-codeRow' },
      h('input', {
        className: 'dxw-input',
        value: code,
        inputMode: 'numeric',
        autoComplete: 'one-time-code',
        maxLength: 8,
        'aria-label': t('ui.weixin.wechatPairingCode'),
        onChange: (event) => setCode(event.target.value.replace(/\D/g, '').slice(0, 8)),
        autoFocus: true,
      }),
      h('button', {
        type: 'submit',
        className: 'dxw-button',
        'data-kind': 'primary',
        disabled: !valid || busy,
      }, busy ? t('ui.weixin.verifying') : t('ui.weixin.continueConnecting'))),
    h(Button, { onClick: onCancel, disabled: busy }, t('ui.weixin.cancelSetup'))));
}

function ProgressPanel({ scanned, onCancel, busy }) {
  return h('div', { className: 'dxw-card dxw-loading dim-surfaceCard dim-loadingView', 'aria-busy': 'true' },
    h('div', { className: 'dxw-spinner dim-spinner' }),
    h('h3', null, scanned ? t('ui.weixin.confirmedInWechatStartingTheMessage') : t('ui.weixin.preparingWechatQrCode')),
    h('p', null, scanned ? t('ui.weixin.savingCredentialsAndVerifyingTheWechat') : t('ui.weixin.contactingTheWechatIlinkService')),
    onCancel ? h('div', { className: 'dxw-actions dim-viewActions', style: { justifyContent: 'center', marginTop: 14 } },
      h(Button, { onClick: onCancel, disabled: busy }, t('ui.dingtalk.cancel'))) : null);
}

function ProvisionError({ provision, busy, onRetry, onClose }) {
  const error = provision.error ?? { code: 'WEIXIN_PROVISION_FAILED', message: t('ui.weixin.wechatSetupDidNotComplete') };
  return h('div', { className: 'dxw-card dim-surfaceCard' },
    h('div', { className: 'dxw-error dim-inlineError', role: 'alert' },
      h('h3', null, provision.status === 'expired' ? t('ui.dingtalk.qrCodeExpired2') : t('ui.common.notBound', { channel: CHANNEL_LABEL })),
      h('p', null, error.message),
      h('span', { className: 'dxw-errorCode' }, error.code),
      h('div', { className: 'dxw-actions dim-viewActions' },
        h(Button, { kind: 'primary', onClick: onRetry, disabled: busy }, t('ui.dingtalk.generateANewQrCode2')),
        h(Button, { onClick: onClose, disabled: busy }, t('ui.dingtalk.close')))));
}

function checkedTime(timestamp) {
  if (!timestamp) return t('ui.dingtalk.notCheckedYet');
  try {
    return new Intl.DateTimeFormat('zh-CN', {
      hour: '2-digit', minute: '2-digit', second: '2-digit',
    }).format(new Date(timestamp));
  } catch {
    return t('ui.dingtalk.justNow');
  }
}

export function AccountCard({
  account,
  busy,
  feedback,
  removing,
  onReconnect,
  onWorkspaceSave,
  onAgentPresetSave,
  onRequestRemove,
  onConfirmRemove,
  onCancelRemove,
}) {
  const state = busy === 'reconnect' ? 'connecting' : account.state;
  const tone = account.connected ? 'success' : state === 'error' ? 'error' : 'warning';
  const summary = account.error?.message ?? (account.connected ? null : account.health.summary);
  return h('article', { className: 'dxw-card dim-botCard', tabIndex: -1, 'data-bot-id': account.botId },
    h('div', { className: 'dxw-cardBody dim-botCardBody' },
      h('div', { className: 'dxw-accountTop dim-botCardTop' },
        h('div', { className: 'dxw-accountIdentity dim-botIdentity' },
          h('div', { className: 'dxw-avatar dim-botAvatar', 'aria-hidden': 'true' }, h(WeixinLogoGlyph, { size: 27 })),
          h('div', { className: 'dim-botName' }, h('h3', null, account.bot.name), h('p', null, account.bot.accountIdMasked))),
        h(BotStatusMeta, {
          className: 'dxw-health',
          dotClassName: 'dxw-dot',
          tone,
          stateLabel: account.connected ? t('ui.dingtalk.connected') : state === 'connecting' ? t('ui.dingtalk.connecting2') : t('ui.dingtalk.notConnected'),
          lastCheckedAt: account.health.lastCheckedAt,
          formatCheckedTime: checkedTime,
        })),
      h(WorkspaceEditor, {
        workspace: account.workspace,
        disabled: Boolean(busy),
        onSave: onWorkspaceSave,
      }),
      h(AgentPresetEditor, {
        agentPreset: account.agentPreset,
        disabled: Boolean(busy),
        onSave: onAgentPresetSave,
      }),
      h('div', { className: 'dxw-accountFooter dim-cardFooter' },
        h('div', { className: 'dim-cardFooterLayout' },
          h('div', { className: 'dxw-actions dim-cardActions' },
            h(Button, { className: 'dim-cardAction', onClick: onReconnect, disabled: Boolean(busy) },
              busy === 'reconnect' ? t('ui.dingtalk.checking') : account.connected ? t('ui.dingtalk.checkConnection') : t('ui.dingtalk.reconnect')),
            h(Button, { className: 'dim-cardAction', kind: 'danger', onClick: onRequestRemove, disabled: Boolean(busy) }, t('ui.dingtalk.removeConnection2'))),
          summary ? h('div', { className: 'dxw-summary dim-cardSummary' }, summary) : null,
          account.lastMessageError ? h('div', {
            className: 'dxw-summary dim-cardSummary',
            role: 'status',
          }, t('ui.common.lastMessageFailed', { reason: account.lastMessageError.message })) : null,
          feedback ? h('div', {
            className: 'dxw-summary dim-cardFeedback',
            role: 'status',
            'aria-live': 'polite',
          }, feedback) : null))),
    removing ? h('div', { className: 'dxw-confirm dim-confirm', role: 'alertdialog' },
      h('strong', null, t('ui.weixin.removeThisWechatAccountFromHarness')),
      h('p', null, t('ui.weixin.thisStopsTheMessageConnectionAnd')),
      h('div', { className: 'dxw-actions dim-viewActions' },
        h(Button, { onClick: onCancelRemove, disabled: busy === 'delete' }, t('ui.weixin.keepAccount')),
        h(Button, { kind: 'danger', onClick: onConfirmRemove, disabled: busy === 'delete' },
          busy === 'delete' ? t('ui.dingtalk.removing') : t('ui.weixin.remove'))))
      : null);
}

function AccountList(props) {
  return h('section', { className: 'dim-listSection' },
    h(ChannelListHeading, {
      className: 'dxw-listHeading',
      title: t('ui.weixin.connectedWechatAccounts'),
      connectionLabel: t('ui.weixin.ilinkLongPolling'),
    }),
    h('ul', { className: 'dxw-list dim-botList' }, props.bots.map((account) => h('li', { key: account.botId },
      h(AccountCard, {
        account,
        busy: props.busyByBot[account.botId],
        feedback: props.feedbackByBot[account.botId],
        removing: props.removeTarget === account.botId,
        onReconnect: () => props.onReconnect(account),
        onWorkspaceSave: (workspace) => props.onWorkspaceSave(account, workspace),
        onAgentPresetSave: (agentPreset) => props.onAgentPresetSave(account, agentPreset),
        onRequestRemove: () => props.onRequestRemove(account),
        onConfirmRemove: () => props.onConfirmRemove(account),
        onCancelRemove: props.onCancelRemove,
      })))));
}

const EMPTY_TOTALS = Object.freeze({ configured: 0, connected: 0 });

export function mergeWeixinProvisioningSnapshot(
  current,
  incoming,
  { restoreProvisioning = false } = {},
) {
  if (!incoming || (!current && !restoreProvisioning)) return current;
  if (current && current.attemptId !== incoming.attemptId) return current;
  return {
    ...current,
    ...incoming,
    durationMs: current?.durationMs ?? 5 * 60_000,
  };
}

export function WeixinSettingsTab({ rpcCall }) {
  const [model, setModel] = React.useState({
    phase: 'loading', bots: [], totals: EMPTY_TOTALS, revision: 0, error: null,
    agentPresetCatalog: EMPTY_AGENT_PRESET_CATALOG,
  });
  const [provision, setProvision] = React.useState(null);
  const [busy, setBusy] = React.useState(false);
  const [busyByBot, setBusyByBot] = React.useState({});
  const [feedbackByBot, setFeedbackByBot] = React.useState({});
  const [removeTarget, setRemoveTarget] = React.useState(null);
  const [notice, setNotice] = React.useState('');
  const [now, setNow] = React.useState(() => Date.now());
  const addButtonRef = React.useRef(null);
  const mountedRef = React.useRef(true);
  const workspaceFence = useWorkspaceSnapshotFence();
  const scheduleAnimationFrame = useAnimationFrameScheduler();

  React.useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  const announce = React.useCallback((value) => {
    setNotice('');
    scheduleAnimationFrame(() => {
      if (value) setNotice(value);
    }, 'announcement');
  }, [scheduleAnimationFrame]);
  const invoke = React.useCallback(async (endpoint, payload = {}, signal) => {
    return unwrapRpcResult(await rpcCall(endpoint, payload, signal));
  }, [rpcCall]);
  const loadStatus = React.useCallback(async ({
    signal,
    silent = false,
    restoreProvisioning = false,
  } = {}) => {
    const workspaceVersion = workspaceFence.beginStatus();
    if (workspaceVersion === null || !mountedRef.current) return undefined;
    if (!silent) setModel((current) => ({ ...current, phase: 'loading', error: null }));
    try {
      const snapshot = normalizeSnapshot(await invoke(WEIXIN_ENDPOINTS.status, {}, signal));
      if (signal?.aborted || !mountedRef.current
        || !workspaceFence.canCommitStatus(workspaceVersion)) return undefined;
      setModel({
        phase: 'ready', bots: snapshot.bots, totals: snapshot.totals,
        revision: snapshot.revision, error: null,
        agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG,
      });
      if (snapshot.provisioning) {
        setProvision((current) => mergeWeixinProvisioningSnapshot(
          current,
          snapshot.provisioning,
          { restoreProvisioning },
        ));
      }
      return snapshot;
    } catch (error) {
      if (signal?.aborted || error?.name === 'AbortError' || !mountedRef.current
        || !workspaceFence.canCommitStatus(workspaceVersion)) return undefined;
      setModel((current) => ({
        ...current,
        phase: silent && current.phase === 'ready' ? 'ready' : 'error',
        error: presentError(error),
      }));
      return undefined;
    }
  }, [invoke, workspaceFence]);

  React.useEffect(() => {
    const controller = new AbortController();
    void loadStatus({ signal: controller.signal, restoreProvisioning: true });
    return () => controller.abort();
  }, [loadStatus]);

  React.useEffect(() => {
    if (model.phase !== 'ready') return undefined;
    const controller = new AbortController();
    let running = false;
    const timer = window.setInterval(async () => {
      if (running) return;
      running = true;
      await loadStatus({
        signal: controller.signal,
        silent: true,
        restoreProvisioning: false,
      });
      running = false;
    }, 15_000);
    return () => {
      controller.abort();
      window.clearInterval(timer);
    };
  }, [loadStatus, model.phase]);

  React.useEffect(() => {
    if (!provision || !['pending', 'scanned'].includes(provision.status)) return undefined;
    const timer = window.setInterval(() => setNow(Date.now()), 1_000);
    return () => window.clearInterval(timer);
  }, [provision?.attemptId, provision?.status]);

  const startProvisioning = React.useCallback(async ({ replace = false } = {}) => {
    setBusy(true);
    try {
      if (replace && provision?.attemptId) {
        await invoke(WEIXIN_ENDPOINTS.cancelProvisioning, { attemptId: provision.attemptId });
      }
      setProvision({ status: 'starting' });
      const started = normalizeProvisioning(await invoke(WEIXIN_ENDPOINTS.beginProvisioning, { locale: 'zh-CN' }));
      setNow(Date.now());
      setProvision({ ...started, durationMs: Math.max(1, started.expiresAt - Date.now()) });
      announce(t('ui.weixin.wechatQrCodeGeneratedScanIt'));
    } catch (error) {
      setProvision({
        status: 'failed',
        error: presentError(error),
        ...(provision?.attemptId ? { attemptId: provision.attemptId } : {}),
      });
    } finally {
      setBusy(false);
    }
  }, [announce, invoke, provision?.attemptId]);

  const cancelProvisioning = React.useCallback(async () => {
    setBusy(true);
    try {
      if (provision?.attemptId && !['failed', 'expired', 'cancelled'].includes(provision.status)) {
        await invoke(WEIXIN_ENDPOINTS.cancelProvisioning, { attemptId: provision.attemptId });
      }
      setProvision(null);
      announce(t('ui.weixin.wechatSetupWasCancelled'));
      scheduleAnimationFrame(() => addButtonRef.current?.focus(), 'focus');
    } catch (error) {
      setProvision((current) => ({ ...current, status: 'failed', error: presentError(error) }));
    } finally {
      setBusy(false);
    }
  }, [announce, invoke, provision?.attemptId, provision?.status, scheduleAnimationFrame]);

  const submitVerification = React.useCallback(async (verifyCode) => {
    if (!provision?.attemptId) return;
    setBusy(true);
    try {
      const next = normalizeProvisioning(await invoke(WEIXIN_ENDPOINTS.submitVerification, {
        attemptId: provision.attemptId,
        verifyCode,
      }));
      setProvision((current) => ({ ...current, ...next }));
      announce(t('ui.weixin.pairingCodeSubmittedWaitingForWechat'));
    } catch (error) {
      setProvision((current) => ({ ...current, status: 'failed', error: presentError(error) }));
    } finally {
      setBusy(false);
    }
  }, [announce, invoke, provision?.attemptId]);

  React.useEffect(() => {
    const attemptId = provision?.attemptId;
    if (!attemptId || !['pending', 'scanned', 'connecting'].includes(provision.status)) return undefined;
    const controller = new AbortController();
    const scheduler = createPollScheduler({
      setTimeoutFn: (callback, delayMs) => window.setTimeout(callback, delayMs),
      clearTimeoutFn: (timer) => window.clearTimeout(timer),
    });
    const poll = async () => {
      try {
        const result = normalizeProvisioning(await invoke(
          WEIXIN_ENDPOINTS.pollProvisioning,
          { attemptId },
          controller.signal,
        ));
        if (scheduler.disposed) return;
        if (result.status === 'connected') {
          const snapshot = await loadStatus({
            signal: controller.signal,
            silent: true,
            restoreProvisioning: false,
          });
          if (scheduler.disposed) return;
          const account = snapshot?.bots.find((bot) => bot.botId === result.botId);
          if (!account?.connected) {
            setProvision((current) => current?.attemptId === attemptId
              ? { ...current, ...result, status: 'connecting' }
              : current);
            scheduler.schedule(poll, result.pollIntervalMs);
            return;
          }
          setProvision(null);
          announce(result.alreadyConnected
            ? t('ui.weixin.thisWechatAccountIsConnectedAnd')
            : t('ui.weixin.wechatIsConnectedAndReadyFor'));
          return;
        }
        setProvision((current) => current?.attemptId === attemptId
          ? { ...current, ...result, durationMs: current.durationMs }
          : current);
        if (['pending', 'scanned', 'connecting'].includes(result.status)) {
          scheduler.schedule(poll, result.pollIntervalMs);
        }
      } catch (error) {
        if (scheduler.disposed || error?.name === 'AbortError') return;
        setProvision((current) => current?.attemptId === attemptId
          ? { ...current, status: 'failed', error: presentError(error) }
          : current);
      }
    };
    scheduler.schedule(poll, provision.pollIntervalMs ?? 1_000);
    return () => {
      scheduler.dispose();
      controller.abort();
    };
  }, [announce, invoke, loadStatus, provision?.attemptId, provision?.status, provision?.pollIntervalMs]);

  const setBotBusy = React.useCallback((botId, value) => {
    setBusyByBot((current) => {
      const next = { ...current };
      if (value) next[botId] = value;
      else delete next[botId];
      return next;
    });
  }, []);

  const reconnect = React.useCallback(async (account) => {
    const snapshotVersion = workspaceFence.beginMutation();
    setBotBusy(account.botId, 'reconnect');
    setFeedbackByBot((current) => {
      const next = { ...current };
      delete next[account.botId];
      return next;
    });
    try {
      const snapshot = normalizeSnapshot(await invoke(
        WEIXIN_ENDPOINTS.reconnectBot,
        { botId: account.botId, sendTest: true },
      ));
      if (mountedRef.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        setModel((current) => ({
          ...current, bots: snapshot.bots, totals: snapshot.totals, revision: snapshot.revision,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? current.agentPresetCatalog,
        }));
      }
      const refreshed = snapshot.bots.find((bot) => bot.botId === account.botId);
      let feedback;
      if (!refreshed?.connected) {
        feedback = t('ui.common.stillOffline', { channel: CHANNEL_LABEL });
      } else if (snapshot.testMessage?.sent) {
        feedback = t('ui.weixin.wechatConnectionCheckCompletedAndThe');
      } else if (snapshot.testMessage?.code === 'test-target-unavailable') {
        feedback = t('ui.dingtalk.connectionCheckCompletedTheBotHas');
      } else if (snapshot.testMessage) {
        feedback = t('ui.weixin.wechatConnectionCheckCompletedButThe');
      } else {
        feedback = t('ui.common.connectionCheckDone', { channel: CHANNEL_LABEL });
      }
      if (mountedRef.current) {
        setFeedbackByBot((current) => ({ ...current, [account.botId]: feedback }));
      }
      announce(feedback);
    } catch {
      const feedback = t('ui.dingtalk.connectionCheckFailedTryAgainLater');
      if (mountedRef.current) {
        setFeedbackByBot((current) => ({ ...current, [account.botId]: feedback }));
      }
      announce(feedback);
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      setBotBusy(account.botId, null);
    }
  }, [announce, invoke, loadStatus, setBotBusy, workspaceFence]);

  const saveWorkspace = React.useCallback(async (account, workspace) => {
    const workspaceVersion = workspaceFence.beginMutation();
    setBotBusy(account.botId, 'workspace');
    try {
      const snapshot = normalizeSnapshot(await invoke(
        WEIXIN_ENDPOINTS.setWorkspace,
        { botId: account.botId, workspace },
      ));
      if (mountedRef.current && workspaceFence.canCommitMutation(workspaceVersion)) {
        setModel({
          phase: 'ready', bots: snapshot.bots, totals: snapshot.totals,
          revision: snapshot.revision, error: null,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG,
        });
      }
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      if (mountedRef.current) setBotBusy(account.botId, null);
    }
  }, [invoke, loadStatus, setBotBusy, workspaceFence]);

  const saveAgentPreset = React.useCallback(async (account, agentPreset) => {
    const snapshotVersion = workspaceFence.beginMutation();
    setBotBusy(account.botId, 'preset');
    try {
      const snapshot = normalizeSnapshot(await invoke(
        WEIXIN_ENDPOINTS.setAgentPreset,
        { botId: account.botId, agentPreset },
      ));
      if (mountedRef.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        setModel({
          phase: 'ready', bots: snapshot.bots, totals: snapshot.totals,
          revision: snapshot.revision, error: null,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG,
        });
      }
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      if (mountedRef.current) setBotBusy(account.botId, null);
    }
  }, [invoke, loadStatus, setBotBusy, workspaceFence]);

  const remove = React.useCallback(async (account) => {
    const snapshotVersion = workspaceFence.beginMutation();
    setBotBusy(account.botId, 'delete');
    try {
      const snapshot = normalizeSnapshot(await invoke(WEIXIN_ENDPOINTS.deleteBot, {
        botId: account.botId,
        confirm: true,
      }));
      if (mountedRef.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        setModel((current) => ({
          ...current, bots: snapshot.bots, totals: snapshot.totals, revision: snapshot.revision,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? current.agentPresetCatalog,
        }));
      }
      setRemoveTarget(null);
      announce(t('ui.weixin.theWechatAccountAndLocalCredentials'));
    } catch (error) {
      announce(t('ui.common.removalFailedReason', { reason: presentError(error).message }));
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      setBotBusy(account.botId, null);
    }
  }, [announce, invoke, loadStatus, setBotBusy, workspaceFence]);

  let provisionView = null;
  if (provision?.status === 'starting') {
    provisionView = h(ProgressPanel, { busy });
  } else if (['pending', 'scanned'].includes(provision?.status)) {
    provisionView = h(QrPanel, {
      provision, now, busy,
      onRefresh: () => void startProvisioning({ replace: true }),
      onCancel: () => void cancelProvisioning(),
    });
  } else if (provision?.status === 'needs_verification') {
    provisionView = h(VerificationPanel, {
      provision, busy,
      onSubmit: (code) => void submitVerification(code),
      onCancel: () => void cancelProvisioning(),
    });
  } else if (provision?.status === 'connecting') {
    provisionView = h(ProgressPanel, {
      scanned: true, busy, onCancel: () => void cancelProvisioning(),
    });
  } else if (provision && ['failed', 'expired', 'cancelled'].includes(provision.status)) {
    provisionView = h(ProvisionError, {
      provision, busy,
      onRetry: () => void startProvisioning({ replace: Boolean(provision.attemptId) }),
      onClose: () => void cancelProvisioning(),
    });
  }

  return h(AgentPresetCatalogContext.Provider, {
    value: model.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG,
  }, h('section', { className: 'dxw-page dim-channelPage', 'aria-label': t('ui.weixin.wechatSettings') },
    h(Heading, {
      totals: model.totals,
      adding: Boolean(provision),
      busy,
      onAdd: () => void startProvisioning(),
      addButtonRef,
    }),
    h('div', { className: 'dxw-visuallyHidden', role: 'status', 'aria-live': 'polite' }, notice),
    model.error && model.phase === 'ready'
      ? h('div', { className: 'dxw-statusNotice dim-statusNotice' }, t('ui.common.statusRefreshFailed', { reason: model.error.message }))
      : null,
    model.phase === 'loading'
      ? h(LoadingView)
      : model.phase === 'error'
        ? h('div', { className: 'dxw-card dim-surfaceCard' },
            h('div', { className: 'dxw-error dim-inlineError' },
              h('h3', null, t('ui.weixin.couldNotLoadWechatStatus')),
              h('p', null, model.error?.message ?? t('ui.dingtalk.tryAgainLater')),
              h(Button, { onClick: () => void loadStatus() }, t('ui.dingtalk.reload'))))
        : h(React.Fragment, null,
            provisionView,
            model.bots.length === 0 && !provision
              ? h(EmptyView, { onStart: () => void startProvisioning(), busy })
              : null,
            model.bots.length > 0
              ? h(AccountList, {
                  bots: model.bots,
                  busyByBot,
                  feedbackByBot,
                  removeTarget,
                  onReconnect: (account) => void reconnect(account),
                  onWorkspaceSave: saveWorkspace,
                  onAgentPresetSave: saveAgentPreset,
                  onRequestRemove: (account) => setRemoveTarget(account.botId),
                  onConfirmRemove: (account) => void remove(account),
                  onCancelRemove: () => setRemoveTarget(null),
                })
              : null),
  ));
}

export function apply(ctx) {
  ctx.effect(() => installWeixinStyles(), 'weixin-settings: install client styles');
  const rpcCall = (endpoint, payload, signal) =>
    ctx.connection.rpc.call(WEIXIN_RPC_CHANNEL, endpoint, payload, signal);
  ctx.slots.inject('settings.plugins.tab', () => ctx.slots.register({
    name: 'settings.plugins.tab',
    id: 'weixin',
    order: 30,
    label: t('ui.weixin.wechat'),
    inject: () => ({ rpcCall }),
  }, WeixinSettingsTab));
}
