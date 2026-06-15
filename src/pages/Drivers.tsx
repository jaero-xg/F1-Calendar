import { useState } from "react";
import { motion } from "framer-motion";
import { useF1Data } from "../hooks/useF1Data";
import DriverCard from "../components/DriverCard";
import { StatMode } from "../types";

export default function Drivers() {
  const [mode, setMode] = useState<StatMode>("2026");
  const { data, loading } = useF1Data();
  const allDrivers = data?.drivers ?? [];

  if (loading) {
    return (
      <div className="pt-24 pb-20 text-center">
        <p className="text-f1-muted">Loading...</p>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="wrap section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 md:mb-8 pb-4 md:pb-6 border-b border-f1-border flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-0"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-0.5 bg-f1-accent" />

              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                Drivers
              </span>
            </div>

            <h1 className="font-display text-2xl md:text-4xl font-extrabold uppercase text-white">
              All Drivers
            </h1>
          </div>

          <span className="font-mono text-[10px] text-f1-muted">
            {allDrivers.length} Drivers
          </span>
        </motion.div>

        {/* FILTER */}
        <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
          <button
            onClick={() => setMode("2026")}
            className={`px-4 md:px-5 py-2 border font-mono text-xs uppercase transition-colors ${
              mode === "2026"
                ? "border-f1-accent text-f1-accent"
                : "border-f1-border text-f1-muted"
            }`}
          >
            2026 Season
          </button>

          <button
            onClick={() => setMode("all-time")}
            className={`px-4 md:px-5 py-2 border font-mono text-xs uppercase transition-colors ${
              mode === "all-time"
                ? "border-f1-accent text-f1-accent"
                : "border-f1-border text-f1-muted"
            }`}
          >
            All Time
          </button>
        </div>

        {/* Driver grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1">
          {allDrivers.map((driver, i) => (
            <DriverCard key={driver.id} driver={driver} index={i} mode={mode} />
          ))}
        </div>
      </div>
    </div>
  );
}
