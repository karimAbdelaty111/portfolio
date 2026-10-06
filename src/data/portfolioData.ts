import {
  Project,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  ServiceItem,
  CertificationItem,
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
    period: '2025 - Present',
    status: 'Active',
    type: 'project',
    description:
      'Designing and developing cross-platform mobile applications, focusing on scalable structure, smooth user interactions, and robust state management.',
    highlights: [
      'Building cross-platform mobile applications using Flutter and Dart.',
      'Working with RESTful APIs and backend services.',
      'Implementing state management using BLoC, Cubit, and Provider.',
      'Applying clean and maintainable application structures.',
      'Integrating Firebase services where required.',
      'Working with local storage and application persistence.',
      'Using Git and GitHub for source control and collaborative development.',
      'Debugging, testing, and improving application performance.',
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
    ],
  },
  {
    id: 'exp-2',
    title: 'Cross Platform Flutter Development',
    companyOrProgram: 'Digital Egypt Pioneers Initiative (DEPI)',
    location: 'Cairo, Egypt (Government Initiative)',
    period: 'Round 5',
    status: 'In Progress',
    type: 'training',
    description:
      'Selected for the competitive nationwide tech scholarship program under the Ministry of Communications and Information Technology, specializing in cross-platform mobile development.',
    highlights: [
      'Professional training focused on cross-platform mobile application development using Flutter and Dart.',
      'Deep dive into Clean Architecture, dependency injection, and industrial design patterns in Flutter.',
      'Collaborative teamwork on agile milestones and code reviews.',
    ],
    technologies: ['Flutter', 'Dart', 'Clean Architecture', 'REST APIs', 'Agile Workflows'],
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
    id: 'proj-1',
    slug: 'clothesx',
    name: 'ClothesX',
    category: 'AI & Mobile',
    tagline: 'AI-Powered Clothing Analysis & Smart Digital Wardrobe Management',
    description:
      'An AI-powered clothing analysis application that allows users to capture or upload clothing images, analyze clothing items, identify their characteristics, and organize them inside a digital wardrobe.',
    problem:
      'Managing clothing items digitally can be difficult when users need to manually organize and describe each item.',
    solution:
      'Built a Flutter-based application connected to an AI-powered backend that processes clothing images and extracts useful information about clothing items. The system is designed around image processing, AI-based clothing analysis, categorization, and digital wardrobe management.',
    keyFeatures: [
      'Capture and upload clothing images via camera or gallery',
      'AI-driven clothing analysis and attribute extraction',
      'Intelligent item categorization and classification',
      'Digital wardrobe cataloging with custom tags and filters',
      'Clean mobile UI built with Flutter for seamless interaction',
      'Fast asynchronous API communication with backend microservice',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'FastAPI',
      'Python',
      'AI/Computer Vision',
      'REST APIs',
      'Backend Integration',
    ],
    architecture:
      'Layered mobile client communicating over HTTP REST with a FastAPI Python microservice handling image inference and feature classification.',
    challenges: [
      'Handling asynchronous mobile uploads and providing responsive loading states during AI image inference.',
      'Designing an intuitive wardrobe layout that displays rich item attributes cleanly on diverse screen sizes.',
    ],
    developmentProcess: [
      'Requirement analysis for digital wardrobe usability and AI extraction parameters.',
      'Flutter mobile UI prototyping and state management architecture.',
      'REST API contract definition and integration with Python/FastAPI backend.',
      'End-to-end testing with sample garment photography and error handling.',
    ],
    resultsAndStatus:
      'Core architecture implemented and actively being refined. Demonstrates practical cross-disciplinary integration of Flutter with AI backend services.',
    githubUrl: 'https://github.com/karimAbdelaty111',
    image: '/assets/clothesx_preview.jpg',
    placeholderBadge: 'AI & Mobile Integration',
    realGalleryImages: ['/assets/clothesx_preview.jpg'],
    featured: true,
  },
  {
    id: 'proj-2',
    slug: 'onfood',
    name: 'OnFood',
    category: 'Food & Ordering',
    tagline: 'Streamlined Food Ordering Experience with Maps & Intelligent Chatbot',
    description:
      'A Flutter food application designed to provide users with a smooth experience for browsing food and interacting with restaurant-related services.',
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
      'Location-based delivery zone verification',
      'Integrated conversational chatbot for user assistance',
      'Robust error handling and resilient offline state support',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Provider',
      'REST APIs',
      'Firebase Authentication',
      'Google Sign-In',
      'SharedPreferences',
      'flutter_map',
      'Geolocator',
    ],
    architecture:
      'Provider-based reactive state management separating business logic, geolocation services, and local cache layers from the presentation tree.',
    challenges: [
      'Coordinating location permissions and real-time map pin placement smoothly without UI stutters.',
      'Maintaining consistent cart state across screen transitions and authentication lifecycles.',
    ],
    developmentProcess: [
      'Designed responsive UI components following modern food application design patterns.',
      'Integrated Firebase Auth and Google credential workflows.',
      'Implemented geolocation service abstractions with permission guards.',
      'Connected REST APIs with custom deserializers and Provider listeners.',
    ],
    resultsAndStatus:
      'Complete feature set implemented with operational authentication, map integration, and interactive cart workflows.',
    githubUrl: 'https://github.com/karimAbdelaty111',
    image: '/assets/ofood1.jpeg',
    placeholderBadge: 'Full-Featured Mobile App',
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
    id: 'proj-3',
    slug: 'cairo-metro-app',
    name: 'Cairo Metro App',
    category: 'Transit & Utilities',
    tagline: 'Smart Cairo Metro Navigation with Graph Traversal & Route Optimization',
    description:
      'A Flutter application focused on helping users navigate Cairo Metro routes and find suitable routes between stations using algorithmic pathfinding.',
    problem:
      'Metro navigation can become difficult when users need to determine the most suitable route between stations across multiple intersecting lines and transfer points.',
    solution:
      'Implemented route calculation logic and a user-friendly Flutter interface for navigating between metro stations. The project demonstrates practical use of algorithms and graph traversal concepts (BFS) in a mobile application.',
    keyFeatures: [
      'Interactive station selector with autocomplete search',
      'Graph-based shortest path route calculation using BFS (Breadth-First Search)',
      'Accurate transfer station detection across Cairo Metro lines',
      'Estimated travel time and station counter calculation',
      'Localization support (Arabic and English interfaces)',
      'Responsive, accessible mobile layout with visual line color indicators',
      'Real metro screenshots and interactive visual route display',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Graph Algorithms',
      'BFS',
      'Localization',
      'Responsive UI',
    ],
    architecture:
      'Decoupled algorithmic routing engine represented as an adjacency-list graph data structure, consumed by a reactive Flutter presentation layer.',
    challenges: [
      'Modeling multi-line transfer intersections accurately as graph nodes and calculating optimal transfer penalties.',
      'Creating an accessible, dual-language UI that renders smoothly on lower-end devices.',
    ],
    developmentProcess: [
      'Modeled Cairo Metro lines as an undirected weighted/unweighted graph.',
      'Implemented BFS algorithms in Dart for shortest-hop route pathfinding.',
      'Designed responsive UI screens featuring station timelines and line badges.',
      'Added internationalization and tested across various mobile screen densities.',
    ],
    resultsAndStatus:
      'Fully implemented and tested with real station data. Visual screenshots and assets documented in strict numerical sequence.',
    githubUrl: 'https://github.com/karimAbdelaty111',
    image: '/assets/splish metro 2.jpeg',
    placeholderBadge: 'Algorithms & Real Data',
    realGalleryImages: [
      '/assets/loading screen metro 1.jpeg',
      '/assets/splish metro 2.jpeg',
      '/assets/home metro 3.jpeg',
      '/assets/home metro 4.jpeg',
      '/assets/home metro 5.jpeg',
      '/assets/home metro 6.jpeg',
      '/assets/home metro 7.jpeg',
      '/assets/home metro 8.jpeg',
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
    realGalleryImages: ['/assets/san3a_splash.jpeg', '/assets/san3a_icon.jpeg'],
    featured: true,
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
    id: 'cert-1',
    title: 'Cross Platform Flutter Development',
    organization: 'Digital Egypt Pioneers Initiative (DEPI)',
    program: 'Ministry of Communications and Information Technology (MCIT)',
    track: 'Cross Platform Flutter Development',
    round: 'Round 5',
    status: 'In Progress',
    dateOrPeriod: '2025 - Present',
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
