import { defaultTranslator } from '../../i18n/index.mjs';

function nonEmptyString(value) {
  return typeof value === 'string' && value.trim() ? value.trim() : null;
}

export function validHarnessQuestion(question) {
  return question && typeof question.id === 'string' && typeof question.question === 'string'
    && (question.header === undefined || typeof question.header === 'string')
    && (question.detail === undefined || typeof question.detail === 'string')
    && (question.multiSelect === undefined || typeof question.multiSelect === 'boolean')
    && (question.options === undefined || (Array.isArray(question.options)
      && question.options.every((option) => (
        option && typeof option.label === 'string'
        && (option.description === undefined || typeof option.description === 'string')
      ))));
}

export function harnessQuestionText(question, index, total, {
  requiresMention = false,
  t = defaultTranslator,
} = {}) {
  const lines = [];
  lines.push(total > 1
    ? t('question.headerWithProgress', { index: index + 1, total })
    : t('question.header'));
  if (nonEmptyString(question.header)) lines.push('', question.header.trim());
  lines.push('', nonEmptyString(question.question) ?? t('question.fallback'));
  if (nonEmptyString(question.detail)) lines.push('', question.detail.trim());

  const options = Array.isArray(question.options) ? question.options : [];
  if (options.length > 0) {
    lines.push('');
    options.forEach((option, optionIndex) => {
      const label = typeof option?.label === 'string' ? option.label : '';
      const description = nonEmptyString(option?.description);
      lines.push(`${optionIndex + 1}. ${label}${description ? ` — ${description}` : ''}`);
    });
    lines.push('', t(question.multiSelect === true
      ? 'question.replyMultiSelect'
      : 'question.replySingleSelect'));
  } else {
    lines.push('', t('question.replyFree'));
  }
  if (requiresMention) lines.push('', t('question.mentionHint'));
  return lines.join('\n');
}

function optionLabel(token, options) {
  const normalized = token.trim();
  if (!normalized) return null;
  if (/^\d+$/.test(normalized)) {
    const option = options[Number(normalized) - 1];
    return typeof option?.label === 'string' ? option.label : null;
  }
  const exact = options.find((option) => option?.label === normalized);
  return typeof exact?.label === 'string' ? exact.label : null;
}

export function harnessAnswerForQuestion(question, text, { t = defaultTranslator } = {}) {
  const options = Array.isArray(question.options) ? question.options : [];
  if (options.length === 0) {
    return { id: question.id, selected: [], custom: text };
  }

  const wholeLabel = optionLabel(text, options);
  if (question.multiSelect !== true) {
    return wholeLabel
      ? { id: question.id, selected: [wholeLabel] }
      : { id: question.id, selected: [], custom: text };
  }
  if (wholeLabel) return { id: question.id, selected: [wholeLabel] };

  const selected = [];
  const custom = [];
  for (const token of text.split(/[,，、;；\n]+/)) {
    const value = token.trim();
    if (!value) continue;
    const label = optionLabel(value, options);
    if (label) {
      if (!selected.includes(label)) selected.push(label);
    } else {
      custom.push(value);
    }
  }
  return {
    id: question.id,
    selected,
    ...(custom.length > 0 ? { custom: custom.join(t('question.customJoin')) } : {}),
  };
}
