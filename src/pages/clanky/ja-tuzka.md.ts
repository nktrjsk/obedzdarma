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

Zní to přehnaně, ale není. A když domyslíš proč, uvidíš za tou tužkou něco mnohem většího než tužku — a pochopíš, jak vlastně funguje skoro všechno kolem tebe.

## Nikdo sám neví, jak ji vyrobit

Dřevo je z cedru, který někdo pokácel v Oregonu — pilou z oceli, kterou vytavil někdo jiný z rudy vykopané kdovíkde. Tuha je grafit z dolu na druhém konci světa, smíchaný s jílem, a obojí se nakonec vypálí v peci. K tomu žlutý lak navrch, plíšek z mědi a zinku, guma z oleje a pemzy dovezené z Itálie. Každá jedna část prošla pod rukama stovek lidí.

A teď to hlavní: nikdo z nich neumí udělat celou tužku. Dřevorubec neumí vyrobit gumu. Horník v grafitovém dole netuší, jak se míchá lak. Nikdo z těch tisíců lidí nezná celý postup — a většina z nich ani neví, že pracuje zrovna na tužce. I přesto se ale společně podílí na její výrobě.

## A vznikla tužka

Kdo to všechno řídí? Nikdo. Neexistuje „ředitel tužek“, který by dřevorubci v Oregonu, horníkovi v asijském dole a chemikovi v lakovně rozdával úkoly. Nikdy se nepotkali, neznají se, nemluví spolu. A většině z nich je ta tužka úplně ukradená — dělají jen svou práci, protože jim za ni někdo zaplatí.

Co je tedy spojuje? **Cena.** Když je grafitu málo, zdraží — a lidem se vyplatí ho víc těžit. Když někdo vymyslí levnější lak, pravděpodobně vytlačí dražší konkurenty. Cena každému pošle přesně tu informaci, kterou potřebuje, a nic víc. Je to signál, který proběhne celým světem, aniž by ho někdo záměrně vysílal. Je to řád, který nikdo nenavrhl. Proto jsou ceny tak odolné — jsou neoddělitelně spjaté s prací a výrobky.

> Tužku neřídí nikdo — a právě proto vznikne. Kdyby to měl na povel jeden člověk, nikdy by ji nedal dohromady.

## Proč na tom stojí celý svět

Tahle nenápadná tužka potřebuje víc vědění, než se vejde do jediné hlavy. Nedokázal by ji vyrobit ani ten nejchytřejší člověk, ani nejmocnější vláda — protože to potřebné vědění není nikde pohromadě. Je rozdrobené v hlavách milionů lidí, kteří o sobě navzájem vlastně ani nevědí. Principy trhu ale z těhle střípků skládají výsledek, kterého by žádný plánovač nedosáhl.

A přesně tak vzniká skoro všechno, co máš doma. Rohlík, telefon, tričko. Za pár korun dostaneš věc, kterou bys doma sám nedal dohromady za celý život.

Jenže i tady platí, že oběd zdarma neexistuje. Ta tužka není dar — každá ruka na její cestě dostala zaplaceno, každý ten signál byla cena, kterou někdo nesl. Zázrak není v tom, že je zadarmo. Je v tom, že tak složitou věc dá dohromady spousta lidí, aniž jim to kdo přikázal — a každý na té tužce **vydělá**.

---

Tužka vypráví svůj příběh v eseji *Já, tužka* (*I, Pencil*) amerického publicisty **Leonarda Reada** z roku 1958. Na obyčejné tužce ukazuje to, čemu ekonomové říkají *spontánní řád* — složitou spolupráci, kterou nikdo neřídí. Myšlenku, že roztroušené vědění spojí cena, a ne centrální plánovač, propracoval už o něco dřív rakouský ekonom **Friedrich August von Hayek** (1899–1992); právě on pro ni razil pojem spontánní řád a v roce 1974 za tuto práci dostal Nobelovu cenu za ekonomii. Zdroj: [I, Pencil](https://www.econlib.org/library/Essays/rdPncl1.html), Library of Economics and Liberty.

---

Text: CC BY 4.0 — šiř dál, jen uveď zdroj. · Open-source: [github.com/nktrjsk/obedzdarma](https://github.com/nktrjsk/obedzdarma)
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
