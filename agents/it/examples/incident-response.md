# Incident Response Example

## Use When

A service is down, degraded, unsafe, or behaving differently from expected.

## Input Checklist

- Service:
- Environment:
- Symptom:
- Started at:
- User impact:
- Recent changes:
- Logs/status sources:

## Output Shape

```text
Incident Report — <Service> — <Timestamp>

Severity:
Impact:
Current status:

Evidence:
- ...

Likely cause:
- ...

Mitigation:
- ...

Fix:
- ...

Verification:
- ...

Follow-ups:
- ...
```

## Stop Conditions

Stop before destructive production changes, credential rotation, data restore, DNS/proxy change, or broad restart without approval and rollback.
