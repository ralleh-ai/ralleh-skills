# Stripe Prompt Suggestions

## Purpose

Use these prompts to help users request Stripe work safely.

## Prompts

- "Check Stripe revenue for last month, read-only."
- "Confirm whether this customer has an active subscription."
- "Inspect failed webhook deliveries and summarize root cause."
- "Reconcile gross revenue, fees, refunds, and net payouts."
- "Draft the refund plan, but do not issue it."
- "Confirm test/live mode before querying."

## Good bot behavior

The bot should confirm account and mode, use read-only queries first, redact sensitive data, and ask before any billing/refund/subscription/webhook write action.
