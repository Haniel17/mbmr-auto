export const SITE_URL = "https://www.mbmrauto.com";
export const SITE_NAME = "MBMR Auto";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/bg-auto.jpg`;

export const defaultSeo = {
  title: "MBMR Auto — Quality Auto Parts for All Makes & Models | North York, GTA",
  description:
    "MBMR Auto — your go-to source for quality auto parts across the GTA. Specializing in alternators, starters, brake parts, suspension, steering & AC components at 1275 Finch Ave W, North York.",
};

export const pageSeo = {
  home: {
    title: "MBMR Auto — Quality Auto Parts for All Makes & Models | North York, GTA",
    description:
      "Quality auto parts at budget-friendly prices in North York. Alternators, starters, brakes, suspension, tires & AC parts. Counter pickup at 1275 Finch Ave W or GTA delivery.",
    path: "/",
  },
  parts: {
    title: "Auto Parts Catalog — All Makes & Models | MBMR Auto North York",
    description:
      "Browse MBMR Auto's full parts catalog: alternators, starters, brake pads, rotors, struts, AC compressors, tires, truck parts & more. In-stock at 1275 Finch Ave W, North York.",
    path: "/parts",
  },
  contact: {
    title: "Request a Parts Quote | MBMR Auto — North York, GTA",
    description:
      "Get a fast parts price quote from MBMR Auto. Call 437-961-4224, email, or submit your vehicle details online. Pickup at 1275 Finch Ave W, North York or GTA delivery.",
    path: "/contact",
  },
  notFound: {
    title: "Page Not Found | MBMR Auto",
    description: "The page you're looking for doesn't exist. Browse our auto parts catalog or contact MBMR Auto at 1275 Finch Ave W, North York.",
    path: "/404",
    noindex: true,
  },
};

export const categorySeo = {
  "alternators-starters": {
    title: "Alternators & Starters in North York, GTA | MBMR Auto",
    description:
      "High-output alternators, starter motors, LIN-bus regulators & decoupler pulleys for all makes and models. Bench-tested electrical parts at MBMR Auto, 1275 Finch Ave W, North York.",
  },
  brakes: {
    title: "Brake Pads, Rotors & Calipers — North York | MBMR Auto",
    description:
      "Ceramic brake pads, coated rotors, calipers, master cylinders & ABS components for cars and trucks. Quality brake parts at MBMR Auto, North York GTA.",
  },
  "suspension-steering": {
    title: "Suspension & Steering Parts — North York | MBMR Auto",
    description:
      "Quick-strut assemblies, shock absorbers, control arms, ball joints, tie rods & steering racks. Chassis parts for all makes at MBMR Auto, 1275 Finch Ave W.",
  },
  "air-conditioning": {
    title: "AC Compressors & HVAC Parts — North York | MBMR Auto",
    description:
      "Brand-new AC compressors, condensers, evaporators, expansion valves & blower motors. Climate control parts for all makes at MBMR Auto, North York GTA.",
  },
  "tires-wholesale": {
    title: "Wholesale Tires — North York & GTA | MBMR Auto",
    description:
      "Bulk all-season, winter, performance & commercial tires for repair shops, fleets & passenger vehicles. Wholesale tire supply at MBMR Auto, North York.",
  },
  "truck-parts": {
    title: "Commercial & Truck Parts — North York | MBMR Auto",
    description:
      "24V alternators, diesel starters, air brake chambers, drums & leaf springs for commercial fleets. Heavy-duty truck parts at MBMR Auto, 1275 Finch Ave W.",
  },
  "body-parts": {
    title: "Collision & Body Parts — North York | MBMR Auto",
    description:
      "OEM-equivalent bumper covers, fenders, hoods, grilles, quarter panels & heated mirrors. Quality collision body parts at MBMR Auto, North York GTA.",
  },
  "engines-powertrain": {
    title: "Engines & Powertrain Parts — North York | MBMR Auto",
    description:
      "Tested replacement engines, cylinder heads, timing chain kits, water pumps & CV axles. Powertrain components for all makes at MBMR Auto, North York.",
  },
  "headlights-lighting": {
    title: "Headlights & LED Lighting — North York | MBMR Auto",
    description:
      "DOT/SAE compliant LED headlights, HID kits, tail lights, fog lamps & turn signals. Automotive lighting for all makes at MBMR Auto, North York GTA.",
  },
};

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function partsCategoryPath(categoryId) {
  return categoryId && categoryId !== "all" ? `/parts/${categoryId}` : "/parts";
}
