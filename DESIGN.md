---
name: Oběd zdarma
description: There's no such thing as a free lunch — a single long-scroll argument about the four currencies you really pay with.
colors:
  ink: "#0b0b0c"
  paper: "#f4f1ea"
  acid: "#e8ff2a"
  muted: "#8f8c83"
  line: "#26262a"
typography:
  display:
    fontFamily: "Archivo Black, system-ui, sans-serif"
    fontSize: "clamp(3rem, 12vw, 8rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Archivo Black, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 5.5vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Archivo Black, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 2.8vw, 2.1rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)"
    fontWeight: 300
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.66rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.04em"
rounded:
  none: "0"
spacing:
  pad: "clamp(1.5rem, 6vw, 5rem)"
  maxw: "1100px"
  section: "clamp(4.5rem, 13vw, 9rem)"
components:
  mark:
    backgroundColor: "{colors.acid}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 0.12em"
  src-ref:
    textColor: "{colors.acid}"
    typography: "{typography.label}"
  receipt-item:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  receipt-item-active:
    backgroundColor: "{colors.acid}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  closer-panel:
    backgroundColor: "{colors.acid}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(7rem, 20vw, 15rem) 0"
---

# Design System: Oběd zdarma

## 1. Overview

**Creative North Star: "The Itemized Bill"**

The page is a receipt. It rings up the hidden costs of "free" the way a till rings up groceries — one line item at a time, each currency (privacy, efficiency, environment, inflation) a charge on the bill, the total an acid-yellow `∞`. Everything in the system serves that single conceit: the fixed wayfinding slip is a literal torn-edge paper receipt; the accent color is the highlighter that swipes the current line; the closer flips the whole surface to that same acid so the reader leaves having "paid." The aesthetic is near-black ink on warm paper, oversized Archivo Black display type, and one violently bright accent used as a price tag — confident, provocative, and sourced, never decorative.

This is an argument rendered as a layout, not a brochure. It explicitly rejects the **generic SaaS landing** (no gradient hero, no feature-card grid, no rounded icons above headings, no tracked-uppercase eyebrow on every section). It rejects the **cream / editorial-magazine** lane — "editorial" is the *voice* here, never a warm-paper-and-drop-caps visual treatment; the paper tone is a receipt's stock, not a magazine's. It rejects **corporate neutrality** (the design commits to a position) and it rejects **conspiracy / clickbait** (every loud claim is anchored to a numbered, real source). Provocation has to earn its keep with credibility.

The reading experience is the product. Native scroll only — the receipt reflects scroll position but never drives it. The static page is the canonical artifact: fully readable with no JavaScript, the motion and the live receipt are enhancements layered on top.

**Key Characteristics:**
- Two-color foundation (ink + paper) with a single weaponized accent (acid yellow).
- Hard edges everywhere — zero border-radius is a deliberate rule, not an omission.
- Oversized fluid display type carries the persuasion; body copy stays quiet and narrow.
- Numbered sources are part of the visual system, not a footnote afterthought.
- One signature object: the torn-paper wayfinding receipt.

## 2. Colors

A two-color world — near-black ink on warm off-white paper — with one aggressive accent that does all the shouting.

### Primary
- **Acid Price-Tag Yellow** (`#e8ff2a`): The single loud color and the system's whole personality. It is the highlighter swiped across the active receipt line, the "price tag" on key words (`.mark`, `.acid`), the superscript source references, the currency numbers, and the entire surface of the closing panel. It is never a background for body text and never used "to decorate" — it marks cost, emphasis, or the current position. Its rarity at the section level is what gives it force.

### Neutral
- **Ink** (`#0b0b0c`): The page background and the printed-text color when the surface flips to acid (closer, active receipt line, `.mark`). Near-black, not pure black.
- **Paper** (`#f4f1ea`): Primary body text on the ink ground; warm off-white, the color of receipt stock rather than magazine paper.
- **Muted** (`#8f8c83`): Secondary text — example notes, source list, kicker, footer, dormant receipt lines. Used only where the 4.5:1 floor allows for its size.
- **Hairline** (`#26262a`): Section dividers and example separators only — 1px rules that segment the page without boxing anything.

