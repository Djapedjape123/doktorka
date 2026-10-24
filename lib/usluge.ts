export type Usluga = {
  path: string;
  naziv: string;
  // Jedna rečenica preuzeta iz teksta same stranice usluge
  opis: string;
};

export const USLUGE: Usluga[] = [
  {
    path: "/akupunktura",
    naziv: "Akupunktura",
    opis: "Jedna od najstarijih tehnika tradicionalne kineske medicine, stara preko 3000 godina.",
  },
  {
    path: "/aurikuloakupunktura",
    naziv: "Aurikuloakupunktura",
    opis: "Celo ljudsko telo preslikano u malom – balans kroz specifične tačke na uhu.",
  },
  {
    path: "/estetska-akupunktura",
    naziv: "Estetska akupunktura",
    opis: "Prirodnim putem do lepše i mlađe kože lica.",
  },
  {
    path: "/moksibustija",
    naziv: "Moksibustija",
    opis: "Stimulacija akupunkturnih tačaka toplotom koja nastaje upotrebom moksa vune.",
  },
  {
    path: "/ventuze",
    naziv: "Terapija ventuzama",
    opis: "Kontrolisani vakuum koji pokreće cirkulaciju i oslobađa napetost iz mišića.",
  },
  {
    path: "/guasha",
    naziv: "Gua Sha masaža",
    opis: "Drevna kineska metoda masaže za bolju cirkulaciju i smanjenje napetosti mišića.",
  },
];

// Srodni tretmani: akupunktura ↔ aurikuloakupunktura ↔ estetska akupunktura,
// ventuze ↔ Gua Sha ↔ moksibustija
export const SRODNE_USLUGE: Record<string, string[]> = {
  "/akupunktura": ["/aurikuloakupunktura", "/estetska-akupunktura"],
  "/aurikuloakupunktura": ["/akupunktura", "/estetska-akupunktura"],
  "/estetska-akupunktura": ["/akupunktura", "/aurikuloakupunktura"],
  "/ventuze": ["/guasha", "/moksibustija"],
  "/guasha": ["/ventuze", "/moksibustija"],
  "/moksibustija": ["/ventuze", "/guasha"],
};
