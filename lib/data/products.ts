export type Product = {
  id: string;
  sku: string;
  name: string;
  category: string;
  badge: string;
  condition: string;
  image: string;
  vehicleCompatibility: string;
  price: string;
  stockStatus: string;
  description: string;
};

export const productCategories = [
  {
    id: "car-spare-parts",
    title: "Car Spare Parts",
    icon: "car",
    description:
      "Explore spare parts for four-wheeler requirements including powertrain, braking, suspension, and routine service consumables.",
  },
  {
    id: "car-body-parts",
    title: "Car Body Parts",
    icon: "panels",
    description:
      "Enquire about automotive body parts and replacement components including bumpers, fenders, bonnets, mirrors, and door skins.",
  },
  {
    id: "used-spare-parts",
    title: "Used Spare Parts",
    icon: "recycle",
    description:
      "Ask about second-hand and used automotive parts salvaged and bench-tested for structural and functional viability.",
  },
  {
    id: "replacement-parts",
    title: "Replacement Parts",
    icon: "refresh",
    description:
      "Explore replacement component enquiries for worn-out mechanical assemblies, hydraulic mounts, bushings, and steering racks.",
  },
  {
    id: "old-vehicle-parts",
    title: "Old Vehicle Parts",
    icon: "history",
    description:
      "Submit enquiries for parts related to older vehicles or discontinued vehicle series requiring specialized supplier lookup.",
  },
  {
    id: "other-requirements",
    title: "Other Automotive Requirements",
    icon: "gears",
    description:
      "Contact us with a specific automotive parts requirement or custom procurement needs across multi-brand fleet setups.",
  },
];

export const sampleProducts: Product[] = [
  {
    id: "prod-1",
    sku: "BMP-7701",
    name: "Car original all spares Available",
    category: "CAR BODY PARTS",
    badge: "New / OEM Grade",
    condition: "New / OEM Grade",
    image: "/images/product/product-one-ssauto.jpeg",
    vehicleCompatibility: "[Confirm Vehicle Fitment]",
    price: "Contact for Price",
    stockStatus: "Enquire for Availability",
    description:
      "Complete front bumper assembly with grille and lower air-intake provisions, prepared for precise OEM fitment.",
  },
  {
    id: "prod-2",
    sku: "HLP-8920",
    name: "Car Alaiwheel",
    category: "LIGHTING & ELECTRICAL",
    badge: "New",
    condition: "New",
    image: "/images/product/product-two-ssauto.jpeg",
    vehicleCompatibility: "[Confirm Fitment]",
    price: "Contact for Price",
    stockStatus: "Enquire for Availability",
    description:
      "Modern dual-projector headlight unit with integrated turn-signal element and authentic mounting brackets.",
  },
  {
    id: "prod-3",
    sku: "BRK-4412",
    name: "Car Alaiwheel",
    category: "CAR SPARE PARTS (BRAKING)",
    badge: "New / Tested",
    condition: "New / Tested",
    image: "/images/product/product-three-ssauto.jpeg",
    vehicleCompatibility: "[Confirm Fitment]",
    price: "Contact for Price",
    stockStatus: "Enquire for Availability",
    description:
      "Ventilated high-carbon rotor with machined surfaces, checked for run-out and dimensional tolerance before dispatch.",
  },
];

export const brandOptions = [
  "All Brands",
  "Maruti Suzuki",
  "Hyundai",
  "Tata",
  "Mahindra",
  "Honda",
  "Ford",
  "Volkswagen",
  "Kia",
];

export const modelOptions = [
  "All Models",
  "Hatchback",
  "Sedan",
  "SUV",
  "MUV",
  "Pickup",
  "Commercial",
];

export const vehicleTypeOptions = [
  "All Types",
  "Petrol",
  "Diesel",
  "CNG",
  "Electric",
  "Hybrid",
];

export const conditionOptions = [
  "All Conditions",
  "New / OEM",
  "Used / Tested",
];

export const sourcingBenefits = [
  {
    icon: "shield",
    tone: "royal",
    title: "100% Genuine Provenance",
    subtitle: "OEM packaging with verifiable serial stamps",
    description:
      "Every precision transmission component, braking pad, and sensor sourced through SSS Auto Spares undergoes strict dimensional inspection before handoff.",
    footer: "Chennai Central Quality Protocol",
  },
  {
    icon: "clock",
    tone: "cream",
    title: "30-Minute Quotations",
    subtitle: "Real-time inventory lookup via WhatsApp & phone",
    description:
      "Need an urgent part estimate? Our technical parts sourcing desk verifies current warehouse rack availability and best pricing in Tamil Nadu without delay.",
    footer: "Instant Dispatch Readiness",
  },
  {
    icon: "wrench",
    tone: "slate",
    title: "Mechanic Bench Verification",
    subtitle: "Tested before courier or workshop collection",
    description:
      "Used and second-hand components are bench-checked with calibrated micrometers and circuit diagnostics to ensure long service life.",
    footer: "Verified Automotive Engineering",
  },
];