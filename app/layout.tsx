import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PhoneCtaSticky } from "@/components/PhoneCta";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/data/site";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-sans", display: "swap" });
const sora = Sora({ subsets: ["latin", "latin-ext"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: `${site.name} — Pogotowie hydrauliczne, lokalizacja wycieków, osuszanie po zalaniu`,
    template: `%s | ${site.name}`,
  },
  description:
    "Pogotowie hydrauliczne, lokalizacja wycieków bez kucia i osuszanie po zalaniu w województwie pomorskim.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${inter.variable} ${sora.variable}`}>
      <body className="flex min-h-screen flex-col bg-white font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Przejdź do treści
        </a>
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        <Header />
        <main id="main-content" className="flex-1 pb-16 sm:pb-0">
          {children}
        </main>
        <Footer />
        <PhoneCtaSticky />
      </body>
    </html>
  );
}
