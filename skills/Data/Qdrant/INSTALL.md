# Qdrant Install Guide

## Purpose

Use this file to verify Qdrant capability during VPS provisioning or operations.

## Safety and scope

- Collection deletion or snapshot restore requires approval.
- Public exposure requires authentication and network controls.
- Avoid printing embedded private text unnecessarily.

## Prerequisites

- Qdrant installed as service/container/local sidecar.
- Expected API address/port known.
- Collection names and vector dimensions known.

## Verify capability

Run the approved checks for the deployment. Common checks include:

```bash
curl -s http://127.0.0.1:6333/healthz
curl -s http://127.0.0.1:6333/collections
systemctl status qdrant --no-pager
```

## Verification gate

Before reporting success, confirm the target host/environment, command output, risk level, and any remaining blocker.

## Handoff prompt

> Verify capability in read-only/safe mode first. Report target host, version/status, exact checks, blockers, and do not perform risky changes without approval.
