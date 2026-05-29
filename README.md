# 🦕 Dino Landia

A playful, bilingual (English + Spanish) dinosaur encyclopedia built for curious kids ages 5–10.

Warm, earthy, semi-realistic illustration style inspired by classic high-quality children’s dinosaur books.

---

## Current Status (Stopping Point)

**Last updated:** Commit `8fb6f92` — "feat(phase2): organize all generated dinosaur assets..."

### Completed Work

- **Phase 0 – Foundation**
  - Next.js 16 + TypeScript + Tailwind + ESLint
  - Full `next-intl` setup with EN/ES locale routing
  - Language switcher (🇺🇸 English / 🇪🇸 Español)
  - GitHub Actions CI (lint + typecheck + build)
  - GitHub repo: [gercamjr/dino-landia](https://github.com/gercamjr/dino-landia)

- **Phase 1 – Content**
  - Complete TypeScript data model for dinosaurs
  - Full bilingual content (EN + ES) for all 7 dinosaurs
  - Kid-friendly facts, descriptions, pronunciation guides

- **Phase 2 – Media Assets**
  - 14 custom images + 7 videos generated
  - Consistent warm, earthy, semi-realistic style (Dorling Kindersley inspired)
  - All assets organized in `public/dinosaurs/[slug]/`
  - Data model updated with media paths

**Current state:** All content and visual assets are ready. No UI pages beyond the basic landing page have been built yet.

---

## Next Phase / Todo List

### Phase 3 – Core Experience (Next Priority)
- [ ] Build Explore page with search + filters (diet, period, size)
- [ ] Dinosaur detail pages (`/[locale]/dinosaurs/[slug]`)
- [ ] Interactive size comparison tool
- [ ] "My Collection" (favorites using localStorage + Zustand)
- [ ] Dino Quiz targeted at 5–7 year olds
- [ ] Interactive Mesozoic Timeline

### Phase 4 – Polish & Launch
- [ ] Full accessibility audit (large tap targets, contrast, ARIA)
- [ ] Performance optimization (images, videos)
- [ ] Beautiful README with screenshots
- [ ] Deploy to Vercel
- [ ] Optional: Add comparison images or more polish assets

### Future / Stretch
- More dinosaurs
- Printable activity sheets
- Simple sound effects
- "Dino of the Day" feature

---

## Tech Stack

- Next.js 16 (App Router)
- TypeScript + Tailwind
- next-intl (bilingual routing)
- Framer Motion (planned for interactions)
- Zustand (client state)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
