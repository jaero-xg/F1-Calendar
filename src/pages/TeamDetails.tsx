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
  CalendarDays,
} from "lucide-react";
import { getTeamById } from "../data/teams";
import { getDriverById } from "../data/drivers";

export default function TeamDetails() {
  const { id } = useParams<{ id: string }>();
  const team = getTeamById(id || "");

  if (!team) {
    return (
      <div className="pt-20 sm:pt-24 px-4 sm:section-padding">
        <div className="max-w-7xl mx-auto text-center py-12 sm:py-20">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white">
            Team not found
          </h2>
          <Link
            to="/teams"
            className="text-f1-accent hover:underline mt-4 inline-block text-sm"
          >
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
    <div className="pt-14 sm:pt-24 pb-12 sm:pb-20">
      <div className="px-4 sm:px-0 sm:wrap sm:section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Back link */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link
              to="/teams"
              className="inline-flex items-center gap-2 text-sm text-f1-muted hover:text-white transition-colors mb-4 sm:mb-8"
            >
              <ArrowLeft size={16} /> Back to Teams
            </Link>
          </motion.div>

          {/* Team Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-10"
          >
            <div className="border border-f1-border">
              <div className="h-1" style={{ backgroundColor: team.color }} />
              <div className="p-4 sm:p-6 md:p-8">
                {/* Meta row */}
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                    Est. {team.firstEntry}
                  </span>
                  <span
                    className="px-1.5 sm:px-2 py-[2px] text-[9px] sm:text-[10px] font-medium uppercase tracking-wider"
                    style={{
                      backgroundColor: `${team.color}18`,
                      color: team.color,
                    }}
                  >
                    {team.powerUnit}
                  </span>
                </div>

                {/* Title */}
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-none mb-1 sm:mb-2">
                  {team.shortName}
                </h1>
                <p className="text-xs sm:text-sm text-f1-muted mb-4 sm:mb-6">
                  {team.name}
                </p>

                {/* Location & Principal */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-6 gap-y-1.5 sm:gap-y-2 text-xs sm:text-sm text-f1-muted mb-4 sm:mb-8">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} /> {team.base}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users size={14} /> {team.principal}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Cpu size={14} /> {team.chassis}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-f1-muted max-w-2xl leading-relaxed mb-4 sm:mb-8">
                  {team.description}
                </p>

                {/* Stats grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-f1-border">
                  {stats.map(({ label, value, icon: Icon, accent }) => (
                    <div key={label} className="bg-f1-card p-3 sm:p-4">
                      <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                        <Icon size={14} className={accent} />
                        <span
                          className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] ${accent}`}
                        >
                          {label}
                        </span>
                      </div>
                      <p className="font-display text-2xl sm:text-3xl font-bold text-white">
                        {value.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 sm:gap-8">
            {/* Left: Drivers */}
            <div>
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-4 sm:w-5 h-0.5 bg-f1-accent" />
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                  Lineup
                </span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-white mb-4 sm:mb-6">
                2025 Drivers
              </h2>

              <div className="flex flex-col gap-px bg-f1-border">
                {team.drivers.map((driverId, index) => {
                  const driver = getDriverById(driverId);
                  if (!driver) return null;
                  return (
                    <Link key={driverId} to={`/driver/${driver.id}`}>
                      <div className="bg-f1-card group hover:bg-f1-border/40 transition-colors p-3 sm:p-5 flex items-center justify-between">
                        <div className="flex items-center gap-3 sm:gap-5">
                          <span
                            className="font-display text-2xl sm:text-3xl font-extrabold leading-none w-8 sm:w-10 text-right"
                            style={{ color: team.color }}
                          >
                            {driver.number}
                          </span>
                          <div>
                            <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-f1-muted mb-0.5">
                              Driver {String(index + 1).padStart(2, "0")}
                            </p>
                            <p className="font-display text-lg sm:text-xl font-extrabold uppercase text-white group-hover:text-f1-accent transition-colors">
                              {driver.lastName}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-f1-accent opacity-0 group-hover:opacity-100 transition-opacity">
                          View <ChevronRight size={14} />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right: Team info card */}
            <div>
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-4 sm:w-5 h-0.5 bg-f1-accent" />
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                  Technical
                </span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-white mb-4 sm:mb-6">
                Team Info
              </h2>

              <div className="border border-f1-border">
                <div className="h-1" style={{ backgroundColor: team.color }} />
                <div className="p-4 sm:p-5">
                  <div className="flex flex-col gap-0">
                    {[
                      { label: "Full Name", value: team.name },
                      { label: "Base", value: team.base },
                      { label: "Team Principal", value: team.principal },
                      { label: "Chassis", value: team.chassis },
                      { label: "Power Unit", value: team.powerUnit },
                      { label: "First Entry", value: String(team.firstEntry) },
                    ].map(({ label, value }, i, arr) => (
                      <div
                        key={label}
                        className={`flex justify-between items-start py-2 sm:py-2.5 gap-4 ${
                          i < arr.length - 1
                            ? "border-b border-f1-border/30"
                            : ""
                        }`}
                      >
                        <span className="text-[10px] sm:text-[11px] text-f1-muted shrink-0">
                          {label}
                        </span>
                        <span className="font-mono text-[11px] sm:text-[12px] text-white text-right leading-snug">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Championships badge */}
                  {team.championships > 0 && (
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-f1-border/30">
                      <div className="flex items-center gap-2">
                        <Trophy size={13} className="text-f1-gold" />
                        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-f1-gold">
                          {team.championships}× World Champions
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Season progress */}
              <div className="mt-4 border border-f1-border p-4 sm:p-5">
                <div className="h-1 bg-f1-border mb-3 sm:mb-4" />
                <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-muted mb-3 sm:mb-4">
                  Win Rate
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Wins", value: team.wins, max: 243 },
                    { label: "Podiums", value: team.podiums, max: 812 },
                    { label: "Poles", value: team.poles, max: 244 },
                  ].map(({ label, value, max }) => (
                    <div key={label}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] sm:text-[11px] text-f1-muted">
                          {label}
                        </span>
                        <span className="font-mono text-[10px] sm:text-[11px] text-white">
                          {value}
                        </span>
                      </div>
                      <div className="h-0.5 bg-f1-border">
                        <div
                          className="h-full transition-all duration-700"
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
