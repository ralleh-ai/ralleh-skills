# SQLite Skill

## What SQLite is

SQLite is the local database skill for embedded app databases, task ledgers, memory stores, registries, and small operational data files.

## What SQLite does

- Checks database integrity, schema, migrations, WAL state, backups, and query results.
- Guides online backups and safe restore planning.
- Handles local-first data files without server assumptions.

## When a bot should use it

Use SQLite when inspecting or maintaining local `.sqlite`, `.sqlite3`, or `.db` files used by apps, CORTEX, ENGRAM, registries, or embedded tools.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify setup, access, safe operations, and baseline checks.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot failures, unsafe state, and provisioning blockers.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for this workflow.

## Golden operating rule

Inspect and verify before mutating. Risky changes require approval, backup or rollback where applicable, and a named verification gate.
