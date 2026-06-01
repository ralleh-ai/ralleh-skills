# GitHub Skill

## What GitHub is

GitHub is the source-control and collaboration platform for repositories, issues, pull requests, releases, CI checks, code review, and project automation.

This skill guides bots through safe GitHub work without confusing local `git` operations, GitHub API operations, and external/public actions.

## What GitHub does

- Inspects repositories, branches, commits, issues, pull requests, releases, and workflow runs.
- Creates or updates issues and pull requests when explicitly requested.
- Reads CI logs and check results.
- Uses structured API/CLI output when available.
- Keeps credentials, tokens, and private repo data protected.

## When a bot should use it

Use GitHub when the user asks about repos, PRs, issues, releases, CI failures, review status, GitHub Actions, repository settings, or GitHub API data.

Ask before public comments, issue creation, PR creation, merges, releases, repository deletion, branch protection changes, or permission changes.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify GitHub CLI/API access, auth, and safe local repo setup.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot auth, repo access, CI logs, rate limits, and push/permission failures.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for GitHub workflows.

## Golden operating rule

Read and verify repository state before mutating. Never commit secrets, and never treat a PR/check summary as proof without inspecting the relevant diff, logs, or result.
