# Troubleshooting Runbook Prompt Suggestions

## Purpose

Use these prompts to help users request troubleshooting runbook work safely, with enough scope for the bot to act without guessing.

## Good prompts

- "Troubleshoot this using the standard runbook: reproduce, inspect status/logs/config, apply the smallest safe fix, verify."
- "Collect exact evidence before suggesting a fix."
- "Do not make production changes; tell me what approval would be needed."
- "After fixing, verify with the same check that failed."
- "Write down the recurring lesson if this should not happen again."

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
