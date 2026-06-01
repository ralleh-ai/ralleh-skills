# Task Handoff and Status Reporting Prompt Suggestions

## Purpose

Use these prompts to help users request task handoff and status reporting work safely, with enough scope for the bot to act without guessing.

## Good prompts

- "Create a handoff packet for this task with current state, files touched, commands run, verification, blockers, and next action."
- "Summarize this long task for the user without internal noise."
- "Mark blockers explicitly and separate facts from assumptions."
- "Prepare a resume note for the next agent."
- "Close the task only after listing verification evidence."

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
