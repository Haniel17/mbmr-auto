export const companyInfo = {
  name: "MBMR Auto",
  tagline: "All the parts you need for all makes and models",
  shortDesc: "For reliable auto parts at prices that fit your budget, MBMR Auto is your go-to destination across the GTA. We offer an extensive selection of quality parts, tools, and automotive accessories.",
  specialtyDesc: "Whether you're working on routine maintenance or a major repair, we specialize in alternators, starters, and a wide range of automotive electrical parts — catering to passenger vehicles, commercial fleets, and heavy equipment.",
  address: "1275 Finch Ave W, North York, ON M3J 0L5, Canada",
  locationName: "1275 Finch Ave W, North York",
  postalCode: "M3J 0L5",
  region: "Greater Toronto Area (GTA), Ontario, Canada",
  phone: "437-961-4224",
  phoneRaw: "+14379614224",
  email: "Mbmrauto@gmail.com",
  hours: {
    weekdays: "8:00 AM – 6:30 PM",
    saturday: "8:00 AM – 3:30 PM",
    sunday: "Closed",
  },
  mapEmbed: "https://maps.google.com/maps?q=1275+Finch+Ave+W,+North+York,+ON+M3J+0L5&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapDirectLink: "https://g.page/r/CW7qY7QC34OYEBM",
  googleReviewUrl: "https://g.page/r/CW7qY7QC34OYEBM/review",
  googleBusinessUrl: "https://g.page/r/CW7qY7QC34OYEBM",
  guarantees: [
    "All the Parts You Need for All Makes and Models",
    "Specialists in Alternators, Starters & Automotive Electrical",
    "Serving North York & the Entire Greater Toronto Area (GTA)",
    "Budget-Friendly Pricing with OEM-Grade Reliability",
    "Direct Parts Counter Pickup at 1275 Finch Ave W",
    "Comprehensive Fitment & Warranty Protection"
  ],
  stats: [
    { value: "GTA-Wide", label: "Trusted Depot" },
    { value: "All Makes", label: "And Models Covered" },
    { value: "100%", label: "Tested & Warranted" },
    { value: "Fast", label: "Counter Pickup" }
  ]
};

export const partCategories = [
  { id: "all", label: "All Parts" },
  { id: "alternators-starters", label: "Alternators & Starters" },
  { id: "brakes", label: "Brake Parts" },
  { id: "suspension-steering", label: "Suspension & Steering" },
  { id: "air-conditioning", label: "Air Conditioning Parts" },
  { id: "tires-wholesale", label: "Wholesale Tires" },
  { id: "truck-parts", label: "Commercial & Truck Parts" },
  { id: "body-parts", label: "Car Body & Collision Parts" },
  { id: "engines-powertrain", label: "Engines & Powertrain" },
  { id: "headlights-lighting", label: "Headlights & Lighting" }
];

