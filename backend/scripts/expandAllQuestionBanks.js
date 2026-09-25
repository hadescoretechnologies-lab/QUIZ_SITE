const fs = require('fs');
const path = require('path');

const BANK_PATH = path.resolve(__dirname, '../data/domainQuestionBank.js');
let bankContent = fs.readFileSync(BANK_PATH, 'utf8');

// 20 new questions for film-production (Total 30)
const FILM_PRODUCTION_EXTRA = [
  {
    q: "In professional cinematography, what optical difference distinguishes anamorphic lenses from standard spherical lenses?",
    opts: [
      "Anamorphic lenses optically compress wide fields of view with a 2x squeeze, producing oval bokeh and horizontal flares",
      "Anamorphic lenses require zero focusing adjustments at any focal distance",
      "Anamorphic lenses can only capture black-and-white monochrome imagery",
      "Anamorphic lenses eliminate the need for digital camera image sensors"
    ],
    ans: 0
  },
  {
    q: "In multi-camera and dual-system sound production, what protocol synchronizes audio recorders and cameras with continuous frame-accurate time metadata?",
    opts: [
      "SMPTE Linear Timecode (LTC) and Genlock synchronization",
      "Consumer Bluetooth audio pairing",
      "Analog frequency modulation broadcast carrier",
      "Manual stopwatch hand signaling"
    ],
    ans: 0
  },
  {
    q: "In digital cinema workflows, which color gamut represents the widest color space standardized by ITU for ultra-high-definition television?",
    opts: [
      "ITU-R BT.2020 (Rec. 2020)",
      "Standard sRGB (Rec. 709)",
      "DCI-P3 theatrical cinema space",
      "Adobe RGB (1998) print gamut"
    ],
    ans: 0
  },
  {
    q: "What is the industry-standard professional digital audio sampling rate used for synchronous sound recording in motion picture production?",
    opts: [
      "48 kHz at 24-bit depth",
      "44.1 kHz at 16-bit depth (Red Book CD)",
      "22.05 kHz at 8-bit depth",
      "96 kHz at 1-bit Delta-Sigma depth"
    ],
    ans: 0
  },
  {
    q: "How does reducing the camera shutter angle from 180 degrees to 45 degrees alter the visual appearance of high-speed action sequences?",
    opts: [
      "Produces sharp, staccato, jittery motion with virtually zero motion blur",
      "Creates extreme motion blur with smooth dreamlike trails",
      "Inverts image color channels into negative space",
      "Slows down playback speed by 400%"
    ],
    ans: 0
  },
  {
    q: "In high-contrast chiaroscuro or film noir cinematography, what key-to-fill lighting ratio is typically employed?",
    opts: [
      "8:1 or higher (producing deep, dramatic shadow separation)",
      "1:1 flat lighting ratio",
      "2:1 standard sitcom interview ratio",
      "0.5:1 where fill light is twice as bright as key light"
    ],
    ans: 0
  },
  {
    q: "What image sensor artifact occurs on CMOS rolling-shutter cameras during rapid whip-pans or propeller rotations?",
    opts: [
      "Rolling shutter skew / Jello effect distortion",
      "Pixel blooming and charge leakage across lines",
      "Optical diffraction fringing along edge highlights",
      "Automatic focal plane inversion"
    ],
    ans: 0
  },
  {
    q: "In professional grip and rigging on set, what safety rule governs the proper loading direction of a C-stand grip head (knuckle)?",
    opts: [
      "Right-hand rule: the load must be rigged on the right side so downward gravitational torque tightens the knuckle",
      "The knuckle handle must always point downward toward the floor",
      "Loads must only be balanced on the shortest base leg without sandbags",
      "Arms must be extended to maximum reach without tightening the T-handle"
    ],
    ans: 0
  },
  {
    q: "In cinematic camera lenses, what optical property distinguishes a true cinema zoom from a photographic zoom lens?",
    opts: [
      "Parfocal design that maintains critical focal distance throughout the entire zoom range without breathing",
      "Inability to manually adjust focus rings during recording",
      "Plastic aperture rings without gear pitch teeth",
      "Fixed focal length that cannot change magnification"
    ],
    ans: 0
  },
  {
    q: "In high-end film production lighting, what metric evaluates light source color fidelity specifically optimized for television and digital cinema sensors?",
    opts: [
      "Television Lighting Consistency Index (TLCI)",
      "Color Temperature (Kelvin scale only)",
      "Luminous flux measured in raw lumens",
      "Incandescent bulb wattage rating"
    ],
    ans: 0
  },
  {
    q: "What theatrical widescreen aspect ratio is the DCI Scope standard for epic feature films?",
    opts: [
      "2.39:1 (Scope)",
      "1.85:1 (Flat)",
      "1.33:1 (Academy 4:3)",
      "1.78:1 (16:9 HD)"
    ],
    ans: 0
  },
  {
    q: "In directional microphone acoustics, what physical phenomenon causes directional microphones (like cardiods and shotguns) to artificially boost low frequencies as they approach a speaker's mouth?",
    opts: [
      "Proximity Effect",
      "Haas Precedence Effect",
      "Doppler Frequency Shift",
      "Inverse-Square Acoustic Reflection"
    ],
    ans: 0
  },
  {
    q: "When calculating depth of field in cinematography, what optical distance setting yields acceptable sharpness from half that distance all the way to infinity?",
    opts: [
      "Hyperfocal Distance",
      "Focal Flange Collimation Distance",
      "Minimum Focus Distance (MOD)",
      "Optical Nodal Point Axis"
    ],
    ans: 0
  },
  {
    q: "In offline/online post-production workflows, what lightweight, low-bitrate video files are used during creative editing before final conform and color grading?",
    opts: [
      "Proxy Media (e.g., ProRes Proxy or DNxHR LB)",
      "Uncompressed 16-bit DPX master image sequences",
      "4K RAW Bayer sensor dumps",
      "HEVC H.265 distribution streams"
    ],
    ans: 0
  },
  {
    q: "Which camera stabilization system isolates camera movement using a mechanical counterweighted sled, articulated arm, and operator vest?",
    opts: [
      "Steadicam mechanical stabilizer",
      "Electronic motorized 3-axis brushless gimbal",
      "Optical image stabilization (OIS) inside the lens barrel",
      "Electronic digital sensor crop stabilization"
    ],
    ans: 0
  },
  {
    q: "When filming in bright sunlight with a wide aperture (e.g., f/1.4 or T1.5) to achieve shallow depth of field, what optical filter reduces exposure without altering color balance?",
    opts: [
      "Neutral Density (ND) filter",
      "Linear polarizing filter",
      "80A daylight-to-tungsten cooling filter",
      "UV haze cut-off filter"
    ],
    ans: 0
  },
  {
    q: "In visual effects (VFX) plate photography, what color subsampling standard is required to preserve sharp matte edges during green-screen chroma keying?",
    opts: [
      "4:2:2 or 4:4:4 uncompressed chroma subsampling",
      "4:2:0 consumer compression subsampling",
      "4:1:1 NTSC legacy video subsampling",
      "1:0:0 luminance-only grayscale sampling"
    ],
    ans: 0
  },
  {
    q: "In script supervision and visual continuity, what imaginary line between two characters must the camera never cross to maintain consistent screen direction?",
    opts: [
      "The 180-Degree Line (Axis of Action)",
      "The 30-degree focal cutoff boundary",
      "The horizon level line",
      "The blocking focal mark"
    ],
    ans: 0
  },
  {
    q: "In high-efficiency cinema lighting, what high-intensity discharge lamp produces daylight-balanced 5600K light with very high luminous efficacy per watt?",
    opts: [
      "HMI (Hydrargyrum Medium-arc Iodide) light",
      "Standard Tungsten-Halogen filament bulb",
      "Low-pressure sodium vapor street lamp",
      "Mercury vapor industrial tube"
    ],
    ans: 0
  },
  {
    q: "In modern cinema sound design, which multichannel immersive format incorporates 3D height speaker channels and audio objects positioned in spatial coordinate space?",
    opts: [
      "Dolby Atmos / DTS:X object-based spatial audio",
      "Standard 5.1 channel surround sound",
      "2.0 stereo matrix encoding",
      "Binaural dummy-head mono mix"
    ],
    ans: 0
  }
];

