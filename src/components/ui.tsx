import Link from "next/link";
import { ArrowRight, Quote, Star } from "lucide-react";
import { Photo } from "./PhotoPlaceholder";
import { testimonials, testingSteps, stats, type Product } from "@/lib/data";
import { whatsappLink } from "@/lib/site";

export function PageHero({ eyebrow, title, text, children }: { eyebrow: string; title: string; text: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(60% 80% at 85% 0%, #2d9a5a 0%, transparent 60%), radial-gradient(40% 60% at 0% 100%, #e89d12 0%, transparent 60%)" }} aria-hidden />
      <div className="container-x relative py-16 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-gold-400">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-brand-100">{text}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function Section({ eyebrow, title, text, children, className = "", center = false, id }: { eyebrow?: string; title?: string; text?: string; children: React.ReactNode; className?: string; center?: boolean; id?: string }) {
  return (
    <section id={id} className={`container-x scroll-mt-28 pt-16 sm:pt-20 ${className}`}>
      {(title || eyebrow) && (
        <div className={`mb-10 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">{title}</h2>}
          {text && <p className="mt-3 text-muted">{text}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

export function ProductCard({ p, accent = "brand", href }: { p: Product; accent?: "brand" | "tech" | "fabric"; href: string }) {
  const chip = { brand: "bg-brand-100 text-brand-800", tech: "bg-blue-100 text-blue-800", fabric: "bg-rose-100 text-rose-800" }[accent];
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl">
      <Photo kind={p.photo} className="aspect-[4/3]" />
      <div className="flex flex-1 flex-col p-5">
        <span className={`w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold ${chip}`}>{p.category}</span>
        <h3 className="mt-3 text-lg font-bold">{p.name}</h3>
        <p className="mt-1.5 text-sm text-muted">{p.blurb}</p>
        <ul className="mt-4 space-y-1 border-t border-line pt-4 text-xs text-ink/75">
          {p.specs.map((s) => <li key={s}>• {s}</li>)}
        </ul>
        <Link href={`${href}#inquiry`} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-all hover:gap-2.5">
          Request quote <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

export function ProcessSteps() {
  return (
    <ol className="grid gap-4 md:grid-cols-5">
      {testingSteps.map((s) => (
        <li key={s.n} className="rounded-2xl border border-line bg-white p-5">
          <span className="font-display text-4xl font-extrabold text-brand-200">{s.n}</span>
          <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
          <p className="mt-2 text-sm text-muted">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((t) => (
        <figure key={t.quote} className="flex flex-col rounded-2xl border border-line bg-white p-6">
          <Quote className="h-8 w-8 text-gold-400" aria-hidden />
          <div className="mt-3 flex gap-0.5" role="img" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" aria-hidden />)}
          </div>
          <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/85">“{t.quote}”</blockquote>
          <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-100 font-bold text-brand-800">{t.name[0]}</span>
            <span><span className="block text-sm font-semibold">{t.name}</span><span className="block text-xs text-muted">{t.role}</span></span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Stats() {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-white p-6 text-center">
          <dd className="font-display text-3xl font-extrabold text-brand-700 sm:text-4xl">{s.value}</dd>
          <dt className="mt-1 text-sm text-muted">{s.label}</dt>
        </div>
      ))}
    </dl>
  );
}

export function CtaBand({ title = "Ready to place an inquiry?", text = "Tell us what you need — we will respond with availability and a quotation." }: { title?: string; text?: string }) {
  return (
    <section className="container-x pt-20">
      <div className="relative overflow-hidden rounded-3xl bg-brand-800 px-6 py-12 text-center text-white sm:px-12">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-400/20 blur-2xl" aria-hidden />
        <h2 className="relative text-3xl font-extrabold sm:text-4xl">{title}</h2>
        <p className="relative mx-auto mt-3 max-w-xl text-brand-100">{text}</p>
        <div className="relative mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/contact#inquiry" className="btn-gold">Send inquiry</Link>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost-light">Chat on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
