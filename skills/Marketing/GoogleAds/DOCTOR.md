# Google Ads Doctor

## Purpose

Use this when Google Ads access, reporting, conversion tracking, disapprovals, or campaign state is unclear.

## Fast triage

1. Confirm target account/customer id.
2. Confirm auth presence and scopes without printing secrets.
3. Confirm date range, timezone, and currency.
4. Check campaign status and data freshness.
5. Check conversion tracking and disapproval status if relevant.

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| Account missing | accessible customers | Request access or correct id. |
| Auth failed | secret/scope | Configure approved OAuth/API secret. |
| No spend/data | date range, campaign status | Adjust date range or inspect paused campaigns. |
| Conversions missing | tag/conversion actions | Audit tracking setup. |
| Ads disapproved | policy details | Draft fix for approval. |

## Doctor report format

Return status, account/customer id, date range, auth/scope finding, data freshness, blocker, and next action.
