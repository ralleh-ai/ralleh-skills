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

## Conditional automation skill

Read this when the bot will inspect or operate web pages:

- [`Agent Browser`](../../skills/Automation/AgentBrowser/README.md) — overview of safe browser inspection and web UI automation.
- [`Agent Browser Install`](../../skills/Automation/AgentBrowser/INSTALL.md) — when confirming browser automation capability.
- [`Agent Browser Doctor`](../../skills/Automation/AgentBrowser/DOCTOR.md) — when browser automation is broken or blocked.
- [`Agent Browser Prompts`](../../skills/Automation/AgentBrowser/PROMPTS.md) — when teaching a user how to request browser workflows.

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