// 20 new questions for interior-design (Total 30)
const INTERIOR_DESIGN_EXTRA = [
  {
    q: "In residential and commercial kitchen design, what planning concept states that the sum of the distances between the sink, cooktop, and refrigerator should measure between 12 and 26 feet?",
    opts: [
      "The Kitchen Work Triangle",
      "The Ergonomic Perimeter Standard",
      "The ADA Countertop Radius",
      "The Galley Circulation Index"
    ],
    ans: 0
  },
  {
    q: "Under the Americans with Disabilities Act (ADA) Standards for Accessible Design, what is the minimum turning clear space diameter required for wheelchair maneuverability?",
    opts: [
      "60 inches (1525 mm) circular turning diameter",
      "36 inches (915 mm) narrow corridor width",
      "48 inches (1220 mm) straight clearance",
      "72 inches (1830 mm) full span dimension"
    ],
    ans: 0
  },
  {
    q: "In architectural interior lighting calculations, what unit measures the total illuminance delivered on a working surface per unit area in SI units?",
    opts: [
      "Lux (lumens per square meter)",
      "Candela (luminous intensity)",
      "Foot-candle (lumens per square foot)",
      "Lumen (total luminous flux output)"
    ],
    ans: 0
  },
  {
    q: "According to ASTM E84 (Standard Test Method for Surface Burning Characteristics of Building Materials), what classification is assigned to interior wall finishes with a Flame Spread Index of 0 to 25?",
    opts: [
      "Class A (Class I)",
      "Class B (Class II)",
      "Class C (Class III)",
      "Class D non-rated"
    ],
    ans: 0
  },
  {
    q: "In sustainable commercial interior design (LEED v4), what volatile organic compound category must be strictly minimized in adhesives, sealants, paints, and composite wood?",
    opts: [
      "VOC (Volatile Organic Compounds) emissions",
      "Noble gas atmospheric particulates",
      "Mineralized silica crystal dust",
      "Natural cellulose moisture vapor"
    ],
    ans: 0
  },
  {
    q: "In upholstery and commercial contract textile specifications, what standard abrasion test measures the durability of fabric using back-and-forth wire screen or cotton duck rubs?",
    opts: [
      "Wyzenbeek Abrasion Test (Double Rubs)",
      "Munsell Chroma Saturation Test",
      "Knoop Microhardness Indentation Test",
      "ASTM D1003 Haze and Luminous Transmittance"
    ],
    ans: 0
  },
  {
    q: "In commercial interior construction sets, which architectural drawing provides an orthographic projection of the ceiling layout, showing lighting fixtures, HVAC diffusers, and sprinkler heads?",
    opts: [
      "Reflected Ceiling Plan (RCP)",
      "Horizontal structural floor framing plan",
      "Exterior elevation detail",
      "Subfloor plumbing riser schematic"
    ],
    ans: 0
  },
  {
    q: "In color science used by interior architects, what color system defines any given hue by three coordinates: Hue, Value (lightness), and Chroma (purity/saturation)?",
    opts: [
      "The Munsell Color System",
      "The CMYK subtractive ink process",
      "The CIE XYZ 1931 coordinate gamut",
      "The NCS Natural Colour System only"
    ],
    ans: 0
  },
  {
    q: "In architectural millwork and custom cabinetry, which recognized industry standard manual specifies fabrication tolerances and premium/custom execution grades?",
    opts: [
      "AWI (Architectural Woodwork Institute) Architectural Woodwork Standards (AWS)",
      "AISC Steel Construction Manual",
      "ACI 318 Concrete Building Code",
      "ASME Boiler and Pressure Vessel Code"
    ],
    ans: 0
  },
  {
    q: "In dining space planning, what is the minimum clearance distance recommended between the edge of a dining table and the nearest wall or obstacle to permit an occupant to push back their chair and stand?",
    opts: [
      "36 inches (915 mm) minimum (44 inches for clear passage)",
      "24 inches (610 mm) tight fit",
      "18 inches (455 mm) compressed space",
      "54 inches (1370 mm) oversized clearance"
    ],
    ans: 0
  },
  {
    q: "In biophilic interior design and daylighting strategy, what architectural shading feature regulates glare while bouncing natural daylight deeper into the interior ceiling plenum?",
    opts: [
      "Interior / exterior Daylight Light Shelf",
      "Blackout motorized roller shades",
      "Solid acoustic barrier partition",
      "Opaque glass transom spandrel"
    ],
    ans: 0
  },
  {
    q: "In commercial high-traffic flooring, what durable composite material is made of marble, granite, or quartz chips poured in an epoxy or cementitious matrix and ground flat and polished?",
    opts: [
      "Terrazzo Flooring",
      "Engineered hardwood floating floor",
      "Homogeneous luxury vinyl tile (LVT)",
      "Vitrified glazed wall porcelain"
    ],
    ans: 0
  },
  {
    q: "In contract interior specification, what document itemizes all Furniture, Fixtures, and Equipment (FF&E) with manufacturer names, model numbers, finish codes, and quantities?",
    opts: [
      "FF&E Specification Schedule",
      "Bill of Lading shipping manifest",
      "Geotechnical soil boring report",
      "Building permit inspection card"
    ],
    ans: 0
  },
  {
    q: "What metric measures the effectiveness of an interior partition wall in reducing airborne sound transmission between adjacent hotel guestrooms or private executive offices?",
    opts: [
      "Sound Transmission Class (STC rating)",
      "Noise Reduction Coefficient (NRC)",
      "Ceiling Attenuation Class (CAC)",
      "Impact Insulation Class (IIC) alone"
    ],
    ans: 0
  },
  {
    q: "Under commercial wallcovering standards (WA-101 / ASTM F793), what class of vinyl wallcovering is required for high-traffic corridors, public lobbies, and hospitality corridors?",
    opts: [
      "Type II Medium / Heavy-Duty Commercial Vinyl (20 oz/linear yard)",
      "Type I Light-Duty Residential Vinyl (15 oz/linear yard)",
      "Type III Extra Heavy Specialty Wall Guard",
      "Uncoated grasscloth wallcovering"
    ],
    ans: 0
  },
  {
    q: "In drafting two-point perspective drawings for interior spaces, what visual phenomenon causes all horizontal parallel lines receding away from the observer to converge?",
    opts: [
      "Vanishing Points located on the Horizon Line (Eye Level)",
      "Focal points located on the station point plan",
      "Cones of vision intersecting ground lines",
      "Isometric parallel projection axes"
    ],
    ans: 0
  },
  {
    q: "What is the standard ergonomic counter height for standard residential kitchen base cabinets (measured from finished floor to countertop surface)?",
    opts: [
      "36 inches (914 mm)",
      "30 inches (762 mm)",
      "42 inches (1067 mm)",
      "28 inches (711 mm)"
    ],
    ans: 0
  },
  {
    q: "In high-performance acoustic ceiling systems, what is the typical minimum NRC (Noise Reduction Coefficient) specified for open-plan corporate work environments to mitigate speech distractions?",
    opts: [
      "0.70 to 0.85 NRC",
      "0.20 to 0.35 NRC",
      "0.05 to 0.15 NRC",
      "0.40 to 0.50 NRC"
    ],
    ans: 0
  },
  {
    q: "In commercial window solar control, what fabric property of a motorized roller shade describes the percentage of open space between woven yarns that allows exterior view-through?",
    opts: [
      "Openness Factor (typically 1%, 3%, 5%, or 10%)",
      "Solar Reflectance Index (SRI)",
      "Visible Light Transmittance (VLT)",
      "U-factor thermal conductivity"
    ],
    ans: 0
  },
  {
    q: "When specifying interior paint sheens, which finish offers the highest washability and moisture resistance, making it ideal for commercial restrooms, baseboards, and commercial kitchens?",
    opts: [
      "Semi-Gloss or High-Gloss enamel",
      "Flat / Matte finish",
      "Eggshell velvet finish",
      "Satin low-luster finish"
    ],
    ans: 0
  }
];

