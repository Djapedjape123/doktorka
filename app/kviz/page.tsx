import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import KvizClient from "./KvizClient";
import { pitanja, rezultati } from "./podaci";

export const metadata = buildMetadata({
  title: "Kviz: Saznajte svoj energetski balans | Dr Košarac",
  description:
    "Kratak kviz iz tradicionalne kineske medicine – saznajte kakav je vaš energetski balans i koji tretman bi vam mogao pomoći.",
  path: "/kviz",
});

export default function Page() {
  return (
    <>
      <KvizClient />

      {/* Sva pitanja i mogući rezultati u HTML-u (isti nizovi koje koristi kviz), da ih vide i pretraživači */}
      <section aria-labelledby="pitanja-kviza" className="bg-white px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 id="pitanja-kviza" className="text-3xl font-bold text-slate-900 mb-10">
            Pitanja u kvizu
          </h2>
          <div className="space-y-8 mb-20">
            {pitanja.map((p) => (
              <div key={p.id}>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{p.pitanje}</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  {p.odgovori.map((odg) => (
                    <li key={odg.text}>{odg.text}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-10">Mogući rezultati kviza</h2>
          <div className="space-y-10">
            {Object.entries(rezultati).map(([kljuc, res]) => (
              <div key={kljuc}>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{res.naslov}</h3>
                <p className="font-medium text-slate-700 mb-2">{res.podnaslov}</p>
                <p className="text-slate-600 leading-relaxed mb-4">{res.opis}</p>
                <p className="flex flex-wrap gap-x-6 gap-y-2">
                  {res.linkovi.map((link) => (
                    <Link key={link.url} href={link.url} className="text-red-600 font-semibold hover:underline">
                      {link.tekst}
                    </Link>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
