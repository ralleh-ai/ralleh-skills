# Redis Skill

## What Redis is

Redis is the in-memory data service skill for caches, queues, rate limits, ephemeral state, and local sidecar services such as governed memory stacks.

## What Redis does

- Verifies Redis service health, bind address, persistence mode, memory usage, and connectivity.
- Distinguishes cache loss from durable data loss.
- Checks local-only exposure for sidecar services.

## When a bot should use it

Use Redis when provisioning or troubleshooting cache/session/queue/rate-limit services or ENGRAM-related local dependencies.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify setup, access, safe operations, and baseline checks.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot failures, unsafe state, and provisioning blockers.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for this workflow.

## Golden operating rule

Inspect and verify before mutating. Risky changes require approval, backup or rollback where applicable, and a named verification gate.
