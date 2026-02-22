/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Johan EL HAJJ DIB",
  title: "Bonjour, je suis Johan",
  subTitle: emoji(
    "Ingénieur FPGA junior passionné par la conception de systèmes numériques fiables, du RTL en VHDL/Verilog jusqu’à l’intégration SoC avec soft-core et logiciel embarqué en C, avec une forte culture de la vérification et de la validation (simulation, tests sur carte)."
  ),

  resumeLink: "https://drive.google.com/uc?export=download&id=1Mi_OZ5eL_-N1Iqbww7vbXfoPIFBiboXR",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/johanehd",
  linkedin: "https://www.linkedin.com/in/johan-el-hajj-dib/",
  gmail: "Johan.ehd@gmail.com",

  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Ce que je fais",
  subTitle:
    "Conception RTL et intégration SoC, avec un focus sur la vérification/validation (simulation + tests sur cible).",
  skills: [
emoji(
      "⚡ Fiabilité & Systèmes Critiques : Implémentation de mécanismes durcis (TMR, ECC, mitigation SEU) pour le spatial et l'industrie, incluant l'intégration de Soft-cores RISC-V."
    ),
emoji(
      "⚡ RTL Design : Maîtrise de la conception VHDL/Verilog éprouvée sur cibles Xilinx, Microchip et Intel (ex: stack UDP/IP personnalisée), avec expérience pratique de l'intégration de bus standards (ex : AXI-Stream, AHB, Wishbone)."
    ),
emoji(
      "⚡ Vérification & Sign-off : Maîtrise avancée de QuestaSim/ModelSim (analyse de waveforms, couverture) et validation des contraintes temporelles (STA/CDC)."
    ),
emoji(
      "⚡ Validation & Bring-up : Tests sur cible réelle et debug matériel (ILA, SmartDebug, Oscilloscope) pour assurer la transition fluide de la simulation au prototype."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "FPGA / VHDL / Verilog", fontAwesomeClassname: "fas fa-microchip" },
    { skillName: "SoC / Bus", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "Verification", fontAwesomeClassname: "fas fa-wave-square" },
    { skillName: "Hardware Debug", fontAwesomeClassname: "fas fa-solid fa-bug"},
    { skillName: "Timing / Constraints", fontAwesomeClassname: "fas fa-stopwatch" },
    { skillName: "C (Embedded)", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "École d’ingénieur Polytech Paris-Saclay",
      logo: require("./assets/images/polytechlogo.jpg"),
      subHeader: "Diplôme d’ingénieur — Électronique et Infortique pour l'Embarqué",
      duration: "2022-2025",
      desc:
        "Formation orientée systèmes embarqués, architecture numérique et conception FPGA.",
      descBullets: [
        "Approche système : électronique numérique, génie logiciel embarqué et co-conception matériel/logiciel.",
        "Traitement du signal et des données, acquisition et systèmes communicants.",
        "Ingénierie des systèmes embarqués et temps réel, microcontrôleurs et architecture SoC.",
        "Projets pratiques et travaux en laboratoire intégrant FPGA, capteurs, communications et validation.",
        "Génie logiciel pour l’embarqué : programmation C/C++ et conception de solutions complètes."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "RTL Design (VHDL / Verilog)",
      progressPercentage: "92%" 
    },
    {
      Stack: "FPGA Design Flow",
      progressPercentage: "85%"
    },
    {
      Stack: "Vérification & Simulation (QuestaSim, VUnit)",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Ingénieur FPGA / SoC",
      company: "Watt & Well",
      companylogo: require("./assets/images/wattandwell_logo.jpg"),
      date: "2025 — 6 mois (Avril - Octobre)",
      desc:
        "Mutation d'une architecture de vol spatiale par l'intégration d'un soft-core RISC-V sur cible Microchip PolarFire. J'ai conçu les modules de liaison et piloté l'insertion du processeur pour transformer un design 100% câblé en une plateforme mixte (Hardware/Software).",
      descBullets: [
        "Conception VHDL : Développement de bridges (AHB/Wishbone, AXI-Stream), timers et blocs de contrôle.",
        "Intégration SoC : Intégration du soft-core sur l'interconnect existant pour le pilotage complet des ressources matérielles du FPGA.",
        "Vérification : Simulation sous QuestaSim (VUnit) avec testbenchs unitaires et validation d'intégrité de bus.",
        "Fiabilisation (SEU) : Sécurisation du design par mécanismes de redondance (TMR) et correction d'erreurs (ECC).",
        "Migration VHDL ➔ C: Portage de la logique de traitement des commandes de l'OBC (On-Board Computer) d'une implémentation VHDL vers une solution logicielle en C embarqué.",
        "Co-validation HW/SW : Développement de drivers (HAL) en C pour le pilotage des IPs matérielles."
      ]
    },
    {
      role: "FPGA / Tolérance aux fautes",
      company: "Universidad Carlos III de Madrid (UC3M)",
      companylogo: require("./assets/images/Logo_UC3M.png"),
      date: "2024 — 3 mois (Avril - Juillet)",
      desc:
        "Recherche sur la tolérance aux fautes du processeur CV32E40P (PULP Platform) sur cible Xilinx Zynq-7000. Développement de mécanismes de durcissement pour des applications spatiales.",
      descBullets: [
        "Conception Verilog : Implémentation de modules de Redondance Modulaire Triple (TMR) et intégration de ECCs pour sécuriser le processeur.",
        "Vérification : Évaluation de la robustesse face aux SEU via des campagnes d'injection de fautes en simulation et sur carte.",
        "Analyse de Données (Python) : Développement d'outils de post-traitement pour quantifier l'efficacité des mécanismes de protection mis en place.",
        "Validation Matérielle : Déploiement sur cible réelle et débogage des signaux critiques avec Xilinx ILA."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true",
  display: false
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Quelques réalisations FPGA/SoC orientées",
  projects: [
    {
      image: require("./assets/images/eth_prj.png"),
      projectName: "Acquisition SPI & Stack Ethernet UDP/IP",
      projectDesc:
        "Conception intégrale 'From Scratch' en VHDL pur (sans IP tierce) d'une chaîne d'acquisition sur Artix-7. Développement d'un contrôleur maître SPI pour accéléromètre ADXL345 et d'une pile réseau complète (MAC/IPv4/UDP) pour le streaming de données en temps réel vers le PC sans processeur.",
      footerLink: [
        {
          name: "Code (GitHub)",
          url: "https://github.com/johanehd/fpga-adxl345-ethernet-streaming"
        }
      ]
    },
    {
      image: require("./assets/images/racine-carree.png"),
      projectName: "Arithmétique FPGA : Calculateur de Racine Carrée",
      projectDesc:
        "Conception et implémentation en VHDL de plusieurs architectures de calcul de racine carrée (séquentielle, combinatoire et pipelinée) sur cible Intel Cyclone (Carte DE1), avec comparaison des performances, de la latence et de l’utilisation des ressources FPGA. Vérification fonctionnelle par simulation et validation des résultats.",
      footerLink: []
    }
  ],
  display: true
};


const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle:
    "",
  achievementsCards: [
    {
      title: "TOEIC English Test",
      subtitle:
        "Niveau B2 — Maîtrise de l'anglais professionnel et technique pour l'ingénierie électronique.",
      image: require("./assets/images/toeic.jpg"),
      imageAlt: "Achievement",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section 

const blogSection = {
  title: "Articles",
  subtitle:
    "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections 

const talkSection = {
  title: "Présentations",
  subtitle: emoji("Présentations techniques / talks "),
  talks: [],
  display: false
};

// Podcast Section (

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section

const resumeSection = {
  title: "CV",
  subtitle: "Tu peux télécharger mon CV",
  display: true
};

const contactInfo = {
  title: emoji("Me contacter ☎️"),
  subtitle:
    "Ouvert aux opportunités FPGA/SoC/logiciel embarqué — n’hésitez pas à me contacter.",
  number: "+33 6 95 36 73 47",
  email_address: "Johan.ehd@gmail.com"
};

// Twitter Section (optionnel)

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};