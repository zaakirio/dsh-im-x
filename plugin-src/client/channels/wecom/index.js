import * as React from 'react';

import { WecomLogoGlyph } from '../../channel-logos.js';
import { CredentialActionIcon, CredentialBindingPanel, QrActionIcon } from '../../credential-binding.js';
import { h, t } from '../../i18n.js';
import { WorkspaceEditor } from '../../workspace-editor.js';
import {
  AgentPresetCatalogContext,
  AgentPresetEditor,
  EMPTY_AGENT_PRESET_CATALOG,
} from '../../agent-preset.js';
import { useWorkspaceSnapshotFence } from '../../workspace-snapshot-fence.js';
import { BotStatusMeta, ChannelListHeading } from '../../channel-card-meta.js';
import { installDingtalkStyles } from '../dingtalk/styles.js';
import {
  WECOM_ENDPOINTS,
  WECOM_RPC_CHANNEL,
  formatRemaining,
  normalizeProvisioning,
  normalizeSnapshot,
  presentError,
  safeQrSource,
  unwrapRpcResult,
} from './api.js';
import { installWecomStyles } from './styles.js';

const CHANNEL_LABEL = 'WeCom';

const ACTIVE_STATES = new Set(['pending', 'refreshing', 'connecting']);

const Button = React.forwardRef(function Button({ children, kind = 'secondary', className = '', ...props }, ref) {
  return h('button', {
    ...props,
    ref,
    type: 'button',
    className: `ddt-button ${className}`.trim(),
    'data-kind': kind,
  }, children);
});

function checkedTime(value) {
  if (!value) return t('ui.dingtalk.notCheckedYet');
  try {
    return new Intl.DateTimeFormat('zh-CN', {
      hour: '2-digit', minute: '2-digit', second: '2-digit',
    }).format(new Date(value));
  } catch {
    return t('ui.dingtalk.justNow');
  }
}

function Heading({ totals, adding, busy, onAdd, onCredential, credentialOpen, addButtonRef }) {
  return h('div', { className: 'ddt-heading' },
    h('div', { className: 'ddt-tools' },
      h('div', { className: 'dim-bindActions' },
        h(Button, {
          kind: 'primary',
          className: 'dim-scanButton',
          onClick: onAdd,
          disabled: adding || busy,
          ref: addButtonRef,
          'aria-label': t('ui.wecom.connectWecomBotByQrCode'),
        }, h(QrActionIcon), adding ? t('ui.dingtalk.connecting') : t('ui.dingtalk.scanQrCode')),
        h(Button, {
          kind: 'credential',
          className: 'dim-credentialButton',
          onClick: onCredential,
          disabled: adding || busy,
          'aria-pressed': credentialOpen,
          'aria-label': t('ui.wecom.connectAWecomBotWithBot'),
        }, h(CredentialActionIcon), credentialOpen ? t('ui.dingtalk.hideCredentials') : t('ui.dingtalk.manualSetup'))),
      totals.configured > 0
        ? h('div', { className: 'ddt-badge dim-onlineBadge' },
            h('span', null, t('ui.common.onlineCount', { connected: totals.connected, configured: totals.configured })))
        : null));
}

function LoadingView() {
  return h('div', { className: 'ddt-card ddt-loading dim-surfaceCard dim-loadingView', 'aria-busy': 'true' },
    h('div', { className: 'ddt-spinner dim-spinner' }),
    h('span', null, t('ui.common.loadingStatus', { channel: CHANNEL_LABEL })));
}

function EmptyView({ busy, onStart }) {
  return h('div', { className: 'ddt-card dim-surfaceCard' },
    h('div', { className: 'ddt-cardBody ddt-empty dim-surfaceBody dim-emptyView' },
      h('div', { className: 'dim-emptyCopy' },
        h('div', { className: 'ddt-stateLabel dim-stateLabel' },
          h('span', { className: 'ddt-dot dim-stateDot' }), h('span', null, t('ui.wecom.noWecomBotConnectedYet'))),
        h('h3', null, t('ui.wecom.scanWithWecomToCreateAn')),
        h('p', null, t('ui.wecom.scanningIsCompletedOnTencentS')),
        h('div', { className: 'ddt-actions dim-viewActions' },
          h(Button, { kind: 'primary', onClick: onStart, disabled: busy },
            busy ? t('ui.dingtalk.generatingQrCode') : t('ui.wecom.generateWecomQrCode')))),
      h('div', { className: 'ddt-brandMark dim-emptyBrand dwecom-brand', 'aria-hidden': 'true' },
        h(WecomLogoGlyph, { size: 64 }))));
}

