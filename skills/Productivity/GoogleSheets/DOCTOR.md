# Google Sheets Doctor

## Purpose

Use this when Sheets access, ranges, formulas, permissions, writes, or data totals are failing or unclear.

## Fast triage

1. Confirm spreadsheet id and tab name.
2. Confirm account/auth without printing secrets.
3. Fetch metadata to list tabs.
4. Read a small known range.
5. Check whether formulas or protected ranges are involved.

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| Spreadsheet not found | id/account/access | Request access or correct id. |
| Range not found | tab/range syntax | Use metadata and quote tab names. |
| Formula broken | write mode/range | Restore formula or write values to safe range. |
| Totals mismatch | filters/hidden rows/types | Inspect formulas and data types. |
| Permission denied | sharing/API scopes | Request correct access/scope. |

## Doctor report format

Return status, spreadsheet id, account/scope finding, tabs/range inspected, exact blocker, and next action.
