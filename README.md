# Prestron Website

The public website for **Prestron** — a technology product house built from Kampala, Uganda. Built with Next.js 16 (App Router), Tailwind CSS v4, Motion, and PostHog analytics.

**Live site:** [prestron.com](https://prestron.com)

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack, static generation) |
| Language | TypeScript 7 (strict mode) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/postcss` |
| Animation | [Motion](https://motion.dev/) (formerly Framer Motion) |
| Analytics | [PostHog](https://posthog.com/) (cookie-consent-gated) |
| Package Manager | [pnpm](https://pnpm.io/) 11 |
| Fonts | [Archivo](https://fonts.google.com/specimen/Archivo) (UI), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (annotations) |

---

## Project Structure

```
Prestron-Website/
├── app/
│   ├── layout.tsx              # Root layout — fonts, metadata, providers, nav/footer
│   ├── page.tsx                # Home
│   ├── globals.css             # Design system (Tailwind v4 @theme + custom properties)
│   ├── not-found.tsx           # Custom 404
│   ├── global-error.tsx        # Client error boundary
│   ├── opengraph-image.tsx     # Auto-generated OG social card (1200×630)
│   ├── icon.png                # Favicon (Next.js file convention)
│   ├── robots.ts               # robots.txt generation
│   ├── sitemap.ts              # sitemap.xml generation
│   ├── what-we-build/page.tsx  # Products + custom systems
│   ├── approach/page.tsx       # Purpose, mission, vision, principles
│   ├── faq/page.tsx            # 6 frequently asked questions
│   ├── contact/page.tsx        # Contact form + info
│   ├── privacy/page.tsx        # Privacy policy
│   ├── terms/page.tsx          # Terms of service
│   └── api/contact/route.ts    # Contact form POST endpoint
├── components/
│   ├── Nav.tsx                 # Fixed header with logo, mobile hamburger, PostHog events
│   ├── Footer.tsx              # Site footer with links + contact
│   ├── CTA.tsx                 # Reusable call-to-action section
│   ├── ContactForm.tsx         # Client form (name, email, message)
│   ├── CookieConsent.tsx       # GDPR-style consent banner
│   ├── MotionWrapper.tsx       # FadeIn, StaggerChildren, StaggerItem
│   ├── HeroMark.tsx            # SVG corner mark with draw-in animation
│   ├── PrinciplesMoment.tsx    # Operating Principles typographic moment
│   ├── PostHogProvider.tsx     # PostHog init (consent-gated)
│   └── PostHogPageView.tsx     # Automatic pageview tracking
├── public/
│   ├── Prestron_logo2.png      # Primary logo
│   ├── Prestron_logo_light.png # Inverted variant (for dark mode)
│   ├── Prestron_logo_hires.png # High-res export (500px, for email/PDF)
│   ├── favicon-16.png          # 16×16 favicon
│   ├── favicon-32.png          # 32×32 favicon
│   └── apple-touch-icon.png    # 180×180 Apple touch icon
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── .env.local.example
```

---

## Getting Started

### Prerequisites

- **Node.js** 18.17+ (recommended: 20+)
- **pnpm** 9+ (`corepack enable && corepack prepare pnpm@latest --activate`)

### Install

```bash
pnpm install
```

### Environment Variables

Copy the example and fill in your keys:

```bash
cp .env.local.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_POSTHOG_KEY` | No | PostHog project API key |
| `NEXT_PUBLIC_POSTHOG_HOST` | No | PostHog instance URL (default: `https://us.i.posthog.com`) |
| `RESEND_API_KEY` | No | Resend API key for contact form email delivery |
| `CONTACT_EMAIL` | No | Destination address for contact form submissions |
| `FORMSPREE_FORM_ID` | No | Formspree form ID (alternative to Resend) |

> The site runs without any env vars. Analytics and email delivery are opt-in.

### Development

```bash
pnpm dev
```

