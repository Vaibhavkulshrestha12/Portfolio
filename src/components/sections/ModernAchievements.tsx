import { SpotlightCard } from "../ui/spotlight";
import { Award, Trophy, Star, Medal } from "lucide-react";

const achievements = [
  {
    title: "Tech Speaker",
    description: "Spoke at 4+ tech events sharing knowledge and insights",
    icon: Medal,
    color: "#f59e0b",
    year: "2024"
  },
  {
    title: "Smart India Hackathon",
    description: "State qualified internals and won 3 internal hackathon",
    icon: Trophy,
    color: "#3b82f6",
    year: "2024"
  },
  {
    title: "MSME Hackathon Winner",
    description: "Winner of MSME-funded hackathon with innovative agri-tech solution",
    icon: Star,
    color: "#22c55e",
    year: "2024"
  },
  {
    title: "Science Competition Winner",
    description: "Winner of All India Science Competition with waste water treatment prototype",
    icon: Award,
    color: "#8b5cf6",
    year: "2023"
  }
];

export const ModernAchievements = () => {
  return (
    <section className="section-padding" id="achievements">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-element">
          <div className="inline-flex items-center px-4 py-2 rounded-full border mb-6"
               style={{ 
                 background: 'var(--bg-secondary)', 
                 borderColor: 'var(--accent-primary)',
                 color: 'var(--accent-primary)' 
               }}>
            <span className="text-sm font-semibold tracking-wider uppercase">Recognition</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span style={{ color: 'var(--text-primary)' }}>Key</span>
            <span className="text-gradient"> Achievements</span>
          </h2>
          
          <p className="text-lg max-w-2xl mx-auto leading-relaxed"
             style={{ color: 'var(--text-secondary)' }}>
            Milestones that reflect my dedication to learning, contributing, and making a difference in tech
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <SpotlightCard 
                key={achievement.title} 
                className="modern-card p-6 sm:p-8 group bg-black/30 border border-orange-500/30 backdrop-blur-md shadow-2xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-300 hover:border-orange-500/50 lg:hover:scale-105"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div 
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center group-hover:animate-pulse transition-all duration-300 shadow-lg"
                      style={{ 
                        background: `${achievement.color}20`,
                        border: `2px solid ${achievement.color}40`,
                        boxShadow: `0 8px 32px ${achievement.color}20`
                      }}
                    >
                      <Icon 
                        size={28}
                        className="sm:w-8 sm:h-8"
                        style={{ color: achievement.color }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow text-center sm:text-left w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-sm break-words">
                        {achievement.title}
                      </h3>
                      <span 
                        className="text-sm font-medium px-3 py-1 rounded-full bg-orange-500/20 text-orange-200 border border-orange-500/30 backdrop-blur-sm self-center sm:self-auto flex-shrink-0"
                      >
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed text-gray-300 drop-shadow-sm break-words hyphens-auto">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};