import { PhoneCtaInline } from "./PhoneCta";

export default function EmergencyBanner() {
  return (
    <section className="bg-brand-900">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-10 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-white">Potrzebujesz pomocy teraz?</h2>
        <p className="max-w-xl text-brand-200">
          Opisz nam krótko sytuację przez telefon — powiemy, jak ograniczyć szkody do naszego przyjazdu.
        </p>
        <PhoneCtaInline />
      </div>
    </section>
  );
}
