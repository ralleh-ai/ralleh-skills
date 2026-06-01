# Docker Install Guide

## Purpose

Use this file to verify Docker capability during VPS provisioning or operations.

## Safety and scope

- Prune, volume removal, network removal, or container deletion requires approval.
- Back up persistent volumes before destructive changes.
- Public container port exposure requires firewall/proxy review.

## Prerequisites

- Docker Engine installed.
- Compose plugin available.
- User is authorized for docker group or sudo.
- Compose files and env/secret handling are defined.

## Verify capability

Run the approved checks for the deployment. Common checks include:

```bash
docker version
docker compose version
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
docker system df
```

## Verification gate

Before reporting success, confirm the target host/environment, command output, risk level, and any remaining blocker.

## Handoff prompt

> Verify capability in read-only/safe mode first. Report target host, version/status, exact checks, blockers, and do not perform risky changes without approval.
