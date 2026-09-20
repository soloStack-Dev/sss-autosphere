/**
 * Central configuration for every business detail.
 *
 * Phone, email, hours, and address are confirmed and live; other details stay
 * `[Confirm ...]` placeholders until the business owner confirms them. Update
 * the values here and every page reflects the change automatically.
 */

export const siteConfig = {
  name: "SSS AUTO SPARES",
  displayName: "SSS Auto Spares",
  tagline: "Chennai Automobile Parts",
  establishedNote: "Genuine Parts & Vehicle Solutions",

  // Confirmed business details (supplied by the owner)
  phone: "9840527931",
  phoneAlt: "7708066680",
  email: "Salaudeen5010@gmail.com",
  hours: "9:00 am to 9:00 pm - Tamil Support",
  address: "No. 45/39, South Coovam River Road, Pudupet, Chennai, Tamil Nadu 600002",
  warehouseAddress: "No. 45/39, South Coovam River Road, Pudupet, Chennai, Tamil Nadu 600002",
  location: "Chennai, TN",
  proprietor: "[Confirm preferred display name]",

  // Shop location on the map (resolved from the official Google Maps pin)
  map: {
    lat: 13.067521,
    lng: 80.266244,
    googleMapsUrl: "https://maps.app.goo.gl/dqu699UH7SMekGsV9",
  },

  topBar: {
    left: "9840527931 • Chennai, TN",
    hours: "Hours: 9:00 am to 9:00 pm - Tamil Support",
    right: "Salaudeen5010@gmail.com | Verified OEM/OES Supply Hub",
  },

  recordId: "MAS-SP-2024",

  /** Stats band values — [Confirm] until the business confirms the numbers. */
  heroStats: {
    years: "[Confirm Years]",
    parts: "10,000+ Parts",
    categories: "6+ Categories",
    cities: "[Confirm Cities Served]",
  },

  socials: {
    whatsapp: "https://wa.me/919840527931", // primary WhatsApp chat link
    instagram:
      "https://www.instagram.com/salaudeen2273?stkn=MXV1cWQ1OWNhcmxoMQ%3D%3D&utm_source=qr",
    facebook: "https://www.facebook.com/share/1d6xVr83PV/?mibextid=wwXIfr",
  },

  description:
    "Automotive spare parts and vehicle-related enquiry services in Chennai. Supplying genuine parts, quality used spares, and vehicle solutions.",
} as const;

export const paymentConfig = {
  businessName: "[Confirm Official Business Name / SSS Auto Spares]",
  upiId: "[Confirm official UPI ID - e.g. sssautospares@bank]",
  paymentPhone: "[Confirm Payment Number]",
  qrCodeStatus: "Verified QR supplied by business",
  qrCodeSrc: "/images/payment/payment-qr-img.png",
  qrCodeNote: "Official Business QR Code",
  email: siteConfig.email,
  address: siteConfig.address,
  businessHours: siteConfig.hours,
  dispatchProtocol: "Instant Post-UTR",
  hubLocation: "Chennai, TN",
  txReference: "[Confirm Transaction Reference]",
} as const;

/** Navigation shared by the global header/footer. */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Product", href: "/products" },
  { label: "Payment", href: "/payment" },
  { label: "Gallery", href: "/gallery" },
  { label: "Feedback", href: "/feedback" },
  { label: "Enquire", href: "/enquire" },
  { label: "Share", href: "/share" },
] as const;

export const publicRoutes = [
  "/",
  "/about",
  "/products",
  "/payment",
  "/gallery",
  "/feedback",
  "/enquire",
  "/share",
] as const;