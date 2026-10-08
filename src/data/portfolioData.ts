import {
  Project,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  ServiceItem,
  CertificationItem,
  ProjectGalleryGroup,
} from '@/types/portfolio';

export const personalInfo = {
  name: 'Karim Mohamed Abdelaty',
  shortName: 'Karim Abdelaty',
  initials: 'KA',
  title: 'Software Engineer Student | Flutter Developer',
  headline: 'Software Engineer Student | Flutter Developer',
  location: 'Cairo, Egypt',
  email: 'karim.m.abdelaty@gmail.com',
  phone: '01030913981',
  phoneInternational: '+201030913981',
  linkedin: 'https://www.linkedin.com/in/karim-mohamed-abdelaty',
  linkedinDisplay: 'linkedin.com/in/karim-mohamed-abdelaty',
  github: 'https://github.com/karimAbdelaty111',
  githubDisplay: 'github.com/karimAbdelaty111',
  university: 'Ain Shams University',
  faculty: 'Faculty of Science',
  department: 'Computer Science',
  academicStatus: '4th Year Computer Science Student',
  profileImage: '/assets/myphoto.jpeg',
  profileImageFallback: '/assets/myphoto',
  cvPath: '/assets/Karim-Mohamed-Abdelaty-CV.pdf',
  about: `I am a Computer Science student at Ain Shams University and an aspiring Software Engineer specializing in Flutter development. I enjoy building cross-platform mobile applications that solve real-world problems and provide clean, intuitive user experiences.

My development journey has focused on Dart, Flutter, RESTful APIs, state management, Firebase, and software architecture. I am continuously improving my understanding of clean and maintainable code, scalable application structure, and modern development practices.

I enjoy turning ideas into practical applications, learning from real projects, and continuously improving my technical skills. My goal is to grow into a strong Software Engineer and build reliable products that create real value.`,
  shortBio:
    'A Computer Science student and aspiring Software Engineer specializing in Flutter development and cross-platform mobile applications. Experienced in building Flutter applications with Dart, RESTful APIs, state management, Firebase integrations, and clean, maintainable architecture. Passionate about creating practical mobile solutions, improving software engineering skills, and continuously learning modern technologies.',
};

