import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GenericServicePage from "@/components/GenericServicePage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("awarie-hydrauliczne")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

export default function Page() {
  return (
    <GenericServicePage
      service={service}
      intro="Awarie instalacji wodnej, kanalizacyjnej i centralnego ogrzewania wymagają szybkiej diagnozy — im wcześniej ustalimy przyczynę, tym mniejsze ryzyko dalszych szkód."
      bulletsTitle="Typowe przyczyny awarii"
      bullets={[
        "Korozja lub zużycie starych odcinków instalacji",
        "Uszkodzenia mechaniczne rur (np. podczas prac remontowych)",
        "Nieszczelne połączenia i złączki",
        "Zamarznięcie instalacji w okresie zimowym",
      ]}
      faqItems={[
        {
          question: "Czy każda awaria wymaga natychmiastowej interwencji?",
          answer:
            "Nie zawsze — niewielkie, kontrolowane nieszczelności można czasem zaplanować w normalnym trybie. W razie wątpliwości zadzwoń, ocenimy sytuację.",
        },
      ]}
    />
  );
}
