# AquaDetekt — Strategia SEO, architektura i plan treści
Pogotowie hydrauliczne / lokalizacja wycieków / osuszanie po zalaniu — woj. pomorskie

> Uwaga: wszystkie dane firmowe (nazwa, telefon, adres, liczba lat doświadczenia, certyfikaty, technologie, opinie) są oznaczone jako PLACEHOLDER. Uzupełnij je wyłącznie prawdziwymi danymi przed publikacją. Nazwa robocza "AquaDetekt" pochodzi z wcześniejszego prototypu — podmień, jeśli wybrałeś inną.

---

## 1. Kompletna struktura strony (sitemap)

```
/
/uslugi/
  /uslugi/pogotowie-hydrauliczne/
  /uslugi/hydraulik-24h/
  /uslugi/lokalizacja-wyciekow/
  /uslugi/wykrywanie-wyciekow/
  /uslugi/lokalizacja-wyciekow-bez-kucia/
  /uslugi/osuszanie-po-zalaniu/
  /uslugi/osuszanie-budynkow/
  /uslugi/usuwanie-skutkow-zalania/
  /uslugi/proba-szczelnosci/
  /uslugi/termowizja/
  /uslugi/pomiary-wilgotnosci/
/obszar-dzialania/
  /obszar-dzialania/gdansk/
    /obszar-dzialania/gdansk/hydraulik-24h/
    /obszar-dzialania/gdansk/lokalizacja-wyciekow/
    /obszar-dzialania/gdansk/osuszanie-po-zalaniu/
  /obszar-dzialania/gdynia/  (+ 3 podstrony jw.)
  /obszar-dzialania/sopot/   (+ 3 podstrony jw.)
  /obszar-dzialania/pruszcz-gdanski/
  /obszar-dzialania/rumia/
  /obszar-dzialania/reda/
  /obszar-dzialania/wejherowo/
  /obszar-dzialania/tczew/
  /obszar-dzialania/starogard-gdanski/
  /obszar-dzialania/malbork/
  /obszar-dzialania/kartuzy/
  /obszar-dzialania/zukowo/
  /obszar-dzialania/koscierzyna/
  /obszar-dzialania/chojnice/
  /obszar-dzialania/kwidzyn/
  /obszar-dzialania/puck/
  /obszar-dzialania/wladyslawowo/
  /obszar-dzialania/lebork/
  /obszar-dzialania/bytow/
  /obszar-dzialania/czluchow/
  /obszar-dzialania/nowy-dwor-gdanski/
  (Elbląg pominięty — dodaj tylko jeśli faktyczny zasięg działania go obejmuje)
/o-nas/
/blog/ + /blog/[slug]/
/faq/
/kontakt/
```

### Decyzja architektoniczna: URL-e lokalne
Zamiast płaskich URL-i typu `/hydraulik-gdansk/`, `/pogotowie-hydrauliczne-gdansk/` (ryzyko kanibalizacji i rozproszenia authority), rekomenduję **zagnieżdżoną strukturę** `/obszar-dzialania/[miasto]/[usluga]/`:

