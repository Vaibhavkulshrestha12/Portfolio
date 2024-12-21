import {
  SiReact, SiTypescript, SiNodedotjs, SiPython,
  SiDjango, SiPostgresql, SiMongodb, SiDocker,
  SiAmazon, SiKubernetes, SiTerraform
} from 'react-icons/si';

export const techStack = {
  Frontend: [
    { name: 'React', icon: SiReact, color: 'text-[#61DAFB]' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]' },
  ],
  Backend: [
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#339933]' },
    { name: 'Python', icon: SiPython, color: 'text-[#3776AB]' },
    { name: 'Django', icon: SiDjango, color: 'text-[#092E20]' },
  ],
  Database: [
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#336791]' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]' },
  ],
  DevOps: [
    { name: 'Docker', icon: SiDocker, color: 'text-[#2496ED]' },
    { name: 'AWS', icon: SiAmazon, color: 'text-[#FF9900]' },
    { name: 'Kubernetes', icon: SiKubernetes, color: 'text-[#326CE5]' },
    { name: 'Terraform', icon: SiTerraform, color: 'text-[#7B42BC]' },
  ],
};