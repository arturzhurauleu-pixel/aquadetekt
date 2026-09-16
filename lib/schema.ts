import { site } from "@/data/site";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "PlumbingService", // podtyp LocalBusiness dedykowany usługom hydraulicznym
    name: site.name,
    legalName: site.legalName,
    taxID: site.nip, // NIP
    identifier: [
      { "@type": "PropertyValue", propertyID: "REGON", value: site.regon },
      { "@type": "PropertyValue", propertyID: "KRS", value: site.krs },
    ],
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: site.serviceAreaRegion,
    },
    url: site.domain,
    // aggregateRating celowo pominięty — dodaj tylko po podłączeniu realnych opinii
  };
}

export function serviceSchema(params: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: params.name,
    name: params.name,
    description: params.description,
    url: params.url,
    provider: {
      "@type": "PlumbingService",
      name: site.name,
      telephone: site.phone,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: site.serviceAreaRegion,
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.domain,
  };
}
