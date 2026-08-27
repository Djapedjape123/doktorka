"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  // STATE ZA PRAĆENJE SKROLA
  const [isScrolled, setIsScrolled] = useState(false);

  // EFEKAT KOJI SLUŠA SKROLOVANJE
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? "h-20" : "h-24"}`}>
          
         
          <Link href="/" className="flex flex-col">
            <span className={`text-base sm:text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? "text-medical-dark" : "text-red-500"}`}>
             dr Aleksandra Janković Košarac
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-red-500 font-bold -mt-1">
               Kineska tradicionalna medicina
            </span>
          </Link>

          {/* DESKTOP NAVIGACIJA */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            
            {/* USLUGE DROPDOWN */}
            <div className="relative group">
              <button className={`flex items-center gap-1 py-2 transition-colors duration-300 hover:text-red-400 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-red-400 after:transition-all after:duration-300 ${isScrolled ? "text-black" : "text-white"}`}>
                Usluge 
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Padajući meni */}
              <div className="absolute left-0 mt-2 w-60 bg-white border border-slate-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 overflow-hidden">
                <Link href="/akupunktura" className="px-4 py-2.5 text-sm text-black hover:bg-red-50 hover:text-red-400 transition-colors">
                  Akupunktura
                </Link>
                <Link href="/aurikuloakupunktura" className="px-4 py-2.5 text-sm text-black hover:bg-red-50 hover:text-red-400 transition-colors">
                  Aurikuloakupunktura
                </Link>
                <Link href="/estetska-akupunktura" className="px-4 py-2.5 text-sm text-black hover:bg-red-50 hover:text-red-400 transition-colors">
                  Estetska akupunktura
                </Link>
                <Link href="/moksibustija" className="px-4 py-2.5 text-sm text-black hover:bg-red-50 hover:text-red-400 transition-colors">
                  Moksibustija
                </Link>
                <Link href="/ventuze" className="px-4 py-2.5 text-sm text-black hover:bg-red-50 hover:text-red-400 transition-colors">
                  Ventuze
                </Link>
                <Link href="/guasha" className="px-4 py-2.5 text-sm text-black hover:bg-red-50 hover:text-red-400 transition-colors">
                  Gua Sha 
                </Link>
              </div>
            </div>

            <Link href="/kviz" className={`transition-colors duration-300 hover:text-red-400 relative py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-red-400 after:transition-all after:duration-300 ${isScrolled ? "text-black" : "text-white"}`}>
              Saznajte svoj balans
            </Link>

            {/* MIT/ISTINA */}
            <Link href="/mit-istina" className={`transition-colors duration-300 hover:text-red-400 relative py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-red-400 after:transition-all after:duration-300 ${isScrolled ? "text-black" : "text-white"}`}>
              Mit/Istina
            </Link>

            <Link href="/kontakt" className={`transition-colors duration-300 hover:text-red-400 relative py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-red-400 after:transition-all after:duration-300 ${isScrolled ? "text-black" : "text-white"}`}>
              Kontakt
            </Link>
            <Link href="/cene" className={`transition-colors duration-300 hover:text-red-400 relative py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-red-400 after:transition-all after:duration-300 ${isScrolled ? "text-black" : "text-white"}`}>
              Cene
            </Link>

            

            {/* Brzi poziv dugme */}
            <a
              href="tel:0638504589"
              className="inline-flex items-center gap-2 bg-holistic-green text-white px-5 py-2.5 rounded-full hover:bg-teal-800 transition-all font-semibold shadow-xs"
            >
              <Phone size={18} />
              <span>Više informacija</span>
            </a>
          </div>

          {/* HAMBURGER DUGME (MOBILNI) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 focus:outline-none transition-colors duration-300 ${isScrolled ? "text-medical-dark" : "text-white"}`}
              aria-label="Glavni meni"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILNI MENI */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-2 font-medium shadow-lg animate-fadeIn max-h-[85vh] overflow-y-auto">
          
          {/* MOBILNI USLUGE ACCORDION (KLIKABILNO) */}
          <div>
            <button 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center justify-between w-full px-3 py-2 text-left font-bold text-slate-500 uppercase tracking-wider text-sm hover:bg-slate-50 rounded-md transition-colors"
            >
              Usluge
              <ChevronDown size={18} className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            
            {isServicesOpen && (
              <div className="pl-4 mt-1 space-y-1 animate-fadeIn">
                <Link href="/akupunktura" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-black hover:bg-red-50 hover:text-red-400 transition-colors">
                  Akupunktura
                </Link>
                <Link href="/aurikuloakupunktura" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-black hover:bg-red-50 hover:text-red-400 transition-colors">
                  Aurikuloakupunktura
                </Link>
                <Link href="/estetska-akupunktura" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-black hover:bg-red-50 hover:text-red-400 transition-colors">
                  Estetska akupunktura
                </Link>
                <Link href="/moksibustija" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-black hover:bg-red-50 hover:text-red-400 transition-colors">
                  Moksibustija
                </Link>
                <Link href="/ventuze" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-black hover:bg-red-50 hover:text-red-400 transition-colors">
                  Ventuze
                </Link>
                <Link href="/guasha" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-black hover:bg-red-50 hover:text-red-400 transition-colors">
                  Gua Sha
                </Link>
              </div>
            )}
          </div>

          <div className="h-px bg-slate-100 my-2"></div>

          <Link href="/kviz" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-black hover:bg-red-50 hover:text-red-400 transition-colors">
            Saznajte svoj balans
          </Link>
          
          {/* MIT/ISTINA MOBILNI */}
          <Link href="/mit-istina" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-black hover:bg-red-50 hover:text-red-400 transition-colors">
            Mit/Istina
          </Link>
          
          <Link href="/kontakt" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-black hover:bg-red-50 hover:text-red-400 transition-colors">
            Kontakt
          </Link>
          <Link href="/cene" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-black hover:bg-red-50 hover:text-red-400 transition-colors">
            Cene
          </Link>
          
          <div className="pt-4 pb-2">
            <a href="tel:0638504589" className="flex items-center justify-center gap-2 bg-holistic-green text-white px-4 py-3 rounded-xl hover:bg-teal-800 transition-all font-semibold text-center w-full shadow-xs">
              <Phone size={18} />
              <span>Pozovite: 063/8504589</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}