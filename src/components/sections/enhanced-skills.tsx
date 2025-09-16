import { memo } from 'react';
import { techStack } from "../sections/TechStack";

interface AnimatedTechCardProps {
  category: string;
  technologies: Array<{
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
  }>;
  index: number;
}

const AnimatedTechCard = memo(({ category, technologies }: Omit<AnimatedTechCardProps, 'index'>) => {
  // All animations disabled for testing
  return (
    <div className="relative group perspective-1000">
      <div className="relative bg-surface-50/80 dark:bg-surface-900/80 backdrop-blur-sm border border-surface-200 dark:border-surface-700 rounded-xl p-6 shadow-lg transition-all duration-300 preserve-3d">
        {/* Glowing border effect - DISABLED */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-primary-600/20 to-primary-700/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-50 mb-4 text-center">
            {category}
          </h3>
          
          <ul className="space-y-3">
            {technologies.map(({ name, icon: Icon, color }) => (
              <li
                key={name}
                className="flex items-center gap-3 text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-50 transition-colors"
              >
                <div>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <span className="font-medium">{name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Floating particles for each card - DISABLED */}
        {/* ... particles disabled ... */}
      </div>
    </div>
  );
});

export const EnhancedSkills = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="skills">
      {/* Background Wire Waves - DISABLED FOR TESTING */}
      {/* 
      <div className="absolute inset-0 opacity-10">
        ... all background animations disabled ...
      </div>
      */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div>
          <div className="text-3xl md:text-4xl font-bold text-surface-900 dark:text-surface-50 mb-16 text-center">
            Technical Expertise
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(techStack).map(([category, technologies]) => (
            <AnimatedTechCard
              key={category}
              category={category}
              technologies={technologies}
            />
          ))}
        </div>

        {/* Central connecting animation - DISABLED */}
        {/* ... central animation disabled ... */}
      </div>
    </section>
  );
};