---
target: src/pages/index.astro
total_score: 33
p0_count: 0
p1_count: 1
timestamp: 2026-07-01T11-57-15Z
slug: src-pages-index-astro
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Receipt rail + bottom tape are strong scroll feedback, but the receipt only appears ≥1400px; narrower viewports get the tape's section name but no structural map. |
| 2 | Match System / Real World | 4 | The receipt-that-rings-up-costs metaphor is load-bearing; "Celkem ∞" and the twist's "zisk" column land exactly. |
| 3 | User Control and Freedom | 3 | Native scroll (no hijack), receipt dismiss/reopen persisted. No back-to-top on a ~10,000px page; below 1400px no jump affordance at all. |
| 4 | Consistency and Standards | 3 | Every currency block follows one h3/claim/fact/examples pattern. But the "Čím platíš?" h2 has no id/data-rail, so a key pivot is invisible to the receipt's own logic. |
| 5 | Error Prevention | 4 | Static read-only page; no input to guard. Correct design response — n/a rated 4. |
| 6 | Recognition Rather Than Recall | 3 | Acid emphasis system is consistent. The "komu vzít?" acid pill reuses the "suspect-term" cue (`.mark`, used for "zdarma") on a framing the page then refutes. |
| 7 | Flexibility and Efficiency | 2 | Receipt anchors let experts jump ≥1400px; below that, tape labels aren't links. No accelerators on a very long page. (Tempered: the product is a linear read, so this hurts less than the raw score implies.) |
| 8 | Aesthetic and Minimalist Design | 4 | The page's high point. Two colors + one weaponized acid, hard edges, every element does persuasive work. Nothing decorative survives. |
| 9 | Error Recovery | 4 | No error surface; n/a rated 4. |
| 10 | Help and Documentation | 3 | Sources list doubles as "show your work." Collage captions (Friedman/Heinlein) are the only ID layer and are ~10.5px on mobile. |
| **Total** | | **33/40** | **Good (upper edge) — strong foundation; the reach items are legibility of the twist and wayfinding below 1400px.** |

## Anti-Patterns Verdict

**Does this look AI-generated? No** — passes both first- and second-order category-reflex tests.

**LLM assessment:** The visual register (ink/paper duotone, acid receipt prop with torn-edge mask, hard zero-blur collage shadows, Archivo Black at clamp extremes, zero border-radius) is deliberate and uncommon — the opposite of a template. First-order: the obvious AI reflex for "persuasion landing" (gradient hero + feature-card grid) is absent. Second-order: it also dodges the cream/editorial-magazine trap. One honest caveat: the three-column `.mechanisms` component is reused verbatim in both Economics and the Twist, and the Twist's three beats are conceptually heterogeneous (a sensory anecdote, an abstract theory, an economy-wide implication) where Economics' three are parallel examples — the identical scaffold papers over that difference. Reuse-as-shortcut, not slop, but worth naming.

**Deterministic scan:** `detect.mjs` returned one rule — `em-dash-overuse` (24 counted). **Largely a false positive.** Of the em-dashes: ~21 are in code/CSS/HTML comments (invisible to readers) or in conventional `Autor — Název` bibliographic separators in the sources list. The ~9 in body prose are all standard Czech pomlčka clause-breaks, not the AI parenthetical-filler tell. Zero genuinely suspicious. The only nuance: the twist/#smena section clusters several clause-break em-dashes close together (guard paragraph + beats), which reads as rhythmic density rather than a defect.

