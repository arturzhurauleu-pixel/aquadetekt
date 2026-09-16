// ==========================================================================
// KAŻDY artykuł w `blogPosts` przeszedł checklistę przed publikacją:
// PRIMARY KEYWORD → URL → SEARCH INTENT → TARGET SERVICE → INTERNAL LINKS → CANNIBALIZATION
// Pełna tabela audytu: patrz STRATEGIA-SEO.md, sekcja "Audyt treści blogowych".
//
// Tematy z pierwotnej listy 20/30, które NIE przeszły jeszcze pełnego briefu
// (brak unikalnego kąta, ryzyko nakładania się z opublikowanym artykułem, albo
// zwyczajnie kolejka do napisania) są w `blogBacklog` poniżej — CELOWO nie są
// routowane ani wyświetlane na stronie. Backlog to lista roboczą, nie treść
// publikowaną „dla objętości" (patrz wymóg: nie tworzyć artykułów tylko po to,
// by zwiększyć liczbę stron).
// ==========================================================================

export type InternalLink = { label: string; href: string };

export type BlogPost = {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** Dokładnie jedno główne słowo kluczowe — patrz wymóg #2. */
  primaryKeyword: string;
  secondaryKeywords: string[];
  /** Dokładnie jedna, jednoznaczna intencja wyszukiwania — patrz wymóg #1. */
  searchIntent: "informational" | "commercial";
  /** Docelowa strona usługowa — patrz wymóg #3. */
  targetServiceSlug: string;
  /** Docelowa strona lokalna, jeśli temat ma sens lokalny — patrz wymóg #4. */
  targetLocalCitySlug?: string;
  /** Kontekstowe linki wewnętrzne — patrz wymóg #5. */
  internalLinks: InternalLink[];
  /** Jednozdaniowe potwierdzenie braku kanibalizacji — patrz wymóg #6, audytowalne. */
  cannibalizationCheck: string;
  faq: { question: string; answer: string }[];
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "jak-znalezc-wyciek-wody-w-domu",
    title: "Jak znaleźć wyciek wody w domu?",
    h1: "Jak znaleźć wyciek wody w domu?",
    metaTitle: "Jak znaleźć wyciek wody w domu? Praktyczny poradnik",
    metaDescription:
      "Rosnący rachunek za wodę, wilgotna ściana, dźwięk kapiącej wody? Sprawdź, jak rozpoznać wyciek i kiedy warto wezwać specjalistę.",
    primaryKeyword: "jak znaleźć wyciek wody",
    secondaryKeywords: ["wyciek wody w domu", "ukryty wyciek wody", "objawy wycieku wody"],
    searchIntent: "informational",
    targetServiceSlug: "lokalizacja-wyciekow",
    internalLinks: [
      { label: "Lokalizacja wycieków", href: "/lokalizacja-wyciekow" },
      { label: "Ile kosztuje lokalizacja wycieku?", href: "/blog/ile-kosztuje-lokalizacja-wycieku" },
    ],
    cannibalizationCheck:
      "Artykuł ma charakter DIY / rozpoznawania objawów (intencja informacyjna, self-check licznikiem). Strona /lokalizacja-wyciekow/ jest transakcyjna (\"zamów usługę\"). Różne słowa kluczowe, różne intencje — brak kolizji.",
    faq: [
      {
        question: "Jak sprawdzić, czy w domu jest wyciek wody?",
        answer:
          "Zakręć wszystkie punkty poboru wody i sprawdź licznik — jeśli mimo to się kręci, to sygnał wycieku w instalacji.",
      },
      {
        question: "Czy mały wyciek może generować duże szkody?",
        answer:
          "Tak — nawet niewielki, ale długotrwały wyciek może prowadzić do zawilgocenia konstrukcji i rozwoju pleśni.",
      },
    ],
    body: [
      "Pierwszym sygnałem ukrytego wycieku bywa nieproporcjonalnie wysoki rachunek za wodę w stosunku do zużycia, jakiego się spodziewasz. Drugim — wilgotna, odbarwiona plama na ścianie lub suficie, która nie ma oczywistego źródła.",
      "Prosty test, który możesz wykonać samodzielnie: zakręć wszystkie krany i urządzenia pobierające wodę, a następnie sprawdź licznik wody. Jeśli wskazania mimo to się zmieniają, oznacza to, że gdzieś w instalacji woda wciąż płynie.",
      "Jeśli test wskazuje na wyciek, a nie widać go gołym okiem, kolejnym krokiem jest diagnostyka — najczęściej metodami nieinwazyjnymi, które pozwalają zlokalizować źródło problemu bez rozkuwania ścian czy posadzek.",
      "Im dłużej wyciek pozostaje niezauważony, tym większe ryzyko zawilgocenia konstrukcji budynku i rozwoju pleśni. Dlatego warto reagować na pierwsze niepokojące sygnały, zamiast czekać na widoczne zalanie.",
    ],
  },
  {
    slug: "ile-kosztuje-lokalizacja-wycieku",
    title: "Ile kosztuje lokalizacja wycieku?",
    h1: "Ile kosztuje lokalizacja wycieku wody?",
    metaTitle: "Ile kosztuje lokalizacja wycieku wody? Co wpływa na cenę",
    metaDescription:
      "Sprawdź, jakie czynniki wpływają na koszt lokalizacji wycieku wody i dlaczego cena zależy od konkretnej sytuacji.",
    primaryKeyword: "ile kosztuje lokalizacja wycieku",
    secondaryKeywords: ["cena lokalizacji wycieku", "koszt wykrycia wycieku wody"],
    searchIntent: "commercial",
    targetServiceSlug: "lokalizacja-wyciekow",
    internalLinks: [
      { label: "Lokalizacja wycieków", href: "/lokalizacja-wyciekow" },
      { label: "Jak znaleźć wyciek wody w domu?", href: "/blog/jak-znalezc-wyciek-wody-w-domu" },
    ],
    cannibalizationCheck:
      "Jedyny artykuł na blogu celujący w frazę cenową (\"ile kosztuje\"). Nie powiela treści #1 (tam: rozpoznawanie objawów; tu: czynniki cenotwórcze). Brak realnego cennika — PLACEHOLDER, zgodnie z zakazem wymyślania cen.",
    faq: [
      {
        question: "Od czego zależy cena lokalizacji wycieku?",
        answer:
          "Od rodzaju instalacji, dostępności miejsc pomiarowych, metody diagnostycznej oraz wielkości powierzchni do zbadania.",
      },
    ],
    body: [
      "Koszt lokalizacji wycieku wody zależy od kilku czynników, dlatego trudno podać jedną uniwersalną kwotę bez znajomości konkretnej sytuacji.",
      "Na cenę wpływa przede wszystkim rodzaj instalacji (wodna czy centralnego ogrzewania), materiał rur, dostępność miejsc pomiarowych oraz metoda, jaka okaże się najskuteczniejsza — termowizja, korelacja akustyczna czy gaz znacznikowy.",
      "Znaczenie ma też wielkość powierzchni objętej podejrzeniem wycieku — im większy obszar do zbadania, tym więcej czasu wymaga diagnostyka.",
      "Rzetelną wycenę można otrzymać dopiero po krótkim wywiadzie telefonicznym i, często, po wstępnych oględzinach na miejscu.",
    ],
  },
  {
    slug: "co-zrobic-po-zalaniu-mieszkania",
    title: "Co zrobić po zalaniu mieszkania?",
    h1: "Co zrobić zaraz po zalaniu mieszkania?",
    metaTitle: "Co zrobić po zalaniu mieszkania? Pierwsze kroki",
    metaDescription:
      "Zalanie mieszkania? Sprawdź, co zrobić w pierwszej kolejności, zanim przyjedzie ekipa zajmująca się osuszaniem.",
    primaryKeyword: "co zrobić po zalaniu mieszkania",
    secondaryKeywords: ["zalanie mieszkania pierwsze kroki", "zalanie mieszkania co robić"],
    searchIntent: "informational",
    targetServiceSlug: "osuszanie-po-zalaniu",
    internalLinks: [
      { label: "Osuszanie po zalaniu", href: "/osuszanie-po-zalaniu" },
      { label: "Jak zgłosić szkodę po zalaniu do ubezpieczyciela?", href: "/blog/jak-zglosic-szkode-po-zalaniu" },
    ],
    cannibalizationCheck:
      "Intencja to pierwsza reakcja w kryzysie (\"co robić\"), różna od transakcyjnej frazy \"osuszanie po zalaniu\" strony usługowej. Nie powiela FAQ strony usługowej (tam FAQ o czasie trwania i możliwości mieszkania, nie o pierwszych krokach).",
    faq: [
      {
        question: "Czy trzeba od razu zgłaszać zalanie do ubezpieczyciela?",
        answer:
          "Warto zrobić to możliwie szybko i udokumentować szkody zdjęciami przed rozpoczęciem jakichkolwiek prac naprawczych.",
      },
    ],
    body: [
      "W pierwszej kolejności odetnij dopływ wody głównym zaworem, jeśli źródłem zalania jest instalacja wewnętrzna.",
      "Jeśli woda mogła dotrzeć do instalacji elektrycznej lub gniazdek, wyłącz prąd w zalanej strefie — bezpieczeństwo jest ważniejsze niż ratowanie wyposażenia.",
      "Zrób zdjęcia zalanych pomieszczeń i uszkodzonych przedmiotów — będą potrzebne przy zgłoszeniu szkody do ubezpieczyciela.",
      "Usuń lub podnieś przedmioty narażone na dalsze zawilgocenie, a następnie skontaktuj się z ekipą zajmującą się osuszaniem — im szybciej rozpocznie się proces, tym mniejsze ryzyko trwałych uszkodzeń i pleśni.",
    ],
  },
  {
    slug: "wyciek-pod-posadzka-co-zrobic",
    title: "Wyciek wody pod posadzką — co zrobić?",
    h1: "Wyciek wody pod posadzką — co zrobić krok po kroku?",
    metaTitle: "Wyciek wody pod posadzką — co zrobić? Poradnik",
    metaDescription:
      "Podejrzewasz wyciek pod posadzką? Sprawdź, jakie są objawy i jakie kroki podjąć, zanim wezwiesz specjalistę.",
    primaryKeyword: "wyciek pod posadzką co zrobić",
    secondaryKeywords: ["wyciek wody pod posadzką", "objawy wycieku pod posadzką"],
    searchIntent: "informational",
    targetServiceSlug: "wycieki-pod-posadzka",
    internalLinks: [
      { label: "Wycieki pod posadzką", href: "/wycieki-pod-posadzka" },
      { label: "Lokalizacja wycieków bez kucia", href: "/lokalizacja-wyciekow-bez-kucia" },
    ],
    cannibalizationCheck:
      "Strona /wycieki-pod-posadzka/ opisuje usługę (transakcyjnie: \"diagnozujemy\"). Artykuł jest poradnikiem pierwszej reakcji (\"co zrobić, zanim zadzwonisz\") — inny etap ścieżki użytkownika, inny nagłówek, brak powielenia treści.",
    faq: [
      {
        question: "Czy można samodzielnie naprawić wyciek pod posadzką?",
        answer:
          "Samodzielna naprawa jest trudna bez wcześniejszej lokalizacji źródła — ryzykujesz niepotrzebne zniszczenie posadzki w niewłaściwym miejscu.",
      },
    ],
    body: [
      "Pierwszym krokiem, gdy podejrzewasz wyciek pod posadzką, jest ograniczenie dalszych szkód: jeśli to możliwe, zakręć główny zawór wody lub odcinek instalacji, który może być źródłem problemu.",
      "Nie próbuj na własną rękę odkrywać posadzki w przypadkowym miejscu — bez wcześniejszej diagnostyki łatwo trafić obok faktycznego źródła wycieku, powiększając zakres koniecznych napraw.",
      "Udokumentuj objawy zdjęciami: podniesioną lub odkształconą podłogę, wilgotne plamy przy listwach, ewentualne przebarwienia. To przyda się zarówno specjaliście, jak i przy zgłoszeniu szkody do ubezpieczyciela.",
      "Kolejnym krokiem jest diagnostyka nieinwazyjna, która pozwala ustalić dokładne miejsce wycieku przed podjęciem decyzji o ewentualnym, możliwie ograniczonym odkryciu posadzki.",
    ],
  },
  {
    slug: "wyciek-w-scianie-objawy",
    title: "Wyciek w ścianie — objawy",
    h1: "Wyciek w ścianie — jakie są objawy?",
    metaTitle: "Wyciek w ścianie — objawy, których nie wolno ignorować",
    metaDescription:
      "Poznaj typowe objawy wycieku wody w ścianie i dowiedz się, kiedy warto zlecić diagnostykę.",
    primaryKeyword: "wyciek w ścianie objawy",
    secondaryKeywords: ["ukryty wyciek w ścianie", "wilgoć na ścianie przyczyny"],
    searchIntent: "informational",
    targetServiceSlug: "wycieki-w-scianie",
    internalLinks: [
      { label: "Wycieki w ścianie", href: "/wycieki-w-scianie" },
      { label: "Termowizja w diagnostyce instalacji", href: "/termowizja" },
    ],
    cannibalizationCheck:
      "Fraza \"objawy\" jest wyraźnie informacyjna i nie występuje w metadanych strony usługowej /wycieki-w-scianie/ (ta celuje w frazę usługową). Brak powielenia treści innych artykułów o wyciekach (ten dotyczy wyłącznie ścian, nie posadzek czy CO).",
    faq: [
      {
        question: "Czy zawsze widać wyciek w ścianie gołym okiem?",
        answer:
          "Nie — czasem jedynym sygnałem jest zapach wilgoci lub delikatne odbarwienie, zanim pojawi się wyraźna plama.",
      },
    ],
    body: [
      "Najbardziej oczywistym objawem wycieku w ścianie jest wilgotna, odbarwiona plama — często o nieregularnym kształcie, powiększająca się z czasem.",
      "Mniej oczywiste sygnały to odspajający się tynk, pęcherzące się lub łuszczące malowanie, a także zapach wilgoci w pomieszczeniu bez widocznego źródła.",
      "Warto zwrócić uwagę, czy wilgoć pojawia się cyklicznie w tym samym miejscu — to może wskazywać na stałe, powtarzające się źródło, a nie jednorazowe zdarzenie.",
      "Ponieważ woda w warstwach ściennych może spływać i ujawniać się w innym miejscu niż faktyczna awaria, samodzielna ocena bywa zawodna — stąd znaczenie diagnostyki, np. termowizyjnej, przed podjęciem decyzji o naprawie.",
    ],
  },
  {
    slug: "wyciek-z-instalacji-co-jak-rozpoznac",
    title: "Wyciek z instalacji centralnego ogrzewania — jak go rozpoznać?",
    h1: "Wyciek z instalacji CO — jak go rozpoznać?",
    metaTitle: "Wyciek z instalacji CO — jak go rozpoznać?",
    metaDescription: "Spadek ciśnienia w instalacji centralnego ogrzewania? Sprawdź, jak rozpoznać wyciek w CO.",
    primaryKeyword: "wyciek z instalacji CO jak rozpoznać",
    secondaryKeywords: ["wyciek centralnego ogrzewania objawy", "spadek ciśnienia CO"],
    searchIntent: "informational",
    targetServiceSlug: "wycieki-co",
    internalLinks: [
      { label: "Wycieki z instalacji CO", href: "/wycieki-co" },
      { label: "Próba szczelności instalacji", href: "/proba-szczelnosci" },
    ],
    cannibalizationCheck:
      "Jedyny artykuł dotyczący specyficznie instalacji CO — brak nakładania się z artykułami o instalacji wodnej (wyciek CO ma odmienne objawy: ciśnienie, a nie licznik wody).",
    faq: [
      {
        question: "Czy spadek ciśnienia w CO zawsze oznacza wyciek?",
        answer:
          "Niekoniecznie — przyczyną bywa też np. odpowietrzenie układu, ale regularnie powtarzający się spadek ciśnienia jest sygnałem do sprawdzenia szczelności instalacji.",
      },
    ],
    body: [
      "Instalacja centralnego ogrzewania to układ zamknięty, dlatego jej głównym wskaźnikiem kontrolnym jest ciśnienie — jego regularny spadek to jeden z pierwszych sygnałów możliwego wycieku.",
      "Kolejnym objawem bywa konieczność częstego uzupełniania wody w instalacji, mimo że w normalnych warunkach układ powinien utrzymywać stabilny poziom.",
      "Warto też zwrócić uwagę na wilgotne plamy w okolicach grzejników, zaworów i przewodów, a także na nierówne grzanie poszczególnych grzejników w domu.",
      "Ze względu na specyfikę instalacji CO (zamknięty obieg, inne ciśnienie robocze niż w instalacji wodnej) diagnostyka wycieku wymaga metod dostosowanych do tego typu układu.",
    ],
  },
  {
    slug: "jak-znalezc-wyciek-bez-kucia",
    title: "Jak znaleźć wyciek bez kucia?",
    h1: "Jak znaleźć wyciek wody bez kucia?",
    metaTitle: "Jak znaleźć wyciek bez kucia? Metody nieinwazyjne",
    metaDescription:
      "Sprawdź, jakie metody pozwalają zlokalizować wyciek wody bez rozkuwania ścian i posadzek.",
    primaryKeyword: "jak znaleźć wyciek bez kucia",
    secondaryKeywords: ["lokalizacja wycieku bez kucia", "diagnostyka wycieku bez rozkuwania"],
    searchIntent: "informational",
    targetServiceSlug: "lokalizacja-wyciekow-bez-kucia",
    internalLinks: [
      { label: "Lokalizacja wycieków bez kucia", href: "/lokalizacja-wyciekow-bez-kucia" },
      { label: "Wykrywanie wycieków — metody i technologie", href: "/wykrywanie-wyciekow" },
    ],
    cannibalizationCheck:
      "Fraza \"jak znaleźć\" jest edukacyjna (metody), podczas gdy strona /lokalizacja-wyciekow-bez-kucia/ jest usługowa (\"zamów\"). Różni się też od artykułu #1 (\"jak znaleźć wyciek wody\" ogólnie) — tu fokus wyłącznie na metodach nieinwazyjnych, nie na rozpoznawaniu objawów.",
    faq: [
      {
        question: "Czy metoda bez kucia zawsze się sprawdza?",
        answer:
          "Skuteczność zależy od typu instalacji i materiału budowlanego — w części przypadków może być potrzebne ograniczone, punktowe odkrycie miejsca awarii.",
      },
    ],
    body: [
      "Diagnostyka bez kucia opiera się na kilku uzupełniających się metodach, które pozwalają zawęzić, a często dokładnie wskazać miejsce wycieku bez naruszania wykończenia.",
      "Termowizja pokazuje różnice temperatury na powierzchni, które mogą wskazywać na obecność wilgoci lub przebieg instalacji ukrytej w ścianie czy podłodze.",
      "Korelacja akustyczna polega na nasłuchu i analizie dźwięku przepływającej wody — pozwala oszacować punkt, w którym dźwięk jest najintensywniejszy.",
      "Gaz znacznikowy to metoda polegająca na wprowadzeniu do instalacji nieszkodliwego gazu, który przenika przez nieszczelność i jest wykrywany na powierzchni — często stosowana, gdy inne metody nie dają jednoznacznego wyniku.",
    ],
  },
  {
    slug: "plesn-po-zalaniu-jak-uniknac",
    title: "Pleśń po zalaniu — jak jej uniknąć?",
    h1: "Pleśń po zalaniu — jak jej uniknąć?",
    metaTitle: "Pleśń po zalaniu — jak jej uniknąć?",
    metaDescription: "Sprawdź, co sprzyja rozwojowi pleśni po zalaniu i jak ograniczyć to ryzyko.",
    primaryKeyword: "pleśń po zalaniu jak uniknąć",
    secondaryKeywords: ["grzyb po zalaniu", "wilgoć a pleśń"],
    searchIntent: "informational",
    targetServiceSlug: "odgrzybianie",
    internalLinks: [
      { label: "Odgrzybianie po zalaniu", href: "/odgrzybianie" },
      { label: "Osuszanie po zalaniu", href: "/osuszanie-po-zalaniu" },
    ],
    cannibalizationCheck:
      "Artykuł o profilaktyce (\"jak uniknąć\") kieruje ruch zarówno do nowej strony /odgrzybianie/, jak i do /osuszanie-po-zalaniu/ — nie konkuruje z żadną z nich, bo obie strony mają intencję transakcyjną, a artykuł czysto informacyjną.",
    faq: [
      {
        question: "Po jakim czasie po zalaniu może pojawić się pleśń?",
        answer:
          "Zależy od warunków (wilgotność, temperatura, wentylacja) — dlatego kluczowe jest możliwie szybkie rozpoczęcie osuszania, a nie czekanie na pierwsze objawy pleśni.",
      },
    ],
    body: [
      "Pleśń rozwija się w warunkach podwyższonej wilgotności, dlatego najskuteczniejszą profilaktyką jest jak najszybsze osuszenie zalanych powierzchni, zanim wilgoć zdąży wniknąć głębiej w materiał.",
      "Sama wentylacja pomieszczenia zwykle nie wystarcza przy większym zalaniu — wilgoć uwięziona w warstwach ściany czy podłogi wymaga kontrolowanego osuszania, potwierdzonego pomiarami.",
      "Warto też ograniczyć czynniki sprzyjające rozwojowi grzybów: zbyt szczelne zamknięcie pomieszczenia bez przewietrzania, meble przysunięte do wilgotnej ściany, dywany pozostawione na mokrej podłodze.",
      "Jeśli pleśń już się pojawiła, jej usunięcie ma sens dopiero po wyeliminowaniu źródła wilgoci — inaczej problem szybko wraca, nawet po dokładnym czyszczeniu powierzchni.",
    ],
  },
  {
    slug: "jak-dlugo-trwa-osuszanie-po-zalaniu",
    title: "Jak długo trwa osuszanie po zalaniu?",
    h1: "Jak długo trwa osuszanie po zalaniu? Od czego to zależy",
    metaTitle: "Jak długo trwa osuszanie po zalaniu? Czynniki wpływające na czas",
    metaDescription:
      "Sprawdź, jakie czynniki decydują o czasie trwania osuszania po zalaniu — od materiału po warunki w pomieszczeniu.",
    primaryKeyword: "jak długo trwa osuszanie po zalaniu",
    secondaryKeywords: ["czas osuszania mieszkania", "ile trwa osuszanie ścian"],
    searchIntent: "informational",
    targetServiceSlug: "osuszanie-po-zalaniu",
    internalLinks: [
      { label: "Osuszanie po zalaniu", href: "/osuszanie-po-zalaniu" },
      { label: "Pomiary wilgotności", href: "/pomiary-wilgotnosci" },
    ],
    cannibalizationCheck:
      "Strona /osuszanie-po-zalaniu/ zawiera tę samą pytanie w FAQ, ale odpowiedź tam jest celowo zwięzła (2 zdania, brak głębi). Ten artykuł jest rozwinięciem tematu (czynniki: materiał, grubość, wentylacja, pora roku) — nie duplikuje treści, tylko ją pogłębia; FAQ na stronie usługowej pełni funkcję szybkiej odpowiedzi i linkuje czytelnika dalej do tego artykułu.",
    faq: [],
    body: [
      "Czas osuszania zależy przede wszystkim od rodzaju i grubości zawilgoconego materiału — inaczej wygląda to w przypadku tynku, inaczej przy betonowej wylewce czy warstwie pod panelami.",
      "Znaczenie ma też skala zalania: powierzchowne zawilgocenie wysycha szybciej niż sytuacja, w której woda zdążyła wniknąć głęboko w strukturę ściany lub podłogi.",
      "Warunki w pomieszczeniu — temperatura, wilgotność powietrza, możliwość wentylacji — również wpływają na tempo procesu, dlatego dobór i liczba urządzeń osuszających są dopasowywane indywidualnie.",
      "Rzetelną odpowiedź na pytanie „ile jeszcze potrwa” dają dopiero regularne pomiary wilgotności w trakcie procesu — bez nich trudno ocenić postęp na oko, zwłaszcza w warstwach niewidocznych gołym okiem.",
    ],
  },
  {
    slug: "kiedy-wezwac-pogotowie-hydrauliczne",
    title: "Kiedy wezwać pogotowie hydrauliczne?",
    h1: "Kiedy wezwać pogotowie hydrauliczne, a kiedy wystarczy zwykły hydraulik?",
    metaTitle: "Kiedy wezwać pogotowie hydrauliczne?",
    metaDescription:
      "Sprawdź, jakie sytuacje wymagają pogotowia hydraulicznego, a kiedy naprawę można zaplanować w zwykłym trybie.",
    primaryKeyword: "kiedy wezwać pogotowie hydrauliczne",
    secondaryKeywords: ["pogotowie hydrauliczne czy hydraulik", "awaria wymagająca pogotowia"],
    searchIntent: "informational",
    targetServiceSlug: "awarie-hydrauliczne",
    internalLinks: [
      { label: "Awarie hydrauliczne", href: "/awarie-hydrauliczne" },
      { label: "Pogotowie hydrauliczne", href: "/pogotowie-hydrauliczne" },
    ],
    cannibalizationCheck:
      "Celowo skierowany na /awarie-hydrauliczne/ (nie na pillar /pogotowie-hydrauliczne/), żeby artykuł informacyjny nie konkurował o tę samą frazę transakcyjną co strona usługowa najwyższego priorytetu. Artykuł linkuje do obu stron, ale jako TARGET service wskazuje stronę, dla której jest naturalnym wsparciem contentowym.",
    faq: [],
    body: [
      "Pogotowie hydrauliczne ma sens przy nagłych, niekontrolowanych awariach: pękniętej rurze, silnym wycieku, zalaniu, sytuacji zagrażającej dalszym zniszczeniom, jeśli nie zostanie zatrzymana od razu.",
      "Jeśli problem jest niewielki i kontrolowany — np. wolno kapiący kran, drobny wyciek przy baterii, który da się czasowo zabezpieczyć — zwykle można umówić naprawę w normalnym trybie, bez trybu awaryjnego.",
      "Wątpliwości najlepiej rozwiewa krótka rozmowa telefoniczna: opis sytuacji pozwala ocenić, czy konieczna jest natychmiastowa interwencja, czy wystarczy zaplanowana wizyta.",
      "W obu przypadkach warto w międzyczasie ograniczyć ryzyko dalszych szkód — odciąć dopływ wody do uszkodzonego odcinka, jeśli to możliwe, i zabezpieczyć otoczenie przed zalaniem.",
    ],
  },
  {
    slug: "czy-ubezpieczenie-pokrywa-koszty-osuszania",
    title: "Czy ubezpieczenie pokrywa koszty osuszania po zalaniu?",
    h1: "Czy ubezpieczenie pokrywa koszty osuszania po zalaniu?",
    metaTitle: "Czy ubezpieczenie pokrywa osuszanie po zalaniu?",
    metaDescription:
      "Sprawdź, od czego zależy, czy polisa mieszkaniowa pokryje koszty osuszania po zalaniu, i na co zwrócić uwagę w warunkach ubezpieczenia.",
    primaryKeyword: "czy ubezpieczenie pokrywa osuszanie po zalaniu",
    secondaryKeywords: ["ubezpieczenie od zalania zakres", "polisa mieszkaniowa zalanie"],
    searchIntent: "informational",
    targetServiceSlug: "osuszanie-po-zalaniu",
    internalLinks: [
      { label: "Osuszanie po zalaniu", href: "/osuszanie-po-zalaniu" },
      { label: "Jak zgłosić szkodę po zalaniu do ubezpieczyciela?", href: "/blog/jak-zglosic-szkode-po-zalaniu" },
    ],
    cannibalizationCheck:
      "Artykuł czysto edukacyjny o zasadach polis mieszkaniowych w Polsce — NIE zawiera żadnych twierdzeń o tym, że AquaDetekt rozlicza się z ubezpieczycielem czy współpracuje z konkretnym ubezpieczycielem (brak potwierdzonych danych biznesowych — patrz production blocker). Nie powiela treści innych artykułów: tu wyłącznie zakres polisy, nie proces zgłoszenia (patrz osobny artykuł) ani struktura kosztorysu.",
    faq: [
      {
        question: "Czy każda polisa mieszkaniowa obejmuje zalanie?",
        answer:
          "Nie automatycznie — zależy od zakresu wykupionej polisy. Warto sprawdzić, czy obejmuje ona ryzyko zalania oraz jakie są sumy i wyłączenia.",
      },
    ],
    body: [
      "To, czy koszty osuszania zostaną pokryte, zależy wyłącznie od warunków konkretnej polisy — nie ma tu jednej uniwersalnej odpowiedzi. Standardowe ubezpieczenie mieszkania czy domu często obejmuje ryzyko zalania, ale zakres i sumy ubezpieczenia różnią się między towarzystwami i wariantami polisy.",
      "Zwykle pokryciu podlegają koszty usunięcia skutków zalania udokumentowane jako niezbędna naprawa — w tym często także osuszanie, jeśli jest opisane w kosztorysie jako element usuwania szkody. Częstym wyłączeniem bywają szkody wynikające z zaniedbania (np. wieloletnia, nieusuwana nieszczelność) lub ze złego stanu technicznego instalacji, o którym właściciel wiedział.",
      "Warto przed zgłoszeniem dokładnie przeczytać ogólne warunki ubezpieczenia (OWU) — zwrócić uwagę na definicję „zalania”, ewentualne podlimity kwotowe oraz wymagany czas zgłoszenia szkody.",
      "Praktyczna wskazówka: zanim rozpoczniesz prace naprawcze, skontaktuj się z ubezpieczycielem — część towarzystw wymaga zgłoszenia szkody i czasem oględzin, zanim rozpocznie się usuwanie skutków zalania.",
    ],
  },
  {
    slug: "jak-zglosic-szkode-po-zalaniu",
    title: "Jak zgłosić szkodę po zalaniu do ubezpieczyciela?",
    h1: "Jak zgłosić szkodę po zalaniu do ubezpieczyciela?",
    metaTitle: "Jak zgłosić szkodę po zalaniu do ubezpieczyciela?",
    metaDescription:
      "Krok po kroku: jak i kiedy zgłosić szkodę po zalaniu, co udokumentować i na co zwrócić uwagę przed wizytą rzeczoznawcy.",
    primaryKeyword: "jak zgłosić szkodę po zalaniu",
    secondaryKeywords: ["zgłoszenie szkody zalanie", "dokumentacja szkody zalanie"],
    searchIntent: "informational",
    targetServiceSlug: "osuszanie-po-zalaniu",
    internalLinks: [
      { label: "Co zrobić po zalaniu mieszkania?", href: "/blog/co-zrobic-po-zalaniu-mieszkania" },
      { label: "Czy ubezpieczenie pokrywa koszty osuszania po zalaniu?", href: "/blog/czy-ubezpieczenie-pokrywa-koszty-osuszania" },
    ],
    cannibalizationCheck:
      "Różni się od „co zrobić po zalaniu mieszkania” (tam: bezpieczeństwo i pierwsze fizyczne kroki) — ten artykuł dotyczy wyłącznie procesu zgłoszenia do ubezpieczyciela. Nie zawiera twierdzeń o tym, że AquaDetekt pomaga w zgłoszeniu czy rozliczeniu szkody — czysto poradnikowy, ogólny opis procedury.",
    faq: [],
    body: [
      "Większość ubezpieczycieli wymaga zgłoszenia szkody możliwie szybko — często w ciągu kilku dni od zdarzenia, nawet jeśli pełna dokumentacja zostanie uzupełniona później. Warto sprawdzić dokładny termin w warunkach swojej polisy.",
      "Zanim rozpoczniesz sprzątanie czy naprawy, udokumentuj szkodę zdjęciami i, jeśli to możliwe, krótkim filmem — zalane pomieszczenia, uszkodzone przedmioty, a jeśli źródło zalania jest widoczne, również je.",
      "Zapisz możliwie dokładnie okoliczności zdarzenia: przybliżoną godzinę, prawdopodobną przyczynę i to, co zrobiłeś, aby ograniczyć dalsze szkody (np. zakręcenie zaworu).",
      "Nie wyrzucaj uszkodzonych przedmiotów przed oceną przez rzeczoznawcę, chyba że stanowią zagrożenie — w razie wątpliwości zapytaj o to ubezpieczyciela przy zgłoszeniu.",
      "Zachowaj rachunki za wszelkie działania doraźne, które już opłaciłeś (np. pierwszą interwencję hydraulika), i zgłoszenie potwierdź dodatkowo pisemnie (e-mail), żeby mieć numer szkody i historię kontaktu.",
    ],
  },
  {
    slug: "kosztorys-szkody-wodnej-co-zawiera",
    title: "Kosztorys szkody wodnej — co powinien zawierać?",
    h1: "Kosztorys szkody wodnej — co powinien zawierać?",
    metaTitle: "Kosztorys szkody wodnej — co powinien zawierać?",
    metaDescription:
      "Sprawdź, jakie elementy powinien zawierać dobrze przygotowany kosztorys szkody wodnej, aby ułatwić rozliczenie z ubezpieczycielem.",
    primaryKeyword: "kosztorys szkody wodnej co powinien zawierać",
    secondaryKeywords: ["kosztorys zalania mieszkania", "wycena szkody wodnej"],
    searchIntent: "informational",
    targetServiceSlug: "osuszanie-po-zalaniu",
    internalLinks: [
      { label: "Jak zgłosić szkodę po zalaniu do ubezpieczyciela?", href: "/blog/jak-zglosic-szkode-po-zalaniu" },
      { label: "Osuszanie po zalaniu", href: "/osuszanie-po-zalaniu" },
    ],
    cannibalizationCheck:
      "Dotyczy wyłącznie STRUKTURY dokumentu kosztorysowego — inny etap procesu niż „jak zgłosić szkodę” (zgłoszenie) i „czy ubezpieczenie pokrywa” (zakres polisy). Nie podaje żadnych własnych cenników ani stawek — wyłącznie ogólne zasady dobrej dokumentacji.",
    faq: [],
    body: [
      "Dobrze przygotowany kosztorys szkody wodnej powinien rozbijać zakres prac na konkretne pozycje, a nie ograniczać się do jednej kwoty ryczałtowej — im dokładniejszy podział, tym łatwiej o rzetelne rozliczenie z ubezpieczycielem.",
      "Warto, aby kosztorys wskazywał osobno poszczególne pomieszczenia i uszkodzone elementy (np. konkretna ściana, rodzaj podłogi), zakres niezbędnych prac (osuszanie, ewentualna wymiana materiałów) oraz robociznę.",
      "Jeśli w trakcie prac wykonywano pomiary wilgotności, warto, aby wyniki (przed i po) były przywołane w dokumentacji — to konkretny, sprawdzalny dowód postępu i zakresu wykonanych prac.",
      "Zdjęcia i pomiary powinny być powiązane datami z poszczególnymi pozycjami kosztorysu — ułatwia to weryfikację przez rzeczoznawcę i skraca proces rozliczenia.",
    ],
  },
];

