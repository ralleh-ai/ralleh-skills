# Troubleshooting Runbook Skill

## What Troubleshooting Runbook is

Troubleshooting Runbook is the calm diagnostic sequence for broken tools, services, integrations, repo checks, and agent workflows.

## What Troubleshooting Runbook does

- Reproduces or observes the failure before fixing.
- Collects exact error text, status, logs, recent changes, config paths, and affected scope.
- Applies the smallest safe fix with rollback awareness.
- Verifies recovery with the same signal that exposed the issue.
- Writes down recurring lessons when the fix reveals a reusable pattern.

## When a bot should use it

- a tool, service, build, test, MCP server, connector, or workflow fails
- output is missing, stale, partial, or suspicious
- a user asks why something broke
- an agent needs to decide whether to retry, escalate, roll back, or stop

## Required bot posture

- Start with live state, not assumptions.
- Keep scope narrow and reversible where possible.
- Preserve user work, private data, and approval boundaries.
- Prefer documented checks over improvised commands.
- Report uncertainty as uncertainty.

## Safety boundaries

- Do not shotgun random fixes.
- Do not remove data, reset services broadly, rotate credentials, or change production config unless explicit approval is recorded.
- Do not expose secrets or private logs while collecting evidence.
- Do not continue retrying when the failure indicates permission, billing, destructive-risk, or missing-owner issues.

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

Diagnose before fixing, fix the smallest safe thing, verify recovery directly, and escalate before the blast radius grows.
