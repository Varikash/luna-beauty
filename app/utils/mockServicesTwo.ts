/**
 * Services catalogue for /services and /services/details/<link>.
 *
 * Source of truth: "Luna Beauty studio staff description.docx" supplied by the
 * client. Every treatment title, description, master and master-to-treatment
 * assignment below is taken from that document — nothing here is invented.
 *
 * What the document does NOT contain (grep the constants to find every gap):
 *  - prices        → PRICE_TBC
 *  - durations     → DURATION_TBC
 *  - the waxing treatment menu (zones) → `waxing.treatments` is empty on purpose
 *
 * Shape is unchanged, so the arrays can still be swapped for a real API payload
 * without touching the components.
 */

/** No price in the client's document yet. Grep PRICE_TBC before launch. */
const PRICE_TBC = 'On request';

/** No duration in the client's document yet. Grep DURATION_TBC before launch. */
const DURATION_TBC = '—';

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
  /**
   * Only set when a treatment is restricted to some of the category's masters
   * (the document marks Ingrown Toenails as "dana only"). Omitted means every
   * master listed on the category performs it.
   */
  masters?: string[];
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

/**
 * The six people who actually work in the studio. Names are exactly as the
 * client wrote them — no surnames were supplied.
 */
const DANA: IServiceMaster = {
  name: 'Dana',
  role: 'Founder · Nail technician',
  image: '/images/masters/dana.webp',
  bio: 'Founder of LUNA Beauty Studio & Academy with over 12 years in the industry. Dana specialises in Russian manicure, works as an educator, and built the studio around precision, health and client care.',
};

const TANYA: IServiceMaster = {
  name: 'Tanya',
  role: 'Nail technician',
  image: '/images/masters/tanya.webp',
  bio: 'Over 4 years of creating beautiful, long-lasting nails with precision and exceptional attention to detail. Known for clean Russian manicures and refined cuticle work.',
};

const LOLA: IServiceMaster = {
  name: 'Lola',
  role: 'Nail technician',
  image: '/images/masters/lola.webp',
  bio: 'Over 10 years in the nail industry, with a reputation for exceptional craftsmanship and a perfectionist approach. Every set combines beauty, precision and durability.',
};

const NELYA: IServiceMaster = {
  name: 'Nelya',
  role: 'Makeup artist',
  image: '/images/masters/nelya.webp',
  bio: 'Over 4 years specialising in bridal, occasion and editorial makeup. Nelya creates elegant, long-lasting looks tailored to each individual’s features, style and vision.',
};

const MARYNA: IServiceMaster = {
  name: 'Maryna',
  role: 'Brows & PMU specialist',
  image: '/images/masters/maryna.webp',
  bio: 'Over 10 years in the beauty industry, specialising in brow shaping, lamination, powder brows and the hair stroke technique — precise, artistic, and always natural-looking.',
};

const NATALIIA: IServiceMaster = {
  name: 'Nataliia',
  role: 'Waxing specialist',
  // TODO: the client's document says "(foto not included)" — waiting on a portrait.
  image: '/images/services/waxing-1.webp',
  bio: 'Over 6 years in professional waxing, known for meticulous technique, impeccable hygiene standards and a calm, client-first approach that puts first-time clients at ease.',
};

const NAIL_TEAM = [DANA, TANYA, LOLA];

