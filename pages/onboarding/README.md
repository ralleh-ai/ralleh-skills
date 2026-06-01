# Bot Onboarding Page

## Purpose

Use this page when onboarding a bot into a Ralleh-managed environment. It is an ordered reading path, not a temporary bundle or scratch checklist.

## Guardrails before reading

- Read only the linked golden instructions unless the user asks for more.
- Stop and ask if a required private overlay, credential, host, or deployment value is missing.
- Do not run install, repair, delete, publish, or production-change steps unless the user asked for that action.
- After reading, report what you read and what you are ready to do next.

## Reading order

1. [`Operating Protocol`](../../skills/Foundation/OperatingProtocol/README.md)
2. [`Skill Library Navigation`](../../skills/Foundation/SkillLibraryNavigation/README.md)
3. [`Safety and Approval Boundaries`](../../skills/Foundation/SafetyApprovalBoundaries/README.md)
4. [`Git and Repo Discipline`](../../skills/Engineering/GitRepoDiscipline/README.md)
5. [`Verification Before Done`](../../skills/Engineering/VerificationBeforeDone/README.md)
6. [`ENGRAM Memory Skill`](../../skills/Memory/Engram/README.md)
7. [`Memory Recall Workflow`](../../skills/Memory/RecallWorkflow/README.md)
8. [`Task Handoff and Status Reporting`](../../skills/Operations/TaskHandoffStatusReporting/README.md)
9. [`Tool Installation Support Pattern`](../../skills/Operations/ToolInstallationSupportPattern/README.md)
10. [`Troubleshooting Runbook`](../../skills/Operations/TroubleshootingRunbook/README.md)

## Conditional platform skills

Read these when the bot will work with source control, design tools, ads, analytics, or social platforms:

- [`GitHub`](../../skills/Platforms/GitHub/README.md) — repositories, PRs, issues, CI, and releases.
- [`Figma MCP`](../../skills/Platforms/FigmaMcp/README.md) — Figma design-context extraction.
- [`Google Ads`](../../skills/Marketing/GoogleAds/README.md) — ad campaign reporting and change planning.
- [`Google Analytics`](../../skills/Marketing/GoogleAnalytics/README.md) — GA4 reporting and instrumentation checks.
- [`LinkedIn Manager`](../../skills/Marketing/LinkedInManager/README.md) — LinkedIn drafts, reviews, and approved publishing workflows.

Use each skill's `INSTALL.md`, `DOCTOR.md`, and `PROMPTS.md` only when installing, troubleshooting, or teaching that specific workflow.

## Conditional agent-file standards

Read this when the bot will create, audit, or optimize agent Markdown files:

- [`Agent File Standards`](../../skills/Agents/AgentFileStandards/README.md) — overview of agent-file audits and optimization.
- [`Agent Standards Index`](../../agents/README.md) — definitions for SOUL, TOOLS, AGENTS, MEMORY, USER, and PATTERNS.
- [`Agent File Audit`](../../agents/Evaluation/AgentFileAudit.md) — audit procedure and verdict format.

Use the specific definition file under `agents/Definitions/` for the target file type.

## Conditional voice skills

Read these when the bot will handle voice, phone, live audio, transcription, or spoken output:

- [`Talk Voice`](../../skills/Voice/TalkVoice/README.md) — voice conversation overview and guardrails.
- [`Phone Control`](../../skills/Voice/PhoneControl/README.md) — paired phone/device control boundaries.
- [`Voice Stream`](../../skills/Voice/VoiceStream/README.md) — realtime voice session lifecycle.
- [`Whisper STT`](../../skills/Voice/WhisperStt/README.md) — speech-to-text transcription.
- [`TTS ElevenLabs`](../../skills/Voice/TtsElevenLabs/README.md) — cloud text-to-speech with provider safety.

Use each skill's `INSTALL.md`, `DOCTOR.md`, and `PROMPTS.md` only when installing, troubleshooting, or teaching that specific workflow.

## Conditional communication skill

Read this when the bot will coordinate with other agents or sessions:

