"use client";

import { useEffect, useRef, useState } from "react";
import { Flame, Wind, Activity, Shield, Droplets, Leaf, AlertTriangle, CalendarDays, CheckCircle2, Heart, Moon } from "lucide-react";
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

export default function VentuzePage() {
  
  // --- NIZ SVIH SLIKA (4 SLIKE) ---
  const sveSlike = [
    "https://res.cloudinary.com/duomot4hp/image/upload/v1783102397/ven3_hu5ky0.avif", // Slika 1 (Slajder)
    "https://res.cloudinary.com/duomot4hp/image/upload/v1783102383/ven2_wbjkzh.avif", // Slika 2 (Slajder)
    "https://res.cloudinary.com/duomot4hp/image/upload/v1783102427/ven4_j0hlbn.avif", // Slika 3 (Zdravlje/Leđa)
    "https://res.cloudinary.com/duomot4hp/image/upload/v1783102314/ven_titxag.avif", // Slika 4 (Kozmetika/Celulit)
  ];

  const slikeSlajdera = sveSlike.slice(0, 2);

  // Logika za slajder
  const [trenutnaSlika, setTrenutnaSlika] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTrenutnaSlika((prev) => (prev === slikeSlajdera.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [slikeSlajdera.length]);

  // Kategorizovane indikacije sa modernim ikonicama na osnovu teksta
  const indikacije = [
    { naslov: "Lokomotorni sistem", opis: "Otklanjaju bol u leđima, išijas, bol među lopaticama i u lumbalnom delu.", ikona: <Activity size={24} /> },
    { naslov: "Respiratorni trakt", opis: "Koriste se za lečenje bronhitisa, astme i ublažavanje upalnih procesa.", ikona: <Wind size={24} /> },
    { naslov: "Celulit i mršavljenje", opis: "Umanjuju gojaznost, smanjuju celulit i odstranjuju 'pomorandžinu koru'.", ikona: <Droplets size={24} /> },
    { naslov: "Detoksikacija i metabolizam", opis: "Normalizuju metabolizam, poboljšavaju cirkulaciju i detoksikuju organizam.", ikona: <Leaf size={24} /> },
    { naslov: "Imunitet i vitalnost", opis: "Deluju antivirusno, podižu nivo energije i jačaju opšti imunitet.", ikona: <Shield size={24} /> },
    { naslov: "Mentalno i opšte zdravlje", opis: "Leče nesanicu, smanjuju otoke, digestivne smetnje i podmlađuju kožu.", ikona: <Moon size={24} /> },
  ];

  return (
    <main className="w-full min-h-screen bg-slate-50 pb-0">
      
      {/* 1. HERO SEKCIJA */}
      <section className="relative pt-36 pb-24 bg-gradient-to-b from-teal-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-teal-900/10 mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Leva strana - Tekst */}
            <div className="w-full lg:w-1/2">
              <FadeIn>
                <span className="text-red-400 font-bold tracking-widest uppercase mb-4 block text-sm">
                  Vakuum Terapija (Cupping)
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Terapija Ventuzama
                </h1>
                <div className="w-20 h-1 bg-red-500 rounded-full mb-8"></div>
                
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  Jedna od najpopularnijih metoda alternativnog lečenja u svetu. U drevnoj kineskoj medicini smatra se da telo sadrži meridijane kroz koje protiče <strong className="text-white">vitalna energija "chi"</strong>.
                </p>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  Primenom kontrolisanog vakuuma otvaraju se pore, šire krvni sudovi, razbijaju zastoji u cirkulaciji i konačno izbacuju toksini iz mišića. Ventuze fantastično deluju na <strong className="text-white">"izvlačenje hladnoće"</strong> koja se nakupila u telu.
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
                      alt={`Terapija ventuzama ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                        index === trenutnaSlika 
                          ? "opacity-100 group-hover:scale-105" 
                          : "opacity-0 scale-100" 
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none"></div>

                  {/* Indikatori Slajdera */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                    {slikeSlajdera.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setTrenutnaSlika(index)}
                        className={`h-2 rounded-full transition-all duration-500 ${
                          index === trenutnaSlika ? "w-8 bg-red-500-500" : "w-2 bg-white/50 hover:bg-white" 
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

      {/* 2. KAKO DELUJE VAKUUM (Proces) */}
      <section className="py-24 bg-white relative border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-2 block">Proces Terapije</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Kako izgleda tretman?</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay="delay-100">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 h-full relative overflow-hidden group hover:border-teal-200 transition-colors">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-teal-600 mb-6 shadow-sm">
                  <Flame size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">1. Postavljanje staklenih čaša</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  U najvećem broju slučajeva, staklene čaše se zagrevaju pomoću zapaljene kuglice pamuka namočene u alkohol. Ona sagoreva kiseonik, čime se stvara vakuum. Čaša se zatim brzo priljubi uz određeno područje tela gde povuče kožu.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay="delay-200">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 h-full relative overflow-hidden group hover:border-teal-200 transition-colors">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-teal-600 mb-6 shadow-sm">
                  <Activity size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">2. Delovanje vakuuma</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Dolazi do lokalne staze krvi i kongestije tkiva. Razređivanje krvi pojačava snabdevanje kiseonikom, ubrzava razmenu materija i stimuliše limfodrenažu. Na bolnim mestima, ventuze se ostavljaju duže kako bi efekat bio dublji.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay="delay-300">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 h-full relative overflow-hidden group hover:border-teal-200 transition-colors">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-teal-600 mb-6 shadow-sm">
                  <Shield size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">3. Oporavak nakon tretmana</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Jako je važno da se pacijent nakon tretmana utopli i ne izlaže hladnoći ili previše vlažnim uslovima. Kako su toksini izvučeni na površinu, neophodno je unositi više tečnosti kako bi se putem metabolizma ubrzano izbacili.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. EDUKATIVNI BOKS: DIJAGNOSTIČKA MOĆ (Krugovi) */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative bg-teal-900 rounded-3xl p-8 md:p-12 overflow-hidden shadow-xl text-center">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-teal-500/20 rounded-full mix-blend-screen filter blur-[80px] opacity-60 pointer-events-none translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
              
              <h2 className="relative z-10 text-2xl md:text-3xl font-bold text-white mb-6">Dijagnostička moć "krugova"</h2>
              <p className="relative z-10 text-teal-100 leading-relaxed mb-6 text-lg">
                Nakon terapije, na mestima gde su bile čaše ostaju tamni pečati (koji nestaju za par dana). Ovi tragovi imaju izuzetnu <strong>dijagnostičku svrhu</strong>.
              </p>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="bg-teal-950/50 p-6 rounded-2xl border border-teal-800/50">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-500"></div> Tamna boja pečata</h4>
                  <p className="text-sm text-teal-200">Ukazuje na lošu prokrvljenost u tom delu tela i sugeriše stanje unutrašnjih organa. Na problematičnim mestima stvaraju se najtamnije modrice.</p>
                </div>
                <div className="bg-teal-950/50 p-6 rounded-2xl border border-teal-800/50">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-400"></div> Pojava plikova sa vodom</h4>
                  <p className="text-sm text-teal-200">Neretko mogu nastati sitni plikovi. Laboratorijskom analizom ove tečnosti dokazano je prisustvo toksina i oštećenih krvnih zrnaca koji su izvučeni iz tkiva.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. DUALNI FOKUS: ZDRAVLJE vs. KOZMETIKA */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* BLOK 1: Lokomotorni sistem (Slika 3 levo, Tekst desno) */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <FadeIn>
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                  <img src={sveSlike[2]} alt="Ventuze na leđima" className="w-full h-full object-cover" />
                </div>
              </FadeIn>
            </div>
            <div className="w-full lg:w-1/2">
              <FadeIn delay="delay-100">
                <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                  <Heart size={16} /> Zdravlje leđa i mišića
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Lečenje lokomotornog sistema</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Ova metoda daje izuzetne rezultate kod ukočenih leđa i problema sa zglobovima. Posebno se preporučuje u preventivne svrhe, postavljanjem na akupunkturne tačke koje odgovaraju pojedinačnim organima.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-teal-600 shrink-0 mt-0.5" size={20} /> <span className="text-slate-700">Otklanja bol među lopaticama i u lumbalnom delu</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-teal-600 shrink-0 mt-0.5" size={20} /> <span className="text-slate-700">Olakšava tegobe kod išijasa i teške ukočenosti</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-teal-600 shrink-0 mt-0.5" size={20} /> <span className="text-slate-700">Izvlači "hladnoću" iz tela nakupljenu tokom zimskog perioda</span></li>
                </ul>
              </FadeIn>
            </div>
          </div>

          {/* BLOK 2: Vakuum masaža i Kozmetika (Tekst levo, Slika 4 desno) */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2">
              <FadeIn delay="delay-200">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                  <img src={sveSlike[3]} alt="Vakuum masaža protiv celulita" className="w-full h-full object-cover" />
                </div>
              </FadeIn>
            </div>
            <div className="w-full lg:w-1/2">
              <FadeIn delay="delay-300">
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                  <Droplets size={16} /> Kozmetika i mršavljenje
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Borba sa kilogramima i celulitom</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Vakuum masaža se aktivno primenjuje u kozmetici. Vakuum se stavlja na problematične zone, uključujući zadnjicu, butine i stomak. Duži uticaj ventuza omogućava izravnjavanje potkožnih masnih ćelija.
                </p>
                <div className="bg-white border-l-4 border-orange-500 p-4 rounded-r-xl shadow-sm">
                  <p className="text-sm text-slate-700 font-medium">
                    Stimuliše se dotok krvi do problematičnih mesta, organizam izbacuje višak vode, ubrzava se metabolizam, masno tkivo nestaje, a koža se zateže, čime se uspešno odstranjuje efekat „pomorandžine kore“.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

        </div>
      </section>

      {/* 5. INDIKACIJE I KONTRAINDIKACIJE */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Leva strana: Indikacije */}
          <div className="w-full lg:w-2/3">
            <FadeIn>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">U kojim stanjima pomažu ventuze?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {indikacije.map((stavka, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all">
                    <div className="bg-teal-50 p-3 rounded-xl text-teal-600 shrink-0">
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
                  Ova metoda je sigurna, ali nije preporučljiva i izbegava se u sledećim situacijama:
                </p>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="w-2 h-2 mt-1.5 rounded-full bg-orange-500 shrink-0"></span>
                    <span>Pacijenti sa izrazito visokim temperaturama (groznica).</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="w-2 h-2 mt-1.5 rounded-full bg-orange-500 shrink-0"></span>
                    <span>Prisustvo upaljenih procesa, rana ili opekotina na koži.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="w-2 h-2 mt-1.5 rounded-full bg-orange-500 shrink-0"></span>
                    <span>Osobama koje pate od poremećaja koagulacije ili lako krvare.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 6. SLIKA U PUNOJ ŠIRINI (CTA BANER) */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Parallax Slika */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2000&auto=format&fit=crop')" }}
        ></div>
        
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Oslobodite telo od napetosti.
            </h2>
            <p className="text-lg md:text-xl text-slate-200 mb-10 drop-shadow-md">
              Bilo da tražite rešenje za uporne bolove u leđima ili želite efikasnu borbu protiv celulita, ventuze su pravo rešenje za vas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="#"
                className="flex items-center justify-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-700 transition-all duration-300 shadow-xl shadow-teal-600/30 hover:-translate-y-1"
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