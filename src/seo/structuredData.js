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
    ],
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    description: companyInfo.shortDesc,
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
    name: "Request a Parts Quote — MBMR Auto",
    url: absoluteUrl("/contact"),
    description:
      "Contact MBMR Auto for auto parts quotes, stock checks, and pickup at 1275 Finch Ave W, North York.",
    mainEntity: localBusinessSchema(),
  };
}
