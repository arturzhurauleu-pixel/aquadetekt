import { site } from "@/data/site";

export function PhoneCtaInline({ label = "Zadzwoń teraz" }: { label?: string }) {
  return (
    <a
      href={site.phoneHref}
      className="inline-flex items-center gap-2 rounded-lg bg-alert-500 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-alert-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-alert-600"
    >
      <PhoneIcon className="h-5 w-5" />
      {label}
      <span className="hidden sm:inline">— {site.phone}</span>
    </a>
  );
}

export function PhoneCtaSticky() {
  return (
    <a
      href={site.phoneHref}
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-alert-500 py-3 font-semibold text-white shadow-[0_-2px_10px_rgba(0,0,0,0.15)] sm:hidden"
      aria-label={`Zadzwoń: ${site.phone}`}
    >
      <PhoneIcon className="h-5 w-5" />
      Zadzwoń teraz — {site.phone}
    </a>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h2.28a1 1 0 01.97.757l1.06 4.243a1 1 0 01-.5 1.11l-1.7.85a12.042 12.042 0 006.586 6.586l.85-1.7a1 1 0 011.11-.5l4.243 1.06a1 1 0 01.757.97V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V6z"
      />
    </svg>
  );
}
