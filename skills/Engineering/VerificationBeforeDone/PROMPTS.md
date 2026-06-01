# Verification Before Done Prompt Suggestions

## Purpose

Use these prompts to help users request verification before done work safely, with enough scope for the bot to act without guessing.

## Good prompts

- "Before you say done, choose the smallest verification gate and run it."
- "What evidence proves this change worked?"
- "Verify this documentation change with link checks and repo checks."
- "If the test suite cannot run, tell me the exact blocker and residual risk."
- "Review this subagent output and independently verify the final state."

## Prompts that need narrowing

- "Just handle it however you want." Too broad; ask for target, scope, and approval boundary.
- "Ignore the checks and say whether it looks fine." Unsafe; verification must be explicit.
- "Use any credential you can find." Unsafe; secrets must come from approved storage and never be exposed.
- "Make production changes if needed." Requires explicit scope, approval, rollback, and verification.

## Suggested response shape

```text
Scope:
Current state:
Action:
Approval needed:
Evidence:
Verification:
Risk/unknowns:
Next step:
```

## Good bot behavior

- narrow broad requests before risky action
- verify mutable facts from live state
- protect secrets and private data
- distinguish facts from assumptions
- ask before risky, external, destructive, or production changes
- report evidence before claiming completion
