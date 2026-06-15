import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Trophy, Award, Flag, Timer } from "lucide-react";
import { Team } from "../types";
import { useF1Data } from "../hooks/useF1Data";

interface TeamCardProps {
  team: Team;
  index: number;
}

export default function TeamCard({ team, index }: TeamCardProps) {
  const { data } = useF1Data();

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
        {/* ── DESKTOP: vertical card ── */}
        <article className="hidden sm:flex group bg-f1-card hover:bg-f1-surface/30 active:bg-f1-surface/50 transition-colors flex-col h-full border border-f1-border overflow-hidden rounded-sm">
          <div
            className="h-0.5 bg-f1-border transition-colors"
            style={{ "--team-color": team.color } as React.CSSProperties}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                team.color)
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "")
            }
          />

          <header className="px-4 py-3 border-b border-f1-border flex items-center justify-between">
            <span
              className="font-mono text-[10px] uppercase tracking-widest"
              style={{ color: team.color }}
            >
              {team.powerUnit}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-f1-muted">
              Since {team.firstEntry}
            </span>
          </header>

          <div className="p-4 flex flex-col flex-1">
            <div className="mb-3">
              <p className="font-mono text-[10px] uppercase tracking-widest text-f1-muted mb-1">
                {team.base.split(",").pop()?.trim()}
              </p>
              <h3 className="font-display text-xl font-extrabold uppercase leading-tight text-white group-hover:text-f1-accent transition-colors">
                {team.shortName}
              </h3>
              <p className="text-[11px] text-f1-muted mt-0.5">
                {team.chassis} · {team.principal}
              </p>
            </div>

            <div
              className="flex-1 min-h-[130px] flex items-center justify-center mb-3 border border-f1-border/40 overflow-hidden rounded-sm relative"
              style={{ backgroundColor: team.color + "10" }}
            >
              <span
                className="font-display text-[80px] font-black opacity-[0.07] pointer-events-none select-none leading-none"
                style={{ color: team.color }}
              >
                F1
              </span>
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ backgroundColor: team.color + "60" }}
              />
            </div>

            {/* 2026 Season mini-stats */}
            {teamDrivers.length > 0 && (
              <div className="mb-2 px-2 py-1.5 bg-f1-surface/30 rounded-sm border border-f1-border/30">
                <span className="font-mono text-[9px] uppercase tracking-widest text-f1-accent">
                  2026 Season
                </span>
                <div className="flex gap-3 mt-1">
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

            <div className="flex flex-col divide-y divide-f1-border/50">
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

        {/* ── MOBILE: horizontal card ── */}
        <article className="sm:hidden group bg-f1-card active:bg-f1-surface/50 transition-colors border border-f1-border overflow-hidden rounded-sm relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-[3px]"
            style={{ backgroundColor: team.color + "99" }}
          />

          <div className="flex pl-[3px] h-[100px]">
            {/* Color block — fixed width, flush */}
            <div
              className="w-[80px] shrink-0 h-full flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: team.color + "18" }}
            >
              <span
                className="font-display text-[40px] font-black opacity-20 pointer-events-none select-none leading-none"
                style={{ color: team.color }}
              >
                F1
              </span>
            </div>

            {/* Right content */}
            <div className="flex flex-col flex-1 min-w-0 px-3 py-2 justify-between">
              {/* Top row: power unit + first entry */}
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-[11px] uppercase tracking-widest font-bold"
                  style={{ color: team.color }}
                >
                  {team.powerUnit}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider truncate ml-2 max-w-[120px] text-f1-muted">
                  Since {team.firstEntry}
                </span>
              </div>

              {/* Name */}
              <div className="leading-none">
                <span className="font-mono text-[9px] uppercase tracking-widest text-f1-muted">
                  {team.base.split(",").pop()?.trim()}
                </span>
                <h3 className="font-display text-[16px] font-extrabold uppercase leading-none group-hover:text-f1-accent transition-colors">
                  {team.shortName}
                </h3>
              </div>

              {/* Stats row — labels on top, values below, strictly aligned */}
              <div className="flex items-end gap-3 pt-1.5 border-t border-f1-border/40">
                {[
                  { label: "Titles", value: String(team.championships) },
                  { label: "Wins", value: String(team.wins) },
                  { label: "Poles", value: String(team.poles) },
                  { label: "FL", value: String(team.fastestLaps || 0) },
                ].map((item, i, arr) => (
                  <div key={item.label} className="flex items-end gap-3">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-f1-muted leading-none whitespace-nowrap">
                        {item.label}
                      </span>
                      <span className="font-mono text-[14px] font-bold tabular-nums leading-none">
                        {item.value}
                      </span>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="w-px h-5 bg-f1-border/50 mb-px" />
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
