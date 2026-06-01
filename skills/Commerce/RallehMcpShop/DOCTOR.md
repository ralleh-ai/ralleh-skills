# Ralleh MCP Shop Doctor

## Use when

- Collection is unknown or too broad.
- LLM suggests raw/random websites instead of collection/source IDs.
- Affiliate URLs are missing or applied to unsafe paths.
- A source times out or is degraded.
- Results are partial and need browser verification.

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
