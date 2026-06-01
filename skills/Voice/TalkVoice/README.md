# Talk Voice Skill

## What Talk Voice is

Talk Voice is the voice-conversation skill for bots that speak with a user through voice notes, calls, or realtime voice surfaces.

It defines how a bot should handle spoken intent, confirmations, interruptions, privacy, and handoff between speech-to-text, reasoning, and text-to-speech.

## What Talk Voice does

- Converts voice interaction into clear task intent.
- Confirms risky or ambiguous actions before acting.
- Keeps spoken replies short, natural, and actionable.
- Hands off audio input to STT and spoken output to TTS.
- Stops when identity, consent, privacy, or external-action approval is unclear.

## When a bot should use it

Use Talk Voice when the user wants to talk to the bot, send voice notes, receive spoken responses, or interact hands-free.

Do not use it to record, monitor, call, or speak to third parties without explicit user instruction and approval.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify voice input/output surfaces and dependencies.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot missing audio, transcription, playback, latency, or consent issues.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for voice workflows.

## Golden operating rule

Voice is a high-trust interface. Confirm identity, consent, and risky actions before proceeding, and keep spoken output concise.
