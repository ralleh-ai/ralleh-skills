# Ralleh MCP Shop Install Guide

## Purpose

Requires the shared Ralleh MCP install plus `ralleh-mcp-shop --health` returning ready. Source collections live in the Ralleh MCP service and should be treated as authoritative.

## Safety and scope

- Read-only inspection and health checks are safe.
- Install, upgrade, restart, or config changes affect VPS services; back up first and verify after.
- Keep health endpoints bound to `127.0.0.1` unless a secured exposure plan is explicitly approved.
- Never add credit-card, booking, checkout, purchase, login, or passenger/customer PII workflows to v1.

## Standard checks

```bash
ralleh-mcp-shop --health
ralleh-mcp-shop --health-server --health-listen 127.0.0.1:8621
curl -fsS http://127.0.0.1:8621/readyz
```

## Verification gate

Before reporting success, include:

- target host/path
- binary version/commit when available
- health/readiness result
- local-only bind confirmation when applicable
- backup path if an upgrade/install occurred
- remaining blockers or degraded sources
