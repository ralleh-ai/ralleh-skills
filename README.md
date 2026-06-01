# Ralleh Skills

> A golden operating library for AI employees: skills, role-agent templates, safety standards, installation runbooks, troubleshooting guides, and source-backed workflows that bots can read directly from GitHub.

Ralleh Skills is not a pile of prompts. It is a curated knowledge system for building reliable, auditable, production-grade agents.

Every file in this repo exists to help an AI worker answer four questions before it acts:

1. **What am I allowed to do?**
2. **What exact workflow should I follow?**
3. **How do I verify the result?**
4. **When must I stop and ask for approval?**

The goal is simple: give every Ralleh-managed bot the instincts of a senior operator — safe, useful, resourceful, and allergic to sloppy work.

---

## Start here

- [`pages/onboarding/README.md`](pages/onboarding/README.md) — first instructions a bot should read when entering a Ralleh-managed environment.
- [`skills/README.md`](skills/README.md) — complete skill map by family.
- [`agents/README.md`](agents/README.md) — standards for agent Markdown files and role-agent templates.
- [`docs/GOLDEN_CONTENT_STANDARD.md`](docs/GOLDEN_CONTENT_STANDARD.md) — what belongs in this public golden repo.
- [`docs/NAMING_STANDARD.md`](docs/NAMING_STANDARD.md) — folder and file naming rules.

---

## What this repo contains

```text
ralleh-skills/
├── pages/                  # curated multi-skill reading paths
│   └── onboarding/         # default bot onboarding sequence
├── skills/                 # golden reusable skills by capability family
├── agents/                 # agent file standards and role-agent templates
├── docs/                   # governance, naming, and quality standards
└── scripts/                # repo validation and quality gates
```

Each skill follows the same golden pattern:

```text
skills/<Family>/<Skill>/
├── README.md      # what it is, what it does, when to use it
├── INSTALL.md     # setup, verification, upgrade, and operational checks
├── DOCTOR.md      # troubleshooting, unsafe states, stop conditions
└── PROMPTS.md     # safe prompt patterns and user-facing examples
```

That structure is intentional. A bot can load the `README.md` for orientation, pull `INSTALL.md` when provisioning, use `DOCTOR.md` when something breaks, and rely on `PROMPTS.md` for safe user interactions.

---

## Core principles

### Golden, not noisy

This repo contains reusable, production-quality instruction. No scratch notes. No half-finished prompt experiments. No customer secrets. No environment-specific credentials.

### Skills over vibes

A skill is a compact operating capability: what to do, what not to do, how to verify, and how to recover. Agents should not improvise commands, schemas, credentials, or safety boundaries.

### Verification before done

A bot is not done when it thinks it is done. It is done when it has evidence: a test, health check, rendered page, status output, diff check, live fetch, or named blocker.

### Safety by default

External effects are gated. Reads are usually safe. Writes, purchases, posts, emails, public changes, permission changes, destructive actions, and billing changes require explicit approval.

### Public/private split

This public repo contains golden reusable instructions. Customer-specific hosts, internal URLs, credentials, private runbooks, and sensitive procedures belong in the private overlay repo.

---

## Skill families

### Foundation

- [`OperatingProtocol`](skills/Foundation/OperatingProtocol/README.md) — baseline conduct and execution discipline.
- [`SafetyApprovalBoundaries`](skills/Foundation/SafetyApprovalBoundaries/README.md) — when to act, when to ask, and when to stop.
- [`SkillLibraryNavigation`](skills/Foundation/SkillLibraryNavigation/README.md) — how bots should navigate this repo.

### Agents

- [`AgentFileStandards`](skills/Agents/AgentFileStandards/README.md) — audit and optimize `SOUL.md`, `TOOLS.md`, `AGENTS.md`, `MEMORY.md`, `USER.md`, and `PATTERNS.md`.

### Automation

- [`AgentBrowser`](skills/Automation/AgentBrowser/README.md) — safe browser inspection and web UI automation.

### Commerce

- [`RallehMcpShop`](skills/Commerce/RallehMcpShop/README.md) — curated product/shopping research with known source collections and affiliate-safe presented URLs.

### Communication

- [`OpenClawA2A`](skills/Communication/OpenClawA2A/README.md) — safe agent-to-agent routing, delegation, and handoffs.

### Data

- [`SQLite`](skills/Data/SQLite/README.md) — local database integrity, backups, WAL, and migrations.
- [`Postgres`](skills/Data/Postgres/README.md) — PostgreSQL service health, backups, roles, migrations, and exposure checks.
- [`Pgvector`](skills/Data/Pgvector/README.md) — vector extension checks and index guidance inside Postgres.
- [`Redis`](skills/Data/Redis/README.md) — cache, queue, sidecar, persistence, and local-only exposure diagnostics.
- [`Qdrant`](skills/Data/Qdrant/README.md) — vector database collections, health, snapshots, and local/private operation.

