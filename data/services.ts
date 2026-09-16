export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  icon: "wrench" | "droplet" | "wind" | "thermometer" | "search" | "gauge";
  /**
   * Set when this page's commercial intent genuinely duplicates another
   * service (confirmed via SERP audit — see AUDYT-KONCOWY.md, "Cannibalizacja").
   * The page stays live (content/long-tail coverage preserved) but its
   * canonical points to the target, and it is excluded from sitemap.ts as
   * an independent entry so Google consolidates ranking signal there.
   */
  canonicalTargetSlug?: string;
};

export const services: Service[] = [
  {
    slug: "pogotowie-hydrauliczne",
    name: "Pogotowie hydrauliczne",
    shortDescription:
      "Interwencje przy awariach instalacji wodnej i kanalizacyjnej — pęknięte rury, nagłe wycieki, zatory.",
    h1: "Pogotowie hydrauliczne — woj. pomorskie",
    metaTitle: "Pogotowie hydrauliczne — Pomorskie | AquaDetekt",
    metaDescription:
      "Pomagamy w nagłych awariach instalacji wodnych: pęknięte rury, wycieki, zatory. Dojazd na terenie woj. pomorskiego. Sprawdź zakres interwencji.",
    keywords: [
      "pogotowie hydrauliczne",
      "pogotowie hydrauliczne 24h",
      "hydraulik z dojazdem",
      "awaria hydrauliczna",
      "awaria wodna",
      "pęknięta rura",
    ],
    icon: "wrench",
  },
  {
    slug: "lokalizacja-wyciekow",
    name: "Lokalizacja wycieków",
    shortDescription:
      "Wykrywanie ukrytych wycieków wody pod posadzką, w ścianach i w instalacji CO — bez rozkuwania.",
    h1: "Lokalizacja wycieków wody bez kucia",
    metaTitle: "Lokalizacja wycieków wody bez kucia — Pomorskie | AquaDetekt",
    metaDescription:
      "Wykrywamy ukryte wycieki wody pod posadzką, w ścianach i instalacji CO metodami nieinwazyjnymi. Sprawdź, jak wygląda diagnostyka.",
    keywords: [
      "lokalizacja wycieków",
      "lokalizacja wycieków wody",
      "wykrywanie wycieków wody",
      "lokalizacja wycieku",
      "lokalizacja wycieków bez kucia",
      "wycieki pod posadzką",
      "wycieki w ścianach",
      "wycieki z instalacji CO",
    ],
    icon: "search",
  },
  {
    slug: "osuszanie-po-zalaniu",
    name: "Osuszanie po zalaniu",
    shortDescription:
      "Osuszanie ścian, podłóg i posadzek po zalaniu — z pomiarami wilgotności i kontrolą postępu.",
    h1: "Osuszanie po zalaniu — mieszkania i domy",
    metaTitle: "Osuszanie po zalaniu mieszkania i domu — Pomorskie | AquaDetekt",
    metaDescription:
      "Profesjonalne osuszanie ścian, podłóg i posadzek po zalaniu. Pomiary wilgotności, dobór urządzeń, kontrola postępu i ograniczenie ryzyka pleśni.",
    keywords: [
      "osuszanie po zalaniu",
      "osuszanie mieszkań po zalaniu",
      "osuszanie budynków",
      "osuszanie ścian",
      "osuszanie podłóg i posadzek",
      "usuwanie skutków zalania",
      "zalanie mieszkania",
      "zalanie domu",
    ],
    icon: "wind",
  },
  {
    slug: "osuszanie-budynkow",
    name: "Osuszanie budynków",
    shortDescription:
      "Osuszanie wynikające z zawilgocenia budowlanego lub długotrwałej wilgoci — szerszy zakres niż samo osuszanie po zalaniu.",
    h1: "Osuszanie budynków",
    metaTitle: "Osuszanie budynków — Pomorskie | AquaDetekt",
    metaDescription:
      "Osuszanie budynków w przypadkach zawilgocenia budowlanego i długotrwałej wilgoci. Sprawdź, czym różni się od osuszania po zalaniu.",
    keywords: ["osuszanie budynków"],
    icon: "wind",
  },
  {
    slug: "usuwanie-skutkow-zalania",
    name: "Usuwanie skutków zalania",
    shortDescription:
      "Pierwsza faza reakcji na zalanie — zabezpieczenie miejsca, zanim rozpocznie się właściwe osuszanie.",
    h1: "Usuwanie skutków zalania — pierwsza faza reakcji",
    metaTitle: "Usuwanie skutków zalania — pierwszy etap po zalaniu | AquaDetekt",
    metaDescription:
      "Usuwanie skutków zalania to pierwszy etap reakcji na zalanie, poprzedzający właściwe osuszanie. Zobacz pełny opis usługi: osuszanie po zalaniu.",
    keywords: ["usuwanie skutków zalania"],
    icon: "wind",
    // SERP audit: to samo komercyjne zapytanie/CTA co "osuszanie po zalaniu" —
    // ta strona zachowuje treść (long-tail), ale canonical wskazuje na główną usługę.
    canonicalTargetSlug: "osuszanie-po-zalaniu",
  },
  {
    slug: "hydraulik-24h",
    name: "Hydraulik 24h",
    shortDescription: "Hydraulik dostępny poza standardowymi godzinami pracy — wieczorami, w weekendy i przy drobniejszych, pilnych naprawach.",
    h1: "Hydraulik 24h — woj. pomorskie",
    metaTitle: "Hydraulik 24h — dostępność poza godzinami pracy | AquaDetekt",
    metaDescription:
      "Hydraulik dostępny wieczorami, w weekendy i przy drobniejszych, pilnych naprawach na terenie woj. pomorskiego. Sprawdź, kiedy warto skorzystać.",
    keywords: ["hydraulik 24h", "hydraulik z dojazdem", "hydraulik awaryjny", "hydraulik"],
    icon: "wrench",
  },
  {
    slug: "awarie-hydrauliczne",
    name: "Awarie hydrauliczne",
    shortDescription: "Diagnoza i usuwanie awarii instalacji wodnej, kanalizacyjnej i CO.",
    h1: "Awarie hydrauliczne",
    metaTitle: "Awarie hydrauliczne — diagnoza i usuwanie | AquaDetekt",
    metaDescription:
      "Awaria instalacji wodnej, kanalizacyjnej lub centralnego ogrzewania? Sprawdź, jak wygląda diagnoza i usuwanie awarii.",
    keywords: ["awaria hydrauliczna", "awaria instalacji", "awaria wodna"],
    icon: "wrench",
  },
  {
    slug: "wycieki-pod-posadzka",
    name: "Wycieki pod posadzką",
    shortDescription: "Diagnostyka i lokalizacja wycieków w instalacjach prowadzonych pod posadzką.",
    h1: "Wycieki pod posadzką",
    metaTitle: "Wycieki pod posadzką — diagnostyka | AquaDetekt",
    metaDescription:
      "Wyciek wody pod posadzką? Sprawdź objawy i metody lokalizacji bez konieczności rozkuwania całej powierzchni.",
    keywords: ["wycieki pod posadzką", "wyciek pod posadzką"],
    icon: "search",
  },
  {
    slug: "wycieki-w-scianie",
    name: "Wycieki w ścianie",
    shortDescription: "Diagnostyka wycieków ukrytych w warstwach ściennych.",
    h1: "Wycieki w ścianie",
    metaTitle: "Wycieki w ścianie — objawy i diagnostyka | AquaDetekt",
    metaDescription: "Wyciek w ścianie? Sprawdź typowe objawy i jak przebiega lokalizacja bez kucia.",
    keywords: ["wycieki w ścianach", "wyciek w ścianie"],
    icon: "search",
  },
  {
    slug: "wycieki-co",
    name: "Wycieki z instalacji CO",
    shortDescription: "Lokalizacja nieszczelności instalacji centralnego ogrzewania.",
    h1: "Wycieki z instalacji centralnego ogrzewania",
    metaTitle: "Wycieki z instalacji CO — diagnostyka | AquaDetekt",
    metaDescription: "Spadek ciśnienia w instalacji CO? Sprawdź, jak lokalizujemy wycieki w ogrzewaniu.",
    keywords: ["wycieki z instalacji CO", "wyciek CO", "wyciek centralnego ogrzewania"],
    icon: "search",
  },
  {
    slug: "osuszanie-mieszkan",
    name: "Osuszanie mieszkań",
    shortDescription: "Osuszanie mieszkań po zalaniu — ściany, podłogi, zabudowy.",
    h1: "Osuszanie mieszkań po zalaniu",
    metaTitle: "Osuszanie mieszkań po zalaniu — Pomorskie | AquaDetekt",
    metaDescription: "Osuszanie mieszkań po zalaniu — ściany, podłogi i zabudowy meblowe. Sprawdź zakres usługi.",
    keywords: ["osuszanie mieszkań po zalaniu", "osuszanie mieszkania"],
    icon: "wind",
  },
  {
    slug: "osuszanie-domow",
    name: "Osuszanie domów",
    shortDescription: "Osuszanie domów jednorodzinnych po zalaniu lub długotrwałym zawilgoceniu.",
    h1: "Osuszanie domów po zalaniu",
    metaTitle: "Osuszanie domów po zalaniu — Pomorskie | AquaDetekt",
    metaDescription: "Osuszanie domów jednorodzinnych po zalaniu — piwnice, ściany fundamentowe, podłogi.",
    keywords: ["osuszanie domów po zalaniu", "osuszanie domu"],
    icon: "wind",
  },
  {
    slug: "osuszanie-podposadzkowe",
    name: "Osuszanie podposadzkowe",
    shortDescription: "Osuszanie warstw pod posadzką pływającą po awarii lub zalaniu.",
    h1: "Osuszanie podposadzkowe",
    metaTitle: "Osuszanie podposadzkowe — Pomorskie | AquaDetekt",
    metaDescription: "Osuszanie warstw pod posadzką pływającą — jedna z bardziej wymagających form osuszania.",
    keywords: ["osuszanie podposadzkowe", "osuszanie posadzki pływającej"],
    icon: "wind",
  },
  {
    slug: "odgrzybianie",
    name: "Odgrzybianie",
    shortDescription: "Usuwanie pleśni i grzybów powstałych w wyniku zawilgocenia.",
    h1: "Odgrzybianie po zalaniu",
    metaTitle: "Odgrzybianie po zalaniu — Pomorskie | AquaDetekt",
    metaDescription: "Pleśń po zalaniu? Sprawdź, na czym polega odgrzybianie i kiedy warto je wykonać.",
    keywords: ["odgrzybianie", "usuwanie pleśni po zalaniu"],
    icon: "wind",
  },
  {
    slug: "wykrywanie-wyciekow",
    name: "Wykrywanie wycieków — metody i technologie",
    shortDescription:
      "Porównanie metod diagnostycznych (termowizja, korelacja akustyczna, gaz znacznikowy) — samą usługę zamawia się na stronie Lokalizacja wycieków.",
    h1: "Wykrywanie wycieków — metody i technologie",
    metaTitle: "Wykrywanie wycieków — porównanie metod | AquaDetekt",
    metaDescription:
      "Porównanie metod wykrywania wycieków wody: termowizja, korelacja akustyczna, gaz znacznikowy, pomiary wilgotności — mocne strony i ograniczenia każdej z nich.",
    keywords: [
      "wykrywanie wycieków",
      "wykrywanie przecieków",
      "wykrywanie wycieków w ścianach",
      "wykrywanie wycieków pod posadzką",
      "wykrywanie wycieku z CO",
    ],
    icon: "search",
  },
  {
    slug: "termowizja",
    name: "Termowizja",
    shortDescription: "Badania termowizyjne jako element diagnostyki wycieków i strat ciepła.",
    h1: "Termowizja w diagnostyce instalacji i wycieków",
    metaTitle: "Termowizja — badania termowizyjne | AquaDetekt",
    metaDescription:
      "Termowizja jako wsparcie w lokalizacji wycieków i diagnostyce strat ciepła. Sprawdź, jak wygląda badanie i co pokazuje.",
    keywords: ["termowizja", "badanie termowizyjne", "kamera termowizyjna wyciek"],
    icon: "thermometer",
  },
  {
    slug: "pomiary-wilgotnosci",
    name: "Pomiary wilgotności",
    shortDescription: "Pomiary wilgotności ścian i podłóg — przed, w trakcie i po osuszaniu.",
    h1: "Pomiary wilgotności ścian i podłóg",
    metaTitle: "Pomiary wilgotności ścian i podłóg | AquaDetekt",
    metaDescription:
      "Pomiary wilgotności jako podstawa diagnozy zawilgocenia i kontroli procesu osuszania. Sprawdź, jak interpretujemy wyniki.",
    keywords: ["pomiary wilgotności", "wilgotność ścian po zalaniu", "higrometr pomiar"],
    icon: "gauge",
  },
  {
    slug: "proba-szczelnosci",
    name: "Próba szczelności instalacji",
    shortDescription: "Weryfikacja szczelności instalacji wodnej i CO przed odbiorem lub po naprawie.",
    h1: "Próba szczelności instalacji wodnej i CO",
    metaTitle: "Próba szczelności instalacji — Pomorskie | AquaDetekt",
    metaDescription:
      "Próba szczelności instalacji wodnej i centralnego ogrzewania — kiedy jest wymagana i jak przebiega.",
    keywords: ["próba szczelności instalacji", "próba szczelności CO", "próba ciśnieniowa instalacji"],
    icon: "gauge",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
