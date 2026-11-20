# Nexova Public Website

## Overview

This folder contains the **corporate landing page** and **talent registration forms** for Nexova Solutions. The website is built with semantic HTML5, Tailwind CSS, and vanilla JavaScript—no frameworks or build tools required.

## Project Structure

```
website/
├── index.html          # Corporate landing page
├── application.html    # Talent registration form
├── validation.js       # Form validation logic
└── README.md          # This file
```

## Pages

### `index.html` — Corporate Landing Page
- **Purpose:** Company overview and introduction to Nexova's services
- **Sections:**
  1. Header with sticky navigation (Home, Services, Talent, Contact)
  2. Hero section with company value proposition
  3. Services overview (3 cards: Executive Headhunting, Support Outsourcing, Training)
  4. Why Nexova section (12+ years, 2 offices, 500+ processes, 3 industries)
  5. Talent CTA section
  6. Contact information (email, phone)
  7. Footer with social links

- **SEO & Schema:**
  - Comprehensive meta tags (description, keywords, OpenGraph)
  - Schema.org Organization JSON-LD with founding date, addresses, contact points
  - Semantic HTML5 elements (header, nav, main, section, article, footer)

- **Accessibility:**
  - Proper heading hierarchy (h1, h2, h3)
  - Keyboard-navigable links with visible focus states
  - Descriptive link text and aria-labels
  - Color contrast meets WCAG AA standards
  - Mobile-first responsive design

- **Styling:**
  - Tailwind CSS utility classes (CDN)
  - Responsive breakpoints: mobile, tablet (md), desktop (lg)
  - Gradient accents and hover states
  - No custom CSS required

### `application.html` — Talent Registration Form
- **Purpose:** Talent pool registration form for job seekers
- **Features:**
  - 11 form fields (name, email, phone, country, experience, sector, English level, availability, LinkedIn, comments, data policy)
  - Full client-side validation with real-time feedback
  - Responsive design matching corporate landing page
  - Success message after valid submission
  - Link back to home page
  - Keyboard accessible with ARIA labels
  - Mobile hamburger menu navigation

- **Form Fields:**
  - Full Name, Email, Phone (required)
  - Country dropdown, Years of Experience (required)
  - Sector & English Level dropdowns (required)
  - Availability radio buttons (required)
  - LinkedIn profile & Comments (optional)
  - Data processing policy checkbox (required)

### `validation.js` — Form Validation
- **Purpose:** Client-side form validation and submission handling
- **Features:**
  - Real-time validation on blur events
  - Comprehensive error messages with helpful examples
  - 500-character counter for comments field
  - Form-level validation on submit
  - Success message display with smooth scroll
  - Clear/Reset form functionality
  - Console logging of valid form data
  - Browser compatible (ES5+)

## Technical Stack

- **HTML5:** Semantic elements, microdata, SEO meta tags
- **Tailwind CSS:** Utility-first CSS framework (CDN link included)
- **JavaScript:** Vanilla ES5+ (no transpilation needed)
- **Hosting:** Static site (can be deployed to any CDN, Vercel, Netlify, GitHub Pages, etc.)

## How to Preview

### Option 1: Local HTTP Server (Recommended)
1. Install and use `http-server` via npm:
   ```bash
   cd /workspaces/company-project-orlandojim24/uis/website
   npx http-server
   ```
2. Open `http://localhost:8080` in your browser
3. Navigate to `index.html` or `application.html`

### Option 2: Local File System
1. Open `index.html` directly in a web browser:
   ```bash
   open uis/website/index.html  # macOS
   # or navigate to the file in your file explorer
   ```

### Option 3: Codespaces with Python Server
1. Use Python's built-in HTTP server:
   ```bash
   cd /workspaces/company-project-orlandojim24
   python3 -m http.server 8000
   ```
2. In Codespaces, forward port 8000 and open the forwarded URL
3. Navigate to `http://localhost:8000/uis/website/index.html`

### Option 4: VS Code Live Server
1. Install the Live Server extension in VS Code
2. Right-click `index.html` → "Open with Live Server"
3. Browser opens automatically to the rendered page

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Tailwind CSS supports all modern browsers and IE 11+ (with prefixes)

## Deployment Notes

- No build step required; files are ready to deploy as-is
- Ensure all links are relative or absolute as appropriate for your hosting
- Update social links and contact information if needed
- Consider adding a favicon and Open Graph image for social sharing

## Checklist for Milestone 1

- [x] Create semantic HTML5 structure
- [x] Implement Tailwind CSS responsive design
- [x] Add Schema.org Organization JSON-LD on landing page
- [x] Add Schema.org BreadcrumbList JSON-LD on form page
- [x] Include all required sections with Nexova branding
- [x] Implement `application.html` (talent registration form)
- [x] Implement `validation.js` (form validation)
- [x] Add accessibility enhancements (aria-describedby, aria-expanded, autocomplete, skip link)
- [x] Document npx-based local preview command
- [ ] Test on mobile and desktop devices (manual verification needed)
- [ ] Validate accessibility with screen reader tools (manual verification needed)
- [ ] Deploy and test on live environment

## Notes

- Tailwind CSS is loaded via CDN; consider using a build tool (Tailwind CLI, PostCSS) for production optimization
- Future enhancements: add mobile menu hamburger navigation, integrate with backend API
- All company information is sourced from `CONTEXT.md`
