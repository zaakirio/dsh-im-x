import * as React from 'react';

import { h, t } from './i18n.js';
import { WorkspaceDirectoryPicker } from './workspace-directory-picker.js';

export const WorkspaceDirectoryPickerContext = React.createContext(null);

export function WorkspaceEditor({ workspace, directoryPicker, disabled = false, onSave }) {
  const sharedDirectoryPicker = React.useContext(WorkspaceDirectoryPickerContext);
  const activeDirectoryPicker = directoryPicker ?? sharedDirectoryPicker;
  const [open, setOpen] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState(null);
  const editButtonRef = React.useRef(null);
  const savingRef = React.useRef(false);

  const close = React.useCallback(() => {
    setOpen(false);
    setError(null);
    queueMicrotask(() => editButtonRef.current?.focus?.());
  }, []);

  const pick = React.useCallback(async (value) => {
    if (!value || savingRef.current || disabled) return;
    if (value === workspace) {
      close();
      return;
    }
    savingRef.current = true;
    setSaving(true);
    setError(null);
    try {
      await onSave?.(value);
      close();
    } catch (cause) {
      setError(cause?.message ?? t('ui.workspaceEditor.couldNotUpdateTheWorkspaceTry'));
    } finally {
      savingRef.current = false;
      setSaving(false);
    }
  }, [close, disabled, onSave, workspace]);

  return h('div', { className: 'dim-workspace' },
    h('div', { className: 'dim-workspaceHeader' },
      h('span', null, t('ui.workspaceEditor.currentWorkspace')),
      h('button', {
        type: 'button',
        ref: editButtonRef,
        className: 'dim-workspaceEdit',
        onClick: () => { setOpen(true); setError(null); },
        disabled: disabled || !activeDirectoryPicker,
      }, t('ui.workspaceEditor.chooseFolder'))),
    workspace
      ? React.createElement('code', {
          className: 'dim-workspacePath',
          title: workspace,
        }, workspace)
      : h('code', { className: 'dim-workspacePath' }, t('ui.workspaceEditor.notSet')),
    open ? h(WorkspaceDirectoryPicker, {
      open,
      startPath: workspace,
      picker: activeDirectoryPicker,
      busy: saving || disabled,
      saveError: error,
      onPicked: pick,
      onCancel: close,
    }) : null,
  );
}
