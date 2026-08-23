/**
 * Master profiles for /master/<slug>.
 *
 * Biographies, roles, years of experience and languages come from
 * "Luna Beauty studio staff description.docx" supplied by the client — the
 * story paragraphs below are the client's own copy, not placeholders.
 *
 * Nothing here duplicates data that already exists elsewhere:
 *  - who works in which category, and the treatment menu, is derived from
 *    `servicesCatalogMock` (mockServicesTwo.ts);
 *  - the hero eyebrow ("NAIL TECHNICIAN") and the two chips under the bio
 *    ("Salon owner," / "12 years of experience") come from `mastersMock`
 *    (mockFiles.ts) — the Figma hero block maps 1:1 onto `IMaster.info` and
 *    `IMaster.status`;
 *  - only what neither source knows (the long story, photo slots, the
 *    decorative word in "<Nail> Services") lives in MASTER_EXTRAS below.
 *
 * So a master's page can never disagree with the services catalogue about what
 * they do.
 */

import {
  servicesCatalogMock,
  type ITreatment,
  type IServiceCategory,
  type IServiceMaster,
} from './mockServicesTwo';
import { mastersMock } from './mockFiles';

/**
 * Fallback for a master added to the catalogue before the client supplies their
 * story. Every one of the six current masters has real copy in MASTER_EXTRAS.
 */
const TODO_STORY =
  "This master's full story is still being written. Ask them about it when you sit in the chair — they tell it better than we could.";

/** "Dana" → "dana" — the /master/<slug> route segment */
export const masterSlug = (name: string): string =>
  name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** One service category a master works in, with the menu they perform there */
export interface IMasterCategory {
  /** Anchor id in the services catalogue */
  id: string;
  title: string;
  tagline: string;
  /** Detail route: /services/details/<link> */
  link: string;
  treatments: ITreatment[];
  priceFrom: string;
  /** The role this master holds inside this category */
  role: string;
}

/** The three photo slots the design asks for, besides the portrait */
export interface IMasterPhotos {
  /** Hero portrait — 568x796 on desktop, a 148px circle on mobile */
  portrait: string;
  /** Landscape shot beside the hero — 486x397 desktop / 340x258 mobile */
  heroSide: string;
  /** First story photo — 868x464 desktop / 344x344 mobile */
  storyWide: string;
  /** Second story photo — 568x668 desktop / 344x464 mobile */
  storyTall: string;
}

export interface IMasterProfile {
  /** Route: /master/<slug> */
  slug: string;
  name: string;
  /** Uppercase kicker above the name, e.g. "NAIL MASTER" */
  eyebrow: string;
  /** Headline role, e.g. "Salon owner · Nail master" */
  role: string;
  /** First-person intro paragraph in the hero */
  intro: string;
  /** Two short lines under the intro: ["Salon owner,", "14 years of experience"] */
  chips: string[];
  /** One-line skill summary (used for metadata and card decks) */
  skills: string;
  /** Years in the craft */
  experience?: number;
  languages?: string[];
  /** Playfair pull-quote that opens the story block */
  storyLead: string;
  /** Story body, one string per paragraph */
  story: string[];
  photos: IMasterPhotos;
  /**
   * Decorative first word of the services heading — "Nail" in "Nail Services".
   * Falls back to the master's primary category title.
   */
  servicesWord: string;
  categories: IMasterCategory[];
  /** Every treatment this master performs, flattened across categories */
  treatments: ITreatment[];
  /** Cheapest treatment across every category, e.g. "£7" */
  priceFrom: string;
}

/** Generic strapline beside the hero star — same copy the home page already uses */
export const MASTER_STRAPLINE =
  'High-quality services, from professional makeup and flawless waxing to the best experts in nails manicure!';

/** Subtitle above the services CTA */
export const MASTER_SERVICES_SUBTITLE =
  'Luxury beauty services tailored just for you.\nBook your appointment today!';

type MasterExtras = Partial<
  Pick<
    IMasterProfile,
    | 'eyebrow'
    | 'role'
    | 'intro'
    | 'experience'
    | 'languages'
    | 'storyLead'
    | 'story'
    | 'servicesWord'
  >
> & {
  /** Overrides the rotating fallbacks below, slot by slot */
  photos?: Partial<IMasterPhotos>;
};

/**
 * Profile facts neither the catalogue nor `mastersMock` carries. Keyed by slug;
 * a missing entry just falls back to derived values.
 */
