# Skill Library Navigation Prompt Suggestions

## Purpose

Use these prompts to help users request skill library navigation work safely, with enough scope for the bot to act without guessing.

## Good prompts

- "Find the right skill for this task and read only what is necessary."
- "Given this skill URL, load the README first and tell me which companion file is relevant."
- "Use the onboarding page to choose the correct skill path."
- "Audit whether these skill links are canonical and not stale."
- "Tell me which files you read and why."

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
