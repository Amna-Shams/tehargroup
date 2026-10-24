// Sample content — replace with real products, posts and testimonials.
export type Division = "agri" | "tech" | "fabric";
export type PhotoKind = "field" | "seeds" | "lab" | "network" | "router" | "fabric" | "warehouse" | "team";

export type Product = {
  slug: string;
  name: string;
  category: string;
  blurb: string;
  specs: string[];
  photo: PhotoKind;
};

export const seeds: Product[] = [
  { slug: "hybrid-maize", name: "Hybrid Maize", category: "Cereal", blurb: "Strong stalk, uniform cobs and good heat tolerance for spring and autumn sowing.", specs: ["Season: Spring / Autumn", "Maturity: Medium", "Pack: 4 kg / 8 kg"], photo: "field" },
  { slug: "hybrid-sunflower", name: "Hybrid Sunflower", category: "Oilseed", blurb: "High oil content with even head size and reliable field establishment.", specs: ["Season: Spring", "Maturity: Early–medium", "Pack: 1 kg / 5 kg"], photo: "seeds" },
  { slug: "hybrid-tomato", name: "Hybrid Tomato", category: "Vegetable", blurb: "Firm, uniform fruit with good shelf life for market transport.", specs: ["Season: Autumn / Winter", "Type: Determinate", "Pack: 10 g / 50 g"], photo: "seeds" },
  { slug: "hybrid-chilli", name: "Hybrid Chilli", category: "Vegetable", blurb: "Vigorous plants with consistent pungency and extended picking window.", specs: ["Season: Spring", "Type: Semi-erect", "Pack: 10 g / 50 g"], photo: "field" },
  { slug: "hybrid-okra", name: "Hybrid Okra", category: "Vegetable", blurb: "Tender, dark-green pods with good tolerance to summer stress.", specs: ["Season: Summer", "Maturity: Early", "Pack: 500 g / 2 kg"], photo: "field" },
  { slug: "hybrid-cucumber", name: "Hybrid Cucumber", category: "Vegetable", blurb: "Uniform length and colour, suited to open-field and tunnel growing.", specs: ["Season: Spring / Autumn", "Type: Slicing", "Pack: 50 g / 250 g"], photo: "seeds" },
];

export const itProducts: Product[] = [
  { slug: "managed-switches", name: "Managed Switches", category: "Switching", blurb: "24/48-port Gigabit managed switches with VLAN, QoS and PoE+ options.", specs: ["Ports: 8 – 48", "PoE+ models", "10G uplinks"], photo: "network" },
  { slug: "unmanaged-switches", name: "Unmanaged Switches", category: "Switching", blurb: "Plug-and-play desktop and rack switches for offices and shops.", specs: ["5 – 24 ports", "Gigabit", "Fanless options"], photo: "network" },
  { slug: "business-routers", name: "Business Routers", category: "Routing", blurb: "Dual-WAN routers with VPN, firewall and load balancing.", specs: ["Dual / Quad WAN", "IPsec & OpenVPN", "Rack-mount"], photo: "router" },
  { slug: "wifi-access-points", name: "Wi-Fi Access Points", category: "Wireless", blurb: "Ceiling and wall access points for offices, hotels and campuses.", specs: ["Wi-Fi 6", "PoE powered", "Controller ready"], photo: "router" },
  { slug: "cabling-accessories", name: "Cabling & Accessories", category: "Infrastructure", blurb: "Cat6 cable, patch panels, racks, connectors and fibre accessories.", specs: ["Cat6 / Cat6A", "Fibre patch cords", "Racks 6U – 42U"], photo: "warehouse" },
  { slug: "cctv-security", name: "CCTV & Security", category: "Electronics", blurb: "IP cameras, NVRs and power supplies for site security.", specs: ["IP cameras", "NVR 4 – 32 ch", "PoE kits"], photo: "lab" },
];

export const fabrics: Product[] = [
  { slug: "cotton", name: "Cotton", category: "Natural", blurb: "Breathable, durable cotton in lawn, cambric and poplin weights.", specs: ["Width: 44 or 58 inch", "Plain & printed", "MOQ on request"], photo: "fabric" },
  { slug: "wash-and-wear", name: "Wash & Wear", category: "Blended", blurb: "Easy-care suiting fabric popular for men's shalwar kameez.", specs: ["Polyester-viscose", "Wide colour range", "Bale supply"], photo: "fabric" },
  { slug: "linen", name: "Linen & Blends", category: "Natural", blurb: "Textured linen and linen-blend fabrics for summer collections.", specs: ["Pure & blended", "Pre-washed options", "Rolls"], photo: "fabric" },
  { slug: "synthetic", name: "Synthetics", category: "Synthetic", blurb: "Georgette, chiffon, crepe and satin for formal and bridal wear.", specs: ["Georgette / Chiffon", "Dyed & printed", "Bulk lots"], photo: "fabric" },
  { slug: "winter", name: "Winter Fabrics", category: "Seasonal", blurb: "Khaddar, karandi, fleece and wool blends for the cold season.", specs: ["Khaddar / Karandi", "Seasonal booking", "Wholesale"], photo: "warehouse" },
  { slug: "upholstery", name: "Upholstery & Home", category: "Home", blurb: "Curtain, sofa and bedding fabrics for furnishers and retailers.", specs: ["Jacquard / Velvet", "Heavy weights", "Wholesale"], photo: "fabric" },
];

