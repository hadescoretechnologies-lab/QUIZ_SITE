// Script to inject authentic questions for Marine, Petroleum, Robotics, Fashion, Game Dev, Interior Design, Film Production
// and replace synthesizeDomainQuestions in both backend and frontend.

const fs = require('fs');
const path = require('path');

const NEW_DOMAINS = {
  'marine-engineering': [
    {
      q: 'In marine diesel propulsion engines, what is the primary thermodynamic cause of turbocharger surging during rapid engine load fluctuations?',
      opts: [
        'Flow separation on compressor impeller blades when mass flow rate drops below the critical surge limit at high pressure ratio',
        'Excessive scavenging air cooling causing condensation in the cylinder liner',
        'Delayed fuel injection timing causing afterburning in the exhaust manifold',
        'Over-lubrication of the crosshead bearing assembly'
      ],
      ans: 0
    },
    {
      q: 'Which international maritime regulation governs the standards for prevention of air pollution from ships, including NOx Tier III and SOx emissions?',
      opts: [
        'MARPOL Annex VI',
        'SOLAS Chapter II-2',
        'STCW Convention Section A-III',
        'MARPOL Annex I'
      ],
      ans: 0
    },
    {
      q: 'In naval architecture, what does the metacentric height (GM) measure directly regarding a vessel’s seaworthiness?',
      opts: [
        'Initial static transverse stability at small angles of heel',
        'Total longitudinal bending moment in hogging condition',
        'Dynamic resistance of the bulbous bow in open seaway',
        'Propeller pitch ratio efficiency at design speed'
      ],
      ans: 0
    },
    {
      q: 'What dangerous phenomenon occurs when local static pressure on a marine propeller blade drops below the saturated vapor pressure of seawater?',
      opts: [
        'Cavitation, causing blade surface erosion, vibration, and loss of thrust',
        'Galvanic corrosion between bronze propeller and steel hull',
        'Thermal blooming of the stern tube bearing white metal',
        'Hydrodynamic squat in shallow water fairways'
      ],
      ans: 0
    },
    {
      q: 'In ship auxiliary systems, what is the regulatory maximum oil content permitted in bilge water discharged overboard through an Oily Water Separator (OWS)?',
      opts: [
        '15 parts per million (ppm)',
        '50 parts per million (ppm)',
        '100 parts per million (ppm)',
        '5 parts per million (ppm)'
      ],
      ans: 0
    },
    {
      q: 'What type of steering gear system utilizes hydraulic rams controlled by telemotor signals to turn the rudder stock?',
      opts: [
        'Electro-hydraulic ram type steering gear with hunting gear feedback',
        'Mechanical rack-and-pinion cable steering',
        'Pneumatic vane actuator with open-loop solenoid control',
        'Direct electric chain drive steering'
      ],
      ans: 0
    },
    {
      q: 'How does an impressed current cathodic protection (ICCP) system prevent galvanic hull corrosion in ocean-going vessels?',
      opts: [
        'By supplying a controlled direct electrical current from auxiliary power to inert anodes mounted on the hull',
        'By coating the hull exclusively with sacrificial zinc blocks along the keel',
        'By circulating hot freshwater through the sea chest strainers',
        'By grounding the ship electrical system to the propeller shaft slip rings'
      ],
      ans: 0
    },
    {
      q: 'In marine boiler water chemistry, what is the primary risk of high chloride contamination in feed water?',
      opts: [
        'Severe pitting corrosion and stress corrosion cracking of boiler tubes',
        'Excessive alkalinity causing caustic gouging of soot blowers',
        'Formation of non-conductive magnetite protective films',
        'Thermal shock to the superheater steam headers'
      ],
      ans: 0
    },
    {
      q: 'What is the purpose of the emergency generator on commercial merchant vessels under SOLAS Chapter II-1?',
      opts: [
        'To supply essential power to navigation aids, emergency lighting, steering gear, and fire pumps within 45 seconds of blackout',
        'To assist main engine propulsion during heavy sea state maneuvers',
        'To charge ship battery banks during normal harbour dry-dock operations',
        'To power the galley and crew accommodation air conditioning systems during sea trials'
      ],
      ans: 0
    },
    {
      q: 'In marine shafting systems, what device prevents seawater from entering the engine room along the rotating propeller shaft?',
      opts: [
        'Stern tube seal assembly (lip seals with oil barrier pressure)',
        'Centrifugal sea water ballast valve',
        'Intermediate thrust block bearing casing',
        'Coupling flange alignment shim'
      ],
      ans: 0
    }
  ],

  'petroleum-engineering': [
    {
      q: 'In reservoir engineering, which fundamental empirical relationship governs the flow of a single-phase fluid through a porous rock medium?',
      opts: [
        'Darcy\'s Law',
        'Fick\'s Second Law',
        'Navier-Stokes Equation for viscous free flow',
        'Bernoulli\'s Conservation Equation'
      ],
      ans: 0
    },
    {
      q: 'What primary reservoir drive mechanism typically yields the highest ultimate oil recovery percentage (35% to 75%) without artificial stimulation?',
      opts: [
        'Active bottom or edge water drive',
        'Solution gas drive (depletion drive)',
        'Gas cap expansion drive',
        'Rock and fluid expansion (compaction drive)'
      ],
      ans: 0
    },
    {
      q: 'In well drilling operations, what critical property of bentonite-based drilling mud enables it to suspend drilled rock cuttings when circulation stops?',
      opts: [
        'Thixotropy and gel strength formation at rest',
        'Low specific gravity and high thermal conductivity',
        'Zero plastic viscosity and Newtonian behavior',
        'Negative hydrostatic pressure gradient'
      ],
      ans: 0
    },
    {
      q: 'What well control equipment is installed at the wellhead to shear the drill pipe and completely seal the wellbore during an uncontrolled kick blowout?',
      opts: [
        'Blind shear rams on the Blowout Preventer (BOP) stack',
        'Annular blowout preventer rubber packing element',
        'Choke manifold adjustable needle orifice valve',
        'Rotary kelly bushing locking slips'
      ],
      ans: 0
    },
    {
      q: 'In petroleum well logging, what does a spontaneous potential (SP) log curve deflection primarily differentiate in permeable formations?',
      opts: [
        'Permeable sandstone/limestone beds from impermeable shales',
        'Hydrocarbon density from formation water resistivity',
        'Borehole caliper diameter changes across washouts',
        'Natural formation radioactivity from thorium and potassium'
      ],
      ans: 0
    },
    {
      q: 'What dimensionless number or metric is used by the American Petroleum Institute to measure how heavy or light a petroleum liquid is compared to water?',
      opts: [
        'API Gravity (degrees API)',
        'Specific Surface Retention Index',
        'Flash Point Boiling Index',
        'Cetane Number Rating'
      ],
      ans: 0
    },
    {
      q: 'In hydraulic fracturing stimulation, what is the primary mechanical function of ceramic or sand proppant?',
      opts: [
        'To hold induced hydraulic fractures open after injection pressure is released, preserving high conductive permeability',
        'To dissolve tight shale rock matrix using exothermic acid reactions',
        'To seal off natural fault lines preventing hydrocarbon migration into the wellbore',
        'To cool bottom-hole temperatures during high-rate slickwater pumping'
      ],
      ans: 0
    },
    {
      q: 'Which Enhanced Oil Recovery (EOR) technique involves injecting surfactants and polymers to reduce interfacial tension and increase sweep efficiency?',
      opts: [
        'Chemical EOR (Surfactant-Polymer flooding)',
        'Thermal cyclic steam stimulation (Huff and Puff)',
        'Miscible carbon dioxide (CO2) huff-and-puff',
        'In-situ combustion (fire flooding)'
      ],
      ans: 0
    },
    {
      q: 'In artificial lift design, which system utilizes downhole multi-stage centrifugal impellers driven by an electric motor connected to a surface power cable?',
      opts: [
        'Electrical Submersible Pump (ESP)',
        'Sucker rod beam pumping unit (Pumpjack)',
        'Continuous gas lift injection through mandrel valves',
        'Hydraulic jet venturi pump'
      ],
      ans: 0
    },
    {
      q: 'What is the bubble point pressure (Pb) of a crude oil reservoir fluid at a given reservoir temperature?',
      opts: [
        'The pressure at which the first infinitesimal bubble of gas comes out of solution from the liquid oil phase',
        'The pressure at which all liquid oil vaporizes completely into dry gas',
        'The hydrostatic pressure exerted by a column of freshwater at reservoir depth',
        'The fracture breakdown pressure of the caprock overlying the reservoir'
      ],
      ans: 0
    }
  ],

  'robotics-engineering': [
    {
      q: 'In serial robotic arm kinematics, which standard mathematical convention uses four geometric parameters (link length, link twist, link offset, joint angle) to attach coordinate frames to adjacent links?',
      opts: [
        'Denavit-Hartenberg (DH) Convention',
        'Euler-Lagrange Coordinate Mapping',
        'Rodrigues Rotation Formula',
        'Quaternionic Plücker Transformation'
      ],
      ans: 0
    },
    {
      q: 'What occurs mathematically at a kinematic singularity in a 6-DOF industrial articulated robot manipulator?',
      opts: [
        'The manipulator Jacobian matrix loses full rank (determinant equals zero), causing loss of one or more degrees of mobility',
        'The joint motors automatically trip their thermal overload relays',
        'The end-effector payload acceleration drops instantaneously to zero',
        'The inverse kinematics problem yields exactly one unique closed-form solution'
      ],
      ans: 0
    },
    {
      q: 'Which sampling-based motion planning algorithm is guaranteed to converge to an optimal collision-free path as the number of samples approaches infinity?',
      opts: [
        'RRT* (Optimal Rapidly-exploring Random Trees)',
        'Standard RRT without tree rewiring',
        'Potential Field Method with local minimum attraction',
        'Dijkstra algorithm on an unweighted grid'
      ],
      ans: 0
    },
    {
      q: 'In mobile robot navigation, what does the acronym SLAM stand for?',
      opts: [
        'Simultaneous Localization and Mapping',
        'Synchronous Linear Actuator Measurement',
        'Spatial Lidar Alignment Matrix',
        'Sensor Level Actuation Modeling'
      ],
      ans: 0
    },
    {
      q: 'What type of robotic gear reducer offers zero-backlash, high gear reduction ratios (up to 160:1) in a compact coaxial design, widely used in collaborative robot joints?',
      opts: [
        'Harmonic drive (strain wave gearing)',
        'Single-stage spur gear pair',
        'Worm gear with lead angle backlash',
        'Open bevel gear differential assembly'
      ],
      ans: 0
    },
    {
      q: 'In feedback control of robotic joints, what does the Derivative (D) gain in a PID controller primarily contribute to system dynamics?',
      opts: [
        'Provides anticipatory damping to reduce overshoot and oscillations in trajectory tracking',
        'Eliminates steady-state position error caused by gravitational torque',
        'Amplifies high-frequency encoder noise to increase joint stiffness',
        'Limits peak motor drive current during stall conditions'
      ],
      ans: 0
    },
    {
      q: 'In the Robot Operating System (ROS 2), what communication paradigm is used for request-response transactions that execute asynchronously and report continuous feedback progress?',
      opts: [
        'ROS 2 Actions (Goal, Feedback, Result)',
        'ROS 2 Topics (Publisher-Subscriber stream only)',
        'ROS 2 Services (blocking two-way request without feedback)',
        'ROS 2 Parameter client primitives'
      ],
      ans: 0
    },
    {
      q: 'What sensor fusion algorithm is standardly used in autonomous robots to combine high-frequency IMU accelerometer/gyroscope readings with wheel odometry and LiDAR pose estimates?',
      opts: [
        'Extended Kalman Filter (EKF) or Unscented Kalman Filter (UKF)',
        'Fast Fourier Transform (FFT) peak detector',
        'Simple moving average filter with fixed rectangular window',
        'K-means clustering classifier'
      ],
      ans: 0
    },
    {
      q: 'What control methodology allows an industrial robot to safely interact with a stiff environment by simulating a virtual spring-damper relationship between contact force and end-effector position?',
      opts: [
        'Impedance / Admittance control',
        'Pure position control with high proportional gain',
        'Open-loop voltage feedforward control',
        'Bang-bang contact switching control'
      ],
      ans: 0
    },
    {
      q: 'Which representation of 3D spatial rotation avoids the mathematical singularity known as "gimbal lock" in robotic orientation modeling?',
      opts: [
        'Unit Quaternions (Euler parameters)',
        'Roll-Pitch-Yaw (RPY) Euler angles',
        'Direction cosine matrix with Euler ZYZ angles',
        'Axis-angle representation with zero modulus'
      ],
      ans: 0
    }
  ],

  'fashion-design': [
    {
      q: 'In apparel pattern making, what technique involves moving a bodice dart to a new location (e.g., from waist to armhole or shoulder) while maintaining the original fit and garment silhouette?',
      opts: [
        'Dart manipulation (pivoting or slash-and-spread method)',
        'Pattern grading across dimensional size ranges',
        'Bias grainline stretching along crosswise grain',
        'French seam encasing on raw curved edges'
      ],
      ans: 0
    },
    {
      q: 'What is the primary aesthetic and structural difference between garments cut on the "true bias" (45-degree angle to warp and weft) versus the straight grain?',
      opts: [
        'Bias cut garments fluidly drape and contour to body curves with natural elasticity and stretch without requiring Lycra',
        'Bias cut garments are rigid, stiff, and prevent any dimensional elongation',
        'Bias cut fabrics require zero seam allowance and cannot fray along raw edges',
        'Bias grain garments have identical tensile strength in horizontal and vertical axes'
      ],
      ans: 0
    },
    {
      q: 'In haute couture dressmaking, what hand-sewing technique cleanly encases raw fabric edges inside a narrow double fold, ideal for sheer fabrics like chiffon and organza?',
      opts: [
        'French seam',
        'Flat-felled seam',
        'Overlock 4-thread serger seam',
        'Bound Hong Kong finish with synthetic webbing'
      ],
      ans: 0
    },
    {
      q: 'In the color theory of fashion and styling, what term describes the relative purity, intensity, or saturation of a color compared to pure gray?',
      opts: [
        'Chroma (saturation)',
        'Hue designation',
        'Value (lightness or darkness)',
        'Color temperature (warm versus cool undertone)'
      ],
      ans: 0
    },
    {
      q: 'Which natural protein fiber obtained from the fleece of sheep possesses natural crimp, moisture-wicking properties, and thermal insulation capabilities?',
      opts: [
        'Wool (Keratin fiber)',
        'Cotton (Cellulose staple fiber)',
        'Linen (Bast fiber from flax plant)',
        'Silk (Fibroin continuous filament)'
      ],
      ans: 0
    },
    {
      q: 'In technical garment design, what document provides manufacturers with complete construction details, bill of materials (BOM), measurement grade rules, and stitch specifications?',
      opts: [
        'Tech Pack (Technical Specification Sheet)',
        'Fashion mood board collage',
        'Trend forecasting palette book',
        'Runway lookbook portfolio'
      ],
      ans: 0
    },
    {
      q: 'What manufacturing method is used to create proportional increments and decrements to a base sample pattern (usually Size M or 8) to create a full size run (XS to XXL)?',
      opts: [
        'Pattern Grading',
        'Draping on dress form',
        'Marker planning and fabric spreading',
        'Toile fitting and muslin prototyping'
      ],
      ans: 0
    },
    {
      q: 'What fashion design silhouette is characterized by a closely fitted bodice that dramatically flares outward from the natural waistline like an inverted letter A?',
      opts: [
        'A-line silhouette (popularized by Christian Dior in 1955)',
        'Empire waist silhouette with high seam under the bust',
        'Sheath column silhouette with straight vertical lines',
        'Drop-waist flapper silhouette resting on low hips'
      ],
      ans: 0
    },
    {
      q: 'Which sustainable fashion principle focuses on designing garments with recyclable mono-materials, zero waste patterns, and extended circular product lifecycles?',
      opts: [
        'Circular Fashion & Closed-Loop Lifecycle Design',
        'Fast fashion rapid inventory obsolescence',
        'Petroleum-based synthetic microplastic weaving',
        'Single-season trend overproduction'
      ],
      ans: 0
    },
    {
      q: 'In woven fabric structure, what are the lengthwise vertical yarns held under tension on the weaving loom called?',
      opts: [
        'Warp yarns (ends)',
        'Weft yarns (picks or filling)',
        'Selvedge edge binding threads',
        'Bias diagonal filament yarns'
      ],
      ans: 0
    }
  ],

  'game-development': [
    {
      q: 'In game engine architecture, what is the primary benefit of decoupling the game physics update (fixed delta time) from the rendering frame rate (variable delta time)?',
      opts: [
        'Ensures deterministic, stable physics simulations and collision resolution regardless of visual rendering lag or variable monitor refresh rates',
        'Eliminates all CPU memory usage during GPU shader execution',
        'Guarantees that multiplayer netcode will never encounter packet loss',
        'Automatically compresses high-resolution 3D textures into MIP maps'
      ],
      ans: 0
    },
    {
      q: 'Which computational geometry algorithm is standardly used in 3D game engines for narrow-phase convex collision detection between arbitrary convex polyhedra?',
      opts: [
        'GJK (Gilbert-Johnson-Keerthi) Algorithm and Separating Axis Theorem (SAT)',
        'Dijkstra shortest path algorithm',
        'Bresenham line drawing algorithm',
        'Graham scan convex hull algorithm'
      ],
      ans: 0
    },
    {
      q: 'In 3D graphics rendering pipelines, what optimization technique discards objects or polygons that are outside the camera’s view volume before rasterization?',
      opts: [
        'Frustum Culling',
        'Back-face culling on counter-clockwise triangles',
        'Occlusion queries on depth buffer z-tests',
        'Anisotropic texture filtering'
      ],
      ans: 0
    },
    {
      q: 'In game AI design, what hierarchical decision architecture uses Selector, Sequence, and Decorator nodes to dynamically evaluate NPC actions and behaviors?',
      opts: [
        'Behavior Trees (BT)',
        'Finite State Machines (FSM) without hierarchy',
        'Minimax search with alpha-beta pruning',
        'Neural network weight quantization'
      ],
      ans: 0
    },
    {
      q: 'What rendering shader stage executes on individual vertices to transform 3D object-space coordinates into clip space using model-view-projection (MVP) matrices?',
      opts: [
        'Vertex Shader',
        'Fragment (Pixel) Shader',
        'Tessellation Evaluation Shader',
        'Compute Shader for compute dispatch'
      ],
      ans: 0
    },
    {
      q: 'In competitive multiplayer games, what client-side networking technique hides network latency by immediately simulating local player inputs before receiving server confirmation?',
      opts: [
        'Client-Side Prediction with Server Reconciliation',
        'Lockstep peer-to-peer synchronization',
        'TCP packet retransmission wait loops',
        'Complete client authority with zero server validation'
      ],
      ans: 0
    },
    {
      q: 'What spatial partitioning data structure recursively divides 3D game world space into eight octants to accelerate collision queries, raycasting, and visibility checks?',
      opts: [
        'Octree',
        'Binary Search Tree (BST)',
        'Quadtree (2D planar only)',
        'Hash Ring with consistent hashing'
      ],
      ans: 0
    },
    {
      q: 'What 3D asset optimization technique substitutes high-polygon 3D meshes with lower-polygon models as the camera moves further away from the object?',
      opts: [
        'Level of Detail (LOD) Meshing',
        'Ray-marched signed distance fields',
        'Subdivision surface displacement mapping',
        'Morph target blend shape interpolation'
      ],
      ans: 0
    },
    {
      q: 'In skeletal animation, what skinning method calculates the deformed position of a vertex by computing a weighted average of transformation matrices from multiple influencing bones?',
      opts: [
        'Linear Blend Skinning (LBS) or Dual Quaternion Skinning (DQS)',
        'Forward kinematic chain rotation without weighting',
        'Rigid parent attachment to a single root bone',
        'Vertex texture fetch displacement without bones'
      ],
      ans: 0
    },
    {
      q: 'What visual artifact in real-time rendering occurs when a camera moves faster than the monitor’s refresh cycle, resulting in parts of multiple frames appearing simultaneously on screen?',
      opts: [
        'Screen Tearing (mitigated by V-Sync, G-Sync, or FreeSync)',
        'Z-fighting due to low depth buffer precision',
        'Aliasing stair-stepping on diagonal geometric edges',
        'Motion blur shutter ghosting'
      ],
      ans: 0
    }
  ],

  'interior-design': [
    {
      q: 'In architectural interior design, what metric defines the human body measurement standards used to ensure appropriate countertop heights, door clearances, and chair seat ergonomics?',
      opts: [
        'Anthropometrics',
        'Biomechanics of sports kinetics',
        'Acoustical reverberation metrics',
        'Photometric beam dispersion angles'
      ],
      ans: 0
    },
    {
      q: 'In commercial building codes (IBC & NFPA 101 Life Safety Code), what is the minimum standard clear width requirement for an accessible interior means of egress corridor serving more than 50 occupants?',
      opts: [
        '44 inches (1118 mm)',
        '32 inches (813 mm)',
        '24 inches (610 mm)',
        '60 inches (1524 mm)'
      ],
      ans: 0
    },
    {
      q: 'In lighting design for corporate interior offices, what Correlated Color Temperature (CCT) range is recommended for promoting alertness and visual acuity in task workspaces?',
      opts: [
        '3500K to 4500K (Neutral to Cool White)',
        '2200K to 2700K (Warm candlelight glow)',
        '6500K to 7500K (Daylight blue exterior sky)',
        '1800K to 2000K (Sodium vapor amber)'
      ],
      ans: 0
    },
    {
      q: 'What acoustical performance rating measures the percentage of airborne sound absorbed by an interior ceiling tile or wall acoustic panel (ranging from 0.00 to 1.00)?',
      opts: [
        'Noise Reduction Coefficient (NRC)',
        'Sound Transmission Class (STC)',
        'Impact Insulation Class (IIC)',
        'Ceiling Attenuation Class (CAC)'
      ],
      ans: 0
    },
    {
      q: 'In interior commercial flooring specification, what test metric measures the slip resistance of ceramic tiles under wet conditions to prevent occupant falls (ANSI A326.3)?',
      opts: [
        'Dynamic Coefficient of Friction (DCOF, minimum standard >= 0.42 for level wet floors)',
        'Mohs Hardness Scratch Scale rating',
        'Static indentation residual deformation rating',
        'Taber Abrasion wear cycle count'
      ],
      ans: 0
    },
    {
      q: 'In residential interior kitchen design, what classic planning principle minimizes walking distances between the sink, cooktop/range, and refrigerator?',
      opts: [
        'The Kitchen Work Triangle (total perimeter between 13 and 26 feet)',
        'The Linear Galley Corridor layout',
        'The Golden Ratio Sectional distribution',
        'The Feng Shui Bagua map orientation'
      ],
      ans: 0
    },
    {
      q: 'What flame spread classification under ASTM E84 / NFPA 255 is mandatory for interior wall and ceiling finish materials in high-risk commercial egress corridors (Flame Spread Index 0-25)?',
      opts: [
        'Class A (Class I)',
        'Class B (Class II)',
        'Class C (Class III)',
        'Class D (Unregulated combustible finish)'
      ],
      ans: 0
    },
    {
      q: 'What design framework ensures interior built environments are usable by all people to the greatest extent possible, regardless of age, disability, or mobility limitations?',
      opts: [
        'Universal Design (Principles of Accessibility and ADA Standards)',
        'Minimalist Industrial Aestheticism',
        'Brutalist Monolithic Architecture',
        'Historical Art Deco Preservation'
      ],
      ans: 0
    },
    {
      q: 'In interior millwork and custom cabinetry, which composite wood substrate provides the smoothest, most uniform surface for high-gloss lacquer and painted cabinetry finishes?',
      opts: [
        'Medium Density Fiberboard (MDF)',
        'Oriented Strand Board (OSB)',
        'Rotary-cut spruce construction plywood',
        'Rough sawn dimensional Douglas fir lumber'
      ],
      ans: 0
    },
    {
      q: 'In sustainable interior finishes, what indoor environmental quality certification verifies that paints, sealants, and furnishings emit ultra-low or zero volatile organic compounds (VOCs)?',
      opts: [
        'GREENGUARD Gold Certification or Cradle to Cradle',
        'Energy Star Appliance rating',
        'WaterSense plumbing certification',
        'FSC Chain of Custody for lumber harvesting'
      ],
      ans: 0
    }
  ],

  'film-production': [
    {
      q: 'In cinematography, what fundamental rule governs camera shutter speed relative to frame rate (e.g., shooting at 24 fps with a 1/48s shutter) to achieve natural motion blur resembling human visual perception?',
      opts: [
        'The 180-Degree Shutter Rule',
        'The Rule of Thirds camera grid',
        'The Inverse-Square Law of lighting decay',
        'The Rec. 709 dynamic range compression ratio'
      ],
      ans: 0
    },
    {
      q: 'In classic motion picture lighting setups, what is the primary purpose of the "Key Light" in three-point lighting?',
      opts: [
        'To establish the primary illumination, directionality, and mood on the subject’s face and figure',
        'To soften deep shadows cast by the sun without altering exposure',
        'To separate the subject from the dark background with an edge rim glow',
        'To evenly illuminate the greenscreen backdrop to prevent color spill'
      ],
      ans: 0
    },
    {
      q: 'In cinematic editing and camera placement, what spatial guideline states that cameras must remain on one side of an imaginary line between two characters to preserve screen direction and eyelines?',
      opts: [
        'The 180-Degree Spatial Axis Rule',
        'The 30-Degree Cut Angle Rule',
        'The Jump Cut Discontinuity Protocol',
        'The Kuleshov Effect sequencing rule'
      ],
      ans: 0
    },
    {
      q: 'Which optical lens characteristic determines the depth of field and background bokeh blur at a given focal length and camera-to-subject distance?',
      opts: [
        'Lens aperture (f-stop / T-stop setting)',
        'Front filter thread diameter (e.g., 82mm)',
        'Lens mount flange focal depth distance',
        'Zoom barrel rotation torque resistance'
      ],
      ans: 0
    },
    {
      q: 'In professional digital cinema cameras (like ARRI Alexa or RED), what is the primary advantage of recording in a "Log" gamma profile (e.g., LogC, S-Log3, RED Log3G10)?',
      opts: [
        'Preserves maximum dynamic range in highlights and shadow details for flexible color grading in post-production',
        'Permanently burns a finalized color look directly into video files to save render time',
        'Doubles the audio sample rate recorded on internal microphones',
        'Automatically stabilizes handheld camera camera shake without optical gimbal'
      ],
      ans: 0
    },
    {
      q: 'In location sound recording, what microphone polar pattern provides tight directional pickup along the front axis while rejecting ambient sounds from the sides and rear, ideal for boom pole operation?',
      opts: [
        'Supercardioid / Hypercardioid (Shotgun pattern with interference tube)',
        'Omnidirectional boundary pattern',
        'Figure-8 bidirectional ribbon pattern',
        'Cardioid wide-angle cardioid lavalier'
      ],
      ans: 0
    },
    {
      q: 'In film post-production sound design, what is the custom recording of synchronized human footsteps, cloth rustles, and prop interactions to replace production audio called?',
      opts: [
        'Foley Recording',
        'Automated Dialogue Replacement (ADR / Looping)',
        'Diegetic orchestral score scoring',
        'Room tone baseline ambiance recording'
      ],
      ans: 0
    },
    {
      q: 'What visual narrative device is created by cutting from one scene to another where the two consecutive shots share identical geometric compositions, motion directions, or shapes?',
      opts: [
        'Match Cut (Graphic or Action match cut)',
        'Smash cut on audio peak',
        'L-Cut / J-Cut split audio transition',
        'Wipe transition with alpha mask'
      ],
      ans: 0
    },
    {
      q: 'On a professional film set, which department head is responsible for rigging lighting instruments, camera cranes, dollies, flags, and physical camera support equipment?',
      opts: [
        'Key Grip',
        'Gaffer (Chief Lighting Technician)',
        'First Assistant Director (1st AD)',
        'Production Sound Mixer'
      ],
      ans: 0
    },
    {
      q: 'In digital color grading and mastering, what is a 3D LUT (Look-Up Table) primarily used for?',
      opts: [
        'Mapping input color values (RGB) from a camera Log space to a standardized display color space (such as Rec.709) with a specific creative palette',
        'Automatically removing microphone hum and background air conditioning noise',
        'Re-timing the speed of slow-motion clips from 120 fps to 24 fps',
        'Generating digital visual effects particle simulations'
      ],
      ans: 0
    }
  ]
};

