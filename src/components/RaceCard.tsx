import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Clock, Zap, Trophy, Flag, Timer } from "lucide-react";
import { Race } from "../types";
import { getTrackById } from "../data/tracks";

interface RaceCardProps {
  race: Race;
  index: number;
}

export default function RaceCard({ race, index }: RaceCardProps) {
  const isCompleted = race.status === "completed";
  const isUpcoming = race.status === "upcoming";

  const track = getTrackById(race.trackId);

  const statusStyles = {
    completed: "bg-f1-accent/10 text-f1-accent",
    upcoming: "bg-blue-500/10 text-blue-400",
    live: "bg-f1-accent/20 text-f1-accent animate-pulse",
    cancelled: "bg-red-500/10 text-red-400",
  };

  const formatDate = (dateStr: string) =>
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
    >
      <Link to={`/race/${race.id}`}>
        <article className="group bg-f1-card hover:bg-f1-surface/30 transition-colors flex flex-col h-full border border-f1-border overflow-hidden">
          {/* Top accent bar */}
          <div className="h-0.5 bg-f1-border group-hover:bg-f1-accent transition-colors" />

          {/* Header */}
          <header className="px-4 py-3 border-b border-f1-border flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-widest text-f1-muted uppercase">
              Round {String(race.round).padStart(2, "0")} · {race.location}
            </span>
            <span
              className={`font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 ${statusStyles[race.status]}`}
            >
              {isCompleted ? "Finished" : isUpcoming ? "Upcoming" : "Live"}
            </span>
          </header>

          {/* Body */}
          <div className="p-4 flex flex-col flex-1 gap-3">
            {/* Race name + circuit */}
            <div>
              <h3 className="font-display text-xl font-extrabold uppercase tracking-wide text-white leading-none group-hover:text-f1-accent transition-colors">
                {race.name.replace(" Grand Prix", " GP")}
              </h3>
              <p className="text-[11px] text-f1-muted mt-1">{race.circuit}</p>
            </div>

            {/* Circuit image — square */}
            <div className="aspect-square w-full border border-f1-border/40 flex items-center justify-center p-3 bg-f1-surface/20">
              {track?.circuitSvg ? (
                <img
                  src={track.circuitSvg}
                  alt={`${race.circuit} layout`}
                  className="w-full h-full object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                />
              ) : (
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-f1-muted">
                  No layout
                </span>
              )}
            </div>

            {/* Sprint badge */}
            {race.isSprint && (
              <div className="flex items-center gap-1.5 text-[11px] text-orange-400">
                <Zap size={12} className="shrink-0" />
                <span className="font-medium">Sprint Weekend</span>
              </div>
            )}

            {/* Completed */}
            {isCompleted && race.winner && (
              <div className="mt-auto flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-f1-gold/15 flex items-center justify-center shrink-0">
                    <Trophy size={14} className="text-f1-gold" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-white leading-none">
                      {race.winner}
                    </p>
                    {race.polePosition && (
                      <p className="text-[11px] text-f1-muted flex items-center gap-1 mt-0.5">
                        <Flag size={9} className="text-purple-400 shrink-0" />
                        <span className="text-purple-400">Pole:</span>{" "}
                        {race.polePosition}
                      </p>
                    )}
                  </div>
                </div>

                {race.fastestLap && (
                  <div className="flex items-center gap-1.5 text-[11px] text-f1-muted">
                    <Timer size={11} className="text-f1-accent shrink-0" />
                    <span className="text-f1-muted/60">Fastest:</span>{" "}
                    {race.fastestLap}
                  </div>
                )}
              </div>
            )}

            {/* Upcoming */}
            {isUpcoming && (
              <div className="mt-auto flex flex-col gap-1">
                <p className="font-mono text-lg font-bold text-white tracking-tight leading-none">
                  {formatDateFull(race.date)}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-f1-muted">
                  <Clock size={11} />
                  {race.sessions.length} sessions
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <footer className="px-4 py-2.5 border-t border-f1-border flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-f1-muted">
              <MapPin size={10} />
              {race.country}
            </span>
            <span className="font-mono text-[10px] text-f1-muted">
              {formatDate(race.date)}
            </span>
          </footer>
        </article>
      </Link>
    </motion.div>
  );
}
