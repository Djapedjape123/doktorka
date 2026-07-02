"use client";

import { useEffect, useRef, useState } from "react";
import { Activity, Heart, Shield, Leaf, AlertTriangle, CalendarDays, Brain, Moon, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

// ----------------------------------------------------------------------
// POMOĆNA KOMPONENTA ZA ANIMACIJU (Fade In na skrol)
// ----------------------------------------------------------------------
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

export default function AkupunkturaPage() {

  // --- LOGIKA ZA SLAJDER ---
  const [trenutnaSlika, setTrenutnaSlika] = useState(0);

  const slikeSlajdera = [
    "https://res.cloudinary.com/duomot4hp/image/upload/v1783014611/istockphoto-1933038371-612x612_h5vpx2.webp",
    "https://res.cloudinary.com/duomot4hp/image/upload/v1783014631/istockphoto-2201174137-612x612_k0v9jb.webp",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTrenutnaSlika((prev) => (prev === slikeSlajdera.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [slikeSlajdera.length]);
  // -------------------------

  // Kategorizovane indikacije sa modernim ikonicama
  const indikacije = [
    { naslov: "Bolovi i zglobovi", opis: "Leđa, vrat, ramena, kolena, išijas, artritis", ikona: <Activity size={24} /> },
    { naslov: "Glava i respiratorni trakt", opis: "Migrene, glavobolje, sinusitis, alergije, astma", ikona: <Brain size={24} /> },
    { naslov: "Mentalno zdravlje", opis: "Nesanica, stres, anksioznost, depresija", ikona: <Moon size={24} /> },
    { naslov: "Žensko zdravlje i hormoni", opis: "Neplodnost, menstrualne i klimakterične tegobe", ikona: <Heart size={24} /> },
    { naslov: "Metabolizam i probava", opis: "Opstipacija, dijareja, gojaznost", ikona: <Leaf size={24} /> },
    { naslov: "Opšti balans", opis: "Imunitet, vitalnost, odvikavanje od pušenja", ikona: <Shield size={24} /> },
  ];

  return (
    <main className="w-full min-h-screen bg-slate-50 pb-0">

      {/* 1. HERO SEKCIJA (Tamna pozadina za Navbar, prelazi u sivu) */}
      <section className="relative pt-36 pb-24 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Leva strana - Tekst */}
            <div className="w-full lg:w-1/2">
              <FadeIn>
                <span className="text-red-400 font-bold tracking-widest uppercase mb-4 block text-sm">
                  Drevna mudrost, savremena medicina
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Akupunktura
                </h1>
                <div className="w-20 h-1 bg-red-500 rounded-full mb-8"></div>

                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  Jedna od najstarijih i najrasprostranjenijih tehnika tradicionalne kineske medicine — stara preko 3000 godina. Zasnovana je na učenju da svako živo biće poseduje životnu energiju, <strong className="text-white">Qi (Či)</strong>, koja neprekidno kruži telom kroz kanale zvane meridijani.
                </p>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  Preciznim ubadanjem sterilnih iglica u akupunkturne tačke, ponovo se uspostavlja slobodan tok vitalne energije. Savremena medicina potvrđuje ovo delovanje kroz stimulaciju nervnog sistema i oslobađanje <strong>endorfina</strong>, koji smanjuju bol i podstiču telo na samoisceljenje.
                </p>

                {/* SZO Boks */}
                <div className="mt-8 bg-slate-800/50 border-l-4 border-red-500 p-4 rounded-r-xl">
                  <p className="text-slate-200 text-sm font-medium leading-relaxed italic">
                    "Svetska zdravstvena organizacija (SZO) zvanično je prihvatila akupunkturu 1979. godine kao legitimnu metodu lečenja, a danas se primenjuje širom sveta."
                  </p>
                </div>
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
                      alt={`Akupunktura tretman slika ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${index === trenutnaSlika
                          ? "opacity-100 group-hover:scale-105"
                          : "opacity-0 scale-100"
                        }`}
                    />
                  ))}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none"></div>

                  {/* Indikatori (Tačkice) na dnu slike */}
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

      {/* 2. KAKO IZGLEDA TRETMAN (Kartice procesa) */}
      <section className="bg-white pt-24 pb-16 border-t border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2 block">Vaše iskustvo</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Kako izgleda tretman?</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Korak 1 */}
            <FadeIn delay="delay-100">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-red-200 transition-all h-full shadow-sm hover:shadow-md">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-red-600 mb-6 shadow-sm">
                  <Sparkles size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Postupak i Osećaj</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Koriste se sterilne metalne iglice, tanke poput vlasi kose. Pacijenti najčešće osećaju lagano peckanje pri ubodu, a potom toplinu, težinu i duboku opuštenost — znak da je tačka aktivirana. <strong>Tretman nije bolan.</strong>
                </p>
              </div>
            </FadeIn>

            {/* Korak 2 */}
            <FadeIn delay="delay-200">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-red-200 transition-all h-full shadow-sm hover:shadow-md">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-red-600 mb-6 shadow-sm">
                  <Clock size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Trajanje seanse</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Iglice se pažljivo postavljaju u precizno određene akupunkturne tačke (kojih na telu ima preko 360). Nakon postavljanja, ostaju da deluju <strong>između 20 i 30 minuta</strong>, tokom kojih pacijent odmara u prijatnom ambijentu.
                </p>
              </div>
            </FadeIn>

            {/* Korak 3 */}
            <FadeIn delay="delay-300">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-red-200 transition-all h-full shadow-sm hover:shadow-md">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-red-600 mb-6 shadow-sm">
                  <CalendarDays size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Broj tretmana</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Određuje se individualno. Najčešće je potrebno <strong>5 do 10 seansi</strong>. Akutna stanja zahtevaju češće dolaske (2-3 puta nedeljno), dok se kod hroničnih tegoba sprovode jednom do dva puta nedeljno.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* --- 3. NOVA VIDEO SEKCIJA --- */}
      <section className="bg-white pb-24 relative z-10 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2 block">Terapija u praksi</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Opuštanje i proces isceljenja</h2>
            </div>

            {/* Kontejner za uspravni (vertikalni) video */}
            <div className="relative w-full mx-auto max-w-sm aspect-[9/16] md:max-w-4xl md:aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-slate-300 border-8 border-white bg-slate-100 transition-all duration-500">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://res.cloudinary.com/duomot4hp/video/upload/v1783018526/8313095-hd_1920_1080_30fps_ylx2sn.mp4" type="video/mp4" />
                Vaš pretraživač ne podržava video format.
              </video>
            </div>
          </FadeIn>
        </div>
      </section>
      {/* ----------------------------- */}

      {/* 4. INDIKACIJE I KONTRAINDIKACIJE */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Leva strana: Indikacije */}
          <div className="w-full lg:w-2/3">
            <FadeIn>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">U kojim stanjima pomaže?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {indikacije.map((stavka, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all">
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
                <p className="text-slate-600 mb-6 text-sm">
                  Akupunktura se <strong>izbegava ili prilagođava</strong> u sledećim stanjima:
                </p>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="w-2 h-2 mt-1.5 rounded-full bg-orange-500 shrink-0"></span>
                    <span>Akutno alkoholisano stanje i akutne psihoze</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="w-2 h-2 mt-1.5 rounded-full bg-orange-500 shrink-0"></span>
                    <span>Stanje ekstremne slabosti i iscrpljenosti</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="w-2 h-2 mt-1.5 rounded-full bg-orange-500 shrink-0"></span>
                    <span>Trudnoća (određene tačke se ne smeju stimulisati) i vreme ciklusa</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="w-2 h-2 mt-1.5 rounded-full bg-orange-500 shrink-0"></span>
                    <span>Pacijenti sa ugrađenim pejsmejkerom</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="w-2 h-2 mt-1.5 rounded-full bg-orange-500 shrink-0"></span>
                    <span>Period nakon velikih doza kortikosteroida ili zračenja</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 5. SLIKA U PUNOJ ŠIRINI (CTA BANER) */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Parallax Slika */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://res.cloudinary.com/duomot4hp/image/upload/v1783014631/istockphoto-2201174137-612x612_k0v9jb.webp')" }}
        ></div>

        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Vratite telu prirodnu ravnotežu.
            </h2>
            <p className="text-lg md:text-xl text-slate-200 mb-10 drop-shadow-md">
              Zakažite vaš tretman akupunkture i dozvolite svom telu da probudi sopstvene mehanizme isceljenja.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="#"
                className="flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all duration-300 shadow-xl shadow-red-600/30 hover:-translate-y-1"
              >
                <CalendarDays size={20} />
                Zakažite online
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}