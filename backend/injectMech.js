const fs = require('fs');
const path = require('path');

const MECH_QUESTIONS = [
  {
    q: 'In mechanical engineering thermodynamics, which cycle represents the theoretical ideal efficiency for a heat engine operating between two temperature limits?',
    opts: ['Carnot Cycle', 'Rankine Cycle', 'Otto Cycle', 'Brayton Cycle'],
    ans: 0
  },
  {
    q: 'What is the primary purpose of a factor of safety in mechanical design?',
    opts: ['To account for uncertainties in load, material properties, and manufacturing by designing components stronger than theoretically required', 'To increase the operating speed of a mechanical linkage', 'To ensure the material reaches its ultimate tensile strength during normal operation', 'To reduce the overall weight of the structure'],
    ans: 0
  },
  {
    q: 'In fluid mechanics, what does the Reynolds number primarily determine?',
    opts: ['Whether fluid flow is laminar or turbulent', 'The absolute viscosity of a compressible fluid', 'The heat transfer coefficient of a boundary layer', 'The bulk modulus of a hydraulic fluid'],
    ans: 0
  },
  {
    q: 'According to the Von Mises yield criterion, a ductile material will begin to yield when what parameter reaches a critical value?',
    opts: ['Distortion energy (shear strain energy)', 'Maximum principal stress', 'Maximum principal strain', 'Hydrostatic volumetric stress'],
    ans: 0
  },
  {
    q: 'In gear train design, what is the definition of "diametral pitch"?',
    opts: ['The number of teeth per inch of pitch diameter', 'The linear distance between adjacent teeth along the pitch circle', 'The ratio of the pitch diameter to the outside diameter', 'The clearance between mating teeth at the root'],
    ans: 0
  },
  {
    q: 'What heat treatment process involves heating steel above its critical temperature and rapidly cooling it in water or oil to increase hardness?',
    opts: ['Quenching', 'Annealing', 'Normalizing', 'Tempering'],
    ans: 0
  },
  {
    q: 'In kinematics of machinery, how many degrees of freedom does a standard planar four-bar linkage have?',
    opts: ['One (1)', 'Two (2)', 'Three (3)', 'Zero (0) - It is a statically determinate structure'],
    ans: 0
  },
  {
    q: 'What mechanical failure mode occurs when a component is subjected to repeated or fluctuating dynamic stress cycles below its ultimate tensile strength?',
    opts: ['Fatigue failure', 'Creep deformation', 'Brittle fracture', 'Buckling'],
    ans: 0
  },
  {
    q: 'In a standard vapor-compression refrigeration cycle, what is the state of the refrigerant immediately after passing through the expansion valve?',
    opts: ['Low-pressure liquid-vapor mixture', 'High-pressure subcooled liquid', 'Low-pressure superheated vapor', 'High-pressure superheated vapor'],
    ans: 0
  },
  {
    q: 'What principle states that for an incompressible, non-viscous fluid, an increase in the speed of the fluid occurs simultaneously with a decrease in pressure?',
    opts: ["Bernoulli's Principle", "Archimedes' Principle", "Pascal's Law", "Newton's Law of Viscosity"],
    ans: 0
  }
];

const backendPath = path.join(__dirname, 'data', 'domainQuestionBank.js');
let backendContent = fs.readFileSync(backendPath, 'utf8');

const mechBackendStr = '"mechanical-engineering": [\n' + MECH_QUESTIONS.map(q => 
  `    {\n      "q": "${q.q}",\n      "opts": [\n${q.opts.map(o => `        "${o}"`).join(',\n')}\n      ],\n      "ans": ${q.ans}\n    }`
).join(',\n') + '\n  ],';

if (!backendContent.includes('"mechanical-engineering": [')) {
  backendContent = backendContent.replace(/"civil-engineering": \[/, mechBackendStr + '\n  "civil-engineering": [');
  fs.writeFileSync(backendPath, backendContent);
  console.log('Added to backend');
}

const frontendPath = path.join(__dirname, '../frontend/src/services/questionBank.ts');
let frontendContent = fs.readFileSync(frontendPath, 'utf8');

const mechFrontendStr = '"mechanical-engineering": [\n' + MECH_QUESTIONS.map((q, idx) => 
  `    {\n      "id": "mechanical-engineering-${idx+1}",\n      "question_text": "${q.q}",\n      "difficulty": "medium",\n      "marks": 1,\n      "options": [\n${q.opts.map((o, oIdx) => `        {\n          "id": "mechanical-engineering-${idx+1}-${String.fromCharCode(97+oIdx)}",\n          "option_text": "${o}",\n          "is_correct": ${oIdx === q.ans}\n        }`).join(',\n')}\n      ]\n    }`
).join(',\n') + '\n  ],';

if (!frontendContent.includes('"mechanical-engineering": [')) {
  frontendContent = frontendContent.replace(/"civil-engineering": \[/, mechFrontendStr + '\n  "civil-engineering": [');
  fs.writeFileSync(frontendPath, frontendContent);
  console.log('Added to frontend');
}
