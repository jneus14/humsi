# HUMSI website (humsi.org)

Marketing site for the Human Security Initiative. Next.js (App Router), Tailwind, shadcn-style components. GitHub jneus14/humsi. Redesigned Oct 2026 to match hiproject.org's dark theme, featuring the Human Impact Project.

## Session log (required; a Stop hook enforces it)

The written history for all HUMSI work lives in `~/ice/docs/` (index: `~/ice/docs/README.md`). Every session that changes files in this folder ends by:
1. Appending a `## YYYY-MM-DD (Day)` entry to the current `~/ice/docs/log/` file (format in `~/ice/docs/log/README.md`): what was asked, done, decided, left open, with commit hashes.
2. Updating the status line and pending list in `~/ice/docs/projects/side-tools.md`.
3. Giving any decision with reasoning its own page in `~/ice/docs/decisions/`.

`.claude/hooks/session-log-check.sh` (Stop hook in `.claude/settings.json`) refuses to end a session that changed files here until today's log entry exists. Read-only sessions are exempt. This applies to every Claude account and agent working in this folder.

- pnpm, Node 24 via NVM. `pnpm dev`, `pnpm build`.
- Project order on the home page is editorial (Julia moved Climate ahead of Cross-Border Mobility, Oct 2026); ask before reordering.
- Copy rules: no "rigorous" in the research pillar (removed deliberately); never "alien" or "illegal immigrant".
- The organization's identity block (501(c)(3), EIN 39-4604790) and donate links should match hiproject.org's footer.
- The ice repo (`~/ice/docs/`) holds the written history for all HUMSI work; this site has no separate log.
