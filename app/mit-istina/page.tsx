"use client";
import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, ChevronRight, CalendarDays, Brain } from "lucide-react";

const pitanja = [
  {
    id: 1,
    tvrdnja: "Akupunktura je izuzetno bolna",
    odgovor: "MIT",
    objasnjenje:
      "Igle su ekstremno tanke i fleksibilne — potpuno drugačije od medicinskih igala za injekcije. Pacijenti uglavnom osećaju blago peckanje, trnjenje ili toplinu. Taj osećaj se zove De Qi efekat i potvrđuje da je stimulisana prava tačka na telu.",
  },
  {
    id: 2,
    tvrdnja: "Akupunktura deluje samo kao placebo",
    odgovor: "MIT",
    objasnjenje:
      "Studije National Institutes of Health dokazuju merljive biohemijske promene u organizmu. Ključan dokaz: metoda uspešno deluje na životinje i malu decu — kod kojih svesni placebo efekat ne postoji. Stimuliše centralni nervni sistem i oslobađa prirodne analgetike.",
  },
  {
    id: 3,
    tvrdnja: "Akupunktura pomaže isključivo kod hroničnog bola",
    odgovor: "MIT",
    objasnjenje:
      "Opseg delovanja je znatno širi od samog bola. Efikasno redukuje stres, anksioznost i nivo kortizola. Pomaže kod digestivnih problema (nadutost, IBS), ginekoloških smetnji, steriliteta i jačanja imuniteta.",
  },
  {
    id: 4,
    tvrdnja: "Akupunktura isključuje modernu zapadnu medicinu",
    odgovor: "MIT",
    objasnjenje:
      "Akupunktura se danas primenjuje kao komplementarna grana medicine — ne kao zamena. Lekari je često preporučuju uporedo sa fizikalnom terapijom ili standardnim lekovima, a pomaže pacijentima da smanje upotrebu opijata i antiinflamatornih lekova.",
  },
  {
    id: 5,
    tvrdnja: "Akupunkturni tretmani su rizični i nehigijanski",
    odgovor: "MIT",
    objasnjenje:
      "Rizik od infekcija je minimalan. Danas se koriste isključivo sterilne, jednokratne igle od nerđajućeg čelika koje se bacaju odmah nakon upotrebe. Biranje sertifikovanog terapeuta garantuje bezbedan tretman po međunarodnim standardima.",
  },
];

type Izbor = "MIT" | "ISTINA";

