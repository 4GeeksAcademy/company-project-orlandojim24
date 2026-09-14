# Agent Guidance

## Session start

At the start of every session, read all three memory-bank files before inspecting or changing project files:

1. `memory-bank/projectbrief.md`
2. `memory-bank/techContext.md`
3. `memory-bank/progress.md`

Use those files together with `CONTEXT.md` and the README for the target top-level folder as the current project context. When the work changes the project state or next steps, update the relevant memory-bank file.

## Repository conventions

- Treat `CONTEXT.md` as the source of truth for Nexova's domain, users, and business problems.
- Keep each deliverable in its designated top-level folder: UIs in `uis/`, APIs and workers in `services/`, data assets and pipelines in `data/`, AI agents in `agents/`, reusable agent capabilities in `skills/`, MCP servers in `mcps/`, workflows in `workflows/`, reusable code and types in `packages/` or `shared/`, infrastructure in `infra/`, scripts in `scripts/`, internal tools in `internal/`, and cross-cutting documentation in `docs/`.
- Read the applicable folder `README.md` before implementing work in that folder.
- Add a README to every new app, service, agent, or pipeline explaining its purpose, technology, and how to run or test it.
- Prefer the planned centralized FastAPI backend under `services/` over premature microservices. Share cross-application contracts through `packages/shared/`.
- Keep Sales/Lead Qualification and Customer Support behavior grounded, explainable, observable, and able to escalate to a human.
- Avoid unrelated refactors and do not commit generated files, secrets, credentials, or local environment files.

## Mandatory pre-commit workflow

Before making any commit, complete these steps in order:

1. Re-read `memory-bank/projectbrief.md`, `memory-bank/techContext.md`, and `memory-bank/progress.md`; confirm the change still matches the documented objectives, constraints, and project state.
2. Inspect the working tree and diff with `git status` and `git diff`; confirm every changed file is intentional and belongs to the requested work.
3. Run the narrowest relevant validation for the changed slice, then run broader repository checks when available. This includes tests, type checks, linters, build checks, or documentation validation as applicable.
4. Review the final diff for secrets, generated artifacts, accidental scope expansion, broken links, and missing README or progress updates.
5. Only after steps 1-4 succeed, create the commit with a message that describes the change.

## Protected files and folders

Do not modify these without explicit developer confirmation:

- `CONTEXT.md` and `CONTEXT.es.md`, because they are the assigned company context and source-of-truth briefing.
- Existing root and directory-level `README.md` or `README.es.md` files, except to document a newly added deliverable or when the developer specifically requests documentation changes.
- `memory-bank/projectbrief.md` and `memory-bank/techContext.md` when changing their established business or technology decisions; update them only when the developer confirms the new direction.
- `infra/` deployment, infrastructure, and environment configuration.
- `data/raw/` source datasets and any files containing real or sensitive company data.
- Existing integrations, credentials, secrets, and environment files such as `.env*`, authentication configuration, or external-system connection settings.
- `packages/shared/` public shared contracts when changing or removing an existing exported type used by another app or service.

Adding new files in the designated folders is allowed when the work requires it, provided the applicable folder guidance and README requirements are followed.
