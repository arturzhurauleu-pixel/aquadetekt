"use client";

import { useState } from "react";

export default function QuickReportForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  return (
    <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
      <h3 className="font-display text-lg font-semibold text-brand-900">Zgłoś awarię</h3>
      <p className="mt-1 text-sm text-brand-600">
        Oddzwaniamy tak szybko, jak to możliwe. W pilnych przypadkach zadzwoń bezpośrednio.
      </p>

      {status === "sent" ? (
        <p role="status" aria-live="polite" className="mt-4 rounded-lg bg-brand-50 p-4 text-sm text-brand-800">
          Dziękujemy — zgłoszenie zostało wysłane. Oddzwonimy wkrótce.
        </p>
      ) : (
        <form
          className="mt-4 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: podłącz docelowy endpoint (np. API route wysyłający e-mail/CRM)
            setStatus("sent");
          }}
        >
          <Field id="report-name" label="Imię i nazwisko">
            <input
              required
              id="report-name"
              name="name"
              autoComplete="name"
              className="w-full rounded-lg border border-brand-200 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            />
          </Field>
          <Field id="report-phone" label="Numer telefonu">
            <input
              required
              id="report-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className="w-full rounded-lg border border-brand-200 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            />
          </Field>
          <Field id="report-city" label="Miejscowość">
            <input
              required
              id="report-city"
              name="city"
              autoComplete="address-level2"
              className="w-full rounded-lg border border-brand-200 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            />
          </Field>
          <Field id="report-description" label="Krótki opis sytuacji (opcjonalnie)">
            <textarea
              id="report-description"
              name="description"
              rows={3}
              className="w-full rounded-lg border border-brand-200 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            />
          </Field>
          <button
            type="submit"
            className="w-full rounded-lg bg-brand-800 px-4 py-2.5 font-semibold text-white transition hover:bg-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-800"
          >
            Wyślij zgłoszenie
          </button>
        </form>
      )}
    </div>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-xs font-medium text-brand-600">
        {label}
      </label>
      {children}
    </div>
  );
}