export const skillsData: SkillCategory[] = [
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile application engineering with Flutter & Dart',
    iconName: 'Smartphone',
    skills: [
      'Flutter',
      'Dart',
      'Responsive UI',
      'Cross-Platform Development',
      'Flutter Widgets',
      'Navigation',
      'UI Implementation',
    ],
  },
  {
    title: 'Architecture & State Management',
    description: 'Clean, scalable, and decoupled reactive mobile patterns',
    iconName: 'Layers',
    skills: [
      'BLoC',
      'Cubit',
      'Provider',
      'Clean Architecture',
      'Separation of Concerns',
      'Dependency Injection',
      'GetIt',
    ],
  },
  {
    title: 'APIs & Backend Integration',
    description: 'Robust HTTP networking, client serialization, and error boundaries',
    iconName: 'Network',
    skills: [
      'RESTful APIs',
      'Dio',
      'Retrofit',
      'JSON Serialization',
      'API Integration',
      'Error Handling',
    ],
  },
  {
    title: 'Firebase & Local Storage',
    description: 'Real-time cloud database, push services, and offline persistence',
    iconName: 'Database',
    skills: [
      'Firebase Authentication',
      'Cloud Firestore',
      'Firebase Cloud Messaging',
      'Firebase Integration',
      'SharedPreferences',
      'Local Storage',
    ],
  },
  {
    title: 'Programming & Computer Science',
    description: 'Theoretical foundations, object-oriented concepts, and algorithmic thinking',
    iconName: 'Binary',
    skills: [
      'C++',
      'Java',
      'Object-Oriented Programming',
      'Data Structures',
      'Algorithms',
      'Problem Solving',
    ],
  },
  {
    title: 'Tools & Development',
    description: 'Modern development workflows, version control, and profiling tooling',
    iconName: 'Wrench',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Android Studio',
      'Postman',
      'Cursor',
      'OpenCode',
      'Flutter DevTools',
    ],
  },
  {
    title: 'Other Technical Interests',
    description: 'Emerging architectures and backend integrations',
    iconName: 'Cpu',
    skills: [
      'AI Integration',
      'FastAPI',
      'Backend Integration',
      'Mobile Application Architecture',
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    title: 'Flutter Developer',
    companyOrProgram: 'Personal & Team Projects',
    location: 'Cairo, Egypt',
    period: '2026 - Present',
    status: 'Active',
    type: 'project',
    description:
      'Developing cross-platform mobile applications using Flutter and Dart, with hands-on experience in API integration, state management, local storage, Firebase, and modern Flutter development practices.',
    highlightsLabel: 'Key Responsibilities & Highlights:',
    highlights: [
      'Building cross-platform mobile applications using Flutter and Dart.',
      'Integrating RESTful APIs using Dio and handling API responses.',
      'Implementing state management using BLoC, Cubit, and Provider.',
      'Working with JSON serialization and API data models.',
      'Applying clean and maintainable Flutter project structures.',
      'Integrating Firebase services, including authentication.',
      'Working with local storage and data persistence.',
      'Using Git and GitHub for version control and collaborative development.',
      'Debugging applications, fixing issues, and improving user experience.',
      'Building personal and team-based projects as part of practical learning.',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'BLoC',
      'Cubit',
      'Provider',
      'REST APIs',
      'Dio',
      'Firebase',
      'Git',
      'GitHub',
      'JSON',
    ],
  },
  {
    id: 'exp-2',
    title: 'Cross Platform Flutter Development',
    companyOrProgram: 'Digital Egypt Pioneers Initiative (DEPI)',
    location: 'Cairo, Egypt — Government Initiative',
    period: 'Round 5 · 2026',
    status: 'In Progress',
    type: 'training',
    description:
      'Selected for the Digital Egypt Pioneers Initiative (DEPI), a nationwide technology scholarship program under the Ministry of Communications and Information Technology, specializing in Cross Platform Flutter Development.',
    highlightsLabel: 'Key Responsibilities & Highlights:',
    highlights: [
      'Receiving professional training in Flutter and Dart for cross-platform mobile development.',
      'Learning and applying Clean Architecture principles in Flutter applications.',
      'Working with BLoC and Cubit for scalable state management.',
      'Learning Dependency Injection and service locator patterns.',
      'Working with REST APIs and integrating backend services into Flutter applications.',
      'Developing applications through practical assignments and team-based projects.',
      'Practicing professional Git and GitHub workflows.',
      'Working with collaborative development and agile project workflows.',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'BLoC',
      'Cubit',
      'Clean Architecture',
      'Dependency Injection',
      'REST APIs',
      'Dio',
      'Git',
      'GitHub',
      'Firebase',
    ],
  },
  {
    id: 'exp-3',
    title: 'SBS 2026',
    companyOrProgram: 'SBS 2026',
    location: 'Cairo, Egypt',
    period: '2026',
    type: 'training',
    description:
      'SBS 2026 played an important role in the beginning of my software development journey. The program encouraged me to continue learning and gave me a strong foundation in software development fundamentals, teamwork, communication, and practical project development.\n\nAs part of a team, I worked on San3a, a real-world mobile application, applying what I learned throughout the program. Our project was selected as the Best Application at the conference, which was a major milestone and motivation for me to continue developing my skills in Flutter and software engineering.',
    highlightsLabel: 'Key Learning Areas & Achievements:',
    highlights: [
      'Introduced to software development and strengthened core computer science fundamentals.',
      'Learned foundational engineering principles that launched and motivated my Flutter mobile journey.',
      'Acquired essential software development concepts and practical mobile programming skills.',
      'Developed collaborative teamwork, clear communication, and agile group workflows.',
      'Worked as part of a team to engineer "San3a", a real-world mobile marketplace application.',
      'Honored with the "Best Application" award at the conference among all participating projects.',
    ],
  },
];

export const educationData: EducationItem = {
  degree: 'Bachelor of Science in Computer Science',
  university: 'Ain Shams University',
  faculty: 'Faculty of Science',
  department: 'Computer Science',
  location: 'Cairo, Egypt',
  period: '2022 - 2026',
  status: '4th Year Student',
  relevantTopics: [
    'Programming (C++, Java, Dart)',
    'Object-Oriented Programming (OOP)',
    'Data Structures & Algorithms',
    'Computer Science Fundamentals',
    'Software Engineering & System Design',
    'Database Systems',
    'Operating Systems',
    'Computer Networks',
  ],
};

