"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ChevronRight, Leaf, Activity, Sparkles, RefreshCcw, CalendarDays } from "lucide-react";
import { pitanja, rezultati, type RezultatKljuc } from "./podaci";

const ikone: Record<RezultatKljuc, ReactNode> = {
  A: <Leaf size={40} className="text-emerald-500" />,
  B: <Activity size={40} className="text-teal-500" />,
  C: <Sparkles size={40} className="text-rose-500" />,
  AB: <Activity size={40} className="text-blue-500" />,
  AC: <Sparkles size={40} className="text-purple-500" />,
  BC: <Leaf size={40} className="text-orange-500" />,
};

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

  // --- RENDER ZAVRŠNOG EKRANA ---
  if (zavrseno && konacniRezultat) {
    const res = rezultati[konacniRezultat];
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-28 relative overflow-hidden">
        
        {/* Dekorativna Zanimljiva Pozadina */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-teal-200/40 blur-[100px] mix-blend-multiply"></div>
          <div className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-rose-200/40 blur-[100px] mix-blend-multiply animate-pulse"></div>
          <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-emerald-100/50 blur-[120px] mix-blend-multiply"></div>
        </div>

        <div className="max-w-2xl w-full animate-in fade-in zoom-in duration-500 relative z-10">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-white text-center relative overflow-hidden">
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-${res.boja}-100 rounded-full blur-3xl opacity-50`}></div>
            
            <div className={`w-20 h-20 mx-auto bg-${res.boja}-50 rounded-2xl flex items-center justify-center mb-8 relative z-10 shadow-sm border border-${res.boja}-100`}>
              {ikone[konacniRezultat]}
            </div>

            <p className={`text-sm font-bold text-${res.boja}-600 uppercase tracking-widest mb-3 relative z-10`}>
              Analiza završena
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 relative z-10">
              {res.naslov}
            </h2>
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
                    className="flex-1 min-w-[200px] border border-slate-200 text-slate-700 hover:border-slate-400 bg-slate-50 hover:bg-slate-100 px-6 py-3 rounded-xl font-semibold transition-all text-center"
                  >
                    {link.tekst}
                  </Link>
                ))}
              </div>
             <a
                href="tel:0638504589"
                target="_blank"
                rel="noopener noreferrer"
                title="Zakažite pregled i akupunkturu online"
                aria-label="Zakažite pregled online preko platforme"
                className="flex items-center justify-center gap-2 bg-rose-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-rose-700 transition-all duration-300 shadow-xl shadow-rose-600/30 hover:-translate-y-1"
              >
                <CalendarDays size={20} />
                Zakažite tretman
              </a>
              <button 
                onClick={resetKviz}
                className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-slate-600 font-medium transition-colors"
              >
                <RefreshCcw size={16} /> Popunite kviz ponovo
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // --- RENDER EKRANA ZA UČITAVANJE ---
  if (analiziranje) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 relative overflow-hidden">
        
        {/* Dekorativna Zanimljiva Pozadina */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-teal-200/40 blur-[100px] mix-blend-multiply"></div>
          <div className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-rose-200/40 blur-[100px] mix-blend-multiply animate-pulse"></div>
          <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-emerald-100/50 blur-[120px] mix-blend-multiply"></div>
        </div>

        <div className="text-center animate-pulse relative z-10">
          <div className="w-16 h-16 border-4 border-slate-200 border-t-teal-600 rounded-full animate-spin mx-auto mb-6 shadow-lg"></div>
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
      
      {/* Dekorativna Zanimljiva Pozadina */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-teal-200/40 blur-[100px] mix-blend-multiply"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-rose-200/40 blur-[100px] mix-blend-multiply animate-pulse"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-emerald-100/50 blur-[120px] mix-blend-multiply"></div>
      </div>

      <div className="flex-1 flex flex-col max-w-3xl mx-auto w-full px-4 relative z-10">
        
        {/* HEADER KVIZA */}
        <div className="text-center mb-10">
          <span className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-2 block">
            Holistička procena
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 drop-shadow-sm">
            Upoznajte svoj balans
          </h1>
        </div>

        {/* PROGRESS BAR */}
        <div className="mb-12">
          <div className="flex justify-between text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
            <span>Pitanje {trenutno + 1} od {pitanja.length}</span>
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-teal-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((trenutno) / pitanja.length) * 100}%` }}
            />
          </div>
        </div>

        {/* KARTICA SA PITANJEM I ODGOVORIMA */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-xl shadow-slate-200/50 border border-white flex-1 flex flex-col">
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
                  <ChevronRight size={16} className="text-slate-400 group-hover:text-white" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}