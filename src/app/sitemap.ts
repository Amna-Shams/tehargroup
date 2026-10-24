import type { MetadataRoute } from "next";
import { posts } from "@/lib/data";
import { site } from "@/lib/site";

const routes = ["", "/about", "/agri-trading", "/farm-testing", "/it-electronics", "/fabric", "/blog", "/contact", "/legal"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((r) => ({ url: `${site.url}${r}`, changeFrequency: "monthly" as const, priority: r === "" ? 1 : 0.7 })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p.date, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
