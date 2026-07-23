"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, Droplets, Leaf, Activity, Smile, Eye, Wind, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
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

export default function EstetskaAkupunkturaPage() {

  // --- NIZ SVIH SLIKA ZA HERO SLAJDER ---
  const sveSlike = [
    "https://res.cloudinary.com/duomot4hp/image/upload/v1783253231/images_wq4eu6.jpg",
    "https://res.cloudinary.com/duomot4hp/image/upload/v1783253224/images2_gkhvaa.jpg",
    "https://res.cloudinary.com/duomot4hp/image/upload/v1783253215/333_unmolw.jpg",
  ];

  const slikeSlajdera = sveSlike.slice(0, 2);

  // Logika za HERO slajder
  const [trenutnaSlika, setTrenutnaSlika] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTrenutnaSlika((prev) => (prev === slikeSlajdera.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [slikeSlajdera.length]);

  // --- NIZ SLIKA ZA "PRE I POSLE" SLAJDER ---
  const slikePrePosle = [
    "https://res.cloudinary.com/duomot4hp/image/upload/v1783197480/WhatsApp_Image_2026-07-04_at_22.37.41_jqgpsc.jpg", // Slika 1 (Tvoja)
    "https://res.cloudinary.com/duomot4hp/image/upload/v1783252528/WhatsApp_Image_2026-07-05_at_13.29.41_2_igx2tu.jpg", // Slika 2 (Zameni)
    "https://res.cloudinary.com/duomot4hp/image/upload/v1783252538/WhatsApp_Image_2026-07-05_at_13.29.42_xmik6v.jpg", // Slika 3 (Zameni)
    "https://res.cloudinary.com/duomot4hp/image/upload/v1783252520/WhatsApp_Image_2026-07-05_at_13.29.41_xcyba9.jpg", // Slika 4 (Zameni)
  ];

  // Logika za "PRE I POSLE" slajder (Manuelno listanje)
  const [slajdPrePosle, setSlajdPrePosle] = useState(0);

  const sledeciSlajd = () => {
    setSlajdPrePosle((prev) => (prev === slikePrePosle.length - 1 ? 0 : prev + 1));
  };

  const prethodniSlajd = () => {
    setSlajdPrePosle((prev) => (prev === 0 ? slikePrePosle.length - 1 : prev - 1));
  };

  // Benefiti izvuceni iz tvog teksta
  const benefiti = [
    { naslov: "Cirkulacija i limfa", opis: "Pospešuje mikrocirkulaciju i dubinsku limfnu drenažu lica.", ikona: <Droplets size={24} /> },
    { naslov: "Kolagen i elastin", opis: "Prirodno podstiče proizvodnju kolagena i elastina za jedriju kožu.", ikona: <Sparkles size={24} /> },
    { naslov: "Anti-age efekat", opis: "Smanjuje i uklanja znakove starenja, bore, fine linije i opuštenu kožu.", ikona: <Activity size={24} /> },
    { naslov: "Detoksikacija", opis: "Ubrzava i pospešuje izlučivanje toksina iz potkožnog tkiva.", ikona: <Leaf size={24} /> },
    { naslov: "Relaksacija mišića", opis: "Dubinski relaksira facijalne mišiće i oslobađa od tenzije.", ikona: <Smile size={24} /> },
    { naslov: "Uklanjanje podočnjaka", opis: "Vidno redukuje vrećaste, tamne podočnjake i tragove umora.", ikona: <Eye size={24} /> },
    { naslov: "Smanjenje nadutosti", opis: "Efikasno uklanja nadutost lica i vraća prirodne konture.", ikona: <Wind size={24} /> },
  ];

  return (
    <main className="w-full min-h-screen bg-rose-50/30 pb-0">

      {/* 1. HERO SEKCIJA (Luksuzni tamno-roze gradijent) */}
      <section className="relative pt-36 pb-24 bg-gradient-to-b from-rose-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-rose-900/10 mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Leva strana - Tekst */}
            <div className="w-full lg:w-1/2">
              <FadeIn>
                <span className="text-rose-400 font-bold tracking-widest uppercase mb-4 block text-sm">
                  Kozmetička Akupunktura
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Estetska Akupunktura
                </h1>
                <div className="w-20 h-1 bg-rose-500 rounded-full mb-8"></div>

                <p className="text-xl text-rose-100 font-medium mb-6 leading-relaxed">
                  Prirodnim putem do lepše i mlađe kože lica.
                </p>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  Ovo je potpuno prirodna procedura koja deluje na smanjenje finih linija i bora, revitalizaciju i hidrataciju kože. Popravlja fizički izgled lica, a istovremeno jača zdravlje i budi vašu unutrašnju lepotu.
                </p>
              </FadeIn>
            </div>

            {/* Desna strana - SLAJDER SLIKA */}
            <div className="w-full lg:w-1/2">
              <FadeIn delay="delay-200">
                <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border-4 border-rose-900/30 group">
                  {slikeSlajdera.map((slika, index) => (
                    <img
                      key={index}
                      src={slika}
                      alt={`Estetska akupunktura ${index + 1}`}
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
                        className={`h-2 rounded-full transition-all duration-500 ${index === trenutnaSlika ? "w-8 bg-rose-400" : "w-2 bg-white/50 hover:bg-white"
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

      {/* 2. MEHANIZAM DELOVANJA (Kako funkcioniše) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-50 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 translate-x-1/3 -translate-y-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">

            <div className="w-full lg:w-1/2">
              <FadeIn>
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                  <img src={sveSlike[2]} alt="Autoregeneracija kože" className="w-full h-full object-cover" />
                </div>
              </FadeIn>
            </div>

            <div className="w-full lg:w-1/2">
              <FadeIn delay="delay-100">
                <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                  <Sparkles size={16} /> Prirodni Facelift
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Tajna autoregeneracije</h2>
                <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                  Za razliku od invazivnih estetskih zahvata, kozmetička akupunktura se oslanja na inteligenciju vašeg sopstvenog tela.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Aplikacijom mikro-iglica u kožu lica i vrata, organizam prepoznaje stimulaciju i pokreće moćan proces <strong>autoregeneracije</strong>. Telo odgovara pojačanom cirkulacijom krvi, donoseći kiseonik i nutrijente, dok istovremeno stimuliše fibroblaste na ubrzano <strong>stvaranje novog kolagena i elastina</strong>.
                </p>

                <div className="bg-rose-50 border-l-4 border-rose-400 p-5 rounded-r-2xl">
                  <p className="text-sm text-slate-700 font-medium italic">
                    Rezultat nije samo trenutna zategnutost, već dugoročno poboljšanje strukture, tonusa i zdravlja vaše kože iznutra ka spolja.
                  </p>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 3. VERTIKALNI VIDEO KONTEJNER */}
      <section className="bg-slate-50 py-24 relative z-10 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-rose-600 font-bold uppercase tracking-widest text-sm mb-2 block">Iskustvo tretmana</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Pogledajte proces</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Nežna, potpuno bezbolna i opuštajuća procedura koja budi lepotu vašeg lica.
              </p>
            </div>

            <div className="relative w-full mx-auto max-w-sm aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl shadow-rose-200 border-8 border-white bg-slate-100 transition-all duration-500">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                src="https://res.cloudinary.com/duomot4hp/video/upload/v1783197604/WhatsApp_Video_2026-07-04_at_22.39.37_bvlmmo.mp4"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- 4. INTERAKTIVNI SLAJDER PRE I POSLE --- */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>

            {/* NASLOV */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Pre i posle tretmana
              </h2>
              <div className="w-20 h-1 bg-rose-500 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* KONTEJNER ZA INTERAKTIVNI SLAJDER */}
            <div className="max-w-4xl mx-auto relative group">

              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-rose-200/50 border-4 border-white aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/9] bg-slate-100">

                {/* `.map` METODA ZA RENDER SLIKA */}
                {slikePrePosle.map((slika, index) => (
                  <img
                    key={index}
                    src={slika}
                    alt={`Rezultat ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-contain p-2 md:p-4 transition-opacity duration-700 ease-in-out ${index === slajdPrePosle ? "opacity-100 z-10" : "opacity-0 z-0"
                      }`}
                  />
                ))}

                {/* DUGME ZA LEVO (Sada uvek vidljivo na mobilnom) */}
                <button
                  onClick={prethodniSlajd}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-slate-800 p-2 md:p-3 rounded-full shadow-lg backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                  aria-label="Prethodna slika"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* DUGME ZA DESNO (Sada uvek vidljivo na mobilnom) */}
                <button
                  onClick={sledeciSlajd}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-slate-800 p-2 md:p-3 rounded-full shadow-lg backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                  aria-label="Sledeća slika"
                >
                  <ChevronRight size={24} />
                </button>

                {/* TAČKICE NA DNU SLAJDERA */}
                <div className="absolute bottom-4 md:bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                  {slikePrePosle.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSlajdPrePosle(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 shadow-sm ${index === slajdPrePosle ? "w-8 bg-rose-500" : "w-2.5 bg-slate-300/80 md:bg-white/70 hover:bg-white"
                        }`}
                      aria-label={`Prikaži rezultat ${index + 1}`}
                    />
                  ))}
                </div>

              </div>
            </div>

          </FadeIn>
        </div>
      </section>

      {/* 5. BENEFITI (Grid sa ikonicama) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-rose-50/30">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Kako estetska akupunktura deluje?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Višestruki benefiti koji spajaju kozmetički efekat i dubinsko zdravlje kože.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefiti.map((stavka, index) => (
            <FadeIn key={index} delay={`delay-${(index % 3) * 100}`}>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-rose-200 hover:shadow-md transition-all duration-300 h-full group">
                <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 mb-6 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                  {stavka.ikona}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{stavka.naslov}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {stavka.opis}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 6. SLIKA U PUNOJ ŠIRINI (CTA BANER) */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Parallax Slika */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop')" }}
        ></div>

        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Zablistajte potpuno prirodno.
            </h2>
            <p className="text-lg md:text-xl text-rose-100 mb-10 drop-shadow-md">
              Zakažite svoj tretman estetske akupunkture i dozvolite svojoj koži da se podmladi iznutra.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://www.fresha.com/book-now/aku-nutri-zcaukxar/all-offer?share=true&pId=3049914"

                target="_blank"
                rel="noopener noreferrer"
                title="Zakažite pregled i akupunkturu online"
                aria-label="Zakažite pregled online preko platforme"
                className="flex items-center justify-center gap-2 bg-rose-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-rose-700 transition-all duration-300 shadow-xl shadow-rose-600/30 hover:-translate-y-1"
              >
                <CalendarDays size={20} />
                Zakažite online
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}