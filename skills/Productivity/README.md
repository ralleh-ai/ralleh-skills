# Productivity Skills

## Purpose

This family contains golden skills for office suites, drives, spreadsheets, calendars, email-adjacent workflows, and document connectors.

It exists to help bots choose the right capability quickly, load only the files needed for the task, and keep safety, verification, and resource use explicit.

## Before using this family

- Use these skills read-first. Sharing, deleting, moving, emailing, or changing access to files/events requires the right approval.
- Start with the specific skill `README.md`; load `INSTALL.md`, `DOCTOR.md`, or `PROMPTS.md` only when the task needs setup, troubleshooting, or user-facing examples.
- Prefer read-only inspection until a write, external effect, destructive action, permission change, or sensitive-data operation is explicitly approved.
- Verify the result with the smallest meaningful check before reporting completion.

## Available skills

- [`GoogleSheets`](GoogleSheets/README.md) — safe Google Sheets reading, reporting, updates, and automation patterns.
- [`GoogleDrive`](GoogleDrive/README.md) — safe Google Drive file inspection, organization, sharing review, and approved file operations.
- [`Gog`](Gog/README.md) — Google Workspace CLI workflows for Gmail, Calendar, Drive, Contacts, Sheets, and Docs.
- [`Office365Connector`](Office365Connector/README.md) — safe Microsoft 365/Graph connector workflows for Outlook, Calendar, OneDrive, SharePoint, Teams, and Excel.
- [`OneDrive`](OneDrive/README.md) — safe OneDrive and Microsoft Graph file inspection, sharing review, and approved file operations.
- [`Dropbox`](Dropbox/README.md) — safe Dropbox file inspection, organization, sharing review, and approved file operations.
- [`CalendarScheduler`](CalendarScheduler/README.md) — calendar availability, scheduling, event drafting, and reminder workflows.

## Selection rule

Choose the narrowest skill that matches the user request. If two skills could apply, prefer the one closest to the target system or workflow, then pull in adjacent skills only when they are needed for setup, safety, memory, task tracking, or verification.

## Completion standard

A bot using this family should report:

- which skill files were used
- what scope was inspected or changed
- what approval was required or not required
- what verification was performed
- any blocker, risk, or next safe action
