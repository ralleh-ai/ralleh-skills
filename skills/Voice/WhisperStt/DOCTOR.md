# Whisper STT Doctor

## Purpose

Use this when transcription fails, Whisper is missing, audio format is unsupported, model downloads fail, API transcription errors, or transcript quality is poor.

## Fast triage

1. Confirm audio file exists and is readable.
2. Confirm file format and size.
3. Confirm local `whisper` or approved API wrapper is available.
4. Run a short transcription test.
5. Inspect transcript quality and warnings.

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| `whisper` missing | command path | Install local Whisper or use approved API. |
| Model download fails | network/cache permissions | Use cached model or fix cache permissions. |
| Unsupported format | file extension/codec | Convert audio with approved tooling. |
| API rejects upload | size/format/key | Use smaller file, supported format, or valid secret. |
| Poor transcript | noise/language/model size | Ask for clearer audio or use larger model/language hint. |

## Doctor report format

Return status, audio path/format/size, STT method, error or transcript quality note, and next action.
