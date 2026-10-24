import Link from "next/link";
import { ArrowRight, Sprout, Network, Shirt, ShieldCheck, BadgePercent, Truck, MessageCircle } from "lucide-react";
import { Section, ProcessSteps, Testimonials, Stats, CtaBand } from "@/components/ui";
import { Photo } from "@/components/PhotoPlaceholder";
import { InquiryForm } from "@/components/InquiryForm";
import { posts } from "@/lib/data";
import { whatsappLink } from "@/lib/site";

const divisions = [
  { href: "/agri-trading", title: "Agri Trading", text: "Hybrid seeds tested at our own farm — low cost, high yield.", icon: Sprout, photo: "field" as const, color: "bg-brand-600" },
  { href: "/it-electronics", title: "IT & Electronics", text: "Switches, routers and networking gear for every scale.", icon: Network, photo: "network" as const, color: "bg-tech-600" },
  { href: "/fabric", title: "Fabric Trading", text: "Wholesale cotton, linen, synthetics and winter fabrics.", icon: Shirt, photo: "fabric" as const, color: "bg-fabric-600" },
];

const reasons = [
  { icon: ShieldCheck, title: "Tested, not promised", text: "Our seed claims come from our own trial plots." },
  { icon: BadgePercent, title: "Honest pricing", text: "Clear quotations, bulk and reseller rates." },
  { icon: Truck, title: "Nationwide supply", text: "Dispatch across Pakistan with clear timelines." },
  { icon: MessageCircle, title: "Fast response", text: "Talk to a real person on phone or WhatsApp." },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(60% 70% at 90% 10%, #2d9a5a 0%, transparent 60%), radial-gradient(40% 50% at 0% 100%, #e89d12 0%, transparent 60%)" }} aria-hidden />
        <div className="container-x relative grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-brand-100">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" /> Pakistani trading company
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
              Seeds, networks &amp; fabrics — <span className="text-gold-400">traded with trust.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-brand-100">
              Tehar Group supplies farm-tested hybrid seeds, IT &amp; networking equipment and quality fabric to customers across Pakistan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact#inquiry" className="btn-gold">Request a quote <ArrowRight className="h-4 w-4" aria-hidden /></Link>
              <Link href="/farm-testing" className="btn-ghost-light">How we test seed</Link>
            </div>
          </div>
          <Photo kind="field" priority className="aspect-[4/3] rounded-3xl shadow-2xl ring-1 ring-white/20" />
        </div>
      </section>

      <Section className="!pt-10"><Stats /></Section>

      <Section eyebrow="Our divisions" title="Three businesses, one standard of service" text="Browse each catalog and send an inquiry — no checkout, just a straight conversation.">
        <div className="grid gap-6 md:grid-cols-3">
          {divisions.map((d) => (
            <Link key={d.href} href={d.href} className="group overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl">
              <Photo kind={d.photo} className="aspect-[16/10]" />
              <div className="p-6">
                <span className={`grid h-11 w-11 place-items-center rounded-xl text-white ${d.color}`}><d.icon className="h-5 w-5" aria-hidden /></span>
                <h3 className="mt-4 text-xl font-bold">{d.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{d.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-all group-hover:gap-2.5">Explore <ArrowRight className="h-4 w-4" aria-hidden /></span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Farm-testing process" title="Every seed is grown at our farm first" text="Our competitive edge: proven low-cost, high-yield hybrids.">
        <ProcessSteps />
        <Link href="/farm-testing" className="btn-outline mt-8">Learn more about our farm</Link>
      </Section>

      <Section eyebrow="Why Tehar" title="Why customers come back">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-line bg-white p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-100 text-gold-600"><r.icon className="h-5 w-5" aria-hidden /></span>
              <h3 className="mt-4 font-bold">{r.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{r.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Testimonials" title="Trusted by farmers, resellers and retailers">
        <Testimonials />
      </Section>

      <Section eyebrow="From the blog" title="Guides &amp; updates">
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group overflow-hidden rounded-2xl border border-line bg-white transition hover:shadow-xl">
              <Photo kind={p.photo} className="aspect-[16/9]" />
              <div className="p-5">
                <p className="text-xs font-semibold text-brand-600">{p.category} · {p.readTime}</p>
                <h3 className="mt-2 font-bold leading-snug group-hover:text-brand-700">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="inquiry" className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="eyebrow">Inquiry</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Tell us what you need</h2>
          <p className="mt-3 text-muted">Seeds, networking or fabric — send a quick inquiry and we will get back to you with availability and a quotation.</p>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-outline mt-6">Or chat on WhatsApp</a>
        </div>
        <div className="lg:col-span-3"><InquiryForm division="Home" compact /></div>
      </Section>

      <CtaBand />
    </>
  );
}
