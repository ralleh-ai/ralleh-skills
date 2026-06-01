# pgvector Doctor

## Purpose

Use this when pgvector provisioning, verification, or runtime behavior is failing or uncertain.

## Stop conditions

Stop before production extension/index changes without backup, load estimate, and approval.

## Fast triage

1. Confirm target host, environment, and authoritative source of truth.
2. Confirm the expected service/package/config exists.
3. Run safe read-only status checks.
4. Check recent changes and logs where available.
5. Report exact blocker and avoid risky mutation until approved.

## Common checks

```bash
sudo -u postgres psql -d <db> -c "CREATE EXTENSION IF NOT EXISTS vector;"
sudo -u postgres psql -d <db> -c "select extversion from pg_extension where extname='vector';"
```

## Doctor report format

```text
Status: healthy | degraded | blocked | down | risky
Target:
Environment:
Evidence:
Issue:
Risk/blast radius:
Recommended next action:
Verification gate:
```
