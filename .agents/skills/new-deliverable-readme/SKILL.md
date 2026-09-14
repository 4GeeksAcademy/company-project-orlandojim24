# New Deliverable README

## Objective

Generate a complete `README.md` for any new app, service, agent, pipeline, or other deliverable added to this monorepo. The README must follow the repository's folder ownership and documentation conventions, give a future contributor enough information to understand the deliverable, and explain how to run or test it.

## Inputs

Before writing the README, collect all of the following:

- **Deliverable folder:** the exact repository-relative path, such as `uis/website/`, `uis/backoffice/`, `services/admin-api/`, `agents/support-agent/`, or `data/pipelines/lead-import/`.
- **Deliverable type:** app, service, agent, pipeline, workflow, package, MCP server, script, or another concrete deliverable type.
- **Purpose:** the user or business problem it solves, including the relevant Nexova workflow when applicable.
- **Technology used:** languages, frameworks, libraries, data stores, model providers, external systems, and runtime dependencies that actually exist or are intentionally selected.
- **How to run:** exact commands, required working directory, required environment variables, services or dependencies, and the expected local URL or process when relevant.
- **How to test:** exact test, lint, type-check, build, evaluation, or smoke-test commands, including any required test data or fixtures.
- **Sensitive-data constraints:** whether the deliverable handles candidate, employee, client, lead, contact, ticket, or support knowledge data. Use synthetic or redacted examples and follow `.agents/rules/nexova-sensitive-data.md` when in scope.

Do not invent commands, dependencies, URLs, environment variables, or test results. Mark an item as `TBD` only when implementation has not selected it yet, and identify the decision that remains.

## Placement rules

Confirm that the folder matches the repository ownership rules before documenting it:

- UI code belongs in `uis/`.
- APIs and background workers belong in `services/`.
- Raw, processed, evaluation, and pipeline assets belong in `data/`.
- AI agents belong in `agents/`; reusable agent capabilities belong in `skills/`; MCP servers belong in `mcps/`.
- Cross-system automation belongs in `workflows/`.
- Reusable code and types belong in `packages/` or `shared/`.
- Infrastructure belongs in `infra/`; helper automation belongs in `scripts/`; internal tools belong in `internal/`.
- Cross-cutting documentation belongs in `docs/`.

Read the applicable directory `README.md` before finalizing the document. Every new app, service, agent, or pipeline must have its own README in its owning folder.

## README procedure

1. Inspect the deliverable folder and identify its entry points, configuration, source directories, fixtures, tests, and generated outputs.
2. Confirm the deliverable's type, purpose, technology, runtime prerequisites, and handling of sensitive Nexova information from the inputs and implementation.
3. Create or update the deliverable's `README.md` without changing unrelated files or overwriting existing project-specific documentation.
4. Use the deliverable's name as the title and state its status when it is incomplete or experimental.
5. Include the required sections below, adapting details to the deliverable type.
6. Verify every command by running it when dependencies and the environment are available. Report unavailable checks instead of claiming success.
7. Check the final README for stale paths, placeholder commands, exposed sensitive data, and consistency with the applicable folder README and `AGENTS.md`.

## Required README sections

The generated README must contain these sections, with equivalent headings allowed only when the meaning is unambiguous:

1. **Purpose**: what the deliverable does and which Nexova users or workflow it serves.
2. **Status**: current maturity, known limitations, and whether it is production-ready.
3. **Technology**: languages, frameworks, important dependencies, and external integrations.
4. **Repository layout**: key source, configuration, fixture, test, and output paths.
5. **Prerequisites and configuration**: runtime versions, installation steps, required environment variables, credentials, permissions, and safe synthetic-data assumptions. Never include secret values.
6. **Run**: exact command(s) to start or execute the deliverable, from the documented working directory.
7. **Test and validation**: exact commands for tests and applicable lint, type-check, build, evaluation, or smoke checks.
8. **Usage or workflow**: the main user/operator flow, API entry points, agent capabilities, pipeline stages, or output contract.
9. **Data and security**: data sources, retention or output behavior, access boundaries, and sensitive-data handling. State explicitly when the deliverable has no sensitive data.
10. **Known limitations and next steps**: concrete gaps, decisions still pending, and follow-up work.

For agents, also document capabilities, knowledge or memory sources, available tools, and how to evaluate the agent. For pipelines, document inputs, transformations, outputs, idempotency, and failure handling. For services, document endpoints or background responsibilities and health checks. For UIs, document the user-facing routes or views and the backend dependencies.

## Acceptance criteria

The README is complete only when all of these checks pass:

- [ ] `README.md` exists directly inside the new deliverable folder and its title identifies the deliverable.
- [ ] The README includes all ten required sections, or clearly named equivalents, with no empty section or unresolved placeholder for a selected implementation detail.
- [ ] The documented folder matches the ownership rules above and the applicable parent-folder README.
- [ ] Every run and test command is copyable, uses paths that exist in the repository, and has been executed successfully or is explicitly marked unavailable with the reason.
- [ ] Technology, prerequisites, environment variables, integrations, and runtime assumptions match the implementation; no dependency or command is invented.
- [ ] The README identifies the main workflow, inputs, outputs, and failure or limitation behavior appropriate to the deliverable type.
- [ ] Sensitive-data handling is documented and the README contains no real candidate, employee, client, lead, contact, ticket, support content, credentials, or tokens.
- [ ] `git diff --check` passes, links and paths referenced by the README resolve, and `git status --short` shows only intentional files.
- [ ] If the deliverable changes project status or next steps, the corresponding `memory-bank/` file is updated consistently.

## Verification commands

From the repository root, adapt the path and commands to the deliverable:

```bash
test -f path/to/deliverable/README.md
git diff --check
git status --short
```

Then run the exact commands documented in the README, such as the relevant test, lint, type-check, build, evaluation, or smoke-test command. A README passes review only when its instructions are reproducible from a clean checkout with the stated prerequisites.
