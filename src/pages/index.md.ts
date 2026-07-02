import type { APIRoute } from 'astro';
import { getSortedCurrencies, buildSources } from '../lib/sources';
import { READING_LIST } from '../lib/reading';

export const GET: APIRoute = async ({ site }) => {
  const currencies = await getSortedCurrencies();
  const { ibmRef, tradeRef, exSourceRefs, all } = buildSources(currencies);

  // Generate currency blocks
  const currencyBlocks = currencies.map((currency, i) => {
    const ref = i + 1;
    const nn = String(ref).padStart(2, '0');
    const { title, icon, claim, fact, examples } = currency.data;

    const exampleLines = examples.map((ex) => {
      const exRef = exSourceRefs.get(ex);
      const refSuffix = exRef ? ` [\\[${exRef}\\]](#zdroje)` : '';
      return `- **${ex.name}** — ${ex.note}${refSuffix}`;
    }).join('\n');

    return `### ${nn} · ${title} ${icon}\n\n**${claim}**\n\n${fact} [\\[${ref}\\]](#zdroje)\n\n${exampleLines}`;
  }).join('\n\n');

  // Generate Zdroje list
  const zdrojeList = all.map((s) =>
    s.url ? `${s.ref}. [${s.label}](${s.url})` : `${s.ref}. ${s.label}`
  ).join('\n');

  // Generate the "Za pár minut" reading list from the shared source of truth.
  // Root-relative URLs point at our own articles; absolutize them against the
  // site origin so the Markdown stays portable when copied or quoted.
  const readingList = READING_LIST.map((item) => {
    const href =
      item.url.startsWith('/') && site ? new URL(item.url, site).href : item.url;
    return `- **[${item.title}](${href})** — ${item.note} *(${item.kind} · ${item.time})*`;
  }).join('\n');

  const body = `# Oběd zdarma neexistuje

> Všechno má svou cenu. Tento web rozebírá, čím doopravdy platíš za „zdarma“ — appky, dopravu, účty, služby. Ne penězi, ale soukromím, efektivitou, životním prostředím a inflací. Celý argument stojí na ověřitelných zdrojích.

Teze je idiom *„there's no such thing as a free lunch“* (oběd zdarma neexistuje). **Není o jídle** — je o skryté ceně všeho, co se tváří jako zadarmo. Když za něco neplatíš penězi, platíš jinak. Jen je to méně vidět.

Tohle je textová (Markdown) verze jednostránkového webu [obedzdarma.cz](https://obedzdarma.cz). Web je open-source; kód i texty si můžeš přečíst, ověřit a šířit dál.

---

## Úvod: odkud „oběd zdarma“ pochází

Myšlenku „obědu zdarma“ proslavil ekonom **Milton Friedman**. Ještě před ním ji ale rozšířil spisovatel **Robert A. Heinlein** v románu *Měsíc je drsná milenka*.

Ani jeden ji ale nevymyslel: pochází z amerických barů, které k pití lákaly na „oběd zdarma“. I ten byl ovšem zaplacený v ceně pití.

Pointa je prostá: **nic není zadarmo**. Když za něco neplatíš penězi, platíš jinak. Jen je to méně vidět.

---

## Čím platíš?

Čtyři měny, kterými platíš místo peněz.

${currencyBlocks}

---

## Ekonomie za „obědem zdarma“

Někdy je „zdarma“ promyšlený tah — ne podvod, ale investice. Kdo rozdává, počítá s tím, že se mu to vrátí. Otázka není *jestli*, ale *kdy*.

- **01 Loss leader** — Nabídnou ti něco pod cenou nebo zdarma, aby tě nalákali dovnitř. Pak ale vydělají na tom, co dokoupíš. Přivede tě levný rohlík, ale odneseš si celý nákup.
- **02 Freemium** — Základ je zadarmo, zisky tvoří platící menšina. Pár procent předplatitelů dotuje ostatní, a ti zase přináší službě takovou hodnotu, za kterou předplatitelé platí.
- **03 Doplněk zdarma** — Rozdávají zadarmo to, co pak zvýší poptávku po tom, co prodávají. Software je sice zadarmo, ale o to je hardware, cloud a podpora kolem něj dražší.

Red Hat postavil miliardový byznys na softwaru, který je zdarma a otevřený. V roce 2019 ho IBM koupilo za 34 miliard dolarů. [\\[${ibmRef}\\]](#zdroje)

Ať je konkrétní situace jakákoliv, **oběd zdarma v ní nenajdeš**. Jen se mění to, kdo, kdy a čím ten oběd zaplatí.

> Příště, až uvidíš „zdarma“, zeptej se: **čím platím?**

---

## Ale přece jen jeden existuje

Většina receptů na spravedlivější svět začíná stejnou otázkou: **komu vzít?** Robin Hood bere bohatým a dává chudým — pořád se jen jinak krájí jeden a týž koláč.

Jde to i jinak. A čistěji. Existuje mechanismus, po kterém mají obě strany víc než dřív — a nikomu se nic nesebralo.

Beaty jsou opravdová posloupnost: pocit → teorie → motor.

**Pocit.** Mám doma hromadu čokolády, ale už mi nechutná, radši si dám jablka. Ty máš zase hromadu jablek a chceš už čokoládu. Najdeme se a vyměníme si je. Nevyrobili jsme nic navíc, ale jsme i přesto spokojenější než předtím.

**Proč to funguje.** Hodnota není v té věci daná napevno — ani tím, kolik do ní kdo vložil práce. Určuje si ji každý sám. A čím víc něčeho máme, tím míň stojíme o další kousek: po desáté čokoládě přijdou vhod spíš jablka. Proto když vyměníme to, čeho máme nazbyt, za to, co nám chybí, hodnota se nepřesune. Vznikne.

**Motor.** Rozšiř to na celou ekonomiku a máš svět, jaký známe dnes. Většina lidí dělá hlavně to, v čem je nejužitečnější, a zbytek přenechá těm, kdo to umí líp. Vydělá i ten, kdo neumí nic pořádně — stačí, aby dělal to, co mu jde ze všeho nejlíp.

I když jedna země zvládne vyrobit všechno levněji než druhá, oběma se pořád vyplatí obchodovat a rozdělit si práci. Říká se tomu komparativní výhoda a ekonom David Ricardo ji popsal už roku 1817. [\\[${tradeRef}\\]](#zdroje)

Má to ale jeden háček. Platí to jen u směny, která je **dobrovolná** a u které **víš, do čeho jdeš**. Přesně tím se liší od čtyř měn nahoře: těmi platíš, aniž bys o tom věděl — cena ti není na očích, je ti vnucená, nebo ji za tebe zaplatí někdo jiný. Tady souhlasíš a víš, co dáváš i co dostáváš.

> Čtyři měny nahoře ti účet vystavily bez ptaní.
>
> Tohle je jediná směna, kde obě strany řekly **ano** — a obě odešly **bohatší a spokojenější**.

**Oběd zdarma tedy nakonec existuje — je to akt dobrovolné výměny.**

---

## Zdroje

${zdrojeList}

---

## Za pár minut

${readingList}

---

Open-source: [github.com/nktrjsk/obedzdarma](https://github.com/nktrjsk/obedzdarma) · Kód: MIT · Texty: CC BY 4.0 — šiř dál, jen uveď zdroj.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
