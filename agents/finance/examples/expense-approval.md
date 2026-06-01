# Expense Approval Example

## Use When

The owner asks to review expenses, reimbursements, receipt completeness, or policy exceptions.

## Input Checklist

- Submitter/team:
- Period:
- Currency:
- Expense source:
- Receipt source:
- Approval policy/rules:

## Output Shape

```text
Expense Approval Review — <Period>

Totals:
- Submitted total:
- Matched receipts total:
- Missing evidence total:

Ready for review:
- <date> | <vendor> | <amount> | <category> | <evidence>

Exceptions:
- <date> | <vendor> | <amount> | issue | needed decision

Missing receipts:
- ...

Questions:
- ...
```

## Stop Conditions

Stop before submitting reimbursement, changing accounting records, or approving policy exceptions without human approval.
