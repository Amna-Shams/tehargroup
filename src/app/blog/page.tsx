import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, CtaBand } from "@/components/ui";
import { Photo } from "@/components/PhotoPlaceholder";
import { posts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog — Seeds, Networking & Fabric Guides",
  description: "Practical guides from Tehar Group on hybrid seed selection, networking equipment and wholesale fabric buying.",
  alternates: { canonical: "/blog" },
};

const fmtDate = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Guides, tips and updates" text="Practical advice on seeds, networking and fabric — straight from the team." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug} className="group overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl">
              <Link href={`/blog/${p.slug}`}>
                <Photo kind={p.photo} className="aspect-[16/9]" />
                <div className="p-6">
                  <p className="text-xs font-semibold text-brand-600">{p.category} · {fmtDate(p.date)} · {p.readTime} read</p>
                  <h2 className="mt-2 text-xl font-bold leading-snug group-hover:text-brand-700">{p.title}</h2>
                  <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-brand-700">Read article →</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
