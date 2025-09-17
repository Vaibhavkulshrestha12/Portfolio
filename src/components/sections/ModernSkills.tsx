import { SpotlightCard } from "../ui/spotlight";
import { techStack } from "./TechStack";
import { useState, useEffect, useRef } from "react";

export const ModernSkills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Handle scroll-based card merging animation
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Animation starts when section is 50% visible
      const sectionCenter = sectionRect.top + sectionRect.height / 2;
      const trigger = windowHeight / 2;
      
      if (sectionCenter < trigger && sectionRect.bottom > 0) {
        // Calculate progress based on how far the section center has moved past the trigger
        const distancePastTrigger = Math.max(0, trigger - sectionCenter);
        const progress = Math.min(1, distancePastTrigger / 300); // Complete animation over 300px
        
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate card transforms based on scroll progress
  const getCardTransform = (index: number) => {
    if (scrollProgress === 0) {
      // Original position - no transforms, properly separated
      return {
        transform: 'none',
        zIndex: 1,
        opacity: 1
      };
    }
    
    // Animation values for deck stacking - center all cards and stack them
    const centerIndex = Math.floor(3 / 2); // Card 1 (middle card)
    
    // Move all cards to center position
    const moveToCenter = (centerIndex - index) * -100 * scrollProgress; // Horizontal centering
    const stackOffset = index * scrollProgress * 30; // Vertical stacking
    const rotationAngle = (index - centerIndex) * scrollProgress * 20; // Rotation based on distance from center
    const scaleDown = 1 - (scrollProgress * 0.1); // All cards scale down equally
    const fadeCards = index === 0 ? 1 : Math.max(0.5, 1 - (scrollProgress * 0.4)); // First card stays visible
    
    return {
      transform: `
        translateX(${moveToCenter}px) 
        translateY(${stackOffset}px) 
        rotate(${rotationAngle}deg) 
        scale(${scaleDown})
      `,
      zIndex: 10 + index, // Stack in order
      opacity: fadeCards
    };
  };

  return (
    <section ref={sectionRef} className="section-padding relative" id="skills">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-element">
          <div className="inline-flex items-center px-4 py-2 rounded-full border mb-6"
               style={{ 
                 background: 'var(--bg-secondary)', 
                 borderColor: 'var(--accent-primary)',
                 color: 'var(--accent-primary)' 
               }}>
            <span className="text-sm font-semibold tracking-wider uppercase">Technical Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span style={{ color: 'var(--text-primary)' }}>Skills &</span>
            <span className="text-gradient"> Technologies</span>
          </h2>
          
          <p className="text-lg max-w-2xl mx-auto leading-relaxed mb-16"
             style={{ color: 'var(--text-secondary)' }}>
            Scroll down to see the skill cards merge into a deck
          </p>
        </div>

        {/* Skills Cards with Scroll Animation */}
        <div className="relative max-w-6xl mx-auto mb-16 overflow-visible">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <div
                key={category}
                className="relative transition-all duration-700 ease-out"
                style={{
                  ...getCardTransform(index),
                  transformOrigin: 'center center'
                }}
              >
                <SpotlightCard className="modern-card p-6 group hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-900 w-full">
                  {/* Category Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2 text-gradient">
                      {category}
                    </h3>
                    <div className="w-12 h-1 mx-auto rounded-full" 
                         style={{ background: 'var(--accent-primary)' }} />
                  </div>

                {/* Technologies List */}
                <div className="space-y-3">
                  {(technologies as any[]).map(({ name, icon: Icon, color }: any, techIndex: number) => (
                    <div
                      key={name}
                      className={`
                        flex items-center gap-4 p-3 rounded-xl cursor-pointer
                        transition-all duration-300 hover:scale-105
                        ${hoveredSkill === `${category}-${name}` ? 'shadow-lg' : ''}
                      `}
                      style={{
                        background: hoveredSkill === `${category}-${name}` 
                          ? 'var(--gradient-primary)' 
                          : 'var(--bg-secondary)',
                        transform: hoveredSkill === `${category}-${name}` 
                          ? 'translateX(8px)' 
                          : 'translateX(0)',
                        animationDelay: `${techIndex * 100}ms`
                      }}
                      onMouseEnter={() => setHoveredSkill(`${category}-${name}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Icon Container */}
                      <div 
                        className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300"
                        style={{
                          background: hoveredSkill === `${category}-${name}` 
                            ? 'rgba(255,255,255,0.2)' 
                            : 'var(--bg-tertiary)',
                          transform: hoveredSkill === `${category}-${name}` 
                            ? 'rotate(360deg) scale(1.1)' 
                            : 'rotate(0deg) scale(1)'
                        }}
                      >
                        <Icon 
                          className={`w-5 h-5 transition-colors duration-300 ${
                            hoveredSkill === `${category}-${name}` ? 'text-white' : color
                          }`} 
                        />
                      </div>

                      {/* Skill Name */}
                      <span 
                        className="font-medium text-sm flex-1 transition-colors duration-300"
                        style={{ 
                          color: hoveredSkill === `${category}-${name}` 
                            ? 'white' 
                            : 'var(--text-primary)' 
                        }}
                      >
                        {name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Category Summary */}
                <div className="mt-6 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <div className="text-sm">
                    <span style={{ color: 'var(--text-muted)' }}>
                      {category === 'Frontend' && 'UI/UX Development'}
                      {category === 'Backend' && 'Server & Database'}
                      {category === 'Tech known' && 'Tools & Platforms'}
                    </span>
                  </div>
                </div>

                  {/* Card Index Indicator */}
                  <div 
                    className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: 'var(--accent-primary)',
                      color: 'white',
                      opacity: 0.7
                    }}
                  >
                    {index + 1}
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>        {/* All Skills Overview */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              All Technologies at a Glance
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(techStack).flatMap(([category, technologies]) =>
              (technologies as any[]).map(({ name, icon: Icon, color }: any, index: number) => (
                <div
                  key={`${category}-${name}`}
                  className="group relative flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    background: 'var(--bg-secondary)',
                    borderColor: 'var(--border)',
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <Icon className={`w-4 h-4 transition-all duration-300 group-hover:animate-spin ${color}`} />
                  <span 
                    className="text-sm font-medium transition-colors duration-300"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {name}
                  </span>
                  
                  {/* Tooltip */}
                  <div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-xs whitespace-nowrap transition-all duration-300 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2"
                    style={{
                      background: 'var(--text-primary)',
                      color: 'var(--bg-primary)'
                    }}
                  >
                    {category}
                    <div 
                      className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0"
                      style={{
                        borderLeft: '4px solid transparent',
                        borderRight: '4px solid transparent',
                        borderTop: '4px solid var(--text-primary)'
                      }}
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};