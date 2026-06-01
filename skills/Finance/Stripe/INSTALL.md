# Stripe Install Guide

## Purpose

Use this file to verify safe Stripe access.

## Safety and scope

- Read-only by default.
- Do not print API keys, webhook secrets, customer PII, card data, or raw payment details unnecessarily.
- Do not refund, capture, cancel, bill, finalize/send invoices, change subscriptions, or change webhook endpoints without explicit approval.
- Always confirm test vs live mode.

## Prerequisites

- Approved Stripe access method: Stripe CLI, dashboard, API wrapper, or integration logs.
- Secret stored in approved secret store.
- Target account and mode: test or live.
- Date range and object type.

## Verify capability

1. Confirm account and mode without printing secrets.
2. Run a read-only account/balance/event query through approved tooling.
3. Confirm date range and object scope.
4. Report read-only capability and blockers.

Example command shape, if Stripe CLI is approved:

```bash
stripe balance retrieve
stripe events list --limit 5
```

## Handoff prompt

> Verify Stripe account and test/live mode. Use read-only queries first. Do not refund, bill, cancel, capture, or modify webhooks without explicit approval.
