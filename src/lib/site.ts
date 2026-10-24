// Central site configuration. Replace every value marked TODO before launch.
export const site = {
  name: "Tehar Group",
  domain: "tehargroup.com",
  url: "https://tehargroup.com",
  tagline: "Seeds, Networks & Fabrics — Traded with Trust",
  description:
    "Tehar Group is a Pakistani trading company: farm-tested hybrid seeds, IT & networking equipment, and quality fabric — supplied across Pakistan.",
  // TODO: real contact details (digits only for WhatsApp, with country code)
  whatsapp: "923000000000",
  phone: "+92 300 0000000",
  email: "info@tehargroup.com",
  address: "Head Office, Pakistan", // TODO
  hours: "Mon – Sat, 9:00 am – 6:00 pm (PKT)",
} as const;

export const whatsappLink = (text = "Hello Tehar Group, I would like to make an inquiry.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    label: "Divisions",
    children: [
      { href: "/agri-trading", label: "Agri Trading", desc: "Hybrid seeds, farm-tested" },
      { href: "/it-electronics", label: "IT & Electronics", desc: "Switches, routers, networking" },
      { href: "/fabric", label: "Fabric Trading", desc: "Wholesale fabric supply" },
    ],
  },
  { href: "/farm-testing", label: "Farm & Testing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;