const MASTER_EXTRAS: Record<string, MasterExtras> = {
  dana: {
    eyebrow: 'FOUNDER · NAIL TECHNICIAN',
    role: 'Founder · Nail technician',
    experience: 12,
    servicesWord: 'Nail',
    languages: ['English', 'Russian', 'Romanian'],
    intro:
      'Hi, I’m Dana, the founder of LUNA Beauty Studio & Academy. With over 12 years of experience in the beauty industry, my passion has always been to deliver exceptional results while raising the standards of professionalism, education and client care.',
    storyLead:
      'My journey began with a simple fascination for beautiful nails, but it quickly became much more than that.',
    story: [
      'Through years of continuous education, hands-on experience and working in different countries, I developed a deep understanding that beauty isn’t just about how something looks—it’s about precision, health, confidence and trust.',
      'That vision inspired me to create LUNA Beauty Studio: a luxury space where every client feels welcomed, listened to and genuinely cared for. We believe that every appointment should be more than just a treatment—it should be an experience where quality is never compromised.',
      'Today, together with my talented team, we specialise in luxury nail services, Russian manicures, pedicures, brows, lashes, waxing, permanent makeup and professional makeup. Every service is performed with attention to detail, premium products and a commitment to maintaining the highest hygiene standards.',
      'As an educator and founder of LUNA Academy, I continue to train future beauty professionals because I believe education is the foundation of excellence. By constantly learning and sharing knowledge, we ensure that every client who visits LUNA benefits from the latest techniques, safest practices and the highest level of expertise.',
      'One of the things I value most is building genuine relationships with my clients. Many of them have been with us for years, and their trust is what inspires me to keep growing, improving and creating an environment where everyone feels comfortable and confident.',
      'For me, beauty is not about following trends—it’s about enhancing your natural beauty, helping you feel your best, and giving you a moment to relax in the middle of a busy life.',
      'Whether you’re visiting us for your very first appointment or you’ve been part of the LUNA family for years, my promise remains the same: exceptional quality, honest advice, meticulous attention to detail, and an experience you’ll always look forward to.',
    ],
    photos: {
      heroSide: '/images/masters/dana-3.webp',
      storyWide: '/images/services/nails-extensions-2.webp',
      storyTall: '/images/masters/dana-2.webp',
    },
  },
  nelya: {
    eyebrow: 'MAKEUP ARTIST',
    role: 'Makeup artist',
    experience: 4,
    servicesWord: 'Makeup',
    languages: ['English', 'Russian'],
    intro:
      'With over 4 years of experience in the beauty industry, Nelya is a dedicated and passionate makeup artist committed to enhancing each client’s natural beauty with precision and artistry.',
    storyLead:
      'Specialising in bridal, occasion and editorial makeup, she creates elegant, long-lasting looks tailored to each individual’s features, style and vision.',
    story: [
      'Whether you prefer a soft, radiant finish or timeless glamour, Nelya takes the time to understand your expectations and deliver results that make you feel confident and beautiful.',
      'Known for her professionalism, attention to detail, and calm, friendly approach, she believes every appointment should be a relaxing and enjoyable experience. Her client-focused philosophy ensures that every look is personalised, comfortable to wear, and flawlessly executed.',
      'Fluent in English and Russian, Nelya welcomes clients from diverse backgrounds and is dedicated to providing exceptional service from consultation to the final touch.',
      'At LUNA Beauty Studio, Nelya is proud to help every client look and feel their absolute best for life’s most memorable moments.',
    ],
    photos: {
      heroSide: '/images/services/makeup-editorial-2.webp',
      storyWide: '/images/services/makeup-special-occasion.webp',
      storyTall: '/images/services/makeup-bridal.webp',
    },
  },
  tanya: {
    eyebrow: 'NAIL TECHNICIAN',
    role: 'Nail technician',
    experience: 4,
    servicesWord: 'Nail',
    languages: ['English', 'Russian'],
    intro:
      'What once seemed impossible has become Tanya’s passion and profession. She never imagined herself working in the nail industry, but taking that first step changed her life.',
    storyLead:
      'With over 4 years of experience, Tanya specialises in creating beautiful, long-lasting nails with precision, care and exceptional attention to detail.',
    story: [
      'From once feeling nervous about holding an e-file to becoming a trusted nail technician known for clean Russian manicures and refined cuticle work, her journey is a testament to dedication, perseverance and continuous growth.',
      'Tanya believes every client deserves healthy, durable nails that remain beautiful long after leaving the salon. Her meticulous approach, combined with an artistic eye and commitment to quality, allows her to create elegant manicures that are both practical and long-lasting.',
      'Passionate about continuous education, Tanya is always refining her techniques and staying up to date with the latest industry standards to provide the highest level of care and craftsmanship.',
      'Fluent in English and Russian, and currently learning Spanish, she enjoys welcoming clients from different backgrounds and creating a warm, relaxing experience for everyone who visits LUNA Beauty Studio.',
    ],
    photos: {
      heroSide: '/images/services/nails-french-tip.webp',
      storyWide: '/images/services/nails-extensions-2.webp',
      storyTall: '/images/services/nails-clean-manicure-2.webp',
    },
  },
  lola: {
    eyebrow: 'NAIL TECHNICIAN',
    role: 'Nail technician',
    experience: 10,
    servicesWord: 'Nail',
    languages: ['English', 'Russian', 'Ukrainian'],
    intro:
      'With over 10 years of experience in the nail industry, Lola has built a reputation for her exceptional craftsmanship, professionalism and unwavering attention to detail. Her passion for creating flawless nails is reflected in every service she provides.',
    storyLead:
      'Known for her perfectionist approach, Lola believes that every manicure should combine beauty, precision and durability.',
    story: [
      'Whether creating a timeless, elegant set or a bespoke nail design, she works meticulously to ensure each client leaves with nails that not only look stunning but remain strong, healthy and beautiful for weeks.',
      'Her calm, patient nature, combined with her commitment to excellence, allows clients to relax and enjoy a truly luxurious salon experience. Lola continually refines her skills, embraces new techniques and stays up to date with the latest industry innovations, ensuring every treatment is delivered to the highest professional standard.',
      'Fluent in English, Russian and Ukrainian, Lola welcomes clients from diverse backgrounds and is dedicated to providing a personalised experience where every client feels comfortable, valued and cared for.',
      'At LUNA Beauty Studio, Lola takes pride in delivering beautiful, long-lasting results while building lasting relationships through trust, quality and exceptional client care.',
    ],
    photos: {
      heroSide: '/images/services/nails-extensions-3.webp',
      storyWide: '/images/services/pedicure-aesthetic.webp',
      storyTall: '/images/services/nails-rubber-base.webp',
    },
  },
  maryna: {
    eyebrow: 'BROWS & PMU SPECIALIST',
    role: 'Brows & PMU specialist',
    experience: 10,
    servicesWord: 'Brow',
    languages: ['English', 'Russian', 'Ukrainian'],
    intro:
      'With over 10 years of experience in the beauty industry, Maryna is a highly skilled Brows and Permanent Makeup Specialist, recognised for her precision, artistry and exceptional client care.',
    storyLead:
      'Her passion lies in creating beautifully balanced brows that enhance each client’s natural features while preserving their individuality.',
    story: [
      'Specialising in Brow Shaping, Brow Lamination, Powder Brows and the latest Hair Stroke Brows technique, Maryna offers bespoke treatments designed to achieve the most natural-looking results. Using an advanced single-needle technique, Hair Stroke Brows create ultra-fine, realistic hair-like strokes with minimal skin trauma, helping restore the appearance of naturally full brows with exceptional softness and precision.',
      'Known for her meticulous attention to detail and warm, reassuring approach, Maryna takes the time to understand every client’s goals, ensuring each treatment is tailored to complement their facial features and lifestyle. Her expertise in client communication allows every appointment to feel relaxed, informative and enjoyable.',
      'Fluent in English, Russian and Ukrainian, Maryna welcomes clients from all backgrounds and is dedicated to providing a luxury experience built on trust, professionalism and outstanding results.',
      'At LUNA Beauty Studio, Maryna is proud to combine advanced techniques with artistic precision to create naturally beautiful brows that help every client look and feel their very best.',
    ],
    photos: {
      heroSide: '/images/services/brows-hd-2.webp',
      storyWide: '/images/services/pmu-lip-blush-2.webp',
      storyTall: '/images/services/pmu-hair-stroke-2.webp',
    },
  },
  nataliia: {
    eyebrow: 'WAXING SPECIALIST',
    role: 'Waxing specialist',
    experience: 6,
    servicesWord: 'Waxing',
    languages: ['Ukrainian', 'Russian'],
    intro:
      'With over 6 years of experience in professional waxing, Nataliia is dedicated to helping clients feel confident through beautifully smooth skin and exceptional client care. Known for her meticulous technique, professionalism and impeccable hygiene standards.',
    storyLead:
      'Alongside a successful career in Business Management, Nataliia chose to follow her passion for the beauty industry.',
    story: [
      'That decision allows her to combine her professional expertise with a genuine love for helping people feel their best. Her strong organisational skills, reliability and commitment to excellence are reflected in every client experience.',
      'Nataliia believes that waxing should be as comfortable and stress-free as possible. Her calm approach, excellent etiquette and client-first mindset help even first-time clients feel relaxed, informed and completely at ease throughout their appointment.',
      'Fluent in Ukrainian and Russian, and currently developing her English language skills, Nataliia enjoys welcoming clients from diverse backgrounds and is continually expanding her knowledge to provide the highest standard of care.',
      'At LUNA Beauty Studio, Nataliia is proud to deliver professional waxing treatments with precision, compassion and outstanding attention to detail, helping every client leave feeling confident, comfortable and beautifully cared for.',
    ],
    photos: {
      heroSide: '/images/services/waxing-3.webp',
      storyWide: '/images/services/waxing-4.webp',
      storyTall: '/images/services/waxing-1.webp',
    },
  },
};

