export type HomeCategory = {
  id: string;
  badge: string;
  title: string;
  icon: string;
  description: string;
  metadata: string;
  action: string;
  image: string;
  alt: string;
};

export const homeCategories: HomeCategory[] = [
  {
    id: "car-spare-parts",
    badge: "High Demand",
    title: "Car Spare Parts",
    icon: "disc",
    description:
      "Brake pads, suspension arms, filters, ignition systems, and belts engineered for top domestic & global nameplates.",
    metadata: "1,200+ Variants",
    action: "View Details",
    image: "/images/home/home-image-2.png",
    alt: "Brake discs and calipers arranged on a parts workbench",
  },
  {
    id: "car-body-parts",
    badge: "Exterior Panels",
    title: "Car Body Parts",
    icon: "car",
    description:
      "Fenders, hoods, tail lamps, bumpers, grilles, and mirrors manufactured for precise alignment and original paint match.",
    metadata: "Original Fit Guaranteed",
    action: "View Details",
    image: "/images/home/home-image-3.png",
    alt: "Organized automotive body parts warehouse shelving",
  },
  {
    id: "used-spare-parts",
    badge: "Tested & Graded",
    title: "Used Spare Parts",
    icon: "recycle",
    description:
      "Thoroughly tested engines, gearboxes, steering racks, and alternators providing cost-saving OEM reliability.",
    metadata: "Verified Working Order",
    action: "View Details",
    image: "/images/home/home-image-4.png",
    alt: "Tested and graded used spare parts on industrial shelves",
  },
  {
    id: "old-vehicle-parts",
    badge: "Legacy Catalog",
    title: "Old Vehicle Parts",
    icon: "history",
    description:
      "Hard-to-find components and assemblies for legacy car models no longer serviced by conventional retail dealership networks.",
    metadata: "Specialist Sourcing",
    action: "View Details",
    image: "/images/home/home-image-5.png",
    alt: "Vintage legacy vehicle components on a wooden workbench",
  },
  {
    id: "scrap-vehicle-purchasing",
    badge: "RTO Compliant",
    title: "Scrap Vehicle Purchasing",
    icon: "leaf",
    description:
      "Fair evaluation and transparent handover for end-of-life, accidental, or damaged vehicles with hassle-free de-registration guidance.",
    metadata: "Fast Spot Valuation",
    action: "Enquire",
    image: "/images/home/home-image-6.png",
    alt: "Organized vehicle recycling and purchasing yard",
  },
  {
    id: "old-car-purchasing",
    badge: "Instant Quote",
    title: "Old Car Purchasing",
    icon: "wallet",
    description:
      "Hassle-free vehicle valuation and purchasing services across Chennai. Immediate payment and verified ownership paperwork transfer.",
    metadata: "Free Doorstep Inspection",
    action: "Enquire",
    image: "/images/home/home-image-7.png",
    alt: "Automotive evaluator inspecting a sedan in a service bay",
  },
];

export const services = [
  {
    icon: "wrench",
    title: "Automobile Spare Parts",
    description:
      "Wide inventory of mechanical, electrical, and powertrain spares for domestic and imported cars.",
    link: "Genuine Fitment",
  },
  {
    icon: "panels",
    title: "Body Parts & Solutions",
    description:
      "Bumpers, fenders, doors, lighting assemblies, and mirrors fitted for precise vehicle fitment.",
    link: "Precision Fit",
  },
  {
    icon: "recycle",
    title: "Used / Second-Hand",
    description:
      "Carefully inspected and categorized pre-owned spares offering cost-effective repair solutions.",
    link: "Bench-Tested",
  },
  {
    icon: "headset",
    title: "Customer Enquiry Desk",
    description:
      "Dedicated team ready to assist with part numbers, chassis matching, and availability checks.",
    link: "Immediate Response",
  },
];

export const specialisations = [
  { id: "four-wheeler", label: "Four-Wheeler Spare Parts", emoji: "\uD83D\uDD29" },
  { id: "body-parts", label: "Car Body Parts", emoji: "\uD83D\uDE98" },
  { id: "old-parts", label: "Old Four-Wheeler Spare Parts", emoji: "\u267B\uFE0F" },
  { id: "second-hand", label: "Second-Hand Car Spare Parts", emoji: "\uD83D\uDD27" },
  { id: "quality", label: "Quality Replacement Parts", emoji: "\u2699\uFE0F" },
  { id: "solutions", label: "Automobile Spare Parts Solutions", emoji: "\uD83E\uDDF0" },
];

export const brands = [
  "Ford",
  "Toyota",
  "Hyundai",
  "Volkswagen",
  "Fiat",
  "Tata",
];

export const trustMetrics = [
  {
    icon: "box",
    title: "10,000+ Parts",
    subtitle: "Ready in catalog",
  },
  {
    icon: "shield",
    title: "OEM & Quality Used",
    subtitle: "Thoroughly inspected",
  },
  {
    icon: "timer",
    title: "Quick Response",
    subtitle: "Chennai parts desk",
  },
];

export const trustPoints = [
  {
    title: "Direct Sourcing Network",
    description:
      "Direct tie-ups with verified tier-1 suppliers and OEM manufacturers for consistent quality control.",
  },
  {
    title: "Transparent Enquiry Process",
    description:
      "No hidden markups. We clarify part conditions, compatibility guarantees, and warranties prior to purchase.",
  },
  {
    title: "Chennai-Wide Dispatch & Pickup",
    description:
      "Swift counter pickup at our Chennai operational hub or expedited delivery directly to your garage.",
  },
];