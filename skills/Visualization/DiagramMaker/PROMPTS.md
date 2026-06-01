# Diagram Maker Prompt Suggestions

## Purpose

Use these prompts to help users request clear diagram artifacts.

## General diagram prompts

- "Create a diagram of this system and save it as standalone HTML/SVG."
- "Turn this process into a simple left-to-right flowchart."
- "Make an editable Excalidraw whiteboard for this architecture."
- "Create a swimlane diagram showing who does what."

## Architecture prompts

- "Diagram the services, database, queues, external APIs, and trust boundaries."
- "Show the data flow from user request to storage and response."
- "Map the deployment topology with public, private, and admin zones."

## Refinement prompts

- "Make it less crowded and split it into two diagrams if needed."
- "Use shorter labels and make the arrows easier to follow."
- "Add a legend only if the colors are not obvious."
- "Verify there are no remote assets in the diagram."

## Good bot behavior

When a user asks for a diagram, the bot should:

1. Identify the diagram type and output format.
2. Extract nodes, groups, and relationships.
3. Choose a layout before drawing.
4. Keep labels short and readable.
5. Generate an artifact file.
6. Verify syntax/structure and report the path.

## Example handoff prompt

> Use Diagram Maker to create a standalone SVG/HTML architecture diagram. Keep it readable, use semantic colors, avoid remote assets, draw connectors behind nodes, verify the file, and report the artifact path.