**Browser-measured evidence:** No horizontal overflow at 1440/1280/768/390 (0px everywhere). All contrast pairs pass WCAG AA — paper-on-ink 17.44:1, muted-on-ink 5.85:1 (the twist pull-quote's dim setup line clears AA normal-text), dormant receipt 5.01:1, receipt × 5.50:1. Zero console errors/warnings. Page fully readable with the receipt hidden on mobile. **Tap targets:** the measured sub-44px "failures" are against WCAG 2.5.5 (Enhanced, AAA) — against the page's stated 2.2 **AA** target (2.5.8, 24×24 + the inline-citation exception), the inline `[1]`–`[7]` refs are exempt and the source/footer links (27–39px) pass. The one genuine AA-adjacent case is the desktop receipt × close button at 19×19px, but the receipt is desktop/mouse-only, blunting the touch concern.

## Overall Impression

A confident, genuinely well-built argument page with a real idea (the bill) executed with discipline — and it has *not* regressed under the twist rewrites; it nudged up (32 → 33). What's left is mostly reach, and it clusters in two places: (1) the twist section is now 76% longer than the section it rebuts and its middle beat ("Proč to funguje") is the most abstract writing on the page, sitting unmoored from the concrete chocolate/apple example — the exact moment a non-economist Czech reader slips; (2) wayfinding below 1400px is scroll-only. The single biggest opportunity is **legibility of the twist's theory beat**, because that's where the payoff is won or lost for the actual audience.

## What's Working

1. **The receipt is architecturally load-bearing, not decoration.** The page argues about the real price of "free," and the wayfinding is literally a receipt ringing up those prices — torn-paper mask, barcode, dotted leaders, acid highlighter sweep, "Celkem ∞." Concept and form are the same object.
2. **Weaponized typography.** The uppercase-display / mixed-case-conclusion / 300-weight-evidence split does real structural work; the hierarchy is legible in a screenshot with color removed. Rare and hard.
3. **The duotone collage.** Archival photos mapped to ink/acid via SVG `feColorMatrix` (not just B&W) makes them belong to the brand's color world; hard offset shadows give the origin beat editorial weight.

## Priority Issues

- **[P1] The twist's theory beat ("02 Proč to funguje") is where a non-economist loses the thread.** 67 words of subjective value + diminishing marginal utility, in the middle column of a 3-up grid, with no visual signal it's denser than its neighbors — and, unlike "Pocit," it abandons the concrete chocolate/apple anchor for abstractions ("potřeba se nasytí", "hranice se u každého liší"). The whole twist is also ~76% taller than the Economics section it refutes, which slightly oversells the positive case.
  - *Why it matters:* The audience is explicitly Czech general readers, not economists; this is the moment the argument is most likely to slip, right before the payoff.
  - *Fix:* Tighten "Proč to funguje" toward its essential claim and keep it tethered to the chocolate/apple example; consider trimming the 60-word guard paragraph (it partly restates the twist-final) and adding a beat of visual breath between guard → blockquote. (Copy call — the user just reworked these beats, so this is theirs to accept.)
  - *Suggested command:* `/impeccable clarify` (then `/impeccable polish`)

- **[P2] Wayfinding is scroll-only below 1400px.** The bottom tape shows the current section name but its labels aren't links; the receipt rail (the jump affordance) only renders ≥1400px. On mobile — much of the real audience — there's no way to revisit sources or the twist except scrolling a ~10,000px page.
  - *Why it matters:* Efficiency gap on a long page. **But** possibly intentional: the product principle is "the reading experience is the product; native scroll only," and a linear argument may *want* to be read start-to-finish, not skimmed. Flagging for a decision rather than assuming it's a defect.
  - *Fix (if wanted):* Make the tape labels tappable anchors, or a compact tap-to-expand section list in the tape's mono/paper register. No scroll-hijack.
  - *Suggested command:* `/impeccable adapt`

- **[P2] "Čím platíš?" — the page's key argumentative pivot — is invisible to the receipt.** The rail jumps Úvod → Soukromí with no line for the thesis heading; the `.currencies` wrapper has no id/data-rail.
  - *Why it matters:* A reader scanning the receipt to answer "what is this page about?" gets no help at exactly the pivot that answers it. It's a gap in the system's own logic.
  - *Fix:* Give `.currencies` an id and add a no-cost `railMeta` line (e.g. "Platíš?") between Úvod and Soukromí, same note style as Úvod/Ekonomie.
  - *Suggested command:* `/impeccable polish`

- **[P2] The "komu vzít?" acid pill cross-contaminates the "suspect-term" cue.** `.mark` (acid pill) brands "zdarma" as the thing-under-suspicion throughout; applying the identical pill to "komu vzít?" in the twist lead — a framing the page endorses-then-transcends — risks reading as just "another important yellow thing," or as endorsing the zero-sum premise.
  - *Why it matters:* Muddies a carefully rationed visual language at the hinge of the twist.
  - *Fix:* Use `.acid` (yellow text, no pill) for "komu vzít?", reserving the pill for "zdarma"; or mark it visually as the *rejected* premise.
  - *Suggested command:* `/impeccable polish`

- **[P2] Mobile hero has ~100–170px of dead black above the kicker.** At 390px with `88svh` + `align-items: center`, content floats mid-viewport and the page reads as "not started yet" on load; the bottom tape further eats visible height.
  - *Why it matters:* Weak first-frame on the smallest, highest-traffic viewport.
  - *Fix:* At `<640px`, anchor content nearer the top (`align-items: flex-start` + `padding-top: clamp(3rem, 12svh, 6rem)`), preserving the peek-below cue.
  - *Suggested command:* `/impeccable adapt`

- **[P3] Tap-target comfort (not an AA failure).** Inline `[1]`–`[7]` source refs are 12×12px and the desktop receipt × is 19×19px. Against WCAG 2.2 **AA** (2.5.8, 24px + inline exception) these are exempt/desktop-only, but bumping the inline refs' tappable padding and the × hit area is a cheap comfort win toward AAA / mobile.
  - *Suggested command:* `/impeccable polish`

## Persona Red Flags

**Jordan (Czech first-timer who might take "free" literally):** The hero disambiguation ("Appka zdarma. Doprava zdarma. Účet zdarma.") is working at the fold — good, given the logged real-viewer misread. Residual risk is the collage: three archival B&W photos (Friedman, Heinlein, a 1900s saloon) whose only ID layer is a ~10.5px caption on mobile. A reader who doesn't recognize the faces and can't comfortably read the caption sees unmoored old photographs.

**Casey (mobile):** Main failures are the scroll-only wayfinding (P2) and the twist's density (P1). The bottom tape permanently costs ~38px of viewport and isn't tappable. Collage and currency stacks render cleanly otherwise.

**Czech general reader (non-economist) [project persona]:** "02 Proč to funguje" is the slip point — the jump from "bored of chocolate, want apples" (relatable) to "hodnota se nepřesune. Vznikne." (abstract) is large and not re-grounded in the anecdote. The guard paragraph's stacked em-dash clauses ("cena ti není na očích, je ti vnucená, nebo ji za tebe zaplatí někdo jiný") are semantically right but syntactically dense for a quick mobile read.

## Minor Observations

- ~112px void between the sources list and the footer reads as the page running out of steam before it officially ends.
- Receipt `r-item--note` (Úvod, Ekonomie = no-cost sections) uses the same muted color as *dormant/unreached* items — a first-timer can't tell "chapter heading" from "section I haven't reached."
- `scroll-behavior: smooth` correctly resets to `auto` under `prefers-reduced-motion`; tape-fill transition also disabled. Good.
- The twist pull-quote's dim setup (muted, ~41.6px desktop) is doing the right setup→payoff work and clears AA (5.85:1) — no issue, confirmed.
- The `twist-final` ending on acid "dobrovolné výměny." is the strongest single end-state on the page. Earned.

## Questions to Consider

1. **Does the page earn the right to flip "zdarma" to positive at the very end** ("Oběd zdarma tedy nakonec existuje")? A skeptical reader might read it as undercutting the four-currency argument. Does the twist-final need one more bridge distinguishing the two senses of "zdarma"?
2. **The Economics section frames loss-leader/freemium as "ne podvod, ale investice"** — sympathetic to the seller right after four sections indicting hidden costs. Intentional rehabilitation, or should it read as further indictment? Currently ambiguous.
3. **Comparative advantage as the closing proof is contestable** (factor mobility, institutions, distribution). Is the "dobrovolná a víš, do čeho jdeš" guardrail doing enough, or should the caveat be tighter — without softening the argument?
4. **Is the identical `.mechanisms` scaffold for Economics and the Twist the right call**, given the twist's beats are heterogeneous? Would a distinct form for the positive-sum rebuttal argue the difference instead of hiding it?
