import * as React from "react";

import { FeishuLogoGlyph } from "../../channel-logos.js";
import { CredentialActionIcon, CredentialBindingPanel, QrActionIcon } from "../../credential-binding.js";
import { h } from "../../i18n.js";
import {
  FEISHU_ENDPOINTS,
  FEISHU_REGISTRATION_OPERATIONS,
  FEISHU_RPC_CHANNEL,
  formatRemaining,
  normalizeBotsSnapshot,
  normalizeGroupResponseMode,
  normalizePollResult,
  normalizeProvisioning,
  presentError,
  unwrapRpcResult,
} from "./api.js";
import { useAnimationFrameScheduler } from "../../lifecycle.js";
import { WorkspaceEditor } from "../../workspace-editor.js";
import {
  AgentPresetCatalogContext,
  AgentPresetEditor,
  EMPTY_AGENT_PRESET_CATALOG,
} from "../../agent-preset.js";
import { useWorkspaceSnapshotFence } from "../../workspace-snapshot-fence.js";
import { BotStatusMeta, ChannelListHeading } from "../../channel-card-meta.js";
import { installFeishuStyles } from "./styles.js";
import { t } from '../../i18n.js';

export const name = "feishu-settings";
export const inject = ["slots", "connection"];

const CALLBACK_REPAIR_OPERATION = FEISHU_REGISTRATION_OPERATIONS.CALLBACK_REPAIR;
const GROUP_MESSAGE_PERMISSION_OPERATION = FEISHU_REGISTRATION_OPERATIONS.GROUP_MESSAGE_PERMISSION;

function isCallbackRepair(value) {
  return value?.operation === CALLBACK_REPAIR_OPERATION;
}

function isGroupMessagePermission(value) {
  return value?.operation === GROUP_MESSAGE_PERMISSION_OPERATION;
}

function isTargetedAppUpdate(value) {
  return isCallbackRepair(value) || isGroupMessagePermission(value);
}

function SvgIcon({ children, size = 18, className, viewBox = "0 0 24 24" }) {
  return h("svg", {
    width: size,
    height: size,
    viewBox,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    className,
  }, children);
}

function RobotIcon({ size = 26 }) {
  return h(SvgIcon, { size },
    h("rect", {
      x: "5", y: "7.5", width: "14", height: "11", rx: "4",
      stroke: "currentColor", strokeWidth: "1.7",
    }),
    h("path", {
      d: "M12 4.5v3M8.7 12h.01M15.3 12h.01M9.2 15.3c1.67 1.08 3.93 1.08 5.6 0M3.5 11.5v3M20.5 11.5v3",
      stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round",
    }),
  );
}

function AlertIcon({ size = 22 }) {
  return h(SvgIcon, { size },
    h("path", {
      d: "M12 3.4 21 19H3L12 3.4Z", stroke: "currentColor",
      strokeWidth: "1.7", strokeLinejoin: "round",
    }),
    h("path", {
      d: "M12 9v4.4M12 16.6v.01", stroke: "currentColor",
      strokeWidth: "1.9", strokeLinecap: "round",
    }),
  );
}

function QrIcon({ size = 58 }) {
  return h(SvgIcon, { size }, h("path", {
    d: "M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h2v2h-2v-2Zm4 0h2v4h-2v-4Zm-4 4h4v2h-4v-2Z",
    fill: "currentColor",
  }));
}

const Button = React.forwardRef(function Button(
  { children, kind = "secondary", size, icon, className = "", ...props },
  ref,
) {
  return h("button", {
    ...props,
    ref,
    type: "button",
    className: `bxf-button ${className}`.trim(),
    "data-kind": kind,
    "data-size": size,
  }, icon, h("span", null, children));
});

function BrandMark() {
  return h("div", { className: "bxf-brandMark" }, h(RobotIcon, { size: 34 }));
}

function Heading({ totals, onAdd, onCredential, credentialOpen, adding, busy, addButtonRef }) {
  const hasBots = totals.configured > 0;
  return h("div", { className: "bxf-heading" },
    h("div", { className: "bxf-headingTools" },
      h("div", { className: "dim-bindActions" },
        h(Button, {
          kind: "primary",
          size: "small",
          className: "bxf-bindButton dim-scanButton",
          onClick: onAdd,
          disabled: adding || busy,
          ref: addButtonRef,
          "aria-busy": busy ? "true" : undefined,
          "aria-label": t('ui.feishu.connectFeishuBotByQrCode'),
          icon: h(QrActionIcon),
        }, adding ? t('ui.dingtalk.connecting') : t('ui.dingtalk.scanQrCode')),
        h(Button, {
          kind: "credential",
          size: "small",
          className: "dim-credentialButton",
          onClick: onCredential,
          disabled: adding || busy,
          "aria-pressed": credentialOpen,
          "aria-label": t('ui.feishu.connectAFeishuBotWithApp'),
          icon: h(CredentialActionIcon),
        }, credentialOpen ? t('ui.dingtalk.hideCredentials') : t('ui.dingtalk.manualSetup'))),
      hasBots
        ? h("div", {
            className: "bxf-totalBadge dim-onlineBadge",
            "aria-label": t('ui.common.botsOnline', { connected: totals.connected, configured: totals.configured }),
          }, h("span", null, t('ui.common.onlineCount', { connected: totals.connected, configured: totals.configured })))
        : null,
    ),
  );
}

function LoadingView() {
  return h("div", {
    className: "bxf-card dim-surfaceCard dim-loadingView",
    "aria-busy": "true",
    "aria-label": t('ui.feishu.loadingFeishuBots'),
  },
    h("div", { className: "dim-spinner", "aria-hidden": "true" }),
    h("span", null, t('ui.feishu.loadingFeishuConnectionStatus')),
  );
}

function EmptyView({ onStart, busy }) {
  return h("div", { className: "bxf-card dim-surfaceCard" },
    h("div", { className: "bxf-cardBody bxf-intro dim-surfaceBody dim-emptyView" },
      h("div", { className: "bxf-introCopy dim-emptyCopy" },
        h("div", { className: "bxf-stateLabel dim-stateLabel" },
          h("span", { className: "bxf-dot dim-stateDot" }), h("span", null, t('ui.feishu.noBotConnectedYet'))),
        h("h3", null, t('ui.feishu.scanToCreateYourFirstFeishu')),
        h("p", null, t('ui.feishu.noAppIdIsRequiredYou')),
        h("div", { className: "bxf-actions dim-viewActions" },
          h(Button, {
            kind: "primary", onClick: onStart,
            disabled: busy, "aria-busy": busy ? "true" : undefined,
          }, busy ? t('ui.dingtalk.generatingQrCode') : t('ui.feishu.generateFeishuQrCode'))),
      ),
      h("div", { className: "bxf-markStage dim-emptyBrand", "aria-hidden": "true" }, h(BrandMark)),
    ),
  );
}

function safeVerificationHref(value) {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === "https:"
      && [
        "accounts.feishu.cn",
        "accounts.larksuite.com",
        "open.feishu.cn",
        "open.larksuite.com",
      ].includes(url.hostname)
      && !url.port
      && !url.username
      && !url.password
      ? url.toString()
      : undefined;
  } catch {
    return undefined;
  }
}

function safeQrSource(value) {
  if (!value) return undefined;
  return /^data:image\/(?:png|webp|svg\+xml)(?:;charset=[^;,]+)?;base64,/i.test(value)
    ? value
    : undefined;
}

