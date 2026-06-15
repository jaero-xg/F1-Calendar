import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import RaceCard from "../components/RaceCard";
import { races } from "../data/races";

type FilterType = "all" | "completed" | "upcoming";

/* ═══════════════════════════════════════════════════════════════
   FILTER BUTTON
   ═══════════════════════════════════════════════════════════════ */
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
      className={`px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs md:text-sm font-medium transition-all rounded-sm ${
        active
          ? "bg-f1-accent text-white"
          : "bg-f1-surface text-f1-muted hover:text-white border border-f1-border/50"
      }`}
    >
      {children}
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FILTERS BAR
   ═══════════════════════════════════════════════════════════════ */
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
    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 md:mb-8">
      <Filter size={14} className="text-f1-muted mr-1 sm:mr-2 shrink-0" />

      {options.map((f) => (
        <FilterButton
          key={f}
          active={filter === f}
          onClick={() => setFilter(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </FilterButton>
      ))}

      <span className="font-mono text-[10px] text-f1-muted ml-auto">
        {count} races
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FILTER LOGIC
   ═══════════════════════════════════════════════════════════════ */
function getFilteredRaces(filter: FilterType) {
  return races.filter((race) => {
    if (filter === "completed") return race.status === "completed";
    if (filter === "upcoming") return race.status === "upcoming";
    return true;
  });
}

/* ═══════════════════════════════════════════════════════════════
   RACE GRID
   ═══════════════════════════════════════════════════════════════ */
function RaceGrid({ races }: { races: typeof import("../data/races").races }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
      {races.map((race, i) => (
        <RaceCard key={race.id} race={race} index={i} />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   RACE CALENDAR PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function RaceCalendar() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredRaces = useMemo(() => getFilteredRaces(filter), [filter]);

  return (
    <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20">
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
                2026 Season
              </span>
            </div>
            <h1 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase text-white leading-tight">
              Calendar
            </h1>
          </div>
          <span className="font-mono text-[10px] text-f1-muted tracking-[0.1em]">
            {races.length} Races
          </span>
        </motion.div>

        {/* Filters */}
        <FiltersBar
          filter={filter}
          setFilter={setFilter}
          count={filteredRaces.length}
        />

        {/* Race Grid */}
        <RaceGrid races={filteredRaces} />
      </div>
    </div>
  );
}
