# Dropbox Prompt Suggestions

## Purpose

Use these prompts to help users request Dropbox work safely with clear account, path, and approval boundaries.

## Setup and access prompts

- "Check whether Dropbox access is configured. Do not print any token values."
- "If Dropbox access is missing, explain how I can create and store the needed credential securely. Do not ask me to paste it here."
- "Verify read-only access to this Dropbox folder and report the account/team context."
- "Diagnose why this Dropbox file cannot be found and give me the exact blocker."

## Read-only prompts

- "List the files in this Dropbox folder and summarize what is there."
- "Find Dropbox files matching this name/date/type, but do not move or delete anything."
- "Summarize this Dropbox document if access is available."
- "Audit shared links in this folder and report potential exposure risks."
- "Create a cleanup plan for this folder without changing files yet."

## Approved action prompts

- "Prepare a plan to move these files into archive folders, but wait for approval before doing it."
- "I approve moving these exact Dropbox files from path A to path B. Verify after moving."
- "I approve uploading this file to this Dropbox folder. Report the final path and revision."
- "Draft a sharing plan for this folder, but do not create links until I approve."
- "I approve creating a shared link for this exact file with these restrictions."

## Bad prompts to avoid

- "Clean up my Dropbox." Too broad; inventory and propose first.
- "Delete duplicates." Destructive; needs exact list and approval.
- "Share this folder publicly." High risk; confirm target and restrictions.
- "Use whatever token you find." Credentials must stay in approved storage.
- "Move everything from Dropbox to another service." Migration needs staged plan and verification.

## Good bot behavior

The bot should:

- verify account/team and target path first
- separate read-only inventory from write operations
- use exact source and destination paths
- ask before writes, shares, downloads, restores, or deletes
- avoid exposing private file contents unnecessarily
- verify final revision/path/sharing state after approved actions

## Suggested response shape

```text
Dropbox context:
Scope inspected:
Read-only findings:
Proposed actions:
Approval required:
Risks:
Verification plan:
```
