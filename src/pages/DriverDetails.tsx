import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { getDriverStats } from "../utils/driverStats";
import type { StatMode } from "@/types";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Clock } from "lucide-react";
import { getDriverById } from "../data/drivers";

export default function DriverDetails() {
  const { id } = useParams<{ id: string }>();
  const driver = getDriverById(id || "");

  if (!driver) {
    return (
      <div className="pt-20 sm:pt-24 px-4 sm:section-padding">
        <div className="max-w-7xl mx-auto text-center py-12 sm:py-20">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white">
            Driver not found
          </h2>
          <Link
            to="/drivers"
            className="text-f1-accent hover:underline mt-4 inline-block text-sm"
          >
            Back to Drivers
          </Link>
        </div>
      </div>
    );
  }

  const [mode, setMode] = useState<"2026" | "all-time">("2026");
  const stats = getDriverStats(driver, mode);

  return (
    <div className="pt-14 sm:pt-24 pb-12 sm:pb-20">
      <div className="px-4 sm:px-0 sm:wrap sm:section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Back link */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link
              to="/drivers"
              className="inline-flex items-center gap-2 text-sm text-f1-muted hover:text-white transition-colors mb-4 sm:mb-8"
            >
              <ArrowLeft size={16} /> All Drivers
            </Link>
          </motion.div>

          {/* Driver Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] md:grid-cols-[280px_1fr] gap-0 border border-f1-border">
              {/* Left: Image */}
              <div
                className="flex items-center justify-center py-8 sm:py-0 h-[200px] sm:h-auto"
                style={{ backgroundColor: driver.teamColor + "10" }}
              >
                <img
                  src={driver.image}
                  alt={`${driver.firstName} ${driver.lastName}`}
                  className="h-full sm:h-auto sm:w-full object-contain"
                />
              </div>

              {/* Right: Info */}
              <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span
                    className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-medium"
                    style={{ color: driver.teamColor }}
                  >
                    {driver.team}
                  </span>
                  <span className="text-f1-muted">·</span>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span
                      className={`fi fi-${driver.countryCode.toLowerCase()} text-sm sm:text-base`}
                    />
                    <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-f1-muted">
                      {driver.country}
                    </p>
                  </div>
                </div>

                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-none mb-3 sm:mb-4">
                  {driver.firstName}{" "}
                  <span style={{ color: driver.teamColor }}>
                    {driver.lastName}
                  </span>
                </h1>

                <p className="text-xs sm:text-sm text-f1-muted leading-relaxed max-w-xl">
                  {driver.bio}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mode toggle */}
          <div className="flex gap-2 mb-4 sm:mb-6">
            <button
              onClick={() => setMode("2026")}
              className={`px-3 sm:px-4 py-2 border font-mono text-xs uppercase transition-colors ${
                mode === "2026"
                  ? "border-f1-accent text-f1-accent"
                  : "border-f1-border text-f1-muted"
              }`}
            >
              2026
            </button>
            <button
              onClick={() => setMode("all-time")}
              className={`px-3 sm:px-4 py-2 border font-mono text-xs uppercase transition-colors ${
                mode === "all-time"
                  ? "border-f1-accent text-f1-accent"
                  : "border-f1-border text-f1-muted"
              }`}
            >
              All Time
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-px bg-f1-border mb-6 sm:mb-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-f1-card p-3 sm:p-5 text-center"
              >
                <stat.icon
                  size={16}
                  className="mx-auto mb-1.5 sm:mb-2 text-f1-muted"
                />
                <p className="font-display text-xl sm:text-3xl font-extrabold text-white">
                  {stat.value}
                </p>
                <p className="font-mono text-[9px] sm:text-[10px] text-f1-muted uppercase tracking-[0.1em] mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Dynamic Header */}
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <div className="w-4 sm:w-5 h-0.5 bg-f1-accent" />
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-f1-accent">
              {mode === "2026" ? "2026 Season" : "All Time"}
            </span>
          </div>
          <h2 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-white mb-4 sm:mb-6">
            {mode === "2026" ? "Race Results" : "Career Statistics"}
          </h2>

          {/* 2026 Mode: Race Table */}
          {mode === "2026" ? (
            <div className="border border-f1-border overflow-x-auto">
              <div className="min-w-[500px]">
                <div className="grid grid-cols-[1fr_60px_60px_50px_50px] sm:grid-cols-[1fr_80px_80px_60px_60px] gap-0 border-b border-f1-border">
                  <div className="px-3 sm:px-4 py-2.5 sm:py-3 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-f1-muted">
                    Race
                  </div>
                  <div className="px-3 sm:px-4 py-2.5 sm:py-3 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-f1-muted text-center">
                    Pos
                  </div>
                  <div className="px-3 sm:px-4 py-2.5 sm:py-3 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-f1-muted text-center">
                    Pts
                  </div>
                  <div className="px-3 sm:px-4 py-2.5 sm:py-3 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-f1-muted text-center">
                    Pole
                  </div>
                  <div className="px-3 sm:px-4 py-2.5 sm:py-3 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-f1-muted text-center">
                    FL
                  </div>
                </div>

                {driver.seasonStats.map((stat, i) => (
                  <motion.div
                    key={stat.race}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="grid grid-cols-[1fr_60px_60px_50px_50px] sm:grid-cols-[1fr_80px_80px_60px_60px] gap-0 border-b border-f1-border last:border-b-0 hover:bg-f1-surface/30 transition-colors"
                  >
                    <div className="px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white">
                      {stat.race}
                    </div>
                    <div className="px-3 sm:px-4 py-2.5 sm:py-3 text-center">
                      {stat.position === null ? (
                        <span className="text-f1-muted text-xs sm:text-sm">
                          —
                        </span>
                      ) : (
                        <span
                          className={`text-xs sm:text-sm font-bold ${
                            stat.position === 1
                              ? "text-f1-gold"
                              : stat.position === 2
                                ? "text-f1-silver"
                                : stat.position === 3
                                  ? "text-f1-bronze"
                                  : stat.position === 99
                                    ? "text-red-400"
                                    : "text-white"
                          }`}
                        >
                          {stat.position === 99
                            ? "DNF"
                            : stat.position === 1
                              ? "1st"
                              : stat.position === 2
                                ? "2nd"
                                : stat.position === 3
                                  ? "3rd"
                                  : `${stat.position}th`}
                        </span>
                      )}
                    </div>
                    <div className="px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white text-center">
                      {stat.points ?? <span className="text-f1-muted">—</span>}
                    </div>
                    <div className="px-3 sm:px-4 py-2.5 sm:py-3 text-center">
                      {stat.pole === null ? (
                        <span className="text-f1-muted">—</span>
                      ) : stat.pole ? (
                        <Star
                          size={12}
                          className="mx-auto text-purple-400 sm:size-14"
                        />
                      ) : (
                        <span className="text-f1-muted">—</span>
                      )}
                    </div>
                    <div className="px-3 sm:px-4 py-2.5 sm:py-3 text-center">
                      {stat.fastestLap === null ? (
                        <span className="text-f1-muted">—</span>
                      ) : stat.fastestLap ? (
                        <Clock
                          size={12}
                          className="mx-auto text-f1-accent sm:size-14"
                        />
                      ) : (
                        <span className="text-f1-muted">—</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            /* All-Time Mode: Career Summary */
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-f1-card p-4 sm:p-6 border border-f1-border">
                <p className="font-mono text-[9px] sm:text-[10px] uppercase text-f1-muted mb-1.5 sm:mb-2">
                  Career Starts
                </p>
                <p className="font-display text-xl sm:text-2xl font-extrabold text-white">
                  {driver.allTime.starts}
                </p>
              </div>
              <div className="bg-f1-card p-4 sm:p-6 border border-f1-border">
                <p className="font-mono text-[9px] sm:text-[10px] uppercase text-f1-muted mb-1.5 sm:mb-2">
                  World Championships
                </p>
                <p className="font-display text-xl sm:text-2xl font-extrabold text-white">
                  {driver.allTime.championships}
                </p>
              </div>
              <div className="bg-f1-card p-4 sm:p-6 border border-f1-border">
                <p className="font-mono text-[9px] sm:text-[10px] uppercase text-f1-muted mb-1.5 sm:mb-2">
                  Career Points
                </p>
                <p className="font-display text-xl sm:text-2xl font-extrabold text-white">
                  {driver.allTime.points}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
