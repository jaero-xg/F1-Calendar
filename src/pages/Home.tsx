import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import Hero from "../components/Hero";
import RaceCard from "../components/RaceCard";
import DriverCard from "../components/DriverCard";
import TrackCard from "../components/TrackCard";
import { getCompletedRaces, getUpcomingRaces } from "../data/races";
import { drivers, getTopDrivers } from "../data/drivers";
import { tracks } from "../data/tracks";

function SectionHeader({
  eyebrow,
  title,
  eyebrowColor = "f1-accent",
  barColor,
  right,
}: {
  eyebrow: string;
  title: string;
  eyebrowColor?: string;
  barColor?: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-end justify-between mb-6 pb-4 border-b border-f1-border">
      <div className="flex flex-col gap-1">
        <div className="eyebrow">
          <div
            className="eyebrow-bar"
            style={{
              backgroundColor: barColor ? `var(--${barColor})` : undefined,
            }}
          />
          <span
            className={
              eyebrowColor === "f1-accent"
                ? "text-f1-accent"
                : `text-${eyebrowColor}`
            }
          >
            {eyebrow}
          </span>
        </div>
        <h2 className="section-title">{title}</h2>
      </div>
      {right}
    </div>
  );
}

function Ticker() {
  const text =
    "VERSTAPPEN LEADS NORRIS BY 26 PTS  ·  MONACO GP RESULTS: 1. LECLERC 2. HAMILTON 3. VERSTAPPEN  ·  ROUND 07 · BARCELONA · 12 JUNE  ·  ";
  return (
    <div className="bg-f1-accent h-8 flex items-center overflow-hidden">
      <div className="font-display font-extrabold text-[13px] uppercase tracking-[0.1em] bg-[#c00000] text-white px-4 h-full flex items-center flex-shrink-0 mr-4">
        Latest
      </div>
      <div className="font-mono text-[11px] text-white tracking-[0.06em] whitespace-nowrap ticker-animate">
        {text}
        {text}
      </div>
    </div>
  );
}

export default function Home() {
  const completedRaces = getCompletedRaces();
  const upcomingRaces = getUpcomingRaces().slice(0, 3);
  const topDrivers = getTopDrivers(6);

  return (
    <div>
      <Ticker />
      <Hero />

      {/* Recent Races */}
      <section className="py-10 border-b border-f1-border">
        <div className="wrap section-padding">
          <SectionHeader
            eyebrow="Results"
            title="Recent Races"
            right={
              <Link
                to="/calendar"
                className="text-[11px] font-medium uppercase tracking-[0.08em] text-f1-muted hover:text-white transition-colors flex items-center gap-1.5"
              >
                View All <span>→</span>
              </Link>
            }
          />
          <div className="card-grid grid-cols-1 md:grid-cols-3">
            {completedRaces
              .slice(-3)
              .reverse()
              .map((race, i) => (
                <RaceCard key={race.id} race={race} index={i} />
              ))}
          </div>
        </div>
      </section>

      {/* Coming Up */}
      <section className="py-10 border-b border-f1-border bg-[#0d0d0d]">
        <div className="wrap section-padding">
          <SectionHeader
            eyebrow="Schedule"
            title="Coming Up"
            eyebrowColor="blue-400"
            barColor="tw-blue-400"
            right={
              <Link
                to="/calendar"
                className="text-[11px] font-medium uppercase tracking-[0.08em] text-f1-muted hover:text-white transition-colors flex items-center gap-1.5"
              >
                Full Calendar →
              </Link>
            }
          />
          <div className="card-grid grid-cols-1 md:grid-cols-3">
            {upcomingRaces.map((race, i) => (
              <RaceCard key={race.id} race={race} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Drivers */}
      <section className="py-10 border-b border-f1-border">
        <div className="wrap section-padding">
          <SectionHeader
            eyebrow="Standings"
            title="Top Drivers"
            eyebrowColor="f1-gold"
            barColor="tw-f1-gold"
            right={
              <span className="font-mono text-[10px] text-f1-muted tracking-[0.1em]">
                {drivers.length} DRIVERS
              </span>
            }
          />
          <div className="card-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {topDrivers.map((driver, i) => (
              <DriverCard key={driver.id} driver={driver} index={i} />
            ))}
          </div>
        </div>
        <motion.div className="mt-8 flex justify-center">
          <Link
            to="/drivers"
            className="inline-flex items-center gap-2 px-6 py-3 bg-f1-surface border border-f1-border text-sm font-medium uppercase tracking-wider text-f1-text hover:bg-f1-border hover:text-white transition-colors"
          >
            View All Drivers
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* Track Guide */}
      <section className="py-10 border-b border-f1-border bg-[#0d0d0d]">
        <div className="wrap section-padding">
          <SectionHeader
            eyebrow="Circuits"
            title="Track Guide"
            eyebrowColor="green-400"
            barColor="tw-green-400"
            right={
              <span className="font-mono text-[10px] text-f1-muted tracking-[0.1em]">
                {tracks.length} TRACKS
              </span>
            }
          />
          <div className="card-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {tracks.slice(0, 8).map((track, i) => (
              <TrackCard key={track.id} track={track} index={i} />
            ))}
          </div>
        </div>
        <motion.div className="mt-8 flex justify-center">
          <Link
            to="/tracks"
            className="inline-flex items-center gap-2 px-6 py-3 bg-f1-surface border border-f1-border text-sm font-medium uppercase tracking-wider text-f1-text hover:bg-f1-border hover:text-white transition-colors"
          >
            View All Tracks
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
