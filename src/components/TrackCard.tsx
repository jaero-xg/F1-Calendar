import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Ruler, CornerRightUp, Timer, Route } from "lucide-react";
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
      className="h-full"
    >
      <Link to={`/track/${track.id}`} className="block h-full">
        {/* ═══════════════════════════════════════════════════════
            DESKTOP: Vertical Card (sm and up)
            ═══════════════════════════════════════════════════════ */}
        <article className="hidden sm:flex group bg-f1-card hover:bg-f1-surface/30 active:bg-f1-surface/50 transition-all duration-200 flex-col h-full border border-f1-border hover:border-f1-border/80 overflow-hidden rounded-sm">
          {/* Top accent line */}
          <div className="h-0.5 bg-f1-border group-hover:bg-f1-accent transition-colors duration-200" />

          {/* Header: Type + First GP */}
          <header className="px-4 py-2.5 border-b border-f1-border flex items-center justify-between gap-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-f1-muted">
              {trackType}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-f1-muted truncate">
              Since {track.firstGrandPrix}
            </span>
          </header>

          <div className="p-4 flex flex-col flex-1">
            {/* Location + flag + name */}
            <div className="mb-3">
              <div className="flex items-center gap-1.5 mb-1">
                {/* Country Flag */}
                <span
                  className={`fi fi-${track.countryCode.toLowerCase()} text-sm`}
                />
                <MapPin size={10} className="text-f1-muted shrink-0" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-f1-muted truncate">
                  {track.country} · {track.location}
                </span>
              </div>
              <h3 className="font-display text-lg md:text-xl font-extrabold uppercase text-white leading-tight group-hover:text-f1-accent transition-colors duration-200">
                {track.name}
              </h3>
            </div>

            {/* Circuit layout */}
            <div className="flex-1 min-h-[120px] md:min-h-[140px] flex items-center justify-center mb-3 border border-f1-border/30 overflow-hidden bg-f1-surface/20 group-hover:bg-f1-surface/30 transition-colors rounded-sm">
              {track.circuitSvg ? (
                <img
                  src={track.circuitSvg}
                  alt={`${track.name} layout`}
                  className="w-full h-full object-contain p-3 md:p-4 brightness-0 invert opacity-60 group-hover:opacity-80 transition-opacity duration-200"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-f1-muted">
                  <Route size={20} className="opacity-40" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em]">
                    No layout
                  </span>
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="flex flex-col divide-y divide-f1-border/40">
              <div className="flex items-center justify-between py-2">
                <span className="flex items-center gap-1.5 text-[11px] text-f1-muted">
                  <Ruler size={11} className="shrink-0" />
                  Length
                </span>
                <span className="font-mono text-[12px] text-white tabular-nums font-semibold">
                  {track.length}
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="flex items-center gap-1.5 text-[11px] text-f1-muted">
                  <CornerRightUp size={11} className="shrink-0" />
                  Turns
                </span>
                <span className="font-mono text-[12px] text-white tabular-nums font-semibold">
                  {track.turns}
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="flex items-center gap-1.5 text-[11px] text-f1-muted">
                  <Timer size={11} className="shrink-0" />
                  Lap Record
                </span>
                <span className="font-mono text-[12px] text-white tabular-nums font-semibold">
                  {track.lapRecord}
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* ═══════════════════════════════════════════════════════
            MOBILE: Horizontal Card (below sm)
            ═══════════════════════════════════════════════════════ */}
        <article className="sm:hidden group bg-f1-card active:bg-f1-surface/50 transition-all duration-200 border border-f1-border overflow-hidden rounded-sm relative">
          {/* Left accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-f1-border group-hover:bg-f1-accent transition-colors duration-200" />

          <div className="flex pl-[3px]">
            {/* Circuit layout - left side */}
            <div className="w-[72px] shrink-0 flex items-center justify-center overflow-hidden bg-f1-surface/10">
              {track.circuitSvg ? (
                <img
                  src={track.circuitSvg}
                  alt={`${track.name} layout`}
                  className="w-full h-full object-contain p-2 brightness-0 invert opacity-50"
                />
              ) : (
                <Route size={16} className="text-f1-muted/30" />
              )}
            </div>

            {/* Right content */}
            <div className="flex flex-col flex-1 min-w-0 px-3 py-2.5 gap-2">
              {/* Top row: Flag + Type + First GP */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`fi fi-${track.countryCode.toLowerCase()} text-[10px]`}
                  />
                  <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-f1-muted shrink-0">
                    {trackType}
                  </span>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-f1-muted truncate">
                  Since {track.firstGrandPrix}
                </span>
              </div>

              {/* Name + location */}
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  <MapPin size={9} className="text-f1-muted shrink-0" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-f1-muted truncate">
                    {track.country} · {track.location}
                  </span>
                </div>
                <h3 className="font-display text-[15px] font-extrabold uppercase leading-tight text-white group-hover:text-f1-accent transition-colors duration-200 truncate">
                  {track.name}
                </h3>
              </div>

              {/* Stats row - compact horizontal */}
              <div className="flex items-center gap-2 pt-1.5 border-t border-f1-border/30">
                <div className="flex items-center gap-1 min-w-0">
                  <Ruler size={9} className="text-f1-muted shrink-0" />
                  <span className="font-mono text-[11px] text-white font-medium tabular-nums truncate">
                    {track.length}
                  </span>
                </div>
                <span className="text-f1-border/30">|</span>
                <div className="flex items-center gap-1 min-w-0">
                  <CornerRightUp size={9} className="text-f1-muted shrink-0" />
                  <span className="font-mono text-[11px] text-white font-medium tabular-nums">
                    {track.turns}
                  </span>
                </div>
                <span className="text-f1-border/30">|</span>
                <div className="flex items-center gap-1 min-w-0">
                  <Timer size={9} className="text-f1-muted shrink-0" />
                  <span className="font-mono text-[11px] text-white font-medium tabular-nums truncate">
                    {track.lapRecord}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
