import Link from "next/link";

export type FaqItem = {
  question: string;
  answer: string;
  /** Optional contextual link — used when a deeper, informational answer lives on the blog (FAQ stays transactional/concise, blog covers the depth). */
  learnMoreHref?: string;
  learnMoreLabel?: string;
};

export default function Faq({ items, title = "Najczęstsze pytania" }: { items: FaqItem[]; title?: string }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      {title && <h2 className="font-display text-2xl font-bold text-brand-900">{title}</h2>}
      <dl className="mt-6 divide-y divide-brand-100">
        {items.map((item) => (
          <div key={item.question} className="py-5">
            <dt className="font-semibold text-brand-900">{item.question}</dt>
            <dd className="mt-2 text-brand-700">{item.answer}</dd>
            {item.learnMoreHref && (
              <Link
                href={item.learnMoreHref}
                className="mt-2 inline-block text-sm font-semibold text-brand-800 underline"
              >
                {item.learnMoreLabel ?? "Czytaj więcej"} →
              </Link>
            )}
          </div>
        ))}
      </dl>
    </section>
  );
}
