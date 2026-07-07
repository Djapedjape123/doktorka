"use client";
import { useEffect, useRef, useState } from "react";


export default function Omeni() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Ovo proverava kada korisnik skroluje do ove sekcije
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Animacija kreće kad se vidi bar 20% sekcije
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="o-meni" 
      ref={sectionRef} 
      className="py-24 bg-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEVA STRANA - SLIKA */}
          <div 
            className={`w-full md:w-1/2 transition-all duration-1000 ease-out transform ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-32 opacity-0"
            }`}
          >
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto md:max-w-none rounded-2xl overflow-hidden shadow-2xl">
              {/* Privremena slika dok doktorka ne pošalje svoju */}
              <img
                src="https://res.cloudinary.com/duomot4hp/image/upload/v1782817691/ChatGPT_Image_30._%D1%98%D1%83%D0%BD_2026._13_16_10_jsy4zc.png"
                alt="Dr Košarac portret"
                className="object-cover w-full h-full"
              />
              
              {/* Dizajnerski detalj (crveni ukrasni okvir iza slike) */}
              <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full border-2 border-red-200 rounded-2xl"></div>
            </div>
          </div>

          {/* DESNA STRANA - TEKST */}
          <div 
            className={`w-full md:w-1/2 transition-all duration-1000 delay-300 ease-out transform ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"
            }`}
          >
            <span className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2 block">
              O Meni
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-medical-dark mb-6 leading-tight">
              Posvećena vašem <br /> prirodnom balansu
            </h2>
            
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              Rođena sam u Splitu, gde sam završila osnovnu školu, a gimnaziju &quot;Svetozar Marković&quot; i Medicinski fakultet, smer stomatologija, završila sam u Novom Sadu 2006. godine. Svoje znanje sam dalje proširila 2009. godine dobila sertifikat o Menadžment u zdravstvu na FON-u Univerziteta u Beogradu.
            </p>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              Put ka holističkom pristupu zdravlju nastavila sam 2021. godine, kada sam završila edukaciju iz akupunkture u međunarodnom udruženju Quanttes u Beogradu. Usavršavala sam se i kroz edukacije iz moksibustije, Gua Sha masaže i ventuza, a trenutno pohađam edukaciju iz nutricionizma kako bih svojim pacijentima pružila još celovitiju negu.
            </p>

            <p className="text-slate-600 mb-10 leading-relaxed">
              I dalje aktivno radim kao stomatolog, a poslednjih pet godina i kao akupunkturolog — spajajući iskustvo savremene medicine sa mudrošću tradicionalnih metoda isceljenja.
            </p>
            
            {/* Potpis ili poseban detalj na dnu */}
            <div className="flex items-center gap-6">
              <div className="w-16 h-[2px] bg-red-600 rounded-full"></div>
              <div>
                <span className="block font-bold text-xl text-medical-dark">Dr Košarac</span>
                <span className="text-sm text-slate-500">Stomatolog i akupunkturolog</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}