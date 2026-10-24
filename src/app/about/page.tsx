import type { Metadata } from "next";
import { Target, Eye, Handshake, Leaf } from "lucide-react";
import { PageHero, Section, Stats, Testimonials, CtaBand } from "@/components/ui";
import { Photo } from "@/components/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "About Tehar Group",
  description: "Tehar Group is a Pakistani trading company with three divisions — Agri Trading, IT & Electronics and Fabric Trading — built on honesty, testing and service.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: Handshake, title: "Integrity", text: "Straight answers, clear pricing and no inflated claims." },
  { icon: Leaf, title: "Evidence", text: "We test what we sell wherever testing is possible." },
  { icon: Target, title: "Service", text: "Fast responses and after-sale support you can rely on." },
  { icon: Eye, title: "Long-term thinking", text: "We build relationships, not one-off transactions." },
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="About us" title="A Pakistani trading company built on trust" text="Tehar Group connects farmers, businesses and retailers with products we have verified and stand behind." />

      <Section className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Our story</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">From farm trials to three trading divisions</h2>
          <div className="mt-4 space-y-4 text-muted">
            <p>Tehar Group started with a simple belief: customers deserve products proven in real conditions. In agriculture that meant planting every hybrid on our own farm before selling it.</p>
            <p>We applied the same discipline to IT &amp; electronics and fabric trading — sourcing from reliable suppliers, checking quality, and giving honest advice on what to buy.</p>
            <p>Today we serve farmers, dealers, ISPs, resellers and garment businesses across Pakistan.</p>
          </div>
        </div>
        <Photo kind="team" className="aspect-[4/3] rounded-3xl shadow-xl" />
      </Section>

      <Section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-brand-50 p-8"><Target className="h-8 w-8 text-brand-600" aria-hidden /><h3 className="mt-3 text-2xl font-bold">Our mission</h3><p className="mt-2 text-muted">To supply reliable, fairly priced products — starting with seed that is proven to deliver low cost and high yield.</p></div>
        <div className="rounded-2xl bg-gold-100 p-8"><Eye className="h-8 w-8 text-gold-600" aria-hidden /><h3 className="mt-3 text-2xl font-bold">Our vision</h3><p className="mt-2 text-muted">To be Pakistan&apos;s most trusted multi-sector trading house.</p></div>
      </Section>

      <Section eyebrow="Our values" title="What guides us">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-line bg-white p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-100 text-brand-700"><v.icon className="h-5 w-5" aria-hidden /></span>
              <h3 className="mt-4 font-bold">{v.title}</h3><p className="mt-1.5 text-sm text-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-12"><Stats /></Section>
      <Section eyebrow="Testimonials" title="In our customers&apos; words"><Testimonials /></Section>
      <CtaBand />
    </>
  );
}
