const fs = require('fs');
const path = require('path');

const ARCHITECTURAL_ENGINEERING_QUESTIONS = [
  {
    q: "In building structural design, what is the primary structural function of reinforced concrete shear walls during high-magnitude lateral loading (seismic and wind)?",
    opts: [
      "To resist in-plane lateral shear forces, overturning moments, and limit inter-story drift",
      "To provide primary thermal insulation across exterior facades",
      "To support vertical tension tie rods only",
      "To allow flexible differential settlement of non-structural partitions"
    ],
    ans: 0
  },
  {
    q: "According to ASHRAE Standard 62.1, what is the governing objective when sizing outdoor air ventilation rates in commercial buildings?",
    opts: [
      "To maintain acceptable indoor air quality by diluting metabolic CO2, VOCs, and indoor bio-effluents",
      "To maximize relative humidity to 100% in occupant zones",
      "To eliminate the need for air filtration media in air handling units",
      "To induce positive pressure exceeding 50 kPa inside elevator shafts"
    ],
    ans: 0
  },
  {
    q: "In building envelope physics, what phenomenon describes the unwanted heat flow through highly conductive structural members (such as steel studs or cantilevered concrete balconies) that bypass thermal insulation?",
    opts: [
      "Thermal Bridging",
      "Radiant Heat Puddle",
      "Convective Plume Bypass",
      "Capillary Siphon Action"
    ],
    ans: 0
  },
  {
    q: "In architectural acoustics, which metric measures the time required for the sound pressure level in an enclosed space to decay by 60 decibels after the sound source has stopped?",
    opts: [
      "Reverberation Time (RT60)",
      "Sound Transmission Class (STC)",
      "Noise Criterion (NC)",
      "Articulation Index (AI)"
    ],
    ans: 0
  },
  {
    q: "What fundamental property of an exterior building glazing assembly quantifies the fraction of incident solar radiation admitted through a window, both directly transmitted and absorbed then re-radiated inward?",
    opts: [
      "Solar Heat Gain Coefficient (SHGC)",
      "U-factor (Thermal Transmittance)",
      "Visible Transmittance (VT)",
      "Light-to-Solar Gain (LSG) Ratio"
    ],
    ans: 0
  },
  {
    q: "In building structural engineering, which lateral force-resisting system provides ductility and energy dissipation through rigid, moment-resisting connections between beams and columns without diagonal bracing?",
    opts: [
      "Special Moment Frame (SMF)",
      "Buckling-Restrained Braced Frame (BRBF)",
      "Unreinforced Masonry Bearing Wall",
      "Dual Eccentric Core Tube"
    ],
    ans: 0
  },
  {
    q: "In architectural lighting design, what unit measures the luminous flux incident per unit area on a workplane in the International System (SI)?",
    opts: [
      "Lux (lumens per square meter)",
      "Candela (luminous intensity)",
      "Foot-candle (lumens per square foot)",
      "Lumen-second (Talbot)"
    ],
    ans: 0
  },
  {
    q: "What foundation system is typically specified in architectural engineering when competent load-bearing strata are located deep below weak, compressible surface soils?",
    opts: [
      "Deep foundations such as driven steel H-piles or drilled concrete shafts (caissons)",
      "Isolated shallow square spread footings",
      "Continuous wall strip footings",
      "Unreinforced gravel leveling pads"
    ],
    ans: 0
  },
  {
    q: "In building psychrometrics, what occurs to moist air when it is cooled below its dew point temperature as it passes over a chilled-water cooling coil?",
    opts: [
      "Water vapor condenses out of the air stream, reducing its humidity ratio (dehumidification)",
      "The absolute humidity increases as sensible heat rises",
      "The dry-bulb temperature remains constant while enthalpy drops to zero",
      "The air becomes superheated vapor without liquid runoff"
    ],
    ans: 0
  },
  {
    q: "In building life safety design and IBC (International Building Code), what determines the required minimum width of means of egress doors, corridors, and stairs?",
    opts: [
      "Design occupant load multiplied by capacity factors per occupant (e.g., 0.3 in/occupant for stairs, 0.2 in/occupant for other egress)",
      "The total perimeter footprint of the building foundation divided by four",
      "The structural height of the rooftop parapet",
      "The volumetric airflow capacity of the mechanical HVAC supply fan"
    ],
    ans: 0
  },
  {
    q: "In architectural acoustics, what single-number rating quantifies the airborne sound transmission loss of an interior partition wall, floor, or ceiling assembly?",
    opts: [
      "Sound Transmission Class (STC)",
      "Noise Reduction Coefficient (NRC)",
      "Impact Insulation Class (IIC)",
      "Ceiling Attenuation Class (CAC)"
    ],
    ans: 0
  },
  {
    q: "In building energy modeling (BEM), what metric expresses a building's total annual energy consumption relative to its gross conditioned floor area?",
    opts: [
      "Energy Use Intensity (EUI, in kBtu/ft²/yr or kWh/m²/yr)",
      "Coefficient of Performance (COP)",
      "Seasonal Energy Efficiency Ratio (SEER)",
      "Annual Fuel Utilization Efficiency (AFUE)"
    ],
    ans: 0
  },
  {
    q: "What type of HVAC distribution system varies the volumetric flow rate of conditioned supply air at a constant supply temperature to satisfy temperature setpoints in individual building thermal zones?",
    opts: [
      "Variable Air Volume (VAV) system",
      "Constant Air Volume (CAV) multi-zone bypass",
      "Single-stage direct-expansion ductless mini-split",
      "Natural convective gravity warm-air loop"
    ],
    ans: 0
  },
  {
    q: "In structural steel design for high-rise buildings, what component is placed at the top of a skyscraper to oscillate out of phase with wind-induced or seismic vibrations to reduce building accelerations?",
    opts: [
      "Tuned Mass Damper (TMD)",
      "Perimeter Tension Spandrel",
      "Outrigger Truss Knee Brace",
      "Viscous Base Isolator Pad"
    ],
    ans: 0
  },
  {
    q: "In building plumbing engineering, what fixture ratings are used to calculate the simultaneous peak water demand and drainage discharge capacity in commercial buildings?",
    opts: [
      "Water Supply Fixture Units (WSFU) and Drainage Fixture Units (DFU)",
      "Gallons per minute per kilowatt (GPM/kW)",
      "Nominal Pipe Diameter Factor (NPDF)",
      "Hydrostatic Siphon Units (HSU)"
    ],
    ans: 0
  },
  {
    q: "In curtain wall facade design, what mechanism is engineered into joints to prevent water penetration by equalizing air pressure between an exterior drained cavity and the outdoors?",
    opts: [
      "Rainscreen principle using pressure equalization chambers and baffled weep holes",
      "Hermetically sealing all joints exclusively with structural silicone glazing",
      "Applying a monolithic bitumen damp-proof coat over outer mullions",
      "Eliminating all drainage gaps to create absolute airtight vacuum barriers"
    ],
    ans: 0
  },
  {
    q: "What type of fire sprinkler system contains unpressurized dry air or nitrogen in the piping and requires both a smoke detector activation and a fusible sprinkler head link to melt before water discharges?",
    opts: [
      "Pre-action sprinkler system",
      "Standard wet-pipe sprinkler system",
      "Deluge open-nozzle system",
      "Dry-pipe system with quick-opening accelerator"
    ],
    ans: 0
  },
  {
    q: "In architectural lighting, what metric on a scale of 0 to 100 indicates how accurately an artificial light source renders the true colors of objects compared to a natural daylight or blackbody reference?",
    opts: [
      "Color Rendering Index (CRI) or TM-30 Color Fidelity (Rf)",
      "Correlated Color Temperature (CCT)",
      "Unified Glare Rating (UGR)",
      "Luminous Efficacy (lm/W)"
    ],
    ans: 0
  },
  {
    q: "In structural masonry and concrete construction, what are intentionally formed, weakened planes designed to accommodate thermal expansion, shrinkage, and prevent uncontrolled random cracking called?",
    opts: [
      "Control joints and contraction joints",
      "Shear friction dowel planes",
      "Lap splice shear bonds",
      "Cold construction bearing stops"
    ],
    ans: 0
  },
  {
    q: "In building mechanical systems, which thermodynamic cycle is used in electric water chillers to produce chilled water for building cooling?",
    opts: [
      "Vapor-compression refrigeration cycle (compressor, condenser, expansion valve, evaporator)",
      "Brayton gas turbine cycle",
      "Rankine steam power cycle",
      "Stirling external combustion cycle"
    ],
    ans: 0
  },
  {
    q: "In building envelope design, what material layer must be strategically placed on the warm-in-winter side of insulation in cold climates to prevent interstitial condensation within wall cavities?",
    opts: [
      "Vapor retarder / vapor barrier",
      "Reflective radiant foil facing outward",
      "Continuous air entrainment mesh",
      "Perforated breather underlayment"
    ],
    ans: 0
  },
  {
    q: "In post-tensioned concrete building floors, what is the primary structural advantage of tensioning high-strength steel tendons after the concrete has cured?",
    opts: [
      "It pre-compresses the concrete to counteract tensile stresses from gravity loads, allowing thinner slabs and longer column-free spans",
      "It eliminates the requirement for concrete curing compounds",
      "It reduces concrete density by 50% through micro-void expansion",
      "It prevents concrete carbonation indefinitely"
    ],
    ans: 0
  },
  {
    q: "According to ASCE 7, how is the basic design wind pressure on building cladding and structural frames determined?",
    opts: [
      "Using 3-second gust design wind speed, wind directionality factor, exposure category terrain roughness, and gust effect factor",
      "Multiplying average annual wind speed by the building gross floor area",
      "Measuring the ambient barometric pressure difference between ground and roof levels",
      "Calculating the sonic stagnation pressure of laminar boundary layer air"
    ],
    ans: 0
  },
  {
    q: "In sustainable building design (e.g., LEED or passive building standards), what does the term 'Daylight Autonomy' (DA) signify?",
    opts: [
      "The percentage of occupied operating hours during the year when target illuminance thresholds are met by natural daylight alone",
      "The amount of photovoltaic electricity produced by rooftop solar panels during daylight",
      "The thermal lag time required for solar heat to conduct through concrete walls",
      "The automatic dimming response speed of emergency exit signs"
    ],
    ans: 0
  },
  {
    q: "In commercial building electrical distribution, what type of transformer is standardly installed indoors to step down utility distribution voltage (e.g., 13.8 kV or 480V) to utilization voltages (480/277V or 208/120V) without flammable insulating oil?",
    opts: [
      "Dry-type ventilated transformer",
      "Mineral-oil immersed substation transformer",
      "PCB Askarel liquid transformer",
      "SF6 gas-filled toroidal inductor"
    ],
    ans: 0
  },
  {
    q: "In building acoustics, what is the 'Noise Criterion' (NC) or 'Room Criterion' (RC) rating used for?",
    opts: [
      "Specifying the maximum allowable background sound level generated by continuous HVAC and mechanical equipment in occupied rooms",
      "Measuring structural floor impact noise from footfall traffic",
      "Evaluating the speech privacy between adjacent conference rooms",
      "Calculating the flutter echo between parallel gypsum board partitions"
    ],
    ans: 0
  },
  {
    q: "In architectural structural systems, what is a 'diagrid' structure and what is its primary structural efficiency?",
    opts: [
      "A perimeter framework of diagonally intersecting members that carries both gravity and lateral shear loads through axial triangular truss action",
      "A horizontal grid of orthogonal precast joists supported by central bearing walls",
      "An internal suspension bridge cable network hanging from a cantilever mast",
      "A foundation grid of grade beams interconnecting isolated spread footings"
    ],
    ans: 0
  },
  {
    q: "In building energy systems, what is 'Economizer cycle' (free cooling) operation in an Air Handling Unit (AHU)?",
    opts: [
      "Using favorable outdoor air directly to cool the building interior when outdoor temperature/enthalpy is lower than return air, reducing mechanical chiller run time",
      "Turning off ventilation fans completely when the building is fully occupied",
      "Operating the chiller compressor in reverse as a heat pump during peak summer cooling",
      "Bypassing HEPA filters to reduce fan brake horsepower during high pollution events"
    ],
    ans: 0
  },
  {
    q: "What building geotechnical test measures the in-situ resistance of soil strata to penetration by driving a split-barrel sampler with a standard 140-lb hammer dropping 30 inches to determine the N-value?",
    opts: [
      "Standard Penetration Test (SPT)",
      "Cone Penetrometer Test (CPT)",
      "Atterberg Liquid Limit Test",
      "Proctor Compaction Moisture-Density Test"
    ],
    ans: 0
  },
  {
    q: "In seismic base isolation of buildings, how do elastomeric lead-rubber bearings (LRBs) protect the superstructure during strong ground shaking?",
    opts: [
      "They lengthen the building's fundamental natural period away from peak ground acceleration frequencies and dissipate seismic energy through lead core hysteretic yielding",
      "They anchor the building rigidly into bedrock to prevent any relative lateral movement",
      "They convert lateral seismic shear waves into vertical high-frequency sound waves",
      "They trigger explosive shear pins that decouple the building into independent buoyant modules"
    ],
    ans: 0
  }
];

