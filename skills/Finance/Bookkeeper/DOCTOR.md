# Bookkeeper Doctor

## Purpose

Use this when bookkeeping data is missing, categories are unclear, reconciliation does not balance, or accounting system access fails.

## Fast triage

1. Confirm entity, period, and source of truth.
2. Confirm export format and required columns.
3. Check for duplicates, missing dates, missing amounts, and currency mismatches.
4. Compare opening/closing balances when reconciling.
5. Identify categories needing owner/accountant decision.

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| Missing transactions | date range/account export | Request complete export. |
| Duplicate rows | transaction ids/date/amount/vendor | De-duplicate with review list. |
| Categories unclear | chart of accounts | Ask owner/accountant. |
| Reconciliation off | balances/pending transactions | Identify difference and outstanding items. |
| Tool access denied | account/role | Request read/report access. |

## Doctor report format

Return status, entity/period, source inspected, missing data, reconciliation difference if any, decisions needed, and next action.