/**
 * Photo slots reuse images already in the project — the design's photos were
 * never exported. Rotating by index keeps the eight pages from looking
 * identical; swap these for real per-master shoots when they arrive.
 */
const HERO_SIDE_PHOTOS = ['/images/ow/4.jpg', '/images/ow/1.jpg', '/images/ow/5.jpg'];
const STORY_WIDE_PHOTOS = ['/images/ow/5.jpg', '/images/ow/4.jpg', '/images/ow/1.jpg'];
const STORY_TALL_PHOTOS = [
  '/images/ocr/salon-image.jpg',
  '/images/ow/3.jpg',
  '/images/ow/2.jpg',
  '/images/ocr/hands.jpeg',
];

/** "£12" → 12; used only to pick the cheapest treatment */
const priceValue = (price: string): number => {
  const parsed = Number.parseFloat(price.replace(/[^0-9.,]/g, '').replace(',', '.'));
  return Number.isNaN(parsed) ? Number.POSITIVE_INFINITY : parsed;
};

/** Walk the catalogue once and fold it into one profile per master name */
/**
 * A treatment belongs on a master's page only when the catalogue does not
 * restrict it to someone else — "Ingrown Toenails" is Dana's alone, so it must
 * not show up on Tanya's or Lola's menu even though all three do pedicures.
 */
