# Ralleh Skills

Public, bot-readable skill instructions for Ralleh AI agents.

Each skill is a self-contained Markdown guide that an agent can read from a repo URL and then know how to install, configure, verify, and support that tool or capability.

## Start here

- [`pages/onboarding/README.md`](pages/onboarding/README.md) — the first 10 instructions a bot should read when onboarding into a Ralleh-managed environment.
- [`skills/README.md`](skills/README.md) — skill library map by family.
- [`agents/README.md`](agents/README.md) — golden standards for agent Markdown files.
- [`agents/finance/README.md`](agents/finance/README.md) — golden baseline Finance role agent template.
- [`agents/sales/README.md`](agents/sales/README.md) — golden baseline Sales role agent template.
- [`agents/it/README.md`](agents/it/README.md) — golden baseline IT role agent template.

## Organization

```text
pages/                       # curated multi-instruction pages
  onboarding/README.md       # bot onboarding page
skills/
  Foundation/<Skill>/        # operating rules, navigation, safety
  Agents/<Skill>/            # agent file standards and audits
  Communication/<Skill>/     # agent/session/user communication patterns
  Engineering/<Skill>/       # git, implementation, verification
  Automation/<Skill>/        # browser and controlled external-system workflows
  Observability/<Skill>/     # cost, context, health, and usage diagnostics
  Platforms/<Skill>/         # GitHub, Figma, and platform integrations
  Marketing/<Skill>/         # ads, analytics, and social marketing workflows
  Productivity/<Skill>/      # office suites, sheets, calendars, docs
  Finance/<Skill>/           # bookkeeping, expenses, reports, payments
  Security/<Skill>/          # prompt, secret, and trust-boundary defenses
  Visualization/<Skill>/     # diagrams, architecture maps, visual artifacts
  Voice/<Skill>/             # voice, phone, STT, streams, and TTS
  Memory/<Skill>/            # ENGRAM and recall workflows
  TaskManagement/<Skill>/    # CORTEX and operational task ledgers
  Operations/<Skill>/        # handoffs, installation support, troubleshooting
templates/                   # authoring templates
```

Naming and golden-content rules are enforced by [`docs/NAMING_STANDARD.md`](docs/NAMING_STANDARD.md), [`docs/GOLDEN_CONTENT_STANDARD.md`](docs/GOLDEN_CONTENT_STANDARD.md), and [`scripts/check-repo.mjs`](scripts/check-repo.mjs).

## Canonical skill examples

- [ENGRAM Memory Skill](skills/Memory/Engram/README.md) — durable semantic memory service and CLI for bots.
- [CORTEX Task Management Skill](skills/TaskManagement/Cortex/README.md) — durable operational task ledger for bots.
- [Agent Browser Skill](skills/Automation/AgentBrowser/README.md) — safe browser inspection and web UI automation for bots.
- [Token Doctor Skill](skills/Observability/TokenDoctor/README.md) — observe-only token/context bloat diagnostics for bots.
- [OpenClaw A2A Skill](skills/Communication/OpenClawA2A/README.md) — safe agent-to-agent routing and handoffs.
- [Prompt Defense Skill](skills/Security/PromptDefense/README.md) — prompt-injection and trust-boundary defense.
- [Diagram Maker Skill](skills/Visualization/DiagramMaker/README.md) — verified SVG/HTML or Excalidraw diagram artifacts.
- [Agent File Standards Skill](skills/Agents/AgentFileStandards/README.md) — audit and optimize SOUL, TOOLS, AGENTS, MEMORY, USER, and PATTERNS files.
- [GitHub Skill](skills/Platforms/GitHub/README.md) — safe repo, issue, PR, CI, and release workflows.
- [Figma MCP Skill](skills/Platforms/FigmaMcp/README.md) — safe Figma design-context extraction.
- [Google Ads Skill](skills/Marketing/GoogleAds/README.md) — read-first ad campaign reporting and change planning.
- [Google Analytics Skill](skills/Marketing/GoogleAnalytics/README.md) — GA4 reporting and instrumentation checks.
- [LinkedIn Manager Skill](skills/Marketing/LinkedInManager/README.md) — LinkedIn drafts, reviews, and approved publishing workflows.
- [Bookkeeper Skill](skills/Finance/Bookkeeper/README.md) — source-backed bookkeeping review and handoffs.
- [Expense Tracker Skill](skills/Finance/ExpenseTracker/README.md) — expense capture, evidence matching, and spend summaries.
- [Financial Reporter Skill](skills/Finance/FinancialReporter/README.md) — management-ready financial reports from approved sources.
- [Stripe Skill](skills/Finance/Stripe/README.md) — safe Stripe payments, subscriptions, payouts, and webhook workflows.
- [Google Sheets Skill](skills/Productivity/GoogleSheets/README.md) — safe spreadsheet reads, reporting, and approved updates.
- [GOG Skill](skills/Productivity/Gog/README.md) — Google Workspace CLI workflows.
- [Office365 Connector Skill](skills/Productivity/Office365Connector/README.md) — Microsoft 365 connector workflows.
- [Calendar Scheduler Skill](skills/Productivity/CalendarScheduler/README.md) — provider-agnostic scheduling and event drafting.
- [Talk Voice Skill](skills/Voice/TalkVoice/README.md) — safe conversational voice interaction.
- [Phone Control Skill](skills/Voice/PhoneControl/README.md) — permission-first paired phone/device control.
- [Voice Stream Skill](skills/Voice/VoiceStream/README.md) — realtime voice stream lifecycle and guardrails.
- [Whisper STT Skill](skills/Voice/WhisperStt/README.md) — speech-to-text transcription.
- [TTS ElevenLabs Skill](skills/Voice/TtsElevenLabs/README.md) — cloud TTS with ElevenLabs or approved Cartesia overlay.

## How agents should use this repo

1. Open the requested bundle or skill file.
2. Follow the instructions in order.
3. Never invent missing commands, paths, secrets, or config fields.
4. If a step requires credentials or environment-specific values, use the private overlay repo or ask for the one missing input.

## Skill authoring standard

Public repo rule: include golden reusable instructions only. Put customer-specific hosts, private URLs, credentials, and internal runbooks in `ralleh-skills-private`.