console.log('Successfully prepared authentic questions for 7 specialized domains:');
Object.keys(NEW_DOMAINS).forEach(k => console.log(' -', k, ':', NEW_DOMAINS[k].length, 'questions'));

// Function to generate discipline-aware synthesized questions (ZERO software templates for non-software!)
function getSynthesizerCode() {
  return `function synthesizeDomainQuestions(domainTitle, domainSlug, targetCount = 30) {
  const cleanTitle = (domainTitle || '').replace(/\\s*\\([^)]*\\)/g, '').trim() || 'Professional Discipline';
  const cleanLower = cleanTitle.toLowerCase();

  const isSoftware = /computer|software|programming|python|java|web|frontend|backend|react|javascript|c\\+\\+|dsa|data science|ai|machine learning|cloud|devops|cybersecurity/i.test(cleanLower);
  const isEngineering = /engineering|mechanic|civil|marine|petroleum|nuclear|aero|fluid|material|thermal|structural|electrical|chemical|metallurgy|mining|automotive|robotics/i.test(cleanLower);
  const isDesignCreative = /design|fashion|interior|graphic|art|film|multimedia|animation|architecture|visual|media|sound|music|production/i.test(cleanLower);
  const isBusinessManagement = /management|business|finance|marketing|hr|commerce|accounting|sales|supply|logistics|operations|mba/i.test(cleanLower);

  let templates = [];

  if (isEngineering) {
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
        q: 'In ' + cleanTitle + ' systems, which conservation law dictates that the total mass entering a steady-state control volume must equal the total mass leaving?',
        correct: 'Conservation of Mass (Continuity Equation)',
        distractors: [
          'Bernoulli\\'s Frictionless Surface Hypothesis',
          'Newton\\'s Gravitational Inverse-Square Principle',
          'Hooke\\'s Modulus of Elastic Deflection'
        ]
      },
      {
        q: 'When conducting Failure Mode and Effects Analysis (FMEA) for ' + cleanTitle + ' components, what does the Risk Priority Number (RPN) represent?',
        correct: 'The mathematical product of Severity, Occurrence probability, and Detection rating (RPN = S x O x D)',
        distractors: [
          'The total financial cost of scrapping the production line',
          'The ratio of shear stress to thermal expansion coefficient',
          'The operating hours remaining before preventative lubrication is scheduled'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', what nondestructive testing (NDT) method is standardly used to detect surface-breaking hairline fractures in non-porous materials?',
        correct: 'Liquid penetrant inspection (Dye penetrant testing)',
        distractors: [
          'Destructive Charpy V-notch impact fracturing',
          'High-voltage electrical arcing across open atmosphere',
          'Submerging the entire assembly in concentrated hydrochloric acid'
        ]
      },
      {
        q: 'What role does Geometric Dimensioning and Tolerancing (GD&T) per ASME Y14.5 play in ' + cleanTitle + ' manufacturing drawings?',
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
        q: 'When designing dynamic equipment in ' + cleanTitle + ', what condition occurs when operating excitation frequency matches the system natural frequency?',
        correct: 'Mechanical resonance, resulting in severe amplitude magnification and catastrophic structural vibration',
        distractors: [
          'Hydrodynamic cavitation where static pressure exceeds critical boiling point',
          'Instantaneous thermal equilibrium where all heat dissipation ceases',
          'Complete cancellation of all inertial forces and zero mechanical stress'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', what is the primary function of performing a Finite Element Analysis (FEA) mesh convergence study?',
        correct: 'To ensure that stress and deflection calculation results become independent of mesh element size',
        distractors: [
          'To reduce computer memory usage by deleting all geometrical boundary conditions',
          'To invert the matrix equations so all output values become positive integers',
          'To bypass the need for physical material properties like Young\\'s modulus'
        ]
      },
      {
        q: 'Which international standard outlines the general quality and calibration requirements for testing laboratories in ' + cleanTitle + '?',
        correct: 'ISO/IEC 17025',
        distractors: [
          'ISO 14001 Environmental Management framework',
          'OHSAS 18001 Occupational Safety standard',
          'ISO 27001 Information Security Management code'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', what is the key principle of predictive condition-based maintenance compared to reactive breakdown maintenance?',
        correct: 'Monitoring real-time vibration, thermal imaging, and oil analysis to schedule repairs before unexpected breakdown',
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
        q: 'In ' + cleanTitle + ', what design principle establishes visual equilibrium and weight distribution across a composition or space?',
        correct: 'Balance (symmetrical, asymmetrical, or radial)',
        distractors: [
          'Linear extrusion along arbitrary orthogonal coordinate axes',
          'Randomization of scale without visual hierarchy',
          'Complete monochromatic saturation across all surfaces'
        ]
      },
      {
        q: 'In professional ' + cleanTitle + ', what does the term "visual hierarchy" dictate regarding user perception?',
        correct: 'The intentional arrangement of elements to guide the viewer\\'s eye to the most important focal point first',
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
        correct: 'Relates physical and visual dimensions harmoniously to the human body and contextual environment',
        distractors: [
          'Enforces microscopic dimensions on all functional components',
          'Prevents any dimensional variation across different product iterations',
          'Requires all objects to adhere strictly to integer millimeter increments'
        ]
      },
      {
        q: 'What is the primary objective of creating iterative prototypes and proof-of-concept models in ' + cleanTitle + '?',
        correct: 'To validate form, ergonomics, functional performance, and material suitability before full production',
        distractors: [
          'To generate finalized marketing sales packaging before design begins',
          'To eliminate the need for any client feedback or design reviews',
          'To permanently fix the design without possibility of modification'
        ]
      }
    ];
  } else if (isBusinessManagement) {
    templates = [
      {
        q: 'In ' + cleanTitle + ', what financial metric evaluates the profitability of an investment by calculating the ratio of net gain to initial cost?',
        correct: 'Return on Investment (ROI)',
        distractors: [
          'Gross Operating Expense Ratio (GOER)',
          'Static Liquidity Amortization Index',
          'Total Book Value Depreciation Factor'
        ]
      },
      {
        q: 'In strategic ' + cleanTitle + ', what is the primary purpose of conducting a SWOT analysis?',
        correct: 'To identify internal Strengths and Weaknesses alongside external Opportunities and Threats',
        distractors: [
          'To calculate federal corporate tax liability for quarterly filing',
          'To audit daily employee timecard punch clock stamps',
          'To benchmark warehouse inventory pallet stacking limits'
        ]
      },
      {
        q: 'In operational ' + cleanTitle + ', what management philosophy focuses on eliminating waste (Muda) and continuous improvement (Kaizen)?',
        correct: 'Lean Management',
        distractors: [
          'Chaotic Task Scheduling without prioritization',
          'Unconstrained Inventory Hoarding methodology',
          'Zero-Documentation ad-hoc operational policy'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', what key performance indicator (KPI) measures the average cost incurred to acquire one paying customer?',
        correct: 'Customer Acquisition Cost (CAC)',
        distractors: [
          'Customer Lifetime Valuation (LTV)',
          'Net Promoter Score (NPS)',
          'Monthly Recurring Revenue (MRR)'
        ]
      }
    ];
  } else {
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
        correct: 'By assessing the likelihood of occurrence against the potential impact severity to focus resources on critical hazards',
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
      }
    ];
  }

  // Ensure at least targetCount items
  while (templates.length < targetCount) {
    const base = templates[templates.length % 10];
    templates.push({
      q: 'Regarding ' + cleanTitle + ' fundamentals: ' + base.q,
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
}`;
}

