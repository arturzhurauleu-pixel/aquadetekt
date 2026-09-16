import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import EmergencyBanner from "@/components/EmergencyBanner";
import JsonLd from "@/components/JsonLd";
import { PhoneCtaInline } from "@/components/PhoneCta";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { getServiceBySlug } from "@/data/services";
import { site } from "@/data/site";

const service = getServiceBySlug("wykrywanie-wyciekow")!;
const primaryService = getServiceBySlug("lokalizacja-wyciekow")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

const faqItems = [
  {
    question: "Czy każda metoda nadaje się do każdej sytuacji?",
    answer:
      "Nie — dobór metody zależy od materiału instalacji, rodzaju wykończenia i dostępności miejsc pomiarowych. Decyzję podejmujemy po wstępnym wywiadzie i oględzinach.",
  },
  {
    question: "Czy diagnostyka zawsze eliminuje konieczność kucia?",
    answer:
      "W większości przypadków tak, choć w niektórych sytuacjach może być potrzebne ograniczone odkrycie miejsca awarii — informujemy o tym przed rozpoczęciem prac.",
  },
  {
    question: "Chcę zamówić usługę — gdzie to zrobić?",
    answer:
      "Ta strona porównuje metody diagnostyczne. Samą usługę lokalizacji wycieku zamówisz na stronie „Lokalizacja wycieków”.",
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
        <p className="mb-4 rounded-lg bg-brand-50 px-4 py-3 text-sm text-brand-700">
          Ta strona porównuje metody diagnostyczne. Jeśli chcesz od razu zamówić usługę, przejdź do:{" "}
          <Link href={`/${primaryService.slug}`} className="font-semibold text-brand-900 underline">
            {primaryService.name}
          </Link>
          .
        </p>
        <h1 className="font-display text-3xl font-bold text-brand-950 sm:text-4xl">{service.h1}</h1>
        <p className="mt-4 text-lg text-brand-700">
          Zanim umówimy wizytę, dobieramy metodę do sytuacji. Poniżej porównanie czterech metod, którymi
          diagnozujemy wycieki wody — z ich mocnymi stronami i ograniczeniami.
        </p>
        <div className="mt-6">
          <PhoneCtaInline label="Zapytaj, która metoda pasuje do Twojej sytuacji" />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-brand-900">Porównanie metod</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              title: "Termowizja",
              good: "Szybka, nieinwazyjna, dobrze pokazuje duże powierzchnie naraz.",
              limit: "Wymaga odpowiedniej różnicy temperatur — nie zawsze da się jej użyć samodzielnie jako dowodu.",
            },
            {
              title: "Korelacja akustyczna",
              good: "Skuteczna przy metalowych i niektórych plastikowych rurach pod ciśnieniem.",
              limit: "Wymaga dostępu do co najmniej dwóch punktów instalacji po obu stronach podejrzanego odcinka.",
            },
            {
              title: "Gaz znacznikowy",
              good: "Bardzo precyzyjna lokalizacja, sprawdza się tam, gdzie inne metody nie dają jednoznacznego wyniku.",
              limit: "Wymaga możliwości czasowego odcięcia i przedmuchania badanego odcinka instalacji.",
            },
            {
              title: "Pomiary wilgotności",
              good: "Potwierdza zasięg zawilgocenia i pomaga ocenić skuteczność dalszego osuszania.",
              limit: "Samodzielnie nie wskazuje punktowego źródła wycieku — uzupełnia inne metody.",
            },
          ].map((m) => (
            <div key={m.title} className="rounded-xl border border-brand-100 p-5">
              <h3 className="font-semibold text-brand-900">{m.title}</h3>
              <p className="mt-2 text-sm text-brand-600">
                <span className="font-medium text-brand-800">Mocna strona: </span>
                {m.good}
              </p>
              <p className="mt-1 text-sm text-brand-600">
                <span className="font-medium text-brand-800">Ograniczenie: </span>
                {m.limit}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-brand-500">
          W praktyce metody często się uzupełniają — finalny dobór ustalamy po wstępnym wywiadzie i oględzinach.
        </p>
      </section>

      <EmergencyBanner />
      <Faq items={faqItems} />
    </>
  );
}
