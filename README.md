# AJEMS — Premium SaaS Website (React)

A polished, cinematic SaaS marketing site inspired by the AJEMS design reference.
Built with **React + React Router + Framer Motion** and **plain CSS only** (no Tailwind, no SCSS).

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (defaults to http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

> Requires Node.js 18+.

## Tech & conventions

- **React 18** with **Vite** for fast dev/build
- **React Router v6** for multi-page routing with animated page transitions
- **Framer Motion** for scroll reveals, the cinematic hero scaling, tab/accordion
  transitions, count-ups and micro-interactions
- **Plain CSS** with a shared token system in `src/styles/variables.css`
- Every section/component lives in its own folder with its **own CSS file**

## Design system

All colors, spacing, radii, shadows and typography tokens live in
`src/styles/variables.css` and are reused everywhere via CSS variables.

- Headings use **Geist**, body/UI uses **Inter** (loaded in `index.html`)
- Glassmorphism surfaces via the reusable `.glass` utility
- Brand palette: `--primary-bg #061127`, `--secondary-blue #1D4DD7`,
  `--cta-color #6AEBC9`, `--footer-blue #0F2871`

## Structure

```
src/
├── assets/        images / videos / logos / icons
├── components/    Navbar, Hero, LogoMarquee, FeaturesTabs, Dashboard,
│                  Counters, Testimonials, CaseStudies, FAQ, CTA, Footer, Common
├── pages/         Home, About, Features, Pricing, Contact
├── styles/        global / variables / animations / responsive
├── App.js         layout + routes + page transitions
├── routes.jsx     route + nav link definitions
└── main.jsx       entry
```

## Notes

- The hero "showcase video" is a self-contained animated UI frame
  (`components/Hero/ShowcaseFrame.jsx`). To use a real clip, drop a `<video>`
  into `src/assets/videos/` and replace the frame's screen content — the
  scroll-driven scaling will still apply.
- Client logos in the marquee are styled wordmarks (placeholders). Swap in real
  SVGs under `src/assets/logos/` if you have licensed assets.
- Respects `prefers-reduced-motion`.
```
