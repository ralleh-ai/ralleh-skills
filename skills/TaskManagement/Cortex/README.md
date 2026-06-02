# CORTEX Task Management Skill

## What CORTEX is

CORTEX is a local-first task operations ledger for AI-agent work. It gives bots, operators, and dashboards a durable place to track active work, ownership, blockers, progress, lifecycle events, and completion evidence.

In a Ralleh environment, CORTEX governs current work while ENGRAM governs memory.

Current RALLEH source repository: `https://github.com/ralleh-ai/cortex`

- ENGRAM answers: “What do we remember?”
- CORTEX answers: “What work exists, who owns it, what state is it in, and what evidence proves it is done?”

## What CORTEX does

- Stores tasks in a durable SQLite-backed ledger.
- Tracks task status, assignee, project, priority, progress, step, blockers, input requests, failures, and completion notes.
- Provides a CLI for creating, updating, resuming, blocking, failing, and completing work.
- Supports automation-safe JSON output for scripts and agent integrations.
- Supports backup, restore, import/export, retention, and daemon/API operation.
- Gives agents a shared source of truth so work does not vanish into chat history.

## When a bot should use it

Use CORTEX for substantial work: implementation, debugging, deployment, publishing, multi-step research, subagent delegation, status tracking, or anything that may span sessions.

Skip CORTEX for tiny one-shot answers with no durable operational state.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — install, configure, verify, operate, and optional daemon/API setup.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot missing CLI, database, daemon/API, task lifecycle, and stale task issues.
- [`PROMPTS.md`](PROMPTS.md) — suggested user-facing prompts for task capture, status checks, handoffs, blockers, and completion evidence.

## Common workflows

### Install CORTEX

Read [`INSTALL.md`](INSTALL.md), then run the documented install/configure/verify flow. Do not claim success until `cortex status` or `node cortex.js status` succeeds.

### Troubleshoot CORTEX

Read [`DOCTOR.md`](DOCTOR.md), run fast triage, and report whether CORTEX is healthy, degraded, down, or not installed.

### Teach a user how to use CORTEX

Read [`PROMPTS.md`](PROMPTS.md) and suggest natural prompts the user can send to capture work, ask for status, surface blockers, or close tasks with evidence.

## Golden operating rule

A CORTEX task is not done until there is evidence: test output, build output, lint output, HTTP check, screenshot, commit hash, direct inspection, or a named blocker explaining why verification cannot run.

## Handoff prompt

> Read `README.md` first to understand CORTEX. If installing, continue with `INSTALL.md`. If troubleshooting, continue with `DOCTOR.md`. If helping the user interact with task management features, continue with `PROMPTS.md`. Keep task state truthful and do not mark work done without evidence.