### Engineering

- [`GitRepoDiscipline`](skills/Engineering/GitRepoDiscipline/README.md) — clean repo workflows, commits, and verification.
- [`VerificationBeforeDone`](skills/Engineering/VerificationBeforeDone/README.md) — evidence gates before claiming success.

### Finance

- [`Bookkeeper`](skills/Finance/Bookkeeper/README.md) — bookkeeping review, source evidence, categorization, and accountant handoff.
- [`ExpenseTracker`](skills/Finance/ExpenseTracker/README.md) — expense capture, evidence matching, and spend summaries.
- [`FinancialReporter`](skills/Finance/FinancialReporter/README.md) — management-ready financial reports from approved sources.
- [`Stripe`](skills/Finance/Stripe/README.md) — safe Stripe payments, subscriptions, payouts, and webhook workflows.

### Infrastructure

- [`Caddy`](skills/Infrastructure/Caddy/README.md) — HTTPS, reverse proxying, headers, logs, HTTP/3, and systemd checks.
- [`Tailscale`](skills/Infrastructure/Tailscale/README.md) — private mesh networking, tags, node verification, and tailnet-safe access.
- [`Docker`](skills/Infrastructure/Docker/README.md) — Docker Engine and Compose operations.
- [`Restic`](skills/Infrastructure/Restic/README.md) — encrypted backups, snapshots, restore testing, and retention.
- [`GoRuntime`](skills/Infrastructure/GoRuntime/README.md) — Go toolchain build/test/provisioner runtime.
- [`HostingerVps`](skills/Infrastructure/HostingerVps/README.md) — Hostinger VPS/DNS discovery and verification.
- [`RallehMcp`](skills/Infrastructure/RallehMcp/README.md) — install, upgrade, backup, health-check, and run the VPS-local Ralleh MCP runtime.

### Knowledge

- [`RallehMcpSearch`](skills/Knowledge/RallehMcpSearch/README.md) — curated content/news/research lookup, consensus, and conflict detection without arbitrary crawling.

### Marketing

- [`GoogleAds`](skills/Marketing/GoogleAds/README.md) — read-first ad campaign reporting and approved change planning.
- [`GoogleAnalytics`](skills/Marketing/GoogleAnalytics/README.md) — GA4 reporting, instrumentation checks, and conversion analysis.
- [`LinkedInManager`](skills/Marketing/LinkedInManager/README.md) — LinkedIn drafts, reviews, and approved publishing workflows.

### Memory

- [`Engram`](skills/Memory/Engram/README.md) — durable semantic memory service and CLI for bots.
- [`RecallWorkflow`](skills/Memory/RecallWorkflow/README.md) — disciplined memory recall before answering context-heavy questions.

### Observability

- [`TokenDoctor`](skills/Observability/TokenDoctor/README.md) — observe-only token/context bloat diagnostics.

### Operations

- [`TaskHandoffStatusReporting`](skills/Operations/TaskHandoffStatusReporting/README.md) — clean handoffs, summaries, and status updates.
- [`ToolInstallationSupportPattern`](skills/Operations/ToolInstallationSupportPattern/README.md) — install/support pattern for tools and services.
- [`TroubleshootingRunbook`](skills/Operations/TroubleshootingRunbook/README.md) — structured diagnosis and recovery.

### Platforms

- [`GitHub`](skills/Platforms/GitHub/README.md) — safe repo, issue, PR, CI, release, and permission workflows.
- [`FigmaMcp`](skills/Platforms/FigmaMcp/README.md) — safe Figma design-context extraction and review.

### Productivity

- [`GoogleSheets`](skills/Productivity/GoogleSheets/README.md) — safe spreadsheet reads, reports, and approved updates.
- [`Gog`](skills/Productivity/Gog/README.md) — Google Workspace CLI workflows.
- [`Office365Connector`](skills/Productivity/Office365Connector/README.md) — Microsoft 365 connector workflows.
- [`CalendarScheduler`](skills/Productivity/CalendarScheduler/README.md) — provider-agnostic scheduling and event drafting.

### Security

- [`PromptDefense`](skills/Security/PromptDefense/README.md) — prompt-injection, social engineering, and trust-boundary defense.

### Task management

- [`Cortex`](skills/TaskManagement/Cortex/README.md) — durable operational task ledger for bots.

### Travel

- [`RallehMcpTravel`](skills/Travel/RallehMcpTravel/README.md) — curated flight/travel research with fare warnings and no booking/payment automation.

### Visualization

- [`DiagramMaker`](skills/Visualization/DiagramMaker/README.md) — verified SVG/HTML or Excalidraw diagram artifacts.

