import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GenericServicePage from "@/components/GenericServicePage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("proba-szczelnosci")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

export default function Page() {
  return (
    <GenericServicePage
      service={service}
      intro="Próba szczelności potwierdza, że instalacja wodna lub centralnego ogrzewania nie ma nieszczelności — wykonywana po naprawie, montażu lub jako element odbioru instalacji."
      bulletsTitle="Kiedy wykonuje się próbę szczelności"
      bullets={[
        "Po naprawie lub wymianie fragmentu instalacji",
        "Przed zakryciem instalacji podposadzkowej lub w ścianie",
        "Przy odbiorze nowej instalacji",
        "Po podejrzeniu nieszczelności, gdy inne metody nie dały jednoznacznej odpowiedzi",
      ]}
      faqItems={[
        {
          question: "Jak długo trwa próba szczelności?",
          answer:
            "Czas zależy od rodzaju instalacji i przyjętej procedury — ustalamy go indywidualnie przed wykonaniem próby.",
        },
      ]}
    />
  );
}
