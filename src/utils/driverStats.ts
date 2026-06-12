import { Driver, DriverStat, StatMode } from "../types";
import { Award, Clock, Flag, Hash, Star, Trophy, Zap } from "lucide-react";

export function getDriverStats(driver: Driver, mode: StatMode): DriverStat[] {
  if (mode === "all-time") {
    const a = driver.allTime;

    return [
      { label: "Points", value: a.points, icon: Zap },
      { label: "Wins", value: a.wins, icon: Trophy },
      { label: "Podiums", value: a.podiums, icon: Award },
      { label: "Poles", value: a.poles, icon: Flag },
      { label: "Fastest Laps", value: a.fastestLaps, icon: Clock },
      { label: "Titles", value: a.championships, icon: Star },
      { label: "Races", value: a.starts, icon: Hash },
    ];
  }

  const s = driver.season;

  return [
    { label: "Points", value: s.points, icon: Zap },
    { label: "Wins", value: s.wins, icon: Trophy },
    { label: "Podiums", value: s.podiums, icon: Award },
    { label: "Poles", value: s.poles, icon: Flag },
    { label: "Fastest Laps", value: s.fastestLaps, icon: Clock },
    { label: "Races", value: s.starts, icon: Hash },
  ];
}