# Financial Reporter Doctor

## Purpose

Use this when financial reports conflict, totals do not match sources, metrics are undefined, or data is stale/incomplete.

## Fast triage

1. Confirm source of truth and export/report timestamp.
2. Confirm period, comparison period, currency, and timezone.
3. Compare totals against source system summaries.
4. Identify missing categories, refunds, fees, taxes, payroll, or transfers.
5. Mark assumptions and confidence level.

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| Revenue mismatch | gross/net/refunds/fees/taxes | Define metric and reconcile. |
| Expense mismatch | date basis/currency/categories | Align filters and categories. |
| Stale data | export timestamp | Refresh source report. |
| Missing metric definition | KPI formula | Ask owner for definition. |
| Too much detail | privacy/channel | Aggregate or redact. |

## Doctor report format

Return status, sources, period/currency, mismatched totals, missing definitions, assumptions, and next action.
