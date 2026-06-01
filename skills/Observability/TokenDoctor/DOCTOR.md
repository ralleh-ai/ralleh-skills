# Token Doctor Doctor

## Purpose

Use this when Token Doctor is missing, cannot read the target state, reports confusing numbers, exposes too much content, or conflicts with provider billing data.

## Stop conditions

Stop and ask before:

- Running an unreviewed Token Doctor implementation.
- Granting broader filesystem access.
- Printing raw transcript bodies, secrets, tokens, cookies, or `.env` values.
- Mutating prompts, sessions, skills, memory, config, or provider settings.
- Treating estimated context tokens as actual billed spend.

## Fast triage

1. Confirm the approved Token Doctor path from deployment docs or private overlay.
2. Confirm Node.js is available.
3. Confirm the target OpenClaw state/config paths exist.
4. Run a narrow scoped report for one agent before running all-agent reports.
5. Inspect whether output is redacted and advisory-only.

Example checks:

```bash
node --version
ls -ld "${OPENCLAW_STATE_DIR:-$HOME/.openclaw}" 2>/dev/null || true
ls -l "${OPENCLAW_CONFIG_PATH:-${OPENCLAW_STATE_DIR:-$HOME/.openclaw}/openclaw.json}" 2>/dev/null || true
```

## Read-only safety check

Review the implementation before running if it is new or has changed:

```bash
grep -En "rm -rf|unlink|writeFile|appendFile|rename|truncate|compact|restore|config.patch|sed -i" <token-doctor-script> || true
```

If potentially mutating code is present, stop and report the exact line numbers for review.

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| Script not found | Approved path/private overlay | Ask for the deployment-specific path. |
| Permission denied | State dir ownership and file modes | Run as the correct user or request read access. |
| Empty report | Agent id, state dir, session file paths | Use correct agent id or `--all` only after scoped check. |
| Numbers differ from billing | Compare with LiteLLM/provider ledger | Explain Token Doctor estimates context; provider ledger shows billed spend. |
| Report prints private content | Redaction behavior and output mode | Stop; switch to aggregate-only output or fix implementation. |
| Recommendations are too broad | Check for verification gates | Rewrite as bounded, prioritized, approval-based recommendations. |

## Report quality checks

A good Token Doctor report includes:

- Scope inspected.
- Generated time.
- Top context contributors by size or estimated tokens.
- Provider-spend source clearly named or marked unavailable.
- Recommended changes with risk and verification.
- No raw secrets or unnecessary private text.

## Doctor report format

Return:

- Status: healthy / degraded / blocked / unavailable.
- Approved implementation path inspected.
- State/config paths inspected.
- Whether output is redacted and read-only.
- Exact error or unsafe finding.
- Recommended next action.
