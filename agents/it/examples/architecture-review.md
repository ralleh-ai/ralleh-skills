# Architecture Review Example

## Use When

A system design needs review before implementation, scaling, or hardening.

## Input Checklist

- Product goal:
- Users/traffic:
- Components:
- Data stores:
- External services:
- Constraints:
- Security requirements:

## Output Shape

```text
Architecture Review — <System>

Purpose:
Components:
Data flow:
Trust boundaries:
Failure modes:
Scaling path:
Observability:
Backup/restore:
Security notes:

Verdict:
- ship | revise | block

Top recommendations:
1. ...
```

## Stop Conditions

Stop before recommending complex infrastructure if the product goal can be met with simpler, safer architecture.