- [`OpenClaw A2A`](../../skills/Communication/OpenClawA2A/README.md) — overview of safe agent-to-agent routing and handoffs.
- [`OpenClaw A2A Install`](../../skills/Communication/OpenClawA2A/INSTALL.md) — when verifying A2A capability.
- [`OpenClaw A2A Doctor`](../../skills/Communication/OpenClawA2A/DOCTOR.md) — when routing, sessions, or handoffs fail.
- [`OpenClaw A2A Prompts`](../../skills/Communication/OpenClawA2A/PROMPTS.md) — when teaching a user how to request delegation.

## Conditional security skill

Read this whenever the bot processes untrusted external content or suspected injection:

- [`Prompt Defense`](../../skills/Security/PromptDefense/README.md) — overview of prompt-injection and trust-boundary defense.
- [`Prompt Defense Install`](../../skills/Security/PromptDefense/INSTALL.md) — when verifying prompt-defense behavior.
- [`Prompt Defense Doctor`](../../skills/Security/PromptDefense/DOCTOR.md) — when investigating a suspected injection or leak.
- [`Prompt Defense Prompts`](../../skills/Security/PromptDefense/PROMPTS.md) — when teaching a user how to request security reviews.

## Conditional visualization skill

Read this when the bot will create a diagram or visual artifact:

- [`Diagram Maker`](../../skills/Visualization/DiagramMaker/README.md) — overview of diagram artifact creation.
- [`Diagram Maker Install`](../../skills/Visualization/DiagramMaker/INSTALL.md) — when verifying diagram generation capability.
- [`Diagram Maker Doctor`](../../skills/Visualization/DiagramMaker/DOCTOR.md) — when a diagram is missing, invalid, or unreadable.
- [`Diagram Maker Prompts`](../../skills/Visualization/DiagramMaker/PROMPTS.md) — when teaching a user how to request diagrams.

## Conditional automation skill

Read this when the bot will inspect or operate web pages:

- [`Agent Browser`](../../skills/Automation/AgentBrowser/README.md) — overview of safe browser inspection and web UI automation.
- [`Agent Browser Install`](../../skills/Automation/AgentBrowser/INSTALL.md) — when confirming browser automation capability.
- [`Agent Browser Doctor`](../../skills/Automation/AgentBrowser/DOCTOR.md) — when browser automation is broken or blocked.
- [`Agent Browser Prompts`](../../skills/Automation/AgentBrowser/PROMPTS.md) — when teaching a user how to request browser workflows.

## Conditional observability skill

Read this when the bot will audit token usage, context bloat, cost, or expensive sessions:

- [`Token Doctor`](../../skills/Observability/TokenDoctor/README.md) — overview of observe-only token/context diagnostics.
- [`Token Doctor Install`](../../skills/Observability/TokenDoctor/INSTALL.md) — when installing or verifying Token Doctor capability.
- [`Token Doctor Doctor`](../../skills/Observability/TokenDoctor/DOCTOR.md) — when reports are missing, unsafe, or confusing.
- [`Token Doctor Prompts`](../../skills/Observability/TokenDoctor/PROMPTS.md) — when teaching a user how to request token audits.

## Conditional task-management skill

Read this when the bot will manage substantial work, subagents, blockers, or project status:

- [`CORTEX Task Management`](../../skills/TaskManagement/Cortex/README.md) — overview of the operational task ledger.
- [`CORTEX Install`](../../skills/TaskManagement/Cortex/INSTALL.md) — when installing/configuring CORTEX.
- [`CORTEX Doctor`](../../skills/TaskManagement/Cortex/DOCTOR.md) — when CORTEX is broken or uncertain.
- [`CORTEX Prompts`](../../skills/TaskManagement/Cortex/PROMPTS.md) — when teaching a user how to interact with task workflows.

## Conditional ENGRAM companions

Only read these when relevant:

- [`ENGRAM Install`](../../skills/Memory/Engram/INSTALL.md) — when installing/configuring ENGRAM.
- [`ENGRAM Doctor`](../../skills/Memory/Engram/DOCTOR.md) — when ENGRAM is broken or uncertain.
- [`ENGRAM Prompts`](../../skills/Memory/Engram/PROMPTS.md) — when teaching a user how to interact with memory features.

## Completion response

After reading, summarize:

- Files read.
- Capabilities now available.
- Any missing private overlay or deployment-specific value.
- The verification check you will use before claiming future work is done.
