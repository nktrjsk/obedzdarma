import type { APIRoute } from 'astro';

// Markdown twin of src/pages/clanky/ja-tuzka.astro — same article, a fraction
// of the tokens. Kept in sync by hand, exactly like index.md.ts mirrors
// index.astro.
export const GET: APIRoute = async () => {
  const body = `# Já, tužka

> Držíš v ruce obyčejnou tužku — a neexistuje jediný člověk, který by ji uměl vyrobit celou sám. Jak to, že přesto vznikne, když ji nikdo neřídí?

Textová (Markdown) verze článku [obedzdarma.cz/clanky/ja-tuzka](https://obedzdarma.cz/clanky/ja-tuzka). Součást webu [Oběd zdarma neexistuje](https://obedzdarma.cz).

---

Vezmi do ruky obyčejnou tužku. Dřevo, tuha, kousek gumy, nahoře plechový kroužek. Nic jednoduššího si nedovedeš představit. A přesto na celém světě neexistuje jediný člověk, který by ji uměl vyrobit sám od začátku do konce.

Zní to jako přehánění. Není. A když domyslíš proč, uvidíš za tou tužkou něco mnohem většího než tužku — a pochopíš, jak vlastně funguje skoro všechno kolem tebe.

## Nikdo neví, jak ji vyrobit

Dřevo je cedr, který někdo pokácel v Oregonu — pilou z oceli, kterou vytavil někdo jiný z rudy vykopané kdovíkde. Tuha je grafit z dolu na druhém konci světa, smíchaný s jílem a vypálený. K tomu žlutý lak navrch, plíšek z mědi a zinku a guma z oleje a pemzy dovezené z Itálie. Každá jedna část prošla rukama stovek lidí.

A teď to hlavní: nikdo z nich neumí udělat tužku. Dřevorubec neumí vyrobit gumu. Horník od grafitu netuší, jak se míchá lak. Nikdo z těch tisíců lidí nezná celý postup — a většina z nich ani neví, že pracuje zrovna na tužce. Přesto ji společně vyrobí.

## A přesto vznikne

Kdo to všechno řídí? Nikdo. Neexistuje ředitel tužek, který by dřevorubci v Oregonu, horníkovi v asijském dole a chemikovi u lakovny rozdal úkoly. Nesešli se, neznají se, nemluví spolu. A většině z nich je tužka úplně ukradená — dělají svou práci, protože je za ni někdo zaplatí.

Co je tedy spojí? **Cena.** Když je grafitu málo, zdraží — a lidem se vyplatí ho víc těžit. Když někdo vymyslí levnější lak, prosadí se. Cena každému pošle přesně tu informaci, kterou potřebuje, a nic víc. Je to signál, který proběhne celým světem, aniž ho kdo vysílá. Řád, který nikdo nenavrhl.

> Tužku neřídí nikdo — a právě proto vznikne. Kdyby to měl na povel jeden člověk, nikdy by ji nedal dohromady.

## Proč na tom stojí celý svět

Tahle nenápadná tužka v sobě nese víc vědění, než se vejde do jediné hlavy. Nedokázal by ji vyrobit ani ten nejchytřejší člověk, ani nejmocnější vláda — protože to potřebné vědění není nikde pohromadě. Je rozdrobené v hlavách milionů lidí, kteří o sobě navzájem nevědí. Trh z něj skládá výsledek, na který by žádný plánovač nestačil.

A přesně tak vzniká skoro všechno, co máš doma. Rohlík, telefon, tričko. Za pár korun dostaneš věc, kterou bys sám nedal dohromady za celý život.

Jenže i tady platí, že oběd zdarma neexistuje. Ta tužka není dar — každá ruka na její cestě dostala zaplaceno, každý ten signál byla cena, kterou někdo nesl. Zázrak není v tom, že je zadarmo. Je v tom, že tak složitou věc dá dohromady spousta lidí, aniž jim to kdo přikázal — a každý si u toho **přijde na své**.

---

Tužka vypráví svůj příběh v eseji *Já, tužka* (*I, Pencil*) amerického publicisty **Leonarda Reada** z roku 1958. Na obyčejné tužce ukazuje to, čemu ekonomové říkají *spontánní řád* — složitou spolupráci, kterou nikdo neřídí. Zdroj: [I, Pencil](https://www.econlib.org/library/Essays/rdPncl1.html), Library of Economics and Liberty.

---

Text: CC BY 4.0 — šiř dál, jen uveď zdroj. · Open-source: [github.com/nktrjsk/obedzdarma](https://github.com/nktrjsk/obedzdarma)
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
