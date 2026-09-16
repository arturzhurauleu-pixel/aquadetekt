import type { Service } from "./services";

// Dodatkowa usługa long-tail, celowo trzymana osobno od głównej listy /uslugi,
// aby uniknąć duplikacji z lokalizacja-wyciekow — patrz uwaga o kanibalizacji w STRATEGIA-SEO.md
export const lokalizacjaBezKuciaService: Service = {
  slug: "lokalizacja-wyciekow-bez-kucia",
  name: "Lokalizacja wycieków bez kucia",
  shortDescription: "Diagnostyka nieinwazyjna — bez naruszania ścian i posadzek.",
  h1: "Lokalizacja wycieków bez kucia",
  metaTitle: "Lokalizacja wycieków bez kucia — Pomorskie | AquaDetekt",
  metaDescription:
    "Diagnostyka wycieków wody metodami nieinwazyjnymi — bez rozkuwania ścian i posadzek. Sprawdź, kiedy to możliwe.",
  keywords: ["lokalizacja wycieków bez kucia"],
  icon: "search",
};