function QrPanel({ provision, now, busy, onRefresh, onCancel }) {
  const source = safeQrSource(provision.qrCodeDataUrl);
  const remaining = Math.max(0, provision.expiresAt - now);
  const duration = Math.max(1, provision.durationMs ?? 5 * 60_000);
  const progress = Math.round(Math.min(1, remaining / duration) * 100);
  const refreshing = provision.status === 'refreshing';
  return h('div', { className: 'ddt-card dim-surfaceCard' },
    h('div', { className: 'ddt-cardBody ddt-qrLayout dim-surfaceBody dim-qrLayout' },
      h('div', { className: 'ddt-qrColumn dim-qrColumn' },
        h('div', { className: 'ddt-qrFrame dim-qrFrame' },
          source ? h('img', { src: source, alt: t('ui.wecom.oneTimeQrCodeForConnecting') })
            : h('div', { className: 'ddt-qrFallback dim-qrFallback' },
                refreshing ? t('ui.qq.refreshingQrCode') : t('ui.qq.generatingQrCode'))),
        h('div', { className: 'ddt-countdown dim-countdown' },
          h('div', { className: 'ddt-countdownTop dim-countdownTop' },
            h('span', null, t('ui.qq.qrCodeExpiresIn')),
            h('strong', null, refreshing ? '--:--' : formatRemaining(remaining))),
          h('div', { className: 'ddt-progress dim-progress', style: { '--ddt-progress': `${progress}%` } }, h('span')))),
      h('div', { className: 'ddt-qrCopy dim-qrCopy' },
        h('div', { className: 'ddt-stateLabel dim-stateLabel' },
          h('span', { className: 'ddt-dot dim-stateDot', 'data-tone': 'warning' }),
          h('span', null, refreshing ? t('ui.qq.refreshingQrCode2') : t('ui.wecom.waitingForWecomScan'))),
        h('h3', null, t('ui.wecom.authorizeTheAiBotWithWecom')),
        h('p', null, t('ui.wecom.wecomWillCreateAnAiBot')),
        h('ol', { className: 'ddt-steps dim-steps' },
          h('li', null, t('ui.wecom.openWecomAndScanTheQr')),
          h('li', null, t('ui.wecom.confirmBotCreationOnTheTencent')),
          h('li', null, t('ui.qq.returnHereAndWaitForThe'))),
        h('div', { className: 'ddt-actions dim-viewActions' },
          h(Button, { onClick: onRefresh, disabled: busy }, t('ui.dingtalk.generateANewQrCode2')),
          h(Button, { kind: 'quiet', onClick: onCancel, disabled: busy }, t('ui.dingtalk.cancel'))))));
}

function ProvisionView({ provision, busy, onRetry, onClose }) {
  if (provision.status === 'connecting') {
    return h('div', { className: 'ddt-card ddt-loading dim-surfaceCard dim-specialView', 'aria-busy': 'true' },
      h('div', { className: 'ddt-spinner dim-spinner' }),
      h('h3', null, t('ui.wecom.authorizedInWecomConnectingTheBot')),
      h('p', null, t('ui.wecom.savingCredentialsLocallyAndStartingThe')));
  }
  const error = provision.error ?? { code: 'WECOM_PROVISION_FAILED', message: t('ui.common.notBound', { channel: CHANNEL_LABEL }) };
  return h('div', { className: 'ddt-card dim-surfaceCard' },
    h('div', { className: 'ddt-inlineError dim-inlineError', role: 'alert' },
      h('h3', null, t('ui.common.notBound', { channel: CHANNEL_LABEL })),
      h('p', null, error.message),
      h('span', { className: 'ddt-errorCode' }, error.code),
      h('div', { className: 'ddt-actions dim-viewActions' },
        h(Button, { kind: 'primary', onClick: onRetry, disabled: busy }, t('ui.dingtalk.generateANewQrCode2')),
        h(Button, { onClick: onClose, disabled: busy }, t('ui.dingtalk.close')))));
}

