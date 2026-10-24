import Link from "next/link";
import { USLUGE } from "@/lib/usluge";

const linkClass =
  "block rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-slate-200 hover:border-red-400 hover:text-white transition-colors";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-slate-900 to-slate-800 px-4 pt-40 pb-24">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-red-400 font-bold tracking-widest uppercase text-sm mb-4">Greška 404</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Stranica nije pronađena</h1>
        <p className="text-slate-300 text-lg mb-10">
          Stranica koju tražite ne postoji ili je premeštena. Vratite se na početnu stranicu ili izaberite neki od
          tretmana.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:-translate-y-1"
        >
          Nazad na početnu
        </Link>

        <h2 className="text-2xl font-bold text-white mt-16 mb-6">Naše usluge</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          {USLUGE.map((usluga) => (
            <li key={usluga.path}>
              <Link href={usluga.path} className={linkClass}>
                {usluga.naziv}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/cene" className={linkClass}>
              Cenovnik
            </Link>
          </li>
          <li>
            <Link href="/kontakt" className={linkClass}>
              Kontakt i zakazivanje
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