export default function Page() {
  const [trenutno, setTrenutno] = useState(0);
  const [odgovori, setOdgovori] = useState<(Izbor | null)[]>(
    Array(pitanja.length).fill(null)
  );
  const [otkriveno, setOtkriveno] = useState(false);
  const [zavrseno, setZavrseno] = useState(false);

  const pitanje = pitanja[trenutno];
  const izabrano = odgovori[trenutno];
  const tacnih = odgovori.filter((o, i) => o === pitanja[i].odgovor).length;

  function handleIzbor(izbor: Izbor) {
    if (otkriveno) return;
    const novi = [...odgovori];
    novi[trenutno] = izbor;
    setOdgovori(novi);
    setOtkriveno(true);
  }

  

  function handleSledece() {
    if (trenutno < pitanja.length - 1) {
      setTrenutno(trenutno + 1);
      setOtkriveno(false);
    } else {
      setZavrseno(true);
    }
  }

  function handleReset() {
    setTrenutno(0);
    setOdgovori(Array(pitanja.length).fill(null));
    setOtkriveno(false);
    setZavrseno(false);
  }

  function getKarticaStil(izbor: Izbor) {
    if (!otkriveno) {
      return "border-slate-200 bg-white hover:border-red-300 hover:shadow-md cursor-pointer";
    }
    const jeTacan = izbor === pitanje.odgovor;
    const jeIzabran = izabrano === izbor;

    if (jeTacan) {
      return "border-emerald-400 bg-emerald-50 shadow-emerald-100 shadow-lg cursor-default";
    }
    if (jeIzabran && !jeTacan) {
      return "border-red-400 bg-red-50 shadow-red-100 shadow-lg cursor-default animate-shake";
    }
    return "border-slate-100 bg-slate-50 opacity-50 cursor-default";
  }

  if (zavrseno) {
    return (
      <main className="min-h-screen bg-slate-900 flex items-center justify-center px-4 py-20">
        <div className="max-w-lg w-full text-center">
          <div className="text-7xl mb-6">
            {tacnih === pitanja.length ? "🏆" : tacnih >= 3 ? "🎯" : "💡"}
          </div>
          <h2 className="text-4xl font-bold text-white mb-3">
            Tačnih odgovora:{" "}
            <span className="text-red-500">{tacnih}/{pitanja.length}</span>
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            {tacnih === pitanja.length
              ? "Savršeno! Već ste dobro upoznati sa akupunkturom."
              : tacnih >= 3
              ? "Dobro poznajete temu! Ostalo ćemo razjasniti na konsultaciji."
              : "Akupunktura krije mnogo iznenađenja. Zakažite konsultaciju i saznajte više!"}
          </p>

          <div className="space-y-3 mb-10">
            {pitanja.map((p, i) => (
              <div
                key={p.id}
                className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 text-left"
              >
                {odgovori[i] === p.odgovor ? (
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                ) : (
                  <XCircle size={18} className="text-red-400 shrink-0" />
                )}
                <span className="text-slate-300 text-sm">{p.tvrdnja}</span>
                <span className="ml-auto text-xs font-bold text-slate-500 shrink-0">
                  {p.odgovor}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleReset}
              className="flex-1 border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all"
            >
              Igraj ponovo
            </button>
            <a
                href="https://www.fresha.com/book-now/aku-nutri-zcaukxar/all-offer?share=true&pId=3049914"
                
                target="_blank"
                rel="noopener noreferrer"
                title="Zakažite pregled i akupunkturu online"
                aria-label="Zakažite pregled online preko platforme"
                className="flex items-center justify-center gap-2 bg-rose-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-rose-700 transition-all duration-300 shadow-xl shadow-rose-600/30 hover:-translate-y-1"
              >
                <CalendarDays size={20} />
                Zakažite online
              </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-900">
      {/* HERO */}
      <section className="relative pt-36 pb-16 px-4 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-red-700/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
            <Brain size={14} className="text-red-400" />
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
              Proverite svoje znanje
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Mit ili <span className="text-red-500">Istina?</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-md mx-auto">
            Koliko zaista znate o akupunkturi? Izaberite odgovor za svaku tvrdnju.
          </p>
        </div>
      </section>

      {/* PROGRESS BAR */}
      <div className="max-w-2xl mx-auto px-4 mb-8">
        <div className="flex justify-between text-xs text-slate-500 mb-2">
          <span>Pitanje {trenutno + 1} od {pitanja.length}</span>
          <span>{Math.round(((trenutno) / pitanja.length) * 100)}% završeno</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-600 rounded-full transition-all duration-500"
            style={{ width: `${(trenutno / pitanja.length) * 100}%` }}
          />
        </div>
      </div>

      {/* KVIZ KARTICA */}
      <section className="max-w-2xl mx-auto px-4 pb-24">
        {/* Tvrdnja */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6 text-center">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 block">
            Tvrdnja
          </span>
          <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
            "{pitanje.tvrdnja}"
          </p>
        </div>

        {/* Dugmad za izbor */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {(["MIT", "ISTINA"] as Izbor[]).map((izbor) => {
            const jeTacan = izbor === pitanje.odgovor;
            const jeIzabran = izabrano === izbor;

            return (
              <button
                key={izbor}
                onClick={() => handleIzbor(izbor)}
                className={`relative rounded-2xl border-2 p-6 text-center transition-all duration-300 ${getKarticaStil(izbor)}`}
              >
                {/* Ikonica posle otkrivanja */}
                {otkriveno && jeTacan && (
                  <CheckCircle2
                    size={22}
                    className="text-emerald-500 mx-auto mb-2"
                  />
                )}
                {otkriveno && jeIzabran && !jeTacan && (
                  <XCircle size={22} className="text-red-500 mx-auto mb-2" />
                )}

                <span
                  className={`text-2xl font-black tracking-widest ${
                    otkriveno && jeTacan
                      ? "text-emerald-700"
                      : otkriveno && jeIzabran && !jeTacan
                      ? "text-red-700"
                      : "text-slate-700"
                  }`}
                >
                  {izbor}
                </span>

                {!otkriveno && (
                  <p className="text-xs text-slate-400 mt-1">
                    {izbor === "MIT"
                      ? "Ova tvrdnja nije tačna"
                      : "Ova tvrdnja je tačna"}
                  </p>
                )}
              </button>
            );
          })}
        </div>

        {/* Objasnjenje - pojavljuje se posle klika */}
        {otkriveno && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6 animate-in fade-in slide-in-from-bottom-2 duration-400">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                ✦ Objašnjenje
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed">{pitanje.objasnjenje}</p>
          </div>
        )}

        {/* Sledece dugme */}
        {otkriveno && (
          <button
            onClick={handleSledece}
            className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-0.5 shadow-xl shadow-red-900/30 animate-in fade-in duration-300"
          >
            {trenutno < pitanja.length - 1 ? (
              <>
                Sledeće pitanje
                <ChevronRight size={20} />
              </>
            ) : (
              <>
                Vidi rezultate
                <ChevronRight size={20} />
              </>
            )}
          </button>
        )}
      </section>
    </main>
  );
}