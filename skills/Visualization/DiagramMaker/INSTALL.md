# Diagram Maker Install Guide

## Purpose

Use this file when a bot needs to verify diagram artifact generation capability.

Read [`README.md`](README.md) first for what Diagram Maker is and when to use it. Use [`DOCTOR.md`](DOCTOR.md) if generated diagrams are invalid or unreadable.

## Safety and scope

- Do not use remote fonts, scripts, images, CDNs, or tracking assets.
- Do not embed secrets, credentials, private customer data, or internal-only topology unless the user requested a private artifact.
- Keep diagrams readable. Prefer fewer clear elements over dense unreadable maps.
- Generate files in the requested path or a clearly named local artifact path.

## Prerequisites

- File write capability in the workspace.
- Basic HTML/SVG generation capability.
- Optional JSON validation for Excalidraw artifacts.
- Optional browser/screenshot capability for visual verification.

## Verify SVG/HTML capability

Generate a tiny standalone HTML/SVG test artifact and inspect it:

```text
diagram artifact: standalone HTML with inline SVG, no remote assets
required: title, at least two labeled nodes, connector with arrow, readable text
```

Verification can be:

- Open in browser and inspect visually.
- Parse/check for `<svg`, labels, and no `http://` or `https://` remote assets.
- Screenshot if visual quality matters.

## Verify Excalidraw capability

A valid Excalidraw file must include:

- top-level `type`, `version`, `source`, `elements`, and `appState`.
- shape elements and bound text elements for labels.
- no nonstandard `label` property as a substitute for bound text.

## Handoff prompt

> Verify the bot can write a diagram artifact. For SVG/HTML, keep it standalone with inline CSS/SVG and no remote assets. For Excalidraw, output valid Excalidraw JSON with bound text labels. Verify basic validity before reporting success.
