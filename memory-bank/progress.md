# Progress

## Current state

The repository now has the initial Nexova project guidance and both planned UI starters:

- `AGENTS.md` is complete with session context requirements, repository conventions, the pre-commit workflow, and protected paths.
- `.agents/rules/nexova-sensitive-data.md` is complete with file-pattern-based handling rules for candidate, employee, client, lead, contact, ticket, and support knowledge data.
- `.agents/skills/new-deliverable-readme/SKILL.md` is complete with inputs, README requirements, and verifiable acceptance criteria for new deliverables.
- `uis/website/README.md` and `uis/backoffice/README.md` are complete with the required purpose, status, technology, layout, configuration, run, validation, workflow, security, and limitations sections.
- `uis/website` has a full Nexova corporate homepage with reusable header, hero, services, and client sections. It presents Nexova's three business lines: headhunting, customer support outsourcing, and corporate training.
- `uis/backoffice` has a distinct internal lead intelligence workspace with reusable navigation, metric cards, and a qualified leads table. Its hardcoded sample data includes company name, industry, score, and hot/warm/cold confidence labels based on the Intelligent Lead Qualification concept.

Both UI apps use React, Vite, and TypeScript. The website and backoffice builds and lint checks pass, and each app has been verified through its local Vite development server.

## Remaining next steps

1. Define shared lead and opportunity contracts in `packages/shared/` before connecting either UI to real data.
2. Decide and implement the centralized FastAPI backend under `services/`.
3. Replace the backoffice sample lead data with approved integrations and a grounded, explainable qualification workflow.
4. Add the planned sales follow-up automation and Customer Support knowledge, SLA, and RAG workflows.