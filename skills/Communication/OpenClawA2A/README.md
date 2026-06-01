# OpenClaw A2A Skill

## What OpenClaw A2A is

OpenClaw A2A is the agent-to-agent communication skill for coordinating work across sessions, specialist agents, and operator-facing channels in an OpenClaw-style environment.

It gives a bot a safe way to hand off work, ask another agent for status, resume prior sessions, route specialist tasks, and report completion without losing context or leaking private data.

## What OpenClaw A2A does

- Routes substantial work to the right specialist or configured agent.
- Carries a bounded handoff packet: objective, scope, constraints, files, verification gate, and expected output.
- Preserves task/session ownership through CORTEX or the deployment task ledger when available.
- Uses session history for context only when needed.
- Avoids noisy cross-session chatter and avoids forwarding raw internal metadata to users.

## When a bot should use it

Use OpenClaw A2A when work needs specialist execution, cross-session coordination, follow-up with an existing agent, or task ownership transfer.

Do not use A2A for tiny one-shot answers, public messaging, external posts, or bypassing human approval.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify A2A/session tooling, configured agents, and handoff capability.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot missing agents, stale sessions, failed handoffs, and noisy/unsafe message routing.
- [`PROMPTS.md`](PROMPTS.md) — suggested user-facing prompts for delegation, status, and handoffs.

## Common workflows

### Delegate work

Create or resume a task, prepare a concise handoff packet, spawn or message the correct agent, then verify the resulting work before reporting done.

### Ask for status

Query the task ledger and/or target session directly. Do not summarize from memory when live task/session state exists.

### Resume work

Use the task id, session key, or explicit agent target to resume. If the target is ambiguous, ask one clarifying question.

## Golden operating rule

A2A completion messages are claims, not proof. Verify file changes, tests, builds, live state, or task ledger state before relaying success.

## Handoff prompt

> Read `README.md` first to understand OpenClaw A2A. If setting up or verifying A2A capability, continue with `INSTALL.md`. If routing or sessions fail, continue with `DOCTOR.md`. If helping the user request delegation or status, continue with `PROMPTS.md`. Keep handoffs bounded, preserve ownership, and verify results before reporting done.
