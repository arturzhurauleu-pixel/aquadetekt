export default function ProcessSteps({
  title,
  steps,
}: {
  title: string;
  steps: string[];
}) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="font-display text-2xl font-bold text-brand-900">{title}</h2>
      <ol className="mt-6 space-y-4">
        {steps.map((step, i) => (
          <li key={step} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-800 text-sm font-bold text-white">
              {i + 1}
            </span>
            <p className="pt-1 text-brand-700">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
