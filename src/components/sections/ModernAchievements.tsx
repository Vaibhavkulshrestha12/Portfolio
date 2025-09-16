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
    description: "Qualified the first round of SIH with innovative solution",
    icon: Trophy,
    color: "#3b82f6",
    year: "2024"
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to major open source projects",
    icon: Star,
    color: "#22c55e",
    year: "Ongoing"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <SpotlightCard 
                key={achievement.title} 
                className="modern-card p-8 group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:animate-pulse"
                      style={{ 
                        background: `${achievement.color}20`,
                        border: `2px solid ${achievement.color}30`
                      }}
                    >
                      <Icon 
                        size={32} 
                        style={{ color: achievement.color }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                        {achievement.title}
                      </h3>
                      <span 
                        className="text-sm font-medium px-3 py-1 rounded-full"
                        style={{ 
                          background: 'var(--bg-tertiary)', 
                          color: 'var(--accent-primary)'
                        }}
                      >
                        {achievement.year}
                      </span>
                    </div>
                    <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
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