# ENGRAM Memory Skill

## What ENGRAM is

ENGRAM is a durable memory layer for bots and AI employees. It gives an agent a way to preserve useful context across sessions, search prior work semantically, and turn raw session notes into reusable project memory.

In a Ralleh environment, ENGRAM is the long-term recall companion to the bot's live tools and local notes. It helps a bot answer questions like:

- What did we decide last time?
- What broke before, and how did we fix it?
- What preferences, standards, and project facts should I remember?
- What prior context should I load before acting?

## What ENGRAM does

- Stores durable memory objects for decisions, lessons, project context, and operational notes.
- Supports semantic search so bots can recall related memories, not just exact text matches.
- Provides CLI/service access through `engramctl` and `engramd`.
- Supports health checks, backups, and smoke tests for memory reliability.
- Can integrate with OpenClaw memory workflows as a sidecar memory source.

## When a bot should use it

Use ENGRAM when the user asks about prior work, decisions, blockers, preferences, todos, project history, or recurring lessons. Also use it after meaningful work to preserve hard-won context for the next session.

Do not use ENGRAM to store secrets, raw credentials, private keys, session cookies, or sensitive data that should not be recalled later.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — install, configure, verify, operate, and OpenClaw integration instructions.
- [`DOCTOR.md`](DOCTOR.md) — troubleshooting guide for broken installs, service failures, search failures, and wrapper issues.
- [`PROMPTS.md`](PROMPTS.md) — suggested user-facing prompts for recall, memory capture, maintenance, and consolidation workflows.

## Common workflows

### Install ENGRAM

Read [`INSTALL.md`](INSTALL.md), then run the documented install/configure/verify flow. Do not claim success until the smoke test passes.

### Troubleshoot ENGRAM

Read [`DOCTOR.md`](DOCTOR.md), run the fast triage commands, then report status as healthy, degraded, down, or not installed.

### Teach a user how to use ENGRAM

Read [`PROMPTS.md`](PROMPTS.md) and suggest natural prompts the user can send, such as asking the bot to recall project decisions, save a troubleshooting lesson, or run an ENGRAM health check.

## OpenClaw recall pattern

For important recall inside OpenClaw, use dual recall:

1. Native OpenClaw memory search.
2. ENGRAM sidecar search.
3. Merge results, prefer cited and recent evidence, and say clearly when memory is unavailable or inconclusive.

## Handoff prompt

> Read `README.md` first to understand ENGRAM. If installing, continue with `INSTALL.md`. If troubleshooting, continue with `DOCTOR.md`. If helping the user interact with memory features, continue with `PROMPTS.md`. Do not store secrets in memory and do not guess missing deployment values.
