# Agent Browser Doctor

## Purpose

Use this when browser automation is unavailable, attached to the wrong session, stuck on login/captcha/permissions, failing with stale references, or producing uncertain page state.

## Stop conditions

Stop and report the blocker when the page requires:

- Login credentials or account selection.
- 2FA, passkey, captcha, or security challenge.
- Camera/microphone/screen permission requiring human approval.
- Payment, purchase, public posting, message sending, deletion, or account change approval.
- Access to private data beyond the user's request.

## Fast triage

1. Check browser status/doctor output.
2. List open tabs and identify whether a reusable tab already exists.
3. If login state matters, confirm which profile is intended: managed isolated browser or user profile.
4. Open a harmless known page and snapshot it.
5. If that works, retry the target page with a stable tab label.

## Tab confusion checks

Symptoms: actions affect the wrong page, duplicate tabs exist, or refs fail unexpectedly.

Fix:

1. List tabs.
2. Reuse the tab with the correct label or URL.
3. Close only obvious duplicate tabs created by the current task.
4. Take a fresh snapshot before acting again.

## Stale reference recovery

If a click or fill fails because the element reference is stale:

1. Snapshot the same tab again.
2. Find the current visible control.
3. Retry once with the new reference.
4. If it fails again, stop and report the visible state and blocker.

Do not loop blindly.

## Login/session checks

If the page shows sign-in, account chooser, permission, or onboarding UI:

- Do not claim the account is unavailable until you inspect the visible UI.
- Tell the user the exact manual action needed.
- Use an existing user profile only when the user explicitly needs existing cookies/session.

## Page-state verification

Use one or more:

- Current URL.
- Snapshot with visible heading/text/button state.
- Screenshot when visual layout matters.
- Console or network errors only when relevant.

## Doctor report format

Return:

- Status: healthy / degraded / blocked / unavailable.
- Browser profile/session inspected.
- Tab label or URL used.
- Exact visible blocker or error.
- Whether a harmless public page works.
- Recommended next action.
