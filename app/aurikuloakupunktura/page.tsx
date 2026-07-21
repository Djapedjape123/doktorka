"use client";

import { useEffect, useRef, useState } from "react";
import { Brain, Activity, Shield, Leaf, Heart, Zap, CalendarDays, ChevronLeft, ChevronRight, Ear } from "lucide-react";
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
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${delay} ${className}`}
    >
      {children}
    </div>
  );
}
// ----------------------------------------------------------------------

export default function AurikuloakupunkturaPage() {
  
  // --- NIZ SVIH 7 SLIKA SA CLOUDINARY-JA ---
  // Ovde ćeš ubaciti svoje prave linkove kada ih postaviš na Cloud.
   const sveSlike = [
    "https://res.cloudinary.com/duomot4hp/image/upload/v1783254499/WhatsApp_Image_2026-07-05_at_13.29.41_6_y3crtq.jpg", // 0: Hero Slajder 1
    "https://res.cloudinary.com/duomot4hp/image/upload/v1783254507/WhatsApp_Image_2026-07-05_at_13.29.41_7_ymonqp.jpg", // 1: Hero Slajder 2
    "https://res.cloudinary.com/duomot4hp/image/upload/v1783254488/WhatsApp_Image_2026-07-05_at_13.29.41_5_oy4uvs.jpg", // 2: Slika uz Koncept (Mikrosistem)
    "https://res.cloudinary.com/duomot4hp/image/upload/v1783254477/WhatsApp_Image_2026-07-05_at_13.29.41_4_pkalub.jpg", // 3: Galerija 1
    "https://res.cloudinary.com/duomot4hp/image/upload/v1783254467/WhatsApp_Image_2026-07-05_at_13.29.41_3_pg5umx.jpg", // 4: Galerija 2
    "https://res.cloudinary.com/duomot4hp/image/upload/v1783254458/WhatsApp_Image_2026-07-05_at_13.29.40_1_bt4mv9.jpg", // 5: Galerija 3
    "https://res.cloudinary.com/duomot4hp/image/upload/v1783254450/WhatsApp_Image_2026-07-05_at_13.29.40_lx9zwz.jpg", // 6: Galerija 4
  ];

  // Podela slika
  const slikeHero = sveSlike.slice(0, 2);
  const slikaKoncept = sveSlike[2];
  const slikeGalerija = sveSlike.slice(3, 7);

  // Logika za HERO slajder (Automatski)
  const [trenutniHeroSlajd, setTrenutniHeroSlajd] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTrenutniHeroSlajd((prev) => (prev === slikeHero.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [slikeHero.length]);

  // Logika za GALERIJU (Manuelno listanje za korisnike)
  const [trenutniGalerijaSlajd, setTrenutniGalerijaSlajd] = useState(0);

  const prethodniGalerijaSlajd = () => {
    setTrenutniGalerijaSlajd((prev) => (prev === 0 ? slikeGalerija.length - 1 : prev - 1));
  };

  const sledeciGalerijaSlajd = () => {
    setTrenutniGalerijaSlajd((prev) => (prev === slikeGalerija.length - 1 ? 0 : prev + 1));
  };

  // Indikacije izvucene iz tvog teksta
  const indikacije = [
    { naslov: "Glavobolje i Migrene", opis: "Uspešno ublažavanje tenzionih glavobolja i smanjenje učestalosti migrena.", ikona: <Brain size={24} /> },
    { naslov: "Stres i Anksioznost", opis: "Dubinsko smirenje nervnog sistema kroz stimulaciju specifičnih tačaka na uhu.", ikona: <Activity size={24} /> },
    { naslov: "Bolesti zavisnosti", opis: "Klinički dokazana podrška pri odvikavanju od pušenja i drugih zavisnosti.", ikona: <Shield size={24} /> },
    { naslov: "Regulacija telesne težine", opis: "Pomaže u kontroli apetita i podržava metabolizam u borbi protiv gojaznosti.", ikona: <Heart size={24} /> },
    { naslov: "Alergije i Imunitet", opis: "Jača odbrambeni sistem organizma i pomaže kod sezonskih alergija.", ikona: <Leaf size={24} /> },
    { naslov: "Neuralgije i Paralize", opis: "Efikasna terapija za neuralgiju trigeminusa i paralizu facijalisa.", ikona: <Zap size={24} /> },
  ];

  return (
    <main className="w-full min-h-screen bg-rose-50/30 pb-0">
      
      {/* 1. HERO SEKCIJA (Luksuzni Rose Gradijent) */}
      <section className="relative pt-36 pb-24 bg-gradient-to-b from-rose-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-rose-900/10 mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Leva strana - Tekst */}
            <div className="w-full lg:w-1/2">
              <FadeIn>
                <span className="text-rose-400 font-bold tracking-widest uppercase mb-4 block text-sm">
                  Mikrosistem Organizma
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Aurikuloakupunktura
                </h1>
                <div className="w-20 h-1 bg-rose-500 rounded-full mb-8"></div>
                
                <p className="text-xl text-rose-100 font-medium mb-6 leading-relaxed">
                  Celo ljudsko telo preslikano u malom.
                </p>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  Ušna školjka (aurikula) predstavlja mesto na kome je prikazano celo ljudsko telo u položaju kao što je fetus u materici. Moćna tehnika za uspostavljanje balansa kroz specifične tačke na uhu.
                </p>
              </FadeIn>
            </div>

            {/* Desna strana - HERO SLAJDER */}
            <div className="w-full lg:w-1/2">
              <FadeIn delay="delay-200">
                <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border-4 border-rose-900/30 group">
                  {slikeHero.map((slika, index) => (
                    <img
                      key={index}
                      src={slika}
                      alt={`Aurikuloakupunktura ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                        index === trenutniHeroSlajd 
                          ? "opacity-100 group-hover:scale-105" 
                          : "opacity-0 scale-100" 
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none"></div>

                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                    {slikeHero.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setTrenutniHeroSlajd(index)}
                        className={`h-2 rounded-full transition-all duration-500 ${
                          index === trenutniHeroSlajd ? "w-8 bg-rose-400" : "w-2 bg-white/50 hover:bg-white" 
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

      {/* 2. KONCEPT (Mikrosistem i Meridijani) */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Dekorativni krugovi */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-50 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 translate-x-1/3 -translate-y-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            
            {/* Slika Koncepta (1 slika) */}
            <div className="w-full lg:w-1/2">
              <FadeIn>
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                  <img src={slikaKoncept} alt="Mapa uha i akupunkturne tačke" className="w-full h-full object-cover" />
                </div>
              </FadeIn>
            </div>

            {/* Tekst iz prompta */}
            <div className="w-full lg:w-1/2">
              <FadeIn delay="delay-100">
                <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                  <Ear size={16} /> Susret meridijana
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Mapa vašeg zdravlja u uhu</h2>
                
                <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                  Stari kineski lekari su tvrdili da aurikula predstavlja mesto gde se susreću svi meridijani, gde se sastaju energije celog tela i gde postoji bliski odnos sa unutrašnjim organima.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  To je jedinstveno mesto gde se stimulacijom tačno određenih akupunkturnih tačaka može direktno delovati na svaki organ ili funkciju pojedinog organa. 
                </p>
                
                <div className="bg-rose-50 border-l-4 border-rose-500 p-5 rounded-r-2xl shadow-sm">
                  <p className="text-sm text-slate-700 font-medium">
                    Aurikuloakupunktura se može koristiti kao neverovatno snažna <strong>samostalna metoda</strong>, ali se u praksi vrlo često koristi i kao savršena <strong>dopuna telesnoj akupunkturi</strong> za maksimalne rezultate.
                  </p>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 3. INTERAKTIVNA GALERIJA (Mobilno optimizovan Slajder sa 4 slike) */}
      <section className="py-24 bg-slate-50 relative border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            
            <div className="text-center mb-12">
              <span className="text-rose-600 font-bold uppercase tracking-widest text-sm mb-2 block">Iskustvo</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Pogledajte proces terapije
              </h2>
              <div className="w-20 h-1 bg-rose-500 mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-rose-200/50 border-4 border-white aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/9] bg-white">
                
                {slikeGalerija.map((slika, index) => (
                  <img
                    key={index}
                    src={slika}
                    alt={`Proces aurikuloakupunkture ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-contain p-2 md:p-4 transition-opacity duration-700 ease-in-out ${
                      index === trenutniGalerijaSlajd ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  />
                ))}

                {/* DUGME LEVO (Vidljivo na mobilnom) */}
                <button 
                  onClick={prethodniGalerijaSlajd}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-slate-800 p-2 md:p-3 rounded-full shadow-lg backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                  aria-label="Prethodna slika"
                >
                  <ChevronLeft size={24} />
                </button>
                
                {/* DUGME DESNO (Vidljivo na mobilnom) */}
                <button 
                  onClick={sledeciGalerijaSlajd}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-slate-800 p-2 md:p-3 rounded-full shadow-lg backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                  aria-label="Sledeća slika"
                >
                  <ChevronRight size={24} />
                </button>

                {/* TAČKICE NA DNU */}
                <div className="absolute bottom-4 md:bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                  {slikeGalerija.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setTrenutniGalerijaSlajd(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 shadow-sm ${
                        index === trenutniGalerijaSlajd ? "w-8 bg-rose-500" : "w-2.5 bg-slate-300/80 md:bg-white/70 hover:bg-white" 
                      }`}
                      aria-label={`Prikaži sliku ${index + 1}`}
                    />
                  ))}
                </div>

              </div>
            </div>
            
          </FadeIn>
        </div>
      </section>

      {/* 4. INDIKACIJE (Oboljenja i Stanja - Grid) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-rose-50/30">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">U kojim stanjima pomaže?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Aurikuloakupunktura se izuzetno uspešno primenjuje u terapiji sledećih stanja i oboljenja.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {indikacije.map((stavka, index) => (
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

      {/* 5. POZIV NA AKCIJU (Parallax Slika na celom ekranu) */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Parallax Slika */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop')" }}
        ></div>
        
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Uspostavite balans.
            </h2>
            <p className="text-lg md:text-xl text-rose-100 mb-10 drop-shadow-md">
              Zakažite svoj tretman ušne akupunkture i iskoristite mapu na svom telu za prirodno isceljenje celog organizma.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* rezervqcije */}
              <Link
                href="/kontakt"
                className="flex items-center justify-center gap-2 bg-rose-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-rose-700 transition-all duration-300 shadow-xl shadow-rose-600/30 hover:-translate-y-1"
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