# pgvector Skill

## What pgvector is

pgvector is the Postgres extension skill for storing embeddings and running vector similarity search inside PostgreSQL.

## What pgvector does

- Verifies extension availability, version, vector columns, indexes, and query behavior.
- Guides index selection and migration planning for embedding tables.
- Keeps vector search tied to Postgres backup/restore posture.

## When a bot should use it

Use pgvector when provisioning or troubleshooting vector search in Postgres for app data, memory, recommendations, or semantic retrieval.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify setup, access, safe operations, and baseline checks.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot failures, unsafe state, and provisioning blockers.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for this workflow.

## Golden operating rule

Inspect and verify before mutating. Risky changes require approval, backup or rollback where applicable, and a named verification gate.
