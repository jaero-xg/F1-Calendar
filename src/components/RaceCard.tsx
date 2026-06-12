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
      className="h-full"
    >
      <Link to={`/race/${race.id}`} className="block h-full">
        {/* ── DESKTOP: vertical card ── */}
        <article className="hidden sm:flex group bg-f1-card hover:bg-f1-surface/30 active:bg-f1-surface/50 transition-colors flex-col h-full border border-f1-border overflow-hidden rounded-sm">
          <div className="h-0.5 bg-f1-border group-hover:bg-f1-accent transition-colors" />

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

          <div className="p-4 flex flex-col flex-1 gap-3">
            {/* Race name + circuit */}
            <div>
              <h3 className="font-display text-xl font-extrabold uppercase tracking-wide text-white leading-none group-hover:text-f1-accent transition-colors">
                {race.name.replace(" Grand Prix", " GP")}
              </h3>
              <p className="text-[11px] text-f1-muted mt-1">{race.circuit}</p>
            </div>

            {/* Circuit image — fills remaining space */}
            <div className="flex-1 min-h-[130px] flex items-center justify-center border border-f1-border/40 overflow-hidden rounded-sm p-3 bg-f1-surface/20">
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

        {/* ── MOBILE: horizontal card ── */}
        <article className="sm:hidden group bg-f1-card active:bg-f1-surface/50 transition-colors border border-f1-border overflow-hidden rounded-sm relative">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-f1-border group-hover:bg-f1-accent transition-colors" />

          <div className="flex pl-[3px] h-[100px]">
            {/* Circuit layout — fixed width, flush */}
            <div
              className="w-[80px] shrink-0 h-full flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: "#ffffff10" }}
            >
              {track?.circuitSvg ? (
                <img
                  src={track.circuitSvg}
                  alt={`${race.circuit} layout`}
                  className="w-full h-full object-contain p-1.5 brightness-0 invert opacity-70"
                />
              ) : (
                <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-f1-muted">
                  No layout
                </span>
              )}
            </div>

            {/* Right content */}
            <div className="flex flex-col flex-1 min-w-0 px-3 py-2 justify-between">
              {/* Top row: round + status */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-widest font-bold text-f1-muted">
                  Round {String(race.round).padStart(2, "0")}
                </span>
                <span
                  className={`font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 ${statusStyles[race.status]}`}
                >
                  {isCompleted ? "Finished" : isUpcoming ? "Upcoming" : "Live"}
                </span>
              </div>

              {/* Name */}
              <div className="leading-none">
                <div className="flex items-center gap-1 mb-0.5">
                  <MapPin size={10} className="text-f1-muted shrink-0" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-f1-muted">
                    {race.location}
                  </span>
                </div>
                <h3 className="font-display text-[16px] font-extrabold uppercase leading-none group-hover:text-f1-accent transition-colors">
                  {race.name.replace(" Grand Prix", " GP")}
                </h3>
              </div>

              {/* Stats row — Winner only + Date/Sessions */}
              <div className="flex items-end gap-3 pt-1.5 border-t border-f1-border/40">
                {isCompleted && race.winner ? (
                  <>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-f1-muted leading-none whitespace-nowrap">
                        Winner
                      </span>
                      <span className="font-mono text-[15px] font-bold tabular-nums leading-none truncate max-w-[120px]">
                        {race.winner}
                      </span>
                    </div>
                    <div className="w-px h-5 bg-f1-border/50 mb-px" />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-f1-muted leading-none whitespace-nowrap">
                        Date
                      </span>
                      <span className="font-mono text-[14px] font-bold tabular-nums leading-none">
                        {formatDate(race.date)}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-f1-muted leading-none whitespace-nowrap">
                        Date
                      </span>
                      <span className="font-mono text-[14px] font-bold tabular-nums leading-none">
                        {formatDate(race.date)}
                      </span>
                    </div>
                    <div className="w-px h-5 bg-f1-border/50 mb-px" />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-f1-muted leading-none whitespace-nowrap">
                        Sessions
                      </span>
                      <span className="font-mono text-[14px] font-bold tabular-nums leading-none">
                        {race.sessions.length}
                      </span>
                    </div>
                    {race.isSprint && (
                      <>
                        <div className="w-px h-5 bg-f1-border/50 mb-px" />
                        <div className="flex flex-col gap-0.5">
                          <span className="font-mono text-[8px] uppercase tracking-widest text-f1-muted leading-none whitespace-nowrap">
                            Sprint
                          </span>
                          <span className="font-mono text-[14px] font-bold tabular-nums leading-none text-orange-400">
                            Yes
                          </span>
                        </div>
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
