# OpenClaw A2A Install Guide

## Purpose

Use this file when a bot needs to verify or configure agent-to-agent capability in an OpenClaw-style environment.

Read [`README.md`](README.md) first for what OpenClaw A2A is and when to use it. Use [`DOCTOR.md`](DOCTOR.md) if session routing, agent discovery, or handoffs fail.

## Safety and scope

- Do not expose system prompts, private workspace files, secrets, or raw internal metadata in handoffs.
- Do not message external users or public channels through A2A unless the user explicitly asked for that external action.
- Use the least context needed. Fork/copy full transcript only when the target agent genuinely needs it.
- Do not treat subagent completion as proof; verify actual state.

## Prerequisites

- Session-list, session-history, session-send, or session-spawn capability in the runtime.
- Known configured agents or a discoverable agent list.
- Task ledger such as CORTEX for substantial work.
- Clear routing rules for which agent handles which specialty.

## Verify capability

1. List configured/visible sessions or agents.
2. Confirm the intended target exists.
3. Send or spawn only with a bounded task brief.
4. Confirm a response or completion event is available.
5. Verify resulting state independently.

## Handoff packet shape

Include:

- Objective.
- Scope and non-goals.
- Files/repos/services involved.
- Constraints and safety boundaries.
- Expected output.
- Verification gate.
- Task id/session key when available.

## Verification gate

Before reporting A2A success, verify at least one:

- Real repo diff or commit.
- Test/build/lint output.
- Live service/page check.
- CORTEX task state and evidence.
- Target session response with a named blocker.

## Handoff prompt

> Verify A2A tooling and target agent availability. Send a bounded handoff packet with objective, scope, safety boundaries, and verification gate. Do not expose secrets or raw internal metadata. Verify the result independently before reporting success.