/**
 * Pełny audyt 15 tematów z backlogu (Task 6). Każdy temat ma jawną decyzję:
 * PUBLISH (zaplanowane, jeszcze nie napisane — patrz `status`),
 * MERGE (pokryte przez istniejący artykuł, nie tworzymy duplikatu),
 * SKIP (świadomie odrzucone — uzasadnienie w `reason`).
 * 3 tematy z tej listy zostały już w pełni napisane i przeniesione do
 * `blogPosts` powyżej: czy-ubezpieczenie-pokrywa-koszty-osuszania,
 * jak-zglosic-szkode-po-zalaniu, kosztorys-szkody-wodnej-co-zawiera.
 */
export type BacklogDecision = {
  title: string;
  primaryKeyword: string;
  searchIntent: "informational" | "commercial";
  targetServiceSlug: string;
  decision: "publish-pending" | "merge" | "skip";
  reason: string;
  cannibalizationRisk: string;
  mergeTargetSlug?: string; // wypełnione tylko dla decision: "merge"
};

export const blogBacklog: BacklogDecision[] = [
  {
    title: "Jak rozpoznać ukryty wyciek wody?",
    primaryKeyword: "ukryty wyciek wody objawy",
    searchIntent: "informational",
    targetServiceSlug: "lokalizacja-wyciekow",
    decision: "merge",
    mergeTargetSlug: "jak-znalezc-wyciek-wody-w-domu",
    reason: "Ten sam intent rozpoznawania objawów co opublikowany artykuł — osobna strona byłaby niemal duplikatem treści.",
    cannibalizationRisk: "Wysokie — bez merge konkurowałby z jak-znalezc-wyciek-wody-w-domu o tę samą frazę.",
  },
  {
    title: "Jak sprawdzić wilgotność ścian po zalaniu?",
    primaryKeyword: "wilgotność ścian po zalaniu",
    searchIntent: "informational",
    targetServiceSlug: "pomiary-wilgotnosci",
    decision: "publish-pending",
    reason: "Odrębny kąt: metodologia pomiaru i interpretacja wyników — nie pokryty przez żaden opublikowany artykuł.",
    cannibalizationRisk: "Niskie — różni się od jak-dlugo-trwa-osuszanie-po-zalaniu (tam: czynniki czasowe, nie metodologia pomiaru).",
  },
  {
    title: "Czy można mieszkać w mieszkaniu po zalaniu?",
    primaryKeyword: "mieszkanie po zalaniu czy można mieszkać",
    searchIntent: "informational",
    targetServiceSlug: "osuszanie-po-zalaniu",
    decision: "publish-pending",
    reason: "Częste, konkretne pytanie praktyczne bez pokrycia w obecnych artykułach.",
    cannibalizationRisk: "Niskie.",
  },
  {
    title: "Pęknięta rura — co zrobić?",
    primaryKeyword: "pęknięta rura co zrobić",
    searchIntent: "informational",
    targetServiceSlug: "pogotowie-hydrauliczne",
    decision: "publish-pending",
    reason: "Konkretny scenariusz awaryjny (działanie „teraz”) — różni się od kiedy-wezwac-pogotowie-hydrauliczne (tam: kryteria decyzji, nie instrukcja działania).",
    cannibalizationRisk: "Niskie, o ile utrzymana zostanie różnica: instrukcja krok-po-kroku vs. kryteria decyzji.",
  },
  {
    title: "Awaria hydrauliczna w nocy — co robić?",
    primaryKeyword: "awaria hydrauliczna w nocy",
    searchIntent: "informational",
    targetServiceSlug: "awarie-hydrauliczne",
    decision: "skip",
    reason: "Nakładałby się treściowo z kiedy-wezwac-pogotowie-hydrauliczne i „pęknięta rura — co zrobić” — trzeci artykuł o tym samym scenariuszu awaryjnym nie wnosi wystarczającej nowej wartości. Klaster hydraulik/pogotowie to nasycony rynek (patrz SERP audit) — nie inwestujemy tam nadmiarowo.",
    cannibalizationRisk: "Wysokie względem dwóch istniejących/planowanych artykułów o awariach.",
  },
  {
    title: "Lokalizacja wycieku metodą termowizyjną",
    primaryKeyword: "termowizja lokalizacja wycieku",
    searchIntent: "informational",
    targetServiceSlug: "termowizja",
    decision: "publish-pending",
    reason: "Pogłębienie jednej metody — dobrze uzupełnia nową stronę porównawczą /wykrywanie-wyciekow/.",
    cannibalizationRisk: "Niskie — /wykrywanie-wyciekow/ porównuje metody skrótowo, artykuł może pójść w głąb jednej z nich.",
  },
  {
    title: "Próba szczelności instalacji — kiedy jest wymagana?",
    primaryKeyword: "próba szczelności instalacji kiedy",
    searchIntent: "informational",
    targetServiceSlug: "proba-szczelnosci",
    decision: "publish-pending",
    reason: "Brak pokrycia tego pytania gdziekolwiek indziej na blogu.",
    cannibalizationRisk: "Brak.",
  },
  {
    title: "Osuszanie posadzki pływającej — na co uważać?",
    primaryKeyword: "osuszanie posadzki pływającej",
    searchIntent: "informational",
    targetServiceSlug: "osuszanie-podposadzkowe",
    decision: "publish-pending",
    reason: "Konkretny, wartościowy long-tail temat zgodny z audytem SERP (konkurenci mają dedykowane strony na ten temat).",
    cannibalizationRisk: "Niskie.",
  },
  {
    title: "Jak zakręcić główny zawór wody w bloku i domu jednorodzinnym?",
    primaryKeyword: "jak zakręcić główny zawór wody",
    searchIntent: "informational",
    targetServiceSlug: "pogotowie-hydrauliczne",
    decision: "skip",
    reason: "Treść generyczna, niska wartość różnicująca — identyczny poradnik ma dosłownie każda firma hydrauliczna. Klaster hydraulik to nasycony rynek (SERP audit) — nie priorytet.",
    cannibalizationRisk: "Niskie ryzyko kanibalizacji, ale też niska wartość SEO/biznesowa.",
  },
  {
    title: "Zatkana instalacja kanalizacyjna — objawy i pierwsza pomoc",
    primaryKeyword: "zatkana kanalizacja objawy",
    searchIntent: "informational",
    targetServiceSlug: "pogotowie-hydrauliczne",
    decision: "skip",
    reason: "Ta sama logika co „główny zawór wody” — generyczny temat spoza core-różnicowania (lokalizacja wycieków / osuszanie).",
    cannibalizationRisk: "Niskie, ale niski priorytet.",
  },
  {
    title: "Zalanie mieszkania przez sąsiada z góry — co robić w pierwszej kolejności?",
    primaryKeyword: "zalanie przez sąsiada z góry",
    searchIntent: "informational",
    targetServiceSlug: "osuszanie-po-zalaniu",
    decision: "publish-pending",
    reason: "Odrębny, częsty scenariusz (spór sąsiedzki/odpowiedzialność) nieujęty w opublikowanych artykułach.",
    cannibalizationRisk: "Niskie — inny kąt niż co-zrobic-po-zalaniu-mieszkania (tam: bezpieczeństwo, nie odpowiedzialność za szkodę).",
  },
  {
    title: "Osuszacz kondensacyjny czy adsorpcyjny — czym się różnią?",
    primaryKeyword: "osuszacz kondensacyjny czy adsorpcyjny",
    searchIntent: "informational",
    targetServiceSlug: "osuszanie-po-zalaniu",
    decision: "skip",
    reason: "Wartościowy technicznie, ale niższy priorytet biznesowy — czytelnik na tym etapie rzadko jest gotowy do konwersji. Do rozważenia post-launch.",
    cannibalizationRisk: "Brak.",
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
