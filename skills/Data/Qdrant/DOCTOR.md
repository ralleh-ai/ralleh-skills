# Qdrant Doctor

## Purpose

Use this when Qdrant provisioning, verification, or runtime behavior is failing or uncertain.

## Stop conditions

Stop before collection delete/recreate, snapshot restore, schema/vector-size change, or public exposure without approval.

## Fast triage

1. Confirm target host, environment, and authoritative source of truth.
2. Confirm the expected service/package/config exists.
3. Run safe read-only status checks.
4. Check recent changes and logs where available.
5. Report exact blocker and avoid risky mutation until approved.

## Common checks

```bash
curl -s http://127.0.0.1:6333/healthz
curl -s http://127.0.0.1:6333/collections
systemctl status qdrant --no-pager
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
