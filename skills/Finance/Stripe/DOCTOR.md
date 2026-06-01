# Stripe Doctor

## Purpose

Use this when Stripe auth, account/mode, webhooks, payouts, disputes, subscriptions, invoices, or reconciliation are failing or unclear.

## Fast triage

1. Confirm account id/name and test vs live mode.
2. Confirm secret presence without printing it.
3. Run a read-only balance or events query.
4. Check webhook endpoint health/events if integration is failing.
5. Check payout/refund/fee definitions if reconciliation is failing.

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| Wrong data | test/live mode/account | Switch to intended mode/account. |
| Auth failed | key/secret scope | Configure approved secret. |
| Webhook missing | endpoint/event delivery/signing secret | Inspect delivery logs and endpoint config. |
| Revenue mismatch | gross/net/fees/refunds/disputes | Reconcile metric definitions. |
| Subscription state unclear | customer/subscription id | Fetch read-only object state. |

## Doctor report format

Return status, account/mode, access method, read-only query result, blocker, and next action.
