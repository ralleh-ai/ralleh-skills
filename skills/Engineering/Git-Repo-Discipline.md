# Git and Repo Discipline

## Purpose

Keep every repository clean, recoverable, and reviewable.

## Rules

1. Ensure `.gitignore` exists before first commit.
2. Check `git status` before editing and before reporting completion.
3. Do not overwrite unrelated user changes.
4. Use focused commits with clear messages.
5. Never commit `node_modules/`, `.env*`, `.secrets/`, keys, pem files, sqlite/db files, build artifacts, or logs with sensitive data.

## Verify

```bash
git status --short --branch
git diff --check
git log --oneline -3
```
