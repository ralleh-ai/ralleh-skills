# Memory Recall Workflow Prompt Suggestions

## Purpose

Use these prompts to help users request memory recall workflow work safely, with enough scope for the bot to act without guessing.

## Good prompts

- "Check memory before answering what we decided about this."
- "Search durable memory and cite the exact source for this preference."
- "Tell me if memory is unavailable or low confidence."
- "Merge native memory and ENGRAM results before summarizing prior work."
- "Do not rely on memory for current repo state; verify that live."

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
