import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Driver, StatMode } from "../types";
import { getTeamById } from "../data/teams";
import { Trophy, Flag, Star, Zap, Timer } from "lucide-react";
import { useState } from "react";

interface DriverCardProps {
  driver: Driver;
  index: number;
  mode: StatMode;
}

export default function DriverCard({ driver, index, mode }: DriverCardProps) {
  const fullName = `${driver.firstName} ${driver.lastName}`;
  const [logoError, setLogoError] = useState(false);

  // Get team data for logo
  const team = getTeamById(driver.teamId);

  // Build stats based on mode
  const stats2026 = [
    { label: "Points", value: driver.season.points, icon: Trophy },
    { label: "Wins", value: driver.season.wins, icon: Flag },
    { label: "Podiums", value: driver.season.podiums, icon: Trophy },
    { label: "Poles", value: driver.season.poles, icon: Star },
    { label: "Races", value: driver.season.starts, icon: Timer },
    { label: "Fastest Laps", value: driver.season.fastestLaps, icon: Zap },
  ];

  const statsAllTime = [
    {
      label: "Championships",
      value: driver.allTime.championships,
      icon: Trophy,
    },
    { label: "Wins", value: driver.allTime.wins, icon: Flag },
    { label: "Podiums", value: driver.allTime.podiums, icon: Trophy },
    { label: "Poles", value: driver.allTime.poles, icon: Star },
    { label: "Races", value: driver.allTime.starts, icon: Timer },
    { label: "Fastest Laps", value: driver.allTime.fastestLaps, icon: Zap },
  ];

  const stats = mode === "2026" ? stats2026 : statsAllTime;

  // Mobile: clean stats without redundancy
  const mobileStats =
    mode === "2026"
      ? [
          { label: "Pts", value: driver.season.points },
          { label: "Wins", value: driver.season.wins },
          { label: "Podiums", value: driver.season.podiums },
          { label: "Poles", value: driver.season.poles },
        ]
      : [
          {
            label: "WDC",
            value: driver.allTime.championships,
          },
          { label: "Wins", value: driver.allTime.wins },
          { label: "Podiums", value: driver.allTime.podiums },
          { label: "Poles", value: driver.allTime.poles },
        ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <Link to={`/driver/${driver.id}`} className="block h-full">
        {/* ── DESKTOP: vertical card ── */}
        <article className="hidden sm:flex group bg-f1-card hover:bg-f1-surface/30 active:bg-f1-surface/50 transition-colors flex-col h-full border border-f1-border overflow-hidden rounded-sm">
          <div className="h-0.5 bg-f1-border group-hover:bg-f1-accent transition-colors" />

          <header className="px-4 py-3 border-b border-f1-border flex items-center justify-between">
            <span
              className="font-mono text-[10px] uppercase tracking-widest font-semibold"
              style={{ color: driver.teamColor }}
            >
              #{driver.number}
            </span>
            {/* Team Logo instead of text */}
            {team && !logoError ? (
              <Link
                to={`/team/${team.id}`}
                className="shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={team.logo}
                  alt={team.shortName}
                  className="h-4 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  onError={() => setLogoError(true)}
                />
              </Link>
            ) : (
              <span
                className="font-mono text-[10px] uppercase tracking-widest truncate"
                style={{ color: driver.teamColor + "99" }}
              >
                {driver.team}
              </span>
            )}
          </header>

          <div className="p-4 flex flex-col flex-1">
            <div className="mb-3">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`fi fi-${driver.countryCode.toLowerCase()} text-base`}
                />
                <p className="font-mono text-[10px] uppercase tracking-widest text-f1-muted">
                  {driver.country}
                </p>
              </div>
              <h3 className="font-display text-xl font-extrabold uppercase leading-tight group-hover:text-f1-accent transition-colors">
                <span className="text-f1-muted font-normal">
                  {driver.firstName}{" "}
                </span>
                <span className="text-white">{driver.lastName}</span>
              </h3>
            </div>

            {/* IMAGE CONTAINER - anchored to bottom */}
            <div
              className="flex-1 min-h-[130px] flex items-end justify-center mb-3 border border-f1-border/40 overflow-hidden rounded-sm"
              style={{ backgroundColor: driver.teamColor + "10" }}
            >
              <img
                src={driver.image}
                alt={fullName}
                className="w-full h-full object-contain object-bottom"
                loading="lazy"
              />
            </div>

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
            style={{ backgroundColor: driver.teamColor + "99" }}
          />

          <div className="flex pl-[3px] h-[100px]">
            {/* Image - anchored to bottom */}
            <div
              className="w-[80px] shrink-0 h-full flex items-end justify-center overflow-hidden"
              style={{ backgroundColor: driver.teamColor + "18" }}
            >
              <img
                src={driver.image}
                alt={fullName}
                className="w-full h-full object-contain object-bottom"
                loading="lazy"
              />
            </div>

            {/* Right content */}
            <div className="flex flex-col flex-1 min-w-0 px-3 py-2 justify-between">
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-[11px] uppercase tracking-widest font-bold"
                  style={{ color: driver.teamColor }}
                >
                  #{driver.number}
                </span>
                {/* Team Logo on mobile */}
                {team && !logoError ? (
                  <Link
                    to={`/team/${team.id}`}
                    className="shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={team.logo}
                      alt={team.shortName}
                      className="h-3.5 w-auto object-contain opacity-80"
                      loading="lazy"
                      onError={() => setLogoError(true)}
                    />
                  </Link>
                ) : (
                  <span
                    className="font-mono text-[9px] uppercase tracking-wider truncate ml-2 max-w-[120px]"
                    style={{ color: driver.teamColor + "90" }}
                  >
                    {driver.team}
                  </span>
                )}
              </div>

              <div className="leading-none">
                <div className="flex items-center gap-1 mb-0.5">
                  <span
                    className={`fi fi-${driver.countryCode.toLowerCase()} text-[10px]`}
                  />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-f1-muted">
                    {driver.firstName}
                  </span>
                </div>
                <h3 className="font-display text-[16px] font-extrabold uppercase leading-none group-hover:text-f1-accent transition-colors">
                  {driver.lastName}
                </h3>
              </div>

              <div className="flex items-end gap-4 pt-1.5 border-t border-f1-border/40">
                {mobileStats.map((item, i) => (
                  <div key={item.label} className="flex items-end gap-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-f1-muted leading-none whitespace-nowrap">
                        {item.label}
                      </span>
                      <span className="font-mono text-[14px] font-bold tabular-nums leading-none">
                        {item.value}
                      </span>
                    </div>
                    {i < mobileStats.length - 1 && (
                      <div className="w-px h-6 bg-f1-border/50 mb-px" />
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
