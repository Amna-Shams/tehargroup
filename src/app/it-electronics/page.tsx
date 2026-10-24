import type { Metadata } from "next";
import { DivisionPage } from "@/components/DivisionPage";
import { itProducts } from "@/lib/data";

export const metadata: Metadata = {
  title: "IT & Electronics — Switches, Routers & Networking",
  description: "Managed and unmanaged switches, business routers, Wi-Fi access points, cabling and CCTV for offices, ISPs and resellers in Pakistan.",
  alternates: { canonical: "/it-electronics" },
};

export default function Page() {
  return (
    <DivisionPage
      accent="tech"
      href="/it-electronics"
      division="IT & Electronics"
      eyebrow="IT & Electronics"
      title="Networking equipment for offices, ISPs and resellers"
      intro="Switches, routers, access points and cabling from established brands, with honest advice on what to buy."
      heroPhoto="network"
      aboutTitle="Build a network that just works"
      aboutText="From a ten-person office to a multi-floor campus, we help you choose the right ports, PoE budget, uplinks and wireless coverage — then supply everything you need."
      why={[
        { title: "Right-sized advice", text: "Send your device count; we recommend a setup that scales." },
        { title: "Genuine stock", text: "Sourced from authorised channels with warranty support." },
        { title: "Complete solution", text: "Switches, routers, Wi-Fi, racks, cabling and CCTV in one order." },
        { title: "Bulk & reseller pricing", text: "Special rates for projects and repeat buyers." },
      ]}
      products={itProducts}
      catalogTitle="Networking & electronics catalog"
    />
  );
}
