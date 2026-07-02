import type { APIRoute } from 'astro';

// Markdown twin of src/pages/clanky/rozbite-okno.astro — same article, a
// fraction of the tokens. Kept in sync by hand, exactly like index.md.ts
// mirrors index.astro.
export const GET: APIRoute = async () => {
  const body = `# Rozbité okno

> Kluk rozbije pekaři výlohu a někdo v davu řekne tu úlevnou větu: aspoň bude mít sklenář práci. Proč je to omyl — a proč ničení nikdy nevytváří bohatství.

Textová (Markdown) verze článku [obedzdarma.cz/clanky/rozbite-okno](https://obedzdarma.cz/clanky/rozbite-okno). Součást webu [Oběd zdarma neexistuje](https://obedzdarma.cz).

---

Kluk hodí kamenem a rozbije pekaři výlohu. Kolem se seběhne dav a někdo v něm řekne: „Aspoň bude mít sklenář práci.“ Peníze se začnou točit a z rozbitého okna bude nakonec i užitek. Zní to skoro jako dobrá zpráva.

Ale není. A stojí za to přesně vědět proč — je to neintuitivní, stejně jako „oběd zdarma“. Něco je vidět, něco vidět není. A přesně v tom je ten háček.

## Co je vidět

Pekař zaplatí sklenáři 600 Kč za nové okno. Sklenář má práci a příjem, za ten si koupí chleba, řezník pak boty. Peníze putují dál, každý z nich si něco pořídí. Tohle všechno se reálně stane a máš to přímo před očima. Odtud pramení to přesvědčení o „roztočení ekonomiky“. Vypadá to, že všichni na rozbitém okně vydělali.

## Co vidět není

Jenže pekař ty peníze chtěl utratit za něco jiného. Chystal se za ně koupit si nové boty. Ty si teď nekoupí, protože musel zaplatit za rozbité okno. Švec o zákazníka přišel, ale nikdy se to nedozví. Ten obchod se prostě nestal a nikomu nebude scházet, protože ani neví, že o něj přišli.

Sečti to. Před kamenem měl pekař výlohu *a* vyhlídku na boty. Po něm má zase **jen výlohu**. Je chudší přesně o jedny boty — a přesně tolik chybí i celku. Sklenářův výdělek nevznikl navíc, jen se přesunul od ševce.

> Rozbité okno nepřidá do světa práci. Naopak — jen přijdeme o jedno okno, které musíme nahradit. A když musíme opravit okno, místo toho nevznikne to, co chceme doopravdy.

## Proč na to lidi pořád skáčou

Protože zisk je vidět, ale ztráta ne. Na sklenáře s novou zakázkou si můžeš ukázat prstem; na boty, které se nikdy nevyrobily, ukázat nemůžeš. Špatná ekonomická úvaha počítá jen s tím prvním. Ta dobrá počítá s obojím — i s tím, co se kvůli nějakému výdaji *nestalo*.

Proto se měj na pozoru pokaždé, když uslyšíš, že válka, živelní pohroma nebo demolice „nastartují ekonomiku“. Obnova je vidět. To, co by za ty peníze a ruce vzniklo místo ní, vidět není — ale je to skutečné a je toho přesně tolik.

Je to stejná past jako „appka zdarma“. Užitkem ti mávají před očima, účet za něj ti ale neukážou. **Někdo to nakonec zaplatí** — jen se ptej, **kdo, kdy a čím**.

---

Podobenství o rozbitém okně popsal francouzský ekonom **Frédéric Bastiat** v eseji *Co je vidět a co není vidět* (1850) — celá stojí na rozdílu mezi viditelným následkem a tím neviditelným. Zdroj: [That Which Is Seen, and That Which Is Not Seen](https://www.econlib.org/library/Bastiat/basEss.html), Library of Economics and Liberty.

---

Text: CC BY 4.0 — šiř dál, jen uveď zdroj. · Open-source: [github.com/nktrjsk/obedzdarma](https://github.com/nktrjsk/obedzdarma)
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
