import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Flag,
  Trophy,
  Star,
  Clock,
  Award,
  User,
} from "lucide-react";
import { getDriverById } from "../data/drivers";

export default function DriverDetails() {
  const { id } = useParams<{ id: string }>();
  const driver = getDriverById(id || "");

  if (!driver) {
    return (
      <div className="pt-24 section-padding">
        <div className="max-w-7xl mx-auto text-center py-20">
          <h2 className="font-display text-3xl font-extrabold uppercase text-white">
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

  const stats = [
    { label: "Points", value: driver.points, icon: Star },
    { label: "Wins", value: driver.wins, icon: Trophy },
    { label: "Podiums", value: driver.podiums, icon: Award },
    { label: "Poles", value: driver.poles, icon: Flag },
    { label: "Fastest Laps", value: driver.fastestLaps, icon: Clock },
    { label: "Championships", value: driver.championships, icon: Trophy },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="wrap section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Back link */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link
              to="/drivers"
              className="inline-flex items-center gap-2 text-sm text-f1-muted hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={16} /> All Drivers
            </Link>
          </motion.div>

          {/* Driver Header — 2 column: image left, info right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-0 border border-f1-border">
              {/* Left: Image placeholder */}
              <div
                className="flex items-center justify-center py-12 md:py-0"
                style={{ backgroundColor: driver.teamColor + "10" }}
              >
                <div className="flex flex-col items-center gap-3">
                  <User size={64} style={{ color: driver.teamColor + "30" }} />
                  <span
                    className="font-display text-5xl font-black"
                    style={{ color: driver.teamColor }}
                  >
                    {driver.number}
                  </span>
                </div>
              </div>

              {/* Right: Info */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.15em] font-medium"
                    style={{ color: driver.teamColor }}
                  >
                    {driver.team}
                  </span>
                  <span className="text-f1-muted">·</span>
                  <span className="text-sm text-f1-muted">
                    {driver.country}
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-none mb-4">
                  {driver.firstName}{" "}
                  <span style={{ color: driver.teamColor }}>
                    {driver.lastName}
                  </span>
                </h1>

                <p className="text-sm text-f1-muted leading-relaxed max-w-xl">
                  {driver.bio}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid — 1px gap, flat cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-f1-border mb-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-f1-card p-5 text-center"
              >
                <stat.icon size={18} className="mx-auto mb-2 text-f1-muted" />
                <p className="font-display text-3xl font-extrabold text-white">
                  {stat.value}
                </p>
                <p className="font-mono text-[10px] text-f1-muted uppercase tracking-[0.1em] mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Season Results Header */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-5 h-0.5 bg-f1-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-f1-accent">
              2026 Season
            </span>
          </div>
          <h2 className="font-display text-2xl font-extrabold uppercase tracking-wide text-white mb-6">
            Race Results
          </h2>

          {/* Results Table — flat, no rounded corners */}
          <div className="border border-f1-border">
            {/* Table header */}
            <div className="grid grid-cols-[1fr_80px_80px_60px_60px] gap-0 border-b border-f1-border">
              <div className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-f1-muted">
                Race
              </div>
              <div className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-f1-muted text-center">
                Pos
              </div>
              <div className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-f1-muted text-center">
                Pts
              </div>
              <div className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-f1-muted text-center">
                Pole
              </div>
              <div className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-f1-muted text-center">
                FL
              </div>
            </div>

            {/* Table rows */}
            {driver.seasonStats.map((stat, i) => (
              <motion.div
                key={stat.race}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className="grid grid-cols-[1fr_80px_80px_60px_60px] gap-0 border-b border-f1-border last:border-b-0 hover:bg-f1-surface/30 transition-colors"
              >
                <div className="px-4 py-3 text-sm font-medium text-white">
                  {stat.race}
                </div>
                <div className="px-4 py-3 text-center">
                  <span
                    className={`text-sm font-bold ${
                      stat.position === 1
                        ? "text-f1-gold"
                        : stat.position === 2
                          ? "text-f1-silver"
                          : stat.position === 3
                            ? "text-f1-bronze"
                            : "text-white"
                    }`}
                  >
                    {stat.position === 1
                      ? "1st"
                      : stat.position === 2
                        ? "2nd"
                        : stat.position === 3
                          ? "3rd"
                          : `${stat.position}th`}
                  </span>
                </div>
                <div className="px-4 py-3 text-sm text-white text-center">
                  {stat.points}
                </div>
                <div className="px-4 py-3 text-center">
                  {stat.pole ? (
                    <Star size={14} className="mx-auto text-purple-400" />
                  ) : (
                    <span className="text-f1-muted">—</span>
                  )}
                </div>
                <div className="px-4 py-3 text-center">
                  {stat.fastestLap ? (
                    <Clock size={14} className="mx-auto text-f1-accent" />
                  ) : (
                    <span className="text-f1-muted">—</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
