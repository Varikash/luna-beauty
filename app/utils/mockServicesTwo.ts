/**
 * Mock data for the services page (/services).
 * Shape is intentionally close to the real API contract so the arrays can be
 * swapped for the real payload without touching the components.
 */

/**
 * Placeholder copy for treatments whose description is not written yet.
 * Grep for TODO_TEXT to find every card still waiting for real content.
 */
const TODO_TEXT =
  "Description for this treatment is on its way. Our master will walk you through every step of the ritual when you book.";

export interface ITreatment {
  title: string;
  duration: string;
  price: string;
  /** Highlighted in the list as a client favourite */
  popular?: boolean;
  /** Long description — rendered on the detail page card */
  text: string;
  /** Card image on the detail page */
  image: string;
}

export interface IServiceMaster {
  name: string;
  role: string;
  image: string;
  /** Paragraph shown in the detail page aside; falls back to `role` */
  bio?: string;
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
  /**
   * The complete menu for the category. The catalogue block previews the first
   * few, the detail page (/services/details/<link>) renders all of them —
   * so the counter can never drift from the content.
   */
  treatments: ITreatment[];
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
      {
        title: "Bridal make-up",
        duration: "1 hr 30 min",
        price: "£120",
        popular: true,
        text: "The goal is to achieve a timeless and elegant appearance that complements the dress, hairstyle, and overall theme. A well-prepped base ensures a smooth application, while long-wearing, high-quality products keep the makeup fresh from the ceremony to the reception.",
        image: "/images/bs/services1.jpg",
      },
      {
        title: "Bridesmaid makeup",
        duration: "1 hr",
        price: "£80",
        text: "The goal is to enhance natural beauty with a polished and cohesive look that suits the bride’s vision while allowing each bridesmaid to feel confident. Soft, radiant skin, defined eyes, and a balanced lip colour create a timeless and flattering effect.",
        image: "/images/bs/services1.jpg",
      },
      {
        title: "Event / party",
        duration: "1 hr",
        price: "£60",
        text: "Whether it's a glamorous evening affair or a vibrant celebration, the key is a flawless base, defined eyes, and a long-wearing finish. While high-quality products help maintain a fresh and radiant look.",
        image: "/images/bs/services1.2.jpg",
      },
      {
        title: "Pre-makeup facial",
        duration: "20 min",
        price: "£35",
        text: "Skin prep means giving the skin what it needs so that my “canvas” is ready to receive the makeup application. The skin reacts differently when it is taken care of, it looks smoother and the makeup will stay on longer. This is the reason you should not skip this step.",
        image: "/images/bs/services1.3.jpg",
      },
      {
        title: "Junior make-up",
        duration: "45 min",
        price: "£40",
        text: "Junior makeup is all about keeping things light, fresh, and age-appropriate. It focuses on enhancing natural beauty with minimal products, using lightweight formulas for a healthy glow. Soft tints, subtle shimmer, and neutral tones work best!",
        image: "/images/bs/services1.jpg",
      },
      {
        title: "Flower girl makeup",
        duration: "30 min",
        price: "£20",
        text: "At this age, it's best to focus on a light touch—think clear lip gloss, a hint of blush, or a touch of shimmer for fun occasions. Skincare is the most important step, ensuring the skin stays healthy and hydrated.",
        image: "/images/bs/services1.2.jpg",
      },
      {
        title: "Bridesmaids trial",
        duration: "1 hr",
        price: "£60",
        text: "A bridesmaids' trial makeup session is the perfect opportunity to ensure a cohesive and flattering look for the bridal party. It allows each bridesmaid to test different styles, ensuring their makeup complements the wedding theme, their dress, and personal preferences.",
        image: "/images/bs/services1.3.jpg",
      },
      {
        title: "Travel charge",
        duration: "5 min",
        price: "£0,30",
        text: "The travel cost for a makeup artist from the salon is charged at 0.30 pence per mile, meaning that for every mile traveled to the client`s location, an additional fee of £0.30 will be applied. This cost covers the artist`s travel expenses and is added to the total service price.",
        image: "/images/bs/services1.jpg",
      },
    ],
    priceFrom: "£20",
    masters: [
      {
        name: "Nelia Mihai",
        role: "Makeup artist",
        image: "/images/masters/2.jpg",
        bio: "Is a skilled professional makeup artist who enhances beauty with expert cosmetic techniques. She tailors each look to suit different occasions, from everyday glam to special events. With a deep understanding of skin tones and trends.",
      },
      {
        name: "Amelia Carter",
        role: "Bridal specialist",
        image: "/images/masters/3.jpg",
        bio: "Builds soft glam, bridal and editorial looks made for long wear. Amelia maps every look to the dress, the light and the length of the day, so it holds from the first photo to the last dance.",
      },
      {
        name: "Isabella Moore",
        role: "Makeup artist",
        image: "/images/masters/4.jpg",
        bio: "Works with balance and proportion — classic technique, clean lines and a finish that still looks like you. Equally at home with a bare daytime glow and a full evening eye.",
      },
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
      { title: "Brazilian bikini", duration: "40 min", price: "£45", popular: true, text: TODO_TEXT, image: "/images/bs/services2.jpg" },
      { title: "Full leg", duration: "50 min", price: "£40", text: TODO_TEXT, image: "/images/bs/services2.2.jpg" },
      { title: "Half leg", duration: "30 min", price: "£25", text: TODO_TEXT, image: "/images/bs/services2.3.jpg" },
      { title: "Full / half arm", duration: "25 min", price: "£22", text: TODO_TEXT, image: "/images/bs/services2.jpg" },
      { title: "Waxing men — back", duration: "35 min", price: "£38", text: TODO_TEXT, image: "/images/bs/services2.2.jpg" },
      { title: "Waxing men — chest", duration: "30 min", price: "£35", text: TODO_TEXT, image: "/images/bs/services2.3.jpg" },
      { title: "Underarms", duration: "15 min", price: "£16", text: TODO_TEXT, image: "/images/bs/services2.jpg" },
      { title: "Upper lip & chin", duration: "15 min", price: "£14", text: TODO_TEXT, image: "/images/bs/services2.2.jpg" },
      { title: "Eyebrow shaping", duration: "20 min", price: "£18", text: TODO_TEXT, image: "/images/bs/services2.3.jpg" },
      { title: "Full body", duration: "1 hr 45 min", price: "£110", text: TODO_TEXT, image: "/images/bs/services2.jpg" },
      { title: "Extra area", duration: "15 min", price: "£12", text: TODO_TEXT, image: "/images/bs/services2.2.jpg" },
    ],
    priceFrom: "£12",
    masters: [
      {
        name: "Olivia Hayes",
        role: "Waxing expert",
        image: "/images/masters/6.jpg",
        bio: "Gentle technique and clean results, with particular care for sensitive skin. Olivia adapts the wax, the temperature and the pace of the session to your skin type.",
      },
      {
        name: "Sophia Reed",
        role: "Waxing expert",
        image: "/images/masters/5.jpg",
        bio: "Precise, unhurried work and a calm room. Sophia focuses on aftercare as much as the session itself, so the skin stays smooth and comfortable for longer.",
      },
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
      { title: "Gel extension", duration: "2 hr", price: "£65", popular: true, text: TODO_TEXT, image: "/images/bs/services3.jpg" },
      { title: "Tip gel extension", duration: "1 hr 45 min", price: "£58", text: TODO_TEXT, image: "/images/bs/services1.3.jpg" },
      { title: "Clean manicure", duration: "45 min", price: "£28", text: TODO_TEXT, image: "/images/bs/services1.2.jpg" },
      { title: "Manicure with varnish", duration: "1 hr", price: "£34", text: TODO_TEXT, image: "/images/bs/services3.jpg" },
      { title: "Design 10 nails", duration: "40 min", price: "£25", text: TODO_TEXT, image: "/images/bs/services1.3.jpg" },
      { title: "Design 2 nails", duration: "15 min", price: "£8", text: TODO_TEXT, image: "/images/bs/services1.2.jpg" },
      { title: "Gel removal & repair", duration: "30 min", price: "£15", text: TODO_TEXT, image: "/images/bs/services3.jpg" },
      { title: "Single nail repair", duration: "15 min", price: "£7", text: TODO_TEXT, image: "/images/bs/services1.3.jpg" },
      { title: "Cuticle oil ritual", duration: "15 min", price: "£10", text: TODO_TEXT, image: "/images/bs/services1.2.jpg" },
    ],
    priceFrom: "£7",
    masters: [
      {
        name: "Daniela Celan",
        role: "Salon owner · Nail master",
        image: "/images/masters/1.jpg",
        bio: "Fourteen years of shaping, structuring and finishing nails to perfection. Daniela founded the studio and still takes the chair for the work that needs the steadiest hand.",
      },
      {
        name: "Emily Bennett",
        role: "Nail specialist",
        image: "/images/masters/7.jpg",
        bio: "Structure first, colour second. Emily builds extensions that keep their shape for weeks and treats the natural nail underneath as the priority.",
      },
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
      { title: "Luxury lashes lamination", duration: "1 hr", price: "£55", popular: true, text: TODO_TEXT, image: "/images/bs/services4.jpg" },
      { title: "Eyebrow lamination", duration: "50 min", price: "£45", text: TODO_TEXT, image: "/images/bs/services1.jpg" },
      { title: "SPMU eyeliner", duration: "2 hr", price: "£180", text: TODO_TEXT, image: "/images/bs/services2.3.jpg" },
      { title: "SPMU brows — powder", duration: "2 hr 30 min", price: "£220", text: TODO_TEXT, image: "/images/bs/services4.jpg" },
      { title: "Brow keratin", duration: "40 min", price: "£35", text: TODO_TEXT, image: "/images/bs/services1.jpg" },
      { title: "Lash botox", duration: "45 min", price: "£40", text: TODO_TEXT, image: "/images/bs/services2.3.jpg" },
      { title: "Colour top-up", duration: "1 hr", price: "£70", text: TODO_TEXT, image: "/images/bs/services4.jpg" },
    ],
    priceFrom: "£35",
    masters: [
      {
        name: "Sophia Reed",
        role: "Brow specialist",
        image: "/images/masters/5.jpg",
        bio: "Brow shaping and lamination mapped to your own face geometry. Shape first, pigment second — Sophia never starts pigment work before the drawing is agreed.",
      },
      {
        name: "Isabella Moore",
        role: "Lash tech",
        image: "/images/masters/4.jpg",
        bio: "Classic and light volume sets designed around a balanced eye shape. Isabella works to keep the natural lash healthy under every set she builds.",
      },
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
      { title: "Pedicure & rubber gel", duration: "1 hr 30 min", price: "£60", popular: true, text: TODO_TEXT, image: "/images/bs/services5.jpg" },
      { title: "Pedicure with varnish", duration: "1 hr 15 min", price: "£45", text: TODO_TEXT, image: "/images/bs/services2.2.jpg" },
      { title: "Clean pedicure", duration: "1 hr", price: "£38", text: TODO_TEXT, image: "/images/bs/services3.jpg" },
      { title: "Heel treatment", duration: "30 min", price: "£22", text: TODO_TEXT, image: "/images/bs/services5.jpg" },
      { title: "Nail correction", duration: "25 min", price: "£18", text: TODO_TEXT, image: "/images/bs/services2.2.jpg" },
      { title: "Gel removal", duration: "20 min", price: "£12", text: TODO_TEXT, image: "/images/bs/services3.jpg" },
    ],
    priceFrom: "£12",
    masters: [
      {
        name: "Emily Bennett",
        role: "Nail specialist",
        image: "/images/masters/7.jpg",
        bio: "Structure first, colour second. Emily builds extensions that keep their shape for weeks and treats the natural nail underneath as the priority.",
      },
      {
        name: "Mia Thompson",
        role: "Pedicure master",
        image: "/images/masters/6.jpg",
        bio: "A slow, careful ritual that treats the feet as seriously as the hands. Mia works on skin and nail health first, and finishes with the polish.",
      },
    ],
    link: "pedicure",
  },
];

/** Detail page lookup: /services/details/<link> */
export const findServiceByLink = (link: string): IServiceCategory | undefined =>
  servicesCatalogMock.find((service) => service.link === link);

const treatmentsCount = servicesCatalogMock.reduce(
  (total, service) => total + service.treatments.length,
  0
);

const expertsCount = new Set(
  servicesCatalogMock.flatMap((service) => service.masters.map((master) => master.name))
).size;

/** Derived from the catalogue so the numbers can never drift from the content */
export const servicesHeroStats = [
  { value: String(servicesCatalogMock.length), label: "Service categories" },
  { value: String(treatmentsCount), label: "Treatments on the menu" },
  { value: String(expertsCount), label: "Certified experts" },
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
