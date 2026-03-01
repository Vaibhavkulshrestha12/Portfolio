import { useState, useEffect } from "react";

const LANG_COLORS: Record<string, string> = {
  TypeScript:  "#3178c6",
  JavaScript:  "#f1e05a",
  Python:      "#3572A5",
  CSS:         "#563d7c",
  HTML:        "#e34c26",
  Go:          "#00ADD8",
  Rust:        "#dea584",
  Java:        "#b07219",
  "C++":       "#f34b7d",
  Shell:       "#89e051",
  Solidity:    "#AA6746",
  SCSS:        "#c6538c",
  Vue:         "#41b883",
};

interface RepoItem {
  language: string | null;
  stargazers_count: number;
}

export interface GitHubLanguage {
  name: string;
  percent: number;
  color: string;
}


export interface GitHubStats {
  repos: number;
  followers: number;
  stars: number;
  contributions: string;
  languages: GitHubLanguage[];
}

export const useGitHubStats = (username: string) => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const TOKEN = import.meta.env.VITE_GITHUB_TOKEN as string | undefined;

  useEffect(() => {
    const headers: HeadersInit = TOKEN ? { Authorization: `token ${TOKEN}` } : {};

    const fetchStats = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, { headers }),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&type=owner`, { headers }),
        ]);
        if (!userRes.ok || !reposRes.ok) return;

        const user = await userRes.json();
        const repos: RepoItem[] = await reposRes.json();
        const totalStars = repos.reduce((s, r) => s + (r.stargazers_count ?? 0), 0);

        /* ── Languages (aggregate repo[].language) ── */
        const langCount: Record<string, number> = {};
        repos.forEach(r => {
          if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
        });
        const total = Object.values(langCount).reduce((a, b) => a + b, 0);
        const languages: GitHubLanguage[] = Object.entries(langCount)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 5)
          .map(([name, count]) => ({
            name,
            percent: Math.round((count / total) * 100),
            color: LANG_COLORS[name] ?? "#8b949e",
          }));

        setStats({
          repos: user.public_repos ?? repos.length,
          followers: user.followers ?? 0,
          stars: totalStars,
          contributions: "",
          languages,
        });
      } catch {
        // silently fail — UI falls back to static values
      }
    };

    fetchStats();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return stats;
};
