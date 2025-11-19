export const primaryNavigation = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    subItems: [
      { label: "Why FWG", href: "/about/why-fwg" },
      { label: "Commitment to Quality", href: "/about/commitment-to-quality" },
      { label: "Our Clients", href: "/about/our-clients" },
      { label: "Success Stories", href: "/about/success-stories" },
      { label: "Caring in the Community", href: "/about/caring-in-the-community" },
    ]
  },
  {
    label: "Services & Solutions",
    href: "/services",
    subItems: [
      { label: "Program and Project Management", href: "/services/program-management" },
      { label: "IT Infrastructure & Solutions", href: "/services/it-infrastructure" },
      { label: "Enterprise Architecture", href: "/services/enterprise-architecture" },
      { label: "IT Security & Operations", href: "/services/it-security" },
    ]
  },
  {
    label: "Careers",
    href: "/careers",
    subItems: [
      { label: "Life at FWG", href: "/careers/life-at-fwg" },
      { label: "Benefits", href: "/careers/benefits" },
      { label: "Current Openings", href: "/careers/current-openings" },
    ]
  },
  { label: "Contact", href: "/contact" },
];

export type NavItem = {
  label: string;
  href: string;
  subItems?: Array<{ label: string; href: string }>;
};
