"use client";
import React, { useEffect, useRef, useState } from "react";

const stats = [
  {
    broj: 20,
    suffix: "+",
    label: "Godina u medicini",
    opis: "Stomatolog od 2006.",
  },
  {
    broj: 5,
    suffix: "+",
    label: "Godina akupunkture",
    opis: "Licencirani akupunkturolog",
  },
  {
    broj: 300,
    suffix: "+",
    label: "Zadovoljnih pacijenata",
    opis: "I taj broj raste svaki dan",
  },
  {
    broj: 6,
    suffix: "",
    label: "Holistička tretmana",
    opis: (
      <>
        Akupunktura, Estetska akupunktura,
        <br />
        Ventuze,
        <br />
        Gua Sha,
        <br />
        Moksibustija, Ušna akupunktura
      </>
    ),
  },
];

function useCounter(target: number, isActive: boolean, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isActive, target, duration]);

  return count;
}

function StatCard({
  broj,
  suffix,
  label,
  opis,
  isActive,
  index,
}: {
  broj: number;
  suffix: string;
  label: string;
  opis: React.ReactNode; // Promenjeno u ReactNode da bi prihvatilo HTML tagove
  isActive: boolean;
  index: number;
}) {
  const count = useCounter(broj, isActive, 1400 + index * 200);

  return (
    <div
      className={`group relative flex flex-col items-center text-center p-8 transition-all duration-700 ease-out ${
        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Vertikalni separator (osim na prvom) */}
      {index !== 0 && (
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-slate-200" />
      )}

      {/* Broj */}
      <div className="flex items-end justify-center gap-1 mb-3">
        <span className="text-6xl lg:text-7xl font-bold text-slate-900 tabular-nums leading-none">
          {count}
        </span>
        <span className="text-3xl font-bold text-red-600 mb-2 leading-none">
          {suffix}
        </span>
      </div>

      {/* Label */}
      <h3 className="text-base font-bold text-slate-800 uppercase tracking-widest mb-2">
        {label}
      </h3>

      {/* Linija dekorativna */}
      <div className="w-8 h-0.5 bg-red-600 rounded-full mb-3 group-hover:w-16 transition-all duration-500" />

      {/* Opis */}
      <p className="text-sm text-slate-500 leading-relaxed max-w-[160px]">
        {opis}
      </p>
    </div>
  );
}

export default function Statistike() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4">

        {/* Gornji label */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
            <span className="w-8 h-px bg-slate-300" />
            Iskustvo koje govori
            <span className="w-8 h-px bg-slate-300" />
          </span>
        </div>

        {/* Grid sa brojevima */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} isActive={isVisible} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}