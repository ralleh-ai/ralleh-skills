# Calendar Scheduler Skill

## What Calendar Scheduler is

Calendar Scheduler is the productivity skill for finding availability, drafting events, coordinating meeting details, and managing scheduling workflows across calendar providers.

It is provider-agnostic and can use Google Calendar, Microsoft Calendar, or another approved calendar connector.

## What Calendar Scheduler does

- Reads calendar availability with user-approved access.
- Drafts event details: title, attendees, time, timezone, location/link, agenda, reminders.
- Proposes time slots and resolves conflicts.
- Creates or updates events only after explicit approval.
- Handles reminders and follow-up scheduling.

## When a bot should use it

Use Calendar Scheduler when the user asks to schedule, reschedule, check availability, draft calendar events, coordinate meetings, or set reminders.

Ask before creating/updating/deleting events or inviting attendees.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify calendar connector access, timezone, calendar ids, and read/write boundaries.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot access, timezone, conflicts, attendee/invite issues, and provider errors.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for scheduling workflows.

## Golden operating rule

Never create, update, delete, or invite attendees without confirming exact event details and user approval.