// 20 new questions for game-development (Total 30)
const GAME_DEVELOPMENT_EXTRA = [
  {
    q: "In modern game engine architecture (e.g. Unity or Unreal Engine), what is the difference between a variable frame update loop and a fixed-interval physics tick loop?",
    opts: [
      "Update() executes once per rendered frame with variable deltaTime; FixedUpdate() executes at constant time intervals for deterministic physics calculations",
      "Update() handles multi-threaded network packets; FixedUpdate() runs purely on GPU vertex shaders",
      "FixedUpdate() is executed only once when the game loads into system RAM",
      "Update() can only be called from mobile Android devices"
    ],
    ans: 0
  },
  {
    q: "In 3D collision detection pipelines, what two-stage optimization architecture reduces performance overhead when evaluating hundreds of moving rigid bodies?",
    opts: [
      "Broad-phase collision using spatial partitioning/bounding boxes, followed by narrow-phase precision triangle mesh intersection",
      "Raymarching through screen space followed by depth buffer clearing",
      "Fragment shading depth sorting followed by alpha blending",
      "Euler integration followed by matrix inversion"
    ],
    ans: 0
  },
  {
    q: "In modern real-time rendering pipelines, what is the primary advantage of Deferred Shading over traditional Forward Rendering in scenes with many dynamic light sources?",
    opts: [
      "Lighting calculations decouple from scene geometric complexity with O(geometry + lights) overhead instead of O(geometry * lights)",
      "Deferred Shading eliminates the need for a depth buffer",
      "Deferred Shading natively handles transparent glass surfaces without artifacts",
      "Deferred Shading uses zero video memory on the GPU"
    ],
    ans: 0
  },
  {
    q: "What design pattern pre-instantiates and recycles a collection of game objects (like bullets, enemy spawns, and particle effects) to eliminate garbage collection frame-stutters?",
    opts: [
      "Object Pool Pattern",
      "Observer Pattern",
      "Singleton Pattern",
      "Model-View-ViewModel (MVVM) Pattern"
    ],
    ans: 0
  },
  {
    q: "In game AI navigation on complex 3D terrain, which pathfinding algorithm combined with Navigation Meshes (NavMesh) calculates optimal routes using heuristics?",
    opts: [
      "A* (A-Star) Search Algorithm",
      "Breadth-First Search (BFS) without weights",
      "Linear regression gradient descent",
      "Floyd-Warshall all-pairs shortest path"
    ],
    ans: 0
  },
  {
    q: "In character procedural animation, what mathematical technique calculates joint rotation angles along a bone chain so an end effector (like a character foot) matches target ground topography?",
    opts: [
      "Inverse Kinematics (IK)",
      "Forward Kinematics (FK) alone",
      "Linear Blend Skinning without joints",
      "Quat-to-Euler gimbal translation"
    ],
    ans: 0
  },
  {
    q: "In graphics rendering optimization, what technique renders lower-polygon 3D meshes as an object moves further away from the active camera view?",
    opts: [
      "Level of Detail (LOD) Meshing",
      "Frustum culling without clipping",
      "Texture mipmapping alone",
      "Normal map baking"
    ],
    ans: 0
  },
  {
    q: "In fast-paced multiplayer network programming, what client-side technique immediately displays local player inputs before receiving authoritative confirmation from the dedicated game server?",
    opts: [
      "Client-Side Prediction with Server Reconciliation and Rollback",
      "Lockstep peer-to-peer wait loop",
      "Stop-and-wait ARQ packet protocol",
      "Unicast broadcast pinging without authority"
    ],
    ans: 0
  },
  {
    q: "In real-time 3D graphics, what spatial data structure recursively subdivides three-dimensional space into eight octants to accelerate frustum and occlusion culling?",
    opts: [
      "Octree",
      "Quadtree (2D only)",
      "Binary Heap",
      "Linear Doubly Linked List"
    ],
    ans: 0
  },
  {
    q: "What modern data-oriented architectural paradigm organizes games into pure Data Components and Systems operating on contiguous memory arrays for CPU cache optimization?",
    opts: [
      "Entity Component System (ECS)",
      "Object-Oriented Inheritance Hierarchy",
      "Monolithic God Object Pattern",
      "Procedural Spaghetti Routine"
    ],
    ans: 0
  },
  {
    q: "In 3D character rigging, what rotation representation eliminates 'Gimbal Lock' (the loss of one degree of freedom when two rotation axes align)?",
    opts: [
      "Quaternions (four-dimensional hypercomplex numbers)",
      "Euler angles (Pitch, Yaw, Roll)",
      "3x3 Orthographic projection matrices",
      "Cartesian coordinate offset vectors"
    ],
    ans: 0
  },
  {
    q: "In shader development, which shader stage runs per-pixel/fragment on the GPU, calculating final surface color, roughness, and specular reflections based on lighting models?",
    opts: [
      "Fragment / Pixel Shader",
      "Vertex Shader (operating on mesh vertices)",
      "Tessellation Hull Shader",
      "Geometry Primitive Shader"
    ],
    ans: 0
  },
  {
    q: "What technique generates pre-filtered, progressively lower-resolution versions of a texture to prevent aliasing artifacts and reduce memory bandwidth when textured surfaces are viewed at a distance?",
    opts: [
      "Mipmapping",
      "Alpha testing",
      "Bilinear anisotropic clamping",
      "Render-to-texture blitting"
    ],
    ans: 0
  },
  {
    q: "In game AI behavior architecture, what hierarchical structure uses composite selector and sequence nodes with conditions and actions to govern complex NPC decision-making?",
    opts: [
      "Behavior Trees (BT)",
      "Simple two-state boolean switch",
      "Unsorted FIFO job queue",
      "Hardcoded switch-case statement without hierarchy"
    ],
    ans: 0
  },
  {
    q: "In game physics simulation, what parameter measures the elasticity of a collision between two rigid bodies (where 1.0 represents a perfectly elastic collision and 0.0 is completely inelastic)?",
    opts: [
      "Coefficient of Restitution",
      "Friction friction coefficient",
      "Linear drag damping ratio",
      "Inertia tensor diagonal"
    ],
    ans: 0
  },
  {
    q: "What post-processing ambient shading technique darkens creases, corners, and contact points between objects in real time by sampling nearby screen-space depth values?",
    opts: [
      "Screen Space Ambient Occlusion (SSAO)",
      "Fast Approximate Anti-Aliasing (FXAA)",
      "High Dynamic Range (HDR) Tone Mapping",
      "Chromatic Aberration Fringe"
    ],
    ans: 0
  },
  {
    q: "In game audio programming, what spatial filtering technology models how sound waves diffract around human ear pinnae and head geometry to simulate authentic 3D spatialized binaural audio?",
    opts: [
      "Head-Related Transfer Function (HRTF)",
      "Graphic equalizer peak boost",
      "Dynamic range compression limiter",
      "Flanger phase modulation"
    ],
    ans: 0
  },
  {
    q: "In graphics optimization, what is a 'Draw Call' in the context of communicating between the CPU and GPU?",
    opts: [
      "A command issued by the CPU to the graphics API instructing the GPU to render a specific batch of geometry using designated shader states",
      "A network packet sent to a remote game server requesting player coordinates",
      "A database query retrieving player high scores from cold storage",
      "A hardware interrupt that powers down the computer monitor"
    ],
    ans: 0
  },
  {
    q: "In real-time computer graphics, what technique calculates dynamic lighting and reflections by tracing rays of light through the scene geometry in real time?",
    opts: [
      "Ray Tracing / Path Tracing (e.g. DXR / Vulkan RT)",
      "Precomputed diffuse radiosity lightmaps only",
      "Vertex color baking",
      "Screen-space blit pass"
    ],
    ans: 0
  },
  {
    q: "What anti-aliasing technique reduces jagged pixel edges by accumulating and blending sub-pixel jitter samples across consecutive temporal frames?",
    opts: [
      "Temporal Anti-Aliasing (TAA)",
      "Multi-Sample Anti-Aliasing (MSAA) single-frame only",
      "Supersampling (SSAA) 16x brute force",
      "Nearest-neighbor point sampling"
    ],
    ans: 0
  }
];

