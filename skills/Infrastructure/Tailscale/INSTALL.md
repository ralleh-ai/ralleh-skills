# Tailscale Install Guide

## Purpose

Use this file to verify Tailscale capability during VPS provisioning or operations.

## Safety and scope

- Never print auth keys or reusable keys.
- ACL broadening, route advertisement, and service exposure require approval.
- Do not assume tailnet identity from hostname alone; verify node id/IP/tags.

## Prerequisites

- Tailscale installed.
- Approved auth method or pre-created auth key.
- Tailnet policy/tags defined in private overlay.
- User has permission to enroll or inspect nodes.

## Verify capability

Run the approved checks for the deployment. Common checks include:

```bash
tailscale status
tailscale ip -4
tailscale netcheck
systemctl status tailscaled --no-pager
```

## Verification gate

Before reporting success, confirm the target host/environment, command output, risk level, and any remaining blocker.

## Handoff prompt

> Verify capability in read-only/safe mode first. Report target host, version/status, exact checks, blockers, and do not perform risky changes without approval.
