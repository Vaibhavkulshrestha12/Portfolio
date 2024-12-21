import { AnimatedText } from '../../ui/animated-text';
import { GithubCard } from './GithubCard';
import { GithubStats } from './GithubStats';

const featuredRepos = [
  {
    name: "Pentaomnia",
    description: "Full stack website for the Bihar based startup -Pentaomnia Pvt ltd",
    stars: 128,
    forks: 45,
    watchers: 89,
    language: "React, Node js, tailiwnd, Postcss",
    url: "https://github.com/username/project-alpha"
  },
  {
    name: "Nirmaan",
    description: "Eduction web-app still in developement,providing NDA courses",
    stars: 256,
    forks: 78,
    watchers: 134,
    language: "React, Node js, tailiwnd, postman",
    url: "https://github.com/username/beta-framework"
  },
  {
    name: "Superman - flight to fight",
    description: "2D-game devloped using pygame,applied oops,music and gui using python",
    stars: 89,
    forks: 23,
    watchers: 67,
    language: "Python",
    url: "https://github.com/username/devtools-x"
  }
];

export const GithubSection = () => {
  const githubUsername = "Vaibhavkulshrestha12"; // Replace with your GitHub username

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