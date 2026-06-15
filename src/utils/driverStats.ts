import { Driver, DriverStat, StatMode } from "../types";
import { Award, Clock, Flag, Hash, Star, Trophy, Zap, Timer } from "lucide-react";

export function getDriverStats(driver: Driver, mode: StatMode): DriverStat[] {
  if (mode === "all-time") {
    const a = driver.allTime;

    return [
      { label: "Wins", value: a.wins, icon: Trophy },
      { label: "Podiums", value: a.podiums, icon: Award },
      { label: "Poles", value: a.poles, icon: Flag },
      { label: "Fastest Laps", value: a.fastestLaps, icon: Timer },
      { label: "Titles", value: a.championships, icon: Star },
      { label: "Races", value: a.starts, icon: Hash },
    ];
  }

  const s = driver.season;

  return [
    { label: "Wins", value: s.wins, icon: Trophy },
    { label: "Podiums", value: s.podiums, icon: Award },
    { label: "Poles", value: s.poles, icon: Flag },
    { label: "Races", value: s.starts, icon: Hash },
  ];
}