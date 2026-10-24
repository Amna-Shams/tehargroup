import type { Metadata } from "next";
import { DivisionPage } from "@/components/DivisionPage";
import { fabrics } from "@/lib/data";

export const metadata: Metadata = {
  title: "Fabric Trading — Wholesale Cotton, Linen & Synthetics",
  description: "Wholesale fabric supply in Pakistan: cotton, wash & wear, linen, synthetics, winter and upholstery fabrics for retailers and manufacturers.",
  alternates: { canonical: "/fabric" },
};

export default function Page() {
  return (
    <DivisionPage
      accent="fabric"
      href="/fabric"
      division="Fabric Trading"
      eyebrow="Fabric Trading"
      title="Quality fabric, supplied wholesale"
      intro="Consistent quality across bales and lots for retailers, boutiques, stitching units and manufacturers."
      heroPhoto="fabric"
      aboutTitle="Fabric you can reorder with confidence"
      aboutText="We focus on consistent width, weight and shade between lots, so what you approve on the swatch is what arrives on the bale."
      why={[
        { title: "Swatch before bulk", text: "Approve samples and specs before committing." },
        { title: "Seasonal ranges", text: "Summer lawn and cotton, winter khaddar and karandi." },
        { title: "Flexible lots", text: "Rolls, thans and bales to suit your volume." },
        { title: "Reliable delivery", text: "Dispatch across Pakistan with clear timelines." },
      ]}
      products={fabrics}
      catalogTitle="Fabric catalog"
    />
  );
}
