"use client";

import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { posts } from "@/lib/data";

const labels: Record<string, string> = {
  about: "About", "agri-trading": "Agri Trading", "farm-testing": "Farm & Testing", "it-electronics": "IT & Electronics",
  fabric: "Fabric Trading", blog: "Blog", contact: "Contact", legal: "Legal",
};

/** Emits BreadcrumbList JSON-LD for every inner page. */
export function BreadcrumbSchema() {
  const parts = usePathname().split("/").filter(Boolean);
  if (!parts.length) return null;
  const items = [{ name: "Home", path: "" }, ...parts.map((p, i) => ({
    name: labels[p] ?? posts.find((x) => x.slug === p)?.title ?? p,
    path: "/" + parts.slice(0, i + 1).join("/"),
  }))];
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${site.url}${it.path}` })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
