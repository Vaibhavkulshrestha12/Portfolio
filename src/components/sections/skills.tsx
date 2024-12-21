import { AnimatedText } from "../ui/animated-text";
import { MovingBorder } from "../ui/moving-border";
import { techStack } from "../sections/TechStack";

export const Skills = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-7xl mx-auto">
        <AnimatedText
          text="Technical Expertise"
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(techStack).map(([category, technologies]) => (
            <MovingBorder key={category}>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
                <ul className="space-y-2">
                  {technologies.map(({ name, icon: Icon, color }) => (
                    <li key={name} className="flex items-center gap-2 text-gray-400">
                      <Icon className={`w-5 h-5 ${color}`} />
                      <span>{name}</span>
                    </li>
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
