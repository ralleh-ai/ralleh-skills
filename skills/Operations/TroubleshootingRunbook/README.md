# Troubleshooting Runbook

## Purpose

Give bots a calm diagnostic sequence for broken tools and services.

## Sequence

1. Reproduce or observe the failure.
2. Check status and logs.
3. Confirm recent changes.
4. Inspect config against documented schema.
5. Apply the smallest safe fix.
6. Verify with the same check that exposed the issue.
7. Write down the lesson if it is likely to recur.

## Evidence to collect

- Exact error text.
- Service status.
- Relevant log excerpt.
- Config path and changed keys.
- Verification output after the fix.
