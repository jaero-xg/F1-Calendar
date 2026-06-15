import TrackCard from "@/components/TrackCard";
import { tracks } from "@/data";
import { motion } from "framer-motion";

export default function Tracks() {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20">
      <div className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 sm:mb-6 md:mb-8 pb-3 sm:pb-4 md:pb-6 border-b border-f1-border flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-0"
        >
          <div>
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <div className="w-4 sm:w-5 h-0.5 bg-f1-accent" />
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                Circuits
              </span>
            </div>
            <h1 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase text-white leading-tight">
              All Tracks
            </h1>
          </div>
          <span className="font-mono text-[10px] text-f1-muted tracking-[0.1em]">
            {tracks.length} Tracks
          </span>
        </motion.div>

        {/* Track Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {tracks.map((track, i) => (
            <TrackCard key={track.id} track={track} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