- Jedna strona-matka miasta (`/obszar-dzialania/gdansk/`) zbiera cały local authority i linkuje do 3 najważniejszych usług lokalnych (hydraulik 24h, lokalizacja wycieków, osuszanie po zalaniu) — to wystarcza dla miast drugorzędnych.
- Tylko dla 3 miast strategicznych (Gdańsk, Gdynia, Sopot) tworzymy pełne 3 podstrony usługowe — tam wolumen wyszukiwań uzasadnia osobne strony.
- Dla pozostałych miast: jedna solidna strona miasta obejmująca wszystkie usługi, bez sztucznego mnożenia doorway pages (zgodnie z wymogiem #9 z briefu).

To eliminuje kanibalizację między frazą ogólną ("lokalizacja wycieków") a frazą lokalną ("lokalizacja wycieków Gdańsk") — każda ma jeden jasny cel URL.

---

## 2. Keyword map

| Fraza | Typ | Intencja | Docelowa strona | Priorytet | Ryzyko kanibalizacji |
|---|---|---|---|---|---|
| pogotowie hydrauliczne | core | transactional | /uslugi/pogotowie-hydrauliczne/ | Wysoki | Niskie |
| pogotowie hydrauliczne 24h | commercial | transactional | /uslugi/pogotowie-hydrauliczne/ | Wysoki | Średnie (vs hydraulik-24h) |
| hydraulik 24h | commercial | transactional | /uslugi/hydraulik-24h/ | Wysoki | Średnie |
| hydraulik z dojazdem | commercial | transactional | /uslugi/hydraulik-24h/ (sekcja) | Średni | Niskie |
| lokalizacja wycieków | core | transactional | /uslugi/lokalizacja-wyciekow/ | Wysoki | Niskie |
| wykrywanie wycieków wody | core | transactional | /uslugi/wykrywanie-wyciekow/ (kanoniczny redirect/uzupełnienie do lokalizacja-wyciekow, jeśli treść się dubluje) | Wysoki | Wysokie — patrz uwaga niżej |
| lokalizacja wycieków bez kucia | long-tail | transactional | /uslugi/lokalizacja-wyciekow-bez-kucia/ | Wysoki | Średnie (vs lokalizacja-wyciekow) |
| wycieki pod posadzką / w ścianach / z CO | informational/semantic | informational→transactional | sekcje w /uslugi/lokalizacja-wyciekow/ + osobne akapity blog | Średni | Niskie |
| osuszanie po zalaniu | core | transactional | /uslugi/osuszanie-po-zalaniu/ | Wysoki | Niskie |
| osuszanie budynków | commercial | transactional | /uslugi/osuszanie-budynkow/ | Średni | Wysokie — patrz uwaga |
| osuszanie mieszkań po zalaniu | long-tail | transactional | /uslugi/osuszanie-po-zalaniu/ (sekcja + H2) | Wysoki | Niskie |
| usuwanie skutków zalania | commercial | transactional | /uslugi/usuwanie-skutkow-zalania/ | Średni | Wysokie — patrz uwaga |
| próba szczelności instalacji | core | transactional | /uslugi/proba-szczelnosci/ | Niski/Średni | Niskie |
| termowizja | semantic/technical | informational→transactional | /uslugi/termowizja/ | Niski/Średni | Niskie |
| pomiary wilgotności | semantic/technical | informational | /uslugi/pomiary-wilgotnosci/ | Niski | Niskie |
| hydraulik 24h pomorskie / Gdańsk | local | transactional | /obszar-dzialania/[miasto]/ | Wysoki | Niskie (osobny URL) |
| pogotowie hydrauliczne Gdańsk | local | transactional | /obszar-dzialania/gdansk/ | Wysoki | Niskie |
| ile kosztuje lokalizacja wycieku | informational | informational | blog | Średni | — |
| jak długo trwa osuszanie | informational | informational | blog | Średni | — |

### Uwaga o kanibalizacji: 3 klastry bliźniacze
1. **wykrywanie wycieków vs lokalizacja wycieków** — to w praktyce ta sama intencja użytkownika. Rekomendacja: `/uslugi/lokalizacja-wyciekow/` jako strona kanoniczna (wyższy wolumen), a `/uslugi/wykrywanie-wyciekow/` albo (a) usunąć i przekierować 301, albo (b) jeśli chcesz utrzymać dwie strony, mocno zróżnicować kąt (np. "wykrywanie wycieków" = strona bardziej techniczna/technologiczna, "lokalizacja wycieków" = strona usługowo-sprzedażowa) i wzajemnie linkować z jasnym rozróżnieniem w treści.
2. **osuszanie budynków vs osuszanie po zalaniu** — "osuszanie po zalaniu" to węższa, bardziej transakcyjna intencja (nagły wypadek); "osuszanie budynków" to szersza usługa (może objąć np. nowe budownictwo, wilgoć budowlaną). Zróżnicuj treściowo albo scal w jedną rozbudowaną stronę z sekcjami.
3. **usuwanie skutków zalania vs osuszanie po zalaniu** — bardzo blisko siebie. Rekomendacja: scalić w jedną stronę `/uslugi/osuszanie-po-zalaniu/`, gdzie "usuwanie skutków zalania" jest jednym z H2 (obejmuje np. demontaż podłóg, wywóz gruzu, ochronę przed pleśnią), zamiast tworzyć osobny URL.

**Semantic keywords** (do naturalnego wplecenia we wszystkie strony): wilgoć, zawilgocenie, grzyb, pleśń, wilgotność względna, punkt rosy, higrometr, osuszacz kondensacyjny, osuszacz adsorpcyjny, nawiew, wentylacja techniczna, kosztorys, likwidacja szkody, ubezpieczyciel, polisa OC, zgłoszenie szkody.

**Emergency keywords**: awaria w nocy, pęknięta rura, zalanie sąsiada, zalanie z góry, zatopione mieszkanie, hydraulik na już, pilna interwencja.

---

## 3. Strategia SEO dla woj. pomorskiego

- **Hub-and-spoke**: strona główna + strony usług ogólnych budują authority tematyczne (topical authority) dla całego regionu; strony `/obszar-dzialania/[miasto]/` przechwytują long-tail lokalny ("hydraulik 24h Gdańsk", "lokalizacja wycieków Gdynia").
- **Jedna prawdziwa siedziba** — nie tworzymy fałszywych adresów w innych miastach. Każda strona lokalna jasno komunikuje: siedziba w [MIASTO SIEDZIBY], obszar dojazdu obejmuje [MIASTO X] w promieniu ok. [X] km / do [X] minut.
- **Priorytetyzacja miast**: Gdańsk, Gdynia, Sopot, Pruszcz Gdański, Rumia jako tier 1 (najbliżej siedziby / najwyższy wolumen); pozostałe jako tier 2 z prostszą, ale wciąż unikalną treścią.
- **GEO/AI search**: każda strona usługowa i lokalna zawiera sekcję FAQ sformułowaną jako pytanie wprost ("Kto oferuje pogotowie hydrauliczne w Gdańsku?") z jednoznaczną, zwięzłą odpowiedzią w 2–3 zdaniach — ułatwia to cytowanie przez AI Overviews i asystentów głosowych.

---

## 4. Strategia Local SEO

- Google Business Profile: [LINK DO GOOGLE BUSINESS PROFILE] — spójne NAP (Name, Address, Phone) identyczne jak na stronie, w stopce i w danych strukturalnych.
- Kategoria główna GBP: [DO USTALENIA — np. "Firma hydrauliczna" / "Usługi osuszania"].
- Zdjęcia realizacji (przed/po osuszaniu, sprzęt w akcji) — realne, nie stockowe.
- Opinie: zbieraj systematycznie po każdej zakończonej usłudze (link SMS/e-mail); wyświetlaj na stronie tylko prawdziwe, możliwe do zweryfikowania.
- Spójność NAP w katalogach branżowych (Panorama Firm, Oferteo, PKT.pl) — do zrobienia po starcie strony.
- Mapa Google osadzona w `/kontakt/` i w stopce.

---

## 5. Strategia internal linking

```
Strona główna
 ├─→ /uslugi/pogotowie-hydrauliczne/  ─→ /obszar-dzialania/[najbliższe miasta]/
 ├─→ /uslugi/lokalizacja-wyciekow/    ─→ /uslugi/lokalizacja-wyciekow-bez-kucia/, /uslugi/termowizja/
 ├─→ /uslugi/osuszanie-po-zalaniu/    ─→ /uslugi/pomiary-wilgotnosci/, blog (pleśń, grzyb)
 ├─→ /obszar-dzialania/ (strona zbiorcza z mapą) ─→ wszystkie miasta
 └─→ /blog/ ─→ artykuły ─→ odpowiednia strona usługowa (anchor: fraza kluczowa, nie "kliknij tutaj")

Każda strona lokalna ─→ 3 główne usługi + strona /kontakt/
Każdy artykuł blogowy ─→ min. 1 strona usługowa + 1 inny powiązany artykuł
```

Zasada: strona główna i strony usług ogólnych przekazują authority w dół do stron lokalnych i bloga; blog i strony lokalne linkują z powrotem do usług ogólnych — zamknięty, logiczny obieg.

---

## 6. Struktura każdej głównej podstrony usługowej

1. Breadcrumbs
2. H1 (fraza główna + lokalizacja regionu)
3. Lead (1 akapit — co robimy, dla kogo, gdzie)
4. Sticky CTA telefon (mobile) / widoczny CTA (desktop)
5. "Kiedy warto skorzystać z tej usługi" / objawy problemu
6. Jak wygląda proces (kroki, numerowane)
7. Technologie / metody (bez wymyślania nieposiadanego sprzętu)
8. Obszar działania (link do `/obszar-dzialania/`)
9. Dlaczego my (konkretne przewagi, bez pustych sloganów)
10. FAQ (Schema FAQPage)
11. CTA końcowe + formularz zgłoszenia
12. Linki wewnętrzne do powiązanych usług

---

## 7. Meta Titles i Meta Descriptions (przykłady)

| Strona | Title | Meta Description |
|---|---|---|
| / | Pogotowie hydrauliczne i osuszanie po zalaniu — woj. pomorskie \| [NAZWA FIRMY] | Awaria hydrauliczna, lokalizacja wycieków bez kucia, osuszanie po zalaniu. Dojazd na terenie woj. pomorskiego. Zadzwoń: [NUMER TELEFONU]. |
| /uslugi/lokalizacja-wyciekow/ | Lokalizacja wycieków wody bez kucia — Pomorskie \| [NAZWA FIRMY] | Wykrywamy ukryte wycieki wody pod posadzką, w ścianach i instalacji CO bez rozkuwania. Sprawdź obszar działania i umów wizytę. |
| /uslugi/osuszanie-po-zalaniu/ | Osuszanie po zalaniu mieszkania i domu — Pomorskie | Profesjonalne osuszanie ścian, podłóg i posadzek po zalaniu. Pomiary wilgotności, kontrola postępu, ograniczenie ryzyka pleśni. |
| /obszar-dzialania/gdansk/ | Hydraulik 24h i lokalizacja wycieków — Gdańsk | Pogotowie hydrauliczne, lokalizacja wycieków i osuszanie po zalaniu w Gdańsku i okolicach. Sprawdź dzielnice objęte obsługą. |

(Pełną tabelę dla wszystkich ~35 podstron przygotuję analogicznie po ustaleniu ostatecznej listy miast/usług — struktura jest powtarzalna.)

---

## 8. Strategia bloga / centrum wiedzy (30 tematów)

**Lokalizacja wycieków**
1. Jak znaleźć wyciek wody w domu? → gł. słowo: "jak znaleźć wyciek wody", intencja: informational → CTA do /uslugi/lokalizacja-wyciekow/
2. Ile kosztuje lokalizacja wycieku wody? → "ile kosztuje lokalizacja wycieku"
3. Jak rozpoznać ukryty wyciek wody? → "ukryty wyciek wody objawy"
4. Wyciek wody pod posadzką — co zrobić krok po kroku?
5. Wyciek w ścianie — objawy, których nie wolno ignorować
6. Jak działa lokalizacja wycieków bez kucia?
7. Termowizja w wykrywaniu wycieków — jak to działa?
8. Gaz znacznikowy w lokalizacji wycieków — na czym polega metoda?
9. Wyciek z instalacji centralnego ogrzewania — jak go rozpoznać?
10. Próba szczelności instalacji — kiedy jest wymagana?
11. Rosnący rachunek za wodę — czy to może być wyciek?
12. Wilgoć na suficie sąsiada z dołu — czyja to odpowiedzialność?

**Osuszanie po zalaniu**
13. Co zrobić zaraz po zalaniu mieszkania — pierwsze 24 godziny
14. Jak długo trwa osuszanie po zalaniu?
15. Jak sprawdza się wilgotność ścian po zalaniu?
16. Czy można mieszkać w mieszkaniu w trakcie osuszania?
17. Osuszanie posadzki pływającej — na co uważać?
18. Zalanie parkietu — ratować czy wymieniać?
19. Pleśń po zalaniu — jak jej uniknąć?
20. Osuszanie piwnicy po zalaniu / podtopieniu
21. Zalanie mieszkania przez sąsiada z góry — co robić w pierwszej kolejności?
22. Osuszacz kondensacyjny czy adsorpcyjny — czym się różnią?

**Awarie i pogotowie hydrauliczne**
23. Kiedy wezwać pogotowie hydrauliczne, a kiedy wystarczy hydraulik?
24. Pęknięta rura — jak ograniczyć szkody do przyjazdu hydraulika?
25. Awaria hydrauliczna w nocy — co robić krok po kroku?
26. Jak zakręcić główny zawór wody w bloku / domu jednorodzinnym?
27. Zatkana instalacja kanalizacyjna — objawy i pierwsza pomoc

**Ubezpieczenia i formalności**
28. Czy ubezpieczenie mieszkania pokrywa koszty osuszania po zalaniu?
29. Jak zgłosić szkodę po zalaniu do ubezpieczyciela?
30. Kosztorys szkody wodnej — co powinien zawierać?

Dla każdego tematu docelowo: dedykowany brief z H1, Title, Meta Description, strukturą H2/H3, FAQ i linkami wewnętrznymi — mogę przygotować pełne briefy artykuł po artykule, jeśli chcesz zacząć od konkretnych 3–5.

---

## 9. Schema markup — plan wdrożenia

- `Organization` / `LocalBusiness` (podtyp: `PlumbingService` jeśli dotyczy, plus custom typ usługi osuszania) — na każdej stronie w layout głównym.
- `Service` — na każdej stronie `/uslugi/*`.
- `FAQPage` — na każdej stronie z sekcją FAQ.
- `BreadcrumbList` — na każdej podstronie.
- `WebSite` (z `SearchAction`, jeśli wdrożysz wyszukiwarkę) — raz, w layout.
- `AggregateRating` — TYLKO po podłączeniu realnych, weryfikowalnych opinii (np. z Google Business Profile API) — nie wcześniej.

Kod poniżej implementuje generyczny komponent `<JsonLd>` używany na wszystkich stronach.

---

## 10. UX / Conversion Rate Optimization

- Sticky pasek telefonu na mobile (zawsze widoczny, jeden tap = połączenie).
- Formularz "Zgłoś awarię" maks. 4 pola (imię, telefon, miasto, krótki opis) — mniej pól = wyższa konwersja w sytuacjach awaryjnych.
- CTA po każdej sekcji treści, nie tylko na górze i dole strony.
- Sekcja "Potrzebujesz pomocy teraz?" jako moduł powtarzalny, wstawiany w połowie długich podstron.
- Jasne oznaczenie dostępności 24/7 TYLKO jeśli to prawda — inaczej użyj realnych godzin pracy.
- Core Web Vitals: obrazy w WebP/AVIF przez `next/image`, lazy loading domyślny, minimalny JS na stronach statycznych (App Router + RSC), fonty z `next/font` (self-hosted, brak layout shift).

---

## 11. Design system (kierunek)

- **Paleta**: głęboki granat/petrol (#0B3D4C lub podobny) jako kolor główny (zaufanie, woda, profesjonalizm) + ciepły akcent pomarańczowo-czerwony (#E85D3D) wyłącznie do CTA/alertów (awaria = pilność) + neutralne szarości/biel jako tło.
- **Typografia**: nagłówki — pismo o mocnym, pewnym kroju (np. w duchu Inter/Sora, wysokie kontrasty wagi), tekst — czytelny grotesk (Inter/Source Sans).
- **Ikony**: liniowe, jednolita grubość kreski, motyw techniczny (kropla, fala, termometr, dom) — nie kreskówkowe.
- **Zdjęcia**: realne zdjęcia realizacji i sprzętu w akcji zamiast stockowych uśmiechniętych hydraulików — buduje wiarygodność.
- **Karty usług**: cień delikatny, ikona + H3 + 1 zdanie + link "Dowiedz się więcej →".
- **Header**: logo + menu + wyraźny przycisk telefonu w kolorze akcentu, sticky na scroll.
- **Footer**: NAP, obszar działania, linki do wszystkich usług, social proof, linki prawne.

---

Poniżej pełny kod produkcyjny (Next.js 14 App Router + TypeScript + Tailwind) realizujący ten plan: layout, strona główna, 3 kluczowe podstrony usługowe, generyczny system stron lokalnych (data-driven, gotowy do rozszerzenia na wszystkie miasta bez duplikacji kodu), komponenty Schema.org, sitemap.xml i robots.txt.