// 1. Update backend domainQuestionBank.js
const backendFile = path.join(__dirname, '../data/domainQuestionBank.js');
let backendContent = fs.readFileSync(backendFile, 'utf8');

console.log('backend has arch questions:', backendContent.includes('"architectural-engineering": ['));
if (!backendContent.includes('"architectural-engineering": [')) {
  const insertMarker = 'const DOMAIN_QUESTIONS = {';
  const archJson = '\n  "architectural-engineering": ' + JSON.stringify(ARCHITECTURAL_ENGINEERING_QUESTIONS, null, 2) + ',';
  if (backendContent.includes(insertMarker)) {
    backendContent = backendContent.replace(insertMarker, insertMarker + archJson);
    console.log('[Script] Successfully added architectural-engineering questions to backend domainQuestionBank.js');
  } else {
    console.error('[Script] Could not find insertMarker in backend domainQuestionBank.js');
  }
}
fs.writeFileSync(backendFile, backendContent, 'utf8');

// 2. Update frontend questionBank.ts
const frontendFile = path.join(__dirname, '../../frontend/src/services/questionBank.ts');
let frontendContent = fs.readFileSync(frontendFile, 'utf8');

// Extract chemical engineering questions from backend
const chemMatch = backendContent.match(/"chemical-engineering":\s*(\[\s*\{[\s\S]*?\}\s*\])/);
if (chemMatch && !frontendContent.includes('"chemical-engineering": [')) {
  const chemRaw = JSON.parse(chemMatch[1]);
  const frontendChem = chemRaw.map((item, idx) => ({
    id: `chemical-engineering-${idx + 1}`,
    question_text: item.q,
    difficulty: idx < 10 ? 'easy' : idx < 20 ? 'medium' : 'hard',
    marks: 1,
    options: item.opts.map((optText, oIdx) => ({
      id: `chemical-engineering-${idx + 1}-${String.fromCharCode(97 + oIdx)}`,
      option_text: optText,
      is_correct: oIdx === item.ans
    }))
  }));

  const marker = 'const DOMAIN_QUESTIONS: Record<string, any[]> = {';
  const chemTs = '  "chemical-engineering": ' + JSON.stringify(frontendChem, null, 2) + ',\n';
  frontendContent = frontendContent.replace(marker, marker + '\n' + chemTs);
  console.log('[Script] Added chemical-engineering questions to frontend questionBank.ts');
}

