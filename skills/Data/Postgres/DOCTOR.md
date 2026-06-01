# Postgres Doctor

## Purpose

Use this when Postgres provisioning, verification, or runtime behavior is failing or uncertain.

## Stop conditions

Stop before DROP, TRUNCATE, DELETE, ALTER, migration apply, restore, role/password change, or public exposure without approval.

## Fast triage

1. Confirm target host, environment, and authoritative source of truth.
2. Confirm the expected service/package/config exists.
3. Run safe read-only status checks.
4. Check recent changes and logs where available.
5. Report exact blocker and avoid risky mutation until approved.

## Common checks

```bash
psql --version
systemctl status postgresql --no-pager
sudo -u postgres psql -c "select version();"
sudo -u postgres psql -c "\\l"
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
