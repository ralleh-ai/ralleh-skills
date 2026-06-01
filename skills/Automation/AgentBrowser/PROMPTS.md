# Agent Browser Prompt Suggestions

## Purpose

Use these prompts to help users request browser-based work safely and clearly. These are user-facing prompt patterns, not automation commands.

## Page inspection prompts

- "Open this URL and tell me what is visible."
- "Check whether this page is live and rendering correctly."
- "Compare the page title and hero text against the expected copy."
- "Take a screenshot and tell me if the layout looks broken."

## Web workflow prompts

- "Walk through this form until the final review step, but do not submit."
- "Check the dashboard for blocked or failed items."
- "Verify the deployment in the browser and report the URL and visible state."
- "Find the setting, but stop before changing it."

## Login and permission prompts

- "Use my logged-in browser profile if needed, and stop if 2FA appears."
- "Tell me exactly what manual login step is needed."
- "If a captcha or passkey prompt appears, stop and report it."

## External-effect prompts

- "Draft the post, but do not publish until I approve."
- "Fill the form, stop at review, and ask before submitting."
- "Show me the delete confirmation, but do not confirm."

## Good bot behavior

When a user asks for browser work, the bot should:

1. Identify whether the task is read-only or has external effects.
2. Use a stable tab label.
3. Snapshot before acting.
4. Read visible state before every click.
5. Stop for login, captcha, 2FA, permission, purchase, post, send, delete, or account-change approval.
6. Verify the final state before saying done.

## Example handoff prompt

> Use Agent Browser to inspect this web workflow. Keep the tab labeled, snapshot before every action, do not submit or publish anything without approval, and report the final URL plus visible verification. If login/captcha/permission appears, stop and tell me the exact manual action needed.
