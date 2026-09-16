import { site } from "@/data/site";

/**
 * Safe, non-fabricated "help with insurance documentation" block.
 *
 * Renders NOTHING until `site.insuranceDocumentationHelp.offered` is
 * explicitly set to `true` in data/site.ts (see the comment there for the
 * exact conditions). This exists because the SERP audit found this to be a
 * strong trust/conversion signal among competitors — but we have zero
 * confirmed data that Aquadetekt offers it, so the safe default is silence,
 * not a fabricated claim. Wire this component into a page and it will start
 * working automatically the moment the business data is confirmed — no
 * further code changes needed.
 */
export default function InsuranceDocumentationSection() {
  if (!site.insuranceDocumentationHelp.offered) return null;

  return (
    <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
        <h2 className="font-display text-xl font-bold text-brand-900">Dokumentacja dla ubezpieczyciela</h2>
        <p className="mt-2 text-brand-700">{site.insuranceDocumentationHelp.description}</p>
      </div>
    </section>
  );
}
