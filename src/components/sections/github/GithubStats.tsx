import { MovingBorder } from '../../ui/moving-border';

interface GithubStatsProps {
  username: string;
}

export const GithubStats = ({ username }: GithubStatsProps) => {
  return (
    <div className="space-y-4">
      
      <div className="block lg:hidden space-y-4">
       
        <MovingBorder>
          <div className="bg-white dark:bg-black p-4">
            <img
              src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=github_dark`}
              alt="GitHub Profile Details"
              className="w-full h-auto max-h-48 object-contain"
            />
          </div>
        </MovingBorder>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <MovingBorder>
            <div className="bg-white dark:bg-black p-4">
              <img
                src={`https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${username}&theme=github_dark`}
                alt="GitHub Stats"
                className="w-full h-auto max-h-40 object-contain"
              />
            </div>
          </MovingBorder>

          <MovingBorder>
            <div className="bg-white dark:bg-black p-4">
              <img
                src={`https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${username}&theme=github_dark`}
                alt="Most Used Languages"
                className="w-full h-auto max-h-40 object-contain"
              />
            </div>
          </MovingBorder>
        </div>
      </div>
      <div className="hidden lg:grid lg:grid-cols-2 gap-6">
       
        <div className="space-y-6">
         
          <MovingBorder>
            <div className="bg-white dark:bg-black p-4 h-48">
              <img
                src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=github_dark`}
                alt="GitHub Profile Details"
                className="w-full h-full object-contain"
              />
            </div>
          </MovingBorder>

          <MovingBorder>
            <div className="bg-white dark:bg-black p-4 h-48">
              <img
                src={`https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=${username}&theme=github_dark`}
                alt="Productive Time"
                className="w-full h-full object-contain"
              />
            </div>
          </MovingBorder>
        </div>

        <div className="space-y-6">
         
          <MovingBorder>
            <div className="bg-white dark:bg-black p-4 h-48">
              <img
                src={`https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${username}&theme=github_dark`}
                alt="Most Used Languages"
                className="w-full h-full object-contain"
              />
            </div>
          </MovingBorder>

          <MovingBorder>
            <div className="bg-white dark:bg-black p-4 h-48">
              <img
                src={`https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${username}&theme=github_dark`}
                alt="GitHub Stats"
                className="w-full h-full object-contain"
              />
            </div>
          </MovingBorder>
        </div>
      </div>

      
    </div>
  );
};