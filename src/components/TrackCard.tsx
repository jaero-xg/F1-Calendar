import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Ruler, CornerRightUp, Clock, Timer } from "lucide-react";
import { Track } from "../types";

interface TrackCardProps {
  track: Track;
  index: number;
}

export default function TrackCard({ track, index }: TrackCardProps) {
  const trackType =
    track.type === "street"
      ? "Street"
      : track.type === "permanent"
        ? "Permanent"
        : "Mixed";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link to={`/track/${track.id}`}>
        <article className="bg-f1-card group hover:bg-f1-surface/30 transition-colors h-full flex flex-col">
          {/* Top accent bar */}
          <div className="h-1 bg-f1-border group-hover:bg-f1-accent transition-colors" />

          {/* Content */}
          <div className="p-5 flex-1 flex flex-col">
            {/* Header: Type + First GP */}
            <header className="flex items-center justify-between mb-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-f1-muted">
                {trackType}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-f1-muted">
                Since {track.firstGrandPrix}
              </span>
            </header>

            {/* Location */}
            <div className="flex items-center gap-1.5 mb-2">
              <MapPin size={12} className="text-f1-muted" />
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-f1-muted">
                {track.country} · {track.location}
              </span>
            </div>

            {/* Track name */}
            <h3 className="font-display text-xl font-extrabold uppercase text-white leading-tight mb-4 group-hover:text-f1-accent transition-colors">
              {track.name}
            </h3>
            {/* Circuit Layout */}
            <div className="flex items-center justify-center h-24 mb-4 border-y border-f1-border/30 py-3">
              {track.circuitSvg ? (
                <img
                  src={track.circuitSvg}
                  alt={`${track.name} layout`}
                  className="max-w-full max-h-full object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                />
              ) : (
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-f1-muted">
                  No Circuit Map
                </span>
              )}
            </div>

            {/* Stats */}
            <div className="mt-auto flex flex-col gap-2">
              <div className="flex items-center justify-between py-2 border-b border-f1-border/50">
                <span className="flex items-center gap-1.5 text-[11px] text-f1-muted">
                  <Ruler size={12} /> Length
                </span>
                <span className="font-mono text-[12px] text-white">
                  {track.length}
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-f1-border/50">
                <span className="flex items-center gap-1.5 text-[11px] text-f1-muted">
                  <CornerRightUp size={12} /> Turns
                </span>
                <span className="font-mono text-[12px] text-white">
                  {track.turns}
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="flex items-center gap-1.5 text-[11px] text-f1-muted">
                  <Timer size={12} /> Lap Record
                </span>
                <span className="font-mono text-[12px] text-white">
                  {track.lapRecord}
                </span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