export const projectsData: Project[] = [
  {
    id: 'proj-cairo-metro',
    slug: 'cairo-metro',
    name: 'Cairo Metro',
    category: 'Route Planning & Algorithms',
    tagline: 'Cairo Metro Route Planning System with Graph Traversal & OOP Logic',
    description:
      'A Cairo Metro route planning system focused on finding routes between stations using Dart, OOP, and metro line logic.',
    projectGoal:
      'Find optimal routes, transfers, and station counts across Cairo Metro lines using algorithmic graph traversal.',
    role: 'Dart & Algorithms Developer',
    projectType: 'Mobile Route Planner & Algorithmic System',
    platform: 'Dart & Flutter (Cross-Platform Mobile)',
    architecture: 'Object-Oriented Programming (OOP) & Graph Modeling (Adjacency List)',
    stateManagement: 'Modular State & Line Logic',
    apis: 'In-Memory Graph Engine & Route Pathfinding',
    problem:
      'Metro navigation can become difficult when users need to determine the most suitable route between stations across multiple intersecting lines and transfer points.',
    solution:
      'Implemented route calculation logic and a user-friendly interface for navigating between metro stations using BFS graph algorithms and object-oriented metro line modeling.',
    keyFeatures: [
      'Interactive station selector with autocomplete search',
      'Graph-based shortest path route calculation using BFS (Breadth-First Search)',
      'Accurate transfer station detection across intersecting lines',
      'Station count and estimated travel duration calculation',
      'Direction determination for correct boarding terminal',
    ],
    technologies: ['Dart', 'OOP', 'Algorithms', 'Route Planning'],
    challenges: [
      'Accurately modeling multi-line transfer intersections as weighted/unweighted graph nodes',
      'Handling transfer penalties and direction switching logic cleanly with OOP principles',
    ],
    developmentProcess: [
      'Modeled Cairo Metro lines as an undirected graph data structure.',
      'Implemented BFS algorithms in Dart for shortest-hop route pathfinding.',
      'Designed responsive UI screens featuring station timelines and line badges.',
    ],
    resultsAndStatus:
      'Fully implemented and tested with real station data. Visual screenshots and assets documented in strict numerical sequence.',
    githubUrl: 'https://github.com/karimAbdelaty111/cairo-metro-system',
    image: '/assets/metro main galary.jpeg',
    placeholderBadge: 'Algorithms & OOP',
    galleryImages: [
      '/assets/metro main galary.jpeg',
      '/assets/metro galary 1.jpeg',
      '/assets/metro galary 2.jpeg',
      '/assets/metro galary 3.jpeg',
    ],
    realGalleryImages: [
      '/assets/metro1.jpeg',
      '/assets/metro2.jpeg',
      '/assets/metro3.jpeg',
      '/assets/metro4.jpeg',
      '/assets/metro5.jpeg',
      '/assets/metro6.jpeg',
      '/assets/metro7.jpeg',
      '/assets/metro8.jpeg',
    ],
    featured: true,
  },
  {
    id: 'proj-ofood',
    slug: 'ofood',
    name: 'Ofood',
    category: 'Food & Ordering',
    tagline: 'Streamlined Mobile Food Ordering with Real-Time Cart & Authentication',
    description:
      'A responsive mobile food application designed to provide users with a smooth experience for browsing food and interacting with restaurant services.',
    projectGoal:
      'Provide a streamlined, intuitive mobile experience for browsing meals, managing dynamic carts, and placing orders.',
    role: 'Flutter Developer (UI Implementation, State Management & API Integration)',
    projectType: 'Food Ordering Mobile Application',
    platform: 'Flutter (Cross-Platform Mobile)',
    architecture: 'Layered Architecture separating presentation, business logic, and local caching',
    stateManagement: 'Provider Reactive State Management',
    apis: 'RESTful APIs & Firebase Authentication',
    problem:
      'Food delivery and restaurant interaction often suffer from cluttered interfaces, friction during checkout, and cumbersome address selection.',
    solution:
      'Developed a responsive, modern Flutter application featuring modular cart management, location-based map interactions, Google authentication, and an embedded chatbot to assist users throughout their ordering journey.',
    keyFeatures: [
      'Intuitive food browsing and categorized restaurant menu display',
      'Cart management with dynamic item counters and order summaries',
      'Firebase Authentication & Google Sign-In support',
      'Local order and browsing history via SharedPreferences',
      'Interactive map functionality and geolocation via flutter_map & Geolocator',
      'Integrated conversational chatbot for user assistance',
    ],
    technologies: ['Flutter', 'Dart', 'Provider', 'REST APIs', 'Firebase Authentication', 'Local Storage'],
    challenges: [
      'Synchronizing cart state seamlessly across navigation flow and screen transitions',
      'Ensuring responsive layout across various mobile screen densities without UI stutters',
    ],
    developmentProcess: [
      'Designed responsive UI components following modern food application design patterns.',
      'Integrated Firebase Auth and Google credential workflows.',
      'Connected REST APIs with custom deserializers and Provider listeners.',
    ],
    resultsAndStatus:
      'Complete feature set implemented with operational authentication, map integration, and interactive cart workflows.',
    githubUrl: 'https://github.com/km6666661-eng/Big-Hunters-main',
    image: '/assets/ofood main galary.jpeg',
    placeholderBadge: 'Full-Featured Mobile App',
    galleryImages: [
      '/assets/ofood main galary.jpeg',
      '/assets/ofood galary 1.jpeg',
      '/assets/ofood galary 2.jpeg',
      '/assets/ofood galary 3.jpeg',
    ],
    realGalleryImages: [
      '/assets/ofood1.jpeg',
      '/assets/ofood2.jpeg',
      '/assets/ofood3.jpeg',
      '/assets/ofood4.jpeg',
      '/assets/ofood5.jpeg',
      '/assets/ofood6.jpeg',
      '/assets/ofood7.jpeg',
      '/assets/ofood8.jpeg',
      '/assets/ofood9.jpeg',
      '/assets/ofood10.jpeg',
      '/assets/ofood11.jpeg',
      '/assets/ofood12.jpeg',
      '/assets/ofood13.jpeg',
      '/assets/ofood14.jpeg',
    ],
    featured: true,
  },
  {
    id: 'proj-4',
    slug: 'san3a',
    name: 'San3a',
    category: 'Marketplace Platform',
    tagline: 'On-Demand Technical & Maintenance Services Marketplace',
    description:
      'A Flutter-based service marketplace where users can post technical or maintenance problems and technicians can respond to service requests.',
    problem:
      'Users often struggle to find suitable technicians for specific maintenance or technical problems, while technicians need a structured platform to find relevant jobs and submit transparent bids.',
    solution:
      'Created a two-sided mobile application that connects clients with skilled technicians through structured service requests, transparent technician bidding, and interactive booking flows.',
    keyFeatures: [
      'Client service request posting with description and category tagging',
      'Technician bidding and proposal submission mechanism',
      'End-to-end booking flow and scheduled appointment management',
      'Real-time status tracking from request creation to completion',
      'Two-way rating and feedback system for trust and verification',
      'Technician-client interactive messaging and service coordination',
      'Live tracking functionality for active service calls',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'REST APIs',
      'State Management',
      'Location Services',
      'Clean Architecture',
    ],
    architecture:
      'Clean architecture with distinct domain, data, and presentation boundaries to handle both client and technician user workflows reliably.',
    challenges: [
      'Structuring state transitions across multi-stage service requests (Draft -> Bidding -> Accepted -> In Progress -> Completed).',
      'Delivering clean dual-role workflows within a cohesive, responsive mobile interface.',
    ],
    developmentProcess: [
      'Domain modeling for marketplace entities: Requests, Bids, Appointments, and Reviews.',
      'Developing Flutter screens with reusable component libraries.',
      'Integrating REST API endpoints with robust error handling.',
      'Location services integration for nearby technician assignment.',
    ],
    resultsAndStatus:
      'Operational marketplace prototype showcasing complex transactional mobile flows and modular Flutter architecture.',
    githubUrl: 'https://github.com/karimAbdelaty111',
    image: '/assets/san3a_splash.jpeg',
    placeholderBadge: 'Marketplace Platform',
    galleryImages: ['/assets/san3a_splash.jpeg', '/assets/san3a_icon.jpeg'],
    realGalleryImages: ['/assets/san3a_splash.jpeg', '/assets/san3a_icon.jpeg'],
    featured: true,
  },
];

