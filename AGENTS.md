# AGENTS.md

Single-page personal portfolio. Next.js 16 App Router + React 19 + GSAP, statically exported to GitHub Pages. No backend, no test suite, no database.

## Commands

```bash
npm ci                 # package-lock.json is the only lockfile; CI uses `npm ci`
npm run dev            # http://localhost:3000
npm run build          # static export to out/; ALSO runs the TypeScript check
npx tsc --noEmit       # fast typecheck (no dedicated script exists)
npm run lint           # = `eslint` with no args; lints whole repo from cwd
npx eslint --fix <file> # this repo's formatter (see below)
```

There is no test runner installed. Don't scaffold one unasked.

## Known tooling state (verify before trusting)

- `npm run lint` currently **fails only on `next.config.ts`** (double quotes, semicolons, unsorted object keys). That is pre-existing, not your regression. Fix with `npx eslint --fix`; don't add it to ignore lists.
- `stylelint.config.mjs` exists but has **no npm script** and **crashes on the installed Node 20.9** (`SyntaxError: Unexpected token 'with'` — needs Node ≥ 20.10 / 22). Don't rely on stylelint; don't "fix" the config to work around it.
- `@eslint/css` is in the ESLint config, but `.css` files are ignored ("no matching configuration was supplied"). CSS style is not enforced by any tool — match surrounding files by hand.

## Formatting is ESLint, not Prettier

Prettier is **not installed** (`eslint-config-prettier` only disables rules). `@stylistic` + `perfectionist` + `sonarjs` enforce style, so always format via `npx eslint --fix`.

- TS/TSX: 2 spaces, single quotes, **no semicolons**, no trailing commas.
- Imports sorted by `perfectionist` (`recommended-natural`); object keys must be alphabetical. Both are error-level.
- CSS: **tab** indentation (TS uses spaces), CSS Modules with native nesting, `composes:` for variants.

## Architecture

- `app/page.tsx` is the whole site: `Sidebar` + `FilePile` + `LightSwitch`.
- `app/ui/<component>/` = `index.tsx` + `styles.module.css` + `types.ts` (+ `constants.ts`). Default-export `const X: FunctionComponent<Props>`, props typed in `types.ts`, enums for variants (`TabPosition`, `HeadingSize`, `FileTab`). These are plain components, not a framework convention.
- Interactivity/animation is confined to `'use client'` leaves (`ui/light-switch`, `ui/file-pile`); everything else is a server component.
- React 19 style: `ref` is passed as an ordinary prop typed `RefObject<HTMLDivElement | null>`. No `forwardRef`.
- `app/image/*` assets are imported as static images. Only the CV PDF lives in `public/`.
- Import alias `@/*` → repo root (`@/app/ui/...`).

## Animation invariants (recent fixes — don't undo)

- `light-switch` and `file-pile` keep an `isAnimating` flag to ignore hover/click mid-timeline; removing it reintroduces the animation-cancel bug.
- `light-switch` portals the blackout overlay into `document.body` behind an `isMounted` guard specifically to avoid SSR/hydration errors. Keep the guard.
- `Heading` requires `children: string` and splits it into per-character `<span>`s; passing JSX fails the type.

## Styling system — use tokens, don't invent values

- `app/global.css` sets `font-size: 8px` on `:root`, so **1rem = 8px**, not 16px. All sizing uses `--spacing-*` / `--container-*` Fibonacci scales in rem.
- Use `--color-*` and `--z-index-*` tokens; add new ones in `global.css` rather than hard-coding hex or z-index.
- Mobile-first with a single breakpoint: `@media screen and (width >= 1300px)`. `light-switch` and the blackout overlay are `display: none` below it.

## Static export constraints

- `next.config.ts` sets `output: 'export'` and `images.unoptimized: true`. No API routes, server actions, middleware, ISR, or dynamic SSR; `next/image` stays unoptimized.
- Deploy: push to `main` → `.github/workflows/deploy.yml` builds and publishes `out/` to Pages. Keep `public/.nojekyll`.
- Root-absolute URLs (`/files/curriculum-vitae.pdf`) assume the site is served from a domain root; adding `basePath` would break them.
