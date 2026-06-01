# Google Drive Prompt Suggestions

## Purpose

Use these prompts to help users request Google Drive work safely with clear account, drive, file/folder, and approval boundaries.

## Setup and access prompts

- "Check whether Google Drive access is configured. Do not print any token values."
- "If Google Drive access is missing, explain how I can create and store the needed Google credential securely. Do not ask me to paste it here."
- "Verify read-only access to this Drive folder and report the account/workspace context."
- "Diagnose why this Google Drive file cannot be found and give me the exact blocker."
- "Confirm whether this link is My Drive, shared drive, shared-with-me, shortcut, or Google-native file."

## Read-only prompts

- "List the files in this Google Drive folder and summarize what is there."
- "Find Drive files matching this name/date/type, but do not move or delete anything."
- "Summarize this Google Drive document if access is available."
- "Audit sharing links in this folder and report potential exposure risks."
- "Create a cleanup plan for this folder without changing files yet."
- "List Google-native files that would need export conversion before backup."

## Approved action prompts

- "Prepare a plan to move these files into archive folders, but wait for approval before doing it."
- "I approve moving these exact Drive files from folder A to folder B. Verify after moving."
- "I approve uploading this file to this Drive folder. Report the final file ID and path."
- "Draft a sharing plan for this folder, but do not create links until I approve."
- "I approve creating a restricted sharing link for this exact file with these permissions."
- "I approve exporting this Google Doc as PDF to this approved destination."

## Bad prompts to avoid

- "Clean up my Drive." Too broad; inventory and propose first.
- "Delete duplicates." Destructive; needs exact list and approval.
- "Share this folder publicly." High risk; confirm target and restrictions.
- "Use domain-wide delegation for convenience." Overbroad; least privilege first.
- "Move everything from Drive to another service." Migration needs staged plan and verification.

## Good bot behavior

The bot should:

- verify account/workspace/drive and target file/folder first
- separate read-only inventory from write operations
- use exact file/folder IDs or paths
- ask before writes, shares, exports/downloads, restores, or deletes
- avoid exposing private file contents unnecessarily
- respect Workspace sharing, retention, and DLP policies
- verify final file ID/path/revision/sharing state after approved actions

## Suggested response shape

```text
Google Drive context:
Scope inspected:
Read-only findings:
Proposed actions:
Approval required:
Risks:
Verification plan:
```
