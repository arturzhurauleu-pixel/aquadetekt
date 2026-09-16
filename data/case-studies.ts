// System realizacji (case studies) — gotowy do wypełnienia prawdziwymi danymi.
// CELOWO pusty: brief wprost zabrania wymyślania realizacji. Dodawaj wpisy tu
// dopiero, gdy masz realny opis zlecenia (zgodę klienta na publikację, zdjęcia,
// pomiary) — struktura poniżej odzwierciedla pełen wymagany zakres pól.

export type CaseStudy = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** Slug usługi, której dotyczy realizacja — patrz data/services.ts */
  relatedServiceSlug: string;
  /** Slug miasta, jeśli realizacja ma sens do powiązania z konkretną lokalizacją */
  relatedCitySlug?: string;
  location: string; // np. "Gdańsk, Wrzeszcz" — tylko ogólny opis, bez pełnego adresu klienta
  buildingType: string; // np. "mieszkanie w bloku z lat 80."
  /** Zanonimizowany opis klienta, jeśli w ogóle podawany — np. "właściciel mieszkania", "wspólnota mieszkaniowa". NIGDY imię/nazwisko/adres/dane kontaktowe. */
  customerContext?: string;
  problem: string;
  symptoms: string[];
  diagnosis: string;
  technology: string[]; // wyłącznie technologie faktycznie użyte w tej realizacji
  solution: string;
  /** Realny czas trwania zlecenia, np. "3 dni robocze" — tylko jeśli potwierdzony, inaczej pomiń pole. */
  duration?: string;
  result: string;
  measurements?: string; // np. wyniki pomiarów wilgotności przed/po — tylko realne dane
  /** Wypełnij TYLKO jeśli w tej konkretnej realizacji faktycznie przygotowano dokumentację dla ubezpieczyciela. */
  insuranceDocumentation?: string;
  photos?: { src: string; alt: string }[]; // realne zdjęcia z realizacji, za zgodą klienta
};

export const caseStudies: CaseStudy[] = [
  // PLACEHOLDER — brak opublikowanych realizacji. Struktura gotowa do wypełnienia
  // po zakończeniu pierwszych zleceń i uzyskaniu zgody klienta na publikację.
  // Wypełniaj WYŁĄCZNIE polami, które są faktycznie potwierdzone — pola opcjonalne
  // (customerContext, duration, measurements, insuranceDocumentation, photos)
  // pomijaj całkowicie, jeśli danej informacji nie masz, zamiast zgadywać.
];
