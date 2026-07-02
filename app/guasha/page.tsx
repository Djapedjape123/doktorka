"use client";

import { useEffect, useRef, useState } from "react";
import { Activity, Shield, AlertTriangle, CalendarDays, Sparkles, Droplets, CheckCircle2, Flower2 } from "lucide-react";
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

export default function GuaShaPage() {

    // --- NIZ SVIH SLIKA (4 SLIKE) ---
    const sveSlike = [
        "https://res.cloudinary.com/duomot4hp/image/upload/v1783021732/WhatsApp_Image_2026-07-02_at_21.48.35_voowsq.jpg", // Slika 1 (Slajder)
        "https://res.cloudinary.com/duomot4hp/image/upload/v1783020913/WhatsApp_Image_2026-07-02_at_21.31.37_wzzanq.jpg", // Slika 2 (Slajder)
        "https://res.cloudinary.com/duomot4hp/image/upload/v1783015181/WhatsApp_Image_2026-07-02_at_19.54.25_ehevyz.jpg", // Slika 3 (Lice)
        "https://res.cloudinary.com/duomot4hp/image/upload/v1783015134/WhatsApp_Image_2026-07-02_at_19.55.37_jw34mn.jpg", // Slika 4 (Telo)
    ];

    // Izdvajamo prve dve slike za Slajder
    const slikeSlajdera = sveSlike.slice(0, 2);

    // Logika za slajder
    const [trenutnaSlika, setTrenutnaSlika] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setTrenutnaSlika((prev) => (prev === slikeSlajdera.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(timer);
    }, [slikeSlajdera.length]);
    // -------------------------

    // Kategorizovane indikacije sa modernim ikonicama na osnovu teksta
    const indikacije = [
        { naslov: "Cirkulacija i limfa", opis: "Stimulisanje cirkulacije krvi i dubinska limfna drenaža", ikona: <Droplets size={24} /> },
        { naslov: "Opuštanje mišića", opis: "Smanjenje napetosti u mišićima vrata, leđa i ramena", ikona: <Activity size={24} /> },
        { naslov: "Podmlađivanje (Anti-age)", opis: "Podstiče proizvodnju kolagena, elastina i umanjuje bore", ikona: <Sparkles size={24} /> },
        { naslov: "Svežina lica", opis: "Smanjuje tamne podočnjake, edeme (otoke) i crvenilo", ikona: <Flower2 size={24} /> },
        { naslov: "Detoksikacija", opis: "Oslobađanje toksina iz tela kroz površinu kože", ikona: <Droplets size={24} /> },
        { naslov: "Imunitet i vitalnost", opis: "Jačanje imunološkog sistema i ublažavanje upala", ikona: <Shield size={24} /> },
    ];

    return (
        <main className="w-full min-h-screen bg-slate-50 pb-0">

            {/* 1. HERO SEKCIJA (Tamni gradijent zbog transparentnog Navbar-a) */}
            <section className="relative pt-36 pb-24 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
                <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Leva strana - Tekst */}
                        <div className="w-full lg:w-1/2">
                            <FadeIn>
                                <span className="text-red-400 font-bold tracking-widest uppercase mb-4 block text-sm">
                                    Drevna kineska tehnika
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                    Gua Sha Masaža
                                </h1>
                                <div className="w-20 h-1 bg-red-500 rounded-full mb-8"></div>

                                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                                    Gua Sha je drevna kineska metoda masaže koja je postala popularna širom sveta zbog svojih mnogobrojnih zdravstvenih i kozmetičkih prednosti. Naziv dolazi od reči <strong className="text-white">„gua” (struganje)</strong> i <strong className="text-white">„sha” (crvenilo)</strong>.
                                </p>
                                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                                    Ova tehnika uključuje korišćenje specijalnog alata od žada, rozenkvarca ili drugih kristala za lagano struganje kože radi poboljšanja cirkulacije, smanjenja napetosti mišića i podsticanja dubinske detoksikacije.
                                </p>
                            </FadeIn>
                        </div>

                        {/* Desna strana - SLAJDER SLIKA (Slika 1 i 2) */}
                        <div className="w-full lg:w-1/2">
                            <FadeIn delay="delay-200">
                                <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-black/40 group">

                                    {slikeSlajdera.map((slika, index) => (
                                        <img
                                            key={index}
                                            src={slika}
                                            alt={`Gua Sha terapija ${index + 1}`}
                                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${index === trenutnaSlika
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

            {/* 2. DUALNI FOKUS: LICE vs. TELO (Cik-Cak raspored) */}
            <section className="bg-white py-24 relative overflow-hidden">
                {/* Dekorativni krugovi */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-50 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-50 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 -translate-x-1/3 translate-y-1/3"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">

                    {/* BLOK 1: Gua Sha za Lice (Slika 3 levo, Tekst desno) */}
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <FadeIn>
                                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                                    <img src={sveSlike[2]} alt="Gua Sha masaža lica" className="w-full h-full object-cover" />
                                </div>
                            </FadeIn>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <FadeIn delay="delay-100">
                                <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                                    <Sparkles size={16} /> Kozmetičke svrhe
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Masaža i skulpturisanje lica</h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Gua Sha lica se izvodi glatkim zaobljenim pločicama i rolerima od poludragog kamenja povlačenjem preko akupunkturnih tačaka. Danas je ova metoda izuzetno popularna zbog svojih anti-age efekata.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3"><CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={20} /> <span className="text-slate-700">Učvršćuje facijalne mišiće i poboljšava konture lica i vrata</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={20} /> <span className="text-slate-700">Podstiče prirodnu proizvodnju kolagena i elastina</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={20} /> <span className="text-slate-700">Smanjuje tamne podočnjake, edeme (otoke) i crvenilo</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={20} /> <span className="text-slate-700">Koža izgleda sjajnije, svežije, negovano i podmlađeno</span></li>
                                </ul>
                            </FadeIn>
                        </div>
                    </div>

                    {/* BLOK 2: Gua Sha za Telo (Tekst levo, Slika 4 desno) */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <FadeIn delay="delay-200">
                                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                                    <img src={sveSlike[3]} alt="Gua Sha masaža tela i leđa" className="w-full h-full object-cover" />
                                </div>
                            </FadeIn>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <FadeIn delay="delay-300">
                                <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                                    <Activity size={16} /> Zdravstvene potrebe
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Tradicionalna terapija tela</h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Prvobitno se Gua Sha koristila isključivo za zdravstvene potrebe. Tradicionalno se primenjivala na leđima, vratu i ramenima, uz lagani pritisak alata duž mišića i meridijana.
                                </p>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Nakon struganja kože, često se javlja karakteristično crvenilo poznato kao <strong className="text-slate-800">„sha“</strong>, što je odličan indikator poboljšane cirkulacije i oslobađanja toksina iz dubljih slojeva tkiva.
                                </p>
                                <div className="bg-slate-50 border-l-4 border-red-500 p-4 rounded-r-xl">
                                    <p className="text-sm text-slate-700 font-medium italic">
                                        Studije su pokazale da ova masaža efikasno smanjuje napetost, ublažava simptome bolova u mišićima i zglobovima i jača celokupni imunološki sistem.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. SHOWSTOPPER: VIDEO SEKCIJA */}
            <section className="bg-slate-50 py-24 relative z-10 border-y border-slate-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <div className="text-center mb-10">
                            <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2 block">Iskusite tretman</span>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Pogledajte Gua Sha u praksi</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">Osetite ritam isceljenja: Kako lagani pritisci kristala bude mikrocirkulaciju i donose dubinsko opuštanje.</p>
                        </div>

                        {/* Kontejner za responzivni video (Uspravan na telefonu, Vodoravan na desktopu) */}
                        <div className="relative w-full mx-auto max-w-sm aspect-[9/16] md:max-w-4xl md:aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-slate-300 border-8 border-white bg-slate-100 transition-all duration-500">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                                className="w-full h-full object-cover"
                                /* Prebacili smo src direktno ovde i dodali /f_auto,q_auto/ za optimizaciju */
                                src="https://res.cloudinary.com/duomot4hp/video/upload/f_auto,q_auto/v1783021189/WhatsApp_Video_2026-07-02_at_21.39.07_c4dvgx.mp4"
                            />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 4. INDIKACIJE I KONTRAINDIKACIJE */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Leva strana: Indikacije */}
                    <div className="w-full lg:w-2/3">
                        <FadeIn>
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kome se preporučuje?</h2>
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
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Kada se izbegava?</h3>
                                <p className="text-slate-600 mb-6 text-sm">
                                    Gua Sha je bezbedna metoda, ali se njena primena na određenim delovima tela izbegava u sledećim situacijama:
                                </p>
                                <ul className="space-y-4 text-sm">
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <span className="w-2 h-2 mt-1.5 rounded-full bg-orange-500 shrink-0"></span>
                                        <span>Na mestima gde su prisutne otvorene rane ili opekotine</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <span className="w-2 h-2 mt-1.5 rounded-full bg-orange-500 shrink-0"></span>
                                        <span>Izražene akne, rozacea ili izuzetno osetljivi kapilari</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <span className="w-2 h-2 mt-1.5 rounded-full bg-orange-500 shrink-0"></span>
                                        <span>Lice sa sveže apliciranim filerima ili botoksom (sačekati odobrenje lekara)</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <span className="w-2 h-2 mt-1.5 rounded-full bg-orange-500 shrink-0"></span>
                                        <span>Teški poremećaji koagulacije krvi</span>
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
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop')" }}
                ></div>

                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>

                <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                            Probudite prirodni sjaj.
                        </h2>
                        <p className="text-lg md:text-xl text-slate-200 mb-10 drop-shadow-md">
                            Zakažite Gua Sha tretman lica ili leđa i osetite razliku već nakon prve terapije.
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