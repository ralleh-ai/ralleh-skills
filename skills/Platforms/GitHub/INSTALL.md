# GitHub Install Guide

## Purpose

Use this file to verify GitHub capability for a bot or host.

## Safety and scope

- Do not print GitHub tokens.
- Do not create comments, issues, PRs, releases, merges, or permission changes unless the user asked.
- Use `git` for local repo state and `gh` or approved API tooling for GitHub platform state.
- Use body files for user-provided text containing code blocks, env names, or shell snippets.

## Prerequisites

- `git` available.
- GitHub CLI `gh` or approved GitHub API wrapper.
- Auth configured for the correct account/org.
- Correct SSH host alias or HTTPS token strategy for the target repo.

## Verify capability

```bash
git --version
gh --version
gh auth status
```

For a target repo:

```bash
git status --short --branch
gh repo view OWNER/REPO --json name,owner,visibility,url
gh pr list --repo OWNER/REPO --limit 5 --json number,title,state,url
gh run list --repo OWNER/REPO --limit 5
```

## Verification gate

Before reporting success, confirm:

- Auth is for the intended account.
- Target repo is the intended repo.
- Local branch/status is known when working in a checkout.
- Any write action was explicitly requested and verified.

## Handoff prompt

> Verify GitHub auth and target repo. Use `git` for local state and `gh`/API for GitHub state. Ask before public writes, merges, releases, or permission changes. Report exact repo, branch, and verification output.
