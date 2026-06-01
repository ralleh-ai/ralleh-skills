# Google Analytics Doctor

## Purpose

Use this when GA4 data is missing, reports conflict, events/conversions are absent, or account/property access is unclear.

## Fast triage

1. Confirm property id/name and timezone.
2. Confirm date range and data freshness expectations.
3. Confirm auth/access without printing secrets.
4. Check realtime or recent event availability if tracking is suspected broken.
5. Compare report dimensions/metrics to the user's question.

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| Wrong numbers | property/date range/timezone | Re-run with explicit scope. |
| No data | data stream/tag firing | Check instrumentation. |
| Conversions missing | conversion event config | Audit events and conversion settings. |
| Source mismatch | attribution model/dimensions | Explain metric/dimension definition. |
| Access denied | property permissions | Request correct access. |

## Doctor report format

Return status, property, date range/timezone, report checked, data freshness, blocker, and next action.
