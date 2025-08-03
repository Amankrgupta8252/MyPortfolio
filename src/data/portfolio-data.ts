// Types
export interface Skill {
  name: string;
  icon: string;
  level?: number; // 0-100
  category?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  skills?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  date: string;
  slug: string;
  technologies?: string[];
  category?: string;
  demo?: string;
  github?: string;
  gallery?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
  slug: string;
}

// Data
export const personalInfo = {
  name: "Aman Gupta",
  title: "Full Stack Developer",
  email: "kramangupta8552@gmail.com",
  phone: "+91 825-233-9216",
  location: "Sasaram, Rohtas, Bihar",
  bio: "I'm a passionate Full Stack Developer with expertise in creating responsive and user-friendly web applications. I love solving complex problems and turning ideas into reality through clean and efficient code.",
  longBio: "with a strong foundation in Java, ReactJS, and full-stack development. Passionate about solving complex problems and building scalable applications. Seeking an opportunity to contribute mytechnical skills and innovative mindset to a dynamic organization while continuously learning and growing in the field of software development. I'm constantly learning and exploring new technologies to stay at the cutting edge of web development.",
  avatarUrl: "/images/AmanGupta.jpg",
  resumeUrl: "/assets/resume.pdf",
};

export const skills: Skill[] = [
  { name: "React", icon: "react", level: 70, category: "frontend" },
  { name: "JavaScript", icon: "javascript", level: 90, category: "languages" },
  { name: "Java", icon: "java", level: 75, category: "languages" },
  { name: "HTML5", icon: "html", level: 95, category: "frontend" },
  { name: "CSS3/SASS", icon: "css", level: 90, category: "frontend" },
  { name: "Node.js", icon: "nodejs", level: 80, category: "backend" },
  { name: "Express", icon: "express", level: 75, category: "backend" },
  { name: "MongoDB", icon: "mongodb", level: 70, category: "database" },
  { name: "PostgreSQL", icon: "postgresql", level: 75, category: "database" },
  { name: "Git", icon: "git", level: 75, category: "tools" },
  { name: "Tailwind CSS", icon: "tailwind", level: 90, category: "frontend" },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Engineering",
    institution: "RK University",
    location: "Rajkot, Gujrat",
    startDate: "2022",
    endDate: "2026",
    description: "Focus on software development and computer architecture. Graduated with honors.",
  },
  {
    degree: "Intermediate Science (BSEB)",
    institution: "R.K.S College ",
    location: "Dalmianagar, Rohtas, Bihar ",
    startDate: "2021",
    endDate: "2022",
    // description: "Focus on software development and computer architecture. Graduated with honors.",
  },
  {
    degree: "Matric Board (BSEB)",
    institution: "S.H.U. High School",
    location: "Meari Bazar, Rohtas, Bihar  ",
    startDate: "2019",
    endDate: "2020",
    // description: "Focus on software development and computer architecture. Graduated with honors.",
  },
];

