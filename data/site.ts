// UWAGA: wszystkie wartości poniżej oznaczone jako PLACEHOLDER muszą zostać
// zastąpione prawdziwymi danymi firmy przed publikacją. Nie wymyślaj danych.

export const site = {
  name: "AquaDetekt",
  legalName: "GEOPOL Sp. z o.o.",
  nip: "5851487499",
  krs: "0000771259",
  regon: "382564778",
  domain: "https://[DOMENA].pl",
  phone: "+48 512 433 421",
  phoneHref: "tel:+48512433421", // PLACEHOLDER
  email: "[EMAIL]",
  address: {
    street: "UL. BOHATERÓW MONTE CASSINO 36 lok. 5",
    city: "Sopot", // np. Gdańsk
    postalCode: "81-759",
    region: "pomorskie",
    country: "PL",
  },
  // Ustaw na true dopiero gdy dostępność 24/7 jest faktycznie potwierdzona
  isAvailable247: false,
  openingHours: "Całodobowo 24/7", // np. "Pon–Pt 7:00–20:00, dyżur telefoniczny całodobowy"
  googleBusinessProfileUrl: "[LINK DO GOOGLE BUSINESS PROFILE]",
  googleMapsEmbedUrl: "[LINK DO MAPY GOOGLE]",
  serviceAreaRegion: "województwo pomorskie",
  yearsOfExperience: null, // PLACEHOLDER — wpisz liczbę tylko jeśli potwierdzona
  socialProof: {
    // Wypełnij tylko realnymi, weryfikowalnymi opiniami. Zostaw pustą tablicę,
    // dopóki nie masz prawdziwych danych — nie generuj fikcyjnych ocen.
    reviews: [] as { author: string; rating: number; text: string }[],
  },
  technologies: {
    // Odznacz (false) każdą technologię, której firma faktycznie nie posiada.
    thermalCamera: true,
    acousticCorrelator: true,
    tracerGas: true,
    moistureMeters: true,
    inspectionCamera: false, // PLACEHOLDER — potwierdź przed publikacją
  },
  insuranceDocumentationHelp: {
    // BUSINESS DATA BLOCKER — patrz AUDYT-KONCOWY.md, sekcja "Business data".
    // `offered` musi zostać ustawione na true wyłącznie po potwierdzeniu, że
    // firma faktycznie pomaga klientom w dokumentacji szkody (np. zdjęcia,
    // pomiary, protokół) dla zgłoszenia do ubezpieczyciela. Dopóki `false`,
    // <InsuranceDocumentationSection> nie renderuje NIC — żadna strona nie
    // sugeruje tej usługi, dopóki nie zostanie to potwierdzone.
    //
    // NIE ustawiaj `offered: true`, jeśli firma:
    // - rozlicza się bezpośrednio z ubezpieczycielem (bezgotówkowo) — to
    //   osobna, dalej idąca usługa, wymagająca osobnego potwierdzenia i
    //   osobnego opisu w `description`;
    // - współpracuje z konkretnymi ubezpieczycielami — nie wymieniaj nazw
    //   bez pisemnego potwierdzenia współpracy.
    offered: false,
    description: "", // PLACEHOLDER — uzupełnij dopiero po ustawieniu offered: true
  },
};

export type Site = typeof site;
