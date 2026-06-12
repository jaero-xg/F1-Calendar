import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Ruler,
  CornerRightUp,
  Clock,
  Mountain,
} from "lucide-react";
import { getTrackById } from "../data/tracks";

export default function TrackDetails() {
  const { id } = useParams<{ id: string }>();
  const track = getTrackById(id || "");

  if (!track) {
    return (
      <div className="pt-20 sm:pt-24 px-4 sm:section-padding">
        <div className="max-w-7xl mx-auto text-center py-12 sm:py-20">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white">
            Track not found
          </h2>
          <Link
            to="/tracks"
            className="text-f1-accent hover:underline mt-4 inline-block text-sm"
          >
            Back to Tracks
          </Link>
        </div>
      </div>
    );
  }

  const stats = [
    { label: "Laps", value: track.laps },
    { label: "Elevation", value: track.elevation },
    { label: "Record Holder", value: track.lapRecordHolder },
    { label: "First GP", value: track.firstGrandPrix },
  ];

  return (
    <div className="pt-14 sm:pt-24 pb-12 sm:pb-20">
      <div className="px-4 sm:px-0 sm:wrap sm:section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link
              to="/tracks"
              className="inline-flex items-center gap-2 text-sm text-f1-muted hover:text-white transition-colors mb-4 sm:mb-8"
            >
              <ArrowLeft size={16} /> Back to Tracks
            </Link>
          </motion.div>

          {/* Track Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-10"
          >
            <div className="border border-f1-border">
              <div className="h-1 bg-f1-accent" />

              <div className="p-4 sm:p-6 md:p-8">
                {/* Meta */}
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span
                    className={`px-1.5 sm:px-2 py-[2px] text-[9px] sm:text-[10px] font-medium uppercase tracking-wider ${
                      track.type === "street"
                        ? "bg-purple-500/10 text-purple-400"
                        : track.type === "permanent"
                          ? "bg-blue-500/10 text-blue-400"
                          : "bg-orange-500/10 text-orange-400"
                    }`}
                  >
                    {track.type}
                  </span>

                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                    First GP {track.firstGrandPrix}
                  </span>
                </div>

                {/* Title */}
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-none mb-3 sm:mb-4">
                  {track.name}
                </h1>

                {/* Location */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 sm:gap-y-2 text-xs sm:text-sm text-f1-muted mb-4 sm:mb-6">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {track.location}, {track.country}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-f1-muted max-w-4xl leading-relaxed mb-4 sm:mb-8">
                  {track.description}
                </p>

                {/* Primary Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-px bg-f1-border">
                  <div className="bg-f1-card p-3 sm:p-4">
                    <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                      <Ruler size={14} className="text-f1-accent" />
                      <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-f1-accent">
                        Length
                      </span>
                    </div>
                    <p className="font-display text-lg sm:text-xl font-bold text-white">
                      {track.length}
                    </p>
                  </div>

                  <div className="bg-f1-card p-3 sm:p-4">
                    <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                      <CornerRightUp size={14} className="text-purple-400" />
                      <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-purple-400">
                        Turns
                      </span>
                    </div>
                    <p className="font-display text-lg sm:text-xl font-bold text-white">
                      {track.turns}
                    </p>
                  </div>

                  <div className="bg-f1-card p-3 sm:p-4">
                    <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                      <Mountain size={14} className="text-orange-400" />
                      <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-orange-400">
                        DRS
                      </span>
                    </div>
                    <p className="font-display text-lg sm:text-xl font-bold text-white">
                      {track.drsZones}
                    </p>
                  </div>

                  <div className="bg-f1-card p-3 sm:p-4">
                    <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                      <Clock size={14} className="text-green-400" />
                      <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-green-400">
                        Record
                      </span>
                    </div>
                    <p className="font-display text-lg sm:text-xl font-bold text-white">
                      {track.lapRecord}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Circuit Data */}
          <div className="border border-f1-border mb-6 sm:mb-12">
            <div className="h-1 bg-f1-accent" />

            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-4 sm:w-5 h-0.5 bg-f1-accent" />
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                  Circuit Data
                </span>
              </div>

              <h2 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-white mb-4 sm:mb-6">
                Technical Information
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-px bg-f1-border">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-f1-card p-3 sm:p-4"
                  >
                    <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-f1-muted mb-1.5 sm:mb-2">
                      {stat.label}
                    </p>

                    <p className="font-display text-sm sm:text-lg font-bold text-white break-words">
                      {stat.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Circuit Layout */}
          {/* Circuit Layout */}
          <div className="border border-f1-border mb-6 sm:mb-12">
            <div className="h-1 bg-f1-accent" />

            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-4 sm:w-5 h-0.5 bg-f1-accent" />
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                  Circuit
                </span>
              </div>

              <h2 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-white mb-4 sm:mb-6">
                Track Layout
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-4 sm:gap-6">
                <div className="border border-f1-border bg-f1-card h-[280px] sm:h-[420px] flex items-center justify-center">
                  {track.circuitSvg ? (
                    <img
                      src={track.circuitSvg}
                      alt={track.name}
                      className="max-w-full max-h-[220px] sm:max-h-[320px] object-contain p-4 sm:p-8"
                      style={{ filter: "invert(1) grayscale(1)" }}
                    />
                  ) : (
                    <span className="font-mono text-f1-muted uppercase tracking-wider text-xs sm:text-sm">
                      SVG Placeholder
                    </span>
                  )}
                </div>

                <div className="border border-f1-border">
                  <div className="bg-f1-card p-3 sm:p-4 border-b border-f1-border">
                    <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-f1-muted">
                      Length
                    </p>
                    <p className="font-display text-lg sm:text-xl font-bold text-white">
                      {track.length}
                    </p>
                  </div>

                  <div className="bg-f1-card p-3 sm:p-4 border-b border-f1-border">
                    <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-f1-muted">
                      Turns
                    </p>
                    <p className="font-display text-lg sm:text-xl font-bold text-white">
                      {track.turns}
                    </p>
                  </div>

                  <div className="bg-f1-card p-3 sm:p-4 border-b border-f1-border">
                    <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-f1-muted">
                      DRS Zones
                    </p>
                    <p className="font-display text-lg sm:text-xl font-bold text-white">
                      {track.drsZones}
                    </p>
                  </div>

                  <div className="bg-f1-card p-3 sm:p-4">
                    <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-f1-muted">
                      Lap Record
                    </p>
                    <p className="font-display text-lg sm:text-xl font-bold text-white">
                      {track.lapRecord}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sector Times */}
          <div>
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-4 sm:w-5 h-0.5 bg-f1-accent" />
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                Performance
              </span>
            </div>

            <h2 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-white mb-4 sm:mb-6">
              Best Sector Times
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {track.sectorTimes.map((sector, i) => (
                <motion.div
                  key={sector.sector}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-f1-border bg-f1-card p-4 sm:p-5"
                >
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-f1-accent block mb-2 sm:mb-3">
                    Sector {sector.sector}
                  </span>

                  <p className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-1.5 sm:mb-2 tabular-nums">
                    {sector.bestTime}
                  </p>

                  <p className="text-xs sm:text-sm text-f1-muted">
                    {sector.driver}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
