import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SRODNE_USLUGE, USLUGE } from "@/lib/usluge";

export default function SrodniTretmani({ trenutna }: { trenutna: string }) {
  const srodne = (SRODNE_USLUGE[trenutna] ?? [])
    .map((path) => USLUGE.find((u) => u.path === path))
    .filter((u): u is NonNullable<typeof u> => Boolean(u));

  if (srodne.length === 0) return null;

  return (
    <section aria-labelledby="srodni-tretmani" className="bg-white py-20 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="srodni-tretmani" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
          Srodni tretmani
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
          Pogledajte i druge tretmane tradicionalne kineske medicine u našoj ordinaciji u Novom Sadu. Cene svih
          tretmana možete pronaći u{" "}
          <Link href="/cene" className="text-red-600 font-semibold hover:underline">
            cenovniku
          </Link>
          .
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {srodne.map((usluga) => (
            <Link
              key={usluga.path}
              href={usluga.path}
              className="group block bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-red-200 hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-red-600 transition-colors">
                {usluga.naziv}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">{usluga.opis}</p>
              <span className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm">
                Saznajte više
                <ArrowRight size={16} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
