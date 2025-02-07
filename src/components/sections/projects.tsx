import { AnimatedText } from "../ui/animated-text";
import { MovingBorder } from "../ui/moving-border";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Pentaomnia",
    description: "Full stack website for Bihar-based startup - Pentaomnia Pvt Ltd.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    technologies: ["React", "Next js", "Tailwindcss", "Typescript"],
    github: "https://github.com/Vaibhavkulshrestha12/PentaOmnia-V2.0.git",
    live: "https://pentaomnia.com",
  },
  {
    title: "Kisaan Connect",
    description: "Full stack web-app for farmers to connect and trade.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
    technologies: ["React", "Css", "Firebase"],
    github: "https://github.com/Vaibhavkulshrestha12/Kisan-connect-frontend-web.git",
    live: "https://kisan-connect-six.vercel.app",
  },
  {
    title: "Nirmaan",
    description: "A full-stack education web application for NDA aspirants (still in development)",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
    technologies: ["React", "Typescript", "Mongodb", "Tailwind"],
    github: "https://github.com/Vaibhavkulshrestha12/Nirmaan-frontend.git",
    live: "https://github.com/Vaibhavkulshrestha12/Nirmaan-frontend.git",
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