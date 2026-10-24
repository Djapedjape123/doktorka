// Provera SEO osnova za sve rute na pokrenutom serveru (npm run build && npm run start).
//
//   npm run check:seo                       -> http://localhost:3000
//   npm run check:seo -- http://localhost:3100
//
// Očekivani naslovi i opisi su ovde namerno prepisani iz specifikacije, a ne uvezeni iz
// stranica: skripta služi kao regresioni test, pa kad neko promeni title u kodu, ovde pukne.
// Pitanja kvizova se uvoze iz izvora podataka (zato se skripta pokreće sa --experimental-strip-types).

import { pitanja as mitoviPitanja } from "../app/mit-istina/pitanja.ts";
import { pitanja as kvizPitanja, rezultati as kvizRezultati } from "../app/kviz/podaci.ts";

const BASE = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const SITE = "https://www.akunutrinovisad.com";

const PAGES = [
  {
    path: "/",
    title: "Akupunktura Novi Sad – Kineska medicina | Dr Košarac",
    description:
      "Akupunktura i tradicionalna kineska medicina u Novom Sadu. VedaPulse dijagnostika, ventuze, moksibustija, Gua Sha i estetska akupunktura lica.",
  },
  {
    path: "/akupunktura",
    breadcrumb: true,
    title: "Akupunktura Novi Sad – Tretman i cena | Dr Košarac",
    description:
      "Akupunktura u Novom Sadu kod dr Košarac: kako izgleda tretman, koliko traje, u kojim stanjima pomaže i kontraindikacije. Zakažite termin.",
  },
  {
    path: "/aurikuloakupunktura",
    breadcrumb: true,
    title: "Aurikuloakupunktura (ušna akupunktura) Novi Sad | Dr Košarac",
    description:
      "Aurikuloakupunktura – ušna akupunktura u Novom Sadu. Saznajte kako tretman funkcioniše i za šta se koristi. Zakažite termin kod dr Košarac.",
  },
  {
    path: "/estetska-akupunktura",
    breadcrumb: true,
    title: "Estetska akupunktura lica Novi Sad | Dr Košarac",
    description:
      "Estetska akupunktura lica u Novom Sadu – prirodan pristup podmlađivanju kože bez hirurgije. Zakažite tretman kod dr Košarac.",
  },
  {
    path: "/moksibustija",
    breadcrumb: true,
    title: "Moksibustija Novi Sad | Dr Košarac",
    description:
      "Moksibustija u Novom Sadu – tretman toplotom iz tradicionalne kineske medicine. Kako izgleda i kome pomaže. Zakažite kod dr Košarac.",
  },
  {
    path: "/ventuze",
    breadcrumb: true,
    title: "Terapija ventuzama Novi Sad | Dr Košarac",
    description:
      "Vakuum terapija ventuzama u Novom Sadu – za bolove u leđima, napetost mišića i celulit. Zakažite tretman kod dr Košarac.",
  },
  {
    path: "/guasha",
    breadcrumb: true,
    title: "Gua Sha masaža Novi Sad | Dr Košarac",
    description:
      "Gua Sha masaža u Novom Sadu – tradicionalna tehnika za opuštanje mišića i negu lica. Zakažite tretman kod dr Košarac.",
  },
  {
    path: "/cene",
    title: "Cene akupunkture i tretmana – Novi Sad | Dr Košarac",
    description:
      "Cenovnik akupunkture, ventuza, moksibustije, Gua Sha masaže i estetskih paketa u Novom Sadu. Transparentne cene, zakazivanje po dogovoru.",
  },
  {
    path: "/kontakt",
    title: "Kontakt i zakazivanje – Akupunktura Novi Sad | Dr Košarac",
    description:
      "Zakažite termin za akupunkturu u Novom Sadu. Telefon 063 850 4589, email ili kontakt forma. Adresa i mapa ordinacije.",
  },
  {
    path: "/kviz",
    title: "Kviz: Saznajte svoj energetski balans | Dr Košarac",
    description:
      "Kratak kviz iz tradicionalne kineske medicine – saznajte kakav je vaš energetski balans i koji tretman bi vam mogao pomoći.",
  },
  {
    path: "/mit-istina",
    title: "Mitovi i istine o akupunkturi | Dr Košarac",
    description:
      "Da li akupunktura boli? Da li je to samo placebo? Najčešće zablude o akupunkturi i kineskoj medicini – odgovara dr Košarac.",
  },
];

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

const tags = (html, re) => html.match(re) ?? [];
const attr = (tag, name) => {
  const m = tag?.match(new RegExp(`${name}="([^"]*)"`));
  return m ? decode(m[1]) : null;
};
const text = (html) => decode(html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " "));

const results = [];
const descriptions = new Map();

