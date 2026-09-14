# Nexova Website

## Purpose

The public Nexova Solutions corporate homepage introduces the company and its three business lines: executive and mid-management headhunting, customer support outsourcing, and corporate training. It is intended for prospective mid-sized clients in technology, retail, and financial services.

## Status

Early working homepage. The requested content and responsive presentation are implemented, but the site is not production-ready: contact actions are placeholders, and there is no CMS, analytics, SEO/GEO configuration, or backend integration yet.

## Technology

- React 19 with TypeScript
- Vite 8 for development and production builds
- Oxlint for linting
- Shared component styles in `src/App.css` and `src/index.css`
- No backend or external service integration

## Repository layout

- `src/App.tsx`: page composition and site footer
- `src/components/SiteHeader.tsx`: public navigation and wordmark
- `src/components/HeroSection.tsx`: homepage introduction and visual treatment
- `src/components/ServicesSection.tsx`: the three Nexova service lines
- `src/components/ClientsSection.tsx`: target client profile and sectors
- `src/App.css`: page layout and responsive component styles
- `src/index.css`: global reset and accessibility focus styles
- `public/`: static Vite assets
- `dist/`: generated production output; do not edit or commit it

## Prerequisites and configuration

- Node.js 22 or a compatible modern Node.js release
- npm 9 or newer
- Run commands from `uis/website/`.
- Install dependencies with `npm install`.
- No environment variables, credentials, or external services are required for the current static page.

## Run

From the repository root:

```bash
npm install --prefix uis/website
npm run dev --prefix uis/website
```

Vite prints the local URL, normally `http://localhost:5173/`. To preview a production build after running `npm run build`, use `npm run preview --prefix uis/website`.

## Test and validation

From the repository root:

```bash
npm run lint --prefix uis/website
npm run build --prefix uis/website
curl -fsS http://localhost:5173/ >/dev/null
```

The lint command checks the React and TypeScript source, the build runs TypeScript compilation followed by `vite build`, and the curl check confirms that the running development server serves the page.

## Usage or workflow

Open the homepage and use the header navigation to jump to Services or Who we help. The hero call to action leads to the services section. The page presents the three business lines and identifies technology, retail, and financial services companies as Nexova's target clients.

## Data and security

The page currently contains only public-facing company description and synthetic/static copy. It does not load candidate, employee, client, lead, contact, ticket, or support records, and it has no browser storage, analytics payloads, authentication, or backend data access. Any future contact form or analytics integration must follow `.agents/rules/nexova-sensitive-data.md` and must not expose internal records through this public app.

## Known limitations and next steps

- Contact and navigation destinations are not backed by routes or a form yet.
- Add metadata, schema.org markup, SEO/GEO content, accessibility review, analytics, and a content publishing workflow.
- Connect approved public content to the centralized backend only when the API contract is defined.
- Add visual and browser-level tests when the frontend testing setup is selected.
