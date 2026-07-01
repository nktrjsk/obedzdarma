import { getCollection, type CollectionEntry } from 'astro:content';

// The currencies in reading order, shared by the page and the generated
// editions so they present the same sequence. Secondary sort by id keeps the
// order deterministic if two files ever collide on `order`; the guard then
// fails the build so the collision is fixed deliberately — the [1..N] fact
// numbering and the receipt rail both derive from this position.
export async function getSortedCurrencies(): Promise<
  CollectionEntry<'currencies'>[]
> {
  const currencies = (await getCollection('currencies')).sort(
    (a, b) => a.data.order - b.data.order || a.id.localeCompare(b.id),
  );
  const orderValues = currencies.map((c) => c.data.order);
  if (new Set(orderValues).size !== orderValues.length) {
    throw new Error(
      `Currency "order" values must be unique — the [1..N] fact numbering and ` +
        `the receipt rail derive from position. Got [${orderValues.join(', ')}].`,
    );
  }
  return currencies;
}

// Single source of truth for citation numbering, shared by the HTML page
// (src/pages/index.astro) and the generated Markdown/LLM editions
// (src/pages/index.md.ts, src/pages/llms.txt.ts) so the [n] refs, the "Zdroje"
// anchors, and the source list can never drift between representations.
//
// Scheme: currency anchor facts take [1..N] (by reading order), the IBM/Red Hat
// citation is [N+1], any example-level sources follow as [N+2..], and the
// twist's Ricardo citation always takes the last ref — so adding a currency or
// an example source shifts everything consistently and can't collide.

export type Source = { label: string; url?: string };
export type NumberedSource = Source & { ref: number };

// The two fixed (non-currency) citations. Defined here once; both the page and
// the editions render them from these constants.
export const IBM_SOURCE: Source = {
  label:
    'IBM — IBM Closes Landmark Acquisition of Red Hat for $34 Billion (2019)',
  url: 'https://newsroom.ibm.com/2019-07-09-IBM-Closes-Landmark-Acquisition-of-Red-Hat-for-34-Billion-Defines-Open-Hybrid-Cloud-Future',
};
export const RICARDO_SOURCE: Source = {
  label:
    'David Ricardo — On the Principles of Political Economy and Taxation (1817), kap. 7 „On Foreign Trade“',
  url: 'https://www.econlib.org/library/Ricardo/ricP.html',
};

export type Sources = {
  /** Ref number of the IBM/Red Hat citation ([N+1]). */
  ibmRef: number;
  /** Ref number of the twist's Ricardo citation (always last). */
  tradeRef: number;
  /** Look up an example object's ref number by identity. */
  exSourceRefs: Map<unknown, number>;
  /** Example-level sources, in citation order ([N+2..]). */
  exampleSources: NumberedSource[];
  /** Every source, numbered and in the exact order of the "Zdroje" list. */
  all: NumberedSource[];
};

export function buildSources(
  currencies: CollectionEntry<'currencies'>[],
): Sources {
  const currencySources: NumberedSource[] = currencies.map((c, i) => ({
    ref: i + 1,
    ...c.data.source,
  }));

  const ibmRef = currencies.length + 1;

  let nextRef = ibmRef + 1;
  const exSourceRefs = new Map<unknown, number>();
  const exampleSources: NumberedSource[] = [];
  for (const c of currencies) {
    for (const ex of c.data.examples) {
      if (ex.source) {
        exSourceRefs.set(ex, nextRef);
        exampleSources.push({ ref: nextRef, ...ex.source });
        nextRef += 1;
      }
    }
  }
  const tradeRef = nextRef;

  const all: NumberedSource[] = [
    ...currencySources,
    { ref: ibmRef, ...IBM_SOURCE },
    ...exampleSources,
    { ref: tradeRef, ...RICARDO_SOURCE },
  ];

  return { ibmRef, tradeRef, exSourceRefs, exampleSources, all };
}
