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
      <div className="pt-24 section-padding">
        <div className="max-w-7xl mx-auto text-center py-20">
          <h2 className="font-display text-3xl font-extrabold uppercase text-white">
            Race not found
          </h2>
          <Link
            to="/calendar"
            className="text-f1-accent hover:underline mt-4 inline-block text-sm"
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

  const isCompleted = race.status === "completed";
  const isUpcoming = race.status === "upcoming";

  return (
    <div className="pt-24 pb-20">
      <div className="wrap section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Back link */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link
              to="/calendar"
              className="inline-flex items-center gap-2 text-sm text-f1-muted hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Back to Calendar
            </Link>
          </motion.div>

          {/* Race Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <div className="border border-f1-border">
              <div className="h-1 bg-f1-accent" />
              <div className="p-6 md:p-8">
                {/* Meta row */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                    Round {String(race.round).padStart(2, "0")}
                  </span>
                  {race.isSprint && (
                    <span className="flex items-center gap-1 px-2 py-[2px] bg-orange-500/10 text-orange-400 text-[10px] font-medium uppercase tracking-wider">
                      <Zap size={10} /> Sprint
                    </span>
                  )}
                  <span
                    className={`px-2 py-[2px] text-[10px] font-medium uppercase tracking-wider ${
                      isCompleted
                        ? "bg-green-500/10 text-green-400"
                        : isUpcoming
                          ? "bg-blue-500/10 text-blue-400"
                          : "bg-f1-accent/10 text-f1-accent"
                    }`}
                  >
                    {race.status}
                  </span>
                </div>

                {/* Title */}
                <h1 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-none mb-4">
                  {race.name}
                </h1>

                {/* Location & Date */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-f1-muted mb-8">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} /> {race.circuit}, {race.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} /> {formatDate(race.date)}
                  </span>
                </div>

                {/* Results — completed races */}
                {isCompleted && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-f1-border">
                    <div className="bg-f1-card p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Trophy size={14} className="text-f1-gold" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-f1-gold">
                          Winner
                        </span>
                      </div>
                      <p className="font-display text-xl font-bold text-white">
                        {race.winner}
                      </p>
                    </div>
                    <div className="bg-f1-card p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Flag size={14} className="text-purple-400" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-purple-400">
                          Pole Position
                        </span>
                      </div>
                      <p className="font-display text-xl font-bold text-white">
                        {race.polePosition}
                      </p>
                    </div>
                    <div className="bg-f1-card p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Timer size={14} className="text-f1-accent" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-f1-accent">
                          Fastest Lap
                        </span>
                      </div>
                      <p className="font-display text-xl font-bold text-white">
                        {race.fastestLap}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
            {/* Left: Schedule */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-5 h-0.5 bg-f1-accent" />
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                  Weekend
                </span>
              </div>
              <h2 className="font-display text-2xl font-extrabold uppercase tracking-wide text-white mb-6">
                Session Schedule
              </h2>
              <SessionTimeline sessions={race.sessions} />
            </div>

            {/* Right: Circuit info */}
            {track && (
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-5 h-0.5 bg-f1-accent" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                    Circuit
                  </span>
                </div>
                <h2 className="font-display text-2xl font-extrabold uppercase tracking-wide text-white mb-6">
                  Track Info
                </h2>

                <Link to={`/track/${track.id}`}>
                  <div className="border border-f1-border group hover:border-f1-accent/50 transition-colors">
                    <div className="h-1 bg-f1-border group-hover:bg-f1-accent transition-colors" />
                    <div className="p-5">
                      <h3 className="font-display text-lg font-extrabold uppercase text-white mb-1 group-hover:text-f1-accent transition-colors">
                        {track.name}
                      </h3>
                      <p className="text-xs text-f1-muted mb-5">
                        {track.location}, {track.country}
                      </p>

                      <div className="flex flex-col gap-0">
                        <div className="flex justify-between items-center py-2 border-b border-f1-border/30">
                          <span className="text-[11px] text-f1-muted">
                            Length
                          </span>
                          <span className="font-mono text-[12px] text-white">
                            {track.length}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-f1-border/30">
                          <span className="text-[11px] text-f1-muted">
                            Laps
                          </span>
                          <span className="font-mono text-[12px] text-white">
                            {track.laps}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-f1-border/30">
                          <span className="text-[11px] text-f1-muted">
                            Turns
                          </span>
                          <span className="font-mono text-[12px] text-white">
                            {track.turns}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-f1-border/30">
                          <span className="text-[11px] text-f1-muted">
                            DRS Zones
                          </span>
                          <span className="font-mono text-[12px] text-white">
                            {track.drsZones}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-[11px] text-f1-muted">
                            Lap Record
                          </span>
                          <span className="font-mono text-[12px] text-white">
                            {track.lapRecord}
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-f1-border/30 flex items-center gap-1 text-xs text-f1-accent group-hover:gap-2 transition-all">
                        View Track Details <ChevronRight size={14} />
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
