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
        <article className="bg-f1-card overflow-hidden card-hover group h-full flex relative">
          {/* Left: Full-height image placeholder — 1/3 width */}
          <div
            className="w-1/3 min-w-[80px] flex items-center justify-center"
            style={{ backgroundColor: driver.teamColor + "12" }}
          >
            <User size={40} style={{ color: driver.teamColor + "40" }} />
          </div>

          {/* Right: Content — 2/3 width */}
          <div className="flex-1 min-w-0 p-4 flex flex-col">
            {/* Number + Team + Points */}
            <header className="flex items-center gap-2 mb-2">
              <span
                className="text-sm font-black"
                style={{ color: driver.teamColor }}
              >
                #{driver.number}
              </span>
              <span
                className="text-xs font-medium"
                style={{ color: driver.teamColor }}
              >
                {driver.team}
              </span>
              <span className="ml-auto text-lg font-bold tabular-nums">
                {driver.points}
              </span>
            </header>

            <h3 className="text-base font-semibold group-hover:text-f1-accent transition-colors truncate">
              <span className="text-f1-muted font-normal">
                {driver.firstName}
              </span>{" "}
              {driver.lastName}
            </h3>

            <p className="text-xs text-f1-muted mt-0.5 mb-3">
              {driver.country}
            </p>

            <div className="mt-auto flex items-center gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-1">
                  <stat.icon size={12} className="text-f1-muted" />
                  <span className="text-xs font-medium">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative watermark — bottom right */}
          <div
            className="absolute bottom-3 right-4 text-4xl font-black opacity-10 pointer-events-none"
            style={{ color: driver.teamColor }}
          >
            {driver.number}
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
