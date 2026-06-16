import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Trophy, Award, Flag, Timer, ImageOff } from "lucide-react";
import { Team } from "../types";
import { useF1Data } from "../hooks/useF1Data";
import { useState } from "react";

interface TeamCardProps {
  team: Team;
  index: number;
}

export default function TeamCard({ team, index }: TeamCardProps) {
  const { data } = useF1Data();
  const [liveryError, setLiveryError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  // Calculate team stats from API driver data if available
  const teamDrivers = data?.drivers?.filter((d) => d.teamId === team.id) || [];
  const seasonPoints = teamDrivers.reduce((sum, d) => sum + d.season.points, 0);
  const seasonWins = teamDrivers.reduce((sum, d) => sum + d.season.wins, 0);
  const seasonPodiums = teamDrivers.reduce(
    (sum, d) => sum + d.season.podiums,
    0,
  );
  const seasonPoles = teamDrivers.reduce((sum, d) => sum + d.season.poles, 0);
  const seasonFL = teamDrivers.reduce(
    (sum, d) => sum + d.season.fastestLaps,
    0,
  );

  const stats = [
    { label: "Championships", value: team.championships, icon: Trophy },
    { label: "Wins", value: team.wins, icon: Award },
    { label: "Poles", value: team.poles, icon: Flag },
    { label: "Fastest Laps", value: team.fastestLaps || 0, icon: Timer },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <Link to={`/team/${team.id}`} className="block h-full">
        {/* ═══════════════════════════════════════════════════════
            DESKTOP: vertical card
            ═══════════════════════════════════════════════════════ */}
        <article className="hidden sm:flex group bg-f1-card hover:bg-f1-surface/30 active:bg-f1-surface/50 transition-colors flex-col h-full border border-f1-border overflow-hidden ">
          {/* Top accent bar */}
          <div
            className="h-1 bg-f1-border transition-colors"
            style={{ "--team-color": team.color } as React.CSSProperties}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                team.color)
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "")
            }
          />

          {/* ── Livery Image Section ── */}
          <div
            className="relative h-[160px] md:h-[180px] overflow-hidden"
            style={{ backgroundColor: team.color + "08" }}
          >
            {!liveryError ? (
              <img
                src={team.livery}
                alt={`${team.shortName} 2026 livery`}
                className="w-full h-full object-contain object-center p-3 md:p-4 group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={() => setLiveryError(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                <ImageOff size={24} className="text-f1-muted opacity-40" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-f1-muted">
                  Livery unavailable
                </span>
              </div>
            )}

            {/* Gradient overlay at bottom for text readability */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-f1-card to-transparent" />

            {/* Logo badge - top right */}
            {!logoError && (
              <div className="absolute top-2 right-2 bg-f1-card/80 backdrop-blur-sm border border-f1-border/40  p-1.5">
                <img
                  src={team.logo}
                  alt={`${team.shortName} logo`}
                  className="h-5 w-auto object-contain"
                  loading="lazy"
                  onError={() => setLogoError(true)}
                />
              </div>
            )}
          </div>

          {/* ── Header ── */}
          <header className="px-4 py-2.5 border-b border-f1-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Country Flag */}
              <span
                className={`fi fi-${team.countryCode.toLowerCase()} text-sm`}
              />
              <span
                className="font-mono text-[10px] uppercase tracking-widest font-semibold"
                style={{ color: team.color }}
              >
                {team.powerUnit}
              </span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-f1-muted">
              Since {team.firstEntry}
            </span>
          </header>

          {/* ── Content ── */}
          <div className="p-4 flex flex-col flex-1">
            <div className="mb-3">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-f1-muted">
                  {team.base.split(",").pop()?.trim()}
                </p>
              </div>
              <h3 className="font-display text-xl font-extrabold uppercase leading-tight text-white group-hover:text-f1-accent transition-colors">
                {team.shortName}
              </h3>
              <p className="text-[11px] text-f1-muted mt-0.5">
                {team.chassis} · {team.principal}
              </p>
            </div>

            {/* 2026 Season mini-stats */}
            {teamDrivers.length > 0 && (
              <div className="mb-3 px-2.5 py-2 bg-f1-surface/30  border border-f1-border/30">
                <span className="font-mono text-[9px] uppercase tracking-widest text-f1-accent">
                  2026 Season
                </span>
                <div className="flex gap-3 mt-1.5">
                  <span className="font-mono text-[11px] text-white">
                    <span className="text-f1-muted">Pts:</span> {seasonPoints}
                  </span>
                  <span className="font-mono text-[11px] text-white">
                    <span className="text-f1-muted">W:</span> {seasonWins}
                  </span>
                  <span className="font-mono text-[11px] text-white">
                    <span className="text-f1-muted">P:</span> {seasonPodiums}
                  </span>
                </div>
              </div>
            )}

            {/* All-time stats */}
            <div className="flex flex-col divide-y divide-f1-border/50 mt-auto">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between py-2"
                >
                  <span className="flex items-center gap-1.5 text-[11px] text-f1-muted">
                    <stat.icon size={11} className="shrink-0" />
                    {stat.label}
                  </span>
                  <span className="font-mono text-[12px] text-white tabular-nums font-semibold">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* ═══════════════════════════════════════════════════════
            MOBILE: horizontal card
            ═══════════════════════════════════════════════════════ */}
        <article className="sm:hidden group bg-f1-card active:bg-f1-surface/50 transition-colors border border-f1-border overflow-hidden  relative">
          {/* Left accent bar */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[3px]"
            style={{ backgroundColor: team.color + "99" }}
          />

          <div className="flex pl-[3px]">
            {/* Logo image - left side */}
            <div
              className="w-[110px] shrink-0 h-[120px] flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: team.color + "12" }}
            >
              {!liveryError ? (
                <img
                  src={team.logo}
                  alt={`${team.shortName} 2026 livery`}
                  className="w-full h-full object-contain p-2"
                  loading="lazy"
                  onError={() => setLiveryError(true)}
                />
              ) : (
                <div className="flex flex-col items-center gap-1">
                  <ImageOff size={16} className="text-f1-muted opacity-40" />
                </div>
              )}
            </div>

            {/* Right content */}
            <div className="flex flex-col flex-1 min-w-0 px-3 py-2.5 justify-between">
              {/* Top row: flag + power unit + first entry */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`fi fi-${team.countryCode.toLowerCase()} text-[10px]`}
                  />
                  <span
                    className="font-mono text-[10px] uppercase tracking-widest font-bold"
                    style={{ color: team.color }}
                  >
                    {team.powerUnit}
                  </span>
                </div>
                <span className="font-mono text-[8px] uppercase tracking-wider text-f1-muted">
                  Since {team.firstEntry}
                </span>
              </div>

              {/* Name + chassis */}
              <div className="leading-none">
                <h3 className="font-display text-[15px] font-extrabold uppercase leading-tight group-hover:text-f1-accent transition-colors">
                  {team.shortName}
                </h3>
                <p className="font-mono text-[8px] uppercase tracking-widest text-f1-muted mt-0.5">
                  {team.chassis} · {team.principal}
                </p>
              </div>

              {/* Stats row */}
              <div className="flex items-end gap-2.5 pt-1.5 border-t border-f1-border/40">
                {[
                  { label: "Titles", value: String(team.championships) },
                  { label: "Wins", value: String(team.wins) },
                  { label: "Poles", value: String(team.poles) },
                ].map((item, i, arr) => (
                  <div key={item.label} className="flex items-end gap-2.5">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono text-[7px] uppercase tracking-widest text-f1-muted leading-none whitespace-nowrap">
                        {item.label}
                      </span>
                      <span className="font-mono text-[13px] font-bold tabular-nums leading-none">
                        {item.value}
                      </span>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="w-px h-4 bg-f1-border/50 mb-px" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
