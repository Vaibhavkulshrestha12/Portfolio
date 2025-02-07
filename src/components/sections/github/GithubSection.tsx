import { AnimatedText } from '../../ui/animated-text';
import { GithubCard } from './GithubCard';
import { GithubStats } from './GithubStats';

const featuredRepos = [
  {
    name: "Pentaomnia",
    description: "Full stack website for Bihar-based startup - Pentaomnia Pvt Ltd.",
    stars: 12,
    forks: 3,
    watchers: 5,
    language: "TypeScript",
    url: "https://github.com/Vaibhavkulshrestha12/PentaOmnia-V2.0.git"
  },
  {
    name: "Kisaan Connect",
    description: "Full stack web-app for farmers to connect and trade.",
    stars: 8,
    forks: 2,
    watchers: 4,
    language: "React",
    url: "https://github.com/Vaibhavkulshrestha12/Kisan-connect-frontend-web.git"
  },
  {
    name: "Nirmaan",
    description: "A full-stack education web application for NDA aspirants",
    stars: 15,
    forks: 4,
    watchers: 7,
    language: "TypeScript",
    url: "https://github.com/Vaibhavkulshrestha12/Nirmaan-frontend.git"
  }
];

export const GithubSection = () => {
  const githubUsername = "Vaibhavkulshrestha12";

  return (
    <section className="py-20 px-4" id="github">
      <div className="max-w-7xl mx-auto">
        <AnimatedText
          text="Open Source Contributions"
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredRepos.map((repo) => (
            <GithubCard key={repo.name} {...repo} />
          ))}
        </div>

        <GithubStats username={githubUsername} />
      </div>
    </section>
  );
};