# Hostinger VPS Install Guide

## Purpose

Use this file to verify Hostinger VPS capability during VPS provisioning or operations.

## Safety and scope

- Read-only discovery first.
- VPS create/destroy/rebuild and DNS mutations require approval.
- Never print API tokens.
- Confirm authoritative host before deploy.

## Prerequisites

- Approved Hostinger MCP/API or dashboard access.
- Client manifest with provider/domain fields.
- Target hostname and expected public IPv4.

## Verify capability

Run the approved checks for the deployment. Common checks include:

```bash
ralleh-provision discover <manifest>
ralleh-provision verify <manifest>
dig +short example.com
curl -I https://example.com
```

## Verification gate

Before reporting success, confirm the target host/environment, command output, risk level, and any remaining blocker.

## Handoff prompt

> Verify capability in read-only/safe mode first. Report target host, version/status, exact checks, blockers, and do not perform risky changes without approval.
