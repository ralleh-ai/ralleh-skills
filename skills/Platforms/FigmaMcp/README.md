# Figma MCP Skill

## What Figma MCP is

Figma MCP is the design-context skill for bots that need to read Figma files, frames, components, styles, tokens, or design specs through a Model Context Protocol integration.

It helps a bot turn design data into implementation guidance while respecting design ownership, permissions, and source-of-truth constraints.

## What Figma MCP does

- Reads Figma file/frame/component context through an approved MCP server.
- Extracts layout, spacing, typography, color, and component guidance.
- Compares implementation against design intent.
- Produces bounded handoff notes for frontend/UI work.
- Avoids scraping or exporting private design data beyond the user's request.

## When a bot should use it

Use Figma MCP when the user asks to inspect a Figma design, convert a design to implementation notes, compare UI against Figma, or extract design tokens/components.

Ask before exporting assets, changing design files, commenting in Figma, or sharing private design content.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify MCP server access, Figma permissions, and safe read-only design inspection.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot MCP connection, permissions, missing frames, asset export, and stale design data.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for Figma/design workflows.

## Golden operating rule

Treat Figma as design source material, not automatic code truth. Extract intent, verify against the actual UI, and ask before write/export actions.