function QrPane({ provision, now, onRefresh, onCancel, busy }) {
  const [imageFailed, setImageFailed] = React.useState(false);
  const qrSource = safeQrSource(provision.qrCodeDataUrl);
  const href = safeVerificationHref(provision.verificationUrl);
  const remaining = Math.max(0, provision.expiresAt - now);
  const expired = provision.expired === true || remaining === 0;
  const progress = Math.min(1, remaining / Math.max(1, provision.durationMs ?? remaining));
  const repairing = isCallbackRepair(provision);
  const grantingGroupMessages = isGroupMessagePermission(provision);
  const botName = provision.botName ?? t('ui.feishu.thisBot');

  React.useEffect(() => setImageFailed(false), [qrSource]);

  return h("div", { className: "bxf-card bxf-provisionCard dim-surfaceCard" },
    h("div", { className: "bxf-cardBody bxf-qrLayout dim-surfaceBody dim-qrLayout" },
      h("div", { className: "bxf-qrColumn dim-qrColumn" },
        h("div", { className: "bxf-qrFrame dim-qrFrame" },
          qrSource && !imageFailed
              ? h("img", {
                src: qrSource,
                alt: repairing
                  ? t('ui.feishu.repairQrAlt', { name: botName })
                  : grantingGroupMessages
                    ? t('ui.feishu.groupQrAlt', { name: botName })
                    : t('ui.feishu.oneTimeAuthorizationQrCodeFor'),
                onError: () => setImageFailed(true),
              })
            : h("div", { className: "bxf-qrFallback dim-qrFallback" },
                h("div", null, h(QrIcon), h("span", null, t('ui.feishu.theQrCodeIsNotReady')))),
          expired
            ? h("div", { className: "bxf-expiredOverlay dim-qrExpired", role: "status" },
                h("div", null, t('ui.dingtalk.qrCodeExpired'), h("br"), t('ui.feishu.refreshAndScanAgain')))
            : null,
        ),
        h("div", {
          className: "bxf-countdown dim-countdown",
          "aria-label": expired ? t('ui.dingtalk.qrCodeExpired') : t('ui.common.qrRemaining', { remaining: formatRemaining(remaining) }),
        },
          h("div", { className: "bxf-countdownTop dim-countdownTop", "aria-hidden": "true" },
            h("span", null, expired ? t('ui.feishu.waitingToRefresh') : t('ui.dingtalk.qrCodeExpiresIn')),
            h("strong", null, formatRemaining(remaining))),
          h("div", { className: "bxf-progress dim-progress", "aria-hidden": "true" },
            h("span", { style: { "--bxf-progress": `${Math.round(progress * 100)}%` } })),
        ),
      ),
      h("div", { className: "bxf-qrCopy dim-qrCopy" },
        h("div", { className: "bxf-stateLabel dim-stateLabel" },
          h("span", { className: "bxf-dot dim-stateDot", "data-tone": "warning" }),
          h("span", null, repairing
            ? t('ui.feishu.repairingBot', { name: botName })
            : grantingGroupMessages
              ? t('ui.feishu.grantingGroupPermission', { name: botName })
              : t('ui.feishu.addingANewBot'))),
        h("h3", null, expired
          ? t('ui.feishu.refreshTheQrCodeToContinue')
          : repairing
            ? t('ui.feishu.scanWithFeishuToRepairCard')
            : grantingGroupMessages
              ? t('ui.feishu.confirmGroupMessagePermissionWithFeishu')
              : t('ui.feishu.scanWithFeishuToCreateA')),
        h("p", null, repairing
          ? t('ui.feishu.scanningUpdatesTheExistingFeishuApp')
          : grantingGroupMessages
            ? t('ui.feishu.scanningUpdatesTheExistingFeishuApp2')
            : t('ui.feishu.scanningAddsOneBotExistingBots')),
        h("ol", { className: "bxf-steps dim-steps" },
          h("li", null, t('ui.feishu.openFeishuOnYourPhoneAnd')),
          h("li", null, repairing
            ? t('ui.feishu.reviewTheExistingAppNameAnd')
            : grantingGroupMessages
              ? t('ui.feishu.reviewTheExistingAppAndConfirm')
              : t('ui.feishu.reviewTheAppNameAndPermissions')),
          h("li", null, repairing
            ? t('ui.feishu.keepThisPageOpenUntilCard')
            : grantingGroupMessages
              ? t('ui.feishu.keepThisPageOpenWhileThe')
              : t('ui.feishu.keepThisPageOpenUntilThe'))),
        h("div", { className: "bxf-actions dim-viewActions" },
          expired
            ? h(Button, {
                kind: "primary", onClick: onRefresh, disabled: busy,
              }, busy ? t('ui.feishu.refreshing') : t('ui.feishu.refreshQrCode'))
            : href
              ? h("a", {
                  className: "bxf-button bxf-link", "data-kind": "secondary",
                  href, target: "_blank", rel: "noopener noreferrer",
                }, h("span", null, t('ui.feishu.openInFeishu')))
              : null,
          !expired
            ? h(Button, { onClick: onRefresh, disabled: busy }, t('ui.dingtalk.getAnotherQrCode'))
            : null,
          h(Button, { onClick: onCancel, disabled: busy }, repairing
            ? t('ui.feishu.cancelRepair')
            : grantingGroupMessages ? t('ui.feishu.cancelAuthorization') : t('ui.feishu.cancel'))),
      ),
    ),
  );
}

function ProvisionProgress({ phase, provision, onCancel, busy }) {
  const connecting = phase === "connecting";
  const repairing = isCallbackRepair(provision);
  const grantingGroupMessages = isGroupMessagePermission(provision);
  return h("div", {
    className: "bxf-card bxf-provisionCard dim-surfaceCard dim-loadingView",
    "aria-busy": "true",
  },
    h("div", { className: "dim-spinner", "aria-hidden": "true" }),
    h("h3", null, connecting
      ? repairing
        ? t('ui.feishu.confirmedFinishingCardButtonRepair')
        : grantingGroupMessages
          ? t('ui.feishu.confirmedEnablingAllMessageMode')
          : t('ui.feishu.confirmedConnectingTheNewBot')
      : repairing
        ? t('ui.feishu.preparingTheRepairQrCode')
        : grantingGroupMessages ? t('ui.feishu.preparingPermissionAuthorizationQrCode') : t('ui.feishu.preparingAuthorizationQrCode')),
    h("p", null, connecting
      ? repairing
        ? t('ui.feishu.theUpdateWasSubmittedVerifyingThe')
        : grantingGroupMessages
          ? t('ui.feishu.thePermissionUpdateWasSubmittedSaving')
          : t('ui.feishu.savingCredentialsAndCheckingTheNew')
      : repairing
        ? t('ui.feishu.requestingAOneTimeUpdateQr')
        : grantingGroupMessages
          ? t('ui.feishu.requestingAGroupMessagePermissionQr')
          : t('ui.feishu.requestingAOneTimeAuthorizationQr')),
    connecting && onCancel
      ? h("div", { className: "bxf-actions dim-viewActions", style: { justifyContent: "center" } },
          h(Button, { onClick: onCancel, disabled: busy }, repairing
            ? t('ui.feishu.cancelRepair')
            : grantingGroupMessages ? t('ui.feishu.cancelAuthorization') : t('ui.feishu.cancel')))
      : null,
  );
}

