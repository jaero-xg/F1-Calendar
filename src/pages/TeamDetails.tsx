import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Trophy,
  Award,
  Flag,
  Timer,
  MapPin,
  Users,
  Wrench,
  Zap,
  Calendar,
  TrendingUp,
  ImageOff,
  Car,
} from "lucide-react";
import { getTeamById } from "../data/teams";
import { useF1Data } from "../hooks/useF1Data";
import { useState } from "react";

export default function TeamDetails() {
  const { id } = useParams<{ id: string }>();
  const team = getTeamById(id || "");
  const { data } = useF1Data();
  const [liveryError, setLiveryError] = useState(false);
  const [logoError, setLogoError] = useState(false);

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

  // Get team drivers from data
  const teamDrivers = data?.drivers?.filter((d) => d.teamId === team.id) || [];

  // Calculate season stats
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

  const allTimeStats = [
    {
      label: "Constructors' Titles",
      value: team.championships,
      icon: Trophy,
      accent: "text-yellow-400",
    },
    {
      label: "Race Wins",
      value: team.wins,
      icon: Award,
      accent: "text-f1-accent",
    },
    {
      label: "Podiums",
      value: team.podiums,
      icon: TrendingUp,
      accent: "text-purple-400",
    },
    {
      label: "Pole Positions",
      value: team.poles,
      icon: Flag,
      accent: "text-blue-400",
    },
    {
      label: "Fastest Laps",
      value: team.fastestLaps,
      icon: Timer,
      accent: "text-orange-400",
    },
    {
      label: "First Entry",
      value: team.firstEntry,
      icon: Calendar,
      accent: "text-green-400",
    },
  ];

  const seasonStats = [
    { label: "Points", value: seasonPoints, icon: Trophy },
    { label: "Wins", value: seasonWins, icon: Award },
    { label: "Podiums", value: seasonPodiums, icon: TrendingUp },
    { label: "Poles", value: seasonPoles, icon: Flag },
    { label: "Fastest Laps", value: seasonFL, icon: Timer },
  ];

  return (
    <div className="py-4 sm:py-6 md:py-8 lg:py-10 border-b border-f1-border">
      <div className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link
              to="/teams"
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-sm text-f1-muted hover:text-white transition-colors mb-3 sm:mb-6"
            >
              <ArrowLeft size={14} className="sm:size-4" /> Back to Teams
            </Link>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════
              HERO SECTION: Livery + Team Identity
              ═══════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-8 md:mb-10"
          >
            <div className="border border-f1-border overflow-hidden ">
              {/* Full-width accent bar */}
              <div className="h-1.5" style={{ backgroundColor: team.color }} />

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px]">
                {/* Left: Team Info */}
                <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                  {/* Meta row: flag + country + first entry */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-f1-surface/40  border border-f1-border/30">
                      <span
                        className={`fi fi-${team.countryCode.toLowerCase()} text-base sm:text-lg`}
                      />
                      <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-f1-muted">
                        {team.country}
                      </span>
                    </div>
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                      Since {team.firstEntry}
                    </span>
                  </div>

                  {/* Title + Logo row */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    {!logoError && (
                      <img
                        src={team.logo}
                        alt={`${team.shortName} logo`}
                        className="h-10 sm:h-14 md:h-16 w-auto object-contain"
                        loading="eager"
                        onError={() => setLogoError(true)}
                      />
                    )}
                    <div>
                      <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
                        {team.shortName}
                      </h1>
                      <p className="text-[11px] sm:text-xs md:text-sm text-f1-muted mt-0.5 sm:mt-1">
                        {team.name}
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1 sm:gap-y-1.5 text-[11px] sm:text-xs md:text-sm text-f1-muted mb-3 sm:mb-4 md:mb-6">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="sm:size-[14px] shrink-0" />
                      {team.base}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[11px] sm:text-xs md:text-sm text-f1-muted max-w-2xl leading-relaxed mb-4 sm:mb-6">
                    {team.description}
                  </p>
                </div>

                {/* Right: Livery Image */}
                <div
                  className="relative h-[200px] sm:h-[260px] md:h-[300px] lg:h-auto flex items-center justify-center overflow-hidden border-t lg:border-t-0 lg:border-l border-f1-border"
                  style={{ backgroundColor: team.color + "08" }}
                >
                  {!liveryError ? (
                    <img
                      src={team.livery}
                      alt={`${team.shortName} 2026 livery`}
                      className="w-full h-full object-contain p-4 sm:p-6 md:p-8"
                      loading="eager"
                      onError={() => setLiveryError(true)}
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-3 text-f1-muted">
                      <Car size={32} className="opacity-30" />
                      <span className="font-mono text-[10px] uppercase tracking-widest">
                        Livery image unavailable
                      </span>
                    </div>
                  )}

                  {/* Chassis label */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-f1-card/80 backdrop-blur-sm border border-f1-border/40">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-f1-muted">
                      {team.chassis}
                    </span>
                  </div>
                </div>
              </div>

              {/* All-time stats strip */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-px bg-f1-border border-t border-f1-border">
                {allTimeStats.map(({ label, value, icon: Icon, accent }) => (
                  <div key={label} className="bg-f1-card p-2.5 sm:p-3 md:p-4">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
                      <Icon size={11} className={`${accent} shrink-0`} />
                      <span
                        className={`font-mono text-[8px] sm:text-[10px] uppercase tracking-[0.12em] ${accent}`}
                      >
                        {label}
                      </span>
                    </div>
                    <p className="font-display text-sm sm:text-base md:text-lg font-bold text-white truncate">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
            {/* Team Info */}
            <div className="border border-f1-border overflow-hidden">
              <div className="h-1" style={{ backgroundColor: team.color }} />
              <div className="p-3 sm:p-4 md:p-6">
                <div className="flex items-center gap-2 mb-3 sm:mb-4 md:mb-6">
                  <div className="w-3 sm:w-4 md:w-5 h-0.5 bg-f1-accent" />
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                    Team Information
                  </span>
                </div>

                <h2 className="font-display text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide text-white mb-3 sm:mb-4 md:mb-6">
                  Technical Details
                </h2>

                <div className="space-y-3 sm:space-y-4">
                  {[
                    {
                      label: "Full Name",
                      value: team.name,
                      icon: Users,
                    },
                    {
                      label: "Team Principal",
                      value: team.principal,
                      icon: Users,
                    },
                    {
                      label: "Chassis",
                      value: team.chassis,
                      icon: Wrench,
                    },
                    {
                      label: "Power Unit",
                      value: team.powerUnit,
                      icon: Zap,
                    },
                    {
                      label: "Base",
                      value: team.base,
                      icon: MapPin,
                    },
                    {
                      label: "First Entry",
                      value: String(team.firstEntry),
                      icon: Calendar,
                    },
                    {
                      label: "Country",
                      value: (
                        <span className="flex items-center gap-1.5">
                          <span
                            className={`fi fi-${team.countryCode.toLowerCase()}`}
                          />
                          {team.country}
                        </span>
                      ),
                      icon: Flag,
                    },
                  ].map(({ label, value, icon: Icon }) => (
                    <div
                      key={label}
                      className="flex items-start gap-3 p-2.5 sm:p-3 bg-f1-surface/30"
                    >
                      <Icon
                        size={14}
                        className="shrink-0 mt-0.5 text-f1-accent"
                      />
                      <div className="min-w-0">
                        <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-f1-muted mb-0.5">
                          {label}
                        </p>
                        <p className="text-sm sm:text-base text-white font-medium">
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2026 Season Stats */}
            <div className="border border-f1-border overflow-hidden">
              <div className="h-1" style={{ backgroundColor: team.color }} />
              <div className="p-3 sm:p-4 md:p-6">
                <div className="flex items-center gap-2 mb-3 sm:mb-4 md:mb-6">
                  <div className="w-3 sm:w-4 md:w-5 h-0.5 bg-f1-accent" />
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                    2026 Season
                  </span>
                </div>

                <h2 className="font-display text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide text-white mb-3 sm:mb-4 md:mb-6">
                  Current Season
                </h2>

                {teamDrivers.length > 0 ? (
                  <>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-f1-border overflow-hidden mb-4 sm:mb-6">
                      {seasonStats.map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="bg-f1-card p-2.5 sm:p-3 md:p-4"
                        >
                          <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-f1-muted mb-1 sm:mb-1.5">
                            {stat.label}
                          </p>
                          <p className="font-display text-sm sm:text-base md:text-lg font-bold text-white">
                            {stat.value}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Drivers */}
                    <div>
                      <h3 className="font-mono text-[10px] uppercase tracking-widest text-f1-muted mb-2 sm:mb-3">
                        Drivers
                      </h3>
                      <div className="space-y-2">
                        {teamDrivers.map((driver) => (
                          <Link
                            key={driver.id}
                            to={`/driver/${driver.id}`}
                            className="flex items-center gap-3 p-2.5 sm:p-3 bg-f1-surface/30 hover:bg-f1-surface/50 transition-colors group"
                          >
                            <span
                              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-mono text-[10px] sm:text-xs font-bold shrink-0"
                              style={{
                                backgroundColor: driver.teamColor + "30",
                                color: driver.teamColor,
                              }}
                            >
                              #{driver.number}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span
                                  className={`fi fi-${driver.countryCode.toLowerCase()} text-[10px] sm:text-sm`}
                                />
                                <p className="text-sm sm:text-base text-white font-medium truncate group-hover:text-f1-accent transition-colors">
                                  {driver.firstName} {driver.lastName}
                                </p>
                              </div>
                              <p className="font-mono text-[9px] sm:text-[10px] text-f1-muted">
                                {driver.season.points} pts ·{" "}
                                {driver.season.wins}W · {driver.season.podiums}P
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 sm:py-12 text-f1-muted">
                    <Calendar size={24} className="opacity-40 mb-2" />
                    <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider">
                      Season data not yet available
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
