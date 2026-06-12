import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User, Trophy, Award, Flag } from "lucide-react";
import { Driver } from "../types";

interface DriverCardProps {
  driver: Driver;
  index: number;
}

export default function DriverCard({ driver, index }: DriverCardProps) {
  const stats = [
    { label: "Wins", value: driver.wins, icon: Trophy },
    { label: "Podiums", value: driver.podiums, icon: Award },
    { label: "Poles", value: driver.poles, icon: Flag },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link to={`/driver/${driver.id}`}>
        <article className="group bg-f1-card hover:bg-f1-surface/30 transition-colors flex flex-col h-full border border-f1-border overflow-hidden">
          {/* Top accent bar */}
          <div className="h-0.5 bg-f1-border group-hover:bg-f1-accent transition-colors" />

          {/* Header */}
          <header className="px-4 py-3 border-b border-f1-border flex items-center justify-between">
            <span
              className="font-mono text-[10px] uppercase tracking-widest"
              style={{ color: driver.teamColor }}
            >
              #{driver.number}
            </span>
            <span
              className="font-mono text-[10px] uppercase tracking-widest"
              style={{ color: driver.teamColor + "99" }}
            >
              {driver.team}
            </span>
          </header>

          {/* Body */}
          <div className="p-4 flex flex-col flex-1">
            {/* Driver name */}
            <div className="mb-3">
              <p className="font-mono text-[10px] uppercase tracking-widest text-f1-muted mb-1">
                {driver.country}
              </p>
              <h3 className="font-display text-xl font-extrabold uppercase leading-tight group-hover:text-f1-accent transition-colors">
                <span className="text-f1-muted font-normal">
                  {driver.firstName}{" "}
                </span>
                <span className="text-white">{driver.lastName}</span>
              </h3>
            </div>

            {/* Driver image — fills remaining space */}
            <div
              className="flex-1 min-h-0 flex items-center justify-center mb-3 border border-f1-border/40 relative overflow-hidden"
              style={{ backgroundColor: driver.teamColor + "10" }}
            >
              <User size={64} style={{ color: driver.teamColor + "30" }} />
              {/* Watermark number */}
              <span
                className="absolute bottom-2 right-3 text-5xl font-black opacity-10 pointer-events-none select-none font-display"
                style={{ color: driver.teamColor }}
              >
                {driver.number}
              </span>
            </div>

            {/* Stats + points */}
            <div className="flex flex-col divide-y divide-f1-border/50">
              <div className="flex items-center justify-between py-2">
                <span className="text-[11px] text-f1-muted">Points</span>
                <span className="font-mono text-[12px] text-white tabular-nums">
                  {driver.points}
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
                  <span className="font-mono text-[12px] text-white tabular-nums">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
