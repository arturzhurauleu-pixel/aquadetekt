# Audyt końcowy — faza SEO Implementation

## 1. Audyt treści blogowych (checklista per artykuł)

| Slug | Primary keyword | Intent | Target service | Internal links | Cannibalization check |
|---|---|---|---|---|---|
| jak-znalezc-wyciek-wody-w-domu | jak znaleźć wyciek wody | informational | lokalizacja-wyciekow | /lokalizacja-wyciekow, /blog/ile-kosztuje-lokalizacja-wycieku | Inna intencja niż strona usługowa (DIY self-check vs. zamówienie usługi) |
| ile-kosztuje-lokalizacja-wycieku | ile kosztuje lokalizacja wycieku | commercial | lokalizacja-wyciekow | /lokalizacja-wyciekow, /blog/jak-znalezc-wyciek-wody-w-domu | Jedyny artykuł celujący w frazę cenową — brak nakładania z #1 |
| co-zrobic-po-zalaniu-mieszkania | co zrobić po zalaniu mieszkania | informational | osuszanie-po-zalaniu | /osuszanie-po-zalaniu, /blog/jak-zglosic-szkode-po-zalaniu (backlog) | Pierwsza reakcja kryzysowa — inna intencja niż transakcyjna strona usługi |
| wyciek-pod-posadzka-co-zrobic | wyciek pod posadzką co zrobić | informational | wycieki-pod-posadzka | /wycieki-pod-posadzka, /lokalizacja-wyciekow-bez-kucia | DIY pierwszej reakcji vs. strona usługowa (diagnostyka profesjonalna) |
| wyciek-w-scianie-objawy | wyciek w ścianie objawy | informational | wycieki-w-scianie | /wycieki-w-scianie, /termowizja | Fraza „objawy” nie występuje w metadanych strony usługowej |
| wyciek-z-instalacji-co-jak-rozpoznac | wyciek z instalacji CO jak rozpoznać | informational | wycieki-co | /wycieki-co, /proba-szczelnosci | Jedyny artykuł o CO — zero nakładania z artykułami o instalacji wodnej |
| jak-znalezc-wyciek-bez-kucia | jak znaleźć wyciek bez kucia | informational | lokalizacja-wyciekow-bez-kucia | /lokalizacja-wyciekow-bez-kucia, /wykrywanie-wyciekow | Fokus wyłącznie na metodach nieinwazyjnych — różni się od artykułu #1 |
| plesn-po-zalaniu-jak-uniknac | pleśń po zalaniu jak uniknąć | informational | odgrzybianie | /odgrzybianie, /osuszanie-po-zalaniu | Profilaktyka — nie konkuruje z żadną stroną transakcyjną |
| jak-dlugo-trwa-osuszanie-po-zalaniu | jak długo trwa osuszanie po zalaniu | informational | osuszanie-po-zalaniu | /osuszanie-po-zalaniu, /pomiary-wilgotnosci | FAQ na stronie usługowej celowo zwięzłe (2 zdania); artykuł to pogłębienie, nie duplikat |
| kiedy-wezwac-pogotowie-hydrauliczne | kiedy wezwać pogotowie hydrauliczne | informational | awarie-hydrauliczne | /awarie-hydrauliczne, /pogotowie-hydrauliczne | Celowo NIE wskazuje na pillar /pogotowie-hydrauliczne/ jako target, by nie konkurować o frazę transakcyjną |

**15 tematów z pierwotnej listy 20/30 pozostaje w `blogBacklog`** (`data/blog.ts`) — nieopublikowane, nieroutowane, bez wygenerowanych stron. Powód: brak jeszcze w pełni unikalnego kąta lub kolejka redakcyjna — zgodnie z zasadą „nie tworzyć artykułów tylko po to, by zwiększyć liczbę stron”.

## 2. Unikalność stron miasto+usługa

