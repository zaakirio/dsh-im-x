import * as React from 'react';

import { WhatsappLogoGlyph } from '../../channel-logos.js';
import { QrActionIcon } from '../../credential-binding.js';
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
  WHATSAPP_ENDPOINTS,
  formatRemaining,
  normalizeProvisioning,
  normalizeSnapshot,
  presentError,
  safeQrSource,
  unwrapRpcResult,
} from './api.js';
import { installWhatsappStyles } from './styles.js';

const CHANNEL_LABEL = 'WhatsApp';

const ACTIVE_STATES = new Set(['pending', 'connecting']);

const Button = React.forwardRef(function Button(
  { children, kind = 'secondary', className = '', ...props },
  ref,
) {
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

function connectionTestNotice(value) {
  if (value?.testMessage?.sent === true) {
    return t('ui.whatsapp.testMessageSentCheckTheWhatsapp');
  }
  if (value?.testMessage?.code === 'test-target-unavailable') {
    return t('ui.whatsapp.connectionCheckCompletedButNoWhatsapp');
  }
  return value?.testMessage ? t('ui.feishu.connectionCheckCompletedButTheTest') : null;
}

function Heading({ totals, busy, onAdd, addButtonRef }) {
  return h('div', { className: 'ddt-heading' },
    h('div', { className: 'ddt-tools' },
      h('div', { className: 'dim-bindActions' },
        h(Button, {
          kind: 'primary',
          className: 'dim-scanButton',
          onClick: onAdd,
          disabled: busy,
          ref: addButtonRef,
          'aria-label': t('ui.whatsapp.connectWhatsappByQrCode'),
        }, h(QrActionIcon), busy ? t('ui.dingtalk.connecting') : t('ui.dingtalk.scanQrCode'))),
      totals.configured > 0
        ? h('div', { className: 'ddt-badge dim-onlineBadge' },
            h('span', null, t('ui.common.onlineCount', { connected: totals.connected, configured: totals.configured })))
        : null));
}

function LoadingView() {
  return h('div', {
    className: 'ddt-card ddt-loading dim-surfaceCard dim-loadingView',
    'aria-busy': 'true',
  }, h('div', { className: 'ddt-spinner dim-spinner' }), t('ui.common.loadingStatus', { channel: CHANNEL_LABEL }));
}

export function EmptyView({ busy, onStart }) {
  return h('div', { className: 'ddt-card dim-surfaceCard' },
    h('div', { className: 'ddt-cardBody ddt-empty dim-surfaceBody dim-emptyView' },
      h('div', { className: 'dim-emptyCopy' },
        h('div', { className: 'ddt-stateLabel dim-stateLabel' },
          h('span', { className: 'ddt-dot dim-stateDot' }),
          h('span', null, t('ui.common.noBotsYet', { channel: CHANNEL_LABEL }))),
        h('h3', null, t('ui.whatsapp.connectWhatsappByQrCode2')),
        h('p', null, t('ui.whatsapp.scanTheQrCodeWithWhatsapp')),
        h('div', { className: 'ddt-actions dim-viewActions' },
          h(Button, { kind: 'primary', onClick: onStart, disabled: busy },
            busy ? t('ui.dingtalk.generatingQrCode') : t('ui.whatsapp.generateQrCode')))),
      h('div', {
        className: 'ddt-brandMark dim-emptyBrand dwa-avatar',
        'aria-hidden': 'true',
      }, h(WhatsappLogoGlyph, { size: 64 }))));
}

export function QrPanel({ provision, now, busy, onRefresh, onCancel }) {
  const source = safeQrSource(provision.qrCodeDataUrl);
  const remaining = Math.max(0, provision.expiresAt - now);
  const duration = Math.max(1, provision.durationMs ?? 60_000);
  const progress = Math.round(Math.min(1, remaining / duration) * 100);
  return h('div', { className: 'ddt-card dim-surfaceCard' },
    h('div', { className: 'ddt-cardBody ddt-qrLayout dim-surfaceBody dim-qrLayout' },
      h('div', { className: 'ddt-qrColumn dim-qrColumn' },
        h('div', { className: 'ddt-qrFrame dim-qrFrame' },
          source ? h('img', {
            src: source,
            alt: t('ui.whatsapp.oneTimeQrCodeForLinking'),
          }) : h('div', { className: 'ddt-qrFallback dim-qrFallback' }, t('ui.whatsapp.generatingQrCode'))),
        h('div', { className: 'ddt-countdown dim-countdown' },
          h('div', { className: 'ddt-countdownTop dim-countdownTop' },
            h('span', null, t('ui.qq.qrCodeExpiresIn')),
            h('strong', null, formatRemaining(remaining))),
          h('div', {
            className: 'ddt-progress dim-progress',
            style: { '--ddt-progress': `${progress}%` },
          }, h('span')))),
      h('div', { className: 'ddt-qrCopy dim-qrCopy' },
        h('div', { className: 'ddt-stateLabel dim-stateLabel' },
          h('span', { className: 'ddt-dot dim-stateDot', 'data-tone': 'warning' }),
          h('span', null, t('ui.whatsapp.waitingForWhatsappScan'))),
        h('h3', null, t('ui.whatsapp.scanWithWhatsappOnYourPhone')),
        h('ol', { className: 'ddt-steps dim-steps' },
          h('li', null, t('ui.whatsapp.openWhatsappSettingsLinkedDevices')),
          h('li', null, t('ui.whatsapp.selectLinkADeviceAndScan'))),
        h('div', { className: 'ddt-actions dim-viewActions' },
          h(Button, { onClick: onRefresh, disabled: busy }, t('ui.dingtalk.generateANewQrCode2')),
          h(Button, { kind: 'quiet', onClick: onCancel, disabled: busy }, t('ui.dingtalk.cancel'))))));
}

export function ProvisionView({ provision, busy, onRetry, onClose }) {
  if (provision.status === 'starting' || provision.status === 'connecting') {
    const starting = provision.status === 'starting';
    return h('div', {
      className: 'ddt-card ddt-loading dim-surfaceCard dim-specialView',
      'aria-busy': 'true',
    }, h('div', { className: 'ddt-spinner dim-spinner' }),
    h('h3', null, starting ? t('ui.whatsapp.generatingWhatsappQrCode') : t('ui.whatsapp.scannedConnectingWhatsapp')),
    h('p', null, starting
      ? t('ui.whatsapp.creatingASecureLinkedDeviceSession')
      : t('ui.whatsapp.linkingTheDeviceToDeepseekHarness')));
  }
  const error = provision.error ?? {
    code: 'WHATSAPP_PROVISION_FAILED',
    message: t('ui.common.notConnected', { channel: CHANNEL_LABEL }),
  };
  return h('div', { className: 'ddt-card dim-surfaceCard' },
    h('div', { className: 'ddt-inlineError dim-inlineError', role: 'alert' },
      h('h3', null, t('ui.common.notConnected', { channel: CHANNEL_LABEL })),
      h('p', null, error.message),
      h('span', { className: 'ddt-errorCode' }, error.code),
      h('div', { className: 'ddt-actions dim-viewActions' },
        h(Button, { kind: 'primary', onClick: onRetry, disabled: busy }, t('ui.dingtalk.generateANewQrCode2')),
        h(Button, { onClick: onClose, disabled: busy }, t('ui.dingtalk.close')))));
}

function RemoveConfirmation({ account, busy, onConfirm, onCancel }) {
  return h('div', { className: 'ddt-confirm dim-confirm', role: 'alertdialog' },
    h('strong', null, t('ui.common.removeConfirm', { name: account.bot.name })),
    h('p', null, t('ui.whatsapp.thisStopsTheMessageConnectionAnd')),
    h('div', { className: 'ddt-actions dim-viewActions' },
      h(Button, { onClick: onCancel, disabled: busy }, t('ui.dingtalk.keepBot')),
      h(Button, { kind: 'danger', onClick: onConfirm, disabled: busy },
        busy ? t('ui.dingtalk.removing') : t('ui.dingtalk.removeConnection'))));
}

export function WhatsappAccountCard({
  account,
  busy,
  testNotice,
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
  const stateLabel = account.connected ? t('ui.dingtalk.connected') : state === 'connecting' ? t('ui.dingtalk.connecting2') : t('ui.dingtalk.notConnected');
  const summary = account.error?.message ?? (account.connected ? null : account.health.summary);
  return h('article', { className: 'ddt-card dim-botCard', 'data-bot-id': account.botId },
    h('div', { className: 'ddt-cardBody dim-botCardBody' },
      h('div', { className: 'ddt-accountTop dim-botCardTop' },
        h('div', { className: 'ddt-accountIdentity dim-botIdentity' },
          h('div', {
            className: 'ddt-avatar dim-botAvatar dwa-avatar',
            'aria-hidden': 'true',
          }, h(WhatsappLogoGlyph, { size: 29 })),
          h('div', { className: 'dim-botName' },
            h('h3', null, account.bot.name), h('p', null, account.bot.idMasked))),
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
            h(Button, {
              className: 'dim-cardAction', onClick: onReconnect, disabled: Boolean(busy),
            }, busy === 'reconnect' ? t('ui.dingtalk.checking') : account.connected ? t('ui.dingtalk.checkConnection') : t('ui.dingtalk.reconnect')),
            h(Button, {
              className: 'dim-cardAction', kind: 'danger', onClick: onRequestRemove, disabled: Boolean(busy),
            }, t('ui.dingtalk.removeConnection2'))),
          summary ? h('div', { className: 'ddt-summary dim-cardSummary' }, summary) : null,
          testNotice ? h('div', {
            className: 'ddt-summary dim-cardFeedback',
            role: 'status',
          }, testNotice) : null))),
    removing ? h(RemoveConfirmation, {
      account,
      busy: busy === 'delete',
      onConfirm: onConfirmRemove,
      onCancel: onCancelRemove,
    }) : null);
}

export function WhatsappSettingsTab({ rpcCall }) {
  const [model, setModel] = React.useState({
    phase: 'loading', bots: [], totals: { configured: 0, connected: 0 }, error: null,
    agentPresetCatalog: EMPTY_AGENT_PRESET_CATALOG,
  });
  const [provision, setProvision] = React.useState(null);
  const [busy, setBusy] = React.useState(false);
  const [busyByBot, setBusyByBot] = React.useState({});
  const [testNoticeByBot, setTestNoticeByBot] = React.useState({});
  const [removeTarget, setRemoveTarget] = React.useState(null);
  const [now, setNow] = React.useState(Date.now());
  const mounted = React.useRef(true);
  const workspaceFence = useWorkspaceSnapshotFence();
  const addButtonRef = React.useRef(null);

  React.useEffect(() => {
    const disposeDingtalk = installDingtalkStyles();
    const disposeWhatsapp = installWhatsappStyles();
    mounted.current = true;
    return () => {
      mounted.current = false;
      disposeWhatsapp();
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
      const snapshot = normalizeSnapshot(await invoke(WHATSAPP_ENDPOINTS.status, {}, signal));
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
        setModel((current) => ({
          ...current,
          phase: silent ? current.phase : 'error',
          error: presentError(error),
        }));
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
    const timer = window.setInterval(
      () => void loadStatus({ signal: controller.signal, silent: true }),
      15_000,
    );
    return () => { controller.abort(); window.clearInterval(timer); };
  }, [loadStatus, model.phase]);

  React.useEffect(() => {
    if (!provision || !ACTIVE_STATES.has(provision.status)) return undefined;
    const timer = window.setInterval(() => mounted.current && setNow(Date.now()), 1_000);
    return () => window.clearInterval(timer);
  }, [provision?.attemptId, provision?.status]);

  const startProvisioning = React.useCallback(async (replace = false) => {
    setBusy(true);
    try {
      if (replace && provision?.attemptId) {
        await invoke(WHATSAPP_ENDPOINTS.cancelProvisioning, { attemptId: provision.attemptId });
      }
      if (!mounted.current) return;
      setProvision({ status: 'starting' });
      const started = normalizeProvisioning(await invoke(WHATSAPP_ENDPOINTS.beginProvisioning, {}));
      if (!mounted.current) return;
      setNow(Date.now());
      setProvision({ ...started, durationMs: Math.max(1, started.expiresAt - Date.now()) });
    } catch (error) {
      if (mounted.current) setProvision({ status: 'failed', error: presentError(error) });
    } finally {
      if (mounted.current) setBusy(false);
    }
  }, [invoke, provision?.attemptId]);

  const closeProvision = React.useCallback(async () => {
    setBusy(true);
    try {
      if (provision?.attemptId && ACTIVE_STATES.has(provision.status)) {
        await invoke(WHATSAPP_ENDPOINTS.cancelProvisioning, { attemptId: provision.attemptId });
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
    const schedule = (delay) => {
      if (disposed || controller.signal.aborted) return;
      timer = window.setTimeout(() => void poll(), delay);
    };
    const poll = async () => {
      try {
        const current = normalizeProvisioning(await invoke(
          WHATSAPP_ENDPOINTS.pollProvisioning,
          { attemptId },
          controller.signal,
        ));
        if (disposed || controller.signal.aborted || !mounted.current) return;
        if (current.status === 'connected') {
          setProvision(null);
          await loadStatus({ signal: controller.signal, silent: true });
          return;
        }
        setProvision((previous) => ({
          ...current,
          durationMs: previous?.durationMs ?? Math.max(1, current.expiresAt - Date.now()),
        }));
        if (ACTIVE_STATES.has(current.status)) schedule(current.pollIntervalMs);
      } catch (error) {
        if (!disposed && !controller.signal.aborted && mounted.current) {
          setProvision({ status: 'failed', error: presentError(error) });
        }
      }
    };
    schedule(provision.pollIntervalMs ?? 1_000);
    return () => {
      disposed = true;
      controller.abort();
      if (timer) window.clearTimeout(timer);
    };
  }, [invoke, loadStatus, provision?.attemptId, provision?.status]);

  const botAction = React.useCallback(async (account, operation, endpoint, payload) => {
    const snapshotVersion = workspaceFence.beginMutation();
    setBusyByBot((current) => ({ ...current, [account.botId]: operation }));
    if (operation === 'reconnect') {
      setTestNoticeByBot((current) => {
        const next = { ...current };
        delete next[account.botId];
        return next;
      });
    }
    try {
      const value = await invoke(endpoint, payload);
      const snapshot = normalizeSnapshot(value);
      if (mounted.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        setModel({
          phase: 'ready', bots: snapshot.bots, totals: snapshot.totals, error: null,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG,
        });
        if (operation === 'reconnect') {
          setTestNoticeByBot((current) => ({
            ...current,
            [account.botId]: connectionTestNotice(value),
          }));
        }
      }
    } catch (error) {
      if (operation !== 'reconnect') throw error;
      if (mounted.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        setTestNoticeByBot((current) => ({
          ...current,
          [account.botId]: t('ui.dingtalk.connectionCheckFailedTryAgainLater'),
        }));
      }
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mounted.current) void loadStatus({ silent: true });
      if (mounted.current) setBusyByBot((current) => {
        const next = { ...current };
        delete next[account.botId];
        return next;
      });
    }
  }, [invoke, loadStatus, workspaceFence]);

  const botList = model.bots.length > 0
    ? h('section', { className: 'dim-listSection' },
        h(ChannelListHeading, {
          className: 'ddt-listHeading',
          title: t('ui.whatsapp.connectedWhatsappAccounts'),
          connectionLabel: 'WhatsApp Web',
        }),
        h('ul', { className: 'ddt-list dim-botList' }, model.bots.map((account) =>
          h('li', { key: account.botId }, h(WhatsappAccountCard, {
            account,
            busy: busyByBot[account.botId],
            testNotice: testNoticeByBot[account.botId],
            removing: removeTarget === account.botId,
            onReconnect: () => void botAction(
              account,
              'reconnect',
              WHATSAPP_ENDPOINTS.reconnectBot,
              { botId: account.botId, sendTest: true },
            ),
            onWorkspaceSave: (workspace) => botAction(
              account,
              'workspace',
              WHATSAPP_ENDPOINTS.setWorkspace,
              { botId: account.botId, workspace },
            ),
            onAgentPresetSave: (agentPreset) => botAction(
              account,
              'preset',
              WHATSAPP_ENDPOINTS.setAgentPreset,
              { botId: account.botId, agentPreset },
            ),
            onRequestRemove: () => setRemoveTarget(account.botId),
            onCancelRemove: () => setRemoveTarget(null),
            onConfirmRemove: async () => {
              await botAction(account, 'delete', WHATSAPP_ENDPOINTS.deleteBot, {
                botId: account.botId,
                confirm: true,
              });
              if (mounted.current) setRemoveTarget(null);
            },
          })))))
    : null;

  return h(AgentPresetCatalogContext.Provider, {
    value: model.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG,
  }, h('section', {
    className: 'ddt-page dwa-page dim-channelPage',
    'aria-label': t('ui.common.settings', { channel: CHANNEL_LABEL }),
  },
  h(Heading, {
    totals: model.totals,
    busy,
    onAdd: () => void startProvisioning(false),
    addButtonRef,
  }),
  model.phase === 'loading'
    ? h(LoadingView)
    : model.phase === 'error'
      ? h('div', { className: 'ddt-card dim-surfaceCard' },
          h('div', { className: 'ddt-inlineError dim-inlineError' },
            h('h3', null, t('ui.common.cannotReadStatus', { channel: CHANNEL_LABEL })),
            h('p', null, model.error?.message),
            h(Button, { onClick: () => void loadStatus() }, t('ui.dingtalk.reload'))))
      : h(React.Fragment, null,
          provision?.status === 'pending'
            ? h(QrPanel, {
                provision,
                now,
                busy,
                onRefresh: () => void startProvisioning(true),
                onCancel: () => void closeProvision(),
              })
            : provision
              ? h(ProvisionView, {
                  provision,
                  busy,
                  onRetry: () => void startProvisioning(true),
                  onClose: () => void closeProvision(),
                })
              : model.bots.length === 0
                ? h(EmptyView, { busy, onStart: () => void startProvisioning(false) })
                : null,
          botList)));
}
