import Image from "next/image";
import { Sprout, Wheat, FlaskConical, Network, Router, Shirt, Warehouse, Users, type LucideIcon } from "lucide-react";
import type { PhotoKind } from "@/lib/data";

const kinds: Record<PhotoKind, { icon: LucideIcon; label: string; from: string; to: string }> = {
  field: { icon: Wheat, label: "Farm field photo", from: "#1a633b", to: "#82d29b" },
  seeds: { icon: Sprout, label: "Seed product photo", from: "#174f32", to: "#f4b73b" },
  lab: { icon: FlaskConical, label: "Testing / lab photo", from: "#0a2418", to: "#4fb775" },
  network: { icon: Network, label: "Networking photo", from: "#1e3a8a", to: "#60a5fa" },
  router: { icon: Router, label: "Router / device photo", from: "#1d4ed8", to: "#93c5fd" },
  fabric: { icon: Shirt, label: "Fabric photo", from: "#9f1239", to: "#fda4af" },
  warehouse: { icon: Warehouse, label: "Warehouse photo", from: "#44403c", to: "#d6a45a" },
  team: { icon: Users, label: "Team photo", from: "#14412b", to: "#b3e6c1" },
};

/**
 * Placeholder "photo". Pass `src` (e.g. "/images/farm-1.jpg") once you have a
 * real photograph and it renders through next/image instead.
 */
export function Photo({
  kind,
  src,
  alt,
  className = "",
  priority = false,
}: {
  kind: PhotoKind;
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={src} alt={alt ?? kinds[kind].label} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" priority={priority} />
      </div>
    );
  }
  const k = kinds[kind];
  const Icon = k.icon;
  return (
    <div
      role="img"
      aria-label={alt ?? `Placeholder: ${k.label}`}
      className={`relative isolate overflow-hidden ${className}`}
      style={{ background: `linear-gradient(135deg, ${k.from}, ${k.to})` }}
    >
      <svg className="absolute inset-0 -z-10 h-full w-full opacity-20" aria-hidden>
        <defs>
          <pattern id={`p-${kind}`} width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
            <circle cx="3" cy="3" r="1.6" fill="#fff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#p-${kind})`} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/90">
        <Icon className="h-1/4 max-h-16 min-h-8 w-auto" strokeWidth={1.4} aria-hidden />
        <span className="rounded-full bg-black/25 px-3 py-1 text-[11px] font-medium tracking-wide backdrop-blur-sm">{k.label} · placeholder</span>
      </div>
    </div>
  );
}
