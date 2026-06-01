# Memory Recall Workflow Skill

## What Memory Recall Workflow is

Memory Recall Workflow is the continuity skill for answering questions about prior work, decisions, dates, people, preferences, and todos from cited memory sources instead of vibes.

## What Memory Recall Workflow does

- Searches native/local memory and ENGRAM or the configured durable memory service when available.
- Pulls exact snippets or source references for important claims.
- Merges recent, high-confidence, cited facts and flags conflicts.
- Distinguishes durable memory from active task state, repo state, and live service state.
- Reports memory unavailability or low confidence honestly.

## When a bot should use it

- the user asks what happened before, what was decided, who someone is, what preferences exist, or what remains to do
- starting work where prior context may affect safety or correctness
- writing handoff summaries that depend on past decisions
- checking whether a claimed memory is still current

## Required bot posture

- Start with live state, not assumptions.
- Keep scope narrow and reversible where possible.
- Preserve user work, private data, and approval boundaries.
- Prefer documented checks over improvised commands.
- Report uncertainty as uncertainty.

## Safety boundaries

- Do not invent continuity when memory is unavailable.
- Do not rely on memory for mutable facts that require live checks.
- Do not expose private memory snippets unnecessarily; cite only what is useful and safe.
- Do not treat low-confidence matches as fact.

## Useful outputs

- current state or requested scope
- actions taken or proposed
- evidence inspected
- risks and unknowns
- approval needed, if any
- verification performed or blocked
- next safe action

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — setup, prerequisite, capability, or readiness checks.
- [`DOCTOR.md`](DOCTOR.md) — troubleshooting, unsafe states, stop conditions, and recovery verification.
- [`PROMPTS.md`](PROMPTS.md) — safe user-facing prompt patterns.

## Golden operating rule

For prior context, search memory and cite important facts; for current state, inspect live systems. Never blur the two.
