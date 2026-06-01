# Talk Voice Install Guide

## Purpose

Use this file to verify that a bot can support voice conversation safely.

## Safety and scope

- Do not record or store audio unless the user requested it and retention rules are clear.
- Do not call or speak to third parties without explicit approval.
- Do not read secrets aloud.
- Ask before external-effect actions such as sending, posting, purchasing, deleting, or changing accounts.

## Prerequisites

- Audio input path: voice note, call audio, microphone, or stream.
- Speech-to-text skill such as [`WhisperStt`](../WhisperStt/README.md).
- Text-to-speech skill such as [`TtsElevenLabs`](../TtsElevenLabs/README.md) when spoken replies are needed.
- Clear delivery channel for audio replies.

## Verify capability

1. Receive a short harmless audio sample.
2. Transcribe it.
3. Confirm intent in text.
4. Generate a short spoken reply if TTS is enabled.
5. Report what was verified and what remains unavailable.

## Handoff prompt

> Verify voice input, STT, and optional TTS. Keep replies short, confirm risky actions, and stop for consent, identity, or privacy blockers.