// ── 1. UPDATE BACKEND domainQuestionBank.js ──────────────────────
const backendPath = path.resolve(__dirname, '../data/domainQuestionBank.js');
let backendContent = fs.readFileSync(backendPath, 'utf8');

// Inject new domains into backend DOMAIN_QUESTIONS
let backendInjectedCount = 0;
for (const [slug, qs] of Object.entries(NEW_DOMAINS)) {
  if (!backendContent.includes(`"${slug}": [`)) {
    const domainSnippet = `  "${slug}": ${JSON.stringify(qs, null, 2)},\n`;
    backendContent = backendContent.replace('const DOMAIN_QUESTIONS = {', 'const DOMAIN_QUESTIONS = {\n' + domainSnippet);
    backendInjectedCount++;
  }
}
console.log('Injected', backendInjectedCount, 'new domain question banks into backend!');

// Inject aliases into backend ALIAS_MAP
const newAliases = {
  'marine-engineering': 'marine-engineering',
  'marine': 'marine-engineering',
  'petroleum-engineering': 'petroleum-engineering',
  'petroleum': 'petroleum-engineering',
  'robotics': 'robotics-engineering',
  'robotics-engineering': 'robotics-engineering',
  'fashion-design': 'fashion-design',
  'fashion-designing': 'fashion-design',
  'fashion': 'fashion-design',
  'game-development': 'game-development',
  'game-dev': 'game-development',
  'interior-design': 'interior-design',
  'interior': 'interior-design',
  'film-production': 'film-production',
  'film': 'film-production',
  'data-science': 'data-science-machine-learning',
  'cybersecurity': 'cybersecurity-ethical-hacking',
  'cyber-security': 'cybersecurity-ethical-hacking'
};