### Named Rules
**The Price-Tag Rule.** Acid yellow marks cost, emphasis, or current position — nothing else. If it is being used to make a section "pop" rather than to mark a charge, remove it. Its scarcity is the point.

## 3. Typography

**Display Font:** Archivo Black (with system-ui, sans-serif fallback)
**Body Font:** Archivo Variable (with system-ui, sans-serif fallback)
**Label/Mono Font:** ui-monospace stack (SFMono-Regular, Menlo, Consolas)

**Character:** One family across two extreme weights plus a monospace for "machine print." Archivo Black is the loud, condensed-feeling shout; Archivo at weight 300 is the calm, almost fragile counter-voice. The contrast axis is weight, not family — the display and body are siblings, which keeps the page coherent while the size jump does the drama. The monospace is reserved for things that should read as printed-by-a-machine: the receipt and the photo captions.

### Hierarchy
- **Display** (400 / `clamp(3rem, 12vw, 8rem)` / 1.02, uppercase, -0.015em): The hero only — "Všechno má svou cenu." The one true shout.
- **Headline** (400 / `clamp(1.75rem, 5.5vw, 3.75rem)` / 1.02, uppercase): Section heads and currency titles.
- **Title** (400 / `clamp(1.3rem, 2.8vw, 2.1rem)` / 1.15, mixed-case): The currency claim and mechanism titles — display font but un-capsed so it reads as a stated proposition, not a banner.
- **Body** (300 / `clamp(1.05rem, 1.4vw, 1.2rem)` / 1.75): Lead and prose. Held to ~20–28ch on leads and ≤48ch on facts — deliberately narrow columns so the argument reads as confident, declarative lines, not paragraphs.
- **Label** (400 / `0.66rem` / 0.04em, uppercase, mono): Receipt line items, photo captions, "∗ účtenka ∗" — the machine-print voice.

### Named Rules
**The Two-Weight Rule.** Display weight (Archivo Black) and body weight (300) only — never reach for intermediate weights to create hierarchy. Size and the black/light contrast carry it. Display letter-spacing never goes below -0.015em.

## 4. Elevation

The system is flat by doctrine: no soft ambient shadows, no glass, no lift on the content surfaces. Depth comes from two non-standard moves instead. First, **hard offset shadows** on the origin-collage cards (`0.7rem 0.7rem 0 rgba(0,0,0,0.6)`) — a sharp, un-blurred drop that reads as physically pasted archival prints, not as Material elevation. Second, **drop-shadow on the paper objects** (`drop-shadow(0 10px 22px rgba(0,0,0,0.5))` on the receipt and reopen button) — these are the only blurred shadows, and they exist to lift the literal pieces of paper off the dark page so they read as objects resting on top of the document.

### Shadow Vocabulary
- **Pasted-print offset** (`box-shadow: 0.7rem 0.7rem 0 rgba(0,0,0,0.6)`): The collage cards only. Hard, zero-blur, single direction. The look is glue-stick, not UI.
- **Paper lift** (`filter: drop-shadow(0 10px 22px rgba(0,0,0,0.5))`): The receipt slip and reopen button only. The one place blur is allowed, because it sells "real paper on a desk."

### Named Rules
**The No-Blur-On-UI Rule.** Content surfaces are flat. Blur appears only on the literal paper objects (receipt, reopen button). If a shadow is soft and it's not a piece of paper, it's wrong.

## 5. Components

### Marks & Source References
- **`.mark` (highlighted phrase):** Acid background, ink text, hard edges (zero radius), `0 0.12em` padding, `box-decoration-break: clone` so multi-line highlights stay clean. The price-tag applied to a word.
- **`.acid` (emphasis word):** Acid text color, no background. The lighter-weight emphasis.
- **`.src-ref` (source reference):** Acid, superscript, `0.75em`, no underline at rest → underline on hover. A real citation rendered as part of the prose, jumping to the numbered source list.