export const featuredProjects: Project[] = [projectsData[0], projectsData[1], projectsData[2]];

export const projectGalleries: ProjectGalleryGroup[] = [
  {
    id: 'gal-metro',
    projectId: 'proj-cairo-metro',
    projectSlug: 'cairo-metro',
    projectName: 'Cairo Metro',
    galleryName: 'Metro Gallery',
    category: 'Route Planning & Algorithms',
    tagline: 'Shortest Path Graph Traversal & Cairo Metro Visual System',
    coverImage: '/assets/metro main galary.jpeg',
    images: [
      '/assets/metro main galary.jpeg',
      '/assets/metro galary 1.jpeg',
      '/assets/metro galary 2.jpeg',
      '/assets/metro galary 3.jpeg',
    ],
  },
  {
    id: 'gal-ofood',
    projectId: 'proj-ofood',
    projectSlug: 'ofood',
    projectName: 'Ofood',
    galleryName: 'OnFood Gallery',
    category: 'Food & Ordering',
    tagline: 'Streamlined Mobile Food Ordering & Menu Visual Showcase',
    coverImage: '/assets/ofood main galary.jpeg',
    images: [
      '/assets/ofood main galary.jpeg',
      '/assets/ofood galary 1.jpeg',
      '/assets/ofood galary 2.jpeg',
      '/assets/ofood galary 3.jpeg',
    ],
  },
  {
    id: 'gal-san3a',
    projectId: 'proj-4',
    projectSlug: 'san3a',
    projectName: 'San3a',
    galleryName: 'San3a Gallery',
    category: 'Marketplace Platform',
    tagline: 'Technical Maintenance Marketplace & Chalet Services Application',
    coverImage: '/assets/san3a_splash.jpeg',
    images: [
      '/assets/san3a_splash.jpeg',
      '/assets/san3a_icon.jpeg',
    ],
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Cross-Platform Mobile Development with Flutter',
    description:
      'Building performant, single-codebase iOS and Android applications using Flutter and Dart with native-level performance and smooth frame rates.',
    iconName: 'Smartphone',
    deliverables: [
      'iOS & Android cross-platform codebase',
      'Custom widget trees & design fidelity',
      'Platform-specific adaptations',
      'Performance profiling & optimization',
    ],
  },
  {
    id: 'srv-2',
    title: 'Flutter UI Implementation & Responsive Design',
    description:
      'Translating Figma or design mockups into pixel-perfect, responsive Flutter interfaces optimized for all screen sizes and orientations.',
    iconName: 'Layout',
    deliverables: [
      'Pixel-perfect UI implementation',
      'Responsive multi-screen layouts',
      'Smooth micro-animations & transitions',
      'Accessible widgets & contrast compliance',
    ],
  },
  {
    id: 'srv-3',
    title: 'REST API Integration',
    description:
      'Connecting Flutter frontends to backend services using Dio, Retrofit, and robust JSON deserialization with thorough error boundaries.',
    iconName: 'Globe',
    deliverables: [
      'RESTful endpoint consumption',
      'Token-based authentication headers',
      'Network caching & retry policies',
      'User-friendly error handling states',
    ],
  },
  {
    id: 'srv-4',
    title: 'Firebase Integration',
    description:
      'Integrating Firebase cloud infrastructure for authentication, Cloud Firestore databases, and push notification flows.',
    iconName: 'Flame',
    deliverables: [
      'Firebase Auth (Email, Google Sign-In)',
      'Cloud Firestore data modeling & streams',
      'Firebase Cloud Messaging (FCM)',
      'Firebase Storage for media assets',
    ],
  },
  {
    id: 'srv-5',
    title: 'Application State Management',
    description:
      'Architecting predictable, maintainable application state using industry-standard BLoC, Cubit, or Provider patterns.',
    iconName: 'Cpu',
    deliverables: [
      'BLoC / Cubit / Provider implementation',
      'Event-driven reactive streams',
      'Clear separation of UI and business logic',
      'Testable, predictable state transitions',
    ],
  },
  {
    id: 'srv-6',
    title: 'Application Architecture & Refactoring',
    description:
      'Structuring codebases according to Clean Architecture principles, dependency injection with GetIt, and maintainable folder patterns.',
    iconName: 'ShieldCheck',
    deliverables: [
      'Clean Architecture (Domain, Data, Presentation)',
      'Dependency injection setups via GetIt',
      'Code decoupling & debt reduction',
      'Modular feature organization',
    ],
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-sbs',
    title: 'SBS 2026',
    organization: 'Step By Step (SBS)',
    program: 'Mobile Development Track & Conference Project',
    track: 'Flutter Delegate',
    round: 'Season 2026',
    status: 'Completed',
    dateOrPeriod: '2026',
    description:
      'Certificate of Achievement awarded for active attendance and completing the mobile application as a Flutter Delegate. Developed "San3a", selected as the Best Application at the conference.',
    image: '/assets/certificates/sbs.jpeg',
    credentialUrl: '/assets/certificates/sbs.jpeg',
  },
  {
    id: 'cert-1',
    title: 'Cross Platform Flutter Development',
    organization: 'Digital Egypt Pioneers Initiative (DEPI)',
    program: 'Ministry of Communications and Information Technology (MCIT)',
    track: 'Cross Platform Flutter Development',
    round: 'Round 5',
    status: 'In Progress',
    dateOrPeriod: 'Round 5 · 2026',
    description:
      'Prestigious nationwide government scholarship focused on advanced cross-platform mobile engineering with Flutter, Dart, Clean Architecture, and software craftsmanship.',
  },
];

export const navigationLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];
