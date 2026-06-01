# Go Runtime Skill

## What Go Runtime is

Go Runtime is the Go toolchain skill for building, testing, and running Go-based provisioners and utilities on managed hosts.

## What Go Runtime does

- Verifies Go version, module state, build/test readiness, and binary output paths.
- Guides safe build/test workflows for provisioner code.
- Keeps build artifacts and module cache behavior predictable.

## When a bot should use it

Use Go Runtime when provisioning a host that needs Go for ralleh-provision, build/test work, CLI utilities, or release artifact checks.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify setup, access, safe operations, and baseline checks.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot failures, unsafe state, and provisioning blockers.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for this workflow.

## Golden operating rule

Inspect and verify before mutating. Risky changes require approval, backup or rollback where applicable, and a named verification gate.
