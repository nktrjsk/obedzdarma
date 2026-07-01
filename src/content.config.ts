import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each "currency" you pay with instead of money. Rendered together on the v1
// landing page, but modeled as standalone entries so they can later become
// their own reference pages without a rewrite.
const currencies = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/data/currencies' }),
  schema: z.object({
    order: z.number(),
    icon: z.string(),
    title: z.string(),
    // Wayfinding "receipt" line item for this currency. Kept separate from
    // `title` because the titles are in the instrumental case ("Soukromím"),
    // which reads oddly in a nav — `nav.label` is the clean nominative form,
    // and `nav.cost` is the "currency" the section is paid in.
    nav: z.object({
      label: z.string(),
      cost: z.string().optional(),
    }),
    // Short, punchy claim shown large under the title.
    claim: z.string(),
    // One hard, verifiable anchor fact the block's argument rests on.
    fact: z.string(),
    // Citation for the anchor fact, listed in the page's "Zdroje" section.
    source: z.object({
      label: z.string(),
      url: z.string().url().optional(),
    }),
    // Concrete examples of "free" things paid for with this currency.
    examples: z.array(
      z.object({
        name: z.string(),
        note: z.string().optional(),
        // Optional citation for a specific figure cited in the note, listed
        // in "Zdroje" after the section anchor sources.
        source: z
          .object({
            label: z.string(),
            url: z.string().url().optional(),
          })
          .optional(),
      }),
    ),
  }),
});

export const collections = { currencies };
