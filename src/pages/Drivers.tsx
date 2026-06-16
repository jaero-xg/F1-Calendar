import { useState } from "react";
import { motion } from "framer-motion";
import { useF1Data } from "../hooks/useF1Data";
import DriverCard from "../components/DriverCard";
import { StatMode } from "../types";

/* ═══════════════════════════════════════════════════════════════
   FILTER BUTTON
   ═══════════════════════════════════════════════════════════════ */
function ModeButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 border font-mono text-[11px] sm:text-xs uppercase tracking-wider transition-all rounded-sm ${
        active
          ? "border-f1-accent text-f1-accent bg-f1-accent/5"
          : "border-f1-border/50 text-f1-muted hover:text-white hover:border-f1-border"
      }`}
    >
      {children}
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DRIVERS PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function Drivers() {
  const [mode, setMode] = useState<StatMode>("2026");
  const { data, loading } = useF1Data();
  const allDrivers = data?.drivers ?? [];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-3">
        <div className="font-mono text-sm text-f1-muted animate-pulse">
          Loading drivers...
        </div>
      </div>
    );
  }

  return (
    <div className="py-4 sm:py-6 md:py-8 lg:py-10 border-b border-f1-border">
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
                Drivers
              </span>
            </div>
            <h1 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase text-white leading-tight">
              All Drivers
            </h1>
          </div>
          <span className="font-mono text-[10px] text-f1-muted tracking-[0.1em]">
            {allDrivers.length} Drivers
          </span>
        </motion.div>

        {/* Mode Filter */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6 md:mb-8">
          <ModeButton active={mode === "2026"} onClick={() => setMode("2026")}>
            2026 Season
          </ModeButton>
          <ModeButton
            active={mode === "all-time"}
            onClick={() => setMode("all-time")}
          >
            All Time
          </ModeButton>
        </div>

        {/* Driver Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {allDrivers.map((driver, i) => (
            <DriverCard key={driver.id} driver={driver} index={i} mode={mode} />
          ))}
        </div>
      </div>
    </div>
  );
}