export const partsCatalog = [
  // 1. ALTERNATORS & STARTERS (SPECIALTY)
  {
    id: "alternators-specialty",
    category: "alternators-starters",
    title: "Alternators, Regulators & Decoupler Pulleys",
    shortDesc: "High-output alternators (12V/24V), smart LIN-bus voltage regulators, and Overrunning Alternator Pulleys (OAP).",
    fullDesc: "Our core specialty at MBMR Auto. We supply high-amp alternators ranging from 90A to 300A+ for domestic, European, and Asian passenger vehicles, commercial fleet vans, and auxiliary power applications.",
    image: "/images/parts-alternator.jpg",
    specs: [
      "90A to 300A+ high-amperage output ratings for modern electrical demands",
      "Smart digital LIN / BSS / COM voltage regulators with OE communication",
      "Overrunning Alternator Decoupler (OAD) & one-way freewheel pulleys",
      "100% automated load and ripple-voltage bench tested before dispatch",
      "Available for all passenger cars, commercial vans, and diesel trucks"
    ],
    compatibility: "All Makes & Models (Ford, GM, Ram, Honda, Toyota, BMW, Mercedes, Freightliner)",
    warranty: "Full Replacement Warranty",
    badge: "MBMR Core Specialty",
    availability: "In Stock at Finch Ave Counter"
  },
  {
    id: "starters-solenoids",
    category: "alternators-starters",
    title: "High-Torque Starter Motors & Start-Stop Solenoids",
    shortDesc: "Planetary gear reduction starters, heavy-duty drive bendix gears, and Start-Stop tandem solenoids.",
    fullDesc: "Ensure dependable, instant engine cranking even in extreme Canadian winter conditions (-40°C rated). We stock direct drop-in starters with reinforced case-hardened pinions and high-temperature armature windings.",
    image: "/images/parts-starter.jpg",
    specs: [
      "Planetary gear reduction for maximum cranking torque with minimal battery draw",
      "Reinforced pinion gears with case-hardened alloy teeth for durability",
      "Start-Stop extended endurance dual-solenoid configurations",
      "Cold-climate tested armatures with high-dielectric insulation",
      "Wide coverage from passenger compacts to heavy commercial diesels"
    ],
    compatibility: "All Makes and Models & Heavy Machinery",
    warranty: "Full Replacement Warranty",
    badge: "Severe-Cold Rated",
    availability: "In Stock at Finch Ave Counter"
  },

  // 2. BRAKE PARTS
  {
    id: "brake-pads-rotors",
    category: "brakes",
    title: "Brake Pads, Disc Rotors & Drums",
    shortDesc: "Premium ceramic low-dust pads, semi-metallic compounds, and rust-coated disc rotors.",
    fullDesc: "Stopping power you can rely on across GTA roads and highways. We carry ceramic and semi-metallic brake pad sets paired with precision-balanced, rust-resistant coated brake rotors for smooth, quiet, vibration-free braking.",
    image: "/images/parts-brakes.jpg",
    specs: [
      "Low-dust ceramic & high-friction semi-metallic formulations",
      "Corrosion-resistant coated hats & cooling vanes for Canadian winters",
      "Multi-layer rubberized shims for noise and vibration reduction",
      "Precision-ground friction surfaces for instant pedal bite",
      "Complete hardware kits and wear sensor clips available"
    ],
    compatibility: "All Makes & Models (Sedans, SUVs, Pickup Trucks & Commercial Fleets)",
    warranty: "Manufacturer Backed Warranty",
    badge: "Premium Friction",
    availability: "In Stock at Finch Ave Counter"
  },
  {
    id: "brake-calipers-hydraulics",
    category: "brakes",
    title: "Brake Calipers, Master Cylinders & Hydraulic Lines",
    shortDesc: "Brand-new & remanufactured brake calipers, master cylinders, electronic parking brake (EPB) motors, and brake hoses.",
    fullDesc: "Complete hydraulic brake replacement components pressure-tested for zero leaks. Includes front & rear calipers with fresh brackets, silicone seals, and stainless steel hardware pins.",
    image: "/images/parts-brakes.jpg",
    specs: [
      "Single, twin, and multi-piston loaded and semi-loaded calipers",
      "Electronic Parking Brake (EPB) integrated caliper assemblies",
      "OEM-grade master cylinders and proportional valves",
      "DOT-approved reinforced hydraulic rubber and braided lines",
      "100% high-pressure leak tested before boxing"
    ],
    compatibility: "Domestic, Japanese, Korean & European Vehicles",
    warranty: "Full Replacement Warranty",
    badge: "Pressure Tested",
    availability: "In Stock at Finch Ave Counter"
  },

  // 3. SUSPENSION & STEERING
  {
    id: "shock-absorbers-struts",
    category: "suspension-steering",
    title: "Complete Strut Assemblies, Shocks & Coil Springs",
    shortDesc: "Pre-assembled quick-struts, gas-pressurized shock absorbers, and heavy-duty coil springs.",
    fullDesc: "Restore ride height, handling stability, and tire life with our ready-to-install complete strut assemblies. Designed for effortless bolt-on installation with pre-compressed springs, top mounts, and gas-charged dampers.",
    image: "/images/parts-suspension.jpg",
    specs: [
      "Ready-to-install Complete Quick-Strut assemblies (no spring compressor needed)",
      "Nitrogen gas-pressurized twin-tube & monotube shock absorbers",
      "Cold-rolled high-tensile steel springs calibrated to factory ride height",
      "Heavy-duty bearing plates and elastomer isolators",
      "Engineered to withstand tough potholes and rough winter roads"
    ],
    compatibility: "All Makes & Models (Domestic & Import)",
    warranty: "Full Replacement Warranty",
    badge: "Bolt-On Ready",
    availability: "In Stock at Finch Ave Counter"
  },
  {
    id: "control-arms-steering",
    category: "suspension-steering",
    title: "Control Arms, Ball Joints, Tie Rods & Steering Racks",
    shortDesc: "Front/rear wishbones, pressed ball joints, inner/outer tie rods, sway bar links, and EPS steering racks.",
    fullDesc: "Complete front-end chassis components engineered to eliminate steering wander, clunking noises, and uneven tire wear. Made with forged alloy construction and sealed dust boots.",
    image: "/images/parts-suspension.jpg",
    specs: [
      "Forged steel and lightweight aluminum control arms with pre-pressed ball joints",
      "Inner & outer tie rod ends for precision wheel alignment",
      "Heavy-duty sway bar stabilizer end links",
      "Hydraulic and solid rubber suspension control arm bushings",
      "Electric Power Steering (EPS) and hydraulic rack assemblies"
    ],
    compatibility: "Cars, SUVs, Minivans, Light Trucks & Commercial Vans",
    warranty: "Full Replacement Warranty",
    badge: "Chassis Grade",
    availability: "In Stock at Finch Ave Counter"
  },

  // 4. AIR CONDITIONING & REFRIGERATION
  {
    id: "ac-compressors",
    category: "air-conditioning",
    title: "Air Conditioning Compressors & Clutches",
    shortDesc: "Brand-new AC compressors, electromagnetic clutch assemblies, and electronic control valves.",
    fullDesc: "Reliable cabin cooling for summer heatwaves. We supply brand-new, factory-lubricated AC compressors with exact-fit mounting points and pre-installed clutches.",
    image: "/images/parts-aircond.jpg",
    specs: [
      "Brand-new units pre-charged with OEM-specified PAG/POE lubricant",
      "Includes electromagnetic clutch, pulley, and internal control valves",
      "High volumetric efficiency with smooth, quiet operation",
      "Tested for vacuum hold and refrigerant pressure integrity",
      "Direct drop-in replacements for all makes and models"
    ],
    compatibility: "All Makes & Models (Ford, Chevy, Honda, Toyota, Hyundai, Nissan, etc.)",
    warranty: "12-Month Warranty",
    badge: "Pre-Oiled OEM Spec",
    availability: "In Stock at Finch Ave Counter"
  },
  {
    id: "ac-condensers-evaporators",
    category: "air-conditioning",
    title: "AC Condensers, Evaporators, Blower Motors & Driers",
    shortDesc: "Aluminum micro-channel condensers, cooling coils, heater cores, and cabin blower motors.",
    fullDesc: "Complete climate control system components. Includes direct-fit aluminum condensers, desiccant receiver-driers, and quiet multi-speed interior blower motors.",
    image: "/images/parts-aircond.jpg",
    specs: [
      "Micro-channel aluminum condenser cores for rapid heat dissipation",
      "High-efficiency evaporator cooling coils and heater cores",
      "Integrated receiver driers & desiccant filter bags",
      "Quiet HVAC cabin blower motors with balanced fan cages",
      "100% helium leak-tested before shipping"
    ],
    compatibility: "Passenger Cars, Commercial Delivery Vans & Trucks",
    warranty: "12-Month Warranty",
    badge: "Direct Fit",
    availability: "In Stock at Finch Ave Counter"
  },

  // 5. WHOLESALE TIRES & COMMERCIAL RUBBER
  {
    id: "passenger-truck-tires",
    category: "tires-wholesale",
    title: "Wholesale All-Season, Winter & Performance Tires",
    shortDesc: "Bulk & wholesale tire supply for passenger vehicles, SUVs, light trucks, and commercial fleets across the GTA.",
    fullDesc: "MBMR Auto offers competitive wholesale tire supply for auto repair shops, fleet operators, and retail motorists across the GTA. We stock top-tier all-season, severe-snow winter tires (Three-Peak Mountain Snowflake 3PMSF certified), ultra-high performance (UHP), and heavy-ply light truck tires.",
    image: "/images/parts-tires.jpg",
    specs: [
      "Major brand & premium-tier wholesale tire inventory (All-Season, Winter, All-Weather, A/T)",
      "Three-Peak Mountain Snowflake (3PMSF) certified Canadian severe-winter compounds",
      "Commercial 10-ply / 12-ply (Load Range E/F) cargo van & pickup fitments",
      "Volume rebate discounts & exclusive wholesale shop pricing",
      "TPMS sensors, high-pressure valves, and wheel accessories available"
    ],
    compatibility: "All Makes & Models (Sedans, Crossovers, SUVs, Pickup Trucks, Fleet Vans)",
    warranty: "Manufacturer Treadwear & Road Hazard Warranty",
    badge: "Wholesale Rates",
    availability: "In Stock & Same-Day GTA Wholesale Delivery"
  },
  {
    id: "commercial-fleet-tires",
    category: "tires-wholesale",
    title: "Commercial Fleet, Cargo Van & Light Truck Tires",
    shortDesc: "Heavy-duty commercial tires designed for high mileage, heavy payloads, and severe urban duty cycles.",
    fullDesc: "Keep your commercial vehicles and delivery fleets operating with zero downtime. We supply rugged commercial van and light truck tires engineered with reinforced sidewalls, scuff protectors, and deep tread sipes for year-round traction.",
    image: "/images/parts-tires.jpg",
    specs: [
      "Reinforced multi-ply casing with heavy-duty curb scuff protectors",
      "Commercial all-position highway & all-terrain tread patterns for delivery fleets",
      "High load-capacity indices for cargo vans (Ford Transit, Sprinter, Ram ProMaster)",
      "Rapid job-site, depot counter pickup & GTA wholesale delivery",
      "Fleet volume pricing and dedicated account support"
    ],
    compatibility: "Ford Transit, Ram ProMaster, Mercedes Sprinter, Chevy Express & Light Trucks",
    warranty: "Commercial Warranty",
    badge: "Fleet Grade",
    availability: "Direct Counter Pickup & GTA Delivery"
  },

  // 6. COMMERCIAL & HEAVY TRUCK PARTS
  {
    id: "truck-heavy-duty-electrical",
    category: "truck-parts",
    title: "Heavy-Duty Truck Starters, 24V Alternators & Batteries",
    shortDesc: "Severe-duty 12V/24V high-torque starters and high-amp brushless alternators for commercial trucks and diesel fleets.",
    fullDesc: "Built for long-haul reliability and severe service cycles. We supply OEM-grade commercial starters and brushless high-output alternators for Freightliner, International, Volvo, Mack, Peterbilt, Kenworth, and medium-duty Isuzu/Hino trucks.",
    image: "/images/parts-truck.jpg",
    specs: [
      "12V & 24V brushless heavy-duty alternators up to 320A with remote battery sensing",
      "Gear-reduction diesel starters with Over-Crank Protection (OCP) technology",
      "Sealed heavy-duty solenoid cases resistant to vibration, road salt, and thermal shock",
      "Coverage for Cummins, Detroit Diesel, PACCAR, Caterpillar, and Navistar engines",
      "Immediate stock availability at our Finch Ave North York counter"
    ],
    compatibility: "Freightliner, Kenworth, Peterbilt, International, Volvo, Hino, Isuzu & Ford Super Duty",
    warranty: "Heavy-Duty Commercial Warranty",
    badge: "Commercial Heavy-Duty",
    availability: "In Stock at Finch Ave Counter"
  },
  {
    id: "truck-air-brakes-chassis",
    category: "truck-parts",
    title: "Truck Air Brake Valves, Drums, Chambers & Leaf Springs",
    shortDesc: "Complete commercial truck brake and chassis components including brake drums, slack adjusters, and air dryers.",
    fullDesc: "Ensure full compliance with CVOR safety standards and peak stopping power. We carry commercial air brake chambers, heavy cast brake drums, automatic slack adjusters, multi-leaf spring packs, and king pin repair kits.",
    image: "/images/parts-truck.jpg",
    specs: [
      "Type 30/30 sealed spring brake chambers with anti-corrosive powder coating",
      "Heavy-duty balanced cast iron brake drums and premium commercial shoes",
      "Automatic slack adjusters & air system desiccant cartridge dryers",
      "Forged steel kingpin sets, drag links, and tie rod assemblies",
      "Same-day dispatch and delivery to repair facilities across the GTA"
    ],
    compatibility: "Class 4 to Class 8 Commercial Trucks, Straight Trucks & Trailers",
    warranty: "Full Commercial Warranty",
    badge: "Fleet Safety Grade",
    availability: "Direct Counter Pickup & GTA Delivery"
  },

  // 7. CAR BODY PARTS & COLLISION PANELS
  {
    id: "body-bumpers-grilles",
    category: "body-parts",
    title: "Bumper Covers, Front Grilles & Reinforcement Bars",
    shortDesc: "OEM-equivalent injection molded front and rear bumper covers, absorption foam, and front grilles.",
    fullDesc: "Restore vehicle styling and structural safety after collisions. We provide factory-fit bumper covers, impact absorbers, reinforcement beams, and front grilles designed for exact alignment with body lines.",
    image: "/images/parts-body.jpg",
    specs: [
      "High-grade virgin polypropylene/ABS plastics matching OEM paint adhesion specs",
      "Pre-drilled park assist sensor holes and fog light bezel knockouts",
      "Reinforcement impact beams and radiator core support frames",
      "Precision-molded for seamless gap alignment without modification",
      "Extensive coverage for all domestic, Asian, and European passenger vehicles"
    ],
    compatibility: "All Makes & Models (Sedans, Coupes, SUVs, Vans & Pickup Trucks)",
    warranty: "Direct-Fit Guarantee",
    badge: "Collision Quality",
    availability: "Direct Counter Pickup & Fast GTA Delivery"
  },
  {
    id: "body-fenders-hoods-mirrors",
    category: "body-parts",
    title: "Fenders, Hoods, Quarter Panels & Power Heated Side Mirrors",
    shortDesc: "Steel and aluminum replacement hoods, fenders, door shells, and complete side view mirror assemblies.",
    fullDesc: "Complete collision body panel solutions. We supply electro-deposit coated (EDP) rust-protected steel fenders, stamped aluminum hoods, and power-heated side view mirrors with blind-spot indicators.",
    image: "/images/parts-body.jpg",
    specs: [
      "EDP primer coated high-gauge stamped steel resisting rust during storage & paint prep",
      "Lightweight alloy aluminum hoods matching OEM crush zone characteristics",
      "Power heated side mirrors with integrated LED turn signals & blind spot monitoring",
      "Door shells, tailgate assemblies, and trunk lids for all vehicle classes",
      "Wholesale pricing for body shops, collision centers, and DIY rebuilders"
    ],
    compatibility: "All Makes & Models (Honda, Toyota, Hyundai, Ford, GM, BMW, Mercedes, etc.)",
    warranty: "Fitment & Finish Guarantee",
    badge: "OEM-Spec Fit",
    availability: "In Stock & Same-Day GTA Delivery"
  },

  // 8. ENGINES & POWERTRAIN
  {
    id: "engine-assemblies-heads",
    category: "engines-powertrain",
    title: "Complete Engines, Cylinder Heads & Engine Rebuild Kits",
    shortDesc: "Tested complete replacement engines, machined cylinder heads, crankshafts, and master overhaul gasket kits.",
    fullDesc: "Get your vehicle back on the road with dependable powertrain components. We supply low-mileage tested complete engines, remanufactured cylinder heads, camshafts, piston ring sets, and comprehensive engine rebuild kits.",
    image: "/images/parts-engine.jpg",
    specs: [
      "Compression and leak-down verified engine assemblies and cylinder heads",
      "Forged steel connecting rods, balanced crankshafts, and performance camshafts",
      "Multi-Layer Steel (MLS) head gasket sets and valve cover seal packages",
      "High-pressure oil pumps, oil pans, and engine balance shafts",
      "Comprehensive warranty support for auto repair shops and trade mechanics"
    ],
    compatibility: "4-Cylinder, V6, V8, EcoBoost, HEMI, Vortec & Diesel Applications",
    warranty: "12-Month / 20,000 km Warranty",
    badge: "Dyno & Compression Tested",
    availability: "Direct Warehouse Dispatch & Counter Pickup"
  },
  {
    id: "timing-water-pumps-transmission",
    category: "engines-powertrain",
    title: "Timing Chain Kits, Water Pumps & Drivetrain Components",
    shortDesc: "Complete timing component kits with hydraulic tensioners, cast water pumps, and axle shafts.",
    fullDesc: "Prevent catastrophic engine failure with premium timing drive kits. Includes heavy-duty timing chains, guide rails, variable valve timing (VVT) sprockets, cast impellers water pumps, and constant velocity (CV) axle shafts.",
    image: "/images/parts-engine.jpg",
    specs: [
      "Complete timing kits including chains, sprockets, guide shoes & hydraulic tensioners",
      "Heavy-duty cast impeller water pumps with ceramic-carbon seals",
      "Intake & exhaust VVT camshaft phasers / actuator gears",
      "Heavy-duty CV axle half-shafts with high-temp neoprene boots",
      "Precision engineered to eliminate timing slap and check engine codes"
    ],
    compatibility: "All Makes & Models (Domestic, Asian & European Imports)",
    warranty: "Full Replacement Warranty",
    badge: "Master Grade",
    availability: "In Stock at Finch Ave Counter"
  },

  // 9. HEADLIGHTS & AUTOMOTIVE LIGHTING
  {
    id: "headlight-assemblies-led",
    category: "headlights-lighting",
    title: "Full LED, Bi-Xenon (HID) & Projector Headlight Assemblies",
    shortDesc: "DOT / SAE compliant direct-fit complete headlight assemblies with crystal-clear polycarbonate lenses.",
    fullDesc: "Restore nighttime visibility and modern vehicle aesthetics. We stock complete OE-replacement headlight assemblies featuring integrated LED daytime running lights (DRL), projector optics, and UV-coated anti-yellowing lenses.",
    image: "/images/parts-headlights.jpg",
    specs: [
      "DOT / SAE compliant optical beam patterns with sharp cutoff lines",
      "UV-cured anti-fog and scratch-resistant polycarbonate outer lenses",
      "Full LED projector housings, Bi-Xenon HID ballasts, and halogen assemblies",
      "Integrated sequential LED turn signals and luminous halo light pipes",
      "Weather-sealed moisture-tight housings with internal breathable membranes"
    ],
    compatibility: "All Makes & Models (Sedans, Coupes, SUVs, Pickup Trucks & Commercial Vans)",
    warranty: "12-Month Clear Lens Warranty",
    badge: "DOT / SAE Certified",
    availability: "In Stock at Finch Ave Counter"
  },
  {
    id: "tail-lights-fog-lamps",
    category: "headlights-lighting",
    title: "Tail Light Assemblies, Fog Lamps & LED Light Bars",
    shortDesc: "Complete rear tail light housings, bumper fog lights, third brake lights, and high-lumen auxiliary lighting.",
    fullDesc: "Upgrade safety, braking visibility, and foul-weather illumination. We carry exact-fit LED tail lights, bumper-mounted fog light kits with wiring harnesses, side marker lamps, and high-mount cargo brake lights.",
    image: "/images/parts-headlights.jpg",
    specs: [
      "High-intensity rear LED cluster arrays providing instant brake signal response",
      "Wide-dispersion fog lamp optics piercing dense fog, rain, and snow",
      "Direct plug-and-play factory wire harnesses with zero error codes",
      "Impact-resistant red & smoked lens options with hermetic silicone seals",
      "Full selection for all pickup trucks, SUVs, commercial vans, and passenger cars"
    ],
    compatibility: "All Makes & Models (Domestic, Japanese, Korean & European)",
    warranty: "12-Month Warranty",
    badge: "Plug & Play",
    availability: "Direct Counter Pickup & GTA Delivery"
  }
];

