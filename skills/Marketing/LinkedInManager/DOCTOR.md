# LinkedIn Manager Doctor

## Purpose

Use this when LinkedIn login, page access, posting, scheduling, analytics, or permissions are blocked.

## Fast triage

1. Confirm target: personal profile or company page.
2. Confirm access method: browser, API, scheduler, or manual.
3. Check login/session state without exposing credentials.
4. Confirm role/permission for company page actions.
5. Identify whether action is draft-only or public/direct.

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| Login required | browser/session state | Ask user to complete login/2FA. |
| Company page unavailable | page role/permissions | Request correct admin/content role. |
| Post blocked | policy/media/permission | Fix draft or ask for approval/access. |
| Analytics missing | page role/date range | Request permission or adjust scope. |
| Tone risk | brand voice/facts | Revise draft and cite claims. |

## Doctor report format

Return status, target profile/page, access method, permission finding, exact blocker, and next action.
