import { techStack } from "./TechStack";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export const ModernSkills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const categories = Object.entries(techStack);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden" id="skills">
      <div className="container-custom max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="mb-12 md:mb-16 border-b pb-8"
          style={{ borderColor: 'var(--border)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3"
                style={{ 
                  color: 'var(--text-primary)',
                  fontFamily: "'Fraunces', serif"
                }}
              >
                Skills & Technologies
              </h2>
              <p 
                className="text-base md:text-lg"
                style={{ 
                  color: 'var(--text-secondary)',
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                Building modern applications with carefully selected tools
              </p>
            </div>
            <div 
              className="text-sm font-mono tracking-wider uppercase"
              style={{ 
                color: 'var(--text-muted)',
                fontFamily: "'IBM Plex Mono', monospace"
              }}
            >
              {categories.reduce((acc, [_, techs]) => acc + techs.length, 0)} Technologies
            </div>
          </div>
        </motion.div>

        {/* Clean Linear Layout */}
        <div className="space-y-12">
          {categories.map(([category, technologies], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.6, 
                delay: categoryIndex * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {/* Category Header */}
              <div className="flex items-baseline gap-6 mb-6 border-b pb-4" style={{ borderColor: 'var(--border)' }}>
                <h3 
                  className="text-2xl md:text-3xl font-bold"
                  style={{ 
                    color: 'var(--text-primary)',
                    fontFamily: "'Fraunces', serif"
                  }}
                >
                  {category}
                </h3>
                <span 
                  className="text-xs uppercase tracking-widest"
                  style={{ 
                    color: 'var(--text-muted)',
                    fontFamily: "'IBM Plex Mono', monospace",
                    letterSpacing: '0.15em'
                  }}
                >
                  {category === 'Frontend' && 'Interface Development'}
                  {category === 'Backend' && 'Server Architecture'}
                  {category === 'Tech known' && 'Tools & Infrastructure'}
                </span>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {(technologies as any[]).map(({ name, icon: Icon }: any, techIndex: number) => {
                  const isHovered = hoveredSkill === `${category}-${name}`;

                  return (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.15 + techIndex * 0.05,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      onMouseEnter={() => setHoveredSkill(`${category}-${name}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="group cursor-default"
                    >
                      <div 
                        className="p-4 border transition-all duration-200"
                        style={{
                          background: 'var(--bg-secondary)',
                          borderColor: isHovered ? 'var(--accent-primary)' : 'var(--border)',
                          transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                        }}
                      >
                        <div className="flex flex-col items-center text-center gap-3">
                          <Icon 
                            size={28}
                            className="transition-all duration-200"
                            style={{
                              opacity: isHovered ? 1 : 0.7,
                              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                            }}
                          />
                          <span 
                            className="text-sm font-medium transition-colors duration-200"
                            style={{ 
                              color: isHovered ? 'var(--text-primary)' : 'var(--text-secondary)',
                              fontFamily: "'Inter', sans-serif"
                            }}
                          >
                            {name}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};