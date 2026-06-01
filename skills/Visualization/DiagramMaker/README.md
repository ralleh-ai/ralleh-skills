# Diagram Maker Skill

## What Diagram Maker is

Diagram Maker is the visualization skill for turning concepts, systems, flows, architectures, and whiteboard ideas into diagram artifacts.

It produces diagrams as files, not just prose. Preferred outputs are standalone SVG/HTML for polished visuals or Excalidraw JSON for editable whiteboards.

## What Diagram Maker does

- Extracts nodes, groups, labels, and relationships from a concept or brief.
- Chooses a layout: left-to-right, top-down, hub-spoke, swimlanes, layered stack, or sequence.
- Creates a diagram artifact with short labels and clear relationships.
- Verifies generated files when feasible.
- Avoids external assets so diagrams are portable and safe.

## When a bot should use it

Use Diagram Maker when the user asks for a diagram, architecture map, flowchart, whiteboard, process visual, system topology, or explanatory graphic.

Ask one short question only if the output format matters and is ambiguous. Otherwise choose a safe default: standalone SVG/HTML.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify local file/artifact generation capability and optional Excalidraw support.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot broken SVG/HTML, invalid Excalidraw JSON, unreadable diagrams, or missing verification.
- [`PROMPTS.md`](PROMPTS.md) — suggested user-facing prompts for diagram requests.

## Common workflows

### Polished standalone diagram

Create a single `.html` file with inline CSS and inline SVG. Use semantic colors and no remote assets.

### Editable whiteboard

Create a valid `.excalidraw` JSON file when the user wants editing or collaboration.

### Architecture diagram

Show services, storage, boundaries, external dependencies, and trust zones without crowding the canvas.

## Golden operating rule

A diagram is not done until it exists as an artifact and has been checked for basic validity, readability, and missing labels.

## Handoff prompt

> Read `README.md` first to understand Diagram Maker. If setting up artifact generation, continue with `INSTALL.md`. If a diagram is broken or invalid, continue with `DOCTOR.md`. If helping the user request a diagram, continue with `PROMPTS.md`. Create an artifact, keep it readable, avoid remote assets, and verify before reporting done.
