# Go Runtime Install Guide

## Purpose

Use this file to verify Go Runtime capability during VPS provisioning or operations.

## Safety and scope

- Use approved package sources for toolchain installation.
- Provisioner apply/mutate commands require dry-run/plan first.
- Build artifacts should not be committed unless release policy requires them.

## Prerequisites

- Go installed or approved package source.
- Repo with go.mod when building a module.
- Network/cache access for modules if needed.

## Verify capability

Run the approved checks for the deployment. Common checks include:

```bash
go version
go env GOPATH GOMOD GOCACHE
go test ./...
go build ./...
```

## Verification gate

Before reporting success, confirm the target host/environment, command output, risk level, and any remaining blocker.

## Handoff prompt

> Verify capability in read-only/safe mode first. Report target host, version/status, exact checks, blockers, and do not perform risky changes without approval.
