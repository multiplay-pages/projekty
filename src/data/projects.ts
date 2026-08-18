import type { Project } from "./project-config";
import giganetPreview from "@/assets/giganet-preview.png";
import gigaboxPreview from "@/assets/gigabox-preview.png";
import biznesPreview from "@/assets/biznes-preview.png";

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
    preview: giganetPreview,
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
    preview: gigaboxPreview,
  },
  {
    id: "3",
    title: "Kalkulator Oferty Biznes 3.1",
    description:
      "Kalkulator oferty Biznes 3.1 do konfiguracji oferty dla małego biznesu z pełną wyceną w cenach NETTO.",
    category: "kalkulatory",
    type: "kalkulator",
    status: "w-budowie",
    tags: ["biznes", "msp", "oferta", "kalkulator"],
    url: "https://multiplay-pages.github.io/malybiznes/",
    featured: true,
    preview: biznesPreview,
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
