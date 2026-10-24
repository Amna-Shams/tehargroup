import Link from "next/link";
import { Mail, MapPin, Phone, Sprout, Clock } from "lucide-react";
import { site } from "@/lib/site";

const cols = [
  { title: "Company", links: [["About Us", "/about"], ["Farm & Testing", "/farm-testing"], ["Blog", "/blog"], ["Contact", "/contact"]] },
  { title: "Divisions", links: [["Agri Trading", "/agri-trading"], ["IT & Electronics", "/it-electronics"], ["Fabric Trading", "/fabric"]] },
  { title: "Legal", links: [["Privacy Policy", "/legal#privacy"], ["Terms of Use", "/legal#terms"], ["Disclaimer", "/legal#disclaimer"]] },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-brand-950 text-brand-100">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white"><Sprout className="h-5 w-5" aria-hidden /></span>
            <span className="font-display text-lg font-extrabold text-white">Tehar<span className="text-gold-400"> Group</span></span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-200">{site.description}</p>
          <ul className="mt-6 space-y-2.5 text-sm">
            <li className="flex gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />{site.address}</li>
            <li className="flex gap-2.5"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden /><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">{site.phone}</a></li>
            <li className="flex gap-2.5"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden /><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
            <li className="flex gap-2.5"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />{site.hours}</li>
          </ul>
        </div>
        {cols.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">{c.title}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {c.links.map(([l, h]) => <li key={h}><Link href={h} className="text-brand-200 hover:text-white">{l}</Link></li>)}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-brand-300 sm:flex-row sm:justify-between">
          <p>© 2026 Tehar Group. All rights reserved.</p>
          <p>Catalog &amp; inquiry only — no online checkout.</p>
        </div>
      </div>
    </footer>
  );
}
