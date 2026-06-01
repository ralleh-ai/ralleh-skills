# Bookkeeper Skill

## What Bookkeeper is

Bookkeeper is the finance operations skill for maintaining clean books: transaction review, categorization, reconciliation support, source-document matching, and bookkeeping handoffs.

It helps a bot organize financial records without pretending to be a CPA, tax advisor, or final approver.

## What Bookkeeper does

- Reviews bank/card/payment transactions from approved exports or accounting tools.
- Suggests categories, vendors, memos, and missing documentation.
- Flags duplicates, uncategorized items, unusual transactions, and reconciliation gaps.
- Prepares bookkeeping handoff notes for owner/accountant review.
- Keeps financial data private and source-backed.

## When a bot should use it

Use Bookkeeper when the user asks to organize transactions, classify expenses/income, reconcile accounts, prepare books for review, or identify bookkeeping gaps.

Ask before making changes in accounting systems, deleting/merging records, or making tax/legal claims.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify access to bookkeeping source data and approved accounting tools.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot missing exports, reconciliation gaps, duplicate data, and account/tool access.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for bookkeeping workflows.

## Golden operating rule

Bookkeeping suggestions must be source-backed and reviewable. The bot can prepare and flag; the owner/accountant approves final books and tax treatment.