Opens at [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
pnpm build
pnpm start
```

All pages are statically generated at build time. The server only handles the `/api/contact` POST route.

---

## Design System

The site follows a restrained, typographic design system defined in `app/globals.css`:

### Colors

| Token | Value | Usage |
|---|---|---|
| `--color-ink-black` | `#010B13` | Primary text, headings, borders |
| `--color-bright-snow` | `#F7F7F7` | Background |
| `--color-dusk-blue` | `#2E4A66` | Accent — links, labels, focus rings |

Ink at 85%, 70%, 55%, 40%, 12% opacity creates a quiet text hierarchy without additional colors.

### Typography

- **Archivo** — all customer-facing text (headings, body, nav, buttons)
- **JetBrains Mono** — spec annotations only (labels, meta, timestamps)
- All headings use `font-weight: 600–700`, `letter-spacing: -0.02em`, `line-height: 1.1`

### Spacing

8px-based scale: `4, 8, 16, 24, 32, 48, 64, 96, 128` — mapped to `--spacing-xs` through `--spacing-5xl`.

### Principles

- No cards, no shadows, no gradients. Separation via hairlines and whitespace.
- One accent color (Dusk Blue). Links, labels, and focus states only.
- Easing curve `[0.22, 1, 0.36, 1]` used sitewide for cohesion.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero with animated corner mark, "Two ways Prestron works", "Built from Uganda" |
| `/what-we-build` | Products criteria checklist, custom systems description |
| `/approach` | Purpose, mission, vision, operating principles, how Prestron starts |
| `/faq` | 6 questions with staggered reveal |
| `/contact` | Contact form + email/phone info |
| `/privacy` | 7-section privacy policy |
| `/terms` | 6-section terms of service |

---

## SEO & Accessibility

- **Metadata:** `generateMetadata` on every route with title, description, canonical URL
- **Open Graph:** Auto-generated 1200×630 social card via `opengraph-image.tsx`
- **Favicon set:** 16×16, 32×32, 180×180 Apple Touch Icon
- **Sitemap:** Auto-generated `sitemap.xml` via `app/sitemap.ts`
- **Robots:** Auto-generated `robots.txt` via `app/robots.ts`
- **Semantic HTML:** Landmark regions, `aria-label` on sections, `aria-hidden` on decorative elements
- **Focus visible:** 2px Dusk Blue outline on keyboard focus
- **Reduced motion:** All animations disabled via `prefers-reduced-motion: reduce`
- **Alt text:** Decorative images use `alt=""`, links have `aria-label`

---

## Analytics

PostHog analytics is initialized only after the user accepts cookies via the consent banner.

**Consent flow:**
1. `CookieConsent` banner appears on first visit
2. User clicks Accept or Decline
3. Choice stored in `localStorage` under `prestron-consent`
4. `PostHogProvider` reads the key and initializes PostHog only if accepted
5. `PostHogPageView` captures `$pageview` on route changes

**Custom events captured:**
- `nav_link_clicked` — with `page` property
- `contact_form_submitted` — on successful form POST
- `cookie_consent_accepted` — when user accepts

---

## Deployment

The site is a standard Next.js application. Deploy to any platform that supports Node.js:

### Vercel (recommended)

```bash
pnpm dlx vercel
```

Or connect the GitHub repo to Vercel for automatic deployments.

### Other Platforms

```bash
pnpm build
pnpm start
```

The production server listens on port 3000 by default. Set `PORT` to change.

### Environment Variables in Production

Set these in your hosting platform's dashboard:

```
NEXT_PUBLIC_POSTHOG_KEY=phc_...
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
RESEND_API_KEY=re_...
CONTACT_EMAIL=contact@prestron.com
```

---

## Contact Form

The contact form at `/api/contact` accepts POST requests with JSON:

```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

**Currently:** Submissions are logged to the server console. Wire up your preferred email service by editing `app/api/contact/route.ts` — Resend and Formspree examples are included as comments.

---

## License

Proprietary — Prestron. All rights reserved.
