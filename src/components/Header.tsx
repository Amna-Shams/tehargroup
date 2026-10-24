"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, Sprout, X } from "lucide-react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const active = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`sticky top-0 z-50 border-b transition-all ${scrolled ? "border-line bg-white/90 shadow-sm backdrop-blur-md" : "border-transparent bg-white"}`}>
      <div className="hidden bg-brand-950 text-xs text-brand-100 md:block">
        <div className="container-x flex h-8 items-center justify-between">
          <span>{site.tagline}</span>
          <span className="flex items-center gap-4">
            {site.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="inline-flex items-center gap-1.5 hover:text-white">
                <Phone className="h-3 w-3" aria-hidden /> {p.display}
              </a>
            ))}
          </span>
        </div>
      </div>

      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Tehar Group — home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-700 text-white"><Sprout className="h-5 w-5" aria-hidden /></span>
          <span className="font-display text-lg font-extrabold leading-none tracking-tight text-brand-900">
            Tehar<span className="text-gold-500"> Group</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            "children" in item ? (
              <div key={item.label} className="group relative">
                <button className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-ink/80 hover:bg-brand-50 hover:text-brand-800">
                  {item.label} <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden />
                </button>
                <div className="invisible absolute left-0 top-full w-72 translate-y-1 rounded-2xl border border-line bg-white p-2 opacity-0 shadow-xl transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href} className="block rounded-xl px-3 py-2.5 hover:bg-brand-50">
                      <span className="block text-sm font-semibold text-brand-900">{c.label}</span>
                      <span className="block text-xs text-muted">{c.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active(item.href) ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${active(item.href) ? "bg-brand-100 text-brand-800" : "text-ink/80 hover:bg-brand-50 hover:text-brand-800"}`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn-primary hidden !py-2.5 sm:inline-flex">Get a quote</Link>
          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-white lg:hidden">
          <nav aria-label="Mobile" onClick={() => setOpen(false)} className="container-x flex flex-col gap-1 py-4">
            {nav.map((item) =>
              "children" in item ? (
                <div key={item.label} className="py-2">
                  <p className="px-3 pb-1 text-xs font-bold uppercase tracking-widest text-muted">{item.label}</p>
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href} className="block rounded-xl px-3 py-3 text-base font-medium hover:bg-brand-50">{c.label}</Link>
                  ))}
                </div>
              ) : (
                <Link key={item.href} href={item.href} className={`rounded-xl px-3 py-3 text-base font-medium ${active(item.href) ? "bg-brand-100 text-brand-800" : "hover:bg-brand-50"}`}>{item.label}</Link>
              ),
            )}
            <Link href="/contact" className="btn-primary mt-4">Get a quote</Link>
            {site.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="btn-outline mt-2"><Phone className="h-4 w-4" /> {p.display} ({p.label})</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
