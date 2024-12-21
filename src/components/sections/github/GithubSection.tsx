import { AnimatedText } from '../../ui/animated-text';
import { GithubCard } from './GithubCard';
import { GithubStats } from './GithubStats';


const featuredRepos = [
  {
    name: "Crpto-go",
    description: "Full stack website for tracking crypto currency prices and news",
    stars: 1,
    forks: 0,
    watchers: 1,
    language: "React, Go, tailiwnd, Postcsss",
    url: "https://github.com/Vaibhavkulshrestha12/Crypto-go.git"
  },
  {
    name: "Dev-Portfolio",
    description: "A pofolio website template made using sass and css",
    stars: 0,
    forks: 0,
    watchers: 1,
    language: "Html, js, Sass, Css",
    url: "https://github.com/Vaibhavkulshrestha12/Portfolio-sass-.git"
  },
  {
    name: "Superman - flight to fight",
    description: "2D-game devloped using pygame,applied oops,music and gui using python",
    stars: 1,
    forks: 0,
    watchers: 1,
    language: "Python",
    url: "https://github.com/Vaibhavkulshrestha12/superman-pygame.git"
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