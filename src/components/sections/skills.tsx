import { AnimatedText } from "../ui/animated-text";
import { MovingBorder } from "../ui/moving-border";

const skills = [
  {
    category: "Frontend",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Python", "Django", "PostgreSQL", "MongoDB"],
  },
  {
    category: "DevOps",
    technologies: ["Docker", "AWS", "CI/CD", "Kubernetes", "Terraform"],
  },
];

export const Skills = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-7xl mx-auto">
        <AnimatedText
          text="Technical Expertise"
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <MovingBorder key={skill.category}>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.technologies.map((tech) => (
                    <li key={tech} className="text-gray-400">{tech}</li>
                  ))}
                </ul>
              </div>
            </MovingBorder>
          ))}
        </div>
      </div>
    </section>
  );
};