import Link from "next/link";
import type { Service } from "@/data/services";
import { Icon } from "./Icon";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
        <Icon name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-brand-900">{service.name}</h3>
      <p className="mt-2 text-sm text-brand-600">{service.shortDescription}</p>
      <span className="mt-4 text-sm font-semibold text-brand-700 group-hover:text-alert-500">
        Dowiedz się więcej →
      </span>
    </Link>
  );
}
