# Docker Skill

## What Docker is

Docker is the container runtime skill for isolated app/tool deployment on managed VPS hosts using Docker Engine and Compose.

## What Docker does

- Verifies Docker/Compose installation, daemon health, containers, images, volumes, networks, and logs.
- Guides safe Compose deployment and rollback planning.
- Distinguishes container state from host service state.
- Checks resource usage and persistent volume risk.

## When a bot should use it

Use Docker when provisioning or troubleshooting containerized apps, OpenClaw fleet services, tools, databases, or isolated deployment stacks.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify setup, access, safe operations, and baseline checks.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot failures, unsafe state, and provisioning blockers.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for this workflow.

## Golden operating rule

Inspect and verify before mutating. Risky changes require approval, backup or rollback where applicable, and a named verification gate.
