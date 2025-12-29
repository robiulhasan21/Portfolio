import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import icon from '../assets/icon.png';
import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
    icon,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-purple'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-purple'
    }
  ];

  export const skillsData = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", color: "bg-[#2563eb]" },
      { name: "C++", color: "bg-[#1e40af]" },
      { name: "C", color: "bg-[#4b5563]" },
      { name: "JavaScript", color: "bg-[#eab308]" },
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "Node.js", color: "bg-[#16a34a]" },
      { name: "Django REST Framework (DRF)", color: "bg-[#9333ea]" },
      { name: "Pandas", color: "bg-[#84cc16]" },
      { name: "Django", color: "bg-[#047857]" },
      { name: "Matplotlib", color: "bg-[#0891b2]" },
    ]
  },
  {
    category: "Front-End",
    items: [
      { name: "React", color: "bg-[#ea580c]" },
      { name: "CSS3", color: "bg-[#2563eb]" },
      { name: "HTML5", color: "bg-[#be123c]" },
      { name: "Tailwind CSS", color: "bg-[#7c3aed]" },
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", color: "bg-[#166534]" },
      { name: "MySQL", color: "bg-[#3b82f6]" },
      { name: "SQLite", color: "bg-[#60a5fa]" },
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "VS Code", color: "bg-[#8b5cf6]" },
      { name: "Git", color: "bg-[#c2410c]" },
      { name: "GitHub Actions", color: "bg-[#a855f7]" },
      { name: "Hostinger", color: "bg-[#ea580c]" },
      { name: "cPanel", color: "bg-[#059669]" },
      { name: "Google Colab", color: "bg-[#dc2626]" },
      { name: "Kaggle Notebook", color: "bg-[#d946ef]" },
      { name: "Linux (Ubuntu)", color: "bg-[#22c55e]" },
      { name: "MS Office 2021", color: "bg-[#ea580c]" },
      { name: "Canva", color: "bg-[#e11d48]" },
      { name: "WordPress", color: "bg-[#ea580c]" },
      { name: "Overleaf (LaTeX)", color: "bg-[#db2777]" },
    ]
  },
  {
    category: "Hardware & Networking",
    items: [
      { name: "TinkerCad (Circuit Design)", color: "bg-[#0d9488]" },
      { name: "Proteus (Simulation)", color: "bg-[#4f46e5]" },
      { name: "Cisco Packet Tracer", color: "bg-[#0891b2]" },
      { name: "8086 Emulator", color: "bg-[#059669]" },
    ]
  },
  {
    category: "Concepts & Methodologies",
    items: [
      { name: "REST APIs", color: "bg-[#0d9488]" },
      { name: "CI/CD", color: "bg-[#dc2626]" },
      { name: "Real-Time Systems", color: "bg-[#9333ea]" },
      { name: "Data Structures", color: "bg-[#22c55e]" },
      { name: "Algorithms", color: "bg-[#d946ef]" },
      { name: "OOP", color: "bg-[#9333ea]" },
      { name: "Operating Systems", color: "bg-[#ef4444]" },
      { name: "SDLC", color: "bg-[#d97706]" },
      { name: "Software Engineering", color: "bg-[#22c55e]" },
      { name: "Networking", color: "bg-[#d946ef]" },
      { name: "Compiler Design", color: "bg-[#0d9488]" },
    ]
  }
];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Vue.js', 'Angular', 'TypeScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Django', 'Laravel']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
  },
  {
    title: 'Mobile Development',
    icon: FaMobileAlt,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['React Native', 'Flutter', 'Ionic', 'Swift']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Webpack', 'Figma', 'Jest']
  }
];



export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB","Tailwind CSS", "Stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "https://stylewearbd.vercel.app",
    code: "https://github.com/robiulhasan21/E-Commerce",
  },
  {
    title: "Movie Ticket Booking App",
    description: "A productivity application with drag-and-drop functionality and real-time updates.",
    image: projectImg2,
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "WebSockets"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaDatabase],
    demo: "https://movienestbd.netlify.app",
    code: "https://github.com/robiulhasan21/MovieTicket",
  },
  {
    title: "Space Dynamic",
    description: "Space Dynamic is a digital marketing HTML5 template based on Bootstrap 5 beta 2.",
    image: projectImg3,
    tech: ["React Native", "GraphQL", "MySQL", "Chart.js"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Chat App",
    description: "A real-time chat application with group messaging, emojis, and file sharing.",
    image: projectImg5,
    tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
  },
  {
    title: "AI Image Generator",
    description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];



