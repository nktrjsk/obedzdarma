# Audit — src/pages/index.astro (re-run)

Date: 2026-06-30 · Branch: impeccable · Target: `src/pages/index.astro` (+ `src/styles/global.css`)
Standard: WCAG 2.2 AA (per PRODUCT.md)
Prior: [16/20, 2026-06-30T21-23-53Z](./2026-06-30T21-23-53Z__src-pages-index-astro.md) — re-run after `/impeccable adapt` (#21) and `/impeccable polish` (#18).

## Audit Health Score

| # | Dimension | Score | Δ | Key Finding |
|---|-----------|-------|---|-------------|
| 1 | Accessibility | 4/4 | +1 | All prior violations fixed & browser-verified — contrast, custom focus ring, skip link |
| 2 | Performance | 4/4 | — | Framework-free, IO not scroll, lazy images, local fonts; one trivial `width` anim |
| 3 | Responsive Design | 4/4 | +1 | Wayfinding now reaches every viewport (register tape <1400px, slip ≥1400px) |
| 4 | Theming | 4/4 | +1 | Receipt grays promoted to `--paper-*` tokens; only shadow literals remain |
| 5 | Anti-Patterns | 3/4 | — | One documented ban hit (acid `border-left`) + em-dash cadence — both intentional/minor |
| **Total** | | **19/20** | **+3** | **Excellent (minor polish)** |

## Anti-Patterns Verdict — PASS (one documented exception)

Still emphatically not AI-generated. A committed two-color editorial system: no gradient hero/text, no glassmorphism, no hero-metric block, no identical card grid, no per-section tracked eyebrow, no generic fonts. The new `:focus-visible` ring uses acid **as a position/state marker** — fully consistent with the Price-Tag Rule (acid marks cost, emphasis, or current position), not decoration.

Two flags, unchanged from the prior audit, both defensible:
- **Side-stripe border** — `.currency-fact { border-left: 2px solid var(--acid) }` literally matches the absolute-ban "colored border-left >1px as accent." BUT it is canonized in DESIGN.md as the `fact-block` component (the acid-ruled verifiable fact). A detector flags it; a human reads it as designed. Documented brand decision, not slop.
- **Em-dash cadence** — detector counts ~10 em-dashes in body copy. Most are valid Czech *pomlčka*; 2–3 sentences carry the AI em-dash rhythm and could be re-pointed. P3, route to `clarify`.

## Executive Summary
- Health Score: **19/20 (Excellent)** — up from 16/20.
- Issues: P0 ×0 · P1 ×0 · P2 ×0 · P3 ×4
- **Every P1/P2 from the prior audit is resolved and verified in-browser:**
  1. ✅ **[was P1]** Dormant receipt line items — `0.45 → 0.6` alpha (`--paper-dim`), now **5.01:1**.
  2. ✅ **[was P2]** No `:focus-visible` — added a brand ring (acid on ink **17.6:1**, ink on paper surfaces **17.4:1**).
  3. ✅ **[was P2]** Receipt `×` close glyph — `#b9b4a6 → --paper-meta (#646155)`, now **5.50:1**.
  4. ✅ **[was P3]** Skip-to-content link "Přeskočit na obsah" added (→ `<main id="obsah" tabindex="-1">`).
  5. ✅ **[was P3]** Off-token receipt grays promoted to `--paper-meta / -rule / -dim / -faint`.
- What remains is genuinely minor polish (see below). Recommended: `clarify` for em-dash cadence; optional `optimize` (font subset + `scaleX` fill).

## Detailed Findings by Severity

### [P3] `width` transition on the register-tape fill
- **Location**: `index.astro` `.tape-fill` (line ~952) — `transition: width 0.25s …`
- **Category**: Performance
- **Impact**: Animating `width` is a layout-property animation (detector flag). Cost here is negligible — it's a single 3px-tall bar with no children to reflow, repainting a hairline strip on each section-cross — so the dimension stays at 4/4. But the canonical premium form is `transform: scaleX()` with `transform-origin: left`, which animates on the compositor and avoids layout entirely.
- **Recommendation**: Swap to `transform: scaleX(var(--p))` + `transform-origin: left`, driving `--p` from JS (0–1) instead of `style.width`. Keep the reduced-motion `transition: none`.
- **Suggested command**: `/impeccable optimize` (or fold into `/impeccable polish`)

### [P3] Em-dash cadence in body copy
- **Location**: prose throughout (≈10 `—`)
- **Category**: Anti-Pattern (AI cadence)
- **Impact**: Most are legitimate Czech *pomlčka*; a few sentences lean on the em-dash in the AI rhythm. Reads slightly less like a human-edited opinion piece in those spots.
- **Recommendation**: Re-point the 2–3 genuine offenders to commas/colons/periods; leave the valid Czech usage.
- **Suggested command**: `/impeccable clarify`

### [P3] Shadow & one-off color literals not tokenized
- **Location**: collage `box-shadow 0.7rem 0.7rem 0 rgba(0,0,0,0.6)`, `drop-shadow(... rgba(0,0,0,0.5))`, tape `box-shadow … rgba(0,0,0,0.45)`, `.oc-card` border `rgba(244,241,234,0.16)`, `.tape-leader` `rgba(11,11,12,0.4)`
- **Category**: Theming
- **Impact**: All *color* is now tokenized; what remains are shadow definitions (documented conceptually in design.json as `pasted-print` / `paper-lift`) plus two alpha one-offs. Minor maintainability drift — the dimension's prior docking reason (receipt grays) is fully resolved, so this is the residual tail.
- **Recommendation**: Promote the two named shadows to `--shadow-pasted-print` / `--shadow-paper-lift`; consider `--paper-edge` / `--paper-leader` for the two remaining alphas.
- **Suggested command**: `/impeccable polish`

### [P3] Czech font payload not subset
- **Location**: `global.css` — `@fontsource-variable/archivo` + `@fontsource/archivo-black` (full Latin)
- **Category**: Performance
- **Impact**: Fonts are bundled (good — no third-party requests, on-brand "no hidden costs"), but ship the full Latin range rather than the Czech subset. Larger than needed; not a correctness issue.
- **Recommendation**: `unicode-range` subset to the Latin-Czech glyph set.
- **Suggested command**: `/impeccable optimize`

## Patterns & Systemic Issues
None. The earlier systemic note ("receipt bypasses the token system") is resolved — paper-surface text now flows through one ramp (`--paper-*`). No recurring hard-coded-color pattern remains; the residue is confined to shadow definitions.

## Positive Findings (keep these)
- **Accessibility now fully meets WCAG 2.2 AA** and verified in-browser: dormant items 5.01:1, `×` 5.50:1, focus ring ~17.5:1 on both surfaces, theme-aware (acid on ink, ink on paper). Skip link, clean heading outline (h1→h2→h3), `<main>`/`<nav aria-label>`/`<figure>`/`<ol>` landmarks, `lang="cs"`, descriptive alt text, decorative SVG `aria-hidden`, no-flash receipt-state restore, `prefers-reduced-motion` alternatives throughout. The `×` (19px) meets 2.5.8 via the spacing exception (isolated in the receipt corner).
- **Wayfinding reaches all viewports**: register tape <1400px (aria-hidden, native-scroll-safe reflection), corner slip ≥1400px, one shared dismiss state recoverable via the reopen button.
- **Performance**: zero framework, no scroll listener (IntersectionObserver center-band), Astro `<Image>` responsive + lazy, static SVG/mask filters, locally-bundled fonts.
- **Readable without JS**; receipt + tape + active-state are pure enhancement.
- **Token system** now complete and consistently applied; acid scarcity discipline holds.

## Recommended Actions (priority order)
All remaining work is P3 — ship-optional.
1. **[P3] `/impeccable clarify`** — re-point the 2–3 genuine em-dash sentences (leave valid Czech *pomlčka*).
2. **[P3] `/impeccable optimize`** — Czech `unicode-range` font subset + swap the tape fill `width` anim to `transform: scaleX`.
3. **[P3] `/impeccable polish`** — promote the two named shadows (and two alpha one-offs) to tokens.

> You can ask me to run these one at a time, all at once, or in any order you prefer.
>
> Re-run `/impeccable audit` after fixes to see your score improve.
