# obedzdarma.cz

**Oběd zdarma neexistuje** — a single long-scroll argument that nothing is truly free. When you don't pay with money, you pay another way: with **privacy**, **efficiency**, the **environment**, or **inflation**.

Static [Astro](https://astro.build) site, deployed on Netlify.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # build to dist/
```

## Agent-ready

This is an argument built on citable sources, so the site is deliberately open
to AI agents — we *want* them to read it, ground answers on it, and cite it
accurately. Fittingly for a site about knowing what you pay with, the terms are
stated in the open. What's in place:

- **`robots.txt`** — explicitly allows the named AI crawlers (GPTBot, ClaudeBot,
  PerplexityBot, CCBot, …) instead of leaning on the `*` wildcard, and carries a
  [Content Signals](https://contentsignals.org) line: `search=yes, ai-input=yes,
  ai-train=yes`. It also declares the `Sitemap:`.
- **`llms.txt`** — a curated reading map for LLMs: the thesis (and the explicit
  "not about food" clarification, the one thing a reader most often misreads),
  each of the four currencies linked to its anchor with a fact, the twist, and
  the source list.
- **`index.md`** — the full argument as clean Markdown. Agents get the whole
  page for a fraction of the tokens of the rendered HTML.
- **Markdown content negotiation** — a Netlify edge function
  (`netlify/edge-functions/markdown-negotiation.ts`) serves `/index.md` when a
  request carries `Accept: text/markdown`, and `/index.md` is also reachable
  directly as a fallback. Both responses send `Vary: Accept`.

Deliberately *not* implemented: OAuth / MCP / API-catalog / Agent-Skills
discovery endpoints. Those are for sites that expose APIs or services to act on;
this is one static page of prose, so they'd be scaffolding with nothing behind
them. Agent-readiness here means *readable and quotable*, not *callable*.

## Working with Claude Code

Straightforward, well-specified coding tasks should be delegated to a Sonnet
sub-agent. Design choices, copy/argument decisions, and verification stay with
the main (heavier) model. See [CLAUDE.md](./CLAUDE.md).

## License

- **Code** — [MIT](./LICENSE).
- **Content** (text, copy, the argument) — [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/): share and adapt freely, just credit the source. An argument worth making is worth spreading.
