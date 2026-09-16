import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { site } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "FAQ — najczęstsze pytania",
  description:
    "Odpowiedzi na najczęstsze pytania o pogotowie hydrauliczne, lokalizację wycieków i osuszanie po zalaniu.",
  path: "/faq",
});

const faqItems = [
  {
    question: "Kiedy wezwać pogotowie hydrauliczne?",
    answer:
      "Przy nagłych, niekontrolowanych awariach — pękniętej rurze, silnym wycieku, zalaniu. Planowe prace można umówić w zwykłym trybie.",
    learnMoreHref: "/blog/kiedy-wezwac-pogotowie-hydrauliczne",
    learnMoreLabel: "Pełny poradnik: kiedy wezwać pogotowie hydrauliczne",
  },
  {
    question: "Jak znaleźć wyciek bez kucia?",
    answer:
      "Stosujemy metody nieinwazyjne — termowizję, korelację akustyczną, gaz znacznikowy i pomiary wilgotności — dobierane do sytuacji.",
    learnMoreHref: "/blog/jak-znalezc-wyciek-bez-kucia",
    learnMoreLabel: "Pełny poradnik: jak znaleźć wyciek bez kucia",
  },
  {
    question: "Kto wykonuje osuszanie po zalaniu w województwie pomorskim?",
    answer: `${site.name} wykonuje osuszanie po zalaniu na terenie ${site.serviceAreaRegion}.`,
  },
  {
    question: "Ile trwa lokalizacja wycieku?",
    answer: "Zależy od typu instalacji i dostępności miejsc pomiarowych — dokładny czas ustalamy indywidualnie.",
  },
  {
    question: "Co zrobić po zalaniu mieszkania?",
    answer:
      "Odetnij dopływ wody, zabezpiecz instalację elektryczną w zalanej strefie, udokumentuj szkody zdjęciami i skontaktuj się z nami w celu umówienia osuszania.",
    learnMoreHref: "/blog/co-zrobic-po-zalaniu-mieszkania",
    learnMoreLabel: "Pełny poradnik: co zrobić po zalaniu mieszkania",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema(faqItems)} />
      <Breadcrumbs items={[{ name: "Strona główna", href: "/" }, { name: "FAQ", href: "/faq" }]} />
      <h1 className="mx-auto max-w-3xl px-4 pt-6 font-display text-3xl font-bold text-brand-950 sm:px-6 lg:px-8">
        Najczęstsze pytania
      </h1>
      <Faq items={faqItems} title="" />
    </>
  );
}
