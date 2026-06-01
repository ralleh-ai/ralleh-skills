# Data Skills

## Purpose

This family contains golden skills for databases, vector stores, caches, migrations, backups, and data-service operations.

It exists to help bots choose the right capability quickly, load only the files needed for the task, and keep safety, verification, and resource use explicit.

## Before using this family

- Use these skills read-first. Back up before risky changes, protect credentials and customer data, and verify integrity after any write.
- Start with the specific skill `README.md`; load `INSTALL.md`, `DOCTOR.md`, or `PROMPTS.md` only when the task needs setup, troubleshooting, or user-facing examples.
- Prefer read-only inspection until a write, external effect, destructive action, permission change, or sensitive-data operation is explicitly approved.
- Verify the result with the smallest meaningful check before reporting completion.

## Available skills

- [`SQLite`](SQLite/README.md) — local SQLite database inspection, backup, migration, and integrity checks.
- [`Postgres`](Postgres/README.md) — PostgreSQL provisioning, access, backups, migrations, and operational checks.
- [`Pgvector`](Pgvector/README.md) — pgvector extension setup and vector-index verification in Postgres.
- [`Redis`](Redis/README.md) — Redis local service/cache/queue operations and safe diagnostics.
- [`Qdrant`](Qdrant/README.md) — local/private vector database provisioning, collections, health, and backup posture.

## Selection rule

Choose the narrowest skill that matches the user request. If two skills could apply, prefer the one closest to the target system or workflow, then pull in adjacent skills only when they are needed for setup, safety, memory, task tracking, or verification.

## Completion standard

A bot using this family should report:

- which skill files were used
- what scope was inspected or changed
- what approval was required or not required
- what verification was performed
- any blocker, risk, or next safe action
