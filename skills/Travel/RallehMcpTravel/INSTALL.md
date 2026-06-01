# Ralleh MCP Travel Install Guide

## Purpose

Requires the shared Ralleh MCP install plus `ralleh-mcp-travel --health` returning ready. API keys for providers must be configured separately and never printed.

## Safety and scope

- Read-only inspection and health checks are safe.
- Install, upgrade, restart, or config changes affect VPS services; back up first and verify after.
- Keep health endpoints bound to `127.0.0.1` unless a secured exposure plan is explicitly approved.
- Never add credit-card, booking, checkout, purchase, login, or passenger/customer PII workflows to v1.

## Standard checks

```bash
ralleh-mcp-travel --health
ralleh-mcp-travel --health-server --health-listen 127.0.0.1:8622
curl -fsS http://127.0.0.1:8622/readyz
```

## Verification gate

Before reporting success, include:

- target host/path
- binary version/commit when available
- health/readiness result
- local-only bind confirmation when applicable
- backup path if an upgrade/install occurred
- remaining blockers or degraded sources
