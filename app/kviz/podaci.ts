// Izvor podataka za kviz (KvizClient.tsx) i za server-renderovane sekcije u page.tsx.
// Ikone nisu ovde (JSX), nego u KvizClient.tsx.

export const pitanja = [
  {
    id: 1,
    pitanje: "Gde trenutno osećate najveću nelagodu ili disbalans u telu?",
    odgovori: [
      { text: "Primećujem umor na licu, gubitak tonusa kože, izražene podočnjake ili napetost u vilici.", tip: "C" },
      { text: "Osećam opšti umor, imam česte glavobolje, probleme sa snom, hormonima ili varenjem.", tip: "A" },
      { text: "Imam jake bolove u leđima, ukočenost mišića, ili osećaj težine i zadržavanja vode.", tip: "B" },
    ],
  },
  {
    id: 2,
    pitanje: "Kako se svakodnevni stres najčešće manifestuje na vaš organizam?",
    odgovori: [
      { text: "Kroz fizički grč, najčešće u predelu ramena i lopatica, uz osećaj hroničnog manjka energije.", tip: "B" },
      { text: "Kroz unutrašnji nemir, anksioznost, pad imuniteta i nemogućnost opuštanja pred spavanje.", tip: "A" },
      { text: "Kroz loš ten, pojavu bora od mrštenja, sivilo lica i nadutost (otoke).", tip: "C" },
    ],
  },
  {
    id: 3,
    pitanje: "Kako biste opisali svoju cirkulaciju i trenutno stanje tkiva?",
    odgovori: [
      { text: "Energija mi varira, ponekad osećam trnjenje, a telo mi traži duboki unutrašnji balans.", tip: "A" },
      { text: "Želim bolju mikrocirkulaciju lica, prirodni sjaj i smanjenje zadržavanja tečnosti oko očiju.", tip: "C" },
      { text: "Često mi je hladno, imam mišićne čvorove ili problem sa upornim celulitom.", tip: "B" },
    ],
  },
  {
    id: 4,
    pitanje: "Koji tip terapijskog osećaja vam u ovom trenutku najviše prija?",
    odgovori: [
      { text: "Duboko unutrašnje smirenje i suptilno balansiranje rada unutrašnjih organa.", tip: "A" },
      { text: "Intenzivniji rad na telu, osećaj izvlačenja napetosti i duboko zagrevanje tkiva.", tip: "B" },
      { text: "Blagi, ritmični pokreti koji rade limfnu drenažu, opuštaju i daju instant svežinu koži.", tip: "C" },
    ],
  },
  {
    id: 5,
    pitanje: "Šta je vaš glavni cilj nakon završetka serije tretmana?",
    odgovori: [
      { text: "Da rešim hronične zdravstvene tegobe, vratim vitalnost i uspostavim hormonski balans.", tip: "A" },
      { text: "Da se konačno oslobodim bolova u leđima, izbacim toksine i poboljšam konture tela.", tip: "B" },
      { text: "Da izgledam odmorno, podmladim kožu prirodnim putem i skinem 'težinu' sa lica i vrata.", tip: "C" },
    ],
  },
];

export const rezultati = {
  A: {
    naslov: "Akupunktura & Moksibustija",
    podnaslov: "Vašem telu je potreban duboki unutrašnji balans.",
    opis: "Vaši odgovori ukazuju na sistemski disbalans, hroničan stres ili tegobe unutrašnjih organa. Akupunktura (u kombinaciji sa toplotom moksibustije) će direktno stimulisati vaš nervni sistem, osloboditi endorfine i probuditi prirodnu moć samoisceljenja vašeg organizma.",
    boja: "emerald",
    linkovi: [{ url: "/akupunktura", tekst: "Saznaj više o Akupunkturi" }],
  },
  B: {
    naslov: "Vakuum Terapija (Ventuze)",
    podnaslov: "Vašem telu je potrebno oslobađanje od spazma i toksina.",
    opis: "Fokus vaših problema leži u nagomilanoj fizičkoj napetosti, bolovima u mišićima i lošoj cirkulaciji. Terapija ventuzama će kroz kontrolisani vakuum dubinski opustiti fasciju, izvući toksine na površinu i vratiti vam lakoću pokreta.",
    boja: "teal",
    linkovi: [{ url: "/ventuze", tekst: "Saznaj više o Ventuzama" }],
  },
  C: {
    naslov: "Gua Sha & Estetska Akupunktura",
    podnaslov: "Vašem telu je potrebna regeneracija i limfna drenaža.",
    opis: "Stres se kod vas dominantno manifestuje na površini – kroz umor lica, pad tonusa i napetost u vratu. Gua Sha masaža će fantastično pokrenuti limfu, smanjiti otoke i vratiti prirodni sjaj, delujući kao potpuno prirodni facelift.",
    boja: "rose",
    linkovi: [{ url: "/guasha", tekst: "Saznaj više o Gua Sha" }],
  },
  // Kombinovani rezultati (Nerešeno)
  AB: {
    naslov: "Sveobuhvatni Oporavak (Akupunktura + Ventuze)",
    podnaslov: "Vašem telu je potreban i unutrašnji balans i fizičko opuštanje.",
    opis: "Vaši odgovori pokazuju da vam je potreban duboki sistemski balans, ali i brzo oslobađanje od mišićnog bola. Najbolji rezultati se postižu kada se na konsultaciji dogovorimo o kombinovanju akupunkture (za nervni sistem) i ventuza (za mišiće).",
    boja: "blue",
    linkovi: [{ url: "/akupunktura", tekst: "Akupunktura" }, { url: "/ventuze", tekst: "Ventuze" }],
  },
  AC: {
    naslov: "Unutrašnja & Spoljašnja Regeneracija (Akupunktura + Gua Sha)",
    podnaslov: "Rešavamo uzrok i brišemo posledice stresa.",
    opis: "Pokazujete simptome unutrašnjeg disbalansa koji se jako oslikava na vašem licu. Kombinacijom akupunkture (za hormonski/nervni balans) i Gua Sha (za tonus i svežinu kože lica), vraćamo zdravlje i lepotu istovremeno.",
    boja: "purple",
    linkovi: [{ url: "/akupunktura", tekst: "Akupunktura" }, { url: "/guasha", tekst: "Gua Sha" }],
  },
  BC: {
    naslov: "Aktivna Detoksikacija (Ventuze + Gua Sha)",
    podnaslov: "Fokus na limfnoj drenaži celog tela.",
    opis: "Vaš fokus je na oslobađanju toksina, viška tečnosti i tenzije. Ova moćna kombinacija vakuum terapije za leđa i Gua Sha struganja za vrat i lice savršeno pokreće limfu i vraća neverovatnu lakoću vašem organizmu.",
    boja: "orange",
    linkovi: [{ url: "/ventuze", tekst: "Ventuze" }, { url: "/guasha", tekst: "Gua Sha" }],
  },
};

export type RezultatKljuc = keyof typeof rezultati;
