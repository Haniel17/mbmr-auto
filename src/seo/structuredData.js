import { companyInfo } from "../data/partsData";
import { SITE_URL, absoluteUrl } from "./siteConfig";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    name: companyInfo.name,
    image: `${SITE_URL}/images/bg-auto.jpg`,
    "@id": SITE_URL,
    url: SITE_URL,
    hasMap: companyInfo.mapDirectLink,
    sameAs: [companyInfo.googleBusinessUrl, companyInfo.googleReviewUrl],
    telephone: `+1-${companyInfo.phone}`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1275 Finch Ave W",
      addressLocality: "North York",
      addressRegion: "ON",
      postalCode: "M3J 0L5",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.7615,
      longitude: -79.4772,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "15:30",
      },
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
      { "@type": "City", name: "North York" },
      { "@type": "City", name: "Toronto" },
      { "@type": "City", name: "Vaughan" },
      { "@type": "City", name: "Markham" },
      { "@type": "City", name: "Mississauga" },
      { "@type": "City", name: "Brampton" },
      { "@type": "City", name: "Richmond Hill" },
      { "@type": "City", name: "Scarborough" },
    ],
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Credit Card, Debit Card, E-Transfer",
    description:
      "MBMR Auto is a premier supplier of car parts, truck parts, commercial heavy-duty truck components, collision body parts, replacement bumpers, fenders, hoods, wholesale tyres, alternators, starters, brake components, and suspension across North York and the Greater Toronto Area (GTA).",
    knowsAbout: [
      "Car Parts & Automotive Components",
      "Truck Parts & Heavy-Duty Commercial Vehicle Parts",
      "Pickup Truck Parts (Ford Super Duty, Chevy Silverado, Ram)",
      "Commercial Fleet & Diesel Truck Parts (Freightliner, Hino, Isuzu, Volvo, Peterbilt)",
      "Car Body Parts & Collision Repair Panels",
      "Front and Rear Bumper Covers",
      "Steel Fenders and Aluminum Hoods",
      "Front Grilles and Quarter Panels",
      "Power Heated Side Mirrors & Truck Tow Mirrors",
      "Wholesale Tyres & Tires (Passenger & Commercial)",
      "Winter Tyres (3PMSF Severe Snow)",
      "All-Season and Performance Tires",
      "Commercial 10-Ply & 12-Ply Cargo Van Tyres",
      "Alternators and Starter Motors (12V & 24V Heavy Duty)",
      "Diesel Starters & High-Amp Brushless Alternators",
      "Ceramic Brake Pads, Heavy-Duty Truck Brakes & Coated Rotors",
      "Truck Air Brake Chambers (Type 30/30) & Drums",
      "Quick-Struts, Heavy-Duty Shock Absorbers & Leaf Springs",
      "Air Conditioning Compressors & Truck HVAC",
      "Tested Replacement Engines, Cylinder Heads & CV Axles"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "MBMR Auto Car & Truck Parts Catalog",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Car & Truck Mechanical Parts",
          description: "Full mechanical parts catalog for passenger cars, SUVs, and pickup trucks."
        },
        {
          "@type": "OfferCatalog",
          name: "Commercial & Heavy-Duty Truck Parts",
          description: "24V alternators, diesel starters, air brake chambers, cast iron drums, and leaf springs."
        },
        {
          "@type": "OfferCatalog",
          name: "Car Body & Collision Parts",
          description: "Replacement bumpers, fenders, hoods, grilles, quarter panels, and side mirrors."
        },
        {
          "@type": "OfferCatalog",
          name: "Wholesale Tyres & Tires",
          description: "Wholesale all-season, winter tyres, commercial van tyres, and performance tires."
        },
        {
          "@type": "OfferCatalog",
          name: "Alternators & Starters",
          description: "High-output 12V and 24V alternators, starter motors, and automotive electrical components."
        },
        {
          "@type": "OfferCatalog",
          name: "Brake Parts & Rotors",
          description: "Ceramic brake pads, coated disc rotors, heavy-duty truck brakes, calipers, and hydraulic lines."
        }
      ]
    }
  };
}

export function breadcrumbSchema(items, { includeContext = true } = {}) {
  const schema = {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
  if (includeContext) schema["@context"] = "https://schema.org";
  return schema;
}

export function faqSchema(faqs, { includeContext = true } = {}) {
  const schema = {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
  if (includeContext) schema["@context"] = "https://schema.org";
  return schema;
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Request a Parts Quote — Car Body Parts, Tyres & Alternators — MBMR Auto",
    url: absoluteUrl("/contact"),
    description:
      "Contact MBMR Auto for price quotes on car body parts, wholesale tyres, alternators, starters, and mechanical auto parts in North York & GTA.",
    mainEntity: localBusinessSchema(),
  };
}
