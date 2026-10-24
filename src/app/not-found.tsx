import Link from "next/link";
import { PageHero } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="Error 404" title="We could not find that page" text="The link may be broken or the page may have moved. Try one of these instead.">
        <Link href="/" className="btn-gold">Back to home</Link>
        <Link href="/contact" className="btn-ghost-light">Contact us</Link>
      </PageHero>
      <div className="container-x grid gap-4 pt-12 sm:grid-cols-3">
        {[["/agri-trading", "Agri Trading"], ["/it-electronics", "IT & Electronics"], ["/fabric", "Fabric Trading"]].map(([h, l]) => (
          <Link key={h} href={h} className="rounded-2xl border border-line bg-white p-6 font-bold hover:bg-brand-50">{l} →</Link>
        ))}
      </div>
    </>
  );
}
