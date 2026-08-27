import Link from "next/link";
import { CalendarDays, Info } from "lucide-react";
import Omeni from "@/components/Omeni";
import Statistike from "@/components/Statistike";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      {/* HERO SEKCIJA SA VIDEOM */}
      {/* Dodat aria-label za bolje razumevanje semantike bloka */}
      <section
        aria-label="Dobrodošli u ordinaciju Dr Košarac"
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Optimizovan Cloudinary Video */}
        {/* KRITIČNO ZA SEO: Dodat je 'poster' atribut za brži LCP (Largest Contentful Paint) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-video-poster.jpg" // OBAVEZNO: Dodaj sliku prvog frejma videa u public folder
          className="absolute top-0 left-0 w-full h-full min-h-full object-cover z-0 block"
        >
          <source
            src="https://res.cloudinary.com/duomot4hp/video/upload/v1787858732/WhatsApp_Video_2026-08-27_at_20.19.14_qpklcs.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

        {/* Glavni sadržaj preko videa */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-10">

          {/* SEO Optimizovan tekst iznad naslova (sadrži lokalne ključne reči) */}
          <span className="text-red-400 font-semibold tracking-widest uppercase mb-4 drop-shadow-md">
            Kineska tradicionalna medicina u Novom Sadu
          </span>

          {/* H1 OBAVEZNO mora da sadrži glavnu ključnu reč (Akupunktura). */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Akupunktura i holistički pristup <br className="hidden md:block" /> vašem zdravlju
          </h1>

          {/* U paragraf ubačena reč "VedaPulse" koja se traži u niši */}
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl drop-shadow-md">
            Spoj tradicionalne kineske medicine i savremene VedaPulse dijagnostike.
            Otkrijte koren problema i probudite prirodnu sposobnost tela da se samo isceli.
          </p>

          {/* DUGMIĆI */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

            {/* https://www.fresha.com/book-now/aku-nutri-zcaukxar/all-offer?share=true&pId=3049914*/}
            <a
               href="tel:0638504589"
              target="_blank"
              rel="noopener noreferrer"
              title="Zakažite pregled i akupunkturu online"
              aria-label="Zakažite pregled online preko platforme"
              className="group flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all duration-300 shadow-xl hover:shadow-red-600/50 hover:-translate-y-1"
            >
              <CalendarDays size={20} className="group-hover:scale-110 transition-transform" />
              Zakažite tretman
            </a>

            {/* Sekundarno dugme (Formatiran broj u intl format + aria/title) */}
            <a
              href="tel:+381638504589"
              title="Pozovite ordinaciju za više informacija"
              aria-label="Pozovite naš broj telefona za više informacija"
              className="flex items-center justify-center gap-2 bg-black/30 backdrop-blur-sm border-2 border-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-600 hover:text-white transition-all duration-300"
            >
              <Info size={20} />
              Više informacija
            </a>

          </div>
        </div>
      </section>

      <Omeni />
      <Statistike />
    </main>
  );
}