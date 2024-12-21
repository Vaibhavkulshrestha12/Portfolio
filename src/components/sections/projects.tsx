import { AnimatedText } from "../ui/animated-text";
import { MovingBorder } from "../ui/moving-border";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "AI Task Manager",
    description: "Smart task management system with AI-powered prioritization",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    technologies: ["React", "Python", "TensorFlow"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Interactive dashboard for real-time data visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: ["Vue.js", "D3.js", "Firebase"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export const Projects = () => {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-7xl mx-auto">
        <AnimatedText
          text="Featured Projects"
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <MovingBorder key={project.title}>
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-sm bg-violet-900/30 text-violet-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </MovingBorder>
          ))}
        </div>
      </div>
    </section>
  );
};