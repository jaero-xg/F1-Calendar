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
      className="h-full"
    >
      <Link to={`/track/${track.id}`} className="block h-full">
        {/* ── DESKTOP: vertical card ── */}
        <article className="hidden sm:flex group bg-f1-card hover:bg-f1-surface/30 active:bg-f1-surface/50 transition-colors flex-col h-full border border-f1-border overflow-hidden rounded-sm">
          <div className="h-0.5 bg-f1-border group-hover:bg-f1-accent transition-colors" />

          <header className="px-4 py-3 border-b border-f1-border flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-f1-muted">
              {trackType}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-f1-muted">
              Since {track.firstGrandPrix}
            </span>
          </header>

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
            <div
              className="flex-1 min-h-[130px] flex items-center justify-center mb-3 border border-f1-border/40 overflow-hidden rounded-sm"
              style={{ backgroundColor: "#ffffff10" }}
            >
              {track.circuitSvg ? (
                <img
                  src={track.circuitSvg}
                  alt={`${track.name} layout`}
                  className="w-full h-full object-contain p-3 brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
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
                <span className="font-mono text-[12px] text-white tabular-nums font-semibold">
                  {track.length}
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="flex items-center gap-1.5 text-[11px] text-f1-muted">
                  <CornerRightUp size={11} className="shrink-0" /> Turns
                </span>
                <span className="font-mono text-[12px] text-white tabular-nums font-semibold">
                  {track.turns}
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="flex items-center gap-1.5 text-[11px] text-f1-muted">
                  <Timer size={11} className="shrink-0" /> Lap record
                </span>
                <span className="font-mono text-[12px] text-white tabular-nums font-semibold">
                  {track.lapRecord}
                </span>
              </div>
            </div>
          </div>
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
              {track.circuitSvg ? (
                <img
                  src={track.circuitSvg}
                  alt={`${track.name} layout`}
                  className="w-full h-full object-contain p-2 brightness-0 invert opacity-70"
                />
              ) : (
                <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-f1-muted">
                  No layout
                </span>
              )}
            </div>

            {/* Right content */}
            <div className="flex flex-col flex-1 min-w-0 px-3 py-2 justify-between">
              {/* Top row: type + first GP */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-widest font-bold text-f1-muted">
                  {trackType}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider truncate ml-2 max-w-[120px] text-f1-muted">
                  Since {track.firstGrandPrix}
                </span>
              </div>

              {/* Name */}
              <div className="leading-none">
                <div className="flex items-center gap-1 mb-0.5">
                  <MapPin size={10} className="text-f1-muted shrink-0" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-f1-muted">
                    {track.country} · {track.location}
                  </span>
                </div>
                <h3 className="font-display text-[16px] font-extrabold uppercase leading-none group-hover:text-f1-accent transition-colors">
                  {track.name}
                </h3>
              </div>

              {/* Stats row — labels on top, values below, strictly aligned */}
              <div className="flex items-end gap-4 pt-1.5 border-t border-f1-border/40">
                {[
                  { label: "Length", value: track.length },
                  { label: "Turns", value: String(track.turns) },
                  { label: "Record", value: track.lapRecord },
                ].map((item, i, arr) => (
                  <div key={item.label} className="flex items-end gap-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-f1-muted leading-none whitespace-nowrap">
                        {item.label}
                      </span>
                      <span className="font-mono text-[14px] font-bold tabular-nums leading-none">
                        {item.value}
                      </span>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="w-px h-6 bg-f1-border/50 mb-px" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
