import { MovingBorder } from '../../ui/moving-border';

interface GithubStatsProps {
  username: string;
}

export const GithubStats = ({ username }: GithubStatsProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <MovingBorder>
          <div className="bg-white dark:bg-black p-6">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&theme=transparent&title_color=6d28d9&text_color=64748b&icon_color=6d28d9&bg_color=00000000`}
              alt="GitHub Stats"
              className="w-full h-auto"
            />
          </div>
        </MovingBorder>

        <MovingBorder>
          <div className="bg-white dark:bg-black p-6">
            <img
              src={`https://streak-stats.demolab.com?user=${username}&hide_border=true&theme=transparent&title_color=6d28d9&text_color=64748b&icon_color=6d28d9&bg_color=00000000`}
              alt="GitHub Streak Stats"
              className="w-full h-auto"
            />
          </div>
        </MovingBorder>
      </div>

      
    </div>
  );
};