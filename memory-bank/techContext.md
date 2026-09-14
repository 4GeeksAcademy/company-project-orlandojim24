# Technical Context

## Current repository state

- The repository is a documentation and folder-structure starter monorepo; no runnable company applications exist yet.
- `CONTEXT.md` is the domain source of truth.
- There is no root `package.json`, workspace runner, `pyproject.toml`, requirements file, or Docker Compose file currently present.
- `packages/shared/package.json` defines the private `@repo/shared-types` package, but it has no scripts and currently contains only placeholder TypeScript types.
- The repository is organized into dedicated areas for `uis/`, `services/`, `data/`, `agents/`, `skills/`, `mcps/`, `workflows/`, `packages/`, `shared/`, `infra/`, `scripts/`, `internal/`, and `docs/`.

## Technology decisions and direction

- Use a centralized FastAPI backend under `services/` as the default company API. The repository guidance recommends extending one API by domain rather than splitting into microservices early.
- Build the first two user interfaces under `uis/`: `website` for public-facing experiences and `backoffice` for internal sales, support, and operational workflows.
- Use TypeScript for shared contracts and domain types in `packages/shared/`, exposing reusable interfaces to the UI applications and other consumers.
- Keep AI capabilities modular under `agents/`, with reusable instructions and capabilities under `skills/` and external-system bridges under `mcps/` when needed.
- Keep data ingestion, transformation, and evaluation assets under `data/`; cross-system orchestration belongs under `workflows/`.
- Keep infrastructure and deployment configuration under `infra/`, with the root reserved for whole-project orchestration when it is introduced.

## Existing systems to integrate or replace

Nexova currently relies on HubSpot, a legacy Zendesk helpdesk, Google Workspace, a home-built applicant tracking system, spreadsheets, and manual reporting. The Sales/Lead Qualification and Customer Support work should treat these systems as integration constraints and migration inputs rather than assume a clean greenfield data source.

## Constraints

- There is no established frontend framework, backend dependency set, database, queue, deployment target, or observability stack in the repository yet. These must be selected and documented when implementation begins.
- Shared contracts should be defined before multiple applications diverge on lead, opportunity, contact, ticket, knowledge article, SLA, and sentiment data.
- Support automation must use grounded knowledge, preserve human escalation paths, and expose SLA risk rather than silently making unsupported commitments.
- Lead qualification recommendations should be explainable to sales users and should not replace human judgment for high-impact decisions.
- New apps and services must include their own README and remain in their designated top-level folder.