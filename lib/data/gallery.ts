export type GalleryItem = {
  id: string;
  category: string;
  title: string;
  description: string;
  metadata: string;
  image: string;
  alt: string;
};

export const galleryCategories = [
  { label: "All", count: 6, key: "all" },
  { label: "Products", count: 2, key: "Products" },
  { label: "Spare Parts", count: 1, key: "Spare Parts" },
  { label: "Shop & Showroom", count: 1, key: "Shop & Showroom" },
  { label: "Workshop", count: 1, key: "Workshop" },
  { label: "Customer Services", count: 1, key: "Customer Services" },
];

export const sampleGallery: GalleryItem[] = [
  {
    id: "g1",
    category: "Shop & Showroom",
    title: "SSS Auto Spares Store & Display Shelf",
    description:
      "Showroom display with precision brake components, calipers, and gear assemblies ready for over-the-counter inspection.",
    metadata: "SKU Inspection Rack",
    image: "/images/gallery/gallery-img-one.png",
    alt: "Automotive spare parts displayed on showroom shelving",
  },
  {
    id: "g2",
    category: "Workshop",
    title: "Technicians Bench-Testing Automotive Assemblies",
    description:
      "Technical verification desk equipped with digital micrometers, fitment schematics, and testing fixtures.",
    metadata: "Tolerance Check Bench",
    image: "/images/gallery/gallery-img-two.png",
    alt: "Technicians bench-testing automotive assemblies",
  },
  {
    id: "g3",
    category: "Spare Parts",
    title: "High-Performance Carbon Ceramic Brake System",
    description:
      "Ventilated disc rotor with precision multi-piston caliper mount for high-performance sedans and SUVs.",
    metadata: "Braking Systems",
    image: "/images/gallery/gallery-img-three.png",
    alt: "High-performance ventilated brake rotor with red performance caliper",
  },
  {
    id: "g4",
    category: "Products",
    title: "Heavy-Duty Suspension & Coil Springs",
    description:
      "OEM and aftermarket gas-pressurized shock absorbers organized by vehicle model fitment and load rating.",
    metadata: "Suspension Range",
    image: "/images/gallery/gallery-img-four.png",
    alt: "Heavy-duty automotive suspension shocks and coil springs",
  },
  {
    id: "g5",
    category: "Products",
    title: "Precision Engine Internals & Turbochargers",
    description:
      "Camshafts, forged pistons, and cylinder head gaskets strictly inspected for micrometer durability and OEM tolerances.",
    metadata: "Engine Core Components",
    image: "/images/gallery/gallery-img-five.png",
    alt: "Precision engine internals and turbocharger components",
  },
  {
    id: "g6",
    category: "Customer Services",
    title: "Vehicle Parts Consultation & Fitment Validation",
    description:
      "Dedicated Chennai engineering desk assisting garage owners, technicians, and car owners with chassis-level part lookups.",
    metadata: "Fitment Assistance",
    image: "/images/gallery/gallery-img-six.png",
    alt: "Automotive parts consultation and fitment validation at Chennai service counter",
  },
];

export const facilityCards = {
  primary: {
    image: "/images/gallery/gallery-img-seven.png",
    alt: "Chennai automotive spare-parts warehouse and showroom",
    badge: "Primary Chennai Warehouse & Showroom",
    title: "Integrated Chennai Parts Hub",
    description:
      "Every automotive part entering our facility undergoes barcoding, brand authenticity checks, and digital cataloging before entering active rotation.",
    stats: [
      { title: "Tier-1 Sourcing", value: "Direct factory batches" },
      { title: "Clean Cataloging", value: "Accurate chassis matches" },
      { title: "Instant Dispatch", value: "Same-day pickup available" },
    ],
  },
  topRight: {
    image: "/images/gallery/gallery-img-eight.png",
    alt: "Technician performing precision automotive component measurements",
    eyebrow: "Testing Bench",
    title: "Bench-Testing & Fitment Desk",
    description:
      "Hands-on measurement checking clearance, tolerance, and electrical continuity before any part leaves the facility.",
  },
  bottomRight: {
    image: "/images/gallery/gallery-img-three.png",
    alt: "High-performance ventilated brake rotor with red performance caliper",
    eyebrow: "OEM Assurance",
    title: "Verified Brake & Performance Spares",
    description:
      "High-friction rotors, hydraulic calipers, and temperature-rated pads certified for structural and functional viability.",
  },
};