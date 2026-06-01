# Phone Control Install Guide

## Purpose

Use this file to verify safe phone/device control capability.

## Safety and scope

- Do not access camera, screen, location, photos, notifications, or microphone without explicit user request.
- Do not unlock, bypass, surveil, or silently monitor a device.
- Sending messages, placing calls, deleting content, or changing settings requires explicit approval.

## Prerequisites

- Paired phone/node visible to the runtime.
- Device permissions granted by the user.
- Approved command list for the deployment.

## Verify capability

1. List paired nodes or device status.
2. Confirm the intended phone is online.
3. Check permission state for the requested action.
4. Run a harmless action such as device status or user-visible notification.
5. Report capability and blockers.

## Handoff prompt

> Verify the paired phone/node and permissions. Use only the user-requested device action, avoid private data unless requested, and stop for OS permission, unlock, or approval blockers.
