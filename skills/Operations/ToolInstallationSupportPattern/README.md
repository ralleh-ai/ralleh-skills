# Tool Installation Support Pattern

## Purpose

Standard install/support loop for any tool skill.

## Loop

1. Read the tool skill file.
2. Confirm prerequisites from live system state.
3. Install with the documented command.
4. Configure only documented fields.
5. Run the skill's smoke test.
6. Capture support commands for future operators.

## Do not

- Curl random install scripts without checking source and scope.
- Put secrets into command history or repo files.
- Skip smoke tests.