function ProvisionError({ error, provision, onRetry, onCancel, busy }) {
  const repairing = isCallbackRepair(provision);
  const grantingGroupMessages = isGroupMessagePermission(provision);
  return h("div", { className: "bxf-card bxf-provisionCard dim-surfaceCard" },
    h("div", { className: "bxf-inlineError dim-inlineError", role: "alert" },
      h("div", null,
        h("h3", null, repairing
          ? t('ui.feishu.cardButtonRepairDidNotFinish')
          : grantingGroupMessages ? t('ui.feishu.groupMessagePermissionWasNotGranted') : t('ui.feishu.theNewBotWasNotAdded')),
        h("p", null, error.message),
        error.code ? h("span", { className: "bxf-errorCode" }, error.code) : null,
        h("div", { className: "bxf-actions dim-viewActions" },
          h(Button, { kind: "primary", onClick: onRetry, disabled: busy },
            busy ? t('ui.feishu.retrying') : t('ui.dingtalk.generateANewQrCode2')),
          h(Button, { onClick: onCancel, disabled: busy }, t('ui.dingtalk.close'))),
      ),
    ),
  );
}

const HEALTH_LABELS = {
  connected: t('ui.dingtalk.connected'),
  connecting: t('ui.dingtalk.connecting2'),
  offline: t('ui.feishu.disconnected'),
  error: t('ui.feishu.needsAttention'),
};

function formatCheckedTime(timestamp) {
  if (!timestamp) return t('ui.dingtalk.notCheckedYet');
  try {
    return new Intl.DateTimeFormat("zh-CN", {
      hour: "2-digit", minute: "2-digit", second: "2-digit",
    }).format(new Date(timestamp));
  } catch {
    return t('ui.dingtalk.justNow');
  }
}

function connectionTestNotice(value) {
  if (value?.testMessage?.sent === true) {
    return t('ui.feishu.testMessageSentCheckTheFeishu');
  }
  if (value?.testMessage?.code === 'test-target-unavailable') {
    return t('ui.dingtalk.connectionCheckCompletedTheBotHas');
  }
  return value?.testMessage ? t('ui.feishu.connectionCheckCompletedButTheTest') : null;
}

function RemoveConfirmation({ bot, busy, onConfirm, onCancel }) {
  const cancelRef = React.useRef(null);
  const idPart = bot.botId.replace(/[^a-zA-Z0-9_-]/g, "-");
  const titleId = `bxf-remove-title-${idPart}`;
  const descriptionId = `bxf-remove-description-${idPart}`;

  React.useEffect(() => cancelRef.current?.focus(), []);

  return h("div", {
    className: "bxf-confirm dim-confirm",
    role: "alertdialog",
    "aria-labelledby": titleId,
    "aria-describedby": descriptionId,
    onKeyDown: (event) => {
      if (event.key === "Escape" && !busy) {
        event.preventDefault();
        onCancel();
      }
    },
  },
    h("h4", { id: titleId }, t('ui.common.removeConfirm', { name: bot.bot.name })),
    h("p", { id: descriptionId },
      t('ui.feishu.thisStopsTheBotConnectionAnd')),
    h("div", { className: "bxf-actions dim-viewActions" },
      h(Button, { ref: cancelRef, onClick: onCancel, disabled: busy }, t('ui.dingtalk.keepBot')),
      h(Button, { kind: "danger", onClick: onConfirm, disabled: busy },
        busy ? t('ui.dingtalk.removing') : t('ui.dingtalk.removeConnection'))),
  );
}

function GroupResponseModeEditor({
  value,
  permissionGranted = false,
  disabled = false,
  authorizationDisabled = false,
  onSave,
  onAuthorize,
}) {
  const current = normalizeGroupResponseMode(value);
  const [saving, setSaving] = React.useState(false);
  const [authorizing, setAuthorizing] = React.useState(false);
  const [error, setError] = React.useState(null);

  const change = async (event) => {
    const next = normalizeGroupResponseMode(event.target.value);
    if (next === current || saving || disabled) return;
    setSaving(true);
    setError(null);
    try {
      await onSave?.(next);
    } catch (cause) {
      setError(cause?.message ?? t('ui.feishu.couldNotUpdateTheGroupResponse'));
    } finally {
      setSaving(false);
    }
  };

  const authorize = async () => {
    if (current !== "all" || saving || authorizing || disabled || authorizationDisabled) return;
    setAuthorizing(true);
    setError(null);
    try {
      await onAuthorize?.();
    } catch (cause) {
      setError(cause?.message ?? t('ui.feishu.couldNotAuthorizeGroupMessagePermission'));
    } finally {
      setAuthorizing(false);
    }
  };

  return h("div", { className: "bxf-responseMode dim-responseMode" },
    h("div", { className: "bxf-responseModeHeader dim-responseModeHeader" },
      h("span", null, t('ui.feishu.groupResponseMode')),
      saving || authorizing
        ? h("span", { className: "bxf-responseModeStatus dim-responseModeStatus" },
            saving ? t('ui.agentPreset.saving') : t('ui.feishu.preparingAuthorization'))
        : null),
    h("select", {
      className: "bxf-responseModeSelect dim-responseModeSelect",
      value: current,
      disabled: disabled || saving,
      "aria-label": t('ui.feishu.groupResponseMode'),
      onChange: (event) => { void change(event); },
    },
      h("option", { value: "mention" }, t('ui.feishu.onlyRespondWhenMentionedRecommended')),
      h("option", { value: "all" }, t('ui.feishu.respondToAllGroupMessages')),
    ),
    h("small", { className: "bxf-responseModeHelp dim-responseModeHelp" },
      current === "mention"
        ? permissionGranted
          ? t('ui.feishu.directMessagesAlwaysWorkGroupChats')
          : t('ui.feishu.directMessagesAlwaysWorkGroupChats2')
        : permissionGranted
          ? t('ui.feishu.theReadAllMessagesInAssociated')
          : t('ui.feishu.theReadAllMessagesInAssociated2')),
    current === "all"
      ? h("div", { className: "bxf-responseModePermissionAction dim-responseModePermissionAction" },
          h(Button, {
            className: "bxf-responseModePermissionButton",
            size: "small",
            disabled: disabled || authorizationDisabled || saving || authorizing,
            "aria-busy": authorizing ? "true" : undefined,
            "aria-label": permissionGranted ? t('ui.feishu.reauthorizeGroupMessagePermission') : t('ui.feishu.authorizeGroupMessagePermission'),
            onClick: () => { void authorize(); },
          }, authorizing ? t('ui.feishu.preparing') : permissionGranted ? t('ui.feishu.reauthorize') : t('ui.feishu.authorize')))
      : null,
    error ? h("p", {
      className: "bxf-responseModeError dim-responseModeError",
      role: "alert",
    }, error) : null,
  );
}

