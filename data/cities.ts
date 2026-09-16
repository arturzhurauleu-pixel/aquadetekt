export type City = {
  slug: string;
  name: string;
  nameLocative: string; // odmiana "w [mieście]" — np. "w Gdańsku"
  tier: 1 | 2; // tier 1 = pełne strony usługowe, tier 2 = jedna zbiorcza strona
  distanceNote: string; // neutralne, prawdziwe zdanie o ustalaniu dojazdu — bez konkretnych czasów/odległości, dopóki brak zweryfikowanych danych logistycznych; można nadpisać realnym opisem, gdy takie dane będą dostępne
  districts?: string[]; // tylko tam, gdzie to naturalne (duże miasta)
  localAngle: string; // unikalny akapit kontekstowy — NIE kopiować między miastami
  commonIssues: string[]; // najczęstsze awarie/konteksty specyficzne dla miasta
  metaTitle: string;
  metaDescription: string;
  /**
   * Slugi usług, dla których to miasto ma DEDYKOWANĄ podstronę usługowo-lokalną
   * (np. "pogotowie-hydrauliczne" → literalny folder /pogotowie-hydrauliczne-gdansk/).
   * Puste = miasto ma tylko zbiorczą stronę hub /hydraulik-{slug}/ (literalny folder) — celowo, aby
   * uniknąć dziesiątek niskiej jakości stron (zob. STRATEGIA-SEO.md, sekcja o kanibalizacji).
   */
  localServicePages: string[];
};

