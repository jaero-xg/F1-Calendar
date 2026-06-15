import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Trophy,
  Zap,
  Flag,
  ChevronRight,
  Users,
  Cpu,
} from "lucide-react";
import { getTeamById } from "../data/teams";
import { useF1Data } from "../hooks/useF1Data";

export default function TeamDetails() {
  const { id } = useParams<{ id: string }>();
  const team = getTeamById(id || "");
  const { data } = useF1Data();

  if (!team) {
    return (
      <div className="min-h-screen flex items-center justify-center px-3">
        <div className="text-center">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold uppercase text-white mb-4">
            Team not found
          </h2>
          <Link to="/teams" className="text-f1-accent hover:underline text-sm">
            Back to Teams
          </Link>
        </div>
      </div>
    );
  }

  const stats = [
    {
      label: "Championships",
      value: team.championships,
      icon: Trophy,
      accent: "text-f1-gold",
    },
    {
      label: "Race Wins",
      value: team.wins,
      icon: Flag,
      accent: "text-f1-accent",
    },
    {
      label: "Podiums",
      value: team.podiums,
      icon: Zap,
      accent: "text-purple-400",
    },
    {
      label: "Pole Positions",
      value: team.poles,
      icon: Flag,
      accent: "text-blue-400",
    },
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20">
      <div className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Back link */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link
              to="/teams"
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-sm text-f1-muted hover:text-white transition-colors mb-3 sm:mb-6"
            >
              <ArrowLeft size={14} className="sm:size-4" /> Back to Teams
            </Link>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════
              TEAM HEADER
              ═══════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-8 md:mb-10"
          >
            <div className="border border-f1-border overflow-hidden rounded-sm">
              <div className="h-1" style={{ backgroundColor: team.color }} />
              <div className="p-3 sm:p-5 md:p-6 lg:p-8">
                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                    Est. {team.firstEntry}
                  </span>
                  <span
                    className="px-1.5 py-[2px] text-[9px] sm:text-[10px] font-medium uppercase tracking-wider rounded-sm"
                    style={{
                      backgroundColor: `${team.color}18`,
                      color: team.color,
                    }}
                  >
                    {team.powerUnit}
                  </span>
                </div>

                {/* Title */}
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight mb-0.5 sm:mb-1">
                  {team.shortName}
                </h1>
                <p className="text-[11px] sm:text-xs md:text-sm text-f1-muted mb-3 sm:mb-4 md:mb-6">
                  {team.name}
                </p>

                {/* Location & Principal */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-4 sm:gap-x-6 gap-y-1 sm:gap-y-1.5 text-[11px] sm:text-xs md:text-sm text-f1-muted mb-3 sm:mb-4 md:mb-8">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="sm:size-[14px] shrink-0" />{" "}
                    {team.base}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users size={13} className="sm:size-[14px] shrink-0" />{" "}
                    {team.principal}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Cpu size={13} className="sm:size-[14px] shrink-0" />{" "}
                    {team.chassis}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[11px] sm:text-xs md:text-sm text-f1-muted max-w-2xl leading-relaxed mb-3 sm:mb-4 md:mb-8">
                  {team.description}
                </p>

                {/* Stats grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-f1-border rounded-sm overflow-hidden">
                  {stats.map(({ label, value, icon: Icon, accent }) => (
                    <div key={label} className="bg-f1-card p-2.5 sm:p-3 md:p-4">
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
                        <Icon
                          size={12}
                          className={`sm:size-[14px] ${accent} shrink-0`}
                        />
                        <span
                          className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] ${accent}`}
                        >
                          {label}
                        </span>
                      </div>
                      <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white">
                        {value.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════
              CONTENT GRID
              ═══════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-4 sm:gap-6 md:gap-8">
            {/* Left: Drivers */}
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4 md:mb-6">
                <div className="w-3 sm:w-4 md:w-5 h-0.5 bg-f1-accent" />
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                  Lineup
                </span>
              </div>
              <h2 className="font-display text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide text-white mb-3 sm:mb-4 md:mb-6">
                2026 Drivers
              </h2>

              <div className="flex flex-col divide-y divide-f1-border/30 bg-f1-border rounded-sm overflow-hidden">
                {team.drivers.map((driverId, index) => {
                  const driver = data?.drivers.find((d) => d.id === driverId);
                  if (!driver) return null;

                  return (
                    <Link key={driverId} to={`/driver/${driver.id}`}>
                      <div className="bg-f1-card group hover:bg-f1-border/40 transition-colors p-2.5 sm:p-3 md:p-5 flex items-center justify-between">
                        <div className="flex items-center gap-2.5 sm:gap-3 md:gap-5 min-w-0">
                          <span
                            className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold leading-none w-6 sm:w-8 md:w-10 text-right shrink-0"
                            style={{ color: team.color }}
                          >
                            {driver.number}
                          </span>
                          <div className="min-w-0">
                            <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-f1-muted mb-0.5">
                              Driver {String(index + 1).padStart(2, "0")}
                            </p>
                            <p className="font-display text-base sm:text-lg md:text-xl font-extrabold uppercase text-white group-hover:text-f1-accent transition-colors truncate">
                              {driver.firstName} {driver.lastName}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] sm:text-xs text-f1-accent opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2">
                          <span className="hidden sm:inline">View</span>{" "}
                          <ChevronRight size={14} className="sm:size-4" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right: Team info card */}
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4 md:mb-6">
                <div className="w-3 sm:w-4 md:w-5 h-0.5 bg-f1-accent" />
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                  Technical
                </span>
              </div>
              <h2 className="font-display text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide text-white mb-3 sm:mb-4 md:mb-6">
                Team Info
              </h2>

              <div className="border border-f1-border overflow-hidden rounded-sm">
                <div className="h-1" style={{ backgroundColor: team.color }} />
                <div className="p-3 sm:p-4 md:p-5">
                  <div className="flex flex-col divide-y divide-f1-border/30">
                    {[
                      { label: "Full Name", value: team.name },
                      { label: "Base", value: team.base },
                      { label: "Team Principal", value: team.principal },
                      { label: "Chassis", value: team.chassis },
                      { label: "Power Unit", value: team.powerUnit },
                      { label: "First Entry", value: String(team.firstEntry) },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="flex justify-between items-start py-1.5 sm:py-2 gap-4"
                      >
                        <span className="text-[10px] sm:text-[11px] text-f1-muted shrink-0">
                          {label}
                        </span>
                        <span className="font-mono text-[10px] sm:text-[11px] md:text-xs text-white text-right leading-snug">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Championships badge */}
                  {team.championships > 0 && (
                    <div className="mt-2 sm:mt-3 md:mt-4 pt-2 sm:pt-3 md:pt-4 border-t border-f1-border/30">
                      <div className="flex items-center gap-1.5">
                        <Trophy
                          size={12}
                          className="sm:size-[13px] text-f1-gold shrink-0"
                        />
                        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-f1-gold">
                          {team.championships}× World Champions
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Season progress */}
              <div className="mt-3 sm:mt-4 border border-f1-border p-3 sm:p-4 md:p-5 rounded-sm">
                <div className="h-1 bg-f1-border mb-2 sm:mb-3 md:mb-4" />
                <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-muted mb-2 sm:mb-3 md:mb-4">
                  Win Rate
                </p>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    { label: "Wins", value: team.wins, max: 243 },
                    { label: "Podiums", value: team.podiums, max: 812 },
                    { label: "Poles", value: team.poles, max: 244 },
                  ].map(({ label, value, max }) => (
                    <div key={label}>
                      <div className="flex justify-between items-center mb-0.5 sm:mb-1">
                        <span className="text-[10px] sm:text-[11px] text-f1-muted">
                          {label}
                        </span>
                        <span className="font-mono text-[10px] sm:text-[11px] text-white">
                          {value}
                        </span>
                      </div>
                      <div className="h-0.5 bg-f1-border rounded-full overflow-hidden">
                        <div
                          className="h-full transition-all duration-700 rounded-full"
                          style={{
                            width: `${Math.min((value / max) * 100, 100)}%`,
                            backgroundColor: team.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