Każda z 21 stron `/hydraulik-[miasto]/` oraz każda z 11 dedykowanych stron usługa+miasto (`/pogotowie-hydrauliczne-gdansk/` itd.) renderuje z danych w `data/cities.ts`:
- `localAngle` — unikalny akapit kontekstowy per miasto (typ zabudowy, specyfika terenu — np. Gdańsk vs. Sopot vs. Nowy Dwór Gdański mają całkowicie różny tekst, nie tylko podmienioną nazwę),
- `commonIssues` — lista najczęstszych zgłoszeń specyficzna dla danego miasta,
- `districts` — tylko dla miast, gdzie to naturalne (Gdańsk),
- `distanceNote` — miejsce na faktyczny opis dojazdu (obecnie PLACEHOLDER do uzupełnienia).

To nie jest jeden szablon z podmienioną nazwą miasta — każde miasto ma osobno napisany kontekst. Wymaga to jednak uzupełnienia `distanceNote` prawdziwymi danymi przed publikacją (patrz checklist w README.md).

## 3. Wyniki audytu i naprawione problemy

| Obszar | Wynik | Uwagi |
|---|---|---|
| SEO (metadata, nagłówki, kanoniczne) | Dobry | `buildMetadata()` z canonical+OG zastosowany na wszystkich stronach statycznych i dynamicznych |
| Technical SEO (routing, sitemap, robots) | Dobry | `sitemap.ts` generuje trasy programowo ze wszystkich źródeł danych (usługi, miasta, kombinacje, blog) — zero ręcznego utrzymywania |
| Local SEO | Dobry z zastrzeżeniem | Struktura płaska zgodna z briefem; wymaga uzupełnienia `distanceNote` i `googleMapsEmbedUrl` przed publikacją |
| Content | Dobry | Blog przeszedł re-audyt jakości — 10 opublikowanych artykułów zamiast 27 cienkich szkiców |
| UX / CRO | Dobry | Sticky CTA na mobile, formularz z widocznymi etykietami, CTA po każdej sekcji |
| Performance | Warunkowo dobry | `next/font`, brak zbędnych bibliotek, statyczne generowanie (SSG) — ale brak jeszcze realnych obrazów/`next/image`, bo brief zakazuje wymyślania materiału zdjęciowego |
| Accessibility | Naprawiono 2 problemy | (1) formularz zgłoszenia nie miał powiązanych `<label>` — DODANO `htmlFor`/`id` + `aria-live` na komunikacie sukcesu; (2) brak "skip to content" — DODANO link pomijający nawigację w `app/layout.tsx` |
| Schema.org | Dobry | LocalBusiness/Service/FAQPage/BreadcrumbList/WebSite wdrożone; AggregateRating świadomie pominięty (brak realnych opinii) |

### Problemy znalezione i naprawione w tej turze

| Problem | Severity | Plik | Fix | Status |
|---|---|---|---|---|
| Pola formularza bez powiązanych `<label>` | Średni (a11y) | `components/QuickReportForm.tsx` | Dodano `<label htmlFor>` dla każdego pola + `aria-live="polite"` na komunikacie sukcesu | ✅ Naprawione |
| Brak linku "skip to content" | Niski (a11y) | `app/layout.tsx` | Dodano widoczny po focusie link `#main-content` | ✅ Naprawione |
| Blog zawierał 27 „szkiców” bez realnej treści (ryzyko cienkich stron) | Wysoki (SEO) | `data/blog.ts` | Przebudowano: 10 w pełni opracowanych, zweryfikowanych artykułów + jawny `blogBacklog` (nieroutowany) | ✅ Naprawione |
| Strona FAQ "jak długo trwa osuszanie" duplikowała się między stroną usługową a blogiem | Średni (kanibalizacja) | `app/osuszanie-po-zalaniu/page.tsx`, `data/blog.ts` | FAQ na stronie usługowej pozostaje celowo zwięzłe; artykuł blogowy to pogłębienie — udokumentowano w `cannibalizationCheck` | ✅ Naprawione (udokumentowane) |

### Pozostałe ograniczenia (świadome, zgodne z zakazem wymyślania danych)

