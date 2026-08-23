# dsh-im-x

This context describes how dsh-im-x connects user intent in different instant-messaging platforms to the work DeepSeek Harness performs.
The point of the project is not the number of channels; it is that a user can complete a Harness task naturally and reliably from wherever they already are, in whichever language they read.

## Language

**Semantic Message**:
One message that fully expresses a user's input and its context — content, quoting, and conversation position — without depending on any particular IM platform.
_Avoid_: unified text, generic message body

**Semantic Interaction**:
A stateful action Harness is waiting for the user to complete, such as an approval, a single choice, a multiple choice, or supplementary input.
_Avoid_: button event, command reply

**Artifact**:
A file or piece of media a Harness task reads or produces that must travel safely between Harness and the user's channel.
_Avoid_: attachment path, download URL

**Artifact Provenance**:
Verifiable evidence that an existing or newly created outbound artifact was explicitly registered by the current Harness session or turn through a trusted tool result. It proves delivery intent and routing; it does not require the file to have been created by the current turn.
_Avoid_: a path in an answer, the newest file

**Conversation Route**:
The conversation position that uniquely identifies the bot, chat, and topic or thread a message belongs to.
_Avoid_: chat ID, session key

**Channel Capability**:
The native input, interaction, or presentation a specific bot instance can reliably provide under its current permissions and runtime conditions.
_Avoid_: platform support, SDK feature

**Native Presentation**:
The way a channel presents the same semantics according to its own interaction conventions — cards, buttons, message edits, streamed replies, or typing state.
_Avoid_: special handling, channel exception

**Presentation Intent**:
The content structure and formatting meaning a Harness output must retain before it enters a channel: plain text, Markdown, progress, interaction, or artifact. It does not name any platform's widget or syntax.
_Avoid_: answer string, Telegram rich message, unified rich text

**Native Channel Action**:
A platform-specific operation a channel performs to carry one semantic task, such as creating a Discord thread, updating a Feishu card, or uploading an attachment. It belongs to the channel boundary and does not require other channels to offer the same operation.
_Avoid_: common command, generic channel method

**Selection Presentation**:
How a single or multiple choice is actually realised in a channel: a native control, a composed interaction, or an explicit text fallback. Any capability claim must state both the presentation form and the scope that has been verified.
_Avoid_: supports multi-select, when capability allows, unified picker

**Explicit Fallback**:
The alternative experience used when a channel lacks a required capability, which preserves the business semantics and tells the user what the limitation is.
_Avoid_: compatibility mode, silent ignore

**Capability Slice**:
The end-to-end unit of work around one complete piece of user value, from shared semantics and security policy through to each channel's native presentation and acceptance.
_Avoid_: channel task, interface change

**Reference Channel**:
The channel within a capability slice that first completes a real client round trip, and whose native mechanisms best verify that semantics and experience. A reference channel is chosen per capability; it is not a permanent primary channel.
_Avoid_: primary channel, default channel

**User Value Priority**:
The order in which capability slices are built, decided by core task completion, semantic accuracy, mobile interaction cost, and safety and reliability.
_Avoid_: ordering by feature count, ordering by channel user count

**Channel Fit**:
How well a semantic capability matches a channel's native mechanisms, permission coverage, interface stability, and testability. Used to choose the reference channel and to decide between a native implementation and an explicit fallback.
_Avoid_: channel ranking, platform sophistication

**Channel Behavior Baseline**:
The verifiable set of task flows, controls, state semantics, and native experience a channel already provides to users before a semantic migration begins. A later implementation may improve on it, but must not make any of it disappear or regress.
_Avoid_: current code, old implementation, current tests

**Parity Cutover**:
A new semantic path takes sole ownership of a message or capability only after it covers the channel behavior baseline, passes regression, and has a rollback.
_Avoid_: direct replacement, rewrite finished

**Message Catalogue**:
The single keyed source of every user-facing string, with English as the source of truth and one module per locale. Channel code names a key; it never contains the sentence.
_Avoid_: translation dictionary, string table, i18n helper

**Conversation Locale**:
The language one conversation is rendered in, resolved from a per-chat override, then the bot's configured locale, then the locale the channel reports for the sender. It is a property of the conversation, not of the process.
_Avoid_: current language, global language, user language
