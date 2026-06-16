import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Clock, Trophy, Flag, Zap, Timer } from "lucide-react";
import { useF1Data } from "../hooks/useF1Data";
import { getTeamById } from "../data/teams";

/* ═══════════════════════════════════════════════════════════════
   MODE BUTTON
   ═══════════════════════════════════════════════════════════════ */
function ModeButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 border font-mono text-[11px] sm:text-xs uppercase tracking-wider transition-all rounded-sm ${
        active
          ? "border-f1-accent text-f1-accent bg-f1-accent/5"
          : "border-f1-border/50 text-f1-muted hover:text-white hover:border-f1-border"
      }`}
    >
      {children}
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STAT CARD
   ═══════════════════════════════════════════════════════════════ */
function StatCard({
  stat,
  index,
}: {
  stat: { label: string; value: number; icon: React.ElementType };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-f1-card p-2.5 sm:p-3 md:p-5 text-center"
    >
      <stat.icon
        size={14}
        className="mx-auto mb-1 sm:mb-1.5 md:mb-2 text-f1-muted"
      />
      <p className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white tabular-nums">
        {stat.value}
      </p>
      <p className="font-mono text-[8px] sm:text-[9px] md:text-[10px] text-f1-muted uppercase tracking-[0.1em] mt-0.5 sm:mt-1">
        {stat.label}
      </p>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   RACE RESULT ROW
   ═══════════════════════════════════════════════════════════════ */
function ResultRow({
  stat,
  index,
}: {
  stat: {
    race: string;
    position: number | null;
    points: number | null;
    pole: boolean | null;
    fastestLap: boolean | null;
  };
  index: number;
}) {
  const getPositionDisplay = (pos: number | null) => {
    if (pos === null)
      return <span className="text-f1-muted text-[11px] sm:text-xs">—</span>;
    if (pos === 99)
      return (
        <span className="text-red-400 text-[11px] sm:text-xs font-bold">
          DNF
        </span>
      );
    if (pos === 1)
      return (
        <span className="text-f1-gold text-[11px] sm:text-xs font-bold">
          1st
        </span>
      );
    if (pos === 2)
      return (
        <span className="text-f1-silver text-[11px] sm:text-xs font-bold">
          2nd
        </span>
      );
    if (pos === 3)
      return (
        <span className="text-f1-bronze text-[11px] sm:text-xs font-bold">
          3rd
        </span>
      );
    return (
      <span className="text-white text-[11px] sm:text-xs font-medium">
        {pos}th
      </span>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.04 }}
      className="grid grid-cols-[1fr_48px_48px_36px_36px] sm:grid-cols-[1fr_60px_60px_48px_48px] md:grid-cols-[1fr_80px_80px_60px_60px] gap-0 border-b border-f1-border/50 last:border-b-0 hover:bg-f1-surface/30 transition-colors"
    >
      <div className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-[11px] sm:text-xs md:text-sm font-medium text-white truncate">
        {stat.race}
      </div>
      <div className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-center flex items-center justify-center">
        {getPositionDisplay(stat.position)}
      </div>
      <div className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-center flex items-center justify-center">
        {stat.points !== null ? (
          <span className="text-[11px] sm:text-xs md:text-sm text-white font-mono">
            {stat.points}
          </span>
        ) : (
          <span className="text-f1-muted text-[11px] sm:text-xs">—</span>
        )}
      </div>
      <div className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-center flex items-center justify-center">
        {stat.pole ? (
          <Star
            size={11}
            className="text-purple-400 sm:size-3 md:size-[14px]"
          />
        ) : (
          <span className="text-f1-muted text-[10px] sm:text-xs">—</span>
        )}
      </div>
      <div className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-center flex items-center justify-center">
        {stat.fastestLap ? (
          <Clock
            size={11}
            className="text-f1-accent sm:size-3 md:size-[14px]"
          />
        ) : (
          <span className="text-f1-muted text-[10px] sm:text-xs">—</span>
        )}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ALL-TIME STAT CARD
   ═══════════════════════════════════════════════════════════════ */
function CareerStatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-f1-card p-3 sm:p-4 md:p-6 border border-f1-border/50 rounded-sm">
      <p className="font-mono text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.12em] text-f1-muted mb-1 sm:mb-1.5 md:mb-2">
        {label}
      </p>
      <p className="font-display text-lg sm:text-xl md:text-2xl font-extrabold text-white tabular-nums">
        {value}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DRIVER DETAILS PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function DriverDetails() {
  const { id } = useParams<{ id: string }>();
  const { data, loading } = useF1Data();
  const [logoError, setLogoError] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-3">
        <div className="font-mono text-sm text-f1-muted animate-pulse">
          Loading driver...
        </div>
      </div>
    );
  }

  const driver = data?.drivers.find((d) => d.id === id);

  if (!driver) {
    return (
      <div className="min-h-screen flex items-center justify-center px-3">
        <div className="text-center">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold uppercase text-white mb-4">
            Driver not found
          </h2>
          <Link
            to="/drivers"
            className="text-f1-accent hover:underline text-sm"
          >
            Back to Drivers
          </Link>
        </div>
      </div>
    );
  }

  // Get team data for logo
  const team = getTeamById(driver.teamId);

  const [mode, setMode] = useState<"2026" | "all-time">("2026");

  // Build stats grid based on mode
  const stats2026 = [
    { label: "Points", value: driver.season.points, icon: Trophy },
    { label: "Wins", value: driver.season.wins, icon: Flag },
    { label: "Podiums", value: driver.season.podiums, icon: Trophy },
    { label: "Poles", value: driver.season.poles, icon: Star },
    { label: "Starts", value: driver.season.starts, icon: Timer },
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
    { label: "Starts", value: driver.allTime.starts, icon: Timer },
    { label: "Fastest Laps", value: driver.allTime.fastestLaps, icon: Zap },
  ];

  const stats = mode === "2026" ? stats2026 : statsAllTime;

  // Filter to only completed races for the table
  const completedRaces = driver.seasonStats.filter(
    (s) => s.position !== null && s.points !== null,
  );

  return (
    <div className="py-4 sm:py-6 md:py-8 lg:py-10 border-b border-f1-border">
      <div className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Back link */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link
              to="/drivers"
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-sm text-f1-muted hover:text-white transition-colors mb-3 sm:mb-6"
            >
              <ArrowLeft size={14} className="sm:size-4" /> All Drivers
            </Link>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════
              DRIVER HEADER
              ═══════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-8 md:mb-10"
          >
            <div className="border border-f1-border overflow-hidden rounded-sm">
              <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr]">
                {/* Left: Image - anchored to bottom, no floating */}
                <div
                  className="relative flex items-end justify-center overflow-hidden"
                  style={{
                    backgroundColor: driver.teamColor + "10",
                    minHeight: "180px",
                  }}
                >
                  <img
                    src={driver.image}
                    alt={`${driver.firstName} ${driver.lastName}`}
                    className="w-full h-auto max-h-[200px] sm:max-h-[220px] md:max-h-[260px] lg:max-h-[300px] object-contain object-bottom"
                    style={{
                      marginBottom: "-1px", // eliminates subpixel gap
                    }}
                    loading="lazy"
                  />
                </div>

                {/* Right: Info */}
                <div className="p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    {/* Team Logo instead of team name text */}
                    {team && !logoError ? (
                      <Link
                        to={`/team/${team.id}`}
                        className="flex items-center gap-1.5 px-2 py-1 rounded-sm border border-f1-border/30 hover:border-f1-border/60 transition-colors"
                        style={{
                          backgroundColor: driver.teamColor + "10",
                        }}
                      >
                        <img
                          src={team.logo}
                          alt={team.shortName}
                          className="h-4 sm:h-5 w-auto object-contain"
                          loading="lazy"
                          onError={() => setLogoError(true)}
                        />
                        <span
                          className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-medium"
                          style={{ color: driver.teamColor }}
                        >
                          {team.shortName}
                        </span>
                      </Link>
                    ) : (
                      <span
                        className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-medium px-1.5 py-[2px] rounded-sm"
                        style={{
                          color: driver.teamColor,
                          backgroundColor: driver.teamColor + "15",
                        }}
                      >
                        {driver.team}
                      </span>
                    )}
                    <span className="text-f1-border/40">·</span>
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <span
                        className={`fi fi-${driver.countryCode.toLowerCase()} text-xs sm:text-sm`}
                      />
                      <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-f1-muted">
                        {driver.country}
                      </p>
                    </div>
                  </div>

                  <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight mb-2 sm:mb-3">
                    {driver.firstName}{" "}
                    <span style={{ color: driver.teamColor }}>
                      {driver.lastName}
                    </span>
                  </h1>

                  <p className="text-[11px] sm:text-xs md:text-sm text-f1-muted leading-relaxed max-w-xl">
                    {driver.bio}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════
              MODE TOGGLE
              ═══════════════════════════════════════════════════════════════ */}
          <div className="flex gap-1.5 sm:gap-2 mb-4 sm:mb-6 md:mb-8">
            <ModeButton
              active={mode === "2026"}
              onClick={() => setMode("2026")}
            >
              2026 Season
            </ModeButton>
            <ModeButton
              active={mode === "all-time"}
              onClick={() => setMode("all-time")}
            >
              All Time
            </ModeButton>
          </div>

          {/* ═══════════════════════════════════════════════════════
              STATS GRID
              ═══════════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-f1-border rounded-sm overflow-hidden mb-6 sm:mb-8 md:mb-10">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>

          {/* ═══════════════════════════════════════════════════════
              SECTION HEADER
              ═══════════════════════════════════════════════════════════════ */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4 md:mb-6">
            <div className="w-3 sm:w-4 md:w-5 h-0.5 bg-f1-accent" />
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-accent">
              {mode === "2026" ? "2026 Season" : "All Time"}
            </span>
          </div>
          <h2 className="font-display text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide text-white mb-3 sm:mb-4 md:mb-6">
            {mode === "2026" ? "Race Results" : "Career Statistics"}
          </h2>

          {/* ═══════════════════════════════════════════════════════
              2026 MODE: RACE TABLE
              ═══════════════════════════════════════════════════════════════ */}
          {mode === "2026" ? (
            completedRaces.length > 0 ? (
              <div className="border border-f1-border overflow-hidden rounded-sm">
                {/* Table Header */}
                <div className="grid grid-cols-[1fr_48px_48px_36px_36px] sm:grid-cols-[1fr_60px_60px_48px_48px] md:grid-cols-[1fr_80px_80px_60px_60px] gap-0 border-b border-f1-border bg-f1-surface/30">
                  <div className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 font-mono text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.12em] text-f1-muted">
                    Race
                  </div>
                  <div className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 font-mono text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.12em] text-f1-muted text-center">
                    Pos
                  </div>
                  <div className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 font-mono text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.12em] text-f1-muted text-center">
                    Pts
                  </div>
                  <div className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 font-mono text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.12em] text-f1-muted text-center">
                    Pole
                  </div>
                  <div className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 font-mono text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.12em] text-f1-muted text-center">
                    FL
                  </div>
                </div>

                {/* Table Rows */}
                {completedRaces.map((stat, i) => (
                  <ResultRow key={stat.race} stat={stat} index={i} />
                ))}
              </div>
            ) : (
              <div className="border border-f1-border p-6 sm:p-8 md:p-12 text-center rounded-sm">
                <p className="text-f1-muted text-xs sm:text-sm">
                  No completed races yet.
                </p>
              </div>
            )
          ) : (
            /* ═══════════════════════════════════════════════════════
                ALL-TIME MODE: CAREER SUMMARY
                ═══════════════════════════════════════════════════════════════ */
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              <CareerStatCard
                label="Career Starts"
                value={driver.allTime.starts}
              />
              <CareerStatCard
                label="World Championships"
                value={driver.allTime.championships}
              />
              <CareerStatCard label="Wins" value={driver.allTime.wins} />
              <CareerStatCard label="Podiums" value={driver.allTime.podiums} />
              <CareerStatCard label="Poles" value={driver.allTime.poles} />
              <CareerStatCard
                label="Fastest Laps"
                value={driver.allTime.fastestLaps}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
