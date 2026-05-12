# Skill Proof Passport — PRD & Status

## Original Problem Statement (summary)
Validation MVP for "Skill Proof Passport": a high-conversion landing page targeting Tier-2/Tier-3 Indian college students (18–26) learning frontend. Goal: validate willingness to submit projects and PAY for project review. No backend / no DB — use a Google Form for submissions emailed to omprakashbehera625@gmail.com. Simple, user-friendly, English + Hindi mix.

## Architecture
- **Frontend only** (React + Tailwind, Neo-Brutalist design)
- **No database, no auth, no backend logic** (template backend untouched)
- **Form**: Google Form embedded via iframe (URL configurable in `src/config.js`)
- **Routes**: `/` (Landing), `/apply` (form embed), `/success` (thank-you + WhatsApp CTA)
- **Contact**: WhatsApp `+91 8260345793`, email `omprakashbehera625@gmail.com`

## User Personas
- 18–26 year old Tier-2/Tier-3 frontend learner (HTML/CSS/JS/React)
- Has 1–3 projects, low confidence, applying for first job/internship
- Fears: "not good enough", "project is weak"
- Wants: clarity, validation, direction

## Core Requirements (static)
1. High-conversion landing with Hero, Pain, Solution, How-it-Works, Sample Report, Pricing, Final CTA
2. Embedded Google Form for submissions
3. Success page with WhatsApp CTA
4. Hinglish copy that reduces fear and pushes action
5. Brutally honest "real feedback" tone (no fluff)

## What's Been Implemented (2025-12)
- ✅ Landing page (`/`) — Hero, marquee, Pain, Solution, How-it-Works, Sample Report card (CSS-built, JetBrains Mono), Pricing (Free / ₹299 / ₹999), Final CTA, Footer
- ✅ Apply page (`/apply`) — Google Form iframe + placeholder fallback with field checklist and clear setup instructions
- ✅ Success page (`/success`) — WhatsApp + Email CTAs
- ✅ Neo-brutalist design system: Outfit + IBM Plex Sans + JetBrains Mono, signal red (#FF331F) + yellow (#FFD600) + green (#00FF66), 4px black borders, 8px hard offset shadows
- ✅ All interactive elements have `data-testid`
- ✅ Mobile-responsive layout
- ✅ WhatsApp deep link with pre-filled message
- ✅ Footer with owner email link

## How to plug in the Google Form (user action)
1. Create the Google Form in `omprakashbehera625@gmail.com` account with the 13 fields listed in `/app/frontend/src/pages/Apply.jsx`.
2. Form → "Responses" → ⋮ → "Get email notifications for new responses" (so the user gets a Gmail ping per submission).
3. Click "Send" → choose the `< >` (embed) icon → copy the `src` URL from the iframe snippet.
4. Open `/app/frontend/src/config.js` and replace `GOOGLE_FORM_EMBED_URL` with the copied URL.
5. Hot-reload will swap the placeholder with the live form automatically.

## Backlog / Next Tasks
### P0 (blocking validation)
- User to create the Google Form and paste the embed URL into `src/config.js`
- User to share the live URL in WhatsApp / Telegram / college groups

### P1 (nice-to-have)
- Add Plausible / GoatCounter / Google Analytics snippet to track visitor → submission conversion
- Add a small "₹X collected this week" social-proof badge once submissions start
- Replace placeholder sample-report numbers with a real anonymised report PDF

### P2 (post-validation)
- If 5+ users select "Would pay" → add Razorpay/Stripe payment link directly on the form
- A/B test the hero headline ("Stop applying blindly" vs "Crack your first job interview")
- Add 2–3 real testimonials with photos
