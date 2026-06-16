import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Trophy,
  Zap,
  Flag,
  Timer,
  ChevronRight,
} from "lucide-react";
import { getRaceById } from "../data/races";
import { getTrackById } from "../data/tracks";
import SessionTimeline from "../components/SessionTimeline";

export default function RaceDetails() {
  const { id } = useParams<{ id: string }>();
  const race = getRaceById(id || "");
  const track = race ? getTrackById(race.trackId) : undefined;

  if (!race) {
    return (
      <div className="min-h-screen flex items-center justify-center px-3">
        <div className="text-center">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold uppercase text-white mb-4">
            Race not found
          </h2>
          <Link
            to="/calendar"
            className="text-f1-accent hover:underline text-sm"
          >
            Back to Calendar
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatDateShort = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const isCompleted = race.status === "completed";
  const isUpcoming = race.status === "upcoming";

  return (
    <div className="py-4 sm:py-6 md:py-8 lg:py-10 border-b border-f1-border">
      <div className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Back link */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link
              to="/calendar"
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-sm text-f1-muted hover:text-white transition-colors mb-3 sm:mb-6"
            >
              <ArrowLeft size={14} className="sm:size-4" /> Back to Calendar
            </Link>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════
              RACE HEADER
              ═══════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-8 md:mb-10"
          >
            <div className="border border-f1-border overflow-hidden">
              <div className="h-1 bg-f1-accent" />
              <div className="p-3 sm:p-5 md:p-6 lg:p-8">
                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                    Round {String(race.round).padStart(2, "0")}
                  </span>
                  {race.isSprint && (
                    <span className="flex items-center gap-1 px-1.5 py-[2px] bg-orange-500/10 text-orange-400 text-[9px] sm:text-[10px] font-medium uppercase tracking-wider">
                      <Zap size={9} className="sm:size-[10px]" /> Sprint
                    </span>
                  )}
                  <span
                    className={`px-1.5 py-[2px] text-[9px] sm:text-[10px] font-medium uppercase tracking-wider ${
                      isCompleted
                        ? "bg-emerald-500/10 text-emerald-400"
                        : isUpcoming
                          ? "bg-blue-500/10 text-blue-400"
                          : "bg-f1-accent/10 text-f1-accent"
                    }`}
                  >
                    {race.status}
                  </span>
                </div>

                {/* Title */}
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight mb-2 sm:mb-3">
                  {race.name}
                </h1>

                {/* Location & Date */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-4 sm:gap-x-6 gap-y-1 sm:gap-y-1.5 text-[11px] sm:text-xs md:text-sm text-f1-muted mb-3 sm:mb-6">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="sm:size-[14px] shrink-0" />{" "}
                    {race.circuit}, {race.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="sm:size-[14px] shrink-0" />{" "}
                    {formatDateShort(race.date)}
                  </span>
                </div>

                {/* Results — completed races */}
                {isCompleted && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-f1-border overflow-hidden">
                    <div className="bg-f1-card p-2.5 sm:p-3 md:p-4">
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
                        <Trophy
                          size={12}
                          className="sm:size-[14px] text-f1-gold shrink-0"
                        />
                        <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-f1-gold">
                          Winner
                        </span>
                      </div>
                      <p className="font-display text-base sm:text-lg md:text-xl font-bold text-white truncate">
                        {race.winner}
                      </p>
                    </div>
                    <div className="bg-f1-card p-2.5 sm:p-3 md:p-4">
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
                        <Flag
                          size={12}
                          className="sm:size-[14px] text-purple-400 shrink-0"
                        />
                        <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-purple-400">
                          Pole
                        </span>
                      </div>
                      <p className="font-display text-base sm:text-lg md:text-xl font-bold text-white truncate">
                        {race.polePosition}
                      </p>
                    </div>
                    <div className="bg-f1-card p-2.5 sm:p-3 md:p-4">
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
                        <Timer
                          size={12}
                          className="sm:size-[14px] text-f1-accent shrink-0"
                        />
                        <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-f1-accent">
                          Fastest
                        </span>
                      </div>
                      <p className="font-display text-base sm:text-lg md:text-xl font-bold text-white truncate">
                        {race.fastestLap}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════
              CONTENT GRID
              ═══════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-4 sm:gap-6 md:gap-8">
            {/* Left: Schedule */}
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4 md:mb-6">
                <div className="w-3 sm:w-4 md:w-5 h-0.5 bg-f1-accent" />
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                  Weekend
                </span>
              </div>
              <h2 className="font-display text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide text-white mb-3 sm:mb-4 md:mb-6">
                Session Schedule
              </h2>
              <SessionTimeline sessions={race.sessions} />
            </div>

            {/* Right: Circuit info */}
            {track && (
              <div>
                <div className="flex items-center gap-2 mb-3 sm:mb-4 md:mb-6">
                  <div className="w-3 sm:w-4 md:w-5 h-0.5 bg-f1-accent" />
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                    Circuit
                  </span>
                </div>
                <h2 className="font-display text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide text-white mb-3 sm:mb-4 md:mb-6">
                  Track Info
                </h2>

                <Link to={`/track/${track.id}`}>
                  <div className="border border-f1-border group hover:border-f1-accent/50 transition-colors overflow-hidden">
                    <div className="h-1 bg-f1-border group-hover:bg-f1-accent transition-colors" />
                    <div className="p-3 sm:p-4 md:p-5">
                      <h3 className="font-display text-sm sm:text-base md:text-lg font-extrabold uppercase text-white mb-0.5 sm:mb-1 group-hover:text-f1-accent transition-colors">
                        {track.name}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-f1-muted mb-3 sm:mb-4 md:mb-5">
                        {track.location}, {track.country}
                      </p>

                      <div className="flex flex-col divide-y divide-f1-border/30">
                        {[
                          { label: "Length", value: track.length },
                          { label: "Laps", value: track.laps },
                          { label: "Turns", value: track.turns },
                          { label: "DRS Zones", value: track.drsZones },
                          { label: "Lap Record", value: track.lapRecord },
                        ].map(({ label, value }) => (
                          <div
                            key={label}
                            className="flex justify-between items-center py-1.5 sm:py-2"
                          >
                            <span className="text-[10px] sm:text-[11px] text-f1-muted">
                              {label}
                            </span>
                            <span className="font-mono text-[10px] sm:text-[11px] md:text-xs text-white tabular-nums">
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-2 sm:mt-3 md:mt-4 pt-2 sm:pt-3 md:pt-4 border-t border-f1-border/30 flex items-center gap-1 text-[11px] sm:text-xs text-f1-accent group-hover:gap-2 transition-all">
                        View Track Details{" "}
                        <ChevronRight size={12} className="sm:size-[14px]" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
