---
target: index.astro
total_score: 32
p0_count: 0
p1_count: 0
timestamp: 2026-06-30T20-56-17Z
slug: src-pages-index-astro
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Signature "receipt" progress indicator only renders ≥1536px; most laptops (1280/1440) get no wayfinding or scroll progress at all. |
| 2 | Match System / Real World | 4 | Receipt/bill metaphor maps perfectly to "what do you pay"; plain informal Czech; instrumental titles softened to nominative in the rail. |
| 3 | User Control and Freedom | 4 | Native scroll, no hijack; receipt dismissible with persisted choice; anchor jumps; external source links. |
| 4 | Consistency and Standards | 4 | Highly cohesive system: acid rules, hairlines, two-weight type, hard edges throughout. |
| 5 | Error Prevention | 3 | Minimal error surface (read-only page); external links carry rel=noopener; localStorage wrapped in try/catch. n/a-leaning. |
| 6 | Recognition Rather Than Recall | 3 | Source refs jump to numbered list; emoji + text labels. But receipt map is desktop-only and there's no easy return from a source back to the citing line (relies on browser back). |
| 7 | Flexibility and Efficiency | 2 | No skip-to-content link, no keyboard accelerators; the only nav (receipt anchors) is desktop-only. |
| 8 | Aesthetic and Minimalist Design | 4 | Disciplined two-color + acid, generous air, every element earns its place. A genuine high point. |
| 9 | Error Recovery | 3 | No error surface to recover from; nothing broken, nothing demonstrated. n/a-leaning. |
| 10 | Help and Documentation | 3 | The sources section doubles as credibility/documentation; no other guidance needed for a read. |
| **Total** | | **32/40** | **Good (upper edge) — strong foundation, a few targeted fixes from Excellent.** |

## Anti-Patterns Verdict

**Does this look AI-generated? No.**

**LLM assessment:** This passes both the first- and second-order category-reflex tests. The category is "persuasion landing page," and the obvious AI reflex would be a gradient hero + feature-card grid, or (one tier deeper) the cream editorial-magazine lane. This is neither: near-black ink, a single violent acid-yellow accent used as a literal price tag, oversized Archivo Black, ink→acid duotone archival photography, and a signature torn-paper receipt that unifies the whole argument. The concept is committed and idiosyncratic — the opposite of slop. No identical card grids, no eyebrow-on-every-section, no glassmorphism, no gradient text.

**Deterministic scan:** `detect.mjs` returned exactly one finding — `em-dash-overuse` (10 em-dashes in body copy, flagged as an AI cadence tell). This is **largely a false positive**: in Czech the pomlčka (—) is standard punctuation, and most instances are legitimate. But two or three are the AI-cadence construction ("Ani jeden ji ale nevymyslel — pochází z amerických barů…") where a comma or period would read more naturally. Worth a light copy pass, not a rewrite.

**Visual overlays:** No detector overlay was injected in-browser (the deterministic scan ran via CLI instead). Visual inspection was done directly via screenshots at 1600px, the ≥1536px receipt view, and 390px mobile.

## Overall Impression

This is a confident, well-built page that already does the hard thing — it has a real idea (the bill) and executes it with discipline. What works is unusually strong; what's left is mostly reach: the signature wayfinding device is gated behind a breakpoint so high that almost no one sees it, and the page has no keyboard/skip affordances. The single biggest opportunity: **make the receipt (or a lighter progress affordance) visible below 1536px** so the page's best idea actually reaches its readers.

## What's Working

