# Audit — src/pages/index.astro (re-run)

Date: 2026-07-01 · Branch: impeccable · Target: `src/pages/index.astro` (+ `src/styles/global.css`)
Standard: WCAG 2.2 AA (per PRODUCT.md)
Prior: [19/20, 2026-06-30T21-50-30Z](./2026-06-30T21-50-30Z__src-pages-index-astro.md) — re-run after the #19 P3 clean-ups (shadow tokens, `scaleX` tape fill, weight-only font axis) and #22 (`clarify`: hero grounding standfirst + em-dash re-point).

## Audit Health Score

| # | Dimension | Score | Δ | Key Finding |
|---|-----------|-------|---|-------------|
| 1 | Accessibility | 4/4 | — | WCAG 2.2 AA met & browser-verified; new standfirst is full-paper on ink (~17:1) |
| 2 | Performance | 4/4 | — | Tape fill now compositor-only (`scaleX`); font subset to weight axis; IO, lazy images |
| 3 | Responsive Design | 4/4 | — | Standfirst clamps & wraps; verified no overflow 390/1280; wayfinding all viewports |
| 4 | Theming | 4/4 | — | Two named shadows now tokenized; all color tokenized; two deliberate alpha one-offs |
| 5 | Anti-Patterns | 4/4 | +1 | AI em-dash cadence re-pointed; only the documented `fact-block` border-left remains |
| **Total** | | **20/20** | **+1** | **Excellent (ship-ready)** |

## Anti-Patterns Verdict — PASS

Not AI-generated, and now with no residual soft-tell. A committed two-color editorial system: no gradient hero/text, no glassmorphism, no hero-metric block, no identical card grid, no per-section tracked eyebrow, no generic fonts. The `:focus-visible` ring uses acid as a position/state marker (Price-Tag Rule), not decoration. The hero standfirst's three `… zdarma` beats are deliberate anaphora (brand voice), not template repetition.

The single remaining detector flag is the **side-stripe border** — `.currency-fact { border-left: 2px solid var(--acid) }`, a literal match for the absolute ban. It is canonized in DESIGN.md as the `fact-block` component (the acid-ruled verifiable fact), paired with the acid color and used for exactly one semantic role. A detector flags it; a human reads it as designed. This is a documented brand decision, not slop — so it no longer holds the dimension below 4. The previous half-point dock was the **em-dash cadence**, now resolved (see below).

## Executive Summary
- Health Score: **20/20 (Excellent)** — up from 19/20.
- Issues: P0 ×0 · P1 ×0 · P2 ×0 · P3 ×1
- **Everything flagged in the prior audit is resolved and verified:**
  1. ✅ **[was P3]** `width` tape-fill animation → `transform: scaleX()` (compositor-only), reduced-motion `transition: none` retained.
  2. ✅ **[was P3]** Em-dash cadence → two AI-rhythm dashes re-pointed (bar-origin → colon, loss-leader → sentence split); the one rhetorical pivot dash (`promyšlený tah — ne podvod, ale investice`) intentionally kept; the rest are valid Czech *pomlčka*.
  3. ✅ **[was P3]** Named shadows → `--shadow-pasted-print` / `--shadow-paper-lift` tokens.
  4. ✅ **[was P3]** Czech font payload → weight-only variable axis (`wght.css`), `unicode-range` ships only latin + latin-ext (no width axis, no vietnamese).
- **New this pass (#22):** a hero grounding standfirst — "Appka zdarma. Doprava zdarma. Účet zdarma. Penězi za ně neplatíš. Platíš jinak." — teaches the metaphor with concrete modern examples *before* the historical origin story, fixing a real-world misread (a viewer thought the site was about literal free lunches). Tokenized, clamp-responsive, verified above the fold at 390px and 1280px with no overflow. It does not degrade any dimension.
- What remains is one ship-optional P3 (two alpha one-offs).

## Detailed Findings by Severity

### [P3] Two alpha color one-offs not tokenized
- **Location**: `.oc-card` border `rgba(244, 241, 234, 0.16)`; `.tape-leader` `rgba(11, 11, 12, 0.4)`
- **Category**: Theming
- **Impact**: Negligible. All *recurring* color flows through tokens (`--ink`, `--paper`, `--acid`, `--line`, the `--paper-*` ramp); these two are single-use edge tints on a paper object and a tape leader. Promoting them buys little — each is used exactly once — so this is deliberate, not drift. Listed only so the residue is on record; it does not dock the dimension from 4 (the dimension's prior docking reason, the receipt grays, was fully resolved).
- **Recommendation**: Optionally introduce `--paper-edge` / `--paper-leader`, or leave as documented one-offs.
- **Suggested command**: `/impeccable polish` (if ever)

## Patterns & Systemic Issues
None. The token system is complete and consistently applied; the earlier "receipt bypasses tokens" systemic note stays resolved. No recurring hard-coded-color or layout-animation pattern remains.

## Positive Findings (keep these)
- **Accessibility fully meets WCAG 2.2 AA, browser-verified**: dormant receipt items 5.01:1, `×` 5.50:1, focus ring ~17.5:1 on both surfaces (acid on ink, ink on paper), new standfirst full-paper on ink (~17:1). Skip link, clean heading outline (h1→h2→h3), `<main>`/`<nav aria-label>`/`<figure>`/`<ol>` landmarks, `lang="cs"`, descriptive alt text, decorative SVG `aria-hidden`, no-flash receipt-state restore, `prefers-reduced-motion` alternatives throughout.
- **Performance**: zero framework, no scroll listener (IntersectionObserver center-band), `transform: scaleX` tape fill (compositor-only), Astro `<Image>` responsive + lazy, static SVG/mask filters, locally-bundled weight-axis-subset fonts (4 woff2, latin + latin-ext only — on-brand "no hidden costs").
- **Responsive**: fluid throughout; wayfinding reaches every viewport (register tape <1400px, corner slip ≥1400px); hero + standfirst fit above the fold 390–1280px with no overflow.
- **Theming**: complete two-color token system incl. the `--paper-*` ramp and `--shadow-*` tokens; acid scarcity discipline holds.
- **Comprehension**: the thesis is now legible above the fold — the metaphor is grounded in modern "free" examples before the origin story, and `Platíš jinak` threads into the "Čím platíš?" section.
- **Readable without JS**; receipt + tape + active-state are pure enhancement.

## Recommended Actions (priority order)
No required actions — the page is ship-ready at 20/20.
1. **[P3] `/impeccable polish`** — *optional*: tokenize the two alpha one-offs, if you want zero literals on principle.

Out of audit scope but worth noting (tracked separately as task #23): the `<head>` declares `twitter:card = summary_large_image` but defines no `og:image` / `twitter:image`, and omits `og:locale` (cs_CZ) and `og:site_name`. This is social-share metadata, not one of the five audited dimensions — it does not affect the score.

> You can ask me to run these one at a time, all at once, or in any order you prefer.
>
> Re-run `/impeccable audit` after fixes to see your score change.
