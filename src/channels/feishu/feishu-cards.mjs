import { defaultTranslator } from '../../i18n/index.mjs';

/**
 * Feishu interactive-card builders for the dsh-im menu / session-list /
 * workspace-list UX. All builders return the JSON string the
 * `im.message.create` API expects as `content` for `msg_type: interactive`
 * (card schema 2.0; callback buttons live inside a column_set/column layout).
 *
 * The session list lays each row out as a `column_set` (fixed-width ⭐
 * watch-toggle column + weighted session-button column), which is how V2
 * expresses a row of buttons.
 *
 * Buttons carry a small `{ action }` value object that `card.action.trigger`
 * events echo back (when the app subscribes that event); every numbered
 * button also has a numeric label so the number-reply fallback stays usable
 * without button callbacks.
 */

export const MENU_PAGE_SIZE = 10;

function plainText(content) {
  return { tag: 'plain_text', content: String(content) };
}

function markdown(content) {
  return { tag: 'lark_md', content: String(content) };
}

function button(content, actionValue) {
  return {
    tag: 'column_set',
    flex_mode: 'none',
    columns: [{
      tag: 'column',
      width: 'weighted',
      weight: 1,
      elements: [{
        tag: 'button',
        text: plainText(content),
        type: 'default',
        width: 'fill',
        behaviors: [{ type: 'callback', value: { action: actionValue } }],
      }],
    }],
  };
}

/** The raw button element (without the full-width column_set wrapper). */
function buttonElement(content, actionValue) {
  return {
    tag: 'button',
    text: plainText(content),
    type: 'default',
    width: 'fill',
    behaviors: [{ type: 'callback', value: { action: actionValue } }],
  };
}

function safeTitle(value) {
  const title = String(value ?? '').replace(/[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]+/gu, ' ').replace(/\s+/gu, ' ').trim();
  return title || defaultTranslator('session.untitled');
}

function cardWith(headerText, elements) {
  return JSON.stringify({
    schema: '2.0',
    header: { title: plainText(headerText), template: 'blue' },
    body: { elements },
  });
}

/** The main command menu (buttons + number-reply fallback). */
export function menuCard() {
  return cardWith(defaultTranslator('feishu.card.menuTitle'), [
    { tag: 'div', text: markdown(defaultTranslator('feishu.card.menuHint')) },
    button(defaultTranslator('feishu.card.menuSessions'), 'sessions'),
    button(defaultTranslator('feishu.card.menuWorkspaces'), 'workspaces'),
    button(defaultTranslator('feishu.card.menuNew'), 'new'),
    button(defaultTranslator('feishu.card.menuStatus'), 'status'),
    button(defaultTranslator('feishu.card.menuHelp'), 'help'),
    // Repair must remain number-driven. Apps that need this command do not
    // have card.action.trigger yet, so rendering it as a callback button would
    // send the user straight back to Feishu's broken callback setup popup.
    { tag: 'div', text: markdown(defaultTranslator('feishu.card.menuRepair')) },
    button(defaultTranslator('feishu.card.menuWatchlist'), 'watchlist'),
  ]);
}

/** One-shot callback probe used only after an existing app was re-authorized. */
export function cardActionProbeCard(nonce) {
  if (typeof nonce !== 'string' || !/^[A-Za-z0-9_-]{16,128}$/.test(nonce)) {
    throw new TypeError('A safe card-action probe nonce is required');
  }
  return cardWith(defaultTranslator('feishu.card.probeTitle'), [
    {
      tag: 'div',
      text: markdown(defaultTranslator('feishu.card.probeBody')),
    },
    {
      tag: 'column_set',
      flex_mode: 'none',
      columns: [{
        tag: 'column',
        width: 'weighted',
        weight: 1,
        elements: [{
          tag: 'button',
          text: plainText(defaultTranslator('feishu.card.probeButton')),
          type: 'primary',
          width: 'fill',
          behaviors: [{
            type: 'callback',
            value: { action: 'repair_verify', nonce },
          }],
        }],
      }],
    },
  ]);
}

/**
 * One page of the workspace's sessions. Each row is a `column_set` pair:
 * the fixed-width ⭐ watch toggle (watch, or unwatch for already-watched
 * sessions) followed by the session button that carries the page-local
 * number label (reply-number fallback = bind). Archived sessions are marked
 * in the label. `watchedSessionIds` is a Set-like of ids this conversation
 * already watches.
 */
