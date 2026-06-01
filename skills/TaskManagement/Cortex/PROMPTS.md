# CORTEX Prompt Suggestions

## Purpose

Use these prompts to help users interact with CORTEX-backed task management naturally. These are user-facing prompt patterns, not shell commands.

## Capture work

- "Create a CORTEX task for this and assign it to Carmack."
- "Track this as high priority under the CMS project."
- "Break this into a parent task and subtasks."
- "Add a task for the follow-up we just discovered."

## Status and planning

- "What is currently in progress?"
- "Show me blocked tasks."
- "What needs my input?"
- "What should ISBE work on next?"
- "Give me the status of the Ralleh project from CORTEX."

## Handoffs and subagents

- "Create the CORTEX task, spawn the right specialist, and attach the session key."
- "Prepare a CORTEX brief for this task."
- "Resume the failed CORTEX task and keep the task history intact."
- "Move this task to Picasso and include the verification gate."

## Blockers and input

- "Mark this blocked until the API token is available."
- "Ask me for the one decision needed to continue."
- "Record that this failed because the migration test did not pass."
- "Retry this failed task with the new information."

## Completion evidence

- "Close this task only after tests pass and include the evidence."
- "Mark this done with the commit hash and verification command."
- "Do not close the task yet; update progress and note the blocker."
- "Audit recently completed tasks for missing completion evidence."

## Good bot behavior

When a user asks for task management, the bot should:

1. Query live CORTEX state instead of relying on memory.
2. Create or resume a task for substantial work.
3. Update status truthfully: in-progress, blocked, needs-input, failed, done, or cancelled.
4. Ask one clear question when human input is required.
5. Mark done only with verification evidence.
6. Put reusable lessons in memory, not in CORTEX task notes.

## Example handoff prompt

> Use CORTEX to manage this work. Create or resume the task, keep status current, record blockers/input explicitly, and close only with verification evidence. If CORTEX is unavailable, run the CORTEX Doctor and report the blocker.
