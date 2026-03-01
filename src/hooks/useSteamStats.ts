import { useEffect, useState } from "react";

export interface SteamTopGame {
  appid:  number;
  name:   string;
  hours:  number;
  image:  string;
  header: string;
}

export interface SteamData {
  player: {
    name:   string;
    avatar: string;
  };
  recentGame: {
    name:             string;
    appid:            number;
    image:            string;
    header:           string;
    hoursLast2Weeks:  number;
    totalHours:       number;
    achievements:     { earned: number; total: number };
  } | null;
  topGames:     SteamTopGame[];
  totalGames:   number;
  totalHoursAll: number;
}

/* ── Client-side credentials (VITE_ prefix = exposed to browser) ── */
const STEAM_KEY = import.meta.env.VITE_STEAM_KEY as string | undefined;
const STEAM_ID  = import.meta.env.VITE_STEAM_ID  as string | undefined;

const STEAM_BASE = "https://api.steampowered.com";

interface SteamGame {
  appid:             number;
  name?:             string;
  playtime_forever:  number;
  playtime_2weeks?:  number;
  img_icon_url?:     string;
}

const gameHeader = (appid: number) =>
  `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/header.jpg`;

const iconUrl = (appid: number, hash: string) =>
  `https://media.steampowered.com/steamcommunity/public/images/apps/${appid}/${hash}.jpg`;

/* ── CORS proxies tried in order (for browser-direct calls during npm run dev) ── */
const PROXIES = [
  (url: string) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  (url: string) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
];

async function steamFetch<T>(path: string): Promise<T> {
  const url = `${STEAM_BASE}${path}`;
  let lastErr: Error | null = null;
  for (const proxy of PROXIES) {
    try {
      const res = await fetch(proxy(url));
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json() as Promise<T>;
    } catch (e) {
      lastErr = e instanceof Error ? e : new Error(String(e));
    }
  }
  throw lastErr ?? new Error("All CORS proxies failed");
}

async function fetchSteamDirect(): Promise<SteamData> {
  if (!STEAM_KEY || !STEAM_ID) throw new Error("No Steam credentials");

  const kv = `key=${STEAM_KEY}&steamid=${STEAM_ID}`;

  const [ownedRes, recentRes, summaryRes] = await Promise.all([
    steamFetch<{ response: { game_count: number; games: SteamGame[] } }>(
      `/IPlayerService/GetOwnedGames/v1/?${kv}&include_appinfo=1&include_played_free_games=1&format=json`
    ),
    steamFetch<{ response: { total_count: number; games?: SteamGame[] } }>(
      `/IPlayerService/GetRecentlyPlayedGames/v1/?${kv}&count=1&format=json`
    ),
    steamFetch<{ response: { players: Array<{ personaname: string; avatarfull: string }> } }>(
      `/ISteamUser/GetPlayerSummaries/v2/?key=${STEAM_KEY}&steamids=${STEAM_ID}&format=json`
    ),
  ]);

  const allGames: SteamGame[] = ownedRes.response.games ?? [];
  const recentGame            = recentRes.response.games?.[0];
  const player                = summaryRes.response.players[0];

  const topGames = [...allGames]
    .sort((a, b) => b.playtime_forever - a.playtime_forever)
    .slice(0, 5)
    .map((g) => ({
      appid:  g.appid,
      name:   g.name ?? `App ${g.appid}`,
      hours:  parseFloat((g.playtime_forever / 60).toFixed(1)),
      image:  g.img_icon_url ? iconUrl(g.appid, g.img_icon_url) : gameHeader(g.appid),
      header: gameHeader(g.appid),
    }));

  const totalHoursAll = parseFloat(
    (allGames.reduce((sum, g) => sum + g.playtime_forever, 0) / 60).toFixed(0)
  );

  /* Achievements for the most recently played game */
  let achievements = { earned: 0, total: 0 };
  if (recentGame) {
    try {
      const achRes = await steamFetch<{
        playerstats: { achievements?: Array<{ achieved: number }>; success: boolean };
      }>(
        `/ISteamUserStats/GetPlayerAchievements/v1/?key=${STEAM_KEY}&steamid=${STEAM_ID}&appid=${recentGame.appid}&format=json`
      );
      if (achRes.playerstats?.success && achRes.playerstats.achievements) {
        const achs = achRes.playerstats.achievements;
        achievements = { earned: achs.filter((a) => a.achieved === 1).length, total: achs.length };
      }
    } catch { /* game may not support achievements */ }
  }

  return {
    player:  { name: player?.personaname ?? "Vaibhav", avatar: player?.avatarfull ?? "" },
    recentGame: recentGame
      ? {
          name:            recentGame.name ?? `App ${recentGame.appid}`,
          appid:           recentGame.appid,
          image:           recentGame.img_icon_url ? iconUrl(recentGame.appid, recentGame.img_icon_url) : gameHeader(recentGame.appid),
          header:          gameHeader(recentGame.appid),
          hoursLast2Weeks: parseFloat(((recentGame.playtime_2weeks ?? 0) / 60).toFixed(1)),
          totalHours:      parseFloat((recentGame.playtime_forever / 60).toFixed(1)),
          achievements,
        }
      : null,
    topGames,
    totalGames:    ownedRes.response.game_count,
    totalHoursAll,
  };
}

export function useSteamStats() {
  const [data,    setData]    = useState<SteamData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        /* ── Always try the Vercel serverless function first ── */
        const res = await fetch("/api/steam");
        if (!res.ok) throw new Error(`/api/steam returned ${res.status}`);
        const steamData = (await res.json()) as SteamData;
        if (!cancelled) setData(steamData);
      } catch (apiErr) {
        /* ── Fallback: direct Steam API via CORS proxy — DEV ONLY ── */
        if (import.meta.env.PROD) {
          // Never use third-party CORS proxies in production — they expose the key
          if (!cancelled) setError("Steam data unavailable");
        } else {
          try {
            const steamData = await fetchSteamDirect();
            if (!cancelled) setData(steamData);
          } catch (e) {
            if (!cancelled) setError(e instanceof Error ? e.message : "Unknown error");
          }
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return { data, loading, error };
}