export const sourcingProcess = [
  {
    step: "01",
    title: "Vehicle / Part Lookup",
    desc: "Give us your vehicle make, model, year, VIN, or part description. We search electronic parts catalogs for exact compatibility."
  },
  {
    step: "02",
    title: "Budget-Friendly Quote",
    desc: "We provide competitive pricing on quality OEM and aftermarket options tailored to your repair budget."
  },
  {
    step: "03",
    title: "Finch Ave Counter Pickup / Delivery",
    desc: "Pick up your parts directly at our 1275 Finch Ave W counter in North York, or arrange fast delivery across the GTA."
  },
  {
    step: "04",
    title: "Warranted Quality & Fitment",
    desc: "All components come with full warranty protection and fitment guarantee so you can install with confidence."
  }
];

export const partsFaqs = [
  {
    q: "Where is MBMR Auto located?",
    a: "We are conveniently located at 1275 Finch Ave W, North York, ON M3J 0L5, Canada. You can visit our parts counter during operating hours or call 437-961-4224 for instant stock checks."
  },
  {
    q: "What types of vehicles do you supply parts for?",
    a: "True to our tagline 'All the parts you need for all makes and models', we supply components for all domestic and import passenger cars, light trucks, SUVs, and commercial fleet vans."
  },
  {
    q: "Do you specialize in alternators and starters?",
    a: "Yes! Alternators, starters, and automotive electrical parts are our core specialty. We carry standard, high-output, and cold-cranking units for all makes and models."
  },
  {
    q: "What are your operating hours?",
    a: "We are open Monday to Friday from 8:00 AM to 6:30 PM, Saturday from 8:00 AM to 3:30 PM, and closed on Sunday."
  },
  {
    q: "How do I order or request a price quote?",
    a: "You can call us directly at 437-961-4224, email us at Mbmrauto@gmail.com, or submit the quotation form on this website with your vehicle details."
  }
];

