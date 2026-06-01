# Ralleh MCP Install Guide

## Purpose

Install from the `ralleh-ai/ralleh-mcp` repo. Build with Go, run tests, install binaries/configs under `/opt/ralleh/ralleh-mcp`, and verify both `--health` commands before enabling systemd units.

## Safety and scope

- Read-only inspection and health checks are safe.
- Install, upgrade, restart, or config changes affect VPS services; back up first and verify after.
- Keep health endpoints bound to `127.0.0.1` unless a secured exposure plan is explicitly approved.
- Never add credit-card, booking, checkout, purchase, login, or passenger/customer PII workflows to v1.

## Standard checks

```bash
git clone git@github-ralleh:ralleh-ai/ralleh-mcp.git
GO=/tmp/go/bin/go scripts/build.sh
PREFIX=/opt/ralleh/ralleh-mcp scripts/install.sh
/opt/ralleh/ralleh-mcp/bin/ralleh-mcp-shop --health
/opt/ralleh/ralleh-mcp/bin/ralleh-mcp-travel --health
curl -fsS http://127.0.0.1:8621/healthz
curl -fsS http://127.0.0.1:8622/healthz
```

## Verification gate

Before reporting success, include:

- target host/path
- binary version/commit when available
- health/readiness result
- local-only bind confirmation when applicable
- backup path if an upgrade/install occurred
- remaining blockers or degraded sources
