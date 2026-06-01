# Phone Control Skill

## What Phone Control is

Phone Control is the skill for safely interacting with a paired phone or mobile node: notifications, screen/camera/status checks, call-related workflows, and user-approved device actions.

It is permission-first. The phone is a private device, not a general automation target.

## What Phone Control does

- Checks paired device status and permissions.
- Reads or acts on phone surfaces only when the user requested it.
- Sends notifications or invokes approved device actions.
- Stops for unlock, OS permission, private data, or external-effect approval.

## When a bot should use it

Use Phone Control when the user asks to inspect or control a paired phone/device, handle phone notifications, gather device status, or perform a user-approved mobile action.

Do not use it for surveillance, hidden recording, private-data browsing, or actions outside the user's explicit request.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify node pairing, permissions, and safe command surfaces.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot offline nodes, permissions, failed invocations, or privacy blockers.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for phone/device workflows.

## Golden operating rule

Ask before privacy-sensitive phone actions and report exactly what permission or device state blocks progress.
