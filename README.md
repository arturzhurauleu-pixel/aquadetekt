# AquaDetekt — strona SEO (Next.js)

Kompletny szkielet strony dla usług: pogotowie hydrauliczne, lokalizacja wycieków, osuszanie po zalaniu —
zoptymalizowany pod woj. pomorskie. Pełna strategia SEO/UX/treści: `STRATEGIA-SEO.md`.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Strona wystartuje na `http://localhost:3000`.

## Build produkcyjny

```bash
npm run build
npm run start
```

Projekt jest w pełni statyczny/SSG-owalny dzięki `generateStaticParams` na stronach miast i wpisów blogowych —
nadaje się do wdrożenia np. na Vercel bez dodatkowej konfiguracji.

## ⚠️ Przed publikacją — checklist PLACEHOLDER

Wszystkie poniższe dane są celowo wypełnione placeholderami (zgodnie z briefem: „nie wymyślaj informacji”).
Uzupełnij je w `data/site.ts`, zanim opublikujesz stronę:

- [ ] `site.name` — nazwa firmy (obecnie robocza: AquaDetekt)
- [ ] `site.phone` / `site.phoneHref` — numer telefonu
- [ ] `site.email`
- [ ] `site.address` — ulica, miasto siedziby, kod pocztowy
- [ ] `site.isAvailable247` — ustaw na `true` TYLKO jeśli dostępność 24/7 jest faktycznie potwierdzona (obecnie `false`, co wyłącza komunikaty "24/7" w UI)
- [ ] `site.openingHours`
- [ ] `site.googleBusinessProfileUrl` i `site.googleMapsEmbedUrl` — po utworzeniu profilu Google Business
- [ ] `site.yearsOfExperience` — wpisz tylko jeśli masz potwierdzoną liczbę
- [ ] `site.technologies` — odznacz `false` przy każdej technologii, której firma faktycznie nie posiada (aktualnie `inspectionCamera: false`)
- [ ] `site.socialProof.reviews` — dodaj TYLKO prawdziwe, weryfikowalne opinie; puste pozostawia AggregateRating pominięty w schema (zgodnie z briefem)
- [ ] `data/cities.ts` → pole `distanceNote` dla każdego miasta — realny opis czasu/trasy dojazdu z siedziby
- [ ] Podmień `[NAZWA FIRMY]` występujące w tytułach/meta description w `data/services.ts` i `data/cities.ts` (find & replace po ustaleniu ostatecznej nazwy)
- [ ] Realne zdjęcia (obecnie brak obrazów — projekt czeka na materiał zdjęciowy z realizacji)

## Struktura

```
app/                      → strony (App Router), URL-e płaskie: /pogotowie-hydrauliczne/, /hydraulik-gdansk/ itd.
  [usługa]/                → 18 stron usługowych (w tym long-tail: wycieki-pod-posadzka, wycieki-w-scianie...)
  [usługa]-[city]/         → dedykowane strony usługa+miasto dla Gdańska/Gdyni/Sopotu (generateStaticParams filtrowany po city.localServicePages)
  hydraulik-[city]/        → strona-hub dla wszystkich 21 miast
  blog/[slug]/             → 10 opublikowanych artykułów (przeszły checklistę jakości — patrz AUDYT-KONCOWY.md)
  realizacje/[slug]/        → system case studies (pusty, gotowy na realne realizacje)
  sitemap.ts, robots.ts    → generowane automatycznie z danych w data/
components/               → komponenty UI współdzielone
data/                     → JEDYNE miejsce z danymi firmowymi, usługami, miastami, artykułami, realizacjami
lib/schema.ts             → generatory danych strukturalnych Schema.org
lib/seo.ts                → buildMetadata() — canonical URL + Open Graph/Twitter dla każdej strony
STRATEGIA-SEO.md          → pełna strategia SEO / content / UX
AUDYT-KONCOWY.md          → audyt jakości treści blogowej + wyniki audytu technicznego/UX/a11y i naprawione problemy
```

## Rozbudowa

- **Więcej miast**: dodaj wpis do `data/cities.ts`, następnie uruchom `node scripts/generate-routes.mjs --write` — utworzy brakujący `app/hydraulik-[slug]/page.tsx`. Skrypt nigdy nic nie usuwa i nigdy nie nadpisuje ręcznie edytowanych plików (patrz komentarz na górze skryptu).
- **Dedykowana strona usługa+miasto**: dodaj slug usługi do `city.localServicePages` w `data/cities.ts`, potem `node scripts/generate-routes.mjs --write`.
- **Jak działa generowanie tras** (32 literalne foldery: 21 hubów miast + 11 kombinacji usługa+miasto): `scripts/generate-routes.mjs` parsuje `data/cities.ts` i `data/services.ts` jako tekst (bez zależności od node_modules), tworzy brakujące pliki `page.tsx` i **domyślnie działa w trybie dry-run** (nic nie zapisuje, dopóki nie dodasz `--write`). Pliki, które wygenerował, oznacza komentarzem `// AUTO-GENERATED` na górze — tylko takie pliki są bezpiecznie nadpisywane przy kolejnych uruchomieniach; jeśli ręcznie zmienisz treść jednej z tych stron, usuń ten komentarz, a skrypt zacznie ją pomijać (SKIP) zamiast nadpisywać.
- **Więcej artykułów**: dodaj pełny obiekt `BlogPost` do `data/blog.ts` — ale NAJPIERW przejdź checklistę z `AUDYT-KONCOWY.md` (primary keyword → URL → intent → target service → internal links → cannibalization). Tematy bez pełnej checklisty trzymaj w `blogBacklog`, nie publikuj.
- **Realizacje**: dodawaj wyłącznie prawdziwe, zgodne z faktami wpisy do `data/case-studies.ts` — struktura już obsługuje pełen wymagany zakres pól (problem, diagnoza, technologia, efekt, pomiary).
- **Formularz zgłoszenia**: `components/QuickReportForm.tsx` ma zaznaczone miejsce (`TODO`) na podłączenie
  właściwego endpointu wysyłki (e-mail / CRM / webhook).
- **Zdjęcia**: dodawaj przez `next/image` (automatyczny WebP/AVIF + lazy loading) — zgodnie z wymogiem Core Web Vitals z briefu.
