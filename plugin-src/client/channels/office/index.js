import * as React from 'react';

import { h, t } from '../../i18n.js';
import {
  OFFICE_PROTOCOL_VERSION,
  OFFICE_RPC_ENDPOINTS,
  normalizeOfficeStatus,
  officeHookUrls,
  unwrapOfficeRpc,
} from './api.js';

function Button({ children, kind = 'secondary', ...props }) {
  return h('button', { ...props, type: 'button', className: 'ddt-button', 'data-kind': kind }, children);
}

function mapText(value) {
  return Object.entries(value ?? {}).map(([key, item]) => `${key}=${item}`).join('\n');
}

function parseMap(value, label) {
  const output = {};
  for (const raw of value.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line) continue;
    const index = line.indexOf('=');
    if (index < 1 || !line.slice(index + 1).trim()) {
      throw new Error(label === t('ui.office.workspaceMappings')
        ? t('ui.office.eachWorkspaceMappingMustUseAlias')
        : t('ui.office.eachInstructionPresetMappingMustUse'));
    }
    output[line.slice(0, index).trim()] = line.slice(index + 1).trim();
  }
  return output;
}

function stateLabel(model) {
  if (model.connected) return t('ui.office.connectedToOffice');
  if (!model.configured) return t('ui.office.notConfigured');
  if (model.state === 'connecting') return t('ui.dingtalk.connecting2');
  if (model.state === 'reconnecting') return t('ui.office.waitingToReconnect');
  if (model.state === 'missing-token') return t('ui.office.credentialMissing');
  return t('ui.office.configured');
}

