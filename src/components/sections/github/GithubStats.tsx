import React from 'react';

interface GithubStatsProps {
  username: string;
}

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`group relative rounded-xl overflow-hidden bg-[#0d1117] border border-[#30363d] hover:border-[#f59e0b]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.08)] ${className ?? ''}`}>
    {children}
  </div>
);

export const GithubStats = ({ username }: GithubStatsProps) => {
  const cards = [
    {
      src: `https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=github_dark`,
      alt: 'Profile Details',
      colSpan: 'md:col-span-2',
    },
    {
      src: `https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${username}&theme=github_dark`,
      alt: 'Top Languages by Commit',
      colSpan: '',
    },
    {
      src: `https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${username}&theme=github_dark`,
      alt: 'Stats',
      colSpan: '',
    },
    {
      src: `https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=${username}&theme=github_dark`,
      alt: 'Commits by Hour',
      colSpan: '',
    },
    {
      src: `https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${username}&theme=github_dark`,
      alt: 'Repos per Language',
      colSpan: '',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {cards.map(({ src, alt, colSpan }) => (
        <Card key={alt} className={colSpan}>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full h-auto block"
          />
        </Card>
      ))}
    </div>
  );
};