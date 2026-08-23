export interface IService {
  title: string;
  image: string;
  text: string;
  nav: string[];
  link: string;
}

export interface IExtService {
  title: string;
  images: string[];
  text: string;
  nav: string[];
  link: string;
}

export interface INav {
  title: string;
  link: string;
}

export interface IMaster {
  image: string;
  name: string;
  info: string;
  skills: string;
  status: string;
}

export interface IRecommended {
  image: string;
  name: string;
  stars: number;
  subtitle: string;
  text: string;
}

export const servicesMock: IService[] = [
  {
    title: "Manicure/\u200BExtensions",
    image: "/images/services/nails-extensions-2.webp",
    text: "Advanced Russian manicure technique, flawless cuticle work, and a finish that lasts for weeks.",
    nav: ["Rubber Base Manicure", "French Tip", "Extensions", "Clean Manicure"],
    link: "manicure",
  },
  {
    title: "Pedicure",
    image: "/images/services/pedicure-aesthetic.webp",
    text: "Beyond polished toes — the health, comfort and appearance of your feet come first.",
    nav: ["Aesthetic Pedicure", "Ingrown Toenails Treatment", "Cracked Heels Treatment"],
    link: "pedicure",
  },
  {
    title: "Makeup",
    image: "/images/services/makeup-bridal.webp",
    text: "Bridal, occasion and editorial looks built for long wear and high-resolution cameras.",
    nav: ["Bridal Makeup", "Bridesmaids Makeup", "Flower Girl Makeup", "Soft / Natural Makeup", "Special Occasion Makeup"],
    link: "makeup",
  },
  {
    title: "Brows & Lashes",
    image: "/images/services/brows-hd-1.webp",
    text: "Sculpted brows and lifted lashes tailored to your unique facial features.",
    nav: ["HD Brows", "Brow Lamination", "Lash Lamination"],
    link: "brows-lashes",
  },
  {
    title: "Permanent makeup",
    image: "/images/services/pmu-powder-brows-1.webp",
    text: "Wake up beautiful every day with soft, natural-looking semi-permanent results.",
    nav: ["Powder Brows", "Hair Stroke Brows", "Lip Blush"],
    link: "permanent-makeup",
  },
  {
    title: "Waxing",
    image: "/images/services/waxing-3.webp",
    text: "Premium waxes and meticulous technique in a private, welcoming environment.",
    // TODO: the client's document lists no waxing zones — menu still to be supplied.
    nav: [],
    link: "waxing",
  },
];

export const servicesExtendedMock: IExtService[] = [
  {
    title: "Manicure/Extensions",
    images: ["/images/services/nails-extensions-2.webp", "/images/services/nails-french-tip.webp", "/images/services/nails-rubber-base.webp"],
    text: "Advanced Russian manicure technique, flawless cuticle work, and a finish that lasts for weeks.",
    nav: ["Rubber Base Manicure", "French Tip", "Extensions", "Clean Manicure"],
    link: "manicure",
  },
  {
    title: "Pedicure",
    images: ["/images/services/pedicure-aesthetic.webp", "/images/services/pedicure-cracked-heels.webp", "/images/services/pedicure-ingrown-3.webp"],
    text: "Beyond polished toes — the health, comfort and appearance of your feet come first.",
    nav: ["Aesthetic Pedicure", "Ingrown Toenails Treatment", "Cracked Heels Treatment"],
    link: "pedicure",
  },
  {
    title: "Makeup",
    images: ["/images/services/makeup-bridal.webp", "/images/services/makeup-editorial-1.webp", "/images/services/makeup-soft-natural.webp"],
    text: "Bridal, occasion and editorial looks built for long wear and high-resolution cameras.",
    nav: ["Bridal Makeup", "Bridal Makeup Trial", "Bridesmaids Makeup", "Flower Girl Makeup",
      "Soft / Natural Makeup", "Special Occasion Makeup", "Editorial & Photoshoot Makeup"],
    link: "makeup",
  },
  {
    title: "Brows & Lashes",
    images: ["/images/services/brows-hd-1.webp", "/images/services/brows-hd-2.webp", "/images/services/lash-lamination-1.webp"],
    text: "Sculpted brows and lifted lashes tailored to your unique facial features.",
    nav: ["HD Brows", "Brow Lamination", "Lash Lamination"],
    link: "brows-lashes",
  },
  {
    title: "Permanent makeup",
    images: ["/images/services/pmu-powder-brows-1.webp", "/images/services/pmu-hair-stroke-1.webp", "/images/services/pmu-lip-blush-1.webp"],
    text: "Wake up beautiful every day with soft, natural-looking semi-permanent results.",
    nav: ["Powder Brows", "Hair Stroke Brows", "Lip Blush"],
    link: "permanent-makeup",
  },
  {
    title: "Waxing",
    images: ["/images/services/waxing-1.webp", "/images/services/waxing-3.webp", "/images/services/waxing-4.webp"],
    text: "Premium waxes and meticulous technique in a private, welcoming environment.",
    // TODO: the client's document lists no waxing zones — menu still to be supplied.
    nav: [],
    link: "waxing",
  },
];

