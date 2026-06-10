# Kontengrafi — Landing Page PRD

## Original Problem Statement
"buatkan saya website landing page yang nantinya ingin saya sediakan section photo & video. Warna websitenya biru putih, dengan konsep minimalis modern. Dengan nama brand: Kontengrafi. Berikan tagline yang bagus untuk website tersebut"

Later iterations:
- v2: User asked for editorial bold style (Alisa Korsak / Match Point reference), keep blue + white, use fashion + F&B imagery.
- v3 (current): User asked to rebuild based on **Invoko.ai** design DNA, provided official logo (white pinwheel on blue), set tagline = "A helping hand behind every post".

## Architecture
- React SPA, single route `/` (no backend)
- Cream paper background (#F4EEDF), white cards, blue accents (#2A4FE0), navy darks (#14183A)
- Fonts: Manrope (display & body) + Instrument Serif italic (accent) + IBM Plex Mono (labels)
- Hot-reloaded via supervisor

## File Structure
- `src/App.js` — Router shell
- `src/pages/Landing.jsx` — composes all sections
- `src/components/site/Navbar.jsx` — pill nav, sticky+blur on scroll
- `src/components/site/Hero.jsx` — tagline + platform marquee
- `src/components/site/BesideYou.jsx` — phone feed mockup with fashion & F&B images
- `src/components/site/PermissionCards.jsx` — 3 alternating "permission" cards
- `src/components/site/Process.jsx` — dark navy, 3 numbered steps
- `src/components/site/Testimonials.jsx` — quote marquee + 3 testimonial cards
- `src/components/site/Plans.jsx` — Starter / Grow (highlighted) / Studio pricing
- `src/components/site/Faq.jsx` — 8-item shadcn Accordion
- `src/components/site/FinalCta.jsx` — big blue panel + Ask AI buttons
- `src/components/site/Footer.jsx`
- `src/lib/brand.jsx` — Pinwheel SVG mark + brand constants
- `src/lib/contacts.js` — WhatsApp / IG / TikTok / email
- `src/lib/images.js` — Pexels fashion & F&B URL list
- `src/lib/reveal.js` — useReveal hook (IntersectionObserver + 2s fallback)

## What's Implemented (2026-06-10 — v3)
- Invoko-inspired editorial layout: cream paper, mixed serif italic + sans, pill-shape navbar
- Hero with custom pinwheel logo SVG + tagline "A helping hand behind every post"
- Platform marquee strip (Instagram, TikTok, YouTube, Pinterest, Shopee, FB, X, WhatsApp, Spotify, LinkedIn)
- BesideYou phone mockup with 6 sample feed posts (fashion + F&B)
- 3 alternating PermissionCards (Brand Voice Sync, Shoot Day Access, Approval Flow)
- 3-step Process section on dark navy
- Testimonials marquee (8 quotes) + 3 detailed cards
- 3 pricing plans with Grow highlighted ("Paling Populer")
- 8-item FAQ accordion
- Big blue FinalCta + Ask AI links (ChatGPT/Claude/Perplexity with pre-filled prompt)
- Animated pinwheel decorations in hero/footer/CTA
- 100% testing agent pass (77/77 assertions)

## Prioritized Backlog
### P1
- Replace placeholder Pexels images with real client portfolio when available
- Update WhatsApp number, IG/TikTok handles, email in `src/lib/contacts.js`
- Add favicon (use pinwheel) + OG image + SEO meta
- Add real fashion/F&B portfolio gallery section (optional photo+video tabs)

### P2
- Lead-capture form (free brief audit) with Resend email integration
- Smooth Lenis scroll for premium feel
- Internationalization (EN / ID toggle)
- Booking calendar (Cal.com embed)

### P3
- Case study CMS / blog
- Client logo wall
- Process video / behind-the-scenes
