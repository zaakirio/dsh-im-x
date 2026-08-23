import * as React from 'react';

import { CredentialActionIcon, CredentialBindingPanel } from '../../credential-binding.js';
import { h, t } from '../../i18n.js';
import { installDingtalkStyles } from '../dingtalk/styles.js';
import { WorkspaceEditor } from '../../workspace-editor.js';
import {
  AgentPresetCatalogContext,
  AgentPresetEditor,
  EMPTY_AGENT_PRESET_CATALOG,
} from '../../agent-preset.js';
import { useWorkspaceSnapshotFence } from '../../workspace-snapshot-fence.js';
import { BotStatusMeta, ChannelListHeading } from '../../channel-card-meta.js';

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
  if (value?.testMessage?.sent === true) return t('ui.qq.testMessageSentCheckTheMatching');
  if (value?.testMessage?.code === 'test-target-unavailable') {
    return t('ui.dingtalk.connectionCheckCompletedTheBotHas');
  }
  return value?.testMessage ? t('ui.feishu.connectionCheckCompletedButTheTest') : null;
}

export function createTokenChannelSettings(definition) {
  const {
    channel,
    endpoints,
    api,
    LogoGlyph,
    installStyles,
    pageClass,
    avatarClass,
    connectionLabel,
    tokenPlaceholder,
    emptyTitle,
    emptyDescription,
    platformLabel,
    CredentialPanel = null,
    credentialPayload = ({ secret }) => ({ token: secret }),
    credentialAriaLabel = t('ui.common.connectWithToken', { channel }),
    credentialOpenLabel = t('ui.dingtalk.manualSetup'),
    credentialCloseLabel = t('ui.dingtalk.hideCredentials'),
    credentialNoun = 'Bot Token',
    emptyActionLabel = t('ui.common.enterBotToken'),
    AccountSettings = null,
    accountSettingsEndpoint = null,
  } = definition;

  function AccountCard({ account, busy, testNotice, removing, onReconnect, onWorkspaceSave, onAgentPresetSave, onAccountSettingsSave, onRequestRemove, onConfirmRemove, onCancelRemove }) {
    const state = busy === 'reconnect' ? 'connecting' : account.state;
    const tone = account.connected ? 'success' : state === 'error' ? 'error' : 'warning';
    const stateLabel = account.connected ? t('ui.dingtalk.connected') : state === 'connecting' ? t('ui.dingtalk.connecting2') : t('ui.dingtalk.notConnected');
    const summary = account.error?.message ?? (account.connected ? null : account.health.summary);
    const identity = account.bot.username ? `@${account.bot.username}` : account.bot.idMasked;
    return h('article', { className: 'ddt-card dim-botCard', 'data-bot-id': account.botId },
      h('div', { className: 'ddt-cardBody dim-botCardBody' },
        h('div', { className: 'ddt-accountTop dim-botCardTop' },
          h('div', { className: 'ddt-accountIdentity dim-botIdentity' },
            h('div', { className: `ddt-avatar dim-botAvatar ${avatarClass}`, 'aria-hidden': 'true' },
              h(LogoGlyph, { size: 29 })),
            h('div', { className: 'dim-botName' },
              h('h3', null, account.bot.name), h('p', null, identity))),
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
        AccountSettings ? h(AccountSettings, {
          account,
          busy: Boolean(busy),
          onSave: onAccountSettingsSave,
        }) : null,
        h('div', { className: 'ddt-accountFooter dim-cardFooter' },
          h('div', { className: 'dim-cardFooterLayout' },
            h('div', { className: 'ddt-actions dim-cardActions' },
              h(Button, {
                className: 'dim-cardAction',
                onClick: onReconnect,
                disabled: Boolean(busy),
              }, busy === 'reconnect' ? t('ui.dingtalk.checking') : account.connected ? t('ui.dingtalk.checkConnection') : t('ui.dingtalk.reconnect')),
              h(Button, {
                className: 'dim-cardAction',
                kind: 'danger',
                onClick: onRequestRemove,
                disabled: Boolean(busy),
              }, t('ui.dingtalk.removeConnection2'))),
            summary ? h('div', { className: 'ddt-summary dim-cardSummary' }, summary) : null,
            testNotice ? h('div', {
              className: 'ddt-summary dim-cardFeedback',
              role: 'status',
            }, testNotice) : null))),
      removing ? h('div', { className: 'ddt-confirm dim-confirm', role: 'alertdialog' },
        h('strong', null, t('ui.common.removeConfirm', { name: account.bot.name })),
        h('p', null, t('ui.common.removeWarning', { credential: credentialNoun, platform: platformLabel })),
        h('div', { className: 'ddt-actions dim-viewActions' },
          h(Button, { onClick: onCancelRemove, disabled: Boolean(busy) }, t('ui.dingtalk.keepBot')),
          h(Button, { kind: 'danger', onClick: onConfirmRemove, disabled: Boolean(busy) },
            busy === 'delete' ? t('ui.dingtalk.removing') : t('ui.dingtalk.removeConnection')))) : null);
  }

  function SettingsTab({ rpcCall }) {
    const [model, setModel] = React.useState({
      phase: 'loading', bots: [], totals: { configured: 0, connected: 0 }, error: null,
      agentPresetCatalog: EMPTY_AGENT_PRESET_CATALOG,
    });
    const [credentialOpen, setCredentialOpen] = React.useState(false);
    const [credentialError, setCredentialError] = React.useState(null);
    const [busy, setBusy] = React.useState(false);
    const [busyByBot, setBusyByBot] = React.useState({});
    const [testNoticeByBot, setTestNoticeByBot] = React.useState({});
    const [removeTarget, setRemoveTarget] = React.useState(null);
    const mounted = React.useRef(true);
    const workspaceFence = useWorkspaceSnapshotFence();

    React.useEffect(() => {
      const disposeDingtalk = installDingtalkStyles();
      const disposeChannel = installStyles();
      mounted.current = true;
      return () => {
        mounted.current = false;
        disposeChannel();
        disposeDingtalk();
      };
    }, []);

    const invoke = React.useCallback(async (endpoint, payload = {}, signal) => {
      if (typeof rpcCall !== 'function') throw new TypeError(t('ui.common.missingRpc', { channel }));
      return api.unwrapRpcResult(await rpcCall(endpoint, payload, signal));
    }, [rpcCall]);

    const loadStatus = React.useCallback(async ({ signal, silent = false } = {}) => {
      const workspaceVersion = workspaceFence.beginStatus();
      if (workspaceVersion === null) return;
      if (!silent && mounted.current) setModel((current) => ({ ...current, phase: 'loading', error: null }));
      try {
        const snapshot = api.normalizeSnapshot(await invoke(endpoints.status, {}, signal));
        if (!mounted.current || signal?.aborted
          || !workspaceFence.canCommitStatus(workspaceVersion)) return;
        setModel({
          phase: 'ready', bots: snapshot.bots, totals: snapshot.totals, error: null,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG,
        });
      } catch (error) {
        if (error?.name !== 'AbortError' && mounted.current && !signal?.aborted
          && workspaceFence.canCommitStatus(workspaceVersion)) {
          setModel((current) => ({
            ...current,
            phase: silent ? current.phase : 'error',
            error: api.presentError(error),
          }));
        }
      }
    }, [invoke, workspaceFence]);

    React.useEffect(() => {
      const controller = new AbortController();
      void loadStatus({ signal: controller.signal });
      return () => controller.abort();
    }, [loadStatus]);

    React.useEffect(() => {
      if (model.phase !== 'ready') return undefined;
      const controller = new AbortController();
      const timer = window.setInterval(
        () => void loadStatus({ signal: controller.signal, silent: true }),
        15_000,
      );
      return () => {
        controller.abort();
        window.clearInterval(timer);
      };
    }, [loadStatus, model.phase]);

    const bindCredentials = React.useCallback(async (values) => {
      const snapshotVersion = workspaceFence.beginMutation();
      setBusy(true);
      setCredentialError(null);
      try {
        const snapshot = api.normalizeSnapshot(await invoke(
          endpoints.bindCredentials,
          credentialPayload(values),
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
        if (mounted.current) setCredentialError(api.presentError(error));
      } finally {
        const shouldRefresh = workspaceFence.endMutation();
        if (shouldRefresh && mounted.current) void loadStatus({ silent: true });
        if (mounted.current) setBusy(false);
      }
    }, [invoke, loadStatus, workspaceFence]);

    const botAction = React.useCallback(async (account, operation, endpoint, payload) => {
      const snapshotVersion = workspaceFence.beginMutation();
      setBusyByBot((current) => ({ ...current, [account.botId]: operation }));
      try {
        const value = await invoke(endpoint, payload);
        const snapshot = api.normalizeSnapshot(value);
        if (mounted.current && workspaceFence.canCommitMutation(snapshotVersion)) {
          setModel({
          phase: 'ready', bots: snapshot.bots, totals: snapshot.totals, error: null,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG,
        });
        }
        if (mounted.current && operation === 'reconnect') {
          setTestNoticeByBot((current) => ({
            ...current,
            [account.botId]: connectionTestNotice(value),
          }));
        }
      } catch (error) {
        if (operation !== 'reconnect') throw error;
        if (mounted.current) {
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
            title: t('ui.common.connectedBots', { channel }),
            connectionLabel,
          }),
          h('ul', { className: 'ddt-list dim-botList' }, model.bots.map((account) =>
            h('li', { key: account.botId }, h(AccountCard, {
              account,
              busy: busyByBot[account.botId],
              testNotice: testNoticeByBot[account.botId],
              removing: removeTarget === account.botId,
              onReconnect: () => void botAction(
                account,
                'reconnect',
                endpoints.reconnectBot,
                { botId: account.botId, sendTest: true },
              ),
              onWorkspaceSave: (workspace) => botAction(
                account,
                'workspace',
                endpoints.setWorkspace,
                { botId: account.botId, workspace },
              ),
              onAgentPresetSave: (agentPreset) => botAction(
                account,
                'preset',
                endpoints.setAgentPreset,
                { botId: account.botId, agentPreset },
              ),
              onAccountSettingsSave: AccountSettings && accountSettingsEndpoint
                ? (payload) => botAction(
                    account,
                    'settings',
                    accountSettingsEndpoint,
                    { botId: account.botId, ...payload },
                  )
                : undefined,
              onRequestRemove: () => setRemoveTarget(account.botId),
              onCancelRemove: () => setRemoveTarget(null),
              onConfirmRemove: async () => {
                await botAction(account, 'delete', endpoints.deleteBot, {
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
      className: `ddt-page ${pageClass} dim-channelPage`,
      'aria-label': t('ui.common.settings', { channel }),
    },
    h('div', { className: 'ddt-heading' },
      h('div', { className: 'ddt-tools' },
        h('div', { className: 'dim-bindActions' },
          h(Button, {
            kind: 'credential',
            className: 'dim-credentialButton',
            onClick: () => { setCredentialOpen((value) => !value); setCredentialError(null); },
            disabled: busy,
            'aria-pressed': credentialOpen,
            'aria-label': credentialAriaLabel,
          }, h(CredentialActionIcon), credentialOpen ? credentialCloseLabel : credentialOpenLabel)),
        model.totals.configured > 0
          ? h('div', { className: 'ddt-badge dim-onlineBadge' },
              h('span', null, t('ui.common.onlineCount', { connected: model.totals.connected, configured: model.totals.configured })))
          : null)),
    model.phase === 'loading'
      ? h('div', {
          className: 'ddt-card ddt-loading dim-surfaceCard dim-loadingView',
          'aria-busy': 'true',
        }, h('div', { className: 'ddt-spinner dim-spinner' }), t('ui.common.loadingStatus', { channel }))
      : model.phase === 'error'
        ? h('div', { className: 'ddt-card dim-surfaceCard' },
            h('div', { className: 'ddt-inlineError dim-inlineError' },
              h('h3', null, t('ui.common.cannotReadStatus', { channel })),
              h('p', null, model.error?.message),
              h(Button, { onClick: () => void loadStatus() }, t('ui.dingtalk.reload'))))
        : h(React.Fragment, null,
            credentialOpen ? (CredentialPanel
              ? h(CredentialPanel, {
                  busy,
                  error: credentialError,
                  onSubmit: bindCredentials,
                  onCancel: () => { setCredentialOpen(false); setCredentialError(null); },
                })
              : h(CredentialBindingPanel, {
                  channel,
                  secretLabel: 'Bot Token',
                  secretPlaceholder: tokenPlaceholder,
                  busy,
                  error: credentialError,
                  onSubmit: bindCredentials,
                  onCancel: () => { setCredentialOpen(false); setCredentialError(null); },
                })) : null,
            model.bots.length === 0 && !credentialOpen
              ? h('div', { className: 'ddt-card dim-surfaceCard' },
                  h('div', { className: 'ddt-cardBody ddt-empty dim-surfaceBody dim-emptyView' },
                    h('div', { className: 'dim-emptyCopy' },
                      h('div', { className: 'ddt-stateLabel dim-stateLabel' },
                        h('span', { className: 'ddt-dot dim-stateDot' }),
                        h('span', null, t('ui.common.noBotsYet', { channel }))),
                      h('h3', null, emptyTitle),
                      h('p', null, emptyDescription),
                      h('div', { className: 'ddt-actions dim-viewActions' },
                        h(Button, {
                          kind: 'primary',
                          onClick: () => setCredentialOpen(true),
                        }, emptyActionLabel))),
                    h('div', {
                      className: `ddt-brandMark dim-emptyBrand ${avatarClass}`,
                      'aria-hidden': 'true',
                    }, h(LogoGlyph, { size: 64 }))))
              : null,
            botList)));
  }

  return { SettingsTab, AccountCard };
}
