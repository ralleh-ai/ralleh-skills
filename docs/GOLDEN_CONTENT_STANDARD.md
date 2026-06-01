# Golden Content Standard

## Purpose

This repo contains only golden bot guidance: stable, reviewed instructions that are safe to point another bot at. It is not a scratchpad, planning repo, prompt dump, temp workspace, or experiment log.

## Golden means

Every checked-in instruction must be:

- Purposeful: it has a clear job and tells the bot when to use it.
- Bounded: it says what not to do and when to stop or ask.
- Verifiable: it includes the check needed before claiming success.
- Non-destructive by default: dangerous actions require explicit user approval.
- Non-secret: no credentials, tokens, private keys, cookies, raw customer data, or `.env` values.
- Navigable: it points to the next relevant instruction and avoids dead ends.

## Not allowed

Do not check in:

- Temporary notes, drafts, half-written prompts, or scratch files.
- Prompt ideas that could make a bot act without context or approval.
- Broad “do everything” prompts with no stop condition.
- Install commands without prerequisites and verification.
- Troubleshooting loops without an escalation or stop condition.
- Environment-specific private data that belongs in `ralleh-skills-private`.

## Required shape for a skill

Each skill folder must include all four companion files:

- `README.md` — what it is, what it does, when to use it, safety boundaries, files in the skill, and the golden operating rule.
- `INSTALL.md` — install/configure/verify/operate, or readiness checks when the skill has no software install.
- `DOCTOR.md` — diagnose/troubleshoot with explicit stop conditions and recovery verification.
- `PROMPTS.md` — safe user-facing prompt suggestions, including prompts that need narrowing or approval.

A `README.md` that only lists a purpose is not golden. It must be useful enough for a bot to choose the skill, understand the boundary, and know which companion file to load next.

## Required shape for a skill family index

Each `skills/<Family>/README.md` must include:

- Purpose.
- Guardrails before using the family.
- Available skills.
- Selection rule.
- Completion standard.

## Required shape for an instruction page

A page that points to multiple instructions must include:

- Purpose.
- Guardrails before reading.
- Ordered links.
- Conditional links, if any.
- Completion response format.

## Review checklist

Before committing, ask:

1. Would this confuse a bot or send it into open-ended wandering?
2. Could this cause destructive or external action without approval?
3. Does every command have context and verification?
4. Are all links valid and canonical?
5. Does every skill include README, INSTALL, DOCTOR, and PROMPTS?
6. Is the README strong enough to route a bot without over-reading?
7. Is this golden enough to hand to a production bot?
