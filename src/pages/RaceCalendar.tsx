import { useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import RaceCard from "../components/RaceCard";
import { races } from "../data/races";

export default function RaceCalendar() {
  const [filter, setFilter] = useState<"all" | "completed" | "upcoming">("all");

  const filteredRaces = races.filter((race) => {
    if (filter === "completed") return race.status === "completed";
    if (filter === "upcoming") return race.status === "upcoming";
    return true;
  });

  return (
    <div className="pt-24 pb-20">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <span className="label text-f1-accent">2026 Season</span>
            <h1 className="heading-lg mt-2 mb-4">Race Calendar</h1>
            <p className="body-lg max-w-2xl">
              22 races across 5 continents. Six Sprint weekends. One World
              Champion.
            </p>
          </motion.div>

          <div className="flex items-center gap-2 mb-10">
            <Filter size={16} className="text-f1-muted mr-2" />
            {(["all", "completed", "upcoming"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-f1-accent text-white"
                    : "bg-f1-surface text-f1-muted hover:text-white"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
            <span className="ml-auto text-sm text-f1-muted">
              {filteredRaces.length} races
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRaces.map((race, i) => (
              <RaceCard key={race.id} race={race} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