export const cities: City[] = [
  {
    slug: "gdansk",
    name: "Gdańsk",
    nameLocative: "w Gdańsku",
    tier: 1,
    distanceNote: "Dokładny czas dojazdu do Gdańska ustalamy telefonicznie podczas zgłoszenia — zależy on od konkretnej dzielnicy oraz bieżącego obciążenia zespołu.",
    districts: [
      "Wrzeszcz",
      "Oliwa",
      "Przymorze",
      "Zaspa",
      "Morena",
      "Chełm",
      "Ujeścisko",
      "Orunia",
      "Śródmieście",
      "Jasień",
      "Osowa",
    ],
    localAngle:
      "Gdańsk to mieszanka starej zabudowy śródmieścia i nowszych osiedli na Ujeścisku czy Jasieniu — instalacje różnią się wiekiem i materiałem, co ma znaczenie przy wyborze metody lokalizacji wycieku.",
    commonIssues: [
      "wycieki w starszych kamienicach (Śródmieście, Wrzeszcz) — instalacje z rur stalowych, częstsze korozje",
      "zalania piwnic w budynkach niżej położonych (rejony bliżej wody)",
      "awarie w nowszych blokach (Ujeścisko, Jasień) — częściej instalacje podposadzkowe",
    ],
    metaTitle: "Hydraulik 24h i lokalizacja wycieków — Gdańsk | AquaDetekt",
    metaDescription:
      "Pogotowie hydrauliczne, lokalizacja wycieków bez kucia i osuszanie po zalaniu w Gdańsku. Sprawdź dzielnice objęte obsługą i zakres usług.",
    localServicePages: [
      "pogotowie-hydrauliczne",
      "hydraulik-24h",
      "lokalizacja-wyciekow",
      "wykrywanie-wyciekow",
      "osuszanie-po-zalaniu",
    ],
  },
  {
    slug: "gdynia",
    name: "Gdynia",
    nameLocative: "w Gdyni",
    tier: 1,
    distanceNote: "Czas dojazdu do Gdyni potwierdzamy w rozmowie telefonicznej, biorąc pod uwagę lokalizację zgłoszenia i aktualną dostępność ekipy.",
    localAngle:
      "Gdynia to duży udział zabudowy z okresu międzywojennego oraz nowoczesnych apartamentowców w rejonie nadmorskim — w obu przypadkach częstym problemem są ukryte wycieki w instalacjach prowadzonych w podłodze.",
    commonIssues: [
      "wycieki w instalacjach podposadzkowych nowszych apartamentowców",
      "zawilgocenia ścian w starszym budownictwie śródmiejskim",
    ],
    metaTitle: "Hydraulik 24h i lokalizacja wycieków — Gdynia | AquaDetekt",
    metaDescription:
      "Pogotowie hydrauliczne, lokalizacja wycieków i osuszanie po zalaniu w Gdyni. Sprawdź zakres usług i obszar dojazdu.",
    localServicePages: ["pogotowie-hydrauliczne", "lokalizacja-wyciekow", "osuszanie-po-zalaniu"],
  },
  {
    slug: "sopot",
    name: "Sopot",
    nameLocative: "w Sopocie",
    tier: 1,
    distanceNote: "Termin i orientacyjny czas dojazdu do Sopotu ustalamy indywidualnie przy zgłoszeniu — zadzwoń, aby to sprawdzić.",
    localAngle:
      "W Sopocie dominuje zabudowa willowa i kamienice z przełomu XIX i XX wieku — przy tego typu budynkach lokalizacja wycieku bez naruszania elewacji czy sztukaterii ma szczególne znaczenie.",
    commonIssues: [
      "wycieki w starych instalacjach willowych budynków",
      "zawilgocenia piwnic w budynkach blisko linii brzegowej",
    ],
    metaTitle: "Hydraulik 24h i lokalizacja wycieków — Sopot | AquaDetekt",
    metaDescription:
      "Pogotowie hydrauliczne, lokalizacja wycieków bez kucia i osuszanie po zalaniu w Sopocie. Sprawdź zakres usług.",
    localServicePages: ["pogotowie-hydrauliczne", "lokalizacja-wyciekow", "osuszanie-po-zalaniu"],
  },
  {
    slug: "pruszcz-gdanski",
    name: "Pruszcz Gdański",
    nameLocative: "w Pruszczu Gdańskim",
    tier: 2,
    distanceNote: "Czas dojazdu do Pruszcza Gdańskiego wyceniamy podczas rozmowy telefonicznej, w zależności od bieżącej liczby zgłoszeń.",
    localAngle:
      "Pruszcz Gdański rozwija się dynamicznie jako zaplecze mieszkaniowe aglomeracji trójmiejskiej — sporo tu stosunkowo nowej zabudowy, gdzie najczęstszą przyczyną wycieków są usterki montażowe instalacji podposadzkowej.",
    commonIssues: ["usterki montażowe w nowym budownictwie", "awarie przyłączy wodnych"],
    metaTitle: "Hydraulik i lokalizacja wycieków — Pruszcz Gdański | AquaDetekt",
    metaDescription:
      "Pogotowie hydrauliczne, lokalizacja wycieków i osuszanie po zalaniu w Pruszczu Gdańskim i okolicy.",
  localServicePages: [],
  },
  {
    slug: "rumia",
    name: "Rumia",
    nameLocative: "w Rumi",
    tier: 2,
    distanceNote: "Orientacyjny czas dojazdu do Rumi podajemy telefonicznie po przyjęciu zgłoszenia — zależy on od aktualnej sytuacji zespołu.",
    localAngle:
      "Rumia łączy starsze budownictwo jednorodzinne z nowymi osiedlami deweloperskimi — obsługujemy oba typy zabudowy, dobierając metodę lokalizacji wycieku do rodzaju instalacji.",
    commonIssues: ["awarie w domach jednorodzinnych", "wycieki w nowych osiedlach deweloperskich"],
    metaTitle: "Hydraulik i lokalizacja wycieków — Rumia | AquaDetekt",
    metaDescription: "Pogotowie hydrauliczne, lokalizacja wycieków i osuszanie po zalaniu w Rumi.",
  localServicePages: [],
  },
  {
    slug: "reda",
    name: "Reda",
    nameLocative: "w Redzie",
    tier: 2,
    distanceNote: "Czas potrzebny na dojazd do Redy ustalamy na bieżąco podczas zgłoszenia telefonicznego.",
    localAngle:
      "W Redzie przeważa zabudowa jednorodzinna — najczęstszym zgłoszeniem jest lokalizacja wycieku w instalacji zewnętrznej lub przyłączu wodnym.",
    commonIssues: ["wycieki przyłączy zewnętrznych", "awarie instalacji w domach jednorodzinnych"],
    metaTitle: "Hydraulik i lokalizacja wycieków — Reda | AquaDetekt",
    metaDescription: "Pogotowie hydrauliczne, lokalizacja wycieków i osuszanie po zalaniu w Redzie.",
  localServicePages: [],
  },
  {
    slug: "wejherowo",
    name: "Wejherowo",
    nameLocative: "w Wejherowie",
    tier: 2,
    distanceNote: "Dokładny czas dojazdu do Wejherowa potwierdzamy w trakcie rozmowy telefonicznej — zależy od dostępności ekipy w danym momencie.",
    localAngle:
      "Wejherowo jako lokalny ośrodek powiatowy ma zróżnicowaną zabudowę — od starówki po nowe osiedla, co wymaga elastycznego doboru metod diagnostyki wycieków.",
    commonIssues: ["wycieki w starszej zabudowie centrum", "awarie w blokach z lat 70./80."],
    metaTitle: "Hydraulik i lokalizacja wycieków — Wejherowo | AquaDetekt",
    metaDescription: "Pogotowie hydrauliczne, lokalizacja wycieków i osuszanie po zalaniu w Wejherowie.",
  localServicePages: [],
  },
  {
    slug: "tczew",
    name: "Tczew",
    nameLocative: "w Tczewie",
    tier: 2,
    distanceNote: "Termin przyjazdu do Tczewa ustalamy indywidualnie przy zgłoszeniu, uwzględniając bieżące obciążenie zespołu.",
    localAngle:
      "Tczew leży nad Wisłą, co przekłada się na podwyższone ryzyko zawilgocenia budynków w niżej położonych częściach miasta.",
    commonIssues: ["zawilgocenia budynków w rejonach nadwiślańskich", "awarie starszych instalacji"],
    metaTitle: "Hydraulik i lokalizacja wycieków — Tczew | AquaDetekt",
    metaDescription: "Pogotowie hydrauliczne, lokalizacja wycieków i osuszanie po zalaniu w Tczewie.",
  localServicePages: [],
  },
  {
    slug: "starogard-gdanski",
    name: "Starogard Gdański",
    nameLocative: "w Starogardzie Gdańskim",
    tier: 2,
    distanceNote: "Czas dojazdu do Starogardu Gdańskiego określamy telefonicznie po przyjęciu zgłoszenia.",
    localAngle:
      "W Starogardzie Gdańskim obsługujemy zarówno zabudowę jednorodzinną, jak i osiedlową — zgłoszenia dotyczą najczęściej awarii instalacji wewnętrznej.",
    commonIssues: ["awarie instalacji wewnętrznej", "wycieki w starszych blokach"],
    metaTitle: "Hydraulik i lokalizacja wycieków — Starogard Gdański | AquaDetekt",
    metaDescription: "Pogotowie hydrauliczne, lokalizacja wycieków i osuszanie po zalaniu w Starogardzie Gdańskim.",
  localServicePages: [],
  },
  {
    slug: "malbork",
    name: "Malbork",
    nameLocative: "w Malborku",
    tier: 2,
    distanceNote: "Dojazd do Malborka planujemy indywidualnie — dokładny czas potwierdzamy podczas zgłoszenia telefonicznego.",
    localAngle:
      "Malbork ma sporo zabudowy zabytkowej w rejonie starego miasta — przy takich obiektach nieinwazyjna lokalizacja wycieku jest szczególnie istotna.",
    commonIssues: ["wycieki w zabudowie zabytkowej", "awarie w budynkach wielorodzinnych"],
    metaTitle: "Hydraulik i lokalizacja wycieków — Malbork | AquaDetekt",
    metaDescription: "Pogotowie hydrauliczne, lokalizacja wycieków i osuszanie po zalaniu w Malborku.",
  localServicePages: [],
  },
  {
    slug: "kartuzy",
    name: "Kartuzy",
    nameLocative: "w Kartuzach",
    tier: 2,
    distanceNote: "Termin dojazdu do Kartuz ustalamy na bieżąco w rozmowie telefonicznej, w zależności od aktualnych zgłoszeń.",
    localAngle:
      "Kartuzy i okolica kaszubskich jezior to głównie zabudowa jednorodzinna i domy rekreacyjne — częstym tematem są przyłącza wodne i instalacje sezonowo użytkowane.",
    commonIssues: ["awarie przyłączy wodnych", "wycieki w domach użytkowanych sezonowo"],
    metaTitle: "Hydraulik i lokalizacja wycieków — Kartuzy | AquaDetekt",
    metaDescription: "Pogotowie hydrauliczne, lokalizacja wycieków i osuszanie po zalaniu w Kartuzach.",
  localServicePages: [],
  },
  {
    slug: "zukowo",
    name: "Żukowo",
    nameLocative: "w Żukowie",
    tier: 2,
    distanceNote: "Czas dojazdu do Żukowa potwierdzamy telefonicznie — zależy od bieżącej dostępności zespołu.",
    localAngle:
      "Żukowo jako dynamicznie rozwijająca się gmina blisko Trójmiasta ma dużo nowego budownictwa — najczęstsze zgłoszenia dotyczą usterek instalacji podposadzkowej.",
    commonIssues: ["usterki nowych instalacji podposadzkowych"],
    metaTitle: "Hydraulik i lokalizacja wycieków — Żukowo | AquaDetekt",
    metaDescription: "Pogotowie hydrauliczne, lokalizacja wycieków i osuszanie po zalaniu w Żukowie.",
  localServicePages: [],
  },
  {
    slug: "koscierzyna",
    name: "Kościerzyna",
    nameLocative: "w Kościerzynie",
    tier: 2,
    distanceNote: "Dojazd do Kościerzyny planujemy indywidualnie po zgłoszeniu telefonicznym, w miarę bieżącej dostępności zespołu.",
    localAngle:
      "W Kościerzynie obsługujemy zarówno zabudowę miejską, jak i domy w okolicznych miejscowościach — zgłoszenia dotyczą głównie awaryjnych interwencji.",
    commonIssues: ["awarie instalacji w domach jednorodzinnych"],
    metaTitle: "Hydraulik i lokalizacja wycieków — Kościerzyna | AquaDetekt",
    metaDescription: "Pogotowie hydrauliczne, lokalizacja wycieków i osuszanie po zalaniu w Kościerzynie.",
  localServicePages: [],
  },
  {
    slug: "chojnice",
    name: "Chojnice",
    nameLocative: "w Chojnicach",
    tier: 2,
    distanceNote: "Termin i czas dojazdu do Chojnic ustalamy podczas rozmowy telefonicznej, w zależności od bieżącego obciążenia.",
    localAngle:
      "Chojnice leżą na południu regionu — obsługujemy tu głównie zgłoszenia z zabudowy jednorodzinnej i mniejszych budynków wielorodzinnych.",
    commonIssues: ["awarie instalacji w domach jednorodzinnych", "wycieki w budynkach wielorodzinnych"],
    metaTitle: "Hydraulik i lokalizacja wycieków — Chojnice | AquaDetekt",
    metaDescription: "Pogotowie hydrauliczne, lokalizacja wycieków i osuszanie po zalaniu w Chojnicach.",
  localServicePages: [],
  },
  {
    slug: "kwidzyn",
    name: "Kwidzyn",
    nameLocative: "w Kwidzynie",
    tier: 2,
    distanceNote: "Czas dojazdu do Kwidzyna potwierdzamy indywidualnie przy zgłoszeniu telefonicznym.",
    localAngle:
      "Kwidzyn to zróżnicowana zabudowa mieszkaniowa i przemysłowa — obsługujemy zarówno mieszkania, jak i mniejsze obiekty usługowe.",
    commonIssues: ["awarie w budynkach wielorodzinnych", "wycieki w obiektach usługowych"],
    metaTitle: "Hydraulik i lokalizacja wycieków — Kwidzyn | AquaDetekt",
    metaDescription: "Pogotowie hydrauliczne, lokalizacja wycieków i osuszanie po zalaniu w Kwidzynie.",
  localServicePages: [],
  },
  {
    slug: "puck",
    name: "Puck",
    nameLocative: "w Pucku",
    tier: 2,
    distanceNote: "Dojazd do Pucka i okolic ustalamy na bieżąco — zadzwoń, aby sprawdzić dostępny termin.",
    localAngle:
      "Puck i okolice nadmorskie to spora liczba domów wykorzystywanych sezonowo — przy takich obiektach ważna jest szybka diagnoza po dłuższym okresie nieużytkowania instalacji.",
    commonIssues: ["awarie po sezonowym nieużytkowaniu instalacji", "wycieki w domach letniskowych"],
    metaTitle: "Hydraulik i lokalizacja wycieków — Puck | AquaDetekt",
    metaDescription: "Pogotowie hydrauliczne, lokalizacja wycieków i osuszanie po zalaniu w Pucku.",
  localServicePages: [],
  },
  {
    slug: "wladyslawowo",
    name: "Władysławowo",
    nameLocative: "we Władysławowie",
    tier: 2,
    distanceNote: "Termin dojazdu do Władysławowa potwierdzamy telefonicznie, uwzględniając bieżącą sytuację zespołu.",
    localAngle:
      "Władysławowo to duży udział obiektów noclegowych i domów wynajmowanych sezonowo — awaria wodna w sezonie turystycznym wymaga szczególnie szybkiej reakcji.",
    commonIssues: ["awarie w obiektach noclegowych", "wycieki w domach wynajmowanych sezonowo"],
    metaTitle: "Hydraulik i lokalizacja wycieków — Władysławowo | AquaDetekt",
    metaDescription: "Pogotowie hydrauliczne, lokalizacja wycieków i osuszanie po zalaniu we Władysławowie.",
  localServicePages: [],
  },
  {
    slug: "lebork",
    name: "Lębork",
    nameLocative: "w Lęborku",
    tier: 2,
    distanceNote: "Czas dojazdu do Lęborka ustalamy indywidualnie podczas zgłoszenia — zależy od aktualnego obciążenia zespołu.",
    localAngle:
      "Lębork jako ośrodek powiatowy na zachodzie regionu ma zróżnicowaną zabudowę — obsługujemy zarówno starsze kamienice, jak i nowsze osiedla.",
    commonIssues: ["wycieki w starszych kamienicach", "awarie w nowszych osiedlach"],
    metaTitle: "Hydraulik i lokalizacja wycieków — Lębork | AquaDetekt",
    metaDescription: "Pogotowie hydrauliczne, lokalizacja wycieków i osuszanie po zalaniu w Lęborku.",
  localServicePages: [],
  },
  {
    slug: "bytow",
    name: "Bytów",
    nameLocative: "w Bytowie",
    tier: 2,
    distanceNote: "Dojazd do Bytowa planujemy po zgłoszeniu telefonicznym, w zależności od dostępności zespołu w danym terminie.",
    localAngle:
      "Bytów leży na zachodnich rubieżach regionu — obsługujemy tu głównie zgłoszenia z domów jednorodzinnych.",
    commonIssues: ["awarie instalacji w domach jednorodzinnych"],
    metaTitle: "Hydraulik i lokalizacja wycieków — Bytów | AquaDetekt",
    metaDescription: "Pogotowie hydrauliczne, lokalizacja wycieków i osuszanie po zalaniu w Bytowie.",
  localServicePages: [],
  },
  {
    slug: "czluchow",
    name: "Człuchów",
    nameLocative: "w Człuchowie",
    tier: 2,
    distanceNote: "Człuchów leży na południowo-zachodnim krańcu naszego obszaru działania, dlatego dojazd warto planować z wyprzedzeniem — dokładny termin ustalamy telefonicznie.",
    localAngle:
      "Człuchów to najdalej wysunięty punkt naszego obszaru działania na południowym zachodzie regionu — zgłoszenia planujemy z odpowiednim wyprzedzeniem, poza sytuacjami awaryjnymi.",
    commonIssues: ["awarie instalacji w domach jednorodzinnych"],
    metaTitle: "Hydraulik i lokalizacja wycieków — Człuchów | AquaDetekt",
    metaDescription: "Pogotowie hydrauliczne, lokalizacja wycieków i osuszanie po zalaniu w Człuchowie.",
  localServicePages: [],
  },
  {
    slug: "nowy-dwor-gdanski",
    name: "Nowy Dwór Gdański",
    nameLocative: "w Nowym Dworze Gdańskim",
    tier: 2,
    distanceNote: "Czas dojazdu do Nowego Dworu Gdańskiego potwierdzamy indywidualnie przy zgłoszeniu telefonicznym.",
    localAngle:
      "Nowy Dwór Gdański leży na Żuławach — teren nisko położony, gdzie zawilgocenia budynków i piwnic to częstszy temat niż w innych częściach regionu.",
    commonIssues: ["zawilgocenia budynków na terenach nisko położonych"],
    metaTitle: "Hydraulik i lokalizacja wycieków — Nowy Dwór Gdański | AquaDetekt",
    metaDescription: "Pogotowie hydrauliczne, lokalizacja wycieków i osuszanie po zalaniu w Nowym Dworze Gdańskim.",
  localServicePages: [],
  },
];

export function getCityBySlug(slug: string) {
  return cities.find((c) => c.slug === slug);
}
