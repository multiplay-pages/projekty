import type { Project } from "./project-config";

export const projects: Project[] = [
  {
    id: "1",
    title: "Kalkulator Oferty GigaNet 3.1",
    description:
      "Interaktywny kalkulator oferty internetu światłowodowego GigaNet 3.1 do szybkiej konfiguracji wariantu i prezentacji ceny.",
    category: "kalkulatory",
    type: "kalkulator",
    status: "aktywny",
    tags: ["internet", "oferta", "kalkulator", "giganet"],
    url: "https://multiplay-pages.github.io/giganet_kalkulator/",
    featured: true,
  },
  {
    id: "2",
    title: "Kalkulator Oferty GigaBOX 3.1",
    description:
      "Kalkulator oferty GigaBOX 3.1 do konfiguracji pakietu internet + TV + telefon z czytelnym podsumowaniem ceny.",
    category: "kalkulatory",
    type: "kalkulator",
    status: "aktywny",
    tags: ["internet", "tv", "telefon", "kalkulator", "gigabox"],
    url: "https://multiplay-pages.github.io/gigabox_kalkulator/",
    featured: true,
  },
  {
    id: "3",
    title: "Projektowana oferta dla małego biznesu",
    description:
      "Projektowana strona ofertowa dla segmentu małego biznesu, rozwijana jako baza do dalszych iteracji.",
    category: "kalkulatory",
    type: "strona",
    status: "w-budowie",
    tags: ["biznes", "msp", "oferta", "sprzedaż"],
    url: "https://multiplay-pages.github.io/malybiznes/",
    featured: true,
  },
  {
    id: "4",
    title: "Procedura potwierdzenia otrzymania wypowiedzenia",
    description:
      "Interaktywna strona z procedurą potwierdzenia otrzymania wypowiedzenia i komunikatami pomocniczymi.",
    category: "procedury",
    type: "strona",
    status: "aktywny",
    tags: ["procedura", "wypowiedzenie", "komunikaty", "obsługa"],
    url: "https://multiplay-pages.github.io/komunikaty-wypowiedzenia/",
    featured: true,
  },
];
