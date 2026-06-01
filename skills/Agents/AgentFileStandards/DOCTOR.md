# Agent File Standards Doctor

## Purpose

Use this when an agent-file audit is blocked by missing files, unclear file type, oversized content, unsafe content, or conflicting standards.

## Fast triage

1. Identify the target file name and path.
2. Match it to a definition under `agents/Definitions/`.
3. Confirm the file is readable.
4. Check for secrets or unsafe content before quoting excerpts.
5. If the file type is unclear, classify by content and ask one clarifying question if needed.

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| No matching definition | File name and purpose | Ask whether it should become a new standard. |
| File too large | Approx word count | Recommend moving runbooks/docs to skills. |
| Secrets present | Credential patterns | Stop and recommend secret removal/rotation process. |
| Mixed content | Sections and purpose | Split into the correct standard files. |
| User wants automatic rewrite | Approval and backup | Make a backup/diff plan before editing. |

## Doctor report format

Return status, target file, matched definition, blocker, safety concern, and next action.
