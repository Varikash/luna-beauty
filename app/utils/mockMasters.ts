/**
 * Master profiles for /master/<slug>.
 *
 * Nothing here duplicates data that already exists elsewhere:
 *  - who works in which category, and the treatment menu with prices, is
 *    derived from `servicesCatalogMock` (mockServicesTwo.ts);
 *  - the hero eyebrow ("NAIL MASTER") and the two chips under the bio
 *    ("Salon owner," / "14 years of experience") come from `mastersMock`
 *    (mockFiles.ts) — the Figma hero block maps 1:1 onto `IMaster.info` and
 *    `IMaster.status`;
 *  - only what neither source knows (the long story, photo slots, the
 *    decorative word in "<Nail> Services") lives in MASTER_EXTRAS below.
 *
 * So a master's page can never disagree with the services catalogue about what
 * they do or what it costs.
 */

import {
  servicesCatalogMock,
  type ITreatment,
  type IServiceMaster,
} from './mockServicesTwo';
import { mastersMock } from './mockFiles';

/**
 * Placeholder for a story that has not been written yet. Only Daniela Celan's
 * story exists in the design; grep TODO_STORY to find every master still
 * waiting for real copy.
 */
const TODO_STORY =
  "This master's full story is still being written. Ask them about it when you sit in the chair — they tell it better than we could.";

/** "Daniela Celan" → "daniela-celan" — the /master/<slug> route segment */
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
>;

/**
 * Profile facts neither the catalogue nor `mastersMock` carries. Keyed by slug;
 * a missing entry just falls back to derived values.
 */
const MASTER_EXTRAS: Record<string, MasterExtras> = {
  'daniela-celan': {
    eyebrow: 'NAIL MASTER',
    role: 'Salon owner · Nail master',
    experience: 14,
    servicesWord: 'Nail',
    languages: ['English', 'Romanian'],
    // Copy below is taken verbatim from the Figma master page (frame 1920/Master)
    intro:
      'I’m Dana, and while you might know my name, I’d love to share the story behind the doors. I’ve been doing nails for over 10 years, and my passion for drawing and creativity has always driven me to seek more by connecting with people. Even though I\'m an introvert, I truly enjoy listening to and sharing wonderful stories with others.',
    storyLead:
      'My journey began at 14, when I had my first job working on a sewing machine for three years. Alongside that, I worked in a factory, and in my spare time, I dabbled in nails as a hobby.',
    story: [
      'Deciding to turn my passion into a career, I took my first course, and that’s when my love for nails grew even stronger.',
      'I worked in a salon in Moldova for two years and in Italy for five years as a waitress and barista, all while continuing to pursue my passion for nails in my free time.',
      'Finally, I moved to England and have spent the last six years continuously crafting beautiful nails.',
      'Coming to England I worked at two different salons, each with its own management style.',
      'These experiences gave me the opportunity to learn about both managing a business and growing as an individual. Now, as a salon owner, I’ve learned how to create a harmonious space for my team while ensuring a comfortable and welcoming environment for our clients.',
    ],
  },
  'nelia-mihai': {
    eyebrow: 'MAKEUP ARTIST',
    role: 'Makeup artist',
    experience: 6,
    servicesWord: 'Makeup',
    languages: ['English', 'Romanian'],
    storyLead:
      'Skin prep is half the work. Give me twenty minutes on the base and the makeup will still look fresh at midnight.',
    story: [TODO_STORY],
  },
  'amelia-carter': {
    eyebrow: 'BRIDAL SPECIALIST',
    role: 'Bridal specialist',
    experience: 8,
    servicesWord: 'Bridal',
    languages: ['English'],
    storyLead:
      'I map every look to the dress, the light and the length of the day — so it holds from the first photo to the last dance.',
    story: [TODO_STORY],
  },
  'isabella-moore': {
    eyebrow: 'LASH TECH',
    role: 'Lash tech · Makeup artist',
    experience: 4,
    servicesWord: 'Lash',
    languages: ['English'],
    storyLead:
      'Balance and proportion first. The set should look like your own lashes, only better rested.',
    story: [TODO_STORY],
  },
  'sophia-reed': {
    eyebrow: 'BROW SPECIALIST',
    role: 'Brow specialist',
    experience: 7,
    servicesWord: 'Brow',
    languages: ['English'],
    storyLead:
      'Shape first, pigment second. I never start pigment work before we both agree on the drawing.',
    story: [TODO_STORY],
  },
  'olivia-hayes': {
    eyebrow: 'WAXING EXPERT',
    role: 'Waxing expert',
    experience: 5,
    servicesWord: 'Waxing',
    languages: ['English'],
    storyLead:
      'Sensitive skin is not a problem to work around, it just sets the pace of the session.',
    story: [TODO_STORY],
  },
  'emily-bennett': {
    eyebrow: 'NAIL SPECIALIST',
    role: 'Nail specialist',
    experience: 6,
    servicesWord: 'Nail',
    languages: ['English'],
    storyLead:
      'Structure first, colour second. The natural nail underneath is always the priority.',
    story: [TODO_STORY],
  },
  'mia-thompson': {
    eyebrow: 'PEDICURE MASTER',
    role: 'Pedicure master',
    experience: 10,
    servicesWord: 'Pedicure',
    languages: ['English'],
    storyLead:
      'Feet carry you all day — they deserve the same slow, careful ritual as the hands.',
    story: [TODO_STORY],
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
const buildProfiles = (): IMasterProfile[] => {
  const byName = new Map<string, IMasterProfile>();

  servicesCatalogMock.forEach((service) => {
    service.masters.forEach((master: IServiceMaster) => {
      const category: IMasterCategory = {
        id: service.id,
        title: service.title,
        tagline: service.tagline,
        link: service.link,
        treatments: service.treatments,
        priceFrom: service.priceFrom,
        role: master.role,
      };

      const existing = byName.get(master.name);

      if (existing) {
        existing.categories.push(category);
        existing.treatments.push(...service.treatments);
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
          portrait: master.image,
          heroSide: HERO_SIDE_PHOTOS[index % HERO_SIDE_PHOTOS.length],
          storyWide: STORY_WIDE_PHOTOS[index % STORY_WIDE_PHOTOS.length],
          storyTall: STORY_TALL_PHOTOS[index % STORY_TALL_PHOTOS.length],
        },
        servicesWord: extras.servicesWord ?? service.title.split(' ')[0],
        categories: [category],
        treatments: [...service.treatments],
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
