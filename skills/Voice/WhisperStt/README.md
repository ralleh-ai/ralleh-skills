# Whisper STT Skill

## What Whisper STT is

Whisper STT is the speech-to-text skill for transcribing audio files, voice notes, recordings, or stream chunks using Whisper-style local or API transcription tools.

## What Whisper STT does

- Converts audio into text transcripts.
- Supports local transcription when available.
- Supports API transcription when explicitly configured.
- Produces transcript files or structured JSON when needed.
- Preserves privacy boundaries around audio content.

## When a bot should use it

Use Whisper STT when the user provides audio or asks to transcribe, translate, summarize, or extract tasks from speech.

Do not transcribe private audio unless the user requested it and the handling/retention is clear.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify local Whisper or approved API transcription capability.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot missing binaries, bad audio formats, model downloads, API keys, and poor transcripts.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for transcription workflows.

## Golden operating rule

Always separate transcript facts from interpretation. If audio quality is poor, say so and avoid overconfident conclusions.
