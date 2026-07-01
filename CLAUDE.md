# CLAUDE.md

Guidance for Claude Code working in this repo.

## Delegating work

Delegate **straightforward coding tasks to a Sonnet sub-agent** (via the Agent
tool with `model: "sonnet"`). This keeps the heavier model's budget for the
work that actually needs it.

- **Sub-agent (Sonnet):** mechanical, well-specified implementation — wiring up
  markup once the design is decided, applying a known pattern across files,
  refactors, config edits, content plumbing.
- **Current model (stays in the main loop):** design choices, copy and argument
  decisions, and verifying a sub-agent's output (build, screenshots, contrast,
  overflow, does it match the brief).

Rule of thumb: if the *what* and *how* are already settled and it's just
typing, delegate it. If it's a judgment call, keep it here.

## Project constraints

- **Never `git push`** (triggers Netlify auto-deploy) unless explicitly asked.
  Committing locally is fine and expected.
- **No scroll-hijacking, ever.** Native scroll only.
- Don't soften the argument to sound more mainstream.
