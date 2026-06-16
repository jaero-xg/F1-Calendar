import { motion } from "framer-motion";
import TeamCard from "@/components/teamCard";
import { teams } from "@/data/teams";

export default function Teams() {
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
                Constructors
              </span>
            </div>
            <h1 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase text-white leading-tight">
              All Teams
            </h1>
          </div>
          <span className="font-mono text-[10px] text-f1-muted tracking-[0.1em]">
            {teams.length} Teams
          </span>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {teams.map((team, i) => (
            <TeamCard key={team.id} team={team} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
