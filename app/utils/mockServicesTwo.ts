/**
 * Mock data for the services page (/services).
 * Shape is intentionally close to the real API contract so the arrays can be
 * swapped for the real payload without touching the components.
 */

export interface ITreatment {
  title: string;
  duration: string;
  price: string;
  /** Highlighted in the list as a client favourite */
  popular?: boolean;
}

export interface IServiceMaster {
  name: string;
  role: string;
  image: string;
}

export interface IServiceCategory {
  /** Anchor id + slug used by the sticky navigation */
  id: string;
  title: string;
  /** Short "Everyday · Bridal · Editorial" style line under the index */
  tagline: string;
  description: string;
  /** [main, side, side] — the collage expects exactly three */
  images: string[];
  /** Only the first 5–6 are rendered; the rest live on the detail page */
  treatments: ITreatment[];
  /** Total number of treatments in the category (incl. the ones not shown) */
  treatmentsTotal: number;
  priceFrom: string;
  masters: IServiceMaster[];
  /** Detail route: /services/details/<link> */
  link: string;
}

export const servicesCatalogMock: IServiceCategory[] = [
  {
    id: "makeup",
    title: "Makeup",
    tagline: "Everyday · Bridal · Editorial",
    description:
      "Natural beauty enhanced with professional techniques and high-quality products. From a soft daytime glow to a full bridal look that holds from the ceremony to the last dance.",
    images: [
      "/images/bs/services1.jpg",
      "/images/bs/services1.2.jpg",
      "/images/bs/services1.3.jpg",
    ],
    treatments: [
      { title: "Bridal make-up", duration: "1 hr 30 min", price: "£120", popular: true },
      { title: "Bridesmaid makeup", duration: "1 hr", price: "£80" },
      { title: "Event / party", duration: "1 hr", price: "£60" },
      { title: "Pre-makeup facial", duration: "20 min", price: "£35" },
      { title: "Junior make-up", duration: "45 min", price: "£40" },
      { title: "Flower girl makeup", duration: "30 min", price: "£20" },
    ],
    treatmentsTotal: 8,
    priceFrom: "£20",
    masters: [
      { name: "Nelia Mihai", role: "Makeup artist", image: "/images/masters/2.jpg" },
      { name: "Amelia Carter", role: "Bridal specialist", image: "/images/masters/3.jpg" },
      { name: "Isabella Moore", role: "Makeup artist", image: "/images/masters/4.jpg" },
    ],
    link: "makeup",
  },
  {
    id: "waxing",
    title: "Waxing",
    tagline: "Ladies · Men · Sensitive skin",
    description:
      "Smooth, long-lasting results with gentle techniques and premium wax. Every session is adapted to your skin type, with extra care where the skin is most sensitive.",
    images: [
      "/images/bs/services2.jpg",
      "/images/bs/services2.2.jpg",
      "/images/bs/services2.3.jpg",
    ],
    treatments: [
      { title: "Brazilian bikini", duration: "40 min", price: "£45", popular: true },
      { title: "Full leg", duration: "50 min", price: "£40" },
      { title: "Half leg", duration: "30 min", price: "£25" },
      { title: "Full / half arm", duration: "25 min", price: "£22" },
      { title: "Waxing men — back", duration: "35 min", price: "£38" },
      { title: "Extra area", duration: "15 min", price: "£12" },
    ],
    treatmentsTotal: 11,
    priceFrom: "£12",
    masters: [
      { name: "Olivia Hayes", role: "Waxing expert", image: "/images/masters/6.jpg" },
      { name: "Sophia Reed", role: "Waxing expert", image: "/images/masters/5.jpg" },
    ],
    link: "waxing",
  },
  {
    id: "manicure",
    title: "Manicure & Extensions",
    tagline: "Gel · Structure · Nail art",
    description:
      "Durability, style and a polished finish tailored to your hands. Clean prep, structured gel and a design language that ranges from bare minimal to full art.",
    images: [
      "/images/bs/services3.jpg",
      "/images/bs/services1.3.jpg",
      "/images/bs/services1.2.jpg",
    ],
    treatments: [
      { title: "Gel extension", duration: "2 hr", price: "£65", popular: true },
      { title: "Tip gel extension", duration: "1 hr 45 min", price: "£58" },
      { title: "Clean manicure", duration: "45 min", price: "£28" },
      { title: "Design 10 nails", duration: "40 min", price: "£25" },
      { title: "Cuticle oil ritual", duration: "15 min", price: "£10" },
      { title: "Gel removal & repair", duration: "30 min", price: "£15" },
    ],
    treatmentsTotal: 9,
    priceFrom: "£10",
    masters: [
      { name: "Daniela Celan", role: "Salon owner · Nail master", image: "/images/masters/1.jpg" },
      { name: "Emily Bennett", role: "Nail specialist", image: "/images/masters/7.jpg" },
      { name: "Daniela Celan", role: "Nail master", image: "/images/masters/2.jpg" },
    ],
    link: "manicure",
  },
  {
    id: "semi-permanent",
    title: "Semi permanent makeup",
    tagline: "Brows · Lashes · Eyeliner",
    description:
      "Micropigmentation and lamination that keep you looking done from the moment you wake up. Shape first, pigment second — always mapped to your own face geometry.",
    images: [
      "/images/bs/services4.jpg",
      "/images/bs/services1.jpg",
      "/images/bs/services2.3.jpg",
    ],
    treatments: [
      { title: "Luxury lashes lamination", duration: "1 hr", price: "£55", popular: true },
      { title: "Eyebrow lamination", duration: "50 min", price: "£45" },
      { title: "SPMU eyeliner", duration: "2 hr", price: "£180" },
      { title: "Brow keratin", duration: "40 min", price: "£35" },
      { title: "Lash botox", duration: "45 min", price: "£40" },
      { title: "Colour top-up", duration: "1 hr", price: "£70" },
    ],
    treatmentsTotal: 7,
    priceFrom: "£35",
    masters: [
      { name: "Sophia Reed", role: "Brow specialist", image: "/images/masters/5.jpg" },
      { name: "Isabella Moore", role: "Lash tech", image: "/images/masters/4.jpg" },
    ],
    link: "semi-permanent",
  },
  {
    id: "pedicure",
    title: "Pedicure",
    tagline: "Care · Comfort · Finish",
    description:
      "Smooth skin, healthy nails and a well-groomed finish. A slow, careful ritual that treats the feet as seriously as the hands — because they carry you all day.",
    images: [
      "/images/bs/services5.jpg",
      "/images/bs/services2.2.jpg",
      "/images/bs/services3.jpg",
    ],
    treatments: [
      { title: "Pedicure & rubber gel", duration: "1 hr 30 min", price: "£60", popular: true },
      { title: "Clean pedicure", duration: "1 hr", price: "£38" },
      { title: "Pedicure with varnish", duration: "1 hr 15 min", price: "£45" },
      { title: "Heel treatment", duration: "30 min", price: "£22" },
      { title: "Nail correction", duration: "25 min", price: "£18" },
    ],
    treatmentsTotal: 6,
    priceFrom: "£18",
    masters: [
      { name: "Emily Bennett", role: "Nail specialist", image: "/images/masters/7.jpg" },
      { name: "Mia Thompson", role: "Pedicure master", image: "/images/masters/6.jpg" },
    ],
    link: "pedicure",
  },
];