if (!frontendContent.includes('"architectural-engineering": [')) {
  const frontendArch = ARCHITECTURAL_ENGINEERING_QUESTIONS.map((item, idx) => ({
    id: `architectural-engineering-${idx + 1}`,
    question_text: item.q,
    difficulty: idx < 10 ? 'easy' : idx < 20 ? 'medium' : 'hard',
    marks: 1,
    options: item.opts.map((optText, oIdx) => ({
      id: `architectural-engineering-${idx + 1}-${String.fromCharCode(97 + oIdx)}`,
      option_text: optText,
      is_correct: oIdx === item.ans
    }))
  }));

  const marker = 'const DOMAIN_QUESTIONS: Record<string, any[]> = {';
  const archTs = '  "architectural-engineering": ' + JSON.stringify(frontendArch, null, 2) + ',\n';
  frontendContent = frontendContent.replace(marker, marker + '\n' + archTs);
  console.log('[Script] Added architectural-engineering questions to frontend questionBank.ts');
}

if (!frontendContent.includes('"chemical-engineering": "chemical-engineering"')) {
  frontendContent = frontendContent.replace('export const ALIAS_MAP: Record<string, string> = {', 'export const ALIAS_MAP: Record<string, string> = {\n  "chemical-engineering": "chemical-engineering",\n  "chemical": "chemical-engineering",\n  "chem-eng": "chemical-engineering",\n  "chemical-eng": "chemical-engineering",');
  console.log('[Script] Added chemical-engineering aliases to frontend ALIAS_MAP');
}

if (!frontendContent.includes('"architectural-engineering": "architectural-engineering"')) {
  frontendContent = frontendContent.replace('export const ALIAS_MAP: Record<string, string> = {', 'export const ALIAS_MAP: Record<string, string> = {\n  "architectural-engineering": "architectural-engineering",');
  console.log('[Script] Added architectural-engineering alias to frontend ALIAS_MAP');
}

fs.writeFileSync(frontendFile, frontendContent, 'utf8');
console.log('[Script] Successfully updated all question banks and alias maps!');
