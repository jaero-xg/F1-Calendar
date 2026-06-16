import { ComponentType } from "react";
import { LucideProps } from "lucide-react";

// ─── Driver ──────────────────────────────────────────────────────────────────

export type StatMode = "2026" | "all-time";

export interface SeasonStat {
  race: string;
  /** null = race not yet run; 99 = DNF / DSQ */
  position: number | null;
  /** null = race not yet run */
  points: number | null;
  pole: boolean | null;
  fastestLap: boolean | null;
}

export interface SeasonSummary {
  year: number;
  points: number;
  wins: number;
  podiums: number;
  poles: number;
  fastestLaps: number;
  starts: number;
}

export interface DriverAllTime {
  wins: number;
  podiums: number;
  poles: number;
  fastestLaps: number;
  championships: number;
  starts: number;
}

export interface Driver {
  id: string;
  number: number;
  firstName: string;
  lastName: string;
  team: string;
  teamId: string;
  teamColor: string;
  country: string;
  countryCode: string;
  image: string;
  bio: string;

  season: SeasonSummary;
  allTime: DriverAllTime;
  seasonStats: SeasonStat[];
}

// ─── Stat (returned by getDriverStats) ───────────────────────────────────────

export interface DriverStat {
  label: string;
  value: number;
  icon: ComponentType<LucideProps>;
}

// ─── Team ────────────────────────────────────────────────────────────────────

export interface Team {
  id: string;
  name: string;
  shortName: string;
  base: string;
  principal: string;
  chassis: string;
  powerUnit: string;
  color: string;
  firstEntry: number;
  championships: number;
  wins: number;
  podiums: number;
  poles: number;
  fastestLaps: number;
  drivers: string[];
  description: string;
  /** SVG logo URL (Wikimedia Commons or official source) */
  logo: string;
  /** ISO country code for flag display (e.g., "gb", "it", "de", "us", "ch") */
  countryCode: string;
  /** Country name for display */
  country: string;
  /** Livery/car image URL for the 2026 season */
  livery: string;
}

// ─── Track ───────────────────────────────────────────────────────────────────

export interface SectorTime {
  sector: number;
  bestTime: string;
  driver: string;
}

export interface Track {
  id: string;
  name: string;
  circuit: string;
  location: string;
  country: string;
  length: string;
  laps: number;
  lapRecord: string;
  lapRecordHolder: string;
  firstGrandPrix: number;
  turns: number;
  drsZones: number;
  description: string;
  sectorTimes: SectorTime[];
  elevation: string;
  type: "street" | "permanent";
  circuitSvg: string;
}

// ─── Race ────────────────────────────────────────────────────────────────────

export type RaceStatus = "completed" | "upcoming" | "live" | "cancelled";

export type SessionType =
  | "FP1" | "FP2" | "FP3"
  | "Sprint Qualifying" | "Sprint"
  | "Qualifying" | "Race";

export interface Session {
  id: string;
  type: SessionType;
  day: string;
  time: string;
  duration: string;
  status: "completed" | "upcoming" | "live";
}

export interface Race {
  id: string;
  round: number;
  name: string;
  circuit: string;
  location: string;
  country: string;
  date: string;
  endDate: string;
  status: RaceStatus;
  isSprint: boolean;
  isSaturday: boolean;
  trackId: string;
  circuitSvg?: string;
  sessions: Session[];
  winner?: string;
  fastestLap?: string;
  polePosition?: string;
  cancellationReason?: string;
}