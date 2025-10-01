import { SpotlightCard } from "../ui/spotlight";
import { ExternalLink, Github } from "lucide-react";
import { useRef, useState } from "react";

const AnimatedGitHubButton = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const maxDistance = 15; // Maximum pixels to move
      const x = Math.max(-maxDistance, Math.min(maxDistance, (e.clientX - centerX) * 0.3));
      const y = Math.max(-maxDistance, Math.min(maxDistance, (e.clientY - centerY) * 0.3));
      
      setMousePosition({ x, y });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <a
      ref={buttonRef}
      href="https://github.com/Vaibhavkulshrestha12"
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 overflow-hidden group"
      style={{
        background: 'transparent',
        color: 'var(--accent-primary)',
        borderColor: 'var(--accent-primary)',
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        boxShadow: isHovered 
          ? `${-mousePosition.x * 0.5}px ${-mousePosition.y * 0.5 + 8}px 25px rgba(217, 119, 6, 0.3), 
             ${-mousePosition.x * 0.8}px ${-mousePosition.y * 0.8 + 15}px 50px rgba(217, 119, 6, 0.15),
             inset 0 1px 0 rgba(255, 255, 255, 0.1)`
          : '0 4px 15px rgba(217, 119, 6, 0.2), 0 8px 25px rgba(217, 119, 6, 0.1)',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Background Effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px)`,
        }}
      />
      
      {/* Animated Background Glow */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
      />
      
      {/* Content */}
      <div className="relative flex items-center gap-3">
        <Github 
          size={20} 
          className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" 
        />
        <span className="relative">
          View More on GitHub
        </span>
      </div>
      
      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
    </a>
  );
};

const projects = [
  {
    title: "Pentaomnia",
    description: "Full stack website for Bihar-based startup - Pentaomnia Pvt Ltd.",
    image: "./images/page.png",
    technologies: ["nextjs", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Vaibhavkulshrestha12/PentaOmnia-V2.0",
    live: "https://pentaomnia.com",
    featured: true,
  },
  {
    title: "PashuDrishti",
    description: "AI-powered cattle breed recognition platform with Farm and livestock management",
    image: "./images/PashuDrishti.gif",
    technologies: ["TypeScript", "Tailwind CSS", "Firebase"],
    github: "https://github.com/Vaibhavkulshrestha12/SIH-",
    live: "https://pashudrishti-sih.vercel.app/",
    featured: true,
  },
  {
    title: "WriterSpace",
    description: "A comprehensive blogging platform with modern features and intuitive design",
    image: "./writerspace.png",
    technologies: ["React","TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com/Vaibhavkulshrestha12/WriterSpace",
    live: "https://writerspace.vercel.app",
    featured: false,
  },
];

export const ModernProjects = () => {
  return (
    <section className="py-12 px-6 lg:px-8" id="projects">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-element">
          <div className="inline-flex items-center px-4 py-2 rounded-full border mb-6"
               style={{ 
                 background: 'var(--bg-secondary)', 
                 borderColor: 'var(--accent-primary)',
                 color: 'var(--accent-primary)' 
               }}>
            <span className="text-sm font-semibold tracking-wider uppercase">Portfolio</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span style={{ color: 'var(--text-primary)' }}>Featured</span>
            <span className="text-gradient"> Projects</span>
          </h2>
          
          <p className="text-lg max-w-2xl mx-auto leading-relaxed"
             style={{ color: 'var(--text-secondary)' }}>
            A showcase of real-world applications I've built for startups and organizations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[800px] lg:h-[600px]">
          {/* Pentaomnia - Large Featured Card */}
          <SpotlightCard 
            className="modern-card overflow-hidden group bg-black/30 border border-orange-500/30 backdrop-blur-md shadow-2xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-300 hover:border-orange-500/50 lg:col-span-2 lg:row-span-1"
          >
            <div className="relative overflow-hidden h-full">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Project Links Overlay */}
              <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <a
                  href={projects[0].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-orange-500/20 backdrop-blur-md hover:bg-orange-500/30 transition-all transform hover:scale-110"
                >
                  <Github size={24} className="text-white drop-shadow-lg" />
                </a>
                <a
                  href={projects[0].live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-orange-500/20 backdrop-blur-md hover:bg-orange-500/30 transition-all transform hover:scale-110"
                >
                  <ExternalLink size={24} className="text-white drop-shadow-lg" />
                </a>
              </div>

              {/* Bottom Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold mb-3 text-white drop-shadow-lg">
                  {projects[0].title}
                </h3>
                <p className="text-gray-200 mb-6 leading-relaxed drop-shadow-md text-lg">
                  {projects[0].description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {projects[0].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm font-medium rounded-full bg-orange-500/20 text-orange-200 border border-orange-500/30 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex gap-6">
                  <a
                    href={projects[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-base font-medium text-orange-300 hover:text-orange-200 transition-colors hover:scale-105 transform duration-200"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={projects[0].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-base font-medium text-orange-300 hover:text-orange-200 transition-colors hover:scale-105 transform duration-200"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Right Column - Stacked Projects */}
          <div className="flex flex-col gap-8 lg:col-span-1">
            {/* Kisaan Connect - Top */}
            <SpotlightCard 
              className="modern-card overflow-hidden group bg-black/30 border border-orange-500/30 backdrop-blur-md shadow-2xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-300 hover:border-orange-500/50 flex-1"
            >
              <div className="relative overflow-hidden h-full">
                <img
                  src={projects[1].image}
                  alt={projects[1].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Project Links Overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={projects[1].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-orange-500/20 backdrop-blur-md hover:bg-orange-500/30 transition-all transform hover:scale-110"
                  >
                    <Github size={18} className="text-white drop-shadow-lg" />
                  </a>
                  <a
                    href={projects[1].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-orange-500/20 backdrop-blur-md hover:bg-orange-500/30 transition-all transform hover:scale-110"
                  >
                    <ExternalLink size={18} className="text-white drop-shadow-lg" />
                  </a>
                </div>

                {/* Bottom Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold mb-2 text-white drop-shadow-lg">
                    {projects[1].title}
                  </h3>
                  <p className="text-gray-200 mb-3 leading-relaxed drop-shadow-md text-sm">
                    {projects[1].description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {projects[1].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-orange-500/20 text-orange-200 border border-orange-500/30 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-4">
                    <a
                      href={projects[1].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-orange-300 hover:text-orange-200 transition-colors hover:scale-105 transform duration-200"
                    >
                      <Github size={14} />
                      Code
                    </a>
                    <a
                      href={projects[1].live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-orange-300 hover:text-orange-200 transition-colors hover:scale-105 transform duration-200"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* WriterSpace - Bottom */}
            <SpotlightCard 
              className="modern-card overflow-hidden group bg-black/30 border border-orange-500/30 backdrop-blur-md shadow-2xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-300 hover:border-orange-500/50 flex-1"
            >
              <div className="relative overflow-hidden h-full">
                <img
                  src={projects[2].image}
                  alt={projects[2].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Project Links Overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={projects[2].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-orange-500/20 backdrop-blur-md hover:bg-orange-500/30 transition-all transform hover:scale-110"
                  >
                    <Github size={18} className="text-white drop-shadow-lg" />
                  </a>
                  <a
                    href={projects[2].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-orange-500/20 backdrop-blur-md hover:bg-orange-500/30 transition-all transform hover:scale-110"
                  >
                    <ExternalLink size={18} className="text-white drop-shadow-lg" />
                  </a>
                </div>

                {/* Bottom Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold mb-2 text-white drop-shadow-lg">
                    {projects[2].title}
                  </h3>
                  <p className="text-gray-200 mb-3 leading-relaxed drop-shadow-md text-sm">
                    {projects[2].description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {projects[2].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-orange-500/20 text-orange-200 border border-orange-500/30 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-4">
                    <a
                      href={projects[2].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-orange-300 hover:text-orange-200 transition-colors hover:scale-105 transform duration-200"
                    >
                      <Github size={14} />
                      Code
                    </a>
                    <a
                      href={projects[2].live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-orange-300 hover:text-orange-200 transition-colors hover:scale-105 transform duration-200"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>

        {/* View More Projects CTA */}
        <div className="text-center mt-16">
          <AnimatedGitHubButton />
        </div>
      </div>
    </section>
  );
};