export function OfficeSettingsTab({ rpcCall, initialStatus }) {
  const [model, setModel] = React.useState(normalizeOfficeStatus(initialStatus));
  const [phase, setPhase] = React.useState(initialStatus === undefined ? 'loading' : 'ready');
  const [busy, setBusy] = React.useState('');
  const [error, setError] = React.useState('');
  const [notice, setNotice] = React.useState('');
  const [form, setForm] = React.useState({
    baseUrl: '', deviceId: 'local-harness', deviceToken: '',
    maxConcurrency: '1', heartbeatSeconds: '30', workspaces: '', instructionPresets: '',
  });

  const invoke = React.useCallback(async (endpoint, payload = {}) => {
    if (typeof rpcCall !== 'function') throw new Error(t('ui.office.aiOfficeSettingsAreMissingAn'));
    return unwrapOfficeRpc(await rpcCall(endpoint, payload));
  }, [rpcCall]);

  const adopt = React.useCallback((value) => {
    const next = normalizeOfficeStatus(value?.snapshot ?? value);
    setModel(next);
    if (next.config) setForm((current) => ({
      ...current,
      baseUrl: next.config.baseUrl,
      deviceId: next.config.deviceId,
      maxConcurrency: String(next.config.maxConcurrency),
      heartbeatSeconds: String(next.config.heartbeatSeconds),
      workspaces: mapText(next.config.workspaces),
      instructionPresets: mapText(next.config.instructionPresets),
      deviceToken: '',
    }));
    return next;
  }, []);

  const load = React.useCallback(async () => {
    try { adopt(await invoke(OFFICE_RPC_ENDPOINTS.status)); setPhase('ready'); setError(''); }
    catch (caught) { setPhase('error'); setError(caught.message); }
  }, [adopt, invoke]);

  React.useEffect(() => { void load(); }, [load]);

  const run = async (name, operation) => {
    setBusy(name); setError(''); setNotice('');
    try { const value = await operation(); adopt(value); setNotice(name === 'test' ? t('ui.office.connectionTestPassed') : t('ui.office.configurationSaved')); }
    catch (caught) { setError(caught.message); }
    finally { setBusy(''); }
  };

  const hooks = React.useMemo(() => {
    try { return officeHookUrls(form.baseUrl); } catch { return {}; }
  }, [form.baseUrl]);
  const health = model.health ?? {};

  if (phase === 'loading') return h('div', { className: 'ddt-card ddt-loading', 'aria-busy': 'true' }, t('ui.office.loadingAiOfficeConnector'));

  return h('section', { className: 'dof-page', 'aria-label': t('ui.office.aiOfficeSettings') },
    h('div', { className: 'dof-hero' },
      h('div', { className: 'dof-heroCopy' },
        h('h3', null, 'AI Office Connector'),
        h('p', null, t('ui.office.thisMachineConnectsOutwardToThe'), OFFICE_PROTOCOL_VERSION, '。')),
      h('span', { className: 'dof-status', 'data-connected': String(model.connected) },
        h('span', { className: 'dof-dot' }), stateLabel(model))),
    model.configured ? h('div', { className: 'dof-metrics' },
      h('div', { className: 'dof-metric' }, h('span', null, t('ui.office.lastHeartbeat')), h('strong', null, health.lastHeartbeatAt ?? t('ui.office.noneYet'))),
      h('div', { className: 'dof-metric' }, h('span', null, t('ui.office.lastEvent')), h('strong', null, health.lastEventType ?? t('ui.office.noneYet'))),
      h('div', { className: 'dof-metric' }, h('span', null, t('ui.office.reconnects')), h('strong', null, String(health.reconnects ?? 0))),
      h('div', { className: 'dof-metric' }, h('span', null, 'Job Offer'), h('strong', null, String(health.jobsOffered ?? 0))),
      h('div', { className: 'dof-metric' }, h('span', null, t('ui.office.runningJobs')), h('strong', null, String(health.jobs?.running ?? 0))),
      h('div', { className: 'dof-metric' }, h('span', null, t('ui.office.completedJobs')), h('strong', null, String(health.jobs?.completed ?? 0)))) : null,
    h('div', { className: 'dof-card' },
      h('div', { className: 'dof-cardTitle' }, h('h4', null, t('ui.office.deviceConnection')), h('span', null, t('ui.office.tokenIsWrittenOnlyToThe'))),
      h('div', { className: 'dof-grid' },
        h('label', { className: 'dof-field', 'data-wide': 'true' }, 'Office Base URL',
          h('input', { value: form.baseUrl, placeholder: 'https://office.example.com', onChange: (event) => setForm({ ...form, baseUrl: event.target.value }) })),
        h('label', { className: 'dof-field' }, 'Device ID',
          h('input', { value: form.deviceId, placeholder: 'local-harness', onChange: (event) => setForm({ ...form, deviceId: event.target.value }) })),
        h('label', { className: 'dof-field' }, 'Device Token',
          h('input', { type: 'password', value: form.deviceToken, placeholder: model.tokenConfigured ? t('ui.office.storedSecurelyLeaveBlankToKeep') : t('ui.office.pasteTheOneTimeOfficeCredential'), autoComplete: 'new-password', onChange: (event) => setForm({ ...form, deviceToken: event.target.value }) })),
        h('label', { className: 'dof-field' }, t('ui.office.maxConcurrency'),
          h('input', { type: 'number', min: 1, max: 4, value: form.maxConcurrency, onChange: (event) => setForm({ ...form, maxConcurrency: event.target.value }) })),
        h('label', { className: 'dof-field' }, t('ui.office.heartbeatSeconds'),
          h('input', { type: 'number', min: 10, max: 300, value: form.heartbeatSeconds, onChange: (event) => setForm({ ...form, heartbeatSeconds: event.target.value }) })),
        h('label', { className: 'dof-field', 'data-wide': 'true' }, t('ui.office.workspaceMappings'),
          h('textarea', { value: form.workspaces, placeholder: 'office-project=/Users/you/projects/ai-office', onChange: (event) => setForm({ ...form, workspaces: event.target.value }) }),
          h('small', null, t('ui.office.oneAliasLocalAbsolutePathPer'))),
        h('label', { className: 'dof-field', 'data-wide': 'true' }, t('ui.office.instructionPresetMappings'),
          h('textarea', { value: form.instructionPresets, placeholder: t('ui.office.actionItemsTurnThisIntoAccountable'), onChange: (event) => setForm({ ...form, instructionPresets: event.target.value }) }),
          h('small', null, t('ui.office.oneAliasInstructionPerLineNew')))),
      error ? h('p', { className: 'dof-error', role: 'alert' }, error) : null,
      notice ? h('p', { className: 'dof-notice', role: 'status' }, notice) : null,
      health.error?.message ? h('p', { className: 'dof-error' }, health.error.message) : null,
      h('div', { className: 'dof-actions' },
        h(Button, { kind: 'primary', disabled: Boolean(busy), onClick: () => void run('save', () => invoke(OFFICE_RPC_ENDPOINTS.configure, {
          baseUrl: form.baseUrl,
          deviceId: form.deviceId,
          ...(form.deviceToken ? { deviceToken: form.deviceToken } : {}),
          maxConcurrency: Number(form.maxConcurrency),
          heartbeatSeconds: Number(form.heartbeatSeconds),
          workspaces: parseMap(form.workspaces, t('ui.office.workspaceMappings')),
          instructionPresets: parseMap(form.instructionPresets, t('ui.office.instructionPresetMappings')),
        })) }, busy === 'save' ? t('ui.agentPreset.saving') : t('ui.office.saveAndConnect')),
        h(Button, { disabled: !model.configured || Boolean(busy), onClick: () => void run('test', () => invoke(OFFICE_RPC_ENDPOINTS.test)) }, busy === 'test' ? t('ui.office.testing') : t('ui.office.testConnection')),
        h(Button, { disabled: !model.configured || Boolean(busy), onClick: () => void run('reconnect', () => invoke(OFFICE_RPC_ENDPOINTS.reconnect)) }, t('ui.office.reconnect')),
        h(Button, { kind: 'danger', disabled: !model.configured || Boolean(busy), onClick: () => void run('remove', () => invoke(OFFICE_RPC_ENDPOINTS.remove, { confirm: true })) }, t('ui.office.removeConnection')))),
    h('div', { className: 'dof-card' },
      h('div', { className: 'dof-cardTitle' }, h('h4', null, t('ui.office.protocolHookPreview')), h('span', null, t('ui.office.derivedFromBaseUrlNoSeparate'))),
      h('div', { className: 'dof-hooks' },
        [['SSE', hooks.stream], ['Heartbeat', hooks.heartbeat], ['Job', hooks.job], ['Result', hooks.result]].map(([label, url]) => h('div', { className: 'dof-hook', key: label }, h('strong', null, label), h('code', null, url ?? t('ui.office.invalidBaseUrl')))))),
    h('p', { className: 'dof-notice' }, t('ui.office.configurationIsSavedAndRetriedWhile')));
}
