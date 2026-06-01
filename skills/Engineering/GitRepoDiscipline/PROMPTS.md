# Git and Repo Discipline Prompt Suggestions

## Purpose

Use these prompts to help users request git and repo discipline work safely, with enough scope for the bot to act without guessing.

## Good prompts

- "Check this repo before I commit and tell me what is safe to include."
- "Create a focused commit for only the requested changes and verify the diff first."
- "Review the current git status and flag unrelated user changes."
- "Run the repo quality gate and tell me exactly what blocks the commit."
- "Push this branch only after verification passes."

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
