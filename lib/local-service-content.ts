import type { City } from "@/data/cities";

/**
 * Unikalny akapit łączący usługę z lokalnym kontekstem miasta. Treść różni się
 * między miastami dzięki `city.localAngle` (patrz data/cities.ts) — to nie jest
 * jeden szablon z podmienioną nazwą miasta.
 */
export function localServiceIntro(serviceSlug: string, city: City): string {
  switch (serviceSlug) {
    case "pogotowie-hydrauliczne":
      return `Interweniujemy przy nagłych awariach instalacji wodnej, kanalizacyjnej i centralnego ogrzewania ${city.nameLocative}. ${city.localAngle}`;
    case "hydraulik-24h":
      return `Hydraulik dostępny ${city.nameLocative} również poza standardowymi godzinami pracy — wieczorami, w weekendy i przy drobniejszych naprawach, które nie wymagają trybu pogotowia. ${city.localAngle}`;
    case "lokalizacja-wyciekow":
      return `Lokalizujemy ukryte wycieki wody ${city.nameLocative}, w miarę możliwości bez naruszania ścian i posadzek. ${city.localAngle}`;
    case "wykrywanie-wyciekow":
      return `Diagnozujemy przyczynę podejrzewanego wycieku ${city.nameLocative}, dobierając metodę do typu instalacji i dostępności miejsc pomiarowych. ${city.localAngle}`;
    case "osuszanie-po-zalaniu":
      return `Osuszamy mieszkania, domy i budynki po zalaniu ${city.nameLocative}, potwierdzając postęp pomiarami wilgotności zamiast samej oceny wizualnej. ${city.localAngle}`;
    default:
      return city.localAngle;
  }
}

export function localServiceFaqExtra(
  serviceSlug: string,
  city: City
): { question: string; answer: string; learnMoreHref?: string; learnMoreLabel?: string }[] {
  switch (serviceSlug) {
    case "pogotowie-hydrauliczne":
      return [
        {
          question: `Jak szybko dojedziecie ${city.nameLocative} w nagłej sytuacji?`,
          answer: city.distanceNote,
        },
      ];
    case "lokalizacja-wyciekow":
      return [
        {
          question: `Jakie budynki najczęściej wymagają lokalizacji wycieku ${city.nameLocative}?`,
          answer: city.commonIssues[0]
            ? `Najczęściej dotyczy to sytuacji takich jak: ${city.commonIssues[0]}.`
            : `Zakres zależy od typu zabudowy — ustalamy to indywidualnie po zgłoszeniu.`,
        },
      ];
    case "wykrywanie-wyciekow":
      return [
        {
          question: "Czym różni się wykrywanie wycieków od lokalizacji wycieków?",
          answer:
            "Wykrywanie wycieków to same metody diagnostyczne (termowizja, korelacja akustyczna, gaz znacznikowy). Lokalizacja wycieków to usługa jako całość — to tę stronę wybierz, jeśli chcesz od razu umówić wizytę.",
        },
      ];
    case "osuszanie-po-zalaniu":
      return [
        {
          question: `Jak szybko po zalaniu warto rozpocząć osuszanie ${city.nameLocative}?`,
          answer:
            "Zgłoszenie warto wysłać jak najszybciej po zauważeniu zalania — zanim wilgoć wniknie głębiej w ściany i podłogi. Dokładny plan działania, w tym orientacyjny czas rozpoczęcia prac, ustalamy podczas zgłoszenia.",
          learnMoreHref: "/blog/jak-dlugo-trwa-osuszanie-po-zalaniu",
          learnMoreLabel: "Sprawdź, od czego zależy czas osuszania",
        },
      ];
    default:
      return [];
  }
}

/** Meta title/description generator, matching what each dedicated local-service page used. */
export function localServiceMeta(serviceSlug: string, serviceName: string, city: City) {
  switch (serviceSlug) {
    case "pogotowie-hydrauliczne":
      return {
        title: `${serviceName} ${city.nameLocative} — hydraulik 24h | AquaDetekt`,
        description: `${serviceName} ${city.nameLocative} — szybka reakcja na awarie instalacji wodnej i kanalizacyjnej. Sprawdź zakres interwencji.`,
      };
    case "hydraulik-24h":
      return {
        title: `${serviceName} ${city.nameLocative} | AquaDetekt`,
        description: `${serviceName} ${city.nameLocative} — dostępność poza standardowymi godzinami pracy, również przy drobniejszych naprawach.`,
      };
    case "lokalizacja-wyciekow":
      return {
        title: `${serviceName} ${city.nameLocative} — bez kucia | AquaDetekt`,
        description: `${serviceName} ${city.nameLocative}. Diagnostyka nieinwazyjna — termowizja, korelacja akustyczna, gaz znacznikowy.`,
      };
    case "wykrywanie-wyciekow":
      return {
        title: `${serviceName} ${city.nameLocative} | AquaDetekt`,
        description: `${serviceName} ${city.nameLocative} — porównanie metod: termowizja, korelacja akustyczna, gaz znacznikowy, pomiary wilgotności.`,
      };
    case "osuszanie-po-zalaniu":
      return {
        title: `${serviceName} ${city.nameLocative} | AquaDetekt`,
        description: `${serviceName} ${city.nameLocative} — pomiary wilgotności, dobór urządzeń, kontrola postępu osuszania.`,
      };
    default:
      return { title: `${serviceName} ${city.nameLocative}`, description: city.metaDescription };
  }
}