// 20 new questions for fashion-design (Total 30)
const FASHION_DESIGN_EXTRA = [
  {
    q: "In textile science, which basic fabric weave structure is characterized by distinct diagonal lines or wales running across the fabric surface (such as in denim, gabardine, and drill)?",
    opts: [
      "Twill Weave",
      "Plain Weave (Tabby weave)",
      "Satin Weave",
      "Jacquard Damask Weave"
    ],
    ans: 0
  },
  {
    q: "In pattern drafting and garment construction, cutting fabric at a 45-degree angle to the lengthwise warp and crosswise weft grainlines is known as cutting on the:",
    opts: [
      "True Bias (maximizing drape and fluid stretch)",
      "Straight of Grain (warp direction)",
      "Crossgrain (weft direction)",
      "Selvedge border"
    ],
    ans: 0
  },
  {
    q: "In flat pattern making, what triangular fold is stitched into flat fabric to shape a 2D piece around 3D body contours (such as the bust, shoulder, or hips)?",
    opts: [
      "Dart",
      "Pleat",
      "Gore",
      "Godet"
    ],
    ans: 0
  },
  {
    q: "In tailored menswear and jacket construction, what high-end seam finishes raw fabric edges entirely inside a neat double-folded seam without exposing any serging threads?",
    opts: [
      "French Seam",
      "Standard 4-thread overlock seam",
      "Pinked edge zigzag seam",
      "Raw cut lockstitch seam"
    ],
    ans: 0
  },
  {
    q: "In apparel manufacturing, what comprehensive document communicates complete design specifications, technical flats, bill of materials (BOM), stitch types, and points of measurement (POM) to garment factories?",
    opts: [
      "Tech Pack (Technical Specification Package)",
      "Mood Board collage",
      "Cost of Goods Sold (COGS) ledger",
      "Lookbook marketing catalog"
    ],
    ans: 0
  },
  {
    q: "Under the legal criteria established by the Fédération de la Haute Couture et de la Mode in Paris, which requirement must a fashion house fulfill to use the protected label 'Haute Couture'?",
    opts: [
      "Design made-to-order garments with custom fittings, maintain a Paris atelier with at least 15 full-time staff, and present two collections per year",
      "Sell mass-produced ready-to-wear collections in over 1,000 retail department stores",
      "Produce all garments exclusively with 100% synthetic recycled polyester",
      "Manufacture all clothing lines using automated computer-controlled laser cutters only"
    ],
    ans: 0
  },
  {
    q: "In natural textile fibers, which protein fiber harvested from the cocoons of Bombyx mori silkworms is known for its triangular prism-like fiber cross-section that refracts light at different angles?",
    opts: [
      "Silk",
      "Cotton (cellulose seed hair)",
      "Linen (flax bast fiber)",
      "Hemp fiber"
    ],
    ans: 0
  },
  {
    q: "In industrial apparel pattern grading, what process scales a base size pattern (sample size) up and down to create a complete range of commercial sizes?",
    opts: [
      "Pattern Grading using Cartesian grade rules (X and Y coordinate shifts)",
      "Draping on an adjustable dress form",
      "Rotary die stamping",
      "Fabric bias stretching"
    ],
    ans: 0
  },
  {
    q: "In knitwear engineering, what machine metric indicates the number of needles per inch across the needle bed, determining whether a knit is coarse gauge (chunky) or fine gauge?",
    opts: [
      "Machine Gauge (GG)",
      "Denier filament count",
      "Tex metric weight",
      "NeB yarn count ratio"
    ],
    ans: 0
  },
  {
    q: "What sewing machine stitch classification (ISO 4915) uses a top needle thread interlocking with a bottom bobbin thread, forming the standard lockstitch used in universal garment assembly?",
    opts: [
      "Stitch Type 301 (Lockstitch)",
      "Stitch Type 101 (Single-thread chainstitch)",
      "Stitch Type 401 (Two-thread chainstitch)",
      "Stitch Type 504 (Three-thread overedge)"
    ],
    ans: 0
  },
  {
    q: "In garment tailoring, what supportive textile layer is placed between the outer shell fabric and lining of a jacket chest piece to impart structure, shape retention, and roll to the lapel?",
    opts: [
      "Hair Canvas Interfacing (horsehair or wool canvas)",
      "Thermal polyester batting insulation",
      "Lightweight synthetic tricot knit",
      "Spunbond polypropylene disposable backing"
    ],
    ans: 0
  },
  {
    q: "In sustainable textile chemistry, which regenerated cellulosic fiber is produced via a closed-loop solvent spinning process that recycles non-toxic N-Methylmorpholine N-oxide (NMMO) solvent and water?",
    opts: [
      "Lyocell (TENCEL)",
      "Conventional viscose rayon (xanthate process)",
      "Secondary cellulose acetate",
      "Cuprammonium rayon"
    ],
    ans: 0
  },
  {
    q: "In color specification for apparel and footwear manufacturing, which globally recognized color standardization system uses unique alphanumeric codes for textiles (e.g. 19-4052 TCX Classic Blue)?",
    opts: [
      "Pantone Fashion, Home + Interiors (FHI) System",
      "Federal Standard 595C paint codes",
      "RAL Classic industrial powder coat system",
      "Natural Colour System (NCS) exterior standard"
    ],
    ans: 0
  },
  {
    q: "In denim production and durable workwear jeans, what sturdy seam features overlapping folded edges stitched down with two parallel rows of needle stitching on the outside?",
    opts: [
      "Flat-Felled Seam (Lap Seam)",
      "Open pressed plain seam with overcast edges",
      "Overlocked single safety stitch",
      "Welt seam with exposed raw edges"
    ],
    ans: 0
  },
  {
    q: "In textile testing, which metric defines the mass in grams per 9,000 meters of a continuous filament fiber or yarn (commonly used for hosiery, nylon, and polyester)?",
    opts: [
      "Denier",
      "Tex (grams per 1,000 meters)",
      "Cotton Count (NeC)",
      "Worsted Count"
    ],
    ans: 0
  },
  {
    q: "In 3D garment design and haute couture atelier practice, what process shapes uncut fabric (typically cotton muslin/toile) directly on a three-dimensional dress mannequin to develop garment patterns?",
    opts: [
      "Draping (Moulage)",
      "CAD vector flat drafting",
      "Digitizer table tracing",
      "Computerized marker nesting"
    ],
    ans: 0
  },
  {
    q: "What fabric property describes how a textile falls, ripples, and conforms to a three-dimensional form under the influence of gravity?",
    opts: [
      "Fabric Drape (Drape Coefficient)",
      "Tensile breaking tenacity",
      "Abrasion resistance double rubs",
      "Dimensional shrinkage percentage"
    ],
    ans: 0
  },
  {
    q: "Which historical silhouette created by Christian Dior in his 1947 'New Look' collection is characterized by narrow, sloped shoulders, a tiny cinched waist, and a voluminous calf-length full skirt?",
    opts: [
      "The Hourglass (Corolle) Silhouette",
      "The 1920s Tubular Flapper Silhouette",
      "The 1960s Mini A-Line Trapeze Silhouette",
      "The 1980s Oversized Power Suit Silhouette"
    ],
    ans: 0
  },
  {
    q: "In textile dyeing, what method introduces dye pigments directly into liquid chemical polymer dope before extruding filaments through spinnerets, ensuring superior colorfastness against sunlight and bleaching?",
    opts: [
      "Solution / Dope Dyeing",
      "Piece Dyeing of woven grey goods",
      "Garment Dip Dyeing",
      "Screen Print Overdyeing"
    ],
    ans: 0
  },
  {
    q: "In retail fashion merchandising, what pricing model establishes the retail selling price at exactly double the wholesale cost price of a garment?",
    opts: [
      "Keystone Markup (100% markup on wholesale cost / 50% gross margin)",
      "Loss-Leader Promotional Pricing",
      "Dynamic auction algorithmic pricing",
      "Breakeven penetration pricing"
    ],
    ans: 0
  }
];

