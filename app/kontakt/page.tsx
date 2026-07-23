"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Page() {
    const [formData, setFormData] = useState({
        ime: "",
        prezime: "",
        telefon: "",
        email: "",
        poruka: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Slanje nije uspelo");

            setIsSubmitted(true);
            setFormData({ ime: "", prezime: "", telefon: "", email: "", poruka: "" });
        } catch (error) {
            console.error(error);
            alert("Došlo je do greške. Pokušajte ponovo ili nas kontaktirajte telefonom.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // SEO: JSON-LD strukturirani podaci za kontakt stranicu i lokalni biznis
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Kontakt - Dr Košarac",
        "description": "Kontakt stranica i forma za zakazivanje tretmana akupunkture u Novom Sadu.",
        "url": "https://www.drkosarac.rs/kontakt",
        "mainEntity": {
            "@type": "MedicalClinic",
            "name": "Dr Košarac",
            "telephone": "+381638504589",
            "email": "ajkosarac@gmail.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hadži Ruvimova", // Dodaj tačan broj
                "addressLocality": "Novi Sad",
                "postalCode": "21000",
                "addressCountry": "RS"
            }
        }
    };

    return (
        <main className="w-full bg-slate-50">
            
            {/* Ubacivanje strukturiranih podataka za SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />

            {/* HEADER SEKCIJA */}
            <section aria-label="Uvod u kontakt stranicu" className="bg-red-700 relative py-20 md:py-28 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-transparent" />
                <div className="relative max-w-3xl mx-auto">
                    {/* Skriven, ali semantički važan H1 tekst za Google botove */}
                    <span className="inline-flex items-center gap-2 text-black font-semibold tracking-widest uppercase mb-6 text-sm">
                        <span className="w-8 h-px bg-red-400 inline-block" />
                        Kontakt ordinacije u Novom Sadu
                        <span className="w-8 h-px bg-red-400 inline-block" />
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Zakažite svoj termin
                    </h1>
                    <p className="text-slate-300 text-lg max-w-xl mx-auto">
                        Tu sam da odgovorim na sva vaša pitanja i pomognem vam da napravite
                        prvi korak ka prirodnom balansu i zdravlju.
                    </p>
                </div>
            </section>

            {/* GLAVNI SADRŽAJ */}
            <section aria-label="Kontakt informacije i forma za zakazivanje" className="py-20 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
                    {/* LEVA STRANA - KONTAKT INFO */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                            <h2 className="text-2xl font-bold text-medical-dark mb-6">
                                Kontakt informacije
                            </h2>

                            <div className="space-y-6">
                                <a
                                    href="mailto:ajkosarac@gmail.com"
                                    title="Pošaljite nam email"
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="bg-red-50 p-3 rounded-xl group-hover:bg-red-600 transition-colors duration-300">
                                        <Mail className="text-red-600 group-hover:text-white transition-colors duration-300" size={22} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <span className="block text-sm text-slate-500 mb-1">Email</span>
                                        <span className="block font-semibold text-medical-dark group-hover:text-red-600 transition-colors">
                                            ajkosarac@gmail.com
                                        </span>
                                    </div>
                                </a>
                                <a
                                    // SEO: Format telefona prilagođen međunarodnom standardu za mobilne uređaje i crawler-e
                                    href="tel:+381638504589"
                                    title="Pozovite ordinaciju"
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="bg-red-50 p-3 rounded-xl group-hover:bg-red-600 transition-colors duration-300">
                                        <Phone className="text-red-600 group-hover:text-white transition-colors duration-300" size={22} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <span className="block text-sm text-slate-500 mb-1">Telefon</span>
                                        <span className="block font-semibold text-medical-dark group-hover:text-red-600 transition-colors">
                                            063 850 4589
                                        </span>
                                    </div>
                                </a>
                                <a
                                    href="https://maps.google.com/?q=Hadži+Ruvimova+Novi+Sad"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Pronađite nas na Google Mapama"
                                    className="flex items-start gap-4 group cursor-pointer"
                                >
                                    <div className="bg-red-50 p-3 rounded-xl group-hover:bg-red-600 transition-colors duration-300">
                                        <MapPin className="text-red-600 group-hover:text-white transition-colors duration-300" size={22} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <span className="block text-sm text-slate-500 mb-1">Adresa</span>
                                        <span className="block font-semibold text-medical-dark group-hover:text-red-600 transition-colors">
                                            Novi Sad, Hadži Ruvimova
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div> 

                    {/* DESNA STRANA - FORMA */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-slate-100">
                            {isSubmitted ? (
                                <div className="flex flex-col items-center justify-center text-center py-16">
                                    <CheckCircle2 className="text-green-500 mb-4" size={56} aria-hidden="true" />
                                    <h3 className="text-2xl font-bold text-medical-dark mb-2">
                                        Poruka je poslata!
                                    </h3>
                                    <p className="text-slate-500 max-w-sm">
                                        Hvala vam što ste nas kontaktirali. Odgovorićemo vam u
                                        najkraćem mogućem roku.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-6 text-red-600 font-semibold hover:underline"
                                    >
                                        Pošalji još jednu poruku
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <h2 className="text-2xl font-bold text-medical-dark mb-2">
                                        Pošaljite upit
                                    </h2>
                                    <p className="text-slate-500 mb-6">
                                        Popunite formu ispod i javićemo vam se u najkraćem roku.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label
                                                htmlFor="ime"
                                                className="block text-sm font-semibold text-slate-700 mb-2"
                                            >
                                                Ime *
                                            </label>
                                            <input
                                                type="text"
                                                id="ime"
                                                name="ime"
                                                required
                                                // SEO/UX: AutoComplete značajno poboljšava popunjavanje forme
                                                autoComplete="given-name" 
                                                value={formData.ime}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all"
                                                placeholder="Vaše ime"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="prezime"
                                                className="block text-sm font-semibold text-slate-700 mb-2"
                                            >
                                                Prezime *
                                            </label>
                                            <input
                                                type="text"
                                                id="prezime"
                                                name="prezime"
                                                required
                                                autoComplete="family-name"
                                                value={formData.prezime}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all"
                                                placeholder="Vaše prezime"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label
                                                htmlFor="telefon"
                                                className="block text-sm font-semibold text-slate-700 mb-2"
                                            >
                                                Broj telefona *
                                            </label>
                                            <input
                                                type="tel"
                                                id="telefon"
                                                name="telefon"
                                                required
                                                autoComplete="tel"
                                                value={formData.telefon}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all"
                                                placeholder="06X XXX XXXX"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-semibold text-slate-700 mb-2"
                                            >
                                                Email (opciono)
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                autoComplete="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all"
                                                placeholder="vas@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="poruka"
                                            className="block text-sm font-semibold text-slate-700 mb-2"
                                        >
                                            Vaše pitanje ili poruka *
                                        </label>
                                        <textarea
                                            id="poruka"
                                            name="poruka"
                                            required
                                            rows={5}
                                            value={formData.poruka}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all resize-none"
                                            placeholder="Opišite vaše pitanje ili razlog zakazivanja..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        aria-label="Pošalji poruku i zahtev za zakazivanje"
                                        className="group w-full flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all duration-300 shadow-xl hover:shadow-red-600/50 hover:-translate-y-1 disabled:opacity-60 disabled:hover:translate-y-0"
                                    >
                                        {isSubmitting ? (
                                            "Slanje u toku..."
                                        ) : (
                                            <>
                                                <Send size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                                Pošalji poruku
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}