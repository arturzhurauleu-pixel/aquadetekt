import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GenericServicePage from "@/components/GenericServicePage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("wycieki-pod-posadzka")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

export default function Page() {
  return (
    <GenericServicePage
      service={service}
      intro="Wycieki w instalacjach prowadzonych pod posadzką należą do trudniejszych do samodzielnego zdiagnozowania — objawy bywają odległe od faktycznego źródła problemu."
      bulletsTitle="Objawy wycieku pod posadzką"
      bullets={[
        "Podnosząca się lub pęczniejąca podłoga",
        "Wilgotne plamy przy listwach przypodłogowych",
        "Nienaturalnie ciepłe lub zimne miejsca na podłodze",
        "Wzrost zużycia wody bez widocznej przyczyny",
      ]}
      faqItems={[
        {
          question: "Czy lokalizacja wycieku pod posadzką zawsze wymaga jej zerwania?",
          answer:
            "Nie zawsze — w wielu przypadkach da się ustalić miejsce awarii metodami nieinwazyjnymi, a ewentualne odkrycie ograniczyć do niewielkiego fragmentu.",
        },
      ]}
    />
  );
}
