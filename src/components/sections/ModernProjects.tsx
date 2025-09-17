import { SpotlightCard } from "../ui/spotlight";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Pentaomnia",
    description: "Full stack website for Bihar-based startup - Pentaomnia Pvt Ltd.",
    image: "./images/page.png",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Vaibhavkulshrestha12/PentaOmnia-V2.0",
    live: "https://pentaomnia.com",
    featured: true,
  },
  {
    title: "Kisaan Connect",
    description: "Full stack web-app for farmers to connect and trade.",
    image: "./images/kissan.gif",
    technologies: ["React", "CSS", "Firebase"],
    github: "https://github.com/Vaibhavkulshrestha12/Kisan-connect-frontend-web",
    live: "https://kisan-connect-six.vercel.app",
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
    <section className="section-padding" id="projects">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <SpotlightCard 
              key={project.title} 
              className={`modern-card overflow-hidden group ${
                project.featured ? 'lg:col-span-2' : ''
              } ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Links Overlay */}
                <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                  >
                    <Github size={20} className="text-white" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
                <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full"
                      style={{ 
                        background: 'var(--bg-tertiary)', 
                        color: 'var(--accent-primary)',
                        border: '1px solid var(--border)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:scale-105 transform duration-200"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:scale-105 transform duration-200"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* View More Projects CTA */}
        <div className="text-center mt-16">
          <a 
            href="https://github.com/Vaibhavkulshrestha12" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};