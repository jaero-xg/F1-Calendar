import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
    "VERSTAPPEN LEADS NORRIS BY 26 PTS · MONACO GP RESULTS: 1. LECLERC 2. HAMILTON 3. VERSTAPPEN · ROUND 07 · BARCELONA · 12 JUNE · ";

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

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-10 border-b border-f1-border ${className}`}>
      <div className="wrap section-padding">{children}</div>
    </section>
  );
}

function ViewAllLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="text-[11px] font-medium uppercase tracking-[0.08em] text-f1-muted hover:text-white transition-colors flex items-center gap-1.5"
    >
      {label} <span>→</span>
    </Link>
  );
}

function PrimaryButtonLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div className="mt-1 flex items-center gap-1">
      <Link
        to={to}
        className="bg-f1-accent text-white text-[12px] font-semibold uppercase tracking-[0.1em] px-6 py-2.5 hover:bg-f1-accentHover transition-colors"
      >
        {children}
      </Link>
    </motion.div>
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
      <Section>
        <SectionHeader
          eyebrow="Results"
          title="Recent Races"
          right={<ViewAllLink to="/calendar" label="View All" />}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1">
          {completedRaces
            .slice(-3)
            .reverse()
            .map((race, i) => (
              <RaceCard key={race.id} race={race} index={i} />
            ))}
        </div>
      </Section>

      {/* Coming Up */}
      <Section className="bg-[#0d0d0d]">
        <SectionHeader
          eyebrow="Schedule"
          title="Coming Up"
          eyebrowColor="blue-400"
          barColor="tw-blue-400"
          right={<ViewAllLink to="/calendar" label="Full Calendar" />}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1">
          {upcomingRaces.map((race, i) => (
            <RaceCard key={race.id} race={race} index={i} />
          ))}
        </div>
      </Section>

      {/* Top Drivers */}
      <Section>
        <SectionHeader
          eyebrow="Standings"
          title="Top Drivers"
          eyebrowColor="f1-gold"
          barColor="tw-f1-gold"
          right={<ViewAllLink to="/drivers" label="View All Drivers" />}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1">
          {topDrivers.map((driver, i) => (
            <DriverCard key={driver.id} driver={driver} index={i} />
          ))}
        </div>
      </Section>

      {/* Track Guide */}
      <Section className="bg-[#0d0d0d]">
        <SectionHeader
          eyebrow="Circuits"
          title="Track Guide"
          eyebrowColor="green-400"
          barColor="tw-green-400"
          right={<ViewAllLink to="/tracks" label="View All Tracks" />}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1">
          {tracks.slice(0, 8).map((track, i) => (
            <TrackCard key={track.id} track={track} index={i} />
          ))}
        </div>
      </Section>
    </div>
  );
}
