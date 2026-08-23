window.__ModuleLoader__.load({
  id: "dsh-im-x",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// plugin-src/client/index.js
var index_exports = {};
__export(index_exports, {
  IMSettingsTab: () => IMSettingsTab,
  apply: () => apply,
  inject: () => inject,
  name: () => name
});
module.exports = __toCommonJS(index_exports);
var React20 = __toESM(require("react"), 1);

// plugin-src/client/channel-logos.js
var React = __toESM(require("react"), 1);
var h = React.createElement;
function dimensions(size) {
  return size === void 0 ? {} : { width: size, height: size };
}
function WeixinLogoGlyph({ size } = {}) {
  return h("svg", {
    ...dimensions(size),
    viewBox: "0 0 24 24",
    focusable: "false",
    "aria-hidden": "true",
    "data-im-channel-logo": "weixin"
  }, h("path", {
    fill: "currentColor",
    d: "M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"
  }));
}
function FeishuLogoGlyph({ size } = {}) {
  return h(
    "svg",
    {
      ...dimensions(size),
      viewBox: "0 0 24 24",
      focusable: "false",
      "aria-hidden": "true",
      "data-im-channel-logo": "feishu"
    },
    h("path", { fill: "#00D6B9", d: "M7.2 4.5h7.6c1.2 0 2.1.55 2.7 1.58 1.05 1.8 1.55 3.45 1.58 4.95-2.04-.62-4.2-.15-6.22 1.45C11.3 9.7 9.42 7.04 7.2 4.5Z" }),
    h("path", { fill: "#1456B8", d: "M10.8 13.55c3.3-2.93 5.72-4.24 9.47-2.52-1.2 1.45-2.27 4.18-3.86 5.43-1.67 1.31-3.9.5-5.61-.64v-2.27Z" }),
    h("path", { fill: "#3370FF", d: "M4.4 8.35c3.47 3.61 7.25 6.1 10.33 5.7 1.06-.14 2.2-.72 3.4-1.72-1.04 2.65-2.6 4.8-5.06 6-2.46 1.2-5.56.52-7.42-.72A2.76 2.76 0 0 1 4.4 15.3V8.35Z" })
  );
}
function DingtalkLogoGlyph({ size } = {}) {
  return h("svg", {
    ...dimensions(size),
    viewBox: "0 0 48 48",
    focusable: "false",
    "aria-hidden": "true",
    "data-im-channel-logo": "dingtalk"
  }, h("path", {
    fill: "currentColor",
    d: "M37.05 22.783c-6.758-5.216-14.378-12.128-22.73-19.538-.655-.585-1.242-.354-1.536.42-1.88 4.973-.058 9.386 2.889 11.932s7.368 4.912 10.058 6.155c.105.049.013.203-.093.163-4.953-2.182-8.397-3.765-13.07-7.368-.497-.388-1.01-.242-1.07.521-.384 4.748 2.657 8.483 6.058 9.745 2.1.781 4.398 1.212 6.53 1.474.109.015.084.178-.027.178-2.747.01-6.058-.654-8.935-1.751-.606-.233-.818.25-.722.633.491 2.008 2.974 5.076 6.926 5.73a12 12 0 0 0 2.228.115c.164 0 .208.089.154.217q-2.685 4.6-2.803 4.797c-.091.152-.036.275.156.275h3.543c.164 0 .264.106.18.246l-4.958 8.196c-.191.328.035.565.395.301s15.212-11.133 15.636-11.448c.195-.142.148-.327-.124-.327h-3.18c-.206 0-.252-.14-.111-.28.14-.141 3.602-3.594 4.837-4.888 1.283-1.35 1.938-3.825-.231-5.498"
  }));
}
function QqLogoGlyph({ size } = {}) {
  return h("svg", {
    ...dimensions(size),
    viewBox: "0 0 24 24",
    focusable: "false",
    "aria-hidden": "true",
    "data-im-channel-logo": "qq"
  }, h("path", {
    fill: "currentColor",
    d: "M21.395 15.035a40 40 0 0 0-.803-2.264l-1.079-2.695c.001-.032.014-.562.014-.836C19.526 4.632 17.351 0 12 0S4.474 4.632 4.474 9.241c0 .274.013.804.014.836l-1.08 2.695a39 39 0 0 0-.802 2.264c-1.021 3.283-.69 4.643-.438 4.673.54.065 2.103-2.472 2.103-2.472 0 1.469.756 3.387 2.394 4.771-.612.188-1.363.479-1.845.835-.434.32-.379.646-.301.778.343.578 5.883.369 7.482.189 1.6.18 7.14.389 7.483-.189.078-.132.132-.458-.301-.778-.483-.356-1.233-.646-1.846-.836 1.637-1.384 2.393-3.302 2.393-4.771 0 0 1.563 2.537 2.103 2.472.251-.03.581-1.39-.438-4.673"
  }));
}
function WecomLogoGlyph({ size } = {}) {
  return h(
    "svg",
    {
      ...dimensions(size),
      viewBox: "0 0 24 24",
      focusable: "false",
      "aria-hidden": "true",
      "data-im-channel-logo": "wecom"
    },
    h("path", {
      fill: "none",
      stroke: "#3370FF",
      strokeWidth: "2.35",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M17.7 14.5c1.05-1.12 1.65-2.52 1.65-4.03 0-3.82-3.58-6.92-8-6.92s-8 3.1-8 6.92 3.58 6.92 8 6.92c1.17 0 2.28-.22 3.28-.62"
    }),
    h("path", { fill: "#07C160", d: "M16.1 15.15c.7-.7 1.83-.7 2.53 0s.7 1.83 0 2.53-1.83.7-2.53 0-.7-1.83 0-2.53Z" }),
    h("path", { fill: "#FFB800", d: "M19.25 13.45a1.36 1.36 0 1 1 1.92 1.92 1.36 1.36 0 0 1-1.92-1.92Z" }),
    h("path", { fill: "#FF7A00", d: "M19.55 18.05a1.16 1.16 0 1 1 1.64 1.64 1.16 1.16 0 0 1-1.64-1.64Z" }),
    h("path", { fill: "#3370FF", d: "M15.25 18.75a.92.92 0 1 1 1.3 1.3.92.92 0 0 1-1.3-1.3Z" })
  );
}
function TelegramLogoGlyph({ size } = {}) {
  return h("svg", {
    ...dimensions(size),
    viewBox: "0 0 24 24",
    focusable: "false",
    "aria-hidden": "true",
    "data-im-channel-logo": "telegram"
  }, h("path", {
    fill: "currentColor",
    d: "M23.95 4.57c-.36-1.45-1.43-1.76-2.82-1.24L1.5 10.9c-1.34.52-1.32 1.27-.24 1.6l5.03 1.57 11.66-7.36c.55-.34 1.05-.16.64.21l-9.44 8.52-.37 5.12c.54 0 .78-.24 1.08-.53l2.59-2.51 5.38 3.97c.99.55 1.7.27 1.95-.92L23.95 4.57Z"
  }));
}
function DiscordLogoGlyph({ size } = {}) {
  return h("svg", {
    ...dimensions(size),
    viewBox: "0 0 24 24",
    focusable: "false",
    "aria-hidden": "true",
    "data-im-channel-logo": "discord"
  }, h("path", {
    fill: "currentColor",
    d: "M20.32 4.37a19.8 19.8 0 0 0-4.89-1.51c-.21.38-.46.89-.63 1.29a18.4 18.4 0 0 0-5.59 0 13 13 0 0 0-.64-1.29c-1.71.29-3.36.8-4.89 1.52C.59 9.09-.25 13.68.17 18.2a19.9 19.9 0 0 0 6 3.04c.48-.66.91-1.36 1.28-2.1-.7-.26-1.37-.58-2-.96.17-.12.33-.25.49-.38 3.86 1.79 8.04 1.79 11.86 0 .16.13.32.26.49.38-.64.38-1.31.7-2.01.97.37.73.8 1.44 1.28 2.09a19.8 19.8 0 0 0 6-3.04c.49-5.24-.84-9.79-3.24-13.83ZM8.02 15.42c-1.16 0-2.11-1.07-2.11-2.38s.93-2.38 2.11-2.38c1.18 0 2.13 1.08 2.11 2.38 0 1.31-.93 2.38-2.11 2.38Zm7.95 0c-1.16 0-2.11-1.07-2.11-2.38s.93-2.38 2.11-2.38c1.18 0 2.13 1.08 2.11 2.38 0 1.31-.93 2.38-2.11 2.38Z"
  }));
}
function SlackLogoGlyph({ size } = {}) {
  return h("svg", {
    ...dimensions(size),
    viewBox: "0 0 24 24",
    focusable: "false",
    "aria-hidden": "true",
    "data-im-channel-logo": "slack"
  }, h("path", {
    fill: "currentColor",
    d: "M6 15a2 2 0 1 1-2-2h2v2Zm1 0a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0v-5Zm2-8a2 2 0 1 1 2-2v2H9Zm0 1a2 2 0 1 1 0 4H4a2 2 0 1 1 0-4h5Zm8 2a2 2 0 1 1 2 2h-2v-2Zm-1 0a2 2 0 1 1-4 0V5a2 2 0 1 1 4 0v5Zm-2 8a2 2 0 1 1-2 2v-2h2Zm0-1a2 2 0 1 1 0-4h5a2 2 0 1 1 0 4h-5Z"
  }));
}
function WhatsappLogoGlyph({ size } = {}) {
  return h("svg", {
    ...dimensions(size),
    viewBox: "0 0 24 24",
    focusable: "false",
    "aria-hidden": "true",
    "data-im-channel-logo": "whatsapp"
  }, h("path", {
    fill: "currentColor",
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.83 9.83 0 0 1 2.893 6.991c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.8 11.8 0 0 0 12.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.688 1.448h.005c6.557 0 11.892-5.335 11.895-11.893a11.82 11.82 0 0 0-3.486-8.413"
  }));
}
function OfficeLogoGlyph({ size } = {}) {
  return h(
    "svg",
    {
      ...dimensions(size),
      viewBox: "0 0 24 24",
      focusable: "false",
      "aria-hidden": "true",
      "data-im-channel-logo": "office"
    },
    h("path", { fill: "currentColor", d: "M4 3.5h10.5a2 2 0 0 1 2 2v13H4v-15Zm2.2 3v1.8h2V6.5h-2Zm4.1 0v1.8h2V6.5h-2Zm-4.1 4v1.8h2v-1.8h-2Zm4.1 0v1.8h2v-1.8h-2ZM8.4 15v3.5h3V15h-3Z" }),
    h("path", { fill: "currentColor", d: "M18.3 8.2h1.5v3h3v1.5h-3v3h-1.5v-3h-3v-1.5h3v-3Z" })
  );
}

// plugin-src/client/i18n.js
var React2 = __toESM(require("react"), 1);

// src/i18n/locale-tags.mjs
var DEFAULT_LOCALE = "en";
var TAG_ALIASES = Object.freeze({
  zh: "zh-CN",
  "zh-hans": "zh-CN",
  "zh-chs": "zh-CN",
  "zh-cn": "zh-CN",
  "zh-sg": "zh-CN",
  "zh-my": "zh-CN",
  "zh-hant": "zh-TW",
  "zh-cht": "zh-TW",
  "zh-tw": "zh-TW",
  "zh-hk": "zh-TW",
  "zh-mo": "zh-TW",
  pt: "pt-BR",
  in: "id",
  iw: "he",
  ji: "yi"
});
function baseLanguage(tag) {
  return tag.toLowerCase().split("-", 1)[0];
}
function cleanTag(value) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/_/g, "-").toLowerCase();
}
function negotiateLocale(value, available) {
  const tags = Array.from(available ?? []);
  const cleaned = cleanTag(value);
  if (!cleaned || tags.length === 0) return null;
  const byLower = new Map(tags.map((tag) => [tag.toLowerCase(), tag]));
  const aliased = cleanTag(TAG_ALIASES[cleaned] ?? cleaned);
  const exact = byLower.get(aliased);
  if (exact) return exact;
  const language = baseLanguage(aliased);
  return tags.find((tag) => baseLanguage(tag) === language) ?? null;
}
function localeFallbackChain(locale, available) {
  const tags = Array.from(available ?? []);
  const chain = [];
  const canonical = negotiateLocale(locale, tags);
  if (canonical) chain.push(canonical);
  if (canonical) {
    const language = baseLanguage(canonical);
    for (const candidate of tags) {
      if (candidate !== canonical && baseLanguage(candidate) === language) chain.push(candidate);
    }
  }
  if (tags.includes(DEFAULT_LOCALE) && !chain.includes(DEFAULT_LOCALE)) chain.push(DEFAULT_LOCALE);
  return chain;
}

// src/i18n/translator.mjs
var PLACEHOLDER = /\{(\w+)\}/g;
function interpolate(template, params, report) {
  return template.replace(PLACEHOLDER, (match, name2) => {
    if (params != null && Object.hasOwn(params, name2) && params[name2] != null) {
      return String(params[name2]);
    }
    report(name2);
    return match;
  });
}
function createTranslatorFactory(catalogues, { onIssue = () => {
} } = {}) {
  const available = Object.freeze([...catalogues.keys()]);
  const chains = /* @__PURE__ */ new Map();
  function chainFor(locale) {
    const key = locale ?? "";
    let chain = chains.get(key);
    if (!chain) {
      chain = localeFallbackChain(locale, available).filter((tag) => catalogues.has(tag));
      if (chain.length === 0) {
        chain = catalogues.has(DEFAULT_LOCALE) ? [DEFAULT_LOCALE] : available.slice(0, 1);
      }
      chains.set(key, chain);
    }
    return chain;
  }
  function translator(requestedLocale) {
    const chain = chainFor(requestedLocale);
    const locale = chain[0];
    function lookup(key) {
      for (const tag of chain) {
        const entry = catalogues.get(tag)?.[key];
        if (entry !== void 0) return { entry, tag };
      }
      return null;
    }
    function t2(key, params) {
      const found = lookup(key);
      if (!found) {
        onIssue({ type: "missing-key", key, locale });
        return key;
      }
      const { entry, tag } = found;
      const report = (name2) => onIssue({ type: "missing-placeholder", key, locale: tag, placeholder: name2 });
      if (typeof entry === "function") {
        const value = entry(params ?? {});
        return typeof value === "string" ? value : String(value);
      }
      return interpolate(entry, params, report);
    }
    t2.locale = locale;
    t2.has = (key) => lookup(key) !== null;
    return t2;
  }
  translator.available = available;
  translator.negotiate = (hint) => negotiateLocale(hint, available);
  return translator;
}

// src/i18n/locales/en.mjs
var EN = Object.freeze({
  // --- /stop and /steer -------------------------------------------------
  "control.usage.stop": "Usage: /stop (no arguments)",
  "control.usage.steer": "Usage: /steer <instruction>",
  "control.textOnly": "Control commands accept text only. Remove the image and try again.",
  "control.noActiveTask": "No task is running in this chat.",
  "control.noActiveTaskSendMessage": "No task is running in this chat. Just send a normal message.",
  "control.stopRequested": "Requested a stop for the current task.",
  "control.steerSubmitted": "Instruction submitted. The agent will read it on its next step.",
  "control.awaitingInteraction": "The current task is waiting for your answer or approval.\n\nHandle that request first, or send /stop to end the task.",
  // --- Inbound images ---------------------------------------------------
  "image.defaultPrompt": "Please analyse this image.",
  "image.error.redirectBlocked": "The image link redirected somewhere else, so it could not be read.",
  "image.error.httpError": "The image download failed (HTTP {status}). Send it again.",
  "image.error.tooLarge": "That image is larger than {limit}. Compress it and try again.",
  "image.error.totalTooLarge": "Those images are too large in total. Send fewer images, or compress them.",
  "image.error.downloadFailed": "The image download failed. Send it again.",
  "image.error.unreadable": "The image content could not be read. Send it again.",
  "image.error.tooMany": ({ max }) => max === 1 ? "Only one image can be handled at a time." : `At most ${max} images can be handled at a time.`,
  "image.error.unsupportedType": "That image format is not supported. Send a JPEG, PNG, WebP, or GIF.",
  // Reasons reported by the Harness host rather than detected locally.
  "image.host.modelDoesNotSupportImages": "The current model does not accept images. Use /models to see what is available, then /model <number> to switch, and send it again.",
  "image.host.imageTooLarge": "That image is larger than the host allows. Compress it and try again.",
  "image.host.imageTooManyPixels": "That image resolution is too high. Compress it and try again.",
  "image.host.invalidImage": "That image is invalid or its format is unsupported. Send it again.",
  "image.host.invalidImageBase64": "The image content could not be read. Send it again.",
  "image.host.imageTypeMismatch": "The image format does not match its actual content. Send it again.",
  "image.host.tooManyImages": "That is more images than the host allows. Send fewer and try again.",
  "image.host.imagesTooLarge": "Those images exceed the total size the host allows. Send fewer images, or compress them.",
  // Channel-specific image failures.
  "image.error.queueFull": "A lot of images are still being processed. Send this one again shortly.",
  "image.error.feishuPermissionRequired": "The Feishu bot cannot read images. In the Feishu Open Platform, add the im:message:readonly scope to this app, publish a new version, complete any required admin approval, and send the image again.",
  "image.error.slackFileAccessRequired": "Slack has not authorised the bot to read that file. Add the files:read scope to the app, reinstall it, and send the image again.",
  // --- /compact ---------------------------------------------------------
  "compact.usage": "Usage: /compact (no arguments)",
  "compact.noSessionState": "This bot has no session state available.",
  "compact.noSessionYet": "This chat has no session to compact yet. Send a message first.",
  "compact.unsupported": "This bot does not support context compaction.",
  "compact.commandNotRegistered": "This Harness has no /compact command registered. Check that the compaction component is enabled.",
  // Outcomes reported by the Harness compaction command.
  "compact.result.compacted": ({ items, tokens }) => items === 1 ? `Compacted 1 history item (about ${tokens} tokens).` : `Compacted ${items} history items (about ${tokens} tokens).`,
  "compact.result.noHistory": "There is no history to compact yet.",
  "compact.result.unavailable": "This session is generating a reply or already compacting. Try again shortly.",
  "compact.result.cancelled": "Context compaction was cancelled.",
  "compact.result.historyChanged": "The session history changed while compacting, so the session was left unchanged. Try again.",
  "compact.result.noSummary": "Compaction could not produce a useful summary, so the session was left unchanged.",
  "compact.result.unclean": "Compaction did not finish cleanly and some session history may have changed. Check the session before retrying.",
  "compact.result.saveFailed": "The context was compacted, but the session could not be saved.",
  "compact.result.success": "Context compaction finished.",
  "compact.result.failure": "Context compaction failed.",
  "compact.error.sessionNotFound": "The session bound to this chat no longer exists. Send a new message to start one.",
  "compact.error.agentBusy": "This session is generating a reply. Try again shortly.",
  "compact.error.stale": "The workspace or bot state changed. Try again.",
  "compact.error.unsupportedHarness": "This Harness cannot run context compaction from a bot yet.",
  "compact.error.generic": "Context compaction failed. Try again shortly.",
  // --- Harness questions ------------------------------------------------
  "question.header": "DeepSeek Harness needs more information:",
  "question.headerWithProgress": "DeepSeek Harness needs more information ({index}/{total}):",
  "question.fallback": "Enter your answer.",
  "question.replyMultiSelect": "Reply with option numbers or text. Separate multiple choices with commas, and feel free to add anything else.",
  "question.replySingleSelect": "Reply with one option number or its text, or type a different answer.",
  "question.replyFree": "Reply with your answer.",
  "question.mentionHint": "In a group chat, @mention the bot with your answer.",
  // Separator used when several free-text answers are combined into one.
  "question.customJoin": ", ",
  // --- Harness approvals ------------------------------------------------
  "approval.header": "DeepSeek Harness needs your approval:",
  "approval.tool": "Tool: {name}",
  "approval.arguments": "Arguments:",
  "approval.reason": "Reason: {reason}",
  "approval.prompt": 'Reply exactly "approve" or "deny" (yes / no also work).',
  "approval.afterQuestionPrompt": 'Answer the current question first, then reply exactly "approve" or "deny".',
  "approval.resolved": "That approval has already been handled. No further reply is needed.",
  "approval.outcome.allowedOnce": "Approved, for this operation only.",
  "approval.outcome.rejected": "This operation was denied.",
  "approval.onlyInitiator": "Only the user who started this task can handle this approval.",
  "approval.submitting": "Your decision is being submitted. One moment.",
  "approval.cannotDisplay": "This operation could not be shown in full, so the approval was safely denied.",
  "approval.submitFailed": 'The approval could not be submitted. Reply "approve" or "deny" again.',
  "approval.mentionHint": "In a group chat, @mention the bot with your decision.",
  // --- /lang ------------------------------------------------------------
  "language.current": "This chat is using {name} ({locale}).",
  "language.available": "Available languages:",
  "language.usage": "Use /lang <code> to switch, or /lang auto to follow the channel.",
  "language.changed": "This chat is now using {name} ({locale}).",
  "language.followingChannel": "This chat now follows the bot and channel settings, currently {name} ({locale}).",
  "language.unknown": '"{requested}" is not a language this bot has.',
  "language.unsupported": "This bot cannot change language per chat.",
  // --- Command surface --------------------------------------------------
  "command.new.usage": "/new",
  "command.new.description": "Start a brand-new session",
  "command.compact.usage": "/compact",
  "command.compact.description": "Compact the earlier context of this session",
  "command.workspace.usage": "/workspace <absolute path>",
  "command.workspace.description": "Switch workspace",
  "command.workspacelist.usage": "/workspacelist",
  "command.workspacelist.description": "List workspace absolute paths",
  "command.sessionlist.usage": "/sessionlist [workspace number or absolute path]",
  "command.sessionlist.description": "List session IDs and titles",
  "command.session.usage": "/session <session ID or workspace number>",
  "command.session.description": "Bind this chat to a session",
  "command.models.usage": "/models",
  "command.models.description": "List every available model by number",
  "command.model.usage": "/model [number or full model ID]",
  "command.model.description": "Show or switch the model for this session",
  "command.presetlist.usage": "/presetlist",
  "command.presetlist.description": "List available agent presets by number",
  "command.preset.usage": "/preset [number or full ID]",
  "command.preset.description": "Show or set the agent preset for this bot",
  "command.lang.usage": "/lang [code]",
  "command.lang.description": "Show or switch the language of this chat",
  "command.stop.usage": "/stop",
  "command.stop.description": "Stop the current task",
  "command.steer.usage": "/steer <instruction>",
  "command.steer.description": "Steer the current task",
  "command.status.usage": "/status",
  "command.status.description": "Check the connection",
  "command.help.usage": "/help",
  "command.help.description": "Show this help",
  // --- Shared text bridge -----------------------------------------------
  "bridge.help.header": "{channel} bot is connected to DeepSeek Harness.",
  "bridge.help.intro": "Send text or an image to continue the current session.",
  "bridge.help.modelExample": "Example: send /models, then /model 2",
  "bridge.help.presetNumericId": "Numeric ID: /preset id:<ID>",
  "bridge.help.presetDefault": "/preset --default  follow the Host default",
  "bridge.botLabel": "{channel} bot",
  "bridge.statusOk": "{channel} bot is connected to DeepSeek Harness.",
  "bridge.newSession": "Started a new session. Send your question.",
  "bridge.textAndImagesOnly": "Only text and image messages are supported.",
  "bridge.messageFailed": "The message could not be processed. Try again shortly.",
  "bridge.taskComplete": "Task complete.",
  "bridge.stopped": "Stopped.",
  "bridge.usingTool": "Using {name}\u2026",
  "bridge.finalizing": "Preparing the result\u2026",
  "bridge.toolFallback": "tool",
  "bridge.answerWithText": "Answer the current question with text.",
  "bridge.answerSubmitRetry": "The answer could not be submitted. Send your answer to the current question again.",
  "bridge.interactionResolved": "That question was handled in another client. No further answer is needed.",
  "bridge.recoveredInteractionCancelled": "A leftover unanswered question was found in this session. It was safely cancelled and your message is being processed.",
  "bridge.error.interactionSendFailed": "The {channel} interaction question could not be sent.",
  "bridge.error.answerSubmitFailed": "The answer could not be submitted.",
  // --- Outbound result files --------------------------------------------
  "artifact.fallbackName": "result file",
  "artifact.error.uncertain": 'Delivery of the result file "{name}" could not be confirmed. Check the chat before resending it.',
  "artifact.error.permissionSlack": 'The result file "{name}" was produced, but the Slack app is missing the files:write scope. Update the manifest, reinstall the app, reconnect the bot, and try again.',
  "artifact.error.permissionDiscord": 'The result file "{name}" was produced, but the bot is missing the Discord Send Messages, Attach Files, or Read Message History permission.',
  "artifact.error.permissionTelegram": 'The result file "{name}" was produced, but Telegram does not allow the bot to send documents in this chat. Check the chat permissions.',
  "artifact.error.permission": 'The result file "{name}" was produced, but this bot cannot send files. Check the channel permissions.',
  "artifact.error.tooLarge": 'The result file "{name}" exceeds this channel size limit and was not sent.',
  "artifact.error.empty": 'The result file "{name}" is empty and was not sent.',
  "artifact.error.unavailable": 'The result file "{name}" could not be read or prepared for sending. Confirm it is still accessible and try again.',
  "artifact.error.rateLimited": 'The result file "{name}" was rate limited by this channel and could not be sent. Try again shortly.',
  "artifact.error.rejected": 'The result file "{name}" was produced, but this channel rejected the file or the file message.',
  "artifact.error.generic": 'The result file "{name}" was produced, but this channel could not send it. Try again shortly.',
  // --- /models and /model -----------------------------------------------
  "model.usage": "Usage: /model <number> or /model <provider>/<model>",
  "model.usageList": "Usage: /models (no arguments)",
  "model.textOnly": "Model commands accept text only. Remove the image and try again.",
  "model.invalidIndex": "Invalid model number: {requested}",
  "model.invalidIndexHint": "Send /models and use a valid positive number.",
  "model.notFound": "No such model: {requested}",
  "model.notFoundHint": "Send /models to see the available models.",
  "model.available": "Available models:",
  "model.noneAvailable": "No models are available right now.",
  "model.currentMarker": " (current)",
  "model.unavailableProviders": "These model providers are unavailable right now:",
  "model.switchHint": "Switch model: /model <number>",
  "model.currentHeader": "Current model:",
  "model.listHint": "See all models: /models",
  "model.noSessionYet": "This chat has no session yet.",
  "model.viewHint": "See models: /models",
  "model.chooseHint": "Choose a model: /model <number>",
  "model.switched": "Model switched to:\n{model}\n\nLater messages will use it.",
  "model.error.turnRunning": "A task is running. Wait for it to finish, or send /stop first.",
  "model.error.sessionMissing": "The session bound to this chat no longer exists. Try again.",
  "model.error.unavailable": "That model cannot be selected. It is unavailable, or it does not accept the images already in this session.",
  "model.error.stale": "The workspace or bot state changed. Try again.",
  "model.error.sessionChanged": "The session bound to this chat changed. Try again.",
  "model.error.listCancelled": "Fetching the model list was cancelled.",
  "model.error.switchCancelled": "The model switch was cancelled.",
  "model.error.listFailed": "The model list is unavailable right now. Try again shortly.",
  "model.error.switchFailed": "The model switch failed. Try again shortly.",
  "model.awaitingInteraction": "The current task is waiting for your answer or approval.\n\nHandle that request first, or send /stop to end the task.",
  // --- /presetlist and /preset ------------------------------------------
  "preset.usageList": "Usage: /presetlist (no arguments)",
  "preset.usage": "Usage:\n/preset  show the current setting\n/preset <number>  pick by the number from the last /presetlist\n/preset <ID>  pick by agent preset ID\n/preset id:<numeric ID>  pick a purely numeric ID\n/preset --default  follow the Host default",
  "preset.textOnly": "Agent preset commands accept text only. Remove the image and try again.",
  "preset.noDefault": "not set, or unavailable right now",
  "preset.defaultUnavailable": "{id} (unavailable right now)",
  "preset.followsHostDefault": "Follows the Host default",
  "preset.followsHostDefaultWith": "Follows the Host default: {preset}",
  "preset.followsHostDefaultUnavailable": "Follows the Host default (the Host default is unavailable right now)",
  "preset.noLongerAvailable": "{id} (no longer available)",
  "preset.currentHeader": "Agent preset this bot uses for new sessions:",
  "preset.existingUnaffected": "Existing sessions are unaffected.",
  "preset.listHint": "See what is available: /presetlist",
  "preset.resetHint": "Follow the Host default again: /preset --default",
  "preset.hostDefault": "Host default: {value}",
  "preset.availableCount": "Available agent presets ({count}):",
  "preset.noneAvailable": "No agent presets are available right now.",
  "preset.markerHostDefault": "Host default",
  "preset.markerSelected": "selected",
  "preset.markerActive": "in effect",
  "preset.selectHint": "Select: /preset <number or ID>",
  "preset.numericIdHint": "Numeric ID: /preset id:<ID>",
  "preset.updated": "The agent preset this bot uses for new sessions is now:",
  "preset.updatedNote": "Existing sessions are unchanged. If this chat already has a session, send /new first, then an ordinary message, for the new setting to apply.",
  "preset.error.invalidIndex": "Invalid agent preset number. Run /presetlist first.",
  "preset.error.listFirst": "Run /presetlist first, then pick an agent preset by its list number.",
  "preset.error.indexMissing": "That agent preset number does not exist. Run /presetlist again.",
  "preset.error.invalidId": "Invalid agent preset ID format.",
  "preset.error.unavailable": "That agent preset does not exist or is unavailable. Run /presetlist again.",
  "preset.error.stale": "The workspace or bot state changed. Try again.",
  "preset.error.listCancelled": "Fetching the agent preset list was cancelled.",
  "preset.error.currentCancelled": "Fetching the agent preset setting was cancelled.",
  "preset.error.updateCancelled": "The agent preset change was cancelled.",
  "preset.error.listFailed": "The agent preset list is unavailable right now. Try again shortly.",
  "preset.error.currentFailed": "The agent preset setting is unavailable right now. Try again shortly.",
  "preset.error.updateFailed": "The agent preset change failed. Try again shortly.",
  // Punctuation around preset labels differs by script, so it lives here too.
  "preset.itemText": "{label} ({id})",
  "preset.markers": "({markers})",
  "preset.markerJoin": ", ",
  // --- /workspace, /workspacelist, /session, /sessionlist ---------------
  "workspace.usage": "Usage: /workspace <absolute path>",
  "workspace.usageList": "Usage: /workspacelist",
  "workspace.mustBeAbsolute": "The workspace must be an absolute path.",
  "workspace.unsupportedCharacters": "The workspace path has unsupported characters, or is too long.",
  "workspace.notFound": "That workspace path does not exist.",
  "workspace.notDirectory": "The workspace path must point to a directory.",
  "workspace.listUnsupported": "This bot cannot list workspaces.",
  "workspace.noneRegistered": "This Harness Host has no registered workspaces that still exist.",
  "workspace.existingHeader": "Workspaces on this Harness Host ({count}):",
  "workspace.currentMarker": " (current)",
  "workspace.switchHint": "To switch: /workspace <absolute path>",
  "workspace.sessionsHint": "To see sessions: /sessionlist <workspace number or absolute path>",
  "workspace.botRebound": "The bot is being removed or has reconnected, so the original session workspaces cannot be listed.",
  "workspace.listFailed": "The workspace list is unavailable right now. Try again shortly.",
  "workspace.noneForBot": "This bot has no workspaces available.",
  "workspace.indexUnsupported": "This bot cannot select a workspace by number.",
  "workspace.indexMissing": "That workspace number does not exist. Run /workspacelist first.",
  "workspace.switchUnsupported": "This bot cannot switch workspaces.",
  "workspace.switched": "Workspace switched to: {workspace}",
  "workspace.switchRebound": "The bot is being removed or has reconnected, so the original session workspace cannot be switched.",
  "session.usageBind": "Usage: /session <session ID> or the current workspace number (/session N)",
  "session.usageList": "Usage:\n/sessionlist  list sessions in the current workspace\n/sessionlist <workspace number>  list sessions by /workspacelist number\n/sessionlist <workspace absolute path>  list sessions in that workspace",
  "session.titleUnavailable": "title unavailable",
  "session.untitled": "untitled",
  "session.archivedMarker": " (archived)",
  "session.workspaceLine": "Workspace: {workspace}",
  "session.noneInWorkspace": "This workspace has no sessions yet.",
  "session.countHeader": "Sessions ({count}):",
  "session.bindHintCurrent": "To bind: /session <session ID> or the current workspace number (/session N)",
  "session.bindHintOther": "To bind: /session <session ID>\nNote: /session N only uses numbers from the bot current workspace.",
  "session.listUnsupported": "This bot cannot list workspace sessions.",
  "session.listRebound": "The bot is being removed or has reconnected, so the original session workspace sessions cannot be listed.",
  "session.listFailed": "The workspace session list is unavailable right now. Try again shortly.",
  "session.invalidId": "Invalid session ID format.",
  "session.notFound": "That session was not found. Run /sessionlist to confirm the session ID.",
  "session.subagentNotBindable": "A subagent session cannot be bound to a bot conversation. Choose an ordinary session.",
  "session.workspaceAmbiguous": "The workspace this session belongs to is unclear, so it cannot be bound right now.",
  "session.readFailed": "That session information is unavailable right now. Try again shortly.",
  "session.bindRebound": "The bot is being removed or has reconnected, so the original conversation session cannot be bound.",
  "session.bindStale": "The workspace or session state changed. Try again.",
  "session.bindFailed": "The session could not be bound right now. Try again shortly.",
  "session.indexUnsupported": "This bot cannot bind by number. Use /session <session ID>.",
  "session.indexMissing": "That session number does not exist. Run /sessionlist to see the numbers.",
  "session.listForIndexFailed": "The session list is unavailable right now. Try again shortly.",
  "session.bindUnsupported": "This bot cannot bind an existing session.",
  "session.missingContext": "This message has no bindable session context.",
  "session.boundHeader": "This chat is now bound to a session:",
  "session.titleLine": "Title: {title}",
  "session.archivedLine": "Archived: {value}",
  "session.yes": "yes",
  "session.no": "no",
  // Relative timestamps: the date itself is formatted with Intl for the
  // active locale, so only the surrounding wording lives here.
  "session.time.today": "Today {time}",
  "session.time.yesterday": "Yesterday {time}",
  "session.time.twoDaysAgo": "2 days ago {time}",
  "session.time.sameYear": "{date} {time}",
  "session.time.older": "{date}",
  // Channel-specific help lines.
  "bridge.help.introWithVoice": "Send text, an image, or a voice message with a transcript to continue the current session.",
  "command.repair.usage": "/repair",
  "command.repair.description": "Repair card button callbacks",
  "command.menu.usage": "/m (or /menu)",
  "command.menu.description": "Open the interactive card menu",
  "command.watch.usage": "/watch [session ID or number]",
  "command.watch.description": "Watch a session and get a push when its task finishes",
  "command.unwatch.usage": "/unwatch [session ID or number]",
  "command.unwatch.description": "Stop watching a session",
  "command.watchlist.usage": "/watchlist",
  "command.watchlist.description": "Show the watch list",
  "command.archived.usage": "/archived on|off",
  "command.archived.description": "Whether session lists include archived sessions",
  "artifact.generated": "The result file was produced.",
  // QQ words the same delivery failures around its own upload limits.
  "artifact.qq.quotaExhausted": 'The result file "{name}" was produced, but the QQ daily file upload quota is used up. Try again later.',
  "artifact.qq.permission": 'The result file "{name}" was produced, but this QQ bot has no file-message permission.',
  "artifact.qq.tooLarge": 'The result file "{name}" is larger than this QQ bot can send and was not sent.',
  "artifact.qq.empty": 'The result file "{name}" is empty, and QQ does not allow sending empty files.',
  "artifact.qq.rateLimited": 'The result file "{name}" was rate limited by QQ and could not be sent. Try again shortly.',
  "artifact.qq.rejected": 'The result file "{name}" was produced, but QQ rejected the file or the file message.',
  "artifact.qq.generic": 'The result file "{name}" was produced, but it could not be sent through QQ. Try again shortly.',
  // WeChat, DingTalk, and WeCom word delivery failures around their own
  // platform limits and permission names.
  "artifact.weixin.permission": 'The result file "{name}" was produced, but this WeChat bot cannot send file messages. Check the bot file-message capability.',
  "artifact.weixin.tooLarge": 'The result file "{name}" is larger than this WeChat conversation can send and was not sent.',
  "artifact.weixin.rateLimited": 'The result file "{name}" was rate limited by WeChat and could not be sent. Try again shortly.',
  "artifact.weixin.rejected": 'The result file "{name}" was produced, but WeChat rejected the file message.',
  "artifact.weixin.generic": 'The result file "{name}" was produced, but it could not be sent through WeChat. Try again shortly.',
  "artifact.dingtalk.permission": 'The result file "{name}" was produced, but the DingTalk app or bot is missing file-message permission. Grant the app the qyapi_base scope and confirm the bot can send file messages.',
  "artifact.dingtalk.tooLarge": 'The result file "{name}" is larger than this DingTalk bot can send and was not sent.',
  "artifact.dingtalk.rateLimited": 'The result file "{name}" was rate limited by DingTalk and could not be sent. Try again shortly.',
  "artifact.dingtalk.rejected": 'The result file "{name}" was produced, but DingTalk rejected the file message. Check the file type and the bot file-message configuration.',
  "artifact.dingtalk.generic": 'The result file "{name}" was produced, but it could not be sent through DingTalk. Try again shortly.',
  "artifact.wecom.permission": 'The result file "{name}" was produced, but the WeCom smart bot lacks media upload or file-message capability. Check the bot permissions.',
  "artifact.wecom.tooLarge": 'The result file "{name}" is larger than this WeCom bot can send and was not sent.',
  "artifact.wecom.empty": 'The result file "{name}" is empty, and WeCom does not allow sending empty files.',
  "artifact.wecom.rateLimited": 'The result file "{name}" was rate limited by WeCom and could not be sent. Try again shortly.',
  "artifact.wecom.rejected": 'The result file "{name}" was produced, but WeCom rejected the file or the file message.',
  "artifact.wecom.generic": 'The result file "{name}" was produced, but it could not be sent through WeCom. Try again shortly.',
  "artifact.uncertainShort": 'Delivery of the result file "{name}" could not be confirmed. Check the chat before resending it.',
  "bridge.textImagesAndVoiceOnly": "Only text, images, and voice messages WeChat has transcribed are supported.",
  "bridge.textImagesAndTranscriptOnly": "Only text, image, and transcribed voice messages are supported.",
  "bridge.taskCompleteNoText": "The task finished, but produced no text to show.",
  "bridge.thinking": "Thinking\u2026",
  "bridge.connectedThinking": "Connected to DeepSeek Harness, thinking\u2026",
  "bridge.searchingWeb": "Searching the web and gathering information\u2026",
  "bridge.processing": "Working\u2026",
  "bridge.error.commandFailed": "The {channel} command failed.",
  "bridge.error.messageFailed": "The {channel} message could not be processed.",
  "bridge.error.approvalFailed": "The {channel} approval could not be handled.",
  "bridge.error.noSafeReplyTarget": "The {channel} message has no safe reply address.",
  "image.error.dingtalkDownloadCodeFailed": 'DingTalk could not exchange the image download address. Send it again; if it keeps failing, check the bot "send message within the organisation" permission.',
  "image.error.dingtalkNoDownloadUrl": "DingTalk returned no image download address. Send it again.",
  "image.error.dingtalkTemporaryUrlUnreadable": "The temporary image address DingTalk returned could not be read. Send it again.",
  // --- Feishu ------------------------------------------------------------
  "feishu.workspace.mustBeAbsolute": "The workspace must be an absolute path.",
  "feishu.workspace.notFound": "That workspace path does not exist.",
  "feishu.workspace.notDirectory": "The workspace path must point to a directory.",
  "feishu.workspace.botRebound": "The bot is being removed or has reconnected, so the original session workspace cannot be changed.",
  "feishu.workspace.failed": "That did not work. Try again shortly.",
  "artifact.feishu.permission": 'The result file "{name}" was produced, but the bot lacks Feishu file-upload permission. Add the im:resource scope to the app, complete any required approval, and try again.',
  "artifact.feishu.tooLarge": 'The result file "{name}" exceeds the Feishu 30 MB limit and was not sent.',
  "artifact.feishu.empty": 'The result file "{name}" is empty, and Feishu does not allow sending empty files.',
  "artifact.feishu.rateLimited": 'The result file "{name}" was rate limited by Feishu and could not be sent. Try again shortly.',
  "artifact.feishu.generic": 'The result file "{name}" was produced, but it could not be sent. Try again shortly.',
  "feishu.processingFailed": "That failed. Try again shortly. If it keeps happening, check the connection on the DeepSeek Harness Feishu plugin page.",
  "feishu.newSession": "Started a fresh Harness session.",
  "feishu.archived.usage": "Usage: /archived on (include archived sessions) or /archived off (hide archived sessions)",
  "feishu.archived.on": "On: session lists include archived sessions.",
  "feishu.archived.off": "Off: session lists hide archived sessions.",
  // /repair, which re-grants the card-callback scope.
  "feishu.repair.privateChatOnly": "To avoid exposing the authorisation link, send /repair to the bot in a private chat.",
  "feishu.repair.noAdminIdentity": "This bot has no verifiable operator identity, so repair cannot start from a chat. Set an administrator on the plugin page first.",
  "feishu.repair.operatorOnly": "Only the bot operator can start this from a private chat. Nothing was changed.",
  "feishu.repair.hostUnsupported": "This Host version cannot repair from a chat yet. Update the plugin first.",
  "feishu.repair.usage": "Usage: /repair, /repair qr, /repair status, /repair cancel, or /repair verify",
  "feishu.repair.noRecord": "This Runtime has no recoverable repair task on record (the bot may have just finished a credential update and restarted). This command starts no new authorisation. Check the verification result the bot sent, confirm the previous task finished, then send /repair.",
  "feishu.repair.otherAdmin": "Another administrator is repairing this bot, so their authorisation details are not shown here.",
  "feishu.repair.cancelUnavailable": "The repair task could not be cancelled right now. Try again shortly.",
  "feishu.repair.statusUnavailable": "The repair status could not be read right now. Try again shortly.",
  "feishu.repair.temporaryFailure": "The repair flow failed for now. The existing bot connection is unaffected. Send /repair to try again shortly.",
  "feishu.repair.unsafeLink": "Feishu returned an authorisation link that could not be safely verified, so this repair was aborted.",
  "feishu.repair.noLink": "Feishu returned no authorisation link, so this repair was aborted.",
  "feishu.repair.awaitingCallback": "Authorisation confirmed. Sending the test button and waiting for its callback; this completes only once a real callback arrives.",
  "feishu.repair.statusInterrupted": "The repair status check was interrupted. The existing bot connection is unaffected. Send /repair status to check again.",
  "feishu.repair.linkShortLived": "the link is short-lived",
  "feishu.repair.linkExpiresIn": "the link expires in about {minutes} min",
  "feishu.repair.alreadyWaiting": "A repair task is already waiting for authorisation.",
  "feishu.repair.prepare": "\u{1F527} Preparing to repair the card buttons.",
  "feishu.repair.incrementalNotice": "This only adds card.action.trigger. Check that the confirmation page shows just that one item; if any other scope or event appears, cancel.",
  "feishu.repair.openOnThisDevice": "Open on this device:",
  "feishu.repair.qrHint": "To scan from another device, send /repair qr. {expiry}.",
  "feishu.repair.scanFromOtherDevice": "Scan from another device to finish authorising{remaining}.",
  "feishu.repair.remainingMinutes": " (about {minutes} min left)",
  "feishu.repair.qrUnavailable": "The QR code could not be sent. Open the authorisation link directly:\n{url}",
  "feishu.repair.done": "\u2705 Repair complete: a real card.action.trigger was received, so the menu buttons now work.",
  "feishu.repair.linkExpired": "The authorisation link expired and the platform reported no success, so the repair cannot be confirmed. Send /repair for a new link.",
  "feishu.repair.cancelled": "This repair authorisation was cancelled, and the repair was not confirmed.",
  "feishu.repair.declined": "You cancelled or declined the authorisation, so nothing was confirmed. Send /repair to try again.",
  "feishu.repair.noCallbackYet": "Authorisation was submitted, but no test-button callback arrived. It may not have been clicked yet, or the configuration is still propagating. Send /repair verify later to check, rather than authorising again blindly.",
  "feishu.repair.awaitingRealCallback": "Authorisation confirmed. Waiting for a real callback from the dedicated test button; success is not declared before it arrives.",
  "feishu.repair.notAuthorisedYet": "Authorisation is not finished, so the card buttons cannot be verified yet. Open the authorisation link and confirm first.",
  "feishu.repair.waitingWithRemaining": "The repair task is waiting for authorisation{remaining}. Send /repair qr for a QR code, or /repair cancel to cancel.",
  "feishu.repair.remainingSuffix": ", about {minutes} min left",
  // The interactive card menu.
  "feishu.menu.expired": "This menu has expired. Reply /m to open a new one.",
  "feishu.menu.unknownNumber": "The menu has no such number. Reply /m to open it again.",
  "feishu.menu.sessionOutOfRange": "This page has only {count} sessions. Reply /sessionlist to look again.",
  "feishu.menu.workspaceOutOfRange": "There are only {count} workspaces. Reply /workspacelist to look again.",
  "feishu.menu.watchOutOfRange": "The watch list has only {count} sessions.",
  "feishu.menu.sessionListFailed": "The session list is unavailable right now. Try again shortly.",
  "feishu.menu.workspaceListFailed": "The workspace list is unavailable right now. Try again shortly.",
  "feishu.menu.bound": 'Bound to session "{title}"\nID: {sessionId}',
  "feishu.menu.bindFailed": "Binding failed: {reason}",
  "feishu.menu.workspaceSwitched": "Workspace switched to: {workspace}",
  "feishu.menu.workspaceSwitchFailed": "Switching failed: {reason}",
  // /watch, which pushes a session's result when its task finishes.
  "feishu.watch.usage": "Usage: /watch <session ID or current workspace number>",
  "feishu.watch.noWorkspace": "This bot has no workspace available, so a session number cannot be resolved.",
  "feishu.watch.sessionOutOfRange": "The current workspace has only {count} sessions.",
  "feishu.watch.notFound": "That session was not found. Use /sessionlist to see what is available.",
  "feishu.watch.unsupported": "The current state store does not support watching.",
  "feishu.watch.resolveFailed": "The session could not be resolved: {reason}",
  "feishu.watch.limitReached": "Each chat can watch at most {max} sessions.",
  "feishu.watch.added": 'Now watching session "{title}". Results will be pushed when a task finishes.',
  "feishu.watch.addFailed": "Watching failed: {reason}",
  "feishu.watch.notWatched": "That session is not in the watch list. Reply /watchlist to look.",
  "feishu.watch.removed": 'Stopped watching "{title}".',
  "feishu.watch.removeFailed": "Removing failed: {reason}",
  // --- Connection test and stream scaffolding ---------------------------
  "connection.defaultChannelLabel": "bot",
  "connection.testSuccess": '\u2705 DeepSeek Harness connection test succeeded\nThis message was sent by the "{name}" bot card on the plugin page.',
  "connection.noTestTarget": "{channel} has not received a direct message that can be used for a test yet.",
  "stream.processingDone": "Done.",
  "telegram.webhookConfigured": "This Telegram bot already has a webhook configured. Remove the webhook in that service first, then try again.",
  "telegram.defaultBotName": "Telegram bot",
  "telegram.connectionLabel": " Bot API long polling",
  // --- Bot status shown on the settings page -----------------------------
  "status.credentialsMissing": "The {channel} bot credentials are missing. Remove it and connect again.",
  "status.connectionNotReady": "The {channel} connection is not ready. The plugin keeps retrying.",
  "status.connectedNotReady": "The {channel} bot is connected, but its message connection is not ready yet.",
  "status.stillNotReady": "The {channel} connection is still not ready. Try again shortly.",
  "status.checkBothTokens": "The {channel} connection is still not ready. Check both tokens.",
  "status.notConnected": "The {channel} bot is not connected",
  "status.healthy": "{channel}{connection} is running normally",
  "status.error": "The {channel} connection is not ready; the plugin keeps retrying",
  "status.offline": "The {channel} connection is offline",
  "status.socketModeNotReady": "The {channel} Socket Mode connection is not ready. The plugin keeps retrying.",
  "status.socketModeConnectedNotReady": "The {channel} bot is connected, but Socket Mode is not ready yet.",
  // The bot card label the connection-test message quotes.
  "bot.cardLabel": "{name} ({id})",
  // --- Slack credential validation ---------------------------------------
  "slack.botTokenPrefix": "A Slack bot token must start with xoxb-.",
  "slack.appTokenPrefix": "A Slack app token must start with xapp-.",
  "slack.incompleteIdentity": "The Slack bot token did not return a complete bot identity.",
  "slack.socketModeUnavailable": "The Slack app token cannot open a Socket Mode connection. Confirm Socket Mode is enabled and connections:write is granted.",
  "slack.defaultBotName": "Slack bot",
  "slack.connectionLabel": " Socket Mode connection",
  // --- Default bot and account labels ------------------------------------
  "bot.dingtalkDefaultName": "DingTalk bot",
  "bot.dingtalkDefaultUser": "DingTalk user",
  "bot.identityHidden": "identity hidden",
  "bot.discordDefaultName": "Discord bot",
  "bot.qqDefaultName": "QQ bot",
  "bot.wecomDefaultName": "WeCom bot",
  "bot.weixinDefaultName": "WeChat bot",
  "bot.whatsappDefaultName": "WhatsApp bot",
  "bot.whatsappDefaultAccount": "WhatsApp account",
  "bot.discordConnectionLabel": " Gateway connection",
  "bot.whatsappConnectionLabel": " Web linked device",
  // --- Channel connection errors -----------------------------------------
  "discord.invalidToken": "The Discord bot token is invalid. Enter it again.",
  "discord.intentsMisconfigured": "The Discord gateway intents are not configured correctly. Check the bot settings in the Developer Portal.",
  "weixin.credentialExpired": "The WeChat login credential has expired. Remove the account and scan again.",
  "weixin.syncRejected": "The WeChat message sync request was rejected.",
  "dingtalk.invalidMessageFormat": "The DingTalk message format is invalid.",
  "feishu.generating": "Generating\u2026",
  "feishu.answerComplete": "Answer complete",
  // --- WeChat account activation -----------------------------------------
  "weixin.activation.credentialReadFailed": "WeChat authorised, but the existing login credential could not be read. Check the DSH credential store.",
  "weixin.activation.credentialSaveFailed": "WeChat authorised, but the login credential could not be written to the DSH credential store. Check that the store is writable.",
  "weixin.activation.accountConfigSaveFailed": "WeChat authorised, but the account configuration could not be written locally. Check the DSH_HOME directory permissions.",
  "weixin.activation.runtimePrepareFailed": "WeChat authorised, but the account state or workspace could not be initialised. Check DSH_HOME and the workspace directory.",
  "weixin.activation.harnessConnectFailed": "WeChat authorised, but the plugin cannot reach the local Harness. Check the dsh web address and port.",
  "weixin.activation.harnessTimeout": "WeChat authorised, but the Harness health check timed out. Confirm dsh web is not blocked.",
  "weixin.activation.harnessAuthRequired": "WeChat authorised, but the Harness health check requires authentication. Check any proxy, gateway, or custom auth configuration.",
  "weixin.activation.harnessProxyAuthRequired": "WeChat authorised, but a proxy demanded authentication for the local Harness request. Let loopback addresses bypass the proxy and check NO_PROXY.",
  "weixin.activation.harnessLoopbackForbidden": "WeChat authorised, but Harness unexpectedly refused a loopback health check. Check the HTTP proxy, the Harness source version, and the build output.",
  "weixin.activation.harnessHostUntrusted": "WeChat authorised, but the Harness host-trust check refused a non-loopback request. Check harnessBaseUrl and trustedHosts.",
  "weixin.activation.harnessRequestForbidden": "WeChat authorised, but the health check received a 403 that did not come from Harness. Check the proxy or gateway configuration.",
  "weixin.activation.harnessApiNotFound": "WeChat authorised, but the Harness health-check endpoint was not found. Confirm Harness and the plugin are compatible versions.",
  "weixin.activation.harnessHttpFailed": "WeChat authorised, but the Harness health check returned a service error. Check the dsh web logs.",
  "weixin.activation.harnessResponseInvalid": "WeChat authorised, but Harness returned an unrecognised response. Confirm Harness and the plugin are compatible versions.",
  "weixin.activation.harnessRpcRejected": "WeChat authorised, but Harness rejected the health-check request. Check the dsh web logs.",
  "weixin.activation.harnessCheckUnknownFailed": "WeChat authorised, but the Harness health check hit an unknown error. Check the dsh web logs.",
  "weixin.activation.connectionStartFailed": "WeChat authorised, but the message connection failed to start. Check the dsh web logs and try again.",
  "weixin.activation.unknownFailed": "WeChat authorised, but an unknown error occurred during activation. Check the dsh web logs.",
  "weixin.missingToken": "The login credential is missing. Remove the account and scan again.",
  "weixin.connectionNotReady": "The WeChat connection is not ready. The plugin keeps retrying.",
  "weixin.connectionStillNotReady": "The WeChat connection is still not ready. Try again shortly.",
  "weixin.qrUnavailable": "A WeChat QR code could not be generated. Try again shortly.",
  "weixin.pairingBlocked": "The pairing code was wrong too many times. Generate a new QR code.",
  "weixin.qrExpired": "The QR code has expired. Generate a new one.",
  "weixin.alreadyBound": "That WeChat account is already bound, but this machine has no recoverable credential.",
  "weixin.incompleteLogin": "WeChat authorised successfully, but the account credential it returned was incomplete.",
  "weixin.healthy": "WeChat message long polling is running normally",
  // --- QR pairing (shared wording) ---------------------------------------
  "qr.cancelled": "QR pairing was cancelled.",
  // --- WeChat service and media errors -----------------------------------
  "weixin.api.invalidImageKey": "The WeChat image encryption key is invalid.",
  "weixin.api.invalidImageCiphertext": "The WeChat image encrypted data is invalid.",
  "weixin.api.imageDecryptionFailed": "The WeChat image could not be decrypted.",
  "weixin.api.missingImageUrl": "The WeChat image has no usable download address.",
  "weixin.api.invalidImageUrl": "The WeChat image download address is invalid.",
  "weixin.api.untrustedImageUrl": "The WeChat image download address is not trusted.",
  "weixin.api.invalidBaseUrl": "The WeChat service returned an invalid connection address.",
  "weixin.api.untrustedBaseUrl": "The WeChat service returned an untrusted connection address.",
  "weixin.api.missingQr": "The WeChat service returned no QR address.",
  "weixin.api.invalidQr": "The WeChat service returned an invalid QR address.",
  "weixin.api.untrustedQr": "The WeChat service returned an untrusted QR address.",
  "weixin.api.invalidUploadUrl": "The WeChat service returned an invalid file-upload address.",
  "weixin.api.untrustedUploadUrl": "The WeChat service returned an untrusted file-upload address.",
  "weixin.api.missingUploadUrl": "The WeChat service returned no file-upload address.",
  "weixin.api.uploadRejectedHttp": "The WeChat file upload was rejected (HTTP {status}).",
  "weixin.api.uploadFailedHttp": "The WeChat file upload failed (HTTP {status}).",
  "weixin.api.invalidUploadResponse": "The WeChat file-upload response is missing download parameters.",
  "weixin.api.uploadFailed": "The WeChat file upload failed.",
  "weixin.api.untrustedEndpoint": "Refused to contact an untrusted WeChat service address.",
  "weixin.api.requestFailedHttp": "The WeChat service request failed (HTTP {status}).",
  "weixin.api.invalidResponse": "The WeChat service returned a response that could not be parsed.",
  "weixin.api.timeout": "The WeChat service request timed out.",
  "weixin.api.networkError": "The WeChat service cannot be reached right now.",
  "weixin.api.invalidLoginStatus": "The WeChat service returned an unrecognised scan status.",
  "weixin.api.missingQrToken": "The WeChat service returned no QR token.",
  "weixin.api.sendRejected": "The WeChat service rejected the reply message.",
  "weixin.api.uploadRequestRejected": "The WeChat service rejected the file-upload request.",
  "weixin.api.fileMessageRejected": "The WeChat service rejected the file message.",
  "weixin.api.startRejected": "The WeChat account connection failed to start.",
  // --- QR-paired channel connection states -------------------------------
  // Shared by DingTalk, WeCom, QQ, and WhatsApp, which pair by scanning a code
  // and report the same set of conditions.
  "qr.missingSecret": "The {channel} bot credentials are missing. Remove it and scan again.",
  "qr.serviceUnavailable": "The {channel} QR service is unavailable. Generate a new QR code.",
  "qr.startFailed": "A {channel} QR code could not be generated. Try again shortly.",
  "qr.expired": "The {channel} QR code has expired. Generate a new one.",
  "qr.boundNotReady": "The {channel} bot is bound, but its message connection is not ready yet.",
  "qr.activationFailed": "{channel} authorised, but the connection configuration could not be saved safely.",
  "qr.deviceInvalid": "The {channel} linked device is no longer valid. Remove it and scan again.",
  "qr.authorizationFailed": "{channel} did not finish authorising the bot. Scan again.",
  "qr.pollPending": "The {channel} authorisation status is briefly unavailable. Retrying.",
  "qr.pollFailed": "The {channel} authorisation query briefly failed. Retrying.",
  "qr.connectFailed": "Could not connect to {channel}. Generate a new QR code.",
  "qr.deviceSaveFailed": "{channel} was scanned, but the linked device could not be saved.",
  "status.healthyDingtalk": "The DingTalk Stream message connection is running normally",
  "status.offlineDingtalk": "The DingTalk message connection is offline",
  "status.healthyQq": "The QQ WebSocket connection is running normally",
  "status.healthyWhatsapp": "The WhatsApp Web linked device is running normally",
  "status.healthyWecom": "The WeCom message connection is running normally",
  "qr.notCompleted": "The {channel} scan did not complete. Generate a new QR code.",
  "status.healthyWecomSocket": "The WeCom WebSocket connection is running normally",
  // --- AI Office ---------------------------------------------------------
  "office.error.invalidDeviceToken": "AI Office rejected the device token.",
  "office.error.hookUnavailable": "The AI Office Connector hook is not ready yet.",
  "office.error.protocolMismatch": "The AI Office Connector protocol version is incompatible.",
  "office.error.transportFailed": "AI Office cannot be reached from this machine right now.",
  "office.error.disconnected": "The AI Office connection was interrupted.",
  "office.job.stopped": "The local Harness stopped this run.",
  "office.job.conflict": "This Office job was already claimed, cancelled, or finished.",
  "office.job.failed": "The local Harness could not finish the task. Check the Harness session and try again.",
  "office.job.unknownAlias": "The Office job referenced a workspace or preset alias this machine has not configured.",
  "office.job.claimed": "Job claimed. Preparing workspace alias: {alias}",
  "office.job.sessionCreated": "The Harness session was created.",
  "office.job.usingTool": "Using {name}\u2026",
  "office.job.toolFallback": "a Harness tool",
  "office.job.approvalTitle": "Approve {tool}",
  "office.job.questionTitle": ({ count }) => `Harness needs ${count} more details`,
  // The handoff prompt itself: the agent reads this, so it is translated too.
  "office.prompt.intro": "You are continuing a task from AI Office inside the local DeepSeek Harness.",
  "office.prompt.rules": "Act only within the current workspace. When you finish, you must report: a result summary, the files you changed, evidence of verification, and any unresolved risks.",
  "office.prompt.presetHeading": "## Local instruction preset",
  "office.prompt.instructionHeading": "## Additional instruction for this run",
  "office.prompt.timelineHeading": "## Office timeline",
  // --- Feishu app provisioning -------------------------------------------
  "feishu.provision.credentialsMissing": "The bot credentials are missing. Scan again to connect.",
  "feishu.provision.cannotReach": "The bot cannot reach Feishu right now. Try again.",
  "feishu.provision.noCredentials": "There are no usable bot credentials. Scan again to connect.",
  "feishu.provision.createdNotReady": "The bot was created, but its connection is not ready. Tap retry.",
  "feishu.provision.appName": "{user}'s AI assistant",
  "feishu.provision.appDescription": "Connects Feishu to DeepSeek Harness so you can use an AI assistant in chat.",
  // --- Feishu card-callback repair verification --------------------------
  "feishu.probe.successNotice": "\u2705 Repair complete: a real card.action.trigger was received, so the menu buttons now work.",
  "feishu.probe.timeoutNotice": "\u26A0\uFE0F Repair verification timed out: no card.action.trigger arrived from the test card button, so the buttons cannot be confirmed as fixed. Do not authorise again; check the card callback configuration in the Feishu Open Platform first, then send /repair.",
  "feishu.probe.sendFailureNotice": "\u26A0\uFE0F Repair verification failed: the dedicated test card could not be sent, so card.action.trigger cannot be confirmed as restored. Do not authorise again; check the bot message permissions and connection first.",
  "feishu.probe.abortNotice": "\u26A0\uFE0F Repair verification interrupted: the runtime stopped before card.action.trigger was tested, so the repair cannot be confirmed. Do not authorise again; wait for the bot to reconnect first.",
  "feishu.probe.sendFailed": "Could not send the Feishu card callback test",
  "feishu.probe.noMessageId": "Feishu returned no message ID for the test card",
  "feishu.probe.noCallback": "No Feishu card button callback arrived within the allowed time",
  "feishu.probe.runtimeStopped": "The Feishu runtime has stopped",
  // --- Feishu bot lifecycle ----------------------------------------------
  "feishu.bot.awaitingDeletion": "The bot is waiting for local deletion to finish. Try removing it again.",
  "feishu.bot.credentialsUnreadable": "The bot credentials could not be read. Check the credential store.",
  "feishu.bot.credentialsMissing": "The bot credentials are missing. Delete it and scan again to connect.",
  "feishu.bot.boundNotReady": "The bot is bound, but its connection is not ready. Tap retry.",
  "feishu.bot.groupPermissionNotReady": "Group message permission was granted, but the bot connection is not ready. Tap retry.",
  "feishu.bot.repairSavedNotReady": "The bot callback repair was saved, but the connection is not ready. Tap retry.",
  "feishu.bot.connectionUpdateFailed": "The bot connection update failed and the previous connection could not be restored. Try again.",
  "feishu.bot.credentialDeleteFailed": "The bot credentials could not be deleted. Try again shortly.",
  "feishu.bot.sessionDeleteFailed": "The bot's local session data could not be deleted. Try again shortly.",
  // --- DingTalk service errors -------------------------------------------
  // {action} is a short English label for the request being made, e.g.
  // "authentication" or "AI Card update".
  "dingtalk.api.invalidImageDownload": "The DingTalk service returned an invalid image download address.",
  "dingtalk.api.serviceLabel": "The DingTalk service",
  "dingtalk.api.replyLabel": "The DingTalk reply",
  "dingtalk.api.registrationLabel": "The DingTalk registration service",
  "dingtalk.api.qrLabel": "The DingTalk QR service",
  "dingtalk.api.invalidUrl": "{label} returned an invalid address.",
  "dingtalk.api.untrustedUrl": "{label} address is not trusted.",
  "dingtalk.api.noReplyTarget": "The DingTalk message has no usable reply address.",
  "dingtalk.api.requestFailedHttp": "The DingTalk service request failed (HTTP {status}).",
  "dingtalk.api.invalidResponse": "The DingTalk service returned a response that could not be parsed.",
  "dingtalk.api.timeout": "The DingTalk service request timed out.",
  "dingtalk.api.networkError": "The DingTalk {action} request could not be completed right now.",
  "dingtalk.api.uploadNetworkError": "The DingTalk file upload request could not be completed right now.",
  "dingtalk.api.qrActionFailed": "The DingTalk QR {action} failed.",
  "dingtalk.api.noAccessToken": "The DingTalk service returned no access token.",
  "dingtalk.api.missingNonce": "The DingTalk QR initialisation is missing a nonce.",
  "dingtalk.api.incompleteRegistration": "The DingTalk QR service returned incomplete information.",
  "dingtalk.api.invalidRegistrationStatus": "The DingTalk QR service returned an unrecognised status.",
  "dingtalk.api.missingCredentials": "The DingTalk scan was confirmed, but no bot credentials were returned.",
  "dingtalk.api.imageDownloadUrlFailed": "Could not obtain the DingTalk image download address.",
  "dingtalk.api.noImageDownloadUrl": "The DingTalk service returned no image download address.",
  "dingtalk.api.imageContentFailed": "The DingTalk image content download failed.",
  "dingtalk.api.sendRejected": "The DingTalk service rejected the reply message.",
  "dingtalk.api.uploadRejected": "The DingTalk service rejected the file upload.",
  "dingtalk.api.fileMessageRejected": "The DingTalk service rejected the file message.",
  // --- Feishu interactive cards ------------------------------------------
  "feishu.card.menuTitle": "\u{1F916} Assistant menu",
  "feishu.card.menuHint": "**Tap a button, or just reply with the number**",
  "feishu.card.menuSessions": "1 \xB7 Sessions",
  "feishu.card.menuWorkspaces": "2 \xB7 Workspaces",
  "feishu.card.menuNew": "3 \xB7 New session",
  "feishu.card.menuStatus": "4 \xB7 Status",
  "feishu.card.menuHelp": "5 \xB7 Help",
  "feishu.card.menuRepair": "**6 \xB7 Repair card buttons** (reply with the number **6**)",
  "feishu.card.menuWatchlist": "7 \xB7 Watch list",
  "feishu.card.probeTitle": "\u{1F9EA} Verify card buttons",
  "feishu.card.probeBody": "Authorisation submitted. Tap the button below; the repair counts as successful only once the bot actually receives the callback.",
  "feishu.card.probeButton": "Finish verification",
  "feishu.card.sessionsTitle": "\u{1F4C2} Sessions",
  "feishu.card.sessionsHeader": "**Workspace**: `{workspace}`\n**{total}** sessions in total{page}",
  "feishu.card.pageSuffix": " (page {page} of {pages})",
  "feishu.card.watchAdd": "\u2B50 Watch",
  "feishu.card.watchRemove": "\u2B50 Unwatch",
  "feishu.card.previousPage": "\u25C0 Previous",
  "feishu.card.nextPage": "Next \u25B6",
  "feishu.card.sessionsFooter": "Reply with a number (1-N) to bind a session on this page.",
  "feishu.card.workspacesTitle": "\u{1F5C2} Workspaces",
  "feishu.card.workspacesEmpty": "This Host has no registered workspaces.",
  "feishu.card.workspacesHint": "Reply with a number to switch workspace, or tap a button:",
  "feishu.card.watchListTitle": "\u{1F441} Watch list",
  "feishu.card.watchListEmpty": "No sessions are being watched.\nWatch one with `/watch <ID|number>` and its results are pushed when a task finishes.",
  "feishu.card.watchListHint": "Results are pushed when a task finishes. Reply with a number or tap a button to unwatch:",
  "feishu.card.completionTitle": "\u2705 Task complete",
  "feishu.card.completionStatus": "**Status**: {status}",
  "feishu.card.openSessions": "Open sessions",
  "feishu.card.workspacesButton": "Workspaces",
  "feishu.card.completionFooter": "Bind this session to keep asking; just send text.",
  "feishu.card.reasonCompleted": "Completed",
  "feishu.card.reasonStopped": "Stopped",
  "feishu.card.reasonAborted": "Aborted",
  "feishu.card.reasonCancelled": "Cancelled",
  "feishu.card.reasonEnded": "Ended",
  "feishu.card.helpTitle": "\u{1F916} Assistant menu (reply with a number, no commands to remember)",
  "feishu.card.help1": "1 \xB7 /sessionlist  list sessions (reply with a number to bind)",
  "feishu.card.help2": "2 \xB7 /workspacelist  list workspaces (reply with a number to switch)",
  "feishu.card.help3": "3 \xB7 /new  start a new session",
  "feishu.card.help4": "4 \xB7 /status  connection status",
  "feishu.card.help5": "5 \xB7 /help  this help",
  "feishu.card.help6": "6 \xB7 /repair  repair card buttons (reply with the number 6)",
  "feishu.card.help7": "7 \xB7 /watchlist  watch list",
  "feishu.card.helpIntro": "Send text or an image to continue the current session.",
  "feishu.card.helpSession": "/session <ID or number>  bind an existing session",
  "feishu.card.helpWatch": "/watch <ID or number>  watch a session (pushed when it finishes)",
  "feishu.card.helpCompact": "/compact  compact the context",
  "feishu.card.helpWorkspace": "/workspace <absolute path>  switch workspace",
  // --- Settings UI -------------------------------------------------------
  // The host's locale registry answers this key, which is how the settings
  // page learns which language the Harness client is set to.
  "ui.localeTag": "en",
  "ui.agentPreset.couldNotUpdateTheAgentPreset": "Could not update the Agent Preset. Try again.",
  "ui.agentPreset.followTheHostDefault": "Follow the Host default",
  "ui.agentPreset.saving": "Saving\u2026",
  "ui.agentPreset.theCurrentAgentPresetIsUnavailable": "The current Agent Preset is unavailable. Choose another preset or follow the Host default.",
  "ui.agentPreset.thisAffectsOnlyNewSessionsIf": "This affects only new sessions. If the current chat already has a session, send /new, then send a regular message to apply it.",
  "ui.agentPreset.unavailable": " (unavailable)",
  "ui.agentPreset.viewAgentPresetHelp": "View Agent Preset help",
  "ui.channelCardMeta.lastChecked": "Last checked",
  "ui.channelCardMeta.messageChannel": "Message channel",
  "ui.channelCardMeta.viewMessageChannelDetails": "View message channel details",
  "ui.common.botIdentifierStoredSecurely": "Bot identifier stored securely",
  "ui.common.enterBotToken": "Enter Bot Token",
  "ui.credentialBinding.connect": "Connect",
  "ui.credentialBinding.connecting": "Connecting\u2026",
  "ui.dingtalk.authorizationIsCompletedOnDingtalkS": "Authorization is completed on DingTalk\u2019s official page. The account must belong to an organization and be allowed to create bots. Credentials are written directly to the Harness Host.",
  "ui.dingtalk.authorizeTheBotWithTheDingtalk": "Authorize the bot with the DingTalk app",
  "ui.dingtalk.authorizedCreatingTheDingtalkBot": "Authorized. Creating the DingTalk bot",
  "ui.dingtalk.botCreatedStartingTheMessageConnection": "Bot created. Starting the message connection",
  "ui.dingtalk.cancel": "Cancel",
  "ui.dingtalk.cancelSetup": "Cancel setup",
  "ui.dingtalk.checkConnection": "Check connection",
  "ui.dingtalk.checking": "Checking\u2026",
  "ui.dingtalk.checkingTheDingtalkStreamConnectionIt": "Checking the DingTalk Stream connection. It will appear online when ready.",
  "ui.dingtalk.close": "Close",
  "ui.dingtalk.confirmingDingtalkAuthorization": "Confirming DingTalk authorization",
  "ui.dingtalk.connectADingtalkBotToDeepseek": "Connect a DingTalk bot to DeepSeek Harness by QR code",
  "ui.dingtalk.connectADingtalkBotWithClient": "Connect a DingTalk bot with Client ID and Client Secret",
  "ui.dingtalk.connectDingtalkBotByQrCode": "Connect DingTalk bot by QR code",
  "ui.dingtalk.connected": "Connected",
  "ui.dingtalk.connectedDingtalkBots": "Connected DingTalk bots",
  "ui.dingtalk.connecting": "Connecting",
  "ui.dingtalk.connecting2": "Connecting",
  "ui.dingtalk.connectionCheckCompletedTheBotHas": "Connection check completed. The bot has not received a direct message it can use for testing.",
  "ui.dingtalk.connectionCheckFailedTryAgainLater": "Connection check failed. Try again later.",
  "ui.dingtalk.dingtalk": "DingTalk",
  "ui.dingtalk.dingtalkBot": "DingTalk bot",
  "ui.dingtalk.dingtalkBotAndLocalCredentialsRemoved": "DingTalk bot and local credentials removed.",
  "ui.dingtalk.dingtalkBotCredentialsConnected": "DingTalk bot credentials connected.",
  "ui.dingtalk.dingtalkBotSetupCancelled": "DingTalk bot setup cancelled.",
  "ui.dingtalk.dingtalkConnectionCheckCompletedAndThe": "DingTalk connection check completed and the test message was sent.",
  "ui.dingtalk.dingtalkConnectionCheckCompletedButThe": "DingTalk connection check completed, but the test message could not be sent.",
  "ui.dingtalk.dingtalkDidNotReturnASecure": "DingTalk did not return a secure QR code",
  "ui.dingtalk.dingtalkDidNotReturnAValid": "DingTalk did not return a valid setup attempt",
  "ui.dingtalk.dingtalkDidNotReturnAValid2": "DingTalk did not return a valid bot list",
  "ui.dingtalk.dingtalkDidNotReturnQrSetup": "DingTalk did not return QR setup progress",
  "ui.dingtalk.dingtalkQrCodeGeneratedScanIt": "DingTalk QR code generated. Scan it with the DingTalk app.",
  "ui.dingtalk.dingtalkSettings": "DingTalk settings",
  "ui.dingtalk.dingtalkStreamConnectionIsHealthy": "DingTalk Stream connection is healthy",
  "ui.dingtalk.enterTheDingtalkClientId": "Enter the DingTalk Client ID",
  "ui.dingtalk.enterTheDingtalkClientSecret": "Enter the DingTalk Client Secret",
  "ui.dingtalk.generateANewQrCode": "Generate a new QR code",
  "ui.dingtalk.generateANewQrCode2": "Generate a new QR code",
  "ui.dingtalk.generateDingtalkQrCode": "Generate DingTalk QR code",
  "ui.dingtalk.generatingQrCode": "Generating QR code\u2026",
  "ui.dingtalk.getAnotherQrCode": "Get another QR code",
  "ui.dingtalk.hideCredentials": "Hide credentials",
  "ui.dingtalk.justNow": "Just now",
  "ui.dingtalk.keepBot": "Keep bot",
  "ui.dingtalk.keepThisPageOpenSetupWill": "Keep this page open. Setup will continue after DingTalk authorization.",
  "ui.dingtalk.keepThisPageOpenWhileThe": "Keep this page open while the bot connects",
  "ui.dingtalk.loadingDingtalkConnectionStatus": "Loading DingTalk connection status\u2026",
  "ui.dingtalk.manualSetup": "Manual setup",
  "ui.dingtalk.notCheckedYet": "Not checked yet",
  "ui.dingtalk.notConnected": "Not connected",
  "ui.dingtalk.oneTimeQrCodeForConnecting": "One-time QR code for connecting a DingTalk bot to DeepSeek Harness",
  "ui.dingtalk.qrCodeExpired": "QR code expired",
  "ui.dingtalk.qrCodeExpired2": "QR code expired",
  "ui.dingtalk.qrCodeExpiresIn": "QR code expires in",
  "ui.dingtalk.reconnect": "Reconnect",
  "ui.dingtalk.reload": "Reload",
  "ui.dingtalk.removeConnection": "Confirm removal",
  "ui.dingtalk.removeConnection2": "Remove connection",
  "ui.dingtalk.removing": "Removing\u2026",
  "ui.dingtalk.requestingDingtalkAuthorizationQrCode": "Requesting DingTalk authorization QR code\u2026",
  "ui.dingtalk.scanOnceToCreateAndConnect": "Scan once to create and connect a bot",
  "ui.dingtalk.scanQrCode": "Scan QR code",
  "ui.dingtalk.scanTheQrCodeWithA": "Scan the QR code with a DingTalk account that belongs to an organization",
  "ui.dingtalk.selectCreateNewBotOnThe": "Select \u201CCreate new bot\u201D on the authorization page",
  "ui.dingtalk.storedSecurely": "Stored securely",
  "ui.dingtalk.streamPersistentConnection": "Stream persistent connection",
  "ui.dingtalk.theDingtalkAccountMustBelongTo": "The DingTalk account must belong to an organization. If prompted, create an organization or use an account that already belongs to one.",
  "ui.dingtalk.theDingtalkBotIsConnectedAnd": "The DingTalk bot is connected and ready for messages.",
  "ui.dingtalk.theQrCodeIsNotReady": "The QR code is not ready. Generate a new one.",
  "ui.dingtalk.thisDingtalkBotIsConnectedAnd": "This DingTalk bot is connected and online.",
  "ui.dingtalk.thisStopsTheMessageConnectionAnd": "This stops the message connection and removes the locally stored app credentials, bot configuration, and session mappings. The bot in DingTalk Open Platform is not deleted.",
  "ui.dingtalk.tryAgainLater": "Try again later.",
  "ui.dingtalk.waitingForDingtalkAuthorization": "Waiting for DingTalk authorization",
  "ui.discord.connectADiscordBot": "Connect a Discord bot",
  "ui.discord.createABotInTheDeveloper": "Create a bot in the Developer Portal and invite it to your server, then connect it here.",
  "ui.discord.enterTheBotTokenFromThe": "Enter the Bot Token from the Discord Developer Portal",
  "ui.discord.gatewayPersistentConnection": " Gateway persistent connection",
  "ui.discord.gatewayPersistentConnection2": "Gateway persistent connection",
  "ui.feishu.addingANewBot": "Adding a new bot",
  "ui.feishu.addingTheBotWasCancelled": "Adding the bot was cancelled.",
  "ui.feishu.appIdentifierStoredSecurely": "App identifier stored securely",
  "ui.feishu.authorizationQrCodeGeneratedScanIt": "Authorization QR code generated. Scan it with Feishu.",
  "ui.feishu.authorize": "Authorize",
  "ui.feishu.authorizeGroupMessagePermission": "Authorize group-message permission",
  "ui.feishu.cancel": "Cancel",
  "ui.feishu.cancelAuthorization": "Cancel authorization",
  "ui.feishu.cancelRepair": "Cancel repair",
  "ui.feishu.cardButtonRepairDidNotFinish": "Card-button repair did not finish",
  "ui.feishu.cardButtonRepairWasCancelled": "Card-button repair was cancelled.",
  "ui.feishu.confirmGroupMessagePermissionWithFeishu": "Confirm group-message permission with Feishu",
  "ui.feishu.confirmedConnectingTheNewBot": "Confirmed. Connecting the new bot",
  "ui.feishu.confirmedEnablingAllMessageMode": "Confirmed. Enabling all-message mode",
  "ui.feishu.confirmedFinishingCardButtonRepair": "Confirmed. Finishing card-button repair",
  "ui.feishu.connectAFeishuBotWithApp": "Connect a Feishu bot with App ID and App Secret",
  "ui.feishu.connectFeishuBotByQrCode": "Connect Feishu bot by QR code",
  "ui.feishu.connectedBots": "Connected bots",
  "ui.feishu.connecting": "Connecting\u2026",
  "ui.feishu.connectionCheckCompletedButTheTest": "Connection check completed, but the test message could not be sent.",
  "ui.feishu.couldNotAuthorizeGroupMessagePermission": "Could not authorize group-message permission. Try again.",
  "ui.feishu.couldNotCreateTheFeishuApp": "Could not create the Feishu app",
  "ui.feishu.couldNotGrantTheFeishuGroup": "Could not grant the Feishu group-message permission",
  "ui.feishu.couldNotLoadConnectionStatus": "Could not load connection status",
  "ui.feishu.couldNotLoadFeishuBots": "Could not load Feishu bots",
  "ui.feishu.couldNotRepairTheFeishuCard": "Could not repair the Feishu card buttons",
  "ui.feishu.couldNotUpdateTheGroupResponse": "Could not update the group response mode. Try again.",
  "ui.feishu.directMessagesAlwaysWorkGroupChats": "Direct messages always work; group chats require an explicit @mention of this bot. The group-message permission is already granted, so switching again needs no authorization.",
  "ui.feishu.directMessagesAlwaysWorkGroupChats2": "Direct messages always work; group chats require an explicit @mention of this bot. Selecting all messages opens the official Feishu authorization flow.",
  "ui.feishu.disconnected": "Disconnected",
  "ui.feishu.enterTheFeishuOpenPlatformApp": "Enter the Feishu Open Platform App ID",
  "ui.feishu.enterTheFeishuOpenPlatformApp2": "Enter the Feishu Open Platform App Secret",
  "ui.feishu.feishu": "Feishu",
  "ui.feishu.feishuAppUpdateStatusIsMissing": "The Feishu app-update status is missing botId",
  "ui.feishu.feishuBot": "Feishu bot",
  "ui.feishu.feishuBotCredentialsConnected": "Feishu bot credentials connected.",
  "ui.feishu.feishuBotSettings": "Feishu bot settings",
  "ui.feishu.feishuDidNotReturnConnectionStatus": "Feishu did not return connection status",
  "ui.feishu.feishuDidNotReturnCreationProgress": "Feishu did not return creation progress",
  "ui.feishu.feishuDidNotReturnQrCode": "Feishu did not return QR code information",
  "ui.feishu.feishuReturnedAGroupMessagePermission": "Feishu returned a group-message permission QR code for a different bot",
  "ui.feishu.feishuReturnedARepairQrCode": "Feishu returned a repair QR code for a different bot",
  "ui.feishu.feishuReturnedAnInvalidBotStatus": "Feishu returned an invalid bot status",
  "ui.feishu.feishuReturnedAnUnknownCreationStatus": "Feishu returned an unknown creation status",
  "ui.feishu.feishuReturnedIncompleteQrCodeInformation": "Feishu returned incomplete QR code information",
  "ui.feishu.feishuReturnedRegistrationProgressForA": "Feishu returned registration progress for a different operation",
  "ui.feishu.finishTheCurrentFeishuAuthorizationBefore": "Finish the current Feishu authorization before granting group-message permission.",
  "ui.feishu.generateFeishuQrCode": "Generate Feishu QR code",
  "ui.feishu.groupMessagePermissionAuthorizationWasCancelled": "Group-message permission authorization was cancelled.",
  "ui.feishu.groupMessagePermissionWasNotGranted": "Group-message permission was not granted",
  "ui.feishu.groupResponseMode": "Group response mode",
  "ui.feishu.keepThisPageOpenUntilCard": "Keep this page open until card-button repair finishes",
  "ui.feishu.keepThisPageOpenUntilThe": "Keep this page open until the bot connection is ready",
  "ui.feishu.keepThisPageOpenWhileThe": "Keep this page open while the permission takes effect and the response mode switches automatically",
  "ui.feishu.loadingFeishuBots": "Loading Feishu bots",
  "ui.feishu.loadingFeishuConnectionStatus": "Loading Feishu connection status\u2026",
  "ui.feishu.needsAttention": "Needs attention",
  "ui.feishu.noAppIdIsRequiredYou": "No App ID is required. You can add more bots later for different teams or Feishu tenants.",
  "ui.feishu.noBotConnectedYet": "No bot connected yet",
  "ui.feishu.oneTimeAuthorizationQrCodeFor": "One-time authorization QR code for adding a Feishu bot to DeepSeek Harness",
  "ui.feishu.onlyRespondWhenMentionedRecommended": "Only respond when @mentioned (recommended)",
  "ui.feishu.openFeishuOnYourPhoneAnd": "Open Feishu on your phone and scan the QR code",
  "ui.feishu.openInFeishu": "Open in Feishu",
  "ui.feishu.persistentConnection": "Persistent connection",
  "ui.feishu.persistentConnectionIsHealthy": "Persistent connection is healthy",
  "ui.feishu.preparing": "Preparing\u2026",
  "ui.feishu.preparingAuthorization": "Preparing authorization\u2026",
  "ui.feishu.preparingAuthorizationQrCode": "Preparing authorization QR code",
  "ui.feishu.preparingPermissionAuthorizationQrCode": "Preparing permission authorization QR code",
  "ui.feishu.preparingTheRepairQrCode": "Preparing the repair QR code",
  "ui.feishu.reauthorize": "Reauthorize",
  "ui.feishu.reauthorizeGroupMessagePermission": "Reauthorize group-message permission",
  "ui.feishu.refreshAndScanAgain": "Refresh and scan again",
  "ui.feishu.refreshQrCode": "Refresh QR code",
  "ui.feishu.refreshTheQrCodeToContinue": "Refresh the QR code to continue",
  "ui.feishu.refreshing": "Refreshing\u2026",
  "ui.feishu.requestingAGroupMessagePermissionQr": "Requesting a group-message permission QR code for the existing Feishu app\u2026",
  "ui.feishu.requestingAOneTimeAuthorizationQr": "Requesting a one-time authorization QR code from Feishu\u2026",
  "ui.feishu.requestingAOneTimeUpdateQr": "Requesting a one-time update QR code for the existing Feishu app\u2026",
  "ui.feishu.respondToAllGroupMessages": "Respond to all group messages",
  "ui.feishu.retryNow": "Retry now",
  "ui.feishu.retrying": "Retrying\u2026",
  "ui.feishu.reviewTheAppNameAndPermissions": "Review the app name and permissions, then confirm",
  "ui.feishu.reviewTheExistingAppAndConfirm": "Review the existing app and confirm the \u201CRead all messages in associated group chat\u201D permission",
  "ui.feishu.reviewTheExistingAppNameAnd": "Review the existing app name and confirm that only the card callback is added",
  "ui.feishu.savingCredentialsAndCheckingTheNew": "Saving credentials and checking the new bot connection. Existing bots will not be interrupted.",
  "ui.feishu.scanToCreateYourFirstFeishu": "Scan to create your first Feishu bot",
  "ui.feishu.scanWithFeishuToCreateA": "Scan with Feishu to create a bot",
  "ui.feishu.scanWithFeishuToRepairCard": "Scan with Feishu to repair card buttons",
  "ui.feishu.scanningAddsOneBotExistingBots": "Scanning adds one bot. Existing bots will continue to send and receive messages.",
  "ui.feishu.scanningUpdatesTheExistingFeishuApp": "Scanning updates the existing Feishu app with only the card-button callback. It does not create a new app. This bot reconnects briefly after confirmation; other bots are not affected.",
  "ui.feishu.scanningUpdatesTheExistingFeishuApp2": "Scanning updates the existing Feishu app with only the \u201CRead all messages in associated group chat\u201D scope. It does not create a new app. After confirmation, \u201CRespond to all group messages\u201D is enabled automatically; other bots are unaffected.",
  "ui.feishu.testMessageSentCheckTheFeishu": "Test message sent. Check the Feishu conversation.",
  "ui.feishu.theBotIsNotConnectedYet": "The bot is not connected yet",
  "ui.feishu.theBotIsStillOffline": "The bot is still offline",
  "ui.feishu.theBotWasCreatedButIts": "The bot was created, but its connection could not be confirmed yet",
  "ui.feishu.theCardCallbackWasUpdatedBut": "The card callback was updated, but the bot connection could not be confirmed yet",
  "ui.feishu.theFeishuBotIsMissingBotid": "The Feishu bot is missing botId",
  "ui.feishu.theGroupMessagePermissionWasUpdated": "The group-message permission was updated, but the bot connection could not be confirmed yet",
  "ui.feishu.theNewBotWasNotAdded": "The new bot was not added",
  "ui.feishu.theNewFeishuBotIsConnected": "The new Feishu bot is connected and ready to chat.",
  "ui.feishu.theOperationFailedTryAgainLater": "The operation failed. Try again later.",
  "ui.feishu.thePermissionUpdateWasSubmittedEnabling": "The permission update was submitted. Enabling all-message mode and reconnecting this bot. This stage cannot be cancelled; other bots will not be interrupted.",
  "ui.feishu.thePermissionUpdateWasSubmittedSaving": "The permission update was submitted. Saving the setting and reconnecting this bot. This stage cannot be cancelled; other bots will not be interrupted.",
  "ui.feishu.theQrCodeIsNotReady": "The QR code is not ready. Open the authorization link.",
  "ui.feishu.theReadAllMessagesInAssociated": "The \u201CRead all messages in associated group chat\u201D scope (im:message.group_msg) is granted; the bot processes every visible group message.",
  "ui.feishu.theReadAllMessagesInAssociated2": "The \u201CRead all messages in associated group chat\u201D scope has not been confirmed. Complete Feishu authorization.",
  "ui.feishu.theUpdateWasSubmittedVerifyingThe": "The update was submitted. Verifying the card callback and reconnecting this bot. This stage cannot be cancelled; other bots will not be interrupted.",
  "ui.feishu.thisBot": "this bot",
  "ui.feishu.thisStopsTheBotConnectionAnd": "This stops the bot connection and removes the locally stored configuration and credentials. The app in Feishu Open Platform is not deleted, and other bots are not affected.",
  "ui.feishu.unknownStatus": "Unknown status",
  "ui.feishu.waitingForScan": "Waiting for scan\u2026",
  "ui.feishu.waitingToRefresh": "Waiting to refresh",
  "ui.index.deepseekHarnessAlwaysWithinReach": "DeepSeek Harness, always within reach",
  "ui.index.experimental": "(Experimental)",
  "ui.index.helpFeedbackOpenGithub": "Help & feedback \xB7 Open GitHub",
  "ui.index.imBotSettings": "IM bot settings",
  "ui.index.imBots": "IM bots",
  "ui.index.imChannels": "IM channels",
  "ui.office.actionItemsTurnThisIntoAccountable": "action-items=Turn this into accountable tasks with deadlines and acceptance criteria",
  "ui.office.aiOfficeSettings": "AI Office settings",
  "ui.office.aiOfficeSettingsAreMissingAn": "AI Office settings are missing an RPC connection",
  "ui.office.completedJobs": "Completed Jobs",
  "ui.office.configurationIsSavedAndRetriedWhile": "Configuration is saved and retried while Office hooks are unavailable; HTTP 404 means the protocol endpoint is pending, not a Harness failure.",
  "ui.office.configurationSaved": "Configuration saved.",
  "ui.office.configured": "Configured",
  "ui.office.connectedToOffice": "Connected to Office",
  "ui.office.connectionTestPassed": "Connection test passed.",
  "ui.office.credentialMissing": "Credential missing",
  "ui.office.derivedFromBaseUrlNoSeparate": "Derived from Base URL; no separate input",
  "ui.office.deviceConnection": "Device connection",
  "ui.office.eachInstructionPresetMappingMustUse": "Each instruction preset mapping must use alias=value",
  "ui.office.eachWorkspaceMappingMustUseAlias": "Each workspace mapping must use alias=value",
  "ui.office.heartbeatSeconds": "Heartbeat seconds",
  "ui.office.instructionPresetMappings": "Instruction preset mappings",
  "ui.office.invalidBaseUrl": "Invalid Base URL",
  "ui.office.lastEvent": "Last event",
  "ui.office.lastHeartbeat": "Last heartbeat",
  "ui.office.loadingAiOfficeConnector": "Loading AI Office Connector\u2026",
  "ui.office.maxConcurrency": "Max concurrency",
  "ui.office.noneYet": "None yet",
  "ui.office.notConfigured": "Not configured",
  "ui.office.oneAliasInstructionPerLineNew": "One alias=instruction per line; new presets require no Office code change.",
  "ui.office.oneAliasLocalAbsolutePathPer": "One alias=/local/absolute/path per line; Office sees only aliases.",
  "ui.office.pasteTheOneTimeOfficeCredential": "Paste the one-time Office credential",
  "ui.office.protocolHookPreview": "Protocol hook preview",
  "ui.office.reconnect": "Reconnect",
  "ui.office.reconnects": "Reconnects",
  "ui.office.removeConnection": "Remove connection",
  "ui.office.runningJobs": "Running Jobs",
  "ui.office.saveAndConnect": "Save and connect",
  "ui.office.storedSecurelyLeaveBlankToKeep": "Stored securely; leave blank to keep it",
  "ui.office.testConnection": "Test connection",
  "ui.office.testing": "Testing\u2026",
  "ui.office.thisMachineConnectsOutwardToThe": "This machine connects outward to the public Office; Harness exposes no port. Protocol hooks: ",
  "ui.office.tokenIsWrittenOnlyToThe": "Token is written only to the local credential store",
  "ui.office.waitingToReconnect": "Waiting to reconnect",
  "ui.office.workspaceMappings": "Workspace mappings",
  "ui.qq.authorizedInQqConnectingTheBot": "Authorized in QQ. Connecting the bot",
  "ui.qq.completeBotSetupWithMobileQq": "Complete bot setup with mobile QQ",
  "ui.qq.confirmBotCreationOrConnectionOn": "Confirm bot creation or connection on the Tencent authorization page",
  "ui.qq.connectAQqBotWithAppid": "Connect a QQ bot with AppID and AppSecret",
  "ui.qq.connectQqBotByQrCode": "Connect QQ bot by QR code",
  "ui.qq.connectedQqBots": "Connected QQ bots",
  "ui.qq.enterTheQqOpenPlatformAppid": "Enter the QQ Open Platform AppID",
  "ui.qq.enterTheQqOpenPlatformAppsecret": "Enter the QQ Open Platform AppSecret",
  "ui.qq.generateQqQrCode": "Generate QQ QR code",
  "ui.qq.generatingQrCode": "Generating QR code\u2026",
  "ui.qq.noQqBotConnectedYet": "No QQ bot connected yet",
  "ui.qq.oneTimeQrCodeForConnecting": "One-time QR code for connecting a QQ bot",
  "ui.qq.openMobileQqAndScanThe": "Open mobile QQ and scan the QR code",
  "ui.qq.qqBot": "QQ bot",
  "ui.qq.qqDidNotReturnAValid": "QQ did not return a valid setup attempt",
  "ui.qq.qqDidNotReturnAValid2": "QQ did not return a valid bot list",
  "ui.qq.qqDidNotReturnQrSetup": "QQ did not return QR setup progress",
  "ui.qq.qqWebsocketConnectionIsHealthy": "QQ WebSocket connection is healthy",
  "ui.qq.qrCodeExpiresIn": "QR code expires in",
  "ui.qq.refreshingQrCode": "Refreshing QR code\u2026",
  "ui.qq.refreshingQrCode2": "Refreshing QR code",
  "ui.qq.requestingQqQrCode": "Requesting QQ QR code\u2026",
  "ui.qq.returnHereAndWaitForThe": "Return here and wait for the connection to complete",
  "ui.qq.savingCredentialsLocallyAndStartingThe": "Saving credentials locally and starting the QQ WebSocket connection.",
  "ui.qq.scanWithMobileQqToCreate": "Scan with mobile QQ to create and connect a bot",
  "ui.qq.scanningIsCompletedOnTencentS": "Scanning is completed on Tencent\u2019s official page. No AppID or AppSecret is required, and the bot connects automatically.",
  "ui.qq.tencentWillCreateOrConnectA": "Tencent will create or connect a QQ bot and securely deliver its credentials to the local Harness Host.",
  "ui.qq.testMessageSentCheckTheMatching": "Test message sent. Check the matching bot conversation.",
  "ui.qq.thisStopsTheMessageConnectionAnd": "This stops the message connection and removes the locally stored app credentials, bot configuration, and session mappings. The bot on Tencent\u2019s platform is not deleted.",
  "ui.qq.waitingForMobileQqScan": "Waiting for mobile QQ scan",
  "ui.qq.websocketPersistentConnection": "WebSocket persistent connection",
  "ui.slack.botTokenAndAppToken": "Bot Token and App Token",
  "ui.slack.configureTheBotWithTheOfficial": "Configure the bot with the official app manifest, then enter the Bot Token and App Token to start a local Socket Mode connection.",
  "ui.slack.connectASlackBot": "Connect a Slack bot",
  "ui.slack.connectASlackBotWithA": "Connect a Slack bot with a manifest and two tokens",
  "ui.slack.connectBot": "Connect bot",
  "ui.slack.copyManifest": "Copy manifest",
  "ui.slack.copyTheManifestAndChooseFrom": "Copy the manifest and choose \u201CFrom a manifest\u201D in Slack. Then create a connections:write App Token and install the app to your workspace.",
  "ui.slack.createAndConfigureASlackApp": "Create and configure a Slack app with the manifest",
  "ui.slack.getTheBotTokenFromOauth": "Get the Bot Token from OAuth & Permissions and the App Token from Basic Information. The App Token must include connections:write.",
  "ui.slack.hideSetup": "Hide setup",
  "ui.slack.manifestCopied": "Manifest copied",
  "ui.slack.openSlackAppCreation": "Open Slack app creation",
  "ui.slack.slackWorkspace": "Slack workspace",
  "ui.slack.socketModePersistentConnection": " Socket Mode persistent connection",
  "ui.slack.socketModePersistentConnection2": "Socket Mode persistent connection",
  "ui.slack.startSetup": "Start setup",
  "ui.slack.verifyAndConnect": "Verify and connect",
  "ui.slack.verifyingAndConnecting": "Verifying and connecting\u2026",
  "ui.telegram.accessSettings": "Access settings",
  "ui.telegram.activeCompatibleMode": "Active: Compatible mode",
  "ui.telegram.activeSafeMode": "Active: Safe mode",
  "ui.telegram.allGroupMessagesAreIgnoredOnly": "All group messages are ignored; only allowlisted users may send DMs.",
  "ui.telegram.botApiLongPolling": " Bot API long polling",
  "ui.telegram.botApiLongPolling2": "Bot API long polling",
  "ui.telegram.compatibleMode": "Compatible mode",
  "ui.telegram.compatibleModeDefault": "Compatible mode (default)",
  "ui.telegram.compatibleModeDoesNotEnforceThe": "Compatible mode does not enforce the allowlist; it is retained when modes change.",
  "ui.telegram.connectATelegramBot": "Connect a Telegram bot",
  "ui.telegram.couldNotSaveTelegramAccessSettings": "Could not save Telegram access settings.",
  "ui.telegram.eachUserIdMustBeA": "Each User ID must be a 1\u201316 digit positive integer on its own line.",
  "ui.telegram.enterTheBotTokenFromBotfather": "Enter the Bot Token from @BotFather",
  "ui.telegram.getABotTokenFromBotfather": "Get a Bot Token from @BotFather, then connect it here.",
  "ui.telegram.keepTheOriginalBehaviorRespondTo": "Keep the original behavior: respond to DMs and to group mentions or replies.",
  "ui.telegram.mode": "Mode",
  "ui.telegram.oneNumericUserIdPerLine": "One numeric User ID per line",
  "ui.telegram.safeMode": "Safe mode",
  "ui.telegram.safeModePrivateChatAllowlist": "Safe mode (private-chat allowlist)",
  "ui.telegram.saveAccessSettings": "Save access settings",
  "ui.telegram.saving": "Saving\u2026",
  "ui.telegram.telegramAccessMode": "Telegram access mode",
  "ui.telegram.telegramAccessSettingsAreCurrentlyUnavailable": "Telegram access settings are currently unavailable.",
  "ui.telegram.telegramUserIdsAllowedToSend": "Telegram User IDs allowed to send DMs",
  "ui.telegram.theAllowlistIsEmptyThisBot": "The allowlist is empty; this bot will reject all inbound messages after saving.",
  "ui.telegram.thisAllowlistBelongsOnlyToThe": "This allowlist belongs only to the current bot.",
  "ui.telegram.viewTelegramAccessModeDetails": "View Telegram access mode details",
  "ui.wecom.authorizeTheAiBotWithWecom": "Authorize the AI bot with WeCom",
  "ui.wecom.authorizedInWecomConnectingTheBot": "Authorized in WeCom. Connecting the bot",
  "ui.wecom.confirmBotCreationOnTheTencent": "Confirm bot creation on the Tencent authorization page",
  "ui.wecom.connectAWecomBotWithBot": "Connect a WeCom bot with Bot ID and Secret",
  "ui.wecom.connectWecomBotByQrCode": "Connect WeCom bot by QR code",
  "ui.wecom.connectedWecomBots": "Connected WeCom bots",
  "ui.wecom.enterTheWecomAiBotId": "Enter the WeCom AI Bot ID",
  "ui.wecom.enterTheWecomAiBotSecret": "Enter the WeCom AI Bot Secret",
  "ui.wecom.generateWecomQrCode": "Generate WeCom QR code",
  "ui.wecom.noWecomBotConnectedYet": "No WeCom bot connected yet",
  "ui.wecom.oneTimeQrCodeForConnecting": "One-time QR code for connecting a WeCom bot",
  "ui.wecom.openWecomAndScanTheQr": "Open WeCom and scan the QR code",
  "ui.wecom.requestingWecomQrCode": "Requesting WeCom QR code\u2026",
  "ui.wecom.savingCredentialsLocallyAndStartingThe": "Saving credentials locally and starting the WeCom WebSocket connection.",
  "ui.wecom.scanWithWecomToCreateAn": "Scan with WeCom to create an AI bot",
  "ui.wecom.scanningIsCompletedOnTencentS": "Scanning is completed on Tencent\u2019s official page. No Bot ID or Secret is required, and the bot connects automatically.",
  "ui.wecom.thisStopsTheMessageConnectionAnd": "This stops the message connection and removes the locally stored app credentials, bot configuration, and session mappings. The bot in WeCom is not deleted.",
  "ui.wecom.waitingForWecomScan": "Waiting for WeCom scan",
  "ui.wecom.wecom": "WeCom",
  "ui.wecom.wecomBot": "WeCom bot",
  "ui.wecom.wecomConnectionCheckCompletedAndThe": "WeCom connection check completed and the test message was sent.",
  "ui.wecom.wecomConnectionCheckCompletedButThe": "WeCom connection check completed, but the test message could not be sent.",
  "ui.wecom.wecomDidNotReturnAValid": "WeCom did not return a valid setup attempt",
  "ui.wecom.wecomDidNotReturnAValid2": "WeCom did not return a valid bot list",
  "ui.wecom.wecomDidNotReturnQrSetup": "WeCom did not return QR setup progress",
  "ui.wecom.wecomSettings": "WeCom settings",
  "ui.wecom.wecomWebsocketConnectionIsHealthy": "WeCom WebSocket connection is healthy",
  "ui.wecom.wecomWillCreateAnAiBot": "WeCom will create an AI bot and securely deliver its credentials to the local Harness Host.",
  "ui.weixin.cancelSetup": "Cancel setup",
  "ui.weixin.confirmTheBotConnectionInWechat": "Confirm the bot connection in WeChat",
  "ui.weixin.confirmedInWechatStartingTheMessage": "Confirmed in WeChat. Starting the message connection",
  "ui.weixin.connectWechatBotByQrCode": "Connect WeChat bot by QR code",
  "ui.weixin.connectedWechatAccounts": "Connected WeChat accounts",
  "ui.weixin.contactingTheWechatIlinkService": "Contacting the WeChat iLink service.",
  "ui.weixin.continueConnecting": "Continue connecting",
  "ui.weixin.couldNotLoadWechatStatus": "Could not load WeChat status",
  "ui.weixin.enterTheNumberShownInWechat": "Enter the number shown in WeChat",
  "ui.weixin.generateWechatQrCode": "Generate WeChat QR code",
  "ui.weixin.ilinkLongPolling": "iLink long polling",
  "ui.weixin.keepAccount": "Keep account",
  "ui.weixin.keepThisPageOpenUntilLong": "Keep this page open until long polling is online",
  "ui.weixin.loadingWechatConnectionStatus": "Loading WeChat connection status\u2026",
  "ui.weixin.noWechatAccountConnectedYet": "No WeChat account connected yet",
  "ui.weixin.oneTimeQrCodeForConnecting": "One-time QR code for connecting a WeChat bot to DeepSeek Harness",
  "ui.weixin.openAlternateLink": "Open alternate link",
  "ui.weixin.openWechatOnYourPhoneAnd": "Open WeChat on your phone and scan the QR code",
  "ui.weixin.pairingCodeRequired": "Pairing code required",
  "ui.weixin.pairingCodeSubmittedWaitingForWechat": "Pairing code submitted. Waiting for WeChat confirmation.",
  "ui.weixin.preparingWechatQrCode": "Preparing WeChat QR code",
  "ui.weixin.remove": "Remove",
  "ui.weixin.removeThisWechatAccountFromHarness": "Remove this WeChat account from Harness?",
  "ui.weixin.reviewAndConfirmAuthorizationOnYour": "Review and confirm authorization on your phone. Some accounts may also require a pairing number.",
  "ui.weixin.savingCredentialsAndVerifyingTheWechat": "Saving credentials and verifying the WeChat connection.",
  "ui.weixin.scanOnceToUseHarnessIn": "Scan once to use Harness in WeChat",
  "ui.weixin.scanWithWechatOnYourPhone": "Scan with WeChat on your phone",
  "ui.weixin.scannedConfirmOnYourPhone": "Scanned. Confirm on your phone",
  "ui.weixin.theQrCodeIsIssuedBy": "The QR code is issued by Tencent WeChat iLink. After you scan and confirm, account credentials are written directly to the Harness Host and are never exposed to the browser.",
  "ui.weixin.theQrCodeIsNotReady": "The QR code is not ready. Use the alternate link.",
  "ui.weixin.theWechatAccountAndLocalCredentials": "The WeChat account and local credentials were removed.",
  "ui.weixin.thisIsAnAdditionalWechatConfirmation": "This is an additional WeChat confirmation step. The pairing code is used only for this connection and is never stored.",
  "ui.weixin.thisStopsTheMessageConnectionAnd": "This stops the message connection and removes the locally stored bot_token, account configuration, and session mappings. Other WeChat accounts are not affected.",
  "ui.weixin.thisWechatAccountIsConnectedAnd": "This WeChat account is connected and online.",
  "ui.weixin.verifying": "Verifying\u2026",
  "ui.weixin.waitingForWechatScan": "Waiting for WeChat scan",
  "ui.weixin.wechat": "WeChat",
  "ui.weixin.wechatBot": "WeChat bot",
  "ui.weixin.wechatConnectionCheckCompletedAndThe": "WeChat connection check completed and the test message was sent.",
  "ui.weixin.wechatConnectionCheckCompletedButThe": "WeChat connection check completed, but the test message could not be sent.",
  "ui.weixin.wechatConnectionIsHealthy": "WeChat connection is healthy",
  "ui.weixin.wechatConnectionIsNotReady": "WeChat connection is not ready",
  "ui.weixin.wechatDidNotReturnAValid": "WeChat did not return a valid setup attempt",
  "ui.weixin.wechatDidNotReturnAValid2": "WeChat did not return a valid account list",
  "ui.weixin.wechatIsConnectedAndReadyFor": "WeChat is connected and ready for messages.",
  "ui.weixin.wechatPairingCode": "WeChat pairing code",
  "ui.weixin.wechatQrCodeGeneratedScanIt": "WeChat QR code generated. Scan it with WeChat on your phone.",
  "ui.weixin.wechatSettings": "WeChat settings",
  "ui.weixin.wechatSetupDidNotComplete": "WeChat setup did not complete",
  "ui.weixin.wechatSetupWasCancelled": "WeChat setup was cancelled.",
  "ui.whatsapp.connectWhatsappByQrCode": "Connect WhatsApp by QR code",
  "ui.whatsapp.connectWhatsappByQrCode2": "Connect WhatsApp by QR code",
  "ui.whatsapp.connectedWhatsappAccounts": "Connected WhatsApp accounts",
  "ui.whatsapp.connectionCheckCompletedButNoWhatsapp": "Connection check completed, but no WhatsApp self-chat target is available.",
  "ui.whatsapp.creatingASecureLinkedDeviceSession": "Creating a secure linked-device session.",
  "ui.whatsapp.generateQrCode": "Generate QR code",
  "ui.whatsapp.generatingQrCode": "Generating QR code\u2026",
  "ui.whatsapp.generatingWhatsappQrCode": "Generating WhatsApp QR code",
  "ui.whatsapp.linkingTheDeviceToDeepseekHarness": "Linking the device to DeepSeek Harness.",
  "ui.whatsapp.oneTimeQrCodeForLinking": "One-time QR code for linking a WhatsApp device",
  "ui.whatsapp.openWhatsappSettingsLinkedDevices": "Open WhatsApp \u2192 Settings \u2192 Linked devices",
  "ui.whatsapp.scanTheQrCodeWithWhatsapp": "Scan the QR code with WhatsApp to connect.",
  "ui.whatsapp.scanWithWhatsappOnYourPhone": "Scan with WhatsApp on your phone",
  "ui.whatsapp.scannedConnectingWhatsapp": "Scanned. Connecting WhatsApp",
  "ui.whatsapp.selectLinkADeviceAndScan": "Select \u201CLink a device\u201D and scan the QR code",
  "ui.whatsapp.testMessageSentCheckTheWhatsapp": "Test message sent. Check the WhatsApp self-chat.",
  "ui.whatsapp.thisStopsTheMessageConnectionAnd": "This stops the message connection and removes the locally stored WhatsApp linked device and session mappings.",
  "ui.whatsapp.waitingForWhatsappScan": "Waiting for WhatsApp scan",
  "ui.whatsapp.whatsappAccount": "WhatsApp account",
  "ui.whatsapp.whatsappBot": "WhatsApp bot",
  "ui.whatsapp.whatsappDidNotReturnAValid": "WhatsApp did not return a valid setup attempt",
  "ui.whatsapp.whatsappDidNotReturnAValid2": "WhatsApp did not return a valid account list",
  "ui.whatsapp.whatsappDidNotReturnQrSetup": "WhatsApp did not return QR setup progress",
  "ui.whatsapp.whatsappLinkedDeviceIsHealthy": "WhatsApp linked device is healthy",
  "ui.workspaceDirectoryPicker.couldNotLoadTheFolderTry": "Could not load the folder. Try again.",
  "ui.workspaceDirectoryPicker.currentFolder": "Current folder",
  "ui.workspaceDirectoryPicker.home": "Home",
  "ui.workspaceDirectoryPicker.loadingFolders": "Loading folders\u2026",
  "ui.workspaceDirectoryPicker.preparingFolderPicker": "Preparing folder picker\u2026",
  "ui.workspaceDirectoryPicker.retry": "Retry",
  "ui.workspaceDirectoryPicker.selectBotWorkspaceFolder": "Select bot workspace folder",
  "ui.workspaceDirectoryPicker.selectThisFolder": "Select this folder",
  "ui.workspaceDirectoryPicker.showHiddenFolders": "Show hidden folders",
  "ui.workspaceDirectoryPicker.switching": "Switching\u2026",
  "ui.workspaceDirectoryPicker.switchingClearsThisBotSPrevious": "Switching clears this bot\u2019s previous session mappings.",
  "ui.workspaceDirectoryPicker.thisFolderHasNoSubfolders": "This folder has no subfolders.",
  "ui.workspaceDirectoryPicker.thisFolderHasTooManySubfolders": "This folder has too many subfolders; only the first group is shown.",
  "ui.workspaceEditor.chooseFolder": "Choose folder",
  "ui.workspaceEditor.couldNotUpdateTheWorkspaceTry": "Could not update the workspace. Try again.",
  "ui.workspaceEditor.currentWorkspace": "Current workspace",
  "ui.workspaceEditor.notSet": "Not set",
  // Settings-page strings shared by every channel. These were nine near-copies
  // per sentence before; the channel name is a parameter instead.
  "ui.common.operationFailed": "{channel} operation failed",
  "ui.common.operationFailedRetry": "{channel} operation failed; try again later",
  "ui.common.unrecognizedResponse": "The {channel} service returned an unrecognized response",
  "ui.common.noBotList": "The {channel} service did not return a valid bot list",
  "ui.common.settings": "{channel} settings",
  "ui.common.missingRpc": "{channel} settings are missing an RPC connection",
  "ui.common.runningNormally": "{channel}{connection} is running normally",
  "ui.common.connectionNotReady": "The {channel} connection is not ready",
  "ui.common.botLabel": "{channel} bot",
  "ui.common.notConnected": "{channel} was not connected",
  "ui.common.onlineCount": "{connected} / {configured} online",
  "ui.common.botsOnline": "{connected} of {configured} bots online",
  "ui.common.removeConfirm": 'Remove "{name}" from DeepSeek Harness?',
  "ui.common.removeAria": "Remove {name}",
  "ui.common.stillOffline": "{channel} is still offline; the plugin will keep retrying.",
  "ui.common.connectionCheckDone": "The {channel} connection check finished.",
  "ui.common.statusRefreshFailed": "Status refresh failed: {reason}",
  "ui.common.statusAutoRefreshFailed": "Automatic status refresh failed: {reason}",
  "ui.common.operationFailedReason": "Operation failed: {reason}",
  "ui.common.removalFailedReason": "Removal failed: {reason}",
  "ui.common.cannotReadStatus": "Could not read {channel} bot status",
  "ui.common.loadingStatus": "Loading {channel} bot status\u2026",
  "ui.common.noBotsYet": "No {channel} bots are connected yet",
  "ui.common.connectedBots": "Connected {channel} bots",
  "ui.common.connectWithToken": "Connect a {channel} bot with a bot token",
  "ui.common.manualConnect": "Connect a {channel} bot manually",
  "ui.common.removeWarning": "This stops the message connection and removes the locally stored {credential}, bot configuration, and session mappings. The bot in {platform} is not deleted.",
  "ui.common.lastMessageFailed": "Latest message failed: {reason}",
  "ui.common.qrRemaining": "QR code expires in {remaining}",
  "ui.common.defaultBotName": "bot",
  // Feishu's settings page has per-bot repair and group-permission flows.
  "ui.feishu.removedNotice": "{name} was removed from this DeepSeek Harness. The app in the Feishu Open Platform was not deleted.",
  "ui.feishu.reconnected": "{name} reconnected.",
  "ui.feishu.authFlow": "Feishu authorization flow for {name}",
  "ui.feishu.removeFailed": "{name} could not be removed; try again.",
  "ui.feishu.connectionCheckDone": "The {name} connection check finished.",
  "ui.feishu.repairQrReady": "The repair QR code for {name} is ready. Scan it with Feishu.",
  "ui.feishu.groupQrReady": "The group-message permission QR code for {name} is ready. Confirm it in Feishu.",
  "ui.feishu.checkConnectionOf": "Check the {name} connection",
  "ui.feishu.retryConnectionOf": "Retry the {name} connection",
  "ui.feishu.groupPermissionGranted": '{name} now has group-message permission, with "respond to all group messages" enabled.',
  "ui.feishu.connectedReady": "{name} is connected. You can start chatting in Feishu.",
  "ui.feishu.cardButtonsRepaired": "The card buttons for {name} are repaired.",
  "ui.feishu.removeFromHarness": "Remove {name} from DeepSeek Harness",
  "ui.feishu.repairCardButtons": "Repair card buttons",
  "ui.feishu.repairCardButtonsOf": "Repair the card buttons for {name}",
  "ui.feishu.repairingBot": 'Repairing "{name}"',
  "ui.feishu.grantingGroupPermission": 'Granting group-message permission for "{name}"',
  "ui.feishu.repairQrAlt": "One-time authorization QR code for repairing the card buttons of {name}",
  "ui.feishu.groupQrAlt": "One-time authorization QR code for granting group-message permission to {name}",
  "ui.common.serviceRequestFailed": "The {channel} service request failed",
  "ui.common.connectionProblem": "The {channel} connection hit a problem",
  "ui.common.qrExpiredRegenerate": "The QR code has expired\nGenerate a new one",
  "ui.common.notBound": "{channel} was not bound",
  // --- Settings-page RPC validation --------------------------------------
  "rpc.workspaceRequired": "Enter an absolute workspace path.",
  "rpc.presetRequired": "Choose an agent preset.",
  "rpc.groupResponseRequired": "Choose how to respond in group chats.",
  "rpc.operationFailed": "{channel} operation failed. Try again shortly.",
  "rpc.invalidBotToken": "The {channel} bot token is invalid. Enter it again.",
  "rpc.telegramBadRequest": "Enter a valid Telegram access mode and numeric user IDs.",
  "rpc.slackInvalidBotToken": "The Slack bot token is invalid. Confirm it starts with xoxb-.",
  "rpc.slackInvalidAppToken": "The Slack app token is invalid. Confirm it starts with xapp-.",
  "rpc.slackMissingScope": "The Slack app permissions are incomplete. Re-import the manifest and install it to the workspace.",
  "rpc.officeInvalidDeviceToken": "The AI Office device token is invalid.",
  "rpc.officeHookUnavailable": "The AI Office hook is not live yet, or its address is wrong.",
  "rpc.officeOperationFailed": "The AI Office connection operation failed. Try again shortly.",
  "rpc.feishuHealthy": "The connection is running normally",
  "rpc.feishuBotNotConnected": "The bot is not connected",
  "rpc.feishuNoBots": "No Feishu bots are connected yet"
});

// src/i18n/locales/zh-CN.mjs
var ZH_CN = Object.freeze({
  // --- /stop and /steer -------------------------------------------------
  "control.usage.stop": "\u7528\u6CD5\uFF1A/stop\uFF08\u4E0D\u5E26\u53C2\u6570\uFF09",
  "control.usage.steer": "\u7528\u6CD5\uFF1A/steer <\u8865\u5145\u6307\u4EE4>",
  "control.textOnly": "\u63A7\u5236\u547D\u4EE4\u4EC5\u652F\u6301\u7EAF\u6587\u5B57\uFF0C\u8BF7\u79FB\u9664\u56FE\u7247\u540E\u91CD\u8BD5\u3002",
  "control.noActiveTask": "\u5F53\u524D\u804A\u5929\u6CA1\u6709\u6B63\u5728\u8FD0\u884C\u7684\u4EFB\u52A1\u3002",
  "control.noActiveTaskSendMessage": "\u5F53\u524D\u804A\u5929\u6CA1\u6709\u6B63\u5728\u8FD0\u884C\u7684\u4EFB\u52A1\uFF0C\u8BF7\u76F4\u63A5\u53D1\u9001\u666E\u901A\u6D88\u606F\u3002",
  "control.stopRequested": "\u5DF2\u8BF7\u6C42\u505C\u6B62\u5F53\u524D\u4EFB\u52A1\u3002",
  "control.steerSubmitted": "\u5DF2\u63D0\u4EA4\u8865\u5145\u6307\u4EE4\uFF0CAgent \u4F1A\u5728\u4E0B\u4E00\u6B65\u8BFB\u53D6\u3002",
  "control.awaitingInteraction": "\u5F53\u524D\u4EFB\u52A1\u6B63\u5728\u7B49\u5F85\u4F60\u7684\u56DE\u7B54\u6216\u5BA1\u6279\u3002\n\n\u8BF7\u5148\u5904\u7406\u5F53\u524D\u8BF7\u6C42\uFF0C\u6216\u8005\u53D1\u9001 /stop \u505C\u6B62\u4EFB\u52A1\u3002",
  // --- Inbound images ---------------------------------------------------
  "image.defaultPrompt": "\u8BF7\u5206\u6790\u8FD9\u5F20\u56FE\u7247\u3002",
  "image.error.redirectBlocked": "\u56FE\u7247\u4E0B\u8F7D\u5730\u5740\u53D1\u751F\u4E86\u91CD\u5B9A\u5411\uFF0C\u6682\u65F6\u65E0\u6CD5\u8BFB\u53D6\u3002",
  "image.error.httpError": "\u56FE\u7247\u4E0B\u8F7D\u5931\u8D25\uFF08HTTP {status}\uFF09\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001\u540E\u518D\u8BD5\u3002",
  "image.error.tooLarge": "\u56FE\u7247\u8D85\u8FC7 {limit}\uFF0C\u8BF7\u538B\u7F29\u540E\u91CD\u8BD5\u3002",
  "image.error.totalTooLarge": "\u4E00\u6B21\u53D1\u9001\u7684\u56FE\u7247\u603B\u5927\u5C0F\u8FC7\u5927\uFF0C\u8BF7\u51CF\u5C11\u56FE\u7247\u6570\u91CF\u6216\u538B\u7F29\u540E\u91CD\u8BD5\u3002",
  "image.error.downloadFailed": "\u56FE\u7247\u4E0B\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001\u540E\u518D\u8BD5\u3002",
  "image.error.unreadable": "\u672A\u80FD\u8BFB\u53D6\u56FE\u7247\u5185\u5BB9\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001\u3002",
  "image.error.tooMany": ({ max }) => `\u4E00\u6B21\u6700\u591A\u53EA\u80FD\u5904\u7406 ${max} \u5F20\u56FE\u7247\u3002`,
  "image.error.unsupportedType": "\u6682\u4E0D\u652F\u6301\u8BE5\u56FE\u7247\u683C\u5F0F\uFF0C\u8BF7\u53D1\u9001 JPEG\u3001PNG\u3001WebP \u6216 GIF \u56FE\u7247\u3002",
  "image.host.modelDoesNotSupportImages": "\u5F53\u524D\u6A21\u578B\u4E0D\u652F\u6301\u56FE\u7247\uFF0C\u8BF7\u7528 /models \u67E5\u770B\u53EF\u7528\u6A21\u578B\uFF0C\u518D\u7528 /model <\u5E8F\u53F7> \u5207\u6362\u540E\u91CD\u53D1\u3002",
  "image.host.imageTooLarge": "\u56FE\u7247\u8D85\u8FC7\u5BBF\u4E3B\u5141\u8BB8\u7684\u5927\u5C0F\uFF0C\u8BF7\u538B\u7F29\u540E\u91CD\u8BD5\u3002",
  "image.host.imageTooManyPixels": "\u56FE\u7247\u5206\u8FA8\u7387\u8FC7\u9AD8\uFF0C\u8BF7\u538B\u7F29\u540E\u91CD\u8BD5\u3002",
  "image.host.invalidImage": "\u56FE\u7247\u5185\u5BB9\u65E0\u6548\u6216\u683C\u5F0F\u4E0D\u53D7\u652F\u6301\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001\u3002",
  "image.host.invalidImageBase64": "\u672A\u80FD\u8BFB\u53D6\u56FE\u7247\u5185\u5BB9\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001\u3002",
  "image.host.imageTypeMismatch": "\u56FE\u7247\u683C\u5F0F\u4E0E\u5B9E\u9645\u5185\u5BB9\u4E0D\u4E00\u81F4\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001\u3002",
  "image.host.tooManyImages": "\u4E00\u6B21\u53D1\u9001\u7684\u56FE\u7247\u6570\u91CF\u8D85\u8FC7\u5BBF\u4E3B\u9650\u5236\uFF0C\u8BF7\u51CF\u5C11\u540E\u91CD\u8BD5\u3002",
  "image.host.imagesTooLarge": "\u56FE\u7247\u603B\u5927\u5C0F\u8D85\u8FC7\u5BBF\u4E3B\u9650\u5236\uFF0C\u8BF7\u51CF\u5C11\u56FE\u7247\u6216\u538B\u7F29\u540E\u91CD\u8BD5\u3002",
  // Channel-specific image failures.
  "image.error.queueFull": "\u5F53\u524D\u5F85\u5904\u7406\u56FE\u7247\u8F83\u591A\uFF0C\u8BF7\u7A0D\u540E\u91CD\u65B0\u53D1\u9001\u3002",
  "image.error.feishuPermissionRequired": "\u98DE\u4E66\u673A\u5668\u4EBA\u7F3A\u5C11\u56FE\u7247\u8BFB\u53D6\u6743\u9650\u3002\u8BF7\u5728\u98DE\u4E66\u5F00\u653E\u5E73\u53F0\u4E3A\u8BE5\u5E94\u7528\u6DFB\u52A0 im:message:readonly\uFF0C\u53D1\u5E03\u65B0\u7248\u672C\u5E76\u5B8C\u6210\u5FC5\u8981\u7684\u7BA1\u7406\u5458\u5BA1\u6279\u540E\uFF0C\u518D\u91CD\u65B0\u53D1\u9001\u56FE\u7247\u3002",
  "image.error.slackFileAccessRequired": "Slack \u672A\u6388\u6743\u673A\u5668\u4EBA\u8BFB\u53D6\u8BE5\u6587\u4EF6\u3002\u8BF7\u4E3A\u5E94\u7528\u6DFB\u52A0 files:read \u540E\u91CD\u65B0\u5B89\u88C5\uFF0C\u518D\u91CD\u65B0\u53D1\u9001\u56FE\u7247\u3002",
  // --- /compact ---------------------------------------------------------
  "compact.usage": "\u7528\u6CD5\uFF1A/compact\uFF08\u4E0D\u5E26\u53C2\u6570\uFF09",
  "compact.noSessionState": "\u5F53\u524D\u673A\u5668\u4EBA\u6CA1\u6709\u53EF\u7528\u7684\u4F1A\u8BDD\u72B6\u6001\u3002",
  "compact.noSessionYet": "\u5F53\u524D\u804A\u5929\u8FD8\u6CA1\u6709\u53EF\u538B\u7F29\u7684\u4F1A\u8BDD\uFF0C\u8BF7\u5148\u53D1\u9001\u4E00\u6761\u6D88\u606F\u3002",
  "compact.unsupported": "\u5F53\u524D\u673A\u5668\u4EBA\u6682\u4E0D\u652F\u6301\u4E0A\u4E0B\u6587\u538B\u7F29\u3002",
  "compact.commandNotRegistered": "\u5F53\u524D Harness \u672A\u6CE8\u518C /compact \u547D\u4EE4\uFF0C\u8BF7\u786E\u8BA4\u4E0A\u4E0B\u6587\u538B\u7F29\u7EC4\u4EF6\u5DF2\u542F\u7528\u3002",
  "compact.result.compacted": ({ items, tokens }) => `\u5DF2\u538B\u7F29 ${items} \u6761\u5386\u53F2\u8BB0\u5F55\uFF08\u7EA6 ${tokens} \u4E2A token\uFF09\u3002`,
  "compact.result.noHistory": "\u6682\u65E0\u53EF\u538B\u7F29\u7684\u5386\u53F2\u8BB0\u5F55\u3002",
  "compact.result.unavailable": "\u5F53\u524D\u4F1A\u8BDD\u6B63\u5728\u751F\u6210\u56DE\u590D\u6216\u6267\u884C\u538B\u7F29\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "compact.result.cancelled": "\u4E0A\u4E0B\u6587\u538B\u7F29\u5DF2\u53D6\u6D88\u3002",
  "compact.result.historyChanged": "\u538B\u7F29\u671F\u95F4\u4F1A\u8BDD\u5386\u53F2\u53D1\u751F\u53D8\u5316\uFF0C\u672C\u6B21\u672A\u4FEE\u6539\u4F1A\u8BDD\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  "compact.result.noSummary": "\u672A\u80FD\u751F\u6210\u6709\u6548\u7684\u538B\u7F29\u6458\u8981\uFF0C\u672C\u6B21\u672A\u4FEE\u6539\u4F1A\u8BDD\u3002",
  "compact.result.unclean": "\u4E0A\u4E0B\u6587\u538B\u7F29\u672A\u6B63\u5E38\u5B8C\u6210\uFF0C\u90E8\u5206\u4F1A\u8BDD\u5386\u53F2\u53EF\u80FD\u5DF2\u53D8\u5316\uFF0C\u8BF7\u68C0\u67E5\u4F1A\u8BDD\u540E\u518D\u91CD\u8BD5\u3002",
  "compact.result.saveFailed": "\u4E0A\u4E0B\u6587\u5DF2\u538B\u7F29\uFF0C\u4F46\u4F1A\u8BDD\u4FDD\u5B58\u5931\u8D25\u3002",
  "compact.result.success": "\u4E0A\u4E0B\u6587\u538B\u7F29\u5B8C\u6210\u3002",
  "compact.result.failure": "\u4E0A\u4E0B\u6587\u538B\u7F29\u5931\u8D25\u3002",
  "compact.error.sessionNotFound": "\u5F53\u524D\u804A\u5929\u7ED1\u5B9A\u7684\u4F1A\u8BDD\u5DF2\u4E0D\u5B58\u5728\uFF0C\u8BF7\u53D1\u9001\u65B0\u6D88\u606F\u5F00\u542F\u4F1A\u8BDD\u3002",
  "compact.error.agentBusy": "\u5F53\u524D\u4F1A\u8BDD\u6B63\u5728\u751F\u6210\u56DE\u590D\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "compact.error.stale": "\u5DE5\u4F5C\u533A\u6216\u673A\u5668\u4EBA\u72B6\u6001\u5DF2\u53D1\u751F\u53D8\u5316\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  "compact.error.unsupportedHarness": "\u5F53\u524D Harness \u6682\u4E0D\u652F\u6301\u4ECE\u673A\u5668\u4EBA\u6267\u884C\u4E0A\u4E0B\u6587\u538B\u7F29\u3002",
  "compact.error.generic": "\u4E0A\u4E0B\u6587\u538B\u7F29\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  // --- Harness questions ------------------------------------------------
  "question.header": "DeepSeek Harness \u9700\u8981\u4F60\u8865\u5145\u4FE1\u606F\uFF1A",
  "question.headerWithProgress": "DeepSeek Harness \u9700\u8981\u4F60\u8865\u5145\u4FE1\u606F\uFF08{index}/{total}\uFF09\uFF1A",
  "question.fallback": "\u8BF7\u8F93\u5165\u4F60\u7684\u56DE\u7B54\u3002",
  "question.replyMultiSelect": "\u8BF7\u56DE\u590D\u9009\u9879\u5E8F\u53F7\u6216\u6587\u5B57\uFF1B\u591A\u9009\u7528\u9017\u53F7\u5206\u9694\uFF0C\u4E5F\u53EF\u8865\u5145\u5176\u4ED6\u5185\u5BB9\u3002",
  "question.replySingleSelect": "\u8BF7\u56DE\u590D\u4E00\u4E2A\u9009\u9879\u5E8F\u53F7\u6216\u6587\u5B57\uFF0C\u4E5F\u53EF\u76F4\u63A5\u8F93\u5165\u5176\u4ED6\u7B54\u6848\u3002",
  "question.replyFree": "\u8BF7\u76F4\u63A5\u56DE\u590D\u4F60\u7684\u7B54\u6848\u3002",
  "question.mentionHint": "\u7FA4\u804A\u4E2D\u8BF7 @\u673A\u5668\u4EBA \u540E\u53D1\u9001\u7B54\u6848\u3002",
  "question.customJoin": "\u3001",
  // --- Harness approvals ------------------------------------------------
  "approval.header": "DeepSeek Harness \u9700\u8981\u4F60\u7684\u5BA1\u6279\uFF1A",
  "approval.tool": "\u5DE5\u5177\uFF1A{name}",
  "approval.arguments": "\u64CD\u4F5C\u53C2\u6570\uFF1A",
  "approval.reason": "\u539F\u56E0\uFF1A{reason}",
  "approval.prompt": "\u8BF7\u7CBE\u51C6\u56DE\u590D\u300C\u6279\u51C6\u300D\u6216\u300C\u62D2\u7EDD\u300D\uFF08\u4E5F\u652F\u6301\uFF1A\u540C\u610F / \u4E0D\u540C\u610F / yes / no\uFF09\u3002",
  "approval.afterQuestionPrompt": "\u8BF7\u5148\u5B8C\u6210\u5F53\u524D\u95EE\u9898\uFF0C\u518D\u7CBE\u51C6\u56DE\u590D\u300C\u6279\u51C6\u300D\u6216\u300C\u62D2\u7EDD\u300D\u3002",
  "approval.resolved": "\u8BE5\u5BA1\u6279\u5DF2\u5904\u7406\uFF0C\u65E0\u9700\u518D\u6B21\u56DE\u590D\u3002",
  "approval.outcome.allowedOnce": "\u5DF2\u6279\u51C6\uFF0C\u4EC5\u5BF9\u672C\u6B21\u64CD\u4F5C\u6709\u6548\u3002",
  "approval.outcome.rejected": "\u5DF2\u62D2\u7EDD\u6B64\u6B21\u64CD\u4F5C\u3002",
  "approval.onlyInitiator": "\u53EA\u6709\u53D1\u8D77\u5F53\u524D\u4EFB\u52A1\u7684\u7528\u6237\u53EF\u4EE5\u5904\u7406\u8FD9\u6761\u5BA1\u6279\u3002",
  "approval.submitting": "\u5BA1\u6279\u51B3\u5B9A\u6B63\u5728\u63D0\u4EA4\uFF0C\u8BF7\u7A0D\u5019\u3002",
  "approval.cannotDisplay": "\u65E0\u6CD5\u5B8C\u6574\u5C55\u793A\u8FD9\u6B21\u64CD\u4F5C\uFF0C\u5DF2\u5B89\u5168\u62D2\u7EDD\u6B64\u6B21\u5BA1\u6279\u3002",
  "approval.submitFailed": "\u5BA1\u6279\u63D0\u4EA4\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u56DE\u590D\u300C\u6279\u51C6\u300D\u6216\u300C\u62D2\u7EDD\u300D\u3002",
  "approval.mentionHint": "\u7FA4\u804A\u4E2D\u8BF7 @\u673A\u5668\u4EBA \u540E\u53D1\u9001\u5BA1\u6279\u51B3\u5B9A\u3002",
  // --- /lang ------------------------------------------------------------
  "language.current": "\u5F53\u524D\u804A\u5929\u4F7F\u7528 {name}\uFF08{locale}\uFF09\u3002",
  "language.available": "\u53EF\u7528\u8BED\u8A00\uFF1A",
  "language.usage": "\u4F7F\u7528 /lang <\u4EE3\u7801> \u5207\u6362\uFF0C\u6216 /lang auto \u8DDF\u968F\u6E20\u9053\u8BBE\u7F6E\u3002",
  "language.changed": "\u5F53\u524D\u804A\u5929\u5DF2\u5207\u6362\u4E3A {name}\uFF08{locale}\uFF09\u3002",
  "language.followingChannel": "\u5F53\u524D\u804A\u5929\u5DF2\u6539\u4E3A\u8DDF\u968F\u673A\u5668\u4EBA\u548C\u6E20\u9053\u8BBE\u7F6E\uFF0C\u76EE\u524D\u4E3A {name}\uFF08{locale}\uFF09\u3002",
  "language.unknown": "\u300C{requested}\u300D\u4E0D\u662F\u672C\u673A\u5668\u4EBA\u652F\u6301\u7684\u8BED\u8A00\u3002",
  "language.unsupported": "\u5F53\u524D\u673A\u5668\u4EBA\u4E0D\u652F\u6301\u6309\u804A\u5929\u5207\u6362\u8BED\u8A00\u3002",
  // --- Command surface --------------------------------------------------
  "command.new.usage": "/new",
  "command.new.description": "\u5F00\u542F\u4E00\u4E2A\u5168\u65B0\u4F1A\u8BDD",
  "command.compact.usage": "/compact",
  "command.compact.description": "\u538B\u7F29\u5F53\u524D\u4F1A\u8BDD\u7684\u8F83\u65E9\u4E0A\u4E0B\u6587",
  "command.workspace.usage": "/workspace \u5DE5\u4F5C\u533A\u7EDD\u5BF9\u8DEF\u5F84",
  "command.workspace.description": "\u5207\u6362\u5DE5\u4F5C\u533A",
  "command.workspacelist.usage": "/workspacelist",
  "command.workspacelist.description": "\u5217\u51FA\u5DE5\u4F5C\u533A\u7EDD\u5BF9\u8DEF\u5F84",
  "command.sessionlist.usage": "/sessionlist [\u5DE5\u4F5C\u533A\u5E8F\u53F7\u6216\u7EDD\u5BF9\u8DEF\u5F84]",
  "command.sessionlist.description": "\u5217\u51FA\u4F1A\u8BDD ID \u548C\u6807\u9898",
  "command.session.usage": "/session Session ID \u6216\u5F53\u524D\u5DE5\u4F5C\u533A\u5E8F\u53F7",
  "command.session.description": "\u5C06\u5F53\u524D\u804A\u5929\u7ED1\u5B9A\u5230\u6307\u5B9A\u4F1A\u8BDD",
  "command.models.usage": "/models",
  "command.models.description": "\u6309\u5E8F\u53F7\u5217\u51FA\u6240\u6709\u53EF\u7528\u6A21\u578B",
  "command.model.usage": "/model [\u5E8F\u53F7\u6216\u5B8C\u6574\u6A21\u578BID]",
  "command.model.description": "\u67E5\u770B\u6216\u5207\u6362\u5F53\u524D\u4F1A\u8BDD\u6A21\u578B",
  "command.presetlist.usage": "/presetlist",
  "command.presetlist.description": "\u6309\u5E8F\u53F7\u5217\u51FA\u53EF\u7528 Agent Preset",
  "command.preset.usage": "/preset [\u5E8F\u53F7\u6216\u5B8C\u6574ID]",
  "command.preset.description": "\u67E5\u770B\u6216\u8BBE\u7F6E\u5F53\u524D\u673A\u5668\u4EBA Agent Preset",
  "command.lang.usage": "/lang [\u8BED\u8A00\u4EE3\u7801]",
  "command.lang.description": "\u67E5\u770B\u6216\u5207\u6362\u5F53\u524D\u804A\u5929\u7684\u8BED\u8A00",
  "command.stop.usage": "/stop",
  "command.stop.description": "\u505C\u6B62\u5F53\u524D\u4EFB\u52A1",
  "command.steer.usage": "/steer \u8865\u5145\u6307\u4EE4",
  "command.steer.description": "\u7EA0\u504F\u5F53\u524D\u4EFB\u52A1",
  "command.status.usage": "/status",
  "command.status.description": "\u68C0\u67E5\u8FDE\u63A5\u72B6\u6001",
  "command.help.usage": "/help",
  "command.help.description": "\u663E\u793A\u672C\u5E2E\u52A9",
  // --- Shared text bridge -----------------------------------------------
  "bridge.help.header": "{channel}\u673A\u5668\u4EBA\u5DF2\u8FDE\u63A5 DeepSeek Harness\u3002",
  "bridge.help.intro": "\u76F4\u63A5\u53D1\u9001\u6587\u5B57\u6216\u56FE\u7247\u5373\u53EF\u7EE7\u7EED\u5F53\u524D\u4F1A\u8BDD\u3002",
  "bridge.help.modelExample": "\u793A\u4F8B\uFF1A\u5148\u53D1 /models\uFF0C\u518D\u53D1 /model 2",
  "bridge.help.presetNumericId": "\u7EAF\u6570\u5B57 ID\uFF1A/preset id:<ID>",
  "bridge.help.presetDefault": "/preset --default  \u8DDF\u968F Host \u9ED8\u8BA4",
  "bridge.botLabel": "{channel}\u673A\u5668\u4EBA",
  "bridge.statusOk": "{channel}\u673A\u5668\u4EBA\u4E0E DeepSeek Harness \u8FDE\u63A5\u6B63\u5E38\u3002",
  "bridge.newSession": "\u5DF2\u5F00\u542F\u65B0\u4F1A\u8BDD\u3002\u8BF7\u53D1\u9001\u4F60\u7684\u95EE\u9898\u3002",
  "bridge.textAndImagesOnly": "\u76EE\u524D\u652F\u6301\u6587\u5B57\u548C\u56FE\u7247\u6D88\u606F\u3002",
  "bridge.messageFailed": "\u6D88\u606F\u5904\u7406\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "bridge.taskComplete": "\u4EFB\u52A1\u5DF2\u5B8C\u6210\u3002",
  "bridge.stopped": "\u5DF2\u505C\u6B62\u3002",
  "bridge.usingTool": "\u6B63\u5728\u4F7F\u7528{name}\u2026",
  "bridge.finalizing": "\u6B63\u5728\u6574\u7406\u7ED3\u679C\u2026",
  "bridge.toolFallback": "\u5DE5\u5177",
  "bridge.answerWithText": "\u8BF7\u7528\u6587\u5B57\u56DE\u7B54\u5F53\u524D\u95EE\u9898\u3002",
  "bridge.answerSubmitRetry": "\u56DE\u7B54\u63D0\u4EA4\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001\u5F53\u524D\u95EE\u9898\u7684\u7B54\u6848\u3002",
  "bridge.interactionResolved": "\u8FD9\u4E2A\u95EE\u9898\u5DF2\u5728\u5176\u4ED6\u5BA2\u6237\u7AEF\u5904\u7406\uFF0C\u65E0\u9700\u518D\u6B21\u56DE\u7B54\u3002",
  "bridge.recoveredInteractionCancelled": "\u68C0\u6D4B\u5230\u8FD9\u4E2A Session \u4E2D\u9057\u7559\u7684\u5F85\u56DE\u7B54\u95EE\u9898\uFF0C\u5DF2\u5B89\u5168\u53D6\u6D88\u5E76\u7EE7\u7EED\u5904\u7406\u4F60\u521A\u624D\u7684\u6D88\u606F\u3002",
  "bridge.error.interactionSendFailed": "{channel}\u4EA4\u4E92\u95EE\u9898\u53D1\u9001\u5931\u8D25\u3002",
  "bridge.error.answerSubmitFailed": "\u56DE\u7B54\u63D0\u4EA4\u5931\u8D25\u3002",
  // --- Outbound result files --------------------------------------------
  "artifact.fallbackName": "\u7ED3\u679C\u6587\u4EF6",
  "artifact.error.uncertain": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u7684\u53D1\u9001\u7ED3\u679C\u672A\u80FD\u786E\u8BA4\uFF0C\u8BF7\u5148\u68C0\u67E5\u804A\u5929\u5185\u662F\u5426\u5DF2\u6536\u5230\uFF0C\u4E0D\u8981\u7ACB\u5373\u91CD\u8BD5\u3002",
  "artifact.error.permissionSlack": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u5DF2\u751F\u6210\uFF0C\u4F46 Slack \u5E94\u7528\u7F3A\u5C11 files:write \u6743\u9650\u3002\u8BF7\u66F4\u65B0 Manifest\u3001\u91CD\u65B0\u5B89\u88C5\u5E94\u7528\u5E76\u91CD\u65B0\u8FDE\u63A5\u673A\u5668\u4EBA\u540E\u91CD\u8BD5\u3002",
  "artifact.error.permissionDiscord": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u5DF2\u751F\u6210\uFF0C\u4F46\u673A\u5668\u4EBA\u7F3A\u5C11 Discord \u7684 Send Messages\u3001Attach Files \u6216 Read Message History \u6743\u9650\u3002",
  "artifact.error.permissionTelegram": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u5DF2\u751F\u6210\uFF0C\u4F46 Telegram \u4E0D\u5141\u8BB8\u673A\u5668\u4EBA\u5728\u5F53\u524D\u804A\u5929\u53D1\u9001\u6587\u6863\uFF0C\u8BF7\u68C0\u67E5\u804A\u5929\u6743\u9650\u3002",
  "artifact.error.permission": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u5DF2\u751F\u6210\uFF0C\u4F46\u5F53\u524D\u673A\u5668\u4EBA\u6CA1\u6709\u6587\u4EF6\u53D1\u9001\u6743\u9650\uFF0C\u8BF7\u68C0\u67E5\u6E20\u9053\u6743\u9650\u3002",
  "artifact.error.tooLarge": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u8D85\u8FC7\u5F53\u524D\u6E20\u9053\u5927\u5C0F\u4E0A\u9650\uFF0C\u672A\u53D1\u9001\u3002",
  "artifact.error.empty": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u4E3A\u7A7A\uFF0C\u672A\u53D1\u9001\u3002",
  "artifact.error.unavailable": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u6682\u65F6\u65E0\u6CD5\u8BFB\u53D6\u6216\u51C6\u5907\u53D1\u9001\uFF0C\u8BF7\u786E\u8BA4\u6587\u4EF6\u4ECD\u53EF\u8BBF\u95EE\u540E\u91CD\u8BD5\u3002",
  "artifact.error.rateLimited": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u6682\u65F6\u88AB\u5F53\u524D\u6E20\u9053\u9650\u6D41\uFF0C\u672A\u80FD\u53D1\u9001\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "artifact.error.rejected": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u5DF2\u751F\u6210\uFF0C\u4F46\u5F53\u524D\u6E20\u9053\u62D2\u7EDD\u4E86\u8BE5\u6587\u4EF6\u6216\u6587\u4EF6\u6D88\u606F\u3002",
  "artifact.error.generic": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u5DF2\u751F\u6210\uFF0C\u4F46\u5F53\u524D\u6E20\u9053\u6682\u65F6\u672A\u80FD\u53D1\u9001\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  // --- /models and /model -----------------------------------------------
  "model.usage": "\u7528\u6CD5\uFF1A/model <\u5E8F\u53F7> \u6216 /model <provider>/<model>",
  "model.usageList": "\u7528\u6CD5\uFF1A/models\uFF08\u4E0D\u5E26\u53C2\u6570\uFF09",
  "model.textOnly": "\u6A21\u578B\u547D\u4EE4\u4EC5\u652F\u6301\u7EAF\u6587\u5B57\uFF0C\u8BF7\u79FB\u9664\u56FE\u7247\u540E\u91CD\u8BD5\u3002",
  "model.invalidIndex": "\u6A21\u578B\u5E8F\u53F7\u65E0\u6548\uFF1A{requested}",
  "model.invalidIndexHint": "\u8BF7\u53D1\u9001 /models \u67E5\u770B\u5E76\u8F93\u5165\u6709\u6548\u7684\u6B63\u6574\u6570\u5E8F\u53F7\u3002",
  "model.notFound": "\u6CA1\u6709\u627E\u5230\u6A21\u578B\uFF1A{requested}",
  "model.notFoundHint": "\u8BF7\u53D1\u9001 /models \u67E5\u770B\u53EF\u7528\u6A21\u578B\u3002",
  "model.available": "\u53EF\u7528\u6A21\u578B\uFF1A",
  "model.noneAvailable": "\u5F53\u524D\u6CA1\u6709\u53EF\u7528\u6A21\u578B\u3002",
  "model.currentMarker": "\uFF08\u5F53\u524D\uFF09",
  "model.unavailableProviders": "\u4EE5\u4E0B\u6A21\u578B\u63D0\u4F9B\u65B9\u6682\u65F6\u4E0D\u53EF\u7528\uFF1A",
  "model.switchHint": "\u5207\u6362\u6A21\u578B\uFF1A/model <\u5E8F\u53F7>",
  "model.currentHeader": "\u5F53\u524D\u6A21\u578B\uFF1A",
  "model.listHint": "\u67E5\u770B\u5168\u90E8\u6A21\u578B\uFF1A/models",
  "model.noSessionYet": "\u5F53\u524D\u804A\u5929\u8FD8\u6CA1\u6709\u4F1A\u8BDD\u3002",
  "model.viewHint": "\u67E5\u770B\u6A21\u578B\uFF1A/models",
  "model.chooseHint": "\u9009\u62E9\u6A21\u578B\uFF1A/model <\u5E8F\u53F7>",
  "model.switched": "\u6A21\u578B\u5DF2\u5207\u6362\u4E3A\uFF1A\n{model}\n\n\u540E\u7EED\u6D88\u606F\u5C06\u4F7F\u7528\u8BE5\u6A21\u578B\u3002",
  "model.error.turnRunning": "\u5F53\u524D\u4EFB\u52A1\u6B63\u5728\u8FD0\u884C\uFF0C\u8BF7\u7B49\u5F85\u5B8C\u6210\u6216\u5148\u53D1\u9001 /stop\u3002",
  "model.error.sessionMissing": "\u5F53\u524D\u804A\u5929\u7ED1\u5B9A\u7684\u4F1A\u8BDD\u5DF2\u4E0D\u5B58\u5728\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  "model.error.unavailable": "\u65E0\u6CD5\u5207\u6362\u5230\u8BE5\u6A21\u578B\u3002\u6A21\u578B\u5F53\u524D\u4E0D\u53EF\u7528\uFF0C\u6216\u4E0D\u652F\u6301\u5F53\u524D\u4F1A\u8BDD\u4E2D\u7684\u56FE\u7247\u3002",
  "model.error.stale": "\u5DE5\u4F5C\u533A\u6216\u673A\u5668\u4EBA\u72B6\u6001\u5DF2\u53D1\u751F\u53D8\u5316\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  "model.error.sessionChanged": "\u5F53\u524D\u804A\u5929\u7ED1\u5B9A\u7684\u4F1A\u8BDD\u5DF2\u53D1\u751F\u53D8\u5316\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  "model.error.listCancelled": "\u83B7\u53D6\u6A21\u578B\u5217\u8868\u5DF2\u53D6\u6D88\u3002",
  "model.error.switchCancelled": "\u6A21\u578B\u5207\u6362\u5DF2\u53D6\u6D88\u3002",
  "model.error.listFailed": "\u6682\u65F6\u65E0\u6CD5\u83B7\u53D6\u6A21\u578B\u5217\u8868\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "model.error.switchFailed": "\u6A21\u578B\u5207\u6362\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "model.awaitingInteraction": "\u5F53\u524D\u4EFB\u52A1\u6B63\u5728\u7B49\u5F85\u4F60\u7684\u56DE\u7B54\u6216\u5BA1\u6279\u3002\n\n\u8BF7\u5148\u5904\u7406\u5F53\u524D\u8BF7\u6C42\uFF0C\u6216\u8005\u53D1\u9001 /stop \u505C\u6B62\u4EFB\u52A1\u3002",
  // --- /presetlist and /preset ------------------------------------------
  "preset.usageList": "\u7528\u6CD5\uFF1A/presetlist\uFF08\u4E0D\u5E26\u53C2\u6570\uFF09",
  "preset.usage": "\u7528\u6CD5\uFF1A\n/preset  \u67E5\u770B\u5F53\u524D\u8BBE\u7F6E\n/preset <\u5E8F\u53F7>  \u6309\u6700\u8FD1\u4E00\u6B21 /presetlist \u7684\u5E8F\u53F7\u9009\u62E9\n/preset <ID>  \u6309 Agent Preset ID \u9009\u62E9\n/preset id:<\u7EAF\u6570\u5B57 ID>  \u9009\u62E9\u7EAF\u6570\u5B57 ID\n/preset --default  \u8DDF\u968F Host \u9ED8\u8BA4",
  "preset.textOnly": "Agent Preset \u547D\u4EE4\u4EC5\u652F\u6301\u7EAF\u6587\u5B57\uFF0C\u8BF7\u79FB\u9664\u56FE\u7247\u540E\u91CD\u8BD5\u3002",
  "preset.noDefault": "\u672A\u8BBE\u7F6E\u6216\u5F53\u524D\u4E0D\u53EF\u7528",
  "preset.defaultUnavailable": "{id}\uFF08\u5F53\u524D\u4E0D\u53EF\u7528\uFF09",
  "preset.followsHostDefault": "\u8DDF\u968F Host \u9ED8\u8BA4",
  "preset.followsHostDefaultWith": "\u8DDF\u968F Host \u9ED8\u8BA4\uFF1A{preset}",
  "preset.followsHostDefaultUnavailable": "\u8DDF\u968F Host \u9ED8\u8BA4\uFF08Host \u9ED8\u8BA4\u5F53\u524D\u4E0D\u53EF\u7528\uFF09",
  "preset.noLongerAvailable": "{id}\uFF08\u5DF2\u4E0D\u53EF\u7528\uFF09",
  "preset.currentHeader": "\u5F53\u524D\u673A\u5668\u4EBA\u7528\u4E8E\u65B0\u4F1A\u8BDD\u7684 Agent Preset\uFF1A",
  "preset.existingUnaffected": "\u5DF2\u6709\u4F1A\u8BDD\u4E0D\u4F1A\u53D7\u6B64\u8BBE\u7F6E\u5F71\u54CD\u3002",
  "preset.listHint": "\u67E5\u770B\u53EF\u7528\u9879\uFF1A/presetlist",
  "preset.resetHint": "\u6062\u590D\u8DDF\u968F Host \u9ED8\u8BA4\uFF1A/preset --default",
  "preset.hostDefault": "Host \u9ED8\u8BA4\uFF1A{value}",
  "preset.availableCount": "\u53EF\u7528 Agent Preset\uFF08{count}\uFF09\uFF1A",
  "preset.noneAvailable": "\u5F53\u524D\u6CA1\u6709\u53EF\u7528 Agent Preset\u3002",
  "preset.markerHostDefault": "Host \u9ED8\u8BA4",
  "preset.markerSelected": "\u5F53\u524D\u9009\u62E9",
  "preset.markerActive": "\u5F53\u524D\u751F\u6548",
  "preset.selectHint": "\u9009\u62E9\uFF1A/preset <\u5E8F\u53F7\u6216 ID>",
  "preset.numericIdHint": "\u7EAF\u6570\u5B57 ID\uFF1A/preset id:<ID>",
  "preset.updated": "\u5F53\u524D\u673A\u5668\u4EBA\u7528\u4E8E\u65B0\u4F1A\u8BDD\u7684 Agent Preset \u5DF2\u8BBE\u7F6E\u4E3A\uFF1A",
  "preset.updatedNote": "\u5DF2\u6709\u4F1A\u8BDD\u4E0D\u53D8\u3002\u82E5\u5F53\u524D\u804A\u5929\u5DF2\u6709\u4F1A\u8BDD\uFF0C\u8BF7\u5148\u53D1\u9001 /new\uFF0C\u518D\u53D1\u9001\u666E\u901A\u6D88\u606F\uFF0C\u624D\u4F1A\u4F7F\u7528\u65B0\u8BBE\u7F6E\u521B\u5EFA\u4F1A\u8BDD\u3002",
  "preset.error.invalidIndex": "Agent Preset \u5E8F\u53F7\u65E0\u6548\uFF0C\u8BF7\u5148\u6267\u884C /presetlist\u3002",
  "preset.error.listFirst": "\u8BF7\u5148\u6267\u884C /presetlist\uFF0C\u518D\u6309\u5217\u8868\u5E8F\u53F7\u9009\u62E9 Agent Preset\u3002",
  "preset.error.indexMissing": "Agent Preset \u5E8F\u53F7\u4E0D\u5B58\u5728\uFF0C\u8BF7\u91CD\u65B0\u6267\u884C /presetlist\u3002",
  "preset.error.invalidId": "Agent Preset ID \u683C\u5F0F\u65E0\u6548\u3002",
  "preset.error.unavailable": "Agent Preset \u4E0D\u5B58\u5728\u6216\u5F53\u524D\u4E0D\u53EF\u7528\uFF0C\u8BF7\u91CD\u65B0\u6267\u884C /presetlist\u3002",
  "preset.error.stale": "\u5DE5\u4F5C\u533A\u6216\u673A\u5668\u4EBA\u72B6\u6001\u5DF2\u53D1\u751F\u53D8\u5316\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  "preset.error.listCancelled": "\u83B7\u53D6 Agent Preset \u5217\u8868\u5DF2\u53D6\u6D88\u3002",
  "preset.error.currentCancelled": "\u83B7\u53D6 Agent Preset \u8BBE\u7F6E\u5DF2\u53D6\u6D88\u3002",
  "preset.error.updateCancelled": "Agent Preset \u4FEE\u6539\u5DF2\u53D6\u6D88\u3002",
  "preset.error.listFailed": "\u6682\u65F6\u65E0\u6CD5\u83B7\u53D6 Agent Preset \u5217\u8868\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "preset.error.currentFailed": "\u6682\u65F6\u65E0\u6CD5\u83B7\u53D6 Agent Preset \u8BBE\u7F6E\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "preset.error.updateFailed": "Agent Preset \u4FEE\u6539\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "preset.itemText": "{label}\uFF08{id}\uFF09",
  "preset.markers": "\uFF08{markers}\uFF09",
  "preset.markerJoin": "\uFF0C",
  // --- /workspace, /workspacelist, /session, /sessionlist ---------------
  "workspace.usage": "\u7528\u6CD5\uFF1A/workspace \u5DE5\u4F5C\u533A\u7EDD\u5BF9\u8DEF\u5F84",
  "workspace.usageList": "\u7528\u6CD5\uFF1A/workspacelist",
  "workspace.mustBeAbsolute": "\u5DE5\u4F5C\u533A\u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84\u3002",
  "workspace.unsupportedCharacters": "\u5DE5\u4F5C\u533A\u8DEF\u5F84\u5305\u542B\u4E0D\u652F\u6301\u7684\u5B57\u7B26\u6216\u957F\u5EA6\u8D85\u8FC7\u9650\u5236\u3002",
  "workspace.notFound": "\u5DE5\u4F5C\u533A\u8DEF\u5F84\u4E0D\u5B58\u5728\u3002",
  "workspace.notDirectory": "\u5DE5\u4F5C\u533A\u8DEF\u5F84\u5FC5\u987B\u6307\u5411\u4E00\u4E2A\u76EE\u5F55\u3002",
  "workspace.listUnsupported": "\u5F53\u524D\u673A\u5668\u4EBA\u6682\u4E0D\u652F\u6301\u5217\u51FA\u5DE5\u4F5C\u533A\u3002",
  "workspace.noneRegistered": "\u5F53\u524D Harness Host \u4E0A\u6CA1\u6709\u4ECD\u7136\u5B58\u5728\u7684\u5DF2\u767B\u8BB0\u5DE5\u4F5C\u533A\u3002",
  "workspace.existingHeader": "\u5F53\u524D Harness Host \u4E0A\u5B58\u5728\u7684\u5DE5\u4F5C\u533A\uFF08{count}\uFF09\uFF1A",
  "workspace.currentMarker": "\uFF08\u5F53\u524D\uFF09",
  "workspace.switchHint": "\u5207\u6362\u7528\u6CD5\uFF1A/workspace \u5DE5\u4F5C\u533A\u7EDD\u5BF9\u8DEF\u5F84",
  "workspace.sessionsHint": "\u67E5\u770B\u4F1A\u8BDD\uFF1A/sessionlist \u5DE5\u4F5C\u533A\u5E8F\u53F7\u6216\u7EDD\u5BF9\u8DEF\u5F84",
  "workspace.botRebound": "\u673A\u5668\u4EBA\u6B63\u5728\u79FB\u9664\u6216\u5DF2\u91CD\u65B0\u63A5\u5165\uFF0C\u65E0\u6CD5\u5217\u51FA\u539F\u4F1A\u8BDD\u7684\u5DE5\u4F5C\u533A\u3002",
  "workspace.listFailed": "\u6682\u65F6\u65E0\u6CD5\u83B7\u53D6\u5DE5\u4F5C\u533A\u5217\u8868\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "workspace.noneForBot": "\u5F53\u524D\u673A\u5668\u4EBA\u6CA1\u6709\u53EF\u7528\u7684\u5DE5\u4F5C\u533A\u3002",
  "workspace.indexUnsupported": "\u5F53\u524D\u673A\u5668\u4EBA\u6682\u4E0D\u652F\u6301\u6309\u5E8F\u53F7\u9009\u62E9\u5DE5\u4F5C\u533A\u3002",
  "workspace.indexMissing": "\u5DE5\u4F5C\u533A\u5E8F\u53F7\u4E0D\u5B58\u5728\uFF0C\u8BF7\u5148\u6267\u884C /workspacelist\u3002",
  "workspace.switchUnsupported": "\u5F53\u524D\u673A\u5668\u4EBA\u6682\u4E0D\u652F\u6301\u5207\u6362\u5DE5\u4F5C\u533A\u3002",
  "workspace.switched": "\u5DE5\u4F5C\u533A\u5DF2\u5207\u6362\u4E3A\uFF1A{workspace}",
  "workspace.switchRebound": "\u673A\u5668\u4EBA\u6B63\u5728\u79FB\u9664\u6216\u5DF2\u91CD\u65B0\u63A5\u5165\uFF0C\u65E0\u6CD5\u5207\u6362\u539F\u4F1A\u8BDD\u7684\u5DE5\u4F5C\u533A\u3002",
  "session.usageBind": "\u7528\u6CD5\uFF1A/session Session ID \u6216\u5F53\u524D\u5DE5\u4F5C\u533A\u5E8F\u53F7\uFF08/session N\uFF09",
  "session.usageList": "\u7528\u6CD5\uFF1A\n/sessionlist  \u5217\u51FA\u5F53\u524D\u5DE5\u4F5C\u533A\u4F1A\u8BDD\n/sessionlist \u5DE5\u4F5C\u533A\u5E8F\u53F7  \u6309 /workspacelist \u5E8F\u53F7\u5217\u51FA\u4F1A\u8BDD\n/sessionlist \u5DE5\u4F5C\u533A\u7EDD\u5BF9\u8DEF\u5F84  \u5217\u51FA\u6307\u5B9A\u5DE5\u4F5C\u533A\u4F1A\u8BDD",
  "session.titleUnavailable": "\u6807\u9898\u6682\u4E0D\u53EF\u7528",
  "session.untitled": "\u6682\u65E0\u6807\u9898",
  "session.archivedMarker": "\uFF08\u5DF2\u5F52\u6863\uFF09",
  "session.workspaceLine": "\u5DE5\u4F5C\u533A\uFF1A{workspace}",
  "session.noneInWorkspace": "\u8BE5\u5DE5\u4F5C\u533A\u6682\u65E0\u4F1A\u8BDD\u3002",
  "session.countHeader": "\u4F1A\u8BDD\uFF08{count}\uFF09\uFF1A",
  "session.bindHintCurrent": "\u7ED1\u5B9A\u7528\u6CD5\uFF1A/session Session ID \u6216\u5F53\u524D\u5DE5\u4F5C\u533A\u5E8F\u53F7\uFF08/session N\uFF09",
  "session.bindHintOther": "\u7ED1\u5B9A\u7528\u6CD5\uFF1A/session Session ID\n\u63D0\u793A\uFF1A/session N \u53EA\u6309\u673A\u5668\u4EBA\u5F53\u524D\u5DE5\u4F5C\u533A\u7684\u5E8F\u53F7\u7ED1\u5B9A\u3002",
  "session.listUnsupported": "\u5F53\u524D\u673A\u5668\u4EBA\u6682\u4E0D\u652F\u6301\u5217\u51FA\u5DE5\u4F5C\u533A\u4F1A\u8BDD\u3002",
  "session.listRebound": "\u673A\u5668\u4EBA\u6B63\u5728\u79FB\u9664\u6216\u5DF2\u91CD\u65B0\u63A5\u5165\uFF0C\u65E0\u6CD5\u5217\u51FA\u539F\u4F1A\u8BDD\u7684\u5DE5\u4F5C\u533A\u4F1A\u8BDD\u3002",
  "session.listFailed": "\u6682\u65F6\u65E0\u6CD5\u83B7\u53D6\u5DE5\u4F5C\u533A\u4F1A\u8BDD\u5217\u8868\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "session.invalidId": "Session ID \u683C\u5F0F\u65E0\u6548\u3002",
  "session.notFound": "\u672A\u627E\u5230\u8BE5\u4F1A\u8BDD\uFF0C\u8BF7\u5148\u6267\u884C /sessionlist \u786E\u8BA4 Session ID\u3002",
  "session.subagentNotBindable": "\u5B50\u4EE3\u7406\u4F1A\u8BDD\u4E0D\u80FD\u7ED1\u5B9A\u5230\u673A\u5668\u4EBA\u5BF9\u8BDD\uFF0C\u8BF7\u9009\u62E9\u666E\u901A\u4F1A\u8BDD\u3002",
  "session.workspaceAmbiguous": "\u8BE5\u4F1A\u8BDD\u7684\u5DE5\u4F5C\u533A\u5F52\u5C5E\u4E0D\u660E\u786E\uFF0C\u6682\u65F6\u65E0\u6CD5\u7ED1\u5B9A\u3002",
  "session.readFailed": "\u6682\u65F6\u65E0\u6CD5\u8BFB\u53D6\u8BE5\u4F1A\u8BDD\u7684\u4FE1\u606F\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "session.bindRebound": "\u673A\u5668\u4EBA\u6B63\u5728\u79FB\u9664\u6216\u5DF2\u91CD\u65B0\u63A5\u5165\uFF0C\u65E0\u6CD5\u7ED1\u5B9A\u539F\u5BF9\u8BDD\u7684\u4F1A\u8BDD\u3002",
  "session.bindStale": "\u5DE5\u4F5C\u533A\u6216\u4F1A\u8BDD\u72B6\u6001\u5DF2\u53D1\u751F\u53D8\u5316\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  "session.bindFailed": "\u6682\u65F6\u65E0\u6CD5\u7ED1\u5B9A\u4F1A\u8BDD\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "session.indexUnsupported": "\u5F53\u524D\u673A\u5668\u4EBA\u6682\u4E0D\u652F\u6301\u6309\u5E8F\u53F7\u7ED1\u5B9A\uFF0C\u8BF7\u4F7F\u7528 /session Session ID\u3002",
  "session.indexMissing": "\u4F1A\u8BDD\u5E8F\u53F7\u4E0D\u5B58\u5728\uFF0C\u8BF7\u5148\u6267\u884C /sessionlist \u67E5\u770B\u5E8F\u53F7\u3002",
  "session.listForIndexFailed": "\u6682\u65F6\u65E0\u6CD5\u83B7\u53D6\u4F1A\u8BDD\u5217\u8868\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "session.bindUnsupported": "\u5F53\u524D\u673A\u5668\u4EBA\u6682\u4E0D\u652F\u6301\u7ED1\u5B9A\u5DF2\u6709\u4F1A\u8BDD\u3002",
  "session.missingContext": "\u5F53\u524D\u6D88\u606F\u7F3A\u5C11\u53EF\u7ED1\u5B9A\u7684\u4F1A\u8BDD\u4E0A\u4E0B\u6587\u3002",
  "session.boundHeader": "\u5F53\u524D\u804A\u5929\u5DF2\u7ED1\u5B9A\u4F1A\u8BDD\uFF1A",
  "session.titleLine": "\u6807\u9898\uFF1A{title}",
  "session.archivedLine": "\u5F52\u6863\uFF1A{value}",
  "session.yes": "\u662F",
  "session.no": "\u5426",
  "session.time.today": "\u4ECA\u5929 {time}",
  "session.time.yesterday": "\u6628\u5929 {time}",
  "session.time.twoDaysAgo": "\u524D\u5929 {time}",
  "session.time.sameYear": "{date} {time}",
  "session.time.older": "{date}",
  // Channel-specific help lines.
  "bridge.help.introWithVoice": "\u76F4\u63A5\u53D1\u9001\u6587\u5B57\u3001\u56FE\u7247\u6216\u5E26\u6587\u5B57\u8BC6\u522B\u7ED3\u679C\u7684\u8BED\u97F3\u5373\u53EF\u7EE7\u7EED\u5F53\u524D\u4F1A\u8BDD\u3002",
  "command.repair.usage": "/repair",
  "command.repair.description": "\u4FEE\u590D\u5361\u7247\u6309\u94AE\u56DE\u8C03",
  "command.menu.usage": "/m\uFF08\u6216 /menu\uFF09",
  "command.menu.description": "\u6253\u5F00\u4EA4\u4E92\u5361\u7247\u83DC\u5355",
  "command.watch.usage": "/watch [Session ID \u6216\u5E8F\u53F7]",
  "command.watch.description": "\u5173\u6CE8\u4F1A\u8BDD\uFF0C\u4EFB\u52A1\u5B8C\u6210\u81EA\u52A8\u63A8\u9001",
  "command.unwatch.usage": "/unwatch [Session ID \u6216\u5E8F\u53F7]",
  "command.unwatch.description": "\u53D6\u6D88\u5173\u6CE8",
  "command.watchlist.usage": "/watchlist",
  "command.watchlist.description": "\u67E5\u770B\u5173\u6CE8\u5217\u8868",
  "command.archived.usage": "/archived on|off",
  "command.archived.description": "\u4F1A\u8BDD\u5217\u8868\u662F\u5426\u5305\u542B\u5F52\u6863\u4F1A\u8BDD",
  "artifact.generated": "\u7ED3\u679C\u6587\u4EF6\u5DF2\u751F\u6210\u3002",
  "artifact.qq.quotaExhausted": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u5DF2\u751F\u6210\uFF0C\u4F46 QQ \u4ECA\u65E5\u6587\u4EF6\u4E0A\u4F20\u989D\u5EA6\u5DF2\u7528\u5B8C\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "artifact.qq.permission": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u5DF2\u751F\u6210\uFF0C\u4F46\u5F53\u524D QQ \u673A\u5668\u4EBA\u6CA1\u6709\u6587\u4EF6\u6D88\u606F\u6743\u9650\u3002",
  "artifact.qq.tooLarge": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u8D85\u8FC7\u5F53\u524D QQ \u673A\u5668\u4EBA\u53EF\u53D1\u9001\u7684\u6587\u4EF6\u5927\u5C0F\uFF0C\u672A\u53D1\u9001\u3002",
  "artifact.qq.empty": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u4E3A\u7A7A\uFF0CQQ \u4E0D\u5141\u8BB8\u53D1\u9001\u7A7A\u6587\u4EF6\u3002",
  "artifact.qq.rateLimited": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u6682\u65F6\u88AB QQ \u9650\u6D41\uFF0C\u672A\u80FD\u53D1\u9001\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "artifact.qq.rejected": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u5DF2\u751F\u6210\uFF0C\u4F46 QQ \u62D2\u7EDD\u4E86\u8BE5\u6587\u4EF6\u6216\u6587\u4EF6\u6D88\u606F\u3002",
  "artifact.qq.generic": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u5DF2\u751F\u6210\uFF0C\u4F46\u6682\u65F6\u672A\u80FD\u901A\u8FC7 QQ \u53D1\u9001\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "artifact.weixin.permission": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u5DF2\u751F\u6210\uFF0C\u4F46\u5FAE\u4FE1\u673A\u5668\u4EBA\u5F53\u524D\u6CA1\u6709\u6587\u4EF6\u6D88\u606F\u53D1\u9001\u6743\u9650\uFF0C\u8BF7\u68C0\u67E5\u673A\u5668\u4EBA\u6587\u4EF6\u6D88\u606F\u80FD\u529B\u3002",
  "artifact.weixin.tooLarge": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u8D85\u8FC7\u5F53\u524D\u5FAE\u4FE1\u4F1A\u8BDD\u53EF\u53D1\u9001\u7684\u6587\u4EF6\u5927\u5C0F\uFF0C\u672A\u53D1\u9001\u3002",
  "artifact.weixin.rateLimited": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u6682\u65F6\u88AB\u5FAE\u4FE1\u9650\u6D41\uFF0C\u672A\u80FD\u53D1\u9001\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "artifact.weixin.rejected": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u5DF2\u751F\u6210\uFF0C\u4F46\u5FAE\u4FE1\u62D2\u7EDD\u4E86\u8BE5\u6587\u4EF6\u6D88\u606F\u3002",
  "artifact.weixin.generic": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u5DF2\u751F\u6210\uFF0C\u4F46\u6682\u65F6\u672A\u80FD\u901A\u8FC7\u5FAE\u4FE1\u53D1\u9001\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "artifact.dingtalk.permission": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u5DF2\u751F\u6210\uFF0C\u4F46\u9489\u9489\u5E94\u7528\u6216\u673A\u5668\u4EBA\u7F3A\u5C11\u6587\u4EF6\u6D88\u606F\u6743\u9650\u3002\u8BF7\u5F00\u901A\u5E94\u7528 qyapi_base \u6743\u9650\uFF0C\u5E76\u786E\u8BA4\u673A\u5668\u4EBA\u5177\u5907\u6587\u4EF6\u6D88\u606F\u53D1\u9001\u80FD\u529B\u3002",
  "artifact.dingtalk.tooLarge": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u8D85\u8FC7\u5F53\u524D\u9489\u9489\u673A\u5668\u4EBA\u53EF\u53D1\u9001\u7684\u6587\u4EF6\u5927\u5C0F\uFF0C\u672A\u53D1\u9001\u3002",
  "artifact.dingtalk.rateLimited": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u6682\u65F6\u88AB\u9489\u9489\u9650\u6D41\uFF0C\u672A\u80FD\u53D1\u9001\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "artifact.dingtalk.rejected": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u5DF2\u751F\u6210\uFF0C\u4F46\u9489\u9489\u62D2\u7EDD\u4E86\u8BE5\u6587\u4EF6\u6D88\u606F\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u7C7B\u578B\u548C\u673A\u5668\u4EBA\u6587\u4EF6\u6D88\u606F\u914D\u7F6E\u3002",
  "artifact.dingtalk.generic": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u5DF2\u751F\u6210\uFF0C\u4F46\u6682\u65F6\u672A\u80FD\u901A\u8FC7\u9489\u9489\u53D1\u9001\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "artifact.wecom.permission": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u5DF2\u751F\u6210\uFF0C\u4F46\u4F01\u4E1A\u5FAE\u4FE1\u667A\u80FD\u673A\u5668\u4EBA\u7F3A\u5C11\u7D20\u6750\u4E0A\u4F20\u6216\u6587\u4EF6\u6D88\u606F\u80FD\u529B\uFF0C\u8BF7\u68C0\u67E5\u673A\u5668\u4EBA\u6743\u9650\u3002",
  "artifact.wecom.tooLarge": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u8D85\u8FC7\u5F53\u524D\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u53EF\u53D1\u9001\u7684\u6587\u4EF6\u5927\u5C0F\uFF0C\u672A\u53D1\u9001\u3002",
  "artifact.wecom.empty": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u4E3A\u7A7A\uFF0C\u4F01\u4E1A\u5FAE\u4FE1\u4E0D\u5141\u8BB8\u53D1\u9001\u7A7A\u6587\u4EF6\u3002",
  "artifact.wecom.rateLimited": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u6682\u65F6\u88AB\u4F01\u4E1A\u5FAE\u4FE1\u9650\u6D41\uFF0C\u672A\u80FD\u53D1\u9001\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "artifact.wecom.rejected": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u5DF2\u751F\u6210\uFF0C\u4F46\u4F01\u4E1A\u5FAE\u4FE1\u62D2\u7EDD\u4E86\u8BE5\u6587\u4EF6\u6216\u6587\u4EF6\u6D88\u606F\u3002",
  "artifact.wecom.generic": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u5DF2\u751F\u6210\uFF0C\u4F46\u6682\u65F6\u672A\u80FD\u901A\u8FC7\u4F01\u4E1A\u5FAE\u4FE1\u53D1\u9001\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "artifact.uncertainShort": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u53D1\u9001\u7ED3\u679C\u672A\u80FD\u786E\u8BA4\uFF0C\u8BF7\u5148\u68C0\u67E5\u804A\u5929\u5185\u662F\u5426\u5DF2\u6536\u5230\uFF0C\u4E0D\u8981\u7ACB\u5373\u91CD\u8BD5\u3002",
  "bridge.textImagesAndVoiceOnly": "\u76EE\u524D\u652F\u6301\u6587\u5B57\u3001\u56FE\u7247\uFF0C\u4EE5\u53CA\u5FAE\u4FE1\u5DF2\u8F6C\u6210\u6587\u5B57\u7684\u8BED\u97F3\u6D88\u606F\u3002",
  "bridge.textImagesAndTranscriptOnly": "\u76EE\u524D\u652F\u6301\u6587\u5B57\u3001\u56FE\u7247\u548C\u8BED\u97F3\u8F6C\u5199\u6D88\u606F\u3002",
  "bridge.taskCompleteNoText": "\u4EFB\u52A1\u5DF2\u5B8C\u6210\uFF0C\u4F46\u6CA1\u6709\u751F\u6210\u53EF\u663E\u793A\u7684\u6587\u672C\u3002",
  "bridge.thinking": "\u6B63\u5728\u601D\u8003\u4E2D\u2026",
  "bridge.connectedThinking": "\u5DF2\u8FDE\u63A5 DeepSeek Harness\uFF0C\u6B63\u5728\u601D\u8003\u2026",
  "bridge.searchingWeb": "\u6B63\u5728\u641C\u7D22\u7F51\u7EDC\u5E76\u6574\u7406\u4FE1\u606F\u2026",
  "bridge.processing": "\u6B63\u5728\u5904\u7406\u2026",
  "bridge.error.commandFailed": "{channel}\u547D\u4EE4\u5904\u7406\u5931\u8D25\u3002",
  "bridge.error.messageFailed": "{channel}\u6D88\u606F\u5904\u7406\u5931\u8D25\u3002",
  "bridge.error.approvalFailed": "{channel}\u5BA1\u6279\u5904\u7406\u5931\u8D25\u3002",
  "bridge.error.noSafeReplyTarget": "{channel}\u6D88\u606F\u6CA1\u6709\u5B89\u5168\u7684\u56DE\u590D\u5730\u5740\u3002",
  "image.error.dingtalkDownloadCodeFailed": "\u9489\u9489\u672A\u80FD\u6362\u53D6\u56FE\u7247\u4E0B\u8F7D\u5730\u5740\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001\uFF1B\u82E5\u6301\u7EED\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u673A\u5668\u4EBA\u7684\u201C\u4F01\u4E1A\u5185\u673A\u5668\u4EBA\u53D1\u9001\u6D88\u606F\u6743\u9650\u201D\u3002",
  "image.error.dingtalkNoDownloadUrl": "\u9489\u9489\u6CA1\u6709\u8FD4\u56DE\u56FE\u7247\u4E0B\u8F7D\u5730\u5740\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001\u3002",
  "image.error.dingtalkTemporaryUrlUnreadable": "\u9489\u9489\u8FD4\u56DE\u7684\u56FE\u7247\u4E34\u65F6\u5730\u5740\u65E0\u6CD5\u8BFB\u53D6\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001\u3002",
  // --- Feishu ------------------------------------------------------------
  "feishu.workspace.mustBeAbsolute": "\u5DE5\u4F5C\u533A\u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84\u3002",
  "feishu.workspace.notFound": "\u5DE5\u4F5C\u533A\u8DEF\u5F84\u4E0D\u5B58\u5728\u3002",
  "feishu.workspace.notDirectory": "\u5DE5\u4F5C\u533A\u8DEF\u5F84\u5FC5\u987B\u6307\u5411\u4E00\u4E2A\u76EE\u5F55\u3002",
  "feishu.workspace.botRebound": "\u673A\u5668\u4EBA\u6B63\u5728\u79FB\u9664\u6216\u5DF2\u91CD\u65B0\u63A5\u5165\uFF0C\u65E0\u6CD5\u64CD\u4F5C\u539F\u4F1A\u8BDD\u7684\u5DE5\u4F5C\u533A\u3002",
  "feishu.workspace.failed": "\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "artifact.feishu.permission": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u5DF2\u751F\u6210\uFF0C\u4F46\u673A\u5668\u4EBA\u7F3A\u5C11\u98DE\u4E66\u6587\u4EF6\u4E0A\u4F20\u6743\u9650\u3002\u8BF7\u4E3A\u5E94\u7528\u6DFB\u52A0 im:resource \u5E76\u5B8C\u6210\u5FC5\u8981\u5BA1\u6279\u540E\u91CD\u8BD5\u3002",
  "artifact.feishu.tooLarge": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u8D85\u8FC7\u98DE\u4E66 30 MB \u4E0A\u9650\uFF0C\u672A\u53D1\u9001\u3002",
  "artifact.feishu.empty": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u4E3A\u7A7A\uFF0C\u98DE\u4E66\u4E0D\u5141\u8BB8\u53D1\u9001\u7A7A\u6587\u4EF6\u3002",
  "artifact.feishu.rateLimited": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u6682\u65F6\u88AB\u98DE\u4E66\u9650\u6D41\uFF0C\u672A\u80FD\u53D1\u9001\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "artifact.feishu.generic": "\u7ED3\u679C\u6587\u4EF6\u300C{name}\u300D\u5DF2\u751F\u6210\uFF0C\u4F46\u6682\u65F6\u672A\u80FD\u53D1\u9001\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "feishu.processingFailed": "\u5904\u7406\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002\u5982\u679C\u95EE\u9898\u6301\u7EED\uFF0C\u8BF7\u5728 DeepSeek Harness \u7684\u98DE\u4E66\u63D2\u4EF6\u9875\u9762\u68C0\u67E5\u8FDE\u63A5\u72B6\u6001\u3002",
  "feishu.newSession": "\u5DF2\u5F00\u542F\u5168\u65B0 Harness \u4F1A\u8BDD\u3002",
  "feishu.archived.usage": "\u7528\u6CD5\uFF1A/archived on\uFF08\u5305\u542B\u5F52\u6863\u4F1A\u8BDD\uFF09\u6216 /archived off\uFF08\u9690\u85CF\u5F52\u6863\u4F1A\u8BDD\uFF09",
  "feishu.archived.on": "\u5DF2\u5F00\u542F\uFF1A\u4F1A\u8BDD\u5217\u8868\u5305\u542B\u5F52\u6863\u4F1A\u8BDD\u3002",
  "feishu.archived.off": "\u5DF2\u5173\u95ED\uFF1A\u4F1A\u8BDD\u5217\u8868\u9690\u85CF\u5F52\u6863\u4F1A\u8BDD\u3002",
  "feishu.repair.privateChatOnly": "\u4E3A\u907F\u514D\u6388\u6743\u94FE\u63A5\u66B4\u9732\uFF0C\u8BF7\u79C1\u804A\u673A\u5668\u4EBA\u53D1\u9001 /repair\u3002",
  "feishu.repair.noAdminIdentity": "\u5F53\u524D\u673A\u5668\u4EBA\u6CA1\u6709\u53EF\u9A8C\u8BC1\u7684\u63A5\u5165\u8005\u8EAB\u4EFD\uFF0C\u4E0D\u80FD\u4ECE\u804A\u5929\u53D1\u8D77\u4FEE\u590D\uFF1B\u8BF7\u5148\u5728\u63D2\u4EF6\u9875\u8BBE\u7F6E\u7BA1\u7406\u5458\u3002",
  "feishu.repair.operatorOnly": "\u6B64\u64CD\u4F5C\u53EA\u80FD\u7531\u673A\u5668\u4EBA\u63A5\u5165\u8005\u5728\u79C1\u804A\u4E2D\u53D1\u8D77\uFF0C\u672A\u8FDB\u884C\u4EFB\u4F55\u4FEE\u6539\u3002",
  "feishu.repair.hostUnsupported": "\u5F53\u524D Host \u7248\u672C\u6682\u4E0D\u652F\u6301\u804A\u5929\u5185\u4FEE\u590D\uFF0C\u8BF7\u5148\u66F4\u65B0\u63D2\u4EF6\u3002",
  "feishu.repair.usage": "\u7528\u6CD5\uFF1A/repair\u3001/repair qr\u3001/repair status\u3001/repair cancel \u6216 /repair verify",
  "feishu.repair.noRecord": "\u5F53\u524D Runtime \u6CA1\u6709\u53EF\u6062\u590D\u7684\u4FEE\u590D\u4EFB\u52A1\u8BB0\u5F55\uFF08\u673A\u5668\u4EBA\u53EF\u80FD\u521A\u5B8C\u6210\u5BC6\u94A5\u66F4\u65B0\u5E76\u91CD\u542F\uFF09\u3002\u672C\u547D\u4EE4\u4E0D\u4F1A\u542F\u52A8\u65B0\u7684\u6388\u6743\uFF1B\u8BF7\u67E5\u770B\u673A\u5668\u4EBA\u53D1\u9001\u7684\u9A8C\u8BC1\u7ED3\u679C\uFF0C\u786E\u8BA4\u4E0A\u4E00\u6B21\u4EFB\u52A1\u5DF2\u7ED3\u675F\u540E\u518D\u53D1\u9001 /repair\u3002",
  "feishu.repair.otherAdmin": "\u53E6\u4E00\u4F4D\u7BA1\u7406\u5458\u6B63\u5728\u4FEE\u590D\u8BE5\u673A\u5668\u4EBA\uFF0C\u672C\u6B21\u4E0D\u4F1A\u663E\u793A\u5176\u6388\u6743\u4FE1\u606F\u3002",
  "feishu.repair.cancelUnavailable": "\u6682\u65F6\u65E0\u6CD5\u53D6\u6D88\u4FEE\u590D\u4EFB\u52A1\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "feishu.repair.statusUnavailable": "\u6682\u65F6\u65E0\u6CD5\u67E5\u8BE2\u4FEE\u590D\u72B6\u6001\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "feishu.repair.temporaryFailure": "\u4FEE\u590D\u6D41\u7A0B\u6682\u65F6\u5931\u8D25\uFF0C\u73B0\u6709\u673A\u5668\u4EBA\u8FDE\u63A5\u4E0D\u53D7\u5F71\u54CD\uFF1B\u8BF7\u7A0D\u540E\u53D1\u9001 /repair \u91CD\u8BD5\u3002",
  "feishu.repair.unsafeLink": "\u98DE\u4E66\u8FD4\u56DE\u4E86\u65E0\u6CD5\u5B89\u5168\u9A8C\u8BC1\u7684\u6388\u6743\u94FE\u63A5\uFF0C\u5DF2\u4E2D\u6B62\u672C\u6B21\u4FEE\u590D\u3002",
  "feishu.repair.noLink": "\u98DE\u4E66\u672A\u8FD4\u56DE\u6388\u6743\u94FE\u63A5\uFF0C\u5DF2\u4E2D\u6B62\u672C\u6B21\u4FEE\u590D\u3002",
  "feishu.repair.awaitingCallback": "\u6388\u6743\u5DF2\u786E\u8BA4\uFF0C\u6B63\u5728\u53D1\u9001\u5E76\u7B49\u5F85\u6D4B\u8BD5\u6309\u94AE\u56DE\u8C03\uFF1B\u6536\u5230\u771F\u5B9E\u56DE\u8C03\u540E\u624D\u4F1A\u5B8C\u6210\u3002",
  "feishu.repair.statusInterrupted": "\u4FEE\u590D\u72B6\u6001\u67E5\u8BE2\u4E2D\u65AD\uFF0C\u73B0\u6709\u673A\u5668\u4EBA\u8FDE\u63A5\u4E0D\u53D7\u5F71\u54CD\uFF1B\u53D1\u9001 /repair status \u91CD\u8BD5\u67E5\u8BE2\u3002",
  "feishu.repair.linkShortLived": "\u94FE\u63A5\u4E3A\u77ED\u671F\u6709\u6548",
  "feishu.repair.linkExpiresIn": "\u94FE\u63A5\u7EA6 {minutes} \u5206\u949F\u540E\u8FC7\u671F",
  "feishu.repair.alreadyWaiting": "\u5DF2\u6709\u4E00\u4E2A\u4FEE\u590D\u4EFB\u52A1\u5728\u7B49\u5F85\u6388\u6743\u3002",
  "feishu.repair.prepare": "\u{1F527} \u51C6\u5907\u4FEE\u590D\u5361\u7247\u6309\u94AE\u3002",
  "feishu.repair.incrementalNotice": "\u672C\u6B21\u53EA\u4F1A\u589E\u91CF\u6DFB\u52A0 card.action.trigger\u3002\u8BF7\u6838\u5BF9\u786E\u8BA4\u9875\u53EA\u663E\u793A\u8FD9\u4E00\u9879\uFF1B\u82E5\u51FA\u73B0\u5176\u4ED6\u6743\u9650\u6216\u4E8B\u4EF6\uFF0C\u8BF7\u53D6\u6D88\u3002",
  "feishu.repair.openOnThisDevice": "\u5F53\u524D\u8BBE\u5907\u76F4\u63A5\u6253\u5F00\uFF1A",
  "feishu.repair.qrHint": "\u82E5\u8981\u7528\u53E6\u4E00\u53F0\u8BBE\u5907\u626B\u7801\uFF0C\u53D1\u9001 /repair qr\u3002{expiry}\u3002",
  "feishu.repair.scanFromOtherDevice": "\u8BF7\u7528\u53E6\u4E00\u53F0\u8BBE\u5907\u626B\u7801\u5B8C\u6210\u6388\u6743{remaining}\u3002",
  "feishu.repair.remainingMinutes": "\uFF08\u5269\u4F59\u7EA6 {minutes} \u5206\u949F\uFF09",
  "feishu.repair.qrUnavailable": "\u4E8C\u7EF4\u7801\u6682\u65F6\u65E0\u6CD5\u53D1\u9001\uFF0C\u8BF7\u76F4\u63A5\u6253\u5F00\u6388\u6743\u94FE\u63A5\uFF1A\n{url}",
  "feishu.repair.done": "\u2705 \u4FEE\u590D\u5B8C\u6210\uFF1A\u5DF2\u5B9E\u6D4B\u6536\u5230 card.action.trigger\uFF0C\u83DC\u5355\u6309\u94AE\u73B0\u5728\u53EF\u7528\u3002",
  "feishu.repair.linkExpired": "\u6388\u6743\u94FE\u63A5\u5DF2\u8FC7\u671F\uFF1B\u5E73\u53F0\u672A\u8FD4\u56DE\u6210\u529F\u7ED3\u679C\uFF0C\u65E0\u6CD5\u786E\u8BA4\u5DF2\u4FEE\u590D\u3002\u53D1\u9001 /repair \u751F\u6210\u65B0\u94FE\u63A5\u3002",
  "feishu.repair.cancelled": "\u5DF2\u53D6\u6D88\u672C\u6B21\u4FEE\u590D\u6388\u6743\uFF0C\u672A\u786E\u8BA4\u5B8C\u6210\u4FEE\u590D\u3002",
  "feishu.repair.declined": "\u4F60\u5DF2\u53D6\u6D88\u6216\u62D2\u7EDD\u6388\u6743\uFF0C\u6CA1\u6709\u786E\u8BA4\u4FEE\u590D\uFF1B\u53D1\u9001 /repair \u53EF\u91CD\u8BD5\u3002",
  "feishu.repair.noCallbackYet": "\u6388\u6743\u5DF2\u63D0\u4EA4\uFF0C\u4F46\u672A\u6536\u5230\u6D4B\u8BD5\u6309\u94AE\u56DE\u8C03\u3002\u53EF\u80FD\u5C1A\u672A\u70B9\u51FB\u6216\u914D\u7F6E\u4ECD\u5728\u4F20\u64AD\uFF1B\u7A0D\u540E\u53D1\u9001 /repair verify \u67E5\u8BE2\uFF0C\u4E0D\u8981\u76F2\u76EE\u91CD\u590D\u6388\u6743\u3002",
  "feishu.repair.awaitingRealCallback": "\u6388\u6743\u5DF2\u786E\u8BA4\uFF0C\u6B63\u5728\u7B49\u5F85\u4E13\u7528\u6D4B\u8BD5\u6309\u94AE\u7684\u771F\u5B9E\u56DE\u8C03\uFF1B\u56DE\u8C03\u5230\u8FBE\u524D\u4E0D\u4F1A\u5BA3\u544A\u6210\u529F\u3002",
  "feishu.repair.notAuthorisedYet": "\u6388\u6743\u5C1A\u672A\u5B8C\u6210\uFF0C\u6682\u65F6\u4E0D\u80FD\u9A8C\u8BC1\u5361\u7247\u6309\u94AE\u3002\u8BF7\u5148\u6253\u5F00\u6388\u6743\u94FE\u63A5\u5E76\u786E\u8BA4\u3002",
  "feishu.repair.waitingWithRemaining": "\u4FEE\u590D\u4EFB\u52A1\u6B63\u5728\u7B49\u5F85\u6388\u6743{remaining}\u3002\u53D1\u9001 /repair qr \u53EF\u83B7\u53D6\u4E8C\u7EF4\u7801\uFF0C/repair cancel \u53EF\u53D6\u6D88\u3002",
  "feishu.repair.remainingSuffix": "\uFF0C\u5269\u4F59\u7EA6 {minutes} \u5206\u949F",
  "feishu.menu.expired": "\u8FD9\u4E2A\u83DC\u5355\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u56DE\u590D /m \u91CD\u65B0\u6253\u5F00\u3002",
  "feishu.menu.unknownNumber": "\u83DC\u5355\u6CA1\u6709\u8FD9\u4E2A\u7F16\u53F7\uFF0C\u56DE\u590D /m \u91CD\u65B0\u6253\u5F00\u3002",
  "feishu.menu.sessionOutOfRange": "\u672C\u9875\u53EA\u6709 {count} \u4E2A\u4F1A\u8BDD\uFF0C\u56DE\u590D /sessionlist \u91CD\u65B0\u67E5\u770B\u3002",
  "feishu.menu.workspaceOutOfRange": "\u53EA\u6709 {count} \u4E2A\u5DE5\u4F5C\u533A\uFF0C\u56DE\u590D /workspacelist \u91CD\u65B0\u67E5\u770B\u3002",
  "feishu.menu.watchOutOfRange": "\u5173\u6CE8\u5217\u8868\u53EA\u6709 {count} \u4E2A\u4F1A\u8BDD\u3002",
  "feishu.menu.sessionListFailed": "\u6682\u65F6\u65E0\u6CD5\u83B7\u53D6\u4F1A\u8BDD\u5217\u8868\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "feishu.menu.workspaceListFailed": "\u6682\u65F6\u65E0\u6CD5\u83B7\u53D6\u5DE5\u4F5C\u533A\u5217\u8868\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "feishu.menu.bound": "\u5DF2\u7ED1\u5B9A\u4F1A\u8BDD\u300C{title}\u300D\nID\uFF1A{sessionId}",
  "feishu.menu.bindFailed": "\u7ED1\u5B9A\u5931\u8D25\uFF1A{reason}",
  "feishu.menu.workspaceSwitched": "\u5DE5\u4F5C\u533A\u5DF2\u5207\u6362\u4E3A\uFF1A{workspace}",
  "feishu.menu.workspaceSwitchFailed": "\u5207\u6362\u5931\u8D25\uFF1A{reason}",
  "feishu.watch.usage": "\u7528\u6CD5\uFF1A/watch <Session ID \u6216\u5F53\u524D\u5DE5\u4F5C\u533A\u5E8F\u53F7>",
  "feishu.watch.noWorkspace": "\u5F53\u524D\u673A\u5668\u4EBA\u6CA1\u6709\u53EF\u7528\u7684\u5DE5\u4F5C\u533A\uFF0C\u65E0\u6CD5\u6309\u5E8F\u53F7\u89E3\u6790\u4F1A\u8BDD\u3002",
  "feishu.watch.sessionOutOfRange": "\u5F53\u524D\u5DE5\u4F5C\u533A\u53EA\u6709 {count} \u4E2A\u4F1A\u8BDD\u3002",
  "feishu.watch.notFound": "\u6CA1\u6709\u627E\u5230\u8FD9\u4E2A\u4F1A\u8BDD\uFF0C\u8BF7\u7528 /sessionlist \u67E5\u770B\u53EF\u7528\u4F1A\u8BDD\u3002",
  "feishu.watch.unsupported": "\u5F53\u524D\u72B6\u6001\u5B58\u50A8\u4E0D\u652F\u6301\u5173\u6CE8\u3002",
  "feishu.watch.resolveFailed": "\u65E0\u6CD5\u89E3\u6790\u4F1A\u8BDD\uFF1A{reason}",
  "feishu.watch.limitReached": "\u6BCF\u4E2A\u804A\u5929\u6700\u591A\u5173\u6CE8 {max} \u4E2A\u4F1A\u8BDD\u3002",
  "feishu.watch.added": "\u5DF2\u5173\u6CE8\u4F1A\u8BDD\u300C{title}\u300D\uFF0C\u4EFB\u52A1\u5B8C\u6210\u4F1A\u63A8\u9001\u7ED3\u679C\u3002",
  "feishu.watch.addFailed": "\u5173\u6CE8\u5931\u8D25\uFF1A{reason}",
  "feishu.watch.notWatched": "\u5173\u6CE8\u5217\u8868\u91CC\u6CA1\u6709\u8FD9\u4E2A\u4F1A\u8BDD\uFF0C\u56DE\u590D /watchlist \u67E5\u770B\u3002",
  "feishu.watch.removed": "\u5DF2\u53D6\u6D88\u5173\u6CE8\u300C{title}\u300D\u3002",
  "feishu.watch.removeFailed": "\u53D6\u6D88\u5931\u8D25\uFF1A{reason}",
  // --- Connection test and stream scaffolding ---------------------------
  "connection.defaultChannelLabel": "\u673A\u5668\u4EBA",
  "connection.testSuccess": "\u2705 DeepSeek Harness \u8FDE\u63A5\u6D4B\u8BD5\u6210\u529F\n\u8FD9\u6761\u6D88\u606F\u7531\u63D2\u4EF6\u9875\u9762\u4E2D\u7684\u201C{name}\u201D\u673A\u5668\u4EBA\u5361\u7247\u53D1\u51FA\u3002",
  "connection.noTestTarget": "{channel}\u5C1A\u672A\u6536\u5230\u53EF\u7528\u4E8E\u6D4B\u8BD5\u7684\u79C1\u804A\u6D88\u606F\u3002",
  "stream.processingDone": "\u5904\u7406\u5B8C\u6210\u3002",
  "telegram.webhookConfigured": "\u8BE5 Telegram \u673A\u5668\u4EBA\u5DF2\u914D\u7F6E Webhook\uFF0C\u8BF7\u5148\u5728\u539F\u670D\u52A1\u4E2D\u79FB\u9664 Webhook \u540E\u91CD\u8BD5\u3002",
  "telegram.defaultBotName": "Telegram\u673A\u5668\u4EBA",
  "telegram.connectionLabel": " Bot API \u957F\u8F6E\u8BE2",
  // --- Bot status shown on the settings page -----------------------------
  "status.credentialsMissing": "{channel}\u673A\u5668\u4EBA\u51ED\u636E\u7F3A\u5931\uFF0C\u8BF7\u79FB\u9664\u540E\u91CD\u65B0\u63A5\u5165\u3002",
  "status.connectionNotReady": "{channel}\u8FDE\u63A5\u672A\u5C31\u7EEA\uFF0C\u63D2\u4EF6\u4F1A\u81EA\u52A8\u91CD\u8BD5\u3002",
  "status.connectedNotReady": "{channel}\u673A\u5668\u4EBA\u5DF2\u63A5\u5165\uFF0C\u6D88\u606F\u8FDE\u63A5\u6682\u672A\u5C31\u7EEA\u3002",
  "status.stillNotReady": "{channel}\u8FDE\u63A5\u4ECD\u672A\u5C31\u7EEA\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "status.checkBothTokens": "{channel}\u8FDE\u63A5\u4ECD\u672A\u5C31\u7EEA\uFF0C\u8BF7\u68C0\u67E5\u4E24\u4E2A Token\u3002",
  "status.notConnected": "{channel}\u673A\u5668\u4EBA\u5C1A\u672A\u8FDE\u63A5",
  "status.healthy": "{channel}{connection}\u8FD0\u884C\u6B63\u5E38",
  "status.error": "{channel}\u8FDE\u63A5\u672A\u5C31\u7EEA\uFF0C\u63D2\u4EF6\u4F1A\u81EA\u52A8\u91CD\u8BD5",
  "status.offline": "{channel}\u8FDE\u63A5\u5F53\u524D\u79BB\u7EBF",
  "status.socketModeNotReady": "{channel} Socket Mode \u8FDE\u63A5\u672A\u5C31\u7EEA\uFF0C\u63D2\u4EF6\u4F1A\u81EA\u52A8\u91CD\u8BD5\u3002",
  "status.socketModeConnectedNotReady": "{channel}\u673A\u5668\u4EBA\u5DF2\u63A5\u5165\uFF0CSocket Mode \u8FDE\u63A5\u6682\u672A\u5C31\u7EEA\u3002",
  "bot.cardLabel": "{name}\uFF08{id}\uFF09",
  // --- Slack credential validation ---------------------------------------
  "slack.botTokenPrefix": "Slack Bot Token \u5FC5\u987B\u4EE5 xoxb- \u5F00\u5934\u3002",
  "slack.appTokenPrefix": "Slack App Token \u5FC5\u987B\u4EE5 xapp- \u5F00\u5934\u3002",
  "slack.incompleteIdentity": "Slack Bot Token \u6CA1\u6709\u8FD4\u56DE\u5B8C\u6574\u7684\u673A\u5668\u4EBA\u8EAB\u4EFD\u3002",
  "slack.socketModeUnavailable": "Slack App Token \u65E0\u6CD5\u521B\u5EFA Socket Mode \u8FDE\u63A5\uFF0C\u8BF7\u786E\u8BA4\u5DF2\u542F\u7528 Socket Mode \u548C connections:write\u3002",
  "slack.defaultBotName": "Slack\u673A\u5668\u4EBA",
  "slack.connectionLabel": " Socket Mode \u957F\u8FDE\u63A5",
  // --- Default bot and account labels ------------------------------------
  "bot.dingtalkDefaultName": "\u9489\u9489\u673A\u5668\u4EBA",
  "bot.dingtalkDefaultUser": "\u9489\u9489\u7528\u6237",
  "bot.identityHidden": "\u8EAB\u4EFD\u5DF2\u9690\u85CF",
  "bot.discordDefaultName": "Discord\u673A\u5668\u4EBA",
  "bot.qqDefaultName": "QQ\u673A\u5668\u4EBA",
  "bot.wecomDefaultName": "\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA",
  "bot.weixinDefaultName": "\u5FAE\u4FE1\u673A\u5668\u4EBA",
  "bot.whatsappDefaultName": "WhatsApp\u673A\u5668\u4EBA",
  "bot.whatsappDefaultAccount": "WhatsApp\u8D26\u53F7",
  "bot.discordConnectionLabel": " Gateway \u957F\u8FDE\u63A5",
  "bot.whatsappConnectionLabel": " Web \u5173\u8054\u8BBE\u5907",
  // --- Channel connection errors -----------------------------------------
  "discord.invalidToken": "Discord Bot Token \u65E0\u6548\uFF0C\u8BF7\u91CD\u65B0\u586B\u5199\u3002",
  "discord.intentsMisconfigured": "Discord Gateway Intents \u914D\u7F6E\u4E0D\u6B63\u786E\uFF0C\u8BF7\u68C0\u67E5 Developer Portal \u7684 Bot \u8BBE\u7F6E\u3002",
  "weixin.credentialExpired": "\u5FAE\u4FE1\u767B\u5F55\u51ED\u636E\u5DF2\u5931\u6548\uFF0C\u8BF7\u79FB\u9664\u8D26\u53F7\u540E\u91CD\u65B0\u626B\u7801\u3002",
  "weixin.syncRejected": "\u5FAE\u4FE1\u6D88\u606F\u540C\u6B65\u8BF7\u6C42\u88AB\u62D2\u7EDD\u3002",
  "dingtalk.invalidMessageFormat": "\u9489\u9489\u6D88\u606F\u683C\u5F0F\u65E0\u6548\u3002",
  "feishu.generating": "\u6B63\u5728\u751F\u6210\u2026",
  "feishu.answerComplete": "\u56DE\u7B54\u5B8C\u6210",
  // --- WeChat account activation -----------------------------------------
  "weixin.activation.credentialReadFailed": "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46\u65E0\u6CD5\u8BFB\u53D6\u73B0\u6709\u767B\u5F55\u51ED\u636E\u3002\u8BF7\u68C0\u67E5 DSH \u51ED\u636E\u5B58\u50A8\u3002",
  "weixin.activation.credentialSaveFailed": "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46\u767B\u5F55\u51ED\u636E\u65E0\u6CD5\u5199\u5165 DSH \u51ED\u636E\u5B58\u50A8\u3002\u8BF7\u68C0\u67E5\u51ED\u636E\u5B58\u50A8\u662F\u5426\u53EF\u5199\u3002",
  "weixin.activation.accountConfigSaveFailed": "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46\u8D26\u53F7\u914D\u7F6E\u65E0\u6CD5\u5199\u5165\u672C\u673A\u3002\u8BF7\u68C0\u67E5 DSH_HOME \u76EE\u5F55\u6743\u9650\u3002",
  "weixin.activation.runtimePrepareFailed": "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46\u65E0\u6CD5\u521D\u59CB\u5316\u8D26\u53F7\u72B6\u6001\u6216\u5DE5\u4F5C\u533A\u3002\u8BF7\u68C0\u67E5 DSH_HOME \u548C\u5DE5\u4F5C\u533A\u76EE\u5F55\u3002",
  "weixin.activation.harnessConnectFailed": "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46\u63D2\u4EF6\u65E0\u6CD5\u8FDE\u63A5\u672C\u673A Harness\u3002\u8BF7\u68C0\u67E5 dsh web \u5730\u5740\u548C\u7AEF\u53E3\u3002",
  "weixin.activation.harnessTimeout": "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46 Harness \u5065\u5EB7\u68C0\u67E5\u8D85\u65F6\u3002\u8BF7\u786E\u8BA4 dsh web \u672A\u963B\u585E\u3002",
  "weixin.activation.harnessAuthRequired": "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46 Harness \u5065\u5EB7\u68C0\u67E5\u9700\u8981\u8EAB\u4EFD\u8BA4\u8BC1\u3002\u8BF7\u68C0\u67E5\u4EE3\u7406\u3001\u7F51\u5173\u6216\u81EA\u5B9A\u4E49\u9274\u6743\u914D\u7F6E\u3002",
  "weixin.activation.harnessProxyAuthRequired": "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46\u672C\u673A Harness \u8BF7\u6C42\u88AB\u4EE3\u7406\u8981\u6C42\u8BA4\u8BC1\u3002\u8BF7\u8BA9\u56DE\u73AF\u5730\u5740\u7ED5\u8FC7\u4EE3\u7406\uFF0C\u5E76\u68C0\u67E5 NO_PROXY \u914D\u7F6E\u3002",
  "weixin.activation.harnessLoopbackForbidden": "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46 Harness \u5F02\u5E38\u62D2\u7EDD\u4E86\u56DE\u73AF\u5730\u5740\u7684\u5065\u5EB7\u68C0\u67E5\u3002\u8BF7\u68C0\u67E5 HTTP \u4EE3\u7406\u3001Harness \u6E90\u7801\u7248\u672C\u548C\u6784\u5EFA\u4EA7\u7269\u3002",
  "weixin.activation.harnessHostUntrusted": "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46 Harness \u7684 Host \u4FE1\u4EFB\u68C0\u67E5\u62D2\u7EDD\u4E86\u975E\u56DE\u73AF\u5730\u5740\u8BF7\u6C42\u3002\u8BF7\u68C0\u67E5 harnessBaseUrl \u4E0E trustedHosts \u914D\u7F6E\u3002",
  "weixin.activation.harnessRequestForbidden": "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46\u5065\u5EB7\u68C0\u67E5\u6536\u5230\u4E86\u975E Harness \u6807\u51C6\u7684 403 \u62D2\u7EDD\u54CD\u5E94\u3002\u8BF7\u68C0\u67E5\u4EE3\u7406\u6216\u7F51\u5173\u914D\u7F6E\u3002",
  "weixin.activation.harnessApiNotFound": "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46\u627E\u4E0D\u5230 Harness \u5065\u5EB7\u68C0\u67E5\u63A5\u53E3\u3002\u8BF7\u786E\u8BA4 Harness \u4E0E\u63D2\u4EF6\u7248\u672C\u517C\u5BB9\u3002",
  "weixin.activation.harnessHttpFailed": "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46 Harness \u5065\u5EB7\u68C0\u67E5\u8FD4\u56DE\u670D\u52A1\u9519\u8BEF\u3002\u8BF7\u67E5\u770B dsh web \u65E5\u5FD7\u3002",
  "weixin.activation.harnessResponseInvalid": "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46 Harness \u8FD4\u56DE\u4E86\u65E0\u6CD5\u8BC6\u522B\u7684\u54CD\u5E94\u3002\u8BF7\u786E\u8BA4 Harness \u4E0E\u63D2\u4EF6\u7248\u672C\u517C\u5BB9\u3002",
  "weixin.activation.harnessRpcRejected": "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46 Harness \u62D2\u7EDD\u4E86\u5065\u5EB7\u68C0\u67E5\u8BF7\u6C42\u3002\u8BF7\u67E5\u770B dsh web \u65E5\u5FD7\u3002",
  "weixin.activation.harnessCheckUnknownFailed": "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46 Harness \u5065\u5EB7\u68C0\u67E5\u53D1\u751F\u672A\u77E5\u9519\u8BEF\u3002\u8BF7\u67E5\u770B dsh web \u65E5\u5FD7\u3002",
  "weixin.activation.connectionStartFailed": "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46\u6D88\u606F\u8FDE\u63A5\u521D\u59CB\u5316\u5931\u8D25\u3002\u8BF7\u67E5\u770B dsh web \u65E5\u5FD7\u540E\u91CD\u8BD5\u3002",
  "weixin.activation.unknownFailed": "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46\u6FC0\u6D3B\u8FC7\u7A0B\u4E2D\u53D1\u751F\u672A\u77E5\u9519\u8BEF\u3002\u8BF7\u67E5\u770B dsh web \u65E5\u5FD7\u3002",
  "weixin.missingToken": "\u767B\u5F55\u51ED\u636E\u7F3A\u5931\uFF0C\u8BF7\u79FB\u9664\u8D26\u53F7\u540E\u91CD\u65B0\u626B\u7801\u3002",
  "weixin.connectionNotReady": "\u5FAE\u4FE1\u8FDE\u63A5\u672A\u5C31\u7EEA\uFF0C\u63D2\u4EF6\u4F1A\u81EA\u52A8\u91CD\u8BD5\u3002",
  "weixin.connectionStillNotReady": "\u5FAE\u4FE1\u8FDE\u63A5\u4ECD\u672A\u5C31\u7EEA\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "weixin.qrUnavailable": "\u65E0\u6CD5\u751F\u6210\u5FAE\u4FE1\u4E8C\u7EF4\u7801\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "weixin.pairingBlocked": "\u914D\u5BF9\u7801\u591A\u6B21\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u751F\u6210\u4E8C\u7EF4\u7801\u3002",
  "weixin.qrExpired": "\u4E8C\u7EF4\u7801\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u751F\u6210\u3002",
  "weixin.alreadyBound": "\u8BE5\u5FAE\u4FE1\u8D26\u53F7\u5DF2\u7ED1\u5B9A\uFF0C\u4F46\u672C\u673A\u6CA1\u6709\u53EF\u6062\u590D\u7684\u51ED\u636E\u3002",
  "weixin.incompleteLogin": "\u5FAE\u4FE1\u6388\u6743\u6210\u529F\uFF0C\u4F46\u8FD4\u56DE\u7684\u8D26\u53F7\u51ED\u636E\u4E0D\u5B8C\u6574\u3002",
  "weixin.healthy": "\u5FAE\u4FE1\u6D88\u606F\u957F\u8F6E\u8BE2\u8FD0\u884C\u6B63\u5E38",
  // --- QR pairing (shared wording) ---------------------------------------
  "qr.cancelled": "\u626B\u7801\u7ED1\u5B9A\u5DF2\u53D6\u6D88\u3002",
  // --- WeChat service and media errors -----------------------------------
  "weixin.api.invalidImageKey": "\u5FAE\u4FE1\u56FE\u7247\u7684\u52A0\u5BC6\u5BC6\u94A5\u65E0\u6548\u3002",
  "weixin.api.invalidImageCiphertext": "\u5FAE\u4FE1\u56FE\u7247\u7684\u52A0\u5BC6\u6570\u636E\u65E0\u6548\u3002",
  "weixin.api.imageDecryptionFailed": "\u5FAE\u4FE1\u56FE\u7247\u89E3\u5BC6\u5931\u8D25\u3002",
  "weixin.api.missingImageUrl": "\u5FAE\u4FE1\u56FE\u7247\u6CA1\u6709\u53EF\u7528\u7684\u4E0B\u8F7D\u5730\u5740\u3002",
  "weixin.api.invalidImageUrl": "\u5FAE\u4FE1\u56FE\u7247\u7684\u4E0B\u8F7D\u5730\u5740\u65E0\u6548\u3002",
  "weixin.api.untrustedImageUrl": "\u5FAE\u4FE1\u56FE\u7247\u7684\u4E0B\u8F7D\u5730\u5740\u4E0D\u53D7\u4FE1\u4EFB\u3002",
  "weixin.api.invalidBaseUrl": "\u5FAE\u4FE1\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6548\u7684\u8FDE\u63A5\u5730\u5740\u3002",
  "weixin.api.untrustedBaseUrl": "\u5FAE\u4FE1\u670D\u52A1\u8FD4\u56DE\u4E86\u4E0D\u53D7\u4FE1\u4EFB\u7684\u8FDE\u63A5\u5730\u5740\u3002",
  "weixin.api.missingQr": "\u5FAE\u4FE1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u626B\u7801\u5730\u5740\u3002",
  "weixin.api.invalidQr": "\u5FAE\u4FE1\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6548\u7684\u626B\u7801\u5730\u5740\u3002",
  "weixin.api.untrustedQr": "\u5FAE\u4FE1\u670D\u52A1\u8FD4\u56DE\u4E86\u4E0D\u53D7\u4FE1\u4EFB\u7684\u626B\u7801\u5730\u5740\u3002",
  "weixin.api.invalidUploadUrl": "\u5FAE\u4FE1\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6548\u7684\u6587\u4EF6\u4E0A\u4F20\u5730\u5740\u3002",
  "weixin.api.untrustedUploadUrl": "\u5FAE\u4FE1\u670D\u52A1\u8FD4\u56DE\u4E86\u4E0D\u53D7\u4FE1\u4EFB\u7684\u6587\u4EF6\u4E0A\u4F20\u5730\u5740\u3002",
  "weixin.api.missingUploadUrl": "\u5FAE\u4FE1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6587\u4EF6\u4E0A\u4F20\u5730\u5740\u3002",
  "weixin.api.uploadRejectedHttp": "\u5FAE\u4FE1\u6587\u4EF6\u4E0A\u4F20\u88AB\u62D2\u7EDD\uFF08HTTP {status}\uFF09\u3002",
  "weixin.api.uploadFailedHttp": "\u5FAE\u4FE1\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25\uFF08HTTP {status}\uFF09\u3002",
  "weixin.api.invalidUploadResponse": "\u5FAE\u4FE1\u6587\u4EF6\u4E0A\u4F20\u54CD\u5E94\u7F3A\u5C11\u4E0B\u8F7D\u53C2\u6570\u3002",
  "weixin.api.uploadFailed": "\u5FAE\u4FE1\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25\u3002",
  "weixin.api.untrustedEndpoint": "\u62D2\u7EDD\u8BBF\u95EE\u4E0D\u53D7\u4FE1\u4EFB\u7684\u5FAE\u4FE1\u670D\u52A1\u5730\u5740\u3002",
  "weixin.api.requestFailedHttp": "\u5FAE\u4FE1\u670D\u52A1\u8BF7\u6C42\u5931\u8D25\uFF08HTTP {status}\uFF09\u3002",
  "weixin.api.invalidResponse": "\u5FAE\u4FE1\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6CD5\u89E3\u6790\u7684\u54CD\u5E94\u3002",
  "weixin.api.timeout": "\u5FAE\u4FE1\u670D\u52A1\u8BF7\u6C42\u8D85\u65F6\u3002",
  "weixin.api.networkError": "\u6682\u65F6\u65E0\u6CD5\u8BBF\u95EE\u5FAE\u4FE1\u670D\u52A1\u3002",
  "weixin.api.invalidLoginStatus": "\u5FAE\u4FE1\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6CD5\u8BC6\u522B\u7684\u626B\u7801\u72B6\u6001\u3002",
  "weixin.api.missingQrToken": "\u5FAE\u4FE1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u4E8C\u7EF4\u7801\u4EE4\u724C\u3002",
  "weixin.api.sendRejected": "\u5FAE\u4FE1\u670D\u52A1\u62D2\u7EDD\u4E86\u56DE\u590D\u6D88\u606F\u3002",
  "weixin.api.uploadRequestRejected": "\u5FAE\u4FE1\u670D\u52A1\u62D2\u7EDD\u4E86\u6587\u4EF6\u4E0A\u4F20\u8BF7\u6C42\u3002",
  "weixin.api.fileMessageRejected": "\u5FAE\u4FE1\u670D\u52A1\u62D2\u7EDD\u4E86\u6587\u4EF6\u6D88\u606F\u3002",
  "weixin.api.startRejected": "\u5FAE\u4FE1\u8D26\u53F7\u8FDE\u63A5\u542F\u52A8\u5931\u8D25\u3002",
  // --- QR-paired channel connection states -------------------------------
  "qr.missingSecret": "{channel}\u673A\u5668\u4EBA\u51ED\u636E\u7F3A\u5931\uFF0C\u8BF7\u79FB\u9664\u540E\u91CD\u65B0\u626B\u7801\u3002",
  "qr.serviceUnavailable": "{channel}\u626B\u7801\u670D\u52A1\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u91CD\u65B0\u751F\u6210\u4E8C\u7EF4\u7801\u3002",
  "qr.startFailed": "\u65E0\u6CD5\u751F\u6210{channel}\u4E8C\u7EF4\u7801\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "qr.expired": "{channel}\u4E8C\u7EF4\u7801\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u751F\u6210\u3002",
  "qr.boundNotReady": "{channel}\u673A\u5668\u4EBA\u5DF2\u7ED1\u5B9A\uFF0C\u6D88\u606F\u8FDE\u63A5\u6682\u672A\u5C31\u7EEA\u3002",
  "qr.activationFailed": "{channel}\u5DF2\u6388\u6743\uFF0C\u4F46\u65E0\u6CD5\u5B89\u5168\u4FDD\u5B58\u63A5\u5165\u914D\u7F6E\u3002",
  "qr.deviceInvalid": "{channel}\u5173\u8054\u8BBE\u5907\u5DF2\u5931\u6548\uFF0C\u8BF7\u79FB\u9664\u540E\u91CD\u65B0\u626B\u7801\u3002",
  "qr.authorizationFailed": "{channel}\u672A\u5B8C\u6210\u673A\u5668\u4EBA\u6388\u6743\uFF0C\u8BF7\u91CD\u65B0\u626B\u7801\u3002",
  "qr.pollPending": "{channel}\u6388\u6743\u72B6\u6001\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u6B63\u5728\u91CD\u8BD5\u3002",
  "qr.pollFailed": "{channel}\u6388\u6743\u67E5\u8BE2\u6682\u65F6\u5931\u8D25\uFF0C\u6B63\u5728\u91CD\u8BD5\u3002",
  "qr.connectFailed": "\u65E0\u6CD5\u8FDE\u63A5{channel}\uFF0C\u8BF7\u91CD\u65B0\u751F\u6210\u4E8C\u7EF4\u7801\u3002",
  "qr.deviceSaveFailed": "{channel}\u5DF2\u626B\u7801\uFF0C\u4F46\u65E0\u6CD5\u4FDD\u5B58\u5173\u8054\u8BBE\u5907\u3002",
  "status.healthyDingtalk": "\u9489\u9489 Stream \u6D88\u606F\u8FDE\u63A5\u8FD0\u884C\u6B63\u5E38",
  "status.offlineDingtalk": "\u9489\u9489\u6D88\u606F\u8FDE\u63A5\u5F53\u524D\u79BB\u7EBF",
  "status.healthyQq": "QQ WebSocket \u957F\u8FDE\u63A5\u8FD0\u884C\u6B63\u5E38",
  "status.healthyWhatsapp": "WhatsApp Web \u5173\u8054\u8BBE\u5907\u8FD0\u884C\u6B63\u5E38",
  "status.healthyWecom": "\u4F01\u4E1A\u5FAE\u4FE1\u6D88\u606F\u8FDE\u63A5\u8FD0\u884C\u6B63\u5E38",
  "qr.notCompleted": "{channel}\u626B\u7801\u6CA1\u6709\u5B8C\u6210\uFF0C\u8BF7\u91CD\u65B0\u751F\u6210\u4E8C\u7EF4\u7801\u3002",
  "status.healthyWecomSocket": "\u4F01\u4E1A\u5FAE\u4FE1 WebSocket \u957F\u8FDE\u63A5\u8FD0\u884C\u6B63\u5E38",
  // --- AI Office ---------------------------------------------------------
  "office.error.invalidDeviceToken": "AI Office \u62D2\u7EDD\u4E86 Device Token\u3002",
  "office.error.hookUnavailable": "AI Office Connector Hook \u5C1A\u672A\u5C31\u7EEA\u3002",
  "office.error.protocolMismatch": "AI Office Connector \u534F\u8BAE\u7248\u672C\u4E0D\u517C\u5BB9\u3002",
  "office.error.transportFailed": "\u672C\u673A\u6682\u65F6\u65E0\u6CD5\u8BBF\u95EE AI Office\u3002",
  "office.error.disconnected": "AI Office \u8FDE\u63A5\u5DF2\u4E2D\u65AD\u3002",
  "office.job.stopped": "\u672C\u673A Harness \u5DF2\u505C\u6B62\u8FD9\u6B21\u6267\u884C\u3002",
  "office.job.conflict": "Office Job \u5DF2\u88AB\u9886\u53D6\u3001\u53D6\u6D88\u6216\u7ED3\u675F\u3002",
  "office.job.failed": "\u672C\u673A Harness \u672A\u80FD\u5B8C\u6210\u4EFB\u52A1\uFF1B\u8BF7\u68C0\u67E5 Harness \u4F1A\u8BDD\u540E\u91CD\u8BD5\u3002",
  "office.job.unknownAlias": "Office Job \u5F15\u7528\u4E86\u672C\u673A\u672A\u914D\u7F6E\u7684 Workspace/Preset alias\u3002",
  "office.job.claimed": "\u5DF2\u9886\u53D6 Job\uFF0C\u51C6\u5907 Workspace alias\uFF1A{alias}",
  "office.job.sessionCreated": "Harness Session \u5DF2\u521B\u5EFA\u3002",
  "office.job.usingTool": "\u6B63\u5728\u4F7F\u7528 {name}\u2026",
  "office.job.toolFallback": "Harness \u5DE5\u5177",
  "office.job.approvalTitle": "\u6279\u51C6 {tool}",
  "office.job.questionTitle": ({ count }) => `Harness \u9700\u8981 ${count} \u9879\u8865\u5145\u4FE1\u606F`,
  "office.prompt.intro": "\u4F60\u6B63\u5728\u672C\u673A DeepSeek Harness \u4E2D\u7EE7\u7EED\u4E00\u4E2A\u6765\u81EA AI Office \u7684\u4EFB\u52A1\u3002",
  "office.prompt.rules": "\u53EA\u5728\u5F53\u524D Workspace \u5185\u884C\u52A8\u3002\u5B8C\u6210\u540E\u5FC5\u987B\u8FD4\u56DE\uFF1A\u7ED3\u679C\u6458\u8981\u3001\u6539\u52A8\u6587\u4EF6\u3001\u9A8C\u8BC1\u8BC1\u636E\u3001\u672A\u89E3\u51B3\u98CE\u9669\u3002",
  "office.prompt.presetHeading": "## \u672C\u673A Instruction Preset",
  "office.prompt.instructionHeading": "## \u672C\u8F6E\u8865\u5145\u6307\u4EE4",
  "office.prompt.timelineHeading": "## Office \u65F6\u95F4\u7EBF",
  // --- Feishu app provisioning -------------------------------------------
  "feishu.provision.credentialsMissing": "\u673A\u5668\u4EBA\u51ED\u636E\u7F3A\u5931\uFF0C\u8BF7\u91CD\u65B0\u626B\u7801\u63A5\u5165\u3002",
  "feishu.provision.cannotReach": "\u673A\u5668\u4EBA\u6682\u65F6\u65E0\u6CD5\u8FDE\u63A5\u98DE\u4E66\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  "feishu.provision.noCredentials": "\u6CA1\u6709\u53EF\u7528\u7684\u673A\u5668\u4EBA\u51ED\u636E\uFF0C\u8BF7\u91CD\u65B0\u626B\u7801\u63A5\u5165\u3002",
  "feishu.provision.createdNotReady": "\u673A\u5668\u4EBA\u5DF2\u7ECF\u521B\u5EFA\uFF0C\u4F46\u957F\u8FDE\u63A5\u672A\u5C31\u7EEA\uFF0C\u8BF7\u70B9\u51FB\u91CD\u8BD5\u3002",
  "feishu.provision.appName": "{user} \u7684 AI \u52A9\u624B",
  "feishu.provision.appDescription": "\u8FDE\u63A5\u98DE\u4E66\u4E0E DeepSeek Harness\uFF0C\u5728\u804A\u5929\u4E2D\u4F7F\u7528\u4F01\u4E1A AI \u52A9\u624B\u3002",
  // --- Feishu card-callback repair verification --------------------------
  "feishu.probe.successNotice": "\u2705 \u4FEE\u590D\u5B8C\u6210\uFF1A\u5DF2\u5B9E\u6D4B\u6536\u5230 card.action.trigger\uFF0C\u83DC\u5355\u6309\u94AE\u73B0\u5728\u53EF\u7528\u3002",
  "feishu.probe.timeoutNotice": "\u26A0\uFE0F \u4FEE\u590D\u9A8C\u8BC1\u8D85\u65F6\uFF1A\u672A\u6536\u5230\u6D4B\u8BD5\u5361\u6309\u94AE\u7684 card.action.trigger\uFF0C\u4E0D\u80FD\u786E\u8BA4\u6309\u94AE\u5DF2\u4FEE\u590D\u3002\u8BF7\u4E0D\u8981\u91CD\u590D\u6388\u6743\uFF1B\u5148\u68C0\u67E5\u98DE\u4E66\u5F00\u653E\u5E73\u53F0\u7684\u5361\u7247\u56DE\u8C03\u914D\u7F6E\uFF0C\u786E\u8BA4\u540E\u518D\u53D1\u9001 /repair\u3002",
  "feishu.probe.sendFailureNotice": "\u26A0\uFE0F \u4FEE\u590D\u9A8C\u8BC1\u5931\u8D25\uFF1A\u65E0\u6CD5\u53D1\u9001\u4E13\u7528\u6D4B\u8BD5\u5361\uFF0C\u4E0D\u80FD\u786E\u8BA4 card.action.trigger \u5DF2\u6062\u590D\u3002\u8BF7\u4E0D\u8981\u91CD\u590D\u6388\u6743\uFF1B\u5148\u68C0\u67E5\u673A\u5668\u4EBA\u6D88\u606F\u6743\u9650\u548C\u8FDE\u63A5\u72B6\u6001\u3002",
  "feishu.probe.abortNotice": "\u26A0\uFE0F \u4FEE\u590D\u9A8C\u8BC1\u4E2D\u65AD\uFF1ARuntime \u5DF2\u505C\u6B62\uFF0C\u672A\u5B8C\u6210 card.action.trigger \u5B9E\u6D4B\uFF0C\u4E0D\u80FD\u786E\u8BA4\u4FEE\u590D\u6210\u529F\u3002\u8BF7\u4E0D\u8981\u91CD\u590D\u6388\u6743\uFF1B\u5148\u7B49\u5F85\u673A\u5668\u4EBA\u6062\u590D\u8FDE\u63A5\u3002",
  "feishu.probe.sendFailed": "\u65E0\u6CD5\u53D1\u9001\u98DE\u4E66\u5361\u7247\u56DE\u8C03\u6D4B\u8BD5",
  "feishu.probe.noMessageId": "\u98DE\u4E66\u672A\u8FD4\u56DE\u6D4B\u8BD5\u5361\u7247\u7684\u6D88\u606F ID",
  "feishu.probe.noCallback": "\u5728\u89C4\u5B9A\u65F6\u95F4\u5185\u672A\u6536\u5230\u98DE\u4E66\u5361\u7247\u6309\u94AE\u56DE\u8C03",
  "feishu.probe.runtimeStopped": "\u98DE\u4E66\u8FD0\u884C\u65F6\u5DF2\u505C\u6B62",
  // --- Feishu bot lifecycle ----------------------------------------------
  "feishu.bot.awaitingDeletion": "\u673A\u5668\u4EBA\u6B63\u5728\u7B49\u5F85\u5B8C\u6210\u672C\u5730\u5220\u9664\uFF0C\u8BF7\u91CD\u8BD5\u79FB\u9664\u3002",
  "feishu.bot.credentialsUnreadable": "\u65E0\u6CD5\u8BFB\u53D6\u673A\u5668\u4EBA\u51ED\u636E\uFF0C\u8BF7\u68C0\u67E5\u51ED\u636E\u5B58\u50A8\u3002",
  "feishu.bot.credentialsMissing": "\u673A\u5668\u4EBA\u51ED\u636E\u7F3A\u5931\uFF0C\u8BF7\u5220\u9664\u540E\u91CD\u65B0\u626B\u7801\u63A5\u5165\u3002",
  "feishu.bot.boundNotReady": "\u673A\u5668\u4EBA\u5DF2\u7ECF\u7ED1\u5B9A\uFF0C\u4F46\u957F\u8FDE\u63A5\u672A\u5C31\u7EEA\uFF0C\u8BF7\u70B9\u51FB\u91CD\u8BD5\u3002",
  "feishu.bot.groupPermissionNotReady": "\u7FA4\u6D88\u606F\u6743\u9650\u5DF2\u5F00\u901A\uFF0C\u4F46\u673A\u5668\u4EBA\u957F\u8FDE\u63A5\u672A\u5C31\u7EEA\uFF0C\u8BF7\u70B9\u51FB\u91CD\u8BD5\u3002",
  "feishu.bot.repairSavedNotReady": "\u673A\u5668\u4EBA\u56DE\u8C03\u4FEE\u590D\u5DF2\u4FDD\u5B58\uFF0C\u4F46\u957F\u8FDE\u63A5\u672A\u5C31\u7EEA\uFF0C\u8BF7\u70B9\u51FB\u91CD\u8BD5\u3002",
  "feishu.bot.connectionUpdateFailed": "\u673A\u5668\u4EBA\u8FDE\u63A5\u66F4\u65B0\u5931\u8D25\uFF0C\u4E14\u539F\u8FDE\u63A5\u65E0\u6CD5\u6062\u590D\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  "feishu.bot.credentialDeleteFailed": "\u65E0\u6CD5\u5220\u9664\u673A\u5668\u4EBA\u51ED\u636E\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "feishu.bot.sessionDeleteFailed": "\u65E0\u6CD5\u5220\u9664\u673A\u5668\u4EBA\u7684\u672C\u5730\u4F1A\u8BDD\u6570\u636E\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  // --- DingTalk service errors -------------------------------------------
  "dingtalk.api.invalidImageDownload": "\u9489\u9489\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6548\u7684\u56FE\u7247\u4E0B\u8F7D\u5730\u5740\u3002",
  "dingtalk.api.serviceLabel": "\u9489\u9489\u670D\u52A1",
  "dingtalk.api.replyLabel": "\u9489\u9489\u56DE\u590D",
  "dingtalk.api.registrationLabel": "\u9489\u9489\u6CE8\u518C\u670D\u52A1",
  "dingtalk.api.qrLabel": "\u9489\u9489\u626B\u7801",
  "dingtalk.api.invalidUrl": "{label}\u8FD4\u56DE\u4E86\u65E0\u6548\u5730\u5740\u3002",
  "dingtalk.api.untrustedUrl": "{label}\u5730\u5740\u4E0D\u53D7\u4FE1\u4EFB\u3002",
  "dingtalk.api.noReplyTarget": "\u9489\u9489\u6D88\u606F\u6CA1\u6709\u53EF\u7528\u7684\u56DE\u590D\u5730\u5740\u3002",
  "dingtalk.api.requestFailedHttp": "\u9489\u9489\u670D\u52A1\u8BF7\u6C42\u5931\u8D25\uFF08HTTP {status}\uFF09\u3002",
  "dingtalk.api.invalidResponse": "\u9489\u9489\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6CD5\u89E3\u6790\u7684\u54CD\u5E94\u3002",
  "dingtalk.api.timeout": "\u9489\u9489\u670D\u52A1\u8BF7\u6C42\u8D85\u65F6\u3002",
  "dingtalk.api.networkError": "\u6682\u65F6\u65E0\u6CD5\u5B8C\u6210\u9489\u9489{action}\u8BF7\u6C42\u3002",
  "dingtalk.api.uploadNetworkError": "\u6682\u65F6\u65E0\u6CD5\u5B8C\u6210\u9489\u9489\u6587\u4EF6\u4E0A\u4F20\u8BF7\u6C42\u3002",
  "dingtalk.api.qrActionFailed": "\u9489\u9489\u626B\u7801{action}\u5931\u8D25\u3002",
  "dingtalk.api.noAccessToken": "\u9489\u9489\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u8BBF\u95EE\u4EE4\u724C\u3002",
  "dingtalk.api.missingNonce": "\u9489\u9489\u626B\u7801\u521D\u59CB\u5316\u7F3A\u5C11 nonce\u3002",
  "dingtalk.api.incompleteRegistration": "\u9489\u9489\u626B\u7801\u670D\u52A1\u8FD4\u56DE\u7684\u4FE1\u606F\u4E0D\u5B8C\u6574\u3002",
  "dingtalk.api.invalidRegistrationStatus": "\u9489\u9489\u626B\u7801\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6CD5\u8BC6\u522B\u7684\u72B6\u6001\u3002",
  "dingtalk.api.missingCredentials": "\u9489\u9489\u626B\u7801\u5DF2\u786E\u8BA4\uFF0C\u4F46\u6CA1\u6709\u8FD4\u56DE\u673A\u5668\u4EBA\u51ED\u636E\u3002",
  "dingtalk.api.imageDownloadUrlFailed": "\u9489\u9489\u56FE\u7247\u4E0B\u8F7D\u5730\u5740\u83B7\u53D6\u5931\u8D25\u3002",
  "dingtalk.api.noImageDownloadUrl": "\u9489\u9489\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u56FE\u7247\u4E0B\u8F7D\u5730\u5740\u3002",
  "dingtalk.api.imageContentFailed": "\u9489\u9489\u56FE\u7247\u5185\u5BB9\u4E0B\u8F7D\u5931\u8D25\u3002",
  "dingtalk.api.sendRejected": "\u9489\u9489\u670D\u52A1\u62D2\u7EDD\u4E86\u56DE\u590D\u6D88\u606F\u3002",
  "dingtalk.api.uploadRejected": "\u9489\u9489\u670D\u52A1\u62D2\u7EDD\u4E86\u6587\u4EF6\u4E0A\u4F20\u3002",
  "dingtalk.api.fileMessageRejected": "\u9489\u9489\u670D\u52A1\u62D2\u7EDD\u4E86\u6587\u4EF6\u6D88\u606F\u3002",
  // --- Feishu interactive cards ------------------------------------------
  "feishu.card.menuTitle": "\u{1F916} \u52A9\u624B\u83DC\u5355",
  "feishu.card.menuHint": "**\u70B9\u51FB\u6309\u94AE\u6216\u76F4\u63A5\u56DE\u590D\u6570\u5B57**",
  "feishu.card.menuSessions": "1 \xB7 \u4F1A\u8BDD\u5217\u8868",
  "feishu.card.menuWorkspaces": "2 \xB7 \u5DE5\u4F5C\u533A",
  "feishu.card.menuNew": "3 \xB7 \u65B0\u4F1A\u8BDD",
  "feishu.card.menuStatus": "4 \xB7 \u72B6\u6001",
  "feishu.card.menuHelp": "5 \xB7 \u5E2E\u52A9",
  "feishu.card.menuRepair": "**6 \xB7 \u4FEE\u590D\u5361\u7247\u6309\u94AE**\uFF08\u8BF7\u76F4\u63A5\u56DE\u590D\u6570\u5B57 **6**\uFF09",
  "feishu.card.menuWatchlist": "7 \xB7 \u5173\u6CE8\u5217\u8868",
  "feishu.card.probeTitle": "\u{1F9EA} \u9A8C\u8BC1\u5361\u7247\u6309\u94AE",
  "feishu.card.probeBody": "\u6388\u6743\u5DF2\u63D0\u4EA4\u3002\u8BF7\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\uFF1B\u673A\u5668\u4EBA\u771F\u5B9E\u6536\u5230\u56DE\u8C03\u540E\u624D\u4F1A\u5224\u5B9A\u4FEE\u590D\u6210\u529F\u3002",
  "feishu.card.probeButton": "\u5B8C\u6210\u9A8C\u8BC1",
  "feishu.card.sessionsTitle": "\u{1F4C2} \u4F1A\u8BDD\u5217\u8868",
  "feishu.card.sessionsHeader": "**\u5DE5\u4F5C\u533A**\uFF1A`{workspace}`\n\u5171 **{total}** \u4E2A\u4F1A\u8BDD{page}",
  "feishu.card.pageSuffix": "\uFF08\u7B2C {page}/{pages} \u9875\uFF09",
  "feishu.card.watchAdd": "\u2B50\u5173\u6CE8",
  "feishu.card.watchRemove": "\u2B50\u53D6\u5173",
  "feishu.card.previousPage": "\u25C0 \u4E0A\u4E00\u9875",
  "feishu.card.nextPage": "\u4E0B\u4E00\u9875 \u25B6",
  "feishu.card.sessionsFooter": "\u56DE\u590D\u6570\u5B57\uFF081~N\uFF09\u7ED1\u5B9A\u672C\u9875\u4F1A\u8BDD\u3002",
  "feishu.card.workspacesTitle": "\u{1F5C2} \u5DE5\u4F5C\u533A",
  "feishu.card.workspacesEmpty": "\u5F53\u524D Host \u4E0A\u6CA1\u6709\u5DF2\u767B\u8BB0\u7684\u5DE5\u4F5C\u533A\u3002",
  "feishu.card.workspacesHint": "\u56DE\u590D\u6570\u5B57\u5207\u6362\u5DE5\u4F5C\u533A\uFF0C\u6216\u70B9\u51FB\u6309\u94AE\uFF1A",
  "feishu.card.watchListTitle": "\u{1F441} \u5173\u6CE8\u5217\u8868",
  "feishu.card.watchListEmpty": "\u5F53\u524D\u6CA1\u6709\u5173\u6CE8\u7684\u4F1A\u8BDD\u3002\n`/watch <ID|\u5E8F\u53F7>` \u5173\u6CE8\u540E\uFF0C\u4EFB\u52A1\u5B8C\u6210\u4F1A\u81EA\u52A8\u63A8\u9001\u3002",
  "feishu.card.watchListHint": "\u4EFB\u52A1\u5B8C\u6210\u4F1A\u81EA\u52A8\u63A8\u9001\uFF0C\u56DE\u590D\u6570\u5B57\u6216\u70B9\u6309\u94AE\u53D6\u6D88\u5173\u6CE8\uFF1A",
  "feishu.card.completionTitle": "\u2705 \u4EFB\u52A1\u5B8C\u6210",
  "feishu.card.completionStatus": "**\u72B6\u6001**\uFF1A{status}",
  "feishu.card.openSessions": "\u6253\u5F00\u4F1A\u8BDD\u5217\u8868",
  "feishu.card.workspacesButton": "\u5DE5\u4F5C\u533A",
  "feishu.card.completionFooter": "\u7ED1\u5B9A\u8BE5\u4F1A\u8BDD\u540E\u53EF\u7EE7\u7EED\u8FFD\u95EE\uFF0C\u8F93\u5165\u6587\u5B57\u5373\u53EF\u3002",
  "feishu.card.reasonCompleted": "\u5DF2\u5B8C\u6210",
  "feishu.card.reasonStopped": "\u5DF2\u505C\u6B62",
  "feishu.card.reasonAborted": "\u5DF2\u4E2D\u6B62",
  "feishu.card.reasonCancelled": "\u5DF2\u53D6\u6D88",
  "feishu.card.reasonEnded": "\u5DF2\u7ED3\u675F",
  "feishu.card.helpTitle": "\u{1F916} \u52A9\u624B\u83DC\u5355\uFF08\u56DE\u590D\u6570\u5B57\u5373\u53EF\uFF0C\u65E0\u9700\u8BB0\u547D\u4EE4\uFF09",
  "feishu.card.help1": "1 \xB7 /sessionlist  \u5217\u51FA\u4F1A\u8BDD\uFF08\u56DE\u590D\u6570\u5B57\u7ED1\u5B9A\uFF09",
  "feishu.card.help2": "2 \xB7 /workspacelist  \u5217\u51FA\u5DE5\u4F5C\u533A\uFF08\u56DE\u590D\u6570\u5B57\u5207\u6362\uFF09",
  "feishu.card.help3": "3 \xB7 /new  \u5F00\u542F\u65B0\u4F1A\u8BDD",
  "feishu.card.help4": "4 \xB7 /status  \u8FDE\u63A5\u72B6\u6001",
  "feishu.card.help5": "5 \xB7 /help  \u672C\u5E2E\u52A9",
  "feishu.card.help6": "6 \xB7 /repair  \u4FEE\u590D\u5361\u7247\u6309\u94AE\uFF08\u8BF7\u56DE\u590D\u6570\u5B57 6\uFF09",
  "feishu.card.help7": "7 \xB7 /watchlist  \u5173\u6CE8\u5217\u8868",
  "feishu.card.helpIntro": "\u76F4\u63A5\u53D1\u9001\u6587\u5B57/\u56FE\u7247\u5373\u7EE7\u7EED\u5F53\u524D\u4F1A\u8BDD\u3002",
  "feishu.card.helpSession": "/session ID \u6216\u5E8F\u53F7  \u7ED1\u5B9A\u5DF2\u6709\u4F1A\u8BDD",
  "feishu.card.helpWatch": "/watch ID \u6216\u5E8F\u53F7  \u5173\u6CE8\u4F1A\u8BDD\uFF08\u5B8C\u6210\u540E\u63A8\u9001\uFF09",
  "feishu.card.helpCompact": "/compact  \u538B\u7F29\u4E0A\u4E0B\u6587",
  "feishu.card.helpWorkspace": "/workspace \u7EDD\u5BF9\u8DEF\u5F84  \u5207\u6362\u5DE5\u4F5C\u533A",
  // --- Settings UI -------------------------------------------------------
  "ui.localeTag": "zh-CN",
  "ui.agentPreset.couldNotUpdateTheAgentPreset": "Agent Preset \u4FEE\u6539\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  "ui.agentPreset.followTheHostDefault": "\u8DDF\u968F Host \u9ED8\u8BA4",
  "ui.agentPreset.saving": "\u4FDD\u5B58\u4E2D\u2026",
  "ui.agentPreset.theCurrentAgentPresetIsUnavailable": "\u5F53\u524D Agent Preset \u5DF2\u4E0D\u53EF\u7528\uFF0C\u8BF7\u9009\u62E9\u5176\u4ED6 Preset \u6216\u8DDF\u968F Host \u9ED8\u8BA4\u3002",
  "ui.agentPreset.thisAffectsOnlyNewSessionsIf": "\u53EA\u5F71\u54CD\u65B0\u5EFA\u4F1A\u8BDD\uFF1B\u82E5\u5F53\u524D\u804A\u5929\u5DF2\u6709\u4F1A\u8BDD\uFF0C\u5148\u53D1\u9001 /new\uFF0C\u518D\u53D1\u9001\u666E\u901A\u6D88\u606F\u751F\u6548\u3002",
  "ui.agentPreset.unavailable": "\uFF08\u5DF2\u4E0D\u53EF\u7528\uFF09",
  "ui.agentPreset.viewAgentPresetHelp": "\u67E5\u770B Agent Preset \u8BF4\u660E",
  "ui.channelCardMeta.lastChecked": "\u6700\u8FD1\u68C0\u67E5",
  "ui.channelCardMeta.messageChannel": "\u6D88\u606F\u901A\u9053",
  "ui.channelCardMeta.viewMessageChannelDetails": "\u67E5\u770B\u6D88\u606F\u901A\u9053\u8BF4\u660E",
  "ui.common.botIdentifierStoredSecurely": "\u673A\u5668\u4EBA\u6807\u8BC6\u5DF2\u5B89\u5168\u4FDD\u5B58",
  "ui.common.enterBotToken": "\u586B\u5199 Bot Token",
  "ui.credentialBinding.connect": "\u7ED1\u5B9A\u5E76\u8FDE\u63A5",
  "ui.credentialBinding.connecting": "\u6B63\u5728\u7ED1\u5B9A\u2026",
  "ui.dingtalk.authorizationIsCompletedOnDingtalkS": "\u6388\u6743\u7531\u9489\u9489\u5B98\u65B9\u9875\u9762\u5B8C\u6210\u3002\u626B\u7801\u8D26\u53F7\u5FC5\u987B\u5DF2\u52A0\u5165\u4E00\u4E2A\u4F01\u4E1A/\u7EC4\u7EC7\u5E76\u6709\u6743\u521B\u5EFA\u673A\u5668\u4EBA\uFF1B\u521B\u5EFA\u6210\u529F\u540E\uFF0C\u5E94\u7528\u51ED\u636E\u4F1A\u76F4\u63A5\u5199\u5165 Harness Host\u3002",
  "ui.dingtalk.authorizeTheBotWithTheDingtalk": "\u4F7F\u7528\u9489\u9489 App \u5B8C\u6210\u673A\u5668\u4EBA\u6388\u6743",
  "ui.dingtalk.authorizedCreatingTheDingtalkBot": "\u6388\u6743\u5DF2\u786E\u8BA4\uFF0C\u6B63\u5728\u521B\u5EFA\u9489\u9489\u673A\u5668\u4EBA",
  "ui.dingtalk.botCreatedStartingTheMessageConnection": "\u673A\u5668\u4EBA\u5DF2\u521B\u5EFA\uFF0C\u6B63\u5728\u5EFA\u7ACB\u6D88\u606F\u8FDE\u63A5",
  "ui.dingtalk.cancel": "\u53D6\u6D88",
  "ui.dingtalk.cancelSetup": "\u53D6\u6D88\u63A5\u5165",
  "ui.dingtalk.checkConnection": "\u68C0\u67E5\u8FDE\u63A5",
  "ui.dingtalk.checking": "\u68C0\u67E5\u4E2D\u2026",
  "ui.dingtalk.checkingTheDingtalkStreamConnectionIt": "\u6B63\u5728\u68C0\u67E5\u9489\u9489 Stream \u957F\u8FDE\u63A5\uFF0C\u6210\u529F\u540E\u4F1A\u81EA\u52A8\u663E\u793A\u4E3A\u5728\u7EBF\u3002",
  "ui.dingtalk.close": "\u5173\u95ED",
  "ui.dingtalk.confirmingDingtalkAuthorization": "\u6B63\u5728\u786E\u8BA4\u9489\u9489\u6388\u6743",
  "ui.dingtalk.connectADingtalkBotToDeepseek": "\u901A\u8FC7\u626B\u7801\u628A\u9489\u9489\u673A\u5668\u4EBA\u63A5\u5165 DeepSeek Harness",
  "ui.dingtalk.connectADingtalkBotWithClient": "\u4F7F\u7528 Client ID \u548C Client Secret \u7ED1\u5B9A\u9489\u9489\u673A\u5668\u4EBA",
  "ui.dingtalk.connectDingtalkBotByQrCode": "\u626B\u7801\u63A5\u5165\u9489\u9489\u673A\u5668\u4EBA",
  "ui.dingtalk.connected": "\u8FD0\u884C\u6B63\u5E38",
  "ui.dingtalk.connectedDingtalkBots": "\u5DF2\u63A5\u5165\u7684\u9489\u9489\u673A\u5668\u4EBA",
  "ui.dingtalk.connecting": "\u6B63\u5728\u63A5\u5165",
  "ui.dingtalk.connecting2": "\u6B63\u5728\u8FDE\u63A5",
  "ui.dingtalk.connectionCheckCompletedTheBotHas": "\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\u3002\u673A\u5668\u4EBA\u5C1A\u672A\u6536\u5230\u53EF\u7528\u4E8E\u6D4B\u8BD5\u7684\u79C1\u804A\u6D88\u606F\u3002",
  "ui.dingtalk.connectionCheckFailedTryAgainLater": "\u8FDE\u63A5\u68C0\u67E5\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "ui.dingtalk.dingtalk": "\u9489\u9489",
  "ui.dingtalk.dingtalkBot": "\u9489\u9489\u673A\u5668\u4EBA",
  "ui.dingtalk.dingtalkBotAndLocalCredentialsRemoved": "\u9489\u9489\u673A\u5668\u4EBA\u53CA\u672C\u673A\u51ED\u636E\u5DF2\u79FB\u9664\u3002",
  "ui.dingtalk.dingtalkBotCredentialsConnected": "\u9489\u9489\u673A\u5668\u4EBA\u51ED\u636E\u5DF2\u7ED1\u5B9A\u3002",
  "ui.dingtalk.dingtalkBotSetupCancelled": "\u5DF2\u53D6\u6D88\u9489\u9489\u673A\u5668\u4EBA\u63A5\u5165\u3002",
  "ui.dingtalk.dingtalkConnectionCheckCompletedAndThe": "\u9489\u9489\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\uFF0C\u6D4B\u8BD5\u6D88\u606F\u5DF2\u53D1\u9001\u3002",
  "ui.dingtalk.dingtalkConnectionCheckCompletedButThe": "\u9489\u9489\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\uFF0C\u4F46\u6D4B\u8BD5\u6D88\u606F\u53D1\u9001\u5931\u8D25\u3002",
  "ui.dingtalk.dingtalkDidNotReturnASecure": "\u9489\u9489\u626B\u7801\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u5B89\u5168\u7684\u4E8C\u7EF4\u7801",
  "ui.dingtalk.dingtalkDidNotReturnAValid": "\u9489\u9489\u626B\u7801\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u7ED1\u5B9A\u4EFB\u52A1",
  "ui.dingtalk.dingtalkDidNotReturnAValid2": "\u9489\u9489\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u673A\u5668\u4EBA\u5217\u8868",
  "ui.dingtalk.dingtalkDidNotReturnQrSetup": "\u9489\u9489\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u626B\u7801\u7ED1\u5B9A\u8FDB\u5EA6",
  "ui.dingtalk.dingtalkQrCodeGeneratedScanIt": "\u9489\u9489\u4E8C\u7EF4\u7801\u5DF2\u751F\u6210\uFF0C\u8BF7\u4F7F\u7528\u9489\u9489 App \u626B\u63CF\u3002",
  "ui.dingtalk.dingtalkSettings": "\u9489\u9489\u8BBE\u7F6E",
  "ui.dingtalk.dingtalkStreamConnectionIsHealthy": "\u9489\u9489 Stream \u957F\u8FDE\u63A5\u8FD0\u884C\u6B63\u5E38",
  "ui.dingtalk.enterTheDingtalkClientId": "\u586B\u5199\u9489\u9489\u5E94\u7528 Client ID",
  "ui.dingtalk.enterTheDingtalkClientSecret": "\u586B\u5199\u9489\u9489\u5E94\u7528 Client Secret",
  "ui.dingtalk.generateANewQrCode": "\u91CD\u65B0\u751F\u6210\u4E8C\u7EF4\u7801\u540E\u7EE7\u7EED",
  "ui.dingtalk.generateANewQrCode2": "\u91CD\u65B0\u751F\u6210\u4E8C\u7EF4\u7801",
  "ui.dingtalk.generateDingtalkQrCode": "\u751F\u6210\u9489\u9489\u4E8C\u7EF4\u7801",
  "ui.dingtalk.generatingQrCode": "\u6B63\u5728\u751F\u6210\u4E8C\u7EF4\u7801\u2026",
  "ui.dingtalk.getAnotherQrCode": "\u6362\u4E00\u4E2A\u4E8C\u7EF4\u7801",
  "ui.dingtalk.hideCredentials": "\u6536\u8D77\u51ED\u636E",
  "ui.dingtalk.justNow": "\u521A\u521A",
  "ui.dingtalk.keepBot": "\u4FDD\u7559\u673A\u5668\u4EBA",
  "ui.dingtalk.keepThisPageOpenSetupWill": "\u8BF7\u52FF\u5173\u95ED\u672C\u9875\uFF0C\u9489\u9489\u5B8C\u6210\u6388\u6743\u540E\u5C06\u81EA\u52A8\u7EE7\u7EED\u3002",
  "ui.dingtalk.keepThisPageOpenWhileThe": "\u4FDD\u6301\u672C\u9875\u6253\u5F00\uFF0C\u7B49\u5F85\u673A\u5668\u4EBA\u81EA\u52A8\u8FDE\u63A5",
  "ui.dingtalk.loadingDingtalkConnectionStatus": "\u6B63\u5728\u8BFB\u53D6\u9489\u9489\u8FDE\u63A5\u72B6\u6001\u2026",
  "ui.dingtalk.manualSetup": "\u624B\u52A8\u63A5\u5165",
  "ui.dingtalk.notCheckedYet": "\u5C1A\u672A\u68C0\u67E5",
  "ui.dingtalk.notConnected": "\u8FDE\u63A5\u672A\u5C31\u7EEA",
  "ui.dingtalk.oneTimeQrCodeForConnecting": "\u7528\u4E8E\u628A\u9489\u9489\u673A\u5668\u4EBA\u63A5\u5165 DeepSeek Harness \u7684\u4E00\u6B21\u6027\u4E8C\u7EF4\u7801",
  "ui.dingtalk.qrCodeExpired": "\u4E8C\u7EF4\u7801\u5DF2\u5931\u6548",
  "ui.dingtalk.qrCodeExpired2": "\u4E8C\u7EF4\u7801\u5DF2\u8FC7\u671F",
  "ui.dingtalk.qrCodeExpiresIn": "\u4E8C\u7EF4\u7801\u6709\u6548\u65F6\u95F4",
  "ui.dingtalk.reconnect": "\u91CD\u8BD5\u8FDE\u63A5",
  "ui.dingtalk.reload": "\u91CD\u65B0\u8BFB\u53D6",
  "ui.dingtalk.removeConnection": "\u786E\u8BA4\u79FB\u9664\u63A5\u5165",
  "ui.dingtalk.removeConnection2": "\u79FB\u9664\u63A5\u5165",
  "ui.dingtalk.removing": "\u6B63\u5728\u79FB\u9664\u2026",
  "ui.dingtalk.requestingDingtalkAuthorizationQrCode": "\u6B63\u5728\u7533\u8BF7\u9489\u9489\u6388\u6743\u4E8C\u7EF4\u7801\u2026",
  "ui.dingtalk.scanOnceToCreateAndConnect": "\u626B\u4E00\u6B21\u7801\uFF0C\u81EA\u52A8\u521B\u5EFA\u5E76\u8FDE\u63A5\u673A\u5668\u4EBA",
  "ui.dingtalk.scanQrCode": "\u626B\u7801\u63A5\u5165\u673A\u5668\u4EBA",
  "ui.dingtalk.scanTheQrCodeWithA": "\u4F7F\u7528\u5DF2\u52A0\u5165\u4F01\u4E1A/\u7EC4\u7EC7\u7684\u9489\u9489\u8D26\u53F7\u626B\u63CF\u5DE6\u4FA7\u4E8C\u7EF4\u7801",
  "ui.dingtalk.selectCreateNewBotOnThe": "\u5728\u6388\u6743\u9875\u70B9\u51FB\u201C\u4E00\u952E\u521B\u5EFA\u65B0\u673A\u5668\u4EBA\u201D",
  "ui.dingtalk.storedSecurely": "\u5DF2\u5B89\u5168\u4FDD\u5B58",
  "ui.dingtalk.streamPersistentConnection": "Stream \u957F\u8FDE\u63A5",
  "ui.dingtalk.theDingtalkAccountMustBelongTo": "\u626B\u7801\u8D26\u53F7\u5FC5\u987B\u5DF2\u52A0\u5165\u4F01\u4E1A/\u7EC4\u7EC7\u3002\u5982\u679C\u9489\u9489\u63D0\u793A\u5C1A\u672A\u52A0\u5165\u7EC4\u7EC7\uFF0C\u8BF7\u5728\u63D0\u793A\u9875\u521B\u5EFA\u7EC4\u7EC7\uFF0C\u6216\u6362\u7528\u5DF2\u52A0\u5165\u7EC4\u7EC7\u7684\u8D26\u53F7\u3002",
  "ui.dingtalk.theDingtalkBotIsConnectedAnd": "\u9489\u9489\u673A\u5668\u4EBA\u5DF2\u63A5\u5165\uFF0C\u53EF\u4EE5\u5F00\u59CB\u53D1\u9001\u6D88\u606F\u3002",
  "ui.dingtalk.theQrCodeIsNotReady": "\u4E8C\u7EF4\u7801\u56FE\u7247\u672A\u5C31\u7EEA\uFF0C\u8BF7\u91CD\u65B0\u751F\u6210\u3002",
  "ui.dingtalk.thisDingtalkBotIsConnectedAnd": "\u8FD9\u4E2A\u9489\u9489\u673A\u5668\u4EBA\u5DF2\u7ECF\u63A5\u5165\u5E76\u4FDD\u6301\u5728\u7EBF\u3002",
  "ui.dingtalk.thisStopsTheMessageConnectionAnd": "\u8FD9\u4F1A\u505C\u6B62\u6D88\u606F\u8FDE\u63A5\uFF0C\u5E76\u5220\u9664\u672C\u673A\u4FDD\u5B58\u7684\u5E94\u7528\u51ED\u636E\u3001\u673A\u5668\u4EBA\u914D\u7F6E\u53CA\u4F1A\u8BDD\u6620\u5C04\u3002\u9489\u9489\u5F00\u653E\u5E73\u53F0\u4E2D\u7684\u673A\u5668\u4EBA\u4E0D\u4F1A\u88AB\u81EA\u52A8\u5220\u9664\u3002",
  "ui.dingtalk.tryAgainLater": "\u8BF7\u7A0D\u540E\u91CD\u8BD5",
  "ui.dingtalk.waitingForDingtalkAuthorization": "\u7B49\u5F85\u9489\u9489\u626B\u7801\u6388\u6743",
  "ui.discord.connectADiscordBot": "\u63A5\u5165 Discord \u673A\u5668\u4EBA",
  "ui.discord.createABotInTheDeveloper": "\u5148\u5728 Developer Portal \u521B\u5EFA Bot \u5E76\u9080\u8BF7\u5230\u670D\u52A1\u5668\uFF0C\u518D\u5728\u8FD9\u91CC\u5B8C\u6210\u63A5\u5165\u3002",
  "ui.discord.enterTheBotTokenFromThe": "\u586B\u5199 Discord Developer Portal \u7684 Bot Token",
  "ui.discord.gatewayPersistentConnection": " Gateway \u957F\u8FDE\u63A5",
  "ui.discord.gatewayPersistentConnection2": "Gateway \u957F\u8FDE\u63A5",
  "ui.feishu.addingANewBot": "\u6B63\u5728\u6DFB\u52A0\u65B0\u673A\u5668\u4EBA",
  "ui.feishu.addingTheBotWasCancelled": "\u5DF2\u53D6\u6D88\u6DFB\u52A0\u673A\u5668\u4EBA\u3002",
  "ui.feishu.appIdentifierStoredSecurely": "\u5E94\u7528\u6807\u8BC6\u5DF2\u5B89\u5168\u4FDD\u5B58",
  "ui.feishu.authorizationQrCodeGeneratedScanIt": "\u6388\u6743\u4E8C\u7EF4\u7801\u5DF2\u751F\u6210\uFF0C\u8BF7\u4F7F\u7528\u98DE\u4E66\u626B\u7801\u3002",
  "ui.feishu.authorize": "\u53BB\u6388\u6743",
  "ui.feishu.authorizeGroupMessagePermission": "\u6388\u6743\u7FA4\u6D88\u606F\u6743\u9650",
  "ui.feishu.cancel": "\u53D6\u6D88\u6DFB\u52A0",
  "ui.feishu.cancelAuthorization": "\u53D6\u6D88\u6388\u6743",
  "ui.feishu.cancelRepair": "\u53D6\u6D88\u4FEE\u590D",
  "ui.feishu.cardButtonRepairDidNotFinish": "\u5361\u7247\u6309\u94AE\u6CA1\u6709\u4FEE\u590D\u5B8C\u6210",
  "ui.feishu.cardButtonRepairWasCancelled": "\u5DF2\u53D6\u6D88\u5361\u7247\u6309\u94AE\u4FEE\u590D\u3002",
  "ui.feishu.confirmGroupMessagePermissionWithFeishu": "\u4F7F\u7528\u98DE\u4E66\u786E\u8BA4\u7FA4\u6D88\u606F\u6743\u9650",
  "ui.feishu.confirmedConnectingTheNewBot": "\u5DF2\u786E\u8BA4\uFF0C\u6B63\u5728\u8FDE\u63A5\u65B0\u673A\u5668\u4EBA",
  "ui.feishu.confirmedEnablingAllMessageMode": "\u5DF2\u786E\u8BA4\uFF0C\u6B63\u5728\u542F\u7528\u5168\u90E8\u6D88\u606F\u6A21\u5F0F",
  "ui.feishu.confirmedFinishingCardButtonRepair": "\u5DF2\u786E\u8BA4\uFF0C\u6B63\u5728\u5B8C\u6210\u5361\u7247\u6309\u94AE\u4FEE\u590D",
  "ui.feishu.connectAFeishuBotWithApp": "\u4F7F\u7528 App ID \u548C App Secret \u7ED1\u5B9A\u98DE\u4E66\u673A\u5668\u4EBA",
  "ui.feishu.connectFeishuBotByQrCode": "\u626B\u7801\u63A5\u5165\u98DE\u4E66\u673A\u5668\u4EBA",
  "ui.feishu.connectedBots": "\u5DF2\u63A5\u5165\u7684\u673A\u5668\u4EBA",
  "ui.feishu.connecting": "\u6B63\u5728\u8FDE\u63A5\u2026",
  "ui.feishu.connectionCheckCompletedButTheTest": "\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\uFF0C\u4F46\u6D4B\u8BD5\u6D88\u606F\u53D1\u9001\u5931\u8D25\u3002",
  "ui.feishu.couldNotAuthorizeGroupMessagePermission": "\u7FA4\u6D88\u606F\u6743\u9650\u6388\u6743\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  "ui.feishu.couldNotCreateTheFeishuApp": "\u98DE\u4E66\u5E94\u7528\u521B\u5EFA\u5931\u8D25",
  "ui.feishu.couldNotGrantTheFeishuGroup": "\u98DE\u4E66\u7FA4\u6D88\u606F\u6743\u9650\u5F00\u901A\u5931\u8D25",
  "ui.feishu.couldNotLoadConnectionStatus": "\u65E0\u6CD5\u8BFB\u53D6\u8FDE\u63A5\u72B6\u6001",
  "ui.feishu.couldNotLoadFeishuBots": "\u65E0\u6CD5\u8BFB\u53D6\u98DE\u4E66\u673A\u5668\u4EBA",
  "ui.feishu.couldNotRepairTheFeishuCard": "\u98DE\u4E66\u5361\u7247\u6309\u94AE\u4FEE\u590D\u5931\u8D25",
  "ui.feishu.couldNotUpdateTheGroupResponse": "\u7FA4\u804A\u54CD\u5E94\u65B9\u5F0F\u4FEE\u6539\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  "ui.feishu.directMessagesAlwaysWorkGroupChats": "\u79C1\u804A\u59CB\u7EC8\u54CD\u5E94\uFF1B\u7FA4\u804A\u4EC5\u5904\u7406\u660E\u786E @\u5F53\u524D\u673A\u5668\u4EBA\u7684\u6D88\u606F\u3002\u7FA4\u6D88\u606F\u6743\u9650\u5DF2\u5F00\u901A\uFF0C\u518D\u6B21\u5207\u6362\u65E0\u9700\u6388\u6743\u3002",
  "ui.feishu.directMessagesAlwaysWorkGroupChats2": "\u79C1\u804A\u59CB\u7EC8\u54CD\u5E94\uFF1B\u7FA4\u804A\u4EC5\u5904\u7406\u660E\u786E @\u5F53\u524D\u673A\u5668\u4EBA\u7684\u6D88\u606F\u3002\u9009\u62E9\u5168\u90E8\u6D88\u606F\u540E\u4F1A\u6253\u5F00\u98DE\u4E66\u5B98\u65B9\u6388\u6743\u6D41\u7A0B\u3002",
  "ui.feishu.disconnected": "\u8FDE\u63A5\u4E2D\u65AD",
  "ui.feishu.enterTheFeishuOpenPlatformApp": "\u586B\u5199\u98DE\u4E66\u5F00\u653E\u5E73\u53F0 App ID",
  "ui.feishu.enterTheFeishuOpenPlatformApp2": "\u586B\u5199\u98DE\u4E66\u5F00\u653E\u5E73\u53F0 App Secret",
  "ui.feishu.feishu": "\u98DE\u4E66",
  "ui.feishu.feishuAppUpdateStatusIsMissing": "\u98DE\u4E66\u670D\u52A1\u8FD4\u56DE\u7684\u5E94\u7528\u66F4\u65B0\u4FE1\u606F\u7F3A\u5C11 botId",
  "ui.feishu.feishuBot": "\u98DE\u4E66\u673A\u5668\u4EBA",
  "ui.feishu.feishuBotCredentialsConnected": "\u98DE\u4E66\u673A\u5668\u4EBA\u51ED\u636E\u5DF2\u7ED1\u5B9A\u3002",
  "ui.feishu.feishuBotSettings": "\u98DE\u4E66\u673A\u5668\u4EBA\u8BBE\u7F6E",
  "ui.feishu.feishuDidNotReturnConnectionStatus": "\u98DE\u4E66\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u8FDE\u63A5\u72B6\u6001",
  "ui.feishu.feishuDidNotReturnCreationProgress": "\u98DE\u4E66\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u521B\u5EFA\u8FDB\u5EA6",
  "ui.feishu.feishuDidNotReturnQrCode": "\u98DE\u4E66\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u4E8C\u7EF4\u7801\u4FE1\u606F",
  "ui.feishu.feishuReturnedAGroupMessagePermission": "\u98DE\u4E66\u670D\u52A1\u8FD4\u56DE\u4E86\u4E0D\u5339\u914D\u7684\u7FA4\u6D88\u606F\u6743\u9650\u4E8C\u7EF4\u7801",
  "ui.feishu.feishuReturnedARepairQrCode": "\u98DE\u4E66\u670D\u52A1\u8FD4\u56DE\u4E86\u4E0D\u5339\u914D\u7684\u5361\u7247\u4FEE\u590D\u4E8C\u7EF4\u7801",
  "ui.feishu.feishuReturnedAnInvalidBotStatus": "\u98DE\u4E66\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6548\u7684\u673A\u5668\u4EBA\u72B6\u6001",
  "ui.feishu.feishuReturnedAnUnknownCreationStatus": "\u98DE\u4E66\u670D\u52A1\u8FD4\u56DE\u4E86\u672A\u77E5\u7684\u521B\u5EFA\u72B6\u6001",
  "ui.feishu.feishuReturnedIncompleteQrCodeInformation": "\u98DE\u4E66\u670D\u52A1\u8FD4\u56DE\u7684\u4E8C\u7EF4\u7801\u4FE1\u606F\u4E0D\u5B8C\u6574",
  "ui.feishu.feishuReturnedRegistrationProgressForA": "\u98DE\u4E66\u670D\u52A1\u8FD4\u56DE\u4E86\u4E0D\u5339\u914D\u7684\u6CE8\u518C\u8FDB\u5EA6",
  "ui.feishu.finishTheCurrentFeishuAuthorizationBefore": "\u8BF7\u5148\u5B8C\u6210\u5F53\u524D\u98DE\u4E66\u6388\u6743\u64CD\u4F5C\uFF0C\u518D\u5F00\u901A\u7FA4\u6D88\u606F\u6743\u9650\u3002",
  "ui.feishu.generateFeishuQrCode": "\u751F\u6210\u98DE\u4E66\u4E8C\u7EF4\u7801",
  "ui.feishu.groupMessagePermissionAuthorizationWasCancelled": "\u5DF2\u53D6\u6D88\u7FA4\u6D88\u606F\u6743\u9650\u6388\u6743\u3002",
  "ui.feishu.groupMessagePermissionWasNotGranted": "\u7FA4\u6D88\u606F\u6743\u9650\u6CA1\u6709\u5F00\u901A\u5B8C\u6210",
  "ui.feishu.groupResponseMode": "\u7FA4\u804A\u54CD\u5E94\u65B9\u5F0F",
  "ui.feishu.keepThisPageOpenUntilCard": "\u4FDD\u6301\u672C\u9875\u6253\u5F00\uFF0C\u7B49\u5F85\u5361\u7247\u6309\u94AE\u4FEE\u590D\u5B8C\u6210",
  "ui.feishu.keepThisPageOpenUntilThe": "\u4FDD\u6301\u672C\u9875\u6253\u5F00\uFF0C\u7B49\u5F85\u65B0\u673A\u5668\u4EBA\u7684\u957F\u8FDE\u63A5\u5C31\u7EEA",
  "ui.feishu.keepThisPageOpenWhileThe": "\u4FDD\u6301\u672C\u9875\u6253\u5F00\uFF0C\u7B49\u5F85\u6743\u9650\u751F\u6548\u5E76\u81EA\u52A8\u5207\u6362\u54CD\u5E94\u65B9\u5F0F",
  "ui.feishu.loadingFeishuBots": "\u6B63\u5728\u8BFB\u53D6\u98DE\u4E66\u673A\u5668\u4EBA\u5217\u8868",
  "ui.feishu.loadingFeishuConnectionStatus": "\u6B63\u5728\u8BFB\u53D6\u98DE\u4E66\u8FDE\u63A5\u72B6\u6001\u2026",
  "ui.feishu.needsAttention": "\u9700\u8981\u5904\u7406",
  "ui.feishu.noAppIdIsRequiredYou": "\u65E0\u9700\u624B\u52A8\u586B\u5199 App ID\u3002\u4EE5\u540E\u8FD8\u53EF\u4EE5\u7EE7\u7EED\u6DFB\u52A0\u673A\u5668\u4EBA\uFF0C\u5206\u522B\u670D\u52A1\u4E0D\u540C\u56E2\u961F\u6216\u98DE\u4E66\u79DF\u6237\u3002",
  "ui.feishu.noBotConnectedYet": "\u5C1A\u672A\u63A5\u5165\u673A\u5668\u4EBA",
  "ui.feishu.oneTimeAuthorizationQrCodeFor": "\u7528\u4E8E\u65B0\u589E DeepSeek Harness \u98DE\u4E66\u673A\u5668\u4EBA\u7684\u4E00\u6B21\u6027\u6388\u6743\u4E8C\u7EF4\u7801",
  "ui.feishu.onlyRespondWhenMentionedRecommended": "\u4EC5\u5728 @\u673A\u5668\u4EBA\u65F6\u54CD\u5E94\uFF08\u63A8\u8350\uFF09",
  "ui.feishu.openFeishuOnYourPhoneAnd": "\u6253\u5F00\u98DE\u4E66\u79FB\u52A8\u7AEF\uFF0C\u4F7F\u7528\u626B\u4E00\u626B\u8BFB\u53D6\u4E8C\u7EF4\u7801",
  "ui.feishu.openInFeishu": "\u5728\u98DE\u4E66\u4E2D\u6253\u5F00",
  "ui.feishu.persistentConnection": "\u957F\u8FDE\u63A5",
  "ui.feishu.persistentConnectionIsHealthy": "\u957F\u8FDE\u63A5\u8FD0\u884C\u6B63\u5E38",
  "ui.feishu.preparing": "\u6B63\u5728\u51C6\u5907\u2026",
  "ui.feishu.preparingAuthorization": "\u6B63\u5728\u51C6\u5907\u6388\u6743\u2026",
  "ui.feishu.preparingAuthorizationQrCode": "\u6B63\u5728\u51C6\u5907\u6388\u6743\u4E8C\u7EF4\u7801",
  "ui.feishu.preparingPermissionAuthorizationQrCode": "\u6B63\u5728\u51C6\u5907\u6743\u9650\u6388\u6743\u4E8C\u7EF4\u7801",
  "ui.feishu.preparingTheRepairQrCode": "\u6B63\u5728\u51C6\u5907\u4FEE\u590D\u4E8C\u7EF4\u7801",
  "ui.feishu.reauthorize": "\u91CD\u65B0\u6388\u6743",
  "ui.feishu.reauthorizeGroupMessagePermission": "\u91CD\u65B0\u6388\u6743\u7FA4\u6D88\u606F\u6743\u9650",
  "ui.feishu.refreshAndScanAgain": "\u8BF7\u5237\u65B0\u540E\u91CD\u65B0\u626B\u7801",
  "ui.feishu.refreshQrCode": "\u5237\u65B0\u4E8C\u7EF4\u7801",
  "ui.feishu.refreshTheQrCodeToContinue": "\u5237\u65B0\u4E8C\u7EF4\u7801\u540E\u7EE7\u7EED",
  "ui.feishu.refreshing": "\u5237\u65B0\u4E2D\u2026",
  "ui.feishu.requestingAGroupMessagePermissionQr": "\u6B63\u5728\u4E3A\u73B0\u6709\u98DE\u4E66\u5E94\u7528\u7533\u8BF7\u7FA4\u6D88\u606F\u6743\u9650\u4E8C\u7EF4\u7801\uFF0C\u8BF7\u7A0D\u5019\u3002",
  "ui.feishu.requestingAOneTimeAuthorizationQr": "\u6B63\u5728\u5411\u98DE\u4E66\u7533\u8BF7\u4E00\u6B21\u6027\u6388\u6743\u4E8C\u7EF4\u7801\uFF0C\u8BF7\u7A0D\u5019\u3002",
  "ui.feishu.requestingAOneTimeUpdateQr": "\u6B63\u5728\u4E3A\u73B0\u6709\u98DE\u4E66\u5E94\u7528\u7533\u8BF7\u4E00\u6B21\u6027\u66F4\u65B0\u4E8C\u7EF4\u7801\uFF0C\u8BF7\u7A0D\u5019\u3002",
  "ui.feishu.respondToAllGroupMessages": "\u54CD\u5E94\u6240\u6709\u7FA4\u6D88\u606F",
  "ui.feishu.retryNow": "\u7ACB\u5373\u91CD\u8BD5",
  "ui.feishu.retrying": "\u91CD\u8BD5\u4E2D\u2026",
  "ui.feishu.reviewTheAppNameAndPermissions": "\u6838\u5BF9\u5E94\u7528\u540D\u79F0\u4E0E\u6743\u9650\u8303\u56F4\uFF0C\u5E76\u786E\u8BA4\u521B\u5EFA",
  "ui.feishu.reviewTheExistingAppAndConfirm": "\u6838\u5BF9\u73B0\u6709\u5E94\u7528\uFF0C\u5E76\u786E\u8BA4\u201C\u83B7\u53D6\u7FA4\u7EC4\u4E2D\u6240\u6709\u6D88\u606F\u201D\u6743\u9650",
  "ui.feishu.reviewTheExistingAppNameAnd": "\u6838\u5BF9\u73B0\u6709\u5E94\u7528\u540D\u79F0\uFF0C\u5E76\u786E\u8BA4\u53EA\u65B0\u589E\u5361\u7247\u56DE\u8C03",
  "ui.feishu.savingCredentialsAndCheckingTheNew": "\u6B63\u5728\u5B89\u5168\u4FDD\u5B58\u51ED\u636E\u5E76\u68C0\u67E5\u65B0\u673A\u5668\u4EBA\u7684\u6D88\u606F\u901A\u9053\uFF0C\u5176\u4ED6\u673A\u5668\u4EBA\u4E0D\u4F1A\u4E2D\u65AD\u3002",
  "ui.feishu.scanToCreateYourFirstFeishu": "\u626B\u7801\uFF0C\u521B\u5EFA\u7B2C\u4E00\u4E2A\u98DE\u4E66\u5165\u53E3",
  "ui.feishu.scanWithFeishuToCreateA": "\u4F7F\u7528\u98DE\u4E66\u626B\u7801\u521B\u5EFA\u673A\u5668\u4EBA",
  "ui.feishu.scanWithFeishuToRepairCard": "\u4F7F\u7528\u98DE\u4E66\u626B\u7801\u4FEE\u590D\u5361\u7247\u6309\u94AE",
  "ui.feishu.scanningAddsOneBotExistingBots": "\u626B\u7801\u53EA\u4F1A\u65B0\u589E\u4E00\u4E2A\u673A\u5668\u4EBA\uFF0C\u5DF2\u63A5\u5165\u7684\u673A\u5668\u4EBA\u4F1A\u7EE7\u7EED\u6B63\u5E38\u6536\u53D1\u6D88\u606F\u3002",
  "ui.feishu.scanningUpdatesTheExistingFeishuApp": "\u626B\u7801\u4F1A\u66F4\u65B0\u73B0\u6709\u98DE\u4E66\u5E94\u7528\uFF0C\u53EA\u589E\u91CF\u8865\u5145\u5361\u7247\u6309\u94AE\u56DE\u8C03\uFF1B\u4E0D\u4F1A\u521B\u5EFA\u65B0\u5E94\u7528\u3002\u786E\u8BA4\u540E\u6B64\u673A\u5668\u4EBA\u4F1A\u77ED\u6682\u91CD\u8FDE\uFF0C\u5176\u4ED6\u673A\u5668\u4EBA\u4E0D\u53D7\u5F71\u54CD\u3002",
  "ui.feishu.scanningUpdatesTheExistingFeishuApp2": "\u626B\u7801\u4F1A\u66F4\u65B0\u73B0\u6709\u98DE\u4E66\u5E94\u7528\uFF0C\u53EA\u589E\u91CF\u5F00\u901A\u201C\u83B7\u53D6\u7FA4\u7EC4\u4E2D\u6240\u6709\u6D88\u606F\u201D\u6743\u9650\uFF1B\u4E0D\u4F1A\u521B\u5EFA\u65B0\u5E94\u7528\u3002\u786E\u8BA4\u540E\u4F1A\u81EA\u52A8\u542F\u7528\u201C\u54CD\u5E94\u6240\u6709\u7FA4\u6D88\u606F\u201D\uFF0C\u5176\u4ED6\u673A\u5668\u4EBA\u4E0D\u53D7\u5F71\u54CD\u3002",
  "ui.feishu.testMessageSentCheckTheFeishu": "\u6D4B\u8BD5\u6D88\u606F\u5DF2\u53D1\u9001\uFF0C\u8BF7\u5230\u98DE\u4E66\u4F1A\u8BDD\u4E2D\u786E\u8BA4\u3002",
  "ui.feishu.theBotIsNotConnectedYet": "\u673A\u5668\u4EBA\u5C1A\u672A\u8FDE\u63A5",
  "ui.feishu.theBotIsStillOffline": "\u673A\u5668\u4EBA\u4ECD\u672A\u8FDE\u63A5",
  "ui.feishu.theBotWasCreatedButIts": "\u673A\u5668\u4EBA\u5DF2\u7ECF\u521B\u5EFA\uFF0C\u4F46\u6682\u65F6\u65E0\u6CD5\u786E\u8BA4\u8FDE\u63A5\u72B6\u6001",
  "ui.feishu.theCardCallbackWasUpdatedBut": "\u5361\u7247\u6309\u94AE\u5DF2\u66F4\u65B0\uFF0C\u4F46\u6682\u65F6\u65E0\u6CD5\u786E\u8BA4\u673A\u5668\u4EBA\u8FDE\u63A5\u72B6\u6001",
  "ui.feishu.theFeishuBotIsMissingBotid": "\u98DE\u4E66\u670D\u52A1\u8FD4\u56DE\u7684\u673A\u5668\u4EBA\u7F3A\u5C11 botId",
  "ui.feishu.theGroupMessagePermissionWasUpdated": "\u7FA4\u6D88\u606F\u6743\u9650\u5DF2\u66F4\u65B0\uFF0C\u4F46\u6682\u65F6\u65E0\u6CD5\u786E\u8BA4\u673A\u5668\u4EBA\u8FDE\u63A5\u72B6\u6001",
  "ui.feishu.theNewBotWasNotAdded": "\u65B0\u673A\u5668\u4EBA\u6CA1\u6709\u6DFB\u52A0\u5B8C\u6210",
  "ui.feishu.theNewFeishuBotIsConnected": "\u65B0\u98DE\u4E66\u673A\u5668\u4EBA\u5DF2\u8FDE\u63A5\uFF0C\u53EF\u4EE5\u5F00\u59CB\u804A\u5929\u3002",
  "ui.feishu.theOperationFailedTryAgainLater": "\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",
  "ui.feishu.thePermissionUpdateWasSubmittedEnabling": "\u6743\u9650\u914D\u7F6E\u5DF2\u63D0\u4EA4\uFF0C\u6B63\u5728\u542F\u7528\u5168\u90E8\u6D88\u606F\u6A21\u5F0F\u5E76\u91CD\u8FDE\u6B64\u673A\u5668\u4EBA\uFF1B\u6B64\u9636\u6BB5\u65E0\u6CD5\u53D6\u6D88\uFF0C\u5176\u4ED6\u673A\u5668\u4EBA\u4E0D\u4F1A\u4E2D\u65AD\u3002",
  "ui.feishu.thePermissionUpdateWasSubmittedSaving": "\u6743\u9650\u914D\u7F6E\u5DF2\u63D0\u4EA4\uFF0C\u6B63\u5728\u4FDD\u5B58\u8BBE\u7F6E\u5E76\u91CD\u8FDE\u6B64\u673A\u5668\u4EBA\uFF1B\u6B64\u9636\u6BB5\u65E0\u6CD5\u53D6\u6D88\uFF0C\u5176\u4ED6\u673A\u5668\u4EBA\u4E0D\u4F1A\u4E2D\u65AD\u3002",
  "ui.feishu.theQrCodeIsNotReady": "\u4E8C\u7EF4\u7801\u672A\u5C31\u7EEA\uFF0C\u8BF7\u6253\u5F00\u6388\u6743\u94FE\u63A5",
  "ui.feishu.theReadAllMessagesInAssociated": "\u5DF2\u5F00\u901A\u201C\u83B7\u53D6\u7FA4\u7EC4\u4E2D\u6240\u6709\u6D88\u606F\u201D\u6743\u9650\uFF08im:message.group_msg\uFF09\uFF1B\u673A\u5668\u4EBA\u4F1A\u5904\u7406\u7FA4\u804A\u4E2D\u7684\u6240\u6709\u53EF\u89C1\u6D88\u606F\u3002",
  "ui.feishu.theReadAllMessagesInAssociated2": "\u5C1A\u672A\u786E\u8BA4\u201C\u83B7\u53D6\u7FA4\u7EC4\u4E2D\u6240\u6709\u6D88\u606F\u201D\u6743\u9650\uFF0C\u8BF7\u5B8C\u6210\u98DE\u4E66\u6388\u6743\u3002",
  "ui.feishu.theUpdateWasSubmittedVerifyingThe": "\u914D\u7F6E\u5DF2\u63D0\u4EA4\uFF0C\u6B63\u5728\u9A8C\u8BC1\u5361\u7247\u6309\u94AE\u56DE\u8C03\u5E76\u91CD\u8FDE\u6B64\u673A\u5668\u4EBA\uFF1B\u6B64\u9636\u6BB5\u65E0\u6CD5\u53D6\u6D88\uFF0C\u5176\u4ED6\u673A\u5668\u4EBA\u4E0D\u4F1A\u4E2D\u65AD\u3002",
  "ui.feishu.thisBot": "\u6B64\u673A\u5668\u4EBA",
  "ui.feishu.thisStopsTheBotConnectionAnd": "\u6B64\u64CD\u4F5C\u4F1A\u505C\u6B62\u8FD9\u4E2A\u673A\u5668\u4EBA\u7684\u8FDE\u63A5\uFF0C\u5E76\u5220\u9664\u4FDD\u5B58\u5728\u672C\u673A\u7684\u63A5\u5165\u914D\u7F6E\u548C\u51ED\u636E\u3002\u98DE\u4E66\u5F00\u653E\u5E73\u53F0\u4E2D\u7684\u5E94\u7528\u4E0D\u4F1A\u88AB\u81EA\u52A8\u5220\u9664\uFF0C\u5176\u4ED6\u673A\u5668\u4EBA\u4E5F\u4E0D\u53D7\u5F71\u54CD\u3002",
  "ui.feishu.unknownStatus": "\u72B6\u6001\u672A\u77E5",
  "ui.feishu.waitingForScan": "\u7B49\u5F85\u626B\u7801\u2026",
  "ui.feishu.waitingToRefresh": "\u7B49\u5F85\u5237\u65B0",
  "ui.index.deepseekHarnessAlwaysWithinReach": "\u8BA9 DeepSeek Harness \u89E6\u624B\u53EF\u53CA",
  "ui.index.experimental": "\uFF08\u5B9E\u9A8C\u529F\u80FD\uFF09",
  "ui.index.helpFeedbackOpenGithub": "\u5E2E\u52A9\u4E0E\u53CD\u9988 \xB7 \u524D\u5F80 GitHub",
  "ui.index.imBotSettings": "IM\u673A\u5668\u4EBA\u8BBE\u7F6E",
  "ui.index.imBots": "IM\u673A\u5668\u4EBA",
  "ui.index.imChannels": "IM \u6E20\u9053",
  "ui.office.actionItemsTurnThisIntoAccountable": "action-items=\u8F6C\u6362\u4E3A\u8D1F\u8D23\u4EBA\u3001\u622A\u6B62\u548C\u9A8C\u6536\u660E\u786E\u7684\u5DE5\u5355",
  "ui.office.aiOfficeSettings": "AI Office \u8BBE\u7F6E",
  "ui.office.aiOfficeSettingsAreMissingAn": "AI Office \u8BBE\u7F6E\u9875\u7F3A\u5C11 RPC \u8FDE\u63A5",
  "ui.office.completedJobs": "\u5B8C\u6210 Job",
  "ui.office.configurationIsSavedAndRetriedWhile": "Office Hook \u5C1A\u672A\u90E8\u7F72\u65F6\uFF0C\u914D\u7F6E\u4F1A\u5B89\u5168\u4FDD\u5B58\u5E76\u81EA\u52A8\u91CD\u8BD5\uFF1B\u51FA\u73B0 HTTP 404 \u4EE3\u8868\u534F\u8BAE\u7AEF\u70B9\u5F85\u4E0A\u7EBF\uFF0C\u4E0D\u4EE3\u8868 Harness \u6545\u969C\u3002",
  "ui.office.configurationSaved": "\u914D\u7F6E\u5DF2\u4FDD\u5B58\u3002",
  "ui.office.configured": "\u5DF2\u914D\u7F6E",
  "ui.office.connectedToOffice": "\u5DF2\u8FDE\u63A5 Office",
  "ui.office.connectionTestPassed": "\u8FDE\u63A5\u6D4B\u8BD5\u901A\u8FC7\u3002",
  "ui.office.credentialMissing": "\u51ED\u636E\u7F3A\u5931",
  "ui.office.derivedFromBaseUrlNoSeparate": "\u7531 Base URL \u81EA\u52A8\u6D3E\u751F\uFF0C\u4E0D\u5355\u72EC\u586B\u5199",
  "ui.office.deviceConnection": "\u8BBE\u5907\u8FDE\u63A5",
  "ui.office.eachInstructionPresetMappingMustUse": "Instruction Preset \u6620\u5C04\u6BCF\u884C\u5FC5\u987B\u4F7F\u7528 alias=value",
  "ui.office.eachWorkspaceMappingMustUseAlias": "Workspace \u6620\u5C04\u6BCF\u884C\u5FC5\u987B\u4F7F\u7528 alias=value",
  "ui.office.heartbeatSeconds": "Heartbeat \u79D2\u6570",
  "ui.office.instructionPresetMappings": "Instruction Preset \u6620\u5C04",
  "ui.office.invalidBaseUrl": "Base URL \u65E0\u6548",
  "ui.office.lastEvent": "\u6700\u8FD1\u4E8B\u4EF6",
  "ui.office.lastHeartbeat": "\u6700\u8FD1\u5FC3\u8DF3",
  "ui.office.loadingAiOfficeConnector": "\u6B63\u5728\u8BFB\u53D6 AI Office Connector\u2026",
  "ui.office.maxConcurrency": "\u6700\u5927\u5E76\u53D1",
  "ui.office.noneYet": "\u5C1A\u65E0",
  "ui.office.notConfigured": "\u5C1A\u672A\u914D\u7F6E",
  "ui.office.oneAliasInstructionPerLineNew": "\u6BCF\u884C alias=\u6307\u4EE4\uFF1B\u65B0\u589E preset \u4E0D\u9700\u8981\u6539 Office \u4EE3\u7801\u3002",
  "ui.office.oneAliasLocalAbsolutePathPer": "\u6BCF\u884C alias=/\u672C\u673A/\u7EDD\u5BF9\u8DEF\u5F84\uFF1BOffice \u53EA\u80FD\u770B\u5230 alias\u3002",
  "ui.office.pasteTheOneTimeOfficeCredential": "\u7C98\u8D34 Office \u4E00\u6B21\u6027\u51ED\u636E",
  "ui.office.protocolHookPreview": "\u534F\u8BAE Hook \u9884\u89C8",
  "ui.office.reconnect": "\u91CD\u65B0\u8FDE\u63A5",
  "ui.office.reconnects": "\u91CD\u8FDE\u6B21\u6570",
  "ui.office.removeConnection": "\u79FB\u9664\u8FDE\u63A5",
  "ui.office.runningJobs": "\u8FD0\u884C Job",
  "ui.office.saveAndConnect": "\u4FDD\u5B58\u5E76\u8FDE\u63A5",
  "ui.office.storedSecurelyLeaveBlankToKeep": "\u5DF2\u5B89\u5168\u4FDD\u5B58\uFF1B\u7559\u7A7A\u4FDD\u6301\u4E0D\u53D8",
  "ui.office.testConnection": "\u6D4B\u8BD5\u8FDE\u63A5",
  "ui.office.testing": "\u6D4B\u8BD5\u4E2D\u2026",
  "ui.office.thisMachineConnectsOutwardToThe": "\u672C\u673A\u4E3B\u52A8\u8FDE\u63A5\u516C\u7F51 Office\uFF1BHarness \u4E0D\u5F00\u653E\u7AEF\u53E3\u3002\u534F\u8BAE Hook \u56FA\u5B9A\u4E3A ",
  "ui.office.tokenIsWrittenOnlyToThe": "Token \u53EA\u5199\u5165\u672C\u673A\u51ED\u636E\u5B58\u50A8",
  "ui.office.waitingToReconnect": "\u7B49\u5F85\u91CD\u8FDE",
  "ui.office.workspaceMappings": "Workspace \u6620\u5C04",
  "ui.qq.authorizedInQqConnectingTheBot": "QQ \u5DF2\u6388\u6743\uFF0C\u6B63\u5728\u8FDE\u63A5\u673A\u5668\u4EBA",
  "ui.qq.completeBotSetupWithMobileQq": "\u4F7F\u7528\u624B\u673A QQ \u5B8C\u6210\u673A\u5668\u4EBA\u7ED1\u5B9A",
  "ui.qq.confirmBotCreationOrConnectionOn": "\u5728\u817E\u8BAF\u6388\u6743\u9875\u9762\u786E\u8BA4\u521B\u5EFA\u6216\u7ED1\u5B9A\u673A\u5668\u4EBA",
  "ui.qq.connectAQqBotWithAppid": "\u4F7F\u7528 AppID \u548C AppSecret \u7ED1\u5B9A QQ \u673A\u5668\u4EBA",
  "ui.qq.connectQqBotByQrCode": "\u626B\u7801\u63A5\u5165 QQ \u673A\u5668\u4EBA",
  "ui.qq.connectedQqBots": "\u5DF2\u7ED1\u5B9A\u7684 QQ \u673A\u5668\u4EBA",
  "ui.qq.enterTheQqOpenPlatformAppid": "\u586B\u5199 QQ \u5F00\u653E\u5E73\u53F0 AppID",
  "ui.qq.enterTheQqOpenPlatformAppsecret": "\u586B\u5199 QQ \u5F00\u653E\u5E73\u53F0 AppSecret",
  "ui.qq.generateQqQrCode": "\u751F\u6210 QQ \u4E8C\u7EF4\u7801",
  "ui.qq.generatingQrCode": "\u4E8C\u7EF4\u7801\u56FE\u7247\u6B63\u5728\u751F\u6210\u2026",
  "ui.qq.noQqBotConnectedYet": "\u5C1A\u672A\u7ED1\u5B9A QQ \u673A\u5668\u4EBA",
  "ui.qq.oneTimeQrCodeForConnecting": "\u7528\u4E8E\u7ED1\u5B9A QQ \u673A\u5668\u4EBA\u7684\u4E00\u6B21\u6027\u4E8C\u7EF4\u7801",
  "ui.qq.openMobileQqAndScanThe": "\u6253\u5F00\u624B\u673A QQ\uFF0C\u626B\u63CF\u5DE6\u4FA7\u4E8C\u7EF4\u7801",
  "ui.qq.qqBot": "QQ\u673A\u5668\u4EBA",
  "ui.qq.qqDidNotReturnAValid": "QQ \u626B\u7801\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u7ED1\u5B9A\u4EFB\u52A1",
  "ui.qq.qqDidNotReturnAValid2": "QQ \u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u673A\u5668\u4EBA\u5217\u8868",
  "ui.qq.qqDidNotReturnQrSetup": "QQ \u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u626B\u7801\u7ED1\u5B9A\u8FDB\u5EA6",
  "ui.qq.qqWebsocketConnectionIsHealthy": "QQ WebSocket \u957F\u8FDE\u63A5\u8FD0\u884C\u6B63\u5E38",
  "ui.qq.qrCodeExpiresIn": "\u5F53\u524D\u4E8C\u7EF4\u7801\u6709\u6548\u65F6\u95F4",
  "ui.qq.refreshingQrCode": "\u4E8C\u7EF4\u7801\u6B63\u5728\u81EA\u52A8\u5237\u65B0\u2026",
  "ui.qq.refreshingQrCode2": "\u6B63\u5728\u5237\u65B0\u4E8C\u7EF4\u7801",
  "ui.qq.requestingQqQrCode": "\u6B63\u5728\u7533\u8BF7 QQ \u4E8C\u7EF4\u7801\u2026",
  "ui.qq.returnHereAndWaitForThe": "\u8FD4\u56DE\u8FD9\u91CC\u7B49\u5F85\u8FDE\u63A5\u5B8C\u6210",
  "ui.qq.savingCredentialsLocallyAndStartingThe": "\u51ED\u636E\u6B63\u5728\u5199\u5165\u672C\u673A\uFF0C\u5E76\u542F\u52A8 QQ WebSocket \u6D88\u606F\u8FDE\u63A5\u3002",
  "ui.qq.scanWithMobileQqToCreate": "\u4F7F\u7528\u624B\u673A QQ \u626B\u7801\u521B\u5EFA\u5E76\u7ED1\u5B9A\u673A\u5668\u4EBA",
  "ui.qq.scanningIsCompletedOnTencentS": "\u626B\u7801\u7531\u817E\u8BAF\u5B98\u65B9\u9875\u9762\u5B8C\u6210\uFF0C\u4E0D\u9700\u8981\u624B\u52A8\u586B\u5199 AppID \u6216 AppSecret\u3002\u626B\u7801\u6210\u529F\u540E\uFF0C\u673A\u5668\u4EBA\u4F1A\u81EA\u52A8\u8FDE\u63A5 DeepSeek Harness\u3002",
  "ui.qq.tencentWillCreateOrConnectA": "\u817E\u8BAF\u9875\u9762\u4F1A\u521B\u5EFA\u6216\u7ED1\u5B9A\u4E00\u4E2A QQ \u673A\u5668\u4EBA\uFF0C\u5E76\u628A\u8FDE\u63A5\u51ED\u636E\u5B89\u5168\u4EA4\u7ED9\u672C\u673A Harness Host\u3002",
  "ui.qq.testMessageSentCheckTheMatching": "\u6D4B\u8BD5\u6D88\u606F\u5DF2\u53D1\u9001\uFF0C\u8BF7\u5230\u5BF9\u5E94\u673A\u5668\u4EBA\u4F1A\u8BDD\u4E2D\u786E\u8BA4\u3002",
  "ui.qq.thisStopsTheMessageConnectionAnd": "\u8FD9\u4F1A\u505C\u6B62\u6D88\u606F\u8FDE\u63A5\uFF0C\u5E76\u5220\u9664\u672C\u673A\u4FDD\u5B58\u7684\u5E94\u7528\u51ED\u636E\u3001\u673A\u5668\u4EBA\u914D\u7F6E\u53CA\u4F1A\u8BDD\u6620\u5C04\u3002\u817E\u8BAF\u5E73\u53F0\u4E2D\u7684\u673A\u5668\u4EBA\u4E0D\u4F1A\u88AB\u81EA\u52A8\u5220\u9664\u3002",
  "ui.qq.waitingForMobileQqScan": "\u7B49\u5F85\u624B\u673A QQ \u626B\u7801",
  "ui.qq.websocketPersistentConnection": "WebSocket \u957F\u8FDE\u63A5",
  "ui.slack.botTokenAndAppToken": "Bot Token \u4E0E App Token",
  "ui.slack.configureTheBotWithTheOfficial": "\u4F7F\u7528\u5B98\u65B9 App Manifest \u5FEB\u901F\u914D\u7F6E\u673A\u5668\u4EBA\uFF0C\u518D\u586B\u5199 Bot Token \u4E0E App Token \u5EFA\u7ACB\u672C\u5730 Socket Mode \u8FDE\u63A5\u3002",
  "ui.slack.connectASlackBot": "\u63A5\u5165 Slack \u673A\u5668\u4EBA",
  "ui.slack.connectASlackBotWithA": "\u4F7F\u7528 Manifest \u548C\u53CC Token \u63A5\u5165 Slack \u673A\u5668\u4EBA",
  "ui.slack.connectBot": "\u63A5\u5165\u673A\u5668\u4EBA",
  "ui.slack.copyManifest": "\u590D\u5236 Manifest",
  "ui.slack.copyTheManifestAndChooseFrom": "\u590D\u5236\u914D\u7F6E\u540E\uFF0C\u5728 Slack \u9009\u62E9 From a manifest\uFF1B\u521B\u5EFA\u5B8C\u6210\u540E\u751F\u6210 connections:write App Token\uFF0C\u5E76\u5C06\u5E94\u7528\u5B89\u88C5\u5230\u5DE5\u4F5C\u533A\u3002",
  "ui.slack.createAndConfigureASlackApp": "\u5148\u7528 Manifest \u521B\u5EFA\u5E76\u914D\u7F6E Slack App",
  "ui.slack.getTheBotTokenFromOauth": "Bot Token \u6765\u81EA OAuth & Permissions\uFF1BApp Token \u6765\u81EA Basic Information\uFF0C\u5E76\u4E14\u5FC5\u987B\u5305\u542B connections:write\u3002",
  "ui.slack.hideSetup": "\u6536\u8D77\u63A5\u5165",
  "ui.slack.manifestCopied": "\u5DF2\u590D\u5236 Manifest",
  "ui.slack.openSlackAppCreation": "\u6253\u5F00 Slack \u521B\u5EFA\u9875",
  "ui.slack.slackWorkspace": "Slack \u5DE5\u4F5C\u533A",
  "ui.slack.socketModePersistentConnection": " Socket Mode \u957F\u8FDE\u63A5",
  "ui.slack.socketModePersistentConnection2": "Socket Mode \u957F\u8FDE\u63A5",
  "ui.slack.startSetup": "\u5F00\u59CB\u63A5\u5165",
  "ui.slack.verifyAndConnect": "\u9A8C\u8BC1\u5E76\u8FDE\u63A5",
  "ui.slack.verifyingAndConnecting": "\u6B63\u5728\u9A8C\u8BC1\u5E76\u8FDE\u63A5\u2026",
  "ui.telegram.accessSettings": "\u8BBF\u95EE\u8BBE\u7F6E",
  "ui.telegram.activeCompatibleMode": "\u5DF2\u751F\u6548\uFF1A\u517C\u5BB9\u6A21\u5F0F",
  "ui.telegram.activeSafeMode": "\u5DF2\u751F\u6548\uFF1A\u5B89\u5168\u6A21\u5F0F",
  "ui.telegram.allGroupMessagesAreIgnoredOnly": "\u7FA4\u804A\u5168\u90E8\u5FFD\u7565\uFF0C\u79C1\u804A\u4EC5\u5141\u8BB8\u767D\u540D\u5355\u7528\u6237\u3002",
  "ui.telegram.botApiLongPolling": " Bot API \u957F\u8F6E\u8BE2",
  "ui.telegram.botApiLongPolling2": "Bot API \u957F\u8F6E\u8BE2",
  "ui.telegram.compatibleMode": "\u517C\u5BB9\u6A21\u5F0F",
  "ui.telegram.compatibleModeDefault": "\u517C\u5BB9\u6A21\u5F0F\uFF08\u9ED8\u8BA4\uFF09",
  "ui.telegram.compatibleModeDoesNotEnforceThe": "\u517C\u5BB9\u6A21\u5F0F\u4E0B\u6682\u4E0D\u4F7F\u7528\u767D\u540D\u5355\uFF0C\u5207\u6362\u6A21\u5F0F\u65F6\u4F1A\u4FDD\u7559\u3002",
  "ui.telegram.connectATelegramBot": "\u63A5\u5165 Telegram \u673A\u5668\u4EBA",
  "ui.telegram.couldNotSaveTelegramAccessSettings": "Telegram \u8BBF\u95EE\u8BBE\u7F6E\u4FDD\u5B58\u5931\u8D25\u3002",
  "ui.telegram.eachUserIdMustBeA": "User ID \u5FC5\u987B\u662F 1\u201316 \u4F4D\u6B63\u6574\u6570\uFF0C\u6BCF\u884C\u4E00\u4E2A\u3002",
  "ui.telegram.enterTheBotTokenFromBotfather": "\u586B\u5199 @BotFather \u751F\u6210\u7684 Bot Token",
  "ui.telegram.getABotTokenFromBotfather": "\u5148\u901A\u8FC7 @BotFather \u83B7\u53D6 Bot Token\uFF0C\u518D\u5728\u8FD9\u91CC\u5B8C\u6210\u63A5\u5165\u3002",
  "ui.telegram.keepTheOriginalBehaviorRespondTo": "\u4FDD\u6301\u539F\u6709\u884C\u4E3A\uFF1A\u79C1\u804A\u76F4\u63A5\u54CD\u5E94\uFF0C\u7FA4\u804A\u5728\u88AB\u63D0\u53CA\u6216\u56DE\u590D\u65F6\u54CD\u5E94\u3002",
  "ui.telegram.mode": "\u6A21\u5F0F",
  "ui.telegram.oneNumericUserIdPerLine": "\u6BCF\u884C\u4E00\u4E2A\u6570\u5B57 User ID",
  "ui.telegram.safeMode": "\u5B89\u5168\u6A21\u5F0F",
  "ui.telegram.safeModePrivateChatAllowlist": "\u5B89\u5168\u6A21\u5F0F\uFF08\u79C1\u804A\u767D\u540D\u5355\uFF09",
  "ui.telegram.saveAccessSettings": "\u4FDD\u5B58\u8BBF\u95EE\u8BBE\u7F6E",
  "ui.telegram.saving": "\u6B63\u5728\u4FDD\u5B58\u2026",
  "ui.telegram.telegramAccessMode": "Telegram \u8BBF\u95EE\u6A21\u5F0F",
  "ui.telegram.telegramAccessSettingsAreCurrentlyUnavailable": "Telegram \u8BBF\u95EE\u8BBE\u7F6E\u6682\u4E0D\u53EF\u7528\u3002",
  "ui.telegram.telegramUserIdsAllowedToSend": "\u5141\u8BB8\u79C1\u804A\u7684 Telegram User ID",
  "ui.telegram.theAllowlistIsEmptyThisBot": "\u767D\u540D\u5355\u4E3A\u7A7A\uFF1B\u4FDD\u5B58\u540E\u8BE5\u673A\u5668\u4EBA\u4F1A\u62D2\u7EDD\u6240\u6709\u5165\u7AD9\u6D88\u606F\u3002",
  "ui.telegram.thisAllowlistBelongsOnlyToThe": "\u767D\u540D\u5355\u4EC5\u5C5E\u4E8E\u5F53\u524D\u673A\u5668\u4EBA\u3002",
  "ui.telegram.viewTelegramAccessModeDetails": "\u67E5\u770B Telegram \u8BBF\u95EE\u6A21\u5F0F\u8BF4\u660E",
  "ui.wecom.authorizeTheAiBotWithWecom": "\u4F7F\u7528\u4F01\u4E1A\u5FAE\u4FE1 App \u5B8C\u6210\u667A\u80FD\u673A\u5668\u4EBA\u6388\u6743",
  "ui.wecom.authorizedInWecomConnectingTheBot": "\u4F01\u4E1A\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u6B63\u5728\u8FDE\u63A5\u673A\u5668\u4EBA",
  "ui.wecom.confirmBotCreationOnTheTencent": "\u5728\u817E\u8BAF\u6388\u6743\u9875\u9762\u786E\u8BA4\u521B\u5EFA\u667A\u80FD\u673A\u5668\u4EBA",
  "ui.wecom.connectAWecomBotWithBot": "\u4F7F\u7528 Bot ID \u548C Secret \u7ED1\u5B9A\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA",
  "ui.wecom.connectWecomBotByQrCode": "\u626B\u7801\u63A5\u5165\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA",
  "ui.wecom.connectedWecomBots": "\u5DF2\u7ED1\u5B9A\u7684\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA",
  "ui.wecom.enterTheWecomAiBotId": "\u586B\u5199\u4F01\u4E1A\u5FAE\u4FE1\u667A\u80FD\u673A\u5668\u4EBA Bot ID",
  "ui.wecom.enterTheWecomAiBotSecret": "\u586B\u5199\u4F01\u4E1A\u5FAE\u4FE1\u667A\u80FD\u673A\u5668\u4EBA Secret",
  "ui.wecom.generateWecomQrCode": "\u751F\u6210\u4F01\u4E1A\u5FAE\u4FE1\u4E8C\u7EF4\u7801",
  "ui.wecom.noWecomBotConnectedYet": "\u5C1A\u672A\u7ED1\u5B9A\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA",
  "ui.wecom.oneTimeQrCodeForConnecting": "\u7528\u4E8E\u7ED1\u5B9A\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684\u4E00\u6B21\u6027\u4E8C\u7EF4\u7801",
  "ui.wecom.openWecomAndScanTheQr": "\u6253\u5F00\u4F01\u4E1A\u5FAE\u4FE1 App\uFF0C\u626B\u63CF\u5DE6\u4FA7\u4E8C\u7EF4\u7801",
  "ui.wecom.requestingWecomQrCode": "\u6B63\u5728\u7533\u8BF7\u4F01\u4E1A\u5FAE\u4FE1\u4E8C\u7EF4\u7801\u2026",
  "ui.wecom.savingCredentialsLocallyAndStartingThe": "\u51ED\u636E\u6B63\u5728\u5199\u5165\u672C\u673A\uFF0C\u5E76\u542F\u52A8\u4F01\u4E1A\u5FAE\u4FE1 WebSocket \u6D88\u606F\u8FDE\u63A5\u3002",
  "ui.wecom.scanWithWecomToCreateAn": "\u4F7F\u7528\u4F01\u4E1A\u5FAE\u4FE1 App \u626B\u7801\u521B\u5EFA\u667A\u80FD\u673A\u5668\u4EBA",
  "ui.wecom.scanningIsCompletedOnTencentS": "\u626B\u7801\u7531\u817E\u8BAF\u5B98\u65B9\u9875\u9762\u5B8C\u6210\uFF0C\u4E0D\u9700\u8981\u624B\u52A8\u586B\u5199 Bot ID \u6216 Secret\u3002\u521B\u5EFA\u6210\u529F\u540E\uFF0C\u673A\u5668\u4EBA\u4F1A\u81EA\u52A8\u8FDE\u63A5 DeepSeek Harness\u3002",
  "ui.wecom.thisStopsTheMessageConnectionAnd": "\u8FD9\u4F1A\u505C\u6B62\u6D88\u606F\u8FDE\u63A5\uFF0C\u5E76\u5220\u9664\u672C\u673A\u4FDD\u5B58\u7684\u5E94\u7528\u51ED\u636E\u3001\u673A\u5668\u4EBA\u914D\u7F6E\u53CA\u4F1A\u8BDD\u6620\u5C04\u3002\u4F01\u4E1A\u5FAE\u4FE1\u5E73\u53F0\u4E2D\u7684\u673A\u5668\u4EBA\u4E0D\u4F1A\u88AB\u81EA\u52A8\u5220\u9664\u3002",
  "ui.wecom.waitingForWecomScan": "\u7B49\u5F85\u4F01\u4E1A\u5FAE\u4FE1 App \u626B\u7801",
  "ui.wecom.wecom": "\u4F01\u4E1A\u5FAE\u4FE1",
  "ui.wecom.wecomBot": "\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA",
  "ui.wecom.wecomConnectionCheckCompletedAndThe": "\u4F01\u4E1A\u5FAE\u4FE1\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\uFF0C\u6D4B\u8BD5\u6D88\u606F\u5DF2\u53D1\u9001\u3002",
  "ui.wecom.wecomConnectionCheckCompletedButThe": "\u4F01\u4E1A\u5FAE\u4FE1\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\uFF0C\u4F46\u6D4B\u8BD5\u6D88\u606F\u53D1\u9001\u5931\u8D25\u3002",
  "ui.wecom.wecomDidNotReturnAValid": "\u4F01\u4E1A\u5FAE\u4FE1\u626B\u7801\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u7ED1\u5B9A\u4EFB\u52A1",
  "ui.wecom.wecomDidNotReturnAValid2": "\u4F01\u4E1A\u5FAE\u4FE1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u673A\u5668\u4EBA\u5217\u8868",
  "ui.wecom.wecomDidNotReturnQrSetup": "\u4F01\u4E1A\u5FAE\u4FE1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u626B\u7801\u7ED1\u5B9A\u8FDB\u5EA6",
  "ui.wecom.wecomSettings": "\u4F01\u4E1A\u5FAE\u4FE1\u8BBE\u7F6E",
  "ui.wecom.wecomWebsocketConnectionIsHealthy": "\u4F01\u4E1A\u5FAE\u4FE1 WebSocket \u957F\u8FDE\u63A5\u8FD0\u884C\u6B63\u5E38",
  "ui.wecom.wecomWillCreateAnAiBot": "\u4F01\u4E1A\u5FAE\u4FE1\u5B98\u65B9\u9875\u9762\u4F1A\u521B\u5EFA\u4E00\u4E2A\u667A\u80FD\u673A\u5668\u4EBA\uFF0C\u5E76\u628A\u8FDE\u63A5\u51ED\u636E\u5B89\u5168\u4EA4\u7ED9\u672C\u673A Harness Host\u3002",
  "ui.weixin.cancelSetup": "\u53D6\u6D88\u7ED1\u5B9A",
  "ui.weixin.confirmTheBotConnectionInWechat": "\u5728\u5FAE\u4FE1\u4E2D\u786E\u8BA4\u8FDE\u63A5\u8BE5\u673A\u5668\u4EBA",
  "ui.weixin.confirmedInWechatStartingTheMessage": "\u5FAE\u4FE1\u5DF2\u786E\u8BA4\uFF0C\u6B63\u5728\u542F\u52A8\u6D88\u606F\u8FDE\u63A5",
  "ui.weixin.connectWechatBotByQrCode": "\u626B\u7801\u63A5\u5165\u5FAE\u4FE1\u673A\u5668\u4EBA",
  "ui.weixin.connectedWechatAccounts": "\u5DF2\u63A5\u5165\u7684\u5FAE\u4FE1\u8D26\u53F7",
  "ui.weixin.contactingTheWechatIlinkService": "\u6B63\u5728\u8054\u7CFB\u817E\u8BAF\u5FAE\u4FE1 iLink \u670D\u52A1\u3002",
  "ui.weixin.continueConnecting": "\u7EE7\u7EED\u8FDE\u63A5",
  "ui.weixin.couldNotLoadWechatStatus": "\u65E0\u6CD5\u8BFB\u53D6\u5FAE\u4FE1\u72B6\u6001",
  "ui.weixin.enterTheNumberShownInWechat": "\u8F93\u5165\u624B\u673A\u5FAE\u4FE1\u663E\u793A\u7684\u6570\u5B57",
  "ui.weixin.generateWechatQrCode": "\u751F\u6210\u5FAE\u4FE1\u4E8C\u7EF4\u7801",
  "ui.weixin.ilinkLongPolling": "iLink \u957F\u8F6E\u8BE2",
  "ui.weixin.keepAccount": "\u4FDD\u7559\u8D26\u53F7",
  "ui.weixin.keepThisPageOpenUntilLong": "\u4FDD\u6301\u672C\u9875\u6253\u5F00\uFF0C\u7B49\u5F85\u6D88\u606F\u957F\u8F6E\u8BE2\u53D8\u4E3A\u5728\u7EBF",
  "ui.weixin.loadingWechatConnectionStatus": "\u6B63\u5728\u8BFB\u53D6\u5FAE\u4FE1\u8FDE\u63A5\u72B6\u6001\u2026",
  "ui.weixin.noWechatAccountConnectedYet": "\u5C1A\u672A\u7ED1\u5B9A\u5FAE\u4FE1",
  "ui.weixin.oneTimeQrCodeForConnecting": "\u7528\u4E8E\u628A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7ED1\u5B9A\u5230 DeepSeek Harness \u7684\u4E00\u6B21\u6027\u4E8C\u7EF4\u7801",
  "ui.weixin.openAlternateLink": "\u6253\u5F00\u5907\u7528\u94FE\u63A5",
  "ui.weixin.openWechatOnYourPhoneAnd": "\u6253\u5F00\u624B\u673A\u5FAE\u4FE1\u5E76\u626B\u63CF\u5DE6\u4FA7\u4E8C\u7EF4\u7801",
  "ui.weixin.pairingCodeRequired": "\u9700\u8981\u914D\u5BF9\u7801",
  "ui.weixin.pairingCodeSubmittedWaitingForWechat": "\u914D\u5BF9\u7801\u5DF2\u63D0\u4EA4\uFF0C\u6B63\u5728\u7B49\u5F85\u5FAE\u4FE1\u786E\u8BA4\u3002",
  "ui.weixin.preparingWechatQrCode": "\u6B63\u5728\u51C6\u5907\u5FAE\u4FE1\u4E8C\u7EF4\u7801",
  "ui.weixin.remove": "\u786E\u8BA4\u79FB\u9664",
  "ui.weixin.removeThisWechatAccountFromHarness": "\u4ECE\u6B64 Harness \u79FB\u9664\u8FD9\u4E2A\u5FAE\u4FE1\u8D26\u53F7\uFF1F",
  "ui.weixin.reviewAndConfirmAuthorizationOnYour": "\u8BF7\u5728\u624B\u673A\u4E0A\u6838\u5BF9\u5E76\u786E\u8BA4\u6388\u6743\u3002\u90E8\u5206\u8D26\u53F7\u4F1A\u989D\u5916\u663E\u793A\u4E00\u4E2A\u914D\u5BF9\u6570\u5B57\uFF0C\u9875\u9762\u4F1A\u5728\u9700\u8981\u65F6\u63D0\u793A\u8F93\u5165\u3002",
  "ui.weixin.savingCredentialsAndVerifyingTheWechat": "\u6B63\u5728\u4FDD\u5B58\u51ED\u636E\u5E76\u9A8C\u8BC1 Harness \u4E0E\u5FAE\u4FE1\u957F\u8F6E\u8BE2\u3002",
  "ui.weixin.scanOnceToUseHarnessIn": "\u626B\u4E00\u6B21\u7801\uFF0C\u5C31\u80FD\u5728\u5FAE\u4FE1\u91CC\u4F7F\u7528 Harness",
  "ui.weixin.scanWithWechatOnYourPhone": "\u4F7F\u7528\u624B\u673A\u5FAE\u4FE1\u626B\u63CF\u4E8C\u7EF4\u7801",
  "ui.weixin.scannedConfirmOnYourPhone": "\u5DF2\u626B\u7801\uFF0C\u8BF7\u5728\u624B\u673A\u4E0A\u786E\u8BA4",
  "ui.weixin.theQrCodeIsIssuedBy": "\u4E8C\u7EF4\u7801\u7531\u817E\u8BAF\u5FAE\u4FE1 iLink \u670D\u52A1\u7B7E\u53D1\u3002\u7528\u624B\u673A\u5FAE\u4FE1\u626B\u63CF\u5E76\u786E\u8BA4\u540E\uFF0C\u8D26\u53F7\u51ED\u636E\u4F1A\u76F4\u63A5\u5199\u5165 Harness Host\uFF0C\u6D4F\u89C8\u5668\u4E0D\u4F1A\u6536\u5230 bot_token\u3002",
  "ui.weixin.theQrCodeIsNotReady": "\u4E8C\u7EF4\u7801\u56FE\u7247\u672A\u5C31\u7EEA\uFF0C\u8BF7\u4F7F\u7528\u5907\u7528\u94FE\u63A5\u3002",
  "ui.weixin.theWechatAccountAndLocalCredentials": "\u5FAE\u4FE1\u8D26\u53F7\u53CA\u672C\u673A\u51ED\u636E\u5DF2\u79FB\u9664\u3002",
  "ui.weixin.thisIsAnAdditionalWechatConfirmation": "\u8FD9\u662F\u5FAE\u4FE1\u9644\u52A0\u7684\u5B89\u5168\u786E\u8BA4\u6B65\u9AA4\u3002\u914D\u5BF9\u7801\u53EA\u7528\u4E8E\u672C\u6B21\u626B\u7801\u8F6E\u8BE2\uFF0C\u4E0D\u4F1A\u5199\u5165\u914D\u7F6E\u6216\u65E5\u5FD7\u3002",
  "ui.weixin.thisStopsTheMessageConnectionAnd": "\u8FD9\u4F1A\u505C\u6B62\u6D88\u606F\u8FDE\u63A5\uFF0C\u5E76\u5220\u9664\u672C\u673A\u4FDD\u5B58\u7684 bot_token\u3001\u8D26\u53F7\u914D\u7F6E\u548C\u4F1A\u8BDD\u6620\u5C04\u3002\u5176\u4ED6\u5FAE\u4FE1\u8D26\u53F7\u4E0D\u53D7\u5F71\u54CD\u3002",
  "ui.weixin.thisWechatAccountIsConnectedAnd": "\u8FD9\u4E2A\u5FAE\u4FE1\u8D26\u53F7\u5DF2\u7ECF\u7ED1\u5B9A\u5E76\u4FDD\u6301\u5728\u7EBF\u3002",
  "ui.weixin.verifying": "\u6B63\u5728\u9A8C\u8BC1\u2026",
  "ui.weixin.waitingForWechatScan": "\u7B49\u5F85\u5FAE\u4FE1\u626B\u7801",
  "ui.weixin.wechat": "\u5FAE\u4FE1",
  "ui.weixin.wechatBot": "\u5FAE\u4FE1\u673A\u5668\u4EBA",
  "ui.weixin.wechatConnectionCheckCompletedAndThe": "\u5FAE\u4FE1\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\uFF0C\u6D4B\u8BD5\u6D88\u606F\u5DF2\u53D1\u9001\u3002",
  "ui.weixin.wechatConnectionCheckCompletedButThe": "\u5FAE\u4FE1\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\uFF0C\u4F46\u6D4B\u8BD5\u6D88\u606F\u53D1\u9001\u5931\u8D25\u3002",
  "ui.weixin.wechatConnectionIsHealthy": "\u5FAE\u4FE1\u8FDE\u63A5\u6B63\u5E38",
  "ui.weixin.wechatConnectionIsNotReady": "\u5FAE\u4FE1\u8FDE\u63A5\u672A\u5C31\u7EEA",
  "ui.weixin.wechatDidNotReturnAValid": "\u5FAE\u4FE1\u626B\u7801\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u7ED1\u5B9A\u4EFB\u52A1",
  "ui.weixin.wechatDidNotReturnAValid2": "\u5FAE\u4FE1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u8D26\u53F7\u5217\u8868",
  "ui.weixin.wechatIsConnectedAndReadyFor": "\u5FAE\u4FE1\u5DF2\u7ED1\u5B9A\uFF0C\u53EF\u4EE5\u5F00\u59CB\u5411\u5DF2\u7ED1\u5B9A\u7684\u673A\u5668\u4EBA\u53D1\u6D88\u606F\u3002",
  "ui.weixin.wechatPairingCode": "\u5FAE\u4FE1\u914D\u5BF9\u7801",
  "ui.weixin.wechatQrCodeGeneratedScanIt": "\u5FAE\u4FE1\u4E8C\u7EF4\u7801\u5DF2\u751F\u6210\uFF0C\u8BF7\u4F7F\u7528\u624B\u673A\u5FAE\u4FE1\u626B\u63CF\u3002",
  "ui.weixin.wechatSettings": "\u5FAE\u4FE1\u8BBE\u7F6E",
  "ui.weixin.wechatSetupDidNotComplete": "\u5FAE\u4FE1\u7ED1\u5B9A\u6CA1\u6709\u5B8C\u6210",
  "ui.weixin.wechatSetupWasCancelled": "\u5DF2\u53D6\u6D88\u5FAE\u4FE1\u7ED1\u5B9A\u3002",
  "ui.whatsapp.connectWhatsappByQrCode": "\u626B\u7801\u63A5\u5165 WhatsApp \u673A\u5668\u4EBA",
  "ui.whatsapp.connectWhatsappByQrCode2": "\u626B\u7801\u7ED1\u5B9A WhatsApp \u673A\u5668\u4EBA",
  "ui.whatsapp.connectedWhatsappAccounts": "\u5DF2\u63A5\u5165\u7684 WhatsApp \u673A\u5668\u4EBA",
  "ui.whatsapp.connectionCheckCompletedButNoWhatsapp": "\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\uFF0C\u4F46\u5F53\u524D\u6CA1\u6709\u53EF\u7528\u7684 WhatsApp \u81EA\u804A\u76EE\u6807\u3002",
  "ui.whatsapp.creatingASecureLinkedDeviceSession": "\u6B63\u5728\u5EFA\u7ACB\u5B89\u5168\u7684\u5173\u8054\u8BBE\u5907\u4F1A\u8BDD\u3002",
  "ui.whatsapp.generateQrCode": "\u751F\u6210\u4E8C\u7EF4\u7801",
  "ui.whatsapp.generatingQrCode": "\u4E8C\u7EF4\u7801\u6B63\u5728\u751F\u6210\u2026",
  "ui.whatsapp.generatingWhatsappQrCode": "\u6B63\u5728\u751F\u6210 WhatsApp \u4E8C\u7EF4\u7801",
  "ui.whatsapp.linkingTheDeviceToDeepseekHarness": "\u5173\u8054\u8BBE\u5907\u6B63\u5728\u63A5\u5165 DeepSeek Harness\u3002",
  "ui.whatsapp.oneTimeQrCodeForLinking": "\u7528\u4E8E\u5173\u8054 WhatsApp \u8BBE\u5907\u7684\u4E00\u6B21\u6027\u4E8C\u7EF4\u7801",
  "ui.whatsapp.openWhatsappSettingsLinkedDevices": "\u6253\u5F00 WhatsApp \u2192 \u8BBE\u7F6E \u2192 \u5DF2\u5173\u8054\u8BBE\u5907",
  "ui.whatsapp.scanTheQrCodeWithWhatsapp": "\u4F7F\u7528\u624B\u673A WhatsApp \u626B\u63CF\u4E8C\u7EF4\u7801\u5373\u53EF\u63A5\u5165\u3002",
  "ui.whatsapp.scanWithWhatsappOnYourPhone": "\u7528\u624B\u673A WhatsApp \u626B\u63CF\u4E8C\u7EF4\u7801",
  "ui.whatsapp.scannedConnectingWhatsapp": "\u5DF2\u626B\u7801\uFF0C\u6B63\u5728\u8FDE\u63A5 WhatsApp",
  "ui.whatsapp.selectLinkADeviceAndScan": "\u70B9\u51FB\u201C\u5173\u8054\u8BBE\u5907\u201D\u5E76\u626B\u63CF\u5DE6\u4FA7\u4E8C\u7EF4\u7801",
  "ui.whatsapp.testMessageSentCheckTheWhatsapp": "\u6D4B\u8BD5\u6D88\u606F\u5DF2\u53D1\u9001\uFF0C\u8BF7\u5230 WhatsApp \u81EA\u804A\u4F1A\u8BDD\u4E2D\u786E\u8BA4\u3002",
  "ui.whatsapp.thisStopsTheMessageConnectionAnd": "\u8FD9\u4F1A\u505C\u6B62\u6D88\u606F\u8FDE\u63A5\uFF0C\u5E76\u5220\u9664\u672C\u673A\u4FDD\u5B58\u7684 WhatsApp \u5173\u8054\u8BBE\u5907\u548C\u4F1A\u8BDD\u6620\u5C04\u3002",
  "ui.whatsapp.waitingForWhatsappScan": "\u7B49\u5F85 WhatsApp \u626B\u7801",
  "ui.whatsapp.whatsappAccount": "WhatsApp\u8D26\u53F7",
  "ui.whatsapp.whatsappBot": "WhatsApp\u673A\u5668\u4EBA",
  "ui.whatsapp.whatsappDidNotReturnAValid": "WhatsApp \u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u626B\u7801\u4EFB\u52A1",
  "ui.whatsapp.whatsappDidNotReturnAValid2": "WhatsApp \u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u673A\u5668\u4EBA\u5217\u8868",
  "ui.whatsapp.whatsappDidNotReturnQrSetup": "WhatsApp \u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u626B\u7801\u8FDB\u5EA6",
  "ui.whatsapp.whatsappLinkedDeviceIsHealthy": "WhatsApp Web \u5173\u8054\u8BBE\u5907\u8FD0\u884C\u6B63\u5E38",
  "ui.workspaceDirectoryPicker.couldNotLoadTheFolderTry": "\u65E0\u6CD5\u8BFB\u53D6\u76EE\u5F55\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  "ui.workspaceDirectoryPicker.currentFolder": "\u5F53\u524D\u76EE\u5F55",
  "ui.workspaceDirectoryPicker.home": "\u4E3B\u76EE\u5F55",
  "ui.workspaceDirectoryPicker.loadingFolders": "\u6B63\u5728\u8BFB\u53D6\u76EE\u5F55\u2026",
  "ui.workspaceDirectoryPicker.preparingFolderPicker": "\u6B63\u5728\u51C6\u5907\u76EE\u5F55\u9009\u62E9\u5668\u2026",
  "ui.workspaceDirectoryPicker.retry": "\u91CD\u8BD5",
  "ui.workspaceDirectoryPicker.selectBotWorkspaceFolder": "\u9009\u62E9\u673A\u5668\u4EBA\u5DE5\u4F5C\u533A\u76EE\u5F55",
  "ui.workspaceDirectoryPicker.selectThisFolder": "\u9009\u62E9\u6B64\u76EE\u5F55",
  "ui.workspaceDirectoryPicker.showHiddenFolders": "\u663E\u793A\u9690\u85CF\u6587\u4EF6\u5939",
  "ui.workspaceDirectoryPicker.switching": "\u5207\u6362\u4E2D\u2026",
  "ui.workspaceDirectoryPicker.switchingClearsThisBotSPrevious": "\u5207\u6362\u540E\u4F1A\u6E05\u9664\u8FD9\u4E2A\u673A\u5668\u4EBA\u7684\u65E7\u4F1A\u8BDD\u6620\u5C04\u3002",
  "ui.workspaceDirectoryPicker.thisFolderHasNoSubfolders": "\u8FD9\u4E2A\u76EE\u5F55\u4E2D\u6CA1\u6709\u5B50\u6587\u4EF6\u5939\u3002",
  "ui.workspaceDirectoryPicker.thisFolderHasTooManySubfolders": "\u6B64\u76EE\u5F55\u7684\u5B50\u6587\u4EF6\u5939\u8FC7\u591A\uFF0C\u4EC5\u663E\u793A\u524D\u4E00\u90E8\u5206\u3002",
  "ui.workspaceEditor.chooseFolder": "\u9009\u62E9\u76EE\u5F55",
  "ui.workspaceEditor.couldNotUpdateTheWorkspaceTry": "\u5DE5\u4F5C\u533A\u4FEE\u6539\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  "ui.workspaceEditor.currentWorkspace": "\u5F53\u524D\u5DE5\u4F5C\u533A",
  "ui.workspaceEditor.notSet": "\u672A\u8BBE\u7F6E",
  "ui.common.operationFailed": "{channel}\u64CD\u4F5C\u5931\u8D25",
  "ui.common.operationFailedRetry": "{channel}\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",
  "ui.common.unrecognizedResponse": "{channel}\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6CD5\u8BC6\u522B\u7684\u54CD\u5E94",
  "ui.common.noBotList": "{channel}\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u673A\u5668\u4EBA\u5217\u8868",
  "ui.common.settings": "{channel}\u8BBE\u7F6E",
  "ui.common.missingRpc": "{channel}\u8BBE\u7F6E\u9875\u7F3A\u5C11 RPC \u8FDE\u63A5",
  "ui.common.runningNormally": "{channel}{connection}\u8FD0\u884C\u6B63\u5E38",
  "ui.common.connectionNotReady": "{channel}\u8FDE\u63A5\u5C1A\u672A\u5C31\u7EEA",
  "ui.common.botLabel": "{channel}\u673A\u5668\u4EBA",
  "ui.common.notConnected": "{channel}\u6CA1\u6709\u63A5\u5165\u5B8C\u6210",
  "ui.common.onlineCount": "{connected} / {configured} \u5728\u7EBF",
  "ui.common.botsOnline": "\u5DF2\u63A5\u5165 {configured} \u4E2A\u673A\u5668\u4EBA\uFF0C\u5176\u4E2D {connected} \u4E2A\u5728\u7EBF",
  "ui.common.removeConfirm": "\u4ECE DeepSeek Harness \u79FB\u9664\u201C{name}\u201D\uFF1F",
  "ui.common.removeAria": "\u79FB\u9664{name}",
  "ui.common.stillOffline": "{channel}\u4ECD\u672A\u8FDE\u63A5\uFF0C\u63D2\u4EF6\u4F1A\u7EE7\u7EED\u81EA\u52A8\u91CD\u8BD5\u3002",
  "ui.common.connectionCheckDone": "{channel}\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\u3002",
  "ui.common.statusRefreshFailed": "\u72B6\u6001\u5237\u65B0\u5931\u8D25\uFF1A{reason}",
  "ui.common.statusAutoRefreshFailed": "\u72B6\u6001\u81EA\u52A8\u5237\u65B0\u5931\u8D25\uFF1A{reason}",
  "ui.common.operationFailedReason": "\u64CD\u4F5C\u5931\u8D25\uFF1A{reason}",
  "ui.common.removalFailedReason": "\u79FB\u9664\u5931\u8D25\uFF1A{reason}",
  "ui.common.cannotReadStatus": "\u65E0\u6CD5\u8BFB\u53D6{channel}\u673A\u5668\u4EBA\u72B6\u6001",
  "ui.common.loadingStatus": "\u6B63\u5728\u8BFB\u53D6{channel}\u673A\u5668\u4EBA\u72B6\u6001\u2026",
  "ui.common.noBotsYet": "\u5C1A\u672A\u63A5\u5165{channel}\u673A\u5668\u4EBA",
  "ui.common.connectedBots": "\u5DF2\u63A5\u5165\u7684{channel}\u673A\u5668\u4EBA",
  "ui.common.connectWithToken": "\u4F7F\u7528 Bot Token \u63A5\u5165{channel}\u673A\u5668\u4EBA",
  "ui.common.manualConnect": "\u624B\u52A8\u63A5\u5165{channel}\u673A\u5668\u4EBA",
  "ui.common.removeWarning": "\u8FD9\u4F1A\u505C\u6B62\u6D88\u606F\u8FDE\u63A5\uFF0C\u5E76\u5220\u9664\u672C\u673A\u4FDD\u5B58\u7684 {credential}\u3001\u673A\u5668\u4EBA\u914D\u7F6E\u53CA\u4F1A\u8BDD\u6620\u5C04\u3002{platform}\u4E2D\u7684\u673A\u5668\u4EBA\u4E0D\u4F1A\u88AB\u81EA\u52A8\u5220\u9664\u3002",
  "ui.common.lastMessageFailed": "\u6700\u8FD1\u4E00\u6761\u6D88\u606F\u5904\u7406\u5931\u8D25\uFF1A{reason}",
  "ui.common.qrRemaining": "\u4E8C\u7EF4\u7801\u5269\u4F59 {remaining}",
  "ui.common.defaultBotName": "\u673A\u5668\u4EBA",
  "ui.feishu.removedNotice": "{name}\u5DF2\u4ECE\u6B64 DeepSeek Harness \u79FB\u9664\uFF1B\u98DE\u4E66\u5F00\u653E\u5E73\u53F0\u4E2D\u7684\u5E94\u7528\u672A\u88AB\u5220\u9664\u3002",
  "ui.feishu.reconnected": "{name}\u5DF2\u91CD\u65B0\u8FDE\u63A5\u3002",
  "ui.feishu.authFlow": "{name}\u7684\u98DE\u4E66\u6388\u6743\u6D41\u7A0B",
  "ui.feishu.removeFailed": "{name}\u79FB\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  "ui.feishu.connectionCheckDone": "{name}\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\u3002",
  "ui.feishu.repairQrReady": "{name}\u7684\u4FEE\u590D\u4E8C\u7EF4\u7801\u5DF2\u751F\u6210\uFF0C\u8BF7\u4F7F\u7528\u98DE\u4E66\u626B\u7801\u3002",
  "ui.feishu.groupQrReady": "{name}\u7684\u7FA4\u6D88\u606F\u6743\u9650\u4E8C\u7EF4\u7801\u5DF2\u751F\u6210\uFF0C\u8BF7\u4F7F\u7528\u98DE\u4E66\u786E\u8BA4\u3002",
  "ui.feishu.checkConnectionOf": "\u68C0\u67E5\u8FDE\u63A5{name}",
  "ui.feishu.retryConnectionOf": "\u91CD\u8BD5\u8FDE\u63A5{name}",
  "ui.feishu.groupPermissionGranted": "{name}\u5DF2\u5F00\u901A\u7FA4\u6D88\u606F\u6743\u9650\uFF0C\u5E76\u542F\u7528\u201C\u54CD\u5E94\u6240\u6709\u7FA4\u6D88\u606F\u201D\u3002",
  "ui.feishu.connectedReady": "{name}\u5DF2\u8FDE\u63A5\uFF0C\u53EF\u4EE5\u5728\u98DE\u4E66\u4E2D\u5F00\u59CB\u804A\u5929\u3002",
  "ui.feishu.cardButtonsRepaired": "{name}\u7684\u5361\u7247\u6309\u94AE\u5DF2\u4FEE\u590D\u3002",
  "ui.feishu.removeFromHarness": "\u4ECE DeepSeek Harness \u79FB\u9664{name}",
  "ui.feishu.repairCardButtons": "\u4FEE\u590D\u5361\u7247\u6309\u94AE",
  "ui.feishu.repairCardButtonsOf": "\u4FEE\u590D{name}\u7684\u5361\u7247\u6309\u94AE",
  "ui.feishu.repairingBot": "\u6B63\u5728\u4FEE\u590D\u300C{name}\u300D",
  "ui.feishu.grantingGroupPermission": "\u6B63\u5728\u4E3A\u300C{name}\u300D\u5F00\u901A\u7FA4\u6D88\u606F\u6743\u9650",
  "ui.feishu.repairQrAlt": "\u7528\u4E8E\u4FEE\u590D{name}\u5361\u7247\u6309\u94AE\u7684\u4E00\u6B21\u6027\u6388\u6743\u4E8C\u7EF4\u7801",
  "ui.feishu.groupQrAlt": "\u7528\u4E8E\u4E3A{name}\u5F00\u901A\u7FA4\u6D88\u606F\u6743\u9650\u7684\u4E00\u6B21\u6027\u6388\u6743\u4E8C\u7EF4\u7801",
  "ui.common.serviceRequestFailed": "{channel}\u670D\u52A1\u8BF7\u6C42\u5931\u8D25",
  "ui.common.connectionProblem": "{channel}\u8FDE\u63A5\u9047\u5230\u95EE\u9898",
  "ui.common.qrExpiredRegenerate": "\u4E8C\u7EF4\u7801\u5DF2\u8FC7\u671F\n\u8BF7\u91CD\u65B0\u751F\u6210",
  "ui.common.notBound": "{channel}\u6CA1\u6709\u7ED1\u5B9A\u5B8C\u6210",
  // --- Settings-page RPC validation --------------------------------------
  "rpc.workspaceRequired": "\u8BF7\u8F93\u5165\u5DE5\u4F5C\u533A\u7EDD\u5BF9\u8DEF\u5F84\u3002",
  "rpc.presetRequired": "\u8BF7\u9009\u62E9 Agent Preset\u3002",
  "rpc.groupResponseRequired": "\u8BF7\u9009\u62E9\u7FA4\u804A\u54CD\u5E94\u65B9\u5F0F\u3002",
  "rpc.operationFailed": "{channel}\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "rpc.invalidBotToken": "{channel} Bot Token \u65E0\u6548\uFF0C\u8BF7\u91CD\u65B0\u586B\u5199\u3002",
  "rpc.telegramBadRequest": "\u8BF7\u8F93\u5165\u6709\u6548\u7684 Telegram \u8BBF\u95EE\u6A21\u5F0F\u548C\u6570\u5B57 User ID\u3002",
  "rpc.slackInvalidBotToken": "Slack Bot Token \u65E0\u6548\uFF0C\u8BF7\u786E\u8BA4\u4F7F\u7528\u4EE5 xoxb- \u5F00\u5934\u7684\u4EE4\u724C\u3002",
  "rpc.slackInvalidAppToken": "Slack App Token \u65E0\u6548\uFF0C\u8BF7\u786E\u8BA4\u4F7F\u7528\u4EE5 xapp- \u5F00\u5934\u7684\u4EE4\u724C\u3002",
  "rpc.slackMissingScope": "Slack \u5E94\u7528\u6743\u9650\u4E0D\u5B8C\u6574\uFF0C\u8BF7\u91CD\u65B0\u5BFC\u5165 Manifest \u5E76\u5B89\u88C5\u5230\u5DE5\u4F5C\u533A\u3002",
  "rpc.officeInvalidDeviceToken": "AI Office Device Token \u65E0\u6548\u3002",
  "rpc.officeHookUnavailable": "AI Office Hook \u5C1A\u672A\u4E0A\u7EBF\u6216\u5730\u5740\u4E0D\u6B63\u786E\u3002",
  "rpc.officeOperationFailed": "AI Office \u8FDE\u63A5\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
  "rpc.feishuHealthy": "\u957F\u8FDE\u63A5\u8FD0\u884C\u6B63\u5E38",
  "rpc.feishuBotNotConnected": "\u673A\u5668\u4EBA\u5C1A\u672A\u8FDE\u63A5",
  "rpc.feishuNoBots": "\u5C1A\u672A\u63A5\u5165\u98DE\u4E66\u673A\u5668\u4EBA"
});

// src/i18n/index.mjs
var CATALOGUES = /* @__PURE__ */ new Map([
  ["en", EN],
  ["zh-CN", ZH_CN]
]);
var AVAILABLE_LOCALES = Object.freeze([...CATALOGUES.keys()]);
var LOCALE_NAMES = Object.freeze({
  en: "English",
  "zh-CN": "\u7B80\u4F53\u4E2D\u6587"
});
function reportIssue(issue) {
  const detail = issue.type === "missing-key" ? `missing i18n key "${issue.key}" for locale ${issue.locale}` : `missing i18n placeholder {${issue.placeholder}} in key "${issue.key}" for locale ${issue.locale}`;
  console.warn(`[dsh-im-x/i18n] ${detail}`);
}
var createTranslator = createTranslatorFactory(CATALOGUES, { onIssue: reportIssue });
var defaultTranslator = createTranslator(DEFAULT_LOCALE);

// plugin-src/client/i18n.js
var IM_LOCALE_NAMESPACE = "dsh-im-x";
var LOCALE_TAG_KEY = "ui.localeTag";
function settingsDictionary(locale) {
  const catalogue = CATALOGUES.get(locale);
  return Object.freeze(Object.fromEntries(
    Object.entries(catalogue).filter(([key, value]) => key.startsWith("ui.") && typeof value === "string")
  ));
}
var en = settingsDictionary("en");
var zh = settingsDictionary("zh-CN");
var current = createTranslator(DEFAULT_LOCALE);
function setImTranslator(next) {
  const hostTranslate = typeof next === "function" ? next : null;
  const tag = hostTranslate?.(LOCALE_TAG_KEY);
  current = createTranslator(AVAILABLE_LOCALES.includes(tag) ? tag : DEFAULT_LOCALE);
}
function t(key, params) {
  return current(key, params);
}
function h2(type, props, ...children) {
  return React2.createElement(type, props, ...children);
}

// plugin-src/client/agent-preset.js
var React3 = __toESM(require("react"), 1);
var SET_AGENT_PRESET_ENDPOINT = "bot.preset.set";
var PRESET_ID = /^[a-z0-9][a-z0-9-]*$/;
var EMPTY_AGENT_PRESET_CATALOG = Object.freeze({
  defaultId: "",
  items: Object.freeze([])
});
var AgentPresetCatalogContext = React3.createContext(EMPTY_AGENT_PRESET_CATALOG);
function normalizeAgentPresetId(value) {
  if (typeof value !== "string") return "";
  const id5 = value.trim();
  return PRESET_ID.test(id5) ? id5 : "";
}
function normalizeAgentPresetCatalog(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { defaultId: "", items: [] };
  }
  const items = [];
  const seen = /* @__PURE__ */ new Set();
  for (const entry of Array.isArray(value.items) ? value.items : []) {
    const id5 = typeof entry === "string" ? normalizeAgentPresetId(entry) : normalizeAgentPresetId(entry?.id);
    if (!id5 || seen.has(id5)) continue;
    seen.add(id5);
    const label = typeof entry?.label === "string" && entry.label.trim() ? entry.label.trim().slice(0, 128) : typeof entry?.name === "string" && entry.name.trim() ? entry.name.trim().slice(0, 128) : id5;
    items.push({ id: id5, label });
  }
  return {
    defaultId: normalizeAgentPresetId(value.defaultId),
    items
  };
}
function AgentPresetEditor({ agentPreset = "", disabled = false, onSave }) {
  const catalog = React3.useContext(AgentPresetCatalogContext) ?? EMPTY_AGENT_PRESET_CATALOG;
  const helpId = React3.useId();
  const current2 = normalizeAgentPresetId(agentPreset);
  const [saving, setSaving] = React3.useState(false);
  const [error, setError] = React3.useState(null);
  const items = [];
  const seen = /* @__PURE__ */ new Set();
  for (const item of Array.isArray(catalog.items) ? catalog.items : []) {
    if (!item?.id || seen.has(item.id)) continue;
    seen.add(item.id);
    items.push(item);
  }
  const currentUnavailable = Boolean(current2 && !seen.has(current2));
  if (currentUnavailable) items.push({ id: current2, label: current2, unavailable: true });
  const inheritLabel = t("ui.agentPreset.followTheHostDefault");
  const change = async (event) => {
    const next = event.target.value;
    if (next === current2 || saving || disabled) return;
    setSaving(true);
    setError(null);
    try {
      await onSave?.(next || null);
    } catch (cause) {
      setError(cause?.message ?? t("ui.agentPreset.couldNotUpdateTheAgentPreset"));
    } finally {
      setSaving(false);
    }
  };
  return h2(
    "div",
    { className: "dim-preset" },
    h2(
      "div",
      { className: "dim-presetHeader" },
      h2(
        "span",
        { className: "dim-presetTitle" },
        h2("span", null, "Agent Preset"),
        h2(
          "span",
          { className: "dim-presetHelp" },
          h2("button", {
            type: "button",
            className: "dim-presetHelpButton",
            "aria-label": t("ui.agentPreset.viewAgentPresetHelp"),
            "aria-describedby": helpId
          }, h2("span", { "aria-hidden": "true" }, "?")),
          h2("span", {
            id: helpId,
            className: "dim-presetTooltip",
            role: "tooltip"
          }, t("ui.agentPreset.thisAffectsOnlyNewSessionsIf"))
        )
      ),
      saving ? h2("span", { className: "dim-presetStatus" }, t("ui.agentPreset.saving")) : null
    ),
    React3.createElement(
      "select",
      {
        className: "dim-presetSelect",
        value: current2,
        disabled: disabled || saving,
        "aria-label": "Agent Preset",
        onChange: (event) => {
          void change(event);
        }
      },
      h2("option", { value: "" }, inheritLabel),
      ...items.map((item) => h2(
        "option",
        { key: item.id, value: item.id },
        item.unavailable ? [item.id, t("ui.agentPreset.unavailable")] : item.label && item.label !== item.id ? `${item.label}\uFF08${item.id}\uFF09` : item.id
      ))
    ),
    error || currentUnavailable ? h2(
      "p",
      { className: "dim-presetError", role: error ? "alert" : "status" },
      error ?? t("ui.agentPreset.theCurrentAgentPresetIsUnavailable")
    ) : null
  );
}

// plugin-src/client/channels/dingtalk/api.js
var CHANNEL_LABEL = "DingTalk";
var DINGTALK_RPC_CHANNEL = "/dingtalk";
var DINGTALK_ENDPOINTS = Object.freeze({
  status: "connection.status",
  beginProvisioning: "provision.begin",
  pollProvisioning: "provision.poll",
  cancelProvisioning: "provision.cancel",
  bindCredentials: "bot.bind-credentials",
  reconnectBot: "bot.reconnect",
  deleteBot: "bot.delete",
  setWorkspace: "bot.workspace.set",
  setAgentPreset: SET_AGENT_PRESET_ENDPOINT
});
var ACCOUNT_STATES = /* @__PURE__ */ new Set(["connected", "connecting", "offline", "error"]);
var SNAPSHOT_STATES = /* @__PURE__ */ new Set(["disconnected", "offline", "provisioning", "connected", "degraded"]);
var PROVISION_STATES = /* @__PURE__ */ new Set([
  "starting",
  "pending",
  "scanned",
  "authorizing",
  "creating",
  "connecting",
  "connected",
  "expired",
  "failed",
  "cancelled"
]);
var HEALTH_STATES = /* @__PURE__ */ new Set(["healthy", "checking", "degraded", "offline"]);
var FORBIDDEN_ERROR_FIELDS = /(client[_-]?secret|secret[_-]?ref|device[_-]?code|app[_-]?secret|access[_-]?token|token)/i;
var QR_DATA_URL = /^data:image\/(?:png|webp);base64,[a-z\d+/]+={0,2}$/i;
var MAX_QR_SOURCE_LENGTH = 2 * 1024 * 1024;
function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function optionalString(value, maxLength = 240) {
  if (typeof value !== "string") return void 0;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, maxLength) : void 0;
}
function opaqueId(value) {
  const id5 = optionalString(value, 128);
  return id5 && /^[a-z\d_-]+$/i.test(id5) ? id5 : void 0;
}
function timestamp(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const parsed = Date.parse(value);
    return Number.isNaN(parsed) ? void 0 : parsed;
  }
  return void 0;
}
function nonNegativeInteger(value) {
  const number = Number(value);
  return Number.isSafeInteger(number) && number >= 0 ? number : 0;
}
function clamp(value, min, max, fallback) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.min(max, Math.max(min, number)) : fallback;
}
function safeErrorCode(value, fallback) {
  const code = optionalString(value, 80);
  return code && /^[a-z][a-z\d_.:-]*$/i.test(code) && !FORBIDDEN_ERROR_FIELDS.test(code) ? code : fallback;
}
function sanitizeMessage(value, fallback) {
  const message = optionalString(value, 480) ?? fallback;
  if (FORBIDDEN_ERROR_FIELDS.test(message)) return fallback;
  return message.replace(/([=:]\s*)[^\s,;，。]+/g, "$1\u2022\u2022\u2022\u2022\u2022\u2022").slice(0, 240);
}
function normalizeError(value, fallbackCode, fallbackMessage) {
  if (!isRecord(value)) return void 0;
  return {
    code: safeErrorCode(value.code, fallbackCode),
    message: sanitizeMessage(value.message, fallbackMessage)
  };
}
function normalizeTestMessage(value) {
  if (!isRecord(value)) return null;
  if (value.sent === true) return { sent: true };
  if (value.sent !== false) return null;
  const code = value.code === "test-target-unavailable" ? "test-target-unavailable" : "test-message-failed";
  return { sent: false, code };
}
function unwrapRpcResult(result) {
  if (!isRecord(result) || typeof result.ok !== "boolean") {
    throw new Error(t("ui.common.unrecognizedResponse", { channel: CHANNEL_LABEL }));
  }
  if (!result.ok) {
    const error = new Error(sanitizeMessage(result.error?.message, t("ui.common.operationFailed", { channel: CHANNEL_LABEL })));
    error.code = safeErrorCode(result.error?.code, "DINGTALK_RPC_ERROR");
    throw error;
  }
  return result.value;
}
function safeQrSource(value) {
  if (typeof value !== "string" || value.length > MAX_QR_SOURCE_LENGTH) return void 0;
  return QR_DATA_URL.test(value) ? value : void 0;
}
function normalizeProvisioning(value, now = Date.now()) {
  const source = isRecord(value?.provisioning) ? value.provisioning : value;
  if (!isRecord(source)) throw new Error(t("ui.dingtalk.dingtalkDidNotReturnQrSetup"));
  const attemptId = opaqueId(source.attemptId);
  if (!attemptId) throw new Error(t("ui.dingtalk.dingtalkDidNotReturnAValid"));
  const reportedStatus = optionalString(source.status, 32) ?? optionalString(source.state, 32);
  const status = PROVISION_STATES.has(reportedStatus) ? reportedStatus : "failed";
  const expiresAt = timestamp(source.expiresAt) ?? now + clamp(source.expiresIn, 1, 2 * 60 * 60, 10 * 60) * 1e3;
  const result = {
    attemptId,
    status,
    expiresAt,
    pollIntervalMs: clamp(source.pollIntervalMs, 1e3, 1e4, 3e3)
  };
  const qrCodeDataUrl = safeQrSource(source.qrCodeDataUrl);
  if (qrCodeDataUrl) result.qrCodeDataUrl = qrCodeDataUrl;
  if (opaqueId(source.botId)) result.botId = opaqueId(source.botId);
  if (source.alreadyConnected === true) result.alreadyConnected = true;
  const error = normalizeError(
    source.error,
    "DINGTALK_PROVISION_FAILED",
    t("ui.common.notConnected", { channel: CHANNEL_LABEL })
  );
  if (error) result.error = error;
  return result;
}
function normalizeBot(value) {
  if (!isRecord(value)) return void 0;
  const botId = opaqueId(value.botId);
  if (!botId) return void 0;
  const bot = isRecord(value.bot) ? value.bot : {};
  const connected = value.connected === true;
  const reportedState = ACCOUNT_STATES.has(value.state) ? value.state : "offline";
  const state = connected ? "connected" : reportedState === "connected" ? "connecting" : reportedState;
  const health = isRecord(value.health) ? value.health : {};
  const stats = isRecord(value.stats) ? value.stats : {};
  return {
    botId,
    state,
    connected,
    configured: value.configured !== false,
    workspace: optionalString(value.workspace, 4096) ?? "",
    agentPreset: normalizeAgentPresetId(value.agentPreset),
    bot: {
      name: optionalString(bot.name, 100) ?? t("ui.dingtalk.dingtalkBot"),
      clientIdMasked: optionalString(bot.clientIdMasked, 140) ?? t("ui.dingtalk.storedSecurely")
    },
    health: {
      status: HEALTH_STATES.has(health.status) ? health.status : connected ? "healthy" : "offline",
      summary: optionalString(health.summary, 200) ?? (connected ? t("ui.dingtalk.dingtalkStreamConnectionIsHealthy") : t("ui.common.connectionNotReady", { channel: CHANNEL_LABEL })),
      lastCheckedAt: timestamp(health.lastCheckedAt),
      lastConnectedAt: timestamp(health.lastConnectedAt)
    },
    stats: {
      messagesReceived: nonNegativeInteger(stats.messagesReceived),
      messagesReplied: nonNegativeInteger(stats.messagesReplied)
    },
    error: normalizeError(value.error, "DINGTALK_ACCOUNT_ERROR", t("ui.common.connectionNotReady", { channel: CHANNEL_LABEL })) ?? null
  };
}
function normalizeSnapshot(value) {
  const source = isRecord(value?.snapshot) ? value.snapshot : value;
  if (!isRecord(source) || !Array.isArray(source.bots)) {
    throw new Error(t("ui.dingtalk.dingtalkDidNotReturnAValid2"));
  }
  const seen = /* @__PURE__ */ new Set();
  const bots = source.bots.map(normalizeBot).filter((bot) => {
    if (!bot || seen.has(bot.botId)) return false;
    seen.add(bot.botId);
    return true;
  });
  return {
    schemaVersion: Number.isSafeInteger(source.schemaVersion) ? source.schemaVersion : 1,
    revision: nonNegativeInteger(source.revision),
    state: SNAPSHOT_STATES.has(source.state) ? source.state : "offline",
    bots,
    totals: {
      configured: bots.length,
      connected: bots.filter((bot) => bot.connected).length
    },
    provisioning: source.provisioning ? normalizeProvisioning(source.provisioning) : null,
    testMessage: normalizeTestMessage(source.testMessage),
    agentPresetCatalog: normalizeAgentPresetCatalog(source.agentPresetCatalog)
  };
}
function connectionTestFeedback(result) {
  if (result?.sent === true) return t("ui.dingtalk.dingtalkConnectionCheckCompletedAndThe");
  if (result?.code === "test-target-unavailable") {
    return t("ui.dingtalk.connectionCheckCompletedTheBotHas");
  }
  return result ? t("ui.dingtalk.dingtalkConnectionCheckCompletedButThe") : null;
}
function presentError(error) {
  return {
    code: safeErrorCode(error?.code, "DINGTALK_ERROR"),
    message: sanitizeMessage(error?.message, t("ui.common.operationFailedRetry", { channel: CHANNEL_LABEL }))
  };
}
function formatRemaining(milliseconds) {
  const seconds = Math.max(0, Math.ceil(Number(milliseconds) / 1e3) || 0);
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}

// plugin-src/client/channels/dingtalk/index.js
var React9 = __toESM(require("react"), 1);

// plugin-src/client/credential-binding.js
var React4 = __toESM(require("react"), 1);
function ActionIcon({ children }) {
  return h2("svg", {
    className: "dim-actionIcon",
    width: 15,
    height: 15,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false"
  }, children);
}
function QrActionIcon() {
  return h2(
    ActionIcon,
    null,
    h2("path", {
      d: "M2.5 2.5h5v5h-5v-5Zm10 0h5v5h-5v-5Zm-10 10h5v5h-5v-5Z",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }),
    h2("path", {
      d: "M11.5 11.5h2v2h-2v-2Zm4 0h2v3h-2v-3Zm-4 4h3v2h-3v-2Zm5 1h1v1h-1v-1Z",
      fill: "currentColor"
    })
  );
}
function CredentialActionIcon() {
  return h2(
    ActionIcon,
    null,
    h2("circle", {
      cx: "6.25",
      cy: "10",
      r: "3.5",
      stroke: "currentColor",
      strokeWidth: "1.6"
    }),
    h2("path", {
      d: "M9.75 10h7.75m-2.5 0v2m-2.5-2v2",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  );
}
function CredentialBindingPanel({
  channel: channel4,
  identityLabel,
  identityPlaceholder,
  secretLabel,
  secretPlaceholder,
  busy = false,
  error = null,
  onSubmit,
  onCancel
}) {
  const [identity, setIdentity] = React4.useState("");
  const [secret, setSecret] = React4.useState("");
  const headingId = React4.useId();
  const hasIdentity = Boolean(identityLabel);
  const submit = (event) => {
    event.preventDefault();
    const normalizedIdentity = identity.trim();
    const normalizedSecret = secret.trim();
    if (hasIdentity && !normalizedIdentity || !normalizedSecret || busy) return;
    void onSubmit?.({ identity: normalizedIdentity, secret: normalizedSecret });
  };
  return h2(
    "section",
    {
      className: "ddt-card dim-surfaceCard dim-credentialPanel",
      "aria-labelledby": headingId
    },
    h2("h3", { id: headingId, className: "dim-credentialTitle" }, t("ui.common.manualConnect", { channel: channel4 })),
    h2(
      "form",
      {
        className: `dim-credentialForm${hasIdentity ? "" : " dim-credentialFormSingle"}`,
        onSubmit: submit
      },
      hasIdentity ? h2(
        "label",
        { className: "dim-credentialField" },
        h2("span", null, identityLabel),
        h2("input", {
          value: identity,
          onChange: (event) => setIdentity(event.target.value),
          placeholder: identityPlaceholder,
          maxLength: 512,
          autoCapitalize: "none",
          autoCorrect: "off",
          spellCheck: false,
          autoComplete: "off",
          disabled: busy,
          required: true
        })
      ) : null,
      h2(
        "label",
        { className: "dim-credentialField" },
        h2("span", null, secretLabel),
        h2("input", {
          type: "password",
          value: secret,
          onChange: (event) => setSecret(event.target.value),
          placeholder: secretPlaceholder,
          maxLength: 1024,
          autoCapitalize: "none",
          autoCorrect: "off",
          spellCheck: false,
          autoComplete: "new-password",
          disabled: busy,
          required: true
        })
      ),
      error ? h2("p", { className: "dim-credentialError", role: "alert" }, error.message ?? String(error)) : null,
      h2(
        "div",
        { className: "ddt-actions dim-viewActions dim-credentialActions" },
        h2("button", {
          type: "submit",
          className: "ddt-button",
          "data-kind": "primary",
          disabled: busy || hasIdentity && !identity.trim() || !secret.trim()
        }, busy ? t("ui.credentialBinding.connecting") : t("ui.credentialBinding.connect")),
        h2("button", {
          type: "button",
          className: "ddt-button",
          onClick: onCancel,
          disabled: busy
        }, t("ui.dingtalk.cancel"))
      )
    )
  );
}

// plugin-src/client/workspace-editor.js
var React6 = __toESM(require("react"), 1);

// plugin-src/client/workspace-directory-picker.js
var React5 = __toESM(require("react"), 1);
var import_react_dom = require("react-dom");
function pickerErrorCode(error) {
  return error?.rpcError?.code ?? error?.code;
}
function pickerErrorDetails(error) {
  return error?.rpcError?.details ?? error?.details;
}
function pickerErrorMessage(error) {
  return error?.rpcError?.message ?? error?.message ?? t("ui.workspaceDirectoryPicker.couldNotLoadTheFolderTry");
}
function FolderIcon() {
  return React5.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.8,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true"
    },
    React5.createElement("path", { d: "M3.5 7.25A2.25 2.25 0 0 1 5.75 5h4.1l1.8 2h6.6a2.25 2.25 0 0 1 2.25 2.25v7A2.75 2.75 0 0 1 17.75 19h-12A2.25 2.25 0 0 1 3.5 16.75v-9.5Z" })
  );
}
function ChevronIcon() {
  return React5.createElement("svg", {
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, React5.createElement("path", { d: "m7.5 4.5 5 5.5-5 5.5" }));
}
function displayCrumbs(listing) {
  const homeIndex = listing.crumbs.findIndex((crumb) => crumb.path === listing.home);
  if (homeIndex < 0) return listing.crumbs;
  return listing.crumbs.slice(homeIndex);
}
function WorkspaceDirectoryPicker({
  open,
  startPath,
  picker,
  busy = false,
  saveError = null,
  onPicked,
  onCancel
}) {
  const [listing, setListing] = React5.useState(null);
  const [loading, setLoading] = React5.useState(false);
  const [error, setError] = React5.useState(null);
  const [showHidden, setShowHidden] = React5.useState(false);
  const [retryKey, setRetryKey] = React5.useState(0);
  const requestRef = React5.useRef(0);
  const controllerRef = React5.useRef(null);
  const dialogRef = React5.useRef(null);
  const bodyRef = React5.useRef(null);
  const titleId = React5.useId();
  const noticeId = React5.useId();
  const initialPathRef = React5.useRef(startPath);
  const onPickedRef = React5.useRef(onPicked);
  const onCancelRef = React5.useRef(onCancel);
  const busyRef = React5.useRef(busy);
  onPickedRef.current = onPicked;
  onCancelRef.current = onCancel;
  busyRef.current = busy;
  const loadDirectory = React5.useCallback(async (path, { reportError = true } = {}) => {
    const request = requestRef.current + 1;
    requestRef.current = request;
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;
    setLoading(true);
    if (reportError) setError(null);
    try {
      const next = await picker.listDirectory(path, controller.signal);
      if (request !== requestRef.current || controller.signal.aborted) return { aborted: true };
      if (bodyRef.current) bodyRef.current.scrollTop = 0;
      setListing(next);
      setError(null);
      return { value: next };
    } catch (cause) {
      if (request !== requestRef.current || controller.signal.aborted) return { aborted: true };
      if (reportError) setError(pickerErrorMessage(cause));
      return { error: cause };
    } finally {
      if (request === requestRef.current) setLoading(false);
    }
  }, [picker]);
  React5.useEffect(() => {
    if (!open) return void 0;
    let active = true;
    setListing(null);
    setError(null);
    setShowHidden(false);
    dialogRef.current?.focus?.();
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && !busyRef.current) onCancelRef.current?.();
    };
    if (typeof document !== "undefined") document.addEventListener("keydown", handleKeyDown);
    const start = async () => {
      const initialPath = initialPathRef.current;
      const initial = await loadDirectory(initialPath || void 0, { reportError: false });
      if (!active || initial.aborted || initial.value) return;
      const code = pickerErrorCode(initial.error);
      const details = pickerErrorDetails(initial.error);
      if (code === "directory-picker-unavailable" && details?.capability === "native" && typeof picker.pickDirectory === "function") {
        setLoading(true);
        try {
          const selected = await picker.pickDirectory();
          if (!active) return;
          if (selected !== null) await onPickedRef.current?.(selected);
          else onCancelRef.current?.();
        } catch (cause) {
          if (active) setError(pickerErrorMessage(cause));
        } finally {
          if (active) setLoading(false);
        }
        return;
      }
      if (initialPath && code === "directory-unreadable") {
        const home = await loadDirectory(void 0, { reportError: false });
        if (!active || home.aborted || home.value) return;
        setError(pickerErrorMessage(home.error));
        return;
      }
      setError(pickerErrorMessage(initial.error));
    };
    void start();
    return () => {
      active = false;
      if (typeof document !== "undefined") document.removeEventListener("keydown", handleKeyDown);
      requestRef.current += 1;
      controllerRef.current?.abort();
    };
  }, [loadDirectory, open, picker, retryKey]);
  if (!open) return null;
  const entries = (listing?.entries ?? []).filter((entry) => showHidden || !entry.hidden);
  const crumbs = listing ? displayCrumbs(listing) : [];
  const presentedError = saveError ?? error;
  const content = h2(
    "div",
    {
      className: "dim-directoryPickerBackdrop",
      onMouseDown: (event) => {
        if (event.target === event.currentTarget && !busy) onCancel();
      }
    },
    h2(
      "section",
      {
        ref: dialogRef,
        className: "dim-directoryPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": titleId,
        "aria-describedby": noticeId,
        tabIndex: -1
      },
      h2(
        "header",
        { className: "dim-directoryPickerHeader" },
        h2("h3", { id: titleId }, t("ui.workspaceDirectoryPicker.selectBotWorkspaceFolder")),
        listing ? h2(
          "nav",
          { className: "dim-directoryCrumbs", "aria-label": t("ui.workspaceDirectoryPicker.currentFolder") },
          crumbs.map((crumb, index) => h2(
            React5.Fragment,
            { key: crumb.path },
            index > 0 ? h2("span", { className: "dim-directoryCrumbSeparator", "aria-hidden": "true" }, "\u203A") : null,
            React5.createElement("button", {
              type: "button",
              title: crumb.path,
              disabled: loading || busy,
              "aria-current": index === crumbs.length - 1 ? "page" : void 0,
              onClick: () => void loadDirectory(crumb.path)
            }, crumb.path === listing.home ? h2("span", null, t("ui.workspaceDirectoryPicker.home")) : crumb.name || crumb.path)
          ))
        ) : h2("p", null, t("ui.workspaceDirectoryPicker.preparingFolderPicker"))
      ),
      h2(
        "div",
        { ref: bodyRef, className: "dim-directoryPickerBody", "aria-busy": loading },
        loading && !listing ? h2(
          "div",
          { className: "dim-directoryPickerState" },
          h2("span", { className: "dim-directoryPickerSpinner", "aria-hidden": "true" }),
          h2("p", null, t("ui.workspaceDirectoryPicker.loadingFolders"))
        ) : listing ? entries.length > 0 ? h2("ul", { className: "dim-directoryList" }, entries.map((entry) => h2(
          "li",
          { key: entry.path },
          React5.createElement(
            "button",
            {
              type: "button",
              title: entry.path,
              disabled: loading || busy,
              onClick: () => void loadDirectory(entry.path)
            },
            h2("span", { className: "dim-directoryFolder" }, h2(FolderIcon)),
            React5.createElement("span", { className: "dim-directoryName" }, entry.name),
            h2("span", { className: "dim-directoryChevron" }, h2(ChevronIcon))
          )
        ))) : h2(
          "div",
          { className: "dim-directoryPickerState" },
          h2("p", null, t("ui.workspaceDirectoryPicker.thisFolderHasNoSubfolders"))
        ) : null,
        listing?.truncated ? h2("p", { className: "dim-directoryPickerTruncated" }, t("ui.workspaceDirectoryPicker.thisFolderHasTooManySubfolders")) : null,
        presentedError ? h2(
          "div",
          { className: "dim-directoryPickerError", role: "alert" },
          h2("span", null, presentedError),
          !listing && !busy ? h2("button", {
            type: "button",
            onClick: () => setRetryKey((value) => value + 1)
          }, t("ui.workspaceDirectoryPicker.retry")) : null
        ) : null
      ),
      h2(
        "footer",
        { className: "dim-directoryPickerFooter" },
        h2(
          "button",
          {
            type: "button",
            className: "dim-directoryHidden",
            "aria-pressed": showHidden,
            onClick: () => setShowHidden((value) => !value),
            disabled: busy || !listing
          },
          h2("span", { className: "dim-directoryHiddenBox", "aria-hidden": "true" }),
          h2("span", null, t("ui.workspaceDirectoryPicker.showHiddenFolders"))
        ),
        h2("p", { id: noticeId, className: "dim-directoryPickerNotice" }, t("ui.workspaceDirectoryPicker.switchingClearsThisBotSPrevious")),
        h2(
          "div",
          { className: "dim-directoryPickerActions" },
          h2("button", { type: "button", onClick: onCancel, disabled: busy }, t("ui.dingtalk.cancel")),
          h2("button", {
            type: "button",
            className: "dim-directoryPickerPrimary",
            disabled: busy || loading || !listing,
            onClick: () => listing && void onPicked(listing.path)
          }, busy ? t("ui.workspaceDirectoryPicker.switching") : t("ui.workspaceDirectoryPicker.selectThisFolder"))
        )
      )
    )
  );
  return typeof document === "undefined" ? content : (0, import_react_dom.createPortal)(content, document.body);
}

// plugin-src/client/workspace-editor.js
var WorkspaceDirectoryPickerContext = React6.createContext(null);
function WorkspaceEditor({ workspace, directoryPicker, disabled = false, onSave }) {
  const sharedDirectoryPicker = React6.useContext(WorkspaceDirectoryPickerContext);
  const activeDirectoryPicker = directoryPicker ?? sharedDirectoryPicker;
  const [open, setOpen] = React6.useState(false);
  const [saving, setSaving] = React6.useState(false);
  const [error, setError] = React6.useState(null);
  const editButtonRef = React6.useRef(null);
  const savingRef = React6.useRef(false);
  const close = React6.useCallback(() => {
    setOpen(false);
    setError(null);
    queueMicrotask(() => editButtonRef.current?.focus?.());
  }, []);
  const pick = React6.useCallback(async (value) => {
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
      setError(cause?.message ?? t("ui.workspaceEditor.couldNotUpdateTheWorkspaceTry"));
    } finally {
      savingRef.current = false;
      setSaving(false);
    }
  }, [close, disabled, onSave, workspace]);
  return h2(
    "div",
    { className: "dim-workspace" },
    h2(
      "div",
      { className: "dim-workspaceHeader" },
      h2("span", null, t("ui.workspaceEditor.currentWorkspace")),
      h2("button", {
        type: "button",
        ref: editButtonRef,
        className: "dim-workspaceEdit",
        onClick: () => {
          setOpen(true);
          setError(null);
        },
        disabled: disabled || !activeDirectoryPicker
      }, t("ui.workspaceEditor.chooseFolder"))
    ),
    workspace ? React6.createElement("code", {
      className: "dim-workspacePath",
      title: workspace
    }, workspace) : h2("code", { className: "dim-workspacePath" }, t("ui.workspaceEditor.notSet")),
    open ? h2(WorkspaceDirectoryPicker, {
      open,
      startPath: workspace,
      picker: activeDirectoryPicker,
      busy: saving || disabled,
      saveError: error,
      onPicked: pick,
      onCancel: close
    }) : null
  );
}

// plugin-src/client/workspace-snapshot-fence.js
var React7 = __toESM(require("react"), 1);
function useWorkspaceSnapshotFence() {
  const state = React7.useRef({ version: 0, pendingMutations: 0 });
  return React7.useMemo(() => Object.freeze({
    beginStatus() {
      return state.current.pendingMutations === 0 ? state.current.version : null;
    },
    canCommitStatus(version) {
      return version !== null && state.current.pendingMutations === 0 && state.current.version === version;
    },
    beginMutation() {
      state.current.pendingMutations += 1;
      state.current.version += 1;
      return state.current.version;
    },
    canCommitMutation(version) {
      return state.current.version === version;
    },
    endMutation() {
      state.current.pendingMutations = Math.max(0, state.current.pendingMutations - 1);
      return state.current.pendingMutations === 0;
    }
  }), []);
}

// plugin-src/client/channel-card-meta.js
var React8 = __toESM(require("react"), 1);
function ChannelListHeading({ className = "", id: id5, title, connectionLabel }) {
  const helpId = React8.useId();
  return h2(
    "div",
    { className: `${className} dim-listHeading`.trim() },
    h2(
      "div",
      { className: "dim-listTitle" },
      h2("h3", id5 ? { id: id5 } : null, title),
      h2(
        "span",
        { className: "dim-channelHelp" },
        h2("button", {
          type: "button",
          className: "dim-channelHelpButton",
          "aria-label": t("ui.channelCardMeta.viewMessageChannelDetails"),
          "aria-describedby": helpId
        }, h2("span", { "aria-hidden": "true" }, "?")),
        h2(
          "span",
          {
            id: helpId,
            className: "dim-channelTooltip",
            role: "tooltip"
          },
          h2("span", null, t("ui.channelCardMeta.messageChannel")),
          h2("strong", null, connectionLabel)
        )
      )
    )
  );
}
function BotStatusMeta({
  className = "",
  dotClassName = "",
  tone,
  stateLabel: stateLabel2,
  lastCheckedAt,
  formatCheckedTime: formatCheckedTime2,
  healthState
}) {
  return h2(
    "div",
    { className: "dim-botHealthGroup" },
    h2(
      "div",
      {
        className: `${className} dim-botHealth`.trim(),
        ...healthState ? { "data-health": healthState } : {}
      },
      h2("span", {
        className: `${dotClassName} dim-healthDot`.trim(),
        "data-tone": tone
      }),
      h2("span", null, stateLabel2)
    ),
    h2(
      "div",
      { className: "dim-lastChecked" },
      h2("span", null, t("ui.channelCardMeta.lastChecked")),
      h2("span", null, formatCheckedTime2(lastCheckedAt))
    )
  );
}

// plugin-src/client/channels/dingtalk/styles.js
var DINGTALK_STYLE_ID = "dsh-im-x-dingtalk-settings";
var CSS = String.raw`
.ddt-page {
  --ddt-accent: #1677ff;
  --ddt-accent-deep: #0958d9;
  --ddt-accent-wash: #eaf3ff;
  --ddt-success: var(--dsw-alias-state-success-primary, #20a162);
  --ddt-warning: var(--dsw-alias-state-warn-primary, #d97706);
  --ddt-error: var(--dsw-alias-state-error-primary, #d54941);
  width: 100%;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 2px 0 28px;
  container-type: inline-size;
  color: var(--dsw-alias-label-primary, #1f2329);
  box-sizing: border-box;
}
.ddt-page *, .ddt-page *::before, .ddt-page *::after { box-sizing: border-box; }
.ddt-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; }
.ddt-headingCopy { min-width: 0; }
.ddt-heading h2, .ddt-heading p, .ddt-card h3, .ddt-card h4, .ddt-card p { margin: 0; }
.ddt-eyebrow { margin-bottom: 3px; color: var(--dsw-alias-label-tertiary, #8f959e); font-size: 12px; font-weight: 650; letter-spacing: .08em; text-transform: uppercase; }
.ddt-heading h2 { font-size: 20px; line-height: 28px; font-weight: 680; }
.ddt-heading p { margin-top: 5px; color: var(--dsw-alias-label-secondary, #646a73); font-size: 13px; line-height: 20px; white-space: nowrap; }
.ddt-tools, .ddt-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 10px; }
.ddt-tools { width: 100%; justify-content: space-between; flex-wrap: nowrap; }
.ddt-badge { min-height: 30px; display: inline-flex; align-items: center; gap: 7px; padding: 0 11px; border-radius: 999px; color: var(--dsw-alias-label-secondary, #646a73); background: var(--dsw-alias-bg-module-platform, #f2f3f5); font-size: 12px; white-space: nowrap; }
.ddt-dot { width: 8px; height: 8px; flex: none; border-radius: 50%; background: #aeb3bb; }
.ddt-dot[data-tone="success"] { background: var(--ddt-success); box-shadow: 0 0 0 3px color-mix(in srgb, var(--ddt-success) 14%, transparent); }
.ddt-dot[data-tone="warning"] { background: var(--ddt-warning); }
.ddt-dot[data-tone="error"] { background: var(--ddt-error); }
.ddt-button { min-height: 34px; display: inline-flex; align-items: center; justify-content: center; gap: 7px; padding: 0 13px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 8px; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-bg-layer-1, #fff); font: inherit; font-size: 13px; font-weight: 560; text-decoration: none; cursor: pointer; transition: border-color .15s ease, background .15s ease, transform .15s ease; }
.ddt-button:hover:not(:disabled) { border-color: #aeb3bb; background: var(--dsw-alias-interactive-bg-hover, #f7f8fa); }
.ddt-button:active:not(:disabled) { transform: translateY(1px); }
.ddt-button:focus-visible { outline: 2px solid color-mix(in srgb, var(--ddt-accent) 70%, white); outline-offset: 2px; }
.ddt-button:disabled { cursor: not-allowed; opacity: .55; }
.ddt-button[data-kind="primary"] { color: #fff; border-color: var(--ddt-accent); background: var(--ddt-accent); }
.ddt-button[data-kind="primary"]:hover:not(:disabled) { border-color: var(--ddt-accent-deep); background: var(--ddt-accent-deep); }
.ddt-button[data-kind="danger"] { color: var(--ddt-error); }
.ddt-button[data-kind="quiet"] { min-height: 30px; padding: 0 10px; border-color: transparent; background: transparent; }
.ddt-card { overflow: hidden; border: 1px solid var(--dsw-alias-border-l2, #e5e6eb); border-radius: 14px; background: var(--dsw-alias-bg-layer-1, #fff); box-shadow: 0 1px 2px rgb(31 35 41 / 3%); }
.ddt-cardBody { padding: 24px; }
.ddt-empty { min-height: 230px; display: grid; grid-template-columns: minmax(0, 1fr) 180px; align-items: center; gap: 30px; }
.ddt-empty h3 { margin: 8px 0; font-size: 18px; }
.ddt-empty p { max-width: 560px; color: var(--dsw-alias-label-secondary, #646a73); line-height: 1.65; }
.ddt-empty .ddt-actions { margin-top: 20px; }
.ddt-brandMark { width: 110px; height: 110px; display: grid; place-items: center; justify-self: center; border-radius: 28px; color: #fff; background: linear-gradient(145deg, #2997ff, var(--ddt-accent)); box-shadow: 0 18px 45px rgb(22 119 255 / 23%); }
.ddt-brandMark svg { filter: drop-shadow(0 3px 8px rgb(0 35 96 / 16%)); }
.ddt-qrLayout { display: grid; grid-template-columns: 300px minmax(0, 1fr); gap: 34px; align-items: start; }
.ddt-qrColumn { display: flex; flex-direction: column; align-items: center; gap: 12px; }
.ddt-qrFrame { position: relative; width: min(270px, 100%); aspect-ratio: 1; display: grid; place-items: center; overflow: hidden; padding: 10px; border: 1px solid var(--dsw-alias-border-l2, #e5e6eb); border-radius: 16px; background: #fff; }
.ddt-qrFrame::before { content: ''; position: absolute; inset: 6px; border: 1px solid rgb(22 119 255 / 10%); border-radius: 11px; pointer-events: none; }
.ddt-qrFrame img { display: block; width: 100%; height: 100%; object-fit: contain; }
.ddt-qrFallback { padding: 24px; color: #646a73; text-align: center; }
.ddt-expired { position: absolute; inset: 0; display: grid; place-items: center; padding: 30px; color: #fff; text-align: center; font-weight: 650; white-space: pre-line; background: rgb(31 35 41 / 76%); backdrop-filter: blur(3px); }
.ddt-countdown { width: min(270px, 100%); color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; }
.ddt-countdownTop { display: flex; justify-content: space-between; margin-bottom: 6px; }
.ddt-countdown strong { color: var(--dsw-alias-label-primary, #1f2329); font-variant-numeric: tabular-nums; }
.ddt-progress { height: 4px; overflow: hidden; border-radius: 99px; background: #eef0f3; }
.ddt-progress span { display: block; width: var(--ddt-progress); height: 100%; background: var(--ddt-accent); transition: width .2s linear; }
.ddt-stateLabel { display: inline-flex; align-items: center; gap: 8px; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; font-weight: 600; }
.ddt-qrCopy { min-width: 0; overflow-wrap: anywhere; }
.ddt-qrCopy h3 { margin: 9px 0 8px; font-size: 18px; }
.ddt-qrCopy > p { color: var(--dsw-alias-label-secondary, #646a73); line-height: 1.65; }
.ddt-steps { margin: 18px 0 16px; padding: 0; list-style: none; counter-reset: ddt-step; }
.ddt-steps li { position: relative; min-height: 28px; padding: 3px 0 3px 36px; color: var(--dsw-alias-label-secondary, #646a73); font-size: 13px; line-height: 22px; counter-increment: ddt-step; }
.ddt-steps li::before { content: counter(ddt-step); position: absolute; left: 0; top: 1px; width: 26px; height: 26px; display: grid; place-items: center; border-radius: 8px; color: var(--ddt-accent-deep); background: var(--ddt-accent-wash); font-size: 12px; font-weight: 700; }
.ddt-loading { padding: 38px; color: var(--dsw-alias-label-secondary, #646a73); text-align: center; }
.ddt-loading h3 { margin: 0 0 7px; color: var(--dsw-alias-label-primary, #1f2329); font-size: 17px; }
.ddt-loading p { line-height: 1.6; }
.ddt-spinner { width: 24px; height: 24px; margin: 0 auto 13px; border: 3px solid #e6e8eb; border-top-color: var(--ddt-accent); border-radius: 50%; animation: ddt-spin .8s linear infinite; }
.ddt-statusNotice, .ddt-inlineError { display: flex; align-items: flex-start; gap: 10px; padding: 13px 15px; border: 1px solid color-mix(in srgb, var(--ddt-error) 28%, transparent); border-radius: 10px; color: var(--ddt-error); background: color-mix(in srgb, var(--ddt-error) 7%, transparent); font-size: 13px; }
.ddt-inlineError { flex-direction: column; padding: 22px; }
.ddt-inlineError h3 { font-size: 17px; }
.ddt-inlineError p { line-height: 1.55; }
.ddt-errorCode { font: 11px ui-monospace, SFMono-Regular, monospace; opacity: .8; }
.ddt-listHeading { display: flex; align-items: center; justify-content: space-between; margin: 2px 0 9px; }
.ddt-listHeading h3 { margin: 0; font-size: 14px; }
.ddt-list { display: grid; gap: 12px; margin: 0; padding: 0; list-style: none; }
.ddt-accountTop { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; }
.ddt-accountIdentity { min-width: 0; display: flex; align-items: center; gap: 12px; }
.ddt-avatar { width: 42px; height: 42px; display: grid; place-items: center; flex: none; border-radius: 12px; color: #fff; background: linear-gradient(145deg, #2997ff, var(--ddt-accent)); }
.ddt-accountIdentity h3 { overflow: hidden; font-size: 15px; text-overflow: ellipsis; white-space: nowrap; }
.ddt-accountIdentity p { margin-top: 4px; color: var(--dsw-alias-label-secondary, #646a73); font: 12px ui-monospace, SFMono-Regular, monospace; }
.ddt-health { display: inline-flex; align-items: center; gap: 7px; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; white-space: nowrap; }
.ddt-accountFooter { display: flex; align-items: center; justify-content: space-between; gap: 15px; padding-top: 16px; border-top: 1px solid var(--dsw-alias-border-l1, #eef0f3); }
.ddt-accountFooter .ddt-actions { flex: none; flex-wrap: nowrap; gap: 8px; margin-top: 0; }
.ddt-accountFooter .ddt-button { flex: none; white-space: nowrap; }
.ddt-summary { color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; }
.ddt-confirm { padding: 18px 24px; border-top: 1px solid color-mix(in srgb, var(--ddt-error) 25%, transparent); background: color-mix(in srgb, var(--ddt-error) 5%, transparent); }
.ddt-confirm strong { display: block; margin-bottom: 6px; font-size: 14px; }
.ddt-confirm p { color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; line-height: 1.55; }
.ddt-confirm .ddt-actions { margin-top: 13px; }
.ddt-visuallyHidden { position: absolute !important; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
@keyframes ddt-spin { to { transform: rotate(360deg); } }
@container (max-width: 680px) {
  .ddt-heading { flex-direction: column; align-items: stretch; }
  .ddt-tools { width: 100%; flex-wrap: nowrap; gap: 6px; }
  .ddt-tools .ddt-badge { min-height: 34px; padding-inline: 8px; }
  .ddt-tools .ddt-button { flex: none; padding-inline: 10px; white-space: nowrap; }
  .ddt-empty { grid-template-columns: minmax(0, 1fr); }
  .ddt-brandMark { display: none; }
  .ddt-qrLayout { grid-template-columns: minmax(0, 1fr); justify-items: center; gap: 24px; }
  .ddt-qrColumn { width: 100%; min-width: 0; }
  .ddt-qrCopy { width: 100%; }
}
@media (max-width: 720px) {
  .ddt-heading, .ddt-accountTop { flex-direction: column; align-items: stretch; }
  .ddt-heading p { white-space: normal; }
  .ddt-empty { grid-template-columns: minmax(0, 1fr); }
  .ddt-brandMark { display: none; }
  .ddt-qrLayout { grid-template-columns: minmax(0, 1fr); justify-items: center; }
  .ddt-qrCopy { width: 100%; }
  .ddt-cardBody { padding: 20px; }
}
@media (prefers-reduced-motion: reduce) {
  .ddt-page *, .ddt-page *::before, .ddt-page *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
`;
function installDingtalkStyles() {
  if (typeof document === "undefined") return () => {
  };
  const existing = document.querySelector(`style[data-plugin-css="${DINGTALK_STYLE_ID}"]`);
  if (existing) return () => {
  };
  const style = document.createElement("style");
  style.dataset.plugin = "@xmanrui/dsh-dingtalk";
  style.dataset.pluginCss = DINGTALK_STYLE_ID;
  style.textContent = CSS;
  document.head.appendChild(style);
  return () => style.remove();
}

// plugin-src/client/channels/dingtalk/index.js
var CHANNEL_LABEL2 = "DingTalk";
var ACTIVE_PROVISION_STATES = /* @__PURE__ */ new Set(["pending", "scanned", "authorizing", "creating", "connecting"]);
function DingtalkIcon({ size = 28 }) {
  return h2("svg", {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false"
  }, h2("path", {
    fill: "currentColor",
    d: "M37.05 22.783c-6.758-5.216-14.378-12.128-22.73-19.538-.655-.585-1.242-.354-1.536.42-1.88 4.973-.058 9.386 2.889 11.932s7.368 4.912 10.058 6.155c.105.049.013.203-.093.163-4.953-2.182-8.397-3.765-13.07-7.368-.497-.388-1.01-.242-1.07.521-.384 4.748 2.657 8.483 6.058 9.745 2.1.781 4.398 1.212 6.53 1.474.109.015.084.178-.027.178-2.747.01-6.058-.654-8.935-1.751-.606-.233-.818.25-.722.633.491 2.008 2.974 5.076 6.926 5.73a12 12 0 0 0 2.228.115c.164 0 .208.089.154.217q-2.685 4.6-2.803 4.797c-.091.152-.036.275.156.275h3.543c.164 0 .264.106.18.246l-4.958 8.196c-.191.328.035.565.395.301s15.212-11.133 15.636-11.448c.195-.142.148-.327-.124-.327h-3.18c-.206 0-.252-.14-.111-.28.14-.141 3.602-3.594 4.837-4.888 1.283-1.35 1.938-3.825-.231-5.498"
  }));
}
var Button = React9.forwardRef(function Button2({ children, kind = "secondary", className = "", ...props }, ref) {
  return h2("button", {
    ...props,
    ref,
    type: "button",
    className: `ddt-button ${className}`.trim(),
    "data-kind": kind
  }, children);
});
function Heading({ totals, adding, busy, onAdd, onCredential, credentialOpen, addButtonRef }) {
  return h2(
    "div",
    { className: "ddt-heading" },
    h2(
      "div",
      { className: "ddt-headingCopy" },
      h2("div", { className: "ddt-eyebrow" }, "Channel"),
      h2("h2", null, t("ui.dingtalk.dingtalkBot")),
      h2("p", null, t("ui.dingtalk.connectADingtalkBotToDeepseek"))
    ),
    h2(
      "div",
      { className: "ddt-tools" },
      h2(
        "div",
        { className: "dim-bindActions" },
        h2(Button, {
          kind: "primary",
          className: "dim-scanButton",
          onClick: onAdd,
          disabled: adding || busy,
          ref: addButtonRef,
          "aria-label": t("ui.dingtalk.connectDingtalkBotByQrCode")
        }, h2(QrActionIcon), adding ? t("ui.dingtalk.connecting") : t("ui.dingtalk.scanQrCode")),
        h2(Button, {
          kind: "credential",
          className: "dim-credentialButton",
          onClick: onCredential,
          disabled: adding || busy,
          "aria-pressed": credentialOpen,
          "aria-label": t("ui.dingtalk.connectADingtalkBotWithClient")
        }, h2(CredentialActionIcon), credentialOpen ? t("ui.dingtalk.hideCredentials") : t("ui.dingtalk.manualSetup"))
      ),
      totals.configured > 0 ? h2(
        "div",
        { className: "ddt-badge dim-onlineBadge" },
        h2("span", null, t("ui.common.onlineCount", { connected: totals.connected, configured: totals.configured }))
      ) : null
    )
  );
}
function LoadingView() {
  return h2(
    "div",
    { className: "ddt-card ddt-loading dim-surfaceCard dim-loadingView", "aria-busy": "true" },
    h2("div", { className: "ddt-spinner dim-spinner" }),
    h2("span", null, t("ui.dingtalk.loadingDingtalkConnectionStatus"))
  );
}
function EmptyView({ busy, onStart }) {
  return h2(
    "div",
    { className: "ddt-card dim-surfaceCard" },
    h2(
      "div",
      { className: "ddt-cardBody ddt-empty dim-surfaceBody dim-emptyView" },
      h2(
        "div",
        { className: "dim-emptyCopy" },
        h2(
          "div",
          { className: "ddt-stateLabel dim-stateLabel" },
          h2("span", { className: "ddt-dot dim-stateDot" }),
          h2("span", null, t("ui.common.noBotsYet", { channel: CHANNEL_LABEL2 }))
        ),
        h2("h3", null, t("ui.dingtalk.scanOnceToCreateAndConnect")),
        h2("p", null, t("ui.dingtalk.authorizationIsCompletedOnDingtalkS")),
        h2(
          "div",
          { className: "ddt-actions dim-viewActions" },
          h2(
            Button,
            { kind: "primary", onClick: onStart, disabled: busy },
            busy ? t("ui.dingtalk.generatingQrCode") : t("ui.dingtalk.generateDingtalkQrCode")
          )
        )
      ),
      h2(
        "div",
        { className: "ddt-brandMark dim-emptyBrand", "aria-hidden": "true" },
        h2(DingtalkIcon, { size: 68 })
      )
    )
  );
}
function QrPanel({ provision, now, busy, onRefresh, onCancel }) {
  const [imageFailed, setImageFailed] = React9.useState(false);
  const source = safeQrSource(provision.qrCodeDataUrl);
  const remaining = Math.max(0, provision.expiresAt - now);
  const expired = remaining === 0 || provision.status === "expired";
  const duration = Math.max(1, provision.durationMs ?? 10 * 6e4);
  const progress = Math.round(Math.min(1, remaining / duration) * 100);
  React9.useEffect(() => setImageFailed(false), [source]);
  return h2(
    "div",
    { className: "ddt-card dim-surfaceCard" },
    h2(
      "div",
      { className: "ddt-cardBody ddt-qrLayout dim-surfaceBody dim-qrLayout" },
      h2(
        "div",
        { className: "ddt-qrColumn dim-qrColumn" },
        h2(
          "div",
          { className: "ddt-qrFrame dim-qrFrame" },
          source && !imageFailed ? h2("img", {
            src: source,
            alt: t("ui.dingtalk.oneTimeQrCodeForConnecting"),
            onError: () => setImageFailed(true)
          }) : h2("div", { className: "ddt-qrFallback dim-qrFallback" }, t("ui.dingtalk.theQrCodeIsNotReady")),
          expired ? h2("div", { className: "ddt-expired dim-qrExpired" }, t("ui.common.qrExpiredRegenerate")) : null
        ),
        h2(
          "div",
          { className: "ddt-countdown dim-countdown" },
          h2(
            "div",
            { className: "ddt-countdownTop dim-countdownTop" },
            h2("span", null, t("ui.dingtalk.qrCodeExpiresIn")),
            h2("strong", null, formatRemaining(remaining))
          ),
          h2(
            "div",
            { className: "ddt-progress dim-progress", "aria-hidden": "true" },
            h2("span", { style: { "--ddt-progress": `${progress}%` } })
          )
        )
      ),
      h2(
        "div",
        { className: "ddt-qrCopy dim-qrCopy" },
        h2(
          "div",
          { className: "ddt-stateLabel dim-stateLabel" },
          h2("span", { className: "ddt-dot dim-stateDot", "data-tone": expired ? "error" : "warning" }),
          h2("span", null, expired ? t("ui.dingtalk.qrCodeExpired") : t("ui.dingtalk.waitingForDingtalkAuthorization"))
        ),
        h2("h3", null, expired ? t("ui.dingtalk.generateANewQrCode") : t("ui.dingtalk.authorizeTheBotWithTheDingtalk")),
        h2("p", null, t("ui.dingtalk.theDingtalkAccountMustBelongTo")),
        h2(
          "ol",
          { className: "ddt-steps dim-steps" },
          h2("li", null, t("ui.dingtalk.scanTheQrCodeWithA")),
          h2("li", null, t("ui.dingtalk.selectCreateNewBotOnThe")),
          h2("li", null, t("ui.dingtalk.keepThisPageOpenWhileThe"))
        ),
        h2(
          "div",
          { className: "ddt-actions dim-viewActions" },
          expired ? h2(Button, { kind: "primary", onClick: onRefresh, disabled: busy }, t("ui.dingtalk.generateANewQrCode2")) : null,
          !expired ? h2(Button, { onClick: onRefresh, disabled: busy }, t("ui.dingtalk.getAnotherQrCode")) : null,
          h2(Button, { onClick: onCancel, disabled: busy }, t("ui.dingtalk.cancel"))
        )
      )
    )
  );
}
function ProgressPanel({ status, busy, onCancel }) {
  const connecting = status === "connecting";
  const creating = status === "creating";
  return h2(
    "div",
    { className: "ddt-card ddt-loading dim-surfaceCard dim-loadingView", "aria-busy": "true" },
    h2("div", { className: "ddt-spinner dim-spinner" }),
    h2("h3", null, connecting ? t("ui.dingtalk.botCreatedStartingTheMessageConnection") : creating ? t("ui.dingtalk.authorizedCreatingTheDingtalkBot") : t("ui.dingtalk.confirmingDingtalkAuthorization")),
    h2("p", null, connecting ? t("ui.dingtalk.checkingTheDingtalkStreamConnectionIt") : t("ui.dingtalk.keepThisPageOpenSetupWill")),
    h2(
      "div",
      { className: "ddt-actions dim-viewActions", style: { justifyContent: "center", marginTop: 14 } },
      h2(Button, { onClick: onCancel, disabled: busy }, t("ui.dingtalk.cancelSetup"))
    )
  );
}
function ProvisionError({ provision, busy, onRetry, onClose }) {
  const error = provision.error ?? {
    code: "DINGTALK_PROVISION_FAILED",
    message: t("ui.common.notConnected", { channel: CHANNEL_LABEL2 })
  };
  return h2(
    "div",
    { className: "ddt-card dim-surfaceCard" },
    h2(
      "div",
      { className: "ddt-inlineError dim-inlineError", role: "alert" },
      h2("h3", null, provision.status === "expired" ? t("ui.dingtalk.qrCodeExpired2") : t("ui.common.notConnected", { channel: CHANNEL_LABEL2 })),
      h2("p", null, error.message),
      h2("span", { className: "ddt-errorCode" }, error.code),
      h2(
        "div",
        { className: "ddt-actions dim-viewActions" },
        h2(Button, { kind: "primary", onClick: onRetry, disabled: busy }, t("ui.dingtalk.generateANewQrCode2")),
        h2(Button, { onClick: onClose, disabled: busy }, t("ui.dingtalk.close"))
      )
    )
  );
}
function checkedTime(value) {
  if (!value) return t("ui.dingtalk.notCheckedYet");
  try {
    return new Intl.DateTimeFormat("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date(value));
  } catch {
    return t("ui.dingtalk.justNow");
  }
}
function RemoveConfirmation({ account, busy, onConfirm, onCancel }) {
  const cancelRef = React9.useRef(null);
  React9.useEffect(() => cancelRef.current?.focus(), []);
  return h2(
    "div",
    {
      className: "ddt-confirm dim-confirm",
      role: "alertdialog",
      "aria-label": t("ui.common.removeAria", { name: account.bot.name }),
      onKeyDown: (event) => {
        if (event.key === "Escape" && !busy) onCancel();
      }
    },
    h2("strong", null, t("ui.common.removeConfirm", { name: account.bot.name })),
    h2("p", null, t("ui.dingtalk.thisStopsTheMessageConnectionAnd")),
    h2(
      "div",
      { className: "ddt-actions dim-viewActions" },
      h2(Button, { ref: cancelRef, onClick: onCancel, disabled: busy }, t("ui.dingtalk.keepBot")),
      h2(
        Button,
        { kind: "danger", onClick: onConfirm, disabled: busy },
        busy ? t("ui.dingtalk.removing") : t("ui.dingtalk.removeConnection")
      )
    )
  );
}
function AccountCard({
  account,
  busy,
  feedback,
  removing,
  onReconnect,
  onWorkspaceSave,
  onAgentPresetSave,
  onRequestRemove,
  onConfirmRemove,
  onCancelRemove
}) {
  const state = busy === "reconnect" ? "connecting" : account.state;
  const tone = account.connected ? "success" : state === "error" ? "error" : "warning";
  const stateLabel2 = account.connected ? t("ui.dingtalk.connected") : state === "connecting" ? t("ui.dingtalk.connecting2") : t("ui.dingtalk.notConnected");
  const summary = account.error?.message ?? (account.connected ? null : account.health.summary);
  return h2(
    "article",
    { className: "ddt-card dim-botCard", tabIndex: -1, "data-bot-id": account.botId },
    h2(
      "div",
      { className: "ddt-cardBody dim-botCardBody" },
      h2(
        "div",
        { className: "ddt-accountTop dim-botCardTop" },
        h2(
          "div",
          { className: "ddt-accountIdentity dim-botIdentity" },
          h2("div", { className: "ddt-avatar dim-botAvatar", "aria-hidden": "true" }, h2(DingtalkIcon, { size: 29 })),
          h2(
            "div",
            { className: "dim-botName" },
            h2("h3", { title: account.bot.name }, account.bot.name),
            h2("p", { title: account.bot.clientIdMasked }, account.bot.clientIdMasked)
          )
        ),
        h2(BotStatusMeta, {
          className: "ddt-health",
          dotClassName: "ddt-dot",
          tone,
          stateLabel: stateLabel2,
          lastCheckedAt: account.health.lastCheckedAt,
          formatCheckedTime: checkedTime
        })
      ),
      h2(WorkspaceEditor, {
        workspace: account.workspace,
        disabled: Boolean(busy),
        onSave: onWorkspaceSave
      }),
      h2(AgentPresetEditor, {
        agentPreset: account.agentPreset,
        disabled: Boolean(busy),
        onSave: onAgentPresetSave
      }),
      h2(
        "div",
        { className: "ddt-accountFooter dim-cardFooter" },
        h2(
          "div",
          { className: "dim-cardFooterLayout" },
          h2(
            "div",
            { className: "ddt-actions dim-cardActions" },
            h2(
              Button,
              { className: "dim-cardAction", onClick: onReconnect, disabled: Boolean(busy) },
              busy === "reconnect" ? t("ui.dingtalk.checking") : account.connected ? t("ui.dingtalk.checkConnection") : t("ui.dingtalk.reconnect")
            ),
            h2(
              Button,
              { className: "dim-cardAction", kind: "danger", onClick: onRequestRemove, disabled: Boolean(busy) },
              t("ui.dingtalk.removeConnection2")
            )
          ),
          summary ? h2("div", { className: "ddt-summary dim-cardSummary" }, summary) : null,
          feedback ? h2("div", {
            className: "ddt-summary dim-cardFeedback",
            role: "status"
          }, feedback) : null
        )
      )
    ),
    removing ? h2(RemoveConfirmation, {
      account,
      busy: busy === "delete",
      onConfirm: onConfirmRemove,
      onCancel: onCancelRemove
    }) : null
  );
}
function AccountList(props) {
  return h2(
    "section",
    { className: "dim-listSection" },
    h2(ChannelListHeading, {
      className: "ddt-listHeading",
      title: t("ui.dingtalk.connectedDingtalkBots"),
      connectionLabel: t("ui.dingtalk.streamPersistentConnection")
    }),
    h2("ul", { className: "ddt-list dim-botList" }, props.bots.map((account) => h2(
      "li",
      { key: account.botId },
      h2(AccountCard, {
        account,
        busy: props.busyByBot[account.botId],
        feedback: props.feedbackByBot[account.botId]?.message,
        removing: props.removeTarget === account.botId,
        onReconnect: () => props.onReconnect(account),
        onWorkspaceSave: (workspace) => props.onWorkspaceSave(account, workspace),
        onAgentPresetSave: (agentPreset) => props.onAgentPresetSave(account, agentPreset),
        onRequestRemove: () => props.onRequestRemove(account),
        onConfirmRemove: () => props.onConfirmRemove(account),
        onCancelRemove: props.onCancelRemove
      })
    )))
  );
}
var EMPTY_TOTALS = Object.freeze({ configured: 0, connected: 0 });
function DingtalkSettingsTab({ rpcCall }) {
  const [model, setModel] = React9.useState({
    phase: "loading",
    bots: [],
    totals: EMPTY_TOTALS,
    revision: 0,
    error: null,
    agentPresetCatalog: EMPTY_AGENT_PRESET_CATALOG
  });
  const [provision, setProvision] = React9.useState(null);
  const [busy, setBusy] = React9.useState(false);
  const [busyByBot, setBusyByBot] = React9.useState({});
  const [feedbackByBot, setFeedbackByBot] = React9.useState({});
  const [removeTarget, setRemoveTarget] = React9.useState(null);
  const [credentialOpen, setCredentialOpen] = React9.useState(false);
  const [credentialError, setCredentialError] = React9.useState(null);
  const [notice, setNotice] = React9.useState("");
  const [now, setNow] = React9.useState(() => Date.now());
  const addButtonRef = React9.useRef(null);
  const mountedRef = React9.useRef(true);
  const statusRequestRef = React9.useRef(0);
  const workspaceFence = useWorkspaceSnapshotFence();
  const noticeFrameRef = React9.useRef(null);
  const focusFrameRef = React9.useRef(null);
  React9.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      statusRequestRef.current += 1;
      if (noticeFrameRef.current !== null) {
        window.cancelAnimationFrame(noticeFrameRef.current);
        noticeFrameRef.current = null;
      }
      if (focusFrameRef.current !== null) {
        window.cancelAnimationFrame(focusFrameRef.current);
        focusFrameRef.current = null;
      }
    };
  }, []);
  React9.useEffect(() => installDingtalkStyles(), []);
  const announce = React9.useCallback((message) => {
    if (!mountedRef.current) return;
    if (noticeFrameRef.current !== null) {
      window.cancelAnimationFrame(noticeFrameRef.current);
      noticeFrameRef.current = null;
    }
    setNotice("");
    if (message) {
      noticeFrameRef.current = window.requestAnimationFrame(() => {
        noticeFrameRef.current = null;
        if (mountedRef.current) setNotice(message);
      });
    }
  }, []);
  const discardStaleFeedback = React9.useCallback((snapshot) => {
    const botsById = new Map(snapshot.bots.map((bot) => [bot.botId, bot]));
    setFeedbackByBot((current2) => {
      let changed = false;
      const next = { ...current2 };
      for (const [botId, feedback] of Object.entries(next)) {
        const bot = botsById.get(botId);
        if (!bot || feedback.clearWhenDisconnected && (!bot.connected || bot.error)) {
          delete next[botId];
          changed = true;
        }
      }
      return changed ? next : current2;
    });
  }, []);
  const focusAddButton = React9.useCallback(() => {
    if (!mountedRef.current) return;
    if (focusFrameRef.current !== null) window.cancelAnimationFrame(focusFrameRef.current);
    focusFrameRef.current = window.requestAnimationFrame(() => {
      focusFrameRef.current = null;
      if (mountedRef.current) addButtonRef.current?.focus();
    });
  }, []);
  const invoke = React9.useCallback(async (endpoint, payload = {}, signal) => {
    if (typeof rpcCall !== "function") throw new TypeError(t("ui.common.missingRpc", { channel: CHANNEL_LABEL2 }));
    return unwrapRpcResult(await rpcCall(endpoint, payload, signal));
  }, [rpcCall]);
  const loadStatus = React9.useCallback(async ({
    signal,
    silent = false,
    restoreProvisioning = false
  } = {}) => {
    if (!mountedRef.current || signal?.aborted) return void 0;
    const workspaceVersion = workspaceFence.beginStatus();
    if (workspaceVersion === null) return void 0;
    const requestId = statusRequestRef.current + 1;
    statusRequestRef.current = requestId;
    const canCommit = () => mountedRef.current && !signal?.aborted && statusRequestRef.current === requestId && workspaceFence.canCommitStatus(workspaceVersion);
    if (!silent && canCommit()) {
      setModel((current2) => ({ ...current2, phase: "loading", error: null }));
    }
    try {
      const snapshot = normalizeSnapshot(await invoke(DINGTALK_ENDPOINTS.status, {}, signal));
      if (!canCommit()) return void 0;
      setModel({
        phase: "ready",
        bots: snapshot.bots,
        totals: snapshot.totals,
        revision: snapshot.revision,
        error: null,
        agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
      });
      discardStaleFeedback(snapshot);
      if (restoreProvisioning && snapshot.provisioning) {
        setProvision((current2) => !current2 || current2.attemptId === snapshot.provisioning.attemptId ? {
          ...current2,
          ...snapshot.provisioning,
          durationMs: current2?.durationMs ?? Math.max(1, snapshot.provisioning.expiresAt - Date.now())
        } : current2);
      }
      return snapshot;
    } catch (error) {
      if (error?.name === "AbortError" || !canCommit()) return void 0;
      setModel((current2) => ({
        ...current2,
        phase: silent && current2.phase === "ready" ? "ready" : "error",
        error: presentError(error)
      }));
      return void 0;
    }
  }, [discardStaleFeedback, invoke, workspaceFence]);
  React9.useEffect(() => {
    const controller = new AbortController();
    void loadStatus({ signal: controller.signal, restoreProvisioning: true });
    return () => controller.abort();
  }, [loadStatus]);
  React9.useEffect(() => {
    if (model.phase !== "ready") return void 0;
    const controller = new AbortController();
    let running = false;
    const timer = window.setInterval(async () => {
      if (running || controller.signal.aborted || !mountedRef.current) return;
      running = true;
      await loadStatus({
        signal: controller.signal,
        silent: true,
        restoreProvisioning: false
      });
      running = false;
    }, 15e3);
    return () => {
      controller.abort();
      window.clearInterval(timer);
    };
  }, [loadStatus, model.phase]);
  React9.useEffect(() => {
    if (!provision || !ACTIVE_PROVISION_STATES.has(provision.status)) return void 0;
    const timer = window.setInterval(() => {
      if (mountedRef.current) setNow(Date.now());
    }, 1e3);
    return () => window.clearInterval(timer);
  }, [provision?.attemptId, provision?.status]);
  const startProvisioning = React9.useCallback(async ({ replace = false } = {}) => {
    if (!mountedRef.current) return;
    setCredentialOpen(false);
    setCredentialError(null);
    setBusy(true);
    try {
      if (replace && provision?.attemptId) {
        await invoke(DINGTALK_ENDPOINTS.cancelProvisioning, {
          attemptId: provision.attemptId
        });
        if (!mountedRef.current) return;
      }
      setProvision({ status: "starting" });
      const started = normalizeProvisioning(await invoke(
        DINGTALK_ENDPOINTS.beginProvisioning,
        { locale: "zh-CN" }
      ));
      if (!mountedRef.current) return;
      if (!started.qrCodeDataUrl) {
        throw new Error(t("ui.dingtalk.dingtalkDidNotReturnASecure"));
      }
      setNow(Date.now());
      setProvision({
        ...started,
        durationMs: Math.max(1, started.expiresAt - Date.now())
      });
      announce(t("ui.dingtalk.dingtalkQrCodeGeneratedScanIt"));
    } catch (error) {
      if (!mountedRef.current) return;
      setProvision({
        attemptId: provision?.attemptId,
        status: "failed",
        error: presentError(error)
      });
    } finally {
      if (mountedRef.current) setBusy(false);
    }
  }, [announce, invoke, provision?.attemptId]);
  const bindCredentials = React9.useCallback(async ({ identity, secret }) => {
    if (!mountedRef.current) return;
    const snapshotVersion = workspaceFence.beginMutation();
    setBusy(true);
    setCredentialError(null);
    try {
      const snapshot = normalizeSnapshot(await invoke(
        DINGTALK_ENDPOINTS.bindCredentials,
        { clientId: identity, clientSecret: secret }
      ));
      if (!mountedRef.current) return;
      if (workspaceFence.canCommitMutation(snapshotVersion)) {
        setModel({
          phase: "ready",
          bots: snapshot.bots,
          totals: snapshot.totals,
          revision: snapshot.revision,
          error: null,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
        });
        discardStaleFeedback(snapshot);
      }
      setCredentialOpen(false);
      announce(t("ui.dingtalk.dingtalkBotCredentialsConnected"));
    } catch (error) {
      if (mountedRef.current) setCredentialError(presentError(error));
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      if (mountedRef.current) setBusy(false);
    }
  }, [announce, discardStaleFeedback, invoke, loadStatus, workspaceFence]);
  const cancelProvisioning = React9.useCallback(async () => {
    if (!mountedRef.current) return;
    setBusy(true);
    try {
      if (provision?.attemptId && !["failed", "expired", "cancelled"].includes(provision.status)) {
        await invoke(DINGTALK_ENDPOINTS.cancelProvisioning, { attemptId: provision.attemptId });
        if (!mountedRef.current) return;
      }
      setProvision(null);
      announce(t("ui.dingtalk.dingtalkBotSetupCancelled"));
      focusAddButton();
    } catch (error) {
      if (!mountedRef.current) return;
      setProvision((current2) => ({ ...current2, status: "failed", error: presentError(error) }));
    } finally {
      if (mountedRef.current) setBusy(false);
    }
  }, [announce, focusAddButton, invoke, provision?.attemptId, provision?.status]);
  React9.useEffect(() => {
    const attemptId = provision?.attemptId;
    if (!attemptId || !ACTIVE_PROVISION_STATES.has(provision.status)) return void 0;
    const controller = new AbortController();
    let disposed = false;
    let timer = null;
    const canCommit = () => !disposed && !controller.signal.aborted && mountedRef.current;
    const schedule = (delay) => {
      if (!canCommit()) return;
      if (timer !== null) window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        timer = null;
        if (canCommit()) void poll();
      }, delay);
    };
    const poll = async () => {
      try {
        const response = await invoke(
          DINGTALK_ENDPOINTS.pollProvisioning,
          { attemptId },
          controller.signal
        );
        if (!canCommit()) return;
        const result = normalizeProvisioning(response);
        if (result.status === "connected") {
          const snapshot = await loadStatus({
            signal: controller.signal,
            silent: true,
            restoreProvisioning: false
          });
          if (!canCommit()) return;
          const account = result.botId ? snapshot?.bots.find((bot) => bot.botId === result.botId) : snapshot?.bots.find((bot) => bot.connected);
          if (!account?.connected) {
            setProvision((current2) => current2?.attemptId === attemptId ? { ...current2, ...result, status: "connecting" } : current2);
            schedule(result.pollIntervalMs);
            return;
          }
          setProvision(null);
          announce(result.alreadyConnected ? t("ui.dingtalk.thisDingtalkBotIsConnectedAnd") : t("ui.dingtalk.theDingtalkBotIsConnectedAnd"));
          return;
        }
        if (!canCommit()) return;
        setProvision((current2) => current2?.attemptId === attemptId ? { ...current2, ...result, durationMs: current2.durationMs } : current2);
        if (ACTIVE_PROVISION_STATES.has(result.status)) {
          schedule(result.pollIntervalMs);
        }
      } catch (error) {
        if (error?.name === "AbortError" || !canCommit()) return;
        setProvision((current2) => current2?.attemptId === attemptId ? { ...current2, status: "failed", error: presentError(error) } : current2);
      }
    };
    schedule(provision.pollIntervalMs ?? 3e3);
    return () => {
      disposed = true;
      controller.abort();
      if (timer !== null) window.clearTimeout(timer);
      timer = null;
    };
  }, [announce, invoke, loadStatus, provision?.attemptId, provision?.pollIntervalMs, provision?.status]);
  const setBotBusy = React9.useCallback((botId, operation) => {
    if (!mountedRef.current) return;
    setBusyByBot((current2) => {
      const next = { ...current2 };
      if (operation) next[botId] = operation;
      else delete next[botId];
      return next;
    });
  }, []);
  const runBotAction = React9.useCallback(async ({ account, operation, endpoint, payload, success }) => {
    if (!mountedRef.current) return void 0;
    const snapshotVersion = workspaceFence.beginMutation();
    setBotBusy(account.botId, operation);
    if (operation === "reconnect") {
      setFeedbackByBot((current2) => {
        const next = { ...current2 };
        delete next[account.botId];
        return next;
      });
    }
    try {
      const snapshot = normalizeSnapshot(await invoke(endpoint, payload));
      if (!mountedRef.current) return void 0;
      if (workspaceFence.canCommitMutation(snapshotVersion)) {
        setModel({
          phase: "ready",
          bots: snapshot.bots,
          totals: snapshot.totals,
          revision: snapshot.revision,
          error: null,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
        });
        discardStaleFeedback(snapshot);
      }
      const successMessage = typeof success === "function" ? success(snapshot) : success;
      if (operation === "reconnect") {
        setFeedbackByBot((current2) => ({
          ...current2,
          [account.botId]: {
            message: successMessage,
            clearWhenDisconnected: snapshot.testMessage?.sent === true
          }
        }));
      }
      announce(successMessage);
      return snapshot;
    } catch (error) {
      if (!mountedRef.current) return void 0;
      const failureMessage = operation === "reconnect" ? t("ui.dingtalk.connectionCheckFailedTryAgainLater") : t("ui.common.operationFailedReason", { reason: presentError(error).message });
      if (operation === "reconnect") {
        setFeedbackByBot((current2) => ({
          ...current2,
          [account.botId]: { message: failureMessage, clearWhenDisconnected: false }
        }));
      }
      announce(failureMessage);
      return void 0;
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true, restoreProvisioning: false });
      if (mountedRef.current) setBotBusy(account.botId, null);
    }
  }, [announce, discardStaleFeedback, invoke, loadStatus, setBotBusy, workspaceFence]);
  const reconnect = React9.useCallback((account) => runBotAction({
    account,
    operation: "reconnect",
    endpoint: DINGTALK_ENDPOINTS.reconnectBot,
    payload: { botId: account.botId, sendTest: true },
    success: (snapshot) => {
      const refreshed = snapshot?.bots.find((bot) => bot.botId === account.botId);
      if (!refreshed?.connected) return t("ui.common.stillOffline", { channel: CHANNEL_LABEL2 });
      return connectionTestFeedback(snapshot.testMessage) ?? t("ui.common.connectionCheckDone", { channel: CHANNEL_LABEL2 });
    }
  }), [runBotAction]);
  const saveWorkspace = React9.useCallback(async (account, workspace) => {
    const workspaceVersion = workspaceFence.beginMutation();
    setBotBusy(account.botId, "workspace");
    try {
      const snapshot = normalizeSnapshot(await invoke(
        DINGTALK_ENDPOINTS.setWorkspace,
        { botId: account.botId, workspace }
      ));
      if (mountedRef.current && workspaceFence.canCommitMutation(workspaceVersion)) {
        setModel({
          phase: "ready",
          bots: snapshot.bots,
          totals: snapshot.totals,
          revision: snapshot.revision,
          error: null,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
        });
        discardStaleFeedback(snapshot);
      }
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      if (mountedRef.current) setBotBusy(account.botId, null);
    }
  }, [discardStaleFeedback, invoke, loadStatus, setBotBusy, workspaceFence]);
  const saveAgentPreset = React9.useCallback(async (account, agentPreset) => {
    const snapshotVersion = workspaceFence.beginMutation();
    setBotBusy(account.botId, "preset");
    try {
      const snapshot = normalizeSnapshot(await invoke(
        DINGTALK_ENDPOINTS.setAgentPreset,
        { botId: account.botId, agentPreset }
      ));
      if (mountedRef.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        setModel({
          phase: "ready",
          bots: snapshot.bots,
          totals: snapshot.totals,
          revision: snapshot.revision,
          error: null,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
        });
        discardStaleFeedback(snapshot);
      }
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      if (mountedRef.current) setBotBusy(account.botId, null);
    }
  }, [discardStaleFeedback, invoke, loadStatus, setBotBusy, workspaceFence]);
  const remove = React9.useCallback(async (account) => {
    const snapshot = await runBotAction({
      account,
      operation: "delete",
      endpoint: DINGTALK_ENDPOINTS.deleteBot,
      payload: { botId: account.botId, confirm: true },
      success: t("ui.dingtalk.dingtalkBotAndLocalCredentialsRemoved")
    });
    if (snapshot && mountedRef.current) setRemoveTarget(null);
  }, [runBotAction]);
  let provisionView = null;
  if (provision?.status === "starting") {
    provisionView = h2(
      "div",
      { className: "ddt-card ddt-loading", "aria-busy": "true" },
      h2("div", { className: "ddt-spinner" }),
      h2("span", null, t("ui.dingtalk.requestingDingtalkAuthorizationQrCode"))
    );
  } else if (provision?.status === "pending") {
    provisionView = h2(QrPanel, {
      provision,
      now,
      busy,
      onRefresh: () => void startProvisioning({ replace: true }),
      onCancel: () => void cancelProvisioning()
    });
  } else if (["scanned", "authorizing", "creating", "connecting"].includes(provision?.status)) {
    provisionView = h2(ProgressPanel, {
      status: provision.status,
      busy,
      onCancel: () => void cancelProvisioning()
    });
  } else if (provision && ["failed", "expired", "cancelled"].includes(provision.status)) {
    provisionView = h2(ProvisionError, {
      provision,
      busy,
      onRetry: () => void startProvisioning({ replace: Boolean(provision.attemptId) }),
      onClose: () => void cancelProvisioning()
    });
  }
  const credentialView = credentialOpen ? h2(CredentialBindingPanel, {
    channel: t("ui.dingtalk.dingtalk"),
    identityLabel: "Client ID",
    identityPlaceholder: t("ui.dingtalk.enterTheDingtalkClientId"),
    secretLabel: "Client Secret",
    secretPlaceholder: t("ui.dingtalk.enterTheDingtalkClientSecret"),
    busy,
    error: credentialError,
    onSubmit: bindCredentials,
    onCancel: () => {
      setCredentialOpen(false);
      setCredentialError(null);
    }
  }) : null;
  return h2(AgentPresetCatalogContext.Provider, {
    value: model.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
  }, h2(
    "section",
    { className: "ddt-page dim-channelPage", "aria-label": t("ui.dingtalk.dingtalkSettings") },
    h2(Heading, {
      totals: model.totals,
      adding: Boolean(provision),
      busy,
      onAdd: () => void startProvisioning(),
      onCredential: () => {
        setCredentialOpen((value) => !value);
        setCredentialError(null);
      },
      credentialOpen,
      addButtonRef
    }),
    h2("div", { className: "ddt-visuallyHidden", role: "status", "aria-live": "polite" }, notice),
    model.error && model.phase === "ready" ? h2("div", { className: "ddt-statusNotice dim-statusNotice", role: "alert" }, t("ui.common.statusRefreshFailed", { reason: model.error.message })) : null,
    model.phase === "loading" ? h2(LoadingView) : model.phase === "error" ? h2(
      "div",
      { className: "ddt-card dim-surfaceCard" },
      h2(
        "div",
        { className: "ddt-inlineError dim-inlineError", role: "alert" },
        h2("h3", null, t("ui.common.cannotReadStatus", { channel: CHANNEL_LABEL2 })),
        h2("p", null, model.error?.message ?? t("ui.dingtalk.tryAgainLater")),
        h2(Button, { onClick: () => void loadStatus() }, t("ui.dingtalk.reload"))
      )
    ) : h2(
      React9.Fragment,
      null,
      credentialView,
      provisionView,
      model.bots.length === 0 && !provision && !credentialOpen ? h2(EmptyView, { busy, onStart: () => void startProvisioning() }) : null,
      model.bots.length > 0 ? h2(AccountList, {
        bots: model.bots,
        busyByBot,
        feedbackByBot,
        removeTarget,
        onReconnect: (account) => void reconnect(account),
        onWorkspaceSave: saveWorkspace,
        onAgentPresetSave: saveAgentPreset,
        onRequestRemove: (account) => setRemoveTarget(account.botId),
        onConfirmRemove: (account) => void remove(account),
        onCancelRemove: () => setRemoveTarget(null)
      }) : null
    )
  ));
}

// plugin-src/client/channels/shared/token-api.js
var ACCOUNT_STATES2 = /* @__PURE__ */ new Set(["connected", "connecting", "offline", "error"]);
function isRecord2(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function text(value, fallback, max = 240) {
  return typeof value === "string" && value.trim() ? value.trim().slice(0, max) : fallback;
}
function id(value) {
  const result = text(value, "", 128);
  return /^[a-z\d_-]+$/i.test(result) ? result : void 0;
}
function timestamp2(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  const parsed = typeof value === "string" ? Date.parse(value) : Number.NaN;
  return Number.isNaN(parsed) ? void 0 : parsed;
}
var TOKEN_BOT_ENDPOINTS = Object.freeze({
  status: "connection.status",
  bindCredentials: "bot.bind-credentials",
  reconnectBot: "bot.reconnect",
  deleteBot: "bot.delete",
  setWorkspace: "bot.workspace.set",
  setAgentPreset: SET_AGENT_PRESET_ENDPOINT
});
function createTokenChannelApi(channel4, connectionSummary, {
  normalizeBotExtension = () => ({})
} = {}) {
  const unwrapRpcResult10 = (result) => {
    if (!isRecord2(result) || typeof result.ok !== "boolean") {
      throw new Error(t("ui.common.unrecognizedResponse", { channel: channel4 }));
    }
    if (!result.ok) {
      const error = new Error(text(result.error?.message, t("ui.common.operationFailed", { channel: channel4 })));
      error.code = text(result.error?.code, `${channel4.toUpperCase()}_RPC_ERROR`, 80);
      throw error;
    }
    return result.value;
  };
  const normalizeBot7 = (value) => {
    if (!isRecord2(value) || !id(value.botId)) return void 0;
    const connected = value.connected === true;
    const state = ACCOUNT_STATES2.has(value.state) ? value.state : "offline";
    const extension = normalizeBotExtension(value);
    return {
      botId: id(value.botId),
      connected,
      state: connected ? "connected" : state,
      workspace: text(value.workspace, "", 4096),
      agentPreset: normalizeAgentPresetId(value.agentPreset),
      bot: {
        name: text(value.bot?.name, t("ui.common.botLabel", { channel: channel4 }), 100),
        username: text(value.bot?.username, "", 100),
        idMasked: text(value.bot?.idMasked, t("ui.common.botIdentifierStoredSecurely"), 140)
      },
      health: {
        summary: text(
          value.health?.summary,
          connected ? t("ui.common.runningNormally", { channel: channel4, connection: connectionSummary }) : t("ui.common.connectionNotReady", { channel: channel4 })
        ),
        lastCheckedAt: timestamp2(value.health?.lastCheckedAt)
      },
      error: isRecord2(value.error) ? {
        code: text(value.error.code, `${channel4.toUpperCase()}_ACCOUNT_ERROR`, 80),
        message: text(value.error.message, t("ui.common.connectionNotReady", { channel: channel4 }))
      } : null,
      ...isRecord2(extension) ? extension : {}
    };
  };
  const normalizeSnapshot9 = (value) => {
    const source = isRecord2(value?.snapshot) ? value.snapshot : value;
    if (!isRecord2(source) || !Array.isArray(source.bots)) {
      throw new Error(t("ui.common.noBotList", { channel: channel4 }));
    }
    const bots = source.bots.map(normalizeBot7).filter(Boolean);
    return {
      revision: Number.isSafeInteger(source.revision) ? source.revision : 0,
      bots,
      totals: { configured: bots.length, connected: bots.filter((bot) => bot.connected).length },
      agentPresetCatalog: normalizeAgentPresetCatalog(source.agentPresetCatalog)
    };
  };
  const presentError10 = (error) => ({
    code: text(error?.code, `${channel4.toUpperCase()}_ERROR`, 80),
    message: text(error?.message, t("ui.common.operationFailedRetry", { channel: channel4 }))
  });
  return Object.freeze({ unwrapRpcResult: unwrapRpcResult10, normalizeSnapshot: normalizeSnapshot9, presentError: presentError10 });
}

// plugin-src/client/channels/discord/api.js
var DISCORD_RPC_CHANNEL = "/discord";
var DISCORD_ENDPOINTS = TOKEN_BOT_ENDPOINTS;
var api = createTokenChannelApi("Discord", t("ui.discord.gatewayPersistentConnection"));
var unwrapRpcResult2 = api.unwrapRpcResult;
var normalizeSnapshot2 = api.normalizeSnapshot;
var presentError2 = api.presentError;

// plugin-src/client/channels/shared/token-channel.js
var React10 = __toESM(require("react"), 1);
var Button3 = React10.forwardRef(function Button4({ children, kind = "secondary", className = "", ...props }, ref) {
  return h2("button", {
    ...props,
    ref,
    type: "button",
    className: `ddt-button ${className}`.trim(),
    "data-kind": kind
  }, children);
});
function checkedTime2(value) {
  if (!value) return t("ui.dingtalk.notCheckedYet");
  try {
    return new Intl.DateTimeFormat("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date(value));
  } catch {
    return t("ui.dingtalk.justNow");
  }
}
function connectionTestNotice(value) {
  if (value?.testMessage?.sent === true) return t("ui.qq.testMessageSentCheckTheMatching");
  if (value?.testMessage?.code === "test-target-unavailable") {
    return t("ui.dingtalk.connectionCheckCompletedTheBotHas");
  }
  return value?.testMessage ? t("ui.feishu.connectionCheckCompletedButTheTest") : null;
}
function createTokenChannelSettings(definition) {
  const {
    channel: channel4,
    endpoints,
    api: api4,
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
    credentialAriaLabel = t("ui.common.connectWithToken", { channel: channel4 }),
    credentialOpenLabel = t("ui.dingtalk.manualSetup"),
    credentialCloseLabel = t("ui.dingtalk.hideCredentials"),
    credentialNoun = "Bot Token",
    emptyActionLabel = t("ui.common.enterBotToken"),
    AccountSettings = null,
    accountSettingsEndpoint = null
  } = definition;
  function AccountCard5({ account, busy, testNotice, removing, onReconnect, onWorkspaceSave, onAgentPresetSave, onAccountSettingsSave, onRequestRemove, onConfirmRemove, onCancelRemove }) {
    const state = busy === "reconnect" ? "connecting" : account.state;
    const tone = account.connected ? "success" : state === "error" ? "error" : "warning";
    const stateLabel2 = account.connected ? t("ui.dingtalk.connected") : state === "connecting" ? t("ui.dingtalk.connecting2") : t("ui.dingtalk.notConnected");
    const summary = account.error?.message ?? (account.connected ? null : account.health.summary);
    const identity = account.bot.username ? `@${account.bot.username}` : account.bot.idMasked;
    return h2(
      "article",
      { className: "ddt-card dim-botCard", "data-bot-id": account.botId },
      h2(
        "div",
        { className: "ddt-cardBody dim-botCardBody" },
        h2(
          "div",
          { className: "ddt-accountTop dim-botCardTop" },
          h2(
            "div",
            { className: "ddt-accountIdentity dim-botIdentity" },
            h2(
              "div",
              { className: `ddt-avatar dim-botAvatar ${avatarClass}`, "aria-hidden": "true" },
              h2(LogoGlyph, { size: 29 })
            ),
            h2(
              "div",
              { className: "dim-botName" },
              h2("h3", null, account.bot.name),
              h2("p", null, identity)
            )
          ),
          h2(BotStatusMeta, {
            className: "ddt-health",
            dotClassName: "ddt-dot",
            tone,
            stateLabel: stateLabel2,
            lastCheckedAt: account.health.lastCheckedAt,
            formatCheckedTime: checkedTime2
          })
        ),
        h2(WorkspaceEditor, {
          workspace: account.workspace,
          disabled: Boolean(busy),
          onSave: onWorkspaceSave
        }),
        h2(AgentPresetEditor, {
          agentPreset: account.agentPreset,
          disabled: Boolean(busy),
          onSave: onAgentPresetSave
        }),
        AccountSettings ? h2(AccountSettings, {
          account,
          busy: Boolean(busy),
          onSave: onAccountSettingsSave
        }) : null,
        h2(
          "div",
          { className: "ddt-accountFooter dim-cardFooter" },
          h2(
            "div",
            { className: "dim-cardFooterLayout" },
            h2(
              "div",
              { className: "ddt-actions dim-cardActions" },
              h2(Button3, {
                className: "dim-cardAction",
                onClick: onReconnect,
                disabled: Boolean(busy)
              }, busy === "reconnect" ? t("ui.dingtalk.checking") : account.connected ? t("ui.dingtalk.checkConnection") : t("ui.dingtalk.reconnect")),
              h2(Button3, {
                className: "dim-cardAction",
                kind: "danger",
                onClick: onRequestRemove,
                disabled: Boolean(busy)
              }, t("ui.dingtalk.removeConnection2"))
            ),
            summary ? h2("div", { className: "ddt-summary dim-cardSummary" }, summary) : null,
            testNotice ? h2("div", {
              className: "ddt-summary dim-cardFeedback",
              role: "status"
            }, testNotice) : null
          )
        )
      ),
      removing ? h2(
        "div",
        { className: "ddt-confirm dim-confirm", role: "alertdialog" },
        h2("strong", null, t("ui.common.removeConfirm", { name: account.bot.name })),
        h2("p", null, t("ui.common.removeWarning", { credential: credentialNoun, platform: platformLabel })),
        h2(
          "div",
          { className: "ddt-actions dim-viewActions" },
          h2(Button3, { onClick: onCancelRemove, disabled: Boolean(busy) }, t("ui.dingtalk.keepBot")),
          h2(
            Button3,
            { kind: "danger", onClick: onConfirmRemove, disabled: Boolean(busy) },
            busy === "delete" ? t("ui.dingtalk.removing") : t("ui.dingtalk.removeConnection")
          )
        )
      ) : null
    );
  }
  function SettingsTab({ rpcCall }) {
    const [model, setModel] = React10.useState({
      phase: "loading",
      bots: [],
      totals: { configured: 0, connected: 0 },
      error: null,
      agentPresetCatalog: EMPTY_AGENT_PRESET_CATALOG
    });
    const [credentialOpen, setCredentialOpen] = React10.useState(false);
    const [credentialError, setCredentialError] = React10.useState(null);
    const [busy, setBusy] = React10.useState(false);
    const [busyByBot, setBusyByBot] = React10.useState({});
    const [testNoticeByBot, setTestNoticeByBot] = React10.useState({});
    const [removeTarget, setRemoveTarget] = React10.useState(null);
    const mounted = React10.useRef(true);
    const workspaceFence = useWorkspaceSnapshotFence();
    React10.useEffect(() => {
      const disposeDingtalk = installDingtalkStyles();
      const disposeChannel = installStyles();
      mounted.current = true;
      return () => {
        mounted.current = false;
        disposeChannel();
        disposeDingtalk();
      };
    }, []);
    const invoke = React10.useCallback(async (endpoint, payload = {}, signal) => {
      if (typeof rpcCall !== "function") throw new TypeError(t("ui.common.missingRpc", { channel: channel4 }));
      return api4.unwrapRpcResult(await rpcCall(endpoint, payload, signal));
    }, [rpcCall]);
    const loadStatus = React10.useCallback(async ({ signal, silent = false } = {}) => {
      const workspaceVersion = workspaceFence.beginStatus();
      if (workspaceVersion === null) return;
      if (!silent && mounted.current) setModel((current2) => ({ ...current2, phase: "loading", error: null }));
      try {
        const snapshot = api4.normalizeSnapshot(await invoke(endpoints.status, {}, signal));
        if (!mounted.current || signal?.aborted || !workspaceFence.canCommitStatus(workspaceVersion)) return;
        setModel({
          phase: "ready",
          bots: snapshot.bots,
          totals: snapshot.totals,
          error: null,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
        });
      } catch (error) {
        if (error?.name !== "AbortError" && mounted.current && !signal?.aborted && workspaceFence.canCommitStatus(workspaceVersion)) {
          setModel((current2) => ({
            ...current2,
            phase: silent ? current2.phase : "error",
            error: api4.presentError(error)
          }));
        }
      }
    }, [invoke, workspaceFence]);
    React10.useEffect(() => {
      const controller = new AbortController();
      void loadStatus({ signal: controller.signal });
      return () => controller.abort();
    }, [loadStatus]);
    React10.useEffect(() => {
      if (model.phase !== "ready") return void 0;
      const controller = new AbortController();
      const timer = window.setInterval(
        () => void loadStatus({ signal: controller.signal, silent: true }),
        15e3
      );
      return () => {
        controller.abort();
        window.clearInterval(timer);
      };
    }, [loadStatus, model.phase]);
    const bindCredentials = React10.useCallback(async (values) => {
      const snapshotVersion = workspaceFence.beginMutation();
      setBusy(true);
      setCredentialError(null);
      try {
        const snapshot = api4.normalizeSnapshot(await invoke(
          endpoints.bindCredentials,
          credentialPayload(values)
        ));
        if (!mounted.current) return;
        if (workspaceFence.canCommitMutation(snapshotVersion)) {
          setModel({
            phase: "ready",
            bots: snapshot.bots,
            totals: snapshot.totals,
            error: null,
            agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
          });
        }
        setCredentialOpen(false);
      } catch (error) {
        if (mounted.current) setCredentialError(api4.presentError(error));
      } finally {
        const shouldRefresh = workspaceFence.endMutation();
        if (shouldRefresh && mounted.current) void loadStatus({ silent: true });
        if (mounted.current) setBusy(false);
      }
    }, [invoke, loadStatus, workspaceFence]);
    const botAction = React10.useCallback(async (account, operation, endpoint, payload) => {
      const snapshotVersion = workspaceFence.beginMutation();
      setBusyByBot((current2) => ({ ...current2, [account.botId]: operation }));
      try {
        const value = await invoke(endpoint, payload);
        const snapshot = api4.normalizeSnapshot(value);
        if (mounted.current && workspaceFence.canCommitMutation(snapshotVersion)) {
          setModel({
            phase: "ready",
            bots: snapshot.bots,
            totals: snapshot.totals,
            error: null,
            agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
          });
        }
        if (mounted.current && operation === "reconnect") {
          setTestNoticeByBot((current2) => ({
            ...current2,
            [account.botId]: connectionTestNotice(value)
          }));
        }
      } catch (error) {
        if (operation !== "reconnect") throw error;
        if (mounted.current) {
          setTestNoticeByBot((current2) => ({
            ...current2,
            [account.botId]: t("ui.dingtalk.connectionCheckFailedTryAgainLater")
          }));
        }
      } finally {
        const shouldRefresh = workspaceFence.endMutation();
        if (shouldRefresh && mounted.current) void loadStatus({ silent: true });
        if (mounted.current) setBusyByBot((current2) => {
          const next = { ...current2 };
          delete next[account.botId];
          return next;
        });
      }
    }, [invoke, loadStatus, workspaceFence]);
    const botList = model.bots.length > 0 ? h2(
      "section",
      { className: "dim-listSection" },
      h2(ChannelListHeading, {
        className: "ddt-listHeading",
        title: t("ui.common.connectedBots", { channel: channel4 }),
        connectionLabel
      }),
      h2("ul", { className: "ddt-list dim-botList" }, model.bots.map((account) => h2("li", { key: account.botId }, h2(AccountCard5, {
        account,
        busy: busyByBot[account.botId],
        testNotice: testNoticeByBot[account.botId],
        removing: removeTarget === account.botId,
        onReconnect: () => void botAction(
          account,
          "reconnect",
          endpoints.reconnectBot,
          { botId: account.botId, sendTest: true }
        ),
        onWorkspaceSave: (workspace) => botAction(
          account,
          "workspace",
          endpoints.setWorkspace,
          { botId: account.botId, workspace }
        ),
        onAgentPresetSave: (agentPreset) => botAction(
          account,
          "preset",
          endpoints.setAgentPreset,
          { botId: account.botId, agentPreset }
        ),
        onAccountSettingsSave: AccountSettings && accountSettingsEndpoint ? (payload) => botAction(
          account,
          "settings",
          accountSettingsEndpoint,
          { botId: account.botId, ...payload }
        ) : void 0,
        onRequestRemove: () => setRemoveTarget(account.botId),
        onCancelRemove: () => setRemoveTarget(null),
        onConfirmRemove: async () => {
          await botAction(account, "delete", endpoints.deleteBot, {
            botId: account.botId,
            confirm: true
          });
          if (mounted.current) setRemoveTarget(null);
        }
      }))))
    ) : null;
    return h2(AgentPresetCatalogContext.Provider, {
      value: model.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
    }, h2(
      "section",
      {
        className: `ddt-page ${pageClass} dim-channelPage`,
        "aria-label": t("ui.common.settings", { channel: channel4 })
      },
      h2(
        "div",
        { className: "ddt-heading" },
        h2(
          "div",
          { className: "ddt-tools" },
          h2(
            "div",
            { className: "dim-bindActions" },
            h2(Button3, {
              kind: "credential",
              className: "dim-credentialButton",
              onClick: () => {
                setCredentialOpen((value) => !value);
                setCredentialError(null);
              },
              disabled: busy,
              "aria-pressed": credentialOpen,
              "aria-label": credentialAriaLabel
            }, h2(CredentialActionIcon), credentialOpen ? credentialCloseLabel : credentialOpenLabel)
          ),
          model.totals.configured > 0 ? h2(
            "div",
            { className: "ddt-badge dim-onlineBadge" },
            h2("span", null, t("ui.common.onlineCount", { connected: model.totals.connected, configured: model.totals.configured }))
          ) : null
        )
      ),
      model.phase === "loading" ? h2("div", {
        className: "ddt-card ddt-loading dim-surfaceCard dim-loadingView",
        "aria-busy": "true"
      }, h2("div", { className: "ddt-spinner dim-spinner" }), t("ui.common.loadingStatus", { channel: channel4 })) : model.phase === "error" ? h2(
        "div",
        { className: "ddt-card dim-surfaceCard" },
        h2(
          "div",
          { className: "ddt-inlineError dim-inlineError" },
          h2("h3", null, t("ui.common.cannotReadStatus", { channel: channel4 })),
          h2("p", null, model.error?.message),
          h2(Button3, { onClick: () => void loadStatus() }, t("ui.dingtalk.reload"))
        )
      ) : h2(
        React10.Fragment,
        null,
        credentialOpen ? CredentialPanel ? h2(CredentialPanel, {
          busy,
          error: credentialError,
          onSubmit: bindCredentials,
          onCancel: () => {
            setCredentialOpen(false);
            setCredentialError(null);
          }
        }) : h2(CredentialBindingPanel, {
          channel: channel4,
          secretLabel: "Bot Token",
          secretPlaceholder: tokenPlaceholder,
          busy,
          error: credentialError,
          onSubmit: bindCredentials,
          onCancel: () => {
            setCredentialOpen(false);
            setCredentialError(null);
          }
        }) : null,
        model.bots.length === 0 && !credentialOpen ? h2(
          "div",
          { className: "ddt-card dim-surfaceCard" },
          h2(
            "div",
            { className: "ddt-cardBody ddt-empty dim-surfaceBody dim-emptyView" },
            h2(
              "div",
              { className: "dim-emptyCopy" },
              h2(
                "div",
                { className: "ddt-stateLabel dim-stateLabel" },
                h2("span", { className: "ddt-dot dim-stateDot" }),
                h2("span", null, t("ui.common.noBotsYet", { channel: channel4 }))
              ),
              h2("h3", null, emptyTitle),
              h2("p", null, emptyDescription),
              h2(
                "div",
                { className: "ddt-actions dim-viewActions" },
                h2(Button3, {
                  kind: "primary",
                  onClick: () => setCredentialOpen(true)
                }, emptyActionLabel)
              )
            ),
            h2("div", {
              className: `ddt-brandMark dim-emptyBrand ${avatarClass}`,
              "aria-hidden": "true"
            }, h2(LogoGlyph, { size: 64 }))
          )
        ) : null,
        botList
      )
    ));
  }
  return { SettingsTab, AccountCard: AccountCard5 };
}

// plugin-src/client/channels/discord/styles.js
var DISCORD_STYLE_ID = "dsh-im-x-discord-settings";
var CSS2 = String.raw`
.ddc-page { --ddt-accent: #5865f2; --ddt-accent-deep: #4752c4; --ddt-accent-wash: #eef0ff; }
.ddc-avatar { color: #fff; background: #5865f2; }
.ddc-avatar svg { display: block; }
`;
function installDiscordStyles() {
  if (typeof document === "undefined") return () => {
  };
  const existing = document.querySelector(`style[data-plugin-css="${DISCORD_STYLE_ID}"]`);
  if (existing) return () => {
  };
  const style = document.createElement("style");
  style.dataset.plugin = "@xmanrui/dsh-im";
  style.dataset.pluginCss = DISCORD_STYLE_ID;
  style.textContent = CSS2;
  document.head.appendChild(style);
  return () => style.remove();
}

// plugin-src/client/channels/discord/index.js
var channel = createTokenChannelSettings({
  channel: "Discord",
  endpoints: DISCORD_ENDPOINTS,
  api,
  LogoGlyph: DiscordLogoGlyph,
  installStyles: installDiscordStyles,
  pageClass: "ddc-page",
  avatarClass: "ddc-avatar",
  connectionLabel: t("ui.discord.gatewayPersistentConnection2"),
  tokenPlaceholder: t("ui.discord.enterTheBotTokenFromThe"),
  emptyTitle: t("ui.discord.connectADiscordBot"),
  emptyDescription: t("ui.discord.createABotInTheDeveloper"),
  platformLabel: "Discord Developer Portal"
});
var DiscordSettingsTab = channel.SettingsTab;
var DiscordAccountCard = channel.AccountCard;

// plugin-src/client/channels/feishu/index.js
var React12 = __toESM(require("react"), 1);

// plugin-src/client/channels/feishu/api.js
var CHANNEL_LABEL3 = "Feishu";
var FEISHU_RPC_CHANNEL = "/feishu";
var FEISHU_ENDPOINTS = Object.freeze({
  status: "connection.status",
  beginProvisioning: "provision.begin",
  beginCallbackRepair: "bot.callback-repair.begin",
  beginGroupMessagePermission: "bot.group-message-permission.begin",
  pollProvisioning: "provision.poll",
  cancelProvisioning: "provision.cancel",
  bindCredentials: "bot.bind-credentials",
  reconnectBot: "bot.reconnect",
  disconnectBot: "bot.disconnect",
  deleteBot: "bot.delete",
  setWorkspace: "bot.workspace.set",
  setAgentPreset: "bot.preset.set",
  setGroupResponseMode: "bot.group-response-mode.set",
  // Kept for rolling upgrades. The multi-bot UI never calls these endpoints.
  testConnection: "connection.test",
  disconnect: "connection.disconnect"
});
var FEISHU_REGISTRATION_OPERATIONS = Object.freeze({
  PROVISION: "provision",
  CALLBACK_REPAIR: "callback_repair",
  GROUP_MESSAGE_PERMISSION: "group_message_permission"
});
var CONNECTION_STATES = /* @__PURE__ */ new Set([
  "disconnected",
  "offline",
  "provisioning",
  "connecting",
  "reconnecting",
  "connected",
  "error"
]);
var POLL_STATES = /* @__PURE__ */ new Set([
  "pending",
  "scanned",
  "connecting",
  "connected",
  "expired",
  "failed"
]);
function isRecord3(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function optionalString2(value) {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : void 0;
}
function optionalTimestamp(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.length > 0) {
    const parsed = Date.parse(value);
    return Number.isNaN(parsed) ? void 0 : parsed;
  }
  return void 0;
}
function normalizeGroupResponseMode(value) {
  return value === "all" ? "all" : "mention";
}
function clamp2(value, min, max, fallback) {
  return typeof value === "number" && Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;
}
function normalizeRegistrationOperation(value) {
  if (value === FEISHU_REGISTRATION_OPERATIONS.CALLBACK_REPAIR) {
    return FEISHU_REGISTRATION_OPERATIONS.CALLBACK_REPAIR;
  }
  if (value === FEISHU_REGISTRATION_OPERATIONS.GROUP_MESSAGE_PERMISSION) {
    return FEISHU_REGISTRATION_OPERATIONS.GROUP_MESSAGE_PERMISSION;
  }
  return FEISHU_REGISTRATION_OPERATIONS.PROVISION;
}
function isTargetedAppUpdate(operation) {
  return operation === FEISHU_REGISTRATION_OPERATIONS.CALLBACK_REPAIR || operation === FEISHU_REGISTRATION_OPERATIONS.GROUP_MESSAGE_PERMISSION;
}
function unwrapRpcResult3(result) {
  if (!isRecord3(result) || typeof result.ok !== "boolean") {
    throw new Error(t("ui.common.unrecognizedResponse", { channel: CHANNEL_LABEL3 }));
  }
  if (!result.ok) {
    const message = optionalString2(result.error?.message) ?? t("ui.common.serviceRequestFailed", { channel: CHANNEL_LABEL3 });
    const error = new Error(message);
    error.code = optionalString2(result.error?.code) ?? "FEISHU_RPC_ERROR";
    throw error;
  }
  return result.value;
}
function normalizeProvisioning2(value, now = Date.now()) {
  const source = isRecord3(value?.provisioning) ? value.provisioning : value;
  if (!isRecord3(source)) throw new Error(t("ui.feishu.feishuDidNotReturnQrCode"));
  const attemptId = optionalString2(source.attemptId) ?? optionalString2(source.provisioningId);
  const verificationUrl = optionalString2(source.verificationUrl);
  const qrCodeDataUrl = optionalString2(source.qrCodeDataUrl);
  const submitted = source.submitted === true;
  if (!attemptId || !verificationUrl && !qrCodeDataUrl && !submitted) {
    throw new Error(t("ui.feishu.feishuReturnedIncompleteQrCodeInformation"));
  }
  const explicitExpiry = optionalTimestamp(source.expiresAt);
  const expireIn = clamp2(source.expireIn, 1, 60 * 60, 5 * 60);
  const operation = normalizeRegistrationOperation(source.operation);
  const botId = optionalString2(source.botId);
  if (isTargetedAppUpdate(operation) && !botId) {
    throw new Error(t("ui.feishu.feishuAppUpdateStatusIsMissing"));
  }
  return {
    attemptId,
    operation,
    botId,
    verificationUrl,
    qrCodeDataUrl,
    submitted,
    expiresAt: explicitExpiry ?? now + expireIn * 1e3,
    pollIntervalMs: clamp2(source.pollIntervalMs, 800, 1e4, 1800)
  };
}
function normalizeBot2(value) {
  const source = isRecord3(value) ? value : {};
  return {
    name: optionalString2(source.name) ?? t("ui.feishu.feishuBot"),
    avatarUrl: optionalString2(source.avatarUrl),
    appIdMasked: optionalString2(source.appIdMasked),
    tenantName: optionalString2(source.tenantName),
    domain: source.domain === "lark" ? "lark" : "feishu",
    activated: typeof source.activated === "boolean" || typeof source.activated === "number" ? source.activated : void 0
  };
}
function normalizeHealth(value, connected = false) {
  const source = isRecord3(value) ? value : {};
  const fallbackStatus = connected ? "healthy" : "offline";
  const status = ["healthy", "degraded", "offline", "checking"].includes(source.status) ? source.status : fallbackStatus;
  return {
    status,
    summary: optionalString2(source.summary) ?? (connected ? t("ui.feishu.persistentConnectionIsHealthy") : t("ui.feishu.theBotIsNotConnectedYet")),
    lastCheckedAt: optionalTimestamp(source.lastCheckedAt),
    lastConnectedAt: optionalTimestamp(source.lastConnectedAt)
  };
}
function normalizeError2(value) {
  if (!isRecord3(value)) return void 0;
  const message = optionalString2(value.message);
  if (!message) return void 0;
  return { message, code: optionalString2(value.code) };
}
function authoritativeState(value, connected) {
  if (connected) return "connected";
  const reported = CONNECTION_STATES.has(value) ? value : "disconnected";
  if (reported === "connected" || reported === "connecting" || reported === "reconnecting") {
    return "connecting";
  }
  if (reported === "error") return "error";
  return "offline";
}
function normalizeBotConnection(value, fallbackBotId) {
  if (!isRecord3(value)) throw new Error(t("ui.feishu.feishuReturnedAnInvalidBotStatus"));
  const botId = optionalString2(value.botId) ?? optionalString2(fallbackBotId);
  if (!botId) throw new Error(t("ui.feishu.theFeishuBotIsMissingBotid"));
  const connected = value.connected === true;
  return {
    botId,
    state: authoritativeState(value.state, connected),
    connected,
    configured: value.configured !== false,
    workspace: optionalString2(value.workspace)?.slice(0, 4096) ?? "",
    agentPreset: normalizeAgentPresetId(value.agentPreset),
    groupResponseMode: normalizeGroupResponseMode(value.groupResponseMode),
    groupMessagePermissionGranted: value.groupMessagePermissionGranted === true,
    bot: normalizeBot2(value.bot),
    health: normalizeHealth(value.health, connected),
    error: normalizeError2(value.error)
  };
}
function normalizeBotsSnapshot(value) {
  if (!isRecord3(value)) throw new Error(t("ui.feishu.feishuDidNotReturnConnectionStatus"));
  let sourceBots = Array.isArray(value.bots) ? value.bots : [];
  if (sourceBots.length === 0 && value.configured === true) {
    sourceBots = [{
      botId: optionalString2(value.botId) ?? "legacy-default",
      state: value.state,
      connected: value.connected,
      configured: true,
      bot: value.bot,
      health: value.health,
      error: value.error
    }];
  }
  const seen = /* @__PURE__ */ new Set();
  const bots = [];
  for (const source of sourceBots) {
    const bot = normalizeBotConnection(source);
    if (seen.has(bot.botId)) continue;
    seen.add(bot.botId);
    bots.push(bot);
  }
  const configured = bots.filter((bot) => bot.configured).length;
  const connected = bots.filter((bot) => bot.connected).length;
  const revision = Number.isSafeInteger(value.revision) && value.revision >= 0 ? value.revision : 0;
  const state = CONNECTION_STATES.has(value.state) ? value.state : "disconnected";
  return {
    schemaVersion: value.schemaVersion === 2 ? 2 : 1,
    revision,
    state,
    bots,
    // Derive counts from the authoritative list so stale summary fields never
    // make the UI claim that an unavailable bot is online.
    totals: { configured, connected },
    provisioning: value.provisioning ? normalizeProvisioning2(value.provisioning) : void 0,
    error: normalizeError2(value.error),
    agentPresetCatalog: normalizeAgentPresetCatalog(value.agentPresetCatalog)
  };
}
function normalizeConnectionSnapshot(value) {
  if (!isRecord3(value)) throw new Error(t("ui.feishu.feishuDidNotReturnConnectionStatus"));
  const connected = value.connected === true;
  const reportedState = CONNECTION_STATES.has(value.state) ? value.state : "disconnected";
  const state = connected ? "connected" : reportedState === "connected" ? "connecting" : reportedState;
  const snapshot = {
    state,
    configured: value.configured === true,
    bot: normalizeBot2(value.bot),
    health: normalizeHealth(value.health, connected),
    provisioning: void 0,
    errorMessage: optionalString2(value.error?.message) ?? optionalString2(value.message)
  };
  if (value.provisioning) snapshot.provisioning = normalizeProvisioning2(value.provisioning);
  return snapshot;
}
function normalizePollResult(value) {
  if (!isRecord3(value)) throw new Error(t("ui.feishu.feishuDidNotReturnCreationProgress"));
  const status = POLL_STATES.has(value.status) ? value.status : POLL_STATES.has(value.state) ? value.state : void 0;
  if (!status) throw new Error(t("ui.feishu.feishuReturnedAnUnknownCreationStatus"));
  const normalized = {
    status,
    operation: normalizeRegistrationOperation(value.operation),
    botId: optionalString2(value.botId),
    message: optionalString2(value.error?.message) ?? optionalString2(value.message),
    connection: void 0,
    provisioning: void 0
  };
  if (value.provisioning) normalized.provisioning = normalizeProvisioning2(value.provisioning);
  if (status === "connected" && isRecord3(value.connection)) {
    normalized.connection = value.connection.botId ? normalizeBotConnection(value.connection) : normalizeConnectionSnapshot(value.connection);
  }
  return normalized;
}
function presentError3(error) {
  const raw = optionalString2(error?.message) ?? t("ui.feishu.theOperationFailedTryAgainLater");
  const message = raw.replace(/(client[_-]?secret|app[_-]?secret|secret|token)\s*[:=]\s*[^\s,;]+/gi, "$1=\u2022\u2022\u2022\u2022\u2022\u2022").slice(0, 240);
  return { message, code: optionalString2(error?.code) };
}
function formatRemaining2(milliseconds) {
  const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1e3));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// plugin-src/client/lifecycle.js
var React11 = __toESM(require("react"), 1);
function createPollScheduler({ setTimeoutFn, clearTimeoutFn }) {
  let disposed = false;
  let timer;
  return {
    get disposed() {
      return disposed;
    },
    schedule(callback, delayMs) {
      if (disposed) return false;
      if (timer !== void 0) clearTimeoutFn(timer);
      timer = setTimeoutFn(() => {
        timer = void 0;
        if (!disposed) void callback();
      }, delayMs);
      return true;
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      if (timer !== void 0) clearTimeoutFn(timer);
      timer = void 0;
    }
  };
}
function createAnimationFrameScheduler({ requestFrame, cancelFrame }) {
  let disposed = false;
  const frames = /* @__PURE__ */ new Set();
  const keyedFrames = /* @__PURE__ */ new Map();
  return {
    schedule(callback, key) {
      if (disposed) return false;
      const previous = key === void 0 ? void 0 : keyedFrames.get(key);
      if (previous !== void 0) {
        keyedFrames.delete(key);
        frames.delete(previous);
        cancelFrame(previous);
      }
      let frame;
      let completed = false;
      frame = requestFrame(() => {
        completed = true;
        if (frame !== void 0) frames.delete(frame);
        if (key !== void 0 && keyedFrames.get(key) === frame) keyedFrames.delete(key);
        if (!disposed) callback();
      });
      if (!completed) {
        frames.add(frame);
        if (key !== void 0) keyedFrames.set(key, frame);
      }
      return true;
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      for (const frame of frames) cancelFrame(frame);
      frames.clear();
      keyedFrames.clear();
    }
  };
}
function useAnimationFrameScheduler() {
  const schedulerRef = React11.useRef(null);
  React11.useEffect(() => {
    const scheduler = createAnimationFrameScheduler({
      requestFrame: (callback) => window.requestAnimationFrame(callback),
      cancelFrame: (frame) => window.cancelAnimationFrame(frame)
    });
    schedulerRef.current = scheduler;
    return () => {
      scheduler.dispose();
      if (schedulerRef.current === scheduler) schedulerRef.current = null;
    };
  }, []);
  return React11.useCallback(
    (callback, key) => schedulerRef.current?.schedule(callback, key) ?? false,
    []
  );
}

// plugin-src/client/channels/feishu/styles.js
var FEISHU_STYLE_ID = "beihuixinghe-dsh-feishu-settings";
var CSS3 = String.raw`
.bxf-page {
  --bxf-accent: var(--dsw-alias-state-business-primary, #3370ff);
  --bxf-success: var(--dsw-alias-state-success-primary, #20a162);
  --bxf-warning: var(--dsw-alias-state-warn-primary, #d97706);
  --bxf-error: var(--dsw-alias-state-error-primary, #d54941);
  box-sizing: border-box;
  width: 100%;
  max-width: 860px;
  color: var(--dsw-alias-label-primary, #1f2329);
  display: flex;
  flex-direction: column;
  container-type: inline-size;
  gap: 18px;
  padding: 2px 0 24px;
}

.bxf-page *, .bxf-page *::before, .bxf-page *::after { box-sizing: border-box; }

.bxf-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
}

.bxf-headingCopy { min-width: 0; }
.bxf-heading h2, .bxf-heading p, .bxf-card h3, .bxf-card p { margin: 0; }

.bxf-eyebrow {
  color: var(--dsw-alias-label-tertiary, #8f959e);
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: .08em;
  text-transform: uppercase;
  margin-bottom: 3px;
}

.bxf-heading h2 {
  font-size: 20px;
  line-height: 28px;
  font-weight: 650;
  letter-spacing: -.015em;
}

.bxf-heading p {
  max-width: 540px;
  color: var(--dsw-alias-label-secondary, #646a73);
  font-size: 13px;
  line-height: 20px;
  margin-top: 5px;
  white-space: nowrap;
}

.bxf-headingTools {
  width: 100%;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 8px;
}

.bxf-totalBadge {
  min-height: 28px;
  display: inline-flex;
  align-items: baseline;
  gap: 3px;
  border-radius: 999px;
  padding: 4px 10px;
  color: var(--dsw-alias-label-secondary, #646a73);
  background: var(--dsw-alias-bg-module-platform, #f2f3f5);
  font-size: 11px;
  line-height: 16px;
  white-space: nowrap;
}

.bxf-totalBadge strong { color: var(--bxf-success); font-size: 13px; }

.bxf-card {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--dsw-alias-border-l2, #dee0e3);
  border-radius: 14px;
  background: var(--dsw-alias-bg-layer-3, #fff);
  box-shadow: var(--dsw-shadow-lv1, 0 3px 12px rgba(31, 35, 41, .05));
}

.bxf-card::before {
  content: "";
  pointer-events: none;
  position: absolute;
  inset: 0 0 auto;
  height: 88px;
  background:
    radial-gradient(circle at 86% -35%, color-mix(in srgb, var(--bxf-accent) 18%, transparent), transparent 68%);
  opacity: .85;
}

.bxf-cardBody { position: relative; padding: 24px; }

.bxf-intro {
  min-height: 250px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 172px;
  gap: 32px;
  align-items: center;
}

.bxf-introCopy { max-width: 500px; }

.bxf-stateLabel {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--dsw-alias-label-secondary, #646a73);
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  margin-bottom: 13px;
}

.bxf-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--dsw-alias-label-tertiary, #8f959e);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--dsw-alias-label-tertiary, #8f959e) 12%, transparent);
}

.bxf-dot[data-tone="success"] {
  background: var(--bxf-success);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--bxf-success) 13%, transparent);
}

.bxf-dot[data-tone="warning"] {
  background: var(--bxf-warning);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--bxf-warning) 13%, transparent);
}

.bxf-dot[data-tone="error"] {
  background: var(--bxf-error);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--bxf-error) 13%, transparent);
}

.bxf-intro h3 {
  font-size: 24px;
  line-height: 34px;
  font-weight: 650;
  letter-spacing: -.02em;
}

.bxf-introCopy > p {
  max-width: 490px;
  color: var(--dsw-alias-label-secondary, #646a73);
  font-size: 14px;
  line-height: 23px;
  margin-top: 8px;
}

.bxf-note {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  color: var(--dsw-alias-label-tertiary, #8f959e);
  font-size: 12px;
  line-height: 18px;
  margin-top: 16px;
}

.bxf-note svg { flex: none; margin-top: 1px; }

.bxf-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}

.bxf-button {
  appearance: none;
  min-height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border: 1px solid var(--dsw-alias-border-l2, #dee0e3);
  border-radius: 8px;
  padding: 7px 13px;
  color: var(--dsw-alias-label-primary, #1f2329);
  background: var(--dsw-alias-bg-layer-1, #fff);
  font: inherit;
  font-size: 13px;
  font-weight: 550;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
  transition: background .15s var(--ds-ease-in-out, ease), border-color .15s var(--ds-ease-in-out, ease), transform .15s var(--ds-ease-in-out, ease);
}

.bxf-button:hover:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-hover, #f2f3f5);
  border-color: var(--dsw-alias-border-l1, #c9cdd4);
}

.bxf-button:active:not(:disabled) { transform: translateY(1px); }

.bxf-button:focus-visible, .bxf-link:focus-visible {
  outline: 2px solid var(--bxf-accent);
  outline-offset: 2px;
}

.bxf-button:disabled { cursor: not-allowed; opacity: .55; }

.bxf-button[data-kind="primary"] {
  border-color: var(--bxf-accent);
  color: #fff;
  background: var(--bxf-accent);
  box-shadow: 0 4px 12px color-mix(in srgb, var(--bxf-accent) 24%, transparent);
}

.bxf-button[data-kind="primary"]:hover:not(:disabled) {
  border-color: color-mix(in srgb, var(--bxf-accent) 86%, #000);
  background: color-mix(in srgb, var(--bxf-accent) 90%, #000);
}

.bxf-button[data-kind="danger"] { color: var(--bxf-error); }
.bxf-button[data-size="small"] { min-height: 32px; padding: 5px 10px; font-size: 12px; }
.bxf-bindButton { flex: none; white-space: nowrap; }

.bxf-provisionCard {
  border-color: color-mix(in srgb, var(--bxf-accent) 32%, var(--dsw-alias-border-l2, #dee0e3));
}

.bxf-markStage {
  position: relative;
  width: 156px;
  height: 156px;
  display: grid;
  place-items: center;
  justify-self: end;
}

.bxf-markStage::before, .bxf-markStage::after {
  content: "";
  position: absolute;
  border-radius: 50%;
}

.bxf-markStage::before {
  inset: 12px;
  border: 1px solid color-mix(in srgb, var(--bxf-accent) 18%, var(--dsw-alias-border-l2, #dee0e3));
  background: color-mix(in srgb, var(--bxf-accent) 4%, var(--dsw-alias-bg-layer-1, #fff));
}

.bxf-markStage::after {
  inset: 0;
  border: 1px dashed color-mix(in srgb, var(--bxf-accent) 16%, transparent);
  animation: bxf-rotate 18s linear infinite;
}

.bxf-brandMark {
  position: relative;
  z-index: 1;
  width: 68px;
  height: 68px;
  display: grid;
  place-items: center;
  border-radius: 20px;
  color: #fff;
  background: var(--bxf-accent);
  box-shadow: 0 12px 28px color-mix(in srgb, var(--bxf-accent) 28%, transparent);
}

.bxf-qrLayout {
  display: grid;
  grid-template-columns: 236px minmax(0, 1fr);
  align-items: center;
  gap: 32px;
}

.bxf-qrColumn { min-width: 0; }

.bxf-qrFrame {
  position: relative;
  width: 222px;
  height: 222px;
  display: grid;
  place-items: center;
  border: 1px solid var(--dsw-alias-border-l2, #dee0e3);
  border-radius: 14px;
  padding: 13px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(31, 35, 41, .07);
}

.bxf-qrFrame::before, .bxf-qrFrame::after {
  content: "";
  position: absolute;
  width: 24px;
  height: 24px;
  border-color: var(--bxf-accent);
  border-style: solid;
}

.bxf-qrFrame::before { inset: -3px auto auto -3px; border-width: 2px 0 0 2px; border-radius: 5px 0 0; }
.bxf-qrFrame::after { inset: auto -3px -3px auto; border-width: 0 2px 2px 0; border-radius: 0 0 5px; }
.bxf-qrFrame img { width: 100%; height: 100%; display: block; object-fit: contain; }

.bxf-qrFallback {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  border-radius: 8px;
  color: var(--bxf-accent);
  background: #f7f9ff;
  text-align: center;
  padding: 20px;
}

.bxf-qrFallback span { display: block; color: #646a73; font-size: 12px; line-height: 18px; margin-top: 8px; }

.bxf-expiredOverlay {
  position: absolute;
  inset: 10px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  color: #1f2329;
  background: rgba(255, 255, 255, .94);
  backdrop-filter: blur(3px);
  font-size: 13px;
  font-weight: 600;
  text-align: center;
}

.bxf-countdown {
  width: 222px;
  color: var(--dsw-alias-label-tertiary, #8f959e);
  font-variant-numeric: tabular-nums;
  font-size: 11px;
  line-height: 17px;
  margin-top: 11px;
}

.bxf-countdownTop { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.bxf-progress { height: 3px; overflow: hidden; border-radius: 99px; background: var(--dsw-alias-bg-module-platform, #f2f3f5); margin-top: 6px; }
.bxf-progress > span { display: block; width: var(--bxf-progress, 100%); height: 100%; border-radius: inherit; background: var(--bxf-accent); transition: width 1s linear; }

.bxf-qrCopy h3 { font-size: 20px; line-height: 29px; font-weight: 650; }
.bxf-qrCopy > p { color: var(--dsw-alias-label-secondary, #646a73); font-size: 13px; line-height: 21px; margin-top: 7px; }

.bxf-steps { counter-reset: bxf-step; display: flex; flex-direction: column; gap: 11px; margin: 20px 0 0; padding: 0; list-style: none; }
.bxf-steps li { counter-increment: bxf-step; display: grid; grid-template-columns: 23px minmax(0, 1fr); align-items: start; gap: 9px; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; line-height: 19px; }
.bxf-steps li::before { content: counter(bxf-step); width: 21px; height: 21px; display: grid; place-items: center; border: 1px solid var(--dsw-alias-border-l2, #dee0e3); border-radius: 50%; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-bg-layer-1, #fff); font-size: 10px; font-weight: 650; }

.bxf-connecting { min-height: 292px; display: grid; place-items: center; text-align: center; padding: 36px 24px; }
.bxf-connectingCopy { max-width: 430px; }
.bxf-orbit { position: relative; width: 86px; height: 86px; display: grid; place-items: center; margin: 0 auto 22px; }
.bxf-orbit::before, .bxf-orbit::after { content: ""; position: absolute; border-radius: 50%; }
.bxf-orbit::before { inset: 3px; border: 1px solid color-mix(in srgb, var(--bxf-accent) 24%, transparent); animation: bxf-pulse 1.8s var(--ds-ease-in-out, ease) infinite; }
.bxf-orbit::after { inset: 0; border: 2px solid transparent; border-top-color: var(--bxf-accent); animation: bxf-rotate 1.2s linear infinite; }
.bxf-orbitCore { width: 50px; height: 50px; display: grid; place-items: center; border-radius: 16px; color: var(--bxf-accent); background: color-mix(in srgb, var(--bxf-accent) 9%, var(--dsw-alias-bg-layer-1, #fff)); }
.bxf-connecting h3 { font-size: 20px; line-height: 29px; }
.bxf-connecting p { color: var(--dsw-alias-label-secondary, #646a73); font-size: 13px; line-height: 21px; margin-top: 7px; }
.bxf-connectingCompact { min-height: 248px; }

.bxf-inlineError {
  min-height: 190px;
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  align-content: center;
  gap: 15px;
  padding: 28px;
}

.bxf-inlineError h3 { font-size: 17px; line-height: 25px; margin: 0; }
.bxf-inlineError p { color: var(--dsw-alias-label-secondary, #646a73); font-size: 13px; line-height: 21px; margin-top: 5px; overflow-wrap: anywhere; }

.bxf-listSection { display: flex; flex-direction: column; gap: 10px; }
.bxf-listHeading { min-height: 28px; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 0 2px; }
.bxf-listHeading h3 { font-size: 14px; line-height: 22px; font-weight: 650; margin: 0; }
.bxf-botList { display: flex; flex-direction: column; gap: 12px; margin: 0; padding: 0; list-style: none; }
.bxf-botList > li { min-width: 0; }
.bxf-botCard:focus { outline: none; }
.bxf-botCard:focus-visible { outline: 2px solid var(--bxf-accent); outline-offset: 2px; }

.bxf-connectedTop { display: flex; align-items: center; justify-content: space-between; gap: 20px; }
.bxf-botIdentity { min-width: 0; display: flex; align-items: center; gap: 13px; }
.bxf-avatar { flex: none; width: 48px; height: 48px; display: grid; place-items: center; overflow: hidden; border: 1px solid var(--dsw-alias-border-l2, #e5e6eb); border-radius: 14px; background: var(--dsw-alias-bg-layer-1, #fff); box-shadow: 0 1px 3px rgb(31 35 41 / 7%); }
.bxf-botName { min-width: 0; }
.bxf-botName h3 { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 17px; line-height: 24px; font-weight: 650; }
.bxf-botName p { overflow: hidden; color: var(--dsw-alias-label-tertiary, #8f959e); font-family: var(--ds-font-family-code, monospace); font-size: 12px; line-height: 18px; text-overflow: ellipsis; white-space: nowrap; margin-top: 2px; }

.bxf-healthPill { flex: none; display: inline-flex; align-items: center; gap: 7px; min-height: 28px; border-radius: 999px; padding: 4px 10px; color: var(--bxf-success); background: color-mix(in srgb, var(--bxf-success) 10%, transparent); font-size: 12px; font-weight: 600; line-height: 18px; }
.bxf-healthPill[data-health="degraded"], .bxf-healthPill[data-health="checking"], .bxf-healthPill[data-health="connecting"] { color: var(--bxf-warning); background: color-mix(in srgb, var(--bxf-warning) 10%, transparent); }
.bxf-healthPill[data-health="offline"], .bxf-healthPill[data-health="error"] { color: var(--bxf-error); background: color-mix(in srgb, var(--bxf-error) 10%, transparent); }


.bxf-responseMode { min-width: 0; display: grid; grid-template-columns: minmax(0, 1fr) max-content; align-items: center; column-gap: 10px; row-gap: 5px; margin-top: 6px; padding: 8px 10px; border: 1px solid var(--dsw-alias-border-l1, #eef0f3); border-radius: 9px; background: var(--dsw-alias-bg-module-platform, #f7f8fa); }
.bxf-responseModeHeader { display: contents; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; line-height: normal; }
.bxf-responseModeHeader > span:first-child { grid-column: 1; grid-row: 1; white-space: nowrap; }
.bxf-responseModeStatus { grid-column: 2; grid-row: 1; color: var(--dsw-alias-label-tertiary, #8f959e); font-size: 12px; white-space: nowrap; }
.bxf-responseModeSelect { min-width: 0; width: 100%; grid-column: 1 / -1; grid-row: 2; height: 32px; padding: 0 30px 0 9px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 7px; color: var(--dsw-alias-label-primary, #1f2329); background-color: var(--dsw-alias-bg-layer-1, #fff); font: inherit; font-size: 12px; cursor: pointer; transition: border-color .16s ease, box-shadow .16s ease, background-color .16s ease; }
.bxf-responseModeSelect:hover:not(:disabled) { border-color: color-mix(in srgb, var(--bxf-accent) 45%, var(--dsw-alias-border-l2, #dfe1e5)); }
.bxf-responseModeSelect:focus-visible { outline: none; border-color: var(--bxf-accent); box-shadow: 0 0 0 2px color-mix(in srgb, var(--bxf-accent) 16%, transparent); }
.bxf-responseModeSelect:disabled { cursor: not-allowed; opacity: .55; }
.bxf-responseModeHelp { grid-column: 1 / -1; grid-row: 3; color: var(--dsw-alias-label-tertiary, #8f959e); font-size: 11px; line-height: 1.45; }
.bxf-responseModePermissionAction { grid-column: 1 / -1; grid-row: 4; display: flex; justify-content: flex-start; margin-top: 2px; }
.bxf-responseModePermissionButton { min-height: 28px; padding: 3px 9px; color: var(--bxf-accent); border-color: color-mix(in srgb, var(--bxf-accent) 30%, var(--dsw-alias-border-l2, #dfe1e5)); background: var(--dsw-alias-bg-layer-1, #fff); }
.bxf-responseModePermissionButton:hover:not(:disabled) { background: color-mix(in srgb, var(--bxf-accent) 7%, transparent); }
.bxf-responseModeError { grid-column: 1 / -1; grid-row: 5; color: var(--bxf-error); font-size: 12px; line-height: 1.4; margin: 0; }

.bxf-botProvision {
  position: relative;
  margin-top: 14px;
  scroll-margin-block: 20px;
  animation: bxf-revealProvision .2s var(--ds-ease-out, ease-out) both;
}
.bxf-botProvision:focus { outline: none; }
.bxf-botProvision:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--bxf-accent) 75%, transparent);
  outline-offset: 3px;
  border-radius: 12px;
}
.bxf-botProvision > .bxf-provisionCard {
  border-radius: 11px;
  box-shadow: none;
  background: color-mix(in srgb, var(--bxf-accent) 2.5%, var(--dsw-alias-bg-layer-3, #fff));
}
.bxf-botProvision .bxf-cardBody { padding: 18px; }
.bxf-botProvision .bxf-qrLayout {
  grid-template-columns: 184px minmax(0, 1fr);
  align-items: start;
  gap: 24px;
}
.bxf-botProvision .bxf-qrFrame { width: 176px; height: 176px; padding: 10px; border-radius: 11px; }
.bxf-botProvision .bxf-countdown { width: 176px; }
.bxf-botProvision .bxf-qrCopy h3 { font-size: 18px; line-height: 26px; }
.bxf-botProvision .bxf-steps { gap: 8px; margin-top: 14px; }
.bxf-botProvision .bxf-actions { margin-top: 16px; }
.bxf-botProvision .bxf-inlineError { min-height: 160px; padding: 22px; }

.bxf-connectedFooter { display: flex; align-items: center; justify-content: space-between; gap: 15px; margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--dsw-alias-border-l1, #eef0f3); }
.bxf-healthSummary { min-width: 0; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; line-height: 18px; }
.bxf-healthSummary[data-error="true"] { color: var(--bxf-error); }
.bxf-botActions { flex: none; flex-wrap: nowrap; gap: 8px; margin-top: 0; justify-content: flex-end; }
.bxf-botActions .bxf-button { flex: none; white-space: nowrap; }
.bxf-botActions .bxf-repairButton { color: var(--bxf-accent); border-color: color-mix(in srgb, var(--bxf-accent) 35%, var(--dsw-alias-border-l2, #dee0e3)); }
.bxf-botActions .bxf-repairButton:hover:not(:disabled) { background: color-mix(in srgb, var(--bxf-accent) 7%, transparent); }

.bxf-confirm {
  border-top: 1px solid var(--dsw-alias-border-l2, #dee0e3);
  background: color-mix(in srgb, var(--bxf-error) 4%, var(--dsw-alias-bg-module-platform, #f7f8fa));
  padding: 17px 24px 20px;
}
.bxf-confirm:focus { outline: none; }
.bxf-confirm h4 { font-size: 13px; line-height: 20px; margin: 0; }
.bxf-confirm p { color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; line-height: 19px; margin: 4px 0 0; }
.bxf-confirm .bxf-actions { margin-top: 12px; }

.bxf-error { min-height: 252px; display: grid; grid-template-columns: 44px minmax(0, 1fr); align-content: center; gap: 15px; padding: 30px; }
.bxf-errorIcon { width: 44px; height: 44px; display: grid; place-items: center; border-radius: 13px; color: var(--bxf-error); background: color-mix(in srgb, var(--bxf-error) 9%, transparent); }
.bxf-error h3 { font-size: 17px; line-height: 25px; }
.bxf-error p { color: var(--dsw-alias-label-secondary, #646a73); font-size: 13px; line-height: 21px; margin-top: 5px; overflow-wrap: anywhere; }
.bxf-errorCode { display: inline-block; color: var(--dsw-alias-label-tertiary, #8f959e); font-family: var(--ds-font-family-code, monospace); font-size: 11px; margin-top: 7px; }

.bxf-statusNotice {
  display: flex;
  align-items: center;
  gap: 9px;
  border: 1px solid color-mix(in srgb, var(--bxf-warning) 28%, var(--dsw-alias-border-l2, #dee0e3));
  border-radius: 10px;
  padding: 9px 11px;
  color: var(--dsw-alias-label-secondary, #646a73);
  background: color-mix(in srgb, var(--bxf-warning) 5%, var(--dsw-alias-bg-layer-1, #fff));
  font-size: 12px;
  line-height: 18px;
}
.bxf-statusNotice > svg { flex: none; color: var(--bxf-warning); }
.bxf-statusNotice > span { min-width: 0; flex: 1; overflow-wrap: anywhere; }

.bxf-skeleton { min-height: 260px; padding: 28px; }
.bxf-skeletonLine { height: 12px; border-radius: 999px; background: linear-gradient(90deg, var(--dsw-alias-bg-module-platform, #f2f3f5), color-mix(in srgb, var(--dsw-alias-label-tertiary, #8f959e) 10%, transparent), var(--dsw-alias-bg-module-platform, #f2f3f5)); background-size: 220% 100%; animation: bxf-shimmer 1.5s linear infinite; }
.bxf-skeletonLine:nth-child(1) { width: 92px; }
.bxf-skeletonLine:nth-child(2) { width: 44%; height: 22px; margin-top: 23px; }
.bxf-skeletonLine:nth-child(3) { width: 72%; margin-top: 14px; }
.bxf-skeletonLine:nth-child(4) { width: 58%; margin-top: 9px; }
.bxf-skeletonBox { width: 138px; height: 38px; border-radius: 8px; background: var(--dsw-alias-bg-module-platform, #f2f3f5); margin-top: 28px; }

.bxf-visuallyHidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }

@keyframes bxf-rotate { to { transform: rotate(360deg); } }
@keyframes bxf-pulse { 0%, 100% { transform: scale(.9); opacity: .45; } 50% { transform: scale(1.08); opacity: 1; } }
@keyframes bxf-shimmer { to { background-position: -220% 0; } }
@keyframes bxf-revealProvision { from { opacity: 0; transform: translateY(-5px); } }

@container (max-width: 620px) {
  .bxf-headingTools { gap: 6px; }
  .bxf-headingTools .bxf-totalBadge { padding-inline: 8px; }
  .bxf-headingTools .bxf-bindButton { padding-inline: 10px; }
}

@media (max-width: 680px) {
  .bxf-intro { grid-template-columns: minmax(0, 1fr); }
  .bxf-markStage { display: none; }
  .bxf-qrLayout { grid-template-columns: minmax(0, 1fr); justify-items: center; }
  .bxf-botProvision .bxf-qrLayout { grid-template-columns: minmax(0, 1fr); }
  .bxf-qrCopy { width: 100%; }
  .bxf-connectedTop { align-items: flex-start; flex-direction: column; }
  .bxf-inlineError { grid-template-columns: minmax(0, 1fr); padding: 20px; }
  .bxf-statusNotice { align-items: flex-start; flex-wrap: wrap; }
  .bxf-cardBody { padding: 20px; }
}

@media (prefers-reduced-motion: reduce) {
  .bxf-page *, .bxf-page *::before, .bxf-page *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition-duration: .01ms !important; }
}
`;
function installFeishuStyles() {
  if (typeof document === "undefined") {
    return () => {
    };
  }
  const existing = document.querySelector(
    `style[data-plugin-css="${FEISHU_STYLE_ID}"]`
  );
  if (existing) {
    return () => {
    };
  }
  const style = document.createElement("style");
  style.dataset.plugin = "@xmanrui/dsh-feishu";
  style.dataset.pluginCss = FEISHU_STYLE_ID;
  style.textContent = CSS3;
  document.head.appendChild(style);
  return () => {
    style.remove();
  };
}

// plugin-src/client/channels/feishu/index.js
var CALLBACK_REPAIR_OPERATION = FEISHU_REGISTRATION_OPERATIONS.CALLBACK_REPAIR;
var GROUP_MESSAGE_PERMISSION_OPERATION = FEISHU_REGISTRATION_OPERATIONS.GROUP_MESSAGE_PERMISSION;
function isCallbackRepair(value) {
  return value?.operation === CALLBACK_REPAIR_OPERATION;
}
function isGroupMessagePermission(value) {
  return value?.operation === GROUP_MESSAGE_PERMISSION_OPERATION;
}
function isTargetedAppUpdate2(value) {
  return isCallbackRepair(value) || isGroupMessagePermission(value);
}
function SvgIcon({ children, size = 18, className, viewBox = "0 0 24 24" }) {
  return h2("svg", {
    width: size,
    height: size,
    viewBox,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    className
  }, children);
}
function RobotIcon({ size = 26 }) {
  return h2(
    SvgIcon,
    { size },
    h2("rect", {
      x: "5",
      y: "7.5",
      width: "14",
      height: "11",
      rx: "4",
      stroke: "currentColor",
      strokeWidth: "1.7"
    }),
    h2("path", {
      d: "M12 4.5v3M8.7 12h.01M15.3 12h.01M9.2 15.3c1.67 1.08 3.93 1.08 5.6 0M3.5 11.5v3M20.5 11.5v3",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinecap: "round"
    })
  );
}
function AlertIcon({ size = 22 }) {
  return h2(
    SvgIcon,
    { size },
    h2("path", {
      d: "M12 3.4 21 19H3L12 3.4Z",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinejoin: "round"
    }),
    h2("path", {
      d: "M12 9v4.4M12 16.6v.01",
      stroke: "currentColor",
      strokeWidth: "1.9",
      strokeLinecap: "round"
    })
  );
}
function QrIcon({ size = 58 }) {
  return h2(SvgIcon, { size }, h2("path", {
    d: "M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h2v2h-2v-2Zm4 0h2v4h-2v-4Zm-4 4h4v2h-4v-2Z",
    fill: "currentColor"
  }));
}
var Button5 = React12.forwardRef(function Button6({ children, kind = "secondary", size, icon, className = "", ...props }, ref) {
  return h2("button", {
    ...props,
    ref,
    type: "button",
    className: `bxf-button ${className}`.trim(),
    "data-kind": kind,
    "data-size": size
  }, icon, h2("span", null, children));
});
function BrandMark() {
  return h2("div", { className: "bxf-brandMark" }, h2(RobotIcon, { size: 34 }));
}
function Heading2({ totals, onAdd, onCredential, credentialOpen, adding, busy, addButtonRef }) {
  const hasBots = totals.configured > 0;
  return h2(
    "div",
    { className: "bxf-heading" },
    h2(
      "div",
      { className: "bxf-headingTools" },
      h2(
        "div",
        { className: "dim-bindActions" },
        h2(Button5, {
          kind: "primary",
          size: "small",
          className: "bxf-bindButton dim-scanButton",
          onClick: onAdd,
          disabled: adding || busy,
          ref: addButtonRef,
          "aria-busy": busy ? "true" : void 0,
          "aria-label": t("ui.feishu.connectFeishuBotByQrCode"),
          icon: h2(QrActionIcon)
        }, adding ? t("ui.dingtalk.connecting") : t("ui.dingtalk.scanQrCode")),
        h2(Button5, {
          kind: "credential",
          size: "small",
          className: "dim-credentialButton",
          onClick: onCredential,
          disabled: adding || busy,
          "aria-pressed": credentialOpen,
          "aria-label": t("ui.feishu.connectAFeishuBotWithApp"),
          icon: h2(CredentialActionIcon)
        }, credentialOpen ? t("ui.dingtalk.hideCredentials") : t("ui.dingtalk.manualSetup"))
      ),
      hasBots ? h2("div", {
        className: "bxf-totalBadge dim-onlineBadge",
        "aria-label": t("ui.common.botsOnline", { connected: totals.connected, configured: totals.configured })
      }, h2("span", null, t("ui.common.onlineCount", { connected: totals.connected, configured: totals.configured }))) : null
    )
  );
}
function LoadingView2() {
  return h2(
    "div",
    {
      className: "bxf-card dim-surfaceCard dim-loadingView",
      "aria-busy": "true",
      "aria-label": t("ui.feishu.loadingFeishuBots")
    },
    h2("div", { className: "dim-spinner", "aria-hidden": "true" }),
    h2("span", null, t("ui.feishu.loadingFeishuConnectionStatus"))
  );
}
function EmptyView2({ onStart, busy }) {
  return h2(
    "div",
    { className: "bxf-card dim-surfaceCard" },
    h2(
      "div",
      { className: "bxf-cardBody bxf-intro dim-surfaceBody dim-emptyView" },
      h2(
        "div",
        { className: "bxf-introCopy dim-emptyCopy" },
        h2(
          "div",
          { className: "bxf-stateLabel dim-stateLabel" },
          h2("span", { className: "bxf-dot dim-stateDot" }),
          h2("span", null, t("ui.feishu.noBotConnectedYet"))
        ),
        h2("h3", null, t("ui.feishu.scanToCreateYourFirstFeishu")),
        h2("p", null, t("ui.feishu.noAppIdIsRequiredYou")),
        h2(
          "div",
          { className: "bxf-actions dim-viewActions" },
          h2(Button5, {
            kind: "primary",
            onClick: onStart,
            disabled: busy,
            "aria-busy": busy ? "true" : void 0
          }, busy ? t("ui.dingtalk.generatingQrCode") : t("ui.feishu.generateFeishuQrCode"))
        )
      ),
      h2("div", { className: "bxf-markStage dim-emptyBrand", "aria-hidden": "true" }, h2(BrandMark))
    )
  );
}
function safeVerificationHref(value) {
  if (!value) return void 0;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && [
      "accounts.feishu.cn",
      "accounts.larksuite.com",
      "open.feishu.cn",
      "open.larksuite.com"
    ].includes(url.hostname) && !url.port && !url.username && !url.password ? url.toString() : void 0;
  } catch {
    return void 0;
  }
}
function safeQrSource2(value) {
  if (!value) return void 0;
  return /^data:image\/(?:png|webp|svg\+xml)(?:;charset=[^;,]+)?;base64,/i.test(value) ? value : void 0;
}
function QrPane({ provision, now, onRefresh, onCancel, busy }) {
  const [imageFailed, setImageFailed] = React12.useState(false);
  const qrSource = safeQrSource2(provision.qrCodeDataUrl);
  const href = safeVerificationHref(provision.verificationUrl);
  const remaining = Math.max(0, provision.expiresAt - now);
  const expired = provision.expired === true || remaining === 0;
  const progress = Math.min(1, remaining / Math.max(1, provision.durationMs ?? remaining));
  const repairing = isCallbackRepair(provision);
  const grantingGroupMessages = isGroupMessagePermission(provision);
  const botName = provision.botName ?? t("ui.feishu.thisBot");
  React12.useEffect(() => setImageFailed(false), [qrSource]);
  return h2(
    "div",
    { className: "bxf-card bxf-provisionCard dim-surfaceCard" },
    h2(
      "div",
      { className: "bxf-cardBody bxf-qrLayout dim-surfaceBody dim-qrLayout" },
      h2(
        "div",
        { className: "bxf-qrColumn dim-qrColumn" },
        h2(
          "div",
          { className: "bxf-qrFrame dim-qrFrame" },
          qrSource && !imageFailed ? h2("img", {
            src: qrSource,
            alt: repairing ? t("ui.feishu.repairQrAlt", { name: botName }) : grantingGroupMessages ? t("ui.feishu.groupQrAlt", { name: botName }) : t("ui.feishu.oneTimeAuthorizationQrCodeFor"),
            onError: () => setImageFailed(true)
          }) : h2(
            "div",
            { className: "bxf-qrFallback dim-qrFallback" },
            h2("div", null, h2(QrIcon), h2("span", null, t("ui.feishu.theQrCodeIsNotReady")))
          ),
          expired ? h2(
            "div",
            { className: "bxf-expiredOverlay dim-qrExpired", role: "status" },
            h2("div", null, t("ui.dingtalk.qrCodeExpired"), h2("br"), t("ui.feishu.refreshAndScanAgain"))
          ) : null
        ),
        h2(
          "div",
          {
            className: "bxf-countdown dim-countdown",
            "aria-label": expired ? t("ui.dingtalk.qrCodeExpired") : t("ui.common.qrRemaining", { remaining: formatRemaining2(remaining) })
          },
          h2(
            "div",
            { className: "bxf-countdownTop dim-countdownTop", "aria-hidden": "true" },
            h2("span", null, expired ? t("ui.feishu.waitingToRefresh") : t("ui.dingtalk.qrCodeExpiresIn")),
            h2("strong", null, formatRemaining2(remaining))
          ),
          h2(
            "div",
            { className: "bxf-progress dim-progress", "aria-hidden": "true" },
            h2("span", { style: { "--bxf-progress": `${Math.round(progress * 100)}%` } })
          )
        )
      ),
      h2(
        "div",
        { className: "bxf-qrCopy dim-qrCopy" },
        h2(
          "div",
          { className: "bxf-stateLabel dim-stateLabel" },
          h2("span", { className: "bxf-dot dim-stateDot", "data-tone": "warning" }),
          h2("span", null, repairing ? t("ui.feishu.repairingBot", { name: botName }) : grantingGroupMessages ? t("ui.feishu.grantingGroupPermission", { name: botName }) : t("ui.feishu.addingANewBot"))
        ),
        h2("h3", null, expired ? t("ui.feishu.refreshTheQrCodeToContinue") : repairing ? t("ui.feishu.scanWithFeishuToRepairCard") : grantingGroupMessages ? t("ui.feishu.confirmGroupMessagePermissionWithFeishu") : t("ui.feishu.scanWithFeishuToCreateA")),
        h2("p", null, repairing ? t("ui.feishu.scanningUpdatesTheExistingFeishuApp") : grantingGroupMessages ? t("ui.feishu.scanningUpdatesTheExistingFeishuApp2") : t("ui.feishu.scanningAddsOneBotExistingBots")),
        h2(
          "ol",
          { className: "bxf-steps dim-steps" },
          h2("li", null, t("ui.feishu.openFeishuOnYourPhoneAnd")),
          h2("li", null, repairing ? t("ui.feishu.reviewTheExistingAppNameAnd") : grantingGroupMessages ? t("ui.feishu.reviewTheExistingAppAndConfirm") : t("ui.feishu.reviewTheAppNameAndPermissions")),
          h2("li", null, repairing ? t("ui.feishu.keepThisPageOpenUntilCard") : grantingGroupMessages ? t("ui.feishu.keepThisPageOpenWhileThe") : t("ui.feishu.keepThisPageOpenUntilThe"))
        ),
        h2(
          "div",
          { className: "bxf-actions dim-viewActions" },
          expired ? h2(Button5, {
            kind: "primary",
            onClick: onRefresh,
            disabled: busy
          }, busy ? t("ui.feishu.refreshing") : t("ui.feishu.refreshQrCode")) : href ? h2("a", {
            className: "bxf-button bxf-link",
            "data-kind": "secondary",
            href,
            target: "_blank",
            rel: "noopener noreferrer"
          }, h2("span", null, t("ui.feishu.openInFeishu"))) : null,
          !expired ? h2(Button5, { onClick: onRefresh, disabled: busy }, t("ui.dingtalk.getAnotherQrCode")) : null,
          h2(Button5, { onClick: onCancel, disabled: busy }, repairing ? t("ui.feishu.cancelRepair") : grantingGroupMessages ? t("ui.feishu.cancelAuthorization") : t("ui.feishu.cancel"))
        )
      )
    )
  );
}
function ProvisionProgress({ phase, provision, onCancel, busy }) {
  const connecting = phase === "connecting";
  const repairing = isCallbackRepair(provision);
  const grantingGroupMessages = isGroupMessagePermission(provision);
  return h2(
    "div",
    {
      className: "bxf-card bxf-provisionCard dim-surfaceCard dim-loadingView",
      "aria-busy": "true"
    },
    h2("div", { className: "dim-spinner", "aria-hidden": "true" }),
    h2("h3", null, connecting ? repairing ? t("ui.feishu.confirmedFinishingCardButtonRepair") : grantingGroupMessages ? t("ui.feishu.confirmedEnablingAllMessageMode") : t("ui.feishu.confirmedConnectingTheNewBot") : repairing ? t("ui.feishu.preparingTheRepairQrCode") : grantingGroupMessages ? t("ui.feishu.preparingPermissionAuthorizationQrCode") : t("ui.feishu.preparingAuthorizationQrCode")),
    h2("p", null, connecting ? repairing ? t("ui.feishu.theUpdateWasSubmittedVerifyingThe") : grantingGroupMessages ? t("ui.feishu.thePermissionUpdateWasSubmittedSaving") : t("ui.feishu.savingCredentialsAndCheckingTheNew") : repairing ? t("ui.feishu.requestingAOneTimeUpdateQr") : grantingGroupMessages ? t("ui.feishu.requestingAGroupMessagePermissionQr") : t("ui.feishu.requestingAOneTimeAuthorizationQr")),
    connecting && onCancel ? h2(
      "div",
      { className: "bxf-actions dim-viewActions", style: { justifyContent: "center" } },
      h2(Button5, { onClick: onCancel, disabled: busy }, repairing ? t("ui.feishu.cancelRepair") : grantingGroupMessages ? t("ui.feishu.cancelAuthorization") : t("ui.feishu.cancel"))
    ) : null
  );
}
function ProvisionError2({ error, provision, onRetry, onCancel, busy }) {
  const repairing = isCallbackRepair(provision);
  const grantingGroupMessages = isGroupMessagePermission(provision);
  return h2(
    "div",
    { className: "bxf-card bxf-provisionCard dim-surfaceCard" },
    h2(
      "div",
      { className: "bxf-inlineError dim-inlineError", role: "alert" },
      h2(
        "div",
        null,
        h2("h3", null, repairing ? t("ui.feishu.cardButtonRepairDidNotFinish") : grantingGroupMessages ? t("ui.feishu.groupMessagePermissionWasNotGranted") : t("ui.feishu.theNewBotWasNotAdded")),
        h2("p", null, error.message),
        error.code ? h2("span", { className: "bxf-errorCode" }, error.code) : null,
        h2(
          "div",
          { className: "bxf-actions dim-viewActions" },
          h2(
            Button5,
            { kind: "primary", onClick: onRetry, disabled: busy },
            busy ? t("ui.feishu.retrying") : t("ui.dingtalk.generateANewQrCode2")
          ),
          h2(Button5, { onClick: onCancel, disabled: busy }, t("ui.dingtalk.close"))
        )
      )
    )
  );
}
var HEALTH_LABELS = {
  connected: t("ui.dingtalk.connected"),
  connecting: t("ui.dingtalk.connecting2"),
  offline: t("ui.feishu.disconnected"),
  error: t("ui.feishu.needsAttention")
};
function formatCheckedTime(timestamp7) {
  if (!timestamp7) return t("ui.dingtalk.notCheckedYet");
  try {
    return new Intl.DateTimeFormat("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date(timestamp7));
  } catch {
    return t("ui.dingtalk.justNow");
  }
}
function connectionTestNotice2(value) {
  if (value?.testMessage?.sent === true) {
    return t("ui.feishu.testMessageSentCheckTheFeishu");
  }
  if (value?.testMessage?.code === "test-target-unavailable") {
    return t("ui.dingtalk.connectionCheckCompletedTheBotHas");
  }
  return value?.testMessage ? t("ui.feishu.connectionCheckCompletedButTheTest") : null;
}
function RemoveConfirmation2({ bot, busy, onConfirm, onCancel }) {
  const cancelRef = React12.useRef(null);
  const idPart = bot.botId.replace(/[^a-zA-Z0-9_-]/g, "-");
  const titleId = `bxf-remove-title-${idPart}`;
  const descriptionId = `bxf-remove-description-${idPart}`;
  React12.useEffect(() => cancelRef.current?.focus(), []);
  return h2(
    "div",
    {
      className: "bxf-confirm dim-confirm",
      role: "alertdialog",
      "aria-labelledby": titleId,
      "aria-describedby": descriptionId,
      onKeyDown: (event) => {
        if (event.key === "Escape" && !busy) {
          event.preventDefault();
          onCancel();
        }
      }
    },
    h2("h4", { id: titleId }, t("ui.common.removeConfirm", { name: bot.bot.name })),
    h2(
      "p",
      { id: descriptionId },
      t("ui.feishu.thisStopsTheBotConnectionAnd")
    ),
    h2(
      "div",
      { className: "bxf-actions dim-viewActions" },
      h2(Button5, { ref: cancelRef, onClick: onCancel, disabled: busy }, t("ui.dingtalk.keepBot")),
      h2(
        Button5,
        { kind: "danger", onClick: onConfirm, disabled: busy },
        busy ? t("ui.dingtalk.removing") : t("ui.dingtalk.removeConnection")
      )
    )
  );
}
function GroupResponseModeEditor({
  value,
  permissionGranted = false,
  disabled = false,
  authorizationDisabled = false,
  onSave,
  onAuthorize
}) {
  const current2 = normalizeGroupResponseMode(value);
  const [saving, setSaving] = React12.useState(false);
  const [authorizing, setAuthorizing] = React12.useState(false);
  const [error, setError] = React12.useState(null);
  const change = async (event) => {
    const next = normalizeGroupResponseMode(event.target.value);
    if (next === current2 || saving || disabled) return;
    setSaving(true);
    setError(null);
    try {
      await onSave?.(next);
    } catch (cause) {
      setError(cause?.message ?? t("ui.feishu.couldNotUpdateTheGroupResponse"));
    } finally {
      setSaving(false);
    }
  };
  const authorize = async () => {
    if (current2 !== "all" || saving || authorizing || disabled || authorizationDisabled) return;
    setAuthorizing(true);
    setError(null);
    try {
      await onAuthorize?.();
    } catch (cause) {
      setError(cause?.message ?? t("ui.feishu.couldNotAuthorizeGroupMessagePermission"));
    } finally {
      setAuthorizing(false);
    }
  };
  return h2(
    "div",
    { className: "bxf-responseMode dim-responseMode" },
    h2(
      "div",
      { className: "bxf-responseModeHeader dim-responseModeHeader" },
      h2("span", null, t("ui.feishu.groupResponseMode")),
      saving || authorizing ? h2(
        "span",
        { className: "bxf-responseModeStatus dim-responseModeStatus" },
        saving ? t("ui.agentPreset.saving") : t("ui.feishu.preparingAuthorization")
      ) : null
    ),
    h2(
      "select",
      {
        className: "bxf-responseModeSelect dim-responseModeSelect",
        value: current2,
        disabled: disabled || saving,
        "aria-label": t("ui.feishu.groupResponseMode"),
        onChange: (event) => {
          void change(event);
        }
      },
      h2("option", { value: "mention" }, t("ui.feishu.onlyRespondWhenMentionedRecommended")),
      h2("option", { value: "all" }, t("ui.feishu.respondToAllGroupMessages"))
    ),
    h2(
      "small",
      { className: "bxf-responseModeHelp dim-responseModeHelp" },
      current2 === "mention" ? permissionGranted ? t("ui.feishu.directMessagesAlwaysWorkGroupChats") : t("ui.feishu.directMessagesAlwaysWorkGroupChats2") : permissionGranted ? t("ui.feishu.theReadAllMessagesInAssociated") : t("ui.feishu.theReadAllMessagesInAssociated2")
    ),
    current2 === "all" ? h2(
      "div",
      { className: "bxf-responseModePermissionAction dim-responseModePermissionAction" },
      h2(Button5, {
        className: "bxf-responseModePermissionButton",
        size: "small",
        disabled: disabled || authorizationDisabled || saving || authorizing,
        "aria-busy": authorizing ? "true" : void 0,
        "aria-label": permissionGranted ? t("ui.feishu.reauthorizeGroupMessagePermission") : t("ui.feishu.authorizeGroupMessagePermission"),
        onClick: () => {
          void authorize();
        }
      }, authorizing ? t("ui.feishu.preparing") : permissionGranted ? t("ui.feishu.reauthorize") : t("ui.feishu.authorize"))
    ) : null,
    error ? h2("p", {
      className: "bxf-responseModeError dim-responseModeError",
      role: "alert"
    }, error) : null
  );
}
function BotCard({
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
  removeButtonRef
}) {
  const { bot, health, state, connected } = connection;
  const stateForDisplay = busy === "reconnect" ? "connecting" : state;
  const tone = stateForDisplay === "connected" ? "success" : stateForDisplay === "connecting" ? "warning" : "error";
  const summary = actionError?.message ?? connection.error?.message ?? (connected ? null : health.summary);
  const titleId = `bxf-bot-${connection.botId.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
  return h2(
    "article",
    {
      className: "bxf-card bxf-botCard dim-botCard",
      "aria-labelledby": titleId,
      "data-bot-id": connection.botId,
      tabIndex: -1,
      ref: cardRef
    },
    h2(
      "div",
      { className: "bxf-cardBody dim-botCardBody" },
      h2(
        "div",
        { className: "bxf-connectedTop dim-botCardTop" },
        h2(
          "div",
          { className: "bxf-botIdentity dim-botIdentity" },
          h2(
            "div",
            { className: "bxf-avatar dim-botAvatar", "aria-hidden": "true" },
            h2(FeishuLogoGlyph, { size: 34 })
          ),
          h2(
            "div",
            { className: "bxf-botName dim-botName" },
            h2("h3", { id: titleId, title: bot.name }, bot.name),
            h2("p", { title: bot.appIdMasked }, bot.appIdMasked ?? t("ui.feishu.appIdentifierStoredSecurely"))
          )
        ),
        h2(BotStatusMeta, {
          className: "bxf-healthPill",
          dotClassName: "bxf-dot",
          tone,
          stateLabel: HEALTH_LABELS[stateForDisplay] ?? t("ui.feishu.unknownStatus"),
          lastCheckedAt: health.lastCheckedAt,
          formatCheckedTime,
          healthState: stateForDisplay
        })
      ),
      h2(WorkspaceEditor, {
        workspace: connection.workspace,
        disabled: Boolean(busy),
        onSave: onWorkspaceSave
      }),
      h2(AgentPresetEditor, {
        agentPreset: connection.agentPreset,
        disabled: Boolean(busy),
        onSave: onAgentPresetSave
      }),
      h2(GroupResponseModeEditor, {
        value: connection.groupResponseMode,
        permissionGranted: connection.groupMessagePermissionGranted,
        disabled: Boolean(busy),
        authorizationDisabled: repairDisabled,
        onSave: onGroupResponseModeSave,
        onAuthorize: onGroupMessagePermissionAuthorize
      }),
      provisionContent ? h2("section", {
        className: "bxf-botProvision dim-botProvision",
        "aria-label": t("ui.feishu.authFlow", { name: bot.name }),
        "data-provision-for": connection.botId,
        ref: provisionRef,
        tabIndex: -1
      }, provisionContent) : null,
      h2(
        "div",
        { className: "bxf-connectedFooter dim-cardFooter" },
        h2(
          "div",
          { className: "dim-cardFooterLayout" },
          h2(
            "div",
            { className: "bxf-actions bxf-botActions dim-cardActions" },
            h2(Button5, {
              className: "dim-cardAction",
              onClick: onReconnect,
              disabled: Boolean(busy),
              "aria-busy": busy === "reconnect" ? "true" : void 0,
              "aria-label": connected ? t("ui.feishu.checkConnectionOf", { name: bot.name }) : t("ui.feishu.retryConnectionOf", { name: bot.name })
            }, busy === "reconnect" ? connected ? t("ui.dingtalk.checking") : t("ui.feishu.connecting") : connected ? t("ui.dingtalk.checkConnection") : t("ui.dingtalk.reconnect")),
            h2(Button5, {
              className: "bxf-repairButton dim-cardAction",
              onClick: onRepairCallback,
              disabled: Boolean(busy) || repairDisabled,
              "aria-busy": busy === "callback-repair" ? "true" : void 0,
              "aria-label": t("ui.feishu.repairCardButtonsOf", { name: bot.name })
            }, busy === "callback-repair" ? t("ui.feishu.waitingForScan") : t("ui.feishu.repairCardButtons")),
            h2(Button5, {
              className: "dim-cardAction",
              kind: "danger",
              onClick: onRequestRemove,
              disabled: Boolean(busy),
              ref: removeButtonRef,
              "aria-label": t("ui.feishu.removeFromHarness", { name: bot.name })
            }, t("ui.dingtalk.removeConnection2"))
          ),
          summary ? h2(
            "div",
            { className: "bxf-healthSummary dim-cardSummary", "data-error": actionError || connection.error ? "true" : void 0 },
            summary
          ) : null,
          testNotice ? h2("div", {
            className: "bxf-healthSummary dim-cardFeedback",
            role: "status"
          }, testNotice) : null
        )
      )
    ),
    removing ? h2(RemoveConfirmation2, {
      bot: connection,
      busy: busy === "delete",
      onConfirm: onConfirmRemove,
      onCancel: onCancelRemove
    }) : null
  );
}
function BotList(props) {
  return h2(
    "section",
    { className: "bxf-listSection dim-listSection", "aria-labelledby": "bxf-bot-list-title" },
    h2(ChannelListHeading, {
      className: "bxf-listHeading",
      id: "bxf-bot-list-title",
      title: t("ui.feishu.connectedBots"),
      connectionLabel: t("ui.feishu.persistentConnection")
    }),
    h2(
      "ul",
      { className: "bxf-botList dim-botList", role: "list" },
      props.bots.map((bot) => h2(
        "li",
        { key: bot.botId },
        h2(BotCard, {
          connection: bot,
          busy: props.busyByBot[bot.botId] ?? (isTargetedAppUpdate2(props.provisioning) && props.provisioning.botId === bot.botId ? props.provisioning.operation : void 0),
          repairDisabled: Boolean(props.provisioning),
          provisionContent: isTargetedAppUpdate2(props.provisioning) && props.provisioning.botId === bot.botId ? props.provisionContent : null,
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
          removeButtonRef: (node) => props.setRemoveButtonRef(bot.botId, node)
        })
      ))
    )
  );
}
function PageError({ error, onRetry, busy }) {
  return h2(
    "div",
    { className: "bxf-card dim-surfaceCard" },
    h2(
      "div",
      { className: "bxf-error dim-inlineError", role: "alert" },
      h2(
        "div",
        null,
        h2("h3", null, t("ui.feishu.couldNotLoadFeishuBots")),
        h2("p", null, error.message),
        error.code ? h2("span", { className: "bxf-errorCode" }, error.code) : null,
        h2(
          "div",
          { className: "bxf-actions dim-viewActions" },
          h2(
            Button5,
            { kind: "primary", onClick: onRetry, disabled: busy },
            busy ? t("ui.feishu.retrying") : t("ui.dingtalk.reload")
          )
        )
      )
    )
  );
}
var EMPTY_TOTALS2 = Object.freeze({ configured: 0, connected: 0 });
function mergeFeishuSnapshotState(current2, snapshot, { restoreProvisioning = false, now = Date.now() } = {}) {
  if (snapshot.revision > 0 && current2.revision > snapshot.revision) return current2;
  let provisioning = current2.provisioning;
  if (!provisioning && restoreProvisioning && snapshot.provisioning) {
    const submitted = snapshot.provisioning.submitted === true;
    provisioning = {
      phase: submitted || snapshot.state === "connecting" ? "connecting" : "qr",
      ...snapshot.provisioning,
      durationMs: Math.max(1, snapshot.provisioning.expiresAt - now),
      expired: !submitted && snapshot.provisioning.expiresAt <= now
    };
  }
  return {
    ...current2,
    phase: "ready",
    revision: snapshot.revision,
    bots: snapshot.bots,
    totals: snapshot.totals,
    provisioning,
    pageError: null,
    statusError: null,
    agentPresetCatalog: snapshot.agentPresetCatalog ?? current2.agentPresetCatalog
  };
}
function FeishuSettingsTab({ rpcCall }) {
  const [model, setModel] = React12.useState({
    phase: "loading",
    revision: 0,
    bots: [],
    totals: EMPTY_TOTALS2,
    provisioning: null,
    pageError: null,
    statusError: null,
    agentPresetCatalog: EMPTY_AGENT_PRESET_CATALOG
  });
  const [pageBusy, setPageBusy] = React12.useState(false);
  const [provisionBusy, setProvisionBusy] = React12.useState(false);
  const [credentialOpen, setCredentialOpen] = React12.useState(false);
  const [credentialBusy, setCredentialBusy] = React12.useState(false);
  const [credentialError, setCredentialError] = React12.useState(null);
  const [busyByBot, setBusyByBot] = React12.useState({});
  const [errorsByBot, setErrorsByBot] = React12.useState({});
  const [testNoticesByBot, setTestNoticesByBot] = React12.useState({});
  const [removeTargetId, setRemoveTargetId] = React12.useState(null);
  const [announcement, setAnnouncement] = React12.useState("");
  const [now, setNow] = React12.useState(() => Date.now());
  const [focusBotId, setFocusBotId] = React12.useState(null);
  const cardRefs = React12.useRef(/* @__PURE__ */ new Map());
  const removeButtonRefs = React12.useRef(/* @__PURE__ */ new Map());
  const targetedProvisionRef = React12.useRef(null);
  const addButtonRef = React12.useRef(null);
  const mountedRef = React12.useRef(true);
  const workspaceFence = useWorkspaceSnapshotFence();
  const scheduleAnimationFrame = useAnimationFrameScheduler();
  React12.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
  const announce = React12.useCallback((message) => {
    setAnnouncement("");
    scheduleAnimationFrame(() => {
      if (message) setAnnouncement(message);
    }, "announcement");
  }, [scheduleAnimationFrame]);
  const invoke = React12.useCallback(async (endpoint, payload = {}, signal) => {
    return unwrapRpcResult3(await rpcCall(endpoint, payload, signal));
  }, [rpcCall]);
  const mergeSnapshot = React12.useCallback((snapshot, { restoreProvisioning = false } = {}) => {
    const now2 = Date.now();
    setModel((current2) => mergeFeishuSnapshotState(
      current2,
      snapshot,
      { restoreProvisioning, now: now2 }
    ));
  }, []);
  const loadStatus = React12.useCallback(async ({ signal, silent = false, restoreProvisioning = false } = {}) => {
    const workspaceVersion = workspaceFence.beginStatus();
    if (workspaceVersion === null || !mountedRef.current) return void 0;
    if (!silent) setPageBusy(true);
    try {
      const snapshot = normalizeBotsSnapshot(await invoke(FEISHU_ENDPOINTS.status, {}, signal));
      if (signal?.aborted || !mountedRef.current || !workspaceFence.canCommitStatus(workspaceVersion)) return void 0;
      mergeSnapshot(snapshot, { restoreProvisioning });
      return snapshot;
    } catch (error) {
      if (signal?.aborted || error?.name === "AbortError" || !mountedRef.current || !workspaceFence.canCommitStatus(workspaceVersion)) return void 0;
      const presented = presentError3(error);
      setModel((current2) => current2.phase === "loading" || !silent ? { ...current2, phase: "error", pageError: presented } : { ...current2, statusError: presented });
      return void 0;
    } finally {
      if (!silent && !signal?.aborted && mountedRef.current) setPageBusy(false);
    }
  }, [invoke, mergeSnapshot, workspaceFence]);
  React12.useEffect(() => {
    const controller = new AbortController();
    void loadStatus({ signal: controller.signal, restoreProvisioning: true });
    return () => controller.abort();
  }, [loadStatus]);
  React12.useEffect(() => {
    if (model.phase !== "ready") return void 0;
    const controller = new AbortController();
    let inFlight = false;
    const timer = window.setInterval(async () => {
      if (inFlight) return;
      inFlight = true;
      await loadStatus({
        signal: controller.signal,
        silent: true,
        restoreProvisioning: false
      });
      inFlight = false;
    }, 15e3);
    return () => {
      controller.abort();
      window.clearInterval(timer);
    };
  }, [loadStatus, model.phase]);
  React12.useEffect(() => {
    if (!focusBotId) return;
    const node = cardRefs.current.get(focusBotId);
    if (!node) return;
    node.scrollIntoView?.({ block: "nearest", behavior: "smooth" });
    node.focus({ preventScroll: true });
    setFocusBotId(null);
  }, [focusBotId, model.bots]);
  const targetedProvisionFocusKey = isTargetedAppUpdate2(model.provisioning) ? `${model.provisioning.botId}:${model.provisioning.attemptId ?? "preparing"}:${model.provisioning.phase}` : null;
  React12.useEffect(() => {
    if (!targetedProvisionFocusKey) return;
    scheduleAnimationFrame(() => {
      const node = targetedProvisionRef.current;
      if (!node) return;
      node.scrollIntoView?.({ block: "nearest", behavior: "smooth" });
      node.focus?.({ preventScroll: true });
    }, "targeted-provision-focus");
  }, [scheduleAnimationFrame, targetedProvisionFocusKey]);
  const startProvisioning = React12.useCallback(async ({
    replace = false,
    operation = FEISHU_REGISTRATION_OPERATIONS.PROVISION,
    bot
  } = {}) => {
    const repairing = operation === CALLBACK_REPAIR_OPERATION;
    const grantingGroupMessages = operation === GROUP_MESSAGE_PERMISSION_OPERATION;
    const targetedUpdate = repairing || grantingGroupMessages;
    const botId = targetedUpdate ? bot?.botId ?? model.provisioning?.botId : void 0;
    const botName = targetedUpdate ? bot?.bot?.name ?? model.provisioning?.botName : void 0;
    if (targetedUpdate && !botId) return;
    setCredentialOpen(false);
    setCredentialError(null);
    setProvisionBusy(true);
    announce("");
    const previousAttemptId = model.provisioning?.attemptId;
    setModel((current2) => ({
      ...current2,
      phase: current2.phase === "loading" ? "ready" : current2.phase,
      provisioning: {
        phase: "creating",
        operation,
        ...botId ? { botId } : {},
        ...botName ? { botName } : {}
      }
    }));
    try {
      if (replace && previousAttemptId) {
        try {
          await invoke(FEISHU_ENDPOINTS.cancelProvisioning, { attemptId: previousAttemptId });
        } catch {
        }
      }
      const endpoint = repairing ? FEISHU_ENDPOINTS.beginCallbackRepair : grantingGroupMessages ? FEISHU_ENDPOINTS.beginGroupMessagePermission : FEISHU_ENDPOINTS.beginProvisioning;
      const provision2 = normalizeProvisioning2(await invoke(
        endpoint,
        targetedUpdate ? { botId } : { locale: "zh-CN" }
      ));
      if (targetedUpdate && (provision2.operation !== operation || provision2.botId !== botId)) {
        throw new Error(grantingGroupMessages ? t("ui.feishu.feishuReturnedAGroupMessagePermission") : t("ui.feishu.feishuReturnedARepairQrCode"));
      }
      const timestamp7 = Date.now();
      setNow(timestamp7);
      setModel((current2) => ({
        ...current2,
        provisioning: {
          phase: "qr",
          ...provision2,
          ...botName ? { botName } : {},
          durationMs: Math.max(1, provision2.expiresAt - timestamp7),
          expired: false
        }
      }));
      announce(repairing ? t("ui.feishu.repairQrReady", { name: botName ?? t("ui.common.defaultBotName") }) : grantingGroupMessages ? t("ui.feishu.groupQrReady", { name: botName ?? t("ui.common.defaultBotName") }) : t("ui.feishu.authorizationQrCodeGeneratedScanIt"));
    } catch (error) {
      setModel((current2) => ({
        ...current2,
        provisioning: {
          phase: "error",
          operation,
          ...botId ? { botId } : {},
          ...botName ? { botName } : {},
          ...replace && previousAttemptId ? { attemptId: previousAttemptId } : {},
          error: presentError3(error)
        }
      }));
    } finally {
      setProvisionBusy(false);
    }
  }, [
    announce,
    invoke,
    model.provisioning?.attemptId,
    model.provisioning?.botId,
    model.provisioning?.botName
  ]);
  const bindCredentials = React12.useCallback(async ({ identity, secret }) => {
    const snapshotVersion = workspaceFence.beginMutation();
    setCredentialBusy(true);
    setCredentialError(null);
    try {
      const snapshot = normalizeBotsSnapshot(await invoke(
        FEISHU_ENDPOINTS.bindCredentials,
        { appId: identity, appSecret: secret }
      ));
      if (mountedRef.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        mergeSnapshot(snapshot);
      }
      setCredentialOpen(false);
      announce(t("ui.feishu.feishuBotCredentialsConnected"));
    } catch (error) {
      setCredentialError(presentError3(error));
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      setCredentialBusy(false);
    }
  }, [announce, invoke, loadStatus, mergeSnapshot, workspaceFence]);
  const cancelProvisioning = React12.useCallback(async () => {
    const activeProvision = model.provisioning;
    const attemptId = activeProvision?.attemptId;
    const repairing = isCallbackRepair(activeProvision);
    const grantingGroupMessages = isGroupMessagePermission(activeProvision);
    const targetedUpdate = isTargetedAppUpdate2(activeProvision);
    const targetBot = targetedUpdate ? model.bots.find((bot) => bot.botId === activeProvision?.botId) : void 0;
    setProvisionBusy(true);
    try {
      const result = attemptId ? normalizePollResult(await invoke(FEISHU_ENDPOINTS.cancelProvisioning, { attemptId })) : null;
      if (targetedUpdate && result) {
        if (result.operation !== activeProvision.operation || result.botId !== activeProvision.botId) {
          throw new Error(t("ui.feishu.feishuReturnedRegistrationProgressForA"));
        }
        if (result.status === "connecting") {
          setModel((current2) => current2.provisioning?.attemptId === attemptId ? {
            ...current2,
            provisioning: {
              ...current2.provisioning,
              ...result.provisioning ?? {},
              phase: "connecting",
              submitted: true,
              expired: false
            }
          } : current2);
          announce(grantingGroupMessages ? t("ui.feishu.thePermissionUpdateWasSubmittedEnabling") : t("ui.feishu.theUpdateWasSubmittedVerifyingThe"));
          return;
        }
        if (result.status === "connected") {
          const targetBotName = targetBot?.bot.name ?? activeProvision.botName ?? t("ui.common.defaultBotName");
          setModel((current2) => ({ ...current2, provisioning: null }));
          announce(grantingGroupMessages ? t("ui.feishu.groupPermissionGranted", { name: targetBotName }) : t("ui.feishu.cardButtonsRepaired", { name: targetBotName }));
          if (activeProvision.botId) setFocusBotId(activeProvision.botId);
          await loadStatus({ silent: true, restoreProvisioning: false });
          return;
        }
      }
      setModel((current2) => ({ ...current2, provisioning: null }));
      announce(repairing ? t("ui.feishu.cardButtonRepairWasCancelled") : grantingGroupMessages ? t("ui.feishu.groupMessagePermissionAuthorizationWasCancelled") : t("ui.feishu.addingTheBotWasCancelled"));
      await loadStatus({ silent: true, restoreProvisioning: false });
      scheduleAnimationFrame(() => {
        if (targetedUpdate && activeProvision.botId) {
          cardRefs.current.get(activeProvision.botId)?.focus();
        } else {
          addButtonRef.current?.focus();
        }
      }, "focus");
    } catch (error) {
      setModel((current2) => ({
        ...current2,
        provisioning: {
          ...activeProvision,
          phase: "error",
          attemptId,
          error: presentError3(error)
        }
      }));
    } finally {
      setProvisionBusy(false);
    }
  }, [announce, invoke, loadStatus, model.bots, model.provisioning, scheduleAnimationFrame]);
  const countdownAttemptId = model.provisioning?.attemptId;
  const countdownPhase = model.provisioning?.phase;
  const countdownExpiresAt = model.provisioning?.expiresAt;
  const countdownExpired = model.provisioning?.expired;
  React12.useEffect(() => {
    if (!countdownAttemptId || countdownPhase !== "qr" || countdownExpired) return void 0;
    const tick = () => {
      const timestamp7 = Date.now();
      setNow(timestamp7);
      if (timestamp7 >= countdownExpiresAt) {
        setModel((current2) => current2.provisioning?.attemptId === countdownAttemptId ? { ...current2, provisioning: { ...current2.provisioning, expired: true } } : current2);
      }
    };
    tick();
    const timer = window.setInterval(tick, 1e3);
    return () => window.clearInterval(timer);
  }, [countdownAttemptId, countdownPhase, countdownExpiresAt, countdownExpired]);
  React12.useEffect(() => {
    const provision2 = model.provisioning;
    if (!provision2 || !["qr", "connecting"].includes(provision2.phase) || !provision2.attemptId || provision2.expired) return void 0;
    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      try {
        const result = normalizePollResult(await invoke(
          FEISHU_ENDPOINTS.pollProvisioning,
          { attemptId: provision2.attemptId },
          controller.signal
        ));
        if (result.operation !== provision2.operation || isTargetedAppUpdate2(provision2) && result.botId !== provision2.botId) {
          throw new Error(t("ui.feishu.feishuReturnedRegistrationProgressForA"));
        }
        if (result.status === "connected") {
          const snapshot = await loadStatus({ signal: controller.signal, silent: true, restoreProvisioning: false });
          const targetBot = snapshot?.bots.find((bot) => bot.botId === result.botId);
          if (!snapshot) {
            throw new Error(isCallbackRepair(provision2) ? t("ui.feishu.theCardCallbackWasUpdatedBut") : isGroupMessagePermission(provision2) ? t("ui.feishu.theGroupMessagePermissionWasUpdated") : t("ui.feishu.theBotWasCreatedButIts"));
          }
          if (!targetBot?.connected) {
            setModel((current2) => current2.provisioning?.attemptId === provision2.attemptId ? { ...current2, provisioning: { ...current2.provisioning, phase: "connecting" } } : current2);
            return;
          }
          setModel((current2) => ({ ...current2, provisioning: null }));
          announce(isCallbackRepair(provision2) ? t("ui.feishu.cardButtonsRepaired", { name: targetBot.bot.name }) : isGroupMessagePermission(provision2) ? t("ui.feishu.groupPermissionGranted", { name: targetBot.bot.name }) : targetBot ? t("ui.feishu.connectedReady", { name: targetBot.bot.name }) : t("ui.feishu.theNewFeishuBotIsConnected"));
          if (result.botId) setFocusBotId(result.botId);
          return;
        }
        if (result.status === "failed") {
          const error = new Error(result.message ?? (isCallbackRepair(provision2) ? t("ui.feishu.couldNotRepairTheFeishuCard") : isGroupMessagePermission(provision2) ? t("ui.feishu.couldNotGrantTheFeishuGroup") : t("ui.feishu.couldNotCreateTheFeishuApp")));
          error.code = "FEISHU_PROVISION_FAILED";
          throw error;
        }
        if (result.status === "expired") {
          setModel((current2) => current2.provisioning?.attemptId === provision2.attemptId ? { ...current2, provisioning: { ...current2.provisioning, phase: "qr", expired: true } } : current2);
          return;
        }
        setModel((current2) => {
          if (current2.provisioning?.attemptId !== provision2.attemptId) return current2;
          const next = result.provisioning ?? current2.provisioning;
          return {
            ...current2,
            provisioning: {
              ...current2.provisioning,
              ...next,
              phase: ["scanned", "connecting"].includes(result.status) ? "connecting" : "qr"
            }
          };
        });
      } catch (error) {
        if (error?.name === "AbortError") return;
        setModel((current2) => current2.provisioning?.attemptId === provision2.attemptId ? {
          ...current2,
          provisioning: {
            ...current2.provisioning,
            phase: "error",
            attemptId: provision2.attemptId,
            error: presentError3(error)
          }
        } : current2);
      }
    }, provision2.pollIntervalMs);
    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [announce, invoke, loadStatus, model.provisioning]);
  const setBotBusy = React12.useCallback((botId, value) => {
    setBusyByBot((current2) => {
      const next = { ...current2 };
      if (value) next[botId] = value;
      else delete next[botId];
      return next;
    });
  }, []);
  const setBotError = React12.useCallback((botId, error) => {
    setErrorsByBot((current2) => {
      const next = { ...current2 };
      if (error) next[botId] = presentError3(error);
      else delete next[botId];
      return next;
    });
  }, []);
  const repairCallback = React12.useCallback((connection) => {
    if (model.provisioning) return;
    setRemoveTargetId(null);
    setBotError(connection.botId, null);
    setTestNoticesByBot((current2) => {
      const next = { ...current2 };
      delete next[connection.botId];
      return next;
    });
    void startProvisioning({
      operation: CALLBACK_REPAIR_OPERATION,
      bot: connection
    });
  }, [model.provisioning, setBotError, startProvisioning]);
  const reconnectOneBot = React12.useCallback(async (connection) => {
    const { botId, bot } = connection;
    const snapshotVersion = workspaceFence.beginMutation();
    setBotBusy(botId, "reconnect");
    setBotError(botId, null);
    setTestNoticesByBot((current2) => {
      const next = { ...current2 };
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
          refreshed?.error?.message ?? refreshed?.health.summary ?? t("ui.feishu.theBotIsStillOffline")
        );
        error.code = refreshed?.error?.code ?? "FEISHU_BOT_OFFLINE";
        throw error;
      }
      const testNotice = connectionTestNotice2(value);
      if (mountedRef.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        setTestNoticesByBot((current2) => ({ ...current2, [botId]: testNotice }));
      }
      announce(testNotice ?? (connection.connected ? t("ui.feishu.connectionCheckDone", { name: bot.name }) : t("ui.feishu.reconnected", { name: bot.name })));
    } catch (error) {
      const failure = new Error(t("ui.dingtalk.connectionCheckFailedTryAgainLater"));
      failure.code = error?.code;
      setBotError(botId, failure);
      announce(failure.message);
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      setBotBusy(botId, null);
    }
  }, [announce, invoke, loadStatus, mergeSnapshot, setBotBusy, setBotError, workspaceFence]);
  const saveWorkspace = React12.useCallback(async (connection, workspace) => {
    const { botId } = connection;
    const workspaceVersion = workspaceFence.beginMutation();
    setBotBusy(botId, "workspace");
    setBotError(botId, null);
    try {
      const snapshot = normalizeBotsSnapshot(await invoke(
        FEISHU_ENDPOINTS.setWorkspace,
        { botId, workspace }
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
  const saveAgentPreset = React12.useCallback(async (connection, agentPreset) => {
    const { botId } = connection;
    const snapshotVersion = workspaceFence.beginMutation();
    setBotBusy(botId, "preset");
    setBotError(botId, null);
    try {
      const snapshot = normalizeBotsSnapshot(await invoke(
        FEISHU_ENDPOINTS.setAgentPreset,
        { botId, agentPreset }
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
  const authorizeGroupMessages = React12.useCallback(async (connection) => {
    const { botId } = connection;
    if (model.provisioning) {
      throw new Error(t("ui.feishu.finishTheCurrentFeishuAuthorizationBefore"));
    }
    setRemoveTargetId(null);
    setBotError(botId, null);
    setTestNoticesByBot((current2) => {
      const next = { ...current2 };
      delete next[botId];
      return next;
    });
    await startProvisioning({
      operation: GROUP_MESSAGE_PERMISSION_OPERATION,
      bot: connection
    });
  }, [model.provisioning, setBotError, startProvisioning]);
  const saveGroupResponseMode = React12.useCallback(async (connection, groupResponseMode) => {
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
        { botId, groupResponseMode }
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
    workspaceFence
  ]);
  const requestRemove = React12.useCallback((connection) => {
    setRemoveTargetId(connection.botId);
  }, []);
  const cancelRemove = React12.useCallback(() => {
    const botId = removeTargetId;
    setRemoveTargetId(null);
    scheduleAnimationFrame(() => removeButtonRefs.current.get(botId)?.focus(), "focus");
  }, [removeTargetId, scheduleAnimationFrame]);
  const confirmRemove = React12.useCallback(async (connection) => {
    const { botId, bot } = connection;
    const snapshotVersion = workspaceFence.beginMutation();
    setBotBusy(botId, "delete");
    setBotError(botId, null);
    try {
      const snapshot = normalizeBotsSnapshot(await invoke(
        FEISHU_ENDPOINTS.deleteBot,
        { botId, confirm: true }
      ));
      setRemoveTargetId(null);
      if (mountedRef.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        mergeSnapshot(snapshot);
      }
      announce(t("ui.feishu.removedNotice", { name: bot.name }));
      scheduleAnimationFrame(() => addButtonRef.current?.focus(), "focus");
    } catch (error) {
      setBotError(botId, error);
      announce(t("ui.feishu.removeFailed", { name: bot.name }));
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      setBotBusy(botId, null);
    }
  }, [announce, invoke, loadStatus, mergeSnapshot, scheduleAnimationFrame, setBotBusy, setBotError, workspaceFence]);
  const provision = model.provisioning;
  const targetedProvisioning = isTargetedAppUpdate2(provision);
  const provisionBot = provision?.botId ? model.bots.find((bot) => bot.botId === provision.botId) ?? { botId: provision.botId, bot: { name: provision.botName ?? t("ui.feishu.thisBot") } } : void 0;
  const restartProvisioning = ({ replace = false } = {}) => startProvisioning({
    replace,
    operation: provision?.operation ?? FEISHU_REGISTRATION_OPERATIONS.PROVISION,
    bot: provisionBot
  });
  let provisionContent = null;
  if (provision?.phase === "creating") {
    provisionContent = h2(ProvisionProgress, {
      phase: "creating",
      provision,
      busy: provisionBusy
    });
  } else if (provision?.phase === "qr") {
    provisionContent = h2(QrPane, {
      provision,
      now,
      onRefresh: () => void restartProvisioning({ replace: true }),
      onCancel: () => void cancelProvisioning(),
      busy: provisionBusy || model.phase !== "ready"
    });
  } else if (provision?.phase === "connecting") {
    provisionContent = h2(ProvisionProgress, {
      phase: "connecting",
      provision,
      onCancel: isTargetedAppUpdate2(provision) ? void 0 : () => void cancelProvisioning(),
      busy: provisionBusy
    });
  } else if (provision?.phase === "error") {
    provisionContent = h2(ProvisionError2, {
      error: provision.error,
      provision,
      onRetry: () => void restartProvisioning({ replace: Boolean(provision.attemptId) }),
      onCancel: () => {
        const targetBotId = provision.botId;
        setModel((current2) => ({ ...current2, provisioning: null }));
        void loadStatus({ silent: true, restoreProvisioning: false });
        scheduleAnimationFrame(() => {
          if (targetBotId) cardRefs.current.get(targetBotId)?.focus();
          else addButtonRef.current?.focus();
        }, "focus");
      },
      busy: provisionBusy
    });
  }
  const credentialContent = credentialOpen ? h2(CredentialBindingPanel, {
    channel: t("ui.feishu.feishu"),
    identityLabel: "App ID",
    identityPlaceholder: t("ui.feishu.enterTheFeishuOpenPlatformApp"),
    secretLabel: "App Secret",
    secretPlaceholder: t("ui.feishu.enterTheFeishuOpenPlatformApp2"),
    busy: credentialBusy,
    error: credentialError,
    onSubmit: bindCredentials,
    onCancel: () => {
      setCredentialOpen(false);
      setCredentialError(null);
    }
  }) : null;
  const setCardRef = React12.useCallback((botId, node) => {
    if (node) cardRefs.current.set(botId, node);
    else cardRefs.current.delete(botId);
  }, []);
  const setRemoveButtonRef = React12.useCallback((botId, node) => {
    if (node) removeButtonRefs.current.set(botId, node);
    else removeButtonRefs.current.delete(botId);
  }, []);
  return h2(AgentPresetCatalogContext.Provider, {
    value: model.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
  }, h2(
    "section",
    { className: "bxf-page dim-channelPage", "aria-label": t("ui.feishu.feishuBotSettings") },
    h2(Heading2, {
      totals: model.totals,
      onAdd: () => void startProvisioning(),
      onCredential: () => {
        setCredentialOpen((value) => !value);
        setCredentialError(null);
      },
      credentialOpen,
      adding: Boolean(provision),
      busy: provisionBusy || credentialBusy,
      addButtonRef
    }),
    h2("div", {
      className: "bxf-visuallyHidden",
      role: "status",
      "aria-live": "polite",
      "aria-atomic": "true"
    }, announcement),
    model.statusError ? h2(
      "div",
      { className: "bxf-statusNotice dim-statusNotice", role: "status" },
      h2(AlertIcon, { size: 16 }),
      h2("span", null, t("ui.common.statusAutoRefreshFailed", { reason: model.statusError.message })),
      h2(Button5, { size: "small", onClick: () => void loadStatus({ silent: true }), disabled: pageBusy }, t("ui.feishu.retryNow"))
    ) : null,
    model.phase === "loading" ? h2(LoadingView2) : model.phase === "error" ? h2(PageError, {
      error: model.pageError ?? { message: t("ui.feishu.couldNotLoadConnectionStatus") },
      onRetry: () => void loadStatus(),
      busy: pageBusy
    }) : h2(
      React12.Fragment,
      null,
      credentialContent,
      targetedProvisioning ? null : provisionContent,
      model.bots.length === 0 && !provision && !credentialOpen ? h2(EmptyView2, { onStart: () => void startProvisioning(), busy: provisionBusy }) : null,
      model.bots.length > 0 ? h2(BotList, {
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
        setRemoveButtonRef
      }) : null
    )
  ));
}

// plugin-src/client/channels/qq/api.js
var CHANNEL_LABEL4 = "QQ";
var QQ_RPC_CHANNEL = "/qq";
var QQ_ENDPOINTS = Object.freeze({
  status: "connection.status",
  beginProvisioning: "provision.begin",
  pollProvisioning: "provision.poll",
  cancelProvisioning: "provision.cancel",
  bindCredentials: "bot.bind-credentials",
  reconnectBot: "bot.reconnect",
  deleteBot: "bot.delete",
  setWorkspace: "bot.workspace.set",
  setAgentPreset: SET_AGENT_PRESET_ENDPOINT
});
var PROVISION_STATES2 = /* @__PURE__ */ new Set(["starting", "pending", "refreshing", "connecting", "connected", "failed", "cancelled"]);
var ACCOUNT_STATES3 = /* @__PURE__ */ new Set(["connected", "connecting", "offline", "error"]);
var TEST_MESSAGE_CODES = /* @__PURE__ */ new Set(["test-target-unavailable", "test-message-failed"]);
var QR_DATA_URL2 = /^data:image\/(?:png|webp);base64,[a-z\d+/]+={0,2}$/i;
function isRecord4(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function text2(value, fallback, max = 240) {
  return typeof value === "string" && value.trim() ? value.trim().slice(0, max) : fallback;
}
function id2(value) {
  const result = text2(value, "", 128);
  return /^[a-z\d_-]+$/i.test(result) ? result : void 0;
}
function timestamp3(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  const parsed = typeof value === "string" ? Date.parse(value) : Number.NaN;
  return Number.isNaN(parsed) ? void 0 : parsed;
}
function unwrapRpcResult4(result) {
  if (!isRecord4(result) || typeof result.ok !== "boolean") throw new Error(t("ui.common.unrecognizedResponse", { channel: CHANNEL_LABEL4 }));
  if (!result.ok) {
    const error = new Error(text2(result.error?.message, t("ui.common.operationFailed", { channel: CHANNEL_LABEL4 })));
    error.code = text2(result.error?.code, "QQ_RPC_ERROR", 80);
    throw error;
  }
  return result.value;
}
function safeQrSource3(value) {
  return typeof value === "string" && value.length <= 2 * 1024 * 1024 && QR_DATA_URL2.test(value) ? value : void 0;
}
function normalizeProvisioning3(value, now = Date.now()) {
  const source = isRecord4(value?.provisioning) ? value.provisioning : value;
  if (!isRecord4(source)) throw new Error(t("ui.qq.qqDidNotReturnQrSetup"));
  const attemptId = id2(source.attemptId);
  if (!attemptId) throw new Error(t("ui.qq.qqDidNotReturnAValid"));
  const reported = text2(source.status, "failed", 32);
  const result = {
    attemptId,
    status: PROVISION_STATES2.has(reported) ? reported : "failed",
    expiresAt: timestamp3(source.expiresAt) ?? now + 5 * 6e4,
    pollIntervalMs: Math.min(1e4, Math.max(500, Number(source.pollIntervalMs) || 1e3)),
    qrRevision: Number.isSafeInteger(source.qrRevision) ? source.qrRevision : 0
  };
  const qrCodeDataUrl = safeQrSource3(source.qrCodeDataUrl);
  if (qrCodeDataUrl) result.qrCodeDataUrl = qrCodeDataUrl;
  if (id2(source.botId)) result.botId = id2(source.botId);
  if (isRecord4(source.error)) result.error = {
    code: text2(source.error.code, "QQ_PROVISION_FAILED", 80),
    message: text2(source.error.message, t("ui.common.notConnected", { channel: CHANNEL_LABEL4 }))
  };
  return result;
}
function normalizeBot3(value) {
  if (!isRecord4(value) || !id2(value.botId)) return void 0;
  const connected = value.connected === true;
  const state = ACCOUNT_STATES3.has(value.state) ? value.state : "offline";
  return {
    botId: id2(value.botId),
    connected,
    state: connected ? "connected" : state,
    workspace: text2(value.workspace, "", 4096),
    agentPreset: normalizeAgentPresetId(value.agentPreset),
    bot: {
      name: text2(value.bot?.name, t("ui.qq.qqBot"), 100),
      appIdMasked: text2(value.bot?.appIdMasked, t("ui.feishu.appIdentifierStoredSecurely"), 140)
    },
    health: {
      summary: text2(value.health?.summary, connected ? t("ui.qq.qqWebsocketConnectionIsHealthy") : t("ui.common.connectionNotReady", { channel: CHANNEL_LABEL4 })),
      lastCheckedAt: timestamp3(value.health?.lastCheckedAt)
    },
    error: isRecord4(value.error) ? {
      code: text2(value.error.code, "QQ_ACCOUNT_ERROR", 80),
      message: text2(value.error.message, t("ui.common.connectionNotReady", { channel: CHANNEL_LABEL4 }))
    } : null
  };
}
function normalizeTestMessage2(value) {
  if (!isRecord4(value) || typeof value.sent !== "boolean") return void 0;
  if (value.sent) return { sent: true };
  const code = text2(value.code, "test-message-failed", 80);
  return {
    sent: false,
    code: TEST_MESSAGE_CODES.has(code) ? code : "test-message-failed"
  };
}
function normalizeSnapshot3(value) {
  const source = isRecord4(value?.snapshot) ? value.snapshot : value;
  if (!isRecord4(source) || !Array.isArray(source.bots)) throw new Error(t("ui.qq.qqDidNotReturnAValid2"));
  const bots = source.bots.map(normalizeBot3).filter(Boolean);
  const testMessage = normalizeTestMessage2(source.testMessage);
  return {
    revision: Number.isSafeInteger(source.revision) ? source.revision : 0,
    bots,
    totals: { configured: bots.length, connected: bots.filter((bot) => bot.connected).length },
    provisioning: source.provisioning ? normalizeProvisioning3(source.provisioning) : null,
    agentPresetCatalog: normalizeAgentPresetCatalog(source.agentPresetCatalog),
    ...testMessage ? { testMessage } : {}
  };
}
function connectionTestFeedback2(result) {
  if (result?.sent === true) return t("ui.qq.testMessageSentCheckTheMatching");
  if (result?.code === "test-target-unavailable") {
    return t("ui.dingtalk.connectionCheckCompletedTheBotHas");
  }
  return result ? t("ui.feishu.connectionCheckCompletedButTheTest") : null;
}
function presentError4(error) {
  return {
    code: text2(error?.code, "QQ_ERROR", 80),
    message: text2(error?.message, t("ui.common.operationFailedRetry", { channel: CHANNEL_LABEL4 }))
  };
}
function formatRemaining3(milliseconds) {
  const seconds = Math.max(0, Math.ceil(Number(milliseconds) / 1e3) || 0);
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}

// plugin-src/client/channels/qq/index.js
var React13 = __toESM(require("react"), 1);

// plugin-src/client/channels/qq/styles.js
var QQ_STYLE_ID = "dsh-im-x-qq-settings";
var CSS4 = String.raw`
.dqq-page { --ddt-accent: #1677ff; --ddt-accent-deep: #0958d9; --ddt-accent-wash: #eaf3ff; }
.dqq-avatar, .dqq-brand { color: #fff; background: #1677ff; }
.dqq-avatar svg, .dqq-brand svg { display: block; }
`;
function installQqStyles() {
  if (typeof document === "undefined") return () => {
  };
  const existing = document.querySelector(`style[data-plugin-css="${QQ_STYLE_ID}"]`);
  if (existing) return () => {
  };
  const style = document.createElement("style");
  style.dataset.plugin = "@xmanrui/dsh-im";
  style.dataset.pluginCss = QQ_STYLE_ID;
  style.textContent = CSS4;
  document.head.appendChild(style);
  return () => style.remove();
}

// plugin-src/client/channels/qq/index.js
var CHANNEL_LABEL5 = "QQ";
var ACTIVE_STATES = /* @__PURE__ */ new Set(["pending", "refreshing", "connecting"]);
var Button7 = React13.forwardRef(function Button8({ children, kind = "secondary", className = "", ...props }, ref) {
  return h2("button", {
    ...props,
    ref,
    type: "button",
    className: `ddt-button ${className}`.trim(),
    "data-kind": kind
  }, children);
});
function checkedTime3(value) {
  if (!value) return t("ui.dingtalk.notCheckedYet");
  try {
    return new Intl.DateTimeFormat("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date(value));
  } catch {
    return t("ui.dingtalk.justNow");
  }
}
function Heading3({ totals, adding, busy, onAdd, onCredential, credentialOpen, addButtonRef }) {
  return h2(
    "div",
    { className: "ddt-heading" },
    h2(
      "div",
      { className: "ddt-tools" },
      h2(
        "div",
        { className: "dim-bindActions" },
        h2(Button7, {
          kind: "primary",
          className: "dim-scanButton",
          onClick: onAdd,
          disabled: adding || busy,
          ref: addButtonRef,
          "aria-label": t("ui.qq.connectQqBotByQrCode")
        }, h2(QrActionIcon), adding ? t("ui.dingtalk.connecting") : t("ui.dingtalk.scanQrCode")),
        h2(Button7, {
          kind: "credential",
          className: "dim-credentialButton",
          onClick: onCredential,
          disabled: adding || busy,
          "aria-pressed": credentialOpen,
          "aria-label": t("ui.qq.connectAQqBotWithAppid")
        }, h2(CredentialActionIcon), credentialOpen ? t("ui.dingtalk.hideCredentials") : t("ui.dingtalk.manualSetup"))
      ),
      totals.configured > 0 ? h2(
        "div",
        { className: "ddt-badge dim-onlineBadge" },
        h2("span", null, t("ui.common.onlineCount", { connected: totals.connected, configured: totals.configured }))
      ) : null
    )
  );
}
function LoadingView3() {
  return h2(
    "div",
    { className: "ddt-card ddt-loading dim-surfaceCard dim-loadingView", "aria-busy": "true" },
    h2("div", { className: "ddt-spinner dim-spinner" }),
    h2("span", null, t("ui.common.loadingStatus", { channel: CHANNEL_LABEL5 }))
  );
}
function EmptyView3({ busy, onStart }) {
  return h2(
    "div",
    { className: "ddt-card dim-surfaceCard" },
    h2(
      "div",
      { className: "ddt-cardBody ddt-empty dim-surfaceBody dim-emptyView" },
      h2(
        "div",
        { className: "dim-emptyCopy" },
        h2(
          "div",
          { className: "ddt-stateLabel dim-stateLabel" },
          h2("span", { className: "ddt-dot dim-stateDot" }),
          h2("span", null, t("ui.qq.noQqBotConnectedYet"))
        ),
        h2("h3", null, t("ui.qq.scanWithMobileQqToCreate")),
        h2("p", null, t("ui.qq.scanningIsCompletedOnTencentS")),
        h2(
          "div",
          { className: "ddt-actions dim-viewActions" },
          h2(
            Button7,
            { kind: "primary", onClick: onStart, disabled: busy },
            busy ? t("ui.dingtalk.generatingQrCode") : t("ui.qq.generateQqQrCode")
          )
        )
      ),
      h2(
        "div",
        { className: "ddt-brandMark dim-emptyBrand dqq-brand", "aria-hidden": "true" },
        h2(QqLogoGlyph, { size: 64 })
      )
    )
  );
}
function QrPanel2({ provision, now, busy, onRefresh, onCancel }) {
  const source = safeQrSource3(provision.qrCodeDataUrl);
  const remaining = Math.max(0, provision.expiresAt - now);
  const duration = Math.max(1, provision.durationMs ?? 5 * 6e4);
  const progress = Math.round(Math.min(1, remaining / duration) * 100);
  const refreshing = provision.status === "refreshing";
  return h2(
    "div",
    { className: "ddt-card dim-surfaceCard" },
    h2(
      "div",
      { className: "ddt-cardBody ddt-qrLayout dim-surfaceBody dim-qrLayout" },
      h2(
        "div",
        { className: "ddt-qrColumn dim-qrColumn" },
        h2(
          "div",
          { className: "ddt-qrFrame dim-qrFrame" },
          source ? h2("img", { src: source, alt: t("ui.qq.oneTimeQrCodeForConnecting") }) : h2(
            "div",
            { className: "ddt-qrFallback dim-qrFallback" },
            refreshing ? t("ui.qq.refreshingQrCode") : t("ui.qq.generatingQrCode")
          )
        ),
        h2(
          "div",
          { className: "ddt-countdown dim-countdown" },
          h2(
            "div",
            { className: "ddt-countdownTop dim-countdownTop" },
            h2("span", null, t("ui.qq.qrCodeExpiresIn")),
            h2("strong", null, refreshing ? "--:--" : formatRemaining3(remaining))
          ),
          h2("div", { className: "ddt-progress dim-progress", style: { "--ddt-progress": `${progress}%` } }, h2("span"))
        )
      ),
      h2(
        "div",
        { className: "ddt-qrCopy dim-qrCopy" },
        h2(
          "div",
          { className: "ddt-stateLabel dim-stateLabel" },
          h2("span", { className: "ddt-dot dim-stateDot", "data-tone": "warning" }),
          h2("span", null, refreshing ? t("ui.qq.refreshingQrCode2") : t("ui.qq.waitingForMobileQqScan"))
        ),
        h2("h3", null, t("ui.qq.completeBotSetupWithMobileQq")),
        h2("p", null, t("ui.qq.tencentWillCreateOrConnectA")),
        h2(
          "ol",
          { className: "ddt-steps dim-steps" },
          h2("li", null, t("ui.qq.openMobileQqAndScanThe")),
          h2("li", null, t("ui.qq.confirmBotCreationOrConnectionOn")),
          h2("li", null, t("ui.qq.returnHereAndWaitForThe"))
        ),
        h2(
          "div",
          { className: "ddt-actions dim-viewActions" },
          h2(Button7, { onClick: onRefresh, disabled: busy }, t("ui.dingtalk.generateANewQrCode2")),
          h2(Button7, { kind: "quiet", onClick: onCancel, disabled: busy }, t("ui.dingtalk.cancel"))
        )
      )
    )
  );
}
function ProvisionView({ provision, busy, onRetry, onClose }) {
  if (provision.status === "connecting") {
    return h2(
      "div",
      { className: "ddt-card ddt-loading dim-surfaceCard dim-specialView", "aria-busy": "true" },
      h2("div", { className: "ddt-spinner dim-spinner" }),
      h2("h3", null, t("ui.qq.authorizedInQqConnectingTheBot")),
      h2("p", null, t("ui.qq.savingCredentialsLocallyAndStartingThe"))
    );
  }
  const error = provision.error ?? { code: "QQ_PROVISION_FAILED", message: t("ui.common.notBound", { channel: CHANNEL_LABEL5 }) };
  return h2(
    "div",
    { className: "ddt-card dim-surfaceCard" },
    h2(
      "div",
      { className: "ddt-inlineError dim-inlineError", role: "alert" },
      h2("h3", null, t("ui.common.notBound", { channel: CHANNEL_LABEL5 })),
      h2("p", null, error.message),
      h2("span", { className: "ddt-errorCode" }, error.code),
      h2(
        "div",
        { className: "ddt-actions dim-viewActions" },
        h2(Button7, { kind: "primary", onClick: onRetry, disabled: busy }, t("ui.dingtalk.generateANewQrCode2")),
        h2(Button7, { onClick: onClose, disabled: busy }, t("ui.dingtalk.close"))
      )
    )
  );
}
function RemoveConfirmation3({ account, busy, onConfirm, onCancel }) {
  return h2(
    "div",
    { className: "ddt-confirm dim-confirm", role: "alertdialog" },
    h2("strong", null, t("ui.common.removeConfirm", { name: account.bot.name })),
    h2("p", null, t("ui.qq.thisStopsTheMessageConnectionAnd")),
    h2(
      "div",
      { className: "ddt-actions dim-viewActions" },
      h2(Button7, { onClick: onCancel, disabled: busy }, t("ui.dingtalk.keepBot")),
      h2(Button7, { kind: "danger", onClick: onConfirm, disabled: busy }, busy ? t("ui.dingtalk.removing") : t("ui.dingtalk.removeConnection"))
    )
  );
}
function AccountCard2({
  account,
  busy,
  feedback,
  removing,
  onReconnect,
  onWorkspaceSave,
  onAgentPresetSave,
  onRequestRemove,
  onConfirmRemove,
  onCancelRemove
}) {
  const tone = account.connected ? "success" : account.state === "error" ? "error" : "warning";
  const stateLabel2 = account.connected ? t("ui.dingtalk.connected") : account.state === "connecting" ? t("ui.dingtalk.connecting2") : t("ui.dingtalk.notConnected");
  const summary = account.error?.message ?? (account.connected ? null : account.health.summary);
  return h2(
    "article",
    { className: "ddt-card dim-botCard", "data-bot-id": account.botId },
    h2(
      "div",
      { className: "ddt-cardBody dim-botCardBody" },
      h2(
        "div",
        { className: "ddt-accountTop dim-botCardTop" },
        h2(
          "div",
          { className: "ddt-accountIdentity dim-botIdentity" },
          h2("div", { className: "ddt-avatar dim-botAvatar dqq-avatar", "aria-hidden": "true" }, h2(QqLogoGlyph, { size: 29 })),
          h2(
            "div",
            { className: "dim-botName" },
            h2("h3", null, account.bot.name),
            h2("p", null, account.bot.appIdMasked)
          )
        ),
        h2(BotStatusMeta, {
          className: "ddt-health",
          dotClassName: "ddt-dot",
          tone,
          stateLabel: stateLabel2,
          lastCheckedAt: account.health.lastCheckedAt,
          formatCheckedTime: checkedTime3
        })
      ),
      h2(WorkspaceEditor, {
        workspace: account.workspace,
        disabled: Boolean(busy),
        onSave: onWorkspaceSave
      }),
      h2(AgentPresetEditor, {
        agentPreset: account.agentPreset,
        disabled: Boolean(busy),
        onSave: onAgentPresetSave
      }),
      h2(
        "div",
        { className: "ddt-accountFooter dim-cardFooter" },
        h2(
          "div",
          { className: "dim-cardFooterLayout" },
          h2(
            "div",
            { className: "ddt-actions dim-cardActions" },
            h2(Button7, { className: "dim-cardAction", onClick: onReconnect, disabled: Boolean(busy) }, busy === "reconnect" ? t("ui.dingtalk.checking") : account.connected ? t("ui.dingtalk.checkConnection") : t("ui.dingtalk.reconnect")),
            h2(Button7, { className: "dim-cardAction", kind: "danger", onClick: onRequestRemove, disabled: Boolean(busy) }, t("ui.dingtalk.removeConnection2"))
          ),
          summary ? h2("div", { className: "ddt-summary dim-cardSummary" }, summary) : null,
          feedback ? h2("div", {
            className: "ddt-summary dim-cardFeedback",
            role: "status",
            "aria-live": "polite"
          }, feedback) : null
        )
      )
    ),
    removing ? h2(RemoveConfirmation3, {
      account,
      busy: busy === "delete",
      onConfirm: onConfirmRemove,
      onCancel: onCancelRemove
    }) : null
  );
}
function QqSettingsTab({ rpcCall }) {
  const [model, setModel] = React13.useState({
    phase: "loading",
    bots: [],
    totals: { configured: 0, connected: 0 },
    error: null,
    agentPresetCatalog: EMPTY_AGENT_PRESET_CATALOG
  });
  const [provision, setProvision] = React13.useState(null);
  const [busy, setBusy] = React13.useState(false);
  const [busyByBot, setBusyByBot] = React13.useState({});
  const [feedbackByBot, setFeedbackByBot] = React13.useState({});
  const [removeTarget, setRemoveTarget] = React13.useState(null);
  const [credentialOpen, setCredentialOpen] = React13.useState(false);
  const [credentialError, setCredentialError] = React13.useState(null);
  const [now, setNow] = React13.useState(Date.now());
  const mounted = React13.useRef(true);
  const workspaceFence = useWorkspaceSnapshotFence();
  const addButtonRef = React13.useRef(null);
  React13.useEffect(() => {
    const disposeDingtalk = installDingtalkStyles();
    const disposeQq = installQqStyles();
    mounted.current = true;
    return () => {
      mounted.current = false;
      disposeQq();
      disposeDingtalk();
    };
  }, []);
  const invoke = React13.useCallback(async (endpoint, payload = {}, signal) => {
    if (typeof rpcCall !== "function") throw new TypeError(t("ui.common.missingRpc", { channel: CHANNEL_LABEL5 }));
    return unwrapRpcResult4(await rpcCall(endpoint, payload, signal));
  }, [rpcCall]);
  const loadStatus = React13.useCallback(async ({ signal, silent = false, restore = false } = {}) => {
    const workspaceVersion = workspaceFence.beginStatus();
    if (workspaceVersion === null) return void 0;
    if (!silent && mounted.current) setModel((current2) => ({ ...current2, phase: "loading", error: null }));
    try {
      const snapshot = normalizeSnapshot3(await invoke(QQ_ENDPOINTS.status, {}, signal));
      if (!mounted.current || signal?.aborted || !workspaceFence.canCommitStatus(workspaceVersion)) return void 0;
      setModel({
        phase: "ready",
        bots: snapshot.bots,
        totals: snapshot.totals,
        error: null,
        agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
      });
      if (restore && snapshot.provisioning) setProvision({
        ...snapshot.provisioning,
        durationMs: Math.max(1, snapshot.provisioning.expiresAt - Date.now())
      });
      return snapshot;
    } catch (error) {
      if (error?.name !== "AbortError" && mounted.current && !signal?.aborted && workspaceFence.canCommitStatus(workspaceVersion)) {
        setModel((current2) => ({ ...current2, phase: silent ? current2.phase : "error", error: presentError4(error) }));
      }
      return void 0;
    }
  }, [invoke, workspaceFence]);
  React13.useEffect(() => {
    const controller = new AbortController();
    void loadStatus({ signal: controller.signal, restore: true });
    return () => controller.abort();
  }, [loadStatus]);
  React13.useEffect(() => {
    if (model.phase !== "ready") return void 0;
    const controller = new AbortController();
    const timer = window.setInterval(() => void loadStatus({ signal: controller.signal, silent: true }), 15e3);
    return () => {
      controller.abort();
      window.clearInterval(timer);
    };
  }, [loadStatus, model.phase]);
  React13.useEffect(() => {
    if (!provision || !ACTIVE_STATES.has(provision.status)) return void 0;
    const timer = window.setInterval(() => mounted.current && setNow(Date.now()), 1e3);
    return () => window.clearInterval(timer);
  }, [provision?.attemptId, provision?.status]);
  const startProvisioning = React13.useCallback(async (replace = false) => {
    setCredentialOpen(false);
    setCredentialError(null);
    setBusy(true);
    try {
      if (replace && provision?.attemptId) await invoke(QQ_ENDPOINTS.cancelProvisioning, { attemptId: provision.attemptId });
      if (!mounted.current) return;
      setProvision({ status: "starting" });
      const started = normalizeProvisioning3(await invoke(QQ_ENDPOINTS.beginProvisioning, { locale: "zh-CN" }));
      if (!mounted.current) return;
      setNow(Date.now());
      setProvision({ ...started, durationMs: Math.max(1, started.expiresAt - Date.now()) });
    } catch (error) {
      if (mounted.current) setProvision({ status: "failed", error: presentError4(error) });
    } finally {
      if (mounted.current) setBusy(false);
    }
  }, [invoke, provision?.attemptId]);
  const bindCredentials = React13.useCallback(async ({ identity, secret }) => {
    const snapshotVersion = workspaceFence.beginMutation();
    setBusy(true);
    setCredentialError(null);
    try {
      const snapshot = normalizeSnapshot3(await invoke(
        QQ_ENDPOINTS.bindCredentials,
        { appId: identity, appSecret: secret }
      ));
      if (!mounted.current) return;
      if (workspaceFence.canCommitMutation(snapshotVersion)) {
        setModel({
          phase: "ready",
          bots: snapshot.bots,
          totals: snapshot.totals,
          error: null,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
        });
      }
      setCredentialOpen(false);
    } catch (error) {
      if (mounted.current) setCredentialError(presentError4(error));
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mounted.current) void loadStatus({ silent: true });
      if (mounted.current) setBusy(false);
    }
  }, [invoke, loadStatus, workspaceFence]);
  const closeProvision = React13.useCallback(async () => {
    setBusy(true);
    try {
      if (provision?.attemptId && ACTIVE_STATES.has(provision.status)) {
        await invoke(QQ_ENDPOINTS.cancelProvisioning, { attemptId: provision.attemptId });
      }
      if (mounted.current) setProvision(null);
    } finally {
      if (mounted.current) setBusy(false);
    }
  }, [invoke, provision?.attemptId, provision?.status]);
  React13.useEffect(() => {
    const attemptId = provision?.attemptId;
    if (!attemptId || !ACTIVE_STATES.has(provision.status)) return void 0;
    const controller = new AbortController();
    let disposed = false;
    let timer;
    const poll = async () => {
      try {
        const current2 = normalizeProvisioning3(await invoke(QQ_ENDPOINTS.pollProvisioning, { attemptId }, controller.signal));
        if (disposed || controller.signal.aborted || !mounted.current) return;
        if (current2.status === "connected") {
          setProvision(null);
          await loadStatus({ signal: controller.signal, silent: true });
          return;
        }
        setProvision((previous) => previous?.attemptId === attemptId ? { ...previous, ...current2, durationMs: current2.qrRevision !== previous.qrRevision ? Math.max(1, current2.expiresAt - Date.now()) : previous.durationMs } : previous);
        if (ACTIVE_STATES.has(current2.status)) timer = window.setTimeout(poll, current2.pollIntervalMs);
      } catch (error) {
        if (!disposed && !controller.signal.aborted && mounted.current) {
          setProvision((current2) => ({ ...current2, status: "failed", error: presentError4(error) }));
        }
      }
    };
    timer = window.setTimeout(poll, provision.pollIntervalMs ?? 1e3);
    return () => {
      disposed = true;
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [invoke, loadStatus, provision?.attemptId, provision?.pollIntervalMs, provision?.status]);
  const botAction = React13.useCallback(async (account, operation, endpoint, payload) => {
    const snapshotVersion = workspaceFence.beginMutation();
    setBusyByBot((current2) => ({ ...current2, [account.botId]: operation }));
    try {
      const snapshot = normalizeSnapshot3(await invoke(endpoint, payload));
      if (mounted.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        setModel({
          phase: "ready",
          bots: snapshot.bots,
          totals: snapshot.totals,
          error: null,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
        });
      }
      return snapshot;
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mounted.current) void loadStatus({ silent: true });
      if (mounted.current) setBusyByBot((current2) => {
        const next = { ...current2 };
        delete next[account.botId];
        return next;
      });
    }
  }, [invoke, loadStatus, workspaceFence]);
  const reconnect = React13.useCallback(async (account) => {
    setFeedbackByBot((current2) => {
      const next = { ...current2 };
      delete next[account.botId];
      return next;
    });
    try {
      const snapshot = await botAction(
        account,
        "reconnect",
        QQ_ENDPOINTS.reconnectBot,
        { botId: account.botId, sendTest: true }
      );
      if (mounted.current) {
        setFeedbackByBot((current2) => ({
          ...current2,
          [account.botId]: connectionTestFeedback2(snapshot?.testMessage)
        }));
      }
    } catch {
      if (mounted.current) {
        setFeedbackByBot((current2) => ({
          ...current2,
          [account.botId]: t("ui.dingtalk.connectionCheckFailedTryAgainLater")
        }));
      }
    }
  }, [botAction]);
  let provisionView = null;
  if (provision?.status === "starting") provisionView = h2("div", { className: "ddt-card ddt-loading dim-surfaceCard" }, h2("div", { className: "ddt-spinner" }), t("ui.qq.requestingQqQrCode"));
  else if (["pending", "refreshing"].includes(provision?.status)) provisionView = h2(QrPanel2, {
    provision,
    now,
    busy,
    onRefresh: () => void startProvisioning(true),
    onCancel: () => void closeProvision()
  });
  else if (provision) provisionView = h2(ProvisionView, {
    provision,
    busy,
    onRetry: () => void startProvisioning(true),
    onClose: () => void closeProvision()
  });
  const botList = model.bots.length > 0 ? h2(
    "section",
    { className: "dim-listSection" },
    h2(ChannelListHeading, {
      className: "ddt-listHeading",
      title: t("ui.qq.connectedQqBots"),
      connectionLabel: t("ui.qq.websocketPersistentConnection")
    }),
    h2("ul", { className: "ddt-list dim-botList" }, model.bots.map((account) => h2("li", { key: account.botId }, h2(AccountCard2, {
      account,
      busy: busyByBot[account.botId],
      feedback: feedbackByBot[account.botId],
      removing: removeTarget === account.botId,
      onReconnect: () => void reconnect(account),
      onWorkspaceSave: (workspace) => botAction(
        account,
        "workspace",
        QQ_ENDPOINTS.setWorkspace,
        { botId: account.botId, workspace }
      ),
      onAgentPresetSave: (agentPreset) => botAction(
        account,
        "preset",
        QQ_ENDPOINTS.setAgentPreset,
        { botId: account.botId, agentPreset }
      ),
      onRequestRemove: () => setRemoveTarget(account.botId),
      onCancelRemove: () => setRemoveTarget(null),
      onConfirmRemove: async () => {
        await botAction(account, "delete", QQ_ENDPOINTS.deleteBot, { botId: account.botId, confirm: true });
        if (mounted.current) setRemoveTarget(null);
      }
    }))))
  ) : null;
  const credentialView = credentialOpen ? h2(CredentialBindingPanel, {
    channel: "QQ",
    identityLabel: "AppID",
    identityPlaceholder: t("ui.qq.enterTheQqOpenPlatformAppid"),
    secretLabel: "AppSecret",
    secretPlaceholder: t("ui.qq.enterTheQqOpenPlatformAppsecret"),
    busy,
    error: credentialError,
    onSubmit: bindCredentials,
    onCancel: () => {
      setCredentialOpen(false);
      setCredentialError(null);
    }
  }) : null;
  return h2(AgentPresetCatalogContext.Provider, {
    value: model.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
  }, h2(
    "section",
    { className: "ddt-page dqq-page dim-channelPage", "aria-label": t("ui.common.settings", { channel: CHANNEL_LABEL5 }) },
    h2(Heading3, {
      totals: model.totals,
      adding: Boolean(provision),
      busy,
      onAdd: () => void startProvisioning(),
      onCredential: () => {
        setCredentialOpen((value) => !value);
        setCredentialError(null);
      },
      credentialOpen,
      addButtonRef
    }),
    model.phase === "loading" ? h2(LoadingView3) : model.phase === "error" ? h2("div", { className: "ddt-card dim-surfaceCard" }, h2("div", { className: "ddt-inlineError dim-inlineError" }, h2("h3", null, t("ui.common.cannotReadStatus", { channel: CHANNEL_LABEL5 })), h2("p", null, model.error?.message), h2(Button7, { onClick: () => void loadStatus() }, t("ui.dingtalk.reload")))) : h2(
      React13.Fragment,
      null,
      credentialView,
      provisionView,
      model.bots.length === 0 && !provision && !credentialOpen ? h2(EmptyView3, { busy, onStart: () => void startProvisioning() }) : null,
      botList
    )
  ));
}

// src/channels/office/protocol.mjs
var OFFICE_PROTOCOL_VERSION = "office-harness.v1";
var OFFICE_RPC_CHANNEL = "/office";
var OFFICE_RPC_ENDPOINTS = Object.freeze({
  status: "connection.status",
  configure: "connector.configure",
  reconnect: "connector.reconnect",
  test: "connector.test",
  remove: "connector.remove"
});
var OFFICE_HOOK_PATHS = Object.freeze({
  stream: "/api/harness/connector/stream",
  heartbeat: "/api/harness/connector/heartbeat",
  job: "/api/harness/connector/jobs/:id",
  accept: "/api/harness/connector/jobs/:id/accept",
  renew: "/api/harness/connector/jobs/:id/renew",
  progress: "/api/harness/connector/jobs/:id/progress",
  approval: "/api/harness/connector/jobs/:id/approval",
  result: "/api/harness/connector/jobs/:id/result",
  fail: "/api/harness/connector/jobs/:id/fail"
});
function normalizeOfficeBaseUrl(value) {
  const url = new URL(typeof value === "string" ? value.trim() : "");
  const localHttp = url.protocol === "http:" && ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
  if (url.protocol !== "https:" && !localHttp) {
    throw new TypeError("AI Office URL must use HTTPS (HTTP is allowed only for loopback testing)");
  }
  if (url.username || url.password || url.search || url.hash) {
    throw new TypeError("AI Office URL must be a bare origin");
  }
  url.pathname = "/";
  return url;
}
function officeHookUrls(baseUrl) {
  const origin = normalizeOfficeBaseUrl(baseUrl);
  return Object.fromEntries(Object.entries(OFFICE_HOOK_PATHS).map(([name2, path]) => [
    name2,
    new URL(path, origin).toString()
  ]));
}

// plugin-src/client/channels/office/api.js
var CHANNEL_LABEL6 = "AI Office";
function record(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function unwrapOfficeRpc(result) {
  if (!record(result) || typeof result.ok !== "boolean") throw new Error(t("ui.common.unrecognizedResponse", { channel: CHANNEL_LABEL6 }));
  if (!result.ok) {
    const error = new Error(typeof result.error?.message === "string" ? result.error.message : t("ui.common.operationFailed", { channel: CHANNEL_LABEL6 }));
    error.code = typeof result.error?.code === "string" ? result.error.code : "office-rpc-error";
    throw error;
  }
  return result.value;
}
function normalizeOfficeStatus(value) {
  if (!record(value) || value.configured !== true) {
    return { configured: false, connected: false, state: "unconfigured", config: null, health: null };
  }
  const config = record(value.config) ? value.config : {};
  return {
    configured: true,
    connected: value.connected === true,
    state: typeof value.state === "string" ? value.state : "idle",
    tokenConfigured: value.tokenConfigured === true,
    config: {
      protocolVersion: config.protocolVersion ?? OFFICE_PROTOCOL_VERSION,
      baseUrl: typeof config.baseUrl === "string" ? config.baseUrl : "",
      deviceId: typeof config.deviceId === "string" ? config.deviceId : "",
      maxConcurrency: Number(config.maxConcurrency ?? 1),
      heartbeatSeconds: Number(config.heartbeatSeconds ?? 30),
      workspaces: record(config.workspaces) ? config.workspaces : {},
      instructionPresets: record(config.instructionPresets) ? config.instructionPresets : {},
      hooks: record(config.hooks) ? config.hooks : {}
    },
    health: record(value.health) ? value.health : null
  };
}

// plugin-src/client/channels/office/index.js
var React14 = __toESM(require("react"), 1);
function Button9({ children, kind = "secondary", ...props }) {
  return h2("button", { ...props, type: "button", className: "ddt-button", "data-kind": kind }, children);
}
function mapText(value) {
  return Object.entries(value ?? {}).map(([key, item]) => `${key}=${item}`).join("\n");
}
function parseMap(value, label) {
  const output = {};
  for (const raw of value.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line) continue;
    const index = line.indexOf("=");
    if (index < 1 || !line.slice(index + 1).trim()) {
      throw new Error(label === t("ui.office.workspaceMappings") ? t("ui.office.eachWorkspaceMappingMustUseAlias") : t("ui.office.eachInstructionPresetMappingMustUse"));
    }
    output[line.slice(0, index).trim()] = line.slice(index + 1).trim();
  }
  return output;
}
function stateLabel(model) {
  if (model.connected) return t("ui.office.connectedToOffice");
  if (!model.configured) return t("ui.office.notConfigured");
  if (model.state === "connecting") return t("ui.dingtalk.connecting2");
  if (model.state === "reconnecting") return t("ui.office.waitingToReconnect");
  if (model.state === "missing-token") return t("ui.office.credentialMissing");
  return t("ui.office.configured");
}
function OfficeSettingsTab({ rpcCall, initialStatus }) {
  const [model, setModel] = React14.useState(normalizeOfficeStatus(initialStatus));
  const [phase, setPhase] = React14.useState(initialStatus === void 0 ? "loading" : "ready");
  const [busy, setBusy] = React14.useState("");
  const [error, setError] = React14.useState("");
  const [notice, setNotice] = React14.useState("");
  const [form, setForm] = React14.useState({
    baseUrl: "",
    deviceId: "local-harness",
    deviceToken: "",
    maxConcurrency: "1",
    heartbeatSeconds: "30",
    workspaces: "",
    instructionPresets: ""
  });
  const invoke = React14.useCallback(async (endpoint, payload = {}) => {
    if (typeof rpcCall !== "function") throw new Error(t("ui.office.aiOfficeSettingsAreMissingAn"));
    return unwrapOfficeRpc(await rpcCall(endpoint, payload));
  }, [rpcCall]);
  const adopt = React14.useCallback((value) => {
    const next = normalizeOfficeStatus(value?.snapshot ?? value);
    setModel(next);
    if (next.config) setForm((current2) => ({
      ...current2,
      baseUrl: next.config.baseUrl,
      deviceId: next.config.deviceId,
      maxConcurrency: String(next.config.maxConcurrency),
      heartbeatSeconds: String(next.config.heartbeatSeconds),
      workspaces: mapText(next.config.workspaces),
      instructionPresets: mapText(next.config.instructionPresets),
      deviceToken: ""
    }));
    return next;
  }, []);
  const load = React14.useCallback(async () => {
    try {
      adopt(await invoke(OFFICE_RPC_ENDPOINTS.status));
      setPhase("ready");
      setError("");
    } catch (caught) {
      setPhase("error");
      setError(caught.message);
    }
  }, [adopt, invoke]);
  React14.useEffect(() => {
    void load();
  }, [load]);
  const run = async (name2, operation) => {
    setBusy(name2);
    setError("");
    setNotice("");
    try {
      const value = await operation();
      adopt(value);
      setNotice(name2 === "test" ? t("ui.office.connectionTestPassed") : t("ui.office.configurationSaved"));
    } catch (caught) {
      setError(caught.message);
    } finally {
      setBusy("");
    }
  };
  const hooks = React14.useMemo(() => {
    try {
      return officeHookUrls(form.baseUrl);
    } catch {
      return {};
    }
  }, [form.baseUrl]);
  const health = model.health ?? {};
  if (phase === "loading") return h2("div", { className: "ddt-card ddt-loading", "aria-busy": "true" }, t("ui.office.loadingAiOfficeConnector"));
  return h2(
    "section",
    { className: "dof-page", "aria-label": t("ui.office.aiOfficeSettings") },
    h2(
      "div",
      { className: "dof-hero" },
      h2(
        "div",
        { className: "dof-heroCopy" },
        h2("h3", null, "AI Office Connector"),
        h2("p", null, t("ui.office.thisMachineConnectsOutwardToThe"), OFFICE_PROTOCOL_VERSION, "\u3002")
      ),
      h2(
        "span",
        { className: "dof-status", "data-connected": String(model.connected) },
        h2("span", { className: "dof-dot" }),
        stateLabel(model)
      )
    ),
    model.configured ? h2(
      "div",
      { className: "dof-metrics" },
      h2("div", { className: "dof-metric" }, h2("span", null, t("ui.office.lastHeartbeat")), h2("strong", null, health.lastHeartbeatAt ?? t("ui.office.noneYet"))),
      h2("div", { className: "dof-metric" }, h2("span", null, t("ui.office.lastEvent")), h2("strong", null, health.lastEventType ?? t("ui.office.noneYet"))),
      h2("div", { className: "dof-metric" }, h2("span", null, t("ui.office.reconnects")), h2("strong", null, String(health.reconnects ?? 0))),
      h2("div", { className: "dof-metric" }, h2("span", null, "Job Offer"), h2("strong", null, String(health.jobsOffered ?? 0))),
      h2("div", { className: "dof-metric" }, h2("span", null, t("ui.office.runningJobs")), h2("strong", null, String(health.jobs?.running ?? 0))),
      h2("div", { className: "dof-metric" }, h2("span", null, t("ui.office.completedJobs")), h2("strong", null, String(health.jobs?.completed ?? 0)))
    ) : null,
    h2(
      "div",
      { className: "dof-card" },
      h2("div", { className: "dof-cardTitle" }, h2("h4", null, t("ui.office.deviceConnection")), h2("span", null, t("ui.office.tokenIsWrittenOnlyToThe"))),
      h2(
        "div",
        { className: "dof-grid" },
        h2(
          "label",
          { className: "dof-field", "data-wide": "true" },
          "Office Base URL",
          h2("input", { value: form.baseUrl, placeholder: "https://office.example.com", onChange: (event) => setForm({ ...form, baseUrl: event.target.value }) })
        ),
        h2(
          "label",
          { className: "dof-field" },
          "Device ID",
          h2("input", { value: form.deviceId, placeholder: "local-harness", onChange: (event) => setForm({ ...form, deviceId: event.target.value }) })
        ),
        h2(
          "label",
          { className: "dof-field" },
          "Device Token",
          h2("input", { type: "password", value: form.deviceToken, placeholder: model.tokenConfigured ? t("ui.office.storedSecurelyLeaveBlankToKeep") : t("ui.office.pasteTheOneTimeOfficeCredential"), autoComplete: "new-password", onChange: (event) => setForm({ ...form, deviceToken: event.target.value }) })
        ),
        h2(
          "label",
          { className: "dof-field" },
          t("ui.office.maxConcurrency"),
          h2("input", { type: "number", min: 1, max: 4, value: form.maxConcurrency, onChange: (event) => setForm({ ...form, maxConcurrency: event.target.value }) })
        ),
        h2(
          "label",
          { className: "dof-field" },
          t("ui.office.heartbeatSeconds"),
          h2("input", { type: "number", min: 10, max: 300, value: form.heartbeatSeconds, onChange: (event) => setForm({ ...form, heartbeatSeconds: event.target.value }) })
        ),
        h2(
          "label",
          { className: "dof-field", "data-wide": "true" },
          t("ui.office.workspaceMappings"),
          h2("textarea", { value: form.workspaces, placeholder: "office-project=/Users/you/projects/ai-office", onChange: (event) => setForm({ ...form, workspaces: event.target.value }) }),
          h2("small", null, t("ui.office.oneAliasLocalAbsolutePathPer"))
        ),
        h2(
          "label",
          { className: "dof-field", "data-wide": "true" },
          t("ui.office.instructionPresetMappings"),
          h2("textarea", { value: form.instructionPresets, placeholder: t("ui.office.actionItemsTurnThisIntoAccountable"), onChange: (event) => setForm({ ...form, instructionPresets: event.target.value }) }),
          h2("small", null, t("ui.office.oneAliasInstructionPerLineNew"))
        )
      ),
      error ? h2("p", { className: "dof-error", role: "alert" }, error) : null,
      notice ? h2("p", { className: "dof-notice", role: "status" }, notice) : null,
      health.error?.message ? h2("p", { className: "dof-error" }, health.error.message) : null,
      h2(
        "div",
        { className: "dof-actions" },
        h2(Button9, { kind: "primary", disabled: Boolean(busy), onClick: () => void run("save", () => invoke(OFFICE_RPC_ENDPOINTS.configure, {
          baseUrl: form.baseUrl,
          deviceId: form.deviceId,
          ...form.deviceToken ? { deviceToken: form.deviceToken } : {},
          maxConcurrency: Number(form.maxConcurrency),
          heartbeatSeconds: Number(form.heartbeatSeconds),
          workspaces: parseMap(form.workspaces, t("ui.office.workspaceMappings")),
          instructionPresets: parseMap(form.instructionPresets, t("ui.office.instructionPresetMappings"))
        })) }, busy === "save" ? t("ui.agentPreset.saving") : t("ui.office.saveAndConnect")),
        h2(Button9, { disabled: !model.configured || Boolean(busy), onClick: () => void run("test", () => invoke(OFFICE_RPC_ENDPOINTS.test)) }, busy === "test" ? t("ui.office.testing") : t("ui.office.testConnection")),
        h2(Button9, { disabled: !model.configured || Boolean(busy), onClick: () => void run("reconnect", () => invoke(OFFICE_RPC_ENDPOINTS.reconnect)) }, t("ui.office.reconnect")),
        h2(Button9, { kind: "danger", disabled: !model.configured || Boolean(busy), onClick: () => void run("remove", () => invoke(OFFICE_RPC_ENDPOINTS.remove, { confirm: true })) }, t("ui.office.removeConnection"))
      )
    ),
    h2(
      "div",
      { className: "dof-card" },
      h2("div", { className: "dof-cardTitle" }, h2("h4", null, t("ui.office.protocolHookPreview")), h2("span", null, t("ui.office.derivedFromBaseUrlNoSeparate"))),
      h2(
        "div",
        { className: "dof-hooks" },
        [["SSE", hooks.stream], ["Heartbeat", hooks.heartbeat], ["Job", hooks.job], ["Result", hooks.result]].map(([label, url]) => h2("div", { className: "dof-hook", key: label }, h2("strong", null, label), h2("code", null, url ?? t("ui.office.invalidBaseUrl"))))
      )
    ),
    h2("p", { className: "dof-notice" }, t("ui.office.configurationIsSavedAndRetriedWhile"))
  );
}

// plugin-src/client/channels/office/styles.js
var OFFICE_STYLE_ID = "dsh-im-x-office-settings";
var CSS5 = `
.dof-page { --dof-accent: var(--dsw-alias-brand-primary, #3964fe); }
.dof-hero { position: relative; overflow: hidden; display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 16px; align-items: center; margin-bottom: 12px; padding: 18px; border: 1px solid var(--dsw-alias-border-l2, #e5e6eb); border-radius: 16px; background: linear-gradient(135deg, color-mix(in srgb, var(--dof-accent) 9%, var(--dsw-alias-bg-layer-1, #fff)), var(--dsw-alias-bg-layer-1, #fff) 62%); }
.dof-hero::after { content: ""; position: absolute; width: 150px; height: 150px; right: -75px; top: -90px; border: 24px solid color-mix(in srgb, var(--dof-accent) 12%, transparent); border-radius: 50%; pointer-events: none; }
.dof-heroCopy { min-width: 0; }
.dof-heroCopy h3 { margin: 0; color: var(--dsw-alias-label-primary, #1f2329); font-size: 17px; line-height: 1.35; }
.dof-heroCopy p { margin: 6px 0 0; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; line-height: 1.6; }
.dof-status { position: relative; z-index: 1; display: inline-flex; align-items: center; gap: 7px; padding: 7px 10px; border: 1px solid var(--dsw-alias-border-l2, #e5e6eb); border-radius: 999px; background: var(--dsw-alias-bg-layer-1, #fff); color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; white-space: nowrap; }
.dof-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--dsw-alias-state-warn-primary, #d97706); }
.dof-status[data-connected="true"] .dof-dot { background: var(--dsw-alias-state-success-primary, #20a162); box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsw-alias-state-success-primary, #20a162) 14%, transparent); }
.dof-card { margin-top: 10px; padding: 16px; border: 1px solid var(--dsw-alias-border-l2, #e5e6eb); border-radius: 14px; background: var(--dsw-alias-bg-layer-1, #fff); }
.dof-cardTitle { display: flex; justify-content: space-between; gap: 12px; align-items: baseline; margin-bottom: 12px; }
.dof-cardTitle h4 { margin: 0; color: var(--dsw-alias-label-primary, #1f2329); font-size: 14px; }
.dof-cardTitle span { color: var(--dsw-alias-label-tertiary, #8f959e); font-size: 11px; }
.dof-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.dof-field { min-width: 0; display: flex; flex-direction: column; gap: 6px; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; }
.dof-field[data-wide="true"] { grid-column: 1 / -1; }
.dof-field input, .dof-field textarea { box-sizing: border-box; width: 100%; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 9px; background: var(--dsw-alias-bg-layer-1, #fff); color: var(--dsw-alias-label-primary, #1f2329); font: inherit; font-size: 13px; line-height: 1.5; outline: none; }
.dof-field input { height: 38px; padding: 0 11px; }
.dof-field textarea { min-height: 86px; resize: vertical; padding: 9px 11px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
.dof-field input:focus, .dof-field textarea:focus { border-color: var(--dof-accent); box-shadow: 0 0 0 3px color-mix(in srgb, var(--dof-accent) 12%, transparent); }
.dof-field small { color: var(--dsw-alias-label-tertiary, #8f959e); line-height: 1.45; }
.dof-hooks { display: grid; gap: 7px; }
.dof-hook { min-width: 0; display: grid; grid-template-columns: 82px minmax(0, 1fr); gap: 10px; align-items: center; padding: 8px 10px; border-radius: 9px; background: var(--dsw-alias-interactive-bg-hover, #f7f8fa); }
.dof-hook strong { color: var(--dsw-alias-label-secondary, #646a73); font-size: 11px; }
.dof-hook code { overflow: hidden; color: var(--dsw-alias-label-primary, #1f2329); font-size: 11px; text-overflow: ellipsis; white-space: nowrap; }
.dof-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
.dof-actions .ddt-button[data-kind="primary"] { color: #fff; border-color: var(--dof-accent); background: var(--dof-accent); }
.dof-error, .dof-notice { margin: 10px 0 0; padding: 9px 11px; border-radius: 9px; font-size: 12px; line-height: 1.5; }
.dof-error { color: var(--dsw-alias-state-error-primary, #d54941); background: var(--dsw-alias-state-error-secondary, #fff0ef); }
.dof-notice { color: var(--dsw-alias-label-secondary, #646a73); background: var(--dsw-alias-interactive-bg-hover, #f7f8fa); }
.dof-metrics { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; margin-top: 12px; }
.dof-metric { min-width: 0; padding: 9px; border-radius: 10px; background: var(--dsw-alias-interactive-bg-hover, #f7f8fa); }
.dof-metric span { display: block; color: var(--dsw-alias-label-tertiary, #8f959e); font-size: 10px; }
.dof-metric strong { display: block; overflow: hidden; margin-top: 4px; color: var(--dsw-alias-label-primary, #1f2329); font-size: 12px; text-overflow: ellipsis; white-space: nowrap; }
@container (max-width: 680px) { .dof-grid { grid-template-columns: minmax(0, 1fr); } .dof-field[data-wide="true"] { grid-column: auto; } .dof-metrics { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (prefers-reduced-motion: reduce) { .dof-page * { transition: none !important; } }
`;
function installOfficeStyles() {
  if (typeof document === "undefined") return () => {
  };
  if (document.querySelector(`style[data-plugin-css="${OFFICE_STYLE_ID}"]`)) return () => {
  };
  const style = document.createElement("style");
  style.dataset.pluginCss = OFFICE_STYLE_ID;
  style.textContent = CSS5;
  document.head.append(style);
  return () => style.remove();
}

// plugin-src/client/channels/slack/api.js
var SLACK_RPC_CHANNEL = "/slack";
var SLACK_ENDPOINTS = TOKEN_BOT_ENDPOINTS;
var api2 = createTokenChannelApi("Slack", t("ui.slack.socketModePersistentConnection"));
var unwrapRpcResult5 = api2.unwrapRpcResult;
var normalizeSnapshot4 = api2.normalizeSnapshot;
var presentError5 = api2.presentError;

// plugin-src/client/channels/slack/index.js
var React15 = __toESM(require("react"), 1);

// src/channels/slack/manifest.mjs
var SLACK_APP_MANIFEST_YAML = `_metadata:
  major_version: 1
display_information:
  name: DeepSeek Harness
  description: Connect Slack conversations to a local DeepSeek Harness agent.
  background_color: "#4A154B"
features:
  app_home:
    home_tab_enabled: false
    messages_tab_enabled: true
    messages_tab_read_only_enabled: false
  bot_user:
    display_name: DeepSeek Harness
    always_online: false
oauth_config:
  scopes:
    bot:
      - app_mentions:read
      - chat:write
      - files:read
      - files:write
      - im:history
settings:
  event_subscriptions:
    bot_events:
      - app_mention
      - message.im
  org_deploy_enabled: false
  socket_mode_enabled: true
  token_rotation_enabled: false
`;
var SLACK_CREATE_APP_URL = "https://api.slack.com/apps?new_app=1";

// plugin-src/client/channels/slack/styles.js
var SLACK_STYLE_ID = "dsh-im-x-slack-settings";
var CSS6 = String.raw`
.dsl-page { --ddt-accent: #4a154b; --ddt-accent-deep: #321033; --ddt-accent-wash: #f7eef7; }
.dsl-avatar { color: #fff; background: #4a154b; }
.dsl-avatar svg { display: block; }
.dsl-setup { display: grid; gap: 18px; }
.dsl-guide { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: start; gap: 18px; padding: 16px; border: 1px solid color-mix(in srgb, #4a154b 18%, var(--dsw-alias-border-l2, #e5e6eb)); border-radius: 11px; background: color-mix(in srgb, #4a154b 4%, var(--dsw-alias-bg-layer-1, #fff)); }
.dsl-guideCopy { min-width: 0; }
.dsl-guideCopy strong { display: block; margin-bottom: 5px; color: var(--dsw-alias-label-primary, #1f2329); font-size: 13px; }
.dsl-guideCopy p { margin: 0; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; line-height: 1.6; }
.dsl-guideActions { display: flex; align-items: center; flex-wrap: wrap; justify-content: flex-end; gap: 8px; }
.dsl-guideActions .ddt-button { white-space: nowrap; }
.dsl-copyState { color: var(--dsw-alias-state-success-primary, #20a162); }
.dsl-fields { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.dsl-tokenHint { grid-column: 1 / -1; margin: -4px 0 0; color: var(--dsw-alias-label-tertiary, #8f959e); font-size: 11px; line-height: 1.55; }
@container (max-width: 680px) {
  .dsl-guide { grid-template-columns: minmax(0, 1fr); }
  .dsl-guideActions { justify-content: flex-start; }
  .dsl-fields { grid-template-columns: minmax(0, 1fr); }
}
`;
function installSlackStyles() {
  if (typeof document === "undefined") return () => {
  };
  const existing = document.querySelector(`style[data-plugin-css="${SLACK_STYLE_ID}"]`);
  if (existing) return () => {
  };
  const style = document.createElement("style");
  style.dataset.plugin = "@xmanrui/dsh-im";
  style.dataset.pluginCss = SLACK_STYLE_ID;
  style.textContent = CSS6;
  document.head.appendChild(style);
  return () => style.remove();
}

// plugin-src/client/channels/slack/index.js
function SlackCredentialPanel({ busy, error, onSubmit, onCancel }) {
  const [botToken, setBotToken] = React15.useState("");
  const [appToken, setAppToken] = React15.useState("");
  const [copied, setCopied] = React15.useState(false);
  const headingId = React15.useId();
  const copyManifest = async () => {
    try {
      await navigator.clipboard.writeText(SLACK_APP_MANIFEST_YAML);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2e3);
    } catch {
      setCopied(false);
    }
  };
  const submit = (event) => {
    event.preventDefault();
    const normalizedBotToken = botToken.trim();
    const normalizedAppToken = appToken.trim();
    if (!normalizedBotToken || !normalizedAppToken || busy) return;
    void onSubmit?.({ botToken: normalizedBotToken, appToken: normalizedAppToken });
  };
  return h2(
    "section",
    {
      className: "ddt-card dim-surfaceCard dim-credentialPanel dsl-setup",
      "aria-labelledby": headingId
    },
    h2("h3", { id: headingId, className: "dim-credentialTitle" }, t("ui.slack.connectASlackBot")),
    h2(
      "div",
      { className: "dsl-guide" },
      h2(
        "div",
        { className: "dsl-guideCopy" },
        h2("strong", null, t("ui.slack.createAndConfigureASlackApp")),
        h2("p", null, t("ui.slack.copyTheManifestAndChooseFrom"))
      ),
      h2(
        "div",
        { className: "dsl-guideActions" },
        h2("button", {
          type: "button",
          className: "ddt-button",
          onClick: () => void copyManifest(),
          disabled: busy
        }, copied ? h2("span", { className: "dsl-copyState" }, t("ui.slack.manifestCopied")) : t("ui.slack.copyManifest")),
        h2("a", {
          className: "ddt-button",
          href: SLACK_CREATE_APP_URL,
          target: "_blank",
          rel: "noreferrer"
        }, t("ui.slack.openSlackAppCreation"))
      )
    ),
    h2(
      "form",
      { className: "dim-credentialForm dim-credentialFormSingle", onSubmit: submit },
      h2(
        "div",
        { className: "dsl-fields" },
        h2(
          "label",
          { className: "dim-credentialField" },
          h2("span", null, "Bot Token"),
          h2("input", {
            type: "password",
            value: botToken,
            onChange: (event) => setBotToken(event.target.value),
            placeholder: "xoxb-\u2026",
            maxLength: 4096,
            autoCapitalize: "none",
            autoCorrect: "off",
            spellCheck: false,
            autoComplete: "new-password",
            disabled: busy,
            required: true
          })
        ),
        h2(
          "label",
          { className: "dim-credentialField" },
          h2("span", null, "App Token"),
          h2("input", {
            type: "password",
            value: appToken,
            onChange: (event) => setAppToken(event.target.value),
            placeholder: "xapp-\u2026",
            maxLength: 4096,
            autoCapitalize: "none",
            autoCorrect: "off",
            spellCheck: false,
            autoComplete: "new-password",
            disabled: busy,
            required: true
          })
        ),
        h2("p", { className: "dsl-tokenHint" }, t("ui.slack.getTheBotTokenFromOauth"))
      ),
      error ? h2("p", { className: "dim-credentialError", role: "alert" }, error.message ?? String(error)) : null,
      h2(
        "div",
        { className: "ddt-actions dim-viewActions dim-credentialActions" },
        h2("button", {
          type: "submit",
          className: "ddt-button",
          "data-kind": "primary",
          disabled: busy || !botToken.trim() || !appToken.trim()
        }, busy ? t("ui.slack.verifyingAndConnecting") : t("ui.slack.verifyAndConnect")),
        h2("button", {
          type: "button",
          className: "ddt-button",
          onClick: onCancel,
          disabled: busy
        }, t("ui.dingtalk.cancel"))
      )
    )
  );
}
var channel2 = createTokenChannelSettings({
  channel: "Slack",
  endpoints: SLACK_ENDPOINTS,
  api: api2,
  LogoGlyph: SlackLogoGlyph,
  installStyles: installSlackStyles,
  pageClass: "dsl-page",
  avatarClass: "dsl-avatar",
  connectionLabel: t("ui.slack.socketModePersistentConnection2"),
  emptyTitle: t("ui.slack.connectASlackBot"),
  emptyDescription: t("ui.slack.configureTheBotWithTheOfficial"),
  platformLabel: t("ui.slack.slackWorkspace"),
  CredentialPanel: SlackCredentialPanel,
  credentialPayload: ({ botToken, appToken }) => ({ botToken, appToken }),
  credentialAriaLabel: t("ui.slack.connectASlackBotWithA"),
  credentialOpenLabel: t("ui.slack.connectBot"),
  credentialCloseLabel: t("ui.slack.hideSetup"),
  credentialNoun: t("ui.slack.botTokenAndAppToken"),
  emptyActionLabel: t("ui.slack.startSetup")
});
var SlackSettingsTab = channel2.SettingsTab;
var SlackAccountCard = channel2.AccountCard;

// plugin-src/client/channels/telegram/api.js
var TELEGRAM_RPC_CHANNEL = "/telegram";
var TELEGRAM_ENDPOINTS = Object.freeze({
  ...TOKEN_BOT_ENDPOINTS,
  setAccessPolicy: "bot.access-policy.set"
});
var api3 = createTokenChannelApi("Telegram", t("ui.telegram.botApiLongPolling"), {
  normalizeBotExtension: (value) => {
    const source = value?.accessPolicy;
    const accessMode = source?.accessMode === "private-allowlist" ? "private-allowlist" : "compatible";
    const allowedUsers = Array.isArray(source?.allowedUsers) ? [...new Set(source.allowedUsers.filter((entry) => typeof entry === "string" && /^[1-9]\d{0,15}$/.test(entry)))] : [];
    return { accessPolicy: { accessMode, allowedUsers } };
  }
});
var unwrapRpcResult6 = api3.unwrapRpcResult;
var normalizeSnapshot5 = api3.normalizeSnapshot;
var presentError6 = api3.presentError;

// plugin-src/client/channels/telegram/index.js
var React16 = __toESM(require("react"), 1);

// plugin-src/client/channels/telegram/styles.js
var TELEGRAM_STYLE_ID = "dsh-im-x-telegram-settings";
var CSS7 = String.raw`
.dtg-page { --ddt-accent: #229ed9; --ddt-accent-deep: #1687bd; --ddt-accent-wash: #eaf7fd; }
.dtg-avatar { color: #fff; background: #229ed9; }
.dtg-avatar svg { display: block; }
.dtg-access { display: grid; gap: 10px; padding: 12px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 10px; background: var(--dsw-alias-bg-layer-2, #f7f8fa); }
.dtg-accessHeading { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.dtg-accessHeading > strong { font-size: 13px; }
.dtg-accessStatus { min-width: 0; display: inline-flex; align-items: center; justify-content: flex-end; gap: 6px; }
.dtg-accessBadge { flex: none; padding: 3px 8px; border-radius: 999px; color: #1687bd; background: #eaf7fd; font-size: 11px; font-weight: 700; }
.dtg-accessBadge[data-mode="private-allowlist"] { color: #a15c00; background: #fff3d6; }
.dtg-accessHelp { position: relative; display: inline-flex; flex: none; }
.dtg-accessHelpButton { width: 20px; height: 20px; display: grid; place-items: center; padding: 0; border: 1px solid color-mix(in srgb, #229ed9 28%, var(--dsw-alias-border-l2, #dfe1e5)); border-radius: 50%; color: #1687bd; background: var(--dsw-alias-bg-layer-1, #fff); font: inherit; font-size: 12px; line-height: 1; font-weight: 750; cursor: help; transition: border-color .15s ease, color .15s ease, background .15s ease, box-shadow .15s ease; }
.dtg-accessHelpButton:hover { border-color: #229ed9; color: #1178a8; background: #eaf7fd; }
.dtg-accessHelpButton:focus-visible { outline: none; border-color: #229ed9; box-shadow: 0 0 0 3px color-mix(in srgb, #229ed9 18%, transparent); }
.dtg-accessTooltip { position: absolute; top: calc(100% + 8px); right: 0; z-index: 30; width: 260px; max-width: min(280px, calc(100vw - 48px)); display: grid; gap: 8px; padding: 10px 11px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 9px; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-bg-layer-3, #fff); box-shadow: 0 10px 28px rgb(31 35 41 / 16%); opacity: 0; visibility: hidden; transform: translateY(-3px); pointer-events: none; transition: opacity .15s ease, transform .15s ease, visibility .15s ease; }
.dtg-accessTooltipItem { display: grid; gap: 2px; }
.dtg-accessTooltipItem + .dtg-accessTooltipItem { padding-top: 8px; border-top: 1px solid var(--dsw-alias-border-l2, #eef0f3); }
.dtg-accessTooltipItem strong { color: var(--dsw-alias-label-primary, #1f2329); font-size: 12px; line-height: 17px; font-weight: 700; }
.dtg-accessTooltipItem > span { color: var(--dsw-alias-label-secondary, #646a73); font-size: 11px; line-height: 16px; font-weight: 400; }
.dtg-accessHelp:hover .dtg-accessTooltip, .dtg-accessHelp:focus-within .dtg-accessTooltip { opacity: 1; visibility: visible; transform: translateY(0); }
.dtg-accessField { display: grid; gap: 5px; color: var(--dsw-alias-label-primary, #1f2329); font-size: 12px; font-weight: 600; }
.dtg-accessField select, .dtg-accessField textarea { width: 100%; box-sizing: border-box; border: 1px solid var(--dsw-alias-border-l1, #c9cdd4); border-radius: 7px; color: inherit; background: var(--dsw-alias-bg-layer-1, #fff); font: inherit; font-weight: 400; }
.dtg-accessField select { height: 34px; padding: 0 9px; }
.dtg-accessField textarea { min-height: 68px; padding: 8px 9px; resize: vertical; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
.dtg-accessField textarea:disabled { color: var(--dsw-alias-label-tertiary, #8f959e); background: var(--dsw-alias-bg-module-platform, #f2f3f5); cursor: not-allowed; resize: none; opacity: 1; }
.dtg-accessField small { color: var(--dsw-alias-label-secondary, #646a73); font-weight: 400; }
.dtg-accessWarning, .dtg-accessError { margin: 0; font-size: 12px; line-height: 1.5; }
.dtg-accessWarning { color: #a15c00; }
.dtg-accessError { color: var(--dsw-alias-state-error-primary, #d83931); }
.dtg-accessActions { display: flex; justify-content: flex-end; }
`;
function installTelegramStyles() {
  if (typeof document === "undefined") return () => {
  };
  const existing = document.querySelector(`style[data-plugin-css="${TELEGRAM_STYLE_ID}"]`);
  if (existing) return () => {
  };
  const style = document.createElement("style");
  style.dataset.plugin = "@xmanrui/dsh-im";
  style.dataset.pluginCss = TELEGRAM_STYLE_ID;
  style.textContent = CSS7;
  document.head.appendChild(style);
  return () => style.remove();
}

// plugin-src/client/channels/telegram/index.js
function policyFor(account) {
  return {
    accessMode: account?.accessPolicy?.accessMode === "private-allowlist" ? "private-allowlist" : "compatible",
    allowedUsers: Array.isArray(account?.accessPolicy?.allowedUsers) ? account.accessPolicy.allowedUsers : []
  };
}
function allowedUsersFromText(value) {
  const entries = value.split(/\r?\n/).map((entry) => entry.trim()).filter(Boolean);
  if (entries.some((entry) => !/^[1-9]\d{0,15}$/.test(entry))) {
    throw new TypeError(t("ui.telegram.eachUserIdMustBeA"));
  }
  return [...new Set(entries)];
}
function TelegramAccessSettings({ account, busy = false, onSave }) {
  const policy = policyFor(account);
  const sourceUsers = policy.allowedUsers.join("\n");
  const accessHelpId = React16.useId();
  const [accessMode, setAccessMode] = React16.useState(policy.accessMode);
  const [allowedUsers, setAllowedUsers] = React16.useState(sourceUsers);
  const [error, setError] = React16.useState(null);
  React16.useEffect(() => {
    setAccessMode(policy.accessMode);
    setAllowedUsers(sourceUsers);
    setError(null);
  }, [policy.accessMode, sourceUsers]);
  const save = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const normalized = allowedUsersFromText(allowedUsers);
      if (typeof onSave !== "function") throw new Error(t("ui.telegram.telegramAccessSettingsAreCurrentlyUnavailable"));
      await onSave({ accessMode, allowedUsers: normalized });
    } catch (caught) {
      setError(caught?.message ?? t("ui.telegram.couldNotSaveTelegramAccessSettings"));
    }
  };
  const privateAllowlist = accessMode === "private-allowlist";
  const savedPrivateAllowlist = policy.accessMode === "private-allowlist";
  const emptyAllowlist = privateAllowlist && allowedUsers.trim() === "";
  return h2(
    "form",
    { className: "dtg-access", onSubmit: save },
    h2(
      "div",
      { className: "dtg-accessHeading" },
      h2("strong", null, t("ui.telegram.accessSettings")),
      h2(
        "span",
        { className: "dtg-accessStatus" },
        h2(
          "span",
          { className: "dtg-accessBadge", "data-mode": policy.accessMode },
          savedPrivateAllowlist ? t("ui.telegram.activeSafeMode") : t("ui.telegram.activeCompatibleMode")
        ),
        h2(
          "span",
          { className: "dtg-accessHelp" },
          h2("button", {
            type: "button",
            className: "dtg-accessHelpButton",
            "aria-label": t("ui.telegram.viewTelegramAccessModeDetails"),
            "aria-describedby": accessHelpId
          }, h2("span", { "aria-hidden": "true" }, "?")),
          h2(
            "span",
            {
              id: accessHelpId,
              className: "dtg-accessTooltip",
              role: "tooltip"
            },
            h2(
              "span",
              { className: "dtg-accessTooltipItem" },
              h2("strong", null, t("ui.telegram.compatibleMode")),
              h2("span", null, t("ui.telegram.keepTheOriginalBehaviorRespondTo"))
            ),
            h2(
              "span",
              { className: "dtg-accessTooltipItem" },
              h2("strong", null, t("ui.telegram.safeMode")),
              h2("span", null, t("ui.telegram.allGroupMessagesAreIgnoredOnly"))
            )
          )
        )
      )
    ),
    h2(
      "label",
      { className: "dtg-accessField" },
      h2("span", null, t("ui.telegram.mode")),
      h2(
        "select",
        {
          value: accessMode,
          disabled: busy,
          "aria-label": t("ui.telegram.telegramAccessMode"),
          onChange: (event) => {
            setAccessMode(event.target.value);
            setError(null);
          }
        },
        h2("option", { value: "compatible" }, t("ui.telegram.compatibleModeDefault")),
        h2("option", { value: "private-allowlist" }, t("ui.telegram.safeModePrivateChatAllowlist"))
      )
    ),
    h2(
      "label",
      { className: "dtg-accessField" },
      h2("span", null, t("ui.telegram.telegramUserIdsAllowedToSend")),
      h2("textarea", {
        value: allowedUsers,
        disabled: busy || !privateAllowlist,
        rows: 3,
        placeholder: t("ui.telegram.oneNumericUserIdPerLine"),
        "aria-label": t("ui.telegram.telegramUserIdsAllowedToSend"),
        onChange: (event) => {
          setAllowedUsers(event.target.value);
          setError(null);
        }
      }),
      h2("small", null, privateAllowlist ? t("ui.telegram.thisAllowlistBelongsOnlyToThe") : t("ui.telegram.compatibleModeDoesNotEnforceThe"))
    ),
    emptyAllowlist ? h2(
      "p",
      { className: "dtg-accessWarning", role: "status" },
      t("ui.telegram.theAllowlistIsEmptyThisBot")
    ) : null,
    error ? h2("p", { className: "dtg-accessError", role: "alert" }, error) : null,
    h2(
      "div",
      { className: "dtg-accessActions" },
      h2("button", {
        type: "submit",
        className: "ddt-button",
        "data-kind": "secondary",
        disabled: busy
      }, busy ? t("ui.telegram.saving") : t("ui.telegram.saveAccessSettings"))
    )
  );
}
var channel3 = createTokenChannelSettings({
  channel: "Telegram",
  endpoints: TELEGRAM_ENDPOINTS,
  api: api3,
  LogoGlyph: TelegramLogoGlyph,
  installStyles: installTelegramStyles,
  pageClass: "dtg-page",
  avatarClass: "dtg-avatar",
  connectionLabel: t("ui.telegram.botApiLongPolling2"),
  tokenPlaceholder: t("ui.telegram.enterTheBotTokenFromBotfather"),
  emptyTitle: t("ui.telegram.connectATelegramBot"),
  emptyDescription: t("ui.telegram.getABotTokenFromBotfather"),
  platformLabel: "Telegram",
  AccountSettings: TelegramAccessSettings,
  accountSettingsEndpoint: TELEGRAM_ENDPOINTS.setAccessPolicy
});
var TelegramSettingsTab = channel3.SettingsTab;
var TelegramAccountCard = channel3.AccountCard;

// plugin-src/client/channels/wecom/api.js
var CHANNEL_LABEL7 = "WeCom";
var WECOM_RPC_CHANNEL = "/wecom";
var WECOM_ENDPOINTS = Object.freeze({
  status: "connection.status",
  beginProvisioning: "provision.begin",
  pollProvisioning: "provision.poll",
  cancelProvisioning: "provision.cancel",
  bindCredentials: "bot.bind-credentials",
  reconnectBot: "bot.reconnect",
  deleteBot: "bot.delete",
  setWorkspace: "bot.workspace.set",
  setAgentPreset: SET_AGENT_PRESET_ENDPOINT
});
var PROVISION_STATES3 = /* @__PURE__ */ new Set(["starting", "pending", "refreshing", "connecting", "connected", "failed", "cancelled"]);
var ACCOUNT_STATES4 = /* @__PURE__ */ new Set(["connected", "connecting", "offline", "error"]);
var QR_DATA_URL3 = /^data:image\/(?:png|webp);base64,[a-z\d+/]+={0,2}$/i;
function isRecord5(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function text3(value, fallback, max = 240) {
  return typeof value === "string" && value.trim() ? value.trim().slice(0, max) : fallback;
}
function id3(value) {
  const result = text3(value, "", 128);
  return /^[a-z\d_-]+$/i.test(result) ? result : void 0;
}
function timestamp4(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  const parsed = typeof value === "string" ? Date.parse(value) : Number.NaN;
  return Number.isNaN(parsed) ? void 0 : parsed;
}
function normalizeTestMessage3(value) {
  if (!isRecord5(value)) return null;
  if (value.sent === true) return { sent: true };
  if (value.sent !== false) return null;
  const code = value.code === "test-target-unavailable" ? "test-target-unavailable" : "test-message-failed";
  return { sent: false, code };
}
function unwrapRpcResult7(result) {
  if (!isRecord5(result) || typeof result.ok !== "boolean") throw new Error(t("ui.common.unrecognizedResponse", { channel: CHANNEL_LABEL7 }));
  if (!result.ok) {
    const error = new Error(text3(result.error?.message, t("ui.common.operationFailed", { channel: CHANNEL_LABEL7 })));
    error.code = text3(result.error?.code, "WECOM_RPC_ERROR", 80);
    throw error;
  }
  return result.value;
}
function safeQrSource4(value) {
  return typeof value === "string" && value.length <= 2 * 1024 * 1024 && QR_DATA_URL3.test(value) ? value : void 0;
}
function normalizeProvisioning4(value, now = Date.now()) {
  const source = isRecord5(value?.provisioning) ? value.provisioning : value;
  if (!isRecord5(source)) throw new Error(t("ui.wecom.wecomDidNotReturnQrSetup"));
  const attemptId = id3(source.attemptId);
  if (!attemptId) throw new Error(t("ui.wecom.wecomDidNotReturnAValid"));
  const reported = text3(source.status, "failed", 32);
  const result = {
    attemptId,
    status: PROVISION_STATES3.has(reported) ? reported : "failed",
    expiresAt: timestamp4(source.expiresAt) ?? now + 5 * 6e4,
    pollIntervalMs: Math.min(1e4, Math.max(500, Number(source.pollIntervalMs) || 1e3)),
    qrRevision: Number.isSafeInteger(source.qrRevision) ? source.qrRevision : 0
  };
  const qrCodeDataUrl = safeQrSource4(source.qrCodeDataUrl);
  if (qrCodeDataUrl) result.qrCodeDataUrl = qrCodeDataUrl;
  if (id3(source.botId)) result.botId = id3(source.botId);
  if (isRecord5(source.error)) result.error = {
    code: text3(source.error.code, "WECOM_PROVISION_FAILED", 80),
    message: text3(source.error.message, t("ui.common.notConnected", { channel: CHANNEL_LABEL7 }))
  };
  return result;
}
function normalizeBot4(value) {
  if (!isRecord5(value) || !id3(value.botId)) return void 0;
  const connected = value.connected === true;
  const state = ACCOUNT_STATES4.has(value.state) ? value.state : "offline";
  return {
    botId: id3(value.botId),
    connected,
    state: connected ? "connected" : state,
    workspace: text3(value.workspace, "", 4096),
    agentPreset: normalizeAgentPresetId(value.agentPreset),
    bot: {
      name: text3(value.bot?.name, t("ui.wecom.wecomBot"), 100),
      appIdMasked: text3(value.bot?.appIdMasked, t("ui.feishu.appIdentifierStoredSecurely"), 140)
    },
    health: {
      summary: text3(value.health?.summary, connected ? t("ui.wecom.wecomWebsocketConnectionIsHealthy") : t("ui.common.connectionNotReady", { channel: CHANNEL_LABEL7 })),
      lastCheckedAt: timestamp4(value.health?.lastCheckedAt)
    },
    error: isRecord5(value.error) ? {
      code: text3(value.error.code, "WECOM_ACCOUNT_ERROR", 80),
      message: text3(value.error.message, t("ui.common.connectionNotReady", { channel: CHANNEL_LABEL7 }))
    } : null
  };
}
function normalizeSnapshot6(value) {
  const source = isRecord5(value?.snapshot) ? value.snapshot : value;
  if (!isRecord5(source) || !Array.isArray(source.bots)) throw new Error(t("ui.wecom.wecomDidNotReturnAValid2"));
  const bots = source.bots.map(normalizeBot4).filter(Boolean);
  return {
    revision: Number.isSafeInteger(source.revision) ? source.revision : 0,
    bots,
    totals: { configured: bots.length, connected: bots.filter((bot) => bot.connected).length },
    provisioning: source.provisioning ? normalizeProvisioning4(source.provisioning) : null,
    testMessage: normalizeTestMessage3(source.testMessage),
    agentPresetCatalog: normalizeAgentPresetCatalog(source.agentPresetCatalog)
  };
}
function presentError7(error) {
  return {
    code: text3(error?.code, "WECOM_ERROR", 80),
    message: text3(error?.message, t("ui.common.operationFailedRetry", { channel: CHANNEL_LABEL7 }))
  };
}
function formatRemaining4(milliseconds) {
  const seconds = Math.max(0, Math.ceil(Number(milliseconds) / 1e3) || 0);
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}

// plugin-src/client/channels/wecom/index.js
var React17 = __toESM(require("react"), 1);

// plugin-src/client/channels/wecom/styles.js
var WECOM_STYLE_ID = "dsh-im-x-wecom-settings";
var CSS8 = String.raw`
.dwecom-page { --ddt-accent: #3370ff; --ddt-accent-deep: #245bdb; --ddt-accent-wash: #eef4ff; }
.dwecom-avatar, .dwecom-brand { color: #3370ff; background: #fff; border: 1px solid var(--dsw-alias-border-l2, #e5e6eb); }
.dwecom-avatar svg, .dwecom-brand svg { display: block; }
`;
function installWecomStyles() {
  if (typeof document === "undefined") return () => {
  };
  const existing = document.querySelector(`style[data-plugin-css="${WECOM_STYLE_ID}"]`);
  if (existing) return () => {
  };
  const style = document.createElement("style");
  style.dataset.plugin = "@xmanrui/dsh-im";
  style.dataset.pluginCss = WECOM_STYLE_ID;
  style.textContent = CSS8;
  document.head.appendChild(style);
  return () => style.remove();
}

// plugin-src/client/channels/wecom/index.js
var CHANNEL_LABEL8 = "WeCom";
var ACTIVE_STATES2 = /* @__PURE__ */ new Set(["pending", "refreshing", "connecting"]);
var Button10 = React17.forwardRef(function Button11({ children, kind = "secondary", className = "", ...props }, ref) {
  return h2("button", {
    ...props,
    ref,
    type: "button",
    className: `ddt-button ${className}`.trim(),
    "data-kind": kind
  }, children);
});
function checkedTime4(value) {
  if (!value) return t("ui.dingtalk.notCheckedYet");
  try {
    return new Intl.DateTimeFormat("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date(value));
  } catch {
    return t("ui.dingtalk.justNow");
  }
}
function Heading4({ totals, adding, busy, onAdd, onCredential, credentialOpen, addButtonRef }) {
  return h2(
    "div",
    { className: "ddt-heading" },
    h2(
      "div",
      { className: "ddt-tools" },
      h2(
        "div",
        { className: "dim-bindActions" },
        h2(Button10, {
          kind: "primary",
          className: "dim-scanButton",
          onClick: onAdd,
          disabled: adding || busy,
          ref: addButtonRef,
          "aria-label": t("ui.wecom.connectWecomBotByQrCode")
        }, h2(QrActionIcon), adding ? t("ui.dingtalk.connecting") : t("ui.dingtalk.scanQrCode")),
        h2(Button10, {
          kind: "credential",
          className: "dim-credentialButton",
          onClick: onCredential,
          disabled: adding || busy,
          "aria-pressed": credentialOpen,
          "aria-label": t("ui.wecom.connectAWecomBotWithBot")
        }, h2(CredentialActionIcon), credentialOpen ? t("ui.dingtalk.hideCredentials") : t("ui.dingtalk.manualSetup"))
      ),
      totals.configured > 0 ? h2(
        "div",
        { className: "ddt-badge dim-onlineBadge" },
        h2("span", null, t("ui.common.onlineCount", { connected: totals.connected, configured: totals.configured }))
      ) : null
    )
  );
}
function LoadingView4() {
  return h2(
    "div",
    { className: "ddt-card ddt-loading dim-surfaceCard dim-loadingView", "aria-busy": "true" },
    h2("div", { className: "ddt-spinner dim-spinner" }),
    h2("span", null, t("ui.common.loadingStatus", { channel: CHANNEL_LABEL8 }))
  );
}
function EmptyView4({ busy, onStart }) {
  return h2(
    "div",
    { className: "ddt-card dim-surfaceCard" },
    h2(
      "div",
      { className: "ddt-cardBody ddt-empty dim-surfaceBody dim-emptyView" },
      h2(
        "div",
        { className: "dim-emptyCopy" },
        h2(
          "div",
          { className: "ddt-stateLabel dim-stateLabel" },
          h2("span", { className: "ddt-dot dim-stateDot" }),
          h2("span", null, t("ui.wecom.noWecomBotConnectedYet"))
        ),
        h2("h3", null, t("ui.wecom.scanWithWecomToCreateAn")),
        h2("p", null, t("ui.wecom.scanningIsCompletedOnTencentS")),
        h2(
          "div",
          { className: "ddt-actions dim-viewActions" },
          h2(
            Button10,
            { kind: "primary", onClick: onStart, disabled: busy },
            busy ? t("ui.dingtalk.generatingQrCode") : t("ui.wecom.generateWecomQrCode")
          )
        )
      ),
      h2(
        "div",
        { className: "ddt-brandMark dim-emptyBrand dwecom-brand", "aria-hidden": "true" },
        h2(WecomLogoGlyph, { size: 64 })
      )
    )
  );
}
function QrPanel3({ provision, now, busy, onRefresh, onCancel }) {
  const source = safeQrSource4(provision.qrCodeDataUrl);
  const remaining = Math.max(0, provision.expiresAt - now);
  const duration = Math.max(1, provision.durationMs ?? 5 * 6e4);
  const progress = Math.round(Math.min(1, remaining / duration) * 100);
  const refreshing = provision.status === "refreshing";
  return h2(
    "div",
    { className: "ddt-card dim-surfaceCard" },
    h2(
      "div",
      { className: "ddt-cardBody ddt-qrLayout dim-surfaceBody dim-qrLayout" },
      h2(
        "div",
        { className: "ddt-qrColumn dim-qrColumn" },
        h2(
          "div",
          { className: "ddt-qrFrame dim-qrFrame" },
          source ? h2("img", { src: source, alt: t("ui.wecom.oneTimeQrCodeForConnecting") }) : h2(
            "div",
            { className: "ddt-qrFallback dim-qrFallback" },
            refreshing ? t("ui.qq.refreshingQrCode") : t("ui.qq.generatingQrCode")
          )
        ),
        h2(
          "div",
          { className: "ddt-countdown dim-countdown" },
          h2(
            "div",
            { className: "ddt-countdownTop dim-countdownTop" },
            h2("span", null, t("ui.qq.qrCodeExpiresIn")),
            h2("strong", null, refreshing ? "--:--" : formatRemaining4(remaining))
          ),
          h2("div", { className: "ddt-progress dim-progress", style: { "--ddt-progress": `${progress}%` } }, h2("span"))
        )
      ),
      h2(
        "div",
        { className: "ddt-qrCopy dim-qrCopy" },
        h2(
          "div",
          { className: "ddt-stateLabel dim-stateLabel" },
          h2("span", { className: "ddt-dot dim-stateDot", "data-tone": "warning" }),
          h2("span", null, refreshing ? t("ui.qq.refreshingQrCode2") : t("ui.wecom.waitingForWecomScan"))
        ),
        h2("h3", null, t("ui.wecom.authorizeTheAiBotWithWecom")),
        h2("p", null, t("ui.wecom.wecomWillCreateAnAiBot")),
        h2(
          "ol",
          { className: "ddt-steps dim-steps" },
          h2("li", null, t("ui.wecom.openWecomAndScanTheQr")),
          h2("li", null, t("ui.wecom.confirmBotCreationOnTheTencent")),
          h2("li", null, t("ui.qq.returnHereAndWaitForThe"))
        ),
        h2(
          "div",
          { className: "ddt-actions dim-viewActions" },
          h2(Button10, { onClick: onRefresh, disabled: busy }, t("ui.dingtalk.generateANewQrCode2")),
          h2(Button10, { kind: "quiet", onClick: onCancel, disabled: busy }, t("ui.dingtalk.cancel"))
        )
      )
    )
  );
}
function ProvisionView2({ provision, busy, onRetry, onClose }) {
  if (provision.status === "connecting") {
    return h2(
      "div",
      { className: "ddt-card ddt-loading dim-surfaceCard dim-specialView", "aria-busy": "true" },
      h2("div", { className: "ddt-spinner dim-spinner" }),
      h2("h3", null, t("ui.wecom.authorizedInWecomConnectingTheBot")),
      h2("p", null, t("ui.wecom.savingCredentialsLocallyAndStartingThe"))
    );
  }
  const error = provision.error ?? { code: "WECOM_PROVISION_FAILED", message: t("ui.common.notBound", { channel: CHANNEL_LABEL8 }) };
  return h2(
    "div",
    { className: "ddt-card dim-surfaceCard" },
    h2(
      "div",
      { className: "ddt-inlineError dim-inlineError", role: "alert" },
      h2("h3", null, t("ui.common.notBound", { channel: CHANNEL_LABEL8 })),
      h2("p", null, error.message),
      h2("span", { className: "ddt-errorCode" }, error.code),
      h2(
        "div",
        { className: "ddt-actions dim-viewActions" },
        h2(Button10, { kind: "primary", onClick: onRetry, disabled: busy }, t("ui.dingtalk.generateANewQrCode2")),
        h2(Button10, { onClick: onClose, disabled: busy }, t("ui.dingtalk.close"))
      )
    )
  );
}
function RemoveConfirmation4({ account, busy, onConfirm, onCancel }) {
  return h2(
    "div",
    { className: "ddt-confirm dim-confirm", role: "alertdialog" },
    h2("strong", null, t("ui.common.removeConfirm", { name: account.bot.name })),
    h2("p", null, t("ui.wecom.thisStopsTheMessageConnectionAnd")),
    h2(
      "div",
      { className: "ddt-actions dim-viewActions" },
      h2(Button10, { onClick: onCancel, disabled: busy }, t("ui.dingtalk.keepBot")),
      h2(Button10, { kind: "danger", onClick: onConfirm, disabled: busy }, busy ? t("ui.dingtalk.removing") : t("ui.dingtalk.removeConnection"))
    )
  );
}
function AccountCard3({
  account,
  busy,
  feedback,
  removing,
  onReconnect,
  onWorkspaceSave,
  onAgentPresetSave,
  onRequestRemove,
  onConfirmRemove,
  onCancelRemove
}) {
  const tone = account.connected ? "success" : account.state === "error" ? "error" : "warning";
  const stateLabel2 = account.connected ? t("ui.dingtalk.connected") : account.state === "connecting" ? t("ui.dingtalk.connecting2") : t("ui.dingtalk.notConnected");
  const summary = account.error?.message ?? (account.connected ? null : account.health.summary);
  return h2(
    "article",
    { className: "ddt-card dim-botCard", "data-bot-id": account.botId },
    h2(
      "div",
      { className: "ddt-cardBody dim-botCardBody" },
      h2(
        "div",
        { className: "ddt-accountTop dim-botCardTop" },
        h2(
          "div",
          { className: "ddt-accountIdentity dim-botIdentity" },
          h2("div", { className: "ddt-avatar dim-botAvatar dwecom-avatar", "aria-hidden": "true" }, h2(WecomLogoGlyph, { size: 29 })),
          h2(
            "div",
            { className: "dim-botName" },
            h2("h3", null, account.bot.name),
            h2("p", null, account.bot.appIdMasked)
          )
        ),
        h2(BotStatusMeta, {
          className: "ddt-health",
          dotClassName: "ddt-dot",
          tone,
          stateLabel: stateLabel2,
          lastCheckedAt: account.health.lastCheckedAt,
          formatCheckedTime: checkedTime4
        })
      ),
      h2(WorkspaceEditor, {
        workspace: account.workspace,
        disabled: Boolean(busy),
        onSave: onWorkspaceSave
      }),
      h2(AgentPresetEditor, {
        agentPreset: account.agentPreset,
        disabled: Boolean(busy),
        onSave: onAgentPresetSave
      }),
      h2(
        "div",
        { className: "ddt-accountFooter dim-cardFooter" },
        h2(
          "div",
          { className: "dim-cardFooterLayout" },
          h2(
            "div",
            { className: "ddt-actions dim-cardActions" },
            h2(Button10, { className: "dim-cardAction", onClick: onReconnect, disabled: Boolean(busy) }, busy === "reconnect" ? t("ui.dingtalk.checking") : account.connected ? t("ui.dingtalk.checkConnection") : t("ui.dingtalk.reconnect")),
            h2(Button10, { className: "dim-cardAction", kind: "danger", onClick: onRequestRemove, disabled: Boolean(busy) }, t("ui.dingtalk.removeConnection2"))
          ),
          summary ? h2("div", { className: "ddt-summary dim-cardSummary" }, summary) : null,
          feedback ? h2("div", {
            className: "ddt-summary dim-cardFeedback",
            role: "status",
            "aria-live": "polite"
          }, feedback) : null
        )
      )
    ),
    removing ? h2(RemoveConfirmation4, {
      account,
      busy: busy === "delete",
      onConfirm: onConfirmRemove,
      onCancel: onCancelRemove
    }) : null
  );
}
function WecomSettingsTab({ rpcCall }) {
  const [model, setModel] = React17.useState({
    phase: "loading",
    bots: [],
    totals: { configured: 0, connected: 0 },
    error: null,
    agentPresetCatalog: EMPTY_AGENT_PRESET_CATALOG
  });
  const [provision, setProvision] = React17.useState(null);
  const [busy, setBusy] = React17.useState(false);
  const [busyByBot, setBusyByBot] = React17.useState({});
  const [feedbackByBot, setFeedbackByBot] = React17.useState({});
  const [removeTarget, setRemoveTarget] = React17.useState(null);
  const [credentialOpen, setCredentialOpen] = React17.useState(false);
  const [credentialError, setCredentialError] = React17.useState(null);
  const [notice, setNotice] = React17.useState("");
  const [now, setNow] = React17.useState(Date.now());
  const mounted = React17.useRef(true);
  const workspaceFence = useWorkspaceSnapshotFence();
  const addButtonRef = React17.useRef(null);
  const noticeFrameRef = React17.useRef(null);
  const announce = React17.useCallback((message) => {
    if (!mounted.current) return;
    if (noticeFrameRef.current !== null) {
      window.cancelAnimationFrame(noticeFrameRef.current);
      noticeFrameRef.current = null;
    }
    setNotice("");
    if (message) {
      noticeFrameRef.current = window.requestAnimationFrame(() => {
        noticeFrameRef.current = null;
        if (mounted.current) setNotice(message);
      });
    }
  }, []);
  React17.useEffect(() => {
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
  const invoke = React17.useCallback(async (endpoint, payload = {}, signal) => {
    if (typeof rpcCall !== "function") throw new TypeError(t("ui.common.missingRpc", { channel: CHANNEL_LABEL8 }));
    return unwrapRpcResult7(await rpcCall(endpoint, payload, signal));
  }, [rpcCall]);
  const loadStatus = React17.useCallback(async ({ signal, silent = false, restore = false } = {}) => {
    const workspaceVersion = workspaceFence.beginStatus();
    if (workspaceVersion === null) return void 0;
    if (!silent && mounted.current) setModel((current2) => ({ ...current2, phase: "loading", error: null }));
    try {
      const snapshot = normalizeSnapshot6(await invoke(WECOM_ENDPOINTS.status, {}, signal));
      if (!mounted.current || signal?.aborted || !workspaceFence.canCommitStatus(workspaceVersion)) return void 0;
      setModel({
        phase: "ready",
        bots: snapshot.bots,
        totals: snapshot.totals,
        error: null,
        agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
      });
      if (restore && snapshot.provisioning) setProvision({
        ...snapshot.provisioning,
        durationMs: Math.max(1, snapshot.provisioning.expiresAt - Date.now())
      });
      return snapshot;
    } catch (error) {
      if (error?.name !== "AbortError" && mounted.current && !signal?.aborted && workspaceFence.canCommitStatus(workspaceVersion)) {
        setModel((current2) => ({ ...current2, phase: silent ? current2.phase : "error", error: presentError7(error) }));
      }
      return void 0;
    }
  }, [invoke, workspaceFence]);
  React17.useEffect(() => {
    const controller = new AbortController();
    void loadStatus({ signal: controller.signal, restore: true });
    return () => controller.abort();
  }, [loadStatus]);
  React17.useEffect(() => {
    if (model.phase !== "ready") return void 0;
    const controller = new AbortController();
    const timer = window.setInterval(() => void loadStatus({ signal: controller.signal, silent: true }), 15e3);
    return () => {
      controller.abort();
      window.clearInterval(timer);
    };
  }, [loadStatus, model.phase]);
  React17.useEffect(() => {
    if (!provision || !ACTIVE_STATES2.has(provision.status)) return void 0;
    const timer = window.setInterval(() => mounted.current && setNow(Date.now()), 1e3);
    return () => window.clearInterval(timer);
  }, [provision?.attemptId, provision?.status]);
  const startProvisioning = React17.useCallback(async (replace = false) => {
    setCredentialOpen(false);
    setCredentialError(null);
    setBusy(true);
    try {
      if (replace && provision?.attemptId) await invoke(WECOM_ENDPOINTS.cancelProvisioning, { attemptId: provision.attemptId });
      if (!mounted.current) return;
      setProvision({ status: "starting" });
      const started = normalizeProvisioning4(await invoke(WECOM_ENDPOINTS.beginProvisioning, { locale: "zh-CN" }));
      if (!mounted.current) return;
      setNow(Date.now());
      setProvision({ ...started, durationMs: Math.max(1, started.expiresAt - Date.now()) });
    } catch (error) {
      if (mounted.current) setProvision({ status: "failed", error: presentError7(error) });
    } finally {
      if (mounted.current) setBusy(false);
    }
  }, [invoke, provision?.attemptId]);
  const bindCredentials = React17.useCallback(async ({ identity, secret }) => {
    const snapshotVersion = workspaceFence.beginMutation();
    setBusy(true);
    setCredentialError(null);
    try {
      const snapshot = normalizeSnapshot6(await invoke(
        WECOM_ENDPOINTS.bindCredentials,
        { botId: identity, secret }
      ));
      if (!mounted.current) return;
      if (workspaceFence.canCommitMutation(snapshotVersion)) {
        setModel({
          phase: "ready",
          bots: snapshot.bots,
          totals: snapshot.totals,
          error: null,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
        });
      }
      setCredentialOpen(false);
    } catch (error) {
      if (mounted.current) setCredentialError(presentError7(error));
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mounted.current) void loadStatus({ silent: true });
      if (mounted.current) setBusy(false);
    }
  }, [invoke, loadStatus, workspaceFence]);
  const closeProvision = React17.useCallback(async () => {
    setBusy(true);
    try {
      if (provision?.attemptId && ACTIVE_STATES2.has(provision.status)) {
        await invoke(WECOM_ENDPOINTS.cancelProvisioning, { attemptId: provision.attemptId });
      }
      if (mounted.current) setProvision(null);
    } finally {
      if (mounted.current) setBusy(false);
    }
  }, [invoke, provision?.attemptId, provision?.status]);
  React17.useEffect(() => {
    const attemptId = provision?.attemptId;
    if (!attemptId || !ACTIVE_STATES2.has(provision.status)) return void 0;
    const controller = new AbortController();
    let disposed = false;
    let timer;
    const poll = async () => {
      try {
        const current2 = normalizeProvisioning4(await invoke(WECOM_ENDPOINTS.pollProvisioning, { attemptId }, controller.signal));
        if (disposed || controller.signal.aborted || !mounted.current) return;
        if (current2.status === "connected") {
          setProvision(null);
          await loadStatus({ signal: controller.signal, silent: true });
          return;
        }
        setProvision((previous) => previous?.attemptId === attemptId ? { ...previous, ...current2, durationMs: current2.qrRevision !== previous.qrRevision ? Math.max(1, current2.expiresAt - Date.now()) : previous.durationMs } : previous);
        if (ACTIVE_STATES2.has(current2.status)) timer = window.setTimeout(poll, current2.pollIntervalMs);
      } catch (error) {
        if (!disposed && !controller.signal.aborted && mounted.current) {
          setProvision((current2) => ({ ...current2, status: "failed", error: presentError7(error) }));
        }
      }
    };
    timer = window.setTimeout(poll, provision.pollIntervalMs ?? 1e3);
    return () => {
      disposed = true;
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [invoke, loadStatus, provision?.attemptId, provision?.pollIntervalMs, provision?.status]);
  const botAction = React17.useCallback(async (account, operation, endpoint, payload) => {
    const snapshotVersion = workspaceFence.beginMutation();
    setBusyByBot((current2) => ({ ...current2, [account.botId]: operation }));
    try {
      const snapshot = normalizeSnapshot6(await invoke(endpoint, payload));
      if (mounted.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        setModel({
          phase: "ready",
          bots: snapshot.bots,
          totals: snapshot.totals,
          error: null,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
        });
      }
      return snapshot;
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mounted.current) void loadStatus({ silent: true });
      if (mounted.current) setBusyByBot((current2) => {
        const next = { ...current2 };
        delete next[account.botId];
        return next;
      });
    }
  }, [invoke, loadStatus, workspaceFence]);
  const reconnect = React17.useCallback(async (account) => {
    setFeedbackByBot((current2) => {
      const next = { ...current2 };
      delete next[account.botId];
      return next;
    });
    try {
      const snapshot = await botAction(
        account,
        "reconnect",
        WECOM_ENDPOINTS.reconnectBot,
        { botId: account.botId, sendTest: true }
      );
      if (!snapshot) return;
      const refreshed = snapshot.bots.find((bot) => bot.botId === account.botId);
      let feedback;
      if (!refreshed?.connected) {
        feedback = t("ui.common.stillOffline", { channel: CHANNEL_LABEL8 });
      } else if (snapshot.testMessage?.sent) {
        feedback = t("ui.wecom.wecomConnectionCheckCompletedAndThe");
      } else if (snapshot.testMessage?.code === "test-target-unavailable") {
        feedback = t("ui.dingtalk.connectionCheckCompletedTheBotHas");
      } else if (snapshot.testMessage) {
        feedback = t("ui.wecom.wecomConnectionCheckCompletedButThe");
      } else {
        feedback = t("ui.common.connectionCheckDone", { channel: CHANNEL_LABEL8 });
      }
      if (mounted.current) {
        setFeedbackByBot((current2) => ({ ...current2, [account.botId]: feedback }));
      }
      announce(feedback);
    } catch {
      const feedback = t("ui.dingtalk.connectionCheckFailedTryAgainLater");
      if (mounted.current) {
        setFeedbackByBot((current2) => ({ ...current2, [account.botId]: feedback }));
      }
      announce(feedback);
    }
  }, [announce, botAction]);
  let provisionView = null;
  if (provision?.status === "starting") provisionView = h2("div", { className: "ddt-card ddt-loading dim-surfaceCard" }, h2("div", { className: "ddt-spinner" }), t("ui.wecom.requestingWecomQrCode"));
  else if (["pending", "refreshing"].includes(provision?.status)) provisionView = h2(QrPanel3, {
    provision,
    now,
    busy,
    onRefresh: () => void startProvisioning(true),
    onCancel: () => void closeProvision()
  });
  else if (provision) provisionView = h2(ProvisionView2, {
    provision,
    busy,
    onRetry: () => void startProvisioning(true),
    onClose: () => void closeProvision()
  });
  const botList = model.bots.length > 0 ? h2(
    "section",
    { className: "dim-listSection" },
    h2(ChannelListHeading, {
      className: "ddt-listHeading",
      title: t("ui.wecom.connectedWecomBots"),
      connectionLabel: t("ui.qq.websocketPersistentConnection")
    }),
    h2("ul", { className: "ddt-list dim-botList" }, model.bots.map((account) => h2("li", { key: account.botId }, h2(AccountCard3, {
      account,
      busy: busyByBot[account.botId],
      feedback: feedbackByBot[account.botId],
      removing: removeTarget === account.botId,
      onReconnect: () => void reconnect(account),
      onWorkspaceSave: (workspace) => botAction(
        account,
        "workspace",
        WECOM_ENDPOINTS.setWorkspace,
        { botId: account.botId, workspace }
      ),
      onAgentPresetSave: (agentPreset) => botAction(
        account,
        "preset",
        WECOM_ENDPOINTS.setAgentPreset,
        { botId: account.botId, agentPreset }
      ),
      onRequestRemove: () => setRemoveTarget(account.botId),
      onCancelRemove: () => setRemoveTarget(null),
      onConfirmRemove: async () => {
        await botAction(account, "delete", WECOM_ENDPOINTS.deleteBot, { botId: account.botId, confirm: true });
        if (mounted.current) setRemoveTarget(null);
      }
    }))))
  ) : null;
  const credentialView = credentialOpen ? h2(CredentialBindingPanel, {
    channel: t("ui.wecom.wecom"),
    identityLabel: "Bot ID",
    identityPlaceholder: t("ui.wecom.enterTheWecomAiBotId"),
    secretLabel: "Secret",
    secretPlaceholder: t("ui.wecom.enterTheWecomAiBotSecret"),
    busy,
    error: credentialError,
    onSubmit: bindCredentials,
    onCancel: () => {
      setCredentialOpen(false);
      setCredentialError(null);
    }
  }) : null;
  return h2(AgentPresetCatalogContext.Provider, {
    value: model.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
  }, h2(
    "section",
    { className: "ddt-page dwecom-page dim-channelPage", "aria-label": t("ui.wecom.wecomSettings") },
    h2(Heading4, {
      totals: model.totals,
      adding: Boolean(provision),
      busy,
      onAdd: () => void startProvisioning(),
      onCredential: () => {
        setCredentialOpen((value) => !value);
        setCredentialError(null);
      },
      credentialOpen,
      addButtonRef
    }),
    h2("div", { className: "ddt-visuallyHidden", role: "status", "aria-live": "polite" }, notice),
    model.phase === "loading" ? h2(LoadingView4) : model.phase === "error" ? h2("div", { className: "ddt-card dim-surfaceCard" }, h2("div", { className: "ddt-inlineError dim-inlineError" }, h2("h3", null, t("ui.common.cannotReadStatus", { channel: CHANNEL_LABEL8 })), h2("p", null, model.error?.message), h2(Button10, { onClick: () => void loadStatus() }, t("ui.dingtalk.reload")))) : h2(
      React17.Fragment,
      null,
      credentialView,
      provisionView,
      model.bots.length === 0 && !provision && !credentialOpen ? h2(EmptyView4, { busy, onStart: () => void startProvisioning() }) : null,
      botList
    )
  ));
}

// plugin-src/client/channels/weixin/index.js
var React18 = __toESM(require("react"), 1);

// plugin-src/client/channels/weixin/api.js
var CHANNEL_LABEL9 = "WeChat";
var WEIXIN_RPC_CHANNEL = "/weixin";
var WEIXIN_ENDPOINTS = Object.freeze({
  status: "connection.status",
  beginProvisioning: "provision.begin",
  pollProvisioning: "provision.poll",
  submitVerification: "provision.verify",
  cancelProvisioning: "provision.cancel",
  reconnectBot: "bot.reconnect",
  deleteBot: "bot.delete",
  setWorkspace: "bot.workspace.set",
  setAgentPreset: SET_AGENT_PRESET_ENDPOINT
});
var ACCOUNT_STATES5 = /* @__PURE__ */ new Set(["connected", "connecting", "offline", "error"]);
var PROVISION_STATES4 = /* @__PURE__ */ new Set([
  "starting",
  "pending",
  "scanned",
  "needs_verification",
  "connecting",
  "connected",
  "expired",
  "failed",
  "cancelled"
]);
function isRecord6(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function string(value, fallback = "") {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}
function timestamp5(value) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}
function normalizeTestMessage4(value) {
  if (!isRecord6(value)) return null;
  if (value.sent === true) return { sent: true };
  if (value.sent !== false) return null;
  const code = value.code === "test-target-unavailable" ? "test-target-unavailable" : "test-message-failed";
  return { sent: false, code };
}
function normalizeMessageError(value) {
  if (!isRecord6(value)) return null;
  const code = string(value.code).slice(0, 64);
  const reason = string(value.reason).slice(0, 128);
  const message = string(value.message).slice(0, 500);
  const at = timestamp5(value.at);
  return code && reason && message && at !== null ? { code, reason, message, at } : null;
}
function unwrapRpcResult8(result) {
  if (!isRecord6(result) || typeof result.ok !== "boolean") {
    throw new Error(t("ui.common.unrecognizedResponse", { channel: CHANNEL_LABEL9 }));
  }
  if (!result.ok) {
    const error = new Error(string(result.error?.message, t("ui.common.operationFailed", { channel: CHANNEL_LABEL9 })));
    error.code = string(result.error?.code, "WEIXIN_RPC_ERROR");
    throw error;
  }
  return result.value;
}
function safeQrSource5(value) {
  return typeof value === "string" && /^data:image\/(?:png|webp|svg\+xml)(?:;charset=[^;,]+)?;base64,/i.test(value) ? value : void 0;
}
function safeVerificationUrl(value) {
  if (typeof value !== "string") return void 0;
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase();
    return url.protocol === "https:" && (host === "weixin.qq.com" || host.endsWith(".weixin.qq.com")) ? url.toString() : void 0;
  } catch {
    return void 0;
  }
}
function normalizeProvisioning5(value) {
  if (!isRecord6(value) || !string(value.attemptId)) {
    throw new Error(t("ui.weixin.wechatDidNotReturnAValid"));
  }
  const status = PROVISION_STATES4.has(value.status) ? value.status : "failed";
  const result = {
    attemptId: string(value.attemptId),
    status,
    expiresAt: timestamp5(value.expiresAt) ?? Date.now(),
    pollIntervalMs: Math.min(5e3, Math.max(500, Number(value.pollIntervalMs) || 1e3)),
    verificationRequired: value.verificationRequired === true || status === "needs_verification"
  };
  const verificationUrl = safeVerificationUrl(value.verificationUrl);
  const qrCodeDataUrl = safeQrSource5(value.qrCodeDataUrl);
  if (verificationUrl) result.verificationUrl = verificationUrl;
  if (qrCodeDataUrl) result.qrCodeDataUrl = qrCodeDataUrl;
  if (string(value.botId)) result.botId = string(value.botId);
  if (value.alreadyConnected === true) result.alreadyConnected = true;
  if (isRecord6(value.error)) {
    result.error = {
      code: string(value.error.code, "WEIXIN_PROVISION_FAILED"),
      message: string(value.error.message, t("ui.weixin.wechatSetupDidNotComplete"))
    };
  }
  return result;
}
function normalizeBot5(value) {
  if (!isRecord6(value) || !string(value.botId) || !isRecord6(value.bot)) return null;
  const state = ACCOUNT_STATES5.has(value.state) ? value.state : "error";
  const connected = value.connected === true;
  return {
    botId: string(value.botId),
    state: connected ? "connected" : state,
    connected,
    configured: value.configured === true,
    workspace: string(value.workspace).slice(0, 4096),
    agentPreset: normalizeAgentPresetId(value.agentPreset),
    bot: {
      name: string(value.bot.name, t("ui.weixin.wechatBot")),
      accountIdMasked: string(value.bot.accountIdMasked, t("ui.dingtalk.storedSecurely"))
    },
    health: {
      status: string(value.health?.status, connected ? "healthy" : "offline"),
      summary: string(value.health?.summary, connected ? t("ui.weixin.wechatConnectionIsHealthy") : t("ui.weixin.wechatConnectionIsNotReady")),
      lastCheckedAt: timestamp5(value.health?.lastCheckedAt)
    },
    stats: {
      messagesReceived: Math.max(0, Number(value.stats?.messagesReceived) || 0),
      messagesReplied: Math.max(0, Number(value.stats?.messagesReplied) || 0)
    },
    lastMessageError: normalizeMessageError(value.lastMessageError),
    error: isRecord6(value.error) ? {
      code: string(value.error.code, "WEIXIN_ACCOUNT_ERROR"),
      message: string(value.error.message, t("ui.weixin.wechatConnectionIsNotReady"))
    } : null
  };
}
function normalizeSnapshot7(value) {
  if (!isRecord6(value) || !Array.isArray(value.bots)) {
    throw new Error(t("ui.weixin.wechatDidNotReturnAValid2"));
  }
  const bots = value.bots.map(normalizeBot5).filter(Boolean);
  return {
    schemaVersion: Number(value.schemaVersion) || 1,
    revision: Number(value.revision) || 0,
    state: string(value.state, "offline"),
    bots,
    totals: {
      configured: bots.length,
      connected: bots.filter((bot) => bot.connected).length
    },
    provisioning: value.provisioning ? normalizeProvisioning5(value.provisioning) : null,
    testMessage: normalizeTestMessage4(value.testMessage),
    agentPresetCatalog: normalizeAgentPresetCatalog(value.agentPresetCatalog)
  };
}
function presentError8(error) {
  return {
    code: string(error?.code, "WEIXIN_ERROR"),
    message: string(error?.message, t("ui.common.operationFailedRetry", { channel: CHANNEL_LABEL9 }))
  };
}
function formatRemaining5(milliseconds) {
  const seconds = Math.max(0, Math.ceil(milliseconds / 1e3));
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

// plugin-src/client/channels/weixin/styles.js
var WEIXIN_STYLE_ID = "dsh-im-x-weixin-settings";
var CSS9 = String.raw`
.dxw-page {
  --dxw-accent: #07c160;
  --dxw-accent-dark: #05994c;
  --dxw-success: var(--dsw-alias-state-success-primary, #20a162);
  --dxw-warning: var(--dsw-alias-state-warn-primary, #d97706);
  --dxw-error: var(--dsw-alias-state-error-primary, #d54941);
  width: 100%;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 2px 0 28px;
  color: var(--dsw-alias-label-primary, #1f2329);
  box-sizing: border-box;
}
.dxw-page *, .dxw-page *::before, .dxw-page *::after { box-sizing: border-box; }
.dxw-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; }
.dxw-heading h2, .dxw-heading p, .dxw-card h3, .dxw-card p { margin: 0; }
.dxw-eyebrow { color: var(--dsw-alias-label-tertiary, #8f959e); font-size: 12px; font-weight: 650; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 3px; }
.dxw-heading h2 { font-size: 20px; line-height: 28px; font-weight: 680; }
.dxw-heading p { color: var(--dsw-alias-label-secondary, #646a73); font-size: 13px; line-height: 20px; margin-top: 5px; white-space: nowrap; }
.dxw-tools, .dxw-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 10px; }
.dxw-tools { width: 100%; justify-content: space-between; flex-wrap: nowrap; }
.dxw-badge { display: inline-flex; align-items: center; gap: 7px; min-height: 30px; padding: 0 11px; border-radius: 999px; color: var(--dsw-alias-label-secondary, #646a73); background: var(--dsw-alias-bg-module-platform, #f2f3f5); font-size: 12px; white-space: nowrap; }
.dxw-dot { width: 8px; height: 8px; border-radius: 50%; background: #aeb3bb; flex: none; }
.dxw-dot[data-tone="success"] { background: var(--dxw-success); box-shadow: 0 0 0 3px color-mix(in srgb, var(--dxw-success) 14%, transparent); }
.dxw-dot[data-tone="warning"] { background: var(--dxw-warning); }
.dxw-dot[data-tone="error"] { background: var(--dxw-error); }
.dxw-button { min-height: 34px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 8px; padding: 0 13px; display: inline-flex; align-items: center; justify-content: center; gap: 7px; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-bg-layer-1, #fff); font: inherit; font-size: 13px; font-weight: 560; cursor: pointer; text-decoration: none; transition: border-color .15s ease, background .15s ease, transform .15s ease; }
.dxw-button:hover:not(:disabled) { border-color: #aeb3bb; background: var(--dsw-alias-interactive-bg-hover, #f7f8fa); }
.dxw-button:active:not(:disabled) { transform: translateY(1px); }
.dxw-button:focus-visible, .dxw-input:focus-visible { outline: 2px solid color-mix(in srgb, var(--dxw-accent) 70%, white); outline-offset: 2px; }
.dxw-button:disabled { cursor: not-allowed; opacity: .55; }
.dxw-button[data-kind="primary"] { color: white; border-color: var(--dxw-accent); background: var(--dxw-accent); }
.dxw-button[data-kind="primary"]:hover:not(:disabled) { border-color: var(--dxw-accent-dark); background: var(--dxw-accent-dark); }
.dxw-button[data-kind="danger"] { color: var(--dxw-error); }
.dxw-card { overflow: hidden; border: 1px solid var(--dsw-alias-border-l2, #e5e6eb); border-radius: 14px; background: var(--dsw-alias-bg-layer-1, #fff); box-shadow: 0 1px 2px rgb(31 35 41 / 3%); }
.dxw-cardBody { padding: 24px; }
.dxw-empty { min-height: 230px; display: grid; grid-template-columns: minmax(0, 1fr) 180px; align-items: center; gap: 30px; }
.dxw-empty h3 { font-size: 18px; margin-bottom: 8px; }
.dxw-empty p { max-width: 560px; color: var(--dsw-alias-label-secondary, #646a73); line-height: 1.65; }
.dxw-empty .dxw-actions { margin-top: 20px; }
.dxw-logo { width: 110px; height: 110px; display: grid; place-items: center; justify-self: center; border-radius: 28px; color: white; background: var(--dxw-accent); box-shadow: 0 18px 45px rgb(7 193 96 / 22%); }
.dxw-logo svg { width: 62px; height: 62px; }
.dxw-qrLayout { display: grid; grid-template-columns: 300px minmax(0, 1fr); gap: 34px; align-items: center; }
.dxw-qrColumn { display: flex; flex-direction: column; align-items: center; gap: 12px; }
.dxw-qrFrame { position: relative; width: 270px; aspect-ratio: 1; display: grid; place-items: center; overflow: hidden; padding: 10px; border: 1px solid var(--dsw-alias-border-l2, #e5e6eb); border-radius: 16px; background: white; }
.dxw-qrFrame img { display: block; width: 100%; height: 100%; object-fit: contain; }
.dxw-qrFallback { padding: 24px; text-align: center; color: #646a73; }
.dxw-expired { position: absolute; inset: 0; display: grid; place-items: center; padding: 30px; color: white; text-align: center; font-weight: 650; background: rgb(31 35 41 / 76%); backdrop-filter: blur(3px); }
.dxw-countdown { width: 270px; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; }
.dxw-countdown div { display: flex; justify-content: space-between; margin-bottom: 6px; }
.dxw-progress { height: 4px; overflow: hidden; border-radius: 99px; background: #eef0f3; }
.dxw-progress span { display: block; width: var(--dxw-progress); height: 100%; background: var(--dxw-accent); transition: width .2s linear; }
.dxw-qrCopy h3 { margin: 9px 0 8px; font-size: 18px; }
.dxw-qrCopy > p { color: var(--dsw-alias-label-secondary, #646a73); line-height: 1.65; }
.dxw-steps { margin: 18px 0 22px; padding-left: 22px; color: var(--dsw-alias-label-secondary, #646a73); font-size: 13px; line-height: 1.9; }
.dxw-stateLabel { display: inline-flex; align-items: center; gap: 8px; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; font-weight: 600; }
.dxw-verify { max-width: 560px; margin: 0 auto; padding: 32px; text-align: center; }
.dxw-verify h3 { margin: 8px 0; font-size: 19px; }
.dxw-verify p { color: var(--dsw-alias-label-secondary, #646a73); line-height: 1.6; }
.dxw-codeRow { display: flex; justify-content: center; gap: 10px; margin: 24px 0 10px; }
.dxw-input { width: 190px; height: 42px; padding: 0 14px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 9px; background: var(--dsw-alias-bg-layer-1, white); color: inherit; font: inherit; font-size: 18px; letter-spacing: .16em; text-align: center; }
.dxw-statusNotice, .dxw-error { display: flex; align-items: center; gap: 10px; padding: 13px 15px; border: 1px solid color-mix(in srgb, var(--dxw-error) 28%, transparent); border-radius: 10px; color: var(--dxw-error); background: color-mix(in srgb, var(--dxw-error) 7%, transparent); font-size: 13px; }
.dxw-error { align-items: flex-start; flex-direction: column; padding: 22px; }
.dxw-error h3 { font-size: 17px; }
.dxw-errorCode { font-family: ui-monospace, SFMono-Regular, monospace; font-size: 11px; opacity: .8; }
.dxw-listHeading { display: flex; justify-content: space-between; align-items: center; margin: 2px 0 9px; }
.dxw-listHeading h3 { margin: 0; font-size: 14px; }
.dxw-list { display: grid; gap: 12px; margin: 0; padding: 0; list-style: none; }
.dxw-accountTop { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; }
.dxw-accountIdentity { display: flex; align-items: center; gap: 12px; min-width: 0; }
.dxw-avatar { width: 42px; height: 42px; display: grid; place-items: center; flex: none; border-radius: 12px; color: white; background: var(--dxw-accent); }
.dxw-accountIdentity h3 { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 15px; }
.dxw-accountIdentity p { color: var(--dsw-alias-label-secondary, #646a73); font: 12px ui-monospace, SFMono-Regular, monospace; margin-top: 4px; }
.dxw-health { display: inline-flex; align-items: center; gap: 7px; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; white-space: nowrap; }
.dxw-accountFooter { display: flex; align-items: center; justify-content: space-between; gap: 15px; padding-top: 16px; border-top: 1px solid var(--dsw-alias-border-l1, #eef0f3); }
.dxw-accountFooter .dxw-actions { flex: none; flex-wrap: nowrap; gap: 8px; margin-top: 0; }
.dxw-accountFooter .dxw-button { flex: none; white-space: nowrap; }
.dxw-summary { color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; }
.dxw-confirm { padding: 18px 24px; border-top: 1px solid color-mix(in srgb, var(--dxw-error) 25%, transparent); background: color-mix(in srgb, var(--dxw-error) 5%, transparent); }
.dxw-confirm strong { display: block; font-size: 14px; margin-bottom: 6px; }
.dxw-confirm p { color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; line-height: 1.55; }
.dxw-confirm .dxw-actions { margin-top: 13px; }
.dxw-loading { padding: 36px; color: var(--dsw-alias-label-secondary, #646a73); text-align: center; }
.dxw-spinner { width: 24px; height: 24px; margin: 0 auto 12px; border: 3px solid #e6e8eb; border-top-color: var(--dxw-accent); border-radius: 50%; animation: dxw-spin .8s linear infinite; }
.dxw-visuallyHidden { position: absolute !important; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
@keyframes dxw-spin { to { transform: rotate(360deg); } }
@media (max-width: 720px) {
  .dxw-heading, .dxw-accountTop { flex-direction: column; align-items: stretch; }
  .dxw-empty { grid-template-columns: minmax(0, 1fr); }
  .dxw-logo { display: none; }
  .dxw-qrLayout { grid-template-columns: minmax(0, 1fr); justify-items: center; }
  .dxw-qrCopy { width: 100%; }
  .dxw-cardBody { padding: 20px; }
}
@media (prefers-reduced-motion: reduce) {
  .dxw-page *, .dxw-page *::before, .dxw-page *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
`;
function installWeixinStyles() {
  if (typeof document === "undefined") return () => {
  };
  const existing = document.querySelector(`style[data-plugin-css="${WEIXIN_STYLE_ID}"]`);
  if (existing) return () => {
  };
  const style = document.createElement("style");
  style.dataset.plugin = "@xmanrui/dsh-weixin";
  style.dataset.pluginCss = WEIXIN_STYLE_ID;
  style.textContent = CSS9;
  document.head.appendChild(style);
  return () => style.remove();
}

// plugin-src/client/channels/weixin/index.js
var CHANNEL_LABEL10 = "WeChat";
var Button12 = React18.forwardRef(function Button13({ children, kind = "secondary", className = "", ...props }, ref) {
  return h2("button", {
    ...props,
    ref,
    type: "button",
    className: `dxw-button ${className}`.trim(),
    "data-kind": kind
  }, children);
});
function Heading5({ totals, adding, busy, onAdd, addButtonRef }) {
  return h2(
    "div",
    { className: "dxw-heading" },
    h2(
      "div",
      { className: "dxw-tools" },
      h2(Button12, {
        kind: "primary",
        className: "dim-scanButton",
        onClick: onAdd,
        disabled: adding || busy,
        ref: addButtonRef,
        "aria-label": t("ui.weixin.connectWechatBotByQrCode")
      }, h2(QrActionIcon), adding ? t("ui.dingtalk.connecting") : t("ui.dingtalk.scanQrCode")),
      totals.configured > 0 ? h2(
        "div",
        { className: "dxw-badge dim-onlineBadge" },
        h2("span", null, t("ui.common.onlineCount", { connected: totals.connected, configured: totals.configured }))
      ) : null
    )
  );
}
function LoadingView5() {
  return h2(
    "div",
    { className: "dxw-card dxw-loading dim-surfaceCard dim-loadingView", "aria-busy": "true" },
    h2("div", { className: "dxw-spinner dim-spinner" }),
    h2("span", null, t("ui.weixin.loadingWechatConnectionStatus"))
  );
}
function EmptyView5({ onStart, busy }) {
  return h2(
    "div",
    { className: "dxw-card dim-surfaceCard" },
    h2(
      "div",
      { className: "dxw-cardBody dxw-empty dim-surfaceBody dim-emptyView" },
      h2(
        "div",
        { className: "dim-emptyCopy" },
        h2(
          "div",
          { className: "dxw-stateLabel dim-stateLabel" },
          h2("span", { className: "dxw-dot dim-stateDot" }),
          h2("span", null, t("ui.weixin.noWechatAccountConnectedYet"))
        ),
        h2("h3", null, t("ui.weixin.scanOnceToUseHarnessIn")),
        h2("p", null, t("ui.weixin.theQrCodeIsIssuedBy")),
        h2(
          "div",
          { className: "dxw-actions dim-viewActions" },
          h2(
            Button12,
            { kind: "primary", onClick: onStart, disabled: busy },
            busy ? t("ui.dingtalk.generatingQrCode") : t("ui.weixin.generateWechatQrCode")
          )
        )
      ),
      h2("div", { className: "dxw-logo dim-emptyBrand", "aria-hidden": "true" }, h2(WeixinLogoGlyph, { size: 64 }))
    )
  );
}
function QrPanel4({ provision, now, busy, onRefresh, onCancel }) {
  const [imageFailed, setImageFailed] = React18.useState(false);
  const source = safeQrSource5(provision.qrCodeDataUrl);
  const href = safeVerificationUrl(provision.verificationUrl);
  const remaining = Math.max(0, provision.expiresAt - now);
  const expired = remaining === 0 || provision.status === "expired";
  const duration = Math.max(1, provision.durationMs ?? 5 * 6e4);
  const progress = Math.round(Math.min(1, remaining / duration) * 100);
  React18.useEffect(() => setImageFailed(false), [source]);
  return h2(
    "div",
    { className: "dxw-card dim-surfaceCard" },
    h2(
      "div",
      { className: "dxw-cardBody dxw-qrLayout dim-surfaceBody dim-qrLayout" },
      h2(
        "div",
        { className: "dxw-qrColumn dim-qrColumn" },
        h2(
          "div",
          { className: "dxw-qrFrame dim-qrFrame" },
          source && !imageFailed ? h2("img", {
            src: source,
            alt: t("ui.weixin.oneTimeQrCodeForConnecting"),
            onError: () => setImageFailed(true)
          }) : h2("div", { className: "dxw-qrFallback dim-qrFallback" }, t("ui.weixin.theQrCodeIsNotReady")),
          expired ? h2("div", { className: "dxw-expired dim-qrExpired" }, t("ui.common.qrExpiredRegenerate")) : null
        ),
        h2(
          "div",
          { className: "dxw-countdown dim-countdown" },
          h2("div", { className: "dim-countdownTop" }, h2("span", null, t("ui.dingtalk.qrCodeExpiresIn")), h2("strong", null, formatRemaining5(remaining))),
          h2(
            "div",
            { className: "dxw-progress dim-progress", "aria-hidden": "true" },
            h2("span", { style: { "--dxw-progress": `${progress}%` } })
          )
        )
      ),
      h2(
        "div",
        { className: "dxw-qrCopy dim-qrCopy" },
        h2(
          "div",
          { className: "dxw-stateLabel dim-stateLabel" },
          h2("span", { className: "dxw-dot dim-stateDot", "data-tone": provision.status === "scanned" ? "success" : "warning" }),
          h2("span", null, provision.status === "scanned" ? t("ui.weixin.scannedConfirmOnYourPhone") : t("ui.weixin.waitingForWechatScan"))
        ),
        h2("h3", null, expired ? t("ui.dingtalk.qrCodeExpired") : t("ui.weixin.scanWithWechatOnYourPhone")),
        h2("p", null, t("ui.weixin.reviewAndConfirmAuthorizationOnYour")),
        h2(
          "ol",
          { className: "dxw-steps dim-steps" },
          h2("li", null, t("ui.weixin.openWechatOnYourPhoneAnd")),
          h2("li", null, t("ui.weixin.confirmTheBotConnectionInWechat")),
          h2("li", null, t("ui.weixin.keepThisPageOpenUntilLong"))
        ),
        h2(
          "div",
          { className: "dxw-actions dim-viewActions" },
          expired ? h2(Button12, { kind: "primary", onClick: onRefresh, disabled: busy }, t("ui.dingtalk.generateANewQrCode2")) : null,
          href ? h2("a", {
            className: "dxw-button",
            href,
            target: "_blank",
            rel: "noopener noreferrer"
          }, t("ui.weixin.openAlternateLink")) : null,
          !expired ? h2(Button12, { onClick: onRefresh, disabled: busy }, t("ui.dingtalk.getAnotherQrCode")) : null,
          h2(Button12, { onClick: onCancel, disabled: busy }, t("ui.dingtalk.cancel"))
        )
      )
    )
  );
}
function VerificationPanel({ provision, busy, onSubmit, onCancel }) {
  const [code, setCode] = React18.useState("");
  const valid = /^\d{4,8}$/.test(code);
  React18.useEffect(() => setCode(""), [provision.attemptId]);
  return h2(
    "div",
    { className: "dxw-card dim-surfaceCard" },
    h2(
      "form",
      {
        className: "dxw-verify dim-specialView",
        onSubmit: (event) => {
          event.preventDefault();
          if (valid && !busy) onSubmit(code);
        }
      },
      h2(
        "div",
        { className: "dxw-stateLabel" },
        h2("span", { className: "dxw-dot", "data-tone": "warning" }),
        h2("span", null, t("ui.weixin.pairingCodeRequired"))
      ),
      h2("h3", null, t("ui.weixin.enterTheNumberShownInWechat")),
      h2("p", null, t("ui.weixin.thisIsAnAdditionalWechatConfirmation")),
      h2(
        "div",
        { className: "dxw-codeRow" },
        h2("input", {
          className: "dxw-input",
          value: code,
          inputMode: "numeric",
          autoComplete: "one-time-code",
          maxLength: 8,
          "aria-label": t("ui.weixin.wechatPairingCode"),
          onChange: (event) => setCode(event.target.value.replace(/\D/g, "").slice(0, 8)),
          autoFocus: true
        }),
        h2("button", {
          type: "submit",
          className: "dxw-button",
          "data-kind": "primary",
          disabled: !valid || busy
        }, busy ? t("ui.weixin.verifying") : t("ui.weixin.continueConnecting"))
      ),
      h2(Button12, { onClick: onCancel, disabled: busy }, t("ui.weixin.cancelSetup"))
    )
  );
}
function ProgressPanel2({ scanned, onCancel, busy }) {
  return h2(
    "div",
    { className: "dxw-card dxw-loading dim-surfaceCard dim-loadingView", "aria-busy": "true" },
    h2("div", { className: "dxw-spinner dim-spinner" }),
    h2("h3", null, scanned ? t("ui.weixin.confirmedInWechatStartingTheMessage") : t("ui.weixin.preparingWechatQrCode")),
    h2("p", null, scanned ? t("ui.weixin.savingCredentialsAndVerifyingTheWechat") : t("ui.weixin.contactingTheWechatIlinkService")),
    onCancel ? h2(
      "div",
      { className: "dxw-actions dim-viewActions", style: { justifyContent: "center", marginTop: 14 } },
      h2(Button12, { onClick: onCancel, disabled: busy }, t("ui.dingtalk.cancel"))
    ) : null
  );
}
function ProvisionError3({ provision, busy, onRetry, onClose }) {
  const error = provision.error ?? { code: "WEIXIN_PROVISION_FAILED", message: t("ui.weixin.wechatSetupDidNotComplete") };
  return h2(
    "div",
    { className: "dxw-card dim-surfaceCard" },
    h2(
      "div",
      { className: "dxw-error dim-inlineError", role: "alert" },
      h2("h3", null, provision.status === "expired" ? t("ui.dingtalk.qrCodeExpired2") : t("ui.common.notBound", { channel: CHANNEL_LABEL10 })),
      h2("p", null, error.message),
      h2("span", { className: "dxw-errorCode" }, error.code),
      h2(
        "div",
        { className: "dxw-actions dim-viewActions" },
        h2(Button12, { kind: "primary", onClick: onRetry, disabled: busy }, t("ui.dingtalk.generateANewQrCode2")),
        h2(Button12, { onClick: onClose, disabled: busy }, t("ui.dingtalk.close"))
      )
    )
  );
}
function checkedTime5(timestamp7) {
  if (!timestamp7) return t("ui.dingtalk.notCheckedYet");
  try {
    return new Intl.DateTimeFormat("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date(timestamp7));
  } catch {
    return t("ui.dingtalk.justNow");
  }
}
function AccountCard4({
  account,
  busy,
  feedback,
  removing,
  onReconnect,
  onWorkspaceSave,
  onAgentPresetSave,
  onRequestRemove,
  onConfirmRemove,
  onCancelRemove
}) {
  const state = busy === "reconnect" ? "connecting" : account.state;
  const tone = account.connected ? "success" : state === "error" ? "error" : "warning";
  const summary = account.error?.message ?? (account.connected ? null : account.health.summary);
  return h2(
    "article",
    { className: "dxw-card dim-botCard", tabIndex: -1, "data-bot-id": account.botId },
    h2(
      "div",
      { className: "dxw-cardBody dim-botCardBody" },
      h2(
        "div",
        { className: "dxw-accountTop dim-botCardTop" },
        h2(
          "div",
          { className: "dxw-accountIdentity dim-botIdentity" },
          h2("div", { className: "dxw-avatar dim-botAvatar", "aria-hidden": "true" }, h2(WeixinLogoGlyph, { size: 27 })),
          h2("div", { className: "dim-botName" }, h2("h3", null, account.bot.name), h2("p", null, account.bot.accountIdMasked))
        ),
        h2(BotStatusMeta, {
          className: "dxw-health",
          dotClassName: "dxw-dot",
          tone,
          stateLabel: account.connected ? t("ui.dingtalk.connected") : state === "connecting" ? t("ui.dingtalk.connecting2") : t("ui.dingtalk.notConnected"),
          lastCheckedAt: account.health.lastCheckedAt,
          formatCheckedTime: checkedTime5
        })
      ),
      h2(WorkspaceEditor, {
        workspace: account.workspace,
        disabled: Boolean(busy),
        onSave: onWorkspaceSave
      }),
      h2(AgentPresetEditor, {
        agentPreset: account.agentPreset,
        disabled: Boolean(busy),
        onSave: onAgentPresetSave
      }),
      h2(
        "div",
        { className: "dxw-accountFooter dim-cardFooter" },
        h2(
          "div",
          { className: "dim-cardFooterLayout" },
          h2(
            "div",
            { className: "dxw-actions dim-cardActions" },
            h2(
              Button12,
              { className: "dim-cardAction", onClick: onReconnect, disabled: Boolean(busy) },
              busy === "reconnect" ? t("ui.dingtalk.checking") : account.connected ? t("ui.dingtalk.checkConnection") : t("ui.dingtalk.reconnect")
            ),
            h2(Button12, { className: "dim-cardAction", kind: "danger", onClick: onRequestRemove, disabled: Boolean(busy) }, t("ui.dingtalk.removeConnection2"))
          ),
          summary ? h2("div", { className: "dxw-summary dim-cardSummary" }, summary) : null,
          account.lastMessageError ? h2("div", {
            className: "dxw-summary dim-cardSummary",
            role: "status"
          }, t("ui.common.lastMessageFailed", { reason: account.lastMessageError.message })) : null,
          feedback ? h2("div", {
            className: "dxw-summary dim-cardFeedback",
            role: "status",
            "aria-live": "polite"
          }, feedback) : null
        )
      )
    ),
    removing ? h2(
      "div",
      { className: "dxw-confirm dim-confirm", role: "alertdialog" },
      h2("strong", null, t("ui.weixin.removeThisWechatAccountFromHarness")),
      h2("p", null, t("ui.weixin.thisStopsTheMessageConnectionAnd")),
      h2(
        "div",
        { className: "dxw-actions dim-viewActions" },
        h2(Button12, { onClick: onCancelRemove, disabled: busy === "delete" }, t("ui.weixin.keepAccount")),
        h2(
          Button12,
          { kind: "danger", onClick: onConfirmRemove, disabled: busy === "delete" },
          busy === "delete" ? t("ui.dingtalk.removing") : t("ui.weixin.remove")
        )
      )
    ) : null
  );
}
function AccountList2(props) {
  return h2(
    "section",
    { className: "dim-listSection" },
    h2(ChannelListHeading, {
      className: "dxw-listHeading",
      title: t("ui.weixin.connectedWechatAccounts"),
      connectionLabel: t("ui.weixin.ilinkLongPolling")
    }),
    h2("ul", { className: "dxw-list dim-botList" }, props.bots.map((account) => h2(
      "li",
      { key: account.botId },
      h2(AccountCard4, {
        account,
        busy: props.busyByBot[account.botId],
        feedback: props.feedbackByBot[account.botId],
        removing: props.removeTarget === account.botId,
        onReconnect: () => props.onReconnect(account),
        onWorkspaceSave: (workspace) => props.onWorkspaceSave(account, workspace),
        onAgentPresetSave: (agentPreset) => props.onAgentPresetSave(account, agentPreset),
        onRequestRemove: () => props.onRequestRemove(account),
        onConfirmRemove: () => props.onConfirmRemove(account),
        onCancelRemove: props.onCancelRemove
      })
    )))
  );
}
var EMPTY_TOTALS3 = Object.freeze({ configured: 0, connected: 0 });
function mergeWeixinProvisioningSnapshot(current2, incoming, { restoreProvisioning = false } = {}) {
  if (!incoming || !current2 && !restoreProvisioning) return current2;
  if (current2 && current2.attemptId !== incoming.attemptId) return current2;
  return {
    ...current2,
    ...incoming,
    durationMs: current2?.durationMs ?? 5 * 6e4
  };
}
function WeixinSettingsTab({ rpcCall }) {
  const [model, setModel] = React18.useState({
    phase: "loading",
    bots: [],
    totals: EMPTY_TOTALS3,
    revision: 0,
    error: null,
    agentPresetCatalog: EMPTY_AGENT_PRESET_CATALOG
  });
  const [provision, setProvision] = React18.useState(null);
  const [busy, setBusy] = React18.useState(false);
  const [busyByBot, setBusyByBot] = React18.useState({});
  const [feedbackByBot, setFeedbackByBot] = React18.useState({});
  const [removeTarget, setRemoveTarget] = React18.useState(null);
  const [notice, setNotice] = React18.useState("");
  const [now, setNow] = React18.useState(() => Date.now());
  const addButtonRef = React18.useRef(null);
  const mountedRef = React18.useRef(true);
  const workspaceFence = useWorkspaceSnapshotFence();
  const scheduleAnimationFrame = useAnimationFrameScheduler();
  React18.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
  const announce = React18.useCallback((value) => {
    setNotice("");
    scheduleAnimationFrame(() => {
      if (value) setNotice(value);
    }, "announcement");
  }, [scheduleAnimationFrame]);
  const invoke = React18.useCallback(async (endpoint, payload = {}, signal) => {
    return unwrapRpcResult8(await rpcCall(endpoint, payload, signal));
  }, [rpcCall]);
  const loadStatus = React18.useCallback(async ({
    signal,
    silent = false,
    restoreProvisioning = false
  } = {}) => {
    const workspaceVersion = workspaceFence.beginStatus();
    if (workspaceVersion === null || !mountedRef.current) return void 0;
    if (!silent) setModel((current2) => ({ ...current2, phase: "loading", error: null }));
    try {
      const snapshot = normalizeSnapshot7(await invoke(WEIXIN_ENDPOINTS.status, {}, signal));
      if (signal?.aborted || !mountedRef.current || !workspaceFence.canCommitStatus(workspaceVersion)) return void 0;
      setModel({
        phase: "ready",
        bots: snapshot.bots,
        totals: snapshot.totals,
        revision: snapshot.revision,
        error: null,
        agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
      });
      if (snapshot.provisioning) {
        setProvision((current2) => mergeWeixinProvisioningSnapshot(
          current2,
          snapshot.provisioning,
          { restoreProvisioning }
        ));
      }
      return snapshot;
    } catch (error) {
      if (signal?.aborted || error?.name === "AbortError" || !mountedRef.current || !workspaceFence.canCommitStatus(workspaceVersion)) return void 0;
      setModel((current2) => ({
        ...current2,
        phase: silent && current2.phase === "ready" ? "ready" : "error",
        error: presentError8(error)
      }));
      return void 0;
    }
  }, [invoke, workspaceFence]);
  React18.useEffect(() => {
    const controller = new AbortController();
    void loadStatus({ signal: controller.signal, restoreProvisioning: true });
    return () => controller.abort();
  }, [loadStatus]);
  React18.useEffect(() => {
    if (model.phase !== "ready") return void 0;
    const controller = new AbortController();
    let running = false;
    const timer = window.setInterval(async () => {
      if (running) return;
      running = true;
      await loadStatus({
        signal: controller.signal,
        silent: true,
        restoreProvisioning: false
      });
      running = false;
    }, 15e3);
    return () => {
      controller.abort();
      window.clearInterval(timer);
    };
  }, [loadStatus, model.phase]);
  React18.useEffect(() => {
    if (!provision || !["pending", "scanned"].includes(provision.status)) return void 0;
    const timer = window.setInterval(() => setNow(Date.now()), 1e3);
    return () => window.clearInterval(timer);
  }, [provision?.attemptId, provision?.status]);
  const startProvisioning = React18.useCallback(async ({ replace = false } = {}) => {
    setBusy(true);
    try {
      if (replace && provision?.attemptId) {
        await invoke(WEIXIN_ENDPOINTS.cancelProvisioning, { attemptId: provision.attemptId });
      }
      setProvision({ status: "starting" });
      const started = normalizeProvisioning5(await invoke(WEIXIN_ENDPOINTS.beginProvisioning, { locale: "zh-CN" }));
      setNow(Date.now());
      setProvision({ ...started, durationMs: Math.max(1, started.expiresAt - Date.now()) });
      announce(t("ui.weixin.wechatQrCodeGeneratedScanIt"));
    } catch (error) {
      setProvision({
        status: "failed",
        error: presentError8(error),
        ...provision?.attemptId ? { attemptId: provision.attemptId } : {}
      });
    } finally {
      setBusy(false);
    }
  }, [announce, invoke, provision?.attemptId]);
  const cancelProvisioning = React18.useCallback(async () => {
    setBusy(true);
    try {
      if (provision?.attemptId && !["failed", "expired", "cancelled"].includes(provision.status)) {
        await invoke(WEIXIN_ENDPOINTS.cancelProvisioning, { attemptId: provision.attemptId });
      }
      setProvision(null);
      announce(t("ui.weixin.wechatSetupWasCancelled"));
      scheduleAnimationFrame(() => addButtonRef.current?.focus(), "focus");
    } catch (error) {
      setProvision((current2) => ({ ...current2, status: "failed", error: presentError8(error) }));
    } finally {
      setBusy(false);
    }
  }, [announce, invoke, provision?.attemptId, provision?.status, scheduleAnimationFrame]);
  const submitVerification = React18.useCallback(async (verifyCode) => {
    if (!provision?.attemptId) return;
    setBusy(true);
    try {
      const next = normalizeProvisioning5(await invoke(WEIXIN_ENDPOINTS.submitVerification, {
        attemptId: provision.attemptId,
        verifyCode
      }));
      setProvision((current2) => ({ ...current2, ...next }));
      announce(t("ui.weixin.pairingCodeSubmittedWaitingForWechat"));
    } catch (error) {
      setProvision((current2) => ({ ...current2, status: "failed", error: presentError8(error) }));
    } finally {
      setBusy(false);
    }
  }, [announce, invoke, provision?.attemptId]);
  React18.useEffect(() => {
    const attemptId = provision?.attemptId;
    if (!attemptId || !["pending", "scanned", "connecting"].includes(provision.status)) return void 0;
    const controller = new AbortController();
    const scheduler = createPollScheduler({
      setTimeoutFn: (callback, delayMs) => window.setTimeout(callback, delayMs),
      clearTimeoutFn: (timer) => window.clearTimeout(timer)
    });
    const poll = async () => {
      try {
        const result = normalizeProvisioning5(await invoke(
          WEIXIN_ENDPOINTS.pollProvisioning,
          { attemptId },
          controller.signal
        ));
        if (scheduler.disposed) return;
        if (result.status === "connected") {
          const snapshot = await loadStatus({
            signal: controller.signal,
            silent: true,
            restoreProvisioning: false
          });
          if (scheduler.disposed) return;
          const account = snapshot?.bots.find((bot) => bot.botId === result.botId);
          if (!account?.connected) {
            setProvision((current2) => current2?.attemptId === attemptId ? { ...current2, ...result, status: "connecting" } : current2);
            scheduler.schedule(poll, result.pollIntervalMs);
            return;
          }
          setProvision(null);
          announce(result.alreadyConnected ? t("ui.weixin.thisWechatAccountIsConnectedAnd") : t("ui.weixin.wechatIsConnectedAndReadyFor"));
          return;
        }
        setProvision((current2) => current2?.attemptId === attemptId ? { ...current2, ...result, durationMs: current2.durationMs } : current2);
        if (["pending", "scanned", "connecting"].includes(result.status)) {
          scheduler.schedule(poll, result.pollIntervalMs);
        }
      } catch (error) {
        if (scheduler.disposed || error?.name === "AbortError") return;
        setProvision((current2) => current2?.attemptId === attemptId ? { ...current2, status: "failed", error: presentError8(error) } : current2);
      }
    };
    scheduler.schedule(poll, provision.pollIntervalMs ?? 1e3);
    return () => {
      scheduler.dispose();
      controller.abort();
    };
  }, [announce, invoke, loadStatus, provision?.attemptId, provision?.status, provision?.pollIntervalMs]);
  const setBotBusy = React18.useCallback((botId, value) => {
    setBusyByBot((current2) => {
      const next = { ...current2 };
      if (value) next[botId] = value;
      else delete next[botId];
      return next;
    });
  }, []);
  const reconnect = React18.useCallback(async (account) => {
    const snapshotVersion = workspaceFence.beginMutation();
    setBotBusy(account.botId, "reconnect");
    setFeedbackByBot((current2) => {
      const next = { ...current2 };
      delete next[account.botId];
      return next;
    });
    try {
      const snapshot = normalizeSnapshot7(await invoke(
        WEIXIN_ENDPOINTS.reconnectBot,
        { botId: account.botId, sendTest: true }
      ));
      if (mountedRef.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        setModel((current2) => ({
          ...current2,
          bots: snapshot.bots,
          totals: snapshot.totals,
          revision: snapshot.revision,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? current2.agentPresetCatalog
        }));
      }
      const refreshed = snapshot.bots.find((bot) => bot.botId === account.botId);
      let feedback;
      if (!refreshed?.connected) {
        feedback = t("ui.common.stillOffline", { channel: CHANNEL_LABEL10 });
      } else if (snapshot.testMessage?.sent) {
        feedback = t("ui.weixin.wechatConnectionCheckCompletedAndThe");
      } else if (snapshot.testMessage?.code === "test-target-unavailable") {
        feedback = t("ui.dingtalk.connectionCheckCompletedTheBotHas");
      } else if (snapshot.testMessage) {
        feedback = t("ui.weixin.wechatConnectionCheckCompletedButThe");
      } else {
        feedback = t("ui.common.connectionCheckDone", { channel: CHANNEL_LABEL10 });
      }
      if (mountedRef.current) {
        setFeedbackByBot((current2) => ({ ...current2, [account.botId]: feedback }));
      }
      announce(feedback);
    } catch {
      const feedback = t("ui.dingtalk.connectionCheckFailedTryAgainLater");
      if (mountedRef.current) {
        setFeedbackByBot((current2) => ({ ...current2, [account.botId]: feedback }));
      }
      announce(feedback);
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      setBotBusy(account.botId, null);
    }
  }, [announce, invoke, loadStatus, setBotBusy, workspaceFence]);
  const saveWorkspace = React18.useCallback(async (account, workspace) => {
    const workspaceVersion = workspaceFence.beginMutation();
    setBotBusy(account.botId, "workspace");
    try {
      const snapshot = normalizeSnapshot7(await invoke(
        WEIXIN_ENDPOINTS.setWorkspace,
        { botId: account.botId, workspace }
      ));
      if (mountedRef.current && workspaceFence.canCommitMutation(workspaceVersion)) {
        setModel({
          phase: "ready",
          bots: snapshot.bots,
          totals: snapshot.totals,
          revision: snapshot.revision,
          error: null,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
        });
      }
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      if (mountedRef.current) setBotBusy(account.botId, null);
    }
  }, [invoke, loadStatus, setBotBusy, workspaceFence]);
  const saveAgentPreset = React18.useCallback(async (account, agentPreset) => {
    const snapshotVersion = workspaceFence.beginMutation();
    setBotBusy(account.botId, "preset");
    try {
      const snapshot = normalizeSnapshot7(await invoke(
        WEIXIN_ENDPOINTS.setAgentPreset,
        { botId: account.botId, agentPreset }
      ));
      if (mountedRef.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        setModel({
          phase: "ready",
          bots: snapshot.bots,
          totals: snapshot.totals,
          revision: snapshot.revision,
          error: null,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
        });
      }
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      if (mountedRef.current) setBotBusy(account.botId, null);
    }
  }, [invoke, loadStatus, setBotBusy, workspaceFence]);
  const remove = React18.useCallback(async (account) => {
    const snapshotVersion = workspaceFence.beginMutation();
    setBotBusy(account.botId, "delete");
    try {
      const snapshot = normalizeSnapshot7(await invoke(WEIXIN_ENDPOINTS.deleteBot, {
        botId: account.botId,
        confirm: true
      }));
      if (mountedRef.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        setModel((current2) => ({
          ...current2,
          bots: snapshot.bots,
          totals: snapshot.totals,
          revision: snapshot.revision,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? current2.agentPresetCatalog
        }));
      }
      setRemoveTarget(null);
      announce(t("ui.weixin.theWechatAccountAndLocalCredentials"));
    } catch (error) {
      announce(t("ui.common.removalFailedReason", { reason: presentError8(error).message }));
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      setBotBusy(account.botId, null);
    }
  }, [announce, invoke, loadStatus, setBotBusy, workspaceFence]);
  let provisionView = null;
  if (provision?.status === "starting") {
    provisionView = h2(ProgressPanel2, { busy });
  } else if (["pending", "scanned"].includes(provision?.status)) {
    provisionView = h2(QrPanel4, {
      provision,
      now,
      busy,
      onRefresh: () => void startProvisioning({ replace: true }),
      onCancel: () => void cancelProvisioning()
    });
  } else if (provision?.status === "needs_verification") {
    provisionView = h2(VerificationPanel, {
      provision,
      busy,
      onSubmit: (code) => void submitVerification(code),
      onCancel: () => void cancelProvisioning()
    });
  } else if (provision?.status === "connecting") {
    provisionView = h2(ProgressPanel2, {
      scanned: true,
      busy,
      onCancel: () => void cancelProvisioning()
    });
  } else if (provision && ["failed", "expired", "cancelled"].includes(provision.status)) {
    provisionView = h2(ProvisionError3, {
      provision,
      busy,
      onRetry: () => void startProvisioning({ replace: Boolean(provision.attemptId) }),
      onClose: () => void cancelProvisioning()
    });
  }
  return h2(AgentPresetCatalogContext.Provider, {
    value: model.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
  }, h2(
    "section",
    { className: "dxw-page dim-channelPage", "aria-label": t("ui.weixin.wechatSettings") },
    h2(Heading5, {
      totals: model.totals,
      adding: Boolean(provision),
      busy,
      onAdd: () => void startProvisioning(),
      addButtonRef
    }),
    h2("div", { className: "dxw-visuallyHidden", role: "status", "aria-live": "polite" }, notice),
    model.error && model.phase === "ready" ? h2("div", { className: "dxw-statusNotice dim-statusNotice" }, t("ui.common.statusRefreshFailed", { reason: model.error.message })) : null,
    model.phase === "loading" ? h2(LoadingView5) : model.phase === "error" ? h2(
      "div",
      { className: "dxw-card dim-surfaceCard" },
      h2(
        "div",
        { className: "dxw-error dim-inlineError" },
        h2("h3", null, t("ui.weixin.couldNotLoadWechatStatus")),
        h2("p", null, model.error?.message ?? t("ui.dingtalk.tryAgainLater")),
        h2(Button12, { onClick: () => void loadStatus() }, t("ui.dingtalk.reload"))
      )
    ) : h2(
      React18.Fragment,
      null,
      provisionView,
      model.bots.length === 0 && !provision ? h2(EmptyView5, { onStart: () => void startProvisioning(), busy }) : null,
      model.bots.length > 0 ? h2(AccountList2, {
        bots: model.bots,
        busyByBot,
        feedbackByBot,
        removeTarget,
        onReconnect: (account) => void reconnect(account),
        onWorkspaceSave: saveWorkspace,
        onAgentPresetSave: saveAgentPreset,
        onRequestRemove: (account) => setRemoveTarget(account.botId),
        onConfirmRemove: (account) => void remove(account),
        onCancelRemove: () => setRemoveTarget(null)
      }) : null
    )
  ));
}

// plugin-src/client/channels/whatsapp/api.js
var CHANNEL_LABEL11 = "WhatsApp";
var WHATSAPP_RPC_CHANNEL = "/whatsapp";
var WHATSAPP_ENDPOINTS = Object.freeze({
  status: "connection.status",
  beginProvisioning: "provision.begin",
  pollProvisioning: "provision.poll",
  cancelProvisioning: "provision.cancel",
  reconnectBot: "bot.reconnect",
  deleteBot: "bot.delete",
  setWorkspace: "bot.workspace.set",
  setAgentPreset: SET_AGENT_PRESET_ENDPOINT
});
var PROVISION_STATES5 = /* @__PURE__ */ new Set(["starting", "pending", "connecting", "connected", "failed", "cancelled"]);
var BOT_STATES = /* @__PURE__ */ new Set(["connected", "connecting", "offline", "error"]);
var QR_DATA_URL4 = /^data:image\/(?:png|webp);base64,[a-z\d+/]+={0,2}$/i;
function isRecord7(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function text4(value, fallback, max = 240) {
  return typeof value === "string" && value.trim() ? value.trim().slice(0, max) : fallback;
}
function id4(value) {
  const result = text4(value, "", 128);
  return /^[a-z\d_-]+$/i.test(result) ? result : void 0;
}
function timestamp6(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  const parsed = typeof value === "string" ? Date.parse(value) : Number.NaN;
  return Number.isNaN(parsed) ? void 0 : parsed;
}
function unwrapRpcResult9(result) {
  if (!isRecord7(result) || typeof result.ok !== "boolean") {
    throw new Error(t("ui.common.unrecognizedResponse", { channel: CHANNEL_LABEL11 }));
  }
  if (!result.ok) {
    const error = new Error(text4(result.error?.message, t("ui.common.operationFailed", { channel: CHANNEL_LABEL11 })));
    error.code = text4(result.error?.code, "WHATSAPP_RPC_ERROR", 80);
    throw error;
  }
  return result.value;
}
function safeQrSource6(value) {
  return typeof value === "string" && value.length <= 2 * 1024 * 1024 && QR_DATA_URL4.test(value) ? value : void 0;
}
function normalizeProvisioning6(value, now = Date.now()) {
  const source = isRecord7(value?.provisioning) ? value.provisioning : value;
  if (!isRecord7(source)) throw new Error(t("ui.whatsapp.whatsappDidNotReturnQrSetup"));
  const attemptId = id4(source.attemptId);
  if (!attemptId) throw new Error(t("ui.whatsapp.whatsappDidNotReturnAValid"));
  const reported = text4(source.status, "failed", 32);
  const result = {
    attemptId,
    status: PROVISION_STATES5.has(reported) ? reported : "failed",
    expiresAt: timestamp6(source.expiresAt) ?? now + 6e4,
    pollIntervalMs: Math.min(5e3, Math.max(500, Number(source.pollIntervalMs) || 1e3)),
    qrRevision: Number.isSafeInteger(source.qrRevision) ? source.qrRevision : 0
  };
  const qrCodeDataUrl = safeQrSource6(source.qrCodeDataUrl);
  if (qrCodeDataUrl) result.qrCodeDataUrl = qrCodeDataUrl;
  if (id4(source.botId)) result.botId = id4(source.botId);
  if (isRecord7(source.error)) result.error = {
    code: text4(source.error.code, "WHATSAPP_PROVISION_FAILED", 80),
    message: text4(source.error.message, t("ui.common.notConnected", { channel: CHANNEL_LABEL11 }))
  };
  return result;
}
function normalizeBot6(value) {
  if (!isRecord7(value) || !id4(value.botId)) return void 0;
  const connected = value.connected === true;
  const state = BOT_STATES.has(value.state) ? value.state : "offline";
  return {
    botId: id4(value.botId),
    connected,
    state: connected ? "connected" : state,
    workspace: text4(value.workspace, "", 4096),
    agentPreset: normalizeAgentPresetId(value.agentPreset),
    bot: {
      name: text4(value.bot?.name, t("ui.whatsapp.whatsappBot"), 100),
      idMasked: text4(value.bot?.idMasked, t("ui.whatsapp.whatsappAccount"), 140)
    },
    health: {
      summary: text4(value.health?.summary, connected ? t("ui.whatsapp.whatsappLinkedDeviceIsHealthy") : t("ui.common.connectionNotReady", { channel: CHANNEL_LABEL11 })),
      lastCheckedAt: timestamp6(value.health?.lastCheckedAt)
    },
    error: isRecord7(value.error) ? {
      code: text4(value.error.code, "WHATSAPP_ACCOUNT_ERROR", 80),
      message: text4(value.error.message, t("ui.common.connectionNotReady", { channel: CHANNEL_LABEL11 }))
    } : null
  };
}
function normalizeSnapshot8(value) {
  const source = isRecord7(value?.snapshot) ? value.snapshot : value;
  if (!isRecord7(source) || !Array.isArray(source.bots)) {
    throw new Error(t("ui.whatsapp.whatsappDidNotReturnAValid2"));
  }
  const bots = source.bots.map(normalizeBot6).filter(Boolean);
  return {
    revision: Number.isSafeInteger(source.revision) ? source.revision : 0,
    bots,
    totals: { configured: bots.length, connected: bots.filter((bot) => bot.connected).length },
    provisioning: source.provisioning ? normalizeProvisioning6(source.provisioning) : null,
    agentPresetCatalog: normalizeAgentPresetCatalog(source.agentPresetCatalog)
  };
}
function presentError9(error) {
  return {
    code: text4(error?.code, "WHATSAPP_ERROR", 80),
    message: text4(error?.message, t("ui.common.operationFailedRetry", { channel: CHANNEL_LABEL11 }))
  };
}
function formatRemaining6(milliseconds) {
  const seconds = Math.max(0, Math.ceil(Number(milliseconds) / 1e3) || 0);
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}

// plugin-src/client/channels/whatsapp/index.js
var React19 = __toESM(require("react"), 1);

// plugin-src/client/channels/whatsapp/styles.js
var WHATSAPP_STYLE_ID = "dsh-im-x-whatsapp-settings";
var CSS10 = String.raw`
.dwa-page { --ddt-accent: #25d366; --ddt-accent-deep: #128c7e; --ddt-accent-wash: #eafbf0; }
.dwa-avatar { color: #fff; background: #25d366; }
.dwa-avatar svg { display: block; }
`;
function installWhatsappStyles() {
  if (typeof document === "undefined") return () => {
  };
  const existing = document.querySelector(`style[data-plugin-css="${WHATSAPP_STYLE_ID}"]`);
  if (existing) return () => {
  };
  const style = document.createElement("style");
  style.dataset.plugin = "@xmanrui/dsh-im";
  style.dataset.pluginCss = WHATSAPP_STYLE_ID;
  style.textContent = CSS10;
  document.head.appendChild(style);
  return () => style.remove();
}

// plugin-src/client/channels/whatsapp/index.js
var CHANNEL_LABEL12 = "WhatsApp";
var ACTIVE_STATES3 = /* @__PURE__ */ new Set(["pending", "connecting"]);
var Button14 = React19.forwardRef(function Button15({ children, kind = "secondary", className = "", ...props }, ref) {
  return h2("button", {
    ...props,
    ref,
    type: "button",
    className: `ddt-button ${className}`.trim(),
    "data-kind": kind
  }, children);
});
function checkedTime6(value) {
  if (!value) return t("ui.dingtalk.notCheckedYet");
  try {
    return new Intl.DateTimeFormat("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date(value));
  } catch {
    return t("ui.dingtalk.justNow");
  }
}
function connectionTestNotice3(value) {
  if (value?.testMessage?.sent === true) {
    return t("ui.whatsapp.testMessageSentCheckTheWhatsapp");
  }
  if (value?.testMessage?.code === "test-target-unavailable") {
    return t("ui.whatsapp.connectionCheckCompletedButNoWhatsapp");
  }
  return value?.testMessage ? t("ui.feishu.connectionCheckCompletedButTheTest") : null;
}
function Heading6({ totals, busy, onAdd, addButtonRef }) {
  return h2(
    "div",
    { className: "ddt-heading" },
    h2(
      "div",
      { className: "ddt-tools" },
      h2(
        "div",
        { className: "dim-bindActions" },
        h2(Button14, {
          kind: "primary",
          className: "dim-scanButton",
          onClick: onAdd,
          disabled: busy,
          ref: addButtonRef,
          "aria-label": t("ui.whatsapp.connectWhatsappByQrCode")
        }, h2(QrActionIcon), busy ? t("ui.dingtalk.connecting") : t("ui.dingtalk.scanQrCode"))
      ),
      totals.configured > 0 ? h2(
        "div",
        { className: "ddt-badge dim-onlineBadge" },
        h2("span", null, t("ui.common.onlineCount", { connected: totals.connected, configured: totals.configured }))
      ) : null
    )
  );
}
function LoadingView6() {
  return h2("div", {
    className: "ddt-card ddt-loading dim-surfaceCard dim-loadingView",
    "aria-busy": "true"
  }, h2("div", { className: "ddt-spinner dim-spinner" }), t("ui.common.loadingStatus", { channel: CHANNEL_LABEL12 }));
}
function EmptyView6({ busy, onStart }) {
  return h2(
    "div",
    { className: "ddt-card dim-surfaceCard" },
    h2(
      "div",
      { className: "ddt-cardBody ddt-empty dim-surfaceBody dim-emptyView" },
      h2(
        "div",
        { className: "dim-emptyCopy" },
        h2(
          "div",
          { className: "ddt-stateLabel dim-stateLabel" },
          h2("span", { className: "ddt-dot dim-stateDot" }),
          h2("span", null, t("ui.common.noBotsYet", { channel: CHANNEL_LABEL12 }))
        ),
        h2("h3", null, t("ui.whatsapp.connectWhatsappByQrCode2")),
        h2("p", null, t("ui.whatsapp.scanTheQrCodeWithWhatsapp")),
        h2(
          "div",
          { className: "ddt-actions dim-viewActions" },
          h2(
            Button14,
            { kind: "primary", onClick: onStart, disabled: busy },
            busy ? t("ui.dingtalk.generatingQrCode") : t("ui.whatsapp.generateQrCode")
          )
        )
      ),
      h2("div", {
        className: "ddt-brandMark dim-emptyBrand dwa-avatar",
        "aria-hidden": "true"
      }, h2(WhatsappLogoGlyph, { size: 64 }))
    )
  );
}
function QrPanel5({ provision, now, busy, onRefresh, onCancel }) {
  const source = safeQrSource6(provision.qrCodeDataUrl);
  const remaining = Math.max(0, provision.expiresAt - now);
  const duration = Math.max(1, provision.durationMs ?? 6e4);
  const progress = Math.round(Math.min(1, remaining / duration) * 100);
  return h2(
    "div",
    { className: "ddt-card dim-surfaceCard" },
    h2(
      "div",
      { className: "ddt-cardBody ddt-qrLayout dim-surfaceBody dim-qrLayout" },
      h2(
        "div",
        { className: "ddt-qrColumn dim-qrColumn" },
        h2(
          "div",
          { className: "ddt-qrFrame dim-qrFrame" },
          source ? h2("img", {
            src: source,
            alt: t("ui.whatsapp.oneTimeQrCodeForLinking")
          }) : h2("div", { className: "ddt-qrFallback dim-qrFallback" }, t("ui.whatsapp.generatingQrCode"))
        ),
        h2(
          "div",
          { className: "ddt-countdown dim-countdown" },
          h2(
            "div",
            { className: "ddt-countdownTop dim-countdownTop" },
            h2("span", null, t("ui.qq.qrCodeExpiresIn")),
            h2("strong", null, formatRemaining6(remaining))
          ),
          h2("div", {
            className: "ddt-progress dim-progress",
            style: { "--ddt-progress": `${progress}%` }
          }, h2("span"))
        )
      ),
      h2(
        "div",
        { className: "ddt-qrCopy dim-qrCopy" },
        h2(
          "div",
          { className: "ddt-stateLabel dim-stateLabel" },
          h2("span", { className: "ddt-dot dim-stateDot", "data-tone": "warning" }),
          h2("span", null, t("ui.whatsapp.waitingForWhatsappScan"))
        ),
        h2("h3", null, t("ui.whatsapp.scanWithWhatsappOnYourPhone")),
        h2(
          "ol",
          { className: "ddt-steps dim-steps" },
          h2("li", null, t("ui.whatsapp.openWhatsappSettingsLinkedDevices")),
          h2("li", null, t("ui.whatsapp.selectLinkADeviceAndScan"))
        ),
        h2(
          "div",
          { className: "ddt-actions dim-viewActions" },
          h2(Button14, { onClick: onRefresh, disabled: busy }, t("ui.dingtalk.generateANewQrCode2")),
          h2(Button14, { kind: "quiet", onClick: onCancel, disabled: busy }, t("ui.dingtalk.cancel"))
        )
      )
    )
  );
}
function ProvisionView3({ provision, busy, onRetry, onClose }) {
  if (provision.status === "starting" || provision.status === "connecting") {
    const starting = provision.status === "starting";
    return h2(
      "div",
      {
        className: "ddt-card ddt-loading dim-surfaceCard dim-specialView",
        "aria-busy": "true"
      },
      h2("div", { className: "ddt-spinner dim-spinner" }),
      h2("h3", null, starting ? t("ui.whatsapp.generatingWhatsappQrCode") : t("ui.whatsapp.scannedConnectingWhatsapp")),
      h2("p", null, starting ? t("ui.whatsapp.creatingASecureLinkedDeviceSession") : t("ui.whatsapp.linkingTheDeviceToDeepseekHarness"))
    );
  }
  const error = provision.error ?? {
    code: "WHATSAPP_PROVISION_FAILED",
    message: t("ui.common.notConnected", { channel: CHANNEL_LABEL12 })
  };
  return h2(
    "div",
    { className: "ddt-card dim-surfaceCard" },
    h2(
      "div",
      { className: "ddt-inlineError dim-inlineError", role: "alert" },
      h2("h3", null, t("ui.common.notConnected", { channel: CHANNEL_LABEL12 })),
      h2("p", null, error.message),
      h2("span", { className: "ddt-errorCode" }, error.code),
      h2(
        "div",
        { className: "ddt-actions dim-viewActions" },
        h2(Button14, { kind: "primary", onClick: onRetry, disabled: busy }, t("ui.dingtalk.generateANewQrCode2")),
        h2(Button14, { onClick: onClose, disabled: busy }, t("ui.dingtalk.close"))
      )
    )
  );
}
function RemoveConfirmation5({ account, busy, onConfirm, onCancel }) {
  return h2(
    "div",
    { className: "ddt-confirm dim-confirm", role: "alertdialog" },
    h2("strong", null, t("ui.common.removeConfirm", { name: account.bot.name })),
    h2("p", null, t("ui.whatsapp.thisStopsTheMessageConnectionAnd")),
    h2(
      "div",
      { className: "ddt-actions dim-viewActions" },
      h2(Button14, { onClick: onCancel, disabled: busy }, t("ui.dingtalk.keepBot")),
      h2(
        Button14,
        { kind: "danger", onClick: onConfirm, disabled: busy },
        busy ? t("ui.dingtalk.removing") : t("ui.dingtalk.removeConnection")
      )
    )
  );
}
function WhatsappAccountCard({
  account,
  busy,
  testNotice,
  removing,
  onReconnect,
  onWorkspaceSave,
  onAgentPresetSave,
  onRequestRemove,
  onConfirmRemove,
  onCancelRemove
}) {
  const state = busy === "reconnect" ? "connecting" : account.state;
  const tone = account.connected ? "success" : state === "error" ? "error" : "warning";
  const stateLabel2 = account.connected ? t("ui.dingtalk.connected") : state === "connecting" ? t("ui.dingtalk.connecting2") : t("ui.dingtalk.notConnected");
  const summary = account.error?.message ?? (account.connected ? null : account.health.summary);
  return h2(
    "article",
    { className: "ddt-card dim-botCard", "data-bot-id": account.botId },
    h2(
      "div",
      { className: "ddt-cardBody dim-botCardBody" },
      h2(
        "div",
        { className: "ddt-accountTop dim-botCardTop" },
        h2(
          "div",
          { className: "ddt-accountIdentity dim-botIdentity" },
          h2("div", {
            className: "ddt-avatar dim-botAvatar dwa-avatar",
            "aria-hidden": "true"
          }, h2(WhatsappLogoGlyph, { size: 29 })),
          h2(
            "div",
            { className: "dim-botName" },
            h2("h3", null, account.bot.name),
            h2("p", null, account.bot.idMasked)
          )
        ),
        h2(BotStatusMeta, {
          className: "ddt-health",
          dotClassName: "ddt-dot",
          tone,
          stateLabel: stateLabel2,
          lastCheckedAt: account.health.lastCheckedAt,
          formatCheckedTime: checkedTime6
        })
      ),
      h2(WorkspaceEditor, {
        workspace: account.workspace,
        disabled: Boolean(busy),
        onSave: onWorkspaceSave
      }),
      h2(AgentPresetEditor, {
        agentPreset: account.agentPreset,
        disabled: Boolean(busy),
        onSave: onAgentPresetSave
      }),
      h2(
        "div",
        { className: "ddt-accountFooter dim-cardFooter" },
        h2(
          "div",
          { className: "dim-cardFooterLayout" },
          h2(
            "div",
            { className: "ddt-actions dim-cardActions" },
            h2(Button14, {
              className: "dim-cardAction",
              onClick: onReconnect,
              disabled: Boolean(busy)
            }, busy === "reconnect" ? t("ui.dingtalk.checking") : account.connected ? t("ui.dingtalk.checkConnection") : t("ui.dingtalk.reconnect")),
            h2(Button14, {
              className: "dim-cardAction",
              kind: "danger",
              onClick: onRequestRemove,
              disabled: Boolean(busy)
            }, t("ui.dingtalk.removeConnection2"))
          ),
          summary ? h2("div", { className: "ddt-summary dim-cardSummary" }, summary) : null,
          testNotice ? h2("div", {
            className: "ddt-summary dim-cardFeedback",
            role: "status"
          }, testNotice) : null
        )
      )
    ),
    removing ? h2(RemoveConfirmation5, {
      account,
      busy: busy === "delete",
      onConfirm: onConfirmRemove,
      onCancel: onCancelRemove
    }) : null
  );
}
function WhatsappSettingsTab({ rpcCall }) {
  const [model, setModel] = React19.useState({
    phase: "loading",
    bots: [],
    totals: { configured: 0, connected: 0 },
    error: null,
    agentPresetCatalog: EMPTY_AGENT_PRESET_CATALOG
  });
  const [provision, setProvision] = React19.useState(null);
  const [busy, setBusy] = React19.useState(false);
  const [busyByBot, setBusyByBot] = React19.useState({});
  const [testNoticeByBot, setTestNoticeByBot] = React19.useState({});
  const [removeTarget, setRemoveTarget] = React19.useState(null);
  const [now, setNow] = React19.useState(Date.now());
  const mounted = React19.useRef(true);
  const workspaceFence = useWorkspaceSnapshotFence();
  const addButtonRef = React19.useRef(null);
  React19.useEffect(() => {
    const disposeDingtalk = installDingtalkStyles();
    const disposeWhatsapp = installWhatsappStyles();
    mounted.current = true;
    return () => {
      mounted.current = false;
      disposeWhatsapp();
      disposeDingtalk();
    };
  }, []);
  const invoke = React19.useCallback(async (endpoint, payload = {}, signal) => {
    if (typeof rpcCall !== "function") throw new TypeError(t("ui.common.missingRpc", { channel: CHANNEL_LABEL12 }));
    return unwrapRpcResult9(await rpcCall(endpoint, payload, signal));
  }, [rpcCall]);
  const loadStatus = React19.useCallback(async ({ signal, silent = false, restore = false } = {}) => {
    const workspaceVersion = workspaceFence.beginStatus();
    if (workspaceVersion === null) return void 0;
    if (!silent && mounted.current) setModel((current2) => ({ ...current2, phase: "loading", error: null }));
    try {
      const snapshot = normalizeSnapshot8(await invoke(WHATSAPP_ENDPOINTS.status, {}, signal));
      if (!mounted.current || signal?.aborted || !workspaceFence.canCommitStatus(workspaceVersion)) return void 0;
      setModel({
        phase: "ready",
        bots: snapshot.bots,
        totals: snapshot.totals,
        error: null,
        agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
      });
      if (restore && snapshot.provisioning) setProvision({
        ...snapshot.provisioning,
        durationMs: Math.max(1, snapshot.provisioning.expiresAt - Date.now())
      });
      return snapshot;
    } catch (error) {
      if (error?.name !== "AbortError" && mounted.current && !signal?.aborted && workspaceFence.canCommitStatus(workspaceVersion)) {
        setModel((current2) => ({
          ...current2,
          phase: silent ? current2.phase : "error",
          error: presentError9(error)
        }));
      }
      return void 0;
    }
  }, [invoke, workspaceFence]);
  React19.useEffect(() => {
    const controller = new AbortController();
    void loadStatus({ signal: controller.signal, restore: true });
    return () => controller.abort();
  }, [loadStatus]);
  React19.useEffect(() => {
    if (model.phase !== "ready") return void 0;
    const controller = new AbortController();
    const timer = window.setInterval(
      () => void loadStatus({ signal: controller.signal, silent: true }),
      15e3
    );
    return () => {
      controller.abort();
      window.clearInterval(timer);
    };
  }, [loadStatus, model.phase]);
  React19.useEffect(() => {
    if (!provision || !ACTIVE_STATES3.has(provision.status)) return void 0;
    const timer = window.setInterval(() => mounted.current && setNow(Date.now()), 1e3);
    return () => window.clearInterval(timer);
  }, [provision?.attemptId, provision?.status]);
  const startProvisioning = React19.useCallback(async (replace = false) => {
    setBusy(true);
    try {
      if (replace && provision?.attemptId) {
        await invoke(WHATSAPP_ENDPOINTS.cancelProvisioning, { attemptId: provision.attemptId });
      }
      if (!mounted.current) return;
      setProvision({ status: "starting" });
      const started = normalizeProvisioning6(await invoke(WHATSAPP_ENDPOINTS.beginProvisioning, {}));
      if (!mounted.current) return;
      setNow(Date.now());
      setProvision({ ...started, durationMs: Math.max(1, started.expiresAt - Date.now()) });
    } catch (error) {
      if (mounted.current) setProvision({ status: "failed", error: presentError9(error) });
    } finally {
      if (mounted.current) setBusy(false);
    }
  }, [invoke, provision?.attemptId]);
  const closeProvision = React19.useCallback(async () => {
    setBusy(true);
    try {
      if (provision?.attemptId && ACTIVE_STATES3.has(provision.status)) {
        await invoke(WHATSAPP_ENDPOINTS.cancelProvisioning, { attemptId: provision.attemptId });
      }
      if (mounted.current) setProvision(null);
    } finally {
      if (mounted.current) setBusy(false);
    }
  }, [invoke, provision?.attemptId, provision?.status]);
  React19.useEffect(() => {
    const attemptId = provision?.attemptId;
    if (!attemptId || !ACTIVE_STATES3.has(provision.status)) return void 0;
    const controller = new AbortController();
    let disposed = false;
    let timer;
    const schedule = (delay) => {
      if (disposed || controller.signal.aborted) return;
      timer = window.setTimeout(() => void poll(), delay);
    };
    const poll = async () => {
      try {
        const current2 = normalizeProvisioning6(await invoke(
          WHATSAPP_ENDPOINTS.pollProvisioning,
          { attemptId },
          controller.signal
        ));
        if (disposed || controller.signal.aborted || !mounted.current) return;
        if (current2.status === "connected") {
          setProvision(null);
          await loadStatus({ signal: controller.signal, silent: true });
          return;
        }
        setProvision((previous) => ({
          ...current2,
          durationMs: previous?.durationMs ?? Math.max(1, current2.expiresAt - Date.now())
        }));
        if (ACTIVE_STATES3.has(current2.status)) schedule(current2.pollIntervalMs);
      } catch (error) {
        if (!disposed && !controller.signal.aborted && mounted.current) {
          setProvision({ status: "failed", error: presentError9(error) });
        }
      }
    };
    schedule(provision.pollIntervalMs ?? 1e3);
    return () => {
      disposed = true;
      controller.abort();
      if (timer) window.clearTimeout(timer);
    };
  }, [invoke, loadStatus, provision?.attemptId, provision?.status]);
  const botAction = React19.useCallback(async (account, operation, endpoint, payload) => {
    const snapshotVersion = workspaceFence.beginMutation();
    setBusyByBot((current2) => ({ ...current2, [account.botId]: operation }));
    if (operation === "reconnect") {
      setTestNoticeByBot((current2) => {
        const next = { ...current2 };
        delete next[account.botId];
        return next;
      });
    }
    try {
      const value = await invoke(endpoint, payload);
      const snapshot = normalizeSnapshot8(value);
      if (mounted.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        setModel({
          phase: "ready",
          bots: snapshot.bots,
          totals: snapshot.totals,
          error: null,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
        });
        if (operation === "reconnect") {
          setTestNoticeByBot((current2) => ({
            ...current2,
            [account.botId]: connectionTestNotice3(value)
          }));
        }
      }
    } catch (error) {
      if (operation !== "reconnect") throw error;
      if (mounted.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        setTestNoticeByBot((current2) => ({
          ...current2,
          [account.botId]: t("ui.dingtalk.connectionCheckFailedTryAgainLater")
        }));
      }
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mounted.current) void loadStatus({ silent: true });
      if (mounted.current) setBusyByBot((current2) => {
        const next = { ...current2 };
        delete next[account.botId];
        return next;
      });
    }
  }, [invoke, loadStatus, workspaceFence]);
  const botList = model.bots.length > 0 ? h2(
    "section",
    { className: "dim-listSection" },
    h2(ChannelListHeading, {
      className: "ddt-listHeading",
      title: t("ui.whatsapp.connectedWhatsappAccounts"),
      connectionLabel: "WhatsApp Web"
    }),
    h2("ul", { className: "ddt-list dim-botList" }, model.bots.map((account) => h2("li", { key: account.botId }, h2(WhatsappAccountCard, {
      account,
      busy: busyByBot[account.botId],
      testNotice: testNoticeByBot[account.botId],
      removing: removeTarget === account.botId,
      onReconnect: () => void botAction(
        account,
        "reconnect",
        WHATSAPP_ENDPOINTS.reconnectBot,
        { botId: account.botId, sendTest: true }
      ),
      onWorkspaceSave: (workspace) => botAction(
        account,
        "workspace",
        WHATSAPP_ENDPOINTS.setWorkspace,
        { botId: account.botId, workspace }
      ),
      onAgentPresetSave: (agentPreset) => botAction(
        account,
        "preset",
        WHATSAPP_ENDPOINTS.setAgentPreset,
        { botId: account.botId, agentPreset }
      ),
      onRequestRemove: () => setRemoveTarget(account.botId),
      onCancelRemove: () => setRemoveTarget(null),
      onConfirmRemove: async () => {
        await botAction(account, "delete", WHATSAPP_ENDPOINTS.deleteBot, {
          botId: account.botId,
          confirm: true
        });
        if (mounted.current) setRemoveTarget(null);
      }
    }))))
  ) : null;
  return h2(AgentPresetCatalogContext.Provider, {
    value: model.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
  }, h2(
    "section",
    {
      className: "ddt-page dwa-page dim-channelPage",
      "aria-label": t("ui.common.settings", { channel: CHANNEL_LABEL12 })
    },
    h2(Heading6, {
      totals: model.totals,
      busy,
      onAdd: () => void startProvisioning(false),
      addButtonRef
    }),
    model.phase === "loading" ? h2(LoadingView6) : model.phase === "error" ? h2(
      "div",
      { className: "ddt-card dim-surfaceCard" },
      h2(
        "div",
        { className: "ddt-inlineError dim-inlineError" },
        h2("h3", null, t("ui.common.cannotReadStatus", { channel: CHANNEL_LABEL12 })),
        h2("p", null, model.error?.message),
        h2(Button14, { onClick: () => void loadStatus() }, t("ui.dingtalk.reload"))
      )
    ) : h2(
      React19.Fragment,
      null,
      provision?.status === "pending" ? h2(QrPanel5, {
        provision,
        now,
        busy,
        onRefresh: () => void startProvisioning(true),
        onCancel: () => void closeProvision()
      }) : provision ? h2(ProvisionView3, {
        provision,
        busy,
        onRetry: () => void startProvisioning(true),
        onClose: () => void closeProvision()
      }) : model.bots.length === 0 ? h2(EmptyView6, { busy, onStart: () => void startProvisioning(false) }) : null,
      botList
    )
  ));
}

// plugin-src/client/styles.js
var IM_STYLE_ID = "dsh-im-x-settings";
var CSS11 = String.raw`
.dim-page {
  --dim-blue: var(--dsw-alias-state-business-primary, #3370ff);
  --dim-blue-soft: color-mix(in srgb, var(--dim-blue) 9%, transparent);
  width: 100%;
  max-width: 1080px;
  padding: 2px 0 30px;
  color: var(--dsw-alias-label-primary, #1f2329);
  box-sizing: border-box;
}
.dim-page *, .dim-page *::before, .dim-page *::after { box-sizing: border-box; }
.dim-title { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin: 0 0 18px; }
.dim-brand { min-width: 0; display: flex; flex-direction: column; align-items: flex-start; gap: 1px; }
.dim-brandName { color: var(--dsw-alias-label-primary, #1f2329); font-size: 20px; line-height: 24px; font-weight: 800; letter-spacing: .04em; }
.dim-title p { margin: 0; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; line-height: 18px; font-weight: 500; white-space: nowrap; }
.dim-githubAction { position: relative; display: inline-flex; flex: none; }
.dim-githubLink { min-height: 30px; display: inline-flex; align-items: center; gap: 5px; flex: none; padding: 0 10px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 8px; color: var(--dsw-alias-label-secondary, #646a73); background: var(--dsw-alias-bg-layer-1, #fff); font-size: 12px; line-height: normal; font-weight: 560; text-decoration: none; transition: border-color .15s ease, color .15s ease, background .15s ease; }
.dim-githubLink:hover { border-color: #aeb3bb; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-interactive-bg-hover, #f7f8fa); }
.dim-githubLink:focus-visible { outline: 2px solid color-mix(in srgb, var(--dim-blue) 70%, white); outline-offset: 2px; }
.dim-githubArrow { font-size: 13px; line-height: 1; }
.dim-githubTooltip { position: absolute; right: 0; bottom: calc(100% + 8px); z-index: 20; width: max-content; max-width: min(220px, 80vw); padding: 6px 9px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 7px; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-bg-layer-3, #fff); box-shadow: 0 8px 24px rgb(31 35 41 / 14%); font-size: 11px; line-height: 16px; font-weight: 500; white-space: nowrap; opacity: 0; visibility: hidden; transform: translateY(3px); pointer-events: none; transition: opacity .15s ease, transform .15s ease, visibility .15s ease; }
.dim-githubAction:hover .dim-githubTooltip, .dim-githubAction:focus-within .dim-githubTooltip { opacity: 1; visibility: visible; transform: translateY(0); }
.dim-layout { display: grid; grid-template-columns: 174px 1px minmax(0, 1fr); gap: 24px; align-items: start; }
.dim-rail { max-height: 520px; display: grid; align-content: start; gap: 8px; overflow-y: auto; padding: 1px 4px 1px 1px; scrollbar-width: thin; scrollbar-color: var(--dsw-alias-border-l2, #dfe1e5) transparent; }
.dim-rail::-webkit-scrollbar { width: 4px; }
.dim-rail::-webkit-scrollbar-thumb { border-radius: 99px; background: var(--dsw-alias-border-l2, #dfe1e5); }
.dim-channel { width: 100%; min-height: 48px; display: grid; grid-template-columns: 30px minmax(0, 1fr); align-items: center; gap: 10px; padding: 8px 12px; border: 1px solid var(--dsw-alias-border-l2, #eef0f3); border-radius: 14px; color: inherit; background: var(--dsw-alias-bg-layer-3, #fff); box-shadow: 0 2px 8px rgb(31 35 41 / 3%); font: inherit; text-align: left; cursor: pointer; transition: border-color .16s ease, background .16s ease, box-shadow .16s ease; }
.dim-channel:hover { border-color: color-mix(in srgb, var(--dim-blue) 25%, var(--dsw-alias-border-l2, #eef0f3)); background: color-mix(in srgb, var(--dim-blue) 2%, var(--dsw-alias-bg-layer-3, #fff)); box-shadow: 0 5px 16px rgb(31 35 41 / 5%); }
.dim-channel[aria-selected="true"] { border-color: color-mix(in srgb, var(--dim-blue) 43%, var(--dsw-alias-border-l2, #dfe1e5)); color: var(--dim-blue); background: color-mix(in srgb, var(--dim-blue) 12%, var(--dsw-alias-bg-layer-3, #fff)); box-shadow: 0 3px 12px rgb(51 112 255 / 7%); }
.dim-channel:focus-visible { outline: none; border-color: color-mix(in srgb, var(--dim-blue) 72%, var(--dsw-alias-border-l2, #dfe1e5)); box-shadow: 0 0 0 1px color-mix(in srgb, var(--dim-blue) 24%, transparent) inset, 0 3px 12px rgb(51 112 255 / 7%); }
.dim-logo { width: 30px; height: 30px; display: grid; place-items: center; border-radius: 9px; box-shadow: 0 1px 3px rgb(31 35 41 / 7%); }
.dim-logo svg { display: block; width: 20px; height: 20px; }
.dim-logoWeixin { color: white; background: #07c160; }
.dim-logoWeixin svg { width: 19px; height: 19px; }
.dim-logoFeishu { background: white; border: 1px solid var(--dsw-alias-border-l2, #e5e6eb); }
.dim-logoFeishu svg { width: 28px; height: 28px; }
.dim-logoDingtalk { color: white; background: #1677ff; }
.dim-logoDingtalk svg { width: 24px; height: 24px; }
.dim-logoQq { color: white; background: #1677ff; }
.dim-logoQq svg { width: 21px; height: 21px; }
.dim-logoWecom { background: white; border: 1px solid var(--dsw-alias-border-l2, #e5e6eb); }
.dim-logoWecom svg { width: 22px; height: 22px; }
.dim-logoTelegram { color: white; background: #229ed9; }
.dim-logoTelegram svg { width: 21px; height: 21px; }
.dim-logoOffice { color: white; background: linear-gradient(145deg, #12213f, #3964fe); }
.dim-logoOffice svg { width: 23px; height: 23px; }
.dim-logoDiscord { color: white; background: #5865f2; }
.dim-logoDiscord svg { width: 21px; height: 21px; }
.dim-logoSlack { color: white; background: #4a154b; }
.dim-logoSlack svg { width: 21px; height: 21px; }
.dim-logoWhatsapp { color: white; background: #25d366; }
.dim-logoWhatsapp svg { width: 21px; height: 21px; }
.dim-channelCopy { min-width: 0; display: grid; }
.dim-channelCopy strong { overflow: hidden; color: inherit; font-size: 14px; line-height: 20px; font-weight: 680; text-overflow: ellipsis; white-space: nowrap; }
.dim-channelNote { overflow: hidden; color: var(--dsw-alias-label-tertiary, #8f959e); font-size: 10px; line-height: 13px; font-weight: 500; text-overflow: ellipsis; white-space: nowrap; }
.dim-divider { width: 1px; min-height: 520px; background: var(--dsw-alias-border-l1, #eef0f3); }
.dim-panel { min-width: 0; container-type: inline-size; }
.dim-panel .bxf-page, .dim-panel .dxw-page, .dim-panel .ddt-page, .dim-panel .dqq-page, .dim-panel .dwecom-page, .dim-panel .dsl-page, .dim-panel .dwa-page { width: 100%; max-width: none; padding: 0 0 24px; }
.dim-panel .bxf-heading, .dim-panel .dxw-heading, .dim-panel .ddt-heading { justify-content: flex-end; }
.dim-panel .bxf-headingTools, .dim-panel .dxw-tools, .dim-panel .ddt-tools { width: 100%; display: grid; grid-template-columns: minmax(0, 1fr) max-content; align-items: center; justify-content: stretch; gap: 8px; }
.dim-panel .dim-bindActions { min-width: 0; display: flex; align-items: center; flex-wrap: nowrap; gap: 8px; }
.dim-panel .dim-bindActions > button { min-width: 0; }
.dim-panel .bxf-headingTools .dim-scanButton, .dim-panel .dxw-tools .dim-scanButton, .dim-panel .ddt-tools .dim-scanButton { flex: none; min-height: 34px; display: inline-flex; align-items: center; justify-content: center; justify-self: start; gap: 6px; padding: 0 10px; border: 1px solid #1677ff; border-radius: 8px; color: #fff; background: #1677ff; box-shadow: none; font: inherit; font-size: 13px; font-weight: 560; white-space: nowrap; }
.dim-panel .bxf-headingTools .dim-scanButton:hover:not(:disabled), .dim-panel .dxw-tools .dim-scanButton:hover:not(:disabled), .dim-panel .ddt-tools .dim-scanButton:hover:not(:disabled) { border-color: #0958d9; background: #0958d9; }
.dim-panel .dim-credentialButton { flex: none; min-height: 34px; display: inline-flex; align-items: center; justify-content: center; gap: 6px; padding: 0 10px; border: 1px solid #86909c; border-radius: 8px; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-bg-layer-1, #fff); box-shadow: 0 1px 2px rgb(31 35 41 / 5%); font: inherit; font-size: 13px; font-weight: 560; line-height: normal; white-space: nowrap; }
.dim-panel .dim-actionIcon { width: 15px; height: 15px; flex: 0 0 15px; }
.dim-panel .dim-credentialButton:hover:not(:disabled) { border-color: #4e5969; background: var(--dsw-alias-interactive-bg-hover, #f7f8fa); }
.dim-panel .dim-credentialButton[aria-pressed="true"] { border-color: #4e5969; background: var(--dsw-alias-bg-module-platform, #f2f3f5); box-shadow: inset 0 0 0 1px rgb(78 89 105 / 8%); }
.dim-panel .bxf-headingTools .dim-onlineBadge, .dim-panel .dxw-tools .dim-onlineBadge, .dim-panel .ddt-tools .dim-onlineBadge { min-height: 30px; display: inline-flex; align-items: center; justify-self: end; gap: 0; padding: 0 11px; border: 0; border-radius: 999px; color: var(--dsw-alias-label-secondary, #646a73); background: var(--dsw-alias-bg-module-platform, #f2f3f5); font: inherit; font-size: 12px; font-weight: 400; line-height: normal; white-space: nowrap; }
.dim-panel .dim-channelPage { width: 100%; max-width: none; display: flex; flex-direction: column; gap: 12px; padding: 0 0 24px; color: var(--dsw-alias-label-primary, #1f2329); box-sizing: border-box; }
.dim-panel .dim-surfaceCard { position: relative; overflow: hidden; border: 1px solid var(--dsw-alias-border-l2, #e5e6eb); border-radius: 14px; background: var(--dsw-alias-bg-layer-1, #fff); box-shadow: 0 1px 2px rgb(31 35 41 / 3%); }
.dim-panel .dim-surfaceCard::before { display: none; }
.dim-panel .dim-surfaceBody { padding: 24px; }
.dim-panel .dim-credentialPanel { display: grid; gap: 18px; padding: 20px; }
.dim-panel .dim-credentialTitle { margin: 0; color: var(--dsw-alias-label-primary, #1f2329); font-size: 17px; line-height: 1.35; font-weight: 650; }
.dim-panel .dim-credentialForm { min-width: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px 12px; }
.dim-panel .dim-credentialFormSingle { grid-template-columns: minmax(0, 1fr); }
.dim-panel .dim-credentialField { min-width: 0; display: grid; gap: 7px; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; line-height: normal; font-weight: 560; }
.dim-panel .dim-credentialField input { width: 100%; min-width: 0; height: 38px; padding: 0 11px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 8px; outline: none; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-bg-layer-1, #fff); font: 13px ui-monospace, SFMono-Regular, Menlo, monospace; transition: border-color .16s ease, box-shadow .16s ease; }
.dim-panel .dim-credentialField input:focus { border-color: #4e5969; box-shadow: 0 0 0 3px rgb(78 89 105 / 10%); }
.dim-panel .dim-credentialField input::placeholder { color: var(--dsw-alias-label-tertiary, #8f959e); font-family: inherit; }
.dim-panel .dim-credentialError, .dim-panel .dim-credentialActions { grid-column: 1 / -1; }
.dim-panel .dim-credentialError { margin: 0; color: var(--dsw-alias-state-error-primary, #d54941); font-size: 12px; line-height: 1.5; }
.dim-panel .dim-credentialActions { margin-top: 0; }
.dim-panel .dim-listSection { display: flex; flex-direction: column; gap: 0; }
.dim-panel .dim-listHeading { min-height: 0; display: flex; align-items: center; justify-content: space-between; gap: 16px; margin: 0 0 6px; padding: 0; }
.dim-panel .dim-listHeading h3 { margin: 0; color: var(--dsw-alias-label-primary, #1f2329); font-size: 14px; line-height: normal; font-weight: 650; }
.dim-panel .dim-listTitle { min-width: 0; display: inline-flex; align-items: center; gap: 6px; }
.dim-panel .dim-channelHelp { position: relative; display: inline-flex; flex: none; }
.dim-panel .dim-channelHelpButton { width: 17px; height: 17px; display: grid; place-items: center; padding: 0; border: 1px solid color-mix(in srgb, #1677ff 28%, var(--dsw-alias-border-l2, #dfe1e5)); border-radius: 50%; color: #1677ff; background: var(--dsw-alias-bg-layer-1, #fff); font: inherit; font-size: 11px; line-height: 1; font-weight: 700; cursor: help; transition: border-color .15s ease, color .15s ease, background .15s ease, box-shadow .15s ease; }
.dim-panel .dim-channelHelpButton:hover { border-color: #1677ff; color: #0f5fce; background: color-mix(in srgb, #1677ff 8%, var(--dsw-alias-bg-layer-1, #fff)); }
.dim-panel .dim-channelHelpButton:focus-visible { outline: none; border-color: #1677ff; box-shadow: 0 0 0 3px color-mix(in srgb, #1677ff 16%, transparent); }
.dim-panel .dim-channelTooltip { position: absolute; top: calc(100% + 7px); left: 0; z-index: 30; width: max-content; max-width: min(280px, calc(100vw - 48px)); display: flex; align-items: baseline; gap: 5px; padding: 8px 10px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 8px; color: var(--dsw-alias-label-secondary, #646a73); background: var(--dsw-alias-bg-layer-3, #fff); box-shadow: 0 10px 28px rgb(31 35 41 / 16%); font-size: 11px; line-height: 16px; font-weight: 400; white-space: normal; opacity: 0; visibility: hidden; transform: translateY(-3px); pointer-events: none; transition: opacity .15s ease, transform .15s ease, visibility .15s ease; }
.dim-panel .dim-channelTooltip strong { color: var(--dsw-alias-label-primary, #1f2329); font-weight: 600; white-space: nowrap; }
.dim-panel .dim-channelHelp:hover .dim-channelTooltip, .dim-panel .dim-channelHelp:focus-within .dim-channelTooltip { opacity: 1; visibility: visible; transform: translateY(0); }
.dim-panel .dim-botList { display: grid; gap: 8px; margin: 0; padding: 0; list-style: none; }
.dim-panel .dim-loadingView { padding: 38px; color: var(--dsw-alias-label-secondary, #646a73); text-align: center; }
.dim-panel .dim-loadingView h3 { margin: 0 0 7px; color: var(--dsw-alias-label-primary, #1f2329); font-size: 17px; line-height: normal; font-weight: 650; }
.dim-panel .dim-loadingView p { margin: 0; line-height: 1.6; }
.dim-panel .dim-spinner { width: 24px; height: 24px; margin: 0 auto 13px; border: 3px solid var(--dsw-alias-border-l2, #e6e8eb); border-top-color: #1677ff; border-radius: 50%; animation: dim-spin .8s linear infinite; }
@keyframes dim-spin { to { transform: rotate(360deg); } }
.dim-panel .dim-emptyView { min-height: 230px; display: grid; grid-template-columns: minmax(0, 1fr) 180px; align-items: center; gap: 30px; }
.dim-panel .dim-emptyCopy { min-width: 0; }
.dim-panel .dim-emptyCopy h3 { margin: 8px 0; color: var(--dsw-alias-label-primary, #1f2329); font-size: 18px; line-height: 1.35; font-weight: 650; }
.dim-panel .dim-emptyCopy > p { max-width: 560px; margin: 0; color: var(--dsw-alias-label-secondary, #646a73); line-height: 1.65; }
.dim-panel .dim-emptyBrand { width: 110px; height: 110px; display: grid; place-items: center; justify-self: center; border-radius: 28px; box-shadow: 0 18px 45px rgb(22 119 255 / 18%); }
.dim-panel .dim-stateLabel { display: inline-flex; align-items: center; gap: 8px; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; line-height: normal; font-weight: 600; }
.dim-panel .dim-stateDot { flex: none; width: 8px; height: 8px; border-radius: 50%; background: var(--dsw-alias-label-tertiary, #8f959e); box-shadow: none; }
.dim-panel .dim-stateDot[data-tone="success"] { background: var(--dsw-alias-state-success-primary, #20a162); }
.dim-panel .dim-stateDot[data-tone="warning"] { background: var(--dsw-alias-state-warn-primary, #d97706); }
.dim-panel .dim-stateDot[data-tone="error"] { background: var(--dsw-alias-state-error-primary, #d54941); }
.dim-panel .dim-viewActions { display: flex; align-items: center; flex-wrap: wrap; gap: 10px; margin-top: 20px; }
.dim-panel .dim-viewActions .bxf-button, .dim-panel .dim-viewActions .dxw-button, .dim-panel .dim-viewActions .ddt-button { min-height: 34px; padding: 0 13px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 8px; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-bg-layer-1, #fff); box-shadow: none; font: inherit; font-size: 13px; font-weight: 560; line-height: normal; white-space: nowrap; }
.dim-panel .dim-viewActions .bxf-button[data-kind="primary"], .dim-panel .dim-viewActions .dxw-button[data-kind="primary"], .dim-panel .dim-viewActions .ddt-button[data-kind="primary"] { border-color: #1677ff; color: #fff; background: #1677ff; box-shadow: none; }
.dim-panel .dim-viewActions .bxf-button[data-kind="danger"], .dim-panel .dim-viewActions .dxw-button[data-kind="danger"], .dim-panel .dim-viewActions .ddt-button[data-kind="danger"] { color: var(--dsw-alias-state-error-primary, #d54941); }
.dim-panel .dim-qrLayout { display: grid; grid-template-columns: 300px minmax(0, 1fr); gap: 34px; align-items: start; }
.dim-panel .dim-qrColumn { width: 100%; min-width: 0; display: flex; flex-direction: column; align-items: center; gap: 12px; }
.dim-panel .dim-qrFrame { position: relative; width: min(270px, 100%); height: auto; aspect-ratio: 1; display: grid; place-items: center; overflow: hidden; padding: 10px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 16px; background: #fff; }
.dim-panel .dim-qrFrame::before { content: ""; position: absolute; inset: 7px; z-index: 0; border: 1px solid color-mix(in srgb, #1677ff 16%, var(--dsw-alias-border-l2, #dfe1e5)); border-radius: 12px; pointer-events: none; }
.dim-panel .dim-qrFrame::after { display: none; }
.dim-panel .dim-qrFrame img { position: relative; z-index: 1; width: 100%; height: 100%; display: block; object-fit: contain; }
.dim-panel .dim-qrFallback { position: relative; z-index: 1; display: grid; place-items: center; gap: 8px; color: var(--dsw-alias-label-secondary, #646a73); font-size: 13px; line-height: 1.5; text-align: center; }
.dim-panel .dim-qrExpired { position: absolute; inset: 0; z-index: 2; display: grid; place-items: center; padding: 20px; color: var(--dsw-static-neutral-bluish-1000, #0f1115); background: rgb(255 255 255 / 92%); font-size: 15px; line-height: 1.6; font-weight: 650; text-align: center; white-space: pre-line; backdrop-filter: blur(3px); }
.dim-panel .dim-countdown { width: min(270px, 100%); margin: 0; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; line-height: normal; }
.dim-panel .dim-countdownTop { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 6px; }
.dim-panel .dim-countdownTop strong { color: var(--dsw-alias-label-primary, #1f2329); font-weight: 650; }
.dim-panel .dim-progress { height: 4px; overflow: hidden; margin: 0; border-radius: 99px; background: var(--dsw-alias-bg-module-platform, #eef0f3); }
.dim-panel .dim-progress span { display: block; width: var(--bxf-progress, var(--dxw-progress, var(--ddt-progress, 0%))); height: 100%; border-radius: inherit; background: #1677ff; transition: width .25s linear; }
.dim-panel .dim-qrCopy { min-width: 0; overflow-wrap: anywhere; }
.dim-panel .dim-qrCopy h3 { margin: 9px 0 8px; color: var(--dsw-alias-label-primary, #1f2329); font-size: 18px; line-height: 1.35; font-weight: 650; }
.dim-panel .dim-qrCopy > p { margin: 0; color: var(--dsw-alias-label-secondary, #646a73); line-height: 1.65; }
.dim-panel .dim-steps { margin: 18px 0 16px; padding: 0; list-style: none; counter-reset: dim-step; }
.dim-panel .dim-steps li { position: relative; min-height: 28px; display: flex; align-items: center; padding: 5px 0 5px 36px; color: var(--dsw-alias-label-secondary, #646a73); line-height: 1.5; counter-increment: dim-step; }
.dim-panel .dim-steps li::before { content: counter(dim-step); position: absolute; left: 0; top: 4px; width: 25px; height: 25px; display: grid; place-items: center; border-radius: 8px; color: #4d93f8; background: color-mix(in srgb, #1677ff 16%, var(--dsw-alias-bg-layer-1, #fff)); font-size: 12px; font-weight: 650; }
.dim-panel .dim-specialView { padding: 32px; text-align: center; }
.dim-panel .dim-statusNotice { display: flex; align-items: flex-start; gap: 10px; padding: 13px 15px; border: 1px solid color-mix(in srgb, var(--dsw-alias-state-error-primary, #d54941) 22%, var(--dsw-alias-border-l2, #dfe1e5)); border-radius: 10px; color: var(--dsw-alias-state-error-primary, #d54941); background: color-mix(in srgb, var(--dsw-alias-state-error-primary, #d54941) 8%, var(--dsw-alias-bg-layer-1, #fff)); font-size: 13px; line-height: 1.5; }
.dim-panel .dim-inlineError { display: flex; align-items: flex-start; flex-direction: column; gap: 10px; padding: 22px; color: var(--dsw-alias-state-error-primary, #d54941); background: color-mix(in srgb, var(--dsw-alias-state-error-primary, #d54941) 8%, var(--dsw-alias-bg-layer-1, #fff)); }
.dim-panel .dim-inlineError > div { min-width: 0; }
.dim-panel .dim-inlineError h3 { margin: 0; color: inherit; font-size: 17px; line-height: 1.35; font-weight: 650; }
.dim-panel .dim-inlineError p { margin: 7px 0 0; color: inherit; line-height: 1.6; }
.dim-panel .dim-confirm { padding: 18px 24px; border-top: 1px solid var(--dsw-alias-border-l1, #eef0f3); background: var(--dsw-alias-interactive-bg-hover, #f7f8fa); }
.dim-panel .dim-confirm strong, .dim-panel .dim-confirm h4 { margin: 0; color: var(--dsw-alias-label-primary, #1f2329); font-size: 14px; line-height: 1.4; font-weight: 650; }
.dim-panel .dim-confirm p { margin: 7px 0 0; color: var(--dsw-alias-label-secondary, #646a73); line-height: 1.6; }
.dim-panel .dim-cardFooter { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding-top: 6px; border-top: 1px solid var(--dsw-alias-border-l1, #eef0f3); }
.dim-panel .dim-workspace { min-width: 0; display: grid; grid-template-columns: minmax(0, 1fr) max-content; align-items: center; column-gap: 10px; row-gap: 4px; margin-top: 6px; padding: 6px 10px; border: 1px solid var(--dsw-alias-border-l1, #eef0f3); border-radius: 9px; background: var(--dsw-alias-bg-module-platform, #f7f8fa); }
.dim-panel .dim-workspaceHeader { display: contents; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; line-height: normal; }
.dim-panel .dim-workspaceHeader > span { grid-column: 1; grid-row: 1; white-space: nowrap; }
.dim-panel .dim-workspaceEdit { grid-column: 2; grid-row: 1; padding: 0; border: 0; color: #1677ff; background: transparent; font: inherit; font-weight: 560; white-space: nowrap; cursor: pointer; }
.dim-panel .dim-workspaceEdit:disabled { cursor: not-allowed; opacity: .55; }
.dim-panel .dim-workspacePath { min-width: 0; max-width: 100%; grid-column: 1 / -1; grid-row: 2; display: block; overflow-x: auto; overflow-y: hidden; color: var(--dsw-alias-label-primary, #1f2329); font: 12px/1.4 ui-monospace, SFMono-Regular, Menlo, monospace; white-space: nowrap; }
.dim-panel .dim-preset { min-width: 0; display: grid; grid-template-columns: minmax(0, 1fr) max-content; align-items: center; column-gap: 10px; row-gap: 4px; margin-top: 6px; padding: 6px 10px; border: 1px solid var(--dsw-alias-border-l1, #eef0f3); border-radius: 9px; background: var(--dsw-alias-bg-module-platform, #f7f8fa); }
.dim-panel .dim-presetHeader { position: relative; min-width: 0; grid-column: 1 / -1; grid-row: 1; display: flex; align-items: center; justify-content: space-between; gap: 10px; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; line-height: normal; }
.dim-panel .dim-presetTitle { min-width: 0; display: inline-flex; align-items: center; gap: 5px; white-space: nowrap; }
.dim-panel .dim-presetHelp { display: inline-flex; align-items: center; flex: none; }
.dim-panel .dim-presetHelpButton { width: 17px; height: 17px; display: grid; place-items: center; padding: 0; border: 1px solid color-mix(in srgb, #1677ff 28%, var(--dsw-alias-border-l2, #dfe1e5)); border-radius: 50%; color: #1677ff; background: var(--dsw-alias-bg-layer-1, #fff); font: inherit; font-size: 11px; line-height: 1; font-weight: 700; cursor: help; transition: border-color .15s ease, color .15s ease, background .15s ease, box-shadow .15s ease; }
.dim-panel .dim-presetHelpButton:hover { border-color: #1677ff; color: #0f5fce; background: color-mix(in srgb, #1677ff 8%, var(--dsw-alias-bg-layer-1, #fff)); }
.dim-panel .dim-presetHelpButton:focus-visible { outline: none; border-color: #1677ff; box-shadow: 0 0 0 3px color-mix(in srgb, #1677ff 16%, transparent); }
.dim-panel .dim-presetTooltip { position: absolute; top: calc(100% + 7px); left: 0; z-index: 30; width: min(320px, 100%); padding: 9px 10px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 8px; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-bg-layer-3, #fff); box-shadow: 0 10px 28px rgb(31 35 41 / 16%); font-size: 11px; line-height: 16px; font-weight: 400; overflow-wrap: anywhere; white-space: normal; opacity: 0; visibility: hidden; transform: translateY(-3px); pointer-events: none; transition: opacity .15s ease, transform .15s ease, visibility .15s ease; }
.dim-panel .dim-presetHelp:hover .dim-presetTooltip, .dim-panel .dim-presetHelp:focus-within .dim-presetTooltip { opacity: 1; visibility: visible; transform: translateY(0); }
.dim-panel .dim-presetStatus { grid-column: 2; grid-row: 1; color: var(--dsw-alias-label-tertiary, #8f959e); font-size: 12px; white-space: nowrap; }
.dim-panel .dim-presetSelect { min-width: 0; max-width: 100%; grid-column: 1 / -1; grid-row: 2; height: 30px; padding: 0 8px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 7px; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-bg-layer-1, #fff); font: inherit; font-size: 12px; }
.dim-panel .dim-presetSelect:disabled { cursor: not-allowed; opacity: .55; }
.dim-panel .dim-presetError { grid-column: 1 / -1; grid-row: 3; margin: 0; color: var(--dsw-alias-state-error-primary, #d54941); font-size: 12px; line-height: 1.4; }
.dim-directoryPickerBackdrop { --dim-blue: var(--dsw-alias-state-business-primary, #3370ff); --dim-blue-soft: color-mix(in srgb, var(--dim-blue) 9%, transparent); position: fixed; inset: 0; z-index: 1000; display: grid; place-items: center; padding: 24px; background: rgb(15 17 21 / 42%); backdrop-filter: blur(3px); }
.dim-directoryPickerBackdrop, .dim-directoryPickerBackdrop *, .dim-directoryPickerBackdrop *::before, .dim-directoryPickerBackdrop *::after { box-sizing: border-box; }
.dim-directoryPicker { width: min(720px, 100%); height: min(620px, calc(100vh - 48px)); min-height: 420px; display: grid; grid-template-rows: auto minmax(0, 1fr) auto; overflow: hidden; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 18px; outline: none; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-bg-layer-1, #fff); box-shadow: 0 24px 72px rgb(15 17 21 / 24%); }
.dim-directoryPickerHeader { min-width: 0; padding: 22px 24px 17px; border-bottom: 1px solid var(--dsw-alias-border-l1, #eef0f3); }
.dim-directoryPickerHeader h3 { margin: 0 0 14px; color: var(--dsw-alias-label-primary, #1f2329); font-size: 20px; line-height: 1.35; font-weight: 680; }
.dim-directoryPickerHeader > p { margin: 0; color: var(--dsw-alias-label-secondary, #646a73); font-size: 13px; }
.dim-directoryCrumbs { min-width: 0; display: flex; align-items: center; flex-wrap: wrap; gap: 4px; color: var(--dsw-alias-label-tertiary, #8f959e); }
.dim-directoryCrumbs button { max-width: 210px; overflow: hidden; padding: 3px 5px; border: 0; border-radius: 6px; color: var(--dsw-alias-label-secondary, #646a73); background: transparent; font: inherit; font-size: 12px; line-height: 18px; text-overflow: ellipsis; white-space: nowrap; cursor: pointer; }
.dim-directoryCrumbs button:hover:not(:disabled) { color: var(--dim-blue); background: var(--dim-blue-soft); }
.dim-directoryCrumbs button[aria-current="page"] { color: var(--dsw-alias-label-primary, #1f2329); font-weight: 650; }
.dim-directoryCrumbs button:focus-visible, .dim-directoryList button:focus-visible, .dim-directoryPickerActions button:focus-visible { outline: 2px solid color-mix(in srgb, var(--dim-blue) 65%, white); outline-offset: 1px; }
.dim-directoryCrumbSeparator { flex: none; font-size: 12px; }
.dim-directoryPickerBody { min-height: 0; overflow-y: auto; padding: 14px 16px; scrollbar-width: thin; scrollbar-color: var(--dsw-alias-border-l2, #dfe1e5) transparent; }
.dim-directoryList { display: grid; gap: 3px; margin: 0; padding: 0; list-style: none; }
.dim-directoryList button { width: 100%; min-height: 46px; display: grid; grid-template-columns: 24px minmax(0, 1fr) 18px; align-items: center; gap: 10px; padding: 7px 11px; border: 0; border-radius: 9px; color: var(--dsw-alias-label-primary, #1f2329); background: transparent; font: inherit; text-align: left; cursor: pointer; }
.dim-directoryList button:hover:not(:disabled) { background: var(--dsw-alias-interactive-bg-hover, #f7f8fa); }
.dim-directoryList button:disabled, .dim-directoryCrumbs button:disabled { cursor: wait; opacity: .55; }
.dim-directoryFolder { width: 24px; height: 24px; display: grid; place-items: center; color: var(--dsw-alias-label-secondary, #646a73); }
.dim-directoryFolder svg { width: 22px; height: 22px; }
.dim-directoryName { min-width: 0; overflow: hidden; font-size: 14px; line-height: 20px; text-overflow: ellipsis; white-space: nowrap; }
.dim-directoryChevron { width: 18px; height: 18px; display: grid; place-items: center; color: var(--dsw-alias-label-tertiary, #8f959e); }
.dim-directoryChevron svg { width: 17px; height: 17px; }
.dim-directoryPickerState { min-height: 210px; display: grid; place-content: center; justify-items: center; gap: 10px; color: var(--dsw-alias-label-secondary, #646a73); text-align: center; }
.dim-directoryPickerState p { margin: 0; font-size: 13px; line-height: 1.6; }
.dim-directoryPickerSpinner { width: 24px; height: 24px; border: 3px solid var(--dsw-alias-border-l2, #e6e8eb); border-top-color: var(--dim-blue); border-radius: 50%; animation: dim-spin .8s linear infinite; }
.dim-directoryPickerError { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 8px 0 0; padding: 10px 12px; border: 1px solid color-mix(in srgb, var(--dsw-alias-state-error-primary, #d54941) 22%, var(--dsw-alias-border-l2, #dfe1e5)); border-radius: 8px; color: var(--dsw-alias-state-error-primary, #d54941); background: color-mix(in srgb, var(--dsw-alias-state-error-primary, #d54941) 7%, var(--dsw-alias-bg-layer-1, #fff)); font-size: 12px; line-height: 1.5; }
.dim-directoryPickerError button { flex: none; padding: 4px 8px; border: 0; border-radius: 6px; color: inherit; background: transparent; font: inherit; font-weight: 650; cursor: pointer; }
.dim-directoryPickerTruncated { margin: 10px 4px 0; color: var(--dsw-alias-label-tertiary, #8f959e); font-size: 12px; line-height: 1.5; }
.dim-directoryPickerFooter { display: grid; grid-template-columns: max-content minmax(0, 1fr) max-content; align-items: center; gap: 14px; padding: 16px 20px; border-top: 1px solid var(--dsw-alias-border-l1, #eef0f3); background: var(--dsw-alias-bg-layer-1, #fff); }
.dim-directoryHidden { display: inline-flex; align-items: center; gap: 7px; padding: 2px 0; border: 0; color: var(--dsw-alias-label-secondary, #646a73); background: transparent; font: inherit; font-size: 12px; white-space: nowrap; cursor: pointer; }
.dim-directoryHidden:focus-visible { outline: 2px solid color-mix(in srgb, var(--dim-blue) 65%, white); outline-offset: 2px; }
.dim-directoryHidden:disabled { cursor: not-allowed; opacity: .52; }
.dim-directoryHiddenBox { position: relative; width: 15px; height: 15px; flex: 0 0 15px; border: 1px solid var(--dsw-alias-border-l2, #c9cdd4); border-radius: 4px; background: var(--dsw-alias-bg-layer-1, #fff); }
.dim-directoryHidden[aria-pressed="true"] .dim-directoryHiddenBox { border-color: var(--dim-blue); background: var(--dim-blue); }
.dim-directoryHidden[aria-pressed="true"] .dim-directoryHiddenBox::after { content: ""; position: absolute; left: 4px; top: 1px; width: 4px; height: 8px; border: solid white; border-width: 0 2px 2px 0; transform: rotate(45deg); }
.dim-directoryPickerNotice { min-width: 0; margin: 0; color: var(--dsw-alias-label-tertiary, #8f959e); font-size: 11px; line-height: 1.45; text-align: right; }
.dim-directoryPickerActions { display: flex; gap: 8px; }
.dim-directoryPickerActions button { min-height: 36px; padding: 0 14px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 8px; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-bg-layer-1, #fff); font: inherit; font-size: 13px; font-weight: 560; white-space: nowrap; cursor: pointer; }
.dim-directoryPickerActions .dim-directoryPickerPrimary { border-color: var(--dim-blue); color: #fff; background: var(--dim-blue); }
.dim-directoryPickerActions button:hover:not(:disabled) { filter: brightness(.97); }
.dim-directoryPickerActions button:disabled { cursor: not-allowed; opacity: .52; }
.dim-panel .dim-cardSummary { min-width: 0; color: var(--dsw-alias-label-secondary, #646a73); font: inherit; font-size: 12px; font-weight: 400; line-height: normal; }
.dim-panel .dim-cardFooterLayout { min-width: 0; width: 100%; display: flex; flex-direction: column; align-items: stretch; gap: 9px; }
.dim-panel .dim-cardFooterLayout > .dim-cardActions { align-self: flex-end; }
.dim-panel .dim-cardFeedback { width: 100%; padding: 8px 10px; border-radius: 8px; color: var(--dsw-alias-label-secondary, #646a73); background: var(--dsw-alias-bg-module-platform, #f7f8fa); font: inherit; font-size: 12px; font-weight: 400; line-height: 18px; overflow-wrap: anywhere; white-space: normal; }
.dim-panel .dim-cardActions { flex: none; display: flex; align-items: center; flex-wrap: nowrap; gap: 8px; margin: 0 0 0 auto; }
.dim-panel .dim-cardActions .dim-cardAction { flex: none; min-height: 32px; padding: 0 11px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 8px; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-bg-layer-1, #fff); font: inherit; font-size: 13px; font-weight: 560; line-height: normal; white-space: nowrap; }
.dim-panel .dim-cardActions .dim-cardAction:hover:not(:disabled) { border-color: #aeb3bb; background: var(--dsw-alias-interactive-bg-hover, #f7f8fa); }
.dim-panel .dim-cardActions .dim-cardAction[data-kind="danger"] { color: var(--dsw-alias-state-error-primary, #d54941); }
.dim-panel .dim-botCard { position: relative; overflow: hidden; border: 1px solid var(--dsw-alias-border-l2, #e5e6eb); border-radius: 14px; background: var(--dsw-alias-bg-layer-1, #fff); box-shadow: 0 1px 2px rgb(31 35 41 / 3%); }
.dim-panel .dim-botCard::before { display: none; }
.dim-panel .dim-botCardBody { position: relative; padding: 12px; }
.dim-panel .dim-botCardTop { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
.dim-panel .dim-botIdentity { min-width: 0; display: flex; align-items: center; gap: 10px; }
.dim-panel .dim-botAvatar { flex: none; width: 38px; height: 38px; display: grid; place-items: center; overflow: hidden; border-radius: 11px; box-shadow: none; }
.dim-panel .dim-botAvatar svg { width: 27px; height: 27px; }
.dim-panel .dim-botName { min-width: 0; }
.dim-panel .dim-botName h3 { overflow: hidden; margin: 0; color: var(--dsw-alias-label-primary, #1f2329); font-size: 15px; font-weight: 650; line-height: normal; text-overflow: ellipsis; white-space: nowrap; }
.dim-panel .dim-botName p { overflow: hidden; margin: 4px 0 0; color: var(--dsw-alias-label-secondary, #646a73); font: 12px ui-monospace, SFMono-Regular, monospace; line-height: normal; text-overflow: ellipsis; white-space: nowrap; }
.dim-panel .dim-botHealthGroup { flex: none; display: grid; justify-items: end; gap: 5px; }
.dim-panel .dim-botCard .dim-botHealth { flex: none; min-height: 0; display: inline-flex; align-items: center; gap: 7px; padding: 0; border: 0; border-radius: 0; color: var(--dsw-alias-label-secondary, #646a73); background: transparent; font: inherit; font-size: 12px; font-weight: 400; line-height: normal; white-space: nowrap; }
.dim-panel .dim-lastChecked { display: inline-flex; align-items: baseline; gap: 4px; color: var(--dsw-alias-label-tertiary, #8f959e); font: inherit; font-size: 11px; font-weight: 400; line-height: normal; white-space: nowrap; }
.dim-panel .dim-botCard .dim-healthDot { flex: none; width: 8px; height: 8px; border-radius: 50%; background: #aeb3bb; box-shadow: none; }
.dim-panel .dim-botCard .dim-healthDot[data-tone="success"] { background: var(--dsw-alias-state-success-primary, #20a162); box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsw-alias-state-success-primary, #20a162) 14%, transparent); }
.dim-panel .dim-botCard .dim-healthDot[data-tone="warning"] { background: var(--dsw-alias-state-warn-primary, #d97706); }
.dim-panel .dim-botCard .dim-healthDot[data-tone="error"] { background: var(--dsw-alias-state-error-primary, #d54941); }
.dim-panel .dim-botCard .dim-cardFooter { margin-top: 0; }
.dim-panel .ddt-headingCopy { display: none; }
.dim-panel .ddt-qrFrame, .dim-panel .ddt-countdown { width: min(270px, 100%); }
@container (max-width: 680px) {
  .dim-panel .bxf-headingTools, .dim-panel .dxw-tools, .dim-panel .ddt-tools { gap: 6px; }
  .dim-panel .dim-bindActions { gap: 6px; }
  .dim-panel .bxf-headingTools .dim-scanButton, .dim-panel .dxw-tools .dim-scanButton, .dim-panel .ddt-tools .dim-scanButton, .dim-panel .dim-credentialButton { gap: 5px; padding-inline: 8px; font-size: 12px; }
  .dim-panel .dim-actionIcon { width: 13px; height: 13px; flex-basis: 13px; }
  .dim-panel .bxf-headingTools .dim-onlineBadge, .dim-panel .dxw-tools .dim-onlineBadge, .dim-panel .ddt-tools .dim-onlineBadge { padding-inline: 8px; font-size: 11px; }
  .dim-panel .dim-credentialForm { grid-template-columns: minmax(0, 1fr); }
  .dim-panel .dim-credentialError, .dim-panel .dim-credentialActions { grid-column: auto; }
  .dim-panel .dim-emptyView { min-height: 0; grid-template-columns: minmax(0, 1fr); }
  .dim-panel .dim-emptyBrand { display: none; }
  .dim-panel .dim-qrLayout { grid-template-columns: minmax(0, 1fr); justify-items: center; gap: 24px; }
  .dim-panel .dim-qrColumn { width: 100%; min-width: 0; }
  .dim-panel .dim-qrCopy { width: 100%; min-width: 0; overflow-wrap: anywhere; }
  .dim-panel .ddt-qrLayout { grid-template-columns: minmax(0, 1fr); justify-items: center; gap: 24px; }
  .dim-panel .ddt-qrColumn { width: 100%; min-width: 0; }
  .dim-panel .ddt-qrCopy { width: 100%; min-width: 0; overflow-wrap: anywhere; }
}
@media (max-width: 840px) {
  .dim-title { align-items: flex-start; }
  .dim-layout { grid-template-columns: minmax(0, 1fr); gap: 18px; }
  .dim-rail { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .dim-divider { display: none; }
  .dim-rail { max-height: none; overflow: visible; padding-right: 1px; }
  .dim-channel { min-height: 48px; }
}
@media (max-width: 720px) {
  .dim-panel .dim-botCardTop { flex-direction: column; align-items: stretch; }
  .dim-panel .dim-botHealthGroup { justify-items: start; }
}
@media (max-width: 560px) {
  .dim-title { flex-direction: column; gap: 10px; }
  .dim-title p { white-space: normal; }
  .dim-githubTooltip { right: auto; left: 0; }
  .dim-rail { grid-template-columns: minmax(0, 1fr); }
  .dim-directoryPickerBackdrop { padding: 10px; }
  .dim-directoryPicker { height: calc(100vh - 20px); min-height: 0; border-radius: 14px; }
  .dim-directoryPickerHeader { padding: 18px 17px 14px; }
  .dim-directoryPickerHeader h3 { font-size: 18px; }
  .dim-directoryPickerBody { padding: 10px; }
  .dim-directoryPickerFooter { grid-template-columns: minmax(0, 1fr) max-content; gap: 10px; padding: 13px 14px; }
  .dim-directoryPickerNotice { grid-column: 1 / -1; grid-row: 1; text-align: left; }
}
@media (prefers-reduced-motion: reduce) {
  .dim-page * { transition-duration: .01ms !important; }
  .dim-directoryPickerSpinner { animation-duration: 1.8s; }
}
`;
function installImStyles() {
  if (typeof document === "undefined") return () => {
  };
  const existing = document.querySelector(`style[data-plugin-css="${IM_STYLE_ID}"]`);
  if (existing) return () => {
  };
  const style = document.createElement("style");
  style.dataset.plugin = "@xmanrui/dsh-im";
  style.dataset.pluginCss = IM_STYLE_ID;
  style.textContent = CSS11;
  document.head.appendChild(style);
  return () => style.remove();
}

// plugin-src/client/index.js
var name = "im-settings";
var inject = ["slots", "connection", "locale", "workspaces"];
var CHANNELS = Object.freeze([
  { id: "weixin", label: t("ui.weixin.wechat") },
  { id: "feishu", label: t("ui.feishu.feishu") },
  { id: "dingtalk", label: t("ui.dingtalk.dingtalk") },
  { id: "wecom", label: t("ui.wecom.wecom") },
  { id: "qq", label: "QQ" },
  { id: "slack", label: "Slack" },
  { id: "telegram", label: "Telegram" },
  { id: "discord", label: "Discord" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "office", label: "AI Office", note: t("ui.index.experimental") }
]);
function WeixinLogo() {
  return h2(
    "span",
    { className: "dim-logo dim-logoWeixin", "aria-hidden": "true" },
    h2(WeixinLogoGlyph)
  );
}
function FeishuLogo() {
  return h2(
    "span",
    { className: "dim-logo dim-logoFeishu", "aria-hidden": "true" },
    h2(FeishuLogoGlyph)
  );
}
function DingtalkLogo() {
  return h2(
    "span",
    { className: "dim-logo dim-logoDingtalk", "aria-hidden": "true" },
    h2(DingtalkLogoGlyph)
  );
}
function QqLogo() {
  return h2("span", { className: "dim-logo dim-logoQq", "aria-hidden": "true" }, h2(QqLogoGlyph));
}
function WecomLogo() {
  return h2("span", { className: "dim-logo dim-logoWecom", "aria-hidden": "true" }, h2(WecomLogoGlyph));
}
function TelegramLogo() {
  return h2(
    "span",
    { className: "dim-logo dim-logoTelegram", "aria-hidden": "true" },
    h2(TelegramLogoGlyph)
  );
}
function SlackLogo() {
  return h2(
    "span",
    { className: "dim-logo dim-logoSlack", "aria-hidden": "true" },
    h2(SlackLogoGlyph)
  );
}
function DiscordLogo() {
  return h2(
    "span",
    { className: "dim-logo dim-logoDiscord", "aria-hidden": "true" },
    h2(DiscordLogoGlyph)
  );
}
function WhatsappLogo() {
  return h2(
    "span",
    { className: "dim-logo dim-logoWhatsapp", "aria-hidden": "true" },
    h2(WhatsappLogoGlyph)
  );
}
function OfficeLogo() {
  return h2(
    "span",
    { className: "dim-logo dim-logoOffice", "aria-hidden": "true" },
    h2(OfficeLogoGlyph)
  );
}
function ChannelLogo({ channel: channel4 }) {
  if (channel4 === "weixin") return h2(WeixinLogo);
  if (channel4 === "feishu") return h2(FeishuLogo);
  if (channel4 === "dingtalk") return h2(DingtalkLogo);
  if (channel4 === "wecom") return h2(WecomLogo);
  if (channel4 === "qq") return h2(QqLogo);
  if (channel4 === "slack") return h2(SlackLogo);
  if (channel4 === "telegram") return h2(TelegramLogo);
  if (channel4 === "discord") return h2(DiscordLogo);
  if (channel4 === "whatsapp") return h2(WhatsappLogo);
  return h2(OfficeLogo);
}
function IMSettingsTab({
  dingtalkRpcCall,
  discordRpcCall,
  feishuRpcCall,
  qqRpcCall,
  slackRpcCall,
  telegramRpcCall,
  wecomRpcCall,
  weixinRpcCall,
  whatsappRpcCall,
  officeRpcCall,
  workspaceDirectoryPicker
}) {
  const [selected, setSelected] = React20.useState("weixin");
  const githubTooltipId = React20.useId();
  const active = CHANNELS.find((channel4) => channel4.id === selected) ?? CHANNELS[0];
  return h2(
    WorkspaceDirectoryPickerContext.Provider,
    { value: workspaceDirectoryPicker },
    h2(
      "section",
      { className: "dim-page", "aria-label": t("ui.index.imBotSettings") },
      h2(
        "header",
        { className: "dim-title" },
        h2(
          "div",
          { className: "dim-brand" },
          h2("strong", { className: "dim-brandName" }, "DSH-IM"),
          h2("p", null, t("ui.index.deepseekHarnessAlwaysWithinReach"))
        ),
        h2(
          "span",
          { className: "dim-githubAction" },
          h2(
            "a",
            {
              className: "dim-githubLink",
              href: "https://github.com/zaakirio/dsh-im-x",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "dsh-im-x GitHub",
              "aria-describedby": githubTooltipId
            },
            h2("span", null, "GitHub"),
            h2("span", { className: "dim-githubArrow", "aria-hidden": "true" }, "\u2197")
          ),
          h2("span", {
            id: githubTooltipId,
            className: "dim-githubTooltip",
            role: "tooltip"
          }, t("ui.index.helpFeedbackOpenGithub"))
        )
      ),
      h2(
        "div",
        { className: "dim-layout" },
        h2(
          "nav",
          { className: "dim-rail", role: "tablist", "aria-label": t("ui.index.imChannels") },
          CHANNELS.map((channel4) => h2(
            "button",
            {
              key: channel4.id,
              type: "button",
              role: "tab",
              id: `dim-tab-${channel4.id}`,
              className: "dim-channel",
              "aria-selected": channel4.id === active.id,
              "aria-controls": `dim-panel-${channel4.id}`,
              onClick: () => setSelected(channel4.id)
            },
            h2(ChannelLogo, { channel: channel4.id }),
            h2(
              "span",
              { className: "dim-channelCopy" },
              h2("strong", null, channel4.label),
              channel4.note ? h2("small", { className: "dim-channelNote" }, channel4.note) : null
            )
          ))
        ),
        h2("div", { className: "dim-divider", "aria-hidden": "true" }),
        h2("main", {
          className: "dim-panel",
          role: "tabpanel",
          id: `dim-panel-${active.id}`,
          "aria-labelledby": `dim-tab-${active.id}`
        }, active.id === "weixin" ? h2(WeixinSettingsTab, { rpcCall: weixinRpcCall }) : active.id === "feishu" ? h2(FeishuSettingsTab, { rpcCall: feishuRpcCall }) : active.id === "dingtalk" ? h2(DingtalkSettingsTab, { rpcCall: dingtalkRpcCall }) : active.id === "wecom" ? h2(WecomSettingsTab, { rpcCall: wecomRpcCall }) : active.id === "qq" ? h2(QqSettingsTab, { rpcCall: qqRpcCall }) : active.id === "slack" ? h2(SlackSettingsTab, { rpcCall: slackRpcCall }) : active.id === "telegram" ? h2(TelegramSettingsTab, { rpcCall: telegramRpcCall }) : active.id === "discord" ? h2(DiscordSettingsTab, { rpcCall: discordRpcCall }) : active.id === "whatsapp" ? h2(WhatsappSettingsTab, { rpcCall: whatsappRpcCall }) : h2(OfficeSettingsTab, { rpcCall: officeRpcCall }))
      )
    )
  );
}
function apply(ctx) {
  ctx.effect(
    () => ctx.locale.register(IM_LOCALE_NAMESPACE, { zh, en }),
    "im-settings: bilingual dictionaries"
  );
  setImTranslator(ctx.locale.bind(IM_LOCALE_NAMESPACE));
  ctx.effect(() => {
    const disposers = [
      installFeishuStyles(),
      installWeixinStyles(),
      installWecomStyles(),
      installQqStyles(),
      installSlackStyles(),
      installTelegramStyles(),
      installDiscordStyles(),
      installWhatsappStyles(),
      installOfficeStyles(),
      installImStyles()
    ];
    return () => {
      for (const dispose of disposers.reverse()) dispose();
    };
  }, "im-settings: install combined channel styles");
  const feishuRpcCall = (endpoint, payload, signal) => ctx.connection.rpc.call(FEISHU_RPC_CHANNEL, endpoint, payload, signal);
  const weixinRpcCall = (endpoint, payload, signal) => ctx.connection.rpc.call(WEIXIN_RPC_CHANNEL, endpoint, payload, signal);
  const dingtalkRpcCall = (endpoint, payload, signal) => ctx.connection.rpc.call(DINGTALK_RPC_CHANNEL, endpoint, payload, signal);
  const qqRpcCall = (endpoint, payload, signal) => ctx.connection.rpc.call(QQ_RPC_CHANNEL, endpoint, payload, signal);
  const wecomRpcCall = (endpoint, payload, signal) => ctx.connection.rpc.call(WECOM_RPC_CHANNEL, endpoint, payload, signal);
  const telegramRpcCall = (endpoint, payload, signal) => ctx.connection.rpc.call(TELEGRAM_RPC_CHANNEL, endpoint, payload, signal);
  const discordRpcCall = (endpoint, payload, signal) => ctx.connection.rpc.call(DISCORD_RPC_CHANNEL, endpoint, payload, signal);
  const whatsappRpcCall = (endpoint, payload, signal) => ctx.connection.rpc.call(WHATSAPP_RPC_CHANNEL, endpoint, payload, signal);
  const slackRpcCall = (endpoint, payload, signal) => ctx.connection.rpc.call(SLACK_RPC_CHANNEL, endpoint, payload, signal);
  const officeRpcCall = (endpoint, payload, signal) => ctx.connection.rpc.call(OFFICE_RPC_CHANNEL, endpoint, payload, signal);
  const workspaceDirectoryPicker = Object.freeze({
    listDirectory: (path, signal) => ctx.workspaces.listDirectory(path, signal),
    pickDirectory: () => ctx.workspaces.pickDirectory()
  });
  ctx.slots.inject("settings.plugins.tab", () => ctx.slots.register({
    name: "settings.plugins.tab",
    id: "im",
    order: 20,
    label: () => t("ui.index.imBots"),
    locale: IM_LOCALE_NAMESPACE,
    inject: () => ({
      dingtalkRpcCall,
      discordRpcCall,
      feishuRpcCall,
      qqRpcCall,
      slackRpcCall,
      telegramRpcCall,
      wecomRpcCall,
      weixinRpcCall,
      whatsappRpcCall,
      officeRpcCall,
      workspaceDirectoryPicker
    })
  }, IMSettingsTab));
}

    return module.exports;
  }
});
