# Ralleh MCP Brand Doctor

## Use when

- `ralleh-mcp-brand --health` fails.
- Brand profile or voice cannot be retrieved.
- Content validation returns no score or no violations for obvious forbidden terms.
- Version history or audit log is missing after a write.
- SQLite DB path is wrong, missing, locked, or not backed up.
- A bot appears to invent brand facts instead of reading stored brand memory.

## Stop conditions

Stop and ask before:

- mutating canonical brand profile, voice, messaging, personas, or style guide
- deleting or restoring the brand database
- rolling back versions
- exposing the service outside loopback
- treating validation as legal/compliance approval
- storing customer-sensitive brand data in the public skills repo

## Triage

1. Confirm DB path and file permissions.
2. Run one-shot health.
3. Retrieve brand profile and voice for the requested org/brand.
4. Run deterministic validation against a known forbidden term.
5. Check audit log after any write.
6. Confirm backups include the brand DB.
7. Report missing data as missing; do not infer canonical brand truth.

## Report format

```text
Status: healthy | degraded | blocked | unsafe
Org/brand:
DB path:
Health evidence:
Profile/voice evidence:
Validation evidence:
Audit/version evidence:
Risk:
Recommended next action:
```
