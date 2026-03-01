import type { VercelRequest, VercelResponse } from "@vercel/node";

const STEAM_KEY = process.env.VITE_STEAM_KEY;
const STEAM_ID  = process.env.STEAM_ID;

interface SteamGame {
  appid: number;
  name?: string;
  playtime_forever: number;
  playtime_2weeks?: number;
  img_icon_url?: string;
}

interface SteamAchievement {
  achieved: number;
}

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json() as Promise<T>;
}

/* ── Steam image URL helpers ── */
const gameHeader = (appid: number) =>
  `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/header.jpg`;

const iconUrl = (appid: number, hash: string) =>
  `https://media.steampowered.com/steamcommunity/public/images/apps/${appid}/${hash}.jpg`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.status(200).end();

  if (!STEAM_KEY || !STEAM_ID) {
    return res.status(500).json({ error: "STEAM_KEY or STEAM_ID not configured on server." });
  }

  try {
    const BASE = "https://api.steampowered.com";
    const key  = `key=${STEAM_KEY}&steamid=${STEAM_ID}`;

    const [ownedRes, recentRes, summaryRes] = await Promise.all([
      fetchJson<{ response: { game_count: number; games: SteamGame[] } }>(
        `${BASE}/IPlayerService/GetOwnedGames/v1/?${key}&include_appinfo=1&include_played_free_games=1&format=json`
      ),
      fetchJson<{ response: { total_count: number; games?: SteamGame[] } }>(
        `${BASE}/IPlayerService/GetRecentlyPlayedGames/v1/?${key}&count=1&format=json`
      ),
      fetchJson<{ response: { players: Array<{ personaname: string; avatarfull: string }> } }>(
        `${BASE}/ISteamUser/GetPlayerSummaries/v2/?key=${STEAM_KEY}&steamids=${STEAM_ID}&format=json`
      ),
    ]);

    const allGames: SteamGame[] = ownedRes.response.games ?? [];
    const recentGame: SteamGame | undefined = recentRes.response.games?.[0];
    const player = summaryRes.response.players[0];

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

    let recentAchievements = { earned: 0, total: 0 };
    if (recentGame) {
      try {
        const achRes = await fetchJson<{
          playerstats: { achievements?: SteamAchievement[]; success: boolean };
        }>(
          `${BASE}/ISteamUserStats/GetPlayerAchievements/v1/?key=${STEAM_KEY}&steamid=${STEAM_ID}&appid=${recentGame.appid}&format=json`
        );
        if (achRes.playerstats?.success && achRes.playerstats.achievements) {
          const achs = achRes.playerstats.achievements;
          recentAchievements = {
            earned: achs.filter((a) => a.achieved === 1).length,
            total:  achs.length,
          };
        }
      } catch {
        // achievements may be disabled for private profiles or game doesn't support it
      }
    }

    return res.status(200).json({
      player: {
        name:   player?.personaname ?? "Vaibhav",
        avatar: player?.avatarfull ?? "",
      },
      recentGame: recentGame
        ? {
            name:             recentGame.name ?? `App ${recentGame.appid}`,
            appid:            recentGame.appid,
            image:            recentGame.img_icon_url
              ? iconUrl(recentGame.appid, recentGame.img_icon_url)
              : gameHeader(recentGame.appid),
            header:           gameHeader(recentGame.appid),
            hoursLast2Weeks:  parseFloat(((recentGame.playtime_2weeks ?? 0) / 60).toFixed(1)),
            totalHours:       parseFloat((recentGame.playtime_forever / 60).toFixed(1)),
            achievements:     recentAchievements,
          }
        : null,
      topGames,
      totalGames:   ownedRes.response.game_count,
      totalHoursAll,
    });
  } catch (err) {
    console.error("[steam api]", err);
    return res.status(500).json({ error: "Failed to fetch Steam data." });
  }
}
