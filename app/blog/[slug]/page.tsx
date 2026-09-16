import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { PhoneCtaInline } from "@/components/PhoneCta";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { getServiceBySlug } from "@/data/services";
import { site } from "@/data/site";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return buildMetadata({ title: post.metaTitle, description: post.metaDescription, path: `/blog/${post.slug}` });
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    notFound();
    return null;
  }

  const targetService = getServiceBySlug(post.targetServiceSlug);

  const breadcrumbItems = [
    { name: "Strona główna", url: `${site.domain}/` },
    { name: "Blog", url: `${site.domain}/blog` },
    { name: post.title, url: `${site.domain}/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbItems), ...(post.faq.length ? [faqSchema(post.faq)] : [])]} />
      <Breadcrumbs
        items={[
          { name: "Strona główna", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-brand-950">{post.h1}</h1>

        <div className="prose prose-brand mt-6 max-w-none text-brand-700">
          {post.body.map((paragraph, i) => (
            <p key={i} className="mt-4">
              {paragraph}
            </p>
          ))}
        </div>

        {targetService && (
          <div className="mt-8 rounded-xl bg-brand-50 p-5">
            <p className="text-sm text-brand-700">
              Potrzebujesz pomocy w tym zakresie?{" "}
              <Link href={`/${targetService.slug}`} className="font-semibold text-brand-900 underline">
                Zobacz: {targetService.name}
              </Link>
            </p>
          </div>
        )}

        {post.internalLinks.length > 0 && (
          <nav className="mt-6" aria-label="Powiązane strony">
            <p className="text-sm font-semibold text-brand-900">Zobacz też:</p>
            <ul className="mt-2 space-y-1">
              {post.internalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-brand-700 underline hover:text-brand-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="mt-8">
          <PhoneCtaInline />
        </div>
      </article>

      {post.faq.length > 0 && <Faq items={post.faq} />}
    </>
  );
}
