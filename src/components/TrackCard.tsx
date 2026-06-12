import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Ruler, CornerRightUp, Timer } from "lucide-react";
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
        <article className="group bg-f1-card hover:bg-f1-surface/30 transition-colors flex flex-col h-full border border-f1-border overflow-hidden">
          {/* Top accent bar */}
          <div className="h-0.5 bg-f1-border group-hover:bg-f1-accent transition-colors" />

          {/* Header */}
          <header className="px-4 py-3 border-b border-f1-border flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-f1-muted">
              {trackType}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-f1-muted">
              Since {track.firstGrandPrix}
            </span>
          </header>

          {/* Body */}
          <div className="p-4 flex flex-col flex-1">
            {/* Location + name */}
            <div className="mb-3">
              <div className="flex items-center gap-1.5 mb-1">
                <MapPin size={10} className="text-f1-muted shrink-0" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-f1-muted">
                  {track.country} · {track.location}
                </span>
              </div>
              <h3 className="font-display text-xl font-extrabold uppercase text-white leading-tight group-hover:text-f1-accent transition-colors">
                {track.name}
              </h3>
            </div>

            {/* Circuit layout — fills remaining space */}
            <div className="flex-1 min-h-0 border border-f1-border/40 flex items-center justify-center p-3 bg-f1-surface/20 mb-3">
              {track.circuitSvg ? (
                <img
                  src={track.circuitSvg}
                  alt={`${track.name} layout`}
                  className="w-full h-full object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                />
              ) : (
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-f1-muted">
                  No layout
                </span>
              )}
            </div>

            {/* Stats */}
            <div className="flex flex-col divide-y divide-f1-border/50">
              <div className="flex items-center justify-between py-2">
                <span className="flex items-center gap-1.5 text-[11px] text-f1-muted">
                  <Ruler size={11} className="shrink-0" /> Length
                </span>
                <span className="font-mono text-[12px] text-white">
                  {track.length}
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="flex items-center gap-1.5 text-[11px] text-f1-muted">
                  <CornerRightUp size={11} className="shrink-0" /> Turns
                </span>
                <span className="font-mono text-[12px] text-white">
                  {track.turns}
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="flex items-center gap-1.5 text-[11px] text-f1-muted">
                  <Timer size={11} className="shrink-0" /> Lap record
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
