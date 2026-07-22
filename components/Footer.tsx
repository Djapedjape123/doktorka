"use client";

import Link from "next/link";
// 1. Ostavljamo samo obične ikonice u lucide-react
import { Phone, MapPin, Mail } from "lucide-react";

// 2. Dodajemo brend ikonice iz react-icons (koju već imaš)
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
    const tekućaGodina = new Date().getFullYear();

    return (
        <footer className="relative bg-slate-950 text-slate-300 pt-20 pb-10 overflow-hidden">

            {/* 1. DISKRETNI PULSIRAJUĆI GLOW EFEKTI U UGLOVIMA (Poput energije / toplote) */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-600/10 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-900/20 rounded-full mix-blend-screen filter blur-[120px] opacity-40 pointer-events-none translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* GLAVNI GRID: 4 KOLONE */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* KOLONA 1: Brend i Logo sa Pulsirajućim krugom */}
                    <div className="flex flex-col items-start">
                        <Link href="/" className="flex items-center gap-4 group mb-6">
                            {/* Pulsirajući crveni krug */}
                            <div className="relative flex items-center justify-center w-12 h-12">
                                <span className="absolute inset-0 rounded-full border-2 border-red-500 animate-ping opacity-30"></span>
                                <span className="absolute inset-0 rounded-full border border-red-500 opacity-50 group-hover:bg-red-500 transition-colors duration-500"></span>
                                <div className="relative w-9 h-9 bg-slate-900 rounded-full flex items-center justify-center">
                                    {/* Mala ikonica ili slovo D umesto slike */}
                                    <span className="text-red-500 font-bold text-lg group-hover:text-white transition-colors duration-500">D</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tight text-white group-hover:text-red-400 transition-colors">
                                    Dr Košarac
                                </span>
                                <span className="text-xs uppercase tracking-widest text-red-500 font-bold">
                                    Kineska Medicina
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed mb-6">
                            Spoj tradicije duge 3000 godina i savremene integrativne medicine. Pronađite svoj unutrašnji balans i pokrenite proces prirodnog samoisceljenja.
                        </p>
                    </div>

                    {/* KOLONA 2: Brzi Linkovi (Navigacija) */}
                    <div>
                        <h3 className="text-white font-bold tracking-wider uppercase mb-6 flex items-center gap-2">
                            <span className="w-4 h-1 bg-red-600 rounded-full"></span> Brzi Linkovi
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="hover:text-red-400 transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-red-400 after:transition-all after:duration-300">
                                    Početna stranica
                                </Link>
                            </li>
                            <li>
                                <Link href="/cene" className="hover:text-red-400 transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-red-400 after:transition-all after:duration-300">
                                    Cenovnik usluga
                                </Link>
                            </li>
                            <li>
                                <Link href="/kviz" className="hover:text-red-400 transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-red-400 after:transition-all after:duration-300">
                                    Saznajte svoj balans (Kviz)
                                </Link>
                            </li>
                            <li>
                                <Link href="/mit-istina" className="hover:text-red-400 transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-red-400 after:transition-all after:duration-300">
                                    Mitovi i istine
                                </Link>
                            </li>
                            <li>
                                <Link href="/kontakt" className="hover:text-red-400 transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-red-400 after:transition-all after:duration-300">
                                    Kontaktirajte nas
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* KOLONA 3: Naše Usluge */}
                    <div>
                        <h3 className="text-white font-bold tracking-wider uppercase mb-6 flex items-center gap-2">
                            <span className="w-4 h-1 bg-red-600 rounded-full"></span> Usluge
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/akupunktura" className="hover:text-red-400 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-red-500 transition-colors"></span>
                                    Akupunktura
                                </Link>
                            </li>
                            <li>
                                
                                <Link href="/aurikuloakupunktura" className="hover:text-red-400 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-red-500 transition-colors"></span>
                                    Aurikuloakupunktura
                                </Link>
                            </li>
                            <li>
                                <Link href="/estetska-akupunktura" className="hover:text-red-400 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-red-500 transition-colors"></span>
                                    Estetska akupunktura
                                </Link>
                            </li>
                            <li>
                                <Link href="/moksibustija" className="hover:text-red-400 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-red-500 transition-colors"></span>
                                    Moksibustija
                                </Link>
                            </li>
                            <li>
                                <Link href="/ventuze" className="hover:text-red-400 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-red-500 transition-colors"></span>
                                    Ventuze
                                </Link>
                            </li>
                            <li>
                                <Link href="/guasha" className="hover:text-red-400 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-red-500 transition-colors"></span>
                                    Gua Sha
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* KOLONA 4: Kontakt Informacije */}
                    <div>
                        <h3 className="text-white font-bold tracking-wider uppercase mb-6 flex items-center gap-2">
                            <span className="w-4 h-1 bg-red-600 rounded-full"></span> Kontakt
                        </h3>

                        <div className="space-y-4">
                            <a
                                href="https://maps.google.com/?q=Hadži+Ruvimova+Novi+Sad"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-3 hover:text-red-400 transition-colors group"
                            >
                                <MapPin className="text-red-500 shrink-0 mt-1" size={18} />
                                <span className="text-sm">Hadži Ruvimova<br />Novi Sad, Srbija</span>
                            </a>

                            <a
                                href="tel:0638504589"
                                className="flex items-center gap-3 hover:text-red-400 transition-colors group"
                            >
                                <Phone className="text-red-500 shrink-0" size={18} />
                                <span className="text-sm font-semibold tracking-wide">063 850 4589</span>
                            </a>

                            <a
                                href="mailto:ajkosarac@gmail.com"
                                className="flex items-center gap-3 hover:text-red-400 transition-colors group"
                            >
                                <Mail className="text-red-500 shrink-0" size={18} />
                                <span className="text-sm">ajkosarac@gmail.com</span>
                            </a>
                        </div>

                        <div className="mt-6 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                            <span className="block text-xs uppercase text-slate-500 font-bold mb-1">Radno Vreme</span>
                            <span className="block text-sm text-slate-300">Zakazivanje termina po dogovoru.</span>
                        </div>
                    </div>

                </div>

                {/* DONJI DEO (SUB-FOOTER): Copyright, prWeb Dev Credit i Društvene mreže */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-around gap-4">
                    
                    {/* Copyright */}
                    <p className="text-sm text-slate-500 text-center md:text-left">
                        &copy; {tekućaGodina} Dr Košarac - Kineska Medicina. Sva prava zadržana.
                    </p>

                    {/* Developer Credit */}
                    <p className="text-sm text-slate-500 text-center">
                        Development by{" "}
                        <a
                            href="https://www.pedjadev.com/" // ZAMENI OVDE SA LINKOM KA TVOM SAJTU/PORTFOLIJU
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-500 font-semibold hover:text-red-400 hover:underline transition-colors"
                        >
                            prWeb
                        </a>
                    </p>

                    {/* Društvene Mreže */}
                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram profil"
                            className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all duration-300"
                        >
                            <FaInstagram size={18} /> 
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook profil"
                            className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all duration-300"
                        >
                            <FaFacebook size={18} />
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
}