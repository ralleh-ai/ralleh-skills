# Voice Skills

## Purpose

This family contains golden skills for voice interaction, phone control, streaming audio, speech-to-text, and text-to-speech.

It exists to help bots choose the right capability quickly, load only the files needed for the task, and keep safety, verification, and resource use explicit.

## Before using this family

- Use these skills with consent and privacy boundaries. Recording, device actions, calls, and external sends require clear user intent and approval.
- Start with the specific skill `README.md`; load `INSTALL.md`, `DOCTOR.md`, or `PROMPTS.md` only when the task needs setup, troubleshooting, or user-facing examples.
- Prefer read-only inspection until a write, external effect, destructive action, permission change, or sensitive-data operation is explicitly approved.
- Verify the result with the smallest meaningful check before reporting completion.

## Available skills

- [`TalkVoice`](TalkVoice/README.md) — safe conversational voice interaction patterns.
- [`PhoneControl`](PhoneControl/README.md) — controlled phone/device actions with explicit permission boundaries.
- [`VoiceStream`](VoiceStream/README.md) — realtime or near-realtime voice pipeline orchestration.
- [`WhisperStt`](WhisperStt/README.md) — speech-to-text transcription with Whisper-style tooling.
- [`TtsElevenLabs`](TtsElevenLabs/README.md) — cloud TTS guidance for ElevenLabs, with Cartesia as an approved alternative overlay.

## Selection rule

Choose the narrowest skill that matches the user request. If two skills could apply, prefer the one closest to the target system or workflow, then pull in adjacent skills only when they are needed for setup, safety, memory, task tracking, or verification.

## Completion standard

A bot using this family should report:

- which skill files were used
- what scope was inspected or changed
- what approval was required or not required
- what verification was performed
- any blocker, risk, or next safe action
