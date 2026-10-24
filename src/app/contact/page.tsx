import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { PageHero, Section } from "@/components/ui";
import { InquiryForm } from "@/components/InquiryForm";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Get a Quote",
  description: "Contact Tehar Group for hybrid seeds, networking equipment and fabric. Send an inquiry, call us or chat on WhatsApp.",
  alternates: { canonical: "/contact" },
};

const items = [
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: whatsappLink() },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Address", value: site.address },
  { icon: Clock, label: "Hours", value: site.hours },
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let us talk about what you need" text="Send an inquiry and we will reply with availability and a quotation — usually within one business day." />
      <Section id="inquiry" className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-extrabold">Reach us directly</h2>
          <ul className="mt-6 space-y-4">
            {items.map((i) => (
              <li key={i.label} className="flex gap-4 rounded-2xl border border-line bg-white p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700"><i.icon className="h-5 w-5" aria-hidden /></span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">{i.label}</p>
                  {i.href ? <a href={i.href} className="font-medium hover:text-brand-700" {...(i.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{i.value}</a> : <p className="font-medium">{i.value}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3"><InquiryForm division="General / Contact" title="Send us a message" /></div>
      </Section>
    </>
  );
}
