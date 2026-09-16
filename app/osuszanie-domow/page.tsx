import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GenericServicePage from "@/components/GenericServicePage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("osuszanie-domow")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

export default function Page() {
  return (
    <GenericServicePage
      service={service}
      intro="W domach jednorodzinnych zawilgocenie często dotyczy piwnic i ścian fundamentowych — obszarów o innej charakterystyce niż typowe mieszkanie w bloku."
      bulletsTitle="Typowe obszary wymagające osuszania w domu"
      bullets={[
        "Piwnice i pomieszczenia gospodarcze",
        "Ściany fundamentowe",
        "Podłogi na gruncie",
        "Pomieszczenia po awarii instalacji wewnętrznej",
      ]}
      faqItems={[
        {
          question: "Czy osuszanie domu trwa dłużej niż mieszkania?",
          answer:
            "Zależy od skali zawilgocenia i kubatury pomieszczeń, a nie samego typu budynku — dokładny czas ustalamy po pomiarach.",
        },
      ]}
      showInsuranceNote
    />
  );
}
