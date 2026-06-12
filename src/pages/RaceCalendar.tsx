import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import RaceCard from "../components/RaceCard";
import { races } from "../data/races";

type FilterType = "all" | "completed" | "upcoming";

function PageHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      <span className="label text-f1-accent">2026 Season</span>
      <h1 className="heading-lg mt-2 mb-4">Race Calendar</h1>
      <p className="body-lg max-w-2xl">
        22 races across 5 continents. Six Sprint weekends. One World Champion.
      </p>
    </motion.div>
  );
}

function FilterButton({
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
      className={`px-4 py-2 text-sm font-medium transition-all ${
        active
          ? "bg-f1-accent text-white"
          : "bg-f1-surface text-f1-muted hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

function FiltersBar({
  filter,
  setFilter,
  count,
}: {
  filter: FilterType;
  setFilter: (f: FilterType) => void;
  count: number;
}) {
  const options: FilterType[] = ["all", "completed", "upcoming"];

  return (
    <div className="flex items-center gap-2 mb-10">
      <Filter size={16} className="text-f1-muted mr-2" />

      {options.map((f) => (
        <FilterButton
          key={f}
          active={filter === f}
          onClick={() => setFilter(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </FilterButton>
      ))}
    </div>
  );
}

function getFilteredRaces(filter: FilterType) {
  return races.filter((race) => {
    if (filter === "completed") return race.status === "completed";
    if (filter === "upcoming") return race.status === "upcoming";
    return true;
  });
}

function RaceGrid({ races }: { races: typeof import("../data/races").races }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1">
      {races.map((race, i) => (
        <RaceCard key={race.id} race={race} index={i} />
      ))}
    </div>
  );
}

export default function RaceCalendar() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredRaces = useMemo(() => getFilteredRaces(filter), [filter]);

  return (
    <div className="pt-24 pb-20">
      <div className="section-padding">
        <div className="wrap section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 pb-6 border-b border-f1-border flex items-end justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-0.5 bg-f1-accent" />
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-f1-accent">
                  2026 Season
                </span>
              </div>
              <h1 className="font-display text-4xl font-extrabold uppercase text-white">
                Calendar
              </h1>
            </div>
            <span className="font-mono text-[10px] text-f1-muted tracking-[0.1em]">
              {races.length} Races
            </span>
          </motion.div>

          <FiltersBar
            filter={filter}
            setFilter={setFilter}
            count={filteredRaces.length}
          />

          <RaceGrid races={filteredRaces} />
        </div>
      </div>
    </div>
  );
}