export const servicesHeroStats = [
  { value: "5", label: "Service categories" },
  { value: "41", label: "Treatments on the menu" },
  { value: "8", label: "Certified experts" },
  { value: "14", label: "Years in the craft" },
];

/** "Find your master" strip under the catalogue */
export const servicesTeamMock: (IServiceMaster & {
  skills: string;
  services: string[];
})[] = [
  {
    name: "Daniela Celan",
    role: "Salon owner · Nail master",
    image: "/images/masters/1.jpg",
    skills: "14 years of shaping, structuring and finishing nails to perfection.",
    services: ["Manicure", "Pedicure"],
  },
  {
    name: "Nelia Mihai",
    role: "Makeup artist",
    image: "/images/masters/2.jpg",
    skills: "Enhances natural beauty with expert cosmetic technique and skin prep.",
    services: ["Makeup", "SPMU"],
  },
  {
    name: "Amelia Carter",
    role: "Bridal specialist",
    image: "/images/masters/3.jpg",
    skills: "Soft glam, bridal and editorial looks built for long wear.",
    services: ["Makeup"],
  },
  {
    name: "Isabella Moore",
    role: "Lash tech",
    image: "/images/masters/4.jpg",
    skills: "Classic and light volume sets designed for a balanced eye shape.",
    services: ["SPMU", "Makeup"],
  },
  {
    name: "Sophia Reed",
    role: "Brow specialist",
    image: "/images/masters/5.jpg",
    skills: "Brow shaping and lamination mapped to your face geometry.",
    services: ["SPMU", "Waxing"],
  },
  {
    name: "Olivia Hayes",
    role: "Waxing expert",
    image: "/images/masters/6.jpg",
    skills: "Gentle technique and clean results, with care for sensitive skin.",
    services: ["Waxing"],
  },
];
