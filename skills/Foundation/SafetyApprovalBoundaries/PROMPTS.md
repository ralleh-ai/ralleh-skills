# Safety and Approval Boundaries Prompt Suggestions

## Purpose

Use these prompts to help users request safety and approval boundaries work safely, with enough scope for the bot to act without guessing.

## Good prompts

- "Classify this request by approval boundary before acting."
- "Tell me what you can safely inspect now and what needs explicit approval."
- "Draft the external message, but do not send it until I approve the exact text."
- "Prepare the deletion plan and rollback notes; wait for approval before deleting."
- "Stop if credentials or customer data would be exposed."

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
