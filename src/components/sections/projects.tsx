import { AnimatedText } from "../ui/animated-text";
import { MovingBorder } from "../ui/moving-border";
import { ExternalLink, Github } from "lucide-react";


const projects = [
  {
    title: "Pentaomnia",
    description: "Full stack website for Bihar-based startup - Pentaomnia Pvt Ltd.",
    image: "./images/page.png",
    technologies: ["React", "Next js", "Tailwindcss", "Typescript"],
    github: "https://github.com/Vaibhavkulshrestha12/PentaOmnia-V2.0.git",
    live: "https://pentaomnia.com",
  },
  {
    title: "Kisaan Connect",
    description: "Full stack web-app for farmers to connect and trade.",
    image: "./images/kissan.gif",
    technologies: ["React", "Css", "Firebase"],
    github: "https://github.com/Vaibhavkulshrestha12/Kisan-connect-frontend-web.git",
    live: "https://kisan-connect-six.vercel.app",
  },
  {
    title: "Nirmaan",
    description: "A full-stack education web application for NDA aspirants (still in development)",
    image: "./images/work.png",
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
          className="text-3xl md:text-4xl font-bold text-surface-900 dark:text-surface-50 mb-12 text-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <MovingBorder key={project.title}>
              <div className="relative group bg-surface-50 dark:bg-surface-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-50 mb-2">{project.title}</h3>
                  <p className="text-surface-600 dark:text-surface-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded"
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
                      className="text-surface-600 hover:text-primary-500 dark:text-surface-400 dark:hover:text-primary-400 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-surface-600 hover:text-primary-500 dark:text-surface-400 dark:hover:text-primary-400 transition-colors"
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