export const googleReviewsSummary = {
  rating: 5.0,
  verifiedBadge: "Official Google Verified Business Profile",
  googleMapsUrl: "https://g.page/r/CW7qY7QC34OYEBM",
  reviewUrl: "https://g.page/r/CW7qY7QC34OYEBM/review"
};

export const googleReviewsData = [
  {
    id: 1,
    author: "Marco D.",
    role: "Local Auto Repair Shop Owner",
    avatar: "M",
    avatarBg: "#ee2a2a",
    rating: 5,
    date: "2 days ago",
    category: "alternators-starters",
    vehicle: "2019 Ford F-150 / 2021 Chevy Silverado",
    part: "High-Output Alternator & Starter",
    text: "MBMR Auto is our #1 parts supplier in North York. When my shop needs an alternator or starter fast, their counter at 1275 Finch Ave always has it tested and ready. Best electrical specialists in the GTA, prices are way better than the dealership.",
    verified: true,
    likes: 14
  },
  {
    id: 2,
    author: "Dmitri K.",
    role: "Commercial Fleet Operator",
    avatar: "D",
    avatarBg: "#3b82f6",
    rating: 5,
    date: "1 week ago",
    category: "truck-parts",
    vehicle: "Freightliner M2 & Ford Transit Cargo",
    part: "24V Alternator & Air Brake Chambers",
    text: "Saved our commercial delivery fleet hundreds of dollars. Needed heavy-duty truck starters and brake chambers on short notice. Walked into their Finch Ave counter and was in and out in 10 minutes. High quality and exact fitment.",
    verified: true,
    likes: 9
  },
  {
    id: 3,
    author: "Sanjay P.",
    role: "Verified Car Owner",
    avatar: "S",
    avatarBg: "#10b981",
    rating: 5,
    date: "2 weeks ago",
    category: "brakes",
    vehicle: "2020 Honda Civic",
    part: "Ceramic Brake Pads & Coated Rotors",
    text: "Super friendly counter service! Replaced my front and rear brake pads and rotors. They looked up my VIN immediately and had the exact ceramic low-dust pads in stock. Highly recommend MBMR Auto for anyone in Toronto looking for honest prices.",
    verified: true,
    likes: 12
  },
  {
    id: 4,
    author: "Carlos R.",
    role: "Independent Mechanic",
    avatar: "C",
    avatarBg: "#8b5cf6",
    rating: 5,
    date: "3 weeks ago",
    category: "suspension-steering",
    vehicle: "2018 Toyota RAV4",
    part: "Complete Quick-Strut Assemblies",
    text: "Got complete pre-assembled quick-struts and control arms for a client's RAV4. Ride quality is OEM-level smooth and installation was straightforward. MBMR Auto is definitely a hidden gem on Finch Ave W.",
    verified: true,
    likes: 8
  },
  {
    id: 5,
    author: "Anthony M.",
    role: "HVAC & Auto Tech",
    avatar: "A",
    avatarBg: "#f59e0b",
    rating: 5,
    date: "1 month ago",
    category: "air-conditioning",
    vehicle: "2017 Nissan Rogue",
    part: "Brand-New AC Compressor & Condenser",
    text: "Their brand-new AC compressor blew ice-cold air on first charge. Much better reliability than rebuilt units from other scrap yards. Fair pricing, knowledgeable staff at the desk, and 100% warranted.",
    verified: true,
    likes: 11
  },
  {
    id: 6,
    author: "Tariq H.",
    role: "Tire & Wheel Customer",
    avatar: "T",
    avatarBg: "#ec4899",
    rating: 5,
    date: "1 month ago",
    category: "tires-wholesale",
    vehicle: "2022 Dodge Ram 1500",
    part: "10-Ply Commercial Heavy-Duty Tires",
    text: "Bought wholesale winter tires with the 3PMSF severe snow rating for my work truck. Unbeatable wholesale pricing and fast pickup. Staff helped load everything directly into my truck bed.",
    verified: true,
    likes: 7
  }
];
