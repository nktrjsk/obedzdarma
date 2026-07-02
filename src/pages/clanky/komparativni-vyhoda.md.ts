import type { APIRoute } from 'astro';

// Markdown twin of src/pages/clanky/komparativni-vyhoda.astro — same article, a
// fraction of the tokens. Kept in sync by hand, exactly like index.md.ts
// mirrors index.astro.
export const GET: APIRoute = async () => {
  const body = `# Komparativní výhoda

> Jsi v něčem lepší než druhý — vlastně ve všem. Proč se přesto vyplatí nechat část práce na něm, a proč na tomhle nenápadném pravidle stojí celý obchod.

Textová (Markdown) verze článku [obedzdarma.cz/clanky/komparativni-vyhoda](https://obedzdarma.cz/clanky/komparativni-vyhoda). Součást webu [Oběd zdarma neexistuje](https://obedzdarma.cz).

---

S kamarádem prodáváte na festivalu jídlo na jednom stánku. Burger i hot dog umíš udělat rychleji než on — jsi šikovnější v obojím. Kdo se tedy má pustit do čeho? Napadne tě, že je to jedno: však se do toho oba opřete a nějak to zvládnete.

Vypadá to, že je to jedno. Jenže na tom, jak si práci rozdělíte, záleží mnohem víc, než by tě napadlo. Schovává se v tom jeden z nejméně intuitivních poznatků ekonomie, a jakmile ho jednou uvidíš, začneš si ho všímat všude.

## V čem jsi lepší

Řekněme, že za hodinu uděláš 12 burgerů, nebo 12 hot dogů. Kamarád je pomalejší: udělá 8 burgerů, nebo jen 4 hot dogy za hodinu. Jsi lepší v obojím — u burgerů o polovinu, u hot dogů dokonce třikrát.

Máte před sebou dvouhodinovou špičku a hladový dav, který si rozebere všechno, co stihnete udělat. Intuitivní je, když se do obojího pustíte oba na střídačku: hodinu děláš burgery, pak se vystřídáte a děláš hodinu hot dogy. Padne z toho celkem 20 burgerů a 16 hot dogů — dohromady **36 porcí**.

## Čeho se vzdáváš

Každou minutu, kterou strávíš u burgerů, nemůžeš dělat hot dogy. A tvůj čas u hot dogů má velkou cenu — máš v nich dvakrát větší náskok než u burgerů. Když hodinu děláš burgery, přijdeš tím o 12 hot dogů, které jsi mezitím mohl udělat.

Kamarád za tu hodinu udělá hot dogů mnohem míň. Hot dogy mu jdou pomalu. A i když dělá o třetinu méně burgerů než ty, za tu dobu by udělal o **dvě třetiny** méně hot dogů. Vidíš ten rozdíl? Burgery ho stojí míň než tebe — ne, že by je dělal rychleji, ale nedokáže se ničemu jinému věnovat lépe.

Tak si to rozdělíte: kamarád dělá celou dobu burgery, ty celou dobu hot dogy. On jich udělá 16, ty 24 — dohromady **40 porcí**. O čtyři víc než předtím, a přitom stejné dvě hodiny a stejní dva lidé. Nikdo nepřidal ani minutu práce navíc — a i tak se uvařilo víc jídla.

> Nemusíš být v něčem nejlepší, aby se vyplatilo nechat to na tobě. Stačí, že tě to ze všech stojí nejmíň.

## Proč na tom stojí celý svět

Říká se tomu **komparativní výhoda** a je to důvod, proč nikdo nedělá všechno sám. Špičková chirurgička si nezvedá vlastní telefony, i kdyby to zvládala nejrychleji z celé nemocnice — každou minutu u telefonu totiž nemůže být na sále. Bohaté země dovážejí zboží z chudších, i když by je uměly vyrobit levněji. A uživí se i ten, kdo není vyloženě v ničem nejlepší — stačí dělat to, co mu jde *relativně* nejlíp.

Ekonom **David Ricardo** to popsal už roku 1817 na obchodu mezi zeměmi. Mezi dvěma lidmi u jednoho stánku to ale platí úplně stejně.

A přesně tohle je druhý konec příběhu o obědu zdarma. Ty čtyři měny nahoře — soukromí, efektivita, prostředí, inflace — ti účet vystaví bez zeptání. Chytře rozdělená práce dělá pravý opak: nikdo neudělal víc práce, a přesto je na světě víc než předtím. Hodnota se nepřesunula — **vznikla**. Všichni se nají, ale koza zůstane celá.

---

Princip komparativní výhody popsal anglický ekonom **David Ricardo** v knize *Zásady politické ekonomie a zdanění* (1817), v kapitole „O zahraničním obchodu“ — na příkladu Anglie a Portugalska, sukna a vína. Zdroj: [On the Principles of Political Economy and Taxation](https://www.econlib.org/library/Ricardo/ricP.html), Library of Economics and Liberty.

---

Text: CC BY 4.0 — šiř dál, jen uveď zdroj. · Open-source: [github.com/nktrjsk/obedzdarma](https://github.com/nktrjsk/obedzdarma)
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
