// Jedino mesto gde žive osnovni podaci o sajtu i ordinaciji (NAP).
// Footer, /kontakt i JSON-LD uvoze odavde, da podaci uvek budu identični.

export const SITE_URL = "https://www.akunutrinovisad.com";
export const SITE_NAME = "Dr Košarac";

export const OG_IMAGE = {
  // TODO: zameniti pravom fotografijom ordinacije/tretmana 1200x630 kad bude dostupna
  url: "https://res.cloudinary.com/duomot4hp/image/upload/v1782837198/ChatGPT_Image_30._%D1%98%D1%83%D0%BD_2026._18_40_41_cexbmh.png",
  // Stvarne dimenzije ovog fajla (kvadrat 1254x1254), ne 1200x630
  width: 1254,
  height: 1254,
  alt: "Dr Košarac – akupunktura Novi Sad",
};

const adresa = {
  ulica: "Hadži Ruvimova",
  // TODO: upisati broj ulice (npr. "12"). Dok je prazan, sajt prikazuje samo "Novi Sad, Srbija",
  // a u JSON-LD ide samo naziv ulice. Čim se broj upiše, pun tekst adrese se pojavljuje svuda.
  broj: "",
  postanskiBroj: "21000", // TODO: proveriti
  grad: "Novi Sad",
  drzava: "Srbija",
  drzavaKod: "RS",
};

export const KONTAKT = {
  telefon: "063 850 4589",
  telefonE164: "+381638504589",
  telefonHref: "tel:+381638504589",
  email: "ajkosarac@gmail.com",
  adresa,
  // Ulica sa brojem (ako je broj upisan), za schema.org streetAddress
  adresaUlica: adresa.broj ? `${adresa.ulica} ${adresa.broj}` : adresa.ulica,
  // Tekst adrese koji se prikazuje posetiocima
  adresaTekst: adresa.broj
    ? `${adresa.ulica} ${adresa.broj}, ${adresa.postanskiBroj} ${adresa.grad}`
    : `${adresa.grad}, ${adresa.drzava}`,
  mapaLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    [adresa.ulica, adresa.broj, adresa.grad].filter(Boolean).join(" ")
  )}`,
  // TODO: Google Maps → Podeli → Ugradi mapu → iz iframe-a kopirati vrednost src.
  // Dok je prazno, mapa se na /kontakt ne prikazuje.
  mapaEmbedUrl: "",
};

export const DRUSTVENE_MREZE = {
  instagram: "https://www.instagram.com/akupunktura_novisad_dr_kosarac/",
  facebook: "https://www.facebook.com/aleksandra.kosaracexjankovic",
};
