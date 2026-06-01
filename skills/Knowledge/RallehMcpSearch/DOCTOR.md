# Ralleh MCP Search Doctor

## Use when

- `ralleh-mcp-search --health` fails.
- `/healthz` or `/readyz` is unavailable on `127.0.0.1:8624`.
- A collection such as `breaking_news`, `stocks_markets`, `community`, or `research` is missing.
- A bot tries to search random websites instead of known source IDs.
- Results are empty, partial, stale, paywalled, blocked, or contradictory.
- Source rankings look wrong for speed, accuracy, usefulness, or reliability.

## Stop conditions

Stop and ask before:

- enabling arbitrary URL crawling
- exposing health/search endpoints outside loopback
- bypassing captcha, bot protection, paywalls, or login walls
- using credentials/API keys that are not configured in the approved environment
- treating one unverified source as final truth for sensitive topics

## Triage

1. Confirm the service is installed and local-only.
2. Run `ralleh-mcp-search --health`.
3. Check `/healthz`, `/readyz`, and `/version` locally.
4. Check `--rank-sources --rank-collection <collection>`.
5. Run a deterministic fake search with a known source and one unknown source to verify rejection.
6. Inspect source diagnostics: timeout, blocked, empty, degraded, or parser failure.
7. Report conflicts across sources instead of hiding them.

## Report format

```text
Status: healthy | degraded | blocked | unsafe
Service:
Version/commit:
Collection/tool intent:
Sources attempted:
Sources failed/rejected:
Evidence:
Conflicts:
Recommended next action:
```
