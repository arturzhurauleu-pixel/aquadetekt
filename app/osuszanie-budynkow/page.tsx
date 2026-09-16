import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GenericServicePage from "@/components/GenericServicePage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("osuszanie-budynkow")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

export default function Page() {
  return (
    <GenericServicePage
      service={service}
      intro="Osuszanie budynków obejmuje sytuacje szersze niż samo zalanie — np. wilgoć budowlaną po pracach mokrych, długotrwałe zawilgocenie ścian fundamentowych czy piwnic. Jeśli szukasz osuszania po konkretnym zalaniu, zobacz stronę osuszania po zalaniu."
      bulletsTitle="Kiedy stosujemy osuszanie budynków"
      bullets={[
        "Wilgoć budowlana po pracach mokrych (tynkowanie, wylewki)",
        "Długotrwałe zawilgocenie ścian fundamentowych i piwnic",
        "Zawilgocenie wynikające z nieszczelności izolacji przeciwwilgociowej",
        "Kontrola wilgotności przed pracami wykończeniowymi",
      ]}
      faqItems={[
        {
          question: "Czym różni się osuszanie budynków od osuszania po zalaniu?",
          answer:
            "Osuszanie po zalaniu dotyczy nagłego zdarzenia (awaria, zalanie). Osuszanie budynków obejmuje szerszy zakres — np. wilgoć budowlaną czy długotrwałe zawilgocenie niezwiązane z jednorazowym incydentem.",
        },
      ]}
      showInsuranceNote
    />
  );
}