// 20 new questions for robotics-engineering (Total 30)
const ROBOTICS_ENGINEERING_EXTRA = [
  {
    q: "In multi-link serial robot kinematics, what standardized four-parameter mathematical convention systematically establishes coordinate reference frames on each joint link?",
    opts: [
      "Denavit-Hartenberg (DH) Parameters (link length a, link twist alpha, link offset d, joint angle theta)",
      "Euler-Rodrigues vector transformations",
      "Screw Theory twists and wrenches alone",
      "Cartesian quaternion state vectors"
    ],
    ans: 0
  },
  {
    q: "In mobile robotics autonomous navigation, which computational challenge involves a robot constructing a map of an unknown environment while simultaneously tracking its own position within that map?",
    opts: [
      "Simultaneous Localization and Mapping (SLAM)",
      "Open-loop dead reckoning odometry",
      "Static Dijkstra grid searching",
      "PID speed cruise control"
    ],
    ans: 0
  },
  {
    q: "In high-precision industrial robotics (like robotic arm joints), what type of compact gearbox provides zero-backlash, high single-stage gear reduction ratios, and high torque capacity using an elliptical wave generator and flexspline?",
    opts: [
      "Harmonic Drive (Strain Wave Gearing)",
      "Spur gear transmission set",
      "Bevel gear differential set",
      "Standard worm drive assembly"
    ],
    ans: 0
  },
  {
    q: "In closed-loop robot control systems, what does the 'Integral' term in a PID controller eliminate that a pure Proportional controller cannot?",
    opts: [
      "Steady-state tracking error",
      "High-frequency sensor noise",
      "Overshoot on initial step response",
      "Actuator saturation limits"
    ],
    ans: 0
  },
  {
    q: "In mobile robot kinematic modeling, what two-wheeled drive configuration steers a platform by independently varying the rotational speeds of its left and right drive wheels?",
    opts: [
      "Differential Drive System",
      "Ackermann Steering Geometry (car steering)",
      "Omnidirectional Mecanum Drive with 45-degree rollers",
      "Articulated chassis center pivot"
    ],
    ans: 0
  },
  {
    q: "In industrial robotic manipulators, which mathematical matrix relates joint velocities to the resulting linear and angular velocities of the robot end-effector in Cartesian space?",
    opts: [
      "The Geometric Jacobian Matrix",
      "The Mass / Inertia Tensor Matrix",
      "The Homogeneous Translation Vector",
      "The Stiffness compliance matrix"
    ],
    ans: 0
  },
  {
    q: "In modern Robot Operating System 2 (ROS 2), what standardized peer-to-peer data connectivity framework replaces the centralized master node architecture of ROS 1 for reliable real-time communication?",
    opts: [
      "DDS (Data Distribution Service)",
      "Raw TCP socket broadcasting",
      "HTTP/1.1 RESTful web APIs",
      "Serial RS-232 UART loopback"
    ],
    ans: 0
  },
  {
    q: "In robotic sensor fusion, which recursive estimation algorithm estimates the optimal state of a non-linear dynamical system by linearizing about the current estimate using Taylor series expansion?",
    opts: [
      "Extended Kalman Filter (EKF)",
      "Standard Linear Kalman Filter (LKF)",
      "Simple moving average window",
      "Static lookup table interpolation"
    ],
    ans: 0
  },
  {
    q: "Under international safety standards for collaborative robots (ISO/TS 15066 and ISO 10218), what capability allows a cobot to work alongside human operators without physical safety cages?",
    opts: [
      "Power and Force Limiting (PFL) with integrated torque sensors detecting contact and stopping instantaneously",
      "Operating at maximum industrial speed regardless of human proximity",
      "Disabling all emergency stop buttons during production",
      "Replacing electric servo motors with hydraulic rams"
    ],
    ans: 0
  },
  {
    q: "In robotic arm trajectory generation, which polynomial interpolation curve ensures continuous position, velocity, and acceleration (zero jerk at endpoints) for smooth vibration-free arm movement?",
    opts: [
      "Quintic (5th-degree) Polynomial Spline",
      "Linear ramp trajectory",
      "Quadratic step function",
      "Bang-bang discontinuous acceleration curve"
    ],
    ans: 0
  },
  {
    q: "In autonomous mobile robots (AMRs), which sensor technology measures distances by emitting pulsed laser light and calculating the time of flight (ToF) of reflected photon pulses?",
    opts: [
      "LiDAR (Light Detection and Ranging)",
      "Ultrasonic sonar transducer",
      "Infrared break-beam photodiode",
      "Capacitive proximity sensor"
    ],
    ans: 0
  },
  {
    q: "What singular condition occurs in a 6-axis articulated robotic arm when its Jacobian matrix loses rank, causing the robot to lose degrees of freedom in certain Cartesian directions?",
    opts: [
      "Kinematic Singularity (such as wrist, elbow, or shoulder singularity)",
      "Actuator thermal overload shutdown",
      "Battery voltage brownout",
      "Mechanical gear tooth shear"
    ],
    ans: 0
  },
  {
    q: "In robotic gripping and manipulation of delicate, irregularly shaped, or fragile objects (like agricultural produce), which modern technology utilizes flexible elastomeric chambers actuated by pneumatic fluid pressure?",
    opts: [
      "Soft Robotic Grippers (Pneumatic Network Actuators)",
      "High-pressure hydraulic clamping jaws",
      "Electromagnetic iron plate chucks",
      "Hardened steel vise jaws"
    ],
    ans: 0
  },
  {
    q: "In high-rate servo drive feedback, what rotary feedback device generates pulses from a slotted optical disk to determine motor shaft angular velocity and relative position incrementally?",
    opts: [
      "Optical Incremental Rotary Encoder",
      "Linear variable differential transformer (LVDT)",
      "Strain gauge load cell",
      "Thermocouple probe"
    ],
    ans: 0
  },
  {
    q: "In robotic force and compliance control during assembly operations (such as peg-in-hole insertion), what sensor mounted between the robot tool flange and end-effector measures multi-axis forces and moments?",
    opts: [
      "6-Axis Force / Torque (F/T) Sensor",
      "Single-axis tactile micro-switch",
      "Hall-effect current sensing shunt",
      "Optical CMOS camera sensor"
    ],
    ans: 0
  },
  {
    q: "In autonomous ground vehicles and drones, what multi-sensor package integrates 3-axis gyroscopes, 3-axis accelerometers, and 3-axis magnetometers to calculate angular velocity and orientation?",
    opts: [
      "Inertial Measurement Unit (IMU)",
      "Wheel speed tachometer",
      "Barometric altimeter alone",
      "Thermistor junction array"
    ],
    ans: 0
  },
  {
    q: "In industrial robotics specifications, what parameter measures the ability of a robotic manipulator to return to the exact same commanded position repeatedly under identical conditions?",
    opts: [
      "Repeatability (typically +/- 0.02 mm)",
      "Absolute Accuracy in global CAD space",
      "Payload carrying capacity in kg",
      "Maximum joint reach radius"
    ],
    ans: 0
  },
  {
    q: "In autonomous mobile robot local motion planning, which algorithm evaluates admissible translational and rotational velocity pairs in velocity space to navigate around dynamic obstacles without collision?",
    opts: [
      "Dynamic Window Approach (DWA)",
      "Depth-First Search (DFS)",
      "Breadth-First Search (BFS)",
      "Linear programming simplex method"
    ],
    ans: 0
  },
  {
    q: "In computer vision for robotics, what 2D planar fiducial markers with wide black borders and embedded binary code matrices are used for fast, robust 6-DoF camera-to-target pose estimation?",
    opts: [
      "ArUco / AprilTag Fiducial Markers",
      "Universal Product Code (UPC) retail barcodes",
      "Standard QR codes without pose algorithms",
      "Color lookup test charts"
    ],
    ans: 0
  },
  {
    q: "In quadcopter multi-rotor drone robotics, how does a drone execute a yaw rotation (turning left or right around its vertical z-axis) while maintaining a steady hover altitude?",
    opts: [
      "By accelerating two diagonally opposite clockwise rotors while decelerating the two counter-clockwise rotors, producing a net reactive torque imbalance",
      "By mechanically tilting all four motor shafts using mechanical servo linkages",
      "By deploying aerodynamic airbrakes on one side",
      "By reversing the polarity of all four brushless motors simultaneously"
    ],
    ans: 0
  }
];

