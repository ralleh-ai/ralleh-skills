# OneDrive Prompt Suggestions

## Purpose

Use these prompts to help users request OneDrive work safely with clear account, tenant, path, and approval boundaries.

## Setup and access prompts

- "Check whether OneDrive access is configured. Do not print any token values."
- "If OneDrive access is missing, explain how I can create and store the Microsoft Graph credential securely. Do not ask me to paste it here."
- "Verify read-only access to this OneDrive folder and report the tenant/account context."
- "Diagnose why this OneDrive file cannot be found and give me the exact blocker."
- "Confirm whether this link is personal OneDrive, work OneDrive, SharePoint, or Teams-backed."

## Read-only prompts

- "List the files in this OneDrive folder and summarize what is there."
- "Find OneDrive files matching this name/date/type, but do not move or delete anything."
- "Summarize this OneDrive document if access is available."
- "Audit sharing links in this folder and report potential exposure risks."
- "Create a cleanup plan for this folder without changing files yet."

## Approved action prompts

- "Prepare a plan to move these files into archive folders, but wait for approval before doing it."
- "I approve moving these exact OneDrive files from path A to path B. Verify after moving."
- "I approve uploading this file to this OneDrive folder. Report the final path and item ID."
- "Draft a sharing plan for this folder, but do not create links until I approve."
- "I approve creating a sharing link for this exact file with these restrictions."

## Bad prompts to avoid

- "Clean up my OneDrive." Too broad; inventory and propose first.
- "Delete duplicates." Destructive; needs exact list and approval.
- "Share this folder publicly." High risk; confirm target and restrictions.
- "Use tenant-wide permissions for convenience." Overbroad; least privilege first.
- "Move everything from OneDrive to another service." Migration needs staged plan and verification.

## Good bot behavior

The bot should:

- verify tenant/account/drive and target path first
- separate read-only inventory from write operations
- use exact source and destination paths or item IDs
- ask before writes, shares, downloads, restores, or deletes
- avoid exposing private file contents unnecessarily
- respect Microsoft 365 retention, sharing, and sensitivity policies
- verify final item ID/path/version/sharing state after approved actions

## Suggested response shape

```text
OneDrive context:
Scope inspected:
Read-only findings:
Proposed actions:
Approval required:
Risks:
Verification plan:
```
