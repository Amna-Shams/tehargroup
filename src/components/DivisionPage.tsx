import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { PageHero, Section, ProductCard, Testimonials, CtaBand } from "./ui";
import { InquiryForm } from "./InquiryForm";
import { Photo } from "./PhotoPlaceholder";
import type { PhotoKind, Product } from "@/lib/data";
import { whatsappLink } from "@/lib/site";

export function DivisionPage(props: {
  accent: "brand" | "tech" | "fabric";
  href: string;
  eyebrow: string;
  title: string;
  intro: string;
  products: Product[];
  catalogTitle: string;
  why: { title: string; text: string }[];
  heroPhoto: PhotoKind;
  aboutTitle: string;
  aboutText: string;
  division: string;
  extra?: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={props.eyebrow} title={props.title} text={props.intro}>
        <Link href="#inquiry" className="btn-gold">Request a quote</Link>
        <Link href="#catalog" className="btn-ghost-light">Browse catalog</Link>
      </PageHero>

      <Section className="grid items-center gap-10 lg:grid-cols-2">
        <Photo kind={props.heroPhoto} className="aspect-[4/3] rounded-3xl shadow-xl" priority />
        <div>
          <p className="eyebrow">{props.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">{props.aboutTitle}</h2>
          <p className="mt-4 text-muted">{props.aboutText}</p>
          <ul className="mt-6 space-y-3">
            {props.why.map((w) => (
              <li key={w.title} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                <span><strong>{w.title}.</strong> <span className="text-muted">{w.text}</span></span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {props.extra}

      <Section id="catalog" eyebrow="Catalog" title={props.catalogTitle} text="Browse the range and request a quotation. No online payment — our team confirms price, stock and delivery with you directly.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {props.products.map((p) => <ProductCard key={p.slug} p={p} accent={props.accent} href={props.href} />)}
        </div>
      </Section>

      <Section eyebrow="Testimonials" title="What our customers say">
        <Testimonials />
      </Section>

      <Section id="inquiry" className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="eyebrow">Inquiry</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Get a quotation</h2>
          <p className="mt-3 text-muted">Tell us what you need and roughly how much. We will reply with availability and pricing.</p>
          <a href={whatsappLink(`Hello Tehar Group, I have an inquiry about ${props.division}.`)} target="_blank" rel="noopener noreferrer" className="btn-outline mt-6">Prefer WhatsApp? Chat now</a>
        </div>
        <div className="lg:col-span-3">
          <InquiryForm division={props.division} products={props.products.map((p) => p.name)} />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
