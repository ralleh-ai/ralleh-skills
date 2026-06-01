# TTS ElevenLabs Skill

## What TTS ElevenLabs is

TTS ElevenLabs is the cloud text-to-speech skill for generating spoken audio from text using ElevenLabs or, when the deployment standardizes differently, a Cartesia-compatible private overlay.

It is for user-approved speech output, not covert audio generation or impersonation.

## What TTS ElevenLabs does

- Converts text into audio files or voice-note responses.
- Supports provider-specific voice, model, speed, and format settings through deployment configuration.
- Keeps API keys out of repos and prompts.
- Provides verification steps for generated audio.

## When a bot should use it

Use this skill when the user asks for spoken output, voice-note replies, generated narration, or audio previews.

Do not clone or imitate a real person without explicit rights and approval.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify provider credentials, voice configuration, and audio generation.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot missing keys, provider errors, bad audio, or delivery failures.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for TTS requests.

## Golden operating rule

Never expose TTS API keys, and never generate deceptive impersonation audio.
