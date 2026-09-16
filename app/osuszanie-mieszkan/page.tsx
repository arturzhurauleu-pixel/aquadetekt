import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GenericServicePage from "@/components/GenericServicePage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("osuszanie-mieszkan")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

export default function Page() {
  return (
    <GenericServicePage
      service={service}
      intro="Osuszanie mieszkania po zalaniu obejmuje zwykle kilka elementów naraz — ściany, podłogę, a czasem zabudowę meblową — dlatego zakres prac ustalamy indywidualnie po oględzinach."
      bulletsTitle="Co najczęściej wymaga osuszenia w mieszkaniu"
      bullets={[
        "Ściany działowe i nośne",
        "Podłogi i posadzki, w tym pod panelami",
        "Zabudowa kuchenna lub łazienkowa narażona na zalanie",
        "Przestrzeń pod wanną lub brodzikiem",
      ]}
      faqItems={[
        {
          question: "Czy trzeba wyprowadzić się z mieszkania na czas osuszania?",
          answer:
            "Zwykle nie jest to konieczne, choć praca urządzeń wiąże się z hałasem i podwyższoną temperaturą — ustalamy to indywidualnie.",
        },
      ]}
      showInsuranceNote
    />
  );
}
