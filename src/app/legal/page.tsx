import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Legal — Privacy, Terms & Disclaimer",
  description: "Privacy policy, terms of use and product disclaimer for Tehar Group (tehargroup.com).",
  alternates: { canonical: "/legal" },
};

// NOTE: starter text only — have it reviewed by a qualified professional before launch.
const sections = [
  {
    id: "privacy",
    title: "Privacy Policy",
    body: [
      "When you submit an inquiry we collect your name, phone number, optional email and the details of your request. We use this only to respond to you and to improve our service.",
      "We do not sell your personal data. We may share it with trusted service providers (for example, the tools that deliver inquiries to our team) strictly to handle your request.",
      `You may ask us to access or delete your data at any time by emailing ${site.email}.`,
    ],
  },
  {
    id: "terms",
    title: "Terms of Use",
    body: [
      "This website is a product catalog and inquiry platform. It does not process online orders or payments. Quotations are provided by our team and are valid for the period stated in each quotation.",
      "Product images are for illustration and may differ from the delivered item. Prices, specifications and availability are subject to change without notice.",
      "All content on this site is the property of Tehar Group and may not be reproduced without written permission.",
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: [
      "Seed performance depends on soil, climate, water, sowing time and crop management. Results observed at our farm are indicative and not a guarantee of yield on your land.",
      "Technical information about IT and electronics products is based on manufacturer specifications. Warranty terms are those of the manufacturer or as stated in your quotation.",
    ],
  },
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy, terms & disclaimer" text="How we handle your information and the terms of using this website." />
      <div className="container-x grid gap-10 pt-12 lg:grid-cols-4">
        <nav aria-label="Legal sections" className="lg:sticky lg:top-32 lg:self-start">
          <ul className="flex gap-2 overflow-x-auto lg:flex-col">
            {sections.map((s) => <li key={s.id}><a href={`#${s.id}`} className="block whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium hover:bg-brand-100">{s.title}</a></li>)}
          </ul>
        </nav>
        <div className="space-y-12 lg:col-span-3">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-32">
              <h2 className="text-2xl font-extrabold">{s.title}</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-ink/80">{s.body.map((b, i) => <p key={i}>{b}</p>)}</div>
            </section>
          ))}
          <p className="text-sm text-muted">Last updated: October 2026.</p>
        </div>
      </div>
    </>
  );
}
