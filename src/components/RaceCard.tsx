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
    completed: "bg-f1-accent/15 text-f1-accent",
    upcoming: "bg-blue-500/10 text-blue-400",
    live: "bg-f1-accent/20 text-f1-accent animate-pulse",
    cancelled: "bg-red-500/10 text-red-400",
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const formatDateFull = (dateStr: string) => {
    return new Date(dateStr)
      .toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link to={`/race/${race.id}`}>
        <article className="bg-f1-card group hover:bg-f1-surface/30 transition-colors h-full flex flex-col">
          {/* Top accent bar */}
          <div className="h-1 bg-f1-border group-hover:bg-f1-accent transition-colors" />

          {/* Header */}
          <header className="px-5 py-4 border-b border-f1-border flex justify-between items-start">
            <span className="font-mono text-[10px] tracking-[0.1em] text-f1-muted">
              Round {String(race.round).padStart(2, "0")} · {race.location}
            </span>

            <span
              className={`font-mono text-[9px] uppercase tracking-[0.12em] px-2 py-[3px] ${
                statusStyles[race.status]
              }`}
            >
              {isCompleted ? "Finished" : isUpcoming ? "Upcoming" : "Live"}
            </span>
          </header>

          {/* Body */}
          <div className="px-5 pt-5 pb-5 flex-1 flex flex-col">
            {/* Race name */}
            <h3 className="font-display text-[22px] font-extrabold uppercase tracking-wide text-white leading-none mb-2 group-hover:text-f1-accent transition-colors">
              {race.name.replace(" Grand Prix", " GP")}
            </h3>

            {/* Circuit */}
            <p className="text-[12px] text-f1-muted mb-3">{race.circuit}</p>

            {/* Circuit Layout */}
            <div className="flex items-center justify-center mb-5 border-y border-f1-border/30 py-3">
              {track?.circuitSvg ? (
                <img
                  src={track.circuitSvg}
                  alt={`${race.circuit} layout`}
                  className="max-w-[95%] h-auto brightness-0 invert opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
              ) : (
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-f1-muted">
                  Circuit Layout
                </span>
              )}
            </div>

            {/* Sprint badge */}
            {race.isSprint && (
              <div className="flex items-center gap-1.5 text-[11px] text-orange-400 mb-4">
                <Zap size={13} className="shrink-0" />
                <span className="font-medium">Sprint Weekend</span>
              </div>
            )}

            {/* Completed Race */}
            {isCompleted && race.winner && (
              <div className="mt-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-f1-gold/20 flex items-center justify-center flex-shrink-0">
                    <Trophy size={18} className="text-f1-gold" />
                  </div>

                  <div>
                    <p className="text-[13px] font-semibold text-white">
                      {race.winner}
                    </p>

                    {race.polePosition && (
                      <p className="text-[11px] text-f1-muted flex items-center gap-1">
                        <Flag size={10} className="text-purple-400" />
                        Pole: {race.polePosition}
                      </p>
                    )}
                  </div>
                </div>

                {race.fastestLap && (
                  <div className="flex items-center gap-1.5 text-[11px] text-f1-muted mb-3">
                    <Timer size={12} className="text-f1-accent" />
                    Fastest Lap: {race.fastestLap}
                  </div>
                )}
              </div>
            )}

            {/* Upcoming Race */}
            {isUpcoming && (
              <div className="mt-auto">
                <p className="font-display text-[28px] font-extrabold text-white leading-none mb-2">
                  {formatDateFull(race.date)}
                </p>

                <div className="flex items-center gap-1.5 text-[11px] text-f1-muted">
                  <Clock size={12} />
                  {race.sessions.length} sessions
                </div>
              </div>
            )}

            {/* Footer */}
            <footer className="mt-4 pt-4 border-t border-f1-border flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-f1-muted">
                <MapPin size={10} />
                {race.country}
              </span>

              <span className="font-mono text-[10px] text-f1-muted">
                {formatDate(race.date)}
              </span>
            </footer>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
