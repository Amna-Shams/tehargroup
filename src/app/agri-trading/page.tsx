import type { Metadata } from "next";
import { DivisionPage } from "@/components/DivisionPage";
import { Section, ProcessSteps } from "@/components/ui";
import { seeds } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agri Trading — Farm-Tested Hybrid Seeds",
  description: "Low-cost, high-yield hybrid seeds tested at Tehar's own farm. Maize, sunflower, tomato, chilli, okra and more — supplied across Pakistan.",
  alternates: { canonical: "/agri-trading" },
};

export default function Page() {
  return (
    <DivisionPage
      accent="brand"
      href="/agri-trading"
      division="Agri Trading"
      eyebrow="Agri Trading"
      title="Hybrid seeds proven at our own farm"
      intro="Low cost. High yield. Every variety we sell has already been grown, measured and approved on Tehar's own farm."
      heroPhoto="field"
      aboutTitle="Seed you can trust before you sow"
      aboutText="We do not sell on brochure claims. Each hybrid grows side by side in our trial plots, and only the ones that return the best yield for the lowest cost per acre reach our catalog."
      why={[
        { title: "Farm-tested", text: "Performance data from our own plots, not just the breeder's." },
        { title: "Lower cost per acre", text: "We compare input cost and yield, so you spend less for more." },
        { title: "Agronomy support", text: "Sowing windows, spacing and fertiliser guidance with every order." },
        { title: "Nationwide supply", text: "Dealers, farmers and cooperatives across Pakistan." },
      ]}
      products={seeds}
      catalogTitle="Hybrid seed catalog"
      extra={
        <Section eyebrow="How we test" title="From our farm to your field" text="Five steps every variety must pass.">
          <ProcessSteps />
          <Link href="/farm-testing" className="btn-outline mt-8">See the full testing process</Link>
        </Section>
      }
    />
  );
}