// 20 new questions for petroleum-engineering (Total 30)
const PETROLEUM_ENGINEERING_EXTRA = [
  {
    q: "In reservoir engineering, which fundamental law governs the single-phase laminar flow of fluid through porous rock media, relating flow rate to permeability, fluid viscosity, and pressure gradient?",
    opts: [
      "Darcy's Law",
      "Poiseuille's Capillary Flow Equation",
      "Bernoulli's Frictionless Energy Equation",
      "Navier-Stokes Turbulent Flow Formulation"
    ],
    ans: 0
  },
  {
    q: "In borehole petrophysical logging, what open-hole log measures natural radioactivity to distinguish impermeable clay-rich shale formations from permeable sandstone and carbonate reservoirs?",
    opts: [
      "Gamma Ray Log",
      "Density Log using gamma-gamma Compton scattering",
      "Neutron Porosity Log",
      "Deep Induction Resistivity Log"
    ],
    ans: 0
  },
  {
    q: "In petroleum drilling operations, what critical safety equipment mounted on the wellhead contains hydraulic annular and ram preventers to seal the wellbore and prevent an uncontrolled blowout?",
    opts: [
      "Blowout Preventer (BOP) Stack",
      "Rotary table master bushing",
      "Top drive motor assembly",
      "Mud-gas separator degasser"
    ],
    ans: 0
  },
  {
    q: "In reservoir fluid thermodynamics (PVT analysis), what pressure marks the threshold below which dissolved natural gas begins to liberate out of solution from crude oil as a free gas phase?",
    opts: [
      "Bubble Point Pressure (Saturation Pressure)",
      "Dew Point Pressure",
      "Critical Condensation Pressure",
      "Hydrostatic Wellbore Pressure"
    ],
    ans: 0
  },
  {
    q: "In petrophysics, what empirical formula developed by G.E. Archie relates rock electrical resistivity, porosity, and brine resistivity to calculate hydrocarbon saturation (Sw) in uninvaded clean formations?",
    opts: [
      "Archie's Equation",
      "Kozeny-Carman Porosity-Permeability Equation",
      "Ergun Packed-Bed Friction Equation",
      "Waxman-Smits Shaly Sand Equation"
    ],
    ans: 0
  },
  {
    q: "In drilling mud engineering, what synthetic or natural swelling clay mineral is added to water-based drilling muds to build viscosity, provide gel strength, and form an impermeable filter cake on borehole walls?",
    opts: [
      "Sodium Bentonite (Montmorillonite)",
      "Calcium Carbonate Barite weighting agent",
      "Barium Sulfate (Barite) only",
      "Potassium Chloride brine salt"
    ],
    ans: 0
  },
  {
    q: "In petroleum production engineering, what graphical analysis combines the Inflow Performance Relationship (IPR) of the reservoir with the Vertical Lift Performance (VLP) of the tubing to determine the operating production flow rate?",
    opts: [
      "Nodal Analysis (System Analysis)",
      "Decline Curve Semi-Log Plotting",
      "Material Balance p/z plot",
      "Pressure Transient Horner Plot"
    ],
    ans: 0
  },
  {
    q: "What artificial lift system utilizes an electric motor, protector, intake, and multi-stage centrifugal pump submerged at the bottom of the production tubing to lift high volumes of fluid to surface?",
    opts: [
      "Electric Submersible Pump (ESP)",
      "Sucker Rod Pump (Beam Pumping Unit / Pumpjack)",
      "Progressing Cavity Pump (PCP)",
      "Plunger Lift System"
    ],
    ans: 0
  },
  {
    q: "In Enhanced Oil Recovery (EOR), which thermal recovery method injects high-pressure steam into an upper horizontal well to heat viscous bitumen, allowing it to drain into a lower parallel production well by gravity?",
    opts: [
      "Steam-Assisted Gravity Drainage (SAGD)",
      "Miscible CO2 Gas Injection Flooding",
      "Polymer Gel Waterflood Sweep",
      "Microbial In-Situ Fermentation"
    ],
    ans: 0
  },
  {
    q: "In offshore deepwater oil and gas developments, what floating vessel is equipped with processing facilities to receive hydrocarbons from subsea wells, treat them, store crude in its hull, and offload to shuttle tankers?",
    opts: [
      "FPSO (Floating Production Storage and Offloading) Vessel",
      "Fixed Jacket Offshore Platform",
      "Jack-Up Exploration Rig",
      "Tension Leg Platform (TLP)"
    ],
    ans: 0
  },
  {
    q: "In hydraulic fracturing of unconventional tight shale reservoirs, what spherical granular material (such as treated quartz silica sand or ceramic beads) is pumped with fracture fluid to hold open induced fractures?",
    opts: [
      "Proppant",
      "Friction Reducer Polymer",
      "Biocide bactericide additive",
      "Acid gel breaker"
    ],
    ans: 0
  },
  {
    q: "In reservoir production decline analysis, which empirical decline equations developed by J.J. Arps model hydrocarbon production rates using exponential, hyperbolic, or harmonic decline curves?",
    opts: [
      "Arps Decline Curve Equations",
      "Navier-Stokes Navier Equations",
      "Fick's Diffusion Law Equations",
      "Arrhenius Reaction Kinetics Formula"
    ],
    ans: 0
  },
  {
    q: "In well test analysis, what dimensionless parameter represents the mechanical restriction to fluid flow caused by near-wellbore formation damage, mud invasion, or partial penetration (positive value) versus stimulation (negative value)?",
    opts: [
      "Skin Factor (S)",
      "Tortuosity Coefficient (T)",
      "Cementation Exponent (m)",
      "Saturation Exponent (n)"
    ],
    ans: 0
  },
  {
    q: "In directional and horizontal drilling, which technology allows continuous rotation of the drill string while simultaneously steering the bit along a designated trajectory using internal hydraulic steering pads?",
    opts: [
      "Rotary Steerable Systems (RSS)",
      "Conventional Bent Housing Mud Motor in sliding mode",
      "Whipstock wedge casing diverter",
      "Cable-tool percussion drill string"
    ],
    ans: 0
  },
  {
    q: "In natural gas processing and flow assurance in deepwater pipelines, what solid crystalline ice-like compounds form at high pressures and low temperatures when water molecules trap light hydrocarbon gas molecules?",
    opts: [
      "Gas Hydrates (Clathrate Hydrates)",
      "Asphaltene precipitate sludge",
      "Paraffin wax crystal deposits",
      "Calcium carbonate scale crystals"
    ],
    ans: 0
  },
  {
    q: "In crude oil characterization, what standard measurement scale defined by the American Petroleum Institute evaluates how heavy or light a petroleum liquid is compared to water?",
    opts: [
      "API Gravity (degrees API)",
      "Baumé Specific Gravity Index",
      "Saybolt Universal Seconds (SUS)",
      "Centipoise Dynamic Viscosity"
    ],
    ans: 0
  },
  {
    q: "In deep well casing program design, which structural casing string is cemented from surface to protect shallow freshwater aquifers from drilling contamination and support subsequent BOP equipment?",
    opts: [
      "Surface Casing",
      "Conductor Pipe (Drive Pipe)",
      "Intermediate Casing",
      "Production Liner String"
    ],
    ans: 0
  },
  {
    q: "What well stimulation technique injects hydrochloric acid (HCl) or mud acid (HCl/HF) at pressures below the formation fracture pressure to dissolve carbonate minerals and bypass near-wellbore skin damage?",
    opts: [
      "Matrix Acidizing",
      "Hydraulic Acid Fracturing",
      "Solvent Vapor Extraction",
      "Thermal Combustion Soak"
    ],
    ans: 0
  },
  {
    q: "In oil reservoir material balance, what parameter (Bo) expresses the ratio of the volume of crude oil at reservoir temperature and pressure to the volume of that same oil at standard surface conditions (STB)?",
    opts: [
      "Oil Formation Volume Factor (FVF)",
      "Solution Gas-Oil Ratio (Rs)",
      "Gas Formation Volume Factor (Bg)",
      "Total Isothermal Compressibility (Ct)"
    ],
    ans: 0
  },
  {
    q: "In deep offshore subsea production systems, what assembly of subsea valves, chokes, and monitoring instruments installed on a subsea wellhead controls the flow of hydrocarbons from the well into seabed flowlines?",
    opts: [
      "Subsea Christmas Tree (Wet Tree)",
      "Subsea Manifold Hub",
      "Subsea Sump Caisson",
      "Subsea Riser Base"
    ],
    ans: 0
  }
];

