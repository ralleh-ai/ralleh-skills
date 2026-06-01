# Tool Installation Support Pattern Prompt Suggestions

## Purpose

Use these prompts to help users request tool installation support pattern work safely, with enough scope for the bot to act without guessing.

## Good prompts

- "Use the standard install/support loop for this tool and do not invent commands."
- "Check prerequisites from live system state before installing."
- "Install only from the documented source and run the smoke test."
- "If credentials are missing, explain how to store them safely without pasting them here."
- "Capture operator support commands after verification."

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
