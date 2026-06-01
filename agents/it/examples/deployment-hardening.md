# Deployment Hardening Example

## Use When

A service needs safer deployment, rollback, health checks, logging, or production readiness.

## Input Checklist

- Repo/branch:
- Host/environment:
- Runtime:
- Deploy command/path:
- Proxy/TLS:
- Database/migrations:
- Backup path:
- Health endpoint:

## Output Shape

```text
Deployment Hardening Plan — <Service>

Current state:
- ...

Risks:
- ...

Required before deploy:
- tests:
- backup:
- rollback:
- health check:

Approved changes:
- ...

Verification:
- ...
```

## Stop Conditions

Stop before production deploy without backup, rollback, and verification gate.
