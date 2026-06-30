import Link from "next/link";
import { CalendarDays, Info } from "lucide-react";
import Omeni from "@/components/Omeni";

export default function Home() {
  return (
    
    <main className="w-full overflow-hidden">

      {/* HERO SEKCIJA SA VIDEOM */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">

        {/* Optimizovan Cloudinary Video (ubačeno q_auto,f_auto za brzinu) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full min-h-full object-cover z-0 block"
        >
          <source
            src="https://res.cloudinary.com/duomot4hp/video/upload/q_auto,f_auto/v1782809340/8313072-hd_1920_1080_30fps_kiepbt.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay - crni poluprovidni filter da bi se beli tekst i crvena dugmad savršeno videli */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

        {/* Glavni sadržaj preko videa */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-10">

          <span className="text-red-400 font-semibold tracking-widest uppercase mb-4 drop-shadow-md">
            Vaše telo zaslužuje balans
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Holistički pristup <br className="hidden md:block" /> vašem zdravlju
          </h1>

          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl drop-shadow-md">
            Spoj tradicionalne medicine i savremene dijagnostike.
            Otkrijte koren problema i probudite prirodnu sposobnost tela da se samo isceli.
          </p>

          {/* DUGMIĆI */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

            {/* Primarno dugme (Solid Crveno - Za online zakazivanje) */}
            {/* href je trenutno "#", kasnije ćemo tu ubaciti Fresha link */}
            <Link
              href="#"
              className="group flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all duration-300 shadow-xl hover:shadow-red-600/50 hover:-translate-y-1"
            >
              <CalendarDays size={20} className="group-hover:scale-110 transition-transform" />
              Zakažite online
            </Link>

            {/* Sekundarno dugme (Outline Crveno - Za više informacija) */}
            <Link
              href="#"
              className="flex items-center justify-center gap-2 bg-black/30 backdrop-blur-sm border-2 border-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-600 hover:text-white transition-all duration-300"
            >
              <Info size={20} />
              Više informacija
            </Link>

          </div>
        </div>
      </section>


      <Omeni />
    </main>
  );
}