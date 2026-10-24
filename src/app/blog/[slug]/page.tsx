import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Photo } from "@/components/PhotoPlaceholder";
import { CtaBand } from "@/components/ui";
import { posts } from "@/lib/data";
import { site } from "@/lib/site";

const fmtDate = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt, publishedTime: post.date },
  };
}

export default async function Page({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <article className="container-x max-w-3xl pt-12">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700"><ArrowLeft className="h-4 w-4" aria-hidden /> All articles</Link>
        <p className="mt-6 text-xs font-bold uppercase tracking-widest text-brand-600">{post.category} · {fmtDate(post.date)} · {post.readTime} read</p>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">{post.title}</h1>
        <Photo kind={post.photo} className="mt-8 aspect-[16/9] rounded-3xl" />
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/85">
          {post.body.map((para, i) => <p key={i}>{para}</p>)}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </article>
      <CtaBand />
    </>
  );
}
