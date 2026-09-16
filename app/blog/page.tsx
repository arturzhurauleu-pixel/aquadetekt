import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/data/site";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = buildMetadata({
  title: "Blog — centrum wiedzy o wyciekach i osuszaniu",
  description:
    "Praktyczne artykuły o wykrywaniu wycieków wody, osuszaniu po zalaniu i postępowaniu w sytuacjach awaryjnych.",
  path: "/blog",
});

const breadcrumbItems = [
    { name: "Strona główna", url: `${site.domain}/` },
    { name: "Blog", url: `${site.domain}/blog` },
];

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={[{ name: "Strona główna", href: "/" }, { name: "Blog", href: "/blog" }]} />
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-brand-950">Centrum wiedzy</h1>
        <p className="mt-3 max-w-2xl text-brand-700">
          Praktyczne informacje o wykrywaniu wycieków, osuszaniu po zalaniu i pierwszej reakcji na awarię.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-xl border border-brand-100 p-5 hover:bg-brand-50"
              >
                <h2 className="font-semibold text-brand-900">{post.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
