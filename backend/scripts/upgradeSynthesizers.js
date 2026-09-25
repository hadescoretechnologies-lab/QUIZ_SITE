const fs = require('fs');
const path = require('path');

const backendPath = path.resolve(__dirname, '../data/domainQuestionBank.js');
const frontendPath = path.resolve(__dirname, '../../frontend/src/services/questionBank.ts');

function getSynthesizerImplementation(isTypeScript = false) {
  const typeDefParam = isTypeScript ? '(domainName?: string, domainSlug?: string, targetCount: number = 30)' : '(domainName, domainSlug, targetCount = 30)';
  const returnType = isTypeScript ? ': any[]' : '';

  return `function synthesizeDomainQuestions${typeDefParam}${returnType} {
  const cleanTitle = domainName && domainName.trim() 
    ? domainName.trim().replace(/\\s*\\([^)]*\\)/g, '')
    : (domainSlug || 'Technical Domain').replace(/-/g, ' ').replace(/\\b\\w/g, (c${isTypeScript ? ': string' : ''}) => c.toUpperCase());

  const slug = (cleanTitle + ' ' + (domainSlug || '')).toLowerCase();

  const isSoftwareIT = /software|code|program|web|cloud|data|cyber|security|ai|machine learning|developer|backend|frontend|devops|network|database|linux|docker|python|java|javascript|algorithm|computing/i.test(slug);
  const isEngineeringPhysical = /engineering|mechanic|civil|electrical|electronic|robot|aerospace|automobile|chemical|petroleum|marine|hardware|structural|manufacturing|material|industrial|vlsi|embedded/i.test(slug);
  const isBusinessCommerce = /business|finance|management|marketing|sales|commerce|accounting|mba|bba|hr|talent|supply chain|logistics|operation|economics|market|banking/i.test(slug);
  const isDesignCreative = /design|ui|ux|art|media|film|video|cinema|fashion|interior|animation|graphic|creative|audio|music|photography|architecture/i.test(slug);
  const isHealthLifeScience = /bio|chem|medical|health|pharma|clinical|genetic|hospital|nursing|doctor|anatomy|physiology|biomed|drug|disease|dental|pharmacy/i.test(slug);

  let templates${isTypeScript ? ': any[]' : ''} = [];

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
        q: 'In typography and layout composition for ' + cleanTitle + ', what is \"kerning\"?',
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
}`;
}

function getGetDomainQuestionsImplementation(isTypeScript = false) {
  const typeSig = isTypeScript 
    ? 'export function getDomainQuestions(domainSlug: string, domainName?: string, targetCount: number = 30): Question[]'
    : 'function getDomainQuestions(domainSlug, targetCount = 30, domainName = null)';

  const cacheCall = isTypeScript
    ? 'dynamicAnswerRegistry.set(qId, correctOptId);'
    : 'dynamicQuestionCache.set(qId, correctOptId);';

  const returnTypeCast = isTypeScript ? ' as Question[]' : '';

  return `${typeSig} {
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
  
  const effectiveTitle = domainName || (domainNameToSlug ? normalizedDomainName : cleanSlug.replace(/-/g, ' ').replace(/\\b\\w/g, c => c.toUpperCase()));
  const requiredCount = Math.max(1, Number(targetCount) || 30);

  let rawList = [];

  if (resolvedKey && DOMAIN_QUESTIONS[resolvedKey]) {
    rawList = [...DOMAIN_QUESTIONS[resolvedKey]];
  } else {
    resolvedKey = cleanSlug || 'custom-domain';
    const synthesized = synthesizeDomainQuestions(effectiveTitle, cleanSlug, requiredCount);
    rawList = synthesized.map((item, sIdx) => {
      const qId = \`\${resolvedKey}-\${sIdx + 1}\`;
      return {
        id: qId,
        question_text: item.q,
        difficulty: sIdx < 10 ? 'easy' : sIdx < 20 ? 'medium' : 'hard',
        marks: 1,
        options: item.opts.map((optText, oIdx) => ({
          id: \`\${qId}-opt-\${String.fromCharCode(97 + oIdx)}\`,
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
      const qId = \`\${resolvedKey}-extra-\${sIdx + 1}\`;
      return {
        id: qId,
        question_text: item.q,
        difficulty: sIdx < 5 ? 'easy' : sIdx < 10 ? 'medium' : 'hard',
        marks: 1,
        options: item.opts.map((optText, oIdx) => ({
          id: \`\${qId}-opt-\${String.fromCharCode(97 + oIdx)}\`,
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
    const qId = item.id || \`\${resolvedKey}-q-\${idx + 1}\`;
    const qText = item.question_text || item.q;

    // Normalize options from either format (opts or options)
    let rawOptions = [];
    if (Array.isArray(item.options) && item.options.length > 0) {
      rawOptions = item.options.slice(0, 4).map((o, oIdx) => ({
        id: o.id || \`\${qId}-opt-\${String.fromCharCode(97 + oIdx)}\`,
        question_id: qId,
        option_text: o.option_text || o.text || String(o),
        is_correct: !!o.is_correct
      }));
    } else if (Array.isArray(item.opts)) {
      rawOptions = item.opts.slice(0, 4).map((optText, oIdx) => ({
        id: \`\${qId}-opt-\${String.fromCharCode(97 + oIdx)}\`,
        question_id: qId,
        option_text: optText,
        is_correct: oIdx === (item.ans ?? 0)
      }));
    }

    const correctOpt = rawOptions.find(o => o.is_correct) || rawOptions[0];
    if (correctOpt) {
      const correctOptId = correctOpt.id;
      ${cacheCall}
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
  })${returnTypeCast};
}`;
}

// Update Backend domainQuestionBank.js
let backendContent = fs.readFileSync(backendPath, 'utf8');

const synthBackendRegex = /function synthesizeDomainQuestions[\s\S]*?function shuffle/;
backendContent = backendContent.replace(synthBackendRegex, getSynthesizerImplementation(false) + '\n\nfunction shuffle');

const getDomBackendRegex = /function getDomainQuestions[\s\S]*?function checkCorrectAnswer/;
backendContent = backendContent.replace(getDomBackendRegex, getGetDomainQuestionsImplementation(false) + '\n\nfunction checkCorrectAnswer');

fs.writeFileSync(backendPath, backendContent, 'utf8');
console.log('Successfully upgraded synthesizeDomainQuestions and getDomainQuestions in backend/data/domainQuestionBank.js!');

// Update Frontend questionBank.ts
let feContent = fs.readFileSync(frontendPath, 'utf8');

const synthFeRegex = /function synthesizeDomainQuestions[\s\S]*?function shuffle/;
feContent = feContent.replace(synthFeRegex, getSynthesizerImplementation(true) + '\n\nfunction shuffle');

const getDomFeRegex = /export function getDomainQuestions[\s\S]*?export function checkQuestionBankCorrectAnswer/;
feContent = feContent.replace(getDomFeRegex, getGetDomainQuestionsImplementation(true) + '\n\nexport function checkQuestionBankCorrectAnswer');

fs.writeFileSync(frontendPath, feContent, 'utf8');
console.log('Successfully upgraded synthesizeDomainQuestions and getDomainQuestions in frontend/src/services/questionBank.ts!');
