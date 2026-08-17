"use client";

import { useEffect, useRef, useState } from "react";
import { Flame, Wind, Activity, Heart, Shield, Leaf, AlertTriangle, CalendarDays, CheckCircle2 } from "lucide-react";
import Link from "next/link";

function FadeIn({ children, delay = "", className = "" }: { children: React.ReactNode, delay?: string, className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        } ${delay} ${className}`}
    >
      {children}
    </div>
  );
}
// ----------------------------------------------------------------------

export default function MoksibustijaPage() {

  // --- LOGIKA ZA SLAJDER ---
  const [trenutnaSlika, setTrenutnaSlika] = useState(0);

  // Ovde ubacuješ sve slike koje želiš u slajderu (može i više od 2)
  const slikeSlajdera = [
    "https://res.cloudinary.com/duomot4hp/image/upload/v1782925588/WhatsApp_Image_2026-07-01_at_19.04.14_tfqfxc.jpg",
    "https://res.cloudinary.com/duomot4hp/image/upload/v1782925595/WhatsApp_Image_2026-07-01_at_19.04.09_m3w2r7.jpg"
  ];

  // Efekat koji menja sliku svake 4 sekunde
  useEffect(() => {
    const timer = setInterval(() => {
      setTrenutnaSlika((prev) => (prev === slikeSlajdera.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [slikeSlajdera.length]);
  // -------------------------

  // Lista indikacija sa ikonicama
  const indikacije = [
    { naslov: "Respiratorni problemi", opis: "Alergije i sinusitis", ikona: <Wind size={24} /> },
    { naslov: "Bolovi i tenzija", opis: "Glavobolje i migrene", ikona: <Activity size={24} /> },
    { naslov: "Žensko zdravlje", opis: "Bolne menstruacije, valunzi i neplodnost", ikona: <Heart size={24} /> },
    { naslov: "Mišići i zglobovi", opis: "Artritis, bolovi u ramenu, leđima i kolenu", ikona: <Flame size={24} /> },
    { naslov: "Probava", opis: "Dijareja, opstipacija, usporena probava", ikona: <Leaf size={24} /> },
    { naslov: "Opšte stanje", opis: "Imunitet, vitalnost, stres i depresija", ikona: <Shield size={24} /> },
  ];

  return (
    <main className="w-full min-h-screen bg-slate-50 pb-0">

      {/* 1. HERO SEKCIJA */}
      <section className="relative pt-36 pb-24 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Leva strana - Tekst */}
            <div className="w-full lg:w-1/2">
              <FadeIn>
                <span className="text-red-400 font-bold tracking-widest uppercase mb-4 block text-sm">
                  Tradicionalna Kineska Medicina
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Moksibustija
                </h1>
                <div className="w-20 h-1 bg-red-500 rounded-full mb-8"></div>

                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  Moksibustija je jedna od najstarijih tehnika kineske tradicionalne medicine. Predstavlja stimulaciju akupunkturnih tačaka povišenom temperaturom koja nastaje upotrebom tzv. <strong className="text-white">Moksa vune</strong>, a koja se pravi od osušenog lišća divljeg pelina (<em>Artemisia vulgaris</em>) pretvorenog u fini prah.
                </p>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  Ona ima jedinstvenu osobinu da <strong className="text-white">zagreva i uklanja blokade</strong> ili zastoj energije u meridijanima eliminišući hladnoću i vlagu. Zadatak moksibustije je da zagreva akupunkturne tačke, uspostavi kretanje vitalne energije i krvi, podigne <em>Yang</em> iz kolapsa i prevenira mnoga stanja i bolesti.
                </p>
                <p className="text-slate-400 italic border-l-4 border-red-500/50 pl-4">
                  Često se kombinuje sa akupunkturom, shiatsu tretmanima i ventuzama, a izuzetno je efikasna i kao samostalna terapija.
                </p>
              </FadeIn>
            </div>

            {/* Desna strana - SLAJDER SLIKA */}
            <div className="w-full lg:w-1/2">
              <FadeIn delay="delay-200">
                <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-black/40 group">

                  {slikeSlajdera.map((slika, index) => (
                    <img
                      key={index}
                      src={slika}
                      alt={`Moksibustija terapija slika ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${index === trenutnaSlika
                        ? "opacity-100 group-hover:scale-105"
                        : "opacity-0 scale-100"
                        }`}
                    />
                  ))}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none"></div>

                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                    {slikeSlajdera.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setTrenutnaSlika(index)}
                        className={`h-2 rounded-full transition-all duration-500 ${index === trenutnaSlika
                          ? "w-8 bg-red-500"
                          : "w-2 bg-white/50 hover:bg-white"
                          }`}
                        aria-label={`Prikaži sliku ${index + 1}`}
                      />
                    ))}
                  </div>

                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KARTICE - DIREKTNA I INDIREKTNA METODA */}
      <section className="bg-white pt-24 pb-16 border-t border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
              Metode primene
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay="delay-100">
              <div className="h-full bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-red-600 shadow-sm">1</span>
                  Direktna Moksibustija
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  U ovoj metodi, moksa u obliku male kupe se stavlja <strong>direktno na akupunkturnu tačku</strong> na telu i zatim se zapali. Toplota direktno prodire u tačku, stvarajući snažan terapeutski efekat na balansiranje telesne energije.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay="delay-300">
              <div className="h-full bg-white rounded-3xl p-8 border-2 border-red-100 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
                  Najčešća primena
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 shadow-sm">2</span>
                  Indirektna Moksibustija
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Znatno češće se primenjuje. Između kože i mokse se postavlja prirodni sloj, a zatim se moksa zapali. Takođe se koriste i štapići (fišeci) od mokse u vidu cigare koji se upale i drže na udaljenosti od nekoliko centimetara od kože.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-50 text-red-700 text-sm font-medium px-3 py-1.5 rounded-lg flex items-center gap-1"><CheckCircle2 size={16} /> Parče đumbira</span>
                  <span className="bg-red-50 text-red-700 text-sm font-medium px-3 py-1.5 rounded-lg flex items-center gap-1"><CheckCircle2 size={16} /> Beli luk</span>
                  <span className="bg-red-50 text-red-700 text-sm font-medium px-3 py-1.5 rounded-lg flex items-center gap-1"><CheckCircle2 size={16} /> Morska so</span>
                  <span className="bg-red-50 text-red-700 text-sm font-medium px-3 py-1.5 rounded-lg flex items-center gap-1"><CheckCircle2 size={16} /> Moksa cigara</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- 3. NOVA VIDEO SEKCIJA --- */}
      <section className="bg-white pb-24 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2 block">Iskusite tretman</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Pogledajte kako to izgleda u praksi</h2>
            </div>

            <div className="relative w-full max-w-sm mx-auto aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl shadow-slate-300 border-8 border-white bg-slate-100">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://res.cloudinary.com/duomot4hp/video/upload/v1782928577/WhatsApp_Video_2026-07-01_at_19.54.30_epxacj.mp4" type="video/mp4" />
                Vaš pretraživač ne podržava video format.
              </video>
            </div>
          </FadeIn>
        </div>
      </section>
      {/* ----------------------------- */}

      {/* 4. INDIKACIJE I KONTRAINDIKACIJE */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Leva strana: Indikacije */}
          <div className="w-full lg:w-2/3">
            <FadeIn>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Kada se primenjuje?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {indikacije.map((stavka, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all">
                    <div className="bg-red-50 p-3 rounded-xl text-red-600 shrink-0">
                      {stavka.ikona}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">{stavka.naslov}</h4>
                      <p className="text-sm text-slate-600">{stavka.opis}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Desna strana: Kontraindikacije */}
          <div className="w-full lg:w-1/3">
            <FadeIn delay="delay-300">
              <div className="bg-orange-50/50 border border-orange-200 rounded-3xl p-8 sticky top-32">
                <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center text-orange-600 mb-6">
                  <AlertTriangle size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Kontraindikacije</h3>
                <p className="text-slate-600 mb-6">
                  Za vašu maksimalnu bezbednost, moksibustija se <strong>ne primenjuje</strong> u sledećim stanjima:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="w-2 h-2 mt-2 rounded-full bg-orange-500 shrink-0"></span>
                    <span><strong>Manjak Yina</strong> u organizmu</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="w-2 h-2 mt-2 rounded-full bg-orange-500 shrink-0"></span>
                    <span>Prisustvo <strong>akutnih infekcija</strong></span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="w-2 h-2 mt-2 rounded-full bg-orange-500 shrink-0"></span>
                    <span><strong>Povišena</strong> telesna temperatura</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="w-2 h-2 mt-2 rounded-full bg-orange-500 shrink-0"></span>
                    <span>Stanje opšte slabosti tela</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 5. SLIKA U PUNOJ ŠIRINI (CTA BANER) */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop')" }}
        ></div>

        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Osetite toplinu koja isceljuje.
            </h2>
            <p className="text-lg md:text-xl text-slate-200 mb-10 drop-shadow-md">
              Zakažite vašu moksibustiju online ili nas kontaktirajte za stručne konsultacije i procenu stanja.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                 href="tel:0638504589"
                 target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-rose-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-rose-700 transition-all duration-300 shadow-xl shadow-rose-600/30 hover:-translate-y-1"
              >
                <CalendarDays size={20} />
                Zakažite ovaj tretman
              </a>
            </div>
          </FadeIn>
        </div>
      </section >
      

    </main >
  );
}