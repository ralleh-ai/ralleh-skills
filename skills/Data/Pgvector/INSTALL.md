# pgvector Install Guide

## Purpose

Use this file to verify pgvector capability during VPS provisioning or operations.

## Safety and scope

- Back up before extension or index changes.
- Heavy production index builds require maintenance planning.
- Avoid exposing embedded sensitive content in query samples.

## Prerequisites

- Postgres installed.
- pgvector package/extension available.
- Target database and role known.

## Verify capability

Run the approved checks for the deployment. Common checks include:

```bash
sudo -u postgres psql -d <db> -c "CREATE EXTENSION IF NOT EXISTS vector;"
sudo -u postgres psql -d <db> -c "select extversion from pg_extension where extname='vector';"
```

## Verification gate

Before reporting success, confirm the target host/environment, command output, risk level, and any remaining blocker.

## Handoff prompt

> Verify capability in read-only/safe mode first. Report target host, version/status, exact checks, blockers, and do not perform risky changes without approval.
