import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Ruler,
  CornerRightUp,
  Clock,
  Mountain,
  Route,
} from "lucide-react";
import { getTrackById } from "../data/tracks";

export default function TrackDetails() {
  const { id } = useParams<{ id: string }>();
  const track = getTrackById(id || "");

  if (!track) {
    return (
      <div className="min-h-screen flex items-center justify-center px-3">
        <div className="text-center">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold uppercase text-white mb-4">
            Track not found
          </h2>
          <Link to="/tracks" className="text-f1-accent hover:underline text-sm">
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
    <div className="py-4 sm:py-6 md:py-8 lg:py-10 border-b border-f1-border">
      <div className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link
              to="/tracks"
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-sm text-f1-muted hover:text-white transition-colors mb-3 sm:mb-6"
            >
              <ArrowLeft size={14} className="sm:size-4" /> Back to Tracks
            </Link>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════
              TRACK HEADER
              ═══════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-8 md:mb-10"
          >
            <div className="border border-f1-border overflow-hidden rounded-sm">
              <div className="h-1 bg-f1-accent" />
              <div className="p-3 sm:p-5 md:p-6 lg:p-8">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <span
                    className={`px-1.5 py-[2px] text-[9px] sm:text-[10px] font-medium uppercase tracking-wider rounded-sm ${
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
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight mb-2 sm:mb-3">
                  {track.name}
                </h1>

                {/* Location */}
                <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1 sm:gap-y-1.5 text-[11px] sm:text-xs md:text-sm text-f1-muted mb-3 sm:mb-4 md:mb-6">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="sm:size-[14px] shrink-0" />
                    {track.location}, {track.country}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[11px] sm:text-xs md:text-sm text-f1-muted max-w-4xl leading-relaxed mb-3 sm:mb-4 md:mb-8">
                  {track.description}
                </p>

                {/* Primary Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-f1-border rounded-sm overflow-hidden">
                  {[
                    {
                      label: "Length",
                      value: track.length,
                      icon: Ruler,
                      accent: "text-f1-accent",
                    },
                    {
                      label: "Turns",
                      value: track.turns,
                      icon: CornerRightUp,
                      accent: "text-purple-400",
                    },
                    {
                      label: "DRS",
                      value: track.drsZones,
                      icon: Mountain,
                      accent: "text-orange-400",
                    },
                    {
                      label: "Record",
                      value: track.lapRecord,
                      icon: Clock,
                      accent: "text-green-400",
                    },
                  ].map(({ label, value, icon: Icon, accent }) => (
                    <div key={label} className="bg-f1-card p-2.5 sm:p-3 md:p-4">
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
                        <Icon
                          size={12}
                          className={`sm:size-[14px] ${accent} shrink-0`}
                        />
                        <span
                          className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] ${accent}`}
                        >
                          {label}
                        </span>
                      </div>
                      <p className="font-display text-base sm:text-lg md:text-xl font-bold text-white truncate">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════
              CIRCUIT DATA
              ═══════════════════════════════════════════════════════ */}
          <div className="border border-f1-border mb-4 sm:mb-6 md:mb-8 overflow-hidden rounded-sm">
            <div className="h-1 bg-f1-accent" />
            <div className="p-3 sm:p-4 md:p-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4 md:mb-6">
                <div className="w-3 sm:w-4 md:w-5 h-0.5 bg-f1-accent" />
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                  Circuit Data
                </span>
              </div>

              <h2 className="font-display text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide text-white mb-3 sm:mb-4 md:mb-6">
                Technical Information
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-f1-border rounded-sm overflow-hidden">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-f1-card p-2.5 sm:p-3 md:p-4"
                  >
                    <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-f1-muted mb-1 sm:mb-1.5">
                      {stat.label}
                    </p>
                    <p className="font-display text-sm sm:text-base md:text-lg font-bold text-white break-words">
                      {stat.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════
              CIRCUIT LAYOUT
              ═══════════════════════════════════════════════════════ */}
          <div className="border border-f1-border mb-4 sm:mb-6 md:mb-8 overflow-hidden rounded-sm">
            <div className="h-1 bg-f1-accent" />
            <div className="p-3 sm:p-4 md:p-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4 md:mb-6">
                <div className="w-3 sm:w-4 md:w-5 h-0.5 bg-f1-accent" />
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                  Circuit
                </span>
              </div>

              <h2 className="font-display text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide text-white mb-3 sm:mb-4 md:mb-6">
                Track Layout
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] xl:grid-cols-[1fr_280px] gap-3 sm:gap-4 md:gap-6">
                {/* Circuit SVG - properly centered */}
                <div className="border border-f1-border bg-f1-card h-[220px] sm:h-[340px] md:h-[400px] lg:h-[420px] flex items-center justify-center overflow-hidden rounded-sm">
                  {track.circuitSvg ? (
                    <img
                      src={track.circuitSvg}
                      alt={track.name}
                      className="w-full h-full object-contain p-4 sm:p-6 md:p-8 lg:p-10"
                      style={{ filter: "invert(1) grayscale(1)" }}
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-f1-muted">
                      <Route size={24} className="opacity-40" />
                      <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider">
                        No layout available
                      </span>
                    </div>
                  )}
                </div>

                {/* Side stats */}
                <div className="border border-f1-border overflow-hidden rounded-sm">
                  {[
                    { label: "Length", value: track.length },
                    { label: "Turns", value: track.turns },
                    { label: "DRS Zones", value: track.drsZones },
                    { label: "Lap Record", value: track.lapRecord },
                  ].map(({ label, value }, i, arr) => (
                    <div
                      key={label}
                      className={`bg-f1-card p-2.5 sm:p-3 md:p-4 ${
                        i < arr.length - 1 ? "border-b border-f1-border/30" : ""
                      }`}
                    >
                      <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-f1-muted mb-1 sm:mb-1.5">
                        {label}
                      </p>
                      <p className="font-display text-base sm:text-lg md:text-xl font-bold text-white">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════
              SECTOR TIMES
              ═══════════════════════════════════════════════════════ */}
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4 md:mb-6">
              <div className="w-3 sm:w-4 md:w-5 h-0.5 bg-f1-accent" />
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                Performance
              </span>
            </div>

            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide text-white mb-3 sm:mb-4 md:mb-6">
              Best Sector Times
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              {track.sectorTimes.map((sector, i) => (
                <motion.div
                  key={sector.sector}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-f1-border bg-f1-card p-3 sm:p-4 md:p-5 rounded-sm"
                >
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-f1-accent block mb-1.5 sm:mb-2 md:mb-3">
                    Sector {sector.sector}
                  </span>

                  <p className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-1 sm:mb-1.5 tabular-nums">
                    {sector.bestTime}
                  </p>

                  <p className="text-[11px] sm:text-xs md:text-sm text-f1-muted truncate">
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
