# Nexova Sales Backoffice

## Purpose

The internal backoffice entry view gives Nexova's Sales and Business Development team a compact lead intelligence workspace. It presents a qualified-lead table with company, industry, numeric score, and explainable hot, warm, or cold confidence labels based on the Intelligent Lead Qualification concept in `CONTEXT.md` and `company-choice.md`.

## Status

Working UI prototype. The internal layout, navigation rail, pipeline summary cards, and sample lead table are implemented, but this is not production-ready: there is no authentication, authorization, backend, persistence, CRM integration, real scoring model, or interactive filtering yet.

## Technology

- React 19 with TypeScript
- Vite 8 for development and production builds
- Oxlint for linting
- Hardcoded TypeScript sample data in `src/mockLeads.ts`
- No backend, database, CRM, model provider, or external service integration

## Repository layout

- `src/App.tsx`: internal workspace composition and summary metrics
- `src/components/Sidebar.tsx`: sales workspace navigation and user context
- `src/components/MetricCard.tsx`: reusable pipeline summary card
- `src/components/LeadTable.tsx`: reusable qualified-lead table
- `src/mockLeads.ts`: synthetic lead type and hot/warm/cold sample records
- `src/App.css`: backoffice layout, table, navigation, and responsive styles
- `src/index.css`: global reset and focus styles
- `public/`: static Vite assets
- `dist/`: generated production output; do not edit or commit it

## Prerequisites and configuration

- Node.js 22 or a compatible modern Node.js release
- npm 9 or newer
- Run commands from `uis/backoffice/`.
- Install dependencies with `npm install`.
- No environment variables, credentials, permissions, or external services are required for the current prototype.
- All lead records in `src/mockLeads.ts` are synthetic examples and must remain synthetic or redacted.

## Run

From the repository root:

```bash
npm install --prefix uis/backoffice
npm run dev --prefix uis/backoffice
```

Vite prints the local URL, normally `http://localhost:5173/`. If the website is already using that port, start this app on another port with `npm run dev --prefix uis/backoffice -- --port 5174`. To preview a production build after running `npm run build`, use `npm run preview --prefix uis/backoffice`.

## Test and validation

From the repository root:

```bash
npm run lint --prefix uis/backoffice
npm run build --prefix uis/backoffice
curl -fsS http://localhost:5173/ >/dev/null
```

The lint command checks the React, TypeScript, and sample-data source, the build runs TypeScript compilation followed by `vite build`, and the curl check confirms that the running development server serves the workspace. Use port 5174 in the curl command when the app was started with `--port 5174`.

## Usage or workflow

Open the workspace to review the lead pipeline summary and qualified leads. The sidebar identifies Leads as the active sales operation. Each sample row shows a company, industry, confidence category, numeric score, recent activity, and a placeholder action button. The current view is read-only and intentionally demonstrates the future qualification workflow without a live backend.

## Data and security

The current view reads only the synthetic records exported from `src/mockLeads.ts`; it does not fetch or persist data. Do not add real candidate, employee, client, lead, contact, ticket, CRM, or message exports to this app. Before connecting real records, add authentication and explicit access boundaries, keep sensitive fields out of URLs, browser storage, analytics, errors, and logs, and follow `.agents/rules/nexova-sensitive-data.md`. Qualification recommendations must remain explainable and subject to human review.

## Known limitations and next steps

- Replace `src/mockLeads.ts` with approved shared lead contracts and a centralized FastAPI endpoint.
- Add authentication, role-based access, audit events, and account-level visibility before using real sales data.
- Implement real confidence explanations, filtering, lead detail views, and follow-up actions.
- Add browser-level tests and accessibility checks when the frontend testing setup is selected.
