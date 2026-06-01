# GitHub Doctor

## Purpose

Use this when GitHub auth, repo access, CI checks, API calls, pushes, PRs, or permissions fail.

## Stop conditions

Stop and ask before rotating credentials, changing repo permissions, disabling branch protection, deleting repos/branches, merging PRs, or publishing releases.

## Fast triage

```bash
gh auth status
git remote -v
git status --short --branch
gh repo view OWNER/REPO --json name,owner,visibility,url
```

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| Wrong account | `gh auth status`, SSH alias | Switch auth/config to intended account. |
| Repo not found | owner/name, visibility, permissions | Confirm repo exists and account has access. |
| Push denied | remote URL, branch protection, key/account | Use correct remote/account or open PR. |
| CI failure unclear | `gh run view --log-failed` | Inspect failed logs before proposing fix. |
| Rate limit | `gh api rate_limit` | Wait, authenticate, or reduce API calls. |

## Doctor report format

Return status, account inspected, target repo, local branch, failing command/error, permission finding, and next action.