// 20 new questions for marine-engineering (Total 30)
const MARINE_ENGINEERING_EXTRA = [
  {
    q: "In commercial naval architecture, what vertical distance between the center of gravity (G) and the transverse metacenter (M) governs the initial static stability and righting moment of a ship at small angles of heel?",
    opts: [
      "Transverse Metacentric Height (GM)",
      "Center of Buoyancy (KB)",
      "Keel to Metacenter Distance (KM)",
      "Freeboard draught margin"
    ],
    ans: 0
  },
  {
    q: "In large ocean-going container vessels and crude oil tankers, which prime mover directly drives a fixed-pitch propeller at low rotational speeds (typically 60 to 100 RPM) with thermal efficiencies exceeding 50%?",
    opts: [
      "Low-Speed Two-Stroke Crosshead Diesel Engine",
      "High-Speed Four-Stroke Trunk Piston Engine",
      "Aviation Aeroderivative Gas Turbine",
      "Triple-Expansion Reciprocating Steam Engine"
    ],
    ans: 0
  },
  {
    q: "Under international maritime environmental regulations (MARPOL Annex I), what is the maximum allowable oil content for bilge water discharge into the sea via an approved Oily Water Separator (OWS) and 15 ppm bilge alarm?",
    opts: [
      "15 parts per million (15 ppm)",
      "100 parts per million (100 ppm)",
      "50 parts per million (50 ppm)",
      "0 parts per million (Zero discharge permitted anywhere)"
    ],
    ans: 0
  },
  {
    q: "In marine hull hydrodynamics, what dimensionless number represents the ratio of a vessel's inertial forces to gravitational wave-making forces, used to quantify wave resistance across ship speeds?",
    opts: [
      "Froude Number (Fn)",
      "Reynolds Number (Rn)",
      "Mach Number",
      "Euler Cavitation Number"
    ],
    ans: 0
  },
  {
    q: "To protect a steel ship hull from galvanic corrosion in seawater, what active electronic system supplies protective direct electrical current from auxiliary DC power through inert titanium anodes mounted on the hull?",
    opts: [
      "Impressed Current Cathodic Protection (ICCP)",
      "Passive zinc sacrificial block anodes alone",
      "Electroless nickel-boron plating",
      "Anodized polyurethane paint coating"
    ],
    ans: 0
  },
  {
    q: "Under the IMO Ballast Water Management Convention (BWM Standard D-2), what dual-stage treatment process is widely installed aboard merchant ships to eliminate aquatic invasive species in ballast tanks?",
    opts: [
      "Mechanical filtration followed by Ultraviolet (UV) irradiation or Electrochlorination",
      "Boiling ballast water using waste exhaust heat",
      "Adding concentrated hydrochloric acid to ballast tanks",
      "Ultrasonic sound blasting in sea chests alone"
    ],
    ans: 0
  },
  {
    q: "In marine propulsion plants, what waste heat recovery equipment installed in the diesel engine exhaust uptake generates auxiliary steam while the vessel is underway at sea?",
    opts: [
      "Exhaust Gas Economizer (Waste Heat Boiler)",
      "Auxiliary Oil-Fired Package Boiler",
      "Charge Air Cooler Radiator",
      "Jacket Water Expansion Tank"
    ],
    ans: 0
  },
  {
    q: "In marine heavy fuel oil (HFO) treatment systems, what high-speed centrifugal separation equipment continuously removes water and abrasive catalytic fines (aluminum and silicon oxides) prior to engine combustion?",
    opts: [
      "Centrifugal Fuel Purifier (Centrifuge)",
      "Static gravity settling filter basket",
      "Magnetic duplex wire strainer",
      "Coalescing cartridge element"
    ],
    ans: 0
  },
  {
    q: "On a commercial ship steering gear system, what dual-circuit hydraulic mechanism turns the heavy rudder stock in response to bridge helm commands under SOLAS regulations?",
    opts: [
      "Electro-Hydraulic Steering Gear (Ram type or Rotary Vane type)",
      "Pneumatic air cylinder winch",
      "Direct mechanical wire cable steering chain",
      "Manual geared worm rack"
    ],
    ans: 0
  },
  {
    q: "In marine diesel engine crankshaft dynamics, what device mounted on the free end of the crankshaft suppresses torsional vibration stress spikes to prevent fatigue failure of the crankshaft?",
    opts: [
      "Torsional Vibration Damper (Viscous or Geislinger spring type)",
      "Engine turning gear motor",
      "Flywheel barring ring",
      "Piston rod crosshead guide shoe"
    ],
    ans: 0
  },
  {
    q: "In marine propeller performance, what hydrodynamic phenomenon causes localized boiling of seawater into vapor bubbles on propeller blade surfaces due to extreme low pressure, leading to pitting erosion and noise?",
    opts: [
      "Propeller Cavitation",
      "Boundary layer laminar flow separation",
      "Hull wake friction shear",
      "Hydraulic water hammer"
    ],
    ans: 0
  },
  {
    q: "In emergency shipboard operations, which independent valve allows the main seawater cooling circulating pump to draw water directly from the engine room bilge during catastrophic hull flooding?",
    opts: [
      "Emergency Bilge Suction Valve (Bilge Injection Valve)",
      "High Sea Chest intake valve",
      "Low Sea Chest intake valve",
      "Overboard overboard discharge valve"
    ],
    ans: 0
  },
  {
    q: "Under IMO MARPOL Annex VI regulations, what is the global sulfur cap limit for marine fuel oil used outside designated Emission Control Areas (ECAs) unless an approved exhaust gas cleaning scrubber is operated?",
    opts: [
      "0.50% m/m (mass by mass)",
      "0.10% m/m (ECA zone limit)",
      "3.50% m/m (historical baseline)",
      "1.00% m/m"
    ],
    ans: 0
  },
  {
    q: "In ship machinery spaces, which fire extinguishing system is designed for total flooding of the entire engine room space to extinguish catastrophic class B flammable liquid fuel fires?",
    opts: [
      "High-Pressure Carbon Dioxide (CO2) Total Flooding System",
      "Portable dry powder cartridge extinguisher",
      "Fixed seawater sprinkler deluge system",
      "Compressed natural air foam cannon"
    ],
    ans: 0
  },
  {
    q: "In marine stern tube assemblies, what bearings support the propeller shaft and maintain a watertight seal where the shaft exits the hull into open sea?",
    opts: [
      "Stern Tube Bearings (white-metal lined or water-lubricated non-metallic bearings) and Face Seals",
      "Standard automotive tapered roller bearings",
      "Unsealed ball journal bearings",
      "Flexible neoprene expansion bellows only"
    ],
    ans: 0
  },
  {
    q: "Onboard modern merchant vessels, which freshwater generation system utilizes waste heat from the main engine jacket cooling water (at ~80°C) under high vacuum to boil seawater at low temperatures?",
    opts: [
      "Vacuum Flash / Plate-Type Freshwater Evaporator",
      "High-pressure reverse osmosis membrane rack alone",
      "Solar thermal distillation trough",
      "Atmospheric steam heating kettle"
    ],
    ans: 0
  },
  {
    q: "Under SOLAS maritime safety standards, what is the maximum time allowed for the ship emergency diesel generator (EDG) to automatically start, connect to the emergency switchboard, and supply critical safety loads following a total blackout?",
    opts: [
      "45 seconds",
      "5 minutes",
      "10 minutes",
      "30 seconds"
    ],
    ans: 0
  },
  {
    q: "In large container ships and LNG carriers with massive electrical distribution requirements, what electrical system voltage is standardly used for main generators and bow thruster motors to reduce cable cross-sections and copper weight?",
    opts: [
      "Medium / High Voltage (6.6 kV or 11 kV AC)",
      "Low voltage 440 V 3-phase 60 Hz",
      "Standard domestic 230 V 50 Hz",
      "Low voltage 110 V DC battery bank"
    ],
    ans: 0
  },
  {
    q: "In two-stroke marine crosshead diesel engines, which structural component transfers the linear reciprocating force from the piston rod to the oscillating connecting rod while absorbing high side-thrust forces against the engine frame?",
    opts: [
      "The Crosshead Assembly (Crosshead pin and guide shoes)",
      "The Gudgeon wrist pin inside the piston skirt",
      "The Crankshaft thrust collar bearing",
      "The Cylinder liner scavenge port ring"
    ],
    ans: 0
  },
  {
    q: "What ship maneuvering propulsion unit mounted in a transverse tunnel at the forward bow of a vessel provides lateral thrust to assist docking without requiring tugboats?",
    opts: [
      "Bow Thruster (Tunnel Thruster)",
      "Main center-line rudder blade",
      "Stern azipod main pod",
      "Kort nozzle shroud"
    ],
    ans: 0
  }
];

