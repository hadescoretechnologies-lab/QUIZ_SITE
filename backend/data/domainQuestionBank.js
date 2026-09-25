// Comprehensive authentic question bank for backend
// Domain-based questions with strictly 4 options (A, B, C, D) per question, question shuffling, option shuffling, and dynamic domain generation.

const DOMAIN_QUESTIONS = {
  "film-production": [
  {
    "q": "In cinematography, what fundamental rule governs camera shutter speed relative to frame rate (e.g., shooting at 24 fps with a 1/48s shutter) to achieve natural motion blur resembling human visual perception?",
    "opts": [
      "The 180-Degree Shutter Rule",
      "The Rule of Thirds camera grid",
      "The Inverse-Square Law of lighting decay",
      "The Rec. 709 dynamic range compression ratio"
    ],
    "ans": 0
  },
  {
    "q": "In classic motion picture lighting setups, what is the primary purpose of the \"Key Light\" in three-point lighting?",
    "opts": [
      "To establish the primary illumination, directionality, and mood on the subject’s face and figure",
      "To soften deep shadows cast by the sun without altering exposure",
      "To separate the subject from the dark background with an edge rim glow",
      "To evenly illuminate the greenscreen backdrop to prevent color spill"
    ],
    "ans": 0
  },
  {
    "q": "In cinematic editing and camera placement, what spatial guideline states that cameras must remain on one side of an imaginary line between two characters to preserve screen direction and eyelines?",
    "opts": [
      "The 180-Degree Spatial Axis Rule",
      "The 30-Degree Cut Angle Rule",
      "The Jump Cut Discontinuity Protocol",
      "The Kuleshov Effect sequencing rule"
    ],
    "ans": 0
  },
  {
    "q": "Which optical lens characteristic determines the depth of field and background bokeh blur at a given focal length and camera-to-subject distance?",
    "opts": [
      "Lens aperture (f-stop / T-stop setting)",
      "Front filter thread diameter (e.g., 82mm)",
      "Lens mount flange focal depth distance",
      "Zoom barrel rotation torque resistance"
    ],
    "ans": 0
  },
  {
    "q": "In professional digital cinema cameras (like ARRI Alexa or RED), what is the primary advantage of recording in a \"Log\" gamma profile (e.g., LogC, S-Log3, RED Log3G10)?",
    "opts": [
      "Preserves maximum dynamic range in highlights and shadow details for flexible color grading in post-production",
      "Permanently burns a finalized color look directly into video files to save render time",
      "Doubles the audio sample rate recorded on internal microphones",
      "Automatically stabilizes handheld camera camera shake without optical gimbal"
    ],
    "ans": 0
  },
  {
    "q": "In location sound recording, what microphone polar pattern provides tight directional pickup along the front axis while rejecting ambient sounds from the sides and rear, ideal for boom pole operation?",
    "opts": [
      "Supercardioid / Hypercardioid (Shotgun pattern with interference tube)",
      "Omnidirectional boundary pattern",
      "Figure-8 bidirectional ribbon pattern",
      "Cardioid wide-angle cardioid lavalier"
    ],
    "ans": 0
  },
  {
    "q": "In film post-production sound design, what is the custom recording of synchronized human footsteps, cloth rustles, and prop interactions to replace production audio called?",
    "opts": [
      "Foley Recording",
      "Automated Dialogue Replacement (ADR / Looping)",
      "Diegetic orchestral score scoring",
      "Room tone baseline ambiance recording"
    ],
    "ans": 0
  },
  {
    "q": "What visual narrative device is created by cutting from one scene to another where the two consecutive shots share identical geometric compositions, motion directions, or shapes?",
    "opts": [
      "Match Cut (Graphic or Action match cut)",
      "Smash cut on audio peak",
      "L-Cut / J-Cut split audio transition",
      "Wipe transition with alpha mask"
    ],
    "ans": 0
  },
  {
    "q": "On a professional film set, which department head is responsible for rigging lighting instruments, camera cranes, dollies, flags, and physical camera support equipment?",
    "opts": [
      "Key Grip",
      "Gaffer (Chief Lighting Technician)",
      "First Assistant Director (1st AD)",
      "Production Sound Mixer"
    ],
    "ans": 0
  },
  {
    "q": "In digital color grading and mastering, what is a 3D LUT (Look-Up Table) primarily used for?",
    "opts": [
      "Mapping input color values (RGB) from a camera Log space to a standardized display color space (such as Rec.709) with a specific creative palette",
      "Automatically removing microphone hum and background air conditioning noise",
      "Re-timing the speed of slow-motion clips from 120 fps to 24 fps",
      "Generating digital visual effects particle simulations"
    ],
    "ans": 0
  }
,
  {
    "q": "In professional cinematography, what optical difference distinguishes anamorphic lenses from standard spherical lenses?",
    "opts": [
      "Anamorphic lenses optically compress wide fields of view with a 2x squeeze, producing oval bokeh and horizontal flares",
      "Anamorphic lenses require zero focusing adjustments at any focal distance",
      "Anamorphic lenses can only capture black-and-white monochrome imagery",
      "Anamorphic lenses eliminate the need for digital camera image sensors"
    ],
    "ans": 0
  },
  {
    "q": "In multi-camera and dual-system sound production, what protocol synchronizes audio recorders and cameras with continuous frame-accurate time metadata?",
    "opts": [
      "SMPTE Linear Timecode (LTC) and Genlock synchronization",
      "Consumer Bluetooth audio pairing",
      "Analog frequency modulation broadcast carrier",
      "Manual stopwatch hand signaling"
    ],
    "ans": 0
  },
  {
    "q": "In digital cinema workflows, which color gamut represents the widest color space standardized by ITU for ultra-high-definition television?",
    "opts": [
      "ITU-R BT.2020 (Rec. 2020)",
      "Standard sRGB (Rec. 709)",
      "DCI-P3 theatrical cinema space",
      "Adobe RGB (1998) print gamut"
    ],
    "ans": 0
  },
  {
    "q": "What is the industry-standard professional digital audio sampling rate used for synchronous sound recording in motion picture production?",
    "opts": [
      "48 kHz at 24-bit depth",
      "44.1 kHz at 16-bit depth (Red Book CD)",
      "22.05 kHz at 8-bit depth",
      "96 kHz at 1-bit Delta-Sigma depth"
    ],
    "ans": 0
  },
  {
    "q": "How does reducing the camera shutter angle from 180 degrees to 45 degrees alter the visual appearance of high-speed action sequences?",
    "opts": [
      "Produces sharp, staccato, jittery motion with virtually zero motion blur",
      "Creates extreme motion blur with smooth dreamlike trails",
      "Inverts image color channels into negative space",
      "Slows down playback speed by 400%"
    ],
    "ans": 0
  },
  {
    "q": "In high-contrast chiaroscuro or film noir cinematography, what key-to-fill lighting ratio is typically employed?",
    "opts": [
      "8:1 or higher (producing deep, dramatic shadow separation)",
      "1:1 flat lighting ratio",
      "2:1 standard sitcom interview ratio",
      "0.5:1 where fill light is twice as bright as key light"
    ],
    "ans": 0
  },
  {
    "q": "What image sensor artifact occurs on CMOS rolling-shutter cameras during rapid whip-pans or propeller rotations?",
    "opts": [
      "Rolling shutter skew / Jello effect distortion",
      "Pixel blooming and charge leakage across lines",
      "Optical diffraction fringing along edge highlights",
      "Automatic focal plane inversion"
    ],
    "ans": 0
  },
  {
    "q": "In professional grip and rigging on set, what safety rule governs the proper loading direction of a C-stand grip head (knuckle)?",
    "opts": [
      "Right-hand rule: the load must be rigged on the right side so downward gravitational torque tightens the knuckle",
      "The knuckle handle must always point downward toward the floor",
      "Loads must only be balanced on the shortest base leg without sandbags",
      "Arms must be extended to maximum reach without tightening the T-handle"
    ],
    "ans": 0
  },
  {
    "q": "In cinematic camera lenses, what optical property distinguishes a true cinema zoom from a photographic zoom lens?",
    "opts": [
      "Parfocal design that maintains critical focal distance throughout the entire zoom range without breathing",
      "Inability to manually adjust focus rings during recording",
      "Plastic aperture rings without gear pitch teeth",
      "Fixed focal length that cannot change magnification"
    ],
    "ans": 0
  },
  {
    "q": "In high-end film production lighting, what metric evaluates light source color fidelity specifically optimized for television and digital cinema sensors?",
    "opts": [
      "Television Lighting Consistency Index (TLCI)",
      "Color Temperature (Kelvin scale only)",
      "Luminous flux measured in raw lumens",
      "Incandescent bulb wattage rating"
    ],
    "ans": 0
  },
  {
    "q": "What theatrical widescreen aspect ratio is the DCI Scope standard for epic feature films?",
    "opts": [
      "2.39:1 (Scope)",
      "1.85:1 (Flat)",
      "1.33:1 (Academy 4:3)",
      "1.78:1 (16:9 HD)"
    ],
    "ans": 0
  },
  {
    "q": "In directional microphone acoustics, what physical phenomenon causes directional microphones (like cardiods and shotguns) to artificially boost low frequencies as they approach a speaker's mouth?",
    "opts": [
      "Proximity Effect",
      "Haas Precedence Effect",
      "Doppler Frequency Shift",
      "Inverse-Square Acoustic Reflection"
    ],
    "ans": 0
  },
  {
    "q": "When calculating depth of field in cinematography, what optical distance setting yields acceptable sharpness from half that distance all the way to infinity?",
    "opts": [
      "Hyperfocal Distance",
      "Focal Flange Collimation Distance",
      "Minimum Focus Distance (MOD)",
      "Optical Nodal Point Axis"
    ],
    "ans": 0
  },
  {
    "q": "In offline/online post-production workflows, what lightweight, low-bitrate video files are used during creative editing before final conform and color grading?",
    "opts": [
      "Proxy Media (e.g., ProRes Proxy or DNxHR LB)",
      "Uncompressed 16-bit DPX master image sequences",
      "4K RAW Bayer sensor dumps",
      "HEVC H.265 distribution streams"
    ],
    "ans": 0
  },
  {
    "q": "Which camera stabilization system isolates camera movement using a mechanical counterweighted sled, articulated arm, and operator vest?",
    "opts": [
      "Steadicam mechanical stabilizer",
      "Electronic motorized 3-axis brushless gimbal",
      "Optical image stabilization (OIS) inside the lens barrel",
      "Electronic digital sensor crop stabilization"
    ],
    "ans": 0
  },
  {
    "q": "When filming in bright sunlight with a wide aperture (e.g., f/1.4 or T1.5) to achieve shallow depth of field, what optical filter reduces exposure without altering color balance?",
    "opts": [
      "Neutral Density (ND) filter",
      "Linear polarizing filter",
      "80A daylight-to-tungsten cooling filter",
      "UV haze cut-off filter"
    ],
    "ans": 0
  },
  {
    "q": "In visual effects (VFX) plate photography, what color subsampling standard is required to preserve sharp matte edges during green-screen chroma keying?",
    "opts": [
      "4:2:2 or 4:4:4 uncompressed chroma subsampling",
      "4:2:0 consumer compression subsampling",
      "4:1:1 NTSC legacy video subsampling",
      "1:0:0 luminance-only grayscale sampling"
    ],
    "ans": 0
  },
  {
    "q": "In script supervision and visual continuity, what imaginary line between two characters must the camera never cross to maintain consistent screen direction?",
    "opts": [
      "The 180-Degree Line (Axis of Action)",
      "The 30-degree focal cutoff boundary",
      "The horizon level line",
      "The blocking focal mark"
    ],
    "ans": 0
  },
  {
    "q": "In high-efficiency cinema lighting, what high-intensity discharge lamp produces daylight-balanced 5600K light with very high luminous efficacy per watt?",
    "opts": [
      "HMI (Hydrargyrum Medium-arc Iodide) light",
      "Standard Tungsten-Halogen filament bulb",
      "Low-pressure sodium vapor street lamp",
      "Mercury vapor industrial tube"
    ],
    "ans": 0
  },
  {
    "q": "In modern cinema sound design, which multichannel immersive format incorporates 3D height speaker channels and audio objects positioned in spatial coordinate space?",
    "opts": [
      "Dolby Atmos / DTS:X object-based spatial audio",
      "Standard 5.1 channel surround sound",
      "2.0 stereo matrix encoding",
      "Binaural dummy-head mono mix"
    ],
    "ans": 0
  }
],

  "interior-design": [
  {
    "q": "In architectural interior design, what metric defines the human body measurement standards used to ensure appropriate countertop heights, door clearances, and chair seat ergonomics?",
    "opts": [
      "Anthropometrics",
      "Biomechanics of sports kinetics",
      "Acoustical reverberation metrics",
      "Photometric beam dispersion angles"
    ],
    "ans": 0
  },
  {
    "q": "In commercial building codes (IBC & NFPA 101 Life Safety Code), what is the minimum standard clear width requirement for an accessible interior means of egress corridor serving more than 50 occupants?",
    "opts": [
      "44 inches (1118 mm)",
      "32 inches (813 mm)",
      "24 inches (610 mm)",
      "60 inches (1524 mm)"
    ],
    "ans": 0
  },
  {
    "q": "In lighting design for corporate interior offices, what Correlated Color Temperature (CCT) range is recommended for promoting alertness and visual acuity in task workspaces?",
    "opts": [
      "3500K to 4500K (Neutral to Cool White)",
      "2200K to 2700K (Warm candlelight glow)",
      "6500K to 7500K (Daylight blue exterior sky)",
      "1800K to 2000K (Sodium vapor amber)"
    ],
    "ans": 0
  },
  {
    "q": "What acoustical performance rating measures the percentage of airborne sound absorbed by an interior ceiling tile or wall acoustic panel (ranging from 0.00 to 1.00)?",
    "opts": [
      "Noise Reduction Coefficient (NRC)",
      "Sound Transmission Class (STC)",
      "Impact Insulation Class (IIC)",
      "Ceiling Attenuation Class (CAC)"
    ],
    "ans": 0
  },
  {
    "q": "In interior commercial flooring specification, what test metric measures the slip resistance of ceramic tiles under wet conditions to prevent occupant falls (ANSI A326.3)?",
    "opts": [
      "Dynamic Coefficient of Friction (DCOF, minimum standard >= 0.42 for level wet floors)",
      "Mohs Hardness Scratch Scale rating",
      "Static indentation residual deformation rating",
      "Taber Abrasion wear cycle count"
    ],
    "ans": 0
  },
  {
    "q": "In residential interior kitchen design, what classic planning principle minimizes walking distances between the sink, cooktop/range, and refrigerator?",
    "opts": [
      "The Kitchen Work Triangle (total perimeter between 13 and 26 feet)",
      "The Linear Galley Corridor layout",
      "The Golden Ratio Sectional distribution",
      "The Feng Shui Bagua map orientation"
    ],
    "ans": 0
  },
  {
    "q": "What flame spread classification under ASTM E84 / NFPA 255 is mandatory for interior wall and ceiling finish materials in high-risk commercial egress corridors (Flame Spread Index 0-25)?",
    "opts": [
      "Class A (Class I)",
      "Class B (Class II)",
      "Class C (Class III)",
      "Class D (Unregulated combustible finish)"
    ],
    "ans": 0
  },
  {
    "q": "What design framework ensures interior built environments are usable by all people to the greatest extent possible, regardless of age, disability, or mobility limitations?",
    "opts": [
      "Universal Design (Principles of Accessibility and ADA Standards)",
      "Minimalist Industrial Aestheticism",
      "Brutalist Monolithic Architecture",
      "Historical Art Deco Preservation"
    ],
    "ans": 0
  },
  {
    "q": "In interior millwork and custom cabinetry, which composite wood substrate provides the smoothest, most uniform surface for high-gloss lacquer and painted cabinetry finishes?",
    "opts": [
      "Medium Density Fiberboard (MDF)",
      "Oriented Strand Board (OSB)",
      "Rotary-cut spruce construction plywood",
      "Rough sawn dimensional Douglas fir lumber"
    ],
    "ans": 0
  },
  {
    "q": "In sustainable interior finishes, what indoor environmental quality certification verifies that paints, sealants, and furnishings emit ultra-low or zero volatile organic compounds (VOCs)?",
    "opts": [
      "GREENGUARD Gold Certification or Cradle to Cradle",
      "Energy Star Appliance rating",
      "WaterSense plumbing certification",
      "FSC Chain of Custody for lumber harvesting"
    ],
    "ans": 0
  }
,
  {
    "q": "In residential and commercial kitchen design, what planning concept states that the sum of the distances between the sink, cooktop, and refrigerator should measure between 12 and 26 feet?",
    "opts": [
      "The Kitchen Work Triangle",
      "The Ergonomic Perimeter Standard",
      "The ADA Countertop Radius",
      "The Galley Circulation Index"
    ],
    "ans": 0
  },
  {
    "q": "Under the Americans with Disabilities Act (ADA) Standards for Accessible Design, what is the minimum turning clear space diameter required for wheelchair maneuverability?",
    "opts": [
      "60 inches (1525 mm) circular turning diameter",
      "36 inches (915 mm) narrow corridor width",
      "48 inches (1220 mm) straight clearance",
      "72 inches (1830 mm) full span dimension"
    ],
    "ans": 0
  },
  {
    "q": "In architectural interior lighting calculations, what unit measures the total illuminance delivered on a working surface per unit area in SI units?",
    "opts": [
      "Lux (lumens per square meter)",
      "Candela (luminous intensity)",
      "Foot-candle (lumens per square foot)",
      "Lumen (total luminous flux output)"
    ],
    "ans": 0
  },
  {
    "q": "According to ASTM E84 (Standard Test Method for Surface Burning Characteristics of Building Materials), what classification is assigned to interior wall finishes with a Flame Spread Index of 0 to 25?",
    "opts": [
      "Class A (Class I)",
      "Class B (Class II)",
      "Class C (Class III)",
      "Class D non-rated"
    ],
    "ans": 0
  },
  {
    "q": "In sustainable commercial interior design (LEED v4), what volatile organic compound category must be strictly minimized in adhesives, sealants, paints, and composite wood?",
    "opts": [
      "VOC (Volatile Organic Compounds) emissions",
      "Noble gas atmospheric particulates",
      "Mineralized silica crystal dust",
      "Natural cellulose moisture vapor"
    ],
    "ans": 0
  },
  {
    "q": "In upholstery and commercial contract textile specifications, what standard abrasion test measures the durability of fabric using back-and-forth wire screen or cotton duck rubs?",
    "opts": [
      "Wyzenbeek Abrasion Test (Double Rubs)",
      "Munsell Chroma Saturation Test",
      "Knoop Microhardness Indentation Test",
      "ASTM D1003 Haze and Luminous Transmittance"
    ],
    "ans": 0
  },
  {
    "q": "In commercial interior construction sets, which architectural drawing provides an orthographic projection of the ceiling layout, showing lighting fixtures, HVAC diffusers, and sprinkler heads?",
    "opts": [
      "Reflected Ceiling Plan (RCP)",
      "Horizontal structural floor framing plan",
      "Exterior elevation detail",
      "Subfloor plumbing riser schematic"
    ],
    "ans": 0
  },
  {
    "q": "In color science used by interior architects, what color system defines any given hue by three coordinates: Hue, Value (lightness), and Chroma (purity/saturation)?",
    "opts": [
      "The Munsell Color System",
      "The CMYK subtractive ink process",
      "The CIE XYZ 1931 coordinate gamut",
      "The NCS Natural Colour System only"
    ],
    "ans": 0
  },
  {
    "q": "In architectural millwork and custom cabinetry, which recognized industry standard manual specifies fabrication tolerances and premium/custom execution grades?",
    "opts": [
      "AWI (Architectural Woodwork Institute) Architectural Woodwork Standards (AWS)",
      "AISC Steel Construction Manual",
      "ACI 318 Concrete Building Code",
      "ASME Boiler and Pressure Vessel Code"
    ],
    "ans": 0
  },
  {
    "q": "In dining space planning, what is the minimum clearance distance recommended between the edge of a dining table and the nearest wall or obstacle to permit an occupant to push back their chair and stand?",
    "opts": [
      "36 inches (915 mm) minimum (44 inches for clear passage)",
      "24 inches (610 mm) tight fit",
      "18 inches (455 mm) compressed space",
      "54 inches (1370 mm) oversized clearance"
    ],
    "ans": 0
  },
  {
    "q": "In biophilic interior design and daylighting strategy, what architectural shading feature regulates glare while bouncing natural daylight deeper into the interior ceiling plenum?",
    "opts": [
      "Interior / exterior Daylight Light Shelf",
      "Blackout motorized roller shades",
      "Solid acoustic barrier partition",
      "Opaque glass transom spandrel"
    ],
    "ans": 0
  },
  {
    "q": "In commercial high-traffic flooring, what durable composite material is made of marble, granite, or quartz chips poured in an epoxy or cementitious matrix and ground flat and polished?",
    "opts": [
      "Terrazzo Flooring",
      "Engineered hardwood floating floor",
      "Homogeneous luxury vinyl tile (LVT)",
      "Vitrified glazed wall porcelain"
    ],
    "ans": 0
  },
  {
    "q": "In contract interior specification, what document itemizes all Furniture, Fixtures, and Equipment (FF&E) with manufacturer names, model numbers, finish codes, and quantities?",
    "opts": [
      "FF&E Specification Schedule",
      "Bill of Lading shipping manifest",
      "Geotechnical soil boring report",
      "Building permit inspection card"
    ],
    "ans": 0
  },
  {
    "q": "What metric measures the effectiveness of an interior partition wall in reducing airborne sound transmission between adjacent hotel guestrooms or private executive offices?",
    "opts": [
      "Sound Transmission Class (STC rating)",
      "Noise Reduction Coefficient (NRC)",
      "Ceiling Attenuation Class (CAC)",
      "Impact Insulation Class (IIC) alone"
    ],
    "ans": 0
  },
  {
    "q": "Under commercial wallcovering standards (WA-101 / ASTM F793), what class of vinyl wallcovering is required for high-traffic corridors, public lobbies, and hospitality corridors?",
    "opts": [
      "Type II Medium / Heavy-Duty Commercial Vinyl (20 oz/linear yard)",
      "Type I Light-Duty Residential Vinyl (15 oz/linear yard)",
      "Type III Extra Heavy Specialty Wall Guard",
      "Uncoated grasscloth wallcovering"
    ],
    "ans": 0
  },
  {
    "q": "In drafting two-point perspective drawings for interior spaces, what visual phenomenon causes all horizontal parallel lines receding away from the observer to converge?",
    "opts": [
      "Vanishing Points located on the Horizon Line (Eye Level)",
      "Focal points located on the station point plan",
      "Cones of vision intersecting ground lines",
      "Isometric parallel projection axes"
    ],
    "ans": 0
  },
  {
    "q": "What is the standard ergonomic counter height for standard residential kitchen base cabinets (measured from finished floor to countertop surface)?",
    "opts": [
      "36 inches (914 mm)",
      "30 inches (762 mm)",
      "42 inches (1067 mm)",
      "28 inches (711 mm)"
    ],
    "ans": 0
  },
  {
    "q": "In high-performance acoustic ceiling systems, what is the typical minimum NRC (Noise Reduction Coefficient) specified for open-plan corporate work environments to mitigate speech distractions?",
    "opts": [
      "0.70 to 0.85 NRC",
      "0.20 to 0.35 NRC",
      "0.05 to 0.15 NRC",
      "0.40 to 0.50 NRC"
    ],
    "ans": 0
  },
  {
    "q": "In commercial window solar control, what fabric property of a motorized roller shade describes the percentage of open space between woven yarns that allows exterior view-through?",
    "opts": [
      "Openness Factor (typically 1%, 3%, 5%, or 10%)",
      "Solar Reflectance Index (SRI)",
      "Visible Light Transmittance (VLT)",
      "U-factor thermal conductivity"
    ],
    "ans": 0
  },
  {
    "q": "When specifying interior paint sheens, which finish offers the highest washability and moisture resistance, making it ideal for commercial restrooms, baseboards, and commercial kitchens?",
    "opts": [
      "Semi-Gloss or High-Gloss enamel",
      "Flat / Matte finish",
      "Eggshell velvet finish",
      "Satin low-luster finish"
    ],
    "ans": 0
  }
],

  "game-development": [
  {
    "q": "In game engine architecture, what is the primary benefit of decoupling the game physics update (fixed delta time) from the rendering frame rate (variable delta time)?",
    "opts": [
      "Ensures deterministic, stable physics simulations and collision resolution regardless of visual rendering lag or variable monitor refresh rates",
      "Eliminates all CPU memory usage during GPU shader execution",
      "Guarantees that multiplayer netcode will never encounter packet loss",
      "Automatically compresses high-resolution 3D textures into MIP maps"
    ],
    "ans": 0
  },
  {
    "q": "Which computational geometry algorithm is standardly used in 3D game engines for narrow-phase convex collision detection between arbitrary convex polyhedra?",
    "opts": [
      "GJK (Gilbert-Johnson-Keerthi) Algorithm and Separating Axis Theorem (SAT)",
      "Dijkstra shortest path algorithm",
      "Bresenham line drawing algorithm",
      "Graham scan convex hull algorithm"
    ],
    "ans": 0
  },
  {
    "q": "In 3D graphics rendering pipelines, what optimization technique discards objects or polygons that are outside the camera’s view volume before rasterization?",
    "opts": [
      "Frustum Culling",
      "Back-face culling on counter-clockwise triangles",
      "Occlusion queries on depth buffer z-tests",
      "Anisotropic texture filtering"
    ],
    "ans": 0
  },
  {
    "q": "In game AI design, what hierarchical decision architecture uses Selector, Sequence, and Decorator nodes to dynamically evaluate NPC actions and behaviors?",
    "opts": [
      "Behavior Trees (BT)",
      "Finite State Machines (FSM) without hierarchy",
      "Minimax search with alpha-beta pruning",
      "Neural network weight quantization"
    ],
    "ans": 0
  },
  {
    "q": "What rendering shader stage executes on individual vertices to transform 3D object-space coordinates into clip space using model-view-projection (MVP) matrices?",
    "opts": [
      "Vertex Shader",
      "Fragment (Pixel) Shader",
      "Tessellation Evaluation Shader",
      "Compute Shader for compute dispatch"
    ],
    "ans": 0
  },
  {
    "q": "In competitive multiplayer games, what client-side networking technique hides network latency by immediately simulating local player inputs before receiving server confirmation?",
    "opts": [
      "Client-Side Prediction with Server Reconciliation",
      "Lockstep peer-to-peer synchronization",
      "TCP packet retransmission wait loops",
      "Complete client authority with zero server validation"
    ],
    "ans": 0
  },
  {
    "q": "What spatial partitioning data structure recursively divides 3D game world space into eight octants to accelerate collision queries, raycasting, and visibility checks?",
    "opts": [
      "Octree",
      "Binary Search Tree (BST)",
      "Quadtree (2D planar only)",
      "Hash Ring with consistent hashing"
    ],
    "ans": 0
  },
  {
    "q": "What 3D asset optimization technique substitutes high-polygon 3D meshes with lower-polygon models as the camera moves further away from the object?",
    "opts": [
      "Level of Detail (LOD) Meshing",
      "Ray-marched signed distance fields",
      "Subdivision surface displacement mapping",
      "Morph target blend shape interpolation"
    ],
    "ans": 0
  },
  {
    "q": "In skeletal animation, what skinning method calculates the deformed position of a vertex by computing a weighted average of transformation matrices from multiple influencing bones?",
    "opts": [
      "Linear Blend Skinning (LBS) or Dual Quaternion Skinning (DQS)",
      "Forward kinematic chain rotation without weighting",
      "Rigid parent attachment to a single root bone",
      "Vertex texture fetch displacement without bones"
    ],
    "ans": 0
  },
  {
    "q": "What visual artifact in real-time rendering occurs when a camera moves faster than the monitor’s refresh cycle, resulting in parts of multiple frames appearing simultaneously on screen?",
    "opts": [
      "Screen Tearing (mitigated by V-Sync, G-Sync, or FreeSync)",
      "Z-fighting due to low depth buffer precision",
      "Aliasing stair-stepping on diagonal geometric edges",
      "Motion blur shutter ghosting"
    ],
    "ans": 0
  }
,
  {
    "q": "In modern game engine architecture (e.g. Unity or Unreal Engine), what is the difference between a variable frame update loop and a fixed-interval physics tick loop?",
    "opts": [
      "Update() executes once per rendered frame with variable deltaTime; FixedUpdate() executes at constant time intervals for deterministic physics calculations",
      "Update() handles multi-threaded network packets; FixedUpdate() runs purely on GPU vertex shaders",
      "FixedUpdate() is executed only once when the game loads into system RAM",
      "Update() can only be called from mobile Android devices"
    ],
    "ans": 0
  },
  {
    "q": "In 3D collision detection pipelines, what two-stage optimization architecture reduces performance overhead when evaluating hundreds of moving rigid bodies?",
    "opts": [
      "Broad-phase collision using spatial partitioning/bounding boxes, followed by narrow-phase precision triangle mesh intersection",
      "Raymarching through screen space followed by depth buffer clearing",
      "Fragment shading depth sorting followed by alpha blending",
      "Euler integration followed by matrix inversion"
    ],
    "ans": 0
  },
  {
    "q": "In modern real-time rendering pipelines, what is the primary advantage of Deferred Shading over traditional Forward Rendering in scenes with many dynamic light sources?",
    "opts": [
      "Lighting calculations decouple from scene geometric complexity with O(geometry + lights) overhead instead of O(geometry * lights)",
      "Deferred Shading eliminates the need for a depth buffer",
      "Deferred Shading natively handles transparent glass surfaces without artifacts",
      "Deferred Shading uses zero video memory on the GPU"
    ],
    "ans": 0
  },
  {
    "q": "What design pattern pre-instantiates and recycles a collection of game objects (like bullets, enemy spawns, and particle effects) to eliminate garbage collection frame-stutters?",
    "opts": [
      "Object Pool Pattern",
      "Observer Pattern",
      "Singleton Pattern",
      "Model-View-ViewModel (MVVM) Pattern"
    ],
    "ans": 0
  },
  {
    "q": "In game AI navigation on complex 3D terrain, which pathfinding algorithm combined with Navigation Meshes (NavMesh) calculates optimal routes using heuristics?",
    "opts": [
      "A* (A-Star) Search Algorithm",
      "Breadth-First Search (BFS) without weights",
      "Linear regression gradient descent",
      "Floyd-Warshall all-pairs shortest path"
    ],
    "ans": 0
  },
  {
    "q": "In character procedural animation, what mathematical technique calculates joint rotation angles along a bone chain so an end effector (like a character foot) matches target ground topography?",
    "opts": [
      "Inverse Kinematics (IK)",
      "Forward Kinematics (FK) alone",
      "Linear Blend Skinning without joints",
      "Quat-to-Euler gimbal translation"
    ],
    "ans": 0
  },
  {
    "q": "In graphics rendering optimization, what technique renders lower-polygon 3D meshes as an object moves further away from the active camera view?",
    "opts": [
      "Level of Detail (LOD) Meshing",
      "Frustum culling without clipping",
      "Texture mipmapping alone",
      "Normal map baking"
    ],
    "ans": 0
  },
  {
    "q": "In fast-paced multiplayer network programming, what client-side technique immediately displays local player inputs before receiving authoritative confirmation from the dedicated game server?",
    "opts": [
      "Client-Side Prediction with Server Reconciliation and Rollback",
      "Lockstep peer-to-peer wait loop",
      "Stop-and-wait ARQ packet protocol",
      "Unicast broadcast pinging without authority"
    ],
    "ans": 0
  },
  {
    "q": "In real-time 3D graphics, what spatial data structure recursively subdivides three-dimensional space into eight octants to accelerate frustum and occlusion culling?",
    "opts": [
      "Octree",
      "Quadtree (2D only)",
      "Binary Heap",
      "Linear Doubly Linked List"
    ],
    "ans": 0
  },
  {
    "q": "What modern data-oriented architectural paradigm organizes games into pure Data Components and Systems operating on contiguous memory arrays for CPU cache optimization?",
    "opts": [
      "Entity Component System (ECS)",
      "Object-Oriented Inheritance Hierarchy",
      "Monolithic God Object Pattern",
      "Procedural Spaghetti Routine"
    ],
    "ans": 0
  },
  {
    "q": "In 3D character rigging, what rotation representation eliminates 'Gimbal Lock' (the loss of one degree of freedom when two rotation axes align)?",
    "opts": [
      "Quaternions (four-dimensional hypercomplex numbers)",
      "Euler angles (Pitch, Yaw, Roll)",
      "3x3 Orthographic projection matrices",
      "Cartesian coordinate offset vectors"
    ],
    "ans": 0
  },
  {
    "q": "In shader development, which shader stage runs per-pixel/fragment on the GPU, calculating final surface color, roughness, and specular reflections based on lighting models?",
    "opts": [
      "Fragment / Pixel Shader",
      "Vertex Shader (operating on mesh vertices)",
      "Tessellation Hull Shader",
      "Geometry Primitive Shader"
    ],
    "ans": 0
  },
  {
    "q": "What technique generates pre-filtered, progressively lower-resolution versions of a texture to prevent aliasing artifacts and reduce memory bandwidth when textured surfaces are viewed at a distance?",
    "opts": [
      "Mipmapping",
      "Alpha testing",
      "Bilinear anisotropic clamping",
      "Render-to-texture blitting"
    ],
    "ans": 0
  },
  {
    "q": "In game AI behavior architecture, what hierarchical structure uses composite selector and sequence nodes with conditions and actions to govern complex NPC decision-making?",
    "opts": [
      "Behavior Trees (BT)",
      "Simple two-state boolean switch",
      "Unsorted FIFO job queue",
      "Hardcoded switch-case statement without hierarchy"
    ],
    "ans": 0
  },
  {
    "q": "In game physics simulation, what parameter measures the elasticity of a collision between two rigid bodies (where 1.0 represents a perfectly elastic collision and 0.0 is completely inelastic)?",
    "opts": [
      "Coefficient of Restitution",
      "Friction friction coefficient",
      "Linear drag damping ratio",
      "Inertia tensor diagonal"
    ],
    "ans": 0
  },
  {
    "q": "What post-processing ambient shading technique darkens creases, corners, and contact points between objects in real time by sampling nearby screen-space depth values?",
    "opts": [
      "Screen Space Ambient Occlusion (SSAO)",
      "Fast Approximate Anti-Aliasing (FXAA)",
      "High Dynamic Range (HDR) Tone Mapping",
      "Chromatic Aberration Fringe"
    ],
    "ans": 0
  },
  {
    "q": "In game audio programming, what spatial filtering technology models how sound waves diffract around human ear pinnae and head geometry to simulate authentic 3D spatialized binaural audio?",
    "opts": [
      "Head-Related Transfer Function (HRTF)",
      "Graphic equalizer peak boost",
      "Dynamic range compression limiter",
      "Flanger phase modulation"
    ],
    "ans": 0
  },
  {
    "q": "In graphics optimization, what is a 'Draw Call' in the context of communicating between the CPU and GPU?",
    "opts": [
      "A command issued by the CPU to the graphics API instructing the GPU to render a specific batch of geometry using designated shader states",
      "A network packet sent to a remote game server requesting player coordinates",
      "A database query retrieving player high scores from cold storage",
      "A hardware interrupt that powers down the computer monitor"
    ],
    "ans": 0
  },
  {
    "q": "In real-time computer graphics, what technique calculates dynamic lighting and reflections by tracing rays of light through the scene geometry in real time?",
    "opts": [
      "Ray Tracing / Path Tracing (e.g. DXR / Vulkan RT)",
      "Precomputed diffuse radiosity lightmaps only",
      "Vertex color baking",
      "Screen-space blit pass"
    ],
    "ans": 0
  },
  {
    "q": "What anti-aliasing technique reduces jagged pixel edges by accumulating and blending sub-pixel jitter samples across consecutive temporal frames?",
    "opts": [
      "Temporal Anti-Aliasing (TAA)",
      "Multi-Sample Anti-Aliasing (MSAA) single-frame only",
      "Supersampling (SSAA) 16x brute force",
      "Nearest-neighbor point sampling"
    ],
    "ans": 0
  }
],

  "fashion-design": [
  {
    "q": "In apparel pattern making, what technique involves moving a bodice dart to a new location (e.g., from waist to armhole or shoulder) while maintaining the original fit and garment silhouette?",
    "opts": [
      "Dart manipulation (pivoting or slash-and-spread method)",
      "Pattern grading across dimensional size ranges",
      "Bias grainline stretching along crosswise grain",
      "French seam encasing on raw curved edges"
    ],
    "ans": 0
  },
  {
    "q": "What is the primary aesthetic and structural difference between garments cut on the \"true bias\" (45-degree angle to warp and weft) versus the straight grain?",
    "opts": [
      "Bias cut garments fluidly drape and contour to body curves with natural elasticity and stretch without requiring Lycra",
      "Bias cut garments are rigid, stiff, and prevent any dimensional elongation",
      "Bias cut fabrics require zero seam allowance and cannot fray along raw edges",
      "Bias grain garments have identical tensile strength in horizontal and vertical axes"
    ],
    "ans": 0
  },
  {
    "q": "In haute couture dressmaking, what hand-sewing technique cleanly encases raw fabric edges inside a narrow double fold, ideal for sheer fabrics like chiffon and organza?",
    "opts": [
      "French seam",
      "Flat-felled seam",
      "Overlock 4-thread serger seam",
      "Bound Hong Kong finish with synthetic webbing"
    ],
    "ans": 0
  },
  {
    "q": "In the color theory of fashion and styling, what term describes the relative purity, intensity, or saturation of a color compared to pure gray?",
    "opts": [
      "Chroma (saturation)",
      "Hue designation",
      "Value (lightness or darkness)",
      "Color temperature (warm versus cool undertone)"
    ],
    "ans": 0
  },
  {
    "q": "Which natural protein fiber obtained from the fleece of sheep possesses natural crimp, moisture-wicking properties, and thermal insulation capabilities?",
    "opts": [
      "Wool (Keratin fiber)",
      "Cotton (Cellulose staple fiber)",
      "Linen (Bast fiber from flax plant)",
      "Silk (Fibroin continuous filament)"
    ],
    "ans": 0
  },
  {
    "q": "In technical garment design, what document provides manufacturers with complete construction details, bill of materials (BOM), measurement grade rules, and stitch specifications?",
    "opts": [
      "Tech Pack (Technical Specification Sheet)",
      "Fashion mood board collage",
      "Trend forecasting palette book",
      "Runway lookbook portfolio"
    ],
    "ans": 0
  },
  {
    "q": "What manufacturing method is used to create proportional increments and decrements to a base sample pattern (usually Size M or 8) to create a full size run (XS to XXL)?",
    "opts": [
      "Pattern Grading",
      "Draping on dress form",
      "Marker planning and fabric spreading",
      "Toile fitting and muslin prototyping"
    ],
    "ans": 0
  },
  {
    "q": "What fashion design silhouette is characterized by a closely fitted bodice that dramatically flares outward from the natural waistline like an inverted letter A?",
    "opts": [
      "A-line silhouette (popularized by Christian Dior in 1955)",
      "Empire waist silhouette with high seam under the bust",
      "Sheath column silhouette with straight vertical lines",
      "Drop-waist flapper silhouette resting on low hips"
    ],
    "ans": 0
  },
  {
    "q": "Which sustainable fashion principle focuses on designing garments with recyclable mono-materials, zero waste patterns, and extended circular product lifecycles?",
    "opts": [
      "Circular Fashion & Closed-Loop Lifecycle Design",
      "Fast fashion rapid inventory obsolescence",
      "Petroleum-based synthetic microplastic weaving",
      "Single-season trend overproduction"
    ],
    "ans": 0
  },
  {
    "q": "In woven fabric structure, what are the lengthwise vertical yarns held under tension on the weaving loom called?",
    "opts": [
      "Warp yarns (ends)",
      "Weft yarns (picks or filling)",
      "Selvedge edge binding threads",
      "Bias diagonal filament yarns"
    ],
    "ans": 0
  }
,
  {
    "q": "In textile science, which basic fabric weave structure is characterized by distinct diagonal lines or wales running across the fabric surface (such as in denim, gabardine, and drill)?",
    "opts": [
      "Twill Weave",
      "Plain Weave (Tabby weave)",
      "Satin Weave",
      "Jacquard Damask Weave"
    ],
    "ans": 0
  },
  {
    "q": "In pattern drafting and garment construction, cutting fabric at a 45-degree angle to the lengthwise warp and crosswise weft grainlines is known as cutting on the:",
    "opts": [
      "True Bias (maximizing drape and fluid stretch)",
      "Straight of Grain (warp direction)",
      "Crossgrain (weft direction)",
      "Selvedge border"
    ],
    "ans": 0
  },
  {
    "q": "In flat pattern making, what triangular fold is stitched into flat fabric to shape a 2D piece around 3D body contours (such as the bust, shoulder, or hips)?",
    "opts": [
      "Dart",
      "Pleat",
      "Gore",
      "Godet"
    ],
    "ans": 0
  },
  {
    "q": "In tailored menswear and jacket construction, what high-end seam finishes raw fabric edges entirely inside a neat double-folded seam without exposing any serging threads?",
    "opts": [
      "French Seam",
      "Standard 4-thread overlock seam",
      "Pinked edge zigzag seam",
      "Raw cut lockstitch seam"
    ],
    "ans": 0
  },
  {
    "q": "In apparel manufacturing, what comprehensive document communicates complete design specifications, technical flats, bill of materials (BOM), stitch types, and points of measurement (POM) to garment factories?",
    "opts": [
      "Tech Pack (Technical Specification Package)",
      "Mood Board collage",
      "Cost of Goods Sold (COGS) ledger",
      "Lookbook marketing catalog"
    ],
    "ans": 0
  },
  {
    "q": "Under the legal criteria established by the Fédération de la Haute Couture et de la Mode in Paris, which requirement must a fashion house fulfill to use the protected label 'Haute Couture'?",
    "opts": [
      "Design made-to-order garments with custom fittings, maintain a Paris atelier with at least 15 full-time staff, and present two collections per year",
      "Sell mass-produced ready-to-wear collections in over 1,000 retail department stores",
      "Produce all garments exclusively with 100% synthetic recycled polyester",
      "Manufacture all clothing lines using automated computer-controlled laser cutters only"
    ],
    "ans": 0
  },
  {
    "q": "In natural textile fibers, which protein fiber harvested from the cocoons of Bombyx mori silkworms is known for its triangular prism-like fiber cross-section that refracts light at different angles?",
    "opts": [
      "Silk",
      "Cotton (cellulose seed hair)",
      "Linen (flax bast fiber)",
      "Hemp fiber"
    ],
    "ans": 0
  },
  {
    "q": "In industrial apparel pattern grading, what process scales a base size pattern (sample size) up and down to create a complete range of commercial sizes?",
    "opts": [
      "Pattern Grading using Cartesian grade rules (X and Y coordinate shifts)",
      "Draping on an adjustable dress form",
      "Rotary die stamping",
      "Fabric bias stretching"
    ],
    "ans": 0
  },
  {
    "q": "In knitwear engineering, what machine metric indicates the number of needles per inch across the needle bed, determining whether a knit is coarse gauge (chunky) or fine gauge?",
    "opts": [
      "Machine Gauge (GG)",
      "Denier filament count",
      "Tex metric weight",
      "NeB yarn count ratio"
    ],
    "ans": 0
  },
  {
    "q": "What sewing machine stitch classification (ISO 4915) uses a top needle thread interlocking with a bottom bobbin thread, forming the standard lockstitch used in universal garment assembly?",
    "opts": [
      "Stitch Type 301 (Lockstitch)",
      "Stitch Type 101 (Single-thread chainstitch)",
      "Stitch Type 401 (Two-thread chainstitch)",
      "Stitch Type 504 (Three-thread overedge)"
    ],
    "ans": 0
  },
  {
    "q": "In garment tailoring, what supportive textile layer is placed between the outer shell fabric and lining of a jacket chest piece to impart structure, shape retention, and roll to the lapel?",
    "opts": [
      "Hair Canvas Interfacing (horsehair or wool canvas)",
      "Thermal polyester batting insulation",
      "Lightweight synthetic tricot knit",
      "Spunbond polypropylene disposable backing"
    ],
    "ans": 0
  },
  {
    "q": "In sustainable textile chemistry, which regenerated cellulosic fiber is produced via a closed-loop solvent spinning process that recycles non-toxic N-Methylmorpholine N-oxide (NMMO) solvent and water?",
    "opts": [
      "Lyocell (TENCEL)",
      "Conventional viscose rayon (xanthate process)",
      "Secondary cellulose acetate",
      "Cuprammonium rayon"
    ],
    "ans": 0
  },
  {
    "q": "In color specification for apparel and footwear manufacturing, which globally recognized color standardization system uses unique alphanumeric codes for textiles (e.g. 19-4052 TCX Classic Blue)?",
    "opts": [
      "Pantone Fashion, Home + Interiors (FHI) System",
      "Federal Standard 595C paint codes",
      "RAL Classic industrial powder coat system",
      "Natural Colour System (NCS) exterior standard"
    ],
    "ans": 0
  },
  {
    "q": "In denim production and durable workwear jeans, what sturdy seam features overlapping folded edges stitched down with two parallel rows of needle stitching on the outside?",
    "opts": [
      "Flat-Felled Seam (Lap Seam)",
      "Open pressed plain seam with overcast edges",
      "Overlocked single safety stitch",
      "Welt seam with exposed raw edges"
    ],
    "ans": 0
  },
  {
    "q": "In textile testing, which metric defines the mass in grams per 9,000 meters of a continuous filament fiber or yarn (commonly used for hosiery, nylon, and polyester)?",
    "opts": [
      "Denier",
      "Tex (grams per 1,000 meters)",
      "Cotton Count (NeC)",
      "Worsted Count"
    ],
    "ans": 0
  },
  {
    "q": "In 3D garment design and haute couture atelier practice, what process shapes uncut fabric (typically cotton muslin/toile) directly on a three-dimensional dress mannequin to develop garment patterns?",
    "opts": [
      "Draping (Moulage)",
      "CAD vector flat drafting",
      "Digitizer table tracing",
      "Computerized marker nesting"
    ],
    "ans": 0
  },
  {
    "q": "What fabric property describes how a textile falls, ripples, and conforms to a three-dimensional form under the influence of gravity?",
    "opts": [
      "Fabric Drape (Drape Coefficient)",
      "Tensile breaking tenacity",
      "Abrasion resistance double rubs",
      "Dimensional shrinkage percentage"
    ],
    "ans": 0
  },
  {
    "q": "Which historical silhouette created by Christian Dior in his 1947 'New Look' collection is characterized by narrow, sloped shoulders, a tiny cinched waist, and a voluminous calf-length full skirt?",
    "opts": [
      "The Hourglass (Corolle) Silhouette",
      "The 1920s Tubular Flapper Silhouette",
      "The 1960s Mini A-Line Trapeze Silhouette",
      "The 1980s Oversized Power Suit Silhouette"
    ],
    "ans": 0
  },
  {
    "q": "In textile dyeing, what method introduces dye pigments directly into liquid chemical polymer dope before extruding filaments through spinnerets, ensuring superior colorfastness against sunlight and bleaching?",
    "opts": [
      "Solution / Dope Dyeing",
      "Piece Dyeing of woven grey goods",
      "Garment Dip Dyeing",
      "Screen Print Overdyeing"
    ],
    "ans": 0
  },
  {
    "q": "In retail fashion merchandising, what pricing model establishes the retail selling price at exactly double the wholesale cost price of a garment?",
    "opts": [
      "Keystone Markup (100% markup on wholesale cost / 50% gross margin)",
      "Loss-Leader Promotional Pricing",
      "Dynamic auction algorithmic pricing",
      "Breakeven penetration pricing"
    ],
    "ans": 0
  }
],

  "robotics-engineering": [
  {
    "q": "In serial robotic arm kinematics, which standard mathematical convention uses four geometric parameters (link length, link twist, link offset, joint angle) to attach coordinate frames to adjacent links?",
    "opts": [
      "Denavit-Hartenberg (DH) Convention",
      "Euler-Lagrange Coordinate Mapping",
      "Rodrigues Rotation Formula",
      "Quaternionic Plücker Transformation"
    ],
    "ans": 0
  },
  {
    "q": "What occurs mathematically at a kinematic singularity in a 6-DOF industrial articulated robot manipulator?",
    "opts": [
      "The manipulator Jacobian matrix loses full rank (determinant equals zero), causing loss of one or more degrees of mobility",
      "The joint motors automatically trip their thermal overload relays",
      "The end-effector payload acceleration drops instantaneously to zero",
      "The inverse kinematics problem yields exactly one unique closed-form solution"
    ],
    "ans": 0
  },
  {
    "q": "Which sampling-based motion planning algorithm is guaranteed to converge to an optimal collision-free path as the number of samples approaches infinity?",
    "opts": [
      "RRT* (Optimal Rapidly-exploring Random Trees)",
      "Standard RRT without tree rewiring",
      "Potential Field Method with local minimum attraction",
      "Dijkstra algorithm on an unweighted grid"
    ],
    "ans": 0
  },
  {
    "q": "In mobile robot navigation, what does the acronym SLAM stand for?",
    "opts": [
      "Simultaneous Localization and Mapping",
      "Synchronous Linear Actuator Measurement",
      "Spatial Lidar Alignment Matrix",
      "Sensor Level Actuation Modeling"
    ],
    "ans": 0
  },
  {
    "q": "What type of robotic gear reducer offers zero-backlash, high gear reduction ratios (up to 160:1) in a compact coaxial design, widely used in collaborative robot joints?",
    "opts": [
      "Harmonic drive (strain wave gearing)",
      "Single-stage spur gear pair",
      "Worm gear with lead angle backlash",
      "Open bevel gear differential assembly"
    ],
    "ans": 0
  },
  {
    "q": "In feedback control of robotic joints, what does the Derivative (D) gain in a PID controller primarily contribute to system dynamics?",
    "opts": [
      "Provides anticipatory damping to reduce overshoot and oscillations in trajectory tracking",
      "Eliminates steady-state position error caused by gravitational torque",
      "Amplifies high-frequency encoder noise to increase joint stiffness",
      "Limits peak motor drive current during stall conditions"
    ],
    "ans": 0
  },
  {
    "q": "In the Robot Operating System (ROS 2), what communication paradigm is used for request-response transactions that execute asynchronously and report continuous feedback progress?",
    "opts": [
      "ROS 2 Actions (Goal, Feedback, Result)",
      "ROS 2 Topics (Publisher-Subscriber stream only)",
      "ROS 2 Services (blocking two-way request without feedback)",
      "ROS 2 Parameter client primitives"
    ],
    "ans": 0
  },
  {
    "q": "What sensor fusion algorithm is standardly used in autonomous robots to combine high-frequency IMU accelerometer/gyroscope readings with wheel odometry and LiDAR pose estimates?",
    "opts": [
      "Extended Kalman Filter (EKF) or Unscented Kalman Filter (UKF)",
      "Fast Fourier Transform (FFT) peak detector",
      "Simple moving average filter with fixed rectangular window",
      "K-means clustering classifier"
    ],
    "ans": 0
  },
  {
    "q": "What control methodology allows an industrial robot to safely interact with a stiff environment by simulating a virtual spring-damper relationship between contact force and end-effector position?",
    "opts": [
      "Impedance / Admittance control",
      "Pure position control with high proportional gain",
      "Open-loop voltage feedforward control",
      "Bang-bang contact switching control"
    ],
    "ans": 0
  },
  {
    "q": "Which representation of 3D spatial rotation avoids the mathematical singularity known as \"gimbal lock\" in robotic orientation modeling?",
    "opts": [
      "Unit Quaternions (Euler parameters)",
      "Roll-Pitch-Yaw (RPY) Euler angles",
      "Direction cosine matrix with Euler ZYZ angles",
      "Axis-angle representation with zero modulus"
    ],
    "ans": 0
  }
,
  {
    "q": "In multi-link serial robot kinematics, what standardized four-parameter mathematical convention systematically establishes coordinate reference frames on each joint link?",
    "opts": [
      "Denavit-Hartenberg (DH) Parameters (link length a, link twist alpha, link offset d, joint angle theta)",
      "Euler-Rodrigues vector transformations",
      "Screw Theory twists and wrenches alone",
      "Cartesian quaternion state vectors"
    ],
    "ans": 0
  },
  {
    "q": "In mobile robotics autonomous navigation, which computational challenge involves a robot constructing a map of an unknown environment while simultaneously tracking its own position within that map?",
    "opts": [
      "Simultaneous Localization and Mapping (SLAM)",
      "Open-loop dead reckoning odometry",
      "Static Dijkstra grid searching",
      "PID speed cruise control"
    ],
    "ans": 0
  },
  {
    "q": "In high-precision industrial robotics (like robotic arm joints), what type of compact gearbox provides zero-backlash, high single-stage gear reduction ratios, and high torque capacity using an elliptical wave generator and flexspline?",
    "opts": [
      "Harmonic Drive (Strain Wave Gearing)",
      "Spur gear transmission set",
      "Bevel gear differential set",
      "Standard worm drive assembly"
    ],
    "ans": 0
  },
  {
    "q": "In closed-loop robot control systems, what does the 'Integral' term in a PID controller eliminate that a pure Proportional controller cannot?",
    "opts": [
      "Steady-state tracking error",
      "High-frequency sensor noise",
      "Overshoot on initial step response",
      "Actuator saturation limits"
    ],
    "ans": 0
  },
  {
    "q": "In mobile robot kinematic modeling, what two-wheeled drive configuration steers a platform by independently varying the rotational speeds of its left and right drive wheels?",
    "opts": [
      "Differential Drive System",
      "Ackermann Steering Geometry (car steering)",
      "Omnidirectional Mecanum Drive with 45-degree rollers",
      "Articulated chassis center pivot"
    ],
    "ans": 0
  },
  {
    "q": "In industrial robotic manipulators, which mathematical matrix relates joint velocities to the resulting linear and angular velocities of the robot end-effector in Cartesian space?",
    "opts": [
      "The Geometric Jacobian Matrix",
      "The Mass / Inertia Tensor Matrix",
      "The Homogeneous Translation Vector",
      "The Stiffness compliance matrix"
    ],
    "ans": 0
  },
  {
    "q": "In modern Robot Operating System 2 (ROS 2), what standardized peer-to-peer data connectivity framework replaces the centralized master node architecture of ROS 1 for reliable real-time communication?",
    "opts": [
      "DDS (Data Distribution Service)",
      "Raw TCP socket broadcasting",
      "HTTP/1.1 RESTful web APIs",
      "Serial RS-232 UART loopback"
    ],
    "ans": 0
  },
  {
    "q": "In robotic sensor fusion, which recursive estimation algorithm estimates the optimal state of a non-linear dynamical system by linearizing about the current estimate using Taylor series expansion?",
    "opts": [
      "Extended Kalman Filter (EKF)",
      "Standard Linear Kalman Filter (LKF)",
      "Simple moving average window",
      "Static lookup table interpolation"
    ],
    "ans": 0
  },
  {
    "q": "Under international safety standards for collaborative robots (ISO/TS 15066 and ISO 10218), what capability allows a cobot to work alongside human operators without physical safety cages?",
    "opts": [
      "Power and Force Limiting (PFL) with integrated torque sensors detecting contact and stopping instantaneously",
      "Operating at maximum industrial speed regardless of human proximity",
      "Disabling all emergency stop buttons during production",
      "Replacing electric servo motors with hydraulic rams"
    ],
    "ans": 0
  },
  {
    "q": "In robotic arm trajectory generation, which polynomial interpolation curve ensures continuous position, velocity, and acceleration (zero jerk at endpoints) for smooth vibration-free arm movement?",
    "opts": [
      "Quintic (5th-degree) Polynomial Spline",
      "Linear ramp trajectory",
      "Quadratic step function",
      "Bang-bang discontinuous acceleration curve"
    ],
    "ans": 0
  },
  {
    "q": "In autonomous mobile robots (AMRs), which sensor technology measures distances by emitting pulsed laser light and calculating the time of flight (ToF) of reflected photon pulses?",
    "opts": [
      "LiDAR (Light Detection and Ranging)",
      "Ultrasonic sonar transducer",
      "Infrared break-beam photodiode",
      "Capacitive proximity sensor"
    ],
    "ans": 0
  },
  {
    "q": "What singular condition occurs in a 6-axis articulated robotic arm when its Jacobian matrix loses rank, causing the robot to lose degrees of freedom in certain Cartesian directions?",
    "opts": [
      "Kinematic Singularity (such as wrist, elbow, or shoulder singularity)",
      "Actuator thermal overload shutdown",
      "Battery voltage brownout",
      "Mechanical gear tooth shear"
    ],
    "ans": 0
  },
  {
    "q": "In robotic gripping and manipulation of delicate, irregularly shaped, or fragile objects (like agricultural produce), which modern technology utilizes flexible elastomeric chambers actuated by pneumatic fluid pressure?",
    "opts": [
      "Soft Robotic Grippers (Pneumatic Network Actuators)",
      "High-pressure hydraulic clamping jaws",
      "Electromagnetic iron plate chucks",
      "Hardened steel vise jaws"
    ],
    "ans": 0
  },
  {
    "q": "In high-rate servo drive feedback, what rotary feedback device generates pulses from a slotted optical disk to determine motor shaft angular velocity and relative position incrementally?",
    "opts": [
      "Optical Incremental Rotary Encoder",
      "Linear variable differential transformer (LVDT)",
      "Strain gauge load cell",
      "Thermocouple probe"
    ],
    "ans": 0
  },
  {
    "q": "In robotic force and compliance control during assembly operations (such as peg-in-hole insertion), what sensor mounted between the robot tool flange and end-effector measures multi-axis forces and moments?",
    "opts": [
      "6-Axis Force / Torque (F/T) Sensor",
      "Single-axis tactile micro-switch",
      "Hall-effect current sensing shunt",
      "Optical CMOS camera sensor"
    ],
    "ans": 0
  },
  {
    "q": "In autonomous ground vehicles and drones, what multi-sensor package integrates 3-axis gyroscopes, 3-axis accelerometers, and 3-axis magnetometers to calculate angular velocity and orientation?",
    "opts": [
      "Inertial Measurement Unit (IMU)",
      "Wheel speed tachometer",
      "Barometric altimeter alone",
      "Thermistor junction array"
    ],
    "ans": 0
  },
  {
    "q": "In industrial robotics specifications, what parameter measures the ability of a robotic manipulator to return to the exact same commanded position repeatedly under identical conditions?",
    "opts": [
      "Repeatability (typically +/- 0.02 mm)",
      "Absolute Accuracy in global CAD space",
      "Payload carrying capacity in kg",
      "Maximum joint reach radius"
    ],
    "ans": 0
  },
  {
    "q": "In autonomous mobile robot local motion planning, which algorithm evaluates admissible translational and rotational velocity pairs in velocity space to navigate around dynamic obstacles without collision?",
    "opts": [
      "Dynamic Window Approach (DWA)",
      "Depth-First Search (DFS)",
      "Breadth-First Search (BFS)",
      "Linear programming simplex method"
    ],
    "ans": 0
  },
  {
    "q": "In computer vision for robotics, what 2D planar fiducial markers with wide black borders and embedded binary code matrices are used for fast, robust 6-DoF camera-to-target pose estimation?",
    "opts": [
      "ArUco / AprilTag Fiducial Markers",
      "Universal Product Code (UPC) retail barcodes",
      "Standard QR codes without pose algorithms",
      "Color lookup test charts"
    ],
    "ans": 0
  },
  {
    "q": "In quadcopter multi-rotor drone robotics, how does a drone execute a yaw rotation (turning left or right around its vertical z-axis) while maintaining a steady hover altitude?",
    "opts": [
      "By accelerating two diagonally opposite clockwise rotors while decelerating the two counter-clockwise rotors, producing a net reactive torque imbalance",
      "By mechanically tilting all four motor shafts using mechanical servo linkages",
      "By deploying aerodynamic airbrakes on one side",
      "By reversing the polarity of all four brushless motors simultaneously"
    ],
    "ans": 0
  }
],

  "petroleum-engineering": [
  {
    "q": "In reservoir engineering, which fundamental empirical relationship governs the flow of a single-phase fluid through a porous rock medium?",
    "opts": [
      "Darcy's Law",
      "Fick's Second Law",
      "Navier-Stokes Equation for viscous free flow",
      "Bernoulli's Conservation Equation"
    ],
    "ans": 0
  },
  {
    "q": "What primary reservoir drive mechanism typically yields the highest ultimate oil recovery percentage (35% to 75%) without artificial stimulation?",
    "opts": [
      "Active bottom or edge water drive",
      "Solution gas drive (depletion drive)",
      "Gas cap expansion drive",
      "Rock and fluid expansion (compaction drive)"
    ],
    "ans": 0
  },
  {
    "q": "In well drilling operations, what critical property of bentonite-based drilling mud enables it to suspend drilled rock cuttings when circulation stops?",
    "opts": [
      "Thixotropy and gel strength formation at rest",
      "Low specific gravity and high thermal conductivity",
      "Zero plastic viscosity and Newtonian behavior",
      "Negative hydrostatic pressure gradient"
    ],
    "ans": 0
  },
  {
    "q": "What well control equipment is installed at the wellhead to shear the drill pipe and completely seal the wellbore during an uncontrolled kick blowout?",
    "opts": [
      "Blind shear rams on the Blowout Preventer (BOP) stack",
      "Annular blowout preventer rubber packing element",
      "Choke manifold adjustable needle orifice valve",
      "Rotary kelly bushing locking slips"
    ],
    "ans": 0
  },
  {
    "q": "In petroleum well logging, what does a spontaneous potential (SP) log curve deflection primarily differentiate in permeable formations?",
    "opts": [
      "Permeable sandstone/limestone beds from impermeable shales",
      "Hydrocarbon density from formation water resistivity",
      "Borehole caliper diameter changes across washouts",
      "Natural formation radioactivity from thorium and potassium"
    ],
    "ans": 0
  },
  {
    "q": "What dimensionless number or metric is used by the American Petroleum Institute to measure how heavy or light a petroleum liquid is compared to water?",
    "opts": [
      "API Gravity (degrees API)",
      "Specific Surface Retention Index",
      "Flash Point Boiling Index",
      "Cetane Number Rating"
    ],
    "ans": 0
  },
  {
    "q": "In hydraulic fracturing stimulation, what is the primary mechanical function of ceramic or sand proppant?",
    "opts": [
      "To hold induced hydraulic fractures open after injection pressure is released, preserving high conductive permeability",
      "To dissolve tight shale rock matrix using exothermic acid reactions",
      "To seal off natural fault lines preventing hydrocarbon migration into the wellbore",
      "To cool bottom-hole temperatures during high-rate slickwater pumping"
    ],
    "ans": 0
  },
  {
    "q": "Which Enhanced Oil Recovery (EOR) technique involves injecting surfactants and polymers to reduce interfacial tension and increase sweep efficiency?",
    "opts": [
      "Chemical EOR (Surfactant-Polymer flooding)",
      "Thermal cyclic steam stimulation (Huff and Puff)",
      "Miscible carbon dioxide (CO2) huff-and-puff",
      "In-situ combustion (fire flooding)"
    ],
    "ans": 0
  },
  {
    "q": "In artificial lift design, which system utilizes downhole multi-stage centrifugal impellers driven by an electric motor connected to a surface power cable?",
    "opts": [
      "Electrical Submersible Pump (ESP)",
      "Sucker rod beam pumping unit (Pumpjack)",
      "Continuous gas lift injection through mandrel valves",
      "Hydraulic jet venturi pump"
    ],
    "ans": 0
  },
  {
    "q": "What is the bubble point pressure (Pb) of a crude oil reservoir fluid at a given reservoir temperature?",
    "opts": [
      "The pressure at which the first infinitesimal bubble of gas comes out of solution from the liquid oil phase",
      "The pressure at which all liquid oil vaporizes completely into dry gas",
      "The hydrostatic pressure exerted by a column of freshwater at reservoir depth",
      "The fracture breakdown pressure of the caprock overlying the reservoir"
    ],
    "ans": 0
  }
,
  {
    "q": "In reservoir engineering, which fundamental law governs the single-phase laminar flow of fluid through porous rock media, relating flow rate to permeability, fluid viscosity, and pressure gradient?",
    "opts": [
      "Darcy's Law",
      "Poiseuille's Capillary Flow Equation",
      "Bernoulli's Frictionless Energy Equation",
      "Navier-Stokes Turbulent Flow Formulation"
    ],
    "ans": 0
  },
  {
    "q": "In borehole petrophysical logging, what open-hole log measures natural radioactivity to distinguish impermeable clay-rich shale formations from permeable sandstone and carbonate reservoirs?",
    "opts": [
      "Gamma Ray Log",
      "Density Log using gamma-gamma Compton scattering",
      "Neutron Porosity Log",
      "Deep Induction Resistivity Log"
    ],
    "ans": 0
  },
  {
    "q": "In petroleum drilling operations, what critical safety equipment mounted on the wellhead contains hydraulic annular and ram preventers to seal the wellbore and prevent an uncontrolled blowout?",
    "opts": [
      "Blowout Preventer (BOP) Stack",
      "Rotary table master bushing",
      "Top drive motor assembly",
      "Mud-gas separator degasser"
    ],
    "ans": 0
  },
  {
    "q": "In reservoir fluid thermodynamics (PVT analysis), what pressure marks the threshold below which dissolved natural gas begins to liberate out of solution from crude oil as a free gas phase?",
    "opts": [
      "Bubble Point Pressure (Saturation Pressure)",
      "Dew Point Pressure",
      "Critical Condensation Pressure",
      "Hydrostatic Wellbore Pressure"
    ],
    "ans": 0
  },
  {
    "q": "In petrophysics, what empirical formula developed by G.E. Archie relates rock electrical resistivity, porosity, and brine resistivity to calculate hydrocarbon saturation (Sw) in uninvaded clean formations?",
    "opts": [
      "Archie's Equation",
      "Kozeny-Carman Porosity-Permeability Equation",
      "Ergun Packed-Bed Friction Equation",
      "Waxman-Smits Shaly Sand Equation"
    ],
    "ans": 0
  },
  {
    "q": "In drilling mud engineering, what synthetic or natural swelling clay mineral is added to water-based drilling muds to build viscosity, provide gel strength, and form an impermeable filter cake on borehole walls?",
    "opts": [
      "Sodium Bentonite (Montmorillonite)",
      "Calcium Carbonate Barite weighting agent",
      "Barium Sulfate (Barite) only",
      "Potassium Chloride brine salt"
    ],
    "ans": 0
  },
  {
    "q": "In petroleum production engineering, what graphical analysis combines the Inflow Performance Relationship (IPR) of the reservoir with the Vertical Lift Performance (VLP) of the tubing to determine the operating production flow rate?",
    "opts": [
      "Nodal Analysis (System Analysis)",
      "Decline Curve Semi-Log Plotting",
      "Material Balance p/z plot",
      "Pressure Transient Horner Plot"
    ],
    "ans": 0
  },
  {
    "q": "What artificial lift system utilizes an electric motor, protector, intake, and multi-stage centrifugal pump submerged at the bottom of the production tubing to lift high volumes of fluid to surface?",
    "opts": [
      "Electric Submersible Pump (ESP)",
      "Sucker Rod Pump (Beam Pumping Unit / Pumpjack)",
      "Progressing Cavity Pump (PCP)",
      "Plunger Lift System"
    ],
    "ans": 0
  },
  {
    "q": "In Enhanced Oil Recovery (EOR), which thermal recovery method injects high-pressure steam into an upper horizontal well to heat viscous bitumen, allowing it to drain into a lower parallel production well by gravity?",
    "opts": [
      "Steam-Assisted Gravity Drainage (SAGD)",
      "Miscible CO2 Gas Injection Flooding",
      "Polymer Gel Waterflood Sweep",
      "Microbial In-Situ Fermentation"
    ],
    "ans": 0
  },
  {
    "q": "In offshore deepwater oil and gas developments, what floating vessel is equipped with processing facilities to receive hydrocarbons from subsea wells, treat them, store crude in its hull, and offload to shuttle tankers?",
    "opts": [
      "FPSO (Floating Production Storage and Offloading) Vessel",
      "Fixed Jacket Offshore Platform",
      "Jack-Up Exploration Rig",
      "Tension Leg Platform (TLP)"
    ],
    "ans": 0
  },
  {
    "q": "In hydraulic fracturing of unconventional tight shale reservoirs, what spherical granular material (such as treated quartz silica sand or ceramic beads) is pumped with fracture fluid to hold open induced fractures?",
    "opts": [
      "Proppant",
      "Friction Reducer Polymer",
      "Biocide bactericide additive",
      "Acid gel breaker"
    ],
    "ans": 0
  },
  {
    "q": "In reservoir production decline analysis, which empirical decline equations developed by J.J. Arps model hydrocarbon production rates using exponential, hyperbolic, or harmonic decline curves?",
    "opts": [
      "Arps Decline Curve Equations",
      "Navier-Stokes Navier Equations",
      "Fick's Diffusion Law Equations",
      "Arrhenius Reaction Kinetics Formula"
    ],
    "ans": 0
  },
  {
    "q": "In well test analysis, what dimensionless parameter represents the mechanical restriction to fluid flow caused by near-wellbore formation damage, mud invasion, or partial penetration (positive value) versus stimulation (negative value)?",
    "opts": [
      "Skin Factor (S)",
      "Tortuosity Coefficient (T)",
      "Cementation Exponent (m)",
      "Saturation Exponent (n)"
    ],
    "ans": 0
  },
  {
    "q": "In directional and horizontal drilling, which technology allows continuous rotation of the drill string while simultaneously steering the bit along a designated trajectory using internal hydraulic steering pads?",
    "opts": [
      "Rotary Steerable Systems (RSS)",
      "Conventional Bent Housing Mud Motor in sliding mode",
      "Whipstock wedge casing diverter",
      "Cable-tool percussion drill string"
    ],
    "ans": 0
  },
  {
    "q": "In natural gas processing and flow assurance in deepwater pipelines, what solid crystalline ice-like compounds form at high pressures and low temperatures when water molecules trap light hydrocarbon gas molecules?",
    "opts": [
      "Gas Hydrates (Clathrate Hydrates)",
      "Asphaltene precipitate sludge",
      "Paraffin wax crystal deposits",
      "Calcium carbonate scale crystals"
    ],
    "ans": 0
  },
  {
    "q": "In crude oil characterization, what standard measurement scale defined by the American Petroleum Institute evaluates how heavy or light a petroleum liquid is compared to water?",
    "opts": [
      "API Gravity (degrees API)",
      "Baumé Specific Gravity Index",
      "Saybolt Universal Seconds (SUS)",
      "Centipoise Dynamic Viscosity"
    ],
    "ans": 0
  },
  {
    "q": "In deep well casing program design, which structural casing string is cemented from surface to protect shallow freshwater aquifers from drilling contamination and support subsequent BOP equipment?",
    "opts": [
      "Surface Casing",
      "Conductor Pipe (Drive Pipe)",
      "Intermediate Casing",
      "Production Liner String"
    ],
    "ans": 0
  },
  {
    "q": "What well stimulation technique injects hydrochloric acid (HCl) or mud acid (HCl/HF) at pressures below the formation fracture pressure to dissolve carbonate minerals and bypass near-wellbore skin damage?",
    "opts": [
      "Matrix Acidizing",
      "Hydraulic Acid Fracturing",
      "Solvent Vapor Extraction",
      "Thermal Combustion Soak"
    ],
    "ans": 0
  },
  {
    "q": "In oil reservoir material balance, what parameter (Bo) expresses the ratio of the volume of crude oil at reservoir temperature and pressure to the volume of that same oil at standard surface conditions (STB)?",
    "opts": [
      "Oil Formation Volume Factor (FVF)",
      "Solution Gas-Oil Ratio (Rs)",
      "Gas Formation Volume Factor (Bg)",
      "Total Isothermal Compressibility (Ct)"
    ],
    "ans": 0
  },
  {
    "q": "In deep offshore subsea production systems, what assembly of subsea valves, chokes, and monitoring instruments installed on a subsea wellhead controls the flow of hydrocarbons from the well into seabed flowlines?",
    "opts": [
      "Subsea Christmas Tree (Wet Tree)",
      "Subsea Manifold Hub",
      "Subsea Sump Caisson",
      "Subsea Riser Base"
    ],
    "ans": 0
  }
],

  "marine-engineering": [
  {
    "q": "In marine diesel propulsion engines, what is the primary thermodynamic cause of turbocharger surging during rapid engine load fluctuations?",
    "opts": [
      "Flow separation on compressor impeller blades when mass flow rate drops below the critical surge limit at high pressure ratio",
      "Excessive scavenging air cooling causing condensation in the cylinder liner",
      "Delayed fuel injection timing causing afterburning in the exhaust manifold",
      "Over-lubrication of the crosshead bearing assembly"
    ],
    "ans": 0
  },
  {
    "q": "Which international maritime regulation governs the standards for prevention of air pollution from ships, including NOx Tier III and SOx emissions?",
    "opts": [
      "MARPOL Annex VI",
      "SOLAS Chapter II-2",
      "STCW Convention Section A-III",
      "MARPOL Annex I"
    ],
    "ans": 0
  },
  {
    "q": "In naval architecture, what does the metacentric height (GM) measure directly regarding a vessel’s seaworthiness?",
    "opts": [
      "Initial static transverse stability at small angles of heel",
      "Total longitudinal bending moment in hogging condition",
      "Dynamic resistance of the bulbous bow in open seaway",
      "Propeller pitch ratio efficiency at design speed"
    ],
    "ans": 0
  },
  {
    "q": "What dangerous phenomenon occurs when local static pressure on a marine propeller blade drops below the saturated vapor pressure of seawater?",
    "opts": [
      "Cavitation, causing blade surface erosion, vibration, and loss of thrust",
      "Galvanic corrosion between bronze propeller and steel hull",
      "Thermal blooming of the stern tube bearing white metal",
      "Hydrodynamic squat in shallow water fairways"
    ],
    "ans": 0
  },
  {
    "q": "In ship auxiliary systems, what is the regulatory maximum oil content permitted in bilge water discharged overboard through an Oily Water Separator (OWS)?",
    "opts": [
      "15 parts per million (ppm)",
      "50 parts per million (ppm)",
      "100 parts per million (ppm)",
      "5 parts per million (ppm)"
    ],
    "ans": 0
  },
  {
    "q": "What type of steering gear system utilizes hydraulic rams controlled by telemotor signals to turn the rudder stock?",
    "opts": [
      "Electro-hydraulic ram type steering gear with hunting gear feedback",
      "Mechanical rack-and-pinion cable steering",
      "Pneumatic vane actuator with open-loop solenoid control",
      "Direct electric chain drive steering"
    ],
    "ans": 0
  },
  {
    "q": "How does an impressed current cathodic protection (ICCP) system prevent galvanic hull corrosion in ocean-going vessels?",
    "opts": [
      "By supplying a controlled direct electrical current from auxiliary power to inert anodes mounted on the hull",
      "By coating the hull exclusively with sacrificial zinc blocks along the keel",
      "By circulating hot freshwater through the sea chest strainers",
      "By grounding the ship electrical system to the propeller shaft slip rings"
    ],
    "ans": 0
  },
  {
    "q": "In marine boiler water chemistry, what is the primary risk of high chloride contamination in feed water?",
    "opts": [
      "Severe pitting corrosion and stress corrosion cracking of boiler tubes",
      "Excessive alkalinity causing caustic gouging of soot blowers",
      "Formation of non-conductive magnetite protective films",
      "Thermal shock to the superheater steam headers"
    ],
    "ans": 0
  },
  {
    "q": "What is the purpose of the emergency generator on commercial merchant vessels under SOLAS Chapter II-1?",
    "opts": [
      "To supply essential power to navigation aids, emergency lighting, steering gear, and fire pumps within 45 seconds of blackout",
      "To assist main engine propulsion during heavy sea state maneuvers",
      "To charge ship battery banks during normal harbour dry-dock operations",
      "To power the galley and crew accommodation air conditioning systems during sea trials"
    ],
    "ans": 0
  },
  {
    "q": "In marine shafting systems, what device prevents seawater from entering the engine room along the rotating propeller shaft?",
    "opts": [
      "Stern tube seal assembly (lip seals with oil barrier pressure)",
      "Centrifugal sea water ballast valve",
      "Intermediate thrust block bearing casing",
      "Coupling flange alignment shim"
    ],
    "ans": 0
  }
,
  {
    "q": "In commercial naval architecture, what vertical distance between the center of gravity (G) and the transverse metacenter (M) governs the initial static stability and righting moment of a ship at small angles of heel?",
    "opts": [
      "Transverse Metacentric Height (GM)",
      "Center of Buoyancy (KB)",
      "Keel to Metacenter Distance (KM)",
      "Freeboard draught margin"
    ],
    "ans": 0
  },
  {
    "q": "In large ocean-going container vessels and crude oil tankers, which prime mover directly drives a fixed-pitch propeller at low rotational speeds (typically 60 to 100 RPM) with thermal efficiencies exceeding 50%?",
    "opts": [
      "Low-Speed Two-Stroke Crosshead Diesel Engine",
      "High-Speed Four-Stroke Trunk Piston Engine",
      "Aviation Aeroderivative Gas Turbine",
      "Triple-Expansion Reciprocating Steam Engine"
    ],
    "ans": 0
  },
  {
    "q": "Under international maritime environmental regulations (MARPOL Annex I), what is the maximum allowable oil content for bilge water discharge into the sea via an approved Oily Water Separator (OWS) and 15 ppm bilge alarm?",
    "opts": [
      "15 parts per million (15 ppm)",
      "100 parts per million (100 ppm)",
      "50 parts per million (50 ppm)",
      "0 parts per million (Zero discharge permitted anywhere)"
    ],
    "ans": 0
  },
  {
    "q": "In marine hull hydrodynamics, what dimensionless number represents the ratio of a vessel's inertial forces to gravitational wave-making forces, used to quantify wave resistance across ship speeds?",
    "opts": [
      "Froude Number (Fn)",
      "Reynolds Number (Rn)",
      "Mach Number",
      "Euler Cavitation Number"
    ],
    "ans": 0
  },
  {
    "q": "To protect a steel ship hull from galvanic corrosion in seawater, what active electronic system supplies protective direct electrical current from auxiliary DC power through inert titanium anodes mounted on the hull?",
    "opts": [
      "Impressed Current Cathodic Protection (ICCP)",
      "Passive zinc sacrificial block anodes alone",
      "Electroless nickel-boron plating",
      "Anodized polyurethane paint coating"
    ],
    "ans": 0
  },
  {
    "q": "Under the IMO Ballast Water Management Convention (BWM Standard D-2), what dual-stage treatment process is widely installed aboard merchant ships to eliminate aquatic invasive species in ballast tanks?",
    "opts": [
      "Mechanical filtration followed by Ultraviolet (UV) irradiation or Electrochlorination",
      "Boiling ballast water using waste exhaust heat",
      "Adding concentrated hydrochloric acid to ballast tanks",
      "Ultrasonic sound blasting in sea chests alone"
    ],
    "ans": 0
  },
  {
    "q": "In marine propulsion plants, what waste heat recovery equipment installed in the diesel engine exhaust uptake generates auxiliary steam while the vessel is underway at sea?",
    "opts": [
      "Exhaust Gas Economizer (Waste Heat Boiler)",
      "Auxiliary Oil-Fired Package Boiler",
      "Charge Air Cooler Radiator",
      "Jacket Water Expansion Tank"
    ],
    "ans": 0
  },
  {
    "q": "In marine heavy fuel oil (HFO) treatment systems, what high-speed centrifugal separation equipment continuously removes water and abrasive catalytic fines (aluminum and silicon oxides) prior to engine combustion?",
    "opts": [
      "Centrifugal Fuel Purifier (Centrifuge)",
      "Static gravity settling filter basket",
      "Magnetic duplex wire strainer",
      "Coalescing cartridge element"
    ],
    "ans": 0
  },
  {
    "q": "On a commercial ship steering gear system, what dual-circuit hydraulic mechanism turns the heavy rudder stock in response to bridge helm commands under SOLAS regulations?",
    "opts": [
      "Electro-Hydraulic Steering Gear (Ram type or Rotary Vane type)",
      "Pneumatic air cylinder winch",
      "Direct mechanical wire cable steering chain",
      "Manual geared worm rack"
    ],
    "ans": 0
  },
  {
    "q": "In marine diesel engine crankshaft dynamics, what device mounted on the free end of the crankshaft suppresses torsional vibration stress spikes to prevent fatigue failure of the crankshaft?",
    "opts": [
      "Torsional Vibration Damper (Viscous or Geislinger spring type)",
      "Engine turning gear motor",
      "Flywheel barring ring",
      "Piston rod crosshead guide shoe"
    ],
    "ans": 0
  },
  {
    "q": "In marine propeller performance, what hydrodynamic phenomenon causes localized boiling of seawater into vapor bubbles on propeller blade surfaces due to extreme low pressure, leading to pitting erosion and noise?",
    "opts": [
      "Propeller Cavitation",
      "Boundary layer laminar flow separation",
      "Hull wake friction shear",
      "Hydraulic water hammer"
    ],
    "ans": 0
  },
  {
    "q": "In emergency shipboard operations, which independent valve allows the main seawater cooling circulating pump to draw water directly from the engine room bilge during catastrophic hull flooding?",
    "opts": [
      "Emergency Bilge Suction Valve (Bilge Injection Valve)",
      "High Sea Chest intake valve",
      "Low Sea Chest intake valve",
      "Overboard overboard discharge valve"
    ],
    "ans": 0
  },
  {
    "q": "Under IMO MARPOL Annex VI regulations, what is the global sulfur cap limit for marine fuel oil used outside designated Emission Control Areas (ECAs) unless an approved exhaust gas cleaning scrubber is operated?",
    "opts": [
      "0.50% m/m (mass by mass)",
      "0.10% m/m (ECA zone limit)",
      "3.50% m/m (historical baseline)",
      "1.00% m/m"
    ],
    "ans": 0
  },
  {
    "q": "In ship machinery spaces, which fire extinguishing system is designed for total flooding of the entire engine room space to extinguish catastrophic class B flammable liquid fuel fires?",
    "opts": [
      "High-Pressure Carbon Dioxide (CO2) Total Flooding System",
      "Portable dry powder cartridge extinguisher",
      "Fixed seawater sprinkler deluge system",
      "Compressed natural air foam cannon"
    ],
    "ans": 0
  },
  {
    "q": "In marine stern tube assemblies, what bearings support the propeller shaft and maintain a watertight seal where the shaft exits the hull into open sea?",
    "opts": [
      "Stern Tube Bearings (white-metal lined or water-lubricated non-metallic bearings) and Face Seals",
      "Standard automotive tapered roller bearings",
      "Unsealed ball journal bearings",
      "Flexible neoprene expansion bellows only"
    ],
    "ans": 0
  },
  {
    "q": "Onboard modern merchant vessels, which freshwater generation system utilizes waste heat from the main engine jacket cooling water (at ~80°C) under high vacuum to boil seawater at low temperatures?",
    "opts": [
      "Vacuum Flash / Plate-Type Freshwater Evaporator",
      "High-pressure reverse osmosis membrane rack alone",
      "Solar thermal distillation trough",
      "Atmospheric steam heating kettle"
    ],
    "ans": 0
  },
  {
    "q": "Under SOLAS maritime safety standards, what is the maximum time allowed for the ship emergency diesel generator (EDG) to automatically start, connect to the emergency switchboard, and supply critical safety loads following a total blackout?",
    "opts": [
      "45 seconds",
      "5 minutes",
      "10 minutes",
      "30 seconds"
    ],
    "ans": 0
  },
  {
    "q": "In large container ships and LNG carriers with massive electrical distribution requirements, what electrical system voltage is standardly used for main generators and bow thruster motors to reduce cable cross-sections and copper weight?",
    "opts": [
      "Medium / High Voltage (6.6 kV or 11 kV AC)",
      "Low voltage 440 V 3-phase 60 Hz",
      "Standard domestic 230 V 50 Hz",
      "Low voltage 110 V DC battery bank"
    ],
    "ans": 0
  },
  {
    "q": "In two-stroke marine crosshead diesel engines, which structural component transfers the linear reciprocating force from the piston rod to the oscillating connecting rod while absorbing high side-thrust forces against the engine frame?",
    "opts": [
      "The Crosshead Assembly (Crosshead pin and guide shoes)",
      "The Gudgeon wrist pin inside the piston skirt",
      "The Crankshaft thrust collar bearing",
      "The Cylinder liner scavenge port ring"
    ],
    "ans": 0
  },
  {
    "q": "What ship maneuvering propulsion unit mounted in a transverse tunnel at the forward bow of a vessel provides lateral thrust to assist docking without requiring tugboats?",
    "opts": [
      "Bow Thruster (Tunnel Thruster)",
      "Main center-line rudder blade",
      "Stern azipod main pod",
      "Kort nozzle shroud"
    ],
    "ans": 0
  }
],

  "chemical-engineering": [
    {
      "q": "In a continuous distillation column operating at steady state, what does a reflux ratio of infinity correspond to in the McCabe-Thiele analysis?",
      "opts": [
        "Total reflux operation yielding the minimum number of theoretical stages with zero net product withdrawal",
        "Minimum reflux operation requiring an infinite number of theoretical stages",
        "Flooding of the distillation column due to excessive vapor velocity",
        "Complete weeping through the sieve trays into the reboiler"
      ],
      "ans": 0
    },
    {
      "q": "For an ideal binary solution undergoing vapor-liquid equilibrium (VLE), which fundamental thermodynamic law states that the partial vapor pressure of each component is equal to the product of its mole fraction in the liquid phase and its pure component saturation vapor pressure?",
      "opts": [
        "Raoult's Law",
        "Henry's Law",
        "Amagat's Law of Partial Volumes",
        "Dalton's Law of Additive Pressures"
      ],
      "ans": 0
    },
    {
      "q": "In chemical reaction engineering, which ideal reactor model is characterized by uniform concentration, temperature, and reaction rate throughout the entire reaction volume at steady state?",
      "opts": [
        "Continuous Stirred Tank Reactor (CSTR)",
        "Plug Flow Reactor (PFR)",
        "Differential Packed Bed Reactor",
        "Semi-batch Gas-Liquid Sparged Column"
      ],
      "ans": 0
    },
    {
      "q": "In heat transfer operations, what temperature difference metric accounts for the non-linear temperature profiles of hot and cold fluids along a counter-current heat exchanger?",
      "opts": [
        "Logarithmic Mean Temperature Difference (LMTD)",
        "Arithmetic Mean Temperature Difference (AMTD)",
        "Geometric Mean Temperature Ratio (GMTR)",
        "Harmonic Mean Heat Flux Difference"
      ],
      "ans": 0
    },
    {
      "q": "What dimensionless number represents the ratio of convective mass transfer to molecular mass diffusivity in boundary layer mass transfer?",
      "opts": [
        "Sherwood Number (Sh)",
        "Schmidt Number (Sc)",
        "Prandtl Number (Pr)",
        "Nusselt Number (Nu)"
      ],
      "ans": 0
    },
    {
      "q": "What dimensionless number represents the ratio of momentum diffusivity (kinematic viscosity) to molecular mass diffusivity in chemical fluid transport?",
      "opts": [
        "Schmidt Number (Sc)",
        "Lewis Number (Le)",
        "Biot Number (Bi)",
        "Peclet Number (Pe)"
      ],
      "ans": 0
    },
    {
      "q": "In chemical process safety and hazard analysis, what structured, systematic team-based methodology uses guide words (such as NO, MORE, LESS, AS WELL AS) to identify process deviation risks?",
      "opts": [
        "Hazard and Operability Study (HAZOP)",
        "Failure Mode and Effects Analysis (FMEA)",
        "Fault Tree Analysis (FTA)",
        "Layer of Protection Analysis (LOPA)"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary thermodynamic criterion for phase and chemical reaction equilibrium at constant temperature and pressure?",
      "opts": [
        "The total Gibbs free energy of the system reaches a minimum (dG = 0)",
        "The total enthalpy of the system reaches zero (dH = 0)",
        "The system entropy decreases to zero",
        "The Helmholtz free energy becomes positive infinite"
      ],
      "ans": 0
    },
    {
      "q": "In fluid mechanics applied to packed bed reactors and filtration units, which classic equation describes the pressure drop of fluid flowing through a porous packed bed over both laminar and turbulent regimes?",
      "opts": [
        "Ergun Equation",
        "Hagen-Poiseuille Equation",
        "Colebrook-White Formula",
        "Darcy-Weisbach Equation for Smooth Pipes"
      ],
      "ans": 0
    },
    {
      "q": "In centrifugal pump operation within a chemical plant, what condition occurs when local static fluid pressure drops below the liquid's vapor pressure, causing vapor bubbles that collapse violently and erode the impeller?",
      "opts": [
        "Cavitation",
        "Hydraulic Hammer",
        "Channeling",
        "Boundary Layer Separation"
      ],
      "ans": 0
    },
    {
      "q": "In gas absorption and stripping columns, what condition occurs when upward vapor velocity prevents downward liquid flow, causing liquid to accumulate and flood the column trays or packing?",
      "opts": [
        "Flooding",
        "Weeping",
        "Entrainment",
        "Coning"
      ],
      "ans": 0
    },
    {
      "q": "In heterogeneous catalysis, which dimensionless parameter compares the characteristic reaction rate inside a porous catalyst pellet to the internal pore diffusion rate?",
      "opts": [
        "Thiele Modulus",
        "Damkohler Number",
        "Weisz-Prater Criterion",
        "Hatta Number"
      ],
      "ans": 0
    },
    {
      "q": "For an isothermal irreversible first-order liquid-phase reaction, which statement correctly compares the required reactor volumes of a single CSTR versus a single PFR to achieve the same fractional conversion X?",
      "opts": [
        "The CSTR requires a larger reactor volume than the PFR because the CSTR operates entirely at the lowest exit concentration",
        "The PFR requires a larger reactor volume than the CSTR due to plug velocity profiles",
        "Both reactors require the exact same volume regardless of reaction order",
        "The CSTR requires a smaller volume because of continuous mechanical agitation"
      ],
      "ans": 0
    },
    {
      "q": "In chemical process dynamics, which feedback control mode provides corrective action proportional to the rate of change of the controlled process error, adding anticipatory phase lead to stabilize sluggish loops?",
      "opts": [
        "Derivative (D) Action",
        "Integral (I) Action",
        "Proportional (P) Offset",
        "Inverse Response Feedforward"
      ],
      "ans": 0
    },
    {
      "q": "What classic graphical construction method uses a McCabe-Thiele diagram on an x-y equilibrium curve to step off the number of theoretical equilibrium stages for binary distillation?",
      "opts": [
        "Stepping between the equilibrium curve, operating lines (rectifying and stripping), and the feed (q) line",
        "Integrating the Fenske-Underwood-Gilliland shortcut equations graphically",
        "Constructing tie-lines on a ternary equilateral Gibbs triangle",
        "Plotting temperature versus log vapor pressure for pure components"
      ],
      "ans": 0
    },
    {
      "q": "In non-ideal solution thermodynamics, what property is defined as the ratio of a component's fugacity in solution to its mole fraction times its standard-state fugacity?",
      "opts": [
        "Activity Coefficient (γ)",
        "Compressibility Factor (Z)",
        "Poynting Correction Factor",
        "Acentric Factor (ω)"
      ],
      "ans": 0
    },
    {
      "q": "Which transport law states that molar diffusion flux is directly proportional to the negative concentration gradient under steady-state molecular diffusion?",
      "opts": [
        "Fick's First Law of Diffusion",
        "Fourier's Law of Thermal Conduction",
        "Newton's Law of Fluid Viscosity",
        "Ohm's Law of Charge Transport"
      ],
      "ans": 0
    },
    {
      "q": "In shell-and-tube heat exchanger design, what components are installed inside the shell to support tube bundles and force cross-flow turbulence to increase shell-side heat transfer coefficients?",
      "opts": [
        "Segmental Baffles",
        "Tie Rods and Spacers",
        "Impingement Plates",
        "Floating Head Covers"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary thermodynamic effect observed when an ideal gas undergoes a throttling process through a porous plug or partially open adiabatic valve (isenthalpic expansion)?",
      "opts": [
        "The temperature remains completely unchanged because the Joule-Thomson coefficient of an ideal gas is identically zero",
        "The temperature always drops dramatically due to PV expansion work",
        "The gas condenses completely into saturated liquid",
        "The temperature increases directly proportional to pressure drop"
      ],
      "ans": 0
    },
    {
      "q": "In chemical reaction kinetics, what equation models the exponential temperature dependency of reaction rate constants k = A · exp(-Ea / RT)?",
      "opts": [
        "Arrhenius Equation",
        "Michaelis-Menten Equation",
        "Van 't Hoff Isochore",
        "Eyring Transition State Equation"
      ],
      "ans": 0
    },
    {
      "q": "In multi-component chemical process flowsheeting, what is the purpose of introducing a purge stream from a recycle loop?",
      "opts": [
        "To prevent the continuous accumulation and build-up of inert or non-reacting impurities in the recycle loop",
        "To boost the total per-pass conversion of the primary reactants",
        "To cool down the reactor effluent without requiring an external heat exchanger",
        "To maintain turbulent Reynolds numbers inside the recycle compressor"
      ],
      "ans": 0
    },
    {
      "q": "In liquid-liquid extraction processes, what parameter describes the ratio of the solute's weight fraction in the extract phase to its weight fraction in the raffinate phase at equilibrium?",
      "opts": [
        "Distribution Coefficient (Partition Ratio)",
        "Selectivity Index",
        "Relative Volatility",
        "Hatta Number"
      ],
      "ans": 0
    },
    {
      "q": "What term describes the minimum suction pressure required at the suction flange of a centrifugal pump to prevent vapor formation and cavitation?",
      "opts": [
        "Net Positive Suction Head Required (NPSHR)",
        "Total Dynamic Head (TDH)",
        "Specific Speed Head (SSH)",
        "Static Suction Lift (SSL)"
      ],
      "ans": 0
    },
    {
      "q": "In chemical process instrumentation, which type of control loop measures an incoming disturbance before it enters the process unit and takes corrective control action before an error occurs in the output variable?",
      "opts": [
        "Feedforward Control",
        "Feedback Control",
        "Cascade Master Loop",
        "Split-Range Control"
      ],
      "ans": 0
    },
    {
      "q": "In batch reactor safety engineering, what hazard occurs when an exothermic reaction's rate of heat generation exceeds the cooling jacket's maximum heat removal capacity, causing accelerating temperature and pressure rises?",
      "opts": [
        "Thermal Runaway Reaction",
        "Deflagration-to-Detonation Transition",
        "Vapor Cloud Explosion (VCE)",
        "Boiling Liquid Expanding Vapor Explosion (BLEVE)"
      ],
      "ans": 0
    },
    {
      "q": "What equation in multi-component flash distillation is solved iteratively for the vapor fraction ψ = V/F given feed composition zi and equilibrium K-values?",
      "opts": [
        "Rachford-Rice Equation",
        "Fenske Equation",
        "Underwood Equation",
        "Gilliland Correlation"
      ],
      "ans": 0
    },
    {
      "q": "In mass transfer across gas-liquid interfaces, which theoretical model assumes that the entire mass transfer resistance resides in two stagnant thin fluid films on either side of the interface with equilibrium at the contact surface?",
      "opts": [
        "Whitman Two-Film Theory",
        "Higbie Penetration Theory",
        "Danckwerts Surface Renewal Theory",
        "Boundary Layer Shear Theory"
      ],
      "ans": 0
    },
    {
      "q": "In industrial ammonia synthesis via the exothermic reversible Haber-Bosch reaction [N2 + 3H2 ⇌ 2NH3], why is the commercial process operated at an elevated temperature (400–500°C) despite Le Chatelier's principle favoring lower temperatures for equilibrium conversion?",
      "opts": [
        "To achieve an economically acceptable reaction rate over the iron-based catalyst, compensating with high pressure (150–250 bar) to shift equilibrium favorably",
        "Because ammonia decomposes spontaneously at temperatures below 300°C",
        "To prevent condensation of toxic liquid nitrogen in the converter beds",
        "Because nitrogen and hydrogen form an explosive solid hydrate at lower temperatures"
      ],
      "ans": 0
    },
    {
      "q": "In membrane separations such as reverse osmosis, what phenomenon occurs when rejected solute molecules accumulate at the active membrane surface, creating an elevated boundary concentration that opposes forward permeation flux?",
      "opts": [
        "Concentration Polarization",
        "Donnan Exclusion",
        "Fouling Gel Desorption",
        "Electro-osmotic Dewatering"
      ],
      "ans": 0
    },
    {
      "q": "What dimensionless number characterizes the ratio of buoyant forces to viscous forces in natural (free) convective heat transfer in fluids?",
      "opts": [
        "Grashof Number (Gr)",
        "Rayleigh Number (Ra)",
        "Reynolds Number (Re)",
        "Froude Number (Fr)"
      ],
      "ans": 0
    }
  ],
  "environmental-engineering": [
  {
    "q": "In wastewater engineering, what parameter measures the quantity of dissolved oxygen consumed by microorganisms while biologically decomposing organic matter over 5 days at 20°C?",
    "opts": [
      "Biochemical Oxygen Demand (BOD5)",
      "Chemical Oxygen Demand (COD)",
      "Total Organic Carbon (TOC)",
      "Dissolved Oxygen Saturation (DO)"
    ],
    "ans": 0
  },
  {
    "q": "What is the primary biological mechanism in secondary activated sludge wastewater treatment?",
    "opts": [
      "Aerobic biological decomposition of dissolved organics by a suspended culture of microorganisms forming settleable flocs",
      "Anaerobic methane gas generation in sealed digestor tanks",
      "Coagulation and precipitation of colloids using alum salts",
      "Disinfection of enteric pathogens via ultraviolet irradiation"
    ],
    "ans": 0
  },
  {
    "q": "In air pollution control, which industrial control device uses high-voltage electrostatic charges to remove particulate matter (PM2.5 / PM10) from exhaust gas streams?",
    "opts": [
      "Electrostatic Precipitator (ESP)",
      "Fabric Filter Baghouse",
      "Wet Venturi Scrubber",
      "Thermal Catalytic Oxidizer"
    ],
    "ans": 0
  },
  {
    "q": "What physical law governs the steady-state volumetric rate of groundwater flow through porous soil media under a hydraulic gradient?",
    "opts": [
      "Darcy's Law",
      "Fick's Second Law of Diffusion",
      "Stokes' Law of Sedimentation",
      "Poiseuille's Capillary Flow Equation"
    ],
    "ans": 0
  },
  {
    "q": "In municipal drinking water treatment, which chemical coagulant is most widely dosed in rapid-mix tanks to destabilize negative surface charges on colloidal clay particles?",
    "opts": [
      "Alum [Aluminum Sulfate, Al2(SO4)3·14H2O] or Ferric Chloride",
      "Sodium Hydroxide (Caustic Soda)",
      "Activated Powdered Carbon",
      "Calcium Hypochlorite"
    ],
    "ans": 0
  },
  {
    "q": "What engineered barrier system is mandatory at the base of modern sanitary municipal solid waste (MSW) landfills to protect groundwater aquifers?",
    "opts": [
      "Composite Liner (HDPE Geomembrane over low-permeability compacted clay) with Leachate Collection System",
      "Single layer of uncompacted sandy gravel",
      "Permeable geotextile fabric directly on bedrock",
      "Concrete slab with unsealed expansion joints"
    ],
    "ans": 0
  },
  {
    "q": "In water quality analysis, how does Chemical Oxygen Demand (COD) typically compare to Biochemical Oxygen Demand (BOD5) for the same industrial wastewater sample?",
    "opts": [
      "COD is always higher than or equal to BOD5 because it oxidizes chemically both biodegradable and non-biodegradable organics",
      "COD is always lower than BOD5 because chemicals cannot oxidize carbohydrates",
      "COD and BOD5 are strictly equal in all natural waters",
      "COD is zero for any wastewater containing toxic metals"
    ],
    "ans": 0
  },
  {
    "q": "What atmospheric phenomenon traps ground-level air pollutants in valleys during cold, calm nights when a layer of warm air covers cooler air near the ground?",
    "opts": [
      "Thermal Temperature Inversion",
      "Atmospheric Adiabatic Lapse Expansion",
      "Coriolis Deflection",
      "Monsoon Convection"
    ],
    "ans": 0
  },
  {
    "q": "In environmental toxicology, what metric represents the single calculated chemical dose that proves lethal to exactly 50% of an animal test population?",
    "opts": [
      "Lethal Dose 50 (LD50)",
      "No Observed Adverse Effect Level (NOAEL)",
      "Reference Dose (RfD)",
      "Maximum Contaminant Level Goal (MCLG)"
    ],
    "ans": 0
  },
  {
    "q": "Which greenhouse gas emitted primarily by agricultural livestock, rice paddies, and anaerobic landfill decay has a 100-year Global Warming Potential ~28-36 times greater than CO2?",
    "opts": [
      "Methane (CH4)",
      "Nitrous Oxide (N2O)",
      "Sulfur Hexafluoride (SF6)",
      "Carbon Monoxide (CO)"
    ],
    "ans": 0
  },
  {
    "q": "In environmental legislation, what comprehensive assessment document evaluates potential environmental, ecological, and socioeconomic impacts before executing a major infrastructure project?",
    "opts": [
      "Environmental Impact Assessment (EIA) / Environmental Impact Statement (EIS)",
      "Toxic Release Inventory (TRI) Report",
      "Safety Data Sheet (SDS)",
      "Pollution Prevention Plan (P2)"
    ],
    "ans": 0
  },
  {
    "q": "What biological nutrient removal process converts toxic ammonia (NH3/NH4+) into nitrate (NO3-) in wastewater under aerobic conditions?",
    "opts": [
      "Nitrification (catalyzed by Nitrosomonas and Nitrobacter bacteria)",
      "Denitrification (heterotrophic anoxic reduction)",
      "Anammox process",
      "Ammonification of organic nitrogen"
    ],
    "ans": 0
  },
  {
    "q": "In drinking water disinfection, what carcinogenic disinfection byproducts (DBPs) are formed when free chlorine reacts with natural organic matter (humic acids)?",
    "opts": [
      "Trihalomethanes (THMs) and Haloacetic Acids (HAAs)",
      "Polychlorinated Biphenyls (PCBs)",
      "Per- and Polyfluoroalkyl Substances (PFAS)",
      "Polycyclic Aromatic Hydrocarbons (PAHs)"
    ],
    "ans": 0
  },
  {
    "q": "Which soil remediation technology utilizes living green plants to extract, stabilize, or degrade heavy metals and organic contaminants from polluted soils?",
    "opts": [
      "Phytoremediation",
      "Soil Vapor Extraction (SVE)",
      "In-Situ Chemical Oxidation (ISCO)",
      "Thermal Desorption Pyrolysis"
    ],
    "ans": 0
  },
  {
    "q": "What physical law predicts the terminal settling velocity of discrete suspended solid particles in an ideal sedimentation basin?",
    "opts": [
      "Stokes' Law",
      "Bernoulli's Principle",
      "Henry's Law of Gas Solubility",
      "Fanning Friction Equation"
    ],
    "ans": 0
  },
  {
    "q": "In hazardous waste management under US RCRA regulations, which of the following is NOT one of the four characteristic hazardous waste criteria?",
    "opts": [
      "Radioactivity (regulated under Atomic Energy Act, not RCRA Characteristic)",
      "Ignitability",
      "Corrosivity",
      "Reactivity / Toxicity"
    ],
    "ans": 0
  },
  {
    "q": "What air pollution control device absorbs acidic gases such as Sulfur Dioxide (SO2) from coal-fired power plant flue gas by spraying a calcium limestone slurry?",
    "opts": [
      "Flue Gas Desulfurization (FGD) Wet Scrubber",
      "Cyclonic Dust Separator",
      "Biofilter Compost Bed",
      "Selective Catalytic Reduction (SCR) Chamber"
    ],
    "ans": 0
  },
  {
    "q": "In lake ecology, what condition characterized by excessive nutrient enrichment (phosphorus/nitrogen) triggers harmful algal blooms and benthic oxygen depletion?",
    "opts": [
      "Eutrophication",
      "Oligotrophication",
      "Acidification",
      "Thermal Stratification"
    ],
    "ans": 0
  },
  {
    "q": "What membrane filtration technology operates under high hydrostatic pressure exceeding osmotic pressure to desalt seawater and remove dissolved inorganic ions?",
    "opts": [
      "Reverse Osmosis (RO)",
      "Ultrafiltration (UF)",
      "Microfiltration (MF)",
      "Gravity Sand Filtration"
    ],
    "ans": 0
  },
  {
    "q": "In environmental monitoring, what persistent synthetic 'forever chemicals' with strong carbon-fluorine bonds are widely detected in groundwater due to aqueous firefighting foams?",
    "opts": [
      "PFAS (Per- and Polyfluoroalkyl Substances: PFOA, PFOS)",
      "Organophosphate Pesticides (Malathion)",
      "Chlorofluorocarbons (CFC-11)",
      "Benzene, Toluene, Ethylbenzene, Xylene (BTEX)"
    ],
    "ans": 0
  },
  {
    "q": "What secondary biological treatment unit trickles settled wastewater over an open bed of rocks or corrugated plastic media coated with a microbial slime layer?",
    "opts": [
      "Trickling Filter (Biofilter)",
      "Upflow Anaerobic Sludge Blanket (UASB)",
      "Oxidation Ditch",
      "Sequencing Batch Reactor (SBR)"
    ],
    "ans": 0
  },
  {
    "q": "In air pollution modeling, which mathematical model assumes pollutants disperse downwind in a steady-state cone with normal distribution in vertical and lateral directions?",
    "opts": [
      "Gaussian Plume Model",
      "Box Model of Ambient Smog",
      "Eulerian Photochemical Grid Model",
      "Lagrangian Particle Dispersion Trajectory"
    ],
    "ans": 0
  },
  {
    "q": "What is the primary function of a selective catalytic reduction (SCR) system on internal combustion exhaust stacks?",
    "opts": [
      "Reducing Nitrogen Oxides (NOx) to harmless N2 and H2O using ammonia or urea as a reducing agent",
      "Converting carbon dioxide into synthetic methanol",
      "Filtering coarse fly ash particles larger than 50 microns",
      "Oxidizing carbon monoxide into elemental diamond"
    ],
    "ans": 0
  },
  {
    "q": "In solid waste management, what metric represents the ratio of solid waste mass diverted from landfills through recycling and composting to total waste generated?",
    "opts": [
      "Diversion Rate (%)",
      "Compaction Ratio",
      "Generation Rate per Capita",
      "Landfill Tipping Fee"
    ],
    "ans": 0
  },
  {
    "q": "What gas is produced in the largest quantity during anaerobic digestion of municipal sewage sludge (approx. 60-65% CH4 and 35-40% CO2)?",
    "opts": [
      "Biogas (Methane and Carbon Dioxide)",
      "Pure Hydrogen Gas",
      "Nitrogen Dioxide",
      "Hydrogen Cyanide"
    ],
    "ans": 0
  },
  {
    "q": "In hydrology and stormwater engineering, what standard equation estimates peak stormwater runoff discharge Q = C * I * A for small urban drainage basins?",
    "opts": [
      "The Rational Method",
      "Manning's Equation for Open Channels",
      "Unit Hydrograph Convolution",
      "Muskingum River Flood Routing"
    ],
    "ans": 0
  },
  {
    "q": "Which international environmental treaty established in 1987 phase out chlorofluorocarbons (CFCs) and halons to protect the stratospheric ozone layer?",
    "opts": [
      "The Montreal Protocol",
      "The Kyoto Protocol",
      "The Paris Climate Agreement",
      "The Basel Convention on Transboundary Wastes"
    ],
    "ans": 0
  },
  {
    "q": "In groundwater contaminant transport, what process causes a dissolved contaminant plume to spread longitudinally and transversely faster than average advective pore velocity?",
    "opts": [
      "Hydrodynamic Dispersion (Molecular Diffusion + Mechanical Dispersion)",
      "Sorption Equilibrium Isotherm",
      "Radioactive Half-life Decay",
      "Capillary Action Wicking"
    ],
    "ans": 0
  },
  {
    "q": "What is the Sludge Volume Index (SVI) used to assess in an activated sludge wastewater treatment plant?",
    "opts": [
      "Settling characteristics and compactibility of activated sludge in secondary clarifiers (mL/g)",
      "Total bacterial count per liter of mixed liquor",
      "Rate of biological nitrification kinetics",
      "Heavy metal adsorption capacity on cell walls"
    ],
    "ans": 0
  },
  {
    "q": "In acoustics and environmental noise control, what frequency-weighting network mimics the human ear's sensitivity across conversational frequencies when reporting dBA decibels?",
    "opts": [
      "A-Weighting Curve",
      "C-Weighting Curve for Explosive Blast",
      "Z-Weighting Linear Response",
      "Octave Band Center Filter"
    ],
    "ans": 0
  }
],
  "biomedical-engineering": [
  {
    "q": "In biomedical engineering, what property defines a biomaterial's ability to perform its desired function without inducing adverse local or systemic host responses?",
    "opts": [
      "Biocompatibility",
      "Bioactivity",
      "Bioerosion Rate",
      "Hemolysis Index"
    ],
    "ans": 0
  },
  {
    "q": "Which cardiac diagnostic signal records the electrical depolarization and repolarization waves of the human heart myocardium from skin electrodes?",
    "opts": [
      "Electrocardiogram (ECG / EKG)",
      "Electromyogram (EMG)",
      "Electroencephalogram (EEG)",
      "Electrooculogram (EOG)"
    ],
    "ans": 0
  },
  {
    "q": "In clinical Magnetic Resonance Imaging (MRI), what atomic nucleus is most commonly imaged due to its high abundance in human biological tissues?",
    "opts": [
      "Hydrogen-1 (Proton, 1H)",
      "Carbon-12 (12C)",
      "Oxygen-16 (16O)",
      "Sodium-23 (23Na)"
    ],
    "ans": 0
  },
  {
    "q": "What phenomenon describes the direct structural and functional connection between living bone tissue and the surface of a load-bearing implant (e.g. titanium dental/orthopedic screws)?",
    "opts": [
      "Osseointegration",
      "Fibrous Encapsulation",
      "Epithelial Invagination",
      "Galvanic Corrosion"
    ],
    "ans": 0
  },
  {
    "q": "In bioinstrumentation, what circuit amplifier is standardly used as the front-end to reject high common-mode 50/60 Hz power-line interference while amplifying microvolt biopotentials?",
    "opts": [
      "Instrumentation Amplifier with High Common-Mode Rejection Ratio (CMRR)",
      "Single-Ended Inverting Op-Amp",
      "Current-to-Voltage Transimpedance Buffer",
      "Passive Diode Peak Detector"
    ],
    "ans": 0
  },
  {
    "q": "What is the primary physical principle of Ultrasound pulse-echo medical imaging?",
    "opts": [
      "Piezoelectric acoustic wave reflection at acoustic impedance mismatches between adjacent biological tissues",
      "X-ray photoelectric absorption in heavy elements",
      "Radiofrequency nuclear magnetic precession in superconducting coils",
      "Gamma ray scintillation following positron annihilation"
    ],
    "ans": 0
  },
  {
    "q": "In hemodialysis therapy for end-stage renal failure, across what artificial membrane structure do metabolic toxins (urea, creatinine) diffuse from blood into dialysate?",
    "opts": [
      "Semipermeable Hollow Fiber Dialyzer Membrane",
      "Impermeable Silicone Tubing",
      "Expanded Polytetrafluoroethylene (ePTFE) Solid Sheet",
      "Hydrophobic Polycarbonate Filter"
    ],
    "ans": 0
  },
  {
    "q": "What mechanical behavior is characteristic of biological soft tissues (tendons, ligaments, articular cartilage) where stress depends on both strain and strain rate?",
    "opts": [
      "Viscoelasticity (Hysteresis, Creep, and Stress Relaxation)",
      "Linear Hookean Elasticity",
      "Ideal Perfect Plasticity",
      "Brittle Isotropic Hardening"
    ],
    "ans": 0
  },
  {
    "q": "In tissue engineering, what temporary 3D porous construct provides architectural support and biochemical cues for cell attachment, proliferation, and extracellular matrix deposition?",
    "opts": [
      "Tissue Engineering Scaffold",
      "Petri Dish Monolayer",
      "Dialysis Cassette",
      "Cryogenic Storage Straw"
    ],
    "ans": 0
  },
  {
    "q": "Which FDA medical device regulatory pathway is used for Class II devices demonstrating substantial equivalence to a legally marketed predicate device?",
    "opts": [
      "510(k) Premarket Notification",
      "Premarket Approval (PMA)",
      "Humanitarian Device Exemption (HDE)",
      "De Novo Classification Request"
    ],
    "ans": 0
  },
  {
    "q": "What electrical waveform on an ECG tracing corresponds to ventricular depolarization immediately prior to mechanical ventricular contraction?",
    "opts": [
      "QRS Complex",
      "P Wave",
      "T Wave",
      "PR Segment"
    ],
    "ans": 0
  },
  {
    "q": "In Computed Tomography (CT) imaging, what normalized unit represents tissue X-ray attenuation relative to distilled water (0 HU) and air (-1000 HU)?",
    "opts": [
      "Hounsfield Unit (HU)",
      "Becquerel (Bq)",
      "Sievert (Sv)",
      "Tesla (T)"
    ],
    "ans": 0
  },
  {
    "q": "What synthetic biodegradable polymer is standardly used for bioresorbable surgical sutures and orthopedic interference screws?",
    "opts": [
      "Poly(lactic-co-glycolic acid) (PLGA) / Polylactic Acid (PLA)",
      "Ultra-High-Molecular-Weight Polyethylene (UHMWPE)",
      "Polytetrafluoroethylene (Teflon)",
      "Polycarbonate (PC)"
    ],
    "ans": 0
  },
  {
    "q": "In clinical neural engineering, which EEG brainwave frequency band (8 - 13 Hz) is prominently recorded over the occipital lobe during relaxed, awake states with eyes closed?",
    "opts": [
      "Alpha Waves",
      "Delta Waves (0.5 - 4 Hz)",
      "Beta Waves (13 - 30 Hz)",
      "Gamma Waves (>30 Hz)"
    ],
    "ans": 0
  },
  {
    "q": "What device monitors continuous arterial oxygen saturation (SpO2) non-invasively by measuring optical absorbance ratios of oxygenated and deoxygenated hemoglobin at 660 nm and 940 nm?",
    "opts": [
      "Pulse Oximeter",
      "Capnograph",
      "Plethysmograph",
      "Spirometer"
    ],
    "ans": 0
  },
  {
    "q": "What mechanism causes foreign body giant cell formation around permanent subcutaneous implants?",
    "opts": [
      "Chronic Foreign Body Reaction triggered by macrophage fusion on non-degradable surfaces",
      "Acute Type I IgE anaphylaxis",
      "Bacterial biofilm synthesis without leukocyte activation",
      "Enzymatic hydrolysis of metallic grain boundaries"
    ],
    "ans": 0
  },
  {
    "q": "In orthopedic biomechanics of total hip replacement, what phenomenon causes bone density loss surrounding a stiff metal femoral stem due to reduction of physiological load?",
    "opts": [
      "Stress Shielding (Wolff's Law adaptation)",
      "Osteonecrosis of the Femoral Head",
      "Aseptic Loosening via Wear Debris",
      "Creep Deformation of Titanium"
    ],
    "ans": 0
  },
  {
    "q": "Which international standard specifies safety and essential performance requirements for Medical Electrical Equipment?",
    "opts": [
      "IEC 60601-1",
      "ISO 9001",
      "ISO 14001",
      "IEEE 802.11"
    ],
    "ans": 0
  },
  {
    "q": "In cardiac pacing, what does a Demand Pacemaker (e.g. VVI mode) do when it senses an intrinsic ventricular R-wave from the patient's own heart?",
    "opts": [
      "Inhibits its scheduled pacing pulse to avoid competitive pacing",
      "Triggers an instantaneous high-voltage defibrillation shock",
      "Switches automatically to maximum rate asynchronous pacing",
      "Emits an audible alarm and disconnects the lead"
    ],
    "ans": 0
  },
  {
    "q": "What biosensor element selectively recognizes glucose molecules in personal blood glucose monitoring strips, catalyzing an electrochemical reaction?",
    "opts": [
      "Glucose Oxidase (GOx) / Glucose Dehydrogenase enzyme",
      "Monoclonal Antibodies to insulin",
      "Synthetic Ion-Selective Liquid Membranes",
      "Colloidal Gold Nanoparticles"
    ],
    "ans": 0
  },
  {
    "q": "In MRI physics, what relaxation parameter describes the spin-lattice (longitudinal) magnetization recovery time constant?",
    "opts": [
      "T1 Relaxation Time",
      "T2 Spin-Spin Decay Time",
      "T2* Magnetic Inhomogeneity Decay",
      "Larmor Precession Frequency"
    ],
    "ans": 0
  },
  {
    "q": "Which biopotential electrode is considered the non-polarizable reference standard in clinical electrophysiology recordings due to minimal junction potential drift?",
    "opts": [
      "Silver / Silver Chloride (Ag/AgCl) Electrode",
      "Bare Stainless Steel Needle",
      "Platinum-Iridium Wire",
      "Gold Plated Disc"
    ],
    "ans": 0
  },
  {
    "q": "What is the primary physiological mechanism of an automated external defibrillator (AED) delivering a biphasic electrical shock?",
    "opts": [
      "Simultaneously depolarizing a critical mass of myocardial cells to allow the natural sinoatrial (SA) node to regain pacemaker control",
      "Stimulating the vagus nerve to permanently slow heart rate",
      "Artificially pumping blood through coronary arteries via muscle spasms",
      "Electrolytically recharging depleted intracellular ATP stores"
    ],
    "ans": 0
  },
  {
    "q": "In microfluidics and Lab-on-a-Chip devices, what transparent elastomeric polymer is overwhelmingly cast to form microchannel networks?",
    "opts": [
      "Polydimethylsiloxane (PDMS)",
      "Polyethylene Terephthalate (PET)",
      "High-Density Polyethylene (HDPE)",
      "Polystyrene (PS)"
    ],
    "ans": 0
  },
  {
    "q": "What is the function of an intra-aortic balloon pump (IABP) deployed in cardiovascular intensive care?",
    "opts": [
      "Inflates during diastole to enhance coronary perfusion and deflates during systole to reduce left ventricular afterload",
      "Permanently replaces the mitral valve leaflets",
      "Filters systemic blood clots before reaching the brain",
      "Generates high-frequency pacing pulses for the left atrium"
    ],
    "ans": 0
  },
  {
    "q": "In clinical gait analysis, what instrumented floor platform measures vertical, anterior-posterior, and medial-lateral ground reaction forces during walking?",
    "opts": [
      "Piezoelectric / Strain-Gauge Force Plate",
      "Goniometer Arm",
      "Electromyographic Surface Preamplifier",
      "Optical Reflective Marker Tracker"
    ],
    "ans": 0
  },
  {
    "q": "What standard sterilization method uses ionizing radiation to sterilize pre-packaged, heat-sensitive single-use medical devices (syringes, catheters)?",
    "opts": [
      "Gamma Irradiation (Cobalt-60) or Electron Beam (E-beam)",
      "Autoclaving Steam under Pressure (121°C)",
      "Ethylene Oxide (EtO) Gas (non-radiation)",
      "Dry Heat Baking (160°C)"
    ],
    "ans": 0
  },
  {
    "q": "In biosignal processing, which digital filtering window is standardly applied to suppress high-frequency muscle tremor noise from an ECG recording?",
    "opts": [
      "Low-Pass Filter with cutoff at ~40 Hz - 100 Hz",
      "High-Pass Filter with cutoff at 500 Hz",
      "Notch Filter at DC (0 Hz)",
      "All-Pass Phase Shifter"
    ],
    "ans": 0
  },
  {
    "q": "What is the primary function of an extracorporeal membrane oxygenator (ECMO)?",
    "opts": [
      "Providing external cardiac and respiratory support by adding oxygen to and removing carbon dioxide directly from circulating blood",
      "Dialyzing urea from renal tubules in acute kidney injury",
      "Cooling core body temperature during therapeutic hypothermia",
      "Filtering circulating tumor cells from peripheral blood"
    ],
    "ans": 0
  },
  {
    "q": "Which international quality management standard is specific to medical device manufacturing and regulatory compliance?",
    "opts": [
      "ISO 13485",
      "ISO 9001",
      "ISO 27001",
      "Good Laboratory Practice (GLP) only"
    ],
    "ans": 0
  }
],
  "aerospace-engineering": [
  {
    "q": "In fluid dynamics and aerodynamics, which fundamental theorem explains the generation of aerodynamic lift on an airfoil?",
    "opts": [
      "Kutta-Joukowski Theorem relating lift per unit span to circulation and free-stream density",
      "Navier-Stokes Turbulence Closure Hypothesis",
      "Torricelli's Law of Efflux",
      "Pascal's Hydrostatic Law"
    ],
    "ans": 0
  },
  {
    "q": "What happens to the drag divergence Mach number of a swept wing compared to an unswept rectangular wing of equal thickness?",
    "opts": [
      "It increases because the effective chordwise Mach number component is reduced by the cosine of sweep angle",
      "It decreases because tip vortices trigger premature boundary layer separation",
      "It remains completely unchanged since free-stream velocity is constant",
      "It drops to zero due to transonic shockwave stagnation"
    ],
    "ans": 0
  },
  {
    "q": "Which dimensionless parameter defines the ratio of flow velocity to local speed of sound in compressible aerodynamics?",
    "opts": [
      "Mach Number (M)",
      "Reynolds Number (Re)",
      "Prandtl Number (Pr)",
      "Knudsen Number (Kn)"
    ],
    "ans": 0
  },
  {
    "q": "What is the primary metric of rocket engine propulsive efficiency measuring thrust delivered per unit weight flow rate of propellant consumed?",
    "opts": [
      "Specific Impulse (Isp, in seconds)",
      "Thrust-to-Weight Ratio (T/W)",
      "Characteristic Exhaust Velocity (c*)",
      "Expansion Area Ratio (Ae/At)"
    ],
    "ans": 0
  },
  {
    "q": "In orbital mechanics, which planar orbital maneuver transfers a spacecraft between two coplanar circular orbits with minimum delta-v?",
    "opts": [
      "Hohmann Transfer Orbit",
      "Bi-elliptic Transfer Orbit",
      "Geostationary Direct Injection",
      "Hyperbolic Escape Trajectory"
    ],
    "ans": 0
  },
  {
    "q": "What thermodynamic cycle forms the operating benchmark for gas turbine aircraft turbojet and turbofan engines?",
    "opts": [
      "Brayton Cycle (Joule Cycle)",
      "Rankine Cycle",
      "Otto Cycle",
      "Diesel Cycle"
    ],
    "ans": 0
  },
  {
    "q": "What aeroelastic instability is characterized by self-excited divergent oscillations of an aircraft wing or empennage in high-speed flight?",
    "opts": [
      "Flutter",
      "Buffeting",
      "Control Reversal",
      "Aileron Buzz"
    ],
    "ans": 0
  },
  {
    "q": "Across an oblique shock wave in supersonic flow, what happens to the static pressure, static temperature, and Mach number?",
    "opts": [
      "Pressure and temperature increase, while Mach number decreases",
      "Pressure decreases, temperature increases, and Mach number increases",
      "Pressure, temperature, and Mach number all increase simultaneously",
      "Pressure and temperature remain constant while Mach number doubles"
    ],
    "ans": 0
  },
  {
    "q": "Which flight control surface provides primary control around the aircraft's longitudinal (roll) axis?",
    "opts": [
      "Ailerons",
      "Elevators",
      "Rudder",
      "Flaps"
    ],
    "ans": 0
  },
  {
    "q": "In rocket propulsion, what geometric shape is used in supersonic de Laval nozzles to accelerate hot combustion gases from subsonic to supersonic velocity?",
    "opts": [
      "Converging-Diverging Nozzle",
      "Constant Area Cylindrical Duct",
      "Purely Diverging Conical Cone",
      "Converging Venturi Orifice"
    ],
    "ans": 0
  },
  {
    "q": "What aerodynamic phenomenon causes induced drag on finite wings due to high-pressure air curling from beneath the wing to the upper surface?",
    "opts": [
      "Wingtip Vortices",
      "Skin Friction Boundary Turbulence",
      "Form Drag Wake Separation",
      "Wave Drag Shock Formation"
    ],
    "ans": 0
  },
  {
    "q": "According to Kepler's First Law of Planetary Motion, what is the geometric shape of satellite orbits around a central celestial body?",
    "opts": [
      "Ellipse with the central body located at one of the two foci",
      "Perfect Circle with the central body at exact geometric center",
      "Parabola with constant orbital eccentricity equal to 1",
      "Hyperbola with infinite semi-major axis"
    ],
    "ans": 0
  },
  {
    "q": "In high-bypass turbofan engines, what parameter represents the ratio of mass flow through the fan duct to mass flow through the engine core?",
    "opts": [
      "Bypass Ratio (BPR)",
      "Pressure Ratio across Compressor (OPR)",
      "Turbine Inlet Temperature Ratio",
      "Thrust Specific Fuel Consumption (TSFC)"
    ],
    "ans": 0
  },
  {
    "q": "What primary structural advantage do carbon-fiber reinforced polymer (CFRP) composites offer in modern commercial airliner airframes (e.g. B787, A350)?",
    "opts": [
      "Exceptional strength-to-weight ratio, fatigue resistance, and elimination of galvanic metal corrosion",
      "Zero manufacturing cost and instantaneous automated cold-stamping",
      "Ability to withstand sustained reentry temperatures over 3000°C without ablative tiles",
      "Infinitely flexible elasticity with zero structural stiffness"
    ],
    "ans": 0
  },
  {
    "q": "What speed defines the threshold below which an aircraft cannot generate sufficient aerodynamic lift to maintain level flight at a given weight?",
    "opts": [
      "Stall Speed (Vs)",
      "Never-Exceed Speed (Vne)",
      "Maneuvering Speed (Va)",
      "Maximum Structural Cruising Speed (Vno)"
    ],
    "ans": 0
  },
  {
    "q": "In supersonic flight, what is the angle mu of the Mach cone created by a point disturbance moving at Mach M > 1?",
    "opts": [
      "sin(mu) = 1 / M",
      "cos(mu) = M",
      "tan(mu) = 1 / M^2",
      "mu = 180° / M"
    ],
    "ans": 0
  },
  {
    "q": "What spacecraft attitude control actuator exchanges angular momentum with the spacecraft without expending rocket reaction propellant?",
    "opts": [
      "Control Moment Gyroscope (CMG) / Reaction Wheel",
      "Cold Gas Thruster Quads",
      "Solid Rocket Apogee Kick Motor",
      "Aerodynamic Trim Tab"
    ],
    "ans": 0
  },
  {
    "q": "In aircraft stability and control, what condition is required for longitudinal static stability?",
    "opts": [
      "The pitch moment curve slope dCm/dalpha must be negative (dCm/dalpha < 0)",
      "The center of gravity must be located behind the aerodynamic center",
      "The trim lift coefficient must equal zero at all flight attitudes",
      "The roll damping derivative must be strictly positive"
    ],
    "ans": 0
  },
  {
    "q": "What thermal protection material is utilized on the Space Shuttle / Starship windward tiles to reradiate intense hypersonic reentry heat?",
    "opts": [
      "Reinforced Carbon-Carbon (RCC) and High-Temperature Reusable Surface Insulation (HRSI) Silica Tiles",
      "Bare structural 7075-T6 aluminum skin",
      "Fiberglass insulation batts wrapped in polyethylene",
      "Lead-lined copper sheets"
    ],
    "ans": 0
  },
  {
    "q": "Which gas law equation is standardly integrated in the Rocket Equation derived by Konstantin Tsiolkovsky?",
    "opts": [
      "Delta-v = Isp * g0 * ln(m0 / mf)",
      "F = m * a",
      "P * V = n * R * T",
      "E = m * c^2"
    ],
    "ans": 0
  },
  {
    "q": "What condition occurs at the throat of a supersonic rocket nozzle when the local Mach number reaches exactly 1.0?",
    "opts": [
      "Choked Flow (Mass flow rate reaches theoretical maximum)",
      "Shockwave boundary layer detachment",
      "Static pressure drops to zero gauge",
      "Combustion gas temperature drops to absolute zero"
    ],
    "ans": 0
  },
  {
    "q": "In aircraft instruments, what sensor measures total pressure (static plus dynamic pitot pressure) to determine indicated airspeed?",
    "opts": [
      "Pitot-Static Tube Probe",
      "Barometric Altimeter Diaphragm",
      "Ring Laser Gyroscope",
      "Angle of Attack Vane"
    ],
    "ans": 0
  },
  {
    "q": "What aerodynamic effect increases wing lift and reduces induced drag when an aircraft flies within one wingspan height of the ground or water surface?",
    "opts": [
      "Ground Effect",
      "Coanda Effect",
      "Magnus Effect",
      "Downwash Deflection Wave"
    ],
    "ans": 0
  },
  {
    "q": "In structural aircraft design, which component absorbs heavy axial loads in the wing bending moment alongside spar caps?",
    "opts": [
      "Wing Skin (Stressed-Skin Monocoque construction)",
      "Interior Passenger Floor Carpeting",
      "Trailing-Edge Flap Fairing",
      "Pitot Tube Mounting Bracket"
    ],
    "ans": 0
  },
  {
    "q": "What orbit has an orbital period of exactly 23 hours, 56 minutes, and 4 seconds, matching Earth's sidereal rotation at ~35,786 km altitude?",
    "opts": [
      "Geostationary / Geosynchronous Orbit (GEO)",
      "Low Earth Orbit (LEO)",
      "Molniya Highly Elliptical Orbit",
      "Sun-Synchronous Polar Orbit (SSO)"
    ],
    "ans": 0
  },
  {
    "q": "In aircraft engine compressors, what dangerous flow instability causes complete breakdown of forward airflow and violent backflow through the engine inlet?",
    "opts": [
      "Compressor Surge (Stall)",
      "Afterburner Light-off Failure",
      "Turbine Choking",
      "Cavitation in Fuel Injection Pumps"
    ],
    "ans": 0
  },
  {
    "q": "Which aerodynamic device mounted on wingtips reduces vortex strength and improves fuel efficiency by 3-5%?",
    "opts": [
      "Winglets (Sharklets)",
      "Vortex Generators",
      "Leading Edge Slats",
      "Spoilers / Speed Brakes"
    ],
    "ans": 0
  },
  {
    "q": "What is the escape velocity required from Earth's surface to completely break free from Earth's gravitational field (neglecting atmospheric drag)?",
    "opts": [
      "~11.2 km/s (approx. 40,320 km/h)",
      "~7.8 km/s (orbital velocity)",
      "~3.1 km/s",
      "~25.4 km/s"
    ],
    "ans": 0
  },
  {
    "q": "In helicopter aerodynamics, what mechanism tilts the main rotor tip-path plane to achieve directional translational flight?",
    "opts": [
      "Swashplate Assembly (Cyclic pitch control)",
      "Tail Rotor Collective Yaw Governor",
      "Freewheeling Clutch",
      "Mast Bending Gimbal"
    ],
    "ans": 0
  },
  {
    "q": "What is the purpose of an aircraft Auxiliary Power Unit (APU) located in the tail cone?",
    "opts": [
      "Providing electrical power and pneumatic compressed air to start main engines on the ground",
      "Providing supplemental cruise thrust during transatlantic flight",
      "Deploying the emergency landing gear via hydraulic ram",
      "Pumping fuel between left and right wing tanks"
    ],
    "ans": 0
  }
],
  "architectural-engineering": [
  {
    "q": "In Architectural Engineering, what does Level of Development (LOD 300) signify in Building Information Modeling (BIM)?",
    "opts": [
      "Model elements are graphically defined with specific quantity, size, shape, location, and orientation",
      "Conceptual massing showing only approximate spatial volume",
      "As-built facility management model with operating manuals and warranty links",
      "Fabrication-level assembly model with shop weld details (LOD 400)"
    ],
    "ans": 0
  },
  {
    "q": "Which structural framing system uses rigid column-to-beam connections to resist lateral wind and seismic forces without diagonal braces?",
    "opts": [
      "Moment-Resisting Frame (MRF)",
      "Braced Frame System",
      "Bearing Wall System",
      "Shear Wall Core System"
    ],
    "ans": 0
  },
  {
    "q": "What is the primary physical function of a building envelope's continuous air barrier system?",
    "opts": [
      "Preventing uncontrolled air leakage and convective moisture transport through exterior assemblies",
      "Supporting the primary structural roof dead loads",
      "Reflecting solar infrared radiation to reduce ambient air temperature",
      "Providing sound amplification inside building atriums"
    ],
    "ans": 0
  },
  {
    "q": "What parameter measures the overall rate of heat transfer through a composite building envelope assembly?",
    "opts": [
      "U-factor (Thermal Transmittance, W/m²·K)",
      "Sound Transmission Class (STC)",
      "Coefficient of Thermal Expansion",
      "Solar Heat Gain Coefficient (SHGC)"
    ],
    "ans": 0
  },
  {
    "q": "In architectural acoustics, what does the Sabine equation calculate for an enclosed space?",
    "opts": [
      "Reverberation Time (RT60)",
      "Sound Transmission Class across partitions",
      "Impact Isolation Class of floor slabs",
      "Noise Reduction Coefficient of ceiling baffles"
    ],
    "ans": 0
  },
  {
    "q": "Which HVAC distribution system delivers variable air volumes at constant temperature to individual building thermal zones?",
    "opts": [
      "Variable Air Volume (VAV) System",
      "Constant Air Volume (CAV) System",
      "Single-Duct Terminal Reheat System",
      "Direct Expansion (DX) Window Unit"
    ],
    "ans": 0
  },
  {
    "q": "In life safety design, what standard NFPA / IBC calculation determines the minimum required width of egress doors and stairs?",
    "opts": [
      "Occupant Load multiplied by the capacity egress factor (e.g. 0.3 in/person for stairs)",
      "Floor area divided by the building height",
      "Total structural column spacing along corridor walls",
      "Maximum window glazing area of adjacent facades"
    ],
    "ans": 0
  },
  {
    "q": "What structural mechanism counteracts thermal expansion and seismic drift between adjacent independent building wings?",
    "opts": [
      "Seismic and Expansion Joints with elastomeric covers",
      "Continuous welded steel tension plates",
      "Rigid monolithic epoxy grouting",
      "Prestressed tendon post-tensioning anchors"
    ],
    "ans": 0
  },
  {
    "q": "In daylighting engineering, what metric defines the ratio of indoor illuminance on a working plane to outdoor unobstructed overcast sky illuminance?",
    "opts": [
      "Daylight Factor (DF)",
      "Daylight Glare Probability (DGP)",
      "Color Rendering Index (CRI)",
      "Luminous Efficacy of Light Source"
    ],
    "ans": 0
  },
  {
    "q": "What foundation type is engineered as a continuous, thick reinforced concrete slab supporting an entire building on soft, compressible soils?",
    "opts": [
      "Mat / Raft Foundation",
      "Isolated Spread Footing",
      "Strip Wall Footing",
      "Driven Precast Concrete Friction Piles"
    ],
    "ans": 0
  },
  {
    "q": "In sustainable architecture, what credit category in LEED v4 evaluates lifecycle impact reduction, recycling, and transparency?",
    "opts": [
      "Materials and Resources (MR)",
      "Energy and Atmosphere (EA)",
      "Indoor Environmental Quality (EQ)",
      "Water Efficiency (WE)"
    ],
    "ans": 0
  },
  {
    "q": "What physical phenomenon occurs when a highly conductive building element penetrates insulation, causing localized heat loss and condensation?",
    "opts": [
      "Thermal Bridging",
      "Thermal Mass Buffering",
      "Stack Effect Ventilation",
      "Convective Chimney Effect"
    ],
    "ans": 0
  },
  {
    "q": "In building electrical systems, which transformer connection configuration is standardly used for 3-phase commercial distribution providing 480Y/277V or 208Y/120V?",
    "opts": [
      "Delta-Wye (Δ-Y) with grounded neutral",
      "Delta-Delta (Δ-Δ) floating ungrounded",
      "Open-Delta (V-V) single phase",
      "Wye-Wye (Y-Y) without neutral ground"
    ],
    "ans": 0
  },
  {
    "q": "Which type of concrete prestressing tensions high-strength steel strands AFTER the surrounding cast-in-place concrete has cured?",
    "opts": [
      "Post-Tensioning",
      "Pre-Tensioning",
      "Pre-Cambering",
      "Passive Steel Rebar Placement"
    ],
    "ans": 0
  },
  {
    "q": "What is the natural vertical air movement in high-rise buildings driven by indoor-to-outdoor air density and temperature differentials?",
    "opts": [
      "Stack Effect (Chimney Effect)",
      "Venturi Wind Tunnel Effect",
      "Bernoulli Pressure Lift",
      "Coriolis Displacement"
    ],
    "ans": 0
  },
  {
    "q": "In structural steel design, what ASTM specification designates the standard high-strength structural steel wide-flange beams (50 ksi yield)?",
    "opts": [
      "ASTM A992",
      "ASTM A36",
      "ASTM A500 Grade B",
      "ASTM A53"
    ],
    "ans": 0
  },
  {
    "q": "Which acoustic rating measures a building partition's ability to attenuate airborne sound transmission across speech frequencies?",
    "opts": [
      "Sound Transmission Class (STC)",
      "Noise Reduction Coefficient (NRC)",
      "Impact Insulation Class (IIC)",
      "Ceiling Attenuation Class (CAC)"
    ],
    "ans": 0
  },
  {
    "q": "What psychrometric property represents the temperature at which ambient air reaches 100% relative humidity and moisture begins to condense?",
    "opts": [
      "Dew Point Temperature",
      "Dry-Bulb Temperature",
      "Wet-Bulb Depression",
      "Specific Enthalpy"
    ],
    "ans": 0
  },
  {
    "q": "In facade engineering, what pressure-equalization design principle prevents rain penetration through exterior curtain wall cladding?",
    "opts": [
      "Rainscreen Principle (Drained and Back-Ventilated)",
      "Face-Sealed Barrier Glazing",
      "Non-Porous Exterior Vinyl Wrap",
      "Direct Surface Silicone Gasketing"
    ],
    "ans": 0
  },
  {
    "q": "Which fire suppression system maintains water under pressure in distribution pipes at all times for immediate discharge when a sprinkler head fuses?",
    "opts": [
      "Wet Pipe Sprinkler System",
      "Dry Pipe Sprinkler System",
      "Deluge Fire System",
      "Pre-Action Interlock System"
    ],
    "ans": 0
  },
  {
    "q": "In architectural lighting design, what unit measures the total luminous flux emitted by a light source in all directions?",
    "opts": [
      "Lumen (lm)",
      "Lux (lx)",
      "Candela (cd)",
      "Foot-candle (fc)"
    ],
    "ans": 0
  },
  {
    "q": "What building code designation indicates structural walls, columns, and floors engineered to resist fire collapse for a certified duration (e.g. 2 hours)?",
    "opts": [
      "Fire-Resistance Rating (FRR)",
      "Flame-Spread Index (FSI)",
      "Smoke-Developed Index (SDI)",
      "Combustibility Class A"
    ],
    "ans": 0
  },
  {
    "q": "In structural concrete engineering, what is the critical design check to prevent a column from punching directly through a flat slab foundation or floor?",
    "opts": [
      "Two-Way (Punching) Shear Stress around the column perimeter",
      "One-Way Beam Shear at d distance from support",
      "Flexural Reinforcement Yielding",
      "Direct Compression Crushing"
    ],
    "ans": 0
  },
  {
    "q": "Which indoor environmental metric measures air freshness by tracking metabolic respiration byproducts in occupied classrooms and offices?",
    "opts": [
      "Carbon Dioxide (CO2) concentration in ppm",
      "Relative Humidity percentage",
      "Ozone (O3) particle count",
      "Volatile Organic Compounds (VOC) in ppb"
    ],
    "ans": 0
  },
  {
    "q": "What is the primary function of a vapor retarder (Class I or II) installed on the warm-in-winter side of an insulated exterior wall?",
    "opts": [
      "Preventing water vapor diffusion from condensing on cold interstitial surfaces within the wall cavity",
      "Acting as the primary exterior weather barrier against driving rain",
      "Reflecting solar ultraviolet degradation",
      "Increasing the acoustic dampening of gypsum wallboard"
    ],
    "ans": 0
  },
  {
    "q": "In building plumbing design, what vent pipe prevents siphonage of water seals in fixture drainage traps?",
    "opts": [
      "Plumbing Vent Stack (Soil Stack Vent)",
      "Cleanout Relief Drain",
      "Stormwater Downspout",
      "Grease Interceptor By-pass"
    ],
    "ans": 0
  },
  {
    "q": "What structural damper system uses a suspended heavy mass tuned to the building's natural frequency to mitigate wind-induced swaying in supertall skyscrapers?",
    "opts": [
      "Tuned Mass Damper (TMD)",
      "Buckling-Restrained Braced Frame (BRBF)",
      "Base Isolation Elastomeric Bearing",
      "Viscous Fluid Wall Damper"
    ],
    "ans": 0
  },
  {
    "q": "In construction documentation, which drawing set coordinates MEP systems with architectural and structural layouts to eliminate spatial clashes?",
    "opts": [
      "MEP Coordination / Clash Detection Composite Drawings",
      "Architectural Schematic Concept Renderings",
      "Outline Specification Brief",
      "Zoning Variance Site Surveys"
    ],
    "ans": 0
  },
  {
    "q": "What building energy standard established by ASHRAE defines baseline minimum energy efficiency for commercial building envelopes and mechanical systems?",
    "opts": [
      "ASHRAE Standard 90.1",
      "ASHRAE Standard 62.1",
      "ASHRAE Standard 55",
      "ASHRAE Standard 189.1"
    ],
    "ans": 0
  },
  {
    "q": "In structural design of masonry buildings, what reinforced concrete or bond-beam element ties perimeter walls together at floor and roof levels?",
    "opts": [
      "Tie Beam / Bond Beam / Ring Beam",
      "Lintel over window openings",
      "Mortar Bed Joint",
      "Corbel Shelf Angle"
    ],
    "ans": 0
  }
],
  "computer-science": [
  {
    "q": "In Operating Systems, which condition is NOT one of Coffman's four necessary conditions for deadlock?",
    "opts": [
      "Preemption allowed",
      "Mutual exclusion",
      "Hold and wait",
      "Circular wait"
    ],
    "ans": 0
  },
  {
    "q": "What is the average time complexity of searching for an element in a balanced Binary Search Tree (AVL or Red-Black)?",
    "opts": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "ans": 0
  },
  {
    "q": "Which transport layer protocol provides reliable, connection-oriented, and byte-stream delivery with flow and congestion control?",
    "opts": [
      "Transmission Control Protocol (TCP)",
      "User Datagram Protocol (UDP)",
      "Internet Protocol (IP)",
      "Internet Control Message Protocol (ICMP)"
    ],
    "ans": 0
  },
  {
    "q": "In Relational Database Management Systems, what does the 'I' in ACID transaction guarantees represent?",
    "opts": [
      "Isolation",
      "Integrity",
      "Indexing",
      "Idempotence"
    ],
    "ans": 0
  },
  {
    "q": "What is the primary role of the Translation Lookaside Buffer (TLB) in a modern CPU memory management unit?",
    "opts": [
      "Caching virtual-to-physical address page translations",
      "Buffering dirty cache lines before writeback to main memory",
      "Predicting conditional branch outcomes in the pipeline",
      "Storing pre-decoded micro-operations"
    ],
    "ans": 0
  },
  {
    "q": "Which data structure is fundamentally used to implement Breadth-First Search (BFS) graph traversal?",
    "opts": [
      "Queue (FIFO)",
      "Stack (LIFO)",
      "Binary Min-Heap",
      "Disjoint Set Union (DSU)"
    ],
    "ans": 0
  },
  {
    "q": "In the OSI 7-layer reference model, at which layer do Routers primarily operate?",
    "opts": [
      "Network Layer (Layer 3)",
      "Data Link Layer (Layer 2)",
      "Transport Layer (Layer 4)",
      "Session Layer (Layer 5)"
    ],
    "ans": 0
  },
  {
    "q": "What normal form removes partial dependencies of non-prime attributes on a composite candidate key?",
    "opts": [
      "Second Normal Form (2NF)",
      "First Normal Form (1NF)",
      "Third Normal Form (3NF)",
      "Boyce-Codd Normal Form (BCNF)"
    ],
    "ans": 0
  },
  {
    "q": "Which page replacement algorithm suffers from Belady's Anomaly where increasing physical frames increases page faults?",
    "opts": [
      "First-In, First-Out (FIFO)",
      "Least Recently Used (LRU)",
      "Optimal Page Replacement (OPT)",
      "Clock / Second-Chance Algorithm"
    ],
    "ans": 0
  },
  {
    "q": "In compiler construction, which phase converts a linear stream of source characters into a stream of tokens?",
    "opts": [
      "Lexical Analysis (Scanner)",
      "Syntax Analysis (Parser)",
      "Semantic Analysis",
      "Intermediate Code Generation"
    ],
    "ans": 0
  },
  {
    "q": "What is the worst-case time complexity of the standard QuickSort algorithm with an unlucky pivot choice?",
    "opts": [
      "O(n^2)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "ans": 0
  },
  {
    "q": "In modern multi-core processors, which protocol is standardly used to maintain cache consistency across private L1/L2 caches?",
    "opts": [
      "MESI (Modified, Exclusive, Shared, Invalid)",
      "Round-Robin bus arbitration",
      "Two-Phase Commit (2PC)",
      "Snooping ARP protocol"
    ],
    "ans": 0
  },
  {
    "q": "What synchronization primitive uses atomic Test-and-Set or Compare-and-Swap instructions without causing the CPU to context-switch into a blocked state?",
    "opts": [
      "Spinlock",
      "POSIX Semaphore",
      "Condition Variable",
      "Read-Write Mutex"
    ],
    "ans": 0
  },
  {
    "q": "In Computer Networks, what is the default size of an IPv4 address compared to an IPv6 address?",
    "opts": [
      "32 bits for IPv4, 128 bits for IPv6",
      "64 bits for IPv4, 128 bits for IPv6",
      "32 bits for IPv4, 64 bits for IPv6",
      "16 bits for IPv4, 32 bits for IPv6"
    ],
    "ans": 0
  },
  {
    "q": "Which graph algorithm finds the shortest path between all pairs of vertices in a directed weighted graph?",
    "opts": [
      "Floyd-Warshall Algorithm",
      "Dijkstra's Algorithm",
      "Kruskal's Algorithm",
      "Prim's Algorithm"
    ],
    "ans": 0
  },
  {
    "q": "In Database Systems, why are B+ Trees overwhelmingly preferred over balanced BSTs for disk-based storage indexing?",
    "opts": [
      "High fanout minimizes the number of disk I/O operations required per search",
      "B+ Trees require zero memory pointer overhead",
      "B+ Trees eliminate the need for write-ahead logging",
      "B+ Trees store all records purely in contiguous volatile registers"
    ],
    "ans": 0
  },
  {
    "q": "What type of pipeline hazard occurs when an instruction depends on the result of a previous instruction that has not yet completed execution?",
    "opts": [
      "Data Hazard (Read-After-Write)",
      "Structural Hazard",
      "Control Hazard",
      "Branch Misprediction Hazard"
    ],
    "ans": 0
  },
  {
    "q": "In Chomsky's hierarchy of formal grammars, which computational automaton recognizes Context-Free Languages?",
    "opts": [
      "Non-Deterministic Pushdown Automaton (PDA)",
      "Deterministic Finite Automaton (DFA)",
      "Linear Bounded Automaton",
      "Turing Machine with unbounded tape"
    ],
    "ans": 0
  },
  {
    "q": "What algorithm is standardly used for distributed leader election in distributed systems such as Apache ZooKeeper or Raft?",
    "opts": [
      "Consensus algorithms like Raft / Paxos",
      "Diffie-Hellman Key Exchange",
      "Bellman-Ford Algorithm",
      "Aho-Corasick String Matcher"
    ],
    "ans": 0
  },
  {
    "q": "In Cryptography, what is the key characteristic of an asymmetric public-key cryptosystem such as RSA?",
    "opts": [
      "Different keys are used for encryption (public) and decryption (private)",
      "The same secret symmetric key is shared over an insecure channel",
      "Data can be encrypted but can never be mathematically decrypted",
      "The ciphertext is always shorter than the plaintext input"
    ],
    "ans": 0
  },
  {
    "q": "What mechanism prevents priority inversion in real-time operating systems when a low-priority task holds a resource needed by a high-priority task?",
    "opts": [
      "Priority Inheritance Protocol",
      "Preemptive Multithreading",
      "Round-Robin Quantum Time-Slicing",
      "Strict First-Come First-Served"
    ],
    "ans": 0
  },
  {
    "q": "Which collision resolution technique in hash tables stores collided elements in linked lists outside the primary array?",
    "opts": [
      "Separate Chaining",
      "Linear Probing",
      "Quadratic Probing",
      "Double Hashing"
    ],
    "ans": 0
  },
  {
    "q": "In TCP network congestion control, what event causes the sender to reset its congestion window (cwnd) back to 1 MSS?",
    "opts": [
      "Retransmission Timeout (RTO) expiration",
      "Receiving three duplicate ACKs (Fast Retransmit)",
      "A standard Window Scale negotiation",
      "A zero-window probe acknowledgment"
    ],
    "ans": 0
  },
  {
    "q": "What is the primary function of a Linker during the software build process?",
    "opts": [
      "Resolves external symbol references and combines object files into an executable",
      "Translates high-level source code into assembly instructions",
      "Expands preprocessor macros and header include directives",
      "Profiles machine instruction execution bottlenecks"
    ],
    "ans": 0
  },
  {
    "q": "Which algorithmic paradigm does the 0/1 Knapsack problem typically require to find an optimal solution in pseudo-polynomial time?",
    "opts": [
      "Dynamic Programming",
      "Greedy Choice Property",
      "Divide and Conquer",
      "Backtracking with branch pruning"
    ],
    "ans": 0
  },
  {
    "q": "What does the Two-Phase Locking (2PL) protocol guarantee in concurrent database transaction scheduling?",
    "opts": [
      "Conflict Serializability of transaction execution",
      "Prevention of all transaction deadlocks",
      "Instantaneous durability without write-ahead logging",
      "Zero lock acquisition latency"
    ],
    "ans": 0
  },
  {
    "q": "In computer architecture, what technique executes instructions out of program order to maximize arithmetic logic unit utilization?",
    "opts": [
      "Tomasulo's Algorithm with Reservation Stations",
      "Static Compiler Inlining",
      "Single-Cycle Microarchitecture",
      "Strict In-Order Pipelining"
    ],
    "ans": 0
  },
  {
    "q": "Which network security protocol establishes an encrypted tunnel at the Transport Layer between web browsers and servers?",
    "opts": [
      "Transport Layer Security (TLS)",
      "Simple Network Management Protocol (SNMP)",
      "Address Resolution Protocol (ARP)",
      "Border Gateway Protocol (BGP)"
    ],
    "ans": 0
  },
  {
    "q": "What is the Halting Problem, first formulated and proven undecidable by Alan Turing in 1936?",
    "opts": [
      "No general algorithm can determine whether an arbitrary program halts on a given input",
      "Any program with recursion will inevitably crash with stack overflow",
      "Computers cannot execute more than one instruction per clock cycle",
      "Every program is guaranteed to terminate if given infinite memory"
    ],
    "ans": 0
  },
  {
    "q": "In modern database query optimization, what data structure estimates attribute value distribution for cardinality estimation?",
    "opts": [
      "Equi-depth or Equi-width Histograms",
      "Bloom Filters",
      "Skip Lists",
      "Radix Trees"
    ],
    "ans": 0
  }
],
  "ai-ml": [
    {
      "q": "Which learning paradigm relies on labeled training datasets consisting of input-output pairs?",
      "opts": [
        "Supervised Learning",
        "Unsupervised Learning",
        "Reinforcement Learning",
        "Self-Supervised Clustering"
      ],
      "ans": 0
    },
    {
      "q": "In Machine Learning, what does a model with \"high variance\" typically suffer from?",
      "opts": [
        "Overfitting to training data",
        "Underfitting the underlying trend",
        "Inability to learn simple linear relationships",
        "Excessive training regularization"
      ],
      "ans": 0
    },
    {
      "q": "Which activation function is defined as f(x) = max(0, x) and helps prevent vanishing gradients?",
      "opts": [
        "ReLU (Rectified Linear Unit)",
        "Sigmoid",
        "Hyperbolic Tangent (Tanh)",
        "Softmax"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary objective of L1 Regularization (Lasso) compared to L2 Regularization (Ridge)?",
      "opts": [
        "Promoting feature sparsity by driving irrelevant weights to exactly zero",
        "Penalizing large weights proportionally to their square without zeroing",
        "Accelerating learning rate decay in stochastic gradient descent",
        "Normalizing input feature distributions across min-max bounds"
      ],
      "ans": 0
    },
    {
      "q": "In classification metrics, how is Recall (Sensitivity) mathematically formulated?",
      "opts": [
        "TP / (TP + FN)",
        "TP / (TP + FP)",
        "(TP + TN) / Total",
        "2 * (Precision * Recall) / (Precision + Recall)"
      ],
      "ans": 0
    },
    {
      "q": "Which metric represents the harmonic mean of Precision and Recall?",
      "opts": [
        "F1-Score",
        "ROC-AUC",
        "Mean Absolute Error (MAE)",
        "Cohen Kappa"
      ],
      "ans": 0
    },
    {
      "q": "What happens in Gradient Descent if the learning rate (alpha) is configured excessively high?",
      "opts": [
        "The optimization algorithm can overshoot the global minimum and diverge",
        "The model takes an excessively long time to converge to the local minimum",
        "The gradients will permanently shrink to zero",
        "The loss function will instantly evaluate to negative infinity"
      ],
      "ans": 0
    },
    {
      "q": "Which splitting criterion is commonly utilized in CART Decision Trees to evaluate node purity?",
      "opts": [
        "Gini Impurity",
        "Root Mean Squared Log Error",
        "Cosine Similarity",
        "Hamming Distance"
      ],
      "ans": 0
    },
    {
      "q": "How does Random Forest reduce model variance compared to individual decision trees?",
      "opts": [
        "By aggregating predictions across decorrelated trees trained on bootstrap samples (Bagging)",
        "By sequentially fitting trees to the residuals of previous trees (Boosting)",
        "By pruning leaf nodes with high depth penalties",
        "By enforcing linear boundaries across all feature dimensions"
      ],
      "ans": 0
    },
    {
      "q": "Which ensemble method trains sequential weak learners where each subsequent tree corrects the residual errors of its predecessor?",
      "opts": [
        "Gradient Boosting (e.g. XGBoost, LightGBM)",
        "Random Forest",
        "Extra Trees Classifier",
        "Voting Classifier with soft voting"
      ],
      "ans": 0
    },
    {
      "q": "What is the purpose of the \"Kernel Trick\" in Support Vector Machines (SVM)?",
      "opts": [
        "Implicitly mapping non-linear data into higher-dimensional space where it becomes linearly separable",
        "Accelerating disk I/O when loading large image datasets",
        "Encrypting support vector coordinates for privacy-preserving computation",
        "Normalizing feature matrices using fast GPU kernels"
      ],
      "ans": 0
    },
    {
      "q": "In K-Means clustering, what does the algorithm iteratively minimize?",
      "opts": [
        "Inertia (Within-Cluster Sum of Squares)",
        "Mutual Information between clusters",
        "Silhouette coefficient across inter-cluster distances",
        "Kullback-Leibler divergence between sample distributions"
      ],
      "ans": 0
    },
    {
      "q": "Which clustering algorithm is capable of finding arbitrary shaped clusters and detecting outliers/noise points based on spatial density?",
      "opts": [
        "DBSCAN",
        "K-Means",
        "Gaussian Mixture Models with spherical covariance",
        "Agglomerative Ward Hierarchical Clustering"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary mathematical principle behind Principal Component Analysis (PCA)?",
      "opts": [
        "Eigenvalue decomposition of the covariance matrix to project data along axes of maximum variance",
        "Minimizing cross-entropy loss using backpropagation through time",
        "Maximizing class separation margin using Lagrange multipliers",
        "Clustering nearest neighbors using Euclidean distance metrics"
      ],
      "ans": 0
    },
    {
      "q": "Which fundamental calculus rule is used by the backpropagation algorithm to compute loss gradients with respect to neural network weights?",
      "opts": [
        "The Chain Rule",
        "L'Hopital's Rule",
        "Taylor Series Expansion",
        "Integration by Parts"
      ],
      "ans": 0
    },
    {
      "q": "Why does the Vanishing Gradient Problem predominantly occur in deep networks utilizing Sigmoid or Tanh activation functions?",
      "opts": [
        "Their derivatives saturate and are bounded between 0 and 0.25, causing gradient products to diminish exponentially",
        "They produce discontinuous output jumps that disrupt numerical differentiation",
        "They require excessive matrix inversion steps on backward passes",
        "They prevent weights from taking negative values"
      ],
      "ans": 0
    },
    {
      "q": "In Convolutional Neural Networks (CNNs), what is the primary role of a Max Pooling layer?",
      "opts": [
        "Downsampling feature map dimensions while preserving dominant spatial features and translation invariance",
        "Multiplying feature maps by learnable convolution kernels",
        "Normalizing activations to zero mean and unit variance",
        "Flattening multi-channel tensors into single dense vectors"
      ],
      "ans": 0
    },
    {
      "q": "What architectural innovation enables LSTMs and GRUs to model long-term sequential dependencies better than vanilla RNNs?",
      "opts": [
        "Gating mechanisms (e.g. forget, input, and output gates) controlling information flow",
        "Replacing recurrent feedback loops with multi-head self-attention",
        "Using 2D spatial convolution filters over temporal tokens",
        "Enforcing orthogonal weight matrices on hidden states"
      ],
      "ans": 0
    },
    {
      "q": "In the Transformer architecture, what is the mathematical formula for Scaled Dot-Product Attention?",
      "opts": [
        "softmax((Q * K^T) / sqrt(d_k)) * V",
        "sigmoid(Q * K) + V",
        "tanh((Q + K) / d_k) * V",
        "softmax(Q * V^T) / sqrt(d_k) * K"
      ],
      "ans": 0
    },
    {
      "q": "Which loss function is optimal when training a multi-class neural network classifier with mutually exclusive classes?",
      "opts": [
        "Categorical Cross-Entropy",
        "Binary Cross-Entropy",
        "Mean Squared Error (MSE)",
        "Hinge Loss"
      ],
      "ans": 0
    },
    {
      "q": "What technique synthetically generates minority class examples along the line segments joining k-nearest neighbors to address class imbalance?",
      "opts": [
        "SMOTE (Synthetic Minority Over-sampling Technique)",
        "Random Under-Sampling",
        "Stratified K-Fold Splitting",
        "Min-Max Normalization"
      ],
      "ans": 0
    },
    {
      "q": "How does Standard Scaling (Z-Score Standardization) transform a numerical feature?",
      "opts": [
        "Scales feature to have a mean of 0 and standard deviation of 1",
        "Bounds all values strictly between [0, 1]",
        "Transforms feature values into discrete quantiles",
        "Converts numerical continuous values into one-hot binary vectors"
      ],
      "ans": 0
    },
    {
      "q": "Why is One-Hot Encoding preferred over Label Encoding for nominal categorical variables (e.g. Country: India, USA, Germany)?",
      "opts": [
        "It prevents machine learning algorithms from inferring false ordinal/numerical hierarchy (e.g. 2 > 1)",
        "It reduces the dimensionality of the feature matrix",
        "It guarantees zero missing values in downstream models",
        "It forces all categorical probabilities to sum to 1.0"
      ],
      "ans": 0
    },
    {
      "q": "What does the Area Under the ROC Curve (ROC-AUC) measure across varying classification thresholds?",
      "opts": [
        "The model's capability to discriminate between positive and negative classes (TPR vs FPR)",
        "The exact accuracy of the model on the test split",
        "The average training loss across all epochs",
        "The harmonic balance between precision and calibration"
      ],
      "ans": 0
    },
    {
      "q": "What does the \"Early Stopping\" regularization technique monitor to prevent neural network overfitting?",
      "opts": [
        "Validation loss, halting training when validation performance ceases to improve",
        "GPU temperature and memory bandwidth limits",
        "Gradient norms, stopping when learning rates fall below threshold",
        "Training accuracy, terminating as soon as training error hits zero"
      ],
      "ans": 0
    },
    {
      "q": "What is the role of Batch Normalization in training deep neural networks?",
      "opts": [
        "Stabilizing and accelerating training by normalizing layer inputs per mini-batch",
        "Converting floating point weights to 8-bit integers for mobile deployment",
        "Shuffling training data batches before each epoch",
        "Enforcing strict dropout on hidden layer activations"
      ],
      "ans": 0
    },
    {
      "q": "In Natural Language Processing, how do Word2Vec and GloVe represent words?",
      "opts": [
        "As dense, low-dimensional continuous numerical vectors capturing semantic relationships",
        "As sparse high-dimensional bag-of-words boolean matrices",
        "As phonetic transcription strings based on IPA rules",
        "As encrypted hash tokens to ensure text privacy"
      ],
      "ans": 0
    },
    {
      "q": "In Reinforcement Learning, what equation expresses the value of a state as the immediate reward plus discounted future returns?",
      "opts": [
        "Bellman Equation",
        "Euler-Lagrange Equation",
        "Navier-Stokes Equation",
        "Markov Transition Formula"
      ],
      "ans": 0
    },
    {
      "q": "What is the \"Curse of Dimensionality\" in machine learning?",
      "opts": [
        "As feature dimensions increase, data becomes exponentially sparse and distances lose discriminative power",
        "Models become incapable of running on single CPU architectures",
        "Data storage requirements surpass standard database limits",
        "Feature correlations will always become perfectly collinear"
      ],
      "ans": 0
    },
    {
      "q": "Which technique randomly drops neurons and their connections during neural network training to prevent feature co-adaptation?",
      "opts": [
        "Dropout",
        "Weight Decay",
        "Gradient Clipping",
        "Data Augmentation"
      ],
      "ans": 0
    }
  ],
  "full-stack-web-development": [
    {
      "q": "What is the Virtual DOM in React, and why is it used?",
      "opts": [
        "An in-memory lightweight representation of the real DOM used for fast diffing and batch updates",
        "A browser API providing direct GPU acceleration for canvas elements",
        "A server-side cache for caching raw HTML responses",
        "A database shadow copy representing user sessions"
      ],
      "ans": 0
    },
    {
      "q": "In React, what is the behavior of useEffect when an empty dependency array ([]) is passed as the second argument?",
      "opts": [
        "The effect runs once after the initial component mount",
        "The effect runs after every single render and re-render",
        "The effect never runs at all",
        "The effect runs only when component props change"
      ],
      "ans": 0
    },
    {
      "q": "What is the key difference between useMemo and useCallback in React?",
      "opts": [
        "useMemo memoizes a computed value; useCallback memoizes a function reference",
        "useMemo is for asynchronous API calls; useCallback is for synchronous state updates",
        "useMemo persists data to localStorage; useCallback persists data to cookies",
        "useMemo binds event listeners; useCallback unbinds them on unmount"
      ],
      "ans": 0
    },
    {
      "q": "In the CSS Box Model, what is the correct order from inside to outside?",
      "opts": [
        "Content -> Padding -> Border -> Margin",
        "Content -> Border -> Padding -> Margin",
        "Margin -> Border -> Padding -> Content",
        "Content -> Margin -> Padding -> Border"
      ],
      "ans": 0
    },
    {
      "q": "In CSS Flexbox, which property aligns items along the cross axis?",
      "opts": [
        "align-items",
        "justify-content",
        "flex-direction",
        "align-content"
      ],
      "ans": 0
    },
    {
      "q": "How does the JavaScript Event Loop handle Promises (microtasks) compared to setTimeout (macrotasks)?",
      "opts": [
        "Microtasks queue is processed immediately after the current script, before any macrotask",
        "Macrotasks always execute before microtasks",
        "Both microtasks and macrotasks execute concurrently on separate OS threads",
        "Promises are delegated to the browser worker pool and execute last"
      ],
      "ans": 0
    },
    {
      "q": "What is a JavaScript closure?",
      "opts": [
        "A function bundled with references to its surrounding lexical environment",
        "A method to forcibly terminate infinite while loops",
        "A syntax for defining private class fields using the # prefix",
        "An asynchronous callback executed when a network request completes"
      ],
      "ans": 0
    },
    {
      "q": "What is the difference between \"let\" and \"var\" in JavaScript?",
      "opts": [
        "\"let\" is block-scoped and temporal dead zone protected; \"var\" is function-scoped and hoisted",
        "\"let\" cannot be reassigned; \"var\" can be reassigned",
        "\"let\" is hoisted to window object; \"var\" is not hoisted",
        "\"let\" only accepts string values; \"var\" accepts any data type"
      ],
      "ans": 0
    },
    {
      "q": "Which HTTP method should be used according to RESTful standards for idempotent full replacement of an existing resource?",
      "opts": [
        "PUT",
        "POST",
        "PATCH",
        "GET"
      ],
      "ans": 0
    },
    {
      "q": "What HTTP status code represents \"Unauthorized\" (meaning client authentication credentials are required or invalid)?",
      "opts": [
        "401",
        "403",
        "404",
        "400"
      ],
      "ans": 0
    },
    {
      "q": "What security mechanism does CORS (Cross-Origin Resource Sharing) enforce?",
      "opts": [
        "It restricts browsers from making cross-origin HTTP requests unless permitted by server headers",
        "It encrypts database network traffic between backend servers and clients",
        "It prevents users from taking screenshots inside web browsers",
        "It enforces automatic password rotation on login forms"
      ],
      "ans": 0
    },
    {
      "q": "What are the three components of a JSON Web Token (JWT) separated by periods?",
      "opts": [
        "Header, Payload, Signature",
        "Header, Body, Encryption Key",
        "Origin, Claims, Hash",
        "TokenId, ClientSecret, Checksum"
      ],
      "ans": 0
    },
    {
      "q": "Why are authentication session cookies typically configured with the \"HttpOnly\" flag?",
      "opts": [
        "To prevent client-side JavaScript from accessing the cookie, mitigating XSS token theft",
        "To ensure the cookie is only transmitted over HTTPS encrypted connections",
        "To restrict cookie transmission to top-level domain navigation",
        "To compress cookie payload size for faster transmission"
      ],
      "ans": 0
    },
    {
      "q": "How does Node.js achieve high concurrency despite being single-threaded for JavaScript execution?",
      "opts": [
        "Via an event-driven non-blocking I/O model supported by the libuv C++ thread pool",
        "By spinning up a new OS process for every incoming HTTP request",
        "By executing JavaScript bytecode directly on GPU shaders",
        "By disabling asynchronous event handling entirely"
      ],
      "ans": 0
    },
    {
      "q": "In Express.js, what is the role of the \"next()\" parameter in middleware functions?",
      "opts": [
        "Passes control to the next middleware function in the request-response cycle",
        "Sends the final JSON response to the client",
        "Restarts the Express HTTP server process",
        "Rolls back the active database transaction"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary benefit of adding a B-Tree index to a database column?",
      "opts": [
        "Dramatically accelerates SELECT query filtering and sorting at the cost of slower writes",
        "Ensures the column can only store non-null unique values",
        "Compresses database table size on physical hard drives",
        "Encrypts column data with AES-256 at rest"
      ],
      "ans": 0
    },
    {
      "q": "What is the difference between SQL INNER JOIN and LEFT JOIN?",
      "opts": [
        "INNER JOIN returns rows matching both tables; LEFT JOIN returns all left rows plus matched right rows",
        "INNER JOIN returns all rows from both tables; LEFT JOIN returns only rows from left table",
        "INNER JOIN is only for primary keys; LEFT JOIN is for foreign keys",
        "LEFT JOIN eliminates duplicate columns while INNER JOIN duplicates them"
      ],
      "ans": 0
    },
    {
      "q": "What is Server-Side Rendering (SSR) in frameworks like Next.js, and what is its primary benefit?",
      "opts": [
        "Pre-rendering HTML on the server for each request, delivering faster FCP and better SEO",
        "Executing all database queries on client browsers via WebAssembly",
        "Compiling React components into native desktop C++ binaries",
        "Generating static HTML files only once at build time without dynamic server computation"
      ],
      "ans": 0
    },
    {
      "q": "What technology provides full-duplex, persistent bidirectional communication between client and server over a single TCP connection?",
      "opts": [
        "WebSockets",
        "HTTP Short Polling",
        "Server-Sent Events (SSE)",
        "REST Webhooks"
      ],
      "ans": 0
    },
    {
      "q": "What is the purpose of the CSS property \"box-sizing: border-box\"?",
      "opts": [
        "Includes padding and border within the specified width and height of an element",
        "Excludes margins from calculations of parent container width",
        "Forces all child elements to display as inline blocks",
        "Adds a drop shadow around the element border automatically"
      ],
      "ans": 0
    },
    {
      "q": "What does the \"useCallback\" hook return in React?",
      "opts": [
        "A memoized version of the callback function that only changes if dependencies change",
        "The returned value of executing the callback function",
        "A Promise resolving when the callback finishes execution",
        "A ref pointer attached to the DOM node"
      ],
      "ans": 0
    },
    {
      "q": "What is the purpose of React Portal (ReactDOM.createPortal)?",
      "opts": [
        "Rendering children into a DOM node that exists outside the DOM hierarchy of parent component",
        "Establishing WebRTC peer-to-peer data channels between browsers",
        "Transferring state between two isolated React root applications",
        "Lazy-loading heavy components over dynamic network imports"
      ],
      "ans": 0
    },
    {
      "q": "In Node.js, what does the \"EventEmitter\" pattern allow objects to do?",
      "opts": [
        "Emit named events that cause previously registered listener functions to be called",
        "Write unbuffered binary data directly to disk blocks",
        "Share RAM memory heap across multiple worker threads",
        "Proxy incoming TCP sockets to remote DNS hostnames"
      ],
      "ans": 0
    },
    {
      "q": "What is SQL Injection (SQLi) and how is it reliably prevented in full-stack applications?",
      "opts": [
        "Malicious SQL injected via user input; prevented by using parameterized queries / prepared statements",
        "Injecting JavaScript into DOM; prevented by setting HttpOnly cookies",
        "Overwhelming database server with connections; prevented by connection pooling",
        "Stealing session tokens from memory; prevented by SSL encryption"
      ],
      "ans": 0
    },
    {
      "q": "What does the JavaScript \"=== \" (strict equality) operator check compared to \"==\" (loose equality)?",
      "opts": [
        "Checks both value and data type without performing type coercion",
        "Performs automatic type conversion before comparing values",
        "Checks whether two objects have identical memory references only",
        "Checks whether strings match case-insensitively"
      ],
      "ans": 0
    },
    {
      "q": "What is the role of a Service Worker in Progressive Web Applications (PWA)?",
      "opts": [
        "Runs in background intercepting network requests to enable offline caching and push notifications",
        "Manages database migrations on backend servers",
        "Handles CSS animations and 3D WebGL rendering threads",
        "Compiles TypeScript into minified JavaScript bundles"
      ],
      "ans": 0
    },
    {
      "q": "In relational databases, what does the ACID acronym stand for?",
      "opts": [
        "Atomicity, Consistency, Isolation, Durability",
        "Asynchronous, Concurrent, Indexed, Distributed",
        "Aggregation, Cache, Integrity, Delivery",
        "Authentication, Confidentiality, Identity, Decryption"
      ],
      "ans": 0
    },
    {
      "q": "What is the purpose of the HTML5 semantic tag <main>?",
      "opts": [
        "Specifies the unique dominant content of the document body",
        "Contains site-wide navigation links and menu items",
        "Houses introductory banner content and logo images",
        "Defines tangential sidebar content related to the page"
      ],
      "ans": 0
    },
    {
      "q": "How does CSS Grid differ fundamentally from CSS Flexbox?",
      "opts": [
        "Grid is two-dimensional (rows and columns); Flexbox is one-dimensional (row or column)",
        "Grid only works with fixed pixel sizes; Flexbox works with percentages",
        "Grid is deprecated in modern browsers; Flexbox is the replacement",
        "Grid is only for typography layouts; Flexbox is for layout containers"
      ],
      "ans": 0
    },
    {
      "q": "What is Code Splitting in modern frontend bundlers (e.g. Vite, Webpack)?",
      "opts": [
        "Splitting bundle into smaller chunks loaded on-demand to reduce initial page load time",
        "Formatting code according to Prettier formatting rules",
        "Separating HTML, CSS, and JavaScript into three isolated files",
        "Compiling code into separate binaries for different OS platforms"
      ],
      "ans": 0
    }
  ],
  "python-programming": [
    {
      "q": "What is the output of print(type(5 / 2)) in Python 3?",
      "opts": [
        "<class 'float'>",
        "<class 'int'>",
        "<class 'double'>",
        "<class 'number'>"
      ],
      "ans": 0
    },
    {
      "q": "Which of the following data types in Python is immutable?",
      "opts": [
        "Tuple",
        "List",
        "Dictionary",
        "Set"
      ],
      "ans": 0
    },
    {
      "q": "What keyword is used to define an anonymous function in Python?",
      "opts": [
        "lambda",
        "def",
        "func",
        "inline"
      ],
      "ans": 0
    },
    {
      "q": "What does the *args parameter represent in a Python function definition?",
      "opts": [
        "Variable length non-keyword positional arguments as a tuple",
        "Keyword arguments dictionary",
        "Default arguments list",
        "Pointer to a tuple"
      ],
      "ans": 0
    },
    {
      "q": "What is the average time complexity of looking up a key in a standard Python dictionary?",
      "opts": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n log n)"
      ],
      "ans": 0
    },
    {
      "q": "What is the Global Interpreter Lock (GIL) in CPython?",
      "opts": [
        "A mutex that prevents multiple native threads from executing Python bytecodes at once",
        "A security lock that encrypts Python scripts at runtime",
        "A memory manager that locks unused RAM blocks",
        "A compiler pass that prevents global variables from mutation"
      ],
      "ans": 0
    },
    {
      "q": "What is the difference between the \"is\" operator and the \"==\" operator in Python?",
      "opts": [
        "\"is\" checks object identity (same memory address); \"==\" checks value equality",
        "\"is\" checks value equality; \"==\" checks identity",
        "\"is\" converts types; \"==\" does not convert types",
        "\"is\" is used only for strings; \"==\" is used for numbers"
      ],
      "ans": 0
    },
    {
      "q": "Which built-in Python method is called to initialize a newly created class instance?",
      "opts": [
        "__init__",
        "__new__",
        "__construct__",
        "__start__"
      ],
      "ans": 0
    },
    {
      "q": "What does the \"yield\" keyword do inside a Python function?",
      "opts": [
        "Turns the function into a generator that yields values lazily on-demand",
        "Terminates function execution and returns an error code",
        "Forces the CPU to pause execution for 100 milliseconds",
        "Converts local variables into global variables"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary benefit of using a Python Context Manager with the \"with\" statement?",
      "opts": [
        "Guarantees resource cleanup (e.g. closing files or connections) even if exceptions occur",
        "Accelerates function execution by caching return values",
        "Allows multiple threads to access shared memory simultaneously",
        "Bypasses the Python Global Interpreter Lock"
      ],
      "ans": 0
    },
    {
      "q": "What is the result of list(range(1, 10, 2)) in Python?",
      "opts": [
        "[1, 3, 5, 7, 9]",
        "[1, 2, 4, 6, 8]",
        "[2, 4, 6, 8, 10]",
        "[1, 3, 5, 7, 9, 10]"
      ],
      "ans": 0
    },
    {
      "q": "What is the difference between shallow copy (copy.copy) and deep copy (copy.deepcopy)?",
      "opts": [
        "Shallow copy copies the outer container referencing nested objects; deep copy recursively copies all nested objects",
        "Shallow copy copies strings; deep copy copies numbers",
        "Shallow copy works on tuples; deep copy works on lists",
        "Shallow copy writes to disk; deep copy writes to RAM"
      ],
      "ans": 0
    },
    {
      "q": "Which Python collection type stores unique, unordered, and hashable elements?",
      "opts": [
        "set",
        "list",
        "dict",
        "tuple"
      ],
      "ans": 0
    },
    {
      "q": "In Python, what algorithm is used by the Method Resolution Order (MRO) for multiple inheritance?",
      "opts": [
        "C3 Linearization",
        "Depth-First Search (DFS)",
        "Breadth-First Search (BFS)",
        "Dijkstra Algorithm"
      ],
      "ans": 0
    },
    {
      "q": "What is the purpose of functools.wraps when writing Python decorators?",
      "opts": [
        "Preserves the original function name, docstring, and metadata on the decorated wrapper",
        "Converts synchronous functions into asynchronous coroutines",
        "Compiles the function into native C machine code",
        "Encrypts the source code of the wrapped function"
      ],
      "ans": 0
    },
    {
      "q": "How does Python handle memory management and cleanup of unreferenced objects?",
      "opts": [
        "Automatic Reference Counting combined with a cyclic generational Garbage Collector",
        "Manual free() calls required by developers",
        "Linear sweep garbage collection at application exit only",
        "Allocating memory solely on the CPU L1 cache"
      ],
      "ans": 0
    },
    {
      "q": "What does a list comprehension [x for x in range(10) if x % 2 == 0] produce?",
      "opts": [
        "[0, 2, 4, 6, 8]",
        "[2, 4, 6, 8, 10]",
        "[1, 3, 5, 7, 9]",
        "[0, 1, 2, 3, 4]"
      ],
      "ans": 0
    },
    {
      "q": "What does the built-in enumerate() function return when iterating over an iterable?",
      "opts": [
        "Pairs of (index, item) for each element in the iterable",
        "A sorted duplicate list of the iterable",
        "A reversed list of elements",
        "The total count of items in the iterable"
      ],
      "ans": 0
    },
    {
      "q": "In Python exception handling, when does the \"else\" block execute?",
      "opts": [
        "Only if no exception was raised inside the try block",
        "Always, right before the finally block",
        "Only if an exception was caught by except",
        "When the script encounters an unhandled warning"
      ],
      "ans": 0
    },
    {
      "q": "What does the __str__() magic method return compared to __repr__()?",
      "opts": [
        "__str__ returns a user-friendly readable string; __repr__ returns an unambiguous official string for debugging",
        "__str__ returns integer hash; __repr__ returns string",
        "__str__ prints to console; __repr__ writes to file",
        "__str__ is for numbers; __repr__ is for text"
      ],
      "ans": 0
    },
    {
      "q": "What decorator defines a method that receives the class (cls) as its first implicit argument rather than an instance (self)?",
      "opts": [
        "@classmethod",
        "@staticmethod",
        "@property",
        "@abstractmethod"
      ],
      "ans": 0
    },
    {
      "q": "What does collections.defaultdict do when a non-existent key is queried?",
      "opts": [
        "Automatically initializes the key with a default value provided by a factory function without raising KeyError",
        "Raises a KeyError exception immediately",
        "Deletes the dictionary from memory",
        "Returns None without modifying the dictionary"
      ],
      "ans": 0
    },
    {
      "q": "In Python, what is the output of bool([])?",
      "opts": [
        "False",
        "True",
        "None",
        "SyntaxError"
      ],
      "ans": 0
    },
    {
      "q": "What does the zip() function do when passed iterables of unequal length?",
      "opts": [
        "Stops iterating when the shortest input iterable is exhausted",
        "Fills missing values with None automatically",
        "Raises a ValueError exception by default",
        "Loops through the shorter iterable continuously"
      ],
      "ans": 0
    },
    {
      "q": "What module provides asynchronous event loop and coroutines in standard Python?",
      "opts": [
        "asyncio",
        "threading",
        "multiprocessing",
        "concurrent.futures"
      ],
      "ans": 0
    },
    {
      "q": "What does the \"pass\" statement do in Python?",
      "opts": [
        "A null statement that executes and does nothing, used as a syntactic placeholder",
        "Exits the enclosing loop immediately",
        "Skips to the next iteration of the loop",
        "Raises a StopIteration exception"
      ],
      "ans": 0
    },
    {
      "q": "What is the syntax for creating an f-string in Python 3.6+?",
      "opts": [
        "f\"Value is {var}\"",
        "format(\"Value is %s\", var)",
        "\"Value is {0}\".format(var)",
        "s\"Value is $(var)\""
      ],
      "ans": 0
    },
    {
      "q": "What does the __all__ list inside a Python package __init__.py file define?",
      "opts": [
        "The list of public module names exported when \"from package import *\" is used",
        "All external pip dependencies required by the package",
        "The author and license information for PyPI",
        "The list of test cases to execute on pytest"
      ],
      "ans": 0
    },
    {
      "q": "How does Python evaluate round(2.5) and round(3.5)?",
      "opts": [
        "2 and 4 (Banker's Rounding / round half to even)",
        "3 and 4 (Standard arithmetic rounding)",
        "2 and 3 (Truncating towards zero)",
        "3 and 3 (Ceiling rounding)"
      ],
      "ans": 0
    },
    {
      "q": "Which data structure from the collections module implements a double-ended queue with O(1) appends and pops from both ends?",
      "opts": [
        "deque",
        "OrderedDict",
        "ChainMap",
        "Counter"
      ],
      "ans": 0
    }
  ],
  "java-backend-architecture": [
    {
      "q": "In the Java Virtual Machine (JVM), where are object instances and arrays allocated?",
      "opts": [
        "Heap Memory",
        "Stack Memory",
        "Method Area",
        "PC Register"
      ],
      "ans": 0
    },
    {
      "q": "Starting from Java 8, what types of concrete methods can be declared inside an Interface?",
      "opts": [
        "default and static methods",
        "private synchronized methods only",
        "final abstract methods only",
        "native constructor methods"
      ],
      "ans": 0
    },
    {
      "q": "What is the key difference between String and StringBuilder in Java?",
      "opts": [
        "String is immutable; StringBuilder is mutable and faster for frequent concatenations",
        "String is mutable; StringBuilder is immutable",
        "String is thread-safe; StringBuilder is synchronized",
        "String stores bytes; StringBuilder stores integers"
      ],
      "ans": 0
    },
    {
      "q": "What is the fundamental difference between HashMap and Hashtable in Java?",
      "opts": [
        "HashMap is unsynchronized and allows one null key; Hashtable is synchronized and permits no null keys",
        "HashMap is thread-safe; Hashtable is not thread-safe",
        "HashMap is ordered; Hashtable is sorted by keys",
        "HashMap stores primitives; Hashtable stores objects"
      ],
      "ans": 0
    },
    {
      "q": "What is the difference between method Overloading and method Overriding in Java?",
      "opts": [
        "Overloading has same name with different parameter signatures in the same class; Overriding redefines superclass method in subclass",
        "Overloading occurs at runtime; Overriding occurs at compile-time",
        "Overloading requires the @Override annotation; Overriding does not",
        "Overloading is for static methods only; Overriding is for private methods only"
      ],
      "ans": 0
    },
    {
      "q": "In Spring Boot, what does the @RestController annotation combine?",
      "opts": [
        "@Controller and @ResponseBody",
        "@Controller and @Service",
        "@Component and @Repository",
        "@Service and @Autowired"
      ],
      "ans": 0
    },
    {
      "q": "What is the default bean scope in the Spring Framework IoC Container?",
      "opts": [
        "Singleton",
        "Prototype",
        "Request",
        "Session"
      ],
      "ans": 0
    },
    {
      "q": "What does the @SpringBootApplication annotation encapsulate?",
      "opts": [
        "@Configuration, @EnableAutoConfiguration, and @ComponentScan",
        "@Service, @Repository, and @Controller",
        "@Entity, @Table, and @Id",
        "@Component, @Scope, and @Lazy"
      ],
      "ans": 0
    },
    {
      "q": "What is the purpose of the \"volatile\" keyword in Java multithreading?",
      "opts": [
        "Guarantees that updates to a variable are immediately visible to all threads by reading from main memory",
        "Locks the object monitor preventing concurrent access",
        "Prevents the variable from being serialized to disk",
        "Ensures the variable cannot be modified after initialization"
      ],
      "ans": 0
    },
    {
      "q": "What is the difference between ArrayList and LinkedList in Java?",
      "opts": [
        "ArrayList uses a dynamic resizable array (O(1) random access); LinkedList uses a doubly-linked list (O(1) insertions at ends)",
        "ArrayList is synchronized; LinkedList is unsynchronized",
        "ArrayList cannot store duplicates; LinkedList can store duplicates",
        "ArrayList is for primitive types; LinkedList is for reference types"
      ],
      "ans": 0
    },
    {
      "q": "Which interface in Java is used to define the natural ordering of objects via the compareTo() method?",
      "opts": [
        "Comparable",
        "Comparator",
        "Cloneable",
        "Serializable"
      ],
      "ans": 0
    },
    {
      "q": "What are Checked Exceptions in Java?",
      "opts": [
        "Exceptions that inherit from Exception (excluding RuntimeException) and must be handled or declared in throws clause",
        "Exceptions that inherit directly from Error and cause JVM termination",
        "Exceptions that only occur during unit test execution",
        "Exceptions that inherit from RuntimeException and are unchecked at compile-time"
      ],
      "ans": 0
    },
    {
      "q": "What is Inversion of Control (IoC) in the Spring Framework?",
      "opts": [
        "The framework manages object creation and lifecycle, injecting dependencies rather than objects instantiating them",
        "Reversing the flow of TCP network packets",
        "Inverting the inheritance hierarchy between classes and interfaces",
        "Compiling Java bytecode directly into C++ source code"
      ],
      "ans": 0
    },
    {
      "q": "What does the @Transactional annotation in Spring manage?",
      "opts": [
        "Automatic transaction demarcation (commit on success, rollback on RuntimeException)",
        "Encrypting database columns during persistence",
        "Rate limiting incoming HTTP requests",
        "Logging SQL query latency to console"
      ],
      "ans": 0
    },
    {
      "q": "What is the purpose of Optional<T> introduced in Java 8?",
      "opts": [
        "To provide a type-level representation of a value that may or may not be present, reducing NullPointerExceptions",
        "To make method parameters optional in function calls",
        "To enable optional multithreading execution",
        "To define optional dependencies in Maven pom.xml"
      ],
      "ans": 0
    },
    {
      "q": "What is the difference between Hibernate First-Level (L1) and Second-Level (L2) Cache?",
      "opts": [
        "L1 Cache is session-scoped (enabled by default); L2 Cache is SessionFactory-scoped across sessions (optional, shared)",
        "L1 Cache stores data in Redis; L2 Cache stores data in RAM",
        "L1 Cache is for MongoDB; L2 Cache is for PostgreSQL",
        "L1 Cache is client-side; L2 Cache is server-side"
      ],
      "ans": 0
    },
    {
      "q": "How does Spring Data JPA generate SQL queries when using repository interface method names like findByEmailAndStatus(String email, String status)?",
      "opts": [
        "Parses method naming conventions using reflection and dynamically derives the JPQL/SQL query",
        "Requires raw SQL string annotations on all repository methods",
        "Compiles method names into stored procedures on database boot",
        "Executes a full table scan and filters records in JVM memory"
      ],
      "ans": 0
    },
    {
      "q": "What is Type Erasure in Java Generics?",
      "opts": [
        "The compiler strips all generic type parameter information at compile time, replacing with bounds/Object for bytecode backward compatibility",
        "A runtime exception thrown when casting incompatible types",
        "Erasing unused class definitions during garbage collection",
        "A garbage collection phase that clears static variable memory"
      ],
      "ans": 0
    },
    {
      "q": "What is the ExecutorService in java.util.concurrent?",
      "opts": [
        "A high-level framework that manages thread pools and asynchronous task execution lifecycle",
        "A low-level operating system scheduler hook",
        "A tool for compiling Java source code in parallel",
        "A garbage collection thread monitor"
      ],
      "ans": 0
    },
    {
      "q": "Which annotation in Spring Boot is used to extract a variable from the URI path (e.g. /users/{id})?",
      "opts": [
        "@PathVariable",
        "@RequestParam",
        "@RequestBody",
        "@RequestHeader"
      ],
      "ans": 0
    },
    {
      "q": "What is the contract between equals() and hashCode() in Java?",
      "opts": [
        "If two objects are equal according to equals(), they must produce the same hashCode() integer",
        "If two objects have the same hashCode(), they must always be equal according to equals()",
        "hashCode() must return a unique integer for every distinct object in memory",
        "equals() and hashCode() are completely independent with no contractual requirement"
      ],
      "ans": 0
    },
    {
      "q": "In Spring Framework, how does Dependency Injection via constructor compare to field injection with @Autowired?",
      "opts": [
        "Constructor injection is preferred because it enables immutability (final fields) and simplifies unit testing without mocking framework",
        "Field injection is faster at runtime than constructor injection",
        "Constructor injection is deprecated in Spring Boot 3",
        "Field injection is the only way to inject circular dependencies"
      ],
      "ans": 0
    },
    {
      "q": "What does the finalize() method do in Java, and why is it deprecated in modern Java versions?",
      "opts": [
        "Called by garbage collector before object reclamation; deprecated due to unpredictable timing, performance issues, and deadlocks",
        "Finalizes class bytecode compilation; deprecated in favor of GraalVM",
        "Closes database sockets automatically; deprecated for try-with-resources",
        "Prevents classes from being extended; deprecated for sealed classes"
      ],
      "ans": 0
    },
    {
      "q": "Which garbage collector was introduced as the default low-pause collector in Java 9+?",
      "opts": [
        "G1 (Garbage-First) GC",
        "Serial GC",
        "Parallel GC",
        "CMS (Concurrent Mark Sweep) GC"
      ],
      "ans": 0
    },
    {
      "q": "What are Java 14+ Records (record Keyword)?",
      "opts": [
        "Immutable data carrier classes with auto-generated constructor, getters, equals(), hashCode(), and toString()",
        "Database row representations that automatically sync with SQL tables",
        "Classes specifically designed for logging telemetry records to disk",
        "Mutable structures that bypass heap memory allocation"
      ],
      "ans": 0
    },
    {
      "q": "What is Spring Cloud Eureka used for in a microservices architecture?",
      "opts": [
        "Service Registration and Service Discovery",
        "Distributed transaction coordinator",
        "Centralized API rate limiting gateway",
        "Cloud storage bucket synchronization"
      ],
      "ans": 0
    },
    {
      "q": "What is the purpose of the Java Stream.map() operation?",
      "opts": [
        "An intermediate operation that transforms each element of the stream by applying a function",
        "A terminal operation that converts the stream into a java.util.Map",
        "A filtering operation that drops null values",
        "A reduction operation calculating the sum of elements"
      ],
      "ans": 0
    },
    {
      "q": "What is the difference between fail-fast and fail-safe iterators in Java collections?",
      "opts": [
        "Fail-fast throws ConcurrentModificationException if collection is modified during iteration; fail-safe iterates over a copy",
        "Fail-fast continues iterating on errors; fail-safe stops iteration",
        "Fail-fast is thread-safe; fail-safe is unsynchronized",
        "Fail-fast works on arrays; fail-safe works on queues"
      ],
      "ans": 0
    },
    {
      "q": "In Maven, what is the role of the pom.xml file?",
      "opts": [
        "Defines project configuration, dependencies, plugins, and build lifecycle goals (Project Object Model)",
        "Stores runtime database connection passwords",
        "Compiles Java bytecode into native machine executables",
        "Manages git branch merge conflicts"
      ],
      "ans": 0
    },
    {
      "q": "What design pattern does the Spring Framework BeanFactory and ApplicationContext implement?",
      "opts": [
        "Factory Pattern and Inversion of Control Container",
        "Observer Pattern exclusively",
        "Decorator Pattern exclusively",
        "Singleton Anti-Pattern"
      ],
      "ans": 0
    }
  ],
  "cloud-devops": [
    {
      "q": "What is the key difference between a Docker container and a Virtual Machine (VM)?",
      "opts": [
        "Containers share the host OS kernel and isolate at process level; VMs run a full guest OS on top of a hypervisor",
        "Containers require a dedicated hypervisor; VMs do not",
        "VMs start up in milliseconds; containers take minutes to boot",
        "Containers can only run Python applications; VMs run any language"
      ],
      "ans": 0
    },
    {
      "q": "In Kubernetes, what is a Pod?",
      "opts": [
        "The smallest deployable computing unit in K8s, encapsulating one or more containers sharing network and storage",
        "A physical server rack inside a cloud provider datacenter",
        "A continuous integration build pipeline runner",
        "A load balancer that distributes traffic across AWS regions"
      ],
      "ans": 0
    },
    {
      "q": "In Docker, what is the primary advantage of a Multi-Stage Build?",
      "opts": [
        "Keeps production images lean by discarding build-time SDKs and dependencies from the final runtime image",
        "Enables running multiple containers inside a single Docker image",
        "Allows building images across multiple cloud providers simultaneously",
        "Automatically encrypts Docker image layers with AES-256"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary function of Kubernetes Ingress?",
      "opts": [
        "Managing external HTTP and HTTPS routing into services within a Kubernetes cluster",
        "Scraping Prometheus metrics from cluster nodes",
        "Allocating persistent SSD storage volumes to worker nodes",
        "Managing container restart policies on node failure"
      ],
      "ans": 0
    },
    {
      "q": "What is Infrastructure as Code (IaC), and what tool is widely used to achieve it declaratively across multiple clouds?",
      "opts": [
        "Managing and provisioning cloud infrastructure through version-controlled code; Terraform",
        "Manually clicking cloud console buttons; AWS Management Console",
        "Writing shell scripts executed via SSH on live servers; Bash",
        "Configuring routers via telnet; PuTTY"
      ],
      "ans": 0
    },
    {
      "q": "What is the difference between Continuous Integration (CI) and Continuous Deployment (CD)?",
      "opts": [
        "CI automatically builds and tests code changes; CD automatically deploys validated code to production",
        "CI is for frontend applications; CD is for backend databases",
        "CI requires manual approval; CD is always manual",
        "CI manages cloud infrastructure; CD monitors server CPU usage"
      ],
      "ans": 0
    },
    {
      "q": "In AWS networking, what is the difference between a Public Subnet and a Private Subnet?",
      "opts": [
        "Public subnets have direct routing to an Internet Gateway; Private subnets route outbound traffic through a NAT Gateway",
        "Public subnets are free; Private subnets are paid",
        "Public subnets run Linux; Private subnets run Windows",
        "Public subnets cannot run databases; Private subnets cannot run web servers"
      ],
      "ans": 0
    },
    {
      "q": "What is a Blue-Green Deployment strategy?",
      "opts": [
        "Maintaining two identical production environments, switching traffic to the new version once verified to eliminate downtime",
        "Gradually routing 5% of traffic to the new version and scaling up based on metrics",
        "Deploying updates to half the servers on Mondays and the other half on Fridays",
        "Deploying code changes directly into live running container processes"
      ],
      "ans": 0
    },
    {
      "q": "What are the three core pillars of Observability in modern distributed systems?",
      "opts": [
        "Metrics, Logs, and Traces",
        "CPU, RAM, and Disk",
        "Latency, Bandwidth, and Throughput",
        "Alerts, Notifications, and Escalations"
      ],
      "ans": 0
    },
    {
      "q": "In Prometheus monitoring, what collection model is primarily used to gather metrics from targets?",
      "opts": [
        "Pull model: Prometheus periodically scrapes HTTP /metrics endpoints exposed by targets",
        "Push model: Targets push UDP packets to Prometheus every second",
        "Streaming model: Targets stream binary telemetry over Kafka topics",
        "Polling model: Prometheus queries SQL databases directly for metrics"
      ],
      "ans": 0
    },
    {
      "q": "In AWS IAM, what is the Principle of Least Privilege?",
      "opts": [
        "Granting users and services only the minimum permissions necessary to perform their designated tasks",
        "Allowing all developers administrator access to avoid deployment friction",
        "Restricting all cloud access exclusively to the root account",
        "Revoking permissions after 24 hours of inactivity"
      ],
      "ans": 0
    },
    {
      "q": "What is the role of Kubernetes etcd in the cluster control plane?",
      "opts": [
        "A consistent and highly-available distributed key-value store holding all cluster state and configuration",
        "The network proxy that routes traffic to pods",
        "The component that compiles container images from source code",
        "The DNS resolver that translates external domain names"
      ],
      "ans": 0
    },
    {
      "q": "What is a Canary Deployment?",
      "opts": [
        "Rolling out new code to a small subset of users/servers before promoting to the entire fleet",
        "Deploying code exclusively to non-production staging environments",
        "Running automated penetration tests against live production endpoints",
        "Testing database recovery by intentionally terminating instances"
      ],
      "ans": 0
    },
    {
      "q": "What is the difference between Layer 4 (L4) and Layer 7 (L7) load balancers?",
      "opts": [
        "L4 routes based on IP and TCP/UDP ports; L7 inspects HTTP/HTTPS headers, paths, cookies, and payloads",
        "L4 is for cloud environments; L7 is for on-premise datacenters",
        "L4 encrypts SSL; L7 cannot terminate SSL certificates",
        "L4 is software-based; L7 is hardware-based"
      ],
      "ans": 0
    },
    {
      "q": "What is GitOps?",
      "opts": [
        "An operational framework using Git repositories as the single source of truth for declarative infrastructure and applications",
        "Using git commit hooks to send Slack notifications",
        "Hosting git repositories on AWS S3 buckets",
        "Deploying applications by running git pull on production servers via cron"
      ],
      "ans": 0
    },
    {
      "q": "In Kubernetes, what is a ReplicaSet?",
      "opts": [
        "Maintains a stable set of identical replica Pods running at any given time",
        "Creates database read-replicas in AWS RDS",
        "Backs up cluster logs to Amazon Glacier",
        "Replicates container images across multiple Docker registries"
      ],
      "ans": 0
    },
    {
      "q": "What AWS service provides serverless compute that executes code in response to events without provisioning servers?",
      "opts": [
        "AWS Lambda",
        "Amazon EC2",
        "Amazon ECS",
        "Amazon EMR"
      ],
      "ans": 0
    },
    {
      "q": "What is the purpose of a Reverse Proxy like Nginx in a production architecture?",
      "opts": [
        "Sits in front of backend servers handling SSL termination, reverse caching, load balancing, and rate limiting",
        "Translates domain names to IP addresses for web browsers",
        "Connects client browsers directly to physical database sockets",
        "Compresses images before uploading them to Git repositories"
      ],
      "ans": 0
    },
    {
      "q": "In Docker, what is the difference between the CMD and ENTRYPOINT instructions in a Dockerfile?",
      "opts": [
        "ENTRYPOINT sets the default executable; CMD provides default arguments that can be easily overridden at runtime",
        "CMD is mandatory; ENTRYPOINT is optional",
        "CMD sets environment variables; ENTRYPOINT copies files",
        "ENTRYPOINT runs during docker build; CMD runs during docker push"
      ],
      "ans": 0
    },
    {
      "q": "What tool is commonly used for distributed tracing across microservices to visualize request latency breakdown?",
      "opts": [
        "Jaeger / OpenTelemetry",
        "Logstash",
        "Nginx",
        "Docker Compose"
      ],
      "ans": 0
    },
    {
      "q": "In Kubernetes, what is a ConfigMap?",
      "opts": [
        "An API object used to store non-confidential configuration data in key-value pairs separated from container image",
        "A network routing table for inter-pod communication",
        "A visual GUI dashboard mapping pod resource usage",
        "A cluster deployment script written in Python"
      ],
      "ans": 0
    },
    {
      "q": "What AWS storage service provides scalable, durable object storage accessible over HTTP via REST APIs?",
      "opts": [
        "Amazon S3 (Simple Storage Service)",
        "Amazon EBS (Elastic Block Store)",
        "Amazon EFS (Elastic File System)",
        "AWS Storage Gateway"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary benefit of Immutable Infrastructure in cloud environments?",
      "opts": [
        "Eliminates configuration drift by replacing servers rather than modifying running servers in-place",
        "Reduces monthly cloud computing billing rates by 50%",
        "Guarantees that software will never encounter memory leaks",
        "Enables servers to run without operating system kernels"
      ],
      "ans": 0
    },
    {
      "q": "What does the Kubernetes Horizontal Pod Autoscaler (HPA) do?",
      "opts": [
        "Automatically scales the number of Pod replicas in a deployment based on observed CPU/memory utilization",
        "Adds additional physical CPU cores to worker node motherboards",
        "Increases pod network bandwidth allocation during high traffic",
        "Moves pods between AWS availability zones automatically"
      ],
      "ans": 0
    },
    {
      "q": "What is HashiCorp Vault primarily used for in DevOps workflows?",
      "opts": [
        "Securely managing, storing, and tightly controlling access to secrets, tokens, API keys, and certificates",
        "Compiling Docker images from source code",
        "Monitoring Kubernetes pod memory consumption",
        "Hosting private Git repositories with branch protection"
      ],
      "ans": 0
    },
    {
      "q": "What is a Dead Letter Queue (DLQ) in message queuing systems (e.g. RabbitMQ, AWS SQS)?",
      "opts": [
        "A queue that isolates messages that cannot be processed successfully after a designated number of retry attempts",
        "A queue that deletes all messages when consumer memory exceeds 80%",
        "A high-priority queue that bypasses standard rate limits",
        "A queue reserved for administrative system broadcast notices"
      ],
      "ans": 0
    },
    {
      "q": "In CI/CD, what is the role of a Linter (e.g. ESLint, Flake8)?",
      "opts": [
        "Analyzes source code statically to flag programming errors, stylistic bugs, and anti-patterns before execution",
        "Compiles source code into production binary executables",
        "Deploys artifacts to staging environments automatically",
        "Generates mock database fixtures for unit tests"
      ],
      "ans": 0
    },
    {
      "q": "What is Chaos Engineering (e.g. Chaos Monkey)?",
      "opts": [
        "The discipline of experimenting on a system to build confidence in its capability to withstand turbulent conditions in production",
        "Intentionally deploying untested code to production on Fridays",
        "Writing microservices without automated unit test coverage",
        "Disabling database backups to test manual recovery procedures"
      ],
      "ans": 0
    },
    {
      "q": "In Kubernetes, what is a StatefulSet used for instead of a Deployment?",
      "opts": [
        "Managing stateful applications (e.g. databases, Kafka) requiring unique identities and persistent stable storage per pod",
        "Deploying stateless web APIs that can be scaled up or down interchangeably",
        "Running batch jobs that terminate upon successful completion",
        "Managing cluster-wide DaemonSet networking plugins"
      ],
      "ans": 0
    },
    {
      "q": "What is Zero Trust Network Access (ZTNA) in modern DevOps architectures?",
      "opts": [
        "Requires strict identity verification for every person and device trying to access private network resources, regardless of perimeter",
        "Granting access automatically to any device connected to the office Wi-Fi",
        "Disabling encryption between internal microservices to reduce latency",
        "Allowing public access to all staging environments"
      ],
      "ans": 0
    }
  ],
  "cybersecurity-ethical-hacking": [
    {
      "q": "What are the three components of the CIA Triad in Information Security?",
      "opts": [
        "Confidentiality, Integrity, Availability",
        "Control, Inspection, Authorization",
        "Cryptography, Identification, Authentication",
        "Centralization, Isolation, Access"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary difference between Symmetric and Asymmetric Encryption?",
      "opts": [
        "Symmetric uses the same key for encryption and decryption (e.g. AES); Asymmetric uses a public/private keypair (e.g. RSA)",
        "Symmetric uses public keys; Asymmetric uses private keys only",
        "Symmetric is one-way hashing; Asymmetric is reversible",
        "Symmetric encryption cannot be decrypted once applied"
      ],
      "ans": 0
    },
    {
      "q": "What is a Cryptographic Hash function (e.g. SHA-256), and what is its primary property?",
      "opts": [
        "A one-way deterministic mathematical function producing a fixed-size digest that cannot be reversed",
        "A two-way algorithm used to encrypt confidential customer passwords",
        "A compression algorithm that reduces file sizes by 50%",
        "A random number generator that produces unique integers per second"
      ],
      "ans": 0
    },
    {
      "q": "Why is \"Salting\" essential when storing hashed passwords in a database?",
      "opts": [
        "It appends unique random data to each password before hashing, defeating precomputed Rainbow Table attacks",
        "It encrypts the hash with a master AES-256 key",
        "It compresses the password hash so it fits in smaller database columns",
        "It allows administrators to recover lost passwords on request"
      ],
      "ans": 0
    },
    {
      "q": "What is Cross-Site Scripting (XSS)?",
      "opts": [
        "A vulnerability where an attacker injects malicious client-side JavaScript that executes in other users' browsers",
        "An attack where SQL commands are injected into database forms",
        "An attack that floods network bandwidth with UDP packets",
        "An attack that steals physical hard drives from datacenters"
      ],
      "ans": 0
    },
    {
      "q": "What is Cross-Site Request Forgery (CSRF)?",
      "opts": [
        "An attack that tricks an authenticated victim into executing unwanted state-changing actions on a trusted web application",
        "Injecting malicious scripts into public web forums",
        "Intercepting Wi-Fi packets using a rogue access point",
        "Cracking passwords using brute-force dictionary attacks"
      ],
      "ans": 0
    },
    {
      "q": "How does a Web Application Firewall (WAF) differ from a traditional Network Firewall?",
      "opts": [
        "A WAF inspects application layer (Layer 7) HTTP/HTTPS traffic for web attacks; Network firewalls filter network packets (Layers 3-4)",
        "A WAF protects against physical hardware theft; Network firewalls protect Wi-Fi",
        "A WAF is only for cloud environments; Network firewalls are for home routers",
        "A WAF replaces the need for SSL/TLS certificates"
      ],
      "ans": 0
    },
    {
      "q": "What is a Man-In-The-Middle (MITM) attack, and how is it primarily mitigated?",
      "opts": [
        "An attacker intercepts communication between two parties; mitigated by end-to-end TLS/HTTPS encryption and certificate verification",
        "An attacker uses brute force against passwords; mitigated by MFA",
        "An attacker floods server CPU; mitigated by auto-scaling",
        "An attacker steals cookies; mitigated by disabling JavaScript"
      ],
      "ans": 0
    },
    {
      "q": "What is the role of an ARP Spoofing attack on a Local Area Network (LAN)?",
      "opts": [
        "Associating the attacker's MAC address with the IP address of the legitimate default gateway to intercept LAN traffic",
        "Cracking WPA2 Wi-Fi encryption passphrases",
        "Flooding the network switch with random MAC addresses to cause a broadcast storm",
        "Spoofing DNS root server certificates"
      ],
      "ans": 0
    },
    {
      "q": "What vulnerability category ranks consistently as #1 in the OWASP Top 10 web security risks?",
      "opts": [
        "Broken Access Control",
        "Security Misconfiguration",
        "Software and Data Integrity Failures",
        "Cryptographic Failures"
      ],
      "ans": 0
    },
    {
      "q": "What is a Buffer Overflow vulnerability in low-level languages like C/C++?",
      "opts": [
        "Writing data past the boundary of an allocated buffer, overwriting adjacent memory and potentially hijacking control flow",
        "Reading past the end of a database result set",
        "Exhausting network buffer queues on high traffic",
        "Allocating more memory on the heap than available physical RAM"
      ],
      "ans": 0
    },
    {
      "q": "What is the difference between an Intrusion Detection System (IDS) and an Intrusion Prevention System (IPS)?",
      "opts": [
        "An IDS passively monitors and alerts on suspicious traffic; an IPS sits in-line and actively drops or blocks malicious traffic",
        "An IDS is hardware; an IPS is software",
        "An IDS monitors outgoing traffic; an IPS monitors incoming traffic",
        "An IDS is only for wireless networks; an IPS is for wired networks"
      ],
      "ans": 0
    },
    {
      "q": "In penetration testing, what tool is considered the industry standard for port scanning and network service enumeration?",
      "opts": [
        "Nmap",
        "Burp Suite",
        "Wireshark",
        "Metasploit"
      ],
      "ans": 0
    },
    {
      "q": "What does the HTTP header \"Content-Security-Policy\" (CSP) help prevent?",
      "opts": [
        "Cross-Site Scripting (XSS) and data injection by specifying approved origins for executable scripts and resources",
        "SQL Injection by sanitizing database queries",
        "DDoS attacks by rate limiting requests per IP",
        "MITM attacks by enforcing HTTPS connections"
      ],
      "ans": 0
    },
    {
      "q": "What is a Zero-Day Vulnerability?",
      "opts": [
        "A software vulnerability that is known to attackers or researchers but has no available patch from the vendor",
        "A vulnerability that requires zero technical skill to exploit",
        "A security flaw that automatically resolves itself within 24 hours",
        "A bug that was introduced on day zero of project creation"
      ],
      "ans": 0
    },
    {
      "q": "What are the three factors in Multi-Factor Authentication (MFA)?",
      "opts": [
        "Something you know (password), Something you have (device/token), Something you are (biometrics)",
        "Username, Password, Security Question",
        "Email, Phone Number, Home Address",
        "Fingerprint, Face ID, Retina Scan"
      ],
      "ans": 0
    },
    {
      "q": "What is DNS Spoofing (DNS Cache Poisoning)?",
      "opts": [
        "Injecting fraudulent DNS records into a recursive resolver cache to redirect users to malicious IP addresses",
        "Stealing domain ownership through registrar account takeovers",
        "Flooding authoritative DNS name servers with NXDOMAIN queries",
        "Modifying local /etc/hosts files via administrative access"
      ],
      "ans": 0
    },
    {
      "q": "What security principle dictates that a user should be granted the minimum permissions required to perform their job?",
      "opts": [
        "Principle of Least Privilege",
        "Defense in Depth",
        "Fail-Safe Defaults",
        "Separation of Duties"
      ],
      "ans": 0
    },
    {
      "q": "In Cryptography, what is a \"Nonce\"?",
      "opts": [
        "An arbitrary number used only once in cryptographic communications to prevent replay attacks",
        "A master private key stored in an HSM",
        "A mathematical constant used to calculate prime numbers",
        "An encrypted password hash stored on disk"
      ],
      "ans": 0
    },
    {
      "q": "What is a Honeypot in defensive cyber operations?",
      "opts": [
        "A decoy system deliberately exposed to detect, deflect, and study unauthorized attacker techniques",
        "A password manager that auto-fills encrypted credentials",
        "A secure enclave inside CPU hardware (e.g. Intel SGX)",
        "A cryptographic vault that stores administrative SSH keys"
      ],
      "ans": 0
    },
    {
      "q": "What does the HTTP response header \"X-Frame-Options: DENY\" prevent?",
      "opts": [
        "Clickjacking attacks by disallowing the page from being embedded in an <iframe>",
        "Cross-Site Scripting by disabling JavaScript frames",
        "SQL Injection by denying framed query strings",
        "Cookie theft by denying cross-origin frames"
      ],
      "ans": 0
    },
    {
      "q": "What is a Distributed Denial of Service (DDoS) attack using a \"Botnet\"?",
      "opts": [
        "Overwhelming a target server with traffic coordinated across thousands of compromised Internet-connected devices",
        "Cracking database passwords using a cluster of GPU servers",
        "Sending deceptive phishing emails to company employees",
        "Intercepting cellular SMS authentication tokens"
      ],
      "ans": 0
    },
    {
      "q": "What is the role of a Security Information and Event Management (SIEM) platform (e.g. Splunk, Microsoft Sentinel)?",
      "opts": [
        "Aggregating, correlating, and analyzing log data across an enterprise in real time to detect security incidents",
        "Deploying firewalls automatically to cloud subnets",
        "Encrypting hard drive partitions on employee laptops",
        "Conducting automated black-box penetration testing"
      ],
      "ans": 0
    },
    {
      "q": "In Public Key Infrastructure (PKI), what is the function of a Certificate Authority (CA)?",
      "opts": [
        "A trusted third-party entity that issues and digitally signs certificates verifying the identity of public key owners",
        "An agency that manages global DNS domain name assignments",
        "A hardware device that encrypts network traffic at the router level",
        "A server that stores encrypted user passwords"
      ],
      "ans": 0
    },
    {
      "q": "What is Ransomware?",
      "opts": [
        "Malware that encrypts victim files and demands payment in cryptocurrency in exchange for decryption keys",
        "Spyware that logs keystrokes to steal bank account credentials",
        "A virus that deletes operating system system32 files",
        "Adware that displays unwanted popup advertisements"
      ],
      "ans": 0
    },
    {
      "q": "What is the difference between Black-Box and White-Box Penetration Testing?",
      "opts": [
        "Black-Box simulates an external attacker with zero prior knowledge; White-Box provides full internal architecture and source code access",
        "Black-Box is illegal; White-Box is legal",
        "Black-Box is for cloud; White-Box is for hardware",
        "Black-Box tests firewalls; White-Box tests web applications"
      ],
      "ans": 0
    },
    {
      "q": "What is Privilege Escalation in cyber attacks?",
      "opts": [
        "Exploiting a bug, design flaw, or configuration error to gain higher access permissions than originally intended (e.g. root/admin)",
        "Increasing network bandwidth to execute DDoS attacks faster",
        "Cracking password hashes using rainbow tables",
        "Bypassing web application firewalls with encoded characters"
      ],
      "ans": 0
    },
    {
      "q": "What is the purpose of HSTS (HTTP Strict Transport Security)?",
      "opts": [
        "Forces browsers to communicate with the domain exclusively over HTTPS, protecting against SSL-stripping attacks",
        "Enforces multi-factor authentication on every HTTP login",
        "Limits HTTP request rates to prevent brute force attacks",
        "Restricts HTTP access to approved IP whitelist ranges"
      ],
      "ans": 0
    },
    {
      "q": "In Wi-Fi security, what vulnerability in WPA2 allows attackers within radio range to intercept and decrypt Wi-Fi traffic?",
      "opts": [
        "KRACK (Key Reinstallation Attack)",
        "Heartbleed",
        "Shellshock",
        "EternalBlue"
      ],
      "ans": 0
    },
    {
      "q": "What does the \"Defense in Depth\" security strategy entail?",
      "opts": [
        "Deploying multiple layered security controls throughout an IT system rather than relying on a single defensive barrier",
        "Protecting the physical datacenter with biometric locks and armed guards only",
        "Encrypting data only when at rest on persistent disks",
        "Relying exclusively on a next-generation web application firewall"
      ],
      "ans": 0
    }
  ],
  "dsa": [
    {
      "q": "What is the worst-case time complexity of searching for an element in an unbalanced Binary Search Tree (BST)?",
      "opts": [
        "O(n)",
        "O(log n)",
        "O(1)",
        "O(n log n)"
      ],
      "ans": 0
    },
    {
      "q": "Which data structure operates strictly on a First-In-First-Out (FIFO) principle?",
      "opts": [
        "Queue",
        "Stack",
        "Binary Heap",
        "Priority Queue"
      ],
      "ans": 0
    },
    {
      "q": "What is the average time complexity of QuickSort on an array of n elements?",
      "opts": [
        "O(n log n)",
        "O(n^2)",
        "O(n)",
        "O(log n)"
      ],
      "ans": 0
    },
    {
      "q": "In a Hash Table, what technique resolves collisions by storing multiple entries in a linked list at the same bucket index?",
      "opts": [
        "Separate Chaining",
        "Linear Probing",
        "Quadratic Probing",
        "Double Hashing"
      ],
      "ans": 0
    },
    {
      "q": "Which algorithm is used to find the shortest path from a single source vertex to all other vertices in a weighted graph with non-negative edges?",
      "opts": [
        "Dijkstra's Algorithm",
        "Kruskal's Algorithm",
        "Prim's Algorithm",
        "Floyd-Warshall Algorithm"
      ],
      "ans": 0
    },
    {
      "q": "What data structure is typically used to implement Breadth-First Search (BFS) on a graph?",
      "opts": [
        "Queue",
        "Stack",
        "Min Heap",
        "Binary Search Tree"
      ],
      "ans": 0
    },
    {
      "q": "What is the minimum number of queues needed to implement a Stack efficiently?",
      "opts": [
        "2",
        "1",
        "3",
        "4"
      ],
      "ans": 0
    },
    {
      "q": "Which sorting algorithm is guaranteed to be stable and have an O(n log n) worst-case time complexity?",
      "opts": [
        "MergeSort",
        "QuickSort",
        "HeapSort",
        "Selection Sort"
      ],
      "ans": 0
    },
    {
      "q": "What is the height of a balanced Binary Tree having n nodes?",
      "opts": [
        "O(log n)",
        "O(n)",
        "O(n^2)",
        "O(1)"
      ],
      "ans": 0
    },
    {
      "q": "Which data structure is best suited for checking whether parentheses in a mathematical expression are balanced?",
      "opts": [
        "Stack",
        "Queue",
        "Array",
        "Linked List"
      ],
      "ans": 0
    },
    {
      "q": "What is the time complexity of inserting a node at the head of a Singly Linked List if the head pointer is known?",
      "opts": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n log n)"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary characteristic of an AVL Tree?",
      "opts": [
        "The heights of the two child subtrees of any node differ by at most one",
        "All leaves are at the exact same depth",
        "Nodes can have up to three children",
        "Elements are stored in descending order only"
      ],
      "ans": 0
    },
    {
      "q": "Which algorithmic paradigm does the '0/1 Knapsack Problem' typically utilize for an optimal polynomial-time solution?",
      "opts": [
        "Dynamic Programming",
        "Greedy Approach",
        "Divide and Conquer",
        "Backtracking only"
      ],
      "ans": 0
    },
    {
      "q": "What is the space complexity of an in-place HeapSort algorithm?",
      "opts": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n log n)"
      ],
      "ans": 0
    },
    {
      "q": "In a Red-Black tree, what color must the root node always be?",
      "opts": [
        "Black",
        "Red",
        "Yellow",
        "Blue"
      ],
      "ans": 0
    },
    {
      "q": "Which algorithm finds the Minimum Spanning Tree (MST) by sorting all graph edges in ascending order of their weights?",
      "opts": [
        "Kruskal's Algorithm",
        "Prim's Algorithm",
        "Bellman-Ford Algorithm",
        "Dijkstra's Algorithm"
      ],
      "ans": 0
    },
    {
      "q": "What is the time complexity of accessing an element in an array by its index?",
      "opts": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n^2)"
      ],
      "ans": 0
    },
    {
      "q": "Which graph traversal strategy uses a Stack (or recursion)?",
      "opts": [
        "Depth-First Search (DFS)",
        "Breadth-First Search (BFS)",
        "Topological Sort via Kahn's Algorithm",
        "Level-order traversal"
      ],
      "ans": 0
    },
    {
      "q": "In an optimal Huffman Coding tree, which characters receive the shortest binary codes?",
      "opts": [
        "Characters with the highest frequencies",
        "Characters with the lowest frequencies",
        "Vowels only",
        "Alphabetically first characters"
      ],
      "ans": 0
    },
    {
      "q": "What is the amortized time complexity of inserting an element into a dynamic array (like std::vector or ArrayList)?",
      "opts": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n^2)"
      ],
      "ans": 0
    },
    {
      "q": "Which data structure is commonly used to implement LRU (Least Recently Used) Cache with O(1) get and put operations?",
      "opts": [
        "Hash Map + Doubly Linked List",
        "Binary Search Tree + Stack",
        "Array + Queue",
        "Single Linked List + Min Heap"
      ],
      "ans": 0
    },
    {
      "q": "What is the maximum number of children a node can have in a Binary Tree?",
      "opts": [
        "2",
        "3",
        "1",
        "Unlimited"
      ],
      "ans": 0
    },
    {
      "q": "What does Kadane's Algorithm find in O(n) time?",
      "opts": [
        "Maximum Subarray Sum",
        "Longest Common Subsequence",
        "Shortest Cycle in a Graph",
        "Median of Two Sorted Arrays"
      ],
      "ans": 0
    },
    {
      "q": "Which data structure is optimal for finding the median of a continuously incoming stream of numbers?",
      "opts": [
        "Two Heaps (Max-Heap and Min-Heap)",
        "A sorted singly linked list",
        "A circular queue",
        "A stack"
      ],
      "ans": 0
    },
    {
      "q": "What is the worst-case time complexity of Bubble Sort?",
      "opts": [
        "O(n^2)",
        "O(n log n)",
        "O(n)",
        "O(log n)"
      ],
      "ans": 0
    },
    {
      "q": "What property must a Directed Graph satisfy to have a valid Topological Ordering?",
      "opts": [
        "It must be a Directed Acyclic Graph (DAG)",
        "It must be strongly connected",
        "It must have undirected cycles",
        "It must have equal in-degrees and out-degrees"
      ],
      "ans": 0
    },
    {
      "q": "In a Min-Heap, where is the smallest element always located?",
      "opts": [
        "At the root node",
        "At the leftmost leaf",
        "At the rightmost leaf",
        "At any internal node"
      ],
      "ans": 0
    },
    {
      "q": "What is the time complexity of searching in a balanced Trie for a word of length L?",
      "opts": [
        "O(L)",
        "O(n)",
        "O(n * L)",
        "O(log n)"
      ],
      "ans": 0
    },
    {
      "q": "Which of the following problems can be solved using the Disjoint Set Union (Union-Find) data structure?",
      "opts": [
        "Detecting cycles in an undirected graph",
        "Finding all-pairs shortest paths",
        "Evaluating postfix expressions",
        "Sorting an array in linear time"
      ],
      "ans": 0
    },
    {
      "q": "What is the number of edges in a tree with V vertices?",
      "opts": [
        "V - 1",
        "V",
        "V + 1",
        "2 * V"
      ],
      "ans": 0
    }
  ],
  "core-engineering": [
    {
      "q": "According to Newton's Second Law of Motion, what is the mathematical formula for force?",
      "opts": [
        "F = m * a",
        "F = m / a",
        "F = m * v^2",
        "F = 0.5 * m * v"
      ],
      "ans": 0
    },
    {
      "q": "What does Ohm's Law state for an ideal electrical resistor?",
      "opts": [
        "V = I * R",
        "V = I / R",
        "P = V * R",
        "I = V * R"
      ],
      "ans": 0
    },
    {
      "q": "Which thermodynamic cycle represents the ideal theoretical maximum efficiency for a heat engine operating between two temperatures?",
      "opts": [
        "Carnot Cycle",
        "Rankine Cycle",
        "Otto Cycle",
        "Diesel Cycle"
      ],
      "ans": 0
    },
    {
      "q": "In structural mechanics, what does the Hooke's Law state within the elastic limit?",
      "opts": [
        "Stress is directly proportional to Strain",
        "Strain is inversely proportional to Area",
        "Force equals Mass times Velocity",
        "Pressure is constant throughout the cross-section"
      ],
      "ans": 0
    },
    {
      "q": "Which semiconductor component conducts current primarily in only one direction?",
      "opts": [
        "Diode",
        "Capacitor",
        "Inductor",
        "Transformer"
      ],
      "ans": 0
    },
    {
      "q": "In fluid mechanics, what principle explains the lift generated by an aircraft wing due to fluid velocity and pressure differences?",
      "opts": [
        "Bernoulli's Principle",
        "Archimedes' Principle",
        "Pascal's Law",
        "Fourier's Law"
      ],
      "ans": 0
    },
    {
      "q": "What is the SI unit of electrical capacitance?",
      "opts": [
        "Farad",
        "Henry",
        "Tesla",
        "Weber"
      ],
      "ans": 0
    },
    {
      "q": "In civil engineering, what is the primary structural function of reinforced steel rebar inside concrete beams?",
      "opts": [
        "To resist tensile stresses while concrete resists compressive stresses",
        "To prevent concrete from absorbing water",
        "To decrease the overall density of the structure",
        "To conduct electrical ground currents"
      ],
      "ans": 0
    },
    {
      "q": "Which logic gate outputs HIGH (1) if and only if all of its inputs are HIGH (1)?",
      "opts": [
        "AND Gate",
        "OR Gate",
        "XOR Gate",
        "NOT Gate"
      ],
      "ans": 0
    },
    {
      "q": "What type of stress occurs when opposing forces act parallel to the cross-sectional plane of a material?",
      "opts": [
        "Shear Stress",
        "Tensile Stress",
        "Compressive Stress",
        "Bending Stress"
      ],
      "ans": 0
    },
    {
      "q": "What law states that the total current entering a circuit junction must equal the total current leaving that junction?",
      "opts": [
        "Kirchhoff's Current Law (KCL)",
        "Kirchhoff's Voltage Law (KVL)",
        "Ampere's Law",
        "Faraday's Law"
      ],
      "ans": 0
    },
    {
      "q": "In mechanical engineering, what is the ratio of pitch diameter to the number of teeth on a gear called?",
      "opts": [
        "Module",
        "Diametral Pitch",
        "Circular Pitch",
        "Addendum"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary function of a step-down electrical transformer?",
      "opts": [
        "Decreasing voltage while increasing current",
        "Increasing voltage while decreasing current",
        "Converting AC electricity to DC electricity",
        "Storing energy in an electrostatic field"
      ],
      "ans": 0
    },
    {
      "q": "Which property describes a material's ability to undergo significant permanent plastic deformation before fracture?",
      "opts": [
        "Ductility",
        "Brittleness",
        "Hardness",
        "Resilience"
      ],
      "ans": 0
    },
    {
      "q": "In electronics, what terminal of a Bipolar Junction Transistor (BJT) controls the flow of majority carriers?",
      "opts": [
        "Base",
        "Collector",
        "Emitter",
        "Gate"
      ],
      "ans": 0
    },
    {
      "q": "What type of foundation is most suitable when surface soils have low bearing capacity and structural loads must reach deep bedrock?",
      "opts": [
        "Pile Foundation",
        "Strip Footing",
        "Spread Footing",
        "Isolated Pad Footing"
      ],
      "ans": 0
    },
    {
      "q": "What does the First Law of Thermodynamics fundamentally express?",
      "opts": [
        "Conservation of Energy",
        "Increase of Entropy",
        "Absolute zero temperature limit",
        "Thermal equilibrium between bodies"
      ],
      "ans": 0
    },
    {
      "q": "Which instrument is used to measure electrical potential difference across two points without drawing substantial current?",
      "opts": [
        "Voltmeter",
        "Ammeter",
        "Ohmmeter",
        "Galvanometer"
      ],
      "ans": 0
    },
    {
      "q": "What is the relationship between torque (T), rotational speed (omega), and power (P) in mechanical drives?",
      "opts": [
        "P = T * omega",
        "P = T / omega",
        "P = T^2 * omega",
        "T = P * omega"
      ],
      "ans": 0
    },
    {
      "q": "In communications engineering, what modulation technique varies the frequency of a carrier wave in proportion to the message signal?",
      "opts": [
        "Frequency Modulation (FM)",
        "Amplitude Modulation (AM)",
        "Phase Modulation (PM)",
        "Pulse Code Modulation (PCM)"
      ],
      "ans": 0
    },
    {
      "q": "What is the point on a stress-strain curve beyond which deformation is irreversible and permanent?",
      "opts": [
        "Yield Point",
        "Proportional Limit",
        "Ultimate Tensile Strength",
        "Fracture Point"
      ],
      "ans": 0
    },
    {
      "q": "What is the standard frequency of AC mains power transmission in India?",
      "opts": [
        "50 Hz",
        "60 Hz",
        "100 Hz",
        "120 Hz"
      ],
      "ans": 0
    },
    {
      "q": "Which thermal transfer mechanism does not require any material medium to propagate heat?",
      "opts": [
        "Radiation",
        "Conduction",
        "Convection",
        "Advection"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary constituent of Portland cement responsible for early compressive strength development?",
      "opts": [
        "Tricalcium Silicate (C3S)",
        "Dicalcium Silicate (C2S)",
        "Tricalcium Aluminate (C3A)",
        "Gypsum"
      ],
      "ans": 0
    },
    {
      "q": "In an RLC circuit, what condition occurs when inductive reactance equals capacitive reactance (XL = XC)?",
      "opts": [
        "Resonance",
        "Antiresonance",
        "Short Circuit",
        "Open Circuit"
      ],
      "ans": 0
    },
    {
      "q": "Which machine element is used to support rotating shafts while minimizing rotational friction?",
      "opts": [
        "Bearing",
        "Coupling",
        "Keyway",
        "Flywheel"
      ],
      "ans": 0
    },
    {
      "q": "What type of survey instrument measures both horizontal and vertical angles as well as slope distances electronically?",
      "opts": [
        "Total Station",
        "Theodolite",
        "Dumpy Level",
        "Prismatic Compass"
      ],
      "ans": 0
    },
    {
      "q": "What is the operational purpose of an op-amp configured with negative feedback?",
      "opts": [
        "Stabilizing closed-loop gain and broadening bandwidth",
        "Maximizing open-loop saturation",
        "Generating high-frequency carrier oscillations",
        "Eliminating input impedance"
      ],
      "ans": 0
    },
    {
      "q": "In a 4-stroke internal combustion engine, during which stroke is mechanical work delivered to the crankshaft?",
      "opts": [
        "Power (Expansion) Stroke",
        "Compression Stroke",
        "Intake Stroke",
        "Exhaust Stroke"
      ],
      "ans": 0
    },
    {
      "q": "What does the Reynolds Number in fluid dynamics indicate?",
      "opts": [
        "Ratio of inertial forces to viscous forces",
        "Ratio of buoyant forces to drag forces",
        "Ratio of pressure forces to surface tension",
        "Velocity of sound in the medium"
      ],
      "ans": 0
    }
  ],
  "business-management": [
    {
      "q": "Which marketing framework encompasses Product, Price, Place, and Promotion?",
      "opts": [
        "The 4 Ps of Marketing Mix",
        "Porter's Five Forces",
        "SWOT Analysis",
        "BCG Matrix"
      ],
      "ans": 0
    },
    {
      "q": "In corporate finance, what does EBITDA stand for?",
      "opts": [
        "Earnings Before Interest, Taxes, Depreciation, and Amortization",
        "Equity Before Investment, Trading, Debt, and Assets",
        "Estimated Balance of International Trade, Debt, and Accounts",
        "Earnings Behind Insurance, Taxes, Dividends, and Assets"
      ],
      "ans": 0
    },
    {
      "q": "What financial statement provides a snapshot of a company's assets, liabilities, and shareholders' equity at a specific point in time?",
      "opts": [
        "Balance Sheet",
        "Income Statement",
        "Cash Flow Statement",
        "Statement of Retained Earnings"
      ],
      "ans": 0
    },
    {
      "q": "In strategic management, which tool analyzes internal Strengths and Weaknesses alongside external Opportunities and Threats?",
      "opts": [
        "SWOT Analysis",
        "PESTEL Analysis",
        "Ansoff Matrix",
        "Value Chain Analysis"
      ],
      "ans": 0
    },
    {
      "q": "What metric measures the total revenue a business can reasonably expect from a single customer account throughout their relationship?",
      "opts": [
        "Customer Lifetime Value (CLV / LTV)",
        "Customer Acquisition Cost (CAC)",
        "Net Promoter Score (NPS)",
        "Return on Equity (ROE)"
      ],
      "ans": 0
    },
    {
      "q": "Which inventory management strategy seeks to receive goods only as they are needed in the production process, minimizing holding costs?",
      "opts": [
        "Just-In-Time (JIT)",
        "Economic Order Quantity (EOQ)",
        "First-In-First-Out (FIFO)",
        "Safety Stock Buffer"
      ],
      "ans": 0
    },
    {
      "q": "In Agile project management, what is a fixed-duration iteration (usually 1–4 weeks) called where a team delivers completed work?",
      "opts": [
        "Sprint",
        "Kanban Queue",
        "Milestone",
        "Backlog Grooming"
      ],
      "ans": 0
    },
    {
      "q": "What metric measures the percentage of customers who stop using a company's product or service during a given timeframe?",
      "opts": [
        "Churn Rate",
        "Bounce Rate",
        "Conversion Rate",
        "Retention Index"
      ],
      "ans": 0
    },
    {
      "q": "In the BCG Growth-Share Matrix, what are high market share business units in a slow-growing mature industry termed?",
      "opts": [
        "Cash Cows",
        "Stars",
        "Question Marks",
        "Dogs"
      ],
      "ans": 0
    },
    {
      "q": "What accounting principle requires expenses to be recognized in the same period as the revenues they helped generate?",
      "opts": [
        "Matching Principle",
        "Conservatism Principle",
        "Cost Principle",
        "Materiality Principle"
      ],
      "ans": 0
    },
    {
      "q": "What does ROI stand for in performance evaluation?",
      "opts": [
        "Return on Investment",
        "Rate of Inflation",
        "Receipt of Income",
        "Reserve on Inventory"
      ],
      "ans": 0
    },
    {
      "q": "In digital marketing, what does CPC represent in pay-per-click advertising campaigns?",
      "opts": [
        "Cost Per Click",
        "Cost Per Customer",
        "Clicks Per Conversion",
        "Click Passing Channel"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary goal of Human Resource Management (HRM) during the onboarding phase?",
      "opts": [
        "Integrating new employees smoothly into company culture, tools, and job roles",
        "Conducting annual salary appraisals",
        "Managing legal termination procedures",
        "Auditing employee tax filings"
      ],
      "ans": 0
    },
    {
      "q": "Which financial ratio divides Current Assets by Current Liabilities to measure short-term liquidity?",
      "opts": [
        "Current Ratio",
        "Debt-to-Equity Ratio",
        "Quick Acid-Test Ratio",
        "Gross Profit Margin"
      ],
      "ans": 0
    },
    {
      "q": "What does SEO stand for in modern inbound growth marketing?",
      "opts": [
        "Search Engine Optimization",
        "Social Engagement Operations",
        "Sales Enterprise Outreach",
        "Structured Email Overview"
      ],
      "ans": 0
    },
    {
      "q": "Which competitive strategy identifies a firm aiming to become the lowest-cost producer in its industry?",
      "opts": [
        "Cost Leadership Strategy",
        "Differentiation Strategy",
        "Focus Strategy",
        "Diversification Strategy"
      ],
      "ans": 0
    },
    {
      "q": "What type of B2B sales model involves selling software hosted on cloud servers and accessed via recurring subscriptions?",
      "opts": [
        "Software as a Service (SaaS)",
        "On-Premise Licensing",
        "Perpetual Commercial Distribution",
        "Open Source Hardware"
      ],
      "ans": 0
    },
    {
      "q": "In operations research, what is the path through a project network with zero slack time that determines total project duration?",
      "opts": [
        "Critical Path",
        "Fast-Track Path",
        "Slack Route",
        "Buffer Chain"
      ],
      "ans": 0
    },
    {
      "q": "What KPI measures customer loyalty by asking how likely they are to recommend a company to a friend or colleague?",
      "opts": [
        "Net Promoter Score (NPS)",
        "Customer Satisfaction Score (CSAT)",
        "Customer Effort Score (CES)",
        "System Usability Scale (SUS)"
      ],
      "ans": 0
    },
    {
      "q": "What is the point in volume sales where total revenue equals total fixed and variable costs?",
      "opts": [
        "Break-even Point",
        "Operating Margin Point",
        "Contribution Plateau",
        "Profit Maximization Point"
      ],
      "ans": 0
    },
    {
      "q": "What is the formula for Gross Profit?",
      "opts": [
        "Revenue - Cost of Goods Sold (COGS)",
        "Revenue - Operating Expenses",
        "Net Income - Taxes",
        "Operating Income + Dividends"
      ],
      "ans": 0
    },
    {
      "q": "In supply chain management, what phenomenon describes how small fluctuations in consumer demand amplify as they move up the supply chain?",
      "opts": [
        "Bullwhip Effect",
        "Hawthorne Effect",
        "Pareto Principle",
        "Halo Effect"
      ],
      "ans": 0
    },
    {
      "q": "Which leadership style empowers team members with high autonomy and minimal direct oversight?",
      "opts": [
        "Laissez-Faire Leadership",
        "Autocratic Leadership",
        "Bureaucratic Leadership",
        "Transactional Leadership"
      ],
      "ans": 0
    },
    {
      "q": "In financial markets, what does IPO stand for?",
      "opts": [
        "Initial Public Offering",
        "International Portfolio Order",
        "Internal Profit Organization",
        "Index Price Optimization"
      ],
      "ans": 0
    },
    {
      "q": "What does the 80/20 rule (Pareto Principle) assert in business productivity?",
      "opts": [
        "80% of outcomes result from 20% of causes or inputs",
        "80% of budget must be allocated to marketing",
        "20% of staff should manage 80% of projects",
        "Profits must grow by 20% over 80 business days"
      ],
      "ans": 0
    },
    {
      "q": "What term describes the strategic buying and selling of foreign currencies to facilitate international trade or profit from exchange rate shifts?",
      "opts": [
        "Foreign Exchange (Forex) Trading",
        "Securities Underwriting",
        "Venture Capital Financing",
        "Factoring Accounts"
      ],
      "ans": 0
    },
    {
      "q": "In performance management, what does the acronym SMART stand for when defining project objectives?",
      "opts": [
        "Specific, Measurable, Achievable, Relevant, Time-bound",
        "Strategic, Marketable, Authorized, Rapid, Targeted",
        "Systematic, Modular, Accountable, Robust, Tested",
        "Standardized, Monitored, Accurate, Reviewed, Tracked"
      ],
      "ans": 0
    },
    {
      "q": "What is working capital defined as?",
      "opts": [
        "Current Assets - Current Liabilities",
        "Total Assets - Total Debt",
        "Cash at Bank + Fixed Assets",
        "Net Profit - Depreciation"
      ],
      "ans": 0
    },
    {
      "q": "Which pricing strategy involves setting high initial prices when launching an innovative product and gradually lowering prices over time?",
      "opts": [
        "Price Skimming",
        "Penetration Pricing",
        "Cost-Plus Pricing",
        "Freemium Pricing"
      ],
      "ans": 0
    },
    {
      "q": "In organizational design, what does 'Span of Control' refer to?",
      "opts": [
        "The number of direct subordinates a manager supervises",
        "The geographical reach of sales branches",
        "The maximum budget allocated to an executive",
        "The duration of board member tenures"
      ],
      "ans": 0
    }
  ],
  "ui-ux-design": [
    {
      "q": "In digital product design, what does 'UI' stand for?",
      "opts": [
        "User Interface",
        "User Interaction",
        "Unified Integration",
        "Universal Identity"
      ],
      "ans": 0
    },
    {
      "q": "In User Experience (UX) methodology, what is a fictional representation of an ideal target customer based on research data called?",
      "opts": [
        "User Persona",
        "Wireframe",
        "Storyboard",
        "Customer Empathy Map"
      ],
      "ans": 0
    },
    {
      "q": "According to WCAG (Web Content Accessibility Guidelines), what is the minimum contrast ratio required for normal body text at AA level?",
      "opts": [
        "4.5:1",
        "3.0:1",
        "7.0:1",
        "2.0:1"
      ],
      "ans": 0
    },
    {
      "q": "In Figma, what feature dynamically resizes container frames and elements according to their content and layout rules?",
      "opts": [
        "Auto Layout",
        "Smart Animate",
        "Boolean Groups",
        "Interactive Overlays"
      ],
      "ans": 0
    },
    {
      "q": "What psychological law predicts that the time required to rapidly move to a target area is a function of the ratio between the distance to the target and the width of the target?",
      "opts": [
        "Fitts's Law",
        "Hick's Law",
        "Miller's Law",
        "Jakob's Law"
      ],
      "ans": 0
    },
    {
      "q": "What does Hick's Law state in interaction design?",
      "opts": [
        "The time it takes to make a decision increases with the number and complexity of choices",
        "Users spend most of their time on other sites",
        "Human working memory can hold only 7 plus-or-minus 2 items",
        "Objects near each other tend to be grouped together"
      ],
      "ans": 0
    },
    {
      "q": "In product discovery, what is a low-fidelity, basic structural outline of a screen layout called?",
      "opts": [
        "Wireframe",
        "High-fidelity Prototype",
        "Design System",
        "Pixel-perfect Mockup"
      ],
      "ans": 0
    },
    {
      "q": "Which Gestalt Principle explains why visual elements enclosed within a boundary or sharing a common background are perceived as a group?",
      "opts": [
        "Law of Common Region",
        "Law of Similarity",
        "Law of Closure",
        "Law of Continuity"
      ],
      "ans": 0
    },
    {
      "q": "What is an A/B Test in product optimization?",
      "opts": [
        "Comparing two versions of a webpage or feature against each other to determine which performs better with real users",
        "Testing software on Apple vs Android devices",
        "Evaluating backend load vs database queries",
        "Auditing source code for security vulnerabilities"
      ],
      "ans": 0
    },
    {
      "q": "What does 'Information Architecture' (IA) primarily focus on?",
      "opts": [
        "Organizing, structuring, and labeling content effectively so users can easily find information",
        "Writing automated frontend unit tests",
        "Selecting brand typography font pairings",
        "Configuring web hosting servers"
      ],
      "ans": 0
    },
    {
      "q": "In typographic hierarchy, what is the vertical space between lines of text termed?",
      "opts": [
        "Line Height (Leading)",
        "Kerning",
        "Tracking",
        "Baseline Offset"
      ],
      "ans": 0
    },
    {
      "q": "What is an affordance in design?",
      "opts": [
        "A property or clue in an object that indicates how it can be used or interacted with",
        "The financial cost of purchasing a software license",
        "The speed at which a CSS animation executes",
        "The resolution of a vector SVG file"
      ],
      "ans": 0
    },
    {
      "q": "Which UX research method involves asking participants to organize topic cards into categories that make logical sense to them?",
      "opts": [
        "Card Sorting",
        "Tree Testing",
        "Heuristic Evaluation",
        "Eye Tracking"
      ],
      "ans": 0
    },
    {
      "q": "What design tool feature allows reusable master UI components that propagate changes across an entire design system?",
      "opts": [
        "Components / Master Instances",
        "Layer Clipping Masks",
        "Vector Paths",
        "Bitmap Export"
      ],
      "ans": 0
    },
    {
      "q": "According to Jakob's Law of Internet User Experience, where do users spend most of their time?",
      "opts": [
        "On other websites, meaning they prefer your site to work like all the other sites they already know",
        "On social media platforms exclusively",
        "On search engine result pages only",
        "Navigating hamburger drawer menus"
      ],
      "ans": 0
    },
    {
      "q": "What usability evaluation method has expert evaluators inspect a product interface against recognized usability principles?",
      "opts": [
        "Heuristic Evaluation (Nielsen's Heuristics)",
        "Guerilla Intercept Testing",
        "Cognitive Walkthrough with raw telemetry",
        "Synthetic Eye-Tracking heatmap"
      ],
      "ans": 0
    },
    {
      "q": "What is a 'Breadcrumb' navigation element in website UX?",
      "opts": [
        "A secondary navigation trail showing the user's location within the site hierarchy",
        "A cookie stored in the user's browser",
        "A temporary notification toast banner",
        "A floating action button in mobile layouts"
      ],
      "ans": 0
    },
    {
      "q": "In responsive web design, what are the viewport width thresholds called where the layout rearranges for different screen sizes?",
      "opts": [
        "Breakpoints",
        "Aspect Ratios",
        "Safe Areas",
        "Grid Margins"
      ],
      "ans": 0
    },
    {
      "q": "What is 'White Space' (Negative Space) in visual design?",
      "opts": [
        "The unmarked space between design elements, typography, and margins that gives content breathing room",
        "Areas colored strictly with hex code #FFFFFF",
        "Unused dead zones that must be filled with advertisements",
        "The canvas border outside an artboard"
      ],
      "ans": 0
    },
    {
      "q": "What is a Design System primarily composed of?",
      "opts": [
        "Reusable UI components, design tokens, style guidelines, and code documentation",
        "A collection of stock photography only",
        "A Photoshop layer archive",
        "A repository of frontend test scripts"
      ],
      "ans": 0
    },
    {
      "q": "Which color model is universally used for digital screen display interfaces?",
      "opts": [
        "RGB (Red, Green, Blue)",
        "CMYK (Cyan, Magenta, Yellow, Key Black)",
        "Pantone PMS",
        "RAL Color Standard"
      ],
      "ans": 0
    },
    {
      "q": "What is a 'Call to Action' (CTA) button in digital interface design?",
      "opts": [
        "A prominent interactive element designed to prompt an immediate response from the user",
        "An audio trigger that rings customer support",
        "A disclaimer modal link for privacy terms",
        "A subtle back button in the top navigation"
      ],
      "ans": 0
    },
    {
      "q": "What does 'Skeuomorphism' describe in interface design history?",
      "opts": [
        "Designing digital UI elements to mimic real-world physical objects and realistic textures",
        "Using flat minimalist neon gradients",
        "Adopting brutalist raw monochrome layouts",
        "Using high-contrast dark mode palettes"
      ],
      "ans": 0
    },
    {
      "q": "What metric tracks the percentage of users who complete a desired goal (such as signing up or purchasing)?",
      "opts": [
        "Conversion Rate",
        "Click-Through Rate (CTR)",
        "Drop-off Ratio",
        "Task Completion Time"
      ],
      "ans": 0
    },
    {
      "q": "What research technique asks users to vocalize their thoughts, questions, and reactions out loud while completing a task?",
      "opts": [
        "Think-Aloud Protocol",
        "Silent Observation Method",
        "Closed Survey Polling",
        "Retrospective Post-Mortem"
      ],
      "ans": 0
    },
    {
      "q": "What does a 'User Journey Map' visualize?",
      "opts": [
        "The chronological sequence of steps, touchpoints, and emotions a user experiences while achieving a goal",
        "The geographic locations of website visitors on a map",
        "The database network topology between cloud regions",
        "The sprint velocity of engineering iterations"
      ],
      "ans": 0
    },
    {
      "q": "In mobile navigation, what is a modal interface element that slides up from the bottom of the screen called?",
      "opts": [
        "Bottom Sheet",
        "Floating Action Button",
        "Notification Badge",
        "Tooltip Popover"
      ],
      "ans": 0
    },
    {
      "q": "What is 'Microcopy' in UX writing?",
      "opts": [
        "Small, targeted pieces of contextual text (like button labels, helper text, and error messages) that guide users",
        "Copyright legal terms in footer links",
        "Compressed minified JavaScript strings",
        "Font sizes smaller than 10 pixels"
      ],
      "ans": 0
    },
    {
      "q": "What is a 'Dark Pattern' in user interface design?",
      "opts": [
        "A deceptive user interface crafted to trick users into taking actions they might not otherwise choose",
        "A stylish high-contrast dark theme mode",
        "An interface with missing color contrast",
        "A wireframe drawn on a dark slate canvas"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary benefit of conducting Moderated Usability Testing?",
      "opts": [
        "The facilitator can probe deeper, ask follow-up questions, and understand the user's reasoning in real-time",
        "It requires zero human intervention or analysis",
        "It can test millions of users simultaneously in seconds",
        "It completely replaces quantitative analytical dashboards"
      ],
      "ans": 0
    }
  ],
  "cpp": [
    {
      "q": "Which operator is used in C++ to dynamically allocate memory on the heap?",
      "opts": [
        "new",
        "malloc",
        "alloc",
        "create"
      ],
      "ans": 0
    },
    {
      "q": "What is the size of a standard char in C / C++?",
      "opts": [
        "1 byte",
        "2 bytes",
        "4 bytes",
        "8 bytes"
      ],
      "ans": 0
    },
    {
      "q": "What feature allows C++ functions or classes to work with generic data types without rewriting code for each type?",
      "opts": [
        "Templates",
        "Macros",
        "Inheritance",
        "Pointers"
      ],
      "ans": 0
    },
    {
      "q": "What principle in C++ ensures resource deallocation occurs automatically during stack unwinding via object destructors?",
      "opts": [
        "RAII (Resource Acquisition Is Initialization)",
        "DRY (Don't Repeat Yourself)",
        "KISS Principle",
        "Polymorphic Binding"
      ],
      "ans": 0
    },
    {
      "q": "What is a pointer that holds the memory address of an object that has already been deallocated called?",
      "opts": [
        "Dangling Pointer",
        "Null Pointer",
        "Void Pointer",
        "Wild Pointer"
      ],
      "ans": 0
    },
    {
      "q": "Which keyword in C++ makes a member function eligible for dynamic polymorphism and runtime method overriding?",
      "opts": [
        "virtual",
        "override",
        "dynamic",
        "polymorphic"
      ],
      "ans": 0
    },
    {
      "q": "In C++, which smart pointer allows shared ownership of a heap resource through reference counting?",
      "opts": [
        "std::shared_ptr",
        "std::unique_ptr",
        "std::weak_ptr",
        "std::auto_ptr"
      ],
      "ans": 0
    },
    {
      "q": "What is the standard stream used for standard output in C++?",
      "opts": [
        "std::cout",
        "std::cin",
        "std::cerr",
        "printf()"
      ],
      "ans": 0
    },
    {
      "q": "What does the 'const' keyword applied to a C++ member function indicate (e.g. int getVal() const)?",
      "opts": [
        "The function promises not to modify any member variables of the calling object",
        "The function cannot return a constant value",
        "The function can only be called once",
        "The function cannot accept input parameters"
      ],
      "ans": 0
    },
    {
      "q": "What is the result of sizeof(int*) on a standard 64-bit operating system?",
      "opts": [
        "8 bytes",
        "4 bytes",
        "16 bytes",
        "2 bytes"
      ],
      "ans": 0
    },
    {
      "q": "What header file must be included in C++ to use dynamic resizable vectors?",
      "opts": [
        "<vector>",
        "<array>",
        "<list>",
        "<algorithm>"
      ],
      "ans": 0
    },
    {
      "q": "Which access specifier in C++ makes class members accessible only within the class itself and by derived classes?",
      "opts": [
        "protected",
        "private",
        "public",
        "internal"
      ],
      "ans": 0
    },
    {
      "q": "In C++, what is a class called that has at least one pure virtual function (e.g. virtual void fn() = 0;)?",
      "opts": [
        "Abstract Class",
        "Interface Singleton",
        "Concrete Class",
        "Static Class"
      ],
      "ans": 0
    },
    {
      "q": "What does the 'friend' keyword in C++ grant to an external function or class?",
      "opts": [
        "Access to private and protected members of the class declaring the friendship",
        "Inheritance of all public methods",
        "Ability to override const qualifiers",
        "Automatic dynamic memory cleanup"
      ],
      "ans": 0
    },
    {
      "q": "What is the difference between a pointer and a reference in C++?",
      "opts": [
        "A reference cannot be null and cannot be reseated to refer to another object after initialization",
        "A pointer cannot be re-assigned once initialized",
        "A reference can hold a null address",
        "Pointers do not occupy any memory addresses"
      ],
      "ans": 0
    },
    {
      "q": "Which STL container in C++ is implemented as a doubly linked list?",
      "opts": [
        "std::list",
        "std::vector",
        "std::deque",
        "std::forward_list"
      ],
      "ans": 0
    },
    {
      "q": "In C++, what operator is overloaded to enable stream output with std::cout << obj?",
      "opts": [
        "<< (Insertion Operator)",
        ">> (Extraction Operator)",
        "+ (Addition Operator)",
        "-> (Member Access Operator)"
      ],
      "ans": 0
    },
    {
      "q": "What is undefined behavior in C / C++?",
      "opts": [
        "Execution behavior for which the language standard imposes no requirements, leading to unpredictable crashes or bugs",
        "A compiler error that prevents binary generation",
        "A syntax error detected by static linters",
        "A standard floating point exception"
      ],
      "ans": 0
    },
    {
      "q": "What does the 'inline' keyword suggest to the C++ compiler?",
      "opts": [
        "Substitute the function code directly at the call site to eliminate function call overhead",
        "Execute the function in a dedicated thread",
        "Store the function in CPU registers only",
        "Prevent the function from being optimized"
      ],
      "ans": 0
    },
    {
      "q": "Which header file provides standard algorithms like std::sort, std::find, and std::binary_search in C++?",
      "opts": [
        "<algorithm>",
        "<numeric>",
        "<functional>",
        "<utility>"
      ],
      "ans": 0
    },
    {
      "q": "What is the time complexity of searching for an element in an std::map (implemented as a Red-Black Tree)?",
      "opts": [
        "O(log n)",
        "O(1)",
        "O(n)",
        "O(n log n)"
      ],
      "ans": 0
    },
    {
      "q": "What is the average time complexity of finding an element in an std::unordered_map (implemented as a Hash Table)?",
      "opts": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      "ans": 0
    },
    {
      "q": "What does the 'static' keyword on a class member variable in C++ mean?",
      "opts": [
        "A single copy of the variable is shared among all instances of the class",
        "The variable cannot be read or written to",
        "The variable is destroyed when the constructor exits",
        "The variable can only be accessed via pointers"
      ],
      "ans": 0
    },
    {
      "q": "Which keyword in modern C++ (C++11+) queries the type of an expression at compile time without evaluating it?",
      "opts": [
        "decltype",
        "typeof",
        "typeid",
        "auto"
      ],
      "ans": 0
    },
    {
      "q": "What is a lambda expression in C++?",
      "opts": [
        "An anonymous, inline function object that can capture variables from its surrounding scope",
        "A recursive macro definition in preprocessor",
        "A hardware pointer to an interrupt handler",
        "A template class specialization"
      ],
      "ans": 0
    },
    {
      "q": "What is the Diamond Problem in C++ object-oriented programming?",
      "opts": [
        "Ambiguity arising when a class inherits from two classes that both inherit from the same common base class",
        "Memory leaks in circular shared_ptr references",
        "Stack overflow in deeply nested templates",
        "Buffer overflow when writing past array bounds"
      ],
      "ans": 0
    },
    {
      "q": "How is the Diamond Problem resolved in C++ inheritance hierarchies?",
      "opts": [
        "Virtual Inheritance (e.g. virtual public Base)",
        "Static Casts",
        "Declaring all members protected",
        "Multiple destructors"
      ],
      "ans": 0
    },
    {
      "q": "What is the correct way to deallocate an array allocated with new int[50] in C++?",
      "opts": [
        "delete[] ptr;",
        "delete ptr;",
        "free(ptr);",
        "dispose(ptr);"
      ],
      "ans": 0
    },
    {
      "q": "What is the 'Rule of Five' in modern C++ (C++11)?",
      "opts": [
        "If you define destructor, copy constructor, or copy assignment, you should also define move constructor and move assignment operator",
        "A class cannot have more than 5 private member variables",
        "Every function must have fewer than 5 arguments",
        "A namespace can contain at most 5 nested sub-namespaces"
      ],
      "ans": 0
    },
    {
      "q": "What does std::move do in C++?",
      "opts": [
        "It casts an lvalue to an rvalue reference, enabling resource transfer without deep copying",
        "It moves an object to a new CPU register",
        "It copies bytes directly from disk to RAM",
        "It forces thread context switching"
      ],
      "ans": 0
    }
  ],
  "prompt-engineering": [
    {
      "q": "Which prompting technique provides demonstration examples with desired input-output pairs inside the prompt before the target query?",
      "opts": [
        "Few-Shot Prompting",
        "Zero-Shot Prompting",
        "Zero-Shot CoT",
        "Recursive Self-Refinement"
      ],
      "ans": 0
    },
    {
      "q": "What does the 'Temperature' hyperparameter in Large Language Models (LLMs) primarily control?",
      "opts": [
        "The randomness and creativity of next-token probability distribution",
        "The maximum number of tokens in the context window",
        "The physical operating temperature of GPU clusters",
        "The learning rate during model pre-training"
      ],
      "ans": 0
    },
    {
      "q": "What prompting strategy encourages an LLM to break complex multi-step reasoning down by adding 'Let's think step by step'?",
      "opts": [
        "Chain-of-Thought (CoT) Prompting",
        "Directional Stimulus Prompting",
        "Generated Knowledge Prompting",
        "ReAct Prompting"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary objective of Retrieval-Augmented Generation (RAG) in LLM applications?",
      "opts": [
        "Grounding the LLM generation with external dynamic or proprietary knowledge to reduce hallucinations",
        "Compressing the neural weights of the transformer architecture",
        "Fine-tuning base model weights using supervised datasets",
        "Increasing the context window beyond physical GPU memory"
      ],
      "ans": 0
    },
    {
      "q": "What vulnerability describes an attacker crafting malicious input to override developer instructions in the system prompt?",
      "opts": [
        "Prompt Injection",
        "Cross-Site Scripting (XSS)",
        "Buffer Overflow",
        "SQL Injection"
      ],
      "ans": 0
    },
    {
      "q": "In the ReAct prompting framework, what two iterative processes does the model alternate between?",
      "opts": [
        "Reasoning traces and task-specific Actions",
        "Recursive compiling and Activation pruning",
        "Reinforcement learning and Auto-regressive decoding",
        "Rule extraction and Attention mask tuning"
      ],
      "ans": 0
    },
    {
      "q": "What is the 'System Prompt' in chat completion API architectures (like OpenAI or Anthropic)?",
      "opts": [
        "High-priority instructions defining the model's persona, boundaries, and formatting rules",
        "The operating system command line arguments",
        "The token budget allocated per user subscription tier",
        "A hardware initialization string sent to the GPU"
      ],
      "ans": 0
    },
    {
      "q": "Which parameter restricts token sampling to the smallest set of tokens whose cumulative probability exceeds a threshold p?",
      "opts": [
        "Top-p (Nucleus Sampling)",
        "Top-k Sampling",
        "Frequency Penalty",
        "Presence Penalty"
      ],
      "ans": 0
    },
    {
      "q": "What is an LLM 'hallucination'?",
      "opts": [
        "When a model generates factually incorrect, ungrounded, or nonsensical output with high confidence",
        "When a GPU overheats and drops tensor calculations",
        "When prompt tokens exceed context window limits",
        "When an embedding vector produces negative cosine similarity"
      ],
      "ans": 0
    },
    {
      "q": "Which prompting technique explores multiple reasoning paths in parallel and evaluates choices using search algorithms like BFS or DFS?",
      "opts": [
        "Tree of Thoughts (ToT)",
        "Chain-of-Thought (CoT)",
        "Zero-Shot Prompting",
        "Least-to-Most Prompting"
      ],
      "ans": 0
    },
    {
      "q": "What technique involves sampling multiple different reasoning paths from an LLM and selecting the most consistent final answer?",
      "opts": [
        "Self-Consistency Prompting",
        "Greedy Decoding",
        "One-Shot Prompting",
        "Speculative Decoding"
      ],
      "ans": 0
    },
    {
      "q": "What is 'In-Context Learning' in modern Large Language Models?",
      "opts": [
        "The model's ability to learn tasks and follow patterns from examples in the prompt without updating weights",
        "Updating transformer backpropagation weights at inference time",
        "Storing conversations in persistent SQL databases",
        "Caching past key-value attention matrices on SSDs"
      ],
      "ans": 0
    },
    {
      "q": "What does the 'Presence Penalty' parameter discourage in LLM generation?",
      "opts": [
        "Repeating topics or words that have already appeared in the generated text",
        "Generating responses in languages other than English",
        "Using punctuation and special characters",
        "Exceeding prompt length limits"
      ],
      "ans": 0
    },
    {
      "q": "What is the 'Lost in the Middle' phenomenon observed in long-context Large Language Models?",
      "opts": [
        "Models tend to recall information at the beginning and end of long prompts better than information in the middle",
        "Middle layers of transformer neural networks lose precision during quantization",
        "Conversations lose state after exactly 10 prompt turns",
        "Vector databases drop middle chunks during similarity search"
      ],
      "ans": 0
    },
    {
      "q": "Which vector similarity metric is most commonly used to measure relevance between prompt embeddings and document chunks in RAG?",
      "opts": [
        "Cosine Similarity",
        "Manhattan Distance",
        "Hamming Distance",
        "Jaccard Index"
      ],
      "ans": 0
    },
    {
      "q": "What is 'Jailbreaking' in the context of AI safety and prompt engineering?",
      "opts": [
        "Bypassing safety guardrails and policy filters to force the model to generate prohibited or harmful content",
        "Rooting the server running the LLM container",
        "Exporting closed-source model weights to open source formats",
        "Fine-tuning an LLM on pirated textbooks"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary role of an 'Evaluation Framework' like Ragas or TruLens in LLM applications?",
      "opts": [
        "Measuring retrieval precision, faithfulness, and answer relevance quantitatively",
        "Benchmarking GPU FLOPS and memory bandwidth",
        "Transcribing human audio prompts to text",
        "Generating vector embeddings for unstructured files"
      ],
      "ans": 0
    },
    {
      "q": "In 'Least-to-Most Prompting', how does the prompt guide the language model?",
      "opts": [
        "By decomposing a complex problem into sub-problems and solving them sequentially, using answers from earlier steps",
        "By restricting output to fewer than 10 words",
        "By feeding tokens in reverse chronological order",
        "By using lowest temperature first and increasing it gradually"
      ],
      "ans": 0
    },
    {
      "q": "What is 'Chunking' in the context of Retrieval-Augmented Generation (RAG)?",
      "opts": [
        "Splitting large documents into smaller, semantically coherent passages before generating embeddings",
        "Compressing model weights using 4-bit quantization",
        "Grouping multiple API requests to save network overhead",
        "Removing punctuation from the input prompt"
      ],
      "ans": 0
    },
    {
      "q": "What is 'Negative Prompting' commonly used for in generative image and text models?",
      "opts": [
        "Specifying what the model should explicitly avoid or exclude from the generated output",
        "Subtracting embedding vectors to invert model weights",
        "Testing the model with insulting user prompts",
        "Generating sarcastic and pessimistic responses"
      ],
      "ans": 0
    },
    {
      "q": "Which technique guides an LLM to strictly output valid structured JSON matching a predefined schema?",
      "opts": [
        "Constrained Decoding / JSON Schema Enforcement",
        "Unsupervised Fine-Tuning",
        "LoRA Adapter training",
        "Greedy token sampling"
      ],
      "ans": 0
    },
    {
      "q": "What is a 'Hallucination Guardrail'?",
      "opts": [
        "A verification layer that cross-checks LLM responses against retrieved evidence before returning them to users",
        "A physical cooling system for AI inference servers",
        "A hardware firewall blocking inbound port 80 traffic",
        "A rate limiter capping API requests per minute"
      ],
      "ans": 0
    },
    {
      "q": "In Prompt Engineering, what is 'Role Prompting' (e.g., 'Act as a Senior Cloud Architect')?",
      "opts": [
        "Instructing the model to adopt a specific identity, tone, expertise level, and perspective",
        "Assigning IAM roles to API service accounts",
        "Switching between human and synthetic user accounts",
        "Defining user permissions in a database"
      ],
      "ans": 0
    },
    {
      "q": "What is 'Directional Stimulus Prompting'?",
      "opts": [
        "Providing an additional small hint or keywords in the prompt to guide the LLM toward a desired specific response",
        "Sending prompts via high-speed directional Wi-Fi antennas",
        "Aligning LLMs with human preferences via RLHF",
        "Forcing the model to process tokens from right to left"
      ],
      "ans": 0
    },
    {
      "q": "What is the difference between Pre-training, Fine-tuning, and Prompt Engineering?",
      "opts": [
        "Pre-training learns from raw internet data, Fine-tuning adjusts weights for a task, Prompt Engineering guides without weight updates",
        "Prompt Engineering modifies weights, Fine-tuning does not",
        "Pre-training is done locally on user devices; Prompt Engineering requires a supercomputer",
        "There is no difference; all three mean the same thing"
      ],
      "ans": 0
    },
    {
      "q": "What is 'Context Window' in a Large Language Model?",
      "opts": [
        "The maximum number of tokens (prompt + completion) the model can process simultaneously in a single request",
        "The browser window where the chat interface is rendered",
        "The duration of time an API key remains active",
        "The cache memory allocated per thread on the CPU"
      ],
      "ans": 0
    },
    {
      "q": "What is 'Indirect Prompt Injection'?",
      "opts": [
        "When malicious prompt instructions are hidden inside third-party untrusted data (like a webpage or email) read by the LLM",
        "When a user asks another human to prompt the model for them",
        "When a database query fails due to syntax errors",
        "When an LLM calls another LLM recursively"
      ],
      "ans": 0
    },
    {
      "q": "Which component converts human text into numerical tokens for LLM transformer processing?",
      "opts": [
        "Tokenizer (e.g. Byte-Pair Encoding)",
        "Vector Database",
        "Softmax Layer",
        "GPU Tensor Core"
      ],
      "ans": 0
    },
    {
      "q": "In prompt optimization, what does 'Few-Shot with CoT' combine?",
      "opts": [
        "Exemplar demonstrations showing both the input, step-by-step reasoning, and the final answer",
        "Zero prompts with high temperature",
        "Reinforcement learning with negative weights",
        "Random token sampling without examples"
      ],
      "ans": 0
    },
    {
      "q": "What is 'Self-Refinement' (or Reflexion) in autonomous LLM agent prompting?",
      "opts": [
        "Having the LLM critique and iteratively improve its own previous output before providing the final answer",
        "Compacting the model's neural network weights into a smaller model",
        "Resetting the chat memory after each message",
        "Translating the prompt into machine language"
      ],
      "ans": 0
    }
  ],
  "mechanical-engineering": [
    {
      "q": "According to Newton's Second Law of Motion, what is the mathematical formula for force?",
      "opts": [
        "F = m * a",
        "F = m / a",
        "F = m * v^2",
        "F = 0.5 * m * v"
      ],
      "ans": 0
    },
    {
      "q": "What does Ohm's Law state for an ideal electrical resistor?",
      "opts": [
        "V = I * R",
        "V = I / R",
        "P = V * R",
        "I = V * R"
      ],
      "ans": 0
    },
    {
      "q": "Which thermodynamic cycle represents the ideal theoretical maximum efficiency for a heat engine operating between two temperatures?",
      "opts": [
        "Carnot Cycle",
        "Rankine Cycle",
        "Otto Cycle",
        "Diesel Cycle"
      ],
      "ans": 0
    },
    {
      "q": "In structural mechanics, what does the Hooke's Law state within the elastic limit?",
      "opts": [
        "Stress is directly proportional to Strain",
        "Strain is inversely proportional to Area",
        "Force equals Mass times Velocity",
        "Pressure is constant throughout the cross-section"
      ],
      "ans": 0
    },
    {
      "q": "Which semiconductor component conducts current primarily in only one direction?",
      "opts": [
        "Diode",
        "Capacitor",
        "Inductor",
        "Transformer"
      ],
      "ans": 0
    },
    {
      "q": "In fluid mechanics, what principle explains the lift generated by an aircraft wing due to fluid velocity and pressure differences?",
      "opts": [
        "Bernoulli's Principle",
        "Archimedes' Principle",
        "Pascal's Law",
        "Fourier's Law"
      ],
      "ans": 0
    },
    {
      "q": "What is the SI unit of electrical capacitance?",
      "opts": [
        "Farad",
        "Henry",
        "Tesla",
        "Weber"
      ],
      "ans": 0
    },
    {
      "q": "In civil engineering, what is the primary structural function of reinforced steel rebar inside concrete beams?",
      "opts": [
        "To resist tensile stresses while concrete resists compressive stresses",
        "To prevent concrete from absorbing water",
        "To decrease the overall density of the structure",
        "To conduct electrical ground currents"
      ],
      "ans": 0
    },
    {
      "q": "Which logic gate outputs HIGH (1) if and only if all of its inputs are HIGH (1)?",
      "opts": [
        "AND Gate",
        "OR Gate",
        "XOR Gate",
        "NOT Gate"
      ],
      "ans": 0
    },
    {
      "q": "What type of stress occurs when opposing forces act parallel to the cross-sectional plane of a material?",
      "opts": [
        "Shear Stress",
        "Tensile Stress",
        "Compressive Stress",
        "Bending Stress"
      ],
      "ans": 0
    },
    {
      "q": "What law states that the total current entering a circuit junction must equal the total current leaving that junction?",
      "opts": [
        "Kirchhoff's Current Law (KCL)",
        "Kirchhoff's Voltage Law (KVL)",
        "Ampere's Law",
        "Faraday's Law"
      ],
      "ans": 0
    },
    {
      "q": "In mechanical engineering, what is the ratio of pitch diameter to the number of teeth on a gear called?",
      "opts": [
        "Module",
        "Diametral Pitch",
        "Circular Pitch",
        "Addendum"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary function of a step-down electrical transformer?",
      "opts": [
        "Decreasing voltage while increasing current",
        "Increasing voltage while decreasing current",
        "Converting AC electricity to DC electricity",
        "Storing energy in an electrostatic field"
      ],
      "ans": 0
    },
    {
      "q": "Which property describes a material's ability to undergo significant permanent plastic deformation before fracture?",
      "opts": [
        "Ductility",
        "Brittleness",
        "Hardness",
        "Resilience"
      ],
      "ans": 0
    },
    {
      "q": "In electronics, what terminal of a Bipolar Junction Transistor (BJT) controls the flow of majority carriers?",
      "opts": [
        "Base",
        "Collector",
        "Emitter",
        "Gate"
      ],
      "ans": 0
    },
    {
      "q": "What type of foundation is most suitable when surface soils have low bearing capacity and structural loads must reach deep bedrock?",
      "opts": [
        "Pile Foundation",
        "Strip Footing",
        "Spread Footing",
        "Isolated Pad Footing"
      ],
      "ans": 0
    },
    {
      "q": "What does the First Law of Thermodynamics fundamentally express?",
      "opts": [
        "Conservation of Energy",
        "Increase of Entropy",
        "Absolute zero temperature limit",
        "Thermal equilibrium between bodies"
      ],
      "ans": 0
    },
    {
      "q": "Which instrument is used to measure electrical potential difference across two points without drawing substantial current?",
      "opts": [
        "Voltmeter",
        "Ammeter",
        "Ohmmeter",
        "Galvanometer"
      ],
      "ans": 0
    },
    {
      "q": "What is the relationship between torque (T), rotational speed (omega), and power (P) in mechanical drives?",
      "opts": [
        "P = T * omega",
        "P = T / omega",
        "P = T^2 * omega",
        "T = P * omega"
      ],
      "ans": 0
    },
    {
      "q": "In communications engineering, what modulation technique varies the frequency of a carrier wave in proportion to the message signal?",
      "opts": [
        "Frequency Modulation (FM)",
        "Amplitude Modulation (AM)",
        "Phase Modulation (PM)",
        "Pulse Code Modulation (PCM)"
      ],
      "ans": 0
    },
    {
      "q": "What is the point on a stress-strain curve beyond which deformation is irreversible and permanent?",
      "opts": [
        "Yield Point",
        "Proportional Limit",
        "Ultimate Tensile Strength",
        "Fracture Point"
      ],
      "ans": 0
    },
    {
      "q": "What is the standard frequency of AC mains power transmission in India?",
      "opts": [
        "50 Hz",
        "60 Hz",
        "100 Hz",
        "120 Hz"
      ],
      "ans": 0
    },
    {
      "q": "Which thermal transfer mechanism does not require any material medium to propagate heat?",
      "opts": [
        "Radiation",
        "Conduction",
        "Convection",
        "Advection"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary constituent of Portland cement responsible for early compressive strength development?",
      "opts": [
        "Tricalcium Silicate (C3S)",
        "Dicalcium Silicate (C2S)",
        "Tricalcium Aluminate (C3A)",
        "Gypsum"
      ],
      "ans": 0
    },
    {
      "q": "In an RLC circuit, what condition occurs when inductive reactance equals capacitive reactance (XL = XC)?",
      "opts": [
        "Resonance",
        "Antiresonance",
        "Short Circuit",
        "Open Circuit"
      ],
      "ans": 0
    },
    {
      "q": "Which machine element is used to support rotating shafts while minimizing rotational friction?",
      "opts": [
        "Bearing",
        "Coupling",
        "Keyway",
        "Flywheel"
      ],
      "ans": 0
    },
    {
      "q": "What type of survey instrument measures both horizontal and vertical angles as well as slope distances electronically?",
      "opts": [
        "Total Station",
        "Theodolite",
        "Dumpy Level",
        "Prismatic Compass"
      ],
      "ans": 0
    },
    {
      "q": "What is the operational purpose of an op-amp configured with negative feedback?",
      "opts": [
        "Stabilizing closed-loop gain and broadening bandwidth",
        "Maximizing open-loop saturation",
        "Generating high-frequency carrier oscillations",
        "Eliminating input impedance"
      ],
      "ans": 0
    },
    {
      "q": "In a 4-stroke internal combustion engine, during which stroke is mechanical work delivered to the crankshaft?",
      "opts": [
        "Power (Expansion) Stroke",
        "Compression Stroke",
        "Intake Stroke",
        "Exhaust Stroke"
      ],
      "ans": 0
    },
    {
      "q": "What does the Reynolds Number in fluid dynamics indicate?",
      "opts": [
        "Ratio of inertial forces to viscous forces",
        "Ratio of buoyant forces to drag forces",
        "Ratio of pressure forces to surface tension",
        "Velocity of sound in the medium"
      ],
      "ans": 0
    }
  ],
  "biotechnology": [
    {
      "q": "What enzyme is primarily used in Polymerase Chain Reaction (PCR) to synthesize new DNA strands at high temperatures?",
      "opts": [
        "Taq Polymerase (from Thermus aquaticus)",
        "DNA Ligase",
        "RNA Polymerase II",
        "DNA Topoisomerase"
      ],
      "ans": 0
    },
    {
      "q": "In recombinant DNA technology, which enzymes act as 'molecular scissors' to cleave DNA at specific palindromic recognition sequences?",
      "opts": [
        "Restriction Endonucleases",
        "DNA Polymerases",
        "Reverse Transcriptases",
        "Exonucleases"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary function of DNA Ligase during molecular cloning?",
      "opts": [
        "Catalyzing the formation of phosphodiester bonds between adjacent DNA fragments",
        "Unwinding the DNA double helix",
        "Synthesizing RNA primers",
        "Degrading bacterial cell walls"
      ],
      "ans": 0
    },
    {
      "q": "Which genome editing technology utilizes a synthetic guide RNA (gRNA) and an endonuclease to create targeted double-strand breaks?",
      "opts": [
        "CRISPR-Cas9",
        "Sanger Sequencing",
        "Northern Blotting",
        "Microarray Analysis"
      ],
      "ans": 0
    },
    {
      "q": "In Sanger chain-termination DNA sequencing, which modified nucleotides terminate further strand elongation?",
      "opts": [
        "Dideoxynucleotide triphosphates (ddNTPs)",
        "Deoxynucleotide triphosphates (dNTPs)",
        "Ribonucleotide triphosphates (rNTPs)",
        "Methylated cytosines"
      ],
      "ans": 0
    },
    {
      "q": "What widely-used bioinformatics tool finds regions of local similarity between biological nucleotide or protein sequences?",
      "opts": [
        "BLAST (Basic Local Alignment Search Tool)",
        "AutoCAD",
        "Docker",
        "Apache Spark"
      ],
      "ans": 0
    },
    {
      "q": "In Western Blotting, which biological molecule is specifically detected and quantified using target antibodies?",
      "opts": [
        "Specific target proteins",
        "Double-stranded DNA fragments",
        "Messenger RNA transcripts",
        "Lipid bilayer membranes"
      ],
      "ans": 0
    },
    {
      "q": "Which technique is standardly used in downstream bioprocessing to separate and purify proteins based on charge, size, or affinity?",
      "opts": [
        "Column Chromatography (e.g. Affinity or Ion-Exchange)",
        "Centrifugal Milling",
        "Distillation Fractionation",
        "Sintering"
      ],
      "ans": 0
    },
    {
      "q": "In eukaryotic gene expression, what post-transcriptional process removes non-coding introns and splices exons together?",
      "opts": [
        "RNA Splicing",
        "DNA Replication",
        "Western Blotting",
        "Cell Lysis"
      ],
      "ans": 0
    },
    {
      "q": "What is a circular, double-stranded extra-chromosomal DNA molecule commonly used as a cloning vector in genetic engineering?",
      "opts": [
        "Plasmid",
        "Ribosome",
        "Centrosome",
        "Bacteriophage coat"
      ],
      "ans": 0
    },
    {
      "q": "Which immunological assay uses enzyme-linked antibodies to detect and quantify soluble antigens or antibodies in liquid samples?",
      "opts": [
        "ELISA (Enzyme-Linked Immunosorbent Assay)",
        "Gas Chromatography",
        "X-ray Diffraction",
        "Polyacrylamide Gel Drying"
      ],
      "ans": 0
    },
    {
      "q": "In industrial fermentation and bioprocessing, what specialized vessel maintains controlled temperature, pH, and dissolved oxygen for microbial growth?",
      "opts": [
        "Bioreactor / Fermenter",
        "Autoclave Chamber",
        "Bunsen Burner",
        "Centrifugal Dryer"
      ],
      "ans": 0
    },
    {
      "q": "What text-based file format in bioinformatics represents nucleotide or peptide sequences using single-letter codes preceded by a header line starting with '>'?",
      "opts": [
        "FASTA format",
        "JSON Schema",
        "CSV Matrix",
        "YAML Config"
      ],
      "ans": 0
    },
    {
      "q": "Which high-throughput genomic technique is used to measure the global expression levels of thousands of RNA transcripts simultaneously?",
      "opts": [
        "RNA-Seq (Next-Generation RNA Sequencing)",
        "Southern Blotting",
        "Paper Chromatography",
        "Gram Staining"
      ],
      "ans": 0
    },
    {
      "q": "In molecular biology and cDNA library construction, what enzyme synthesizes complementary DNA (cDNA) using an RNA template?",
      "opts": [
        "Reverse Transcriptase",
        "DNA Gyrase",
        "Alkaline Phosphatase",
        "RNA Helicase"
      ],
      "ans": 0
    },
    {
      "q": "What is the computational process of identifying genes, coding regions, and regulatory motifs within raw genomic sequence assemblies?",
      "opts": [
        "Genome Annotation",
        "Genome Translation",
        "Sequence Annealing",
        "Colony PCR"
      ],
      "ans": 0
    },
    {
      "q": "In agarose gel electrophoresis, toward which electrode do negatively charged DNA fragments migrate, and which fragments travel fastest?",
      "opts": [
        "Toward the positive anode; smaller fragments travel faster",
        "Toward the negative cathode; larger fragments travel faster",
        "Toward the negative cathode; smaller fragments travel faster",
        "Toward the positive anode; larger fragments travel faster"
      ],
      "ans": 0
    },
    {
      "q": "Monoclonal antibodies are industrially produced using hybridoma technology by fusing which two specific cell types?",
      "opts": [
        "B lymphocytes (antibody-producing plasma cells) and Myeloma (cancer) cells",
        "T lymphocytes and Red Blood cells",
        "Bacterial E. coli and Yeast cells",
        "Macrophage cells and Fibroblasts"
      ],
      "ans": 0
    },
    {
      "q": "Which comprehensive public biological repository hosted by NCBI archives all publicly available DNA and RNA sequence records?",
      "opts": [
        "GenBank",
        "Protein Data Bank (PDB)",
        "GitHub",
        "PubChem"
      ],
      "ans": 0
    },
    {
      "q": "In a closed microbial batch growth curve, which phase is characterized by an exponential increase in viable bacterial cell numbers?",
      "opts": [
        "Log (Exponential) Phase",
        "Lag Phase",
        "Stationary Phase",
        "Death (Decline) Phase"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary analytical application of Mass Spectrometry (MS) in modern proteomics?",
      "opts": [
        "Accurately determining protein molecular mass, sequence identity, and post-translational modifications (m/z)",
        "Amplifying DNA templates exponentially",
        "Visualizing live bacterial motility under dark-field microscopy",
        "Measuring osmotic pressure in blood plasma"
      ],
      "ans": 0
    },
    {
      "q": "Which term denotes an organism whose genome has been stably altered by the introduction of foreign exogenous recombinant DNA?",
      "opts": [
        "Transgenic Organism (Genetically Modified Organism)",
        "Wild-type Strain",
        "Polyploid Hybrid",
        "Obligate Aerobe"
      ],
      "ans": 0
    },
    {
      "q": "In bioinformatics sequence analysis, which scoring substitution matrix is standardly used for comparing moderately divergent protein alignments?",
      "opts": [
        "BLOSUM62",
        "Identity Matrix",
        "ASCII Lookup Table",
        "Hamming Distance Table"
      ],
      "ans": 0
    },
    {
      "q": "Which fluorescent intercalating dye is widely added to agarose gels to visualize separated DNA bands under ultraviolet light?",
      "opts": [
        "Ethidium Bromide (or GelRed / SYBR Safe)",
        "Crystal Violet",
        "Methylene Blue",
        "Phenolphthalein"
      ],
      "ans": 0
    },
    {
      "q": "Which cellular enzyme is responsible for unwinding the double-stranded DNA helix at the replication fork in living cells?",
      "opts": [
        "DNA Helicase",
        "DNA Ligase",
        "DNA Polymerase I",
        "Topoisomerase II"
      ],
      "ans": 0
    },
    {
      "q": "In biopharmaceuticals, what is a 'Biosimilar' drug?",
      "opts": [
        "A biologic medical product highly similar to an already approved reference biologic with no clinically meaningful differences",
        "A synthetic small-molecule generic chemical compound",
        "An herbal homeopathic nutritional supplement",
        "A completely untested novel experimental vaccine"
      ],
      "ans": 0
    },
    {
      "q": "What field of genomics analyzes the collective genomic DNA extracted directly from whole environmental or clinical microbiome communities?",
      "opts": [
        "Metagenomics",
        "Single-cell Epigenetics",
        "Structural Crystallography",
        "Comparative Anatomy"
      ],
      "ans": 0
    },
    {
      "q": "In mammalian cell culture, what gas concentration and buffer system is standardly used in incubators to maintain physiological pH 7.4?",
      "opts": [
        "5% CO2 atmosphere with Sodium Bicarbonate buffer in media",
        "100% Oxygen with Acetic acid buffer",
        "Pure Nitrogen with Potassium Hydroxide",
        "Argon gas with Hydrochloric acid"
      ],
      "ans": 0
    },
    {
      "q": "In molecular biology, which hybridization blotting technique is specifically designed to detect target DNA sequences using labeled probes?",
      "opts": [
        "Southern Blotting",
        "Northern Blotting (for RNA)",
        "Western Blotting (for Proteins)",
        "Eastern Blotting"
      ],
      "ans": 0
    },
    {
      "q": "What computational deep learning system developed by DeepMind accurately predicts the 3D tertiary structures of proteins from primary amino acid sequences?",
      "opts": [
        "AlphaFold",
        "ChatGPT",
        "TensorFlow Lite",
        "CRISPR-Cas12"
      ],
      "ans": 0
    }
  ],
  "civil-engineering": [
    {
      "q": "What test is standardly performed on fresh concrete on a construction site to measure its workability and consistency?",
      "opts": [
        "Slump Cone Test",
        "Tensile Split Test",
        "Core Cutter Test",
        "Proctor Compaction Test"
      ],
      "ans": 0
    },
    {
      "q": "In structural reinforced concrete (RCC) design, why is steel rebar positioned in the tension zone of a horizontal beam?",
      "opts": [
        "Concrete is strong in compression but weak in tension; steel carries the tensile stresses",
        "Steel prevents water absorption into the concrete core",
        "Steel reduces the dead weight of the concrete beam",
        "Steel provides thermal insulation against ambient freezing"
      ],
      "ans": 0
    },
    {
      "q": "What laboratory test is conducted on soil samples to determine their optimum moisture content (OMC) and maximum dry density (MDD)?",
      "opts": [
        "Standard Proctor Compaction Test",
        "Direct Shear Test",
        "Hydrometer Test",
        "Atterberg Limit Test"
      ],
      "ans": 0
    },
    {
      "q": "In geotechnical engineering, what equation proposed by Karl Terzaghi is widely used to calculate the ultimate bearing capacity of shallow strip footings?",
      "opts": [
        "q_ult = c*Nc + q*Nq + 0.5*gamma*B*Ngamma",
        "V = I * R",
        "PV = nRT",
        "F = m * a"
      ],
      "ans": 0
    },
    {
      "q": "Which advanced surveying instrument integrates an electronic theodolite, an electronic distance meter (EDM), and internal microprocessor data logging?",
      "opts": [
        "Total Station",
        "Dumpy Level",
        "Cross Staff",
        "Prismatic Compass"
      ],
      "ans": 0
    },
    {
      "q": "In prestressed concrete structures, what is the primary structural advantage over conventional reinforced concrete?",
      "opts": [
        "Internal compressive stresses counteract external tensile loads, reducing cracking and deflections",
        "Prestressed concrete requires no steel tendons or cables",
        "It completely eliminates the curing period of concrete",
        "It increases concrete permeability for drainage"
      ],
      "ans": 0
    },
    {
      "q": "What law governs the laminar flow of groundwater through a porous soil medium?",
      "opts": [
        "Darcy's Law (Q = k * i * A)",
        "Hooke's Law",
        "Bernoulli's Equation",
        "Newton's Law of Viscosity"
      ],
      "ans": 0
    },
    {
      "q": "In highway and flexible pavement design, what empirical penetration test measures the mechanical strength of subgrade soil?",
      "opts": [
        "California Bearing Ratio (CBR) Test",
        "Vicat Needle Test",
        "Los Angeles Abrasion Test",
        "Soundness Test"
      ],
      "ans": 0
    },
    {
      "q": "In structural column analysis, what formula gives the theoretical critical buckling load (P_cr) for an ideal slender column?",
      "opts": [
        "Euler's Buckling Formula (P_cr = pi^2 * E * I / L_eff^2)",
        "Rankine Formula",
        "Mohr's Circle Equation",
        "Castigliano's Theorem"
      ],
      "ans": 0
    },
    {
      "q": "In truss analysis, which method involves isolating individual joints as concurrent coplanar force systems in static equilibrium?",
      "opts": [
        "Method of Joints",
        "Finite Difference Method",
        "Moment Distribution Method",
        "Slope Deflection Method"
      ],
      "ans": 0
    },
    {
      "q": "How does an increase in the Water-Cement (w/c) ratio beyond the optimum affect the compressive strength of hardened concrete?",
      "opts": [
        "Significantly decreases compressive strength due to increased capillary porosity",
        "Increases compressive strength exponentially",
        "Has zero impact on mechanical strength",
        "Increases tensile resistance without affecting compression"
      ],
      "ans": 0
    },
    {
      "q": "In geotechnical retaining wall design, which theory assumes a cohesionless, dry granular soil mass with planar rupture surfaces?",
      "opts": [
        "Rankine's Earth Pressure Theory",
        "Boussinesq Stress Theory",
        "Westergaard Theory",
        "Bishop's Slip Circle Method"
      ],
      "ans": 0
    },
    {
      "q": "In environmental wastewater engineering, what parameter quantifies the amount of dissolved oxygen required by aerobic microorganisms to decompose organic matter?",
      "opts": [
        "Biochemical Oxygen Demand (BOD5)",
        "Chemical Oxygen Demand (COD)",
        "Total Suspended Solids (TSS)",
        "Turbidity Index"
      ],
      "ans": 0
    },
    {
      "q": "In hydrology and stormwater design, what is the 'Rational Formula' used to estimate peak surface runoff discharge?",
      "opts": [
        "Q = C * I * A",
        "Q = A * V",
        "H = f * L * V^2 / (2 * g * D)",
        "P = 2 * pi * N * T / 60"
      ],
      "ans": 0
    },
    {
      "q": "Which cement property is determined in the laboratory using a Vicat apparatus with standard needles?",
      "opts": [
        "Initial and Final Setting Times and Normal Consistency",
        "Compressive Strength of Mortar Cubes",
        "Soundness due to Free Lime",
        "Fineness by Sieve Analysis"
      ],
      "ans": 0
    },
    {
      "q": "In structural analysis, what does a Shear Force Diagram (SFD) plot across the span of a loaded beam?",
      "opts": [
        "Internal vertical transverse shear force at each cross-section",
        "External bending moments only",
        "Axial tension in the supports",
        "Deflection angle in radians"
      ],
      "ans": 0
    },
    {
      "q": "In earthquake-resistant structural engineering, what design characteristic allows a building frame to undergo large inelastic deformations without sudden collapse?",
      "opts": [
        "Ductility",
        "Brittleness",
        "Thermal Expansion",
        "Permeability"
      ],
      "ans": 0
    },
    {
      "q": "What laboratory test is conducted on bitumen binders to evaluate their hardness and consistency at 25 degrees Celsius?",
      "opts": [
        "Penetration Test",
        "Softening Point Test",
        "Ductility Briquette Test",
        "Flash and Fire Point Test"
      ],
      "ans": 0
    },
    {
      "q": "In open channel hydraulics, what dimensionless number distinguishes subcritical flow (Fr < 1) from supercritical flow (Fr > 1)?",
      "opts": [
        "Froude Number (Fr)",
        "Reynolds Number (Re)",
        "Mach Number (Ma)",
        "Weber Number (We)"
      ],
      "ans": 0
    },
    {
      "q": "Which foundation type is most suitable for distributing heavy structural column loads over weak, highly compressible soil strata across the entire building footprint?",
      "opts": [
        "Raft (Mat) Foundation",
        "Isolated Pad Footing",
        "Stepped Footing",
        "Strap Footing"
      ],
      "ans": 0
    },
    {
      "q": "In soil mechanics, what are the Atterberg limits used to delineate the consistency states of fine-grained cohesive soils?",
      "opts": [
        "Liquid Limit, Plastic Limit, and Shrinkage Limit",
        "Void Ratio, Porosity, and Degree of Saturation",
        "Specific Gravity, Unit Weight, and Moisture Content",
        "Permeability, Cohesion, and Friction Angle"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary cause of 'bleeding' in freshly placed concrete?",
      "opts": [
        "Upward migration of excess mixing water to the surface due to settlement of heavier aggregate solids",
        "Excessive hydration heat during curing",
        "Reaction of aggregate alkali with silica",
        "Premature drying of surface cement paste"
      ],
      "ans": 0
    },
    {
      "q": "Which surveying method is used to determine differences in elevation between points on the ground relative to a permanent benchmark?",
      "opts": [
        "Differential Spirit Leveling",
        "Traversing with Compass",
        "Triangulation Baseline Measurement",
        "Plane Table Radiation"
      ],
      "ans": 0
    },
    {
      "q": "In structural steel design, what structural failure mode governs the design of slender compression members (struts and columns)?",
      "opts": [
        "Elastic or Inelastic Buckling",
        "Brittle Tensile Rupture",
        "Creep Deformation",
        "Surface Fatigue Corrosion"
      ],
      "ans": 0
    },
    {
      "q": "What hydraulic formula calculates flow velocity in open gravity conduits such as sewers and drainage canals?",
      "opts": [
        "Manning's Equation (V = (1/n) * R^(2/3) * S^(1/2))",
        "Hazen-Williams Formula",
        "Poiseuille's Equation",
        "Euler's Energy Equation"
      ],
      "ans": 0
    },
    {
      "q": "In geotechnical slope stability analysis, which Swedish circle method divides the soil mass above a potential failure arc into vertical strips?",
      "opts": [
        "Fellenius Method of Slices (Ordinary Method of Slices)",
        "Terzaghi Bearing Capacity Equation",
        "Rankine Wedge Method",
        "Westergaard Elastic Solution"
      ],
      "ans": 0
    },
    {
      "q": "What is the purpose of curing concrete with moisture or ponding for at least 7 to 14 days after placement?",
      "opts": [
        "Maintaining moisture to facilitate complete chemical hydration of Portland cement and strength development",
        "Cooling down the building frame to prevent thermal shocks",
        "Washing away surplus sand and fine aggregates",
        "Softening the outer concrete surface for aesthetic polishing"
      ],
      "ans": 0
    },
    {
      "q": "In transportation engineering, what geometric curve is provided between two tangent straights to counteract centrifugal force on high-speed vehicles?",
      "opts": [
        "Superelevated Circular Curve with Spiral Transition Curves",
        "Parabolic Crest Vertical Curve",
        "Sag Curve with drainage inlets",
        "Broken-back Reverse Curve"
      ],
      "ans": 0
    },
    {
      "q": "Which non-destructive testing (NDT) instrument measures the surface hardness of hardened concrete to estimate its in-situ compressive strength?",
      "opts": [
        "Schmidt Rebound Hammer",
        "Core Drilling Rig",
        "Universal Testing Machine (UTM)",
        "Hydraulic Pull-off Gauge"
      ],
      "ans": 0
    },
    {
      "q": "In urban water supply treatment, what chemical coagulant is most widely added to raw water to destabilize colloidal turbidity particles?",
      "opts": [
        "Alum (Aluminum Sulfate)",
        "Calcium Carbonate",
        "Sodium Chloride",
        "Activated Charcoal"
      ],
      "ans": 0
    }
  ],
  "electrical-engineering": [
    {
      "q": "What is the primary cause of core (iron) losses in an AC power transformer?",
      "opts": [
        "Hysteresis loss and Eddy current loss in the magnetic laminations",
        "Ohmic I^2*R resistance heating in copper windings",
        "Dielectric breakdown of transformer mineral oil",
        "Mechanical friction in the bushings"
      ],
      "ans": 0
    },
    {
      "q": "What formula determines the synchronous speed (N_s) of a three-phase AC induction motor with P poles operating at frequency f?",
      "opts": [
        "N_s = 120 * f / P (RPM)",
        "N_s = 60 * f * P (RPM)",
        "N_s = f / (120 * P)",
        "N_s = P * f / 120"
      ],
      "ans": 0
    },
    {
      "q": "In AC circuit analysis, how does connecting a shunt capacitor bank to an inductive industrial load improve power system performance?",
      "opts": [
        "Improves power factor toward unity and reduces lagging reactive power (kVAR) demand",
        "Increases harmonic distortion across high-voltage lines",
        "Converts alternating current directly into high-voltage direct current",
        "Triples the fundamental line frequency"
      ],
      "ans": 0
    },
    {
      "q": "What phenomenon in high-voltage AC transmission lines causes current density to concentrate near the outer surface of conductors?",
      "opts": [
        "Skin Effect",
        "Proximity Effect",
        "Corona Discharge",
        "Ferranti Effect"
      ],
      "ans": 0
    },
    {
      "q": "Under no-load or light-load conditions on long EHV transmission lines, what effect causes the receiving-end voltage to exceed the sending-end voltage?",
      "opts": [
        "Ferranti Effect",
        "Skin Effect",
        "Stroboscopic Effect",
        "Hall Effect"
      ],
      "ans": 0
    },
    {
      "q": "What is the condition for electrical resonance in a series RLC alternating current circuit?",
      "opts": [
        "Inductive reactance equals capacitive reactance (X_L = X_C)",
        "Total circuit impedance is infinite",
        "Resistance R equals zero while voltage is lagging by 90 degrees",
        "Current and voltage are in complete phase quadrature"
      ],
      "ans": 0
    },
    {
      "q": "According to Lenz's Law, what is the direction of an induced electromotive force (EMF) in a closed circuit?",
      "opts": [
        "It always opposes the change in magnetic flux that produces it",
        "It always reinforces the changing magnetic flux",
        "It flows perpendicular to all electrostatic potential fields",
        "It remains strictly constant regardless of magnetic field rate of change"
      ],
      "ans": 0
    },
    {
      "q": "Which high-voltage circuit breaker technology utilizes an inert, highly electronegative gas with outstanding arc-quenching properties?",
      "opts": [
        "SF6 (Sulfur Hexafluoride) Circuit Breaker",
        "Air-Blast Circuit Breaker",
        "Bulk Oil Circuit Breaker",
        "Carbon Dioxide Circuit Breaker"
      ],
      "ans": 0
    },
    {
      "q": "In an AC induction motor, what is 'slip' (s) defined as?",
      "opts": [
        "s = (N_s - N_r) / N_s, where N_s is synchronous speed and N_r is rotor speed",
        "s = N_r / N_s",
        "s = N_s + N_r",
        "s = 1 / (N_s - N_r)"
      ],
      "ans": 0
    },
    {
      "q": "What is the relationship between line voltage (V_L) and phase voltage (V_ph) in a balanced three-phase Star (Wye) connected AC system?",
      "opts": [
        "V_L = sqrt(3) * V_ph",
        "V_L = V_ph",
        "V_L = V_ph / sqrt(3)",
        "V_L = 3 * V_ph"
      ],
      "ans": 0
    },
    {
      "q": "In power system fault analysis, which type of short-circuit fault occurs most frequently on overhead high-voltage transmission lines?",
      "opts": [
        "Single Line-to-Ground (L-G) Fault",
        "Three-Phase Symmetrical (L-L-L) Fault",
        "Line-to-Line (L-L) Fault",
        "Double Line-to-Ground (L-L-G) Fault"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary function of a Buchholz Relay in an oil-immersed power transformer?",
      "opts": [
        "Detecting internal incipient electrical faults and gas accumulation inside the main transformer tank",
        "Measuring secondary load current accurately",
        "Cooling the external radiator fins with forced air",
        "Regulating primary tap-changer voltages dynamically"
      ],
      "ans": 0
    },
    {
      "q": "What mathematical method is standardly used for analyzing unbalanced three-phase power system faults into positive, negative, and zero sequence components?",
      "opts": [
        "Fortescue's Symmetrical Components Method",
        "Fourier Transform Decomposition",
        "Laplace Transform Integral",
        "Bode Plot Stability Analysis"
      ],
      "ans": 0
    },
    {
      "q": "In electrical machines, what is the purpose of laminating the stator and rotor iron cores?",
      "opts": [
        "To minimize eddy current power losses by increasing electrical resistance between thin sheets",
        "To increase the mechanical flexibility of the motor casing",
        "To reduce the magnetic permeability of the air gap",
        "To decrease the copper winding resistance"
      ],
      "ans": 0
    },
    {
      "q": "Which DC motor speed control method allows operation above the rated base speed?",
      "opts": [
        "Field Flux Weakening Control",
        "Armature Resistance Control",
        "Armature Voltage Reduction Control",
        "Reverse Polarity Switching"
      ],
      "ans": 0
    },
    {
      "q": "What is the ideal input impedance and output impedance of an ideal operational amplifier (Op-Amp)?",
      "opts": [
        "Infinite Input Impedance (Z_in = infinity) and Zero Output Impedance (Z_out = 0)",
        "Zero Input Impedance and Infinite Output Impedance",
        "50 Ohms Input Impedance and 50 Ohms Output Impedance",
        "Equal reactive impedance at all frequencies"
      ],
      "ans": 0
    },
    {
      "q": "In an AC synchronous generator (alternator), what type of electrical excitation is supplied to the rotor field windings?",
      "opts": [
        "Direct Current (DC)",
        "Three-Phase Alternating Current (AC)",
        "High-Frequency Radio Pulses",
        "Square-wave AC with 50% duty cycle"
      ],
      "ans": 0
    },
    {
      "q": "What safety protective device automatically trips an electrical circuit when it detects a differential leakage current escaping to earth ground?",
      "opts": [
        "Residual Current Circuit Breaker (RCCB / GFCI)",
        "Thermal Overload Relay",
        "Fast-acting Cartridge Fuse",
        "Surge Arrester Varistor"
      ],
      "ans": 0
    },
    {
      "q": "What theorem states that any linear active bilateral electrical network with two terminals can be replaced by an equivalent single voltage source in series with an impedance?",
      "opts": [
        "Thevenin's Theorem",
        "Norton's Theorem",
        "Superposition Theorem",
        "Maximum Power Transfer Theorem"
      ],
      "ans": 0
    },
    {
      "q": "What is the Maximum Power Transfer condition for a load connected to a linear DC source with internal resistance R_s?",
      "opts": [
        "Load resistance equals source resistance (R_L = R_s)",
        "Load resistance is infinite (open circuit)",
        "Load resistance is zero (short circuit)",
        "Load resistance is double the source resistance"
      ],
      "ans": 0
    },
    {
      "q": "In electric power transmission, what is the luminous violet glow and hissing sound caused by ionization of air surrounding high-voltage conductors?",
      "opts": [
        "Corona Discharge",
        "Skin Effect",
        "Arc Flash",
        "Eddy Current Luminescence"
      ],
      "ans": 0
    },
    {
      "q": "What type of power semiconductor device combines the simple gate-drive characteristics of MOSFETs with the high-current and low-saturation-voltage capability of bipolar transistors?",
      "opts": [
        "Insulated-Gate Bipolar Transistor (IGBT)",
        "Silicon-Controlled Rectifier (SCR)",
        "Zener Diode",
        "Schottky Barrier Diode"
      ],
      "ans": 0
    },
    {
      "q": "In solar photovoltaic (PV) power systems, what component converts variable direct current (DC) electricity into synchronized utility-grade alternating current (AC)?",
      "opts": [
        "Grid-Tied Solar Inverter",
        "Buck-Boost DC Chopper",
        "Analog Rectifier Bridge",
        "Current Transformer (CT)"
      ],
      "ans": 0
    },
    {
      "q": "What protective instrument is installed at substation overhead entries to divert high-voltage lightning and switching surges safely to ground?",
      "opts": [
        "Surge Arrester (Lightning Arrester)",
        "Earth Disconnector Switch",
        "Current Limiting Reactor",
        "Potential Transformer (PT)"
      ],
      "ans": 0
    },
    {
      "q": "In power engineering, what is the per-unit (p.u.) system used for?",
      "opts": [
        "Simplifying complex network calculations by normalizing voltages, currents, and impedances to a common base",
        "Calculating electrical tariffs for retail residential consumers",
        "Measuring mechanical vibrations in turbine bearings",
        "Standardizing the physical dimensions of motor casings"
      ],
      "ans": 0
    },
    {
      "q": "Which motor type has its rotor speed strictly synchronized with the rotating magnetic field of the stator at all operating loads?",
      "opts": [
        "Synchronous Motor",
        "Squirrel-Cage Induction Motor",
        "Universal Series Motor",
        "Shaded-Pole Induction Motor"
      ],
      "ans": 0
    },
    {
      "q": "What is the active power (P) in a balanced three-phase AC circuit with line voltage V_L, line current I_L, and power factor angle theta?",
      "opts": [
        "P = sqrt(3) * V_L * I_L * cos(theta)",
        "P = 3 * V_L * I_L * sin(theta)",
        "P = V_L * I_L * cos(theta)",
        "P = sqrt(2) * V_L * I_L"
      ],
      "ans": 0
    },
    {
      "q": "What starting method is standardly used for medium-to-large three-phase induction motors to reduce inrush starting current without adding external resistance?",
      "opts": [
        "Star-Delta (Wye-Delta) Starter or Soft Starter",
        "Direct-On-Line (DOL) Full Voltage Starting",
        "DC Injection Braking",
        "Series Capacitive Starter"
      ],
      "ans": 0
    },
    {
      "q": "What instrument transformer is specifically designed to step down high line currents safely for measurement by standard 5A ammeters and protective relays?",
      "opts": [
        "Current Transformer (CT)",
        "Potential Transformer (PT)",
        "Autotransformer",
        "Isolation Transformer"
      ],
      "ans": 0
    },
    {
      "q": "Which law mathematically states that the line integral of magnetic field intensity around any closed loop equals the total enclosed electric current?",
      "opts": [
        "Ampere's Circuital Law",
        "Gauss's Law for Magnetism",
        "Coulomb's Inverse Square Law",
        "Biot-Savart Law"
      ],
      "ans": 0
    }
  ],
  "iot-embedded": [
    {
      "q": "What does the acronym \"IoT\" stand for in modern computing?",
      "opts": [
        "Internet of Things",
        "Interconnected Operating Technology",
        "Integrated Optical Transmission",
        "Interface of Telecommunications"
      ],
      "ans": 0
    },
    {
      "q": "Which communication protocol is lightweight, publish-subscribe based, and standard for low-bandwidth IoT devices?",
      "opts": [
        "MQTT (Message Queuing Telemetry Transport)",
        "HTTP/1.1",
        "FTP",
        "SMTP"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary function of a General Purpose Input/Output (GPIO) pin on an MCU?",
      "opts": [
        "Sending or reading digital electrical logic levels to/from connected hardware",
        "Regulating high-voltage AC mains power directly",
        "Executing optical computations without electricity",
        "Storing non-volatile firmware image backups"
      ],
      "ans": 0
    },
    {
      "q": "In an IoT sensor-actuator loop, what is the specific role of an actuator?",
      "opts": [
        "Converting electrical control signals into physical mechanical motion or action",
        "Measuring ambient environmental temperature and humidity",
        "Digitizing continuous analog sound waves into binary",
        "Routing IP packets across distributed WAN routers"
      ],
      "ans": 0
    },
    {
      "q": "Which low-power wireless standard operates at 2.4 GHz and is optimized for battery-powered peripheral connections?",
      "opts": [
        "Bluetooth Low Energy (BLE)",
        "Gigabit Ethernet",
        "Wi-Fi 6 (802.11ax 160MHz)",
        "DOCSIS 3.1"
      ],
      "ans": 0
    },
    {
      "q": "What is the fundamental architectural difference between a Microcontroller (MCU) and a Microprocessor (MPU)?",
      "opts": [
        "An MCU integrates CPU, RAM, and Flash ROM on a single silicon die, whereas an MPU relies on external memory",
        "An MCU cannot execute C code while an MPU can",
        "An MPU operates strictly at microwatt power while an MCU requires cooling fans",
        "An MCU lacks arithmetic logic units (ALU)"
      ],
      "ans": 0
    },
    {
      "q": "What does the term \"ADC\" represent in embedded sensor signal acquisition?",
      "opts": [
        "Analog-to-Digital Converter",
        "Asynchronous Data Controller",
        "Automated Device Calibrator",
        "Auxiliary Direct Channel"
      ],
      "ans": 0
    },
    {
      "q": "In embedded C/C++, why is the 'volatile' keyword applied to a hardware register variable?",
      "opts": [
        "It instructs the compiler not to optimize reads/writes because the value can change outside program flow",
        "It stores the variable permanently in read-only Flash memory",
        "It encrypts the variable using hardware AES-128",
        "It prevents multiple threads from accessing the variable concurrently"
      ],
      "ans": 0
    },
    {
      "q": "Which unlicensed sub-GHz ISM frequency band is standardly allocated for LoRaWAN deployments in Europe?",
      "opts": [
        "868 MHz",
        "2.4 GHz",
        "5.8 GHz",
        "433 GHz"
      ],
      "ans": 0
    },
    {
      "q": "Why is MQTT significantly more power-efficient than standard HTTP for battery-powered IoT devices?",
      "opts": [
        "It has a compact 2-byte fixed header and keeps a persistent TCP connection alive without repeated handshakes",
        "It transmits data exclusively over analog radio frequencies without IP packets",
        "It eliminates the need for any network transport layer",
        "It disables data encryption to save battery"
      ],
      "ans": 0
    },
    {
      "q": "In the I2C (Inter-Integrated Circuit) bus protocol, how many physical signal lines are required?",
      "opts": [
        "Two: Serial Data (SDA) and Serial Clock (SCL)",
        "Four: MOSI, MISO, SCK, and CS",
        "One: Single bidirectional wire without clock",
        "Eight: 8-bit parallel bus lines"
      ],
      "ans": 0
    },
    {
      "q": "How does the SPI (Serial Peripheral Interface) protocol achieve simultaneous full-duplex communication?",
      "opts": [
        "Through dedicated unidirectional MOSI (Master Out Slave In) and MISO (Master In Slave Out) lines",
        "By modulating clock phase on a single shared wire",
        "Using frequency division multiplexing over radio",
        "By polling devices sequentially in half-duplex slots"
      ],
      "ans": 0
    },
    {
      "q": "What is the critical function of a hardware Watchdog Timer (WDT) in unattended embedded systems?",
      "opts": [
        "Automatically triggering a hardware reset if the software freezes or fails to kick/service the timer",
        "Measuring high-precision real-world wall clock timestamps",
        "Throttling the CPU clock speed during elevated thermal events",
        "Monitoring network bandwidth usage for billing purposes"
      ],
      "ans": 0
    },
    {
      "q": "In FreeRTOS, what scheduling paradigm is used by default for task execution?",
      "opts": [
        "Preemptive priority-based scheduling with time-slicing for equal priority tasks",
        "Completely non-preemptive cooperative FIFO scheduling",
        "Shortest Job First without priority preemption",
        "Random lottery scheduling"
      ],
      "ans": 0
    },
    {
      "q": "Which MQTT Quality of Service (QoS) tier guarantees that a message is delivered 'exactly once' using a four-step handshake?",
      "opts": [
        "QoS 2",
        "QoS 0",
        "QoS 1",
        "QoS 3"
      ],
      "ans": 0
    },
    {
      "q": "Why are pull-up or pull-down resistors necessary on microcontroller digital input pins?",
      "opts": [
        "To define a stable high or logic state and eliminate indeterminate floating voltage states",
        "To step down 230V AC current to 3.3V DC logic levels",
        "To speed up the crystal oscillator clock frequency",
        "To filter out all electromagnetic microwave emissions"
      ],
      "ans": 0
    },
    {
      "q": "What is Pulse Width Modulation (PWM) primarily utilized for in embedded motor and LED control?",
      "opts": [
        "Simulating variable analog output voltages by altering the duty cycle of a rapid digital square wave",
        "Compressing digital sensor logs before flash storage",
        "Synchronizing asynchronous serial baud rates",
        "Modulating audio carrier frequencies for FM radio transmission"
      ],
      "ans": 0
    },
    {
      "q": "What is the key advantage of implementing Over-the-Air (OTA) firmware update capabilities in deployed IoT fleets?",
      "opts": [
        "Enabling remote patching of vulnerabilities and software enhancements without physical hardware access",
        "Doubling the physical flash storage capacity of the device",
        "Allowing microcontrollers to run without an operational power supply",
        "Eliminating the need for unit testing before firmware releases"
      ],
      "ans": 0
    },
    {
      "q": "Which protocol designed by the IETF implements a lightweight RESTful binary model over UDP for constrained nodes?",
      "opts": [
        "CoAP (Constrained Application Protocol)",
        "BGP",
        "SNMPv1",
        "WebSockets"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary constraint when executing code inside an Interrupt Service Routine (ISR)?",
      "opts": [
        "Execution time must be extremely fast; blocking calls, delays, and memory allocations must be avoided",
        "It must allocate at least 1MB of heap space for telemetry",
        "It can only be written in pure assembly language",
        "It must execute a full network HTTP POST request"
      ],
      "ans": 0
    },
    {
      "q": "When putting an ESP32 or STM32 into 'Deep Sleep' mode, what subsystem typically remains awake to monitor wake-up events?",
      "opts": [
        "The RTC (Real-Time Clock) controller and ULP (Ultra-Low Power) coprocessor",
        "The primary dual-core Xtensa CPU running at maximum frequency",
        "The Wi-Fi 802.11 baseband radio transmitter",
        "The external high-speed SPI Flash memory controller"
      ],
      "ans": 0
    },
    {
      "q": "In IoT and RTOS environments, what is 'Priority Inversion' and how is it mitigated?",
      "opts": [
        "A high-priority task is blocked by a low-priority task holding a mutex; mitigated via Priority Inheritance",
        "A low-priority task executes faster than high-priority tasks; mitigated by lowering clock speed",
        "Interrupts trigger in reverse alphabetical order; mitigated by sorting interrupt vector tables",
        "Tasks run out of stack memory; mitigated by doubling heap partition size"
      ],
      "ans": 0
    },
    {
      "q": "What cryptographic security component provides a Hardware Root of Trust and tamper-resistant key storage in IoT?",
      "opts": [
        "Secure Element (e.g. ATECC608A / TPM)",
        "Software base64 encoder",
        "CRC32 parity check register",
        "Read-only SD card adapter"
      ],
      "ans": 0
    },
    {
      "q": "How does Direct Memory Access (DMA) drastically improve peripheral throughput in embedded systems?",
      "opts": [
        "It transfers bytes directly between peripherals and SRAM without consuming CPU instruction cycles",
        "It overclocks the memory bus voltage beyond physical silicon ratings",
        "It converts serial UART bytes into parallel optical beams",
        "It disables RAM parity checks to eliminate clock latency"
      ],
      "ans": 0
    },
    {
      "q": "Which transport security protocol provides TLS equivalent encryption specifically tailored for UDP datagram protocols like CoAP?",
      "opts": [
        "DTLS (Datagram Transport Layer Security)",
        "WPA2-Enterprise",
        "IPsec in tunnel mode only",
        "SSH-2 over TCP"
      ],
      "ans": 0
    },
    {
      "q": "According to the Nyquist-Shannon sampling theorem, what is required when sampling an analog signal with frequency f_max via ADC?",
      "opts": [
        "Sampling frequency f_s must be strictly greater than 2 * f_max to avoid signal aliasing",
        "Sampling frequency must equal exactly f_max / 2",
        "Signal amplitude must be converted to 64-bit floating point prior to sampling",
        "ADC conversion time must be zero nanoseconds"
      ],
      "ans": 0
    },
    {
      "q": "What does the Adaptive Data Rate (ADR) mechanism dynamically adjust in LoRaWAN networks?",
      "opts": [
        "Spreading Factor (SF) and RF transmit power based on signal-to-noise ratio (SNR) to optimize battery life",
        "The physical carrier frequency between 433 MHz and 5.8 GHz",
        "The baud rate of the microcontroller's UART console port",
        "The Wi-Fi SSID and pre-shared network key"
      ],
      "ans": 0
    },
    {
      "q": "In 32-bit ARM Cortex-M microcontrollers, what condition triggers a Hardware UsageFault or BusFault during pointer dereference?",
      "opts": [
        "Unaligned memory access on instructions that mandate word-boundary alignment, or accessing non-existent memory",
        "Writing a logic '1' to an unconfigured GPIO output pin",
        "Calling a static inline function from an ISR",
        "Executing a floating-point multiplication on an FPU core"
      ],
      "ans": 0
    },
    {
      "q": "What is the primary difference between Edge Computing and Cloud Computing in an industrial IoT (IIoT) ecosystem?",
      "opts": [
        "Edge computing processes telemetry locally close to the sensor for ultra-low latency; cloud computing provides centralized heavy analytics",
        "Edge computing requires million-dollar supercomputers at each sensor node",
        "Cloud computing only works over wired RS-485 serial cables",
        "Edge computing does not allow microcontrollers to run any firmware"
      ],
      "ans": 0
    },
    {
      "q": "Which hardware circuit protection component suppresses transient high-voltage electrostatic discharge (ESD) spikes on external sensor lines?",
      "opts": [
        "TVS (Transient Voltage Suppression) Diodes",
        "Electrolytic filter capacitors connected in series",
        "Silicon controlled rectifiers (SCR) in reverse bias",
        "Step-up autotransformers"
      ],
      "ans": 0
    }
  ]
};

const ALIAS_MAP = {
  "data-science": "data-science-machine-learning",
  "film": "film-production",
  "film-production": "film-production",
  "interior": "interior-design",
  "interior-design": "interior-design",
  "game-dev": "game-development",
  "game-development": "game-development",
  "fashion": "fashion-design",
  "fashion-designing": "fashion-design",
  "fashion-design": "fashion-design",
  "robotics-engineering": "robotics-engineering",
  "robotics": "robotics-engineering",
  "petroleum": "petroleum-engineering",
  "petroleum-engineering": "petroleum-engineering",
  "marine": "marine-engineering",
  "marine-engineering": "marine-engineering",
  "architectural-engineering": "architectural-engineering",
  "chemical-engineering": "chemical-engineering",
  "chemical": "chemical-engineering",
  "chem-eng": "chemical-engineering",
  "chemical-eng": "chemical-engineering",
  "environmental-science": "environmental-engineering",
  "environmental": "environmental-engineering",
  "bio-medical-engineering": "biomedical-engineering",
  "bio-medical": "biomedical-engineering",
  "biomedical": "biomedical-engineering",
  "automobile-engineering": "aerospace-engineering",
  "aeronautical": "aerospace-engineering",
  "aeronautical-engineering": "aerospace-engineering",
  "aerospace": "aerospace-engineering",
  "barch": "architectural-engineering",
  "architecture": "architectural-engineering",
  "architectural": "architectural-engineering",
  "computer-engineering": "computer-science",
  "btech-cse": "computer-science",
  "cs": "computer-science",
  "cse": "computer-science",
  "computer-science-engineering": "computer-science",
  "iot": "iot-embedded",
  "iot-embedded": "iot-embedded",
  "internet-of-things": "iot-embedded",
  "embedded-systems": "iot-embedded",
  "embedded": "iot-embedded",
  "biotechnology": "biotechnology",
  "biotech": "biotechnology",
  "bioinformatics": "biotechnology",
  "biotech-eng": "biotechnology",
  "biotechnology-bioinformatics": "biotechnology",
  "civil-engineering": "civil-engineering",
  "civil-eng": "civil-engineering",
  "civil": "civil-engineering",
  "structural-engineering": "civil-engineering",
  "electrical-engineering": "electrical-engineering",
  "eee-eng": "electrical-engineering",
  "electrical": "electrical-engineering",
  "power-systems": "electrical-engineering",
  "mechanical-engineering": "mechanical-engineering",
  "mech-eng": "mechanical-engineering",
  "mechanical": "mechanical-engineering",
  "core-engineering": "mechanical-engineering",
  "aerospace-automobile": "aerospace-engineering",
  "aerospace-engineering": "aerospace-engineering",
  "industrial-engineering": "mechanical-engineering",
  "prompt-engineering": "prompt-engineering",
  "prompt": "prompt-engineering",
  "prompts": "prompt-engineering",
  "prompting": "prompt-engineering",
  "prompt-engineer": "prompt-engineering",
  "generative-ai": "prompt-engineering",
  "genai": "prompt-engineering",
  "gen-ai": "prompt-engineering",
  "llm": "prompt-engineering",
  "llms": "prompt-engineering",
  "large-language-model": "prompt-engineering",
  "large-language-models": "prompt-engineering",
  "chatgpt": "prompt-engineering",
  "gpt": "prompt-engineering",
  "agentic-ai": "prompt-engineering",
  "ai-ml": "ai-ml",
  "ai": "ai-ml",
  "ml": "ai-ml",
  "artificial-intelligence": "ai-ml",
  "machine-learning": "ai-ml",
  "data-science": "ai-ml",
  "data-science-machine-learning": "ai-ml",
  "data-science-analytics": "ai-ml",
  "data-analytics": "ai-ml",
  "web-development": "full-stack-web-development",
  "web-dev": "full-stack-web-development",
  "fullstack": "full-stack-web-development",
  "full-stack": "full-stack-web-development",
  "full-stack-web-development": "full-stack-web-development",
  "frontend": "full-stack-web-development",
  "backend": "full-stack-web-development",
  "javascript": "full-stack-web-development",
  "typescript": "full-stack-web-development",
  "react": "full-stack-web-development",
  "nextjs": "full-stack-web-development",
  "angular": "full-stack-web-development",
  "vue": "full-stack-web-development",
  "tailwind": "full-stack-web-development",
  "python": "python-programming",
  "python-programming": "python-programming",
  "py": "python-programming",
  "java": "java-backend-architecture",
  "java-backend-architecture": "java-backend-architecture",
  "spring": "java-backend-architecture",
  "springboot": "java-backend-architecture",
  "cloud": "cloud-devops",
  "cloud-computing": "cloud-devops",
  "devops": "cloud-devops",
  "cloud-devops": "cloud-devops",
  "aws": "cloud-devops",
  "azure": "cloud-devops",
  "gcp": "cloud-devops",
  "docker": "cloud-devops",
  "kubernetes": "cloud-devops",
  "cyber-security": "cybersecurity-ethical-hacking",
  "cybersecurity": "cybersecurity-ethical-hacking",
  "security": "cybersecurity-ethical-hacking",
  "ethical-hacking": "cybersecurity-ethical-hacking",
  "cybersecurity-ethical-hacking": "cybersecurity-ethical-hacking",
  "dsa": "dsa",
  "data-structures": "dsa",
  "algorithms": "dsa",
  "data-structures-algorithms": "dsa",
  "business-management": "business-management",
  "mba-mgmt": "business-management",
  "finance-accounting": "business-management",
  "finance-acc": "business-management",
  "human-resources": "business-management",
  "hr-talent": "business-management",
  "digital-marketing": "business-management",
  "supply-chain-operations": "business-management",
  "sales-business-development": "business-management",
  "ui-ux-design": "ui-ux-design",
  "ui-ux": "ui-ux-design",
  "product-management": "ui-ux-design",
  "graphic-design": "ui-ux-design",
  "graphic-media": "ui-ux-design",
  "technical-writing": "ui-ux-design",
  "cpp": "cpp",
  "c": "cpp",
  "csharp": "cpp",
  "golang": "cpp",
  "rust": "cpp",
  "php": "full-stack-web-development",
  "kotlin": "java-backend-architecture",
  "swift": "full-stack-web-development"
};


function synthesizeDomainQuestions(domainName, domainSlug, targetCount = 30) {
  const cleanTitle = domainName && domainName.trim() 
    ? domainName.trim().replace(/\s*\([^)]*\)/g, '')
    : (domainSlug || 'Technical Domain').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const slug = (cleanTitle + ' ' + (domainSlug || '')).toLowerCase();

  const isSoftwareIT = /software|code|program|web|cloud|data|cyber|security|ai|machine learning|developer|backend|frontend|devops|network|database|linux|docker|python|java|javascript|algorithm|computing/i.test(slug);
  const isEngineeringPhysical = /engineering|mechanic|civil|electrical|electronic|robot|aerospace|automobile|chemical|petroleum|marine|hardware|structural|manufacturing|material|industrial|vlsi|embedded/i.test(slug);
  const isBusinessCommerce = /business|finance|management|marketing|sales|commerce|accounting|mba|bba|hr|talent|supply chain|logistics|operation|economics|market|banking/i.test(slug);
  const isDesignCreative = /design|ui|ux|art|media|film|video|cinema|fashion|interior|animation|graphic|creative|audio|music|photography|architecture/i.test(slug);
  const isHealthLifeScience = /bio|chem|medical|health|pharma|clinical|genetic|hospital|nursing|doctor|anatomy|physiology|biomed|drug|disease|dental|pharmacy/i.test(slug);

  let templates = [];

  if (isSoftwareIT) {
    templates = [
      {
        q: 'In ' + cleanTitle + ', what is the primary architectural purpose of applying the Single Responsibility Principle (SRP)?',
        correct: 'Ensuring that a module, class, or service has only one reason to change, minimizing ripple effects from modifications',
        distractors: [
          'Combining all business and database operations into a single massive monolithic function',
          'Eliminating the necessity for continuous integration and automated testing',
          'Forcing all asynchronous network requests to execute on a single thread'
        ]
      },
      {
        q: 'When optimizing performance in ' + cleanTitle + ' systems, which strategy yields the most predictable latency and throughput under high load?',
        correct: 'Profiling execution bottlenecks and implementing non-blocking asynchronous operations with optimized multi-tier caching',
        distractors: [
          'Increasing recursive call depth without base condition termination',
          'Disabling all compiler and interpreter optimization flags',
          'Storing all operational state in flat temporary text files without indexing'
        ]
      },
      {
        q: 'Which of the following represents a critical security vulnerability specifically addressed in robust ' + cleanTitle + ' implementations?',
        correct: 'Input validation bypass, insecure deserialization, SQL/command injection, and unauthorized privilege escalation',
        distractors: [
          'Using strict cryptographic protocols with SHA-256 and TLS 1.3',
          'Enforcing role-based access control (RBAC) across all service endpoints',
          'Automating dependency vulnerability scanning during build cycles'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', how is transactional data consistency standardly preserved across distributed microservices without distributed locks?',
        correct: 'Using the Saga pattern (orchestrated or choreographed) with compensating rollback transactions and idempotent message handling',
        distractors: [
          'By allowing arbitrary asynchronous writes without conflict resolution',
          'By resetting the system clock after every concurrent write',
          'By storing state exclusively in local volatile memory registers'
        ]
      },
      {
        q: 'What is the industry best practice for handling unhandled exceptions and failovers in ' + cleanTitle + ' production environments?',
        correct: 'Structured telemetry logging, circuit breaker patterns, automated health checks, and graceful service degradation',
        distractors: [
          'Silently suppressing error logs and halting execution indefinitely',
          'Terminating the hosting infrastructure immediately upon receiving a non-fatal warning',
          'Exposing raw stack traces and internal secrets directly to end users'
        ]
      },
      {
        q: 'When conducting automated testing for ' + cleanTitle + ' applications, which layer validates complete end-to-end user workflows against production-like environments?',
        correct: 'End-to-End (E2E) integration test suites simulating real user journeys and service dependencies',
        distractors: [
          'Static code linting without executing any runtime assertions',
          'Manual random clicking without recording test outcomes or coverage metrics',
          'Testing only deprecated functions that are no longer accessible to clients'
        ]
      },
      {
        q: 'Which metric is most crucial when benchmarking scalability and load handling in ' + cleanTitle + ' infrastructure?',
        correct: '99th percentile (p99) response latency, throughput (requests/sec), and resource saturation limits',
        distractors: [
          'Total number of comments written in source code files',
          'Color depth of graphical user interface assets',
          'Alphabetical length of database column names'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', what role does decoupled message queuing (such as Kafka or RabbitMQ) play in system resilience?',
        correct: 'It absorbs traffic spikes, prevents downstream backpressure bottlenecks, and decouples producer-consumer availability',
        distractors: [
          'It guarantees that every request must wait synchronously for all background jobs',
          'It doubles the memory consumption of every single thread',
          'It prevents services from ever restarting in the event of an OS reboot'
        ]
      },
      {
        q: 'When refactoring legacy code in ' + cleanTitle + ', which engineering principle ensures maintainability without breaking backward compatibility?',
        correct: 'Adhering to SOLID principles, versioned API contracts, and high regression test coverage before refactoring',
        distractors: [
          'Deleting all existing unit tests to speed up the refactoring process',
          'Combining multiple unrelated business functions into a single 5,000-line function',
          'Hardcoding database credentials directly inside the refactored modules'
        ]
      },
      {
        q: 'Which of the following accurately describes modern lifecycle management of resources in ' + cleanTitle + ' frameworks?',
        correct: 'Deterministic allocation, automatic garbage collection/RAII, and explicit connection pooling with cleanup hooks',
        distractors: [
          'Opening endless file handles and database connections without ever closing them',
          'Relying on hardware power cycling to clean up dangling system threads',
          'Allocating unbounded memory buffers without limits or eviction policies'
        ]
      }
    ];
  } else if (isEngineeringPhysical) {
    templates = [
      {
        q: 'In ' + cleanTitle + ', what is the primary engineering significance of calculating the Factor of Safety (FOS) relative to material yield strength?',
        correct: 'Ensures the structure or component operates safely under maximum expected loads without experiencing permanent plastic deformation or failure',
        distractors: [
          'Guarantees that material mass will double under continuous dynamic loading',
          'Allows all quality control testing and regulatory inspections to be eliminated',
          'Forces the system to operate at 100% mechanical efficiency with zero thermal loss'
        ]
      },
      {
        q: 'In ' + cleanTitle + ' systems, which fundamental conservation law dictates that the total energy entering a control volume must equal the energy leaving plus accumulation?',
        correct: 'First Law of Thermodynamics (Conservation of Energy)',
        distractors: [
          "Bernoulli's Frictionless Surface Hypothesis",
          "Newton's Gravitational Inverse-Square Principle",
          "Hooke's Modulus of Elastic Deflection"
        ]
      },
      {
        q: 'When conducting Failure Mode and Effects Analysis (FMEA) in ' + cleanTitle + ', how is the Risk Priority Number (RPN) quantified?',
        correct: 'As the mathematical product of Severity, Occurrence probability, and Detection rating (RPN = S x O x D)',
        distractors: [
          'The total financial cost of scrapping the production line',
          'The ratio of shear stress to thermal expansion coefficient',
          'The operating hours remaining before preventative lubrication is scheduled'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', which nondestructive testing (NDT) method is standardly used to detect internal volumetric flaws in critical metallic components?',
        correct: 'Ultrasonic Testing (UT) or Industrial Radiographic Testing (RT)',
        distractors: [
          'Destructive Charpy V-notch impact fracturing',
          'High-voltage electrical arcing across open atmosphere',
          'Submerging the entire assembly in concentrated hydrochloric acid'
        ]
      },
      {
        q: 'What role does Geometric Dimensioning and Tolerancing (GD&T) per ASME Y14.5 play in ' + cleanTitle + ' engineering drawings?',
        correct: 'Specifies allowable variations in form, orientation, profile, and location to ensure interchangeable assembly fit',
        distractors: [
          'Restricts all parts to identical arbitrary outer diameters regardless of function',
          'Converts imperial engineering units into optical wavelength ratings',
          'Eliminates the necessity for quality inspection calipers and CMM probes'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', how does work hardening (strain hardening) affect the mechanical properties of a metallic material?',
        correct: 'Increases yield strength and hardness while reducing ductility through dislocation entanglement',
        distractors: [
          'Decreases tensile strength while increasing electrical resistivity to zero',
          'Causes the material to melt at room temperature without external heat',
          'Transforms crystalline grains permanently into an amorphous liquid state'
        ]
      },
      {
        q: 'When designing dynamic rotating equipment in ' + cleanTitle + ', what condition occurs when operating speed matches a system natural resonance frequency?',
        correct: 'Critical resonance, resulting in severe amplitude magnification, excessive stress, and catastrophic fatigue vibration',
        distractors: [
          'Hydrodynamic cavitation where static pressure exceeds critical boiling point',
          'Instantaneous thermal equilibrium where all heat dissipation ceases',
          'Complete cancellation of all inertial forces and zero mechanical stress'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', what is the primary purpose of performing a Finite Element Analysis (FEA) mesh convergence study?',
        correct: 'To verify that stress and displacement results become independent of mesh element size for numerical accuracy',
        distractors: [
          'To reduce computer memory usage by deleting all geometrical boundary conditions',
          'To invert the matrix equations so all output values become positive integers',
          "To bypass the need for physical material properties like Young's modulus"
        ]
      },
      {
        q: 'Which international standard outlines the quality management and operational requirements for manufacturing and engineering in ' + cleanTitle + '?',
        correct: 'ISO 9001 (Quality Management Systems) and industry-specific certifications',
        distractors: [
          'ISO 14001 Environmental Management framework alone',
          'OHSAS 18001 Occupational Safety standard alone',
          'ISO 27001 Information Security Management code'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', what is the core methodology of predictive condition-based maintenance compared to reactive maintenance?',
        correct: 'Continuous monitoring of vibration signatures, thermal imaging, and lubricant degradation to schedule repairs before failure',
        distractors: [
          'Operating equipment continuously until catastrophic structural failure occurs',
          'Replacing all machinery components daily regardless of condition or cost',
          'Disabling all safety emergency shutoff switches to maintain production speed'
        ]
      }
    ];
  } else if (isDesignCreative) {
    templates = [
      {
        q: 'In professional ' + cleanTitle + ', what principle establishes visual equilibrium and harmonious weight distribution across a composition or space?',
        correct: 'Balance (symmetrical, asymmetrical, or radial)',
        distractors: [
          'Linear extrusion along arbitrary orthogonal coordinate axes',
          'Randomization of scale without visual hierarchy',
          'Complete monochromatic saturation across all surfaces'
        ]
      },
      {
        q: 'In visual communication for ' + cleanTitle + ', what does the term "visual hierarchy" dictate regarding user perception?',
        correct: "The deliberate arrangement of scale, contrast, and layout to guide the viewer's attention to key focal points first",
        distractors: [
          'Giving every single element identical size, contrast, and prominence',
          'Hiding key information behind decorative ornamentation',
          'Arranging visual assets strictly in alphabetical order'
        ]
      },
      {
        q: 'In the color theory of ' + cleanTitle + ', what visual effect is achieved by pairing complementary colors on the color wheel?',
        correct: 'Maximum chromatic contrast and vibrant visual energy when placed side-by-side',
        distractors: [
          'Complete neutralization of all visual contrast into muddy gray',
          'Elimination of all light reflection from the surface',
          'Total destruction of material surface integrity'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', how does scale and proportion influence human spatial and aesthetic experience?',
        correct: 'Relates physical and visual dimensions harmoniously to human anthropometrics and contextual surroundings',
        distractors: [
          'Enforces microscopic dimensions on all functional components',
          'Prevents any dimensional variation across different product iterations',
          'Requires all objects to adhere strictly to integer millimeter increments'
        ]
      },
      {
        q: 'What is the primary objective of creating rapid iterative prototypes and proof-of-concept mockups in ' + cleanTitle + '?',
        correct: 'To validate form, ergonomics, usability, and material suitability early before committing to full production',
        distractors: [
          'To generate finalized marketing sales packaging before design begins',
          'To eliminate the need for any client feedback or design reviews',
          'To permanently fix the design without possibility of modification'
        ]
      },
      {
        q: 'In typography and layout composition for ' + cleanTitle + ', what is "kerning"?',
        correct: 'The process of adjusting the spacing between individual pairs of characters for proportional optical harmony',
        distractors: [
          'The vertical distance between baseline lines of text',
          'The overall height of capital uppercase letters',
          'The thickness of ink saturation on paper media'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', what is the primary role of user-centered design (UCD) research methodologies?',
        correct: 'Grounding creative decisions in empirical user behaviors, cognitive pain points, and accessibility standards',
        distractors: [
          'Designing exclusively for the personal preferences of the lead designer',
          'Skipping all user feedback sessions to speed up product launch',
          'Copying competitor visual assets without modification'
        ]
      },
      {
        q: 'Which file format standard preserves infinite geometric scalability without pixelation in ' + cleanTitle + ' vector artwork?',
        correct: 'SVG (Scalable Vector Graphics) and vector EPS/PDF formats',
        distractors: [
          'Standard compressed raster JPEG',
          'Animated GIF with 256 color limit',
          'Raw BMP uncompressed bitmap'
        ]
      },
      {
        q: 'In professional ' + cleanTitle + ' asset preparation, what color model is standard for commercial 4-color offset printing?',
        correct: 'CMYK (Cyan, Magenta, Yellow, Key/Black) subtractive model',
        distractors: [
          'RGB (Red, Green, Blue) additive monitor model',
          'Hexadecimal digital screen codes',
          'HSL luminance-only channel mode'
        ]
      },
      {
        q: 'In design systems for ' + cleanTitle + ', what is the main benefit of implementing a centralized token and component library?',
        correct: 'Ensures visual and behavioral consistency across touchpoints, speeds up iteration, and reduces design debt',
        distractors: [
          'Forces all layouts to use identical photographic assets',
          'Prevents any future design updates or brand refreshes',
          'Triples the build time of digital deliverables'
        ]
      }
    ];
  } else if (isBusinessCommerce) {
    templates = [
      {
        q: 'In ' + cleanTitle + ', what financial metric evaluates investment profitability by calculating the ratio of net profit to initial invested capital?',
        correct: 'Return on Investment (ROI)',
        distractors: [
          'Gross Operating Expense Ratio (GOER)',
          'Static Liquidity Amortization Index',
          'Total Book Value Depreciation Factor'
        ]
      },
      {
        q: 'In strategic ' + cleanTitle + ', what is the governing objective of conducting a SWOT analysis?',
        correct: 'To systematically identify internal Strengths and Weaknesses alongside external Opportunities and Threats',
        distractors: [
          'To calculate federal corporate tax liability for quarterly filing',
          'To audit daily employee timecard punch clock stamps',
          'To benchmark warehouse inventory pallet stacking limits'
        ]
      },
      {
        q: 'In operational ' + cleanTitle + ', what management philosophy focuses on eliminating non-value-adding waste (Muda) and continuous incremental improvement (Kaizen)?',
        correct: 'Lean Management',
        distractors: [
          'Chaotic Task Scheduling without prioritization',
          'Unconstrained Inventory Hoarding methodology',
          'Zero-Documentation ad-hoc operational policy'
        ]
      },
      {
        q: 'In commercial ' + cleanTitle + ', what key performance indicator (KPI) measures the total cost incurred by an organization to acquire a single paying customer?',
        correct: 'Customer Acquisition Cost (CAC)',
        distractors: [
          'Customer Lifetime Valuation (LTV)',
          'Net Promoter Score (NPS)',
          'Monthly Recurring Revenue (MRR)'
        ]
      },
      {
        q: 'In financial decision making for ' + cleanTitle + ', what capital budgeting metric discounts future cash flows back to present value using a hurdle rate?',
        correct: 'Net Present Value (NPV)',
        distractors: [
          'Simple Accounting Payback Period without interest',
          'Gross Revenue Run Rate',
          'Earnings Before Interest (EBI)'
        ]
      },
      {
        q: 'In supply chain and inventory management in ' + cleanTitle + ', what inventory model calculates the optimal order quantity that minimizes total holding and ordering costs?',
        correct: 'Economic Order Quantity (EOQ)',
        distractors: [
          'Just-in-Case bulk speculative hoarding',
          'First-Come First-Served allocation schedule',
          'Last-In First-Out price deflation index'
        ]
      },
      {
        q: 'In modern human resource strategy in ' + cleanTitle + ', what structured performance framework aligns individual employee goals with corporate strategic objectives?',
        correct: 'OKRs (Objectives and Key Results) and Balanced Scorecard',
        distractors: [
          'Annual subjective punitive grading without metrics',
          'Seniority-only automatic promotion ladders',
          'Anonymous suggestion box polling'
        ]
      },
      {
        q: 'In marketing and market segmentation in ' + cleanTitle + ', what does dividing a market based on consumer lifestyle, values, and personality traits represent?',
        correct: 'Psychographic Segmentation',
        distractors: [
          'Geographic regional zoning',
          'Firmographic industry SIC coding',
          'Pure demographic age grouping'
        ]
      },
      {
        q: 'In enterprise risk management for ' + cleanTitle + ', how is risk mitigation effectively prioritized across business units?',
        correct: 'By assessing likelihood of occurrence against potential financial and operational impact severity',
        distractors: [
          'By addressing only low-impact trivial issues while ignoring catastrophic risks',
          'By assuming that market volatility will resolve itself without contingency planning',
          'By transferring all operational liability verbally without insurance coverage'
        ]
      },
      {
        q: 'In corporate governance for ' + cleanTitle + ', what fiduciary duty obligates company directors to act in the best financial interests of the corporation and shareholders?',
        correct: 'Duty of Loyalty and Duty of Care',
        distractors: [
          'Duty of Rapid Speculative Trading',
          'Duty of Exclusive Insider Benefit',
          'Duty of Executive Compensation Maximization'
        ]
      }
    ];
  } else if (isHealthLifeScience) {
    templates = [
      {
        q: 'In clinical and laboratory practice in ' + cleanTitle + ', what is the primary purpose of conducting double-blind randomized controlled trials (RCTs)?',
        correct: 'To eliminate observer bias and placebo effect when evaluating therapeutic efficacy and safety outcomes',
        distractors: [
          'To expedite regulatory approvals without testing on patient cohorts',
          'To ensure all study participants receive the identical active chemical compound',
          'To bypass institutional review board (IRB) ethical oversight'
        ]
      },
      {
        q: 'In biological and chemical systems in ' + cleanTitle + ', what thermodynamic property measures the spontaneity of a biochemical reaction at constant temperature and pressure?',
        correct: 'Gibbs Free Energy change (delta G < 0 for exergonic spontaneity)',
        distractors: [
          'Standard enthalpy of vaporization alone',
          'Absolute zero Kelvin thermal barrier',
          'Kinetic activation barrier height alone'
        ]
      },
      {
        q: 'In cellular and molecular protocols in ' + cleanTitle + ', what technique exponentially amplifies specific target DNA sequences in vitro through repeated thermal cycling?',
        correct: 'Polymerase Chain Reaction (PCR)',
        distractors: [
          'Agarose gel electrophoresis without primers',
          'High-performance liquid chromatography (HPLC)',
          'Spectrophotometric optical density measurement'
        ]
      },
      {
        q: 'Under Good Laboratory Practice (GLP) and GMP regulations in ' + cleanTitle + ', what is the governing mandate for all documentation and record-keeping?',
        correct: 'Data must be Attributable, Legible, Contemporaneous, Original, and Accurate (ALCOA+ principles)',
        distractors: [
          'Records can be rewritten from memory at the end of each month',
          'Raw experimental deviations should be erased to preserve clean graphs',
          'Entries may be recorded in pencil without date timestamps'
        ]
      },
      {
        q: 'In pharmacokinetic modeling in ' + cleanTitle + ', what parameter describes the fraction of an administered dose of unchanged drug that reaches systemic circulation?',
        correct: 'Bioavailability (F)',
        distractors: [
          'Volume of distribution (Vd)',
          'Apparent half-life (t1/2)',
          'Total body clearance (CL)'
        ]
      },
      {
        q: 'In immunological diagnostics in ' + cleanTitle + ', which high-throughput assay uses antibody-antigen specificity paired with enzymatic colorimetric detection?',
        correct: 'ELISA (Enzyme-Linked Immunosorbent Assay)',
        distractors: [
          'Mass spectrometry ionization',
          'Sanger chain termination sequencing',
          'Nuclear magnetic resonance spectroscopy'
        ]
      },
      {
        q: 'In sterilization and infection control protocols in ' + cleanTitle + ', what autoclave parameters are standardly used for saturated steam sterilization of surgical equipment?',
        correct: '121 degrees C at 15 psi for at least 15 to 30 minutes (or 134 degrees C for 3-4 minutes)',
        distractors: [
          '60 degrees C water bath for 5 minutes',
          'Ambient air drying at room temperature',
          'Immersion in tap water with mild detergent'
        ]
      },
      {
        q: 'In physiological homeostatic regulation in ' + cleanTitle + ', what feedback mechanism restores blood pH to the physiological range of 7.35 to 7.45?',
        correct: 'Carbonic acid-bicarbonate buffer system coupled with renal and respiratory regulation',
        distractors: [
          'Uncontrolled lactic acid secretion',
          'Immediate shutdown of hepatic circulation',
          'Thermal perspiration without electrolyte exchange'
        ]
      },
      {
        q: 'In biochemical chromatography in ' + cleanTitle + ', which separation technique isolates biomolecules based specifically on their reversible bio-specific binding affinity to immobilized ligands?',
        correct: 'Affinity Chromatography',
        distractors: [
          'Size-exclusion gel permeation chromatography',
          'Reverse-phase hydrophobic interaction chromatography',
          'Cation exchange chromatography'
        ]
      },
      {
        q: 'In bioethics and medical compliance in ' + cleanTitle + ', what fundamental ethical principle requires obtaining voluntary informed consent prior to clinical procedures?',
        correct: 'Autonomy and Respect for Persons',
        distractors: [
          'Paternalistic Institutional Directive',
          'Administrative Convenience Protocol',
          'Mandatory State Enforcement'
        ]
      }
    ];
  } else {
    // Universal Professional, Scientific & Technical Discipline
    templates = [
      {
        q: 'In professional ' + cleanTitle + ' practice, what is the primary purpose of conducting systematic peer review and technical auditing?',
        correct: 'To verify compliance with established industry standards, validate methodologies, and ensure quality outcomes',
        distractors: [
          'To delay operational project timelines indefinitely without evaluation',
          'To replace all technical calculations with unverified assumptions',
          'To conceal methodological defects from regulatory oversight'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', how is risk mitigation effectively prioritized during project execution?',
        correct: 'By assessing the likelihood of occurrence against potential impact severity to focus resources on critical hazards',
        distractors: [
          'By addressing only the easiest low-impact concerns while ignoring critical risks',
          'By assuming that unforeseen events will resolve themselves spontaneously',
          'By transferring all liability verbally without written documentation'
        ]
      },
      {
        q: 'What benchmark defines professional excellence and operational integrity in ' + cleanTitle + '?',
        correct: 'High reliability, adherence to ethical codes of conduct, continuous verification, and evidence-based methodologies',
        distractors: [
          'Executing tasks with maximum speed regardless of safety or precision',
          'Working in total isolation without reference to recognized standards',
          'Discarding all historical data and performance metrics'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', what is the primary function of establishing standardized operating procedures (SOPs)?',
        correct: 'Ensuring consistency, repeatability, safety compliance, and defect reduction across operational workflows',
        distractors: [
          'Eliminating the need for employee onboarding and training programs',
          'Preventing any technological upgrades from being adopted in the future',
          'Increasing paperwork to deliberately slow down organizational throughput'
        ]
      },
      {
        q: 'When analyzing experimental or operational data in ' + cleanTitle + ', what statistical metric evaluates the dispersion of data points around the mean?',
        correct: 'Standard Deviation and Variance',
        distractors: [
          'Arithmetic Mean alone',
          'Skewness coefficient alone',
          'Mode frequency alone'
        ]
      },
      {
        q: 'In project management for ' + cleanTitle + ', what technique identifies the longest sequence of dependent activities determining the minimum project duration?',
        correct: 'Critical Path Method (CPM)',
        distractors: [
          'Ad-hoc task assignment lottery',
          'Pareto 80/20 rough estimation',
          'Kanban board WIP limit alone'
        ]
      },
      {
        q: 'In quality assurance in ' + cleanTitle + ', what does the Plan-Do-Check-Act (PDCA / Deming Cycle) represent?',
        correct: 'An iterative four-stage management framework for continuous process improvement and defect reduction',
        distractors: [
          'A one-time emergency crisis response protocol',
          'A financial accounting balance sheet auditing rule',
          'A legal non-disclosure agreement template'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', how are measurement instruments calibrated to guarantee metrological traceability?',
        correct: 'By comparing instrument readings against certified national/international reference standards with documented uncertainty',
        distractors: [
          'By adjusting dials until readings match desired target outcomes',
          'By relying on factory presets without periodic recalibration',
          'By taking the average of unverified consumer gauges'
        ]
      },
      {
        q: 'What is the role of root cause analysis (such as the 5 Whys or Ishikawa Fishbone Diagram) in ' + cleanTitle + '?',
        correct: 'Identifying underlying systemic failure causes to implement permanent corrective and preventive actions (CAPA)',
        distractors: [
          'Assigning immediate personal blame to frontline operators',
          'Treating superficial symptoms without addressing root problems',
          'Filing confidential reports without sharing findings with the engineering team'
        ]
      },
      {
        q: 'In professional ethics and compliance in ' + cleanTitle + ', how should potential conflicts of interest be handled?',
        correct: 'Immediate transparent disclosure to governing bodies and recusal from influenced decision-making processes',
        distractors: [
          'Concealing the conflict until after project completion',
          'Proceeding with personal financial enrichment if unobserved',
          'Transferring the conflict to an unregistered third party'
        ]
      }
    ];
  }

  // 1. Expand with advanced specialized technical questions up to targetCount (at least 30)
  const initialCount = Math.max(1, templates.length);
  const prefixes = [
    'Advanced ' + cleanTitle + ' Application: ',
    'Practical ' + cleanTitle + ' Implementation: ',
    'Industry Standards in ' + cleanTitle + ': ',
    'Performance Optimization in ' + cleanTitle + ': ',
    'Safety & Quality Control in ' + cleanTitle + ': '
  ];

  let pIdx = 0;
  while (templates.length < targetCount) {
    const base = templates[templates.length % initialCount];
    if (!base) break;
    const prefix = prefixes[pIdx % prefixes.length];
    pIdx++;
    templates.push({
      q: prefix + base.q,
      correct: base.correct,
      distractors: base.distractors
    });
  }

  return templates.slice(0, targetCount).map((item, idx) => {
    const opts = [item.correct, ...item.distractors.slice(0, 3)];
    const correctIdx = Math.floor(Math.random() * 4);
    if (correctIdx !== 0) {
      const temp = opts[0];
      opts[0] = opts[correctIdx];
      opts[correctIdx] = temp;
    }
    return {
      q: item.q,
      opts: opts,
      ans: correctIdx
    };
  });
}

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// In-memory cache of generated dynamic questions to ensure accurate server grading
const dynamicQuestionCache = new Map();

function getDomainQuestions(domainSlug, targetCount = 30, domainName = null) {
  let cleanSlug = (domainSlug || '').toLowerCase().trim();
  const normalizedDomainName = (domainName || '').toLowerCase().trim();
  const domainNameToSlug = normalizedDomainName.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  if ((cleanSlug === 'others' || cleanSlug === 'custom-topic' || cleanSlug === 'custom' || cleanSlug === 'other' || !cleanSlug) && domainNameToSlug) {
    cleanSlug = domainNameToSlug;
  }
  
  // 1. Check alias map
  let resolvedKey = ALIAS_MAP[cleanSlug];
  if (!resolvedKey && domainNameToSlug) {
    resolvedKey = ALIAS_MAP[domainNameToSlug];
  }
  if (!resolvedKey && normalizedDomainName) {
    resolvedKey = ALIAS_MAP[normalizedDomainName];
  }

  // 2. Direct key match in DOMAIN_QUESTIONS
  if (!resolvedKey) {
    if (DOMAIN_QUESTIONS[cleanSlug]) {
      resolvedKey = cleanSlug;
    } else if (domainNameToSlug && DOMAIN_QUESTIONS[domainNameToSlug]) {
      resolvedKey = domainNameToSlug;
    }
  }

  // 3. Fallback to exact key matching without token substring bleed
  if (!resolvedKey) {
    resolvedKey = Object.keys(DOMAIN_QUESTIONS).find(k => {
      if (k === cleanSlug || (domainNameToSlug && k === domainNameToSlug)) return true;
      return false;
    });
  }
  
  const effectiveTitle = domainName || (domainNameToSlug ? normalizedDomainName : cleanSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()));
  const requiredCount = Math.max(1, Number(targetCount) || 30);

  let rawList = [];

  if (resolvedKey && DOMAIN_QUESTIONS[resolvedKey]) {
    rawList = [...DOMAIN_QUESTIONS[resolvedKey]];
  } else {
    resolvedKey = cleanSlug || 'custom-domain';
    const synthesized = synthesizeDomainQuestions(effectiveTitle, cleanSlug, requiredCount);
    rawList = synthesized.map((item, sIdx) => {
      const qId = `${resolvedKey}-${sIdx + 1}`;
      return {
        id: qId,
        question_text: item.q,
        difficulty: sIdx < 10 ? 'easy' : sIdx < 20 ? 'medium' : 'hard',
        marks: 1,
        options: item.opts.map((optText, oIdx) => ({
          id: `${qId}-opt-${String.fromCharCode(97 + oIdx)}`,
          option_text: optText,
          is_correct: oIdx === item.ans,
        })),
      };
    });
  }

  // GUARANTEE STRICTLY REQUIRED QUESTION COUNT (COMPULSORILY 30):
  // If rawList has fewer questions than requested, fill the deficit with domain-specific synthesized questions
  if (rawList.length < requiredCount) {
    const deficit = requiredCount - rawList.length;
    const additionalSynthesized = synthesizeDomainQuestions(effectiveTitle, cleanSlug, deficit);
    const convertedExtra = additionalSynthesized.map((item, sIdx) => {
      const qId = `${resolvedKey}-extra-${sIdx + 1}`;
      return {
        id: qId,
        question_text: item.q,
        difficulty: sIdx < 5 ? 'easy' : sIdx < 10 ? 'medium' : 'hard',
        marks: 1,
        options: item.opts.map((optText, oIdx) => ({
          id: `${qId}-opt-${String.fromCharCode(97 + oIdx)}`,
          option_text: optText,
          is_correct: oIdx === item.ans,
        })),
      };
    });
    rawList = [...rawList, ...convertedExtra];
  }

  // 1. Randomly shuffle the questions for this domain
  const shuffledQuestions = shuffle(rawList);
  const count = Math.max(1, Math.min(shuffledQuestions.length, requiredCount));
  const selectedRaw = shuffledQuestions.slice(0, count);

  return selectedRaw.map((item, idx) => {
    const qId = item.id || `${resolvedKey}-q-${idx + 1}`;
    const qText = item.question_text || item.q;

    // Normalize options from either format (opts or options)
    let rawOptions = [];
    if (Array.isArray(item.options) && item.options.length > 0) {
      rawOptions = item.options.slice(0, 4).map((o, oIdx) => ({
        id: o.id || `${qId}-opt-${String.fromCharCode(97 + oIdx)}`,
        question_id: qId,
        option_text: o.option_text || o.text || String(o),
        is_correct: !!o.is_correct
      }));
    } else if (Array.isArray(item.opts)) {
      rawOptions = item.opts.slice(0, 4).map((optText, oIdx) => ({
        id: `${qId}-opt-${String.fromCharCode(97 + oIdx)}`,
        question_id: qId,
        option_text: optText,
        is_correct: oIdx === (item.ans ?? 0)
      }));
    }

    const correctOpt = rawOptions.find(o => o.is_correct) || rawOptions[0];
    if (correctOpt) {
      const correctOptId = correctOpt.id;
      dynamicQuestionCache.set(qId, correctOptId);
    }

    const shuffledOptions = shuffle(rawOptions).map((opt, oIdx) => ({
      ...opt,
      option_order: oIdx + 1
    }));

    return {
      id: qId,
      domain_id: domainSlug,
      question_text: qText,
      difficulty: item.difficulty || (idx < 10 ? 'easy' : idx < 20 ? 'medium' : 'hard'),
      marks: 1,
      explanation: 'Technical assessment evaluation',
      active: true,
      display_order: idx + 1,
      options: shuffledOptions
    };
  });
}

function checkCorrectAnswer(questionId, optionId) {
  if (!questionId || !optionId) return false;
  if (dynamicQuestionCache.has(questionId)) {
    return dynamicQuestionCache.get(questionId) === optionId;
  }
  return false;
}

function cacheCorrectAnswer(questionId, correctOptionId) {
  if (questionId && correctOptionId) {
    dynamicQuestionCache.set(questionId, correctOptionId);
  }
}

module.exports = {
  DOMAIN_QUESTIONS,
  ALIAS_MAP,
  getDomainQuestions,
  checkCorrectAnswer,
  cacheCorrectAnswer,
  dynamicQuestionCache,
  synthesizeDomainQuestions
};
