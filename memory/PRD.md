# Kontengrafi — Landing Page PRD

## Original Problem Statement
"buatkan saya website landing page yang nantinya ingin saya sediakan section photo & video. Warna websitenya biru putih, dengan konsep minimalis modern. Dengan nama brand: Kontengrafi. Berikan tagline yang bagus untuk website tersebut"

## User Choices (verbatim)
- Service: pembuatan foto & video UGC dan komersial (jangan sebut AI eksplisit)
- Sections: Hero + About + Services + Portfolio (Photo & Video) + Testimonials + Contact
- Portfolio: user akan menyediakan asset sendiri (placeholder dulu)
- Contact: WhatsApp & social media only (no backend form)
- Tagline: "Next generation content"
- Color: blue + white, minimalis modern

## Architecture
- Frontend-only React SPA (React Router single route `/`)
- No backend / no database used for this scope
- Static landing page, Bahasa Indonesia copy

## File Structure
- `src/App.js` — Router shell
- `src/pages/Landing.jsx` — composes all sections
- `src/components/site/Navbar.jsx`
- `src/components/site/Hero.jsx`
- `src/components/site/Marquee.jsx`
- `src/components/site/About.jsx`
- `src/components/site/Services.jsx`
- `src/components/site/Portfolio.jsx` (shadcn Tabs)
- `src/components/site/Testimonials.jsx`
- `src/components/site/Contact.jsx`
- `src/components/site/Footer.jsx`
- `src/lib/contacts.js` — single source of WhatsApp / IG / TikTok / email
- `src/lib/reveal.js` — IntersectionObserver scroll-reveal hook

## User Personas
- UMKM / DTC brand owners cari produksi foto-video cepat & terjangkau
- Marketing lead agency butuh konten UGC + komersial sinematik
- Founder e-commerce butuh product shots konversi tinggi

## Design System
- Palette: #0047FF cobalt blue, white, slate-900/600/500/200
- Typography: Cabinet Grotesk (display) + Manrope (body)
- Archetype: Swiss & High-Contrast — generous whitespace, asymmetric bento grids
- Micro-interactions: scroll reveal, hover-lift, grayscale→color on images, marquee, animated underlines

## What's Been Implemented (2026-06-10 — v1)
- Fixed navbar with backdrop-blur on scroll, mobile hamburger
- Asymmetric hero with massive headline, dual CTAs (WhatsApp + scroll-to-portfolio), 3 stats
- Animated keyword marquee strip
- About section with 4-cell value grid
- Services bento (UGC accent card + 3 regular)
- Portfolio with Tabs (Photo / Video), grayscale→color hover, play overlay on videos
- Dark testimonials section with 3 quote cards
- Massive WhatsApp CTA + Instagram/TikTok/Email contact tiles
- Footer
- 100% testing agent pass (37/37 assertions)

## Prioritized Backlog
### P1 (next iteration)
- Replace placeholder portfolio with actual client assets (lightbox modal for full view)
- Add real video playback (mp4/YouTube embed) in Portfolio video tab
- Replace `wa.me` number / IG / TikTok handles with real ones
- Add favicon and SEO meta (title, OG image, description)

### P2
- "Process" section (Brief → Konsep → Eksekusi → Delivery)
- FAQ accordion
- Brand logos / client wall
- Animated counter on hero stats
- Multi-language toggle (ID / EN)

### P3
- Booking flow / calendar integration
- Pricing tiers section
- Blog / case study CMS
