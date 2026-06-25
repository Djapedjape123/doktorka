"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* LOGO SEKCIJA */}
          <Link href="/" className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-medical-dark">
              Dr Košarac
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-holistic-green -mt-1">
              Holistička Medicina
            </span>
          </Link>

          {/* DESKTOP NAVIGACIJA */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            <Link href="#usluge" className="hover:text-holistic-green transition-colors">
              Usluge
            </Link>
            <Link href="#veda-pulse" className="hover:text-holistic-green transition-colors">
              VedaPulse
            </Link>
            <Link href="#kviz" className="hover:text-holistic-green transition-colors">
              Saznajte svoj balans
            </Link>
            <Link href="#kontakt" className="hover:text-holistic-green transition-colors">
              Kontakt
            </Link>

            {/* Brzi poziv dugme */}
            <a
              href="tel:0638504589"
              className="inline-flex items-center gap-2 bg-holistic-green text-white px-5 py-2.5 rounded-full hover:bg-teal-800 transition-all font-semibold shadow-xs"
            >
              <Phone size={18} />
              <span>063/8504589</span>
            </a>
          </div>

          {/* HAMBURGER DUGME (MOBILNI) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-medical-dark p-2 focus:outline-hidden"
              aria-label="Glavni meni"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILNI MENI */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-4 font-medium shadow-lg animate-fadeIn">
          <Link
            href="#usluge"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-holistic-light hover:text-holistic-green transition-colors"
          >
            Usluge
          </Link>
          <Link
            href="#veda-pulse"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-holistic-light hover:text-holistic-green transition-colors"
          >
            VedaPulse
          </Link>
          <Link
            href="#kviz"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-holistic-light hover:text-holistic-green transition-colors"
          >
            Saznajte svoj balans
          </Link>
          <Link
            href="#kontakt"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-holistic-light hover:text-holistic-green transition-colors"
          >
            Kontakt
          </Link>
          
          {/* Mobilno dugme za poziv */}
          <a
            href="tel:0638504589"
            className="flex items-center justify-center gap-2 bg-holistic-green text-white px-4 py-3 rounded-xl hover:bg-teal-800 transition-all font-semibold text-center w-full shadow-xs"
          >
            <Phone size={18} />
            <span>Pozovite: 063/8504589</span>
          </a>
        </div>
      )}
    </nav>
  );
}