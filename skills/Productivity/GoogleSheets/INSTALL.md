# Google Sheets Install Guide

## Purpose

Use this file to verify safe Google Sheets capability.

## Safety and scope

- Read-only by default.
- Do not clear, overwrite, append, share, export, or change formulas without explicit approval.
- Do not print OAuth tokens, service-account keys, or private spreadsheet data unnecessarily.
- Use exact ranges. Avoid whole-sheet writes unless specifically approved.

## Prerequisites

- Approved access method: Google Sheets API, `gog`, MCP/server, Apps Script, or manual export.
- Auth stored in approved secret/config store.
- Spreadsheet id, tab name, and target range.
- Read/write scope clearly known.

## Verify capability

1. Confirm account/auth without printing secrets.
2. Fetch spreadsheet metadata.
3. Read a small range sample.
4. Confirm tab/range semantics and formulas if relevant.
5. Report read-only capability and blockers.

## Handoff prompt

> Verify Google Sheets account, spreadsheet id, tab, and range. Read metadata and sample values first. Do not write, clear, share, or change formulas without explicit approval.
