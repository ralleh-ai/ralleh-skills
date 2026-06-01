# Google Sheets Skill

## What Google Sheets is

Google Sheets is a spreadsheet platform for structured data, lightweight databases, reporting, collaboration, and operational workflows.

This skill guides bots through safe Sheets inspection, reporting, and approved updates without corrupting formulas, ranges, or shared business data.

## What Google Sheets does

- Reads spreadsheet metadata, tabs, ranges, formulas, and values.
- Summarizes and validates spreadsheet data.
- Appends or updates ranges when explicitly approved.
- Helps design sheet schemas, formulas, validation rules, and reporting tabs.
- Protects private spreadsheet content and credentials.

## When a bot should use it

Use Google Sheets when the user asks to inspect, summarize, clean, update, append, analyze, or automate spreadsheet data.

Ask before writing, clearing ranges, changing formulas, modifying sharing, or exporting private data.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify Sheets access, account, spreadsheet id, ranges, and read/write boundaries.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot auth, sheet/range errors, formulas, permissions, and data mismatches.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for Sheets workflows.

## Golden operating rule

Read metadata and a small sample before writing. For writes, specify exact spreadsheet id, tab, range, operation, and rollback/verification plan.
