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

  // Row 1 — full-width profile/contribution graph
  // Row 2 — two equal cards
  // Row 3 — two equal cards
  // → perfectly symmetric 1+2+2 grid
  const rows: { src: string; alt: string; full?: boolean }[] = [
    { src: `${BASE}/profile-details?${u}&${t}`,       alt: 'Profile & Contributions', full: true },
    { src: `${BASE}/most-commit-language?${u}&${t}`,  alt: 'Top Languages by Commit' },
    { src: `${BASE}/stats?${u}&${t}`,                 alt: 'Stats' },
    { src: `${BASE}/productive-time?${u}&${t}`,       alt: 'Commits by Hour' },
    { src: `${BASE}/repos-per-language?${u}&${t}`,    alt: 'Top Languages by Repo' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {rows.map(({ src, alt, full }) => (
        <Card key={alt} className={full ? 'sm:col-span-2' : ''}>
          <img src={src} alt={alt} loading="lazy" className="w-full h-auto block" />
        </Card>
      ))}
    </div>
  );
};