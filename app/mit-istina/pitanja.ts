// Izvor podataka za kviz (MitIstinaKviz.tsx) i za server-renderovanu listu u page.tsx.

export type Izbor = "MIT" | "ISTINA";

export type Pitanje = {
  id: number;
  tvrdnja: string;
  odgovor: Izbor;
  objasnjenje: string;
};

export const pitanja: Pitanje[] = [
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