export const ourWorksMock = {
  image1: "/images/ow/1.jpg",
  image2: "/images/ow/2.jpg",
  image3: "/images/ow/3.jpg",
  image4: "/images/ow/4.jpg",
  image5: "/images/ow/5.jpg",
};

/**
 * Footer and header menus. There is deliberately no "Our masters" item: the
 * team lives in the OurMasters section on /about, and a top-level menu entry
 * pointing at an anchor inside another menu entry read as a dead end. Add it
 * back only together with a real /masters page.
 */
export const navLinks: INav[] = [
  {
    title: "About us",
    link: "/about"
  },
  {
    title: "Services",
    link: "/services"
  },
  {
    title: "Contact",
    link: "/contact"
  }
]

export const navLinkHeader: INav[] = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "About us",
    link: "/about"
  },
  {
    title: "Services",
    link: "/services"
  },
  {
    title: "Contact us",
    link: "/contact"
  }
]

export const contacts = {
  email: "hello@luna.com",
  phone: "+44 782 203 12 21"
}

export const social = [
  "http://facebook.com", "http://instagram.com", "http://twitter.com"
]

export const socialHeader = [
  {
    name: "Facebook",
    link: "http://facebook.com"
  },
  {
    name: "Instagram",
    link: "http://instagram.com"
  },
  {
    name: "Whatsapp",
    link: "http://whatsapp.com"
  }
]

/**
 * The studio team, exactly as described in the client's staff document.
 * Only first names were supplied — no surnames.
 */
export const mastersMock: IMaster[] = [
  {
    image: "/images/masters/dana.webp",
    name: "Dana",
    info: "FOUNDER · NAIL TECHNICIAN",
    skills: "Russian manicure specialist, educator and founder of LUNA Beauty Studio & Academy.",
    status: "Salon owner,\n12 years of experience",
  },
  {
    image: "/images/masters/nelya.webp",
    name: "Nelya",
    info: "MAKEUP ARTIST",
    skills: "Bridal, occasion and editorial makeup tailored to your features, style and vision.",
    status: "Makeup artist,\n4 years of experience",
  },
  {
    image: "/images/masters/tanya.webp",
    name: "Tanya",
    info: "NAIL TECHNICIAN",
    skills: "Clean Russian manicures and refined cuticle work with exceptional attention to detail.",
    status: "Nail technician,\n4 years of experience",
  },
  {
    image: "/images/masters/lola.webp",
    name: "Lola",
    info: "NAIL TECHNICIAN",
    skills: "Flawless craftsmanship — nails that stay strong, healthy and beautiful for weeks.",
    status: "Nail technician,\n10 years of experience",
  },
  {
    image: "/images/masters/maryna.webp",
    name: "Maryna",
    info: "BROWS & PMU SPECIALIST",
    skills: "Brow shaping, lamination, powder brows and the single-needle hair stroke technique.",
    status: "Brows & PMU specialist,\n10 years of experience",
  },
  {
    // TODO: the client's document says "(foto not included)" — waiting on a portrait.
    image: "/images/services/waxing-1.webp",
    name: "Nataliia",
    info: "WAXING SPECIALIST",
    skills: "Professional waxing with meticulous technique and impeccable hygiene standards.",
    status: "Waxing specialist,\n6 years of experience",
  },
]

export const clientsRecommendedMock: IRecommended[] = [
  {
    image: "/images/ocr/hands.jpeg",
    name: "Elizabeth Dawson",
    stars: 5,
    subtitle: "Absolutely blown away!",
    text: "Stunning, elegant nails with a perfect glossy finish. I truly appreciated the personalized consultation and the use of high-quality products. Without a doubt, this is the best nail salon in London! If you're looking,this is the place to go. I can't wait to return!"
  },
  {
    image: "/images/ocr/hands.jpeg",
    name: "Sister Margary",
    stars: 4,
    subtitle: "Wowwwwwowowowow wooow owwwo",
    text: "Stunning, elegant nails with a perfect glossy finish. I truly appreciated the personalized consultation and the use of high-quality products. Without a doubt, this is the best nail salon in London! If you're looking,this is the place to go. I can't wait to return!"
  },
  {
    image: "/images/ocr/hands.jpeg",
    name: "Bob Checter",
    stars: 1,
    subtitle: "Ewwww",
    text: "Brother eeewwww!"
  }
]

export interface ICooperGridContent {
  image: string;
  title: string;
  text: string;
}

export const CooperGridContent: ICooperGridContent[] = [
  {
    image: "/images/cooper/icon_1.svg",
    title: "Expert Stylists",
    text: "Our highly skilled professionals stay ahead of the latest trends to craft your perfect look.",
  },
  {
    image: "/images/cooper/icon_2.svg",
    title: "Premium Products",
    text: "We use only top-tier, professional products to protect and enhance your hair and skin.",
  },
  {
    image: "/images/cooper/icon_3.svg",
    title: "Relaxing Atmosphere",
    text: "Step into a serene and elegant space designed for your ultimate comfort.",
  },
  {
    image: "/images/cooper/icon_4.svg",
    title: "Personalized Services",
    text: "Every client is unique, and we tailor our services to your specific needs and preferences.",
  }

]