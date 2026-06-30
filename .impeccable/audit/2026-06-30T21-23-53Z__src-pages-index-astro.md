# Audit — src/pages/index.astro

Date: 2026-06-30 · Branch: impeccable · Target: `src/pages/index.astro` (+ `src/styles/global.css`)
Standard: WCAG 2.2 AA (per PRODUCT.md)

## Audit Health Score

| # | Dimension | Score | Key Finding |
|---|-----------|-------|-------------|
| 1 | Accessibility | 3/4 | Dormant receipt line items 3.1:1 on paper — fails AA (desktop-only nav) |
| 2 | Performance | 4/4 | No framework, IntersectionObserver not scroll, lazy images, local fonts |
| 3 | Responsive Design | 3/4 | Fluid throughout; signature receipt absent <1536px (tracked in #21) |
| 4 | Theming | 3/4 | Strong token system; receipt hardcodes a few off-token grays |
| 5 | Anti-Patterns | 3/4 | One real ban hit (acid `border-left` on facts) — but documented, intentional |
| **Total** | | **16/20** | **Good (address weak dimensions)** |

## Anti-Patterns Verdict — PASS (with one documented exception)

This does **not** look AI-generated. It is a distinctive, committed two-color editorial system. Clean of every saturated tell: no gradient hero, no gradient text, no glassmorphism, no hero-metric template, no identical card grid, no per-section tracked eyebrow (the single hero kicker "Bez práce nejsou koláče" is deliberate brand voice, not scaffold), no generic fonts.

Two flags, both defensible:
- **Side-stripe border** — `.currency-fact { border-left: 2px solid var(--acid) }` is a literal match for the absolute-ban "colored border-left >1px as accent." BUT it is canonized in DESIGN.md as the `fact-block` component, paired with the acid color, and reads as the intentional "acid-ruled verifiable fact." A detector flags it; a human reads it as designed. Keeping it is a legitimate brand decision, not slop. Documented exception.
- **Numbered markers** (currency `01–04`, mechanisms `01–03`) — justified: both ARE real ordered sequences (the four currencies; three named mechanisms), which the rule explicitly permits.

## Executive Summary
- Health Score: **16/20 (Good)**
- Issues: P0 ×0 · P1 ×1 · P2 ×2 · P3 ×3
- Top issues:
  1. **[P1]** Dormant receipt line items fail AA contrast (3.1:1).
  2. **[P2]** No custom `:focus-visible` — keyboard focus rings rely on UA default (low-contrast risk on ink/acid surfaces).
  3. **[P2]** Receipt `×` close glyph 1.84:1 — fails non-text/text contrast.
- Next steps: fold P1+P2 fixes into the `adapt` work (#21) and the `polish` pass (#18); route em-dash cadence to `clarify`.

## Detailed Findings by Severity

### [P1] Dormant receipt line items fail AA contrast
- **Location**: `index.astro` `.r-item` (line ~807) — `color: rgba(11, 11, 12, 0.45)` on `--paper` (#f4f1ea)
- **Category**: Accessibility
- **Impact**: Upcoming/unvisited section names + their "cost" labels render at ≈**3.1:1** — below the 4.5:1 floor for this 0.66rem mono text. Low-vision readers can't reliably read the not-yet-reached lines.
- **WCAG**: 1.4.3 Contrast (Minimum), AA
- **Reach**: Receipt only displays ≥1536px, so the violation is confined to large desktops — real but narrow.
- **Recommendation**: Raise alpha to ≈`0.6` (→ ≈5.4:1) or introduce a paper-ramp token (e.g. `--paper-dim`). Active (ink-on-acid) and past (ink-on-paper) states already pass.
- **Suggested command**: `/impeccable adapt` (do it inside #21) or `/impeccable polish`

### [P2] No custom `:focus-visible` indicator
- **Location**: global — no `:focus`/`:focus-visible` rules in `index.astro` or `global.css`
- **Category**: Accessibility
- **Impact**: All interactive elements (source-ref `[n]` links, receipt links, close/reopen buttons, source-list links) fall back to the browser default ring. On the near-black ink body and the acid closer panel the default ring can be near-invisible, hurting keyboard wayfinding. UA default technically satisfies 2.4.7, so this is quality/robustness rather than a hard failure.
- **WCAG**: 2.4.7 Focus Visible (AA) — borderline; 2.4.11 Focus Appearance (AAA) for the stronger bar
- **Recommendation**: Add a brand `:focus-visible` — e.g. `outline: 2px solid var(--acid); outline-offset: 2px;` for ink surfaces, and an ink ring inside the acid closer. One rule set, theme-aware.
- **Suggested command**: `/impeccable polish`

### [P2] Receipt close `×` glyph too low contrast
- **Location**: `index.astro` `.r-close` (line ~744) — `color: #b9b4a6` on paper
- **Category**: Accessibility
- **Impact**: The dismiss control sits at ≈**1.84:1** until hover — hard to see it's there. Hover restores full ink, but hover isn't available to keyboard/touch.
- **WCAG**: 1.4.3 (it's the "×" text character) / 1.4.11 Non-text Contrast, AA
- **Recommendation**: Darken the resting color toward `--ink` (e.g. a ~0.55-alpha ink or `#6b685f`-and-darker), keep hover at full ink.
- **Suggested command**: `/impeccable polish`

### [P3] No skip-to-content link
- **Location**: top of `<body>` — receipt nav (`≥1536px`) is the first focusable region before `<main>`
- **Category**: Accessibility
- **Impact**: At ≥1536px a keyboard user tabs through 7 receipt links + close before reaching the hero. `<main>`, `<nav aria-label>`, `<footer>`, and a clean heading outline already satisfy Bypass Blocks, so this is a nicety, not a violation. (Below 1536px the receipt is `display:none`, so it's correctly out of tab order.)
- **WCAG**: 2.4.1 Bypass Blocks (met by landmarks; skip link is the enhancement)
- **Recommendation**: Add a visually-hidden-until-focus "Přeskočit na obsah" link → `#setup`/`<main>`.
- **Suggested command**: `/impeccable polish`

### [P3] Inline citation tap targets are small
- **Location**: `.src-ref` `[n]` superscripts (0.75em)
- **Category**: Responsive / Accessibility
- **Impact**: On touch, the `[1]`-style citation links are <24px tall and fiddly to tap. **Exempt** under WCAG 2.5.8's inline-target exception (they sit within sentences), so not a violation — but a real mobile annoyance.
- **WCAG**: 2.5.8 Target Size (Minimum), AA — inline exception applies
- **Recommendation**: Add a little vertical padding / larger hit area without disturbing baseline, or accept as-is given the exemption.
- **Suggested command**: `/impeccable adapt`

### [P3] Off-token colors in the receipt + font payload
- **Location**: `.r-item` `rgba(11,11,12,…)`, `.r-close` `#b9b4a6`, `.r-meta` `#6b685f`, card shadows `rgba(0,0,0,…)`, `oc-card` border `rgba(244,241,234,0.16)`; fonts import full Archivo Variable + Archivo Black
- **Category**: Theming / Performance
- **Impact**: Bespoke paper-grays bypass the token system (the DESIGN.md tonal ramps already cover these); minor maintainability drift. Fonts are bundled (good — no external requests) but not subset to Czech, so payload is larger than needed.
- **Recommendation**: Promote the recurring grays to `--paper-dim` / `--paper-faint` tokens; consider `unicode-range` subsetting for the Latin-Czech glyph set.
- **Suggested command**: `/impeccable polish` (tokens) / `/impeccable optimize` (font subset)

## Positive Findings (keep these)
- **Performance is excellent**: zero framework, no scroll listener (IntersectionObserver with a center band), Astro `<Image>` responsive + lazy, static SVG/mask filters, locally-bundled fonts (no third-party requests — on-brand "no hidden costs").
- **Readable without JS**: the static page is the canonical experience; receipt + active-state are pure enhancement. `prefers-reduced-motion` alternatives present (collage hover + receipt transitions suppressed; smooth-scroll disabled).
- **Semantics**: clean heading outline (h1→h2→h3, no skips), `<main>`/`<nav aria-label>`/`<footer>`, `<figure>`/`<figcaption>`, `<ol>` for sources, descriptive alt text on all three images, `lang="cs"`, decorative SVG `aria-hidden`+`focusable=false`, no-flash inline receipt-state restore.
- **Strong, consistent token system** in `:root`; acid scarcity discipline holds.

## Recommended Actions (priority order)
1. **[P1] `/impeccable adapt`** (#21) — while lowering the receipt breakpoint + adding the mobile progress affordance, fix the dormant line-item contrast (alpha → ~0.6 or `--paper-dim`).
2. **[P2] `/impeccable polish`** (#18) — add brand `:focus-visible` rings, darken the `×` close, add the skip link, promote receipt grays to tokens.
3. **[P3] `/impeccable clarify`** — trim the 2–3 genuinely AI-cadence em-dash sentences (most of the 10 detector hits are valid Czech pomlčka).
4. **[P3] `/impeccable optimize`** — optional Czech-subset font payload.
5. **[P2] `/impeccable polish`** — final pre-ship pass; re-run `/impeccable audit` after to watch 16/20 climb.
