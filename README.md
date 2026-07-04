# Tanmay Choudhary — Systems & Spatial Intelligence

The Workspace: a living system monitor, not a portfolio template.

## Concept

The site doesn't present itself as "Hi I'm Tanmay, here's my work." It boots up like a system, runs like a system, and reveals the person through its behavior. Projects are processes. Skills are system resources. The site has state — live time, uptime, signal.

## Features

- **Boot sequence** — site opens with a system initialization animation
- **Live signal field** — cursor-reactive canvas with drifting particles, concentric rings, and a tracking crosshair. 60fps, no stock art
- **System monitor** — animated metric bars showing current state (projects, GATE score, uptime, systems running)
- **Work grid** — 6 projects with "what it proves" as the core artifact
- **Capabilities list** — directional hover arrows, numbered, clean
- **Contact grid** — "Send a brief" CTA + social links (X, GitHub, LinkedIn, Email)
- **Live IST clock** — real-time Bhopal time in hero metadata
- **Footer** — "Designed & built end-to-end"

## Stack

- **Framework:** Next.js 16 (static export)
- **Styling:** Tailwind CSS v4 + custom design system
- **Animation:** Framer Motion, custom CSS, canvas 2D context
- **Typography:** Times New Roman / Georgia (display), system sans (body), ui-monospace (code)
- **Colors:** Void black (#060605), paper cream (#f5f1e8), signal red (#e81f16)

## Development

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # static export to ./dist
```

## Deployment

Static export — deploy `dist/` to any static host (Cloudflare Pages, Vercel, Netlify).

---

Designed & built end-to-end by Tanmay Choudhary.