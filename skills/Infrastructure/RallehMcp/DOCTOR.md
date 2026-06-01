# Ralleh MCP Doctor

## Use when

- `ralleh-mcp-shop --health` or `ralleh-mcp-travel --health` fails.
- Local `/healthz` or `/readyz` is down.
- A service binds outside loopback unexpectedly.
- Upgrade or backup scripts fail.
- Version/commit metadata does not match the deployed build.

## Stop conditions

Stop and ask before:

- exposing a service outside loopback
- adding checkout, booking, payment, login, or PII collection
- bypassing captcha/bot controls
- deleting backups or replacing configs without a rollback path
- using unknown/random websites as search targets

## Triage

1. Confirm the target VPS and repo/installed path.
2. Run the one-shot health command first.
3. Check local HTTP readiness if the health server is enabled.
4. Confirm the service is loopback-only.
5. Check version/commit and recent upgrade/backup state.
6. Report exact degraded source, timeout, or policy rejection.

## Report format

```text
Status: healthy | degraded | blocked | unsafe
Service:
Host/path:
Version/commit:
Health evidence:
Local-only evidence:
Issue:
Risk:
Recommended next action:
```
