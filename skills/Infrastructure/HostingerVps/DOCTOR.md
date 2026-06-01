# Hostinger VPS Doctor

## Purpose

Use this when Hostinger VPS provisioning, verification, or runtime behavior is failing or uncertain.

## Stop conditions

Stop before VPS rebuild, DNS mutation, plan changes, or destructive host operations without approval.

## Fast triage

1. Confirm target host, environment, and authoritative source of truth.
2. Confirm the expected service/package/config exists.
3. Run safe read-only status checks.
4. Check recent changes and logs where available.
5. Report exact blocker and avoid risky mutation until approved.

## Common checks

```bash
ralleh-provision discover <manifest>
ralleh-provision verify <manifest>
dig +short example.com
curl -I https://example.com
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
