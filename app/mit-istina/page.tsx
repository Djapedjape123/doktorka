"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Leaf, Activity, Sparkles, RefreshCcw, CalendarDays } from "lucide-react";

// --- PITANJA I ODGOVORI ---
const pitanja = [
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

// --- REZULTATI ---
const rezultati = {
  A: {
    naslov: "Akupunktura & Moksibustija",
    podnaslov: "Vašem telu je potreban duboki unutrašnji balans.",
    opis: "Vaši odgovori ukazuju na sistemski disbalans, hroničan stres ili tegobe unutrašnjih organa. Akupunktura (u kombinaciji sa toplotom moksibustije) će direktno stimulisati vaš nervni sistem, osloboditi endorfine i probuditi prirodnu moć samoisceljenja vašeg organizma.",
    ikona: <Leaf size={40} className="text-emerald-500" aria-hidden="true" />,
    boja: "emerald",
    linkovi: [{ url: "/akupunktura", tekst: "Saznaj više o Akupunkturi" }]
  },
  B: {
    naslov: "Vakuum Terapija (Ventuze)",
    podnaslov: "Vašem telu je potrebno oslobađanje od spazma i toksina.",
    opis: "Fokus vaših problema leži u nagomilanoj fizičkoj napetosti, bolovima u mišićima i lošoj cirkulaciji. Terapija ventuzama će kroz kontrolisani vakuum dubinski opustiti fasciju, izvući toksine na površinu i vratiti vam lakoću pokreta.",
    ikona: <Activity size={40} className="text-teal-500" aria-hidden="true" />,
    boja: "teal",
    linkovi: [{ url: "/ventuze", tekst: "Saznaj više o Ventuzama" }]
  },
  C: {
    naslov: "Gua Sha & Estetska Akupunktura",
    podnaslov: "Vašem telu je potrebna regeneracija i limfna drenaža.",
    opis: "Stres se kod vas dominantno manifestuje na površini – kroz umor lica, pad tonusa i napetost u vratu. Gua Sha masaža će fantastično pokrenuti limfu, smanjiti otoke i vratiti prirodni sjaj, delujući kao potpuno prirodni facelift.",
    ikona: <Sparkles size={40} className="text-rose-500" aria-hidden="true" />,
    boja: "rose",
    linkovi: [{ url: "/guasha", tekst: "Saznaj više o Gua Sha" }]
  },
  // Kombinovani rezultati
  AB: {
    naslov: "Sveobuhvatni Oporavak (Akupunktura + Ventuze)",
    podnaslov: "Vašem telu je potreban i unutrašnji balans i fizičko opuštanje.",
    opis: "Vaši odgovori pokazuju da vam je potreban duboki sistemski balans, ali i brzo oslobađanje od mišićnog bola. Najbolji rezultati se postižu kada se na konsultaciji dogovorimo o kombinovanju akupunkture (za nervni sistem) i ventuza (za mišiće).",
    ikona: <Activity size={40} className="text-blue-500" aria-hidden="true" />,
    boja: "blue",
    linkovi: [{ url: "/akupunktura", tekst: "Akupunktura" }, { url: "/ventuze", tekst: "Ventuze" }]
  },
  AC: {
    naslov: "Unutrašnja & Spoljašnja Regeneracija (Akupunktura + Gua Sha)",
    podnaslov: "Rešavamo uzrok i brišemo posledice stresa.",
    opis: "Pokazujete simptome unutrašnjeg disbalansa koji se jako oslikava na vašem licu. Kombinacijom akupunkture (za hormonski/nervni balans) i Gua Sha (za tonus i svežinu kože lica), vraćamo zdravlje i lepotu istovremeno.",
    ikona: <Sparkles size={40} className="text-purple-500" aria-hidden="true" />,
    boja: "purple",
    linkovi: [{ url: "/akupunktura", tekst: "Akupunktura" }, { url: "/guasha", tekst: "Gua Sha" }]
  },
  BC: {
    naslov: "Aktivna Detoksikacija (Ventuze + Gua Sha)",
    podnaslov: "Fokus na limfnoj drenaži celog tela.",
    opis: "Vaš fokus je na oslobađanju toksina, viška tečnosti i tenzije. Ova moćna kombinacija vakuum terapije za leđa i Gua Sha struganja za vrat i lice savršeno pokreće limfu i vraća neverovatnu lakoću vašem organizmu.",
    ikona: <Leaf size={40} className="text-orange-500" aria-hidden="true" />,
    boja: "orange",
    linkovi: [{ url: "/ventuze", tekst: "Ventuze" }, { url: "/guasha", tekst: "Gua Sha" }]
  }
};

type RezultatKljuc = keyof typeof rezultati;

export default function UpoznajSvojBalans() {
  const [trenutno, setTrenutno] = useState(0);
  const [odgovori, setOdgovori] = useState<string[]>([]);
  const [zavrseno, setZavrseno] = useState(false);
  const [analiziranje, setAnaliziranje] = useState(false);
  const [konacniRezultat, setKonacniRezultat] = useState<RezultatKljuc | null>(null);

  const izracunajRezultat = (sviOdgovori: string[]) => {
    const brojac = { A: 0, B: 0, C: 0 };
    sviOdgovori.forEach((odg) => {
      brojac[odg as keyof typeof brojac]++;
    });

    const maxPoeni = Math.max(brojac.A, brojac.B, brojac.C);
    
    const pobednici = Object.keys(brojac).filter(
      (kljuc) => brojac[kljuc as keyof typeof brojac] === maxPoeni
    );

    if (pobednici.length === 1) {
      return pobednici[0] as RezultatKljuc; 
    } else {
      return pobednici.sort().join("") as RezultatKljuc; 
    }
  };

  const handleIzbor = (tip: string) => {
    const noviOdgovori = [...odgovori, tip];
    setOdgovori(noviOdgovori);

    if (trenutno < pitanja.length - 1) {
      setTrenutno(trenutno + 1);
    } else {
      setAnaliziranje(true);
      setTimeout(() => {
        setKonacniRezultat(izracunajRezultat(noviOdgovori));
        setAnaliziranje(false);
        setZavrseno(true);
      }, 1500); 
    }
  };

  const resetKviz = () => {
    setTrenutno(0);
    setOdgovori([]);
    setZavrseno(false);
    setKonacniRezultat(null);
  };

  // SEO: Schema.org za MedicalWebPage
  const quizSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Holistička procena stanja organizma",
    "description": "Kviz koji vam pomaže da saznate da li je za vas idealna akupunktura, ventuze ili Gua Sha masaža.",
    "about": [
      { "@type": "MedicalProcedure", "name": "Akupunktura" },
      { "@type": "MedicalProcedure", "name": "Ventuze" },
      { "@type": "MedicalProcedure", "name": "Gua Sha" }
    ]
  };

  // --- RENDER ZAVRŠNOG EKRANA ---
  if (zavrseno && konacniRezultat) {
    const res = rezultati[konacniRezultat];
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-28 relative overflow-hidden" aria-live="polite">
        
        {/* Dekorativna Zanimljiva Pozadina */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-teal-200/40 blur-[100px] mix-blend-multiply"></div>
          <div className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-rose-200/40 blur-[100px] mix-blend-multiply animate-pulse"></div>
          <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-emerald-100/50 blur-[120px] mix-blend-multiply"></div>
        </div>

        <article className="max-w-2xl w-full animate-in fade-in zoom-in duration-500 relative z-10">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-white text-center relative overflow-hidden">
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-${res.boja}-100 rounded-full blur-3xl opacity-50`}></div>
            
            <div className={`w-20 h-20 mx-auto bg-${res.boja}-50 rounded-2xl flex items-center justify-center mb-8 relative z-10 shadow-sm border border-${res.boja}-100`}>
              {res.ikona}
            </div>
            
            <h2 className={`text-sm font-bold text-${res.boja}-600 uppercase tracking-widest mb-3 relative z-10`}>
              Analiza završena
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 relative z-10">
              {res.naslov}
            </h3>
            <p className="text-lg font-medium text-slate-700 mb-6 relative z-10">
              {res.podnaslov}
            </p>
            <p className="text-slate-600 leading-relaxed mb-10 relative z-10">
              {res.opis}
            </p>

            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-wrap justify-center gap-3">
                {res.linkovi.map((link, idx) => (
                  <Link 
                    key={idx} 
                    href={link.url}
                    title={`Saznaj više informacija o usluzi: ${link.tekst}`}
                    className="flex-1 min-w-[200px] border border-slate-200 text-slate-700 hover:border-slate-400 bg-slate-50 hover:bg-slate-100 px-6 py-3 rounded-xl font-semibold transition-all text-center"
                  >
                    {link.tekst}
                  </Link>
                ))}
              </div>
             <a
                href="https://www.fresha.com/book-now/aku-nutri-zcaukxar/all-offer?share=true&pId=3049914"               
                target="_blank"
                rel="noopener noreferrer"
                title="Zakažite pregled i akupunkturu online"
                aria-label="Zakažite pregled online preko platforme Fresha"
                className="flex items-center justify-center gap-2 bg-rose-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-rose-700 transition-all duration-300 shadow-xl shadow-rose-600/30 hover:-translate-y-1"
              >
                <CalendarDays size={20} aria-hidden="true" />
                Zakažite online
              </a>
              <button 
                onClick={resetKviz}
                title="Pokrenite kviz ispočetka"
                className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-slate-600 font-medium transition-colors"
              >
                <RefreshCcw size={16} aria-hidden="true" /> Popunite kviz ponovo
              </button>
            </div>
          </div>
        </article>
      </main>
    );
  }

  // --- RENDER EKRANA ZA UČITAVANJE ---
  if (analiziranje) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 relative overflow-hidden" aria-live="polite">
        
        {/* Dekorativna Zanimljiva Pozadina */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-teal-200/40 blur-[100px] mix-blend-multiply"></div>
          <div className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-rose-200/40 blur-[100px] mix-blend-multiply animate-pulse"></div>
          <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-emerald-100/50 blur-[120px] mix-blend-multiply"></div>
        </div>

        <div className="text-center animate-pulse relative z-10">
          <div className="w-16 h-16 border-4 border-slate-200 border-t-teal-600 rounded-full animate-spin mx-auto mb-6 shadow-lg" aria-hidden="true"></div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Analiziramo vaš balans...</h2>
          <p className="text-slate-600 font-medium">Povezujemo simptome sa tehnikama tradicionalne medicine.</p>
        </div>
      </main>
    );
  }

  // --- RENDER GLAVNOG KVIZA ---
  const pitanje = pitanja[trenutno];

  return (
    <main className="min-h-screen bg-slate-900 flex flex-col relative overflow-hidden pt-28 pb-12">
      
      {/* Ubacivanje strukturiranih podataka */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quizSchema) }}
      />

      {/* Dekorativna Zanimljiva Pozadina */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-teal-200/40 blur-[100px] mix-blend-multiply"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-rose-200/40 blur-[100px] mix-blend-multiply animate-pulse"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-emerald-100/50 blur-[120px] mix-blend-multiply"></div>
      </div>

      <div className="flex-1 flex flex-col max-w-3xl mx-auto w-full px-4 relative z-10">
        
        {/* HEADER KVIZA */}
        <header className="text-center mb-10">
          <span className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-2 block">
            Holistička procena
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 drop-shadow-sm text-white">
            Upoznajte svoj balans
          </h1>
        </header>

        {/* PROGRESS BAR */}
        <div className="mb-12" aria-label="Napredak procene">
          <div className="flex justify-between text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
            <span>Pitanje {trenutno + 1} od {pitanja.length}</span>
          </div>
          <div 
            className="h-2 bg-slate-700 rounded-full overflow-hidden shadow-inner" 
            role="progressbar" 
            aria-valuenow={Math.round(((trenutno) / pitanja.length) * 100)} 
            aria-valuemin={0} 
            aria-valuemax={100}
          >
            <div
              className="h-full bg-teal-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((trenutno) / pitanja.length) * 100}%` }}
            />
          </div>
        </div>

        {/* KARTICA SA PITANJEM I ODGOVORIMA */}
        <section aria-live="polite" className="bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-xl shadow-slate-200/50 border border-white flex-1 flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center leading-snug">
            {pitanje.pitanje}
          </h2>

          <div className="flex flex-col gap-4 mt-auto">
            {pitanje.odgovori.map((odg, idx) => (
              <button
                key={idx}
                onClick={() => handleIzbor(odg.tip)}
                className="w-full text-left bg-white/50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 shadow-sm hover:shadow-md p-5 rounded-2xl transition-all duration-300 group flex items-center justify-between"
              >
                <span className="text-slate-700 font-medium leading-relaxed pr-4 group-hover:text-teal-900">
                  {odg.text}
                </span>
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-teal-500 group-hover:border-teal-500 transition-colors">
                  <ChevronRight size={16} className="text-slate-400 group-hover:text-white" aria-hidden="true" />
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}