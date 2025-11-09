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

export interface IDetailService {
  title: string;
  images: string;
  text: string;
  link: string;
  time: string;
  price: string;
}

export interface IDetailMaster {
  name: string;
  title: string;
  image: string;
}

export interface iServiceExtended {
  title: string;
  master: IDetailMaster;
  details: IDetailService[];
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
    title: "Makeup",
    image: "/images/bs/services1.jpg",
    text: "Natural beauty with professional techniques, using high-quality products!",
    nav: ["Pre-makeup facial", "Event/Party", "Flower girl makeup", "Junior make-up", "Bridesmaids trial"],
    link: "makeup",
  },
  {
    title: "Waxing",
    image: "/images/bs/services2.jpg",
    text: "Service ensures smooth, long-lasting results with gentle techniques!",
    nav: ["Waxing Men", "Waxing Ladies", "Brazilian bikini", "Half leg", "Full/Half Arm", "Extra area"],
    link: "waxing"
  },
  {
    title: "Manicure/Extensions",
    image: "/images/bs/services3.jpg",
    text: "Offering durability, style, and a polished look tailored to individual preferences!",
    nav: ["Gel extension", "Tip gel extension", "Cuticle oil", "Design 10 nails", "Clean manicure"],
    link: "manicure"
  },
  {
    title: "Semi permanent makeup",
    image: "/images/bs/services4.jpg",
    text: "Enhances beauty with longevity!",
    nav: ["Luxury lashes lamination", "Eyebrow lamination", "Keratin", "Botox", "SPMU Eyeliner"],
    link: "semi-permanent"
  },
  {
    title: "mock",
    image: "/images/bs/services4.jpg",
    text: "mock",
    nav: ["mock",],
    link: "pedicure"
  },
  {
    title: "Pedicure",
    image: "/images/bs/services5.jpg",
    text: "Beautifies feet, ensuring smooth skin, healthy, and well-groomed appearance.",
    nav: ["Pedicure&rubber gel", "Clean pedicure", "Pedicure with varnish"],
    link: "pedicure"
  },
];

export const servicesExtendedMock: IExtService[] = [
  {
    title: "Makeup",
    images: ["/images/bs/services1.jpg", "/images/bs/services1.3.jpg", "/images/bs/services1.2.jpg",],
    text: "Natural beauty with professional techniques, using high-quality products!",
    nav: ["Travel charge", "Pre-makeup facial", "Even/party", "Flower girl makeup",
      "Junior make-up", "Bridesmaids trial", "Bridal make-up"],
    link: "makeup"
  },
  {
    title: "Waxing",
    images: ["/images/bs/services2.jpg", "/images/bs/services2.2.jpg", "/images/bs/services2.3.jpg"],
    text: "Service ensures smooth, long-lasting results with gentle techniques!",
    nav: ["Waxing Men", "Waxing Ladies"],
    link: "waxing"
  },
  {
    title: "Manicure/Extensions",
    images: ["/images/bs/services1.jpg", "/images/bs/services1.2.jpg", "/images/bs/services1.3.jpg"],
    text: "Offering durability, style, and a polished look tailored to individual preferences!",
    nav: ["Travel charge", "Pre-makeup facial", "Even/party", "Flower girl makeup",
      "Junior make-up", "Bridesmaids trial", "Bridal make-up"],
    link: "manicure"
  },
  {
    title: "Semi permanent makeup",
    images: ["/images/bs/services1.jpg", "/images/bs/services1.2.jpg", "/images/bs/services1.3.jpg"],
    text: "Micropigmentation technique that enhances eyebrows, lips, or eyeliner!",
    nav: ["Travel charge", "Pre-makeup facial", "Even/party", "Flower girl makeup",
      "Junior make-up", "Bridesmaids trial", "Bridal make-up"],
    link: "semi-permanent"
  },
  {
    title: "Pedicure",
    images: ["/images/bs/services1.jpg", "/images/bs/services1.2.jpg", "/images/bs/services1.3.jpg"],
    text: "Beautifies feet, ensuring smooth skin, healthy, and well-groomed appearance.",
    nav: ["Travel charge", "Pre-makeup facial", "Even/party", "Flower girl makeup",
      "Junior make-up", "Bridesmaids trial", "Bridal make-up"],
    link: "pedicure"
  },
];

