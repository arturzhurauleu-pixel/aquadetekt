import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProcessSteps from "@/components/ProcessSteps";
import Faq from "@/components/Faq";
import EmergencyBanner from "@/components/EmergencyBanner";
import JsonLd from "@/components/JsonLd";
import { PhoneCtaInline } from "@/components/PhoneCta";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { getServiceBySlug } from "@/data/services";
import { site } from "@/data/site";

const service = getServiceBySlug("pogotowie-hydrauliczne")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

const faqItems = [
  {
    question: "Kiedy warto wezwać pogotowie hydrauliczne, a kiedy wystarczy zwykły hydraulik?",
    answer:
      "Pogotowie hydrauliczne ma sens przy nagłych, niekontrolowanych awariach — pękniętej rurze, silnym wycieku, zalaniu. Planowe prace (wymiana baterii, montaż) można umówić w zwykłym trybie.",
    learnMoreHref: "/blog/kiedy-wezwac-pogotowie-hydrauliczne",
    learnMoreLabel: "Pełny poradnik: kiedy wezwać pogotowie hydrauliczne",
  },
  {
    question: "Co zrobić przed przyjazdem hydraulika?",
    answer:
      "Odetnij główny zawór wody, jeśli to możliwe wyłącz prąd w zalanej strefie i zabezpiecz wartościowe przedmioty przed dalszym zalaniem.",
  },
  {
    question: "Jak szybko możecie dotrzeć na miejsce?",
    answer:
      "Czas dojazdu zależy od miejscowości i bieżącego obłożenia. Zadzwoń, aby ustalić orientacyjny czas przyjazdu.",
  },
];

const breadcrumbItems = [
  { name: "Strona główna", url: `${site.domain}/` },
  { name: "Usługi", url: `${site.domain}/uslugi` },
  { name: service.name, url: `${site.domain}/${service.slug}` },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbItems),
          serviceSchema({
            name: service.name,
            description: service.metaDescription,
            url: `${site.domain}/${service.slug}`,
          }),
          faqSchema(faqItems),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Strona główna", href: "/" },
          { name: "Usługi", href: "/uslugi" },
          { name: service.name, href: `/${service.slug}` },
        ]}
      />

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-brand-950 sm:text-4xl">{service.h1}</h1>
        <p className="mt-4 text-lg text-brand-700">
          Pomagamy w nagłych awariach instalacji wodnych, kanalizacyjnych i centralnego ogrzewania na terenie{" "}
          {site.serviceAreaRegion}. Poniżej znajdziesz zakres interwencji i to, co warto zrobić do naszego przyjazdu.
        </p>
        <div className="mt-6">
          <PhoneCtaInline label="Zgłoś awarię — zadzwoń" />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-brand-900">Jakie awarie obsługujemy</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            "Pęknięta lub przeciekająca rura",
            "Nagły, niekontrolowany wyciek wody",
            "Zatkana instalacja kanalizacyjna",
            "Awaria instalacji centralnego ogrzewania",
            "Wyciek przy baterii, zaworze lub podejściu wodnym",
            "Zalanie mieszkania lub piwnicy",
          ].map((item) => (
            <li key={item} className="flex gap-2 rounded-lg bg-brand-50 p-3 text-sm text-brand-800">
              <span aria-hidden>•</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <ProcessSteps
        title="Jak wygląda interwencja"
        steps={[
          "Zgłoszenie telefoniczne — krótki opis sytuacji i ustalenie orientacyjnego czasu dojazdu.",
          "Ocena sytuacji na miejscu i zabezpieczenie awarii (np. odcięcie wody).",
          "Diagnoza przyczyny awarii.",
          "Naprawa lub — jeśli źródło awarii nie jest oczywiste — lokalizacja wycieku metodami nieinwazyjnymi.",
          "Podsumowanie wykonanych prac i rekomendacje dalszych kroków (np. osuszanie, jeśli doszło do zalania).",
        ]}
      />

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-brand-900">
          Co zrobić przed przyjazdem hydraulika
        </h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-brand-700">
          <li>Zakręć główny zawór wody, jeśli awaria dotyczy instalacji wodnej.</li>
          <li>Wyłącz prąd w zalanej strefie, jeśli istnieje ryzyko kontaktu wody z instalacją elektryczną.</li>
          <li>Usuń lub podnieś przedmioty narażone na dalsze zalanie.</li>
          <li>Zrób zdjęcia szkód — przydadzą się przy ewentualnym zgłoszeniu do ubezpieczyciela.</li>
        </ol>
      </section>

      <EmergencyBanner />
      <Faq items={faqItems} />
    </>
  );
}
