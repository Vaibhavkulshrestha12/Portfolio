import { Github, Globe, ArrowRight, Lock } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { allProjects } from "../../lib/projects";

export const ProjectsPage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-16 pb-16 min-h-screen">
      <section ref={sectionRef} className="section-padding relative overflow-hidden" id="all-projects">
        <div className="container-custom max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-center max-w-3xl mx-auto">
              <div 
                className="inline-flex items-center px-4 py-2 rounded-full border mb-6"
                style={{ 
                  background: 'var(--bg-secondary)', 
                  borderColor: 'var(--accent-primary)',
                  color: 'var(--accent-primary)' 
                }}
              >
                <span className="text-sm font-semibold tracking-wider uppercase">Open Source</span>
              </div>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
                style={{ 
                  fontFamily: "'Fraunces', serif"
                }}
              >
                <span style={{ color: 'var(--text-primary)' }}>All </span>
                <span className="text-gradient">Projects</span>
              </h1>
              <p 
                className="text-base md:text-lg"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                A collection of my development work, ranging from full-stack applications to decentralized platforms.
              </p>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {allProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group rounded-2xl overflow-hidden flex flex-col h-full"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {/* Browser Window Frame with Preview */}
                <div className="relative overflow-hidden p-4 pb-2">
                  {/* Browser Window Chrome */}
                  <div 
                    className="rounded-t-lg px-3 py-2 flex items-center gap-2 border-b"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div className="flex gap-1.5">
                      <div 
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: '#ff5f56' }}
                      />
                      <div 
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: '#ffbd2e' }}
                      />
                      <div 
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: '#27c93f' }}
                      />
                    </div>
                    <div 
                      className="flex-1 mx-2 px-2 py-0.5 rounded text-[10px] truncate"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: 'rgba(255, 255, 255, 0.4)',
                        fontFamily: "'IBM Plex Mono', monospace",
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      {project.live}
                    </div>
                  </div>
                  
                  {/* Image Container with Parallax */}
                  <div 
                    className="relative rounded-b-lg overflow-hidden"
                    style={{
                      transform: hoveredIndex === index ? 'perspective(1000px) rotateX(1deg) scale(1.01)' : 'perspective(1000px) rotateX(2deg)',
                      transition: 'transform 0.5s ease',
                      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    {/* Gradient Overlay */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 mix-blend-overlay z-10 transition-opacity duration-300`}
                      style={{
                        opacity: hoveredIndex === index ? 0.5 : 0.35,
                      }}
                    />
                    
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[16/10] object-cover"
                      style={{
                        transform: hoveredIndex === index ? 'scale(1.03) translateY(-3px)' : 'scale(1)',
                        transition: 'transform 0.7s ease',
                      }}
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1 flex flex-col p-4 lg:p-5 space-y-3">
                  {/* Title with Icon Buttons */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 
                      className="text-xl md:text-2xl font-bold"
                      style={{ 
                        color: 'white',
                        fontFamily: "'Fraunces', serif"
                      }}
                    >
                      {project.title}
                    </h3>
                    <div className="flex gap-1.5 flex-shrink-0">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg transition-all duration-200"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: 'rgba(255, 255, 255, 0.6)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                        }}
                      >
                        <Globe size={16} />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg transition-all duration-200 relative"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: 'rgba(255, 255, 255, 0.6)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                        }}
                      >
                        <Github size={16} />
                        {project.isPrivate && (
                          <div 
                            className="absolute -top-1 -right-1 rounded-full p-0.5"
                            style={{
                              background: 'rgba(0, 0, 0, 0.9)',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                            }}
                          >
                            <Lock size={8} className="text-yellow-400" />
                          </div>
                        )}
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p 
                    className="text-xs md:text-sm leading-relaxed"
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    {project.description}
                  </p>
                  
                  {/* Role (if exists) */}
                  {project.role && (
                    <div className="pt-1 flex-1">
                      <div 
                        className="text-[10px] uppercase tracking-widest mb-1.5"
                        style={{ 
                          color: 'rgba(255, 255, 255, 0.4)',
                          fontFamily: "'IBM Plex Mono', monospace",
                          letterSpacing: '0.12em'
                        }}
                      >
                        My Role
                      </div>
                      <p 
                        className="text-[11px] leading-relaxed line-clamp-3"
                        style={{ 
                          color: 'rgba(255, 255, 255, 0.5)',
                          fontFamily: "'Inter', sans-serif"
                        }}
                      >
                        {project.role}
                      </p>
                    </div>
                  )}

                  <div className="mt-auto">
                    {/* Technologies with Icons */}
                    <div className="pt-3">
                      <div 
                        className="text-[10px] uppercase tracking-widest mb-2"
                        style={{ 
                          color: 'rgba(255, 255, 255, 0.4)',
                          fontFamily: "'IBM Plex Mono', monospace",
                          letterSpacing: '0.12em'
                        }}
                      >
                        Technologies
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => {
                          const Icon = tech.icon;
                          return (
                            <div
                              key={tech.name}
                              className="transition-transform duration-200 hover:scale-110"
                              title={tech.name}
                            >
                              <Icon size={24} />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Status & View Details */}
                    <div className="flex items-center justify-between pt-3 mt-3 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                      <div 
                        className="flex items-center gap-1.5 text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-md"
                        style={{
                          background: 'rgba(34, 197, 94, 0.1)',
                          border: '1px solid rgba(34, 197, 94, 0.2)',
                          color: '#22c55e',
                          fontFamily: "'Inter', sans-serif"
                        }}
                      >
                        <div 
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: '#22c55e' }}
                        />
                        <span className="hidden md:inline">{project.status}</span>
                        <span className="md:hidden">Live</span>
                      </div>

                      <div
                        className="relative group/tooltip flex items-center gap-1.5 text-xs md:text-sm font-medium cursor-not-allowed"
                        style={{ 
                          color: 'rgba(255, 255, 255, 0.3)',
                          fontFamily: "'Inter', sans-serif"
                        }}
                      >
                        <span className="hidden sm:inline">View Details</span>
                        <span className="sm:hidden">Details</span>
                        <ArrowRight size={12} className="md:w-3.5 md:h-3.5" />
                        
                        {/* Tooltip */}
                        <div 
                          className="absolute bottom-full right-0 mb-2 px-3 py-1.5 rounded-md whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-opacity duration-200"
                          style={{
                            background: 'rgba(0, 0, 0, 0.9)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: '11px',
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          Coming soon
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