export function sessionListCard(workspace, sessions, page, total, watchedSessionIds = new Set()) {
  const start = page * MENU_PAGE_SIZE;
  const slice = sessions.slice(start, start + MENU_PAGE_SIZE);
  const pageCount = Math.max(1, Math.ceil(total / MENU_PAGE_SIZE));
  const watched = (id) => typeof watchedSessionIds?.has === 'function' && watchedSessionIds.has(id);
  /** One row: fixed 90px watch toggle + the session button filling the rest. */
  const row = (watchButton, sessionButton) => ({
    tag: 'column_set',
    flex_mode: 'none',
    horizontal_spacing: 'default',
    columns: [
      { tag: 'column', width: '90px', vertical_align: 'center', elements: [watchButton] },
      { tag: 'column', width: 'weighted', weight: 1, vertical_align: 'center', elements: [sessionButton] },
    ],
  });
  const elements = [
    {
      tag: 'div',
      text: markdown(defaultTranslator('feishu.card.sessionsHeader', {
        workspace,
        total,
        page: total > MENU_PAGE_SIZE
          ? defaultTranslator('feishu.card.pageSuffix', { page: page + 1, pages: pageCount })
          : '',
      })),
    },
    ...slice.map((session, offset) => {
      // Page-local numbering: number replies resolve against this page.
      const label = `${offset + 1}. ${safeTitle(session.title)}${session.archived === true ? defaultTranslator('session.archivedMarker') : ''}`;
      const watching = watched(session.sessionId);
      return row(
        buttonElement(
          defaultTranslator(watching ? 'feishu.card.watchRemove' : 'feishu.card.watchAdd'),
          watching ? `unwatch:${session.sessionId}` : `watch:${session.sessionId}`,
        ),
        buttonElement(label, `use:${session.sessionId}`),
      );
    }),
  ];
  if (page > 0) elements.push(button(defaultTranslator('feishu.card.previousPage'), `sessions:${page - 1}`));
  if (page + 1 < pageCount) elements.push(button(defaultTranslator('feishu.card.nextPage'), `sessions:${page + 1}`));
  elements.push({ tag: 'div', text: markdown(defaultTranslator('feishu.card.sessionsFooter')) });
  return cardWith(defaultTranslator('feishu.card.sessionsTitle'), elements);
}

/** The workspace list card (switch-workspace buttons + reply fallback). */
export function workspaceListCard(paths, current) {
  const elements = paths.length === 0
    ? [{ tag: 'div', text: markdown(defaultTranslator('feishu.card.workspacesEmpty')) }]
    : [
        { tag: 'div', text: markdown(defaultTranslator('feishu.card.workspacesHint')) },
        ...paths.map((path, index) => button(
          `${index + 1}. ${path}${path === current ? defaultTranslator('workspace.currentMarker') : ''}`,
          `workspace:${path}`,
        )),
      ];
  return cardWith(defaultTranslator('feishu.card.workspacesTitle'), elements);
}

/** The card-menu help text (number-driven, no command memorization). */
export function menuHelpText() {
  return [
    defaultTranslator('feishu.card.helpTitle'),
    '',
    defaultTranslator('feishu.card.help1'),
    defaultTranslator('feishu.card.help2'),
    defaultTranslator('feishu.card.help3'),
    defaultTranslator('feishu.card.help4'),
    defaultTranslator('feishu.card.help5'),
    defaultTranslator('feishu.card.help6'),
    defaultTranslator('feishu.card.help7'),
    '',
    defaultTranslator('feishu.card.helpIntro'),
    defaultTranslator('feishu.card.helpSession'),
    defaultTranslator('feishu.card.helpWatch'),
    defaultTranslator('feishu.card.helpCompact'),
    defaultTranslator('feishu.card.helpWorkspace'),
    `${defaultTranslator('command.presetlist.usage')}  ${defaultTranslator('command.presetlist.description')}`,
    `${defaultTranslator('command.preset.usage')}  ${defaultTranslator('command.preset.description')}`,
    defaultTranslator('bridge.help.presetNumericId'),
    defaultTranslator('bridge.help.presetDefault'),
  ].join('\n');
}

/** The watch list for one conversation (unwatch buttons + reply fallback). */
export function watchListCard(entries) {
  const elements = entries.length === 0
    ? [{ tag: 'div', text: markdown(defaultTranslator('feishu.card.watchListEmpty')) }]
    : [
        { tag: 'div', text: markdown(defaultTranslator('feishu.card.watchListHint')) },
        ...entries.map((entry, index) => button(
          `${index + 1}. ${safeTitle(entry.title)}`,
          `unwatch:${entry.sessionId}`,
        )),
      ];
  return cardWith(defaultTranslator('feishu.card.watchListTitle'), elements);
}

/**
 * The completion push card. `title` is the session title, `reason` the
 * turn-end kind (completed / stopped / aborted).
 */
export function completionCard(sessionId, title, reason) {
  const reasonKeys = {
    completed: 'feishu.card.reasonCompleted',
    stopped: 'feishu.card.reasonStopped',
    aborted: 'feishu.card.reasonAborted',
    cancelled: 'feishu.card.reasonCancelled',
  };
  const reasonText = defaultTranslator(reasonKeys[reason] ?? 'feishu.card.reasonEnded');
  return cardWith(defaultTranslator('feishu.card.completionTitle'), [
    { tag: 'div', text: markdown(`**${safeTitle(title)}**\n\`${sessionId}\``) },
    { tag: 'div', text: markdown(defaultTranslator('feishu.card.completionStatus', { status: reasonText })) },
    button(defaultTranslator('feishu.card.openSessions'), 'sessions'),
    button(defaultTranslator('feishu.card.workspacesButton'), 'workspaces'),
    { tag: 'div', text: markdown(defaultTranslator('feishu.card.completionFooter')) },
  ]);
}
