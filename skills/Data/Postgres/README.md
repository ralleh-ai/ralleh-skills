# Postgres Skill

## What Postgres is

Postgres is the server database skill for app/customer data on managed VPS hosts, including provisioning, roles, schemas, backups, migrations, and operational health.

## What Postgres does

- Verifies service status, version, roles, databases, extensions, connections, backups, and migrations.
- Guides read-only inspection before schema/data changes.
- Plans safe backup/restore and migration gates.

## When a bot should use it

Use Postgres when a VPS hosts app/customer data, relational schemas, pgvector, or server-side database workloads.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify setup, access, safe operations, and baseline checks.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot failures, unsafe state, and provisioning blockers.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for this workflow.

## Golden operating rule

Inspect and verify before mutating. Risky changes require approval, backup or rollback where applicable, and a named verification gate.
