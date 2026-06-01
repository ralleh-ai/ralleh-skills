# Qdrant Skill

## What Qdrant is

Qdrant is the vector database skill for semantic search collections, local/private vector storage, and memory/search sidecars.

## What Qdrant does

- Verifies service health, collections, vector dimensions, storage path, and local-only exposure.
- Guides collection backup/snapshot posture and compatibility checks.
- Supports ENGRAM-style semantic retrieval diagnostics.

## When a bot should use it

Use Qdrant when provisioning or troubleshooting vector search services, ENGRAM dependencies, semantic memory, or local vector collections.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify setup, access, safe operations, and baseline checks.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot failures, unsafe state, and provisioning blockers.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for this workflow.

## Golden operating rule

Inspect and verify before mutating. Risky changes require approval, backup or rollback where applicable, and a named verification gate.
