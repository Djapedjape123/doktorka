import { buildMetadata } from "@/lib/seo";
import MitIstinaKviz from "./MitIstinaKviz";
import { pitanja } from "./pitanja";

export const metadata = buildMetadata({
  title: "Mitovi i istine o akupunkturi | Dr Košarac",
  description:
    "Da li akupunktura boli? Da li je to samo placebo? Najčešće zablude o akupunkturi i kineskoj medicini – odgovara dr Košarac.",
  path: "/mit-istina",
});

export default function Page() {
  return (
    <>
      <MitIstinaKviz />

      {/* Sva pitanja i odgovori u HTML-u (isti niz koji koristi kviz), da ih vide i pretraživači */}
      <section aria-labelledby="svi-mitovi" className="bg-slate-900 border-t border-white/10 px-4 pt-16 pb-24">
        <div className="max-w-2xl mx-auto">
          <h2 id="svi-mitovi" className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            Svi mitovi i istine o akupunkturi
          </h2>
          <div className="space-y-6">
            {pitanja.map((p) => (
              <div key={p.id} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">„{p.tvrdnja}“</h3>
                <p className="text-slate-300 leading-relaxed">
                  <strong className={p.odgovor === "MIT" ? "text-red-400" : "text-emerald-400"}>
                    {p.odgovor === "MIT" ? "Mit." : "Istina."}
                  </strong>{" "}
                  {p.objasnjenje}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
