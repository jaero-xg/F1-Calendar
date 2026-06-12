import { ReactNode } from "react";

export interface Race {
  id: string;
  round: number;
  name: string;
  circuit: string;
  location: string;
  country: string;
  date: string;
  endDate: string;
  status: "completed" | "upcoming" | "live" | "cancelled";
  isSprint: boolean;
  /** Baku (R15) and Las Vegas (R20) are Saturday race days in 2026 */
  isSaturday: boolean;
  sessions: Session[];
  trackId: string;
  winner?: string;
  fastestLap?: string;
  polePosition?: string;
  /** Reason for cancellation, e.g. "Iran war" for Bahrain and Saudi Arabia */
  cancellationReason?: string;
}

export interface Session {
  id: string;
  /**
   * Sprint weekends (China R2, Netherlands R12) use:
   *   FP1 → Sprint Qualifying → Sprint → Qualifying → Race
   * Standard weekends use:
   *   FP1 → FP2 → FP3 → Qualifying → Race
   */
  type:
    | "FP1"
    | "FP2"
    | "FP3"
    | "Sprint Qualifying"
    | "Sprint"
    | "Qualifying"
    | "Race";
  day: string;
  time: string;
  duration: string;
  status: "completed" | "upcoming" | "live";
}

export interface Driver {
  name: ReactNode;
  id: string;
  number: number;
  firstName: string;
  lastName: string;
  team: string;
  teamId: string;
  teamColor: string;
  country: string;
  countryCode: string;
  points: number;
  wins: number;
  podiums: number;
  poles: number;
  fastestLaps: number;
  championships: number;
  starts: number;
  bio: string;
  seasonStats: SeasonStat[];
}

export interface SeasonStat {
  race: string;
  /**
   * Finishing position. Use 99 for DNF/DSQ.
   * null = race has not yet taken place.
   */
  position: number | null;
  /** Championship points scored. null = race has not yet taken place. */
  points: number | null;
  /** Whether the driver set the fastest lap. null = race has not yet taken place. */
  fastestLap: boolean | null;
  /** Whether the driver took pole position. null = race has not yet taken place. */
  pole: boolean | null;
}

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
  /** Driver IDs — matches Driver.id */
  drivers: string[];
  description: string;
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
  type: "street" | "permanent" | "mixed";
  circuitSvg: string;
}

export interface SectorTime {
  sector: number;
  bestTime: string;
  driver: string;
}

export interface PodiumResult {
  position: number;
  driver: string;
  team: string;
  time: string;
  gap: string;
}

export interface NavItem {
  label: string;
  path: string;
}