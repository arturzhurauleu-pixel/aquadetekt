import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GenericServicePage from "@/components/GenericServicePage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("pomiary-wilgotnosci")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

export default function Page() {
  return (
    <GenericServicePage
      service={service}
      intro="Pomiary wilgotności to podstawa rzetelnej diagnozy zawilgocenia i obiektywny sposób kontroli postępu osuszania — bez opierania się wyłącznie na ocenie wizualnej."
      bulletsTitle="Kiedy wykonujemy pomiary"
      bullets={[
        "Przed rozpoczęciem osuszania — jako punkt odniesienia",
        "W trakcie osuszania — kontrola postępu",
        "Po zakończeniu osuszania — potwierdzenie bezpiecznego poziomu wilgotności",
        "Przy diagnostyce podejrzanych miejsc wskazanych przez termowizję",
      ]}
      faqItems={[
        {
          question: "Jaką wilgotność uznaje się za bezpieczną?",
          answer:
            "Zależy od rodzaju materiału budowlanego i jego typowych wartości referencyjnych — porównujemy wynik z normami przyjętymi dla danego materiału.",
        },
      ]}
    />
  );
}
