import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import RaceCard from "../components/RaceCard";
import DriverCard from "../components/DriverCard";
import TrackCard from "../components/TrackCard";
import { getCompletedRaces, getUpcomingRaces } from "../data/races";
import { useF1Data } from "../hooks/useF1Data";
import { tracks } from "../data/tracks";

/* ═══════════════════════════════════════════════════════════════
   SECTION HEADER
   ═══════════════════════════════════════════════════════════════ */
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
    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 sm:mb-4 md:mb-5 pb-2.5 sm:pb-3 md:pb-4 border-b border-f1-border gap-2 sm:gap-0">
      <div className="flex flex-col gap-0.5 sm:gap-1">
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
        <h2 className="section-title text-lg sm:text-xl md:text-2xl lg:text-3xl">
          {title}
        </h2>
      </div>
      {right}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TICKER
   ═══════════════════════════════════════════════════════════════ */
function Ticker() {
  const text =
    "ANTONELLI LEADS HAMILTON BY 41 PTS · BARCELONA GP RESULTS: 1. HAMILTON 2. RUSSELL 3. NORRIS · ROUND 08 · AUSTRIA · 27 JUNE · ";

  return (
    <div className="bg-f1-accent h-7 sm:h-8 flex items-center overflow-hidden">
      <div className="font-display font-extrabold text-[11px] sm:text-[13px] uppercase tracking-[0.1em] bg-[#c00000] text-white px-3 sm:px-4 h-full flex items-center flex-shrink-0 mr-3 sm:mr-4">
        Latest
      </div>
      <div className="font-mono text-[10px] sm:text-[11px] text-white tracking-[0.06em] whitespace-nowrap ticker-animate">
        {text}
        {text}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION WRAPPER
   Reduced padding on mobile, scales up gracefully
   ═══════════════════════════════════════════════════════════════ */
function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`py-4 sm:py-6 md:py-8 lg:py-10 border-b border-f1-border ${className}`}
    >
      <div className="wrap px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        {children}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   VIEW ALL LINK
   ═══════════════════════════════════════════════════════════════ */
function ViewAllLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.08em] text-f1-muted hover:text-white transition-colors flex items-center gap-1 shrink-0"
    >
      {label} <span className="text-f1-accent">→</span>
    </Link>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PRIMARY BUTTON
   ═══════════════════════════════════════════════════════════════ */
function PrimaryButtonLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}): import("react").JSX.Element {
  return (
    <motion.div className="mt-1 flex items-center gap-1">
      <Link
        to={to}
        className="bg-f1-accent text-white text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.1em] px-4 sm:px-6 py-2 sm:py-2.5 hover:bg-f1-accentHover transition-colors"
      >
        {children}
      </Link>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GRID CONFIGURATIONS
   Consistent responsive grids with proper gaps
   ═══════════════════════════════════════════════════════════════ */

// For RaceCards & DriverCards: 1 col mobile, 2 col md, 3 col xl
function CardGrid3({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
      {children}
    </div>
  );
}

// For TrackCards: 1 col mobile, 2 col md, 3 col lg, 4 col xl
function CardGrid4({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function Home() {
  const { data, loading, error } = useF1Data();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="font-mono text-sm text-f1-muted animate-pulse">
          Loading drivers...
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="font-mono text-sm text-red-400">
          Failed loading data
        </div>
      </div>
    );
  }

  const topDrivers = [...data.drivers]
    .sort((a, b) => b.season.points - a.season.points)
    .slice(0, 6);

  const completedRaces = getCompletedRaces();
  const upcomingRaces = getUpcomingRaces().slice(0, 3);

  return (
    <div>
      <Ticker />
      <Hero />

      {/* ── Recent Races ── */}
      <Section>
        <SectionHeader
          eyebrow="Results"
          title="Recent Races"
          right={<ViewAllLink to="/calendar" label="View All" />}
        />
        <CardGrid3>
          {completedRaces
            .slice(-3)
            .reverse()
            .map((race, i) => (
              <RaceCard key={race.id} race={race} index={i} />
            ))}
        </CardGrid3>
      </Section>

      {/* ── Coming Up ── */}
      <Section className="bg-[#0d0d0d]">
        <SectionHeader
          eyebrow="Schedule"
          title="Coming Up"
          eyebrowColor="blue-400"
          barColor="tw-blue-400"
          right={<ViewAllLink to="/calendar" label="Full Calendar" />}
        />
        <CardGrid3>
          {upcomingRaces.map((race, i) => (
            <RaceCard key={race.id} race={race} index={i} />
          ))}
        </CardGrid3>
      </Section>

      {/* ── Top Drivers ── */}
      <Section>
        <SectionHeader
          eyebrow="Standings"
          title="Top Drivers"
          eyebrowColor="f1-gold"
          barColor="tw-f1-gold"
          right={<ViewAllLink to="/drivers" label="View All Drivers" />}
        />
        <CardGrid3>
          {topDrivers.map((driver, i) => (
            <DriverCard key={driver.id} driver={driver} index={i} mode="2026" />
          ))}
        </CardGrid3>
      </Section>

      {/* ── Track Guide ── */}
      <Section className="bg-[#0d0d0d]">
        <SectionHeader
          eyebrow="Circuits"
          title="Track Guide"
          eyebrowColor="green-400"
          barColor="tw-green-400"
          right={<ViewAllLink to="/tracks" label="View All Tracks" />}
        />
        <CardGrid4>
          {tracks.slice(0, 8).map((track, i) => (
            <TrackCard key={track.id} track={track} index={i} />
          ))}
        </CardGrid4>
      </Section>
    </div>
  );
}
