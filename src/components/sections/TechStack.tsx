import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiFirebase,
  SiGoland,
  SiMongodb,
  SiGit,
  SiCplusplus,
  SiPostman,
  SiJenkins,
  SiTailwindcss,
  SiPostcss,
} from "react-icons/si";
import { NextjsIcon } from "../icons/NextjsIcon";
import { VercelIcon } from "../icons/VercelIcon";

export const techStack = {
  Frontend: [
    { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "Next.js", icon: NextjsIcon, color: "text-[#000000] dark:text-white" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "Postcss", icon: SiPostcss, color: "text-[#DD3A0A]" },
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
    { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
    { name: "Go", icon: SiGoland, color: "text-[#00ADD8]" },
    { name: "Firebase", icon: SiFirebase, color: "text-[#FF6C37]" },
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  ],
  "Tech known": [
    { name: "Git", icon: SiGit, color: "text-[#F05032]" },
    { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
    { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
    { name: "Vercel", icon: VercelIcon, color: "text-[#000000] dark:text-white" },
    { name: "Jenkins", icon: SiJenkins, color: "text-[#D24939]" },
  ],
};