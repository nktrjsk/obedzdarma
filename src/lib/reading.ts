// Single source of truth for the "Za pár minut" reading list, shared by the
// HTML page (src/pages/index.astro) and the generated Markdown edition
// (src/pages/index.md.ts) so the footer and the agent-facing mirror can never
// drift. Each entry is a short, easy-going way into one idea the argument rests
// on — a first encounter deserves a few minutes, not a 900-page book.

export type ReadingItem = {
  /** Concept name, shown as the link text. */
  title: string;
  /** Medium badge: "článek", "video", "video s titulky". */
  kind: string;
  /** Rough time to read/watch, e.g. "2 min" — sets the reader's expectation. */
  time: string;
  /** One-line hook tying the resource back to the argument. */
  note: string;
  /**
   * Where it points. A root-relative path (starts with "/") is one of our own
   * articles — opens in place, no target=_blank; an absolute URL is external.
   */
  url: string;
};

export const READING_LIST: ReadingItem[] = [
  {
    title: 'Rozbité okno',
    kind: 'článek',
    time: '3 min',
    note: 'proč ničení nevytváří bohatství — skrytá cena všeho',
    url: '/clanky/rozbite-okno',
  },
  {
    title: 'Komparativní výhoda',
    kind: 'článek',
    time: '4 min',
    note: 'proč na směně vydělají obě strany, i ten slabší',
    url: '/clanky/komparativni-vyhoda',
  },
  {
    title: 'Já, tužka',
    kind: 'článek',
    time: '4 min',
    note: 'jak trh spojí tisíce cizinců, aniž to kdo řídí',
    url: '/clanky/ja-tuzka',
  },
];
