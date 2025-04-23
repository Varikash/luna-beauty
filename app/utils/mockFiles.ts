export interface IService {
  title: string;
  image: string;
  text: string;
  nav: string[];
}

export interface IExtService {
  title: string;
  images: string[];
  text: string;
  nav: string[];
  link: string;
}

export const servicesMock: IService[] = [
  {
    title: "Makeup",
    image: "/images/bs/services1.jpg",
    text: "Natural beauty with professional techniques, using high-quality products!",
    nav: ["Pre-makeup facial", "Event/Party", "Flower girl makeup", "Junior make-up", "Bridesmaids trial"],
  },
  {
    title: "Waxing",
    image: "/services2.jpg",
    text: "Service ensures smooth, long-lasting results with gentle techniques!",
    nav: ["Waxing Men", "Waxing Ladies", "Brazilian bikini", "Half leg", "Full/Half Arm", "Extra area"],
  },
  {
    title: "Manicure/Extensions",
    image: "/services3.jpg",
    text: "Offering durability, style, and a polished look tailored to individual preferences!",
    nav: ["Gel extension", "Tip gel extension", "Cuticle oil", "Design 10 nails", "Clean manicure"],
  },
  {
    title: "Semi permanent makeup",
    image: "/services4.jpg",
    text: "Enhances beauty with longevity!",
    nav: ["Luxury lashes lamination", "Eyebrow lamination", "Keratin", "Botox", "SPMU Eyeliner"],
  },
  {
    title: "mock",
    image: "/services4.jpg",
    text: "mock",
    nav: ["mock",],
  },
  {
    title: "Pedicure",
    image: "/services5.jpg",
    text: "Beautifies feet, ensuring smooth skin, healthy, and well-groomed appearance.",
    nav: ["Pedicure&rubber gel", "Clean pedicure", "Pedicure with varnish"],
  },
];

export const servicesExtendedMock: IExtService[] = [
  {
    title: "Makeup",
    images: ["/images/bs/services1.jpg", "/images/bs/services1.2.jpg", "/images/bs/services1.3.jpg"],
    text: "Natural beauty with professional techniques, using high-quality products!",
    nav: ["Travel charge", "Pre-makeup facial", "Even/party", "Flower girl makeup",
      "Junior make-up", "Bridesmaids trial", "Bridal make-up"],
    link: "/"
  },
];

export const ourWorksMock = {
  image1: "/images/ow/1.jpg",
  image2: "/images/ow/2.jpg",
  image3: "/images/ow/3.jpg",
  image4: "/images/ow/4.jpg",
  image5: "/images/ow/5.jpg",
};
