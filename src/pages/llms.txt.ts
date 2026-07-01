import type { APIRoute } from 'astro';
import { getSortedCurrencies, RICARDO_SOURCE } from '../lib/sources';

export const GET: APIRoute = async () => {
  const currencies = await getSortedCurrencies();

  const currencyBullets = currencies.map((currency) => {
    const { nav, claim, fact } = currency.data;
    return `- [${nav.label}](https://obedzdarma.cz/#${currency.id}): ${claim} ${fact}`;
  }).join('\n');

  const zdrojeBullets = [
    ...currencies.map((c) => `- ${c.data.source.label}`),
    `- ${RICARDO_SOURCE.label}`,
  ].join('\n');

  const body = `# Oběd zdarma neexistuje

> Všechno má svou cenu. Tento web rozebírá, čím doopravdy platíš za „zdarma" — appky, dopravu, účty, služby. Ne penězi, ale soukromím, efektivitou, životním prostředím a inflací. Celý argument stojí na ověřitelných zdrojích.

Jedna stránka, dlouhý scroll. Teze je idiom „there's no such thing as a free lunch" (oběd zdarma neexistuje) — **není o jídle**, ale o skryté ceně všeho, co se tváří jako zadarmo. Když za něco neplatíš penězi, platíš jinak.

## Čtyři měny, kterými platíš místo peněz

${currencyBullets}

## A přece jeden „oběd zdarma" existuje

- [Směna](https://obedzdarma.cz/#smena): Jediná výjimka z teze. Dobrovolná, informovaná směna je pozitivně-součtová — obě strany dají to, čeho si cení méně, za to, čeho si cení více, a odejdou bohatší, aniž kdokoli přišel o hodnotu. Hodnota nevzniká z věci samotné, ale z rozdílu v tom, jak moc ji kdo chce (mezní užitek). Přes celou ekonomiku to popisuje komparativní výhoda (David Ricardo, 1817). Rozdíl oproti čtyřem měnám: tam platíš cenu skrytou, vnucenou nebo přenesenou na jiné; tady souhlasíš a víš, co dáváš i dostáváš.

## Zdroje
${zdrojeBullets}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
