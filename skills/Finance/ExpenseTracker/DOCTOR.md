# Expense Tracker Doctor

## Purpose

Use this when expense data is incomplete, receipts are missing, categories are unclear, or totals do not match source exports.

## Fast triage

1. Confirm source files/tool and date range.
2. Confirm currency and timezone/date handling.
3. Check for missing receipts and duplicate transaction ids.
4. Compare totals against source export.
5. Identify expenses needing business-purpose review.

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| Missing receipt | receipt folder/export links | Request receipt or mark missing. |
| Duplicate expense | transaction id/date/amount/vendor | Flag duplicate candidates. |
| Wrong totals | currency/date filters | Reconcile filter and currency assumptions. |
| Category unknown | category rules | Ask owner or mark review needed. |
| Private data risk | output fields | Redact sensitive fields. |

## Doctor report format

Return status, source/period, totals checked, missing receipts, duplicates, unclear categories, and next action.
