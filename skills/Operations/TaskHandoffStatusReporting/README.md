# Task Handoff and Status Reporting Skill

## What Task Handoff and Status Reporting is

Task Handoff and Status Reporting is the operations skill for making work transferable between bots, humans, future sessions, and task ledgers.

## What Task Handoff and Status Reporting does

- Captures objective, current state, touched files/services, commands run, verification performed, blockers, and next action.
- Separates facts, assumptions, risks, and open decisions.
- Creates concise status updates for live users without dumping internal noise.
- Supports restart/resume by preserving enough context for the next operator to continue safely.
- Links handoff claims to evidence such as diffs, tests, logs, URLs, or task IDs.

## When a bot should use it

- pausing or shelving work
- delegating between agents
- resuming a failed or interrupted task
- closing a CORTEX/task-ledger item
- summarizing long-running background work for a user

## Required bot posture

- Start with live state, not assumptions.
- Keep scope narrow and reversible where possible.
- Preserve user work, private data, and approval boundaries.
- Prefer documented checks over improvised commands.
- Report uncertainty as uncertainty.

## Safety boundaries

- Do not omit blockers or pretend uncertainty is resolved.
- Do not include secrets, private data, or irrelevant logs in a handoff.
- Do not forward raw internal metadata as a user update.
- Do not mark done without verification evidence or a named reason verification could not run.

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

A good handoff lets the next capable operator continue without guessing, redoing discovery, or trusting unsupported claims.