### Wayfinding Receipt (signature component)
- **Form:** A fixed torn-paper slip, bottom-right, built entirely in CSS — `conic-gradient` masks create the zigzag torn top and bottom edges; a `repeating-linear-gradient` draws a barcode; a dashed 1px divider separates header, line items, and total.
- **Behavior:** Read-only scroll reflection via `IntersectionObserver` with a `-50% 0px -50% 0px` root margin (a 1px band at viewport center). The crossed section is `is-active` (acid highlighter swipe), everything above it is `is-past` (inked-in = paid), upcoming lines stay muted. It **never** alters scroll position. Clicking a line is a native anchor jump.
- **Visibility:** Shown only ≥1536px where the side gutter clears the centered text column. Dismissible (× → compact "Účtenka" reopen button), choice persisted in `localStorage` and restored pre-paint to avoid a flash.
- **States:** dormant (`muted`), hover (ink), active (acid bg + ink + bold), past (ink). Line items use the mono Label type with a dotted leader between name and cost.

### Currency Block
- **Head:** A baseline-aligned row of the acid section number (`01`), the emoji icon, and the uppercase headline title, separated from the next block by a 1px hairline top border and generous fluid `padding-block`.
- **Claim:** Title-tier display type, mixed-case, ≤20ch — the provocative proposition.
- **Fact:** Quiet body type, ≤48ch, paper-colored, set off by a 2px acid left rule — the verifiable anchor the claim rests on, carrying its `[n]` source reference.
- **Examples:** A borderless 2-column grid (1-col on mobile) of name + muted note, each separated by a 1px hairline top border. Not cards.

### Closer Panel
- **Form:** Full-bleed surface flip — acid background, ink text. The one moment the accent becomes the ground. Inverts `.mark` (ink bg / acid text) and `.acid` (ink + underline) so emphasis still reads against the flipped surface.
- **Role:** The "you've paid" beat. Used exactly once, at the end.

### Origin Collage
- A 3-card overlapping cascade (saloon large at the bottom, Friedman + Heinlein layered above) with `position: absolute` placement inside a `4/5` figure. Images run through an **ink→acid SVG duotone filter** (`feColorMatrix` luminance + `feComponentTransfer`) so archival photos read in the brand's two colors. Hard edges, hard offset shadows, mono captions. On hover (motion allowed only) the stack nudges `translate(-0.15rem, -0.15rem)`.

## 6. Do's and Don'ts

### Do:
- **Do** keep acid yellow (`#e8ff2a`) scarce — marks for cost, emphasis, or current position only. The Price-Tag Rule.
- **Do** keep every surface hard-edged: `border-radius: 0` is the system. Rounded corners are off-brand.
- **Do** carry hierarchy with size and the Archivo-Black-vs-300 weight jump, never intermediate weights.
- **Do** keep body columns narrow (leads ~20–28ch, facts ≤48ch) so the argument reads as declarative lines.
- **Do** anchor every strong claim to a real numbered source rendered in the prose via `.src-ref`. Numbered sources are part of the design.
- **Do** keep all motion native-scroll-safe and reversible under `prefers-reduced-motion: reduce`. The receipt observes scroll; it never hijacks it.

### Don't:
- **Don't** build the **generic SaaS landing** — no gradient hero, no identical feature-card grid, no rounded icons above headings, and no tracked-uppercase eyebrow above every section (the kicker appears once, in the hero, by design).
- **Don't** drift into the **cream / editorial-magazine** lane — no display-serif italics, no drop caps, no broadsheet grid. The paper tone is receipt stock; "editorial" is the voice, never a warm-magazine visual treatment.
- **Don't** go **corporate / neutral** — no muted slate-and-beige hedging. The page commits to its position.
- **Don't** let it read as **conspiracy / clickbait** — every provocative claim stays sourced and credible. Persuasive simplification is fine; misleading omission is not.
- **Don't** use acid as a background for body text, or as decoration to make a section "pop."
- **Don't** add soft/ambient shadows or glassmorphism to content surfaces. Blur is reserved for the literal paper objects only.
- **Don't** introduce `border-radius`, gradient text, or color the page with anything beyond ink / paper / acid / muted / hairline.