for (const [k, v] of Object.entries(newAliases)) {
  if (!backendContent.includes(`"${k}": "${v}"`)) {
    backendContent = backendContent.replace('const ALIAS_MAP = {', `const ALIAS_MAP = {\n  "${k}": "${v}",`);
  }
}

// Replace synthesizeDomainQuestions in backend
const synthRegexBackend = /function synthesizeDomainQuestions[\s\S]*?return templates[\s\S]*?\};\s*\}/;
if (synthRegexBackend.test(backendContent)) {
  backendContent = backendContent.replace(synthRegexBackend, getSynthesizerCode());
  console.log('Replaced synthesizeDomainQuestions in backend with discipline-aware engine!');
}

fs.writeFileSync(backendPath, backendContent, 'utf8');
console.log('Backend domainQuestionBank.js successfully updated!');


// ── 2. UPDATE FRONTEND questionBank.ts ───────────────────────────
const frontendPath = path.resolve(__dirname, '../../frontend/src/services/questionBank.ts');
let frontendContent = fs.readFileSync(frontendPath, 'utf8');

// Format NEW_DOMAINS for frontend format
let frontendInjectedCount = 0;
for (const [slug, qs] of Object.entries(NEW_DOMAINS)) {
  if (!frontendContent.includes(`"${slug}": [`)) {
    const formatted = qs.map((item, idx) => ({
      id: `${slug}-${idx + 1}`,
      question_text: item.q,
      difficulty: idx < 4 ? 'easy' : idx < 7 ? 'medium' : 'hard',
      marks: 1,
      options: item.opts.map((optText, oIdx) => ({
        id: `${slug}-${idx + 1}-${String.fromCharCode(97 + oIdx)}`,
        option_text: optText,
        is_correct: oIdx === item.ans
      }))
    }));

    const snippet = `  "${slug}": ${JSON.stringify(formatted, null, 2)},\n`;
    frontendContent = frontendContent.replace('const DOMAIN_QUESTIONS: Record<string, any[]> = {', 'const DOMAIN_QUESTIONS: Record<string, any[]> = {\n' + snippet);
    frontendInjectedCount++;
  }
}
console.log('Injected', frontendInjectedCount, 'new domain question banks into frontend!');

// Inject aliases into frontend ALIAS_MAP
for (const [k, v] of Object.entries(newAliases)) {
  if (!frontendContent.includes(`"${k}": "${v}"`)) {
    frontendContent = frontendContent.replace('export const ALIAS_MAP: Record<string, string> = {', `export const ALIAS_MAP: Record<string, string> = {\n  "${k}": "${v}",`);
  }
}

// Replace synthesizeDomainQuestions in frontend
const synthRegexFrontend = /function synthesizeDomainQuestions[\s\S]*?return templates[\s\S]*?\};\s*\}/;
if (synthRegexFrontend.test(frontendContent)) {
  frontendContent = frontendContent.replace(synthRegexFrontend, getSynthesizerCode());
  console.log('Replaced synthesizeDomainQuestions in frontend with discipline-aware engine!');
}

fs.writeFileSync(frontendPath, frontendContent, 'utf8');
console.log('Frontend questionBank.ts successfully updated!');

