import { Music } from "lucide-react";

const TRACK = {
  title:     "Tere Ishk Mein",
  artist:    "A.R. Rahman, Arijit Singh",
  album:     "Tere Ishk Mein",
  thumbnail: "https://i.ytimg.com/vi/w0pbdkrRRJM/hqdefault.jpg",
  url:       "https://music.youtube.com/watch?v=w0pbdkrRRJM&si=Ej4NpndmqyVqD78o",
};

const YT_RED = "#FF0000";

export const YouTubeMusicCard = () => {
  const artists = TRACK.artist.split(",").map((s) => s.trim());

  return (
    <a
      href={TRACK.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex rounded-2xl border overflow-hidden transition-all duration-300 hover:border-red-500/50 group"
      style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
    >
      {/* Album art */}
      <div className="relative w-[96px] flex-shrink-0 self-stretch overflow-hidden">
        <img
          src={TRACK.thumbnail}
          alt={TRACK.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Subtle right-edge fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0 px-4 py-4 flex flex-col justify-between gap-2">
        {/* YouTube Music badge */}
        <div className="flex items-center gap-1.5">
          <div
            className="flex items-center gap-1.5 px-2 py-0.5 rounded-md"
            style={{ background: "rgba(255,0,0,0.12)" }}
          >
            <svg viewBox="0 0 24 24" className="w-3 h-3 flex-shrink-0" fill={YT_RED}>
              <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.441 12.545l-8 4.8A.624.624 0 0 1 8.5 16.8V7.2a.624.624 0 0 1 .941-.545l8 4.8a.625.625 0 0 1 0 1.09z"/>
            </svg>
            <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: YT_RED }}>
              YouTube Music
            </span>
          </div>
        </div>

        {/* Title + artist */}
        <div>
          <p className="text-base font-bold leading-snug truncate" style={{ color: "var(--text-primary)" }}>
            {TRACK.title}
          </p>
          <p className="text-xs mt-0.5 truncate" style={{ color: "var(--text-muted)" }}>
            {artists.join(" · ")}
            <span className="opacity-60"> · {TRACK.album}</span>
          </p>
        </div>

        {/* Last played */}
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
          <Music className="w-3 h-3 flex-shrink-0" style={{ color: "var(--text-muted)" }} />
          <span className="text-[11px]" style={{ color: "var(--text-muted)" }}>Last played</span>
        </div>
      </div>
    </a>
  );
};

export default YouTubeMusicCard;
