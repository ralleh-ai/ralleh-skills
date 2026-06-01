# Restic Prompt Suggestions

## Purpose

Use these prompts to help users request Restic work safely.

## Prompts

- "Verify restic backup health for this VPS."
- "Plan backup paths and excludes for this provisioned host."
- "Run a restore test to a temporary directory."
- "Summarize latest snapshots without exposing secrets."

## Good bot behavior

The bot should inspect first, keep secrets private, ask before risky changes, preserve rollback where applicable, and verify the result before claiming success.
