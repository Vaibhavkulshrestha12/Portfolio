import { motion } from "framer-motion";
import {
  React,
  TypeScript,
  NextJs,
  NodeJs,
  PostgreSQL,
  Firebase,
  TailwindCSS,
} from "developer-icons";
import { SiEthereum, SiSteam } from "react-icons/si";
import LogoLoop from "../ui/logo-loop";
import {
  MapPin,
  ExternalLink,
} from "lucide-react";
import { YouTubeMusicCard } from "../ui/youtube-music-card";
import { useGitHubStats } from "../../hooks/useGitHubStats";
import { useSteamStats } from "../../hooks/useSteamStats";
import { useGeminiQuote } from "../../hooks/useGeminiQuote";
import logo from "/public/images/icons/thopda.png";


const SectionLabel = ({
  label,
  title,
}: {
  label: string;
  title: string;
}) => (
  <div className="mb-6">
    <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--text-muted)" }}>
      {label}
    </p>
    <h2 className="text-2xl md:text-3xl font-display font-bold" style={{ color: "var(--text-primary)" }}>
      {title}
    </h2>
  </div>
);

export const About = () => {
  const gh      = useGitHubStats("Vaibhavkulshrestha12");
  const steam   = useSteamStats();
  const { quote, loading: quoteLoading } = useGeminiQuote();
  return (
    <div
      className="min-h-[auto] sm:min-h-screen"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      <div className="max-w-3xl mx-auto px-4 py-14 sm:py-20 md:py-28 space-y-10 sm:space-y-16">

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel label="About" title="Me" />

          <div
            className="rounded-2xl border p-4 sm:p-6 flex flex-row gap-4 sm:gap-6 items-start overflow-hidden"
            style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-amber-500/40">
                <img src={logo} alt="Vaibhav" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex-1 min-w-0 space-y-3">
              <div>
                <h1 className="text-xl sm:text-2xl font-display font-bold" style={{ color: "var(--text-primary)" }}>
                  Vaibhav Kulshreshtha
                </h1>
                <p className="text-sm flex items-center gap-1.5 mt-1" style={{ color: "var(--text-muted)" }}>
                  <MapPin className="w-3.5 h-3.5" /> Delhi, India
                </p>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                I'm a{" "}
                <span className="font-semibold text-amber-400">
                  Full-Stack Engineer &amp; Product Architect
                </span>{" "}
                who loves building robust, scalable, and impact-driven digital products. From
                crafting intuitive frontends with React &amp; Tailwind to designing secure
                backends with Node.js, Firebase, and PostgreSQL , I turn complex ideas into
                seamless experiences. I'm the{" "}
                <span className="font-semibold text-amber-400">Co-Founder of Kisan Connect</span>,
                an MSME-funded agri-tech startup, and hold{" "}
                <span className="font-semibold text-amber-400">AWS Solutions Architect Associate</span>{" "}
                and <span className="font-semibold text-amber-400">OCI DevOps Professional</span>{" "} certifications. When I'm not shipping code, I'm mastering
                FromSoftware titles or deep-diving into comic universes.
              </p>

              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--text-muted)" }}>
                  Skills
                </p>
                <div className="overflow-hidden">
                <LogoLoop
                  logos={[
                    { node: <React size={22} />,       title: "React" },
                    { node: <TypeScript size={22} />,  title: "TypeScript" },
                    { node: <NextJs size={22} />,      title: "Next.js" },
                    { node: <NodeJs size={22} />,      title: "Node.js" },
                    { node: <TailwindCSS size={22} />, title: "Tailwind" },
                    { node: <Firebase size={22} />,    title: "Firebase" },
                    { node: <PostgreSQL size={22} />,  title: "Postgres" },
                    { node: <SiEthereum size={22} />,  title: "Web3" },
                  ]}
                  speed={60}
                  direction="left"
                  logoHeight={32}
                  gap={28}
                  hoverSpeed={0}
                  scaleOnHover
                  ariaLabel="Tech skills"
                  renderItem={(item) => {
                    const it = item as { node: React.ReactNode; title?: string };
                    return (
                      <div
                        className="flex flex-col items-center gap-1 px-2"
                        title={it.title}
                      >
                        <span className="text-[22px] leading-none">{it.node}</span>
                        <span className="text-[9px] font-medium whitespace-nowrap" style={{ color: "var(--text-muted)" }}>
                          {it.title}
                        </span>
                      </div>
                    );
                  }}
                />
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        {/* YouTube Music */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SectionLabel label="Music" title="What I'm Listening To" />
          <YouTubeMusicCard />
        </motion.section>

        {/*  GitHub */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionLabel label="Featured" title="GitHub Activity" />

          <div
            className="rounded-2xl border overflow-hidden"
            style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
          >
            <div className="p-5 space-y-5">
              {/* Contributions heatmap */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    Contributions in last year
                  </span>
                  <a
                    href="https://github.com/Vaibhavkulshrestha12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] transition-colors hover:text-amber-400"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Contribution heatmap →
                  </a>
                </div>
                <div className="overflow-x-auto">
                  <img
                    src="https://ghchart.rshah.org/39d353/Vaibhavkulshrestha12"
                    alt="GitHub contributions"
                    className="w-full rounded-lg"
                    style={{ minWidth: "480px" }}
                  />
                </div>
              </div>

              {gh?.languages && gh.languages.length > 0 && (
                <div>
                  <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    Top Languages
                  </span>
                  <div className="flex h-2 rounded-full overflow-hidden mt-3 gap-px">
                    {gh.languages.map(l => (
                      <div key={l.name} style={{ width: `${l.percent}%`, background: l.color }} />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-2.5">
                    {gh.languages.map(l => (
                      <div key={l.name} className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: l.color }} />
                        <span className="text-xs" style={{ color: "var(--text-secondary)" }}>{l.name}</span>
                        <span className="text-[11px]" style={{ color: "var(--text-muted)" }}>{l.percent}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {gh && (
                <div
                  className="grid grid-cols-3 gap-2 pt-1 border-t"
                  style={{ borderColor: "var(--border)" }}
                >
                  {[
                    { label: "Repositories", value: gh.repos },
                    { label: "GitHub Stars",  value: gh.stars },
                    { label: "Followers",     value: gh.followers },
                  ].map(({ label, value }) => (
                    <div key={label} className="text-center py-2">
                      <p className="text-base font-bold text-amber-400">{value}</p>
                      <p className="text-[11px] mt-0.5" style={{ color: "var(--text-muted)" }}>{label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.section>

        {/*  Steam Gaming  */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <SectionLabel label="Gaming" title="Steam Activity" />

          {steam.loading ? (
            <div className="rounded-2xl overflow-hidden animate-pulse" style={{ background: "#0e1521" }}>
              <div className="h-44 bg-white/5" />
              <div className="p-4 space-y-3">
                <div className="h-4 w-1/3 rounded bg-white/5" />
                {[1,2,3,4,5].map(i => <div key={i} className="h-3 w-full rounded bg-white/5" />)}
              </div>
            </div>
          ) : steam.error || !steam.data ? (
            <div
              className="rounded-2xl p-6 flex items-center gap-4"
              style={{ background: "#0e1521", border: "1px solid #1e2d3d" }}
            >
              <SiSteam className="w-8 h-8 flex-shrink-0" style={{ color: "#4c9be8" }} />
              <div>
                <p className="text-sm font-semibold" style={{ color: "#c6d4df" }}>Steam stats unavailable</p>
                <p className="text-xs mt-0.5" style={{ color: "#8ba0b4" }}>
                  {steam.error ?? "Could not reach Steam API."}
                </p>
              </div>
            </div>
          ) : (
            
            <div className="rounded-2xl overflow-hidden" style={{ background: "#0e1521" }}>

              {steam.data.recentGame && (
                <a
                  href={`https://store.steampowered.com/app/${steam.data.recentGame.appid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden group"
                  style={{ height: "168px" }}
                >
                  <img
                    src={steam.data.recentGame.header}
                    alt={steam.data.recentGame.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        `https://cdn.cloudflare.steamstatic.com/steam/apps/${steam.data!.recentGame!.appid}/capsule_231x87.jpg`;
                    }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0e1521 0%, rgba(14,21,33,0.45) 50%, transparent 100%)" }} />

                  <div
                    className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md"
                    style={{ background: "rgba(14,21,33,0.82)", border: "1px solid rgba(76,155,232,0.35)" }}
                  >
                    <SiSteam style={{ color: "#4c9be8", width: "12px", height: "12px", flexShrink: 0 }} />
                    <span className="text-[11px] font-semibold" style={{ color: "#c6d4df" }}>Last Played</span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                    <p className="text-xl font-bold leading-tight" style={{ color: "#ffffff" }}>
                      {steam.data.recentGame.name}
                    </p>
                  </div>
                </a>
              )}

              {steam.data.recentGame && (
                <div className="grid grid-cols-3" style={{ borderTop: "1px solid #1e2d3d", borderBottom: "1px solid #1e2d3d" }}>
                  {[
                    { label: "Total Hours",  value: `${steam.data.recentGame.totalHours}h`,       color: "#4c9be8" },
                    { label: "Last 2 Weeks", value: `${steam.data.recentGame.hoursLast2Weeks}h`,  color: "#c6d4df" },
                    {
                      label: "Achievements",
                      value: `${steam.data.recentGame.achievements.earned}/${steam.data.recentGame.achievements.total}`,
                      color: "#c6d4df",
                    },
                  ].map(({ label, value, color }, i) => (
                    <div
                      key={label}
                      className="py-4 text-center"
                      style={{
                        borderRight: i < 2 ? "1px solid #1e2d3d" : "none",
                        background: "#111827",
                      }}
                    >
                      <p className="text-lg font-bold" style={{ color }}>{value}</p>
                      <p className="text-[11px] mt-0.5" style={{ color: "#8ba0b4" }}>{label}</p>
                    </div>
                  ))}
                </div>
              )}

              <div style={{ height: "8px", background: "#060d14" }} />

              <div className="grid grid-cols-2 gap-px" style={{ background: "#1e2d3d" }}>
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" style={{ width: 18, height: 18 }}>
                        <rect x="2" y="16" width="20" height="3" rx="1.5" fill="#4c9be8"/>
                        <rect x="2" y="10.5" width="20" height="3" rx="1.5" fill="#4c9be8" opacity="0.7"/>
                        <rect x="2" y="5" width="20" height="3" rx="1.5" fill="#4c9be8" opacity="0.4"/>
                      </svg>
                    ),
                    label: "Games in Library",
                    value: steam.data.totalGames,
                    color: "#4c9be8",
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" style={{ width: 18, height: 18 }}>
                        <circle cx="12" cy="12" r="9" stroke="#4c9be8" strokeWidth="2"/>
                        <path d="M12 7v5l3 3" stroke="#4c9be8" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    ),
                    label: "Total Playtime",
                    value: `${steam.data.totalHoursAll}h`,
                    color: "#4c9be8",
                  },
                ].map(({ icon, label, value, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 px-5 py-4"
                    style={{ background: "#111827" }}
                  >
                    <div className="flex-shrink-0">{icon}</div>
                    <div>
                      <p className="text-lg font-bold" style={{ color }}>{value}</p>
                      <p className="text-[11px]" style={{ color: "#8ba0b4" }}>{label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
               
                <div
                  className="flex items-center justify-between px-4 py-3.5"
                  style={{ borderBottom: "1px solid #1e2d3d" }}
                >
                  <span className="text-sm font-semibold" style={{ color: "#c6d4df" }}>
                    Top 5 Most Played
                  </span>
                  <a
                    href={`https://steamcommunity.com/profiles/${import.meta.env.VITE_STEAM_ID ?? ""}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold transition-colors hover:text-white"
                    style={{ color: "#4c9be8" }}
                  >
                    Steam Profile →
                  </a>
                </div>

                {steam.data.topGames.map((game, idx) => {
                  const maxHours = steam.data!.topGames[0].hours;
                  const pct = maxHours > 0 ? (game.hours / maxHours) * 100 : 0;
                  return (
                    <a
                      key={game.appid}
                      href={`https://store.steampowered.com/app/${game.appid}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3"
                      style={{ borderBottom: idx < steam.data!.topGames.length - 1 ? "1px solid #1e2d3d" : "none" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "#162030")}
                      onMouseLeave={e => (e.currentTarget.style.background = "")}
                    >
                    
                      <span
                        className="text-base font-bold flex-shrink-0 text-center"
                        style={{ width: "18px", color: "#8ba0b4" }}
                      >
                        {idx + 1}
                      </span>

                      <div
                        className="flex-shrink-0 rounded overflow-hidden"
                        style={{ width: "48px", height: "48px", background: "#1e2d3d" }}
                      >
                        <img
                          src={game.image}
                          alt={game.name}
                          className="w-full h-full object-cover"
                          onError={(e) => { (e.currentTarget as HTMLImageElement).src = game.header; }}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate" style={{ color: "#c6d4df" }}>
                          {game.name}
                        </p>
                        <div className="mt-2 h-[3px] w-full rounded-full" style={{ background: "#1e2d3d" }}>
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${pct}%`, background: "#4c9be8", transition: "width 0.8s ease" }}
                          />
                        </div>
                      </div>

                      <span className="text-sm font-bold flex-shrink-0" style={{ color: "#4c9be8" }}>
                        {game.hours}h
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <SectionLabel label="Now" title="Currently Working On" />

          <div
            className="rounded-2xl border overflow-hidden"
            style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src="/images/eastore.png"
                alt="Eastore"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
             
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[11px] text-white/90 font-medium">All Systems Operational</span>
              </div>
         
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
                <h3 className="text-white font-bold text-xl tracking-tight">Eastore</h3>
                <p className="text-[12px] mt-0.5" style={{ color: "rgba(255,255,255,0.65)" }}>Decentralized File Storage</p>
              </div>
            </div>

            <div className="p-5 space-y-4">
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Decentralized file storage platform with{" "}
                <span className="text-amber-400 font-medium">Web3 wallet authentication</span>,{" "}
                hierarchical folder system, real-time file operations, and advanced search with{" "}
                <span className="text-amber-400 font-medium">3-tier relevance ranking</span>. Features
                on-chain data viewer with CID/dataset/SP info via{" "}
                <span className="text-amber-400 font-medium">Synapse SDK</span>, interactive product tour,
                file preview gallery, and session key management.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Web3", "Shadcn UI"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-medium border"
                    style={{
                      background: "var(--bg-tertiary)",
                      borderColor: "var(--border)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                    In active development
                  </span>
                </div>
                <a
                  href="https://eastore.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium hover:text-amber-400 transition-colors"
                  style={{ color: "var(--text-muted)" }}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Visit eastore.xyz
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div
            className="rounded-2xl border p-7 relative overflow-hidden"
            style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
          >
            <span
              className="absolute top-3 left-5 text-7xl font-serif leading-none select-none pointer-events-none"
              style={{ color: "rgba(255,255,255,0.06)" }}
            >
              &#8220;
            </span>
            <span
              className="absolute bottom-3 right-5 text-7xl font-serif leading-none select-none pointer-events-none"
              style={{ color: "rgba(255,255,255,0.06)" }}
            >
              &#8221;
            </span>

            <blockquote className="relative z-10 text-center px-4">
              {quoteLoading ? (
                <div className="flex flex-col items-center gap-3 py-2">
                  <div className="flex gap-1">
                    {[0,1,2].map(i => (
                      <span key={i} className="w-1.5 h-1.5 rounded-full bg-white/20 animate-bounce" style={{ animationDelay: `${i*150}ms` }} />
                    ))}
                  </div>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>Generating today's quote…</p>
                </div>
              ) : (
                <>
                  <p
                    className="text-base sm:text-lg italic leading-relaxed mb-5"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <footer
                    className="text-sm font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    &#8212; {quote.author}
                  </footer>
                </>
              )}
            </blockquote>
          </div>
        </motion.section>

      </div>
    </div>
  );
};
