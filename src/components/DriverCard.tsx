import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Driver, StatMode } from "../types";
import { getDriverStats } from "../utils/driverStats";

interface DriverCardProps {
  driver: Driver;
  index: number;
  mode: StatMode;
}

export default function DriverCard({ driver, index, mode }: DriverCardProps) {
  const stats = getDriverStats(driver, mode);
  const basePoints =
    mode === "all-time" ? driver.allTime.points : driver.season.points;
  const fullName = `${driver.firstName} ${driver.lastName}`;

  // Mobile: show only top 3 stats (points already shown separately)
  const mobileStats = stats.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <Link to={`/driver/${driver.id}`} className="block h-full">
        {/* ── DESKTOP: vertical card ── */}
        <article className="hidden sm:flex group bg-f1-card hover:bg-f1-surface/30 active:bg-f1-surface/50 transition-colors flex-col h-full border border-f1-border overflow-hidden rounded-sm">
          <div className="h-0.5 bg-f1-border group-hover:bg-f1-accent transition-colors" />

          <header className="px-4 py-3 border-b border-f1-border flex items-center justify-between">
            <span
              className="font-mono text-[10px] uppercase tracking-widest font-semibold"
              style={{ color: driver.teamColor }}
            >
              #{driver.number}
            </span>
            <span
              className="font-mono text-[10px] uppercase tracking-widest truncate"
              style={{ color: driver.teamColor + "99" }}
            >
              {driver.team}
            </span>
          </header>

          <div className="p-4 flex flex-col flex-1">
            <div className="mb-3">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`fi fi-${driver.countryCode.toLowerCase()} text-base`}
                />
                <p className="font-mono text-[10px] uppercase tracking-widest text-f1-muted">
                  {driver.country}
                </p>
              </div>
              <h3 className="font-display text-xl font-extrabold uppercase leading-tight group-hover:text-f1-accent transition-colors">
                <span className="text-f1-muted font-normal">
                  {driver.firstName}{" "}
                </span>
                <span className="text-white">{driver.lastName}</span>
              </h3>
            </div>

            <div
              className="flex-1 min-h-[130px] flex items-center justify-center mb-3 border border-f1-border/40 overflow-hidden rounded-sm"
              style={{ backgroundColor: driver.teamColor + "10" }}
            >
              <img
                src={driver.image}
                alt={fullName}
                className="w-full h-full object-contain p-3"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col divide-y divide-f1-border/50">
              <div className="flex items-center justify-between py-2">
                <span className="text-[11px] text-f1-muted">
                  {mode === "all-time" ? "Career Points" : "Points"}
                </span>
                <span className="font-mono text-[12px] text-white tabular-nums font-semibold">
                  {basePoints}
                </span>
              </div>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between py-2"
                >
                  <span className="flex items-center gap-1.5 text-[11px] text-f1-muted">
                    <stat.icon size={11} className="shrink-0" />
                    {stat.label}
                  </span>
                  <span className="font-mono text-[12px] text-white tabular-nums font-semibold">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* ── MOBILE: horizontal card ── */}
        {/* ── MOBILE: horizontal card ── */}
        <article className="sm:hidden group bg-f1-card active:bg-f1-surface/50 transition-colors border border-f1-border overflow-hidden rounded-sm relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-[3px]"
            style={{ backgroundColor: driver.teamColor + "99" }}
          />

          <div className="flex pl-[3px] h-[100px]">
            {/* Image — fixed height, flush */}
            <div
              className="w-[80px] shrink-0 h-full flex items-end justify-center overflow-hidden"
              style={{ backgroundColor: driver.teamColor + "18" }}
            >
              <img
                src={driver.image}
                alt={fullName}
                className="w-full h-full object-contain object-bottom"
                loading="lazy"
              />
            </div>

            {/* Right content */}
            <div className="flex flex-col flex-1 min-w-0 px-3 py-2 justify-between">
              {/* Top row: number + team */}
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-[11px] uppercase tracking-widest font-bold"
                  style={{ color: driver.teamColor }}
                >
                  #{driver.number}
                </span>
                <span
                  className="font-mono text-[9px] uppercase tracking-wider truncate ml-2 max-w-[120px]"
                  style={{ color: driver.teamColor + "90" }}
                >
                  {driver.team}
                </span>
              </div>

              {/* Name */}
              <div className="leading-none">
                <div className="flex items-center gap-1 mb-0.5">
                  <span
                    className={`fi fi-${driver.countryCode.toLowerCase()} text-[10px]`}
                  />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-f1-muted">
                    {driver.firstName}
                  </span>
                </div>
                <h3 className="font-display text-[16px] font-extrabold uppercase leading-none group-hover:text-f1-accent transition-colors">
                  {driver.lastName}
                </h3>
              </div>

              {/* Stats row — labels on top, values below, strictly aligned */}
              <div className="flex items-end gap-4 pt-1.5 border-t border-f1-border/40">
                {[
                  {
                    label: mode === "all-time" ? "Career" : "Pts",
                    value: String(basePoints),
                  },
                  ...mobileStats.map((s) => ({
                    label: s.label,
                    value: String(s.value),
                  })),
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
