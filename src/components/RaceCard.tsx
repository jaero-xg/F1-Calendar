import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  Clock,
  Zap,
  Trophy,
  Flag,
  Timer,
  Calendar,
} from "lucide-react";
import { Race } from "../types";

interface RaceCardProps {
  race: Race;
  index: number;
}

export default function RaceCard({ race, index }: RaceCardProps) {
  const isCompleted = race.status === "completed";
  const isUpcoming = race.status === "upcoming";
  const isCancelled = race.status === "cancelled";
  const isLive = race.status === "live";

  const statusStyles = {
    completed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    upcoming: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    live: "bg-f1-accent/20 text-f1-accent border-f1-accent/30 animate-pulse",
    cancelled: "bg-red-500/10 text-red-400 border-red-500/20",
  };

  const statusLabels = {
    completed: "Finished",
    upcoming: "Upcoming",
    live: "Live",
    cancelled: "Cancelled",
  };

  const formatDateShort = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

  const formatDateFull = (dateStr: string) =>
    new Date(dateStr)
      .toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <Link to={`/race/${race.id}`} className="block h-full">
        {/* ═══════════════════════════════════════════════════════
            DESKTOP: Vertical Card (sm and up)
            ═══════════════════════════════════════════════════════ */}
        <article className="hidden sm:flex group bg-f1-card hover:bg-f1-surface/30 active:bg-f1-surface/50 transition-all duration-200 flex-col h-full border border-f1-border hover:border-f1-border/80 overflow-hidden">
          {/* Top accent line */}
          <div className="h-0.5 bg-f1-border group-hover:bg-f1-accent transition-colors duration-200" />

          {/* Header: Round + Location + Status */}
          <header className="px-4 py-2.5 border-b border-f1-border flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-mono text-[10px] tracking-widest text-f1-muted uppercase shrink-0">
                R{String(race.round).padStart(2, "0")}
              </span>
              <span className="text-f1-border/60">·</span>
              <span className="font-mono text-[10px] tracking-widest text-f1-muted uppercase truncate">
                {race.location}
              </span>
            </div>
            <span
              className={`font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 border ${statusStyles[race.status]} shrink-0`}
            >
              {statusLabels[race.status]}
            </span>
          </header>

          <div className="p-4 flex flex-col flex-1 gap-3">
            {/* Race name */}
            <div>
              <h3 className="font-display text-lg md:text-xl font-extrabold uppercase tracking-wide text-white leading-tight group-hover:text-f1-accent transition-colors duration-200">
                {race.name.replace(" Grand Prix", "")}
              </h3>
              <p className="text-[11px] text-f1-muted mt-1 leading-relaxed">
                {race.circuit}
              </p>
            </div>

            {/* Circuit image */}
            <div className="flex-1 min-h-[120px] md:min-h-[140px] flex items-center justify-center border border-f1-border/30 overflow-hidden bg-f1-surface/20 group-hover:bg-f1-surface/30 transition-colors">
              {race.circuitSvg ? (
                <img
                  src={race.circuitSvg}
                  alt={`${race.circuit} layout`}
                  className="w-full h-full object-contain p-3 md:p-4 brightness-0 invert opacity-60 group-hover:opacity-80 transition-opacity duration-200"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-f1-muted">
                  <MapPin size={20} className="opacity-40" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em]">
                    No layout
                  </span>
                </div>
              )}
            </div>

            {/* Sprint badge */}
            {race.isSprint && (
              <div className="flex items-center gap-1.5">
                <Zap size={12} className="text-orange-400 shrink-0" />
                <span className="text-[11px] font-medium text-orange-400">
                  Sprint Weekend
                </span>
              </div>
            )}

            {/* Cancelled reason */}
            {isCancelled && race.cancellationReason && (
              <div className="text-[11px] text-red-400 leading-relaxed bg-red-500/5 px-2.5 py-2 border border-red-500/10">
                {race.cancellationReason}
              </div>
            )}

            {/* Completed race info */}
            {isCompleted && race.winner && (
              <div className="mt-auto flex flex-col gap-2.5">
                {/* Winner */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-f1-gold/15 flex items-center justify-center shrink-0">
                    <Trophy size={14} className="text-f1-gold" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-white leading-tight truncate">
                      {race.winner}
                    </p>
                    {race.polePosition && (
                      <p className="text-[11px] text-f1-muted flex items-center gap-1 mt-0.5">
                        <Flag size={9} className="text-purple-400 shrink-0" />
                        <span className="text-purple-400">Pole:</span>
                        <span className="truncate">{race.polePosition}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Fastest lap */}
                {race.fastestLap && (
                  <div className="flex items-center gap-2 text-[11px]">
                    <Timer size={11} className="text-f1-accent shrink-0" />
                    <span className="text-f1-muted/60">Fastest Lap:</span>
                    <span className="text-white font-mono">
                      {race.fastestLap}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Upcoming race info */}
            {isUpcoming && (
              <div className="mt-auto flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Calendar size={13} className="text-f1-accent shrink-0" />
                  <p className="font-mono text-base md:text-lg font-bold text-white tracking-tight leading-none">
                    {formatDateFull(race.date)}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-f1-muted">
                  <Clock size={11} />
                  <span>{race.sessions.length} sessions</span>
                </div>
              </div>
            )}

            {/* Live race info */}
            {isLive && (
              <div className="mt-auto flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-f1-accent animate-pulse" />
                  <span className="font-mono text-[11px] text-f1-accent uppercase tracking-widest">
                    In Progress
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <footer className="px-4 py-2.5 border-t border-f1-border flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-f1-muted">
              <MapPin size={10} />
              <span className="truncate">{race.country}</span>
            </span>
            <span className="font-mono text-[10px] text-f1-muted">
              {formatDateShort(race.date)}
            </span>
          </footer>
        </article>

        {/* ═══════════════════════════════════════════════════════
            MOBILE: Horizontal Card (below sm)
            ═══════════════════════════════════════════════════════ */}
        <article className="sm:hidden group bg-f1-card active:bg-f1-surface/50 transition-all duration-200 border border-f1-border overflow-hidden relative">
          {/* Left accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-f1-border group-hover:bg-f1-accent transition-colors duration-200" />

          <div className="flex pl-[3px]">
            {/* Circuit layout - left side */}
            <div className="w-[72px] shrink-0 flex items-center justify-center overflow-hidden bg-f1-surface/10">
              {race.circuitSvg ? (
                <img
                  src={race.circuitSvg}
                  alt={`${race.circuit} layout`}
                  className="w-full h-full object-contain p-2 brightness-0 invert opacity-50"
                />
              ) : (
                <MapPin size={16} className="text-f1-muted/30" />
              )}
            </div>

            {/* Right content */}
            <div className="flex flex-col flex-1 min-w-0 px-3 py-2.5 gap-2">
              {/* Top row: Round + Status */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-f1-muted shrink-0">
                    R{String(race.round).padStart(2, "0")}
                  </span>
                  <span className="text-f1-border/40">·</span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-f1-muted truncate">
                    {race.location}
                  </span>
                </div>
                <span
                  className={`font-mono text-[8px] uppercase tracking-wider px-1.5 py-0.5  border ${statusStyles[race.status]} shrink-0`}
                >
                  {statusLabels[race.status]}
                </span>
              </div>

              {/* Race name */}
              <h3 className="font-display text-[15px] font-extrabold uppercase leading-tight text-white group-hover:text-f1-accent transition-colors duration-200 truncate">
                {race.name.replace(" Grand Prix", "")}
              </h3>

              {/* Bottom info row */}
              <div className="flex items-center gap-2 pt-1.5 border-t border-f1-border/30">
                {isCompleted && race.winner ? (
                  <>
                    <div className="flex items-center gap-1.5 min-w-0">
                      <Trophy size={10} className="text-f1-gold shrink-0" />
                      <span className="text-[12px] font-semibold text-white truncate">
                        {race.winner}
                      </span>
                    </div>
                    <span className="text-f1-border/30">|</span>
                    <span className="font-mono text-[10px] text-f1-muted">
                      {formatDateShort(race.date)}
                    </span>
                  </>
                ) : isCancelled ? (
                  <span className="text-[10px] text-red-400 truncate">
                    {race.cancellationReason}
                  </span>
                ) : (
                  <>
                    <div className="flex items-center gap-1">
                      <Calendar size={10} className="text-f1-muted shrink-0" />
                      <span className="font-mono text-[11px] text-white font-medium">
                        {formatDateShort(race.date)}
                      </span>
                    </div>
                    <span className="text-f1-border/30">|</span>
                    <div className="flex items-center gap-1">
                      <Clock size={10} className="text-f1-muted shrink-0" />
                      <span className="font-mono text-[10px] text-f1-muted">
                        {race.sessions.length}s
                      </span>
                    </div>
                    {race.isSprint && (
                      <>
                        <span className="text-f1-border/30">|</span>
                        <Zap size={10} className="text-orange-400 shrink-0" />
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
