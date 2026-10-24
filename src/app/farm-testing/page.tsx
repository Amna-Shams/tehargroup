import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, Bug, Scale, Sprout } from "lucide-react";
import { PageHero, Section, ProcessSteps, Stats, CtaBand } from "@/components/ui";
import { Photo } from "@/components/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "Farm & Testing — How We Trial Hybrid Seeds",
  description: "See how Tehar Group tests every hybrid seed at its own farm — side-by-side plots, full-season monitoring and measured yield before approval.",
  alternates: { canonical: "/farm-testing" },
};

const metrics = [
  { icon: Sprout, title: "Germination & vigour", text: "Emergence rate and early growth recorded for every plot." },
  { icon: Bug, title: "Pest & disease pressure", text: "Scouting each week to see how varieties cope without over-spraying." },
  { icon: Droplets, title: "Water & input use", text: "Irrigation and fertiliser tracked so we know the true cost per acre." },
  { icon: Scale, title: "Harvest weight & quality", text: "Measured yield, grading and shelf life compared with local checks." },
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Farm & Testing" title="We grow it first. Then we sell it." text="Our own farm is the proving ground. If a hybrid cannot beat the local check on yield and cost, it does not make our catalog.">
        <Link href="/contact?topic=farm-visit#inquiry" className="btn-gold">Book a farm visit</Link>
        <Link href="/agri-trading#catalog" className="btn-ghost-light">View seed catalog</Link>
      </PageHero>

      <Section eyebrow="The process" title="Five steps from candidate to catalog" text="A repeatable, evidence-based trial that every variety must pass.">
        <ProcessSteps />
      </Section>

      <Section eyebrow="Farm gallery" title="Inside the trial plots" text="Replace these placeholders with photographs from your farm (see public/images).">
        <div className="grid gap-4 sm:grid-cols-3">
          <Photo kind="field" className="aspect-[4/3] rounded-2xl sm:col-span-2 sm:row-span-2 sm:aspect-auto sm:min-h-[22rem]" />
          <Photo kind="seeds" className="aspect-[4/3] rounded-2xl" />
          <Photo kind="lab" className="aspect-[4/3] rounded-2xl" />
        </div>
      </Section>

      <Section eyebrow="What we measure" title="Data behind every recommendation">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.title} className="rounded-2xl border border-line bg-white p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-100 text-brand-700"><m.icon className="h-5 w-5" aria-hidden /></span>
              <h3 className="mt-4 font-bold">{m.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{m.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-12"><Stats /></Section>

      <CtaBand title="Want to see the plots yourself?" text="Visit the farm, see trial results for any variety and talk to our agronomists." />
    </>
  );
}
