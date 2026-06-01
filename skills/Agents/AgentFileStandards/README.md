# Agent File Standards Skill

## What Agent File Standards is

Agent File Standards is the skill for auditing and optimizing the Markdown files that define an agent: `SOUL.md`, `TOOLS.md`, `AGENTS.md`, `MEMORY.md`, `USER.md`, and `PATTERNS.md`.

It uses the golden definitions in [`../../../agents/Definitions/`](../../../agents/Definitions/) and the audit page in [`../../../agents/Evaluation/AgentFileAudit.md`](../../../agents/Evaluation/AgentFileAudit.md).

## What it does

- Identifies the type and purpose of an agent file.
- Checks organization, required sections, size, safety, and optimization.
- Flags content that belongs in another file or skill.
- Produces an audit verdict and improvement plan.
- Helps keep bootstrap-loaded context dense and useful.

## When a bot should use it

Use this skill when asked to review, optimize, create, or standardize agent files such as `SOUL.md`, `TOOLS.md`, `AGENTS.md`, `MEMORY.md`, `USER.md`, or `PATTERNS.md`.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify access to definition/audit files and target agent files.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot missing standards, oversized files, unsafe content, or unclear file ownership.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for agent-file audits.

## Golden operating rule

Do not rewrite an agent's identity or memory casually. Audit first, preserve durable value, move misplaced content, and ask before destructive edits.
