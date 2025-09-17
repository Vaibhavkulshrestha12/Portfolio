import { 
  SiReact,
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiPostcss,
  SiNodedotjs,
  SiPython,
  SiGo,
  SiFirebase,
  SiMongodb,
  SiGit,
  SiCplusplus,
  SiPostman,
  SiVercel,
  SiJenkins
} from 'react-icons/si';
import { ComponentType } from 'react';

export interface TechItem {
  name: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
}

export interface TechStack {
  [category: string]: TechItem[];
}

export const techStack: TechStack = {
  'Frontend': [
    { name: 'React', icon: SiReact, color: 'text-blue-500' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-800 dark:text-white' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-500' },
    { name: 'PostCSS', icon: SiPostcss, color: 'text-red-600' }
  ],
  'Backend': [
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
    { name: 'Python', icon: SiPython, color: 'text-yellow-500' },
    { name: 'Go', icon: SiGo, color: 'text-blue-500' },
    { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' }
  ],
  'Tech known': [
    { name: 'Git', icon: SiGit, color: 'text-orange-600' },
    { name: 'C++', icon: SiCplusplus, color: 'text-blue-600' },
    { name: 'Postman', icon: SiPostman, color: 'text-orange-600' },
    { name: 'Vercel', icon: SiVercel, color: 'text-gray-800 dark:text-white' },
    { name: 'Jenkins', icon: SiJenkins, color: 'text-blue-600' }
  ]
};