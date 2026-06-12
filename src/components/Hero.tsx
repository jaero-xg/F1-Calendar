import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getNextRace, getCompletedRaces } from "../data/races";
import { getTopDrivers } from "../data/drivers";

export default function Hero() {
  const nextRace = getNextRace();
  const completedRaces = getCompletedRaces();
  const topDrivers = getTopDrivers(3);

  return (
    <section className="bg-f1-black border-b border-f1-border">
      <div className="wrap section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] min-h-[340px]">
          {/* Left column */}
          <div className="py-6 md:py-12 pr-0 lg:pr-10 lg:border-r border-f1-border flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-f1-accent mb-4 block">
                2026 FIA Formula One World Championship
              </span>

              {/* ✅ Responsive logo */}
              <img
                src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/f1/default.svg"
                alt="F1"
                className="w-[180px] md:w-[250px] lg:w-[300px] h-auto"
              />

              <p className="text-[13px] text-f1-muted leading-[1.7] max-w-[480px] mb-6 md:mb-8 mt-4 md:mt-6">
                22 races. 20 drivers. One world champion. Follow every session,
                every result, every battle for the title.
              </p>

              {/* ✅ Responsive buttons - stack on mobile, row on sm+ */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <Link
                  to="/calendar"
                  className="bg-f1-accent text-white text-[12px] font-semibold uppercase tracking-[0.1em] px-6 py-2.5 hover:bg-f1-accentHover transition-colors text-center w-full sm:w-auto"
                >
                  Race Calendar
                </Link>
                <Link
                  to="/drivers"
                  className="text-f1-text text-[12px] font-semibold uppercase tracking-[0.1em] px-6 py-2.5 border border-f1-border hover:border-f1-muted transition-colors text-center w-full sm:w-auto"
                >
                  Driver Standings
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right column */}
          <div className="py-6 md:py-8 pl-0 lg:pl-10 flex flex-col justify-between gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pb-4 md:pb-6 border-b border-f1-border"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-f1-muted mb-1.5 block">
                Championship Leader
              </span>
              {/* ✅ Responsive text size */}
              <p className="font-display text-[32px] md:text-[42px] font-extrabold leading-none tracking-tight text-white">
                {topDrivers[0]?.lastName.slice(0, 3).toUpperCase() || "ANT"}
              </p>
              <p className="text-[11px] text-f1-muted mt-1">
                {topDrivers[0]?.firstName} {topDrivers[0]?.lastName} &bull;{" "}
                {topDrivers[0]?.team} &bull; {topDrivers[0]?.season?.points} PTS
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pb-4 md:pb-6 border-b border-f1-border"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-f1-muted mb-1.5 block">
                Constructors Lead
              </span>
              <p className="font-display text-[32px] md:text-[42px] font-extrabold leading-none tracking-tight text-white">
                McLaren
              </p>
              <p className="text-[11px] text-f1-muted mt-1">
                310 points &bull; +12 over Red Bull
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-f1-muted mb-1.5 block">
                Next Event
              </span>
              {nextRace ? (
                <>
                  <p className="font-display text-[32px] md:text-[42px] font-extrabold leading-none tracking-tight text-white">
                    {nextRace.location.slice(0, 3).toUpperCase()}
                  </p>
                  <p className="text-[11px] text-f1-muted mt-1">
                    {nextRace.circuit} &bull; Round {nextRace.round}
                  </p>
                </>
              ) : (
                <p className="font-display text-[32px] md:text-[42px] font-extrabold text-white">
                  —
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