// Helper to inject extra questions into a domain array
function appendQuestions(domainKey, extraQuestions) {
  const pattern = new RegExp(`("${domainKey}":\\s*\\[[\\s\\S]*?\\n\\s*\\{)`, 'm');
  const closingPattern = new RegExp(`("${domainKey}":\\s*\\[[\\s\\S]*?)((\\n\\s*\\]\\s*,?\\s*\\n\\s*")|(\\n\\s*\\]\\s*\\};))`, 'm');

  const match = bankContent.match(closingPattern);
  if (!match) {
    console.error(`Could not find closing bracket for ${domainKey}`);
    return false;
  }

  const existingBlock = match[1];
  const trailingPart = match[2];

  // Format extra questions
  const formattedExtra = extraQuestions.map(q => {
    return `  {\n    "q": ${JSON.stringify(q.q)},\n    "opts": ${JSON.stringify(q.opts, null, 6).replace(/\n/g, '\n    ')},\n    "ans": ${q.ans}\n  }`;
  }).join(',\n');

  const replacement = existingBlock + ',\n' + formattedExtra + trailingPart;
  bankContent = bankContent.replace(closingPattern, replacement);
  console.log(`Successfully appended ${extraQuestions.length} questions to ${domainKey}`);
  return true;
}

appendQuestions('film-production', FILM_PRODUCTION_EXTRA);
appendQuestions('interior-design', INTERIOR_DESIGN_EXTRA);
appendQuestions('game-development', GAME_DEVELOPMENT_EXTRA);
appendQuestions('fashion-design', FASHION_DESIGN_EXTRA);
appendQuestions('robotics-engineering', ROBOTICS_ENGINEERING_EXTRA);
appendQuestions('petroleum-engineering', PETROLEUM_ENGINEERING_EXTRA);
appendQuestions('marine-engineering', MARINE_ENGINEERING_EXTRA);

fs.writeFileSync(BANK_PATH, bankContent, 'utf8');
console.log('Finished updating backend domainQuestionBank.js!');
