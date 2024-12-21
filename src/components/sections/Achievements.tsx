import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal } from 'lucide-react';

const achievements = [
  {
    title: "Best Developer Award",
    description: "Recognized for exceptional contributions",
    icon: Trophy,
    color: "text-yellow-500"
  },
  {
    title: "100+ Projects Completed",
    description: "Successfully delivered projects",
    icon: Star,
    color: "text-blue-500"
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to major projects",
    icon: Award,
    color: "text-green-500"
  },
  {
    title: "Tech Speaker",
    description: "Spoke at 20+ conferences",
    icon: Medal,
    color: "text-purple-500"
  }
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">
          Achievements
        </h2>
        
        <div className="relative">
          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 rounded-full bg-violet-500/20 flex items-center justify-center">
              <Trophy className="w-10 h-10 text-violet-500" />
            </div>
          </div>
          
          {/* Orbiting Achievements */}
          {achievements.map((achievement, index) => {
            const angle = (index * 360) / achievements.length;
            const Icon = achievement.icon;
            
            return (
              <motion.div
                key={achievement.title}
                className="absolute left-1/2 top-1/2"
                animate={{
                  rotate: [angle, angle + 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  width: '300px',
                  height: '300px',
                  marginLeft: '-150px',
                  marginTop: '-150px',
                }}
              >
                <div
                  className="absolute bg-white/10 backdrop-blur-lg rounded-lg p-4 w-48 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform dark:bg-black/30"
                  style={{
                    left: '50%',
                    top: '0',
                  }}
                >
                  <Icon className={`w-6 h-6 ${achievement.color} mb-2`} />
                  <h3 className="font-semibold mb-1 dark:text-white">{achievement.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{achievement.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};