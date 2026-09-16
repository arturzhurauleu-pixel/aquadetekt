import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GenericServicePage from "@/components/GenericServicePage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("wycieki-co")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

export default function Page() {
  return (
    <GenericServicePage
      service={service}
      intro="Instalacja centralnego ogrzewania ma inną specyfikę niż instalacja wodna — spadek ciśnienia czy konieczność częstego uzupełniania wody w układzie to typowe sygnały nieszczelności."
      bulletsTitle="Sygnały wycieku w instalacji CO"
      bullets={[
        "Regularny spadek ciśnienia w układzie",
        "Konieczność częstego dolewania wody do instalacji",
        "Wilgotne plamy przy grzejnikach lub przewodach",
        "Nierówne grzanie grzejników",
      ]}
      faqItems={[
        {
          question: "Czy wyciek w CO można zlokalizować bez odkrywania podłogi?",
          answer:
            "W wielu przypadkach tak — stosujemy metody nieinwazyjne dostosowane do specyfiki instalacji grzewczej.",
        },
      ]}
    />
  );
}