function RemoveConfirmation({ account, busy, onConfirm, onCancel }) {
  return h('div', { className: 'ddt-confirm dim-confirm', role: 'alertdialog' },
    h('strong', null, t('ui.common.removeConfirm', { name: account.bot.name })),
    h('p', null, t('ui.wecom.thisStopsTheMessageConnectionAnd')),
    h('div', { className: 'ddt-actions dim-viewActions' },
      h(Button, { onClick: onCancel, disabled: busy }, t('ui.dingtalk.keepBot')),
      h(Button, { kind: 'danger', onClick: onConfirm, disabled: busy }, busy ? t('ui.dingtalk.removing') : t('ui.dingtalk.removeConnection'))));
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
  const tone = account.connected ? 'success' : account.state === 'error' ? 'error' : 'warning';
  const stateLabel = account.connected ? t('ui.dingtalk.connected') : account.state === 'connecting' ? t('ui.dingtalk.connecting2') : t('ui.dingtalk.notConnected');
  const summary = account.error?.message ?? (account.connected ? null : account.health.summary);
  return h('article', { className: 'ddt-card dim-botCard', 'data-bot-id': account.botId },
    h('div', { className: 'ddt-cardBody dim-botCardBody' },
      h('div', { className: 'ddt-accountTop dim-botCardTop' },
        h('div', { className: 'ddt-accountIdentity dim-botIdentity' },
          h('div', { className: 'ddt-avatar dim-botAvatar dwecom-avatar', 'aria-hidden': 'true' }, h(WecomLogoGlyph, { size: 29 })),
          h('div', { className: 'dim-botName' },
            h('h3', null, account.bot.name), h('p', null, account.bot.appIdMasked))),
        h(BotStatusMeta, {
          className: 'ddt-health',
          dotClassName: 'ddt-dot',
          tone,
          stateLabel,
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
      h('div', { className: 'ddt-accountFooter dim-cardFooter' },
        h('div', { className: 'dim-cardFooterLayout' },
          h('div', { className: 'ddt-actions dim-cardActions' },
            h(Button, { className: 'dim-cardAction', onClick: onReconnect, disabled: Boolean(busy) }, busy === 'reconnect' ? t('ui.dingtalk.checking') : account.connected ? t('ui.dingtalk.checkConnection') : t('ui.dingtalk.reconnect')),
            h(Button, { className: 'dim-cardAction', kind: 'danger', onClick: onRequestRemove, disabled: Boolean(busy) }, t('ui.dingtalk.removeConnection2'))),
          summary ? h('div', { className: 'ddt-summary dim-cardSummary' }, summary) : null,
          feedback ? h('div', {
            className: 'ddt-summary dim-cardFeedback',
            role: 'status',
            'aria-live': 'polite',
          }, feedback) : null))),
    removing ? h(RemoveConfirmation, {
      account, busy: busy === 'delete', onConfirm: onConfirmRemove, onCancel: onCancelRemove,
    }) : null);
}

export function WecomSettingsTab({ rpcCall }) {
  const [model, setModel] = React.useState({
    phase: 'loading', bots: [], totals: { configured: 0, connected: 0 }, error: null,
    agentPresetCatalog: EMPTY_AGENT_PRESET_CATALOG,
  });
  const [provision, setProvision] = React.useState(null);
  const [busy, setBusy] = React.useState(false);
  const [busyByBot, setBusyByBot] = React.useState({});
  const [feedbackByBot, setFeedbackByBot] = React.useState({});
  const [removeTarget, setRemoveTarget] = React.useState(null);
  const [credentialOpen, setCredentialOpen] = React.useState(false);
  const [credentialError, setCredentialError] = React.useState(null);
  const [notice, setNotice] = React.useState('');
  const [now, setNow] = React.useState(Date.now());
  const mounted = React.useRef(true);
  const workspaceFence = useWorkspaceSnapshotFence();
  const addButtonRef = React.useRef(null);
  const noticeFrameRef = React.useRef(null);

  const announce = React.useCallback((message) => {
    if (!mounted.current) return;
    if (noticeFrameRef.current !== null) {
      window.cancelAnimationFrame(noticeFrameRef.current);
      noticeFrameRef.current = null;
    }
    setNotice('');
    if (message) {
      noticeFrameRef.current = window.requestAnimationFrame(() => {
        noticeFrameRef.current = null;
        if (mounted.current) setNotice(message);
      });
    }
  }, []);

  React.useEffect(() => {
    const disposeDingtalk = installDingtalkStyles();
    const disposeWecom = installWecomStyles();
    mounted.current = true;
    return () => {
      mounted.current = false;
      if (noticeFrameRef.current !== null) {
        window.cancelAnimationFrame(noticeFrameRef.current);
        noticeFrameRef.current = null;
      }
      disposeWecom();
      disposeDingtalk();
    };
  }, []);

  const invoke = React.useCallback(async (endpoint, payload = {}, signal) => {
    if (typeof rpcCall !== 'function') throw new TypeError(t('ui.common.missingRpc', { channel: CHANNEL_LABEL }));
    return unwrapRpcResult(await rpcCall(endpoint, payload, signal));
  }, [rpcCall]);

  const loadStatus = React.useCallback(async ({ signal, silent = false, restore = false } = {}) => {
    const workspaceVersion = workspaceFence.beginStatus();
    if (workspaceVersion === null) return undefined;
    if (!silent && mounted.current) setModel((current) => ({ ...current, phase: 'loading', error: null }));
    try {
      const snapshot = normalizeSnapshot(await invoke(WECOM_ENDPOINTS.status, {}, signal));
      if (!mounted.current || signal?.aborted
        || !workspaceFence.canCommitStatus(workspaceVersion)) return undefined;
      setModel({
        phase: 'ready', bots: snapshot.bots, totals: snapshot.totals, error: null,
        agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG,
      });
      if (restore && snapshot.provisioning) setProvision({
        ...snapshot.provisioning,
        durationMs: Math.max(1, snapshot.provisioning.expiresAt - Date.now()),
      });
      return snapshot;
    } catch (error) {
      if (error?.name !== 'AbortError' && mounted.current && !signal?.aborted
        && workspaceFence.canCommitStatus(workspaceVersion)) {
        setModel((current) => ({ ...current, phase: silent ? current.phase : 'error', error: presentError(error) }));
      }
      return undefined;
    }
  }, [invoke, workspaceFence]);

  React.useEffect(() => {
    const controller = new AbortController();
    void loadStatus({ signal: controller.signal, restore: true });
    return () => controller.abort();
  }, [loadStatus]);

  React.useEffect(() => {
    if (model.phase !== 'ready') return undefined;
    const controller = new AbortController();
    const timer = window.setInterval(() => void loadStatus({ signal: controller.signal, silent: true }), 15_000);
    return () => { controller.abort(); window.clearInterval(timer); };
  }, [loadStatus, model.phase]);

  React.useEffect(() => {
    if (!provision || !ACTIVE_STATES.has(provision.status)) return undefined;
    const timer = window.setInterval(() => mounted.current && setNow(Date.now()), 1_000);
    return () => window.clearInterval(timer);
  }, [provision?.attemptId, provision?.status]);

  const startProvisioning = React.useCallback(async (replace = false) => {
    setCredentialOpen(false);
    setCredentialError(null);
    setBusy(true);
    try {
      if (replace && provision?.attemptId) await invoke(WECOM_ENDPOINTS.cancelProvisioning, { attemptId: provision.attemptId });
      if (!mounted.current) return;
      setProvision({ status: 'starting' });
      const started = normalizeProvisioning(await invoke(WECOM_ENDPOINTS.beginProvisioning, { locale: 'zh-CN' }));
      if (!mounted.current) return;
      setNow(Date.now());
      setProvision({ ...started, durationMs: Math.max(1, started.expiresAt - Date.now()) });
    } catch (error) {
      if (mounted.current) setProvision({ status: 'failed', error: presentError(error) });
    } finally {
      if (mounted.current) setBusy(false);
    }
  }, [invoke, provision?.attemptId]);

  const bindCredentials = React.useCallback(async ({ identity, secret }) => {
    const snapshotVersion = workspaceFence.beginMutation();
    setBusy(true);
    setCredentialError(null);
    try {
      const snapshot = normalizeSnapshot(await invoke(
        WECOM_ENDPOINTS.bindCredentials,
        { botId: identity, secret },
      ));
      if (!mounted.current) return;
      if (workspaceFence.canCommitMutation(snapshotVersion)) {
        setModel({
          phase: 'ready', bots: snapshot.bots, totals: snapshot.totals, error: null,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG,
        });
      }
      setCredentialOpen(false);
    } catch (error) {
      if (mounted.current) setCredentialError(presentError(error));
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mounted.current) void loadStatus({ silent: true });
      if (mounted.current) setBusy(false);
    }
  }, [invoke, loadStatus, workspaceFence]);

  const closeProvision = React.useCallback(async () => {
    setBusy(true);
    try {
      if (provision?.attemptId && ACTIVE_STATES.has(provision.status)) {
        await invoke(WECOM_ENDPOINTS.cancelProvisioning, { attemptId: provision.attemptId });
      }
      if (mounted.current) setProvision(null);
    } finally {
      if (mounted.current) setBusy(false);
    }
  }, [invoke, provision?.attemptId, provision?.status]);

  React.useEffect(() => {
    const attemptId = provision?.attemptId;
    if (!attemptId || !ACTIVE_STATES.has(provision.status)) return undefined;
    const controller = new AbortController();
    let disposed = false;
    let timer;
    const poll = async () => {
      try {
        const current = normalizeProvisioning(await invoke(WECOM_ENDPOINTS.pollProvisioning, { attemptId }, controller.signal));
        if (disposed || controller.signal.aborted || !mounted.current) return;
        if (current.status === 'connected') {
          setProvision(null);
          await loadStatus({ signal: controller.signal, silent: true });
          return;
        }
        setProvision((previous) => previous?.attemptId === attemptId
          ? { ...previous, ...current, durationMs: current.qrRevision !== previous.qrRevision
              ? Math.max(1, current.expiresAt - Date.now()) : previous.durationMs }
          : previous);
        if (ACTIVE_STATES.has(current.status)) timer = window.setTimeout(poll, current.pollIntervalMs);
      } catch (error) {
        if (!disposed && !controller.signal.aborted && mounted.current) {
          setProvision((current) => ({ ...current, status: 'failed', error: presentError(error) }));
        }
      }
    };
    timer = window.setTimeout(poll, provision.pollIntervalMs ?? 1_000);
    return () => { disposed = true; controller.abort(); window.clearTimeout(timer); };
  }, [invoke, loadStatus, provision?.attemptId, provision?.pollIntervalMs, provision?.status]);

  const botAction = React.useCallback(async (account, operation, endpoint, payload) => {
    const snapshotVersion = workspaceFence.beginMutation();
    setBusyByBot((current) => ({ ...current, [account.botId]: operation }));
    try {
      const snapshot = normalizeSnapshot(await invoke(endpoint, payload));
      if (mounted.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        setModel({
          phase: 'ready', bots: snapshot.bots, totals: snapshot.totals, error: null,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG,
        });
      }
      return snapshot;
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mounted.current) void loadStatus({ silent: true });
      if (mounted.current) setBusyByBot((current) => {
        const next = { ...current }; delete next[account.botId]; return next;
      });
    }
  }, [invoke, loadStatus, workspaceFence]);

  const reconnect = React.useCallback(async (account) => {
    setFeedbackByBot((current) => {
      const next = { ...current };
      delete next[account.botId];
      return next;
    });
    try {
      const snapshot = await botAction(
        account,
        'reconnect',
        WECOM_ENDPOINTS.reconnectBot,
        { botId: account.botId, sendTest: true },
      );
      if (!snapshot) return;
      const refreshed = snapshot.bots.find((bot) => bot.botId === account.botId);
      let feedback;
      if (!refreshed?.connected) {
        feedback = t('ui.common.stillOffline', { channel: CHANNEL_LABEL });
      } else if (snapshot.testMessage?.sent) {
        feedback = t('ui.wecom.wecomConnectionCheckCompletedAndThe');
      } else if (snapshot.testMessage?.code === 'test-target-unavailable') {
        feedback = t('ui.dingtalk.connectionCheckCompletedTheBotHas');
      } else if (snapshot.testMessage) {
        feedback = t('ui.wecom.wecomConnectionCheckCompletedButThe');
      } else {
        feedback = t('ui.common.connectionCheckDone', { channel: CHANNEL_LABEL });
      }
      if (mounted.current) {
        setFeedbackByBot((current) => ({ ...current, [account.botId]: feedback }));
      }
      announce(feedback);
    } catch {
      const feedback = t('ui.dingtalk.connectionCheckFailedTryAgainLater');
      if (mounted.current) {
        setFeedbackByBot((current) => ({ ...current, [account.botId]: feedback }));
      }
      announce(feedback);
    }
  }, [announce, botAction]);

  let provisionView = null;
  if (provision?.status === 'starting') provisionView = h('div', { className: 'ddt-card ddt-loading dim-surfaceCard' }, h('div', { className: 'ddt-spinner' }), t('ui.wecom.requestingWecomQrCode'));
  else if (['pending', 'refreshing'].includes(provision?.status)) provisionView = h(QrPanel, {
    provision, now, busy, onRefresh: () => void startProvisioning(true), onCancel: () => void closeProvision(),
  });
  else if (provision) provisionView = h(ProvisionView, {
    provision, busy, onRetry: () => void startProvisioning(true), onClose: () => void closeProvision(),
  });

  const botList = model.bots.length > 0
    ? h('section', { className: 'dim-listSection' },
        h(ChannelListHeading, {
          className: 'ddt-listHeading',
          title: t('ui.wecom.connectedWecomBots'),
          connectionLabel: t('ui.qq.websocketPersistentConnection'),
        }),
        h('ul', { className: 'ddt-list dim-botList' }, model.bots.map((account) =>
          h('li', { key: account.botId }, h(AccountCard, {
            account,
            busy: busyByBot[account.botId],
            feedback: feedbackByBot[account.botId],
            removing: removeTarget === account.botId,
            onReconnect: () => void reconnect(account),
            onWorkspaceSave: (workspace) => botAction(
              account,
              'workspace',
              WECOM_ENDPOINTS.setWorkspace,
              { botId: account.botId, workspace },
            ),
            onAgentPresetSave: (agentPreset) => botAction(
              account,
              'preset',
              WECOM_ENDPOINTS.setAgentPreset,
              { botId: account.botId, agentPreset },
            ),
            onRequestRemove: () => setRemoveTarget(account.botId),
            onCancelRemove: () => setRemoveTarget(null),
            onConfirmRemove: async () => {
              await botAction(account, 'delete', WECOM_ENDPOINTS.deleteBot, { botId: account.botId, confirm: true });
              if (mounted.current) setRemoveTarget(null);
            },
          })))))
    : null;

  const credentialView = credentialOpen
    ? h(CredentialBindingPanel, {
        channel: t('ui.wecom.wecom'),
        identityLabel: 'Bot ID',
        identityPlaceholder: t('ui.wecom.enterTheWecomAiBotId'),
        secretLabel: 'Secret',
        secretPlaceholder: t('ui.wecom.enterTheWecomAiBotSecret'),
        busy,
        error: credentialError,
        onSubmit: bindCredentials,
        onCancel: () => { setCredentialOpen(false); setCredentialError(null); },
      })
    : null;

  return h(AgentPresetCatalogContext.Provider, {
    value: model.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG,
  }, h('section', { className: 'ddt-page dwecom-page dim-channelPage', 'aria-label': t('ui.wecom.wecomSettings') },
    h(Heading, {
      totals: model.totals,
      adding: Boolean(provision),
      busy,
      onAdd: () => void startProvisioning(),
      onCredential: () => { setCredentialOpen((value) => !value); setCredentialError(null); },
      credentialOpen,
      addButtonRef,
    }),
    h('div', { className: 'ddt-visuallyHidden', role: 'status', 'aria-live': 'polite' }, notice),
    model.phase === 'loading' ? h(LoadingView)
      : model.phase === 'error'
        ? h('div', { className: 'ddt-card dim-surfaceCard' }, h('div', { className: 'ddt-inlineError dim-inlineError' }, h('h3', null, t('ui.common.cannotReadStatus', { channel: CHANNEL_LABEL })), h('p', null, model.error?.message), h(Button, { onClick: () => void loadStatus() }, t('ui.dingtalk.reload'))))
        : h(React.Fragment, null,
            credentialView,
            provisionView,
            model.bots.length === 0 && !provision && !credentialOpen
              ? h(EmptyView, { busy, onStart: () => void startProvisioning() }) : null,
            botList)));
}

export function apply(ctx) {
  ctx.effect(() => installWecomStyles(), 'wecom-settings: install client styles');
  const rpcCall = (endpoint, payload, signal) => ctx.connection.rpc.call(WECOM_RPC_CHANNEL, endpoint, payload, signal);
  ctx.slots.inject('settings.plugins.tab', () => ctx.slots.register({
    name: 'settings.plugins.tab', id: 'wecom', order: 45, label: t('ui.wecom.wecom'), inject: () => ({ rpcCall }),
  }, WecomSettingsTab));
}
