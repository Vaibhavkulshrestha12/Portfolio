import { 
  React,
  HTML5,
  NextJs,
  TailwindCSS,
  TypeScript,
  NodeJs,
  Python,
  Java,
  PostgreSQL ,
  MongoDB,
  Git,
  Docker,
  Postman,
  AWS,
  Jenkins
} from 'developer-icons';
import { ComponentType } from 'react';

export interface TechItem {
  name: string;
  icon: ComponentType<{ className?: string; size?: number }>;
  color: string;
}

export interface TechStack {
  [category: string]: TechItem[];
}

export const techStack: TechStack = {
  'Frontend': [
    { name: 'React', icon: React, color: 'text-blue-500' },
    { name: 'HTML', icon: HTML5, color: 'text-blue-600' },
    { name: 'Next.js', icon: NextJs, color: 'text-gray-800 dark:text-white' },
    { name: 'Tailwind CSS', icon: TailwindCSS, color: 'text-teal-500' },
    { name: 'TypeScript', icon: TypeScript, color: 'text-blue-600' },
  ],
  'Backend': [
    { name: 'Node.js', icon: NodeJs, color: 'text-green-600' },
    { name: 'Python', icon: Python, color: 'text-yellow-500' },
    { name: 'Java', icon: Java, color: 'text-blue-500' },
    { name: 'Firebase', icon:  PostgreSQL, color: 'text-yellow-500' },
    { name: 'MongoDB', icon: MongoDB, color: 'text-green-600' }
  ],
  'Tech known': [
    { name: 'Git', icon: Git, color: 'text-orange-600' },
    { name: 'Docker', icon: Docker, color: 'text-blue-600' },
    { name: 'Postman', icon: Postman, color: 'text-orange-600' },
    { name: 'AWS', icon: AWS, color: 'text-gray-800 dark:text-white' },
    { name: 'Jenkins', icon: Jenkins, color: 'text-blue-600' }
  ]
};