// Exported service details mock data IDetailsServicePage
export const serviceDetailsMock: Record<string, iServiceExtended> = {
  makeup: {
    title: "Makeup",
    master: {
      name: "Nelia",
      title: "Is a skilled professional makeup artist who enhances beauty with expert cosmetic techniques. She tailors each look to suit different occasions, from everyday glam to special events. With a deep understanding of skin tones and trends.",
      image: "/images/masters/4.jpg"
    },
    details: [
      {
        title: "Travel charge",
        images: "/images/bs/services1.jpg",
        text: "The travel cost for a makeup artist from the salon is charged at 0.30 pence per mile, meaning that for every mile traveled to the client`s location, an additional fee of £0.30will be applied. This cost covers the artist`s travel expenses and is added to the total service price.",
        link: "",
        time: "5 min",
        price: "£0,30"
      },
      {
        title: "Pre-makeup facial",
        images: "/images/bs/services1.jpg",
        text: "Skin prep means giving the skin what it needs so that my “canvas” is ready to receive the makeup application. The skin reacts differently when it is taken care of, it looks smoother and the makeup will stay on longer. This is the reason you should not skip this step.",
        link: "",
        time: "20 min",
        price: "£35"
      },
      {
        title: "Even/party",
        images: "/images/bs/services1.jpg",
        text: "Whether it's a glamorous evening affair or a vibrant celebration, the key is a flawless base, defined eyes, and a long-wearing finish. While high-quality products help maintain a fresh and radiant look.",
        link: "",
        time: "1 hour",
        price: "£60"
      },
      {
        title: "Flower girl makeup",
        images: "/images/bs/services1.2.jpg",
        text: "At this age, it's best to focus on a light touch—think clear lip gloss, a hint of blush, or a touch of shimmer for fun occasions. Skincare is the most important step, ensuring the skin stays healthy and hydrated.",
        link: "",
        time: "30 min",
        price: "£20"
      },
      {
        title: "Junior make-up",
        images: "/images/bs/services1.jpg",
        text: "Junior makeup is all about keeping things light, fresh, and age-appropriate. It focuses on enhancing natural beauty with minimal products, using lightweight formulas for a healthy glow. Soft tints, subtle shimmer, and neutral tones work best!",
        link: "",
        time: "45 min",
        price: "£40"
      },
      {
        title: "Bridesmaids trial",
        images: "/images/bs/services1.2.jpg",
        text: "A bridesmaids' trial makeup session is the perfect opportunity to ensure a cohesive and flattering look for the bridal party. It allows each bridesmaid to test different styles, ensuring their makeup complements the wedding theme, their dress, and personal preferences.",
        link: "",
        time: "1 hour",
        price: "£60"
      },
      {
        title: "Bridesmaid makeup",
        images: "/images/bs/services1.jpg",
        text: "The goal is to enhance natural beauty with a polished and cohesive look that suits the bride’s vision while allowing each bridesmaid to feel confident. Soft, radiant skin, defined eyes, and a balanced lip color create a timeless and flattering effect.",
        link: "",
        time: "1 hour",
        price: "£80"
      },
      {
        title: "Bridal make-up",
        images: "/images/bs/services1.jpg",
        text: "The goal is to achieve a timeless and elegant appearance that complements the dress, hairstyle, and overall theme. A well-prepped base ensures a smooth application, while long-wearing, high-quality products keep the makeup fresh from the ceremony to the reception.",
        link: "",
        time: "1 hr, 30 min",
        price: "£120"
      },
    ]
  }
}

export const ourWorksMock = {
  image1: "/images/ow/1.jpg",
  image2: "/images/ow/2.jpg",
  image3: "/images/ow/3.jpg",
  image4: "/images/ow/4.jpg",
  image5: "/images/ow/5.jpg",
};

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
    title: "Our experts",
    link: "/masters"
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
    title: "Our masters",
    link: "/masters"
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

export const mastersMock: IMaster[] = [
  {
    image: "/images/masters/1.jpg",
    name: "Daniela Celan",
    info: "NAIL MASTER",
    skills: "I've been doing nails for over 10 years and my passion keeps growing!",
    status: "Salon owner,\n14 years of experience",
  },
  {
    image: "/images/masters/2.jpg",
    name: "Nelia Mihai",
    info: "NAIL MASTER",
    skills: "Artist who enhances beauty with expert cosmetic techniques!",
    status: "Skilled professional,\n6 years of experience",
  },
  {
    image: "/images/masters/3.jpg",
    name: "Nelia Mihai",
    info: "NAIL MASTER",
    skills: "Artist who enhances beauty with expert cosmetic techniques!",
    status: "Skilled professional,\n6 years of experience",
  },
]

export const clientsRecommendedMock: IRecommended[] = [
  {
    image: "/images/ocr/hands.jpg",
    name: "Elizabeth Dawson",
    stars: 5,
    subtitle: "Absolutely blown away!",
    text: "Stunning, elegant nails with a perfect glossy finish. I truly appreciated the personalized consultation and the use of high-quality products. Without a doubt, this is the best nail salon in London! If you're looking,this is the place to go. I can't wait to return!"
  },
  {
    image: "/images/ocr/hands.jpg",
    name: "Sister Margary",
    stars: 4,
    subtitle: "Wowwwwwowowowow wooow owwwo",
    text: "Stunning, elegant nails with a perfect glossy finish. I truly appreciated the personalized consultation and the use of high-quality products. Without a doubt, this is the best nail salon in London! If you're looking,this is the place to go. I can't wait to return!"
  },
  {
    image: "/images/ocr/hands.jpg",
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