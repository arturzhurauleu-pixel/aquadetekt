import type { Metadata } from "next";
import { site } from "@/data/site";

/**
 * Builds consistent title/description/canonical/OG metadata for a page.
 * `path` must start with "/" (e.g. "/pogotowie-hydrauliczne").
 * `ogImage` defaults to a shared placeholder — replace with real per-page
 * social images once available (recommended: 1200x630, one per major page).
 */
export function buildMetadata({
  title,
  description,
  path,
  ogImage = "/og-default.jpg", // PLACEHOLDER — dodaj plik /public/og-default.jpg (1200x630)
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}): Metadata {
  const url = `${site.domain}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "pl_PL",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
