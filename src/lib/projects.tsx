import { 
  NextJs, 
  TailwindCSS, 
  TypeScript, 
  Firebase,
  React as ReactIcon,
  NodeJs,
  PostgreSQL,
  ShadcnUI,
  Python,
  AWS,
  Terraform
} from 'developer-icons';
import { SiEthereum } from 'react-icons/si';

export const allProjects = [
  {
    title: "Eastore",
    description: "Decentralized file storage platform with Web3 wallet authentication, hierarchical folder system, real-time file operations, and advanced search with optimized UX.",
    role: "Full-Stack Developer — Built file management system with drag-and-drop operations, recursive folder hierarchy, backend-powered cross-folder search with 3-tier relevance ranking, draggable upload/download queue handler, interactive product tour with branching logic, on-chain data viewer (Raw Files) with CID/dataset/SP info via Synapse SDK, file preview gallery, and session key management. Architected landing/drive separation for optimized loading performance.",
    image: "./images/eastore.png",
    technologies: [
      { name: "Next.js", icon: NextJs },
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: TypeScript },
      { name: "Node.js", icon: NodeJs },
      { name: "PostgreSQL", icon: PostgreSQL },
      { name: "Blockchain", icon: SiEthereum },
      { name: "Shadcn UI", icon: ShadcnUI }
    ],
    github: "It is a private repo",
    live: "https://eastore.xyz",
    status: "All Systems Operational",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    isPrivate: true,
  },
  {
    title: "Pentaomnia",
    description: "Full-stack marketing and events website for Bihar-based startup featuring interactive carousels, image sliders, and media-heavy sections.",
    role: "Frontend Developer — Built Next.js frontend with component-driven architecture, implemented interactive event carousels and image sliders, optimized rendering and asset handling to reduce cumulative layout shift, and managed deployment with static asset delivery on Hostinger.",
    image: "./images/page.png",
    technologies: [
      { name: "Next.js", icon: NextJs },
      { name: "Tailwind CSS", icon: TailwindCSS },
      { name: "TypeScript", icon: TypeScript },
      { name: "Shadcn UI", icon: ShadcnUI }
    ],
    github: "https://github.com/Vaibhavkulshrestha12/PentaOmnia-V2.0",
    live: "https://pentaomnia.com",
    status: "All Systems Operational",
    gradient: "from-pink-500 via-purple-500 to-indigo-600",
    isPrivate: false,
  },
  {
    title: "PashuDrishti",
    description: "AI-powered indian cattle breed recognition and Atc scoring platform with Farm and livestock management accesibilities and features.",
    role: "Full-Stack Developer — Developed AI-powered cattle breed recognition and ATC scoring system and frontend of the app and backend. Implemented image upload, real-time breed identification, ATC scoring, face identification lock , native geo-location based cattle suggestions and farm management features.",
    image: "./images/PashuDrishti.gif",
    technologies: [
      { name: "TypeScript", icon: TypeScript },
      { name: "Tailwind CSS", icon: TailwindCSS },
      { name: "Firebase", icon: Firebase },
      { name: "Python", icon: Python }
    ],
    github: "https://github.com/Vaibhavkulshrestha12/SIH-",
    live: "https://pashudrishti-sih.vercel.app/",
    status: "All Systems Operational",
    gradient: "from-cyan-500 via-blue-500 to-purple-600",
    isPrivate: false,
  },
  {
    title: "WriterSpace",
    description: "Simple blogging app build for individuals to share their thoughts and emotions , contains it's own text editor and social features to interact with and magic cursor for better user experience.",
    role: "As Full-Stack Developer, built frontend with custom hooks, modular components, context-based theming, and magic cursor (shadcn component). Developed backend with Firebase for authentication and real-time data storage. Implemented rich content editing, social features (likes, shares, reactions), admin tools, and mobile-first accessibility.(coding + vibe coding)",
    image: "./writerspace.png",
    technologies: [
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: TypeScript },
      { name: "Firebase", icon: Firebase },
      { name: "Tailwind CSS", icon: TailwindCSS },
      { name: "Shadcn UI", icon: ShadcnUI }
    ],
    github: "https://github.com/Vaibhavkulshrestha12/WriterSpace",
    live: "https://writerspace.vercel.app",
    status: "All Systems Operational",
    gradient: "from-orange-500 via-pink-500 to-rose-600",
    isPrivate: false,
  },
  {
    title: "Journal",
    description: "A high-performance blogging platform designed for developers and technical writers who want a clean, fast, and modern writing environment. Features global edge caching and instant revalidation.",
    role: "Full-Stack Developer — Built a responsive edge-caching platform using Next.js 15 App Router, PostgreSQL via AWS RDS, and AWS S3 for media storage. Implemented secure admin access with AWS Cognito, a custom Markdown editor, and real-time metrics dashboard.",
    image: "./images/journal.png",
    technologies: [
      { name: "Next.js", icon: NextJs },
      { name: "TypeScript", icon: TypeScript },
      { name: "Tailwind CSS", icon: TailwindCSS },
      { name: "PostgreSQL", icon: PostgreSQL },
      { name: "AWS", icon: AWS },
      { name: "Terraform", icon: Terraform }
    ],
    github: "https://github.com/Vaibhavkulshrestha12/Journal",
    live: "https://myownjournal.vercel.app/",
    status: "All Systems Operational",
    gradient: "from-violet-500 via-fuchsia-500 to-indigo-600",
    isPrivate: false,
  }
];
