# Finance Skills

## Purpose

This family contains golden skills for bookkeeping, expenses, reporting, payment-platform inspection, and financial controls.

It exists to help bots choose the right capability quickly, load only the files needed for the task, and keep safety, verification, and resource use explicit.

## Before using this family

- Use these skills for financial evidence and drafts. Do not move money, issue refunds, change subscriptions, or provide final tax/legal/accounting advice without human review.
- Start with the specific skill `README.md`; load `INSTALL.md`, `DOCTOR.md`, or `PROMPTS.md` only when the task needs setup, troubleshooting, or user-facing examples.
- Prefer read-only inspection until a write, external effect, destructive action, permission change, or sensitive-data operation is explicitly approved.
- Verify the result with the smallest meaningful check before reporting completion.

## Available skills

- [`Bookkeeper`](Bookkeeper/README.md) — safe bookkeeping workflows, transaction categorization, reconciliation, and records hygiene.
- [`ExpenseTracker`](ExpenseTracker/README.md) — capture, classify, review, and report expenses with receipt/evidence handling.
- [`FinancialReporter`](FinancialReporter/README.md) — produce financial summaries, variance notes, and management reports from approved sources.
- [`Stripe`](Stripe/README.md) — inspect Stripe customers, payments, subscriptions, invoices, payouts, and webhooks safely.

## Selection rule

Choose the narrowest skill that matches the user request. If two skills could apply, prefer the one closest to the target system or workflow, then pull in adjacent skills only when they are needed for setup, safety, memory, task tracking, or verification.

## Completion standard

A bot using this family should report:

- which skill files were used
- what scope was inspected or changed
- what approval was required or not required
- what verification was performed
- any blocker, risk, or next safe action