const treatmentsPerformedBy = (
  service: IServiceCategory,
  masterName: string
): ITreatment[] =>
  service.treatments.filter(
    (treatment) => !treatment.masters || treatment.masters.includes(masterName)
  );

const buildProfiles = (): IMasterProfile[] => {
  const byName = new Map<string, IMasterProfile>();

  servicesCatalogMock.forEach((service) => {
    service.masters.forEach((master: IServiceMaster) => {
      const treatments = treatmentsPerformedBy(service, master.name);
      const category: IMasterCategory = {
        id: service.id,
        title: service.title,
        tagline: service.tagline,
        link: service.link,
        treatments,
        priceFrom: service.priceFrom,
        role: master.role,
      };

      const existing = byName.get(master.name);

      if (existing) {
        existing.categories.push(category);
        existing.treatments.push(...treatments);
        if (priceValue(service.priceFrom) < priceValue(existing.priceFrom)) {
          existing.priceFrom = service.priceFrom;
        }
        // The catalogue repeats a master per category with copy of varying
        // length; the fullest bio makes the best intro fallback.
        if (!MASTER_EXTRAS[existing.slug]?.intro && (master.bio?.length ?? 0) > existing.intro.length) {
          existing.intro = master.bio as string;
        }
        return;
      }

      const slug = masterSlug(master.name);
      const extras = MASTER_EXTRAS[slug] ?? {};
      const legacy = mastersMock.find((item) => item.name === master.name);
      const index = byName.size;

      byName.set(master.name, {
        slug,
        name: master.name,
        eyebrow: extras.eyebrow ?? legacy?.info ?? master.role.toUpperCase(),
        role: extras.role ?? master.role,
        intro: extras.intro ?? master.bio ?? master.role,
        // "Salon owner,\n14 years of experience" → two chips
        chips: legacy?.status
          ? legacy.status.split('\n').map((line) => line.trim()).filter(Boolean)
          : [extras.role ?? master.role, `${extras.experience ?? 5} years of experience`],
        skills: legacy?.skills ?? master.bio ?? master.role,
        experience: extras.experience,
        languages: extras.languages,
        storyLead: extras.storyLead ?? master.bio ?? TODO_STORY,
        story: extras.story ?? [TODO_STORY],
        photos: {
          portrait: extras.photos?.portrait ?? master.image,
          heroSide:
            extras.photos?.heroSide ?? HERO_SIDE_PHOTOS[index % HERO_SIDE_PHOTOS.length],
          storyWide:
            extras.photos?.storyWide ?? STORY_WIDE_PHOTOS[index % STORY_WIDE_PHOTOS.length],
          storyTall:
            extras.photos?.storyTall ?? STORY_TALL_PHOTOS[index % STORY_TALL_PHOTOS.length],
        },
        servicesWord: extras.servicesWord ?? service.title.split(' ')[0],
        categories: [category],
        treatments: [...treatments],
        priceFrom: service.priceFrom,
      });
    });
  });

  return [...byName.values()];
};

export const mastersProfilesMock: IMasterProfile[] = buildProfiles();

/** Profile page lookup: /master/<slug> */
export const findMasterBySlug = (slug: string): IMasterProfile | undefined =>
  mastersProfilesMock.find((master) => master.slug === slug);

/** Link helper so callers never hand-build the route */
export const masterHref = (name: string): string => `/master/${masterSlug(name)}`;