for (const page of PAGES) {
  const fails = [];
  const url = `${BASE}${page.path}`;
  const res = await fetch(url);
  const html = await res.text();
  if (res.status !== 200) fails.push(`HTTP ${res.status}`);

  // Next za početnu generiše URL bez kose crte na kraju (ista adresa kao sa "/")
  const expectedUrl = page.path === "/" ? SITE : `${SITE}${page.path}`;

  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "");
  const titleOk = title === page.title;
  if (!titleOk) fails.push(`title: "${title}"`);

  const description = attr(tags(html, /<meta[^>]+name="description"[^>]*>/g)[0], "content");
  const descOk = description === page.description && description.length <= 160;
  if (!descOk) fails.push(`description: "${description}" (${description?.length})`);
  if (description) descriptions.set(description, [...(descriptions.get(description) ?? []), page.path]);

  const canonicals = tags(html, /<link[^>]+rel="canonical"[^>]*>/g);
  const canonical = attr(canonicals[0], "href");
  const canonOk = canonicals.length === 1 && canonical === expectedUrl;
  if (!canonOk) fails.push(`canonical: ${canonicals.length}x "${canonical}"`);

  const ogUrl = attr(tags(html, /<meta[^>]+property="og:url"[^>]*>/g)[0], "content");
  const ogOk = ogUrl === expectedUrl;
  if (!ogOk) fails.push(`og:url: "${ogUrl}"`);

  const keywordsOk = tags(html, /<meta[^>]+name="keywords"[^>]*>/g).length === 0;
  if (!keywordsOk) fails.push("meta keywords postoji");

  // JSON-LD: validan JSON, LocalBusiness svuda, BreadcrumbList na uslugama
  const blocks = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  const types = [];
  let jsonOk = blocks.length > 0;
  for (const [, raw] of blocks) {
    try {
      const data = JSON.parse(raw);
      types.push(data["@type"]);
      if (data["@context"] !== "https://schema.org") throw new Error("nema @context");
    } catch (e) {
      jsonOk = false;
      fails.push(`JSON-LD nije validan: ${e.message}`);
    }
  }
  if (!types.includes("MedicalBusiness")) {
    jsonOk = false;
    fails.push("nema MedicalBusiness JSON-LD");
  }
  if (page.breadcrumb && !types.includes("BreadcrumbList")) {
    jsonOk = false;
    fails.push("nema BreadcrumbList JSON-LD");
  }

  const h1 = tags(html, /<h1[\s>]/g).length;
  if (h1 !== 1) fails.push(`H1: ${h1}`);

  // Dodatne provere po stranici
  let extra = "";
  const body = text(html);
  if (page.path === "/") {
    const nums = [...html.matchAll(/<span[^>]+tabular-nums[^>]*>(\d+)<\/span>/g)].map((m) => m[1]);
    const ok = nums.join(",") === "20,5,300,6";
    extra = `brojači ${nums.join("/") || "—"}`;
    if (!ok) fails.push(`brojači u HTML-u: ${nums.join(",") || "nema"}`);
  }
  if (page.path === "/mit-istina") {
    const missing = mitoviPitanja.filter((p) => !body.includes(p.tvrdnja) || !body.includes(p.objasnjenje));
    extra = `pitanja ${mitoviPitanja.length - missing.length}/${mitoviPitanja.length}`;
    if (missing.length) fails.push(`nedostaje u HTML-u: ${missing.map((p) => p.id).join(",")}`);
  }
  if (page.path === "/kviz") {
    const missingQ = kvizPitanja.filter((p) => !body.includes(p.pitanje));
    const missingR = Object.values(kvizRezultati).filter((r) => !body.includes(r.opis));
    extra = `pitanja ${kvizPitanja.length - missingQ.length}/${kvizPitanja.length}, rezultati ${Object.keys(kvizRezultati).length - missingR.length}/${Object.keys(kvizRezultati).length}`;
    if (missingQ.length || missingR.length) fails.push("kviz sadržaj nije kompletan u HTML-u");
  }
  if (page.path === "/kontakt" && /TODO/.test(body)) fails.push("na stranici piše TODO");

  results.push({
    page: page.path,
    cells: [titleOk, descOk, canonOk, ogOk, keywordsOk, jsonOk, h1 === 1],
    extra,
    fails,
  });
}

// Jedinstvenost naslova i opisa
const titleCount = new Map();
for (const p of PAGES) titleCount.set(p.title, (titleCount.get(p.title) ?? 0) + 1);
const duplicates = [...titleCount.values()].some((n) => n > 1) || [...descriptions.values()].some((p) => p.length > 1);

const mark = (ok) => (ok ? "✅" : "❌");
const pad = (s, n) => s + " ".repeat(Math.max(0, n - s.length));
console.log(
  `\n${pad("Ruta", 24)}title  desc   canon  og:url no-kw  JSON   H1     dodatno`
);
for (const r of results) {
  console.log(`${pad(r.page, 24)}${r.cells.map((c) => pad(mark(c), 7)).join("")}${r.extra}`);
}

const failed = results.filter((r) => r.fails.length);
if (duplicates) console.log("\n❌ Ima duplih naslova ili opisa između ruta");
for (const r of failed) {
  console.log(`\n❌ ${r.page}`);
  for (const f of r.fails) console.log(`   - ${f}`);
}
console.log(
  failed.length || duplicates
    ? `\nPalo: ${failed.length} ruta${duplicates ? " + duplikati" : ""}`
    : `\nSve prošlo (${results.length} ruta, naslovi i opisi jedinstveni).`
);
process.exit(failed.length || duplicates ? 1 : 0);
