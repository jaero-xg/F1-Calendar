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
  championships: number;
  starts: number;
}

export interface DriverAllTime {
  points: number;
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