- Brak realnych zdjęć — wszystkie miejsca na zdjęcia to opisowe placeholdery, nie `<img>` z pustym/fałszywym `alt`.
- `caseStudies` = pusta tablica — system gotowy, czeka na pierwsze realizacje.
- `site.ts` zawiera dane kontaktowe jako PLACEHOLDER — pełna lista do uzupełnienia w README.md.

## 4. QA pass — weryfikacja routingu (bez npm install)

**BUILD:** BLOCKED BY ENVIRONMENT — `npm run build` → `sh: 1: next: not found` (brak `node_modules`; sandbox nie ma dostępu do sieci, `npm install` niemożliwy). Nie twierdzę, że build przeszedł.

**Route inventory (rekoncyliacja plik-po-pliku z danymi źródłowymi):**
| Grupa | Liczba | Zgodność z danymi |
|---|---|---|
| A. Strony usługowe | 19 | 19/19 — brak brakujących |
| B. Huby miast (`/hydraulik-{city}/`) | 21 | 21/21 — brak brakujących |
| C. Usługa × miasto | 11 | 11/11 — brak brakujących |
| D. Blog (opublikowane) | 10 | zgodnie z `data/blog.ts` |
| E. Realizacje | 0 | zgodnie z `data/case-studies.ts` (celowo puste) |
| F. Pozostałe | 8 | `/`, `/uslugi`, `/obszar-dzialania`, `/o-nas`, `/realizacje`, `/blog`, `/faq`, `/kontakt` |
| **RAZEM** | **69** | **0 rozbieżności** |

**SITEMAP:** PASS — 69/69 URL-i w sitemap ma realną, renderowalną stronę; 0 URL-i-widmo; 0 duplikatów; 0 wycieków `[city]`/`[slug]`.

**CANONICALS:** PASS — każda strona ma jawny, zaszyty w danych `path` przekazywany do `buildMetadata()`; jedyne dopasowania `[slug]`/`[city]` w całym repo to dwa nieszkodliwe komentarze w `data/cities.ts` (poprawione, by nie sugerowały realnej składni dynamic route).

**INTERNAL LINKS:** PASS — wszystkie statyczne `href` wskazują na istniejące trasy; wszystkie linki generowane z szablonów (`${slug}`) pochodzą z tych samych tablic danych, z których generowane są same trasy — rozjazd jest strukturalnie niemożliwy.

**Jakość stron usługa×miasto (11 stron):** Akapit wstępny (`intro`) jest realnie unikalny per miasto — zbudowany z `city.localAngle`, który jest osobno napisanym tekstem dla Gdańska/Gdyni/Sopotu (różne typy zabudowy, różne materiały instalacji). Wykryto jednak dwa realne ryzyka duplikacji treści na poziomie FAQ:
1. Dodatkowe pytanie FAQ na stronach `osuszanie-po-zalaniu-{miasto}` ma identyczną odpowiedź na wszystkich 3 miastach (różni się tylko treść pytania, nie odpowiedzi).
2. Dodatkowe pytanie FAQ na stronach `pogotowie-hydrauliczne-{miasto}` renderuje ten sam tekst zastępczy na wszystkich 3 miastach, dopóki `distanceNote` pozostaje PLACEHOLDER-em (po uzupełnieniu realnych czasów dojazdu treść stanie się unikalna automatycznie).

Baza pytanie/odpowiedź w `components/LocalServicePage.tsx` ("Jak umówić się na wizytę?") jest identyczna na wszystkich 11 stronach — krótki, formularzowy fragment, niskie ryzyko SEO, ale odnotowane.

**Jakość 21 hubów miast:** Wszystkie 21 mają `distanceNote` = PLACEHOLDER (brak realnych danych o czasie dojazdu — zgodnie z zakazem wymyślania faktów). To wymaga uzupełnienia przed publikacją (patrz checklist w README.md). Tylko Gdańsk ma listę dzielnic (`districts`) — to celowe, nie błąd (pozostałe miasta nie mają tej granularności w danych).

