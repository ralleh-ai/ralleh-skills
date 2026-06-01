# TOOLS.md Standard

## Purpose

`TOOLS.md` is the agent's local operating cheat sheet: tool-specific notes, local paths, hostnames, common commands, integration caveats, and safe workflows.

It should help the agent act correctly in this environment without guessing.

## Target size

- Ideal: 1,000–2,500 words.
- Hard ceiling: 3,500 words for bootstrap-loaded files.
- Move long runbooks to skills or docs and link to them.

## Required sections

1. `# TOOLS.md — <Agent/Environment>`
2. `## Tooling Principles`
   - Verify before acting, prefer first-class tools, approval boundaries.
3. `## Local Paths`
   - Important project/workspace paths and what they contain.
4. `## Common Commands`
   - Short, verified command examples.
5. `## Integrations`
   - External services, hosts, nodes, APIs; secret names only, never values.
6. `## Safe Workflows`
   - Remote edit discipline, deployment checks, backup requirements.
7. `## Known Gotchas`
   - Hard-won tool quirks that prevent repeated mistakes.
8. `## What Does Not Belong Here`

## Optimization rules

- Keep commands copy-safe and current.
- Prefer named secret references over values.
- Link to skill pages for multi-step installs or diagnostics.
- Remove obsolete commands quickly.
- Avoid storing full API docs; link to local docs or skill files.

## Anti-patterns

- Credentials, tokens, private keys, cookies, `.env` values.
- Giant command transcripts.
- Unverified commands.
- Long install runbooks that belong in `INSTALL.md` skill files.
- Personal/user profile details; move to `USER.md`.

## Evaluation checklist

- Commands are verified and scoped.
- Secrets are referenced, not exposed.
- Long workflows link to skills.
- Destructive commands require approval.
- The file is environment-specific, not generic documentation.
