import { AnimatedText } from '../../ui/animated-text';
import { GithubStats } from './GithubStats';

export const GithubSection = () => {
  const githubUsername = "Vaibhavkulshrestha12";

  return (
    <section className="py-20 px-4" id="github">
      <div className="max-w-7xl mx-auto">
        <AnimatedText
          text="GitHub Stats"
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        />

        <GithubStats username={githubUsername} />
      </div>
    </section>
  );
};