**Generowanie tras:** Wcześniej ręczne (jednorazowy skrypt Python uruchomiony podczas naprawy routingu). Sformalizowane w `scripts/generate-routes.mjs` — deterministyczny, domyślnie dry-run, nigdy nic nie usuwa, nadpisuje wyłącznie pliki oznaczone jako wygenerowane przez siebie. Wszystkie 32 istniejące pliki zostały oznaczone (retrofit, tylko dodanie nagłówka — treść bez zmian) i potwierdzone jako w pełni zgodne z tym, co wygenerowałby skrypt od zera.

## 5. Zamknięcie blokerów treści + realny check TypeScript (bez npm install)

**TASK 1 — distanceNote:** Wykryto i naprawiono regresję — pole zawierało jeden szablon z podmienianą nazwą miasta (dokładnie ten błąd, przed którym ostrzega treść zadania). Zastąpione 21 osobno sformułowanymi, prawdziwymi zdaniami — bez czasów, odległości, dostępności czy zasięgu geograficznego, których nie da się zweryfikować. Dodatkowo naprawiono widoczny wyciek `[MIASTO SIEDZIBY]` w `components/CityHub.tsx` i `app/obszar-dzialania/page.tsx` (usunięto niepopartą faktami frazę o siedzibie, zamiast ją zmyślać).

**TASK 2 — FAQ duplication:** Odpowiedź FAQ dla `osuszanie-po-zalaniu-{miasto}` była już transakcyjna z linkiem `learnMoreHref` do `/blog/jak-dlugo-trwa-osuszanie-po-zalaniu` (zweryfikowano end-to-end: `Faq.tsx` faktycznie renderuje link). FAQ dla `pogotowie-hydrauliczne-{miasto}` korzysta bezpośrednio z `city.distanceNote`, więc naprawa Task 1 automatycznie ujednolica te odpowiedzi.

**Schema — 7 stron bez BreadcrumbList:** `/uslugi`, `/obszar-dzialania`, `/kontakt`, `/realizacje`, `/realizacje/[slug]`, `/blog`, `/o-nas` miały widoczne breadcrumbs, ale bez danych strukturalnych. Dodano `breadcrumbSchema()` + `<JsonLd>` do wszystkich 7.

**Błąd wprowadzony i naprawiony w tej samej turze:** automatyczny patch-skrypt przez błąd w deduplikacji importów usunął `import { site }` z 3 plików (`obszar-dzialania`, `kontakt`, `o-nas`) — wykryty przez własny follow-up grep, naprawiony, zweryfikowany.

**Realny check TypeScript (nie tylko liczenie nawiasów):** W sandboxie znaleziono globalnie zainstalowany `tsc` (6.0.3) — uruchomiono `tsc --noEmit -p tsconfig.json` na całym projekcie. Wynik: 642 błędy, z czego **100% to szum środowiskowy** (brak `@types/react`, `@types/node`, `next` — potwierdzone: `react` jest zainstalowany, ale bez pakietu typów). Jeden prawdziwy, powtarzalny błąd logiczny został znaleziony i naprawiony: wzorzec `if (!city) notFound();` bez `return` nie zawężał typu `City | undefined → City` w `components/CityHub.tsx`, `app/blog/[slug]/page.tsx`, `app/realizacje/[slug]/page.tsx` oraz w szablonie generatora (`scripts/generate-routes.mjs`) — naprawiono wszędzie (dodano `return null;`), 11 plików kombinacji usługa×miasto zregenerowano przez `node scripts/generate-routes.mjs --write`, potwierdzono zero błędów `TS18048`/`TS2322`/`TS2345` związanych z `City` po naprawie.

**Nierozwiązane świadomie (poza zakresem Task 1/2):** Dane tożsamości firmy w `data/site.ts` (`[NAZWA FIRMY]`, `[NUMER TELEFONU]`, `[EMAIL]`, `[ADRES]`) nadal renderują się jako widoczny tekst w ~15 plikach, w tym w Header, Footer i przycisku CTA na każdej stronie. To świadome, udokumentowane od pierwszej wiadomości w tym projekcie („nie wymyślaj danych firmowych”) — wymaga danych od właściciela, nie jest błędem tej fazy QA.
