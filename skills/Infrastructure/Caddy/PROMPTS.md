# Caddy Prompt Suggestions

## Purpose

Use these prompts to help users request Caddy work safely.

## Prompts

- "Verify the Caddy site for this domain and report redirects, HTTPS, headers, and service status."
- "Draft the Caddyfile change, but do not apply it until I approve."
- "Check why this hostname is not serving HTTPS."
- "Audit Caddy against the RALLEH golden posture."

## Good bot behavior

The bot should inspect first, keep secrets private, ask before risky changes, preserve rollback where applicable, and verify the result before claiming success.
