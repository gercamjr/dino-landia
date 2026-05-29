# AI Status File – Dino Landia

**Purpose**: Quick reference for resuming work in future sessions.

**Last Updated**: After Phase 2 completion (commit `cee2f62`)

---

## Current Project State

**Stopping Point**: End of **Phase 2** (Asset Generation + Organization)

### Completed
- **Phase 0 – Foundation**
  - Next.js 16 + TypeScript + Tailwind + ESLint
  - Full `next-intl` bilingual setup (EN + ES)
  - Working language switcher
  - GitHub Actions CI workflow
  - Repository: https://github.com/gercamjr/dino-landia

- **Phase 1 – Content**
  - Strong TypeScript data model (`data/dinosaurs.ts`)
  - Complete bilingual content (English + Spanish) for all 7 dinosaurs
  - Kid-friendly tone, fun facts, pronunciation

- **Phase 2 – Media**
  - 14 images + 7 videos generated
  - Consistent style: Warm, earthy, semi-realistic (Dorling Kindersley / classic children’s book illustration style)
  - All assets organized in `public/dinosaurs/[slug]/`
  - Data model updated with `media` paths

**Current UI State**: Only a basic landing page exists. No Explore, Detail, Quiz, Timeline, or Collection features yet.

---

## Critical Rules (Must Follow)

1. **Hard Lint Rule** (User-mandated):
   - **Before writing to any file** (`write`, `search_replace`, or any code change):
     - Run `npm run lint`
     - If there are **any** lint errors or warnings → **Block** the write
     - Fix the lint issues first
     - Only proceed with writing when lint passes cleanly (exit code 0)
   - This rule applies **always**.

2. Art Style (Locked In):
   - Warm, earthy, muted natural tones
   - Semi-realistic, friendly children’s book illustration style (Dorling Kindersley inspired)
   - **Do not** make it overly vibrant or cartoonish

3. Target Audience:
   - Primarily children ages 5–7 for the Quiz and core experience

---

## Next Priorities (Phase 3)

**Recommended order**:
1. Build the **Explore page** (grid + search + filters)
2. Build **Dinosaur Detail pages** (`/[locale]/dinosaurs/[slug]`)
3. Implement **Favorites / My Collection**
4. Build the **Dino Quiz** (gentle, visual, for 5–7 year olds)
5. Build the **Interactive Timeline**
6. Implement **Size Comparison** tool

After core features are working:
- Accessibility audit
- Performance pass (especially videos)
- Polish + deploy to Vercel

---

## Key Files & Structure

- `data/dinosaurs.ts` — Main data model + all bilingual content + media paths
- `public/dinosaurs/[slug]/` — All images and videos live here
- `app/[locale]/` — Localized pages
- `components/` — Reusable components
- `i18n/` — next-intl routing and request config
- `messages/en.json` + `messages/es.json` — UI translations

Useful helper functions already exist:
- `getDinosaurBySlug(slug)`
- `getAllDinosaurs()`

---

## Git State

- Branch: `main`
- Latest commit: `cee2f62` (documentation + stopping point)
- All Phase 2 work is committed and pushed

---

## Notes for Next Session

- Start by running `npm run lint` as the very first action.
- The user likes the current visual style — do not deviate without explicit approval.
- Focus on building delightful, child-friendly interactions.
- Keep language simple and warm.

---

**Ready to continue with Phase 3 when you are.**