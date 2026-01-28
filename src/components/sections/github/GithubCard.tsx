import { Star, GitFork, Eye } from 'lucide-react';
import { MovingBorder } from '../../ui/moving-border';

interface GithubCardProps {
  name: string;
  description: string;
  stars: number;
  forks: number;
  watchers: number;
  language: string;
  url: string;
}

export const GithubCard = ({ name, description, stars, forks, watchers, language, url }: GithubCardProps) => {
  return (
    <MovingBorder>
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="p-6 bg-white dark:bg-black">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{name}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{description}</p>

          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Star size={16} />
              <span>{stars}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork size={16} />
              <span>{forks}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye size={16} />
              <span>{watchers}</span>
            </div>
          </div>

          {language && (
            <div className="mt-4 inline-block px-2 py-1 text-sm bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded">
              {language}
            </div>
          )}
        </div>
      </a>
    </MovingBorder>
  );
};