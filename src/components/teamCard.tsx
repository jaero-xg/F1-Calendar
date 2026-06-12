import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Trophy, Award, Flag } from "lucide-react";
import { Team } from "../types";

interface TeamCardProps {
  team: Team;
  index: number;
}

export default function TeamCard({ team, index }: TeamCardProps) {
  const stats = [
    { label: "Championships", value: team.championships, icon: Trophy },
    { label: "Wins", value: team.wins, icon: Award },
    { label: "Poles", value: team.poles, icon: Flag },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link to={`/team/${team.id}`}>
        <article className="group bg-f1-card hover:bg-f1-surface/30 transition-colors flex flex-col h-full border border-f1-border overflow-hidden">
          {/* Top accent bar — team color on hover */}
          <div
            className="h-0.5 bg-f1-border transition-colors"
            style={{ "--team-color": team.color } as React.CSSProperties}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                team.color)
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "")
            }
          />

          {/* Header */}
          <header className="px-4 py-3 border-b border-f1-border flex items-center justify-between">
            <span
              className="font-mono text-[10px] uppercase tracking-widest"
              style={{ color: team.color }}
            >
              {team.powerUnit}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-f1-muted">
              Since {team.firstEntry}
            </span>
          </header>

          {/* Body */}
          <div className="p-4 flex flex-col flex-1">
            {/* Team name */}
            <div className="mb-3">
              <p className="font-mono text-[10px] uppercase tracking-widest text-f1-muted mb-1">
                {team.base.split(",").pop()?.trim()}
              </p>
              <h3 className="font-display text-xl font-extrabold uppercase leading-tight text-white group-hover:text-f1-accent transition-colors">
                {team.shortName}
              </h3>
              <p className="text-[11px] text-f1-muted mt-0.5">
                {team.chassis} · {team.principal}
              </p>
            </div>

            {/* Color swatch — fills remaining space */}
            <div
              className="flex-1 min-h-0 flex items-center justify-center mb-3 border border-f1-border/40 relative overflow-hidden"
              style={{ backgroundColor: team.color + "10" }}
            >
              {/* Abstract car number watermark */}
              <span
                className="font-display text-[80px] font-black opacity-[0.07] pointer-events-none select-none leading-none"
                style={{ color: team.color }}
              >
                F1
              </span>
              {/* Team color bar accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ backgroundColor: team.color + "60" }}
              />
            </div>

            {/* Stats */}
            <div className="flex flex-col divide-y divide-f1-border/50">
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