1. **The receipt is a real concept, not decoration.** It rings up sections as line items, lights the current one with an acid highlighter, and inks in the "paid" ones — a wayfinding device that *is* the thesis. Read-only, native-scroll-safe, dismissible-and-remembered. This is the page's signature and it's genuinely good.
2. **Ruthless palette discipline.** Two colors plus one weaponized accent, hard edges everywhere, oversized display type against deep air. The acid yellow stays scarce enough to keep its force (the closer's full-surface flip lands because acid was rationed up to that point).
3. **The duotone origin collage.** Friedman / Heinlein / saloon as pasted archival prints in the brand's two colors, hard offset shadows — memorable, on-brand, and it earns the "where this idea came from" beat.

## Priority Issues

- **[P2] The signature receipt is invisible to most users.** It only renders at `min-width: 1536px`. Common laptops (1280, 1366, 1440) and all tablets/phones never see it — so the page's best device, and its only scroll-progress/wayfinding, is absent for the majority.
  - *Why it matters:* On a long single-scroll argument, readers lose their sense of "how much is left" and the four-currency structure isn't reinforced. The concept that most distinguishes the page is dark for ~most of its audience.
  - *Fix:* Lower the breakpoint (e.g. ≥1200px) where the gutter still clears the 1100px text column, and/or add a slim progress affordance (a thin paid/total bar, or a compact bottom strip) for narrower screens.
  - *Suggested command:* `/impeccable adapt`

- **[P2] Dormant receipt line items fail contrast.** `color: rgba(11,11,12,0.45)` on `--paper` is roughly 2:1 — below the 4.5:1 AA floor for the small mono label text.
  - *Why it matters:* Upcoming line items are hard to read; fails WCAG 2.2 AA, which PRODUCT.md targets.
  - *Fix:* Use a solid darker muted (e.g. the receipt's own `#6b685f` or darker) at full opacity for dormant items.
  - *Suggested command:* `/impeccable audit` (then `/impeccable polish`)

- **[P2] No keyboard skip-link or verified focus states.** There's no skip-to-content, and focus-visible styling for the receipt anchors / source links isn't established. Keyboard-only and screen-reader users (persona Sam) have no accelerated path and possibly no visible focus ring.
  - *Why it matters:* Accessibility and the WCAG AA target; keyboard nav of a long page is tedious without a skip mechanism.
  - *Fix:* Add a visually-hidden skip link to `#setup`/main, and explicit `:focus-visible` rings on all interactive elements.
  - *Suggested command:* `/impeccable audit`

- **[P3] Em-dash cadence in two or three sentences.** Mostly legitimate Czech punctuation, but a couple read as AI cadence. A light copy pass would tighten them.
  - *Suggested command:* `/impeccable clarify`

- **[P3] The currency-fact acid left-rule brushes the side-stripe ban.** `border-left: 2px solid var(--acid)` on the fact block is exactly the pattern impeccable bans as a card accent — but here it reads as a citation/quote rule on a single text block, not a card stripe. Likely fine; flagging it as a deliberate decision rather than an oversight.
  - *Suggested command:* leave as-is, or `/impeccable polish`

## Persona Red Flags

**Jordan (Confused First-Timer):** Lands on "VŠECHNO MÁ SVOU CENU." with no nav — but for a single-scroll argument that's correct; the first action (scroll) is obvious. The instrumental-case currency titles ("SOUKROMÍM") could momentarily read oddly out of context, but the claim line underneath resolves it immediately. No real red flag.

**Casey (Distracted Mobile User):** Reads fine one-handed, no horizontal overflow at 390px, copy columns are comfortable. **But** there's no progress indicator on mobile (receipt is desktop-only), so on a long scroll Casey can't gauge how far in they are or jump between currencies — exactly the "interrupted, returns later" failure mode. Source `[n]` tap targets are small superscripts (~minimum touch size).

**Riley (Stress Tester):** Page is robust — no JS dependency for content, localStorage wrapped in try/catch, no forms to break. Refresh preserves nothing stateful that matters. Source anchors resolve. The collage holds its overlap layout down to 390px. Few gaps to exploit, which is a credit.

## Minor Observations

- Between 1100px (text max-width) and 1536px (receipt breakpoint), the content is left-aligned with a large empty right gutter and no receipt to fill it — a brief stretch of visual imbalance.
- Jumping to a source via `[n]` has no built-in return to the citing sentence; users rely on browser back.
- The duotone reads more grayscale-ink than acid-tinted; the acid mapping is subtle. Intentional and fine, but the "ink→acid" effect is more ink than acid in practice.

## Questions to Consider

- What would it take to let *every* reader see the receipt — is 1536px protecting the layout, or just inherited caution?
- Does a long-scroll argument need a progress signal on mobile, where most readers actually are?
- The acid is rationed beautifully — is the duotone the one place it could earn a little more presence?