export const servicesCatalogMock: IServiceCategory[] = [
  {
    id: 'manicure',
    title: 'Manicure & Extensions',
    tagline: 'Russian manicure · Structure · Nail art',
    description:
      'Every manicure is tailored to your natural nails, lifestyle and personal preferences. Our technicians are trained in advanced Russian Manicure techniques, renowned for their precision, flawless cuticle work and immaculate finish — because healthy nails are the foundation of beautiful nails.',
    images: [
      '/images/services/nails-extensions-2.webp',
      '/images/services/nails-french-tip.webp',
      '/images/services/nails-rubber-base.webp',
    ],
    treatments: [
      {
        title: 'Rubber Base Manicure',
        duration: DURATION_TBC,
        price: PRICE_TBC,
        popular: true,
        text: 'A strengthening rubber base manicure designed to reinforce natural nails, improve durability, and create a flawless, long-lasting finish.',
        image: '/images/services/nails-rubber-base.webp',
      },
      {
        title: 'French Tip',
        duration: DURATION_TBC,
        price: PRICE_TBC,
        text: 'A timeless French manicure with a clean, precise tip — elegant, balanced, and effortlessly sophisticated.',
        image: '/images/services/nails-french-tip.webp',
      },
      {
        title: 'Extensions',
        duration: DURATION_TBC,
        price: PRICE_TBC,
        text: 'Structured nail extensions crafted for strength, symmetry, and refined shape — tailored to a natural or statement finish.',
        image: '/images/services/nails-extensions-1.webp',
      },
      {
        title: 'Clean Manicure',
        duration: DURATION_TBC,
        price: PRICE_TBC,
        text: 'A meticulous nail preparation focused on cuticle care and nail health — clean, minimal, and perfectly refined.',
        image: '/images/services/nails-clean-manicure-1.webp',
      },
    ],
    priceFrom: PRICE_TBC,
    masters: NAIL_TEAM,
    link: 'manicure',
  },
  {
    id: 'pedicure',
    title: 'Pedicure',
    tagline: 'Care · Comfort · Finish',
    description:
      'Beyond perfectly polished toes, we focus on the health, comfort and appearance of your feet. From meticulous cuticle work and nail care to smooth heels, every pedicure is performed with exceptional attention to detail in a relaxing and hygienic environment.',
    images: [
      '/images/services/pedicure-aesthetic.webp',
      '/images/services/pedicure-cracked-heels.webp',
      '/images/services/pedicure-ingrown-3.webp',
    ],
    treatments: [
      {
        title: 'Aesthetic Pedicure',
        duration: DURATION_TBC,
        price: PRICE_TBC,
        popular: true,
        text: 'A refined pedicure focused on clean lines, healthy skin, and a polished, elegant finish.',
        image: '/images/services/pedicure-aesthetic.webp',
      },
      {
        title: 'Ingrown Toenails Treatment',
        duration: DURATION_TBC,
        price: PRICE_TBC,
        text: 'Professional and gentle treatment to relieve discomfort and restore nail health with precision and care.',
        image: '/images/services/pedicure-ingrown-1.webp',
        // The document marks this one "dana only".
        masters: ['Dana'],
      },
      {
        title: 'Cracked Heels Treatment',
        duration: DURATION_TBC,
        price: PRICE_TBC,
        text: 'Intensive care to repair dry, cracked heels — smoothing, hydrating, and restoring softness.',
        image: '/images/services/pedicure-cracked-heels.webp',
      },
    ],
    priceFrom: PRICE_TBC,
    masters: NAIL_TEAM,
    link: 'pedicure',
  },
  {
    id: 'makeup',
    title: 'Makeup',
    tagline: 'Bridal · Occasion · Editorial',
    description:
      'Every look is customised to your features, outfit, lighting and the length of your day. Products are chosen for durability and comfort, so the finish photographs beautifully and holds from the first look to the last dance.',
    images: [
      '/images/services/makeup-bridal.webp',
      '/images/services/makeup-editorial-1.webp',
      '/images/services/makeup-soft-natural.webp',
    ],
    treatments: [
      {
        title: 'Bridal Makeup',
        duration: DURATION_TBC,
        price: PRICE_TBC,
        popular: true,
        text: 'Fully tailored to your personal style, dress and wedding theme. Whether you dream of a soft, romantic glow, timeless elegance, or full glamorous perfection, we create a flawless complexion and long-lasting finish designed to withstand happy tears, endless photos, and hours of celebration. Every product is carefully selected for durability and comfort, ensuring you look radiant from the first look until the last dance.',
        image: '/images/services/makeup-bridal.webp',
      },
      {
        title: 'Bridal Makeup Trial',
        duration: DURATION_TBC,
        price: PRICE_TBC,
        text: 'We recommend every bride books a trial before the wedding day. This personalised consultation allows us to refine your chosen look, test products, and ensure every detail is tailored to you.',
        image: '/images/services/makeup-bridal.webp',
      },
      {
        title: 'Bridesmaids Makeup',
        duration: DURATION_TBC,
        price: PRICE_TBC,
        text: 'Beautifully coordinated makeup designed to complement the bride and the wedding aesthetic while enhancing each bridesmaid’s individual features. Every look is customised to suit different skin tones, face shapes and personal styles, creating an elegant bridal party that photographs beautifully together while allowing everyone to feel confident and comfortable.',
        image: '/images/services/makeup-bridesmaids.webp',
      },
      {
        title: 'Flower Girl Makeup',
        duration: DURATION_TBC,
        price: PRICE_TBC,
        text: 'A soft, delicate touch of age-appropriate makeup designed to make your little one feel extra special. Using gentle products and subtle shimmer, blush or lip gloss, we create a fresh, natural look that enhances photos while keeping your flower girl comfortable and looking like herself.',
        image: '/images/services/makeup-flower-girl.webp',
      },
      {
        title: 'Soft / Natural Makeup',
        duration: DURATION_TBC,
        price: PRICE_TBC,
        text: 'Perfect for clients who love understated elegance. This look enhances your natural beauty using lightweight, skin-like products that create a radiant complexion, softly defined eyes, and fresh, healthy-looking skin. Ideal for daytime events, business shoots, baby showers, brunches, or anyone wanting an effortlessly polished appearance.',
        image: '/images/services/makeup-soft-natural.webp',
      },
      {
        title: 'Special Occasion Makeup',
        duration: DURATION_TBC,
        price: PRICE_TBC,
        text: 'Whether you’re attending a wedding, celebrating a birthday, prom, gala, engagement party, or any important event, this look is customised to suit your outfit, hairstyle, lighting and personal style. Expect a flawless, long-lasting finish that photographs beautifully and lasts comfortably throughout the entire event.',
        image: '/images/services/makeup-special-occasion.webp',
      },
      {
        title: 'Editorial & Photoshoot Makeup',
        duration: DURATION_TBC,
        price: PRICE_TBC,
        text: 'Designed specifically for professional photography, branding sessions, fashion editorials, commercial campaigns and content creation. This high-definition makeup is crafted to perform beautifully under studio lighting and high-resolution cameras, with precise contouring, skin perfection and expert detailing that translates flawlessly both on camera and in person.',
        image: '/images/services/makeup-editorial-1.webp',
      },
    ],
    priceFrom: PRICE_TBC,
    masters: [NELYA],
    link: 'makeup',
  },
  {
    id: 'brows-lashes',
    title: 'Brows & Lashes',
    tagline: 'HD Brows · Lamination · Lash lift',
    description:
      'Beautiful brows and lashes have the power to transform your entire look. Every treatment is tailored to your unique facial features, using premium products and advanced techniques to achieve long-lasting, natural results.',
    images: [
      '/images/services/brows-hd-1.webp',
      '/images/services/brows-hd-2.webp',
      '/images/services/lash-lamination-1.webp',
    ],
    treatments: [
      {
        title: 'HD Brows',
        duration: DURATION_TBC,
        price: PRICE_TBC,
        popular: true,
        text: 'A bespoke brow treatment combining professional mapping, waxing, shaping, tinting and styling to create brows that perfectly complement your facial features. Designed to deliver a polished, symmetrical look while maintaining a natural appearance.',
        image: '/images/services/brows-hd-1.webp',
      },
      {
        title: 'Brow Lamination',
        duration: DURATION_TBC,
        price: PRICE_TBC,
        text: 'Transform unruly or sparse brows into fuller, perfectly groomed brows that stay in place for up to 6–8 weeks. Ideal for creating a soft, fluffy and naturally lifted look.',
        image: '/images/services/brows-hd-2.webp',
      },
      {
        title: 'Lash Lamination',
        duration: DURATION_TBC,
        price: PRICE_TBC,
        text: 'Enhance your natural lashes with a beautiful lift, curl and definition without the need for extensions. This treatment opens the eyes, creates the illusion of longer lashes, and lasts up to 6–8 weeks.',
        image: '/images/services/lash-lamination-1.webp',
      },
    ],
    priceFrom: PRICE_TBC,
    masters: [MARYNA],
    link: 'brows-lashes',
  },
  {
    id: 'permanent-makeup',
    title: 'Permanent Makeup',
    tagline: 'Powder brows · Hair stroke · Lip blush',
    description:
      'Permanent makeup enhances your natural beauty while simplifying your daily routine. Every procedure is individually tailored to create elegant, soft and natural-looking results that complement your facial features.',
    images: [
      '/images/services/pmu-powder-brows-1.webp',
      '/images/services/pmu-hair-stroke-1.webp',
      '/images/services/pmu-lip-blush-1.webp',
    ],
    treatments: [
      {
        title: 'Powder Brows',
        duration: DURATION_TBC,
        price: PRICE_TBC,
        popular: true,
        text: 'A soft shading technique that creates beautifully defined brows with a natural powdered makeup effect. Ideal for clients looking for fuller, more symmetrical brows that remain effortlessly beautiful every day.',
        image: '/images/services/pmu-powder-brows-1.webp',
      },
      {
        title: 'Hair Stroke Brows',
        duration: DURATION_TBC,
        price: PRICE_TBC,
        text: 'The newest generation of permanent makeup. Using an advanced single-needle technique, ultra-fine hair strokes are carefully created to mimic natural eyebrow hairs with exceptional precision. This method causes minimal skin trauma while delivering beautifully realistic, soft and natural-looking brows that blend seamlessly with your own — perfect for clients with sparse brows or anyone looking to restore their natural appearance.',
        image: '/images/services/pmu-hair-stroke-1.webp',
      },
      {
        title: 'Lip Blush',
        duration: DURATION_TBC,
        price: PRICE_TBC,
        text: 'A semi-permanent treatment designed to restore colour, improve definition and create the appearance of healthier, more youthful lips. Using premium pigments and a personalised colour match, it subtly enhances your natural lip tone while correcting uneven pigmentation and refining the lip border, for a soft, fresh finish that never looks overdone.',
        image: '/images/services/pmu-lip-blush-1.webp',
      },
    ],
    priceFrom: PRICE_TBC,
    masters: [MARYNA],
    link: 'permanent-makeup',
  },
  {
    id: 'waxing',
    title: 'Waxing',
    tagline: 'Private · Gentle · Sensitive skin',
    description:
      'Professional waxing in a private, welcoming environment. We use premium-quality waxes and meticulous techniques for effective hair removal with minimal discomfort, respecting even the most sensitive skin — every appointment performed with the highest standards of hygiene and discretion.',
    images: [
      '/images/services/waxing-1.webp',
      '/images/services/waxing-3.webp',
      '/images/services/waxing-4.webp',
    ],
    // TODO: the client's document describes the service but lists no zones.
    // Left empty on purpose so the site never shows an invented waxing menu.
    treatments: [],
    priceFrom: PRICE_TBC,
    masters: [NATALIIA],
    link: 'waxing',
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
  { value: String(servicesCatalogMock.length), label: 'Service categories' },
  { value: String(treatmentsCount), label: 'Treatments on the menu' },
  { value: String(expertsCount), label: 'Certified experts' },
  { value: '12', label: 'Years in the craft' },
];

/** "Find your master" strip under the catalogue */
export const servicesTeamMock: (IServiceMaster & {
  skills: string;
  services: string[];
})[] = [
  {
    ...DANA,
    skills: 'Over 12 years of Russian manicure, pedicure and nail artistry — founder and educator.',
    services: ['Manicure', 'Pedicure'],
  },
  {
    ...NELYA,
    skills: 'Bridal, occasion and editorial makeup built for long wear and high-resolution cameras.',
    services: ['Makeup'],
  },
  {
    ...TANYA,
    skills: 'Clean Russian manicures and refined cuticle work with exceptional attention to detail.',
    services: ['Manicure', 'Pedicure'],
  },
  {
    ...LOLA,
    skills: 'Ten years of flawless craftsmanship — nails that stay strong and beautiful for weeks.',
    services: ['Manicure', 'Pedicure'],
  },
  {
    ...MARYNA,
    skills: 'Brow shaping, lamination, powder brows and the single-needle hair stroke technique.',
    services: ['Brows & Lashes', 'Permanent Makeup'],
  },
  {
    ...NATALIIA,
    skills: 'Six years of professional waxing with meticulous technique and impeccable hygiene.',
    services: ['Waxing'],
  },
];
