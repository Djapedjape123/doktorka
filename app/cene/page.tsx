"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, CalendarDays, Sparkles, Layers } from "lucide-react";
import Link from "next/link";

const pojedinacneTerapije = [
  { naziv: "Akupunktura", cena: "2.500 din", trajanje: "20–30 min" },
  { naziv: "Aurikuloakupunktura", opis: "Ušna akupunktura — lepljenje iglica", cena: "2.000 din", trajanje: "20–30 min" },
  { naziv: "Ventuze", opis: "Cupping, vakuum čaše", cena: "2.000 din", trajanje: "20 min" },
  { naziv: "Moksibustija", opis: "Toplotna terapija", cena: "1.500 din", trajanje: "10–20 min" },
  { naziv: "Gua Sha masaža", opis: "Tradicionalna tehnika grebanja", cena: "1.500 din", trajanje: "~10 min" },
];

const paketi = [
  {
    naziv: "Estetski paket",
    opis: "Estetska akupunktura + ventuze + Gua Sha masaža",
    cena: "3.500 din",
    trajanje: "~1h 15min",
    tag: "Najpopularniji",
  },
  {
    naziv: "Kompletan holistički tretman",
    opis: "Akupunktura + ventuze + moksibustija + Gua Sha",
    cena: "3.500 din",
    trajanje: "~1.5 sat",
    tag: "Preporučeno",
  },
  {
    naziv: "Tretman lica",
    opis: "Ventuze-vakum čašice + Gua Sha masaža lica",
    cena: "2.000 din",
    trajanje: "30-40 min",
    tag: "Preporučeno",
  },
];

export default function Cene() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-full min-h-screen bg-white">

      {/* HERO */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        {/* Ambient svetlost */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-red-400 font-semibold tracking-widest uppercase mb-6 text-sm">
            <span className="w-8 h-px bg-red-400 inline-block" />
            Cenovnik
            <span className="w-8 h-px bg-red-400 inline-block" />
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Investicija<br />
            <span className="text-red-500">u vaše zdravlje</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Transparentne cene bez skrivenih troškova. Svaki tretman prilagođen vašim potrebama.
          </p>
        </div>
      </section>

      {/* CENOVNIK */}
      <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* KOLONA 1 — POJEDINAČNE */}
            <div className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-slate-100 rounded-lg">
                  <Layers size={18} className="text-slate-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-800 tracking-tight">Pojedinačne terapije</h2>
              </div>

              <div className="divide-y divide-slate-100">
                {pojedinacneTerapije.map((t, i) => (
                  <div
                    key={i}
                    className={`py-5 group transition-all duration-500`}
                    style={{ transitionDelay: `${i * 80 + 200}ms` }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-800 group-hover:text-red-600 transition-colors">
                          {t.naziv}
                        </h3>
                        {t.opis && (
                          <p className="text-sm text-slate-600 mt-0.5">{t.opis}</p>
                        )}
                        <div className="flex items-center gap-1.5 mt-2">
                          <Clock size={12} className="text-red-400 shrink-0" />
                          <span className="text-xs text-slate-600">{t.trajanje}</span>
                        </div>
                      </div>
                      <span className="text-lg font-bold text-slate-900 whitespace-nowrap tabular-nums shrink-0">
                        {t.cena}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* KOLONA 2 — PAKETI */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-red-50 rounded-lg">
                  <Sparkles size={18} className="text-red-500" />
                </div>
                <h2 className="text-xl font-bold text-slate-800 tracking-tight">Kombinovani paketi</h2>
              </div>

              <div className="space-y-5">
                {paketi.map((p, i) => (
                  <div
                    key={i}
                    className="relative rounded-2xl border border-slate-200 hover:border-red-300 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5 group bg-white"
                  >
                    {/* Tag */}
                    <span className="absolute -top-3 left-5 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                      {p.tag}
                    </span>

                    <div className="flex items-start justify-between gap-4 mb-3 mt-1">
                      <h3 className="font-bold text-slate-800 text-lg leading-tight group-hover:text-red-700 transition-colors">
                        {p.naziv}
                      </h3>
                      <div className="text-right shrink-0">
                        <span className="block text-2xl font-bold text-red-600 tabular-nums">
                          {p.cena}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{p.opis}</p>

                    <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                      <Clock size={13} className="text-red-400" />
                      <span className="text-xs text-slate-600 font-medium">{p.trajanje}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="https://www.fresha.com/book-now/aku-nutri-zcaukxar/all-offer?share=true&pId=3049914"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Zakažite pregled i akupunkturu online"
                  aria-label="Zakažite pregled online preko platforme"
                  className="group flex items-center justify-center gap-2.5 w-full bg-slate-900 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-600/30"
                >
                  <CalendarDays size={18} className="group-hover:scale-110 transition-transform" />
                  Zakažite termin
                </a>
                <p className="text-center text-xs text-slate-400 mt-3">
                  Konsultacija pre prvog tretmana je besplatna
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}