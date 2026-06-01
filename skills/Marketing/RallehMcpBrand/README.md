# Ralleh MCP Brand Skill

## What Ralleh MCP Brand is

Ralleh MCP Brand is the brand memory and governance skill for `ralleh-mcp-brand`. It stores brand profiles, voice, messaging, personas, campaign memory, style guides, and audit history in a local SQLite-backed MCP service.

It helps bots understand, validate, improve, and preserve a brand over time.

## What Ralleh MCP Brand does

- Stores durable multi-brand identity and voice data.
- Validates content against forbidden terms, preferred phrases, compliance rules, and brand safety boundaries.
- Tracks versions and audit events for brand writes.
- Supports campaign memory and lessons learned.
- Returns structured JSON with scores, violations, suggestions, and rewrites.

## When a bot should use it

Use Ralleh MCP Brand when creating, reviewing, validating, rewriting, or learning from branded content, campaigns, messaging frameworks, audience personas, style guides, and brand positioning.

## Operating rules

- Read brand profile/voice before writing branded content.
- Ask before mutating canonical brand truth.
- Never invent brand values, legal claims, competitors, or personas as facts.
- Treat validation scores as decision support, not legal approval.
- Preserve audit logs and version history.
- Keep the service local-only on the VPS unless an approved exposure plan exists.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — install and verify `ralleh-mcp-brand`.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot brand memory, validation, storage, and audit issues.
- [`PROMPTS.md`](PROMPTS.md) — prompt patterns for brand strategy, content validation, campaign memory, and rewrites.

## Golden operating rule

Read canonical brand memory before creating brand work, ask before mutating brand truth, preserve audit/version history, and treat scores as decision support rather than legal or executive approval.
