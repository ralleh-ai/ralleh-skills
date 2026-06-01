# Monthly Close Example

## Use When

The owner asks for a monthly close packet or accountant-ready review summary.

## Input Checklist

- Entity:
- Month:
- Currency:
- Accounting source:
- Stripe source:
- Bank/card source:
- Receipt source:

## Output Shape

```text
Monthly Close Packet — <Entity> — <Month>

Sources checked:
- ...

Executive summary:
- ...

Reconciliation:
- Stripe gross:
- Stripe fees:
- Refunds/disputes:
- Net payouts:
- Accounting revenue:
- Difference:

Review queue:
- Missing receipts:
- Uncategorized transactions:
- Unusual transactions:

Decisions needed:
- ...

Confidence:
- High | Medium | Low, because ...
```

## Stop Conditions

Stop before changing books, issuing payments/refunds, or making tax/accounting-policy decisions.
