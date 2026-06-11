export interface Race {
  id: string;
  round: number;
  name: string;
  circuit: string;
  location: string;
  country: string;
  date: string;
  endDate: string;
  status: 'completed' | 'upcoming' | 'live' | 'cancelled';
  isSprint: boolean;
  sessions: Session[];
  trackId: string;
  winner?: string;
  fastestLap?: string;
  polePosition?: string;
}

export interface Session {
  id: string;
  type: 'FP1' | 'FP2' | 'FP3' | 'Sprint Qualifying' | 'Sprint' | 'Qualifying' | 'Race';
  day: string;
  time: string;
  duration: string;
  status: 'completed' | 'upcoming' | 'live';
}

export interface Driver {
  id: string;
  number: number;
  firstName: string;
  lastName: string;
  team: string;
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
  position: number;
  points: number;
  fastestLap: boolean;
  pole: boolean;
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
  circuitSvg: string;
  
  type: 'street' | 'permanent' | 'mixed';
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
