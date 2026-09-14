# Nexova Sensitive Data Handling

**Scope:** File-pattern based. Apply whenever working in `data/**`, `services/**`, `uis/**`, `agents/**`, `workflows/**`, or `packages/**` on candidate, employee, client, lead, contact, ticket, or support knowledge data.

## Rule

Treat Nexova business records as sensitive by default. Candidate and employee information may include CVs, contact details, employment history, interview notes, and HR data. Client and lead information may include contacts, company details, sales conversations, proposals, and qualification signals. Support information may include ticket content, customer identifiers, internal knowledge, sentiment, and SLA history.

## Required guidance

- Use synthetic or redacted fixtures in source control, tests, screenshots, examples, and local seed data. Never commit real CVs, employee records, client records, ticket transcripts, credentials, API tokens, or unredacted exports from HubSpot, Zendesk, Google Workspace, or the legacy ATS.
- Keep sensitive fields out of URLs, browser storage, analytics events, error messages, debug output, and application logs. Log stable internal IDs and event metadata instead of names, email addresses, phone numbers, CV text, ticket text, or message bodies.
- Define explicit access boundaries in UI and API code. Sales users may access assigned lead and opportunity data; support users may access tickets and approved knowledge for their client accounts; administrative access must be deliberate and auditable.
- Do not expose candidate or employee information in the public `uis/website` application. Internal records belong in authenticated `uis/backoffice` workflows or approved backend endpoints under `services/`.
- For AI, retrieve only the minimum records needed for the task, preserve source references for RAG answers, and require human review before consequential candidate ranking, lead disposition, customer communication, or support escalation decisions.
- Mask or delete sensitive values in test teardown and local development artifacts. Document any fixture schema and its synthetic-data assumptions in the owning app, service, pipeline, or agent README.
- When a change needs real data, external credentials, a new permission, or a new retention path, stop and request explicit developer confirmation before implementing it.
