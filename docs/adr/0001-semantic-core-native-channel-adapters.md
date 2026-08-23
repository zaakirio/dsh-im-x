---
status: accepted
date: 2026-08-21
updated: 2026-08-23
---

# A shared semantic core with native channel adapters

dsh-im-x follows the architecture and product strategy inherited from dsh-im: "build shared semantics horizontally and polish channels one at a time vertically; sequence by user value and land by channel characteristics."
The core layer expresses business semantics — messages, quoting, sessions, interactions, artifacts, and progress. Channel adapters present those natively according to what a bot instance can actually do, and fall back explicitly when it cannot.
Migration is incremental wrapping and parity cutover: existing channel behavior is the floor, and a new path may improve the experience but must not trade an existing capability away by deleting, degrading, or relocating it.
The project no longer treats `content + images + sendText` as a long-term public boundary, and does not duplicate Harness business flows per channel.

## Alternatives considered

- **Lowest-common-denominator model**: fast to extend, but continually loses high-value capabilities such as buttons, quoting, files, voice, threads, and rich presentation.
- **A separate implementation per channel**: gives precise control of one experience, but duplicates session, approval, security, and error-handling logic and cannot stay consistent over time.
- **Ordering by channel user count**: looks like an easy way to derive a development order, but a local open-source project has no reliable or necessary cross-user statistics, and existing usage does not represent unmet user value. It leaves long-tail channels and high-value capabilities unverified.
- **Replacing the old bridge layer outright**: converges the code faster, but tends to change command, session, permission, queueing, streaming, and error-handling behavior that already works, and makes regressions hard to locate and roll back.
- **Shared semantics plus native adaptation**: common business rules are implemented once and channel differences stay inside the boundary. It requires maintaining a capability matrix and an adapter contract, but best fits the product's differentiation goal.

## Consequences

- A new capability must define its user semantics, fallback rules, and acceptance criteria before any channel SDK work begins.
- Real issues are the entry point for capability slices. Each issue lands only the minimum shared semantics its round trip needs, together with the native implementation, fallback, and acceptance for the channels involved. It neither builds an entire unified framework up front nor leaves temporary patches outside the shared semantics.
- Capability slices are ordered by the value of the user's core task, not by channel user count.
- Each capability picks the best-fitting platform as its reference channel, to validate the shared semantics and state machine. Other channels then decide between a native implementation and an explicit fallback based on their own mechanisms, permissions, and stability.
- Channel capability is determined dynamically per bot instance and permission set; support is never claimed from a platform name alone.
- An outbound artifact must be explicitly registered by a trusted tool and bound to a session and turn. Existing files and newly created files have the same semantics; the current turn need not have created the file. Paths in an assistant's answer, local Markdown links, and workspace scan results must never trigger a file send on their own.
- Every channel must first have a traceable behavior baseline. A new path takes over production messages only once it is semantically equivalent or better, passes full regression, and can be rolled back.
- Explicit fallback applies only to genuinely absent new capabilities or transient runtime failures. It is never a reason to withdraw an existing native capability during migration.
- Duplicate implementations may be deleted once a parity cutover is stable, but user-observable features, control commands, state semantics, and security boundaries may not.
- Adding more channels is not the primary goal until the high-priority capabilities are done.
- The shared bridge, the nine channels' command and session capabilities, Feishu's card-specific capabilities, and the AI Office Connector are all migration assets. A new semantic path may only wrap them incrementally and cut over at parity; a mature implementation must not be treated as an early prototype to replace wholesale.

## Language

Every user-facing string is resolved from a keyed message catalogue, with English as the source of truth and one module per locale (`src/i18n/`). Channel code names a key and never contains the sentence.
This is a boundary, not a convenience: a conversation's language is a property of the conversation, resolved from a per-chat override, then the bot's configured locale, then the locale the channel reports for the sender.
Logic must not key off rendered copy. Filtering, matching, or branching on a translated string breaks silently in every language it was not written for, so decisions use structured data — an update's kind, an error's code, a catalogue key — instead.
