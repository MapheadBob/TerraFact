# TerraFact

General multiple-choice geography trivia game.

Standalone Next.js app (App Router, TypeScript, Tailwind CSS) — not part of the
Bronze Atlas Studios hub/auth system. The game flow (lobby → 5-question round →
results) started as a prototype built inside `bronze-atlas-studios` and was
moved here as its own product; `lib/questions.ts` holds the question bank.

## Getting started

```bash
pnpm install   # or npm install
pnpm dev
```

Then open http://localhost:3000.
