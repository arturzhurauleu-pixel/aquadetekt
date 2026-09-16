import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { blogPosts } from "@/data/blog";
import { caseStudies } from "@/data/case-studies";
import { lokalizacjaBezKuciaService } from "@/data/service-lokalizacja-bez-kucia";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/uslugi", "/obszar-dzialania", "/o-nas", "/realizacje", "/blog", "/faq", "/kontakt"].map((path) => ({
    url: `${site.domain}${path}`,
    lastModified: new Date(),
  }));

  // Strony z canonicalTargetSlug wskazują na inną stronę (potwierdzona
  // kanibalizacja z audytu SERP) — pomijamy je jako osobne wpisy w sitemap,
  // żeby nie wysyłać do Google dwóch adresów dla tej samej intencji.
  const serviceRoutes = [...services, lokalizacjaBezKuciaService]
    .filter((s) => !s.canonicalTargetSlug)
    .map((s) => ({
    url: `${site.domain}/${s.slug}`,
    lastModified: new Date(),
  }));

  const cityRoutes = cities.map((c) => ({
    url: `${site.domain}/hydraulik-${c.slug}`,
    lastModified: new Date(),
  }));

  // Dedykowane strony usługa+miasto (tylko tam, gdzie city.localServicePages
  // faktycznie wskazuje na dedykowaną stronę — patrz data/cities.ts)
  const localServiceCityRoutes = cities.flatMap((c) =>
    c.localServicePages.map((serviceSlug) => ({
      url: `${site.domain}/${serviceSlug}-${c.slug}`,
      lastModified: new Date(),
    }))
  );

  const blogRoutes = blogPosts.map((p) => ({
    url: `${site.domain}/blog/${p.slug}`,
    lastModified: new Date(),
  }));

  const caseStudyRoutes = caseStudies.map((cs) => ({
    url: `${site.domain}/realizacje/${cs.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...localServiceCityRoutes, ...blogRoutes, ...caseStudyRoutes];
}