export const experience: Experience[] = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    startDate: "2021",
    endDate: "Present",
    description: "Lead development of multiple web applications using React, Node.js, and TypeScript. Implemented CI/CD pipelines and improved application performance by 40%.",
    skills: ["React", "Node.js", "TypeScript", "Docker", "AWS"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions",
    location: "New York, NY",
    startDate: "2019",
    endDate: "2021",
    description: "Developed responsive and accessible user interfaces for enterprise clients. Collaborated with UX designers to implement pixel-perfect designs.",
    skills: ["React", "JavaScript", "CSS", "HTML", "Redux"],
  },
  {
    title: "Web Developer Intern",
    company: "StartUp Vision",
    location: "Boston, MA",
    startDate: "2018",
    endDate: "2019",
    description: "Assisted in developing frontend features for a SaaS product. Participated in code reviews and agile development process.",
    skills: ["JavaScript", "HTML", "CSS", "jQuery"],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Hotel Management System",
    description: "A full-featured online store with product catalog, shopping cart, user authentication, and payment processing.",
    image: "/assets/Projects/HotelBooking.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    githubUrl: "https://github.com/Amankrgupta8252/HotelManagement",
    liveUrl: "https://ecommerce-demo.example.com",
    github: "https://github.com/Amankrgupta8252/HotelManagement",
    demo: "https://ecommerce-demo.example.com",
    featured: true,
    date: "2023-04-15",
    slug: "ecommerce-platform",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "Redux", "JWT"],
    category: "Web Application",
    gallery: [
      "/assets/Projects/HotelBooking_1.jpg",
      "/assets/Projects/HotelBooking_2.jpg",
      "/assets/Projects/HotelBooking_3.jpg",
      "/assets/Projects/HotelBooking_4.jpg"
    ]
  },
  {
    id: "2",
    title: "study companion App",
    description: "A collaborative task manager with real-time updates, drag-and-drop interface, and team collaboration features.",
    image: "/assets/Projects/OIP.jpg",
    tags: ["React", "TypeScript", "Material UI"],
    githubUrl: "https://github.com/Amankrgupta8252/Study-Companion",
    liveUrl: "https://task-app.example.com",
    github: "https://github.com/Amankrgupta8252/Study-Companion",
    demo: "https://task-app.example.com",
    featured: true,
    date: "2022-11-20",
    slug: "task-management-app",
    technologies: ["React", "TypeScript", "Material UI", "React DnD"],
    category: "Web Application",
    gallery: [
      "/assets/Projects/studycompanion_1.png",
      "/assets/Projects/studycompanion_2.png"
    ]
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "A weather forecasting application with interactive maps, location search, and historical data visualization.",
    image: "/images/WeatherDashboard.jpg",
    tags: ["React", "Chart.js", "OpenWeather API", "Mapbox"],
    githubUrl: "https://github.com/username/weather-dashboard",
    liveUrl: "https://weather.example.com",
    github: "https://github.com/username/weather-dashboard",
    demo: "https://weather.example.com",
    featured: false,
    date: "2022-07-10",
    slug: "weather-dashboard",
    technologies: ["React", "Chart.js", "OpenWeather API", "Mapbox", "Axios"],
    category: "Data Visualization"
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and experience with a modern and responsive design.",
    image: "/assets/Projects/Portfolio-ADSL-Social.png",
    tags: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/Amankrgupta8252/MyPortfolio",
    liveUrl: "https://portfolio.example.com",
    github: "https://github.com/Amankrgupta8252/MyPortfolio",
    demo: "https://portfolio.example.com",
    featured: true,
    date: "03/08/2025",
    slug: "portfolio-website",
    technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    category: "Personal Website"
  },
  {
    id: "5",
    title: "Urban Shoes",
    description: "A content management system for creating and publishing blog posts with markdown support and SEO optimization.",
    image: "/assets/Projects/urban.png",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/username/blog-platform",
    liveUrl: "https://blog.example.com",
    github: "https://github.com/username/blog-platform",
    demo: "https://blog.example.com",
    featured: false,
    date: "2023-02-18",
    slug: "blog-platform",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "MDX"],
    category: "CMS"
  },
  {
    id: "6",
    title: "Fitness Tracker",
    description: "A mobile-first web application for tracking workouts, progress, and fitness goals with data visualization.",
    image: "/assets/Projects/fitness-tracker.jpg",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/username/fitness-tracker",
    liveUrl: "https://fitness.example.com",
    github: "https://github.com/username/fitness-tracker",
    demo: "https://fitness.example.com",
    featured: false,
    date: "2022-09-30",
    slug: "fitness-tracker",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "Express"],
    category: "Health & Fitness"
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "Learn how to create beautiful and responsive user interfaces quickly using Tailwind CSS utility classes.",
    image: "/assets/Tailwind_CSS.png",
    date: "2023-06-15",
    author: "Aman Gupta",
    tags: ["CSS", "Tailwind", "Frontend"],
    slug: "building-responsive-uis-with-tailwind",
  },
  {
    id: "2",
    title: "State Management in React with Context API",
    excerpt: "Explore how to effectively manage application state using React's built-in Context API.",
    image: "/assets/React.jpg",
    date: "2023-05-22",
    author: "Aman Gupta",
    tags: ["React", "JavaScript", "State Management"],
    slug: "state-management-in-react-with-context-api",
  },
  {
    id: "3",
    title: "Introduction to JavaScript Developers",
    excerpt: "A beginner's guide to TypeScript and how it can improve your JavaScript development workflow.",
    image: "/assets/introduction-javascript-cover.jpg",
    date: "2025-04-10",
    author: "Aman Gupta",
    tags: ["Basic", "Promise", "Fatch API", "Async Function", "Web Development"],
    slug: "introduction-to-javascript-developers",
  },
  {
    id: "4",
    title: "Loot-code Problem solving with java",
    excerpt: "Learn how to implement beautiful and performant animations in your React applications using Framer Motion.",
    image: "/assets/java.png",
    date: "2023-03-05",
    author: "Aman Gupta",
    tags: ["Array", "String", "Tree", "Search"],
    slug: "creating-smooth-animations-with-framer-motion",
  },
];