export function BotCard({
  connection,
  busy,
  repairDisabled,
  provisionContent,
  provisionRef,
  actionError,
  testNotice,
  removing,
  onReconnect,
  onRepairCallback,
  onWorkspaceSave,
  onAgentPresetSave,
  onGroupResponseModeSave,
  onGroupMessagePermissionAuthorize,
  onRequestRemove,
  onConfirmRemove,
  onCancelRemove,
  cardRef,
  removeButtonRef,
}) {
  const { bot, health, state, connected } = connection;
  const stateForDisplay = busy === "reconnect"
    ? "connecting"
    : state;
  const tone = stateForDisplay === "connected"
    ? "success"
    : stateForDisplay === "connecting"
      ? "warning"
      : "error";
  const summary = actionError?.message
    ?? connection.error?.message
    ?? (connected ? null : health.summary);
  const titleId = `bxf-bot-${connection.botId.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
  return h("article", {
    className: "bxf-card bxf-botCard dim-botCard",
    "aria-labelledby": titleId,
    "data-bot-id": connection.botId,
    tabIndex: -1,
    ref: cardRef,
  },
    h("div", { className: "bxf-cardBody dim-botCardBody" },
      h("div", { className: "bxf-connectedTop dim-botCardTop" },
        h("div", { className: "bxf-botIdentity dim-botIdentity" },
          h("div", { className: "bxf-avatar dim-botAvatar", "aria-hidden": "true" },
            h(FeishuLogoGlyph, { size: 34 })),
          h("div", { className: "bxf-botName dim-botName" },
            h("h3", { id: titleId, title: bot.name }, bot.name),
            h("p", { title: bot.appIdMasked }, bot.appIdMasked ?? t('ui.feishu.appIdentifierStoredSecurely'))),
        ),
        h(BotStatusMeta, {
          className: "bxf-healthPill",
          dotClassName: "bxf-dot",
          tone,
          stateLabel: HEALTH_LABELS[stateForDisplay] ?? t('ui.feishu.unknownStatus'),
          lastCheckedAt: health.lastCheckedAt,
          formatCheckedTime,
          healthState: stateForDisplay,
        }),
      ),
      h(WorkspaceEditor, {
        workspace: connection.workspace,
        disabled: Boolean(busy),
        onSave: onWorkspaceSave,
      }),
      h(AgentPresetEditor, {
        agentPreset: connection.agentPreset,
        disabled: Boolean(busy),
        onSave: onAgentPresetSave,
      }),
      h(GroupResponseModeEditor, {
        value: connection.groupResponseMode,
        permissionGranted: connection.groupMessagePermissionGranted,
        disabled: Boolean(busy),
        authorizationDisabled: repairDisabled,
        onSave: onGroupResponseModeSave,
        onAuthorize: onGroupMessagePermissionAuthorize,
      }),
      provisionContent
        ? h("section", {
            className: "bxf-botProvision dim-botProvision",
            "aria-label": t('ui.feishu.authFlow', { name: bot.name }),
            "data-provision-for": connection.botId,
            ref: provisionRef,
            tabIndex: -1,
          }, provisionContent)
        : null,
      h("div", { className: "bxf-connectedFooter dim-cardFooter" },
        h("div", { className: "dim-cardFooterLayout" },
          h("div", { className: "bxf-actions bxf-botActions dim-cardActions" },
            h(Button, {
              className: "dim-cardAction", onClick: onReconnect,
              disabled: Boolean(busy), "aria-busy": busy === "reconnect" ? "true" : undefined,
              "aria-label": connected
                ? t('ui.feishu.checkConnectionOf', { name: bot.name })
                : t('ui.feishu.retryConnectionOf', { name: bot.name }),
            }, busy === "reconnect" ? (connected ? t('ui.dingtalk.checking') : t('ui.feishu.connecting')) : connected ? t('ui.dingtalk.checkConnection') : t('ui.dingtalk.reconnect')),
            h(Button, {
              className: "bxf-repairButton dim-cardAction",
              onClick: onRepairCallback,
              disabled: Boolean(busy) || repairDisabled,
              "aria-busy": busy === "callback-repair" ? "true" : undefined,
              "aria-label": t('ui.feishu.repairCardButtonsOf', { name: bot.name }),
            }, busy === "callback-repair" ? t('ui.feishu.waitingForScan') : t('ui.feishu.repairCardButtons')),
            h(Button, {
              className: "dim-cardAction", kind: "danger", onClick: onRequestRemove,
              disabled: Boolean(busy), ref: removeButtonRef,
              "aria-label": t('ui.feishu.removeFromHarness', { name: bot.name }),
            }, t('ui.dingtalk.removeConnection2'))),
          summary ? h("div", { className: "bxf-healthSummary dim-cardSummary", "data-error": actionError || connection.error ? "true" : undefined },
            summary) : null,
          testNotice ? h("div", {
            className: "bxf-healthSummary dim-cardFeedback",
            role: "status",
          }, testNotice) : null),
      ),
    ),
    removing
      ? h(RemoveConfirmation, {
          bot: connection,
          busy: busy === "delete",
          onConfirm: onConfirmRemove,
          onCancel: onCancelRemove,
        })
      : null,
  );
}

function BotList(props) {
  return h("section", { className: "bxf-listSection dim-listSection", "aria-labelledby": "bxf-bot-list-title" },
    h(ChannelListHeading, {
      className: "bxf-listHeading",
      id: "bxf-bot-list-title",
      title: t('ui.feishu.connectedBots'),
      connectionLabel: t('ui.feishu.persistentConnection'),
    }),
    h("ul", { className: "bxf-botList dim-botList", role: "list" },
      props.bots.map((bot) => h("li", { key: bot.botId },
        h(BotCard, {
          connection: bot,
          busy: props.busyByBot[bot.botId]
            ?? (isTargetedAppUpdate(props.provisioning)
              && props.provisioning.botId === bot.botId ? props.provisioning.operation : undefined),
          repairDisabled: Boolean(props.provisioning),
          provisionContent: isTargetedAppUpdate(props.provisioning)
            && props.provisioning.botId === bot.botId
            ? props.provisionContent
            : null,
          provisionRef: props.provisionRef,
          actionError: props.errorsByBot[bot.botId],
          testNotice: props.testNoticesByBot[bot.botId],
          removing: props.removeTargetId === bot.botId,
          onReconnect: () => props.onReconnect(bot),
          onRepairCallback: () => props.onRepairCallback(bot),
          onWorkspaceSave: (workspace) => props.onWorkspaceSave(bot, workspace),
          onAgentPresetSave: (agentPreset) => props.onAgentPresetSave(bot, agentPreset),
          onGroupResponseModeSave: (groupResponseMode) => props.onGroupResponseModeSave(bot, groupResponseMode),
          onGroupMessagePermissionAuthorize: () => props.onGroupMessagePermissionAuthorize(bot),
          onRequestRemove: () => props.onRequestRemove(bot),
          onConfirmRemove: () => props.onConfirmRemove(bot),
          onCancelRemove: props.onCancelRemove,
          cardRef: (node) => props.setCardRef(bot.botId, node),
          removeButtonRef: (node) => props.setRemoveButtonRef(bot.botId, node),
        }),
      ))),
  );
}

function PageError({ error, onRetry, busy }) {
  return h("div", { className: "bxf-card dim-surfaceCard" },
    h("div", { className: "bxf-error dim-inlineError", role: "alert" },
      h("div", null,
        h("h3", null, t('ui.feishu.couldNotLoadFeishuBots')),
        h("p", null, error.message),
        error.code ? h("span", { className: "bxf-errorCode" }, error.code) : null,
        h("div", { className: "bxf-actions dim-viewActions" },
          h(Button, { kind: "primary", onClick: onRetry, disabled: busy },
            busy ? t('ui.feishu.retrying') : t('ui.dingtalk.reload')))),
    ),
  );
}

const EMPTY_TOTALS = Object.freeze({ configured: 0, connected: 0 });

export function mergeFeishuSnapshotState(
  current,
  snapshot,
  { restoreProvisioning = false, now = Date.now() } = {},
) {
  if (snapshot.revision > 0 && current.revision > snapshot.revision) return current;
  let provisioning = current.provisioning;
  if (!provisioning && restoreProvisioning && snapshot.provisioning) {
    const submitted = snapshot.provisioning.submitted === true;
    provisioning = {
      phase: submitted || snapshot.state === "connecting" ? "connecting" : "qr",
      ...snapshot.provisioning,
      durationMs: Math.max(1, snapshot.provisioning.expiresAt - now),
      expired: !submitted && snapshot.provisioning.expiresAt <= now,
    };
  }
  return {
    ...current,
    phase: "ready",
    revision: snapshot.revision,
    bots: snapshot.bots,
    totals: snapshot.totals,
    provisioning,
    pageError: null,
    statusError: null,
    agentPresetCatalog: snapshot.agentPresetCatalog ?? current.agentPresetCatalog,
  };
}

export function FeishuSettingsTab({ rpcCall }) {
  const [model, setModel] = React.useState({
    phase: "loading",
    revision: 0,
    bots: [],
    totals: EMPTY_TOTALS,
    provisioning: null,
    pageError: null,
    statusError: null,
    agentPresetCatalog: EMPTY_AGENT_PRESET_CATALOG,
  });
  const [pageBusy, setPageBusy] = React.useState(false);
  const [provisionBusy, setProvisionBusy] = React.useState(false);
  const [credentialOpen, setCredentialOpen] = React.useState(false);
  const [credentialBusy, setCredentialBusy] = React.useState(false);
  const [credentialError, setCredentialError] = React.useState(null);
  const [busyByBot, setBusyByBot] = React.useState({});
  const [errorsByBot, setErrorsByBot] = React.useState({});
  const [testNoticesByBot, setTestNoticesByBot] = React.useState({});
  const [removeTargetId, setRemoveTargetId] = React.useState(null);
  const [announcement, setAnnouncement] = React.useState("");
  const [now, setNow] = React.useState(() => Date.now());
  const [focusBotId, setFocusBotId] = React.useState(null);
  const cardRefs = React.useRef(new Map());
  const removeButtonRefs = React.useRef(new Map());
  const targetedProvisionRef = React.useRef(null);
  const addButtonRef = React.useRef(null);
  const mountedRef = React.useRef(true);
  const workspaceFence = useWorkspaceSnapshotFence();
  const scheduleAnimationFrame = useAnimationFrameScheduler();

  React.useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  const announce = React.useCallback((message) => {
    setAnnouncement("");
    scheduleAnimationFrame(() => {
      if (message) setAnnouncement(message);
    }, "announcement");
  }, [scheduleAnimationFrame]);

  const invoke = React.useCallback(async (endpoint, payload = {}, signal) => {
    return unwrapRpcResult(await rpcCall(endpoint, payload, signal));
  }, [rpcCall]);

  const mergeSnapshot = React.useCallback((snapshot, { restoreProvisioning = false } = {}) => {
    const now = Date.now();
    setModel((current) => mergeFeishuSnapshotState(
      current,
      snapshot,
      { restoreProvisioning, now },
    ));
  }, []);

  const loadStatus = React.useCallback(async ({ signal, silent = false, restoreProvisioning = false } = {}) => {
    const workspaceVersion = workspaceFence.beginStatus();
    if (workspaceVersion === null || !mountedRef.current) return undefined;
    if (!silent) setPageBusy(true);
    try {
      const snapshot = normalizeBotsSnapshot(await invoke(FEISHU_ENDPOINTS.status, {}, signal));
      if (signal?.aborted || !mountedRef.current
        || !workspaceFence.canCommitStatus(workspaceVersion)) return undefined;
      mergeSnapshot(snapshot, { restoreProvisioning });
      return snapshot;
    } catch (error) {
      if (signal?.aborted || error?.name === "AbortError" || !mountedRef.current
        || !workspaceFence.canCommitStatus(workspaceVersion)) return undefined;
      const presented = presentError(error);
      setModel((current) => current.phase === "loading" || !silent
        ? { ...current, phase: "error", pageError: presented }
        : { ...current, statusError: presented });
      return undefined;
    } finally {
      if (!silent && !signal?.aborted && mountedRef.current) setPageBusy(false);
    }
  }, [invoke, mergeSnapshot, workspaceFence]);

  React.useEffect(() => {
    const controller = new AbortController();
    void loadStatus({ signal: controller.signal, restoreProvisioning: true });
    return () => controller.abort();
  }, [loadStatus]);

  // One list request refreshes every bot. This continues while a new bot is
  // being provisioned so existing connections never disappear from the UI.
  React.useEffect(() => {
    if (model.phase !== "ready") return undefined;
    const controller = new AbortController();
    let inFlight = false;
    const timer = window.setInterval(async () => {
      if (inFlight) return;
      inFlight = true;
      await loadStatus({
        signal: controller.signal,
        silent: true,
        restoreProvisioning: false,
      });
      inFlight = false;
    }, 15_000);
    return () => {
      controller.abort();
      window.clearInterval(timer);
    };
  }, [loadStatus, model.phase]);

  React.useEffect(() => {
    if (!focusBotId) return;
    const node = cardRefs.current.get(focusBotId);
    if (!node) return;
    node.scrollIntoView?.({ block: "nearest", behavior: "smooth" });
    node.focus({ preventScroll: true });
    setFocusBotId(null);
  }, [focusBotId, model.bots]);

  const targetedProvisionFocusKey = isTargetedAppUpdate(model.provisioning)
    ? `${model.provisioning.botId}:${model.provisioning.attemptId ?? "preparing"}:${model.provisioning.phase}`
    : null;
  React.useEffect(() => {
    if (!targetedProvisionFocusKey) return;
    scheduleAnimationFrame(() => {
      const node = targetedProvisionRef.current;
      if (!node) return;
      node.scrollIntoView?.({ block: "nearest", behavior: "smooth" });
      node.focus?.({ preventScroll: true });
    }, "targeted-provision-focus");
  }, [scheduleAnimationFrame, targetedProvisionFocusKey]);

  const startProvisioning = React.useCallback(async ({
    replace = false,
    operation = FEISHU_REGISTRATION_OPERATIONS.PROVISION,
    bot,
  } = {}) => {
    const repairing = operation === CALLBACK_REPAIR_OPERATION;
    const grantingGroupMessages = operation === GROUP_MESSAGE_PERMISSION_OPERATION;
    const targetedUpdate = repairing || grantingGroupMessages;
    const botId = targetedUpdate ? bot?.botId ?? model.provisioning?.botId : undefined;
    const botName = targetedUpdate ? bot?.bot?.name ?? model.provisioning?.botName : undefined;
    if (targetedUpdate && !botId) return;
    setCredentialOpen(false);
    setCredentialError(null);
    setProvisionBusy(true);
    announce("");
    const previousAttemptId = model.provisioning?.attemptId;
    setModel((current) => ({
      ...current,
      phase: current.phase === "loading" ? "ready" : current.phase,
      provisioning: {
        phase: "creating",
        operation,
        ...(botId ? { botId } : {}),
        ...(botName ? { botName } : {}),
      },
    }));
    try {
      if (replace && previousAttemptId) {
        // A Host restart intentionally drops its in-memory registration map.
        // Replacing a stale browser attempt must still be able to start a new
        // authoritative attempt; both controller start paths already
        // supersede/deduplicate a still-live registration safely.
        try {
          await invoke(FEISHU_ENDPOINTS.cancelProvisioning, { attemptId: previousAttemptId });
        } catch {
          // Continue with begin. It is the source of truth for the new attempt.
        }
      }
      const endpoint = repairing
        ? FEISHU_ENDPOINTS.beginCallbackRepair
        : grantingGroupMessages
          ? FEISHU_ENDPOINTS.beginGroupMessagePermission
          : FEISHU_ENDPOINTS.beginProvisioning;
      const provision = normalizeProvisioning(await invoke(
        endpoint,
        targetedUpdate ? { botId } : { locale: "zh-CN" },
      ));
      if (targetedUpdate
        && (provision.operation !== operation || provision.botId !== botId)) {
        throw new Error(grantingGroupMessages
          ? t('ui.feishu.feishuReturnedAGroupMessagePermission')
          : t('ui.feishu.feishuReturnedARepairQrCode'));
      }
      const timestamp = Date.now();
      setNow(timestamp);
      setModel((current) => ({
        ...current,
        provisioning: {
          phase: "qr",
          ...provision,
          ...(botName ? { botName } : {}),
          durationMs: Math.max(1, provision.expiresAt - timestamp),
          expired: false,
        },
      }));
      announce(repairing
        ? t('ui.feishu.repairQrReady', { name: botName ?? t('ui.common.defaultBotName') })
        : grantingGroupMessages
          ? t('ui.feishu.groupQrReady', { name: botName ?? t('ui.common.defaultBotName') })
          : t('ui.feishu.authorizationQrCodeGeneratedScanIt'));
    } catch (error) {
      setModel((current) => ({
        ...current,
        provisioning: {
          phase: "error",
          operation,
          ...(botId ? { botId } : {}),
          ...(botName ? { botName } : {}),
          ...(replace && previousAttemptId ? { attemptId: previousAttemptId } : {}),
          error: presentError(error),
        },
      }));
    } finally {
      setProvisionBusy(false);
    }
  }, [
    announce,
    invoke,
    model.provisioning?.attemptId,
    model.provisioning?.botId,
    model.provisioning?.botName,
  ]);

  const bindCredentials = React.useCallback(async ({ identity, secret }) => {
    const snapshotVersion = workspaceFence.beginMutation();
    setCredentialBusy(true);
    setCredentialError(null);
    try {
      const snapshot = normalizeBotsSnapshot(await invoke(
        FEISHU_ENDPOINTS.bindCredentials,
        { appId: identity, appSecret: secret },
      ));
      if (mountedRef.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        mergeSnapshot(snapshot);
      }
      setCredentialOpen(false);
      announce(t('ui.feishu.feishuBotCredentialsConnected'));
    } catch (error) {
      setCredentialError(presentError(error));
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      setCredentialBusy(false);
    }
  }, [announce, invoke, loadStatus, mergeSnapshot, workspaceFence]);

  const cancelProvisioning = React.useCallback(async () => {
    const activeProvision = model.provisioning;
    const attemptId = activeProvision?.attemptId;
    const repairing = isCallbackRepair(activeProvision);
    const grantingGroupMessages = isGroupMessagePermission(activeProvision);
    const targetedUpdate = isTargetedAppUpdate(activeProvision);
    const targetBot = targetedUpdate
      ? model.bots.find((bot) => bot.botId === activeProvision?.botId)
      : undefined;
    setProvisionBusy(true);
    try {
      const result = attemptId
        ? normalizePollResult(await invoke(FEISHU_ENDPOINTS.cancelProvisioning, { attemptId }))
        : null;
      if (targetedUpdate && result) {
        if (result.operation !== activeProvision.operation
          || result.botId !== activeProvision.botId) {
          throw new Error(t('ui.feishu.feishuReturnedRegistrationProgressForA'));
        }
        if (result.status === "connecting") {
          setModel((current) => current.provisioning?.attemptId === attemptId
            ? {
                ...current,
                provisioning: {
                  ...current.provisioning,
                  ...(result.provisioning ?? {}),
                  phase: "connecting",
                  submitted: true,
                  expired: false,
                },
              }
            : current);
          announce(grantingGroupMessages
            ? t('ui.feishu.thePermissionUpdateWasSubmittedEnabling')
            : t('ui.feishu.theUpdateWasSubmittedVerifyingThe'));
          return;
        }
        if (result.status === "connected") {
          const targetBotName = targetBot?.bot.name ?? activeProvision.botName ?? t('ui.common.defaultBotName');
          setModel((current) => ({ ...current, provisioning: null }));
          announce(grantingGroupMessages
            ? t('ui.feishu.groupPermissionGranted', { name: targetBotName })
            : t('ui.feishu.cardButtonsRepaired', { name: targetBotName }));
          if (activeProvision.botId) setFocusBotId(activeProvision.botId);
          await loadStatus({ silent: true, restoreProvisioning: false });
          return;
        }
      }
      setModel((current) => ({ ...current, provisioning: null }));
      announce(repairing
        ? t('ui.feishu.cardButtonRepairWasCancelled')
        : grantingGroupMessages ? t('ui.feishu.groupMessagePermissionAuthorizationWasCancelled') : t('ui.feishu.addingTheBotWasCancelled'));
      await loadStatus({ silent: true, restoreProvisioning: false });
      scheduleAnimationFrame(() => {
        if (targetedUpdate && activeProvision.botId) {
          cardRefs.current.get(activeProvision.botId)?.focus();
        } else {
          addButtonRef.current?.focus();
        }
      }, "focus");
    } catch (error) {
      setModel((current) => ({
        ...current,
        provisioning: {
          ...activeProvision,
          phase: "error",
          attemptId,
          error: presentError(error),
        },
      }));
    } finally {
      setProvisionBusy(false);
    }
  }, [announce, invoke, loadStatus, model.bots, model.provisioning, scheduleAnimationFrame]);

  const countdownAttemptId = model.provisioning?.attemptId;
  const countdownPhase = model.provisioning?.phase;
  const countdownExpiresAt = model.provisioning?.expiresAt;
  const countdownExpired = model.provisioning?.expired;
  React.useEffect(() => {
    if (!countdownAttemptId || countdownPhase !== "qr" || countdownExpired) return undefined;
    const tick = () => {
      const timestamp = Date.now();
      setNow(timestamp);
      if (timestamp >= countdownExpiresAt) {
        setModel((current) => current.provisioning?.attemptId === countdownAttemptId
          ? { ...current, provisioning: { ...current.provisioning, expired: true } }
          : current);
      }
    };
    tick();
    const timer = window.setInterval(tick, 1_000);
    return () => window.clearInterval(timer);
  }, [countdownAttemptId, countdownPhase, countdownExpiresAt, countdownExpired]);

  React.useEffect(() => {
    const provision = model.provisioning;
    if (!provision
      || !["qr", "connecting"].includes(provision.phase)
      || !provision.attemptId
      || provision.expired) return undefined;

    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      try {
        const result = normalizePollResult(await invoke(
          FEISHU_ENDPOINTS.pollProvisioning,
          { attemptId: provision.attemptId },
          controller.signal,
        ));
        if (result.operation !== provision.operation
          || (isTargetedAppUpdate(provision) && result.botId !== provision.botId)) {
          throw new Error(t('ui.feishu.feishuReturnedRegistrationProgressForA'));
        }
        if (result.status === "connected") {
          const snapshot = await loadStatus({ signal: controller.signal, silent: true, restoreProvisioning: false });
          const targetBot = snapshot?.bots.find((bot) => bot.botId === result.botId);
          if (!snapshot) {
            throw new Error(isCallbackRepair(provision)
              ? t('ui.feishu.theCardCallbackWasUpdatedBut')
              : isGroupMessagePermission(provision)
                ? t('ui.feishu.theGroupMessagePermissionWasUpdated')
                : t('ui.feishu.theBotWasCreatedButIts'));
          }
          if (!targetBot?.connected) {
            setModel((current) => current.provisioning?.attemptId === provision.attemptId
              ? { ...current, provisioning: { ...current.provisioning, phase: "connecting" } }
              : current);
            return;
          }
          setModel((current) => ({ ...current, provisioning: null }));
          announce(isCallbackRepair(provision)
            ? t('ui.feishu.cardButtonsRepaired', { name: targetBot.bot.name })
            : isGroupMessagePermission(provision)
              ? t('ui.feishu.groupPermissionGranted', { name: targetBot.bot.name })
              : targetBot
                ? t('ui.feishu.connectedReady', { name: targetBot.bot.name })
                : t('ui.feishu.theNewFeishuBotIsConnected'));
          if (result.botId) setFocusBotId(result.botId);
          return;
        }
        if (result.status === "failed") {
          const error = new Error(result.message
            ?? (isCallbackRepair(provision)
              ? t('ui.feishu.couldNotRepairTheFeishuCard')
              : isGroupMessagePermission(provision)
                ? t('ui.feishu.couldNotGrantTheFeishuGroup')
                : t('ui.feishu.couldNotCreateTheFeishuApp')));
          error.code = "FEISHU_PROVISION_FAILED";
          throw error;
        }
        if (result.status === "expired") {
          setModel((current) => current.provisioning?.attemptId === provision.attemptId
            ? { ...current, provisioning: { ...current.provisioning, phase: "qr", expired: true } }
            : current);
          return;
        }
        setModel((current) => {
          if (current.provisioning?.attemptId !== provision.attemptId) return current;
          const next = result.provisioning ?? current.provisioning;
          return {
            ...current,
            provisioning: {
              ...current.provisioning,
              ...next,
              phase: ["scanned", "connecting"].includes(result.status) ? "connecting" : "qr",
            },
          };
        });
      } catch (error) {
        if (error?.name === "AbortError") return;
        setModel((current) => current.provisioning?.attemptId === provision.attemptId
          ? {
              ...current,
              provisioning: {
                ...current.provisioning,
                phase: "error",
                attemptId: provision.attemptId,
                error: presentError(error),
              },
            }
          : current);
      }
    }, provision.pollIntervalMs);
    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [announce, invoke, loadStatus, model.provisioning]);

  const setBotBusy = React.useCallback((botId, value) => {
    setBusyByBot((current) => {
      const next = { ...current };
      if (value) next[botId] = value;
      else delete next[botId];
      return next;
    });
  }, []);

  const setBotError = React.useCallback((botId, error) => {
    setErrorsByBot((current) => {
      const next = { ...current };
      if (error) next[botId] = presentError(error);
      else delete next[botId];
      return next;
    });
  }, []);

  const repairCallback = React.useCallback((connection) => {
    if (model.provisioning) return;
    setRemoveTargetId(null);
    setBotError(connection.botId, null);
    setTestNoticesByBot((current) => {
      const next = { ...current };
      delete next[connection.botId];
      return next;
    });
    void startProvisioning({
      operation: CALLBACK_REPAIR_OPERATION,
      bot: connection,
    });
  }, [model.provisioning, setBotError, startProvisioning]);

  const reconnectOneBot = React.useCallback(async (connection) => {
    const { botId, bot } = connection;
    const snapshotVersion = workspaceFence.beginMutation();
    setBotBusy(botId, "reconnect");
    setBotError(botId, null);
    setTestNoticesByBot((current) => {
      const next = { ...current };
      delete next[botId];
      return next;
    });
    try {
      const value = await invoke(FEISHU_ENDPOINTS.reconnectBot, { botId, sendTest: true });
      const snapshot = normalizeBotsSnapshot(value);
      if (mountedRef.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        mergeSnapshot(snapshot);
      }
      const refreshed = snapshot.bots.find((item) => item.botId === botId);
      if (!refreshed?.connected) {
        const error = new Error(
          refreshed?.error?.message ?? refreshed?.health.summary ?? t('ui.feishu.theBotIsStillOffline'),
        );
        error.code = refreshed?.error?.code ?? "FEISHU_BOT_OFFLINE";
        throw error;
      }
      const testNotice = connectionTestNotice(value);
      if (mountedRef.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        setTestNoticesByBot((current) => ({ ...current, [botId]: testNotice }));
      }
      announce(testNotice ?? (connection.connected
        ? t('ui.feishu.connectionCheckDone', { name: bot.name })
        : t('ui.feishu.reconnected', { name: bot.name })));
    } catch (error) {
      const failure = new Error(t('ui.dingtalk.connectionCheckFailedTryAgainLater'));
      failure.code = error?.code;
      setBotError(botId, failure);
      announce(failure.message);
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      setBotBusy(botId, null);
    }
  }, [announce, invoke, loadStatus, mergeSnapshot, setBotBusy, setBotError, workspaceFence]);

  const saveWorkspace = React.useCallback(async (connection, workspace) => {
    const { botId } = connection;
    const workspaceVersion = workspaceFence.beginMutation();
    setBotBusy(botId, "workspace");
    setBotError(botId, null);
    try {
      const snapshot = normalizeBotsSnapshot(await invoke(
        FEISHU_ENDPOINTS.setWorkspace,
        { botId, workspace },
      ));
      if (mountedRef.current && workspaceFence.canCommitMutation(workspaceVersion)) {
        mergeSnapshot(snapshot);
      }
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      if (mountedRef.current) setBotBusy(botId, null);
    }
  }, [invoke, loadStatus, mergeSnapshot, setBotBusy, setBotError, workspaceFence]);

  const saveAgentPreset = React.useCallback(async (connection, agentPreset) => {
    const { botId } = connection;
    const snapshotVersion = workspaceFence.beginMutation();
    setBotBusy(botId, "preset");
    setBotError(botId, null);
    try {
      const snapshot = normalizeBotsSnapshot(await invoke(
        FEISHU_ENDPOINTS.setAgentPreset,
        { botId, agentPreset },
      ));
      if (mountedRef.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        mergeSnapshot(snapshot);
      }
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      if (mountedRef.current) setBotBusy(botId, null);
    }
  }, [invoke, loadStatus, mergeSnapshot, setBotBusy, setBotError, workspaceFence]);

  const authorizeGroupMessages = React.useCallback(async (connection) => {
    const { botId } = connection;
    if (model.provisioning) {
      throw new Error(t('ui.feishu.finishTheCurrentFeishuAuthorizationBefore'));
    }
    setRemoveTargetId(null);
    setBotError(botId, null);
    setTestNoticesByBot((current) => {
      const next = { ...current };
      delete next[botId];
      return next;
    });
    await startProvisioning({
      operation: GROUP_MESSAGE_PERMISSION_OPERATION,
      bot: connection,
    });
  }, [model.provisioning, setBotError, startProvisioning]);

  const saveGroupResponseMode = React.useCallback(async (connection, groupResponseMode) => {
    const { botId } = connection;
    if (groupResponseMode === "all" && connection.groupMessagePermissionGranted !== true) {
      await authorizeGroupMessages(connection);
      return;
    }
    const snapshotVersion = workspaceFence.beginMutation();
    setBotBusy(botId, "group-response-mode");
    setBotError(botId, null);
    try {
      const snapshot = normalizeBotsSnapshot(await invoke(
        FEISHU_ENDPOINTS.setGroupResponseMode,
        { botId, groupResponseMode },
      ));
      if (mountedRef.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        mergeSnapshot(snapshot);
      }
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      if (mountedRef.current) setBotBusy(botId, null);
    }
  }, [
    invoke,
    authorizeGroupMessages,
    loadStatus,
    mergeSnapshot,
    setBotBusy,
    setBotError,
    workspaceFence,
  ]);

  const requestRemove = React.useCallback((connection) => {
    setRemoveTargetId(connection.botId);
  }, []);

  const cancelRemove = React.useCallback(() => {
    const botId = removeTargetId;
    setRemoveTargetId(null);
    scheduleAnimationFrame(() => removeButtonRefs.current.get(botId)?.focus(), "focus");
  }, [removeTargetId, scheduleAnimationFrame]);

  const confirmRemove = React.useCallback(async (connection) => {
    const { botId, bot } = connection;
    const snapshotVersion = workspaceFence.beginMutation();
    setBotBusy(botId, "delete");
    setBotError(botId, null);
    try {
      const snapshot = normalizeBotsSnapshot(await invoke(
        FEISHU_ENDPOINTS.deleteBot,
        { botId, confirm: true },
      ));
      setRemoveTargetId(null);
      if (mountedRef.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        mergeSnapshot(snapshot);
      }
      announce(t('ui.feishu.removedNotice', { name: bot.name }));
      scheduleAnimationFrame(() => addButtonRef.current?.focus(), "focus");
    } catch (error) {
      setBotError(botId, error);
      announce(t('ui.feishu.removeFailed', { name: bot.name }));
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      setBotBusy(botId, null);
    }
  }, [announce, invoke, loadStatus, mergeSnapshot, scheduleAnimationFrame, setBotBusy, setBotError, workspaceFence]);

  const provision = model.provisioning;
  const targetedProvisioning = isTargetedAppUpdate(provision);
  const provisionBot = provision?.botId
    ? model.bots.find((bot) => bot.botId === provision.botId)
      ?? { botId: provision.botId, bot: { name: provision.botName ?? t('ui.feishu.thisBot') } }
    : undefined;
  const restartProvisioning = ({ replace = false } = {}) => startProvisioning({
    replace,
    operation: provision?.operation ?? FEISHU_REGISTRATION_OPERATIONS.PROVISION,
    bot: provisionBot,
  });
  let provisionContent = null;
  if (provision?.phase === "creating") {
    provisionContent = h(ProvisionProgress, {
      phase: "creating", provision, busy: provisionBusy,
    });
  } else if (provision?.phase === "qr") {
    provisionContent = h(QrPane, {
      provision, now,
      onRefresh: () => void restartProvisioning({ replace: true }),
      onCancel: () => void cancelProvisioning(),
      busy: provisionBusy || model.phase !== "ready",
    });
  } else if (provision?.phase === "connecting") {
    provisionContent = h(ProvisionProgress, {
      phase: "connecting",
      provision,
      onCancel: isTargetedAppUpdate(provision) ? undefined : () => void cancelProvisioning(),
      busy: provisionBusy,
    });
  } else if (provision?.phase === "error") {
    provisionContent = h(ProvisionError, {
      error: provision.error,
      provision,
      onRetry: () => void restartProvisioning({ replace: Boolean(provision.attemptId) }),
      onCancel: () => {
        const targetBotId = provision.botId;
        setModel((current) => ({ ...current, provisioning: null }));
        void loadStatus({ silent: true, restoreProvisioning: false });
        scheduleAnimationFrame(() => {
          if (targetBotId) cardRefs.current.get(targetBotId)?.focus();
          else addButtonRef.current?.focus();
        }, "focus");
      },
      busy: provisionBusy,
    });
  }

  const credentialContent = credentialOpen
    ? h(CredentialBindingPanel, {
        channel: t('ui.feishu.feishu'),
        identityLabel: "App ID",
        identityPlaceholder: t('ui.feishu.enterTheFeishuOpenPlatformApp'),
        secretLabel: "App Secret",
        secretPlaceholder: t('ui.feishu.enterTheFeishuOpenPlatformApp2'),
        busy: credentialBusy,
        error: credentialError,
        onSubmit: bindCredentials,
        onCancel: () => { setCredentialOpen(false); setCredentialError(null); },
      })
    : null;

  const setCardRef = React.useCallback((botId, node) => {
    if (node) cardRefs.current.set(botId, node);
    else cardRefs.current.delete(botId);
  }, []);
  const setRemoveButtonRef = React.useCallback((botId, node) => {
    if (node) removeButtonRefs.current.set(botId, node);
    else removeButtonRefs.current.delete(botId);
  }, []);

  return h(AgentPresetCatalogContext.Provider, {
    value: model.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG,
  }, h("section", { className: "bxf-page dim-channelPage", "aria-label": t('ui.feishu.feishuBotSettings') },
    h(Heading, {
      totals: model.totals,
      onAdd: () => void startProvisioning(),
      onCredential: () => { setCredentialOpen((value) => !value); setCredentialError(null); },
      credentialOpen,
      adding: Boolean(provision),
      busy: provisionBusy || credentialBusy,
      addButtonRef,
    }),
    h("div", {
      className: "bxf-visuallyHidden", role: "status", "aria-live": "polite", "aria-atomic": "true",
    }, announcement),
    model.statusError
      ? h("div", { className: "bxf-statusNotice dim-statusNotice", role: "status" },
          h(AlertIcon, { size: 16 }),
          h("span", null, t('ui.common.statusAutoRefreshFailed', { reason: model.statusError.message })),
          h(Button, { size: "small", onClick: () => void loadStatus({ silent: true }), disabled: pageBusy }, t('ui.feishu.retryNow')))
      : null,
    model.phase === "loading"
      ? h(LoadingView)
      : model.phase === "error"
        ? h(PageError, {
            error: model.pageError ?? { message: t('ui.feishu.couldNotLoadConnectionStatus') },
            onRetry: () => void loadStatus(),
            busy: pageBusy,
          })
        : h(React.Fragment, null,
            credentialContent,
            targetedProvisioning ? null : provisionContent,
            model.bots.length === 0 && !provision && !credentialOpen
              ? h(EmptyView, { onStart: () => void startProvisioning(), busy: provisionBusy })
              : null,
            model.bots.length > 0
              ? h(BotList, {
                  bots: model.bots,
                  busyByBot,
                  errorsByBot,
                  testNoticesByBot,
                  removeTargetId,
                  provisioning: provision,
                  provisionContent,
                  provisionRef: targetedProvisionRef,
                  onReconnect: (bot) => void reconnectOneBot(bot),
                  onRepairCallback: repairCallback,
                  onWorkspaceSave: saveWorkspace,
                  onAgentPresetSave: saveAgentPreset,
                  onGroupResponseModeSave: saveGroupResponseMode,
                  onGroupMessagePermissionAuthorize: authorizeGroupMessages,
                  onRequestRemove: requestRemove,
                  onConfirmRemove: (bot) => void confirmRemove(bot),
                  onCancelRemove: cancelRemove,
                  setCardRef,
                  setRemoveButtonRef,
                })
              : null,
          ),
  ));
}

export function apply(ctx) {
  ctx.effect(
    () => installFeishuStyles(),
    "feishu-settings: install client styles",
  );

  const rpcCall = (endpoint, payload, signal) =>
    ctx.connection.rpc.call(FEISHU_RPC_CHANNEL, endpoint, payload, signal);

  ctx.slots.inject("settings.plugins.tab", () =>
    ctx.slots.register(
      {
        name: "settings.plugins.tab",
        id: "feishu",
        order: 20,
        label: t('ui.feishu.feishu'),
        inject: () => ({ rpcCall }),
      },
      FeishuSettingsTab,
    ),
  );
}
