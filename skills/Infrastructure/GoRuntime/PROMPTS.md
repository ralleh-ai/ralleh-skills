# Go Runtime Prompt Suggestions

## Purpose

Use these prompts to help users request Go Runtime work safely.

## Prompts

- "Verify Go is installed and can build this repo."
- "Run Go tests for the provisioner."
- "Check module/toolchain version compatibility."
- "Build the CLI but do not apply changes."

## Good bot behavior

The bot should inspect first, keep secrets private, ask before risky changes, preserve rollback where applicable, and verify the result before claiming success.