export const testingSteps = [
  { n: "01", title: "Source & Select", text: "We shortlist hybrids from trusted breeders based on yield potential, disease tolerance and suitability for Pakistani conditions." },
  { n: "02", title: "Plant at Our Farm", text: "Every candidate is sown in side-by-side plots on Tehar's own farm with identical soil, water and spacing." },
  { n: "03", title: "Monitor & Record", text: "Germination, vigour, pest pressure, flowering and water use are logged through the full crop cycle." },
  { n: "04", title: "Measure Yield", text: "Harvest weight, grain/fruit quality and input cost per acre are measured and compared against local checks." },
  { n: "05", title: "Approve & Supply", text: "Only seed that delivers low cost and high yield is approved for sale — with agronomy guidance for your fields." },
];

// Illustrative figures — replace with real farm data.
export const stats = [
  { value: "3", label: "Business divisions" },
  { value: "100%", label: "Seed tested at our farm" },
  { value: "50+", label: "Products in catalog" },
  { value: "24h", label: "Inquiry response goal" },
];

// Sample testimonials — replace with real, permissioned customer quotes.
export const testimonials = [
  { name: "Progressive farmer", role: "Punjab", quote: "The hybrid we bought was already proven on Tehar's own farm. Germination was even and the yield matched what they showed us — at a lower seed cost.", division: "agri" as Division },
  { name: "Procurement manager", role: "IT reseller", quote: "Reliable stock of switches and routers, honest pricing and quick answers on WhatsApp. They helped us size a 48-port deployment correctly the first time.", division: "tech" as Division },
  { name: "Boutique owner", role: "Garments retailer", quote: "Consistent fabric quality across bales and on-time delivery. Ordering through an inquiry and getting a clear quote was simple.", division: "fabric" as Division },
];

export type Post = { slug: string; title: string; excerpt: string; date: string; category: string; readTime: string; photo: PhotoKind; body: string[] };

export const posts: Post[] = [
  {
    slug: "why-we-test-seed-at-our-own-farm",
    title: "Why we test every hybrid seed at our own farm",
    excerpt: "Brochure claims are easy. Field results are not. Here is how Tehar validates seed before it reaches you.",
    date: "2026-09-12", category: "Agri", readTime: "4 min", photo: "field",
    body: [
      "Most seed is sold on the strength of a breeder's brochure. But yield on paper and yield in a Pakistani field — with our heat, our water and our soils — can be very different.",
      "That is why Tehar plants every candidate hybrid on our own farm first. Varieties grow side by side under identical conditions, so differences come from the seed, not the plot.",
      "We record germination, plant vigour, pest and disease pressure, and finally harvest weight and quality. We also track input cost per acre, because the best seed is the one that raises your profit, not only your yield.",
      "Only hybrids that prove low cost and high yield make it into our catalog. If you would like to visit the farm or see the trial data for a variety, send us an inquiry.",
    ],
  },
  {
    slug: "choosing-the-right-network-switch",
    title: "Managed vs unmanaged switch: which one does your office need?",
    excerpt: "A quick guide to ports, PoE, VLANs and uplinks so you buy the right switch once.",
    date: "2026-08-28", category: "IT", readTime: "5 min", photo: "network",
    body: [
      "An unmanaged switch is plug-and-play and perfect for small offices with a handful of devices. A managed switch adds VLANs, QoS, monitoring and security controls.",
      "If you run IP cameras, VoIP phones or Wi-Fi access points, look for PoE+ so a single cable carries both data and power.",
      "Always plan for growth: buy 25–30% more ports than you need today and make sure the switch has at least two uplink ports for future expansion.",
      "Not sure what to pick? Send us your device count and layout and we will recommend a setup.",
    ],
  },
  {
    slug: "how-to-buy-fabric-wholesale",
    title: "A buyer's checklist for wholesale fabric",
    excerpt: "Width, GSM, shrinkage and colour fastness — what to check before you place a bulk order.",
    date: "2026-08-05", category: "Fabric", readTime: "3 min", photo: "fabric",
    body: [
      "Always request a swatch and confirm width, weight (GSM) and composition before ordering in bulk.",
      "Ask about shrinkage and colour fastness, especially for printed and dark shades. A quick wash test on a sample saves costly returns.",
      "Confirm whether pricing is per metre, per than or per bale, and agree on tolerance for length and shade variation between lots.",
      "Tell us your target market and season — we will suggest suitable fabrics and quantities.",
    ],
  },
];
