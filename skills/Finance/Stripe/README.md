# Stripe Skill

## What Stripe is

Stripe is the payments platform for customers, payment intents, charges, refunds, subscriptions, invoices, payouts, disputes, products, prices, and webhooks.

This skill guides bots through safe Stripe inspection, reporting, and change planning without accidentally refunding, billing, cancelling, or changing live payment objects.

## What Stripe does

- Reads customers, payments, subscriptions, invoices, payouts, disputes, and webhook status.
- Helps reconcile Stripe fees, net revenue, refunds, and payouts.
- Checks webhook/event delivery and integration health.
- Drafts payment/subscription changes for approval.

## When a bot should use it

Use Stripe when the user asks about payments, subscriptions, invoices, refunds, payouts, disputes, Stripe webhooks, revenue reconciliation, or billing-system state.

Ask before refunds, captures, cancellations, subscription changes, invoice finalization/sending, customer changes, or webhook endpoint changes.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify Stripe CLI/API access, mode, account, and read-only reporting.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot auth, test/live confusion, webhooks, payouts, disputes, and reconciliation gaps.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for Stripe workflows.

## Golden operating rule

Always confirm test vs live mode and account id before acting. Stripe write actions require explicit approval and a rollback/verification plan.