### Voice

- [`TalkVoice`](skills/Voice/TalkVoice/README.md) — safe conversational voice interaction.
- [`PhoneControl`](skills/Voice/PhoneControl/README.md) — permission-first paired phone/device control.
- [`VoiceStream`](skills/Voice/VoiceStream/README.md) — realtime voice stream lifecycle and guardrails.
- [`WhisperStt`](skills/Voice/WhisperStt/README.md) — speech-to-text transcription.
- [`TtsElevenLabs`](skills/Voice/TtsElevenLabs/README.md) — cloud TTS with ElevenLabs or approved Cartesia overlay.

---

## Role-agent templates

Ralleh Skills also defines golden role-agent baselines. These are not personalities for fun; they are operational templates for department-grade AI workers.

- [`agents/finance/README.md`](agents/finance/README.md) — Finance agent: close, reporting, expenses, controls, Stripe, and financial hygiene.
- [`agents/sales/README.md`](agents/sales/README.md) — Sales agent: lead qualification, pipeline hygiene, discovery, outreach, and proposal follow-up.
- [`agents/it/README.md`](agents/it/README.md) — IT agent: full-stack software, networking, hosting, data, architecture, observability, security, backups, and incident response.

Agent definition standards live here:

- [`agents/Definitions/SOUL.md`](agents/Definitions/SOUL.md)
- [`agents/Definitions/IDENTITY.md`](agents/Definitions/IDENTITY.md)
- [`agents/Definitions/AGENTS.md`](agents/Definitions/AGENTS.md)
- [`agents/Definitions/SKILLS.md`](agents/Definitions/SKILLS.md)
- [`agents/Definitions/TOOLS.md`](agents/Definitions/TOOLS.md)
- [`agents/Definitions/DOCTOR.md`](agents/Definitions/DOCTOR.md)
- [`agents/Definitions/MEMORY.md`](agents/Definitions/MEMORY.md)
- [`agents/Definitions/USER.md`](agents/Definitions/USER.md)
- [`agents/Definitions/PATTERNS.md`](agents/Definitions/PATTERNS.md)
- [`agents/Evaluation/AgentFileAudit.md`](agents/Evaluation/AgentFileAudit.md)

A bot should be able to read those files and evaluate whether its own agent files are golden, usable, bloated, risky, or misplaced.

---

## Ralleh MCP skills

The newest service family is Ralleh MCP: a VPS-local Go MCP runtime for enterprise-grade shopping and travel research.

- [`RallehMcp`](skills/Infrastructure/RallehMcp/README.md) teaches bots how to install, upgrade, back up, health-check, and operate the runtime locally on a VPS.
- [`RallehMcpShop`](skills/Commerce/RallehMcpShop/README.md) teaches curated product search, source collections, affiliate-safe URLs, and no-purchase boundaries.
- [`RallehMcpTravel`](skills/Travel/RallehMcpTravel/README.md) teaches flight/travel research, fare warnings, source readiness, and no-booking boundaries.

Ralleh MCP rules are strict:

- no arbitrary website crawling
- no captcha bypass
- no checkout
- no booking
- no credit cards
- no passenger PII
- local-only health endpoints by default
- bounded timeouts, bounded concurrency, partial-result honesty

---

## How bots should use this repo

1. Read [`pages/onboarding/README.md`](pages/onboarding/README.md) first when entering a Ralleh environment.
2. Identify the relevant skill family in [`skills/README.md`](skills/README.md).
3. Read the skill `README.md` for purpose and boundaries.
4. Read `INSTALL.md` only when installing, upgrading, or verifying setup.
5. Read `DOCTOR.md` when the system is failing, degraded, or unsafe.
6. Read `PROMPTS.md` when user-facing examples or safe request wording are needed.
7. Verify before reporting success.
8. Ask for the one missing decision when an action would be risky, external, destructive, or credential-dependent.

---

## Quality gate

Before changes are committed, run:

```bash
node scripts/check-repo.mjs
git diff --check
```

The checker enforces repo hygiene, naming rules, local Markdown links, required skill entrypoints, and guardrails against unsafe or confusing golden content.

---

## Public repo rule

This repository is the public golden library.

Keep here:

- reusable skill workflows
- installation and troubleshooting patterns
- agent file standards
- role-agent templates
- safe prompt examples
- verification gates

Keep out:

- credentials
- private URLs
- customer-specific hosts
- secrets
- scratch notes
- temporary prompts
- unverified commands
- dangerous automation recipes

Private overlays belong in `ralleh-skills-private`.

---

## The standard

Ralleh agents should be able to read this repository and become better immediately.

Not louder. Not looser. Better.

More precise. More careful. More capable. More accountable.

That is the point of this library.
