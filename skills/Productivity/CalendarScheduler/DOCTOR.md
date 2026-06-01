# Calendar Scheduler Doctor

## Purpose

Use this when calendar access, timezone math, availability, invites, event creation, or provider sync is failing or unclear.

## Fast triage

1. Confirm provider, account, and calendar id.
2. Confirm user timezone and target attendee timezone if relevant.
3. Read a narrow availability window.
4. Check calendar permissions and write scope.
5. Confirm event details before any write.

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| Wrong time | timezone/date parsing | Restate time with timezone and confirm. |
| Calendar denied | account/calendar permissions | Request access or correct calendar id. |
| Conflict missed | availability window/calendars included | Include all relevant calendars. |
| Invite not sent | write scope/provider response | Verify event and attendee delivery. |
| Duplicate event | existing event search | Search before creating. |

## Doctor report format

Return status, provider/account/calendar, timezone, availability check, blocker, and next action.
