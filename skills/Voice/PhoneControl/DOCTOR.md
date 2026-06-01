# Phone Control Doctor

## Purpose

Use this when a paired phone is offline, permissions are missing, device actions fail, or the requested action is privacy-sensitive.

## Fast triage

1. Check node/device status.
2. Confirm the target device identity.
3. Check required permission state.
4. Try a harmless status/notification action.
5. Report any manual device action required.

## Stop conditions

Stop for unlock prompts, OS permission dialogs, private media/data access, location requests, hidden recording, message sending, calls, deletion, or settings changes unless the user explicitly approved that action.

## Doctor report format

Return status, target device, permission state, attempted harmless check, exact blocker, and next action.
