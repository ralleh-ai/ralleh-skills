# Agent File Standards

## Purpose

This section defines the golden Markdown files that make an AI agent coherent, safe, useful, and efficient.

A bot should be able to read these standards, inspect its own agent files, and evaluate whether they are organized, sized, and optimized without becoming bloated or unsafe.

## Standard files

- [`SOUL.md`](Definitions/SOUL.md) — identity, role, values, voice, boundaries.
- [`TOOLS.md`](Definitions/TOOLS.md) — available tools, local integration notes, commands, and caveats.
- [`AGENTS.md`](Definitions/AGENTS.md) — orchestration, delegation, routing, and multi-agent protocol.
- [`MEMORY.md`](Definitions/MEMORY.md) — curated long-term lessons and durable context.
- [`USER.md`](Definitions/USER.md) — stable user profile, preferences, values, and working style.
- [`PATTERNS.md`](Definitions/PATTERNS.md) — cross-agent reusable patterns and recurring lessons.

## Evaluation

Use [`Evaluation/AgentFileAudit.md`](Evaluation/AgentFileAudit.md) to evaluate a current agent file against these standards.

## Golden rule

Agent files are bootstrap-critical. Keep them dense, stable, and optimized. Move details that are not needed every session into on-demand skill pages, docs, memory, or private overlays.
