# Ralleh Skills

Public, bot-readable skill instructions for Ralleh AI agents.

Each skill is a self-contained Markdown guide that an agent can read from a repo URL and then know how to install, configure, verify, and support that tool or capability.

## Start here

- [`pages/onboarding/README.md`](pages/onboarding/README.md) — the first 10 instructions a bot should read when onboarding into a Ralleh-managed environment.
- [`skills/README.md`](skills/README.md) — skill library map by family.

## Organization

```text
pages/                       # curated multi-instruction pages
  onboarding/README.md       # bot onboarding page
skills/
  Foundation/<Skill>/        # operating rules, navigation, safety
  Communication/<Skill>/     # agent/session/user communication patterns
  Engineering/<Skill>/       # git, implementation, verification
  Automation/<Skill>/        # browser and controlled external-system workflows
  Observability/<Skill>/     # cost, context, health, and usage diagnostics
  Security/<Skill>/          # prompt, secret, and trust-boundary defenses
  Visualization/<Skill>/     # diagrams, architecture maps, visual artifacts
  Voice/<Skill>/             # voice, phone, STT, streams, and TTS
  Memory/<Skill>/            # ENGRAM and recall workflows
  TaskManagement/<Skill>/    # CORTEX and operational task ledgers
  Operations/<Skill>/        # handoffs, installation support, troubleshooting
templates/                   # authoring templates
```

Naming and golden-content rules are enforced by [`docs/NAMING_STANDARD.md`](docs/NAMING_STANDARD.md), [`docs/GOLDEN_CONTENT_STANDARD.md`](docs/GOLDEN_CONTENT_STANDARD.md), and [`scripts/check-repo.mjs`](scripts/check-repo.mjs).

## Canonical skill examples

- [ENGRAM Memory Skill](skills/Memory/Engram/README.md) — durable semantic memory service and CLI for bots.
- [CORTEX Task Management Skill](skills/TaskManagement/Cortex/README.md) — durable operational task ledger for bots.
- [Agent Browser Skill](skills/Automation/AgentBrowser/README.md) — safe browser inspection and web UI automation for bots.
- [Token Doctor Skill](skills/Observability/TokenDoctor/README.md) — observe-only token/context bloat diagnostics for bots.
- [OpenClaw A2A Skill](skills/Communication/OpenClawA2A/README.md) — safe agent-to-agent routing and handoffs.
- [Prompt Defense Skill](skills/Security/PromptDefense/README.md) — prompt-injection and trust-boundary defense.
- [Diagram Maker Skill](skills/Visualization/DiagramMaker/README.md) — verified SVG/HTML or Excalidraw diagram artifacts.
- [Talk Voice Skill](skills/Voice/TalkVoice/README.md) — safe conversational voice interaction.
- [Phone Control Skill](skills/Voice/PhoneControl/README.md) — permission-first paired phone/device control.
- [Voice Stream Skill](skills/Voice/VoiceStream/README.md) — realtime voice stream lifecycle and guardrails.
- [Whisper STT Skill](skills/Voice/WhisperStt/README.md) — speech-to-text transcription.
- [TTS ElevenLabs Skill](skills/Voice/TtsElevenLabs/README.md) — cloud TTS with ElevenLabs or approved Cartesia overlay.

## How agents should use this repo

1. Open the requested bundle or skill file.
2. Follow the instructions in order.
3. Never invent missing commands, paths, secrets, or config fields.
4. If a step requires credentials or environment-specific values, use the private overlay repo or ask for the one missing input.

## Skill authoring standard

Public repo rule: include golden reusable instructions only. Put customer-specific hosts, private URLs, credentials, and internal runbooks in `ralleh-skills-private`.
