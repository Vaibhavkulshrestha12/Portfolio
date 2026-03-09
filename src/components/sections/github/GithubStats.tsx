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
  const BASE = "https://github-profile-summary-cards.vercel.app/api/cards";
  const t    = `theme=github_dark`;
  const u    = `username=${username}`;

  const sideCards: { src: string; alt: string }[] = [
    { src: `${BASE}/most-commit-language?${u}&${t}`,  alt: 'Top Languages by Commit' },
    { src: `${BASE}/stats?${u}&${t}`,                 alt: 'Stats' },
    { src: `${BASE}/productive-time?${u}&${t}`,       alt: 'Commits by Hour' },
    { src: `${BASE}/repos-per-language?${u}&${t}`,    alt: 'Top Languages by Repo' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-3">
      <Card className="lg:flex-1 flex items-center">
        <img
          src={`${BASE}/profile-details?${u}&${t}`}
          alt="Profile & Contributions"
          loading="lazy"
          className="w-full h-auto block"
        />
      </Card>

      <div className="grid grid-cols-2 gap-3 lg:w-[45%]">
        {sideCards.map(({ src, alt }) => (
          <Card key={alt}>
            <img src={src} alt={alt} loading="lazy" className="w-full h-auto block" />
          </Card>
        ))}
      </div>
    </div>
  );
};