import { motion } from "framer-motion";
import TeamCard from "@/components/teamCard";
import { teams } from "@/data/teams";

export default function Teams() {
  return (
    <div className="pt-24 pb-20">
      <div className="wrap section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 pb-6 border-b border-f1-border flex items-end justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-0.5 bg-f1-accent" />
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                Constructors
              </span>
            </div>
            <h1 className="font-display text-4xl font-extrabold uppercase text-white">
              All Teams
            </h1>
          </div>
          <span className="font-mono text-[10px] text-f1-muted tracking-[0.1em]">
            {teams.length} TEAMS
          </span>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1">
          {teams.map((team, i) => (
            <TeamCard key={team.id} team={team} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
