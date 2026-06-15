// scripts/fetchF1Data.ts
// Run with: npx tsx scripts/fetchF1Data.ts
//
// This script fetches REAL career stats from Jolpica (Ergast) for each driver,
// then combines them with your fictional 2026 season data from driversMeta.ts
// and races.ts to generate public/data/drivers.json and public/data/races.json
import { tracks } from "../src/data/tracks";
import { writeFileSync, mkdirSync } from "fs";
import { driversMeta } from "../src/data/drivers";
import { races as hardcodedRaces } from "../src/data/races";
import type { Driver, SeasonStat, Race } from "../src/types";

const SEASON = 2026;
const JOLPICA = "https://api.jolpi.ca/ergast/f1";

// Rate limiting: Jolpica allows ~2000 req/hour, but let's be nice
const DELAY_MS = 200;

async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function jolpica<T = any>(path: string): Promise<T | null> {
  const url = `${JOLPICA}/${path}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`  ⚠️ Jolpica ${path} -> ${res.status}`);
      return null;
    }
    const data = await res.json();
    return data.MRData as T;
  } catch (e) {
    console.warn(`  ⚠️ Jolpica ${path} -> network error`);
    return null;
  }
}

// ─── STEP 1: Fetch real career stats from Jolpica ────────────────────────────

interface JolpicaResult {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: { driverId: string; givenName: string; familyName: string };
  Constructor: { constructorId: string; name: string };
  grid: string;
  laps: string;
  status: string;
  Time?: { millis: string; time: string };
  FastestLap?: { rank: string; lap: string; Time: { time: string } };
}

async function fetchDriverCareerStats(ergastId: string): Promise<{
  wins: number;
  podiums: number;
  poles: number;
  fastestLaps: number;
  championships: number;
  starts: number;
}> {
  console.log(`  Fetching career stats for ${ergastId}...`);

  // Fetch all results for this driver
  const resultsData = await jolpica<any>(`drivers/${ergastId}/results.json?limit=1000`);
  const results: JolpicaResult[] = resultsData?.RaceTable?.Races?.flatMap(
    (r: any) => r.Results.filter((res: any) => res.Driver.driverId === ergastId)
  ) || [];

  // Fetch qualifying for poles
  const qualiData = await jolpica<any>(`drivers/${ergastId}/qualifying.json?limit=1000`);
  const qualiResults = qualiData?.RaceTable?.Races?.flatMap(
    (r: any) => r.QualifyingResults?.filter((q: any) => q.Driver.driverId === ergastId && q.position === "1") || []
  ) || [];

  // Count stats
  const wins = results.filter((r) => Number(r.position) === 1).length;
  const podiums = results.filter((r) => Number(r.position) <= 3 && r.status === "Finished").length;
  const poles = qualiResults.length;
  const fastestLaps = results.filter((r) => r.FastestLap?.rank === "1").length;
  const starts = results.length;

  // Championships are harder — we'd need to check standings per year
  // For now, use the hardcoded value from driversMeta as fallback
  const meta = driversMeta.find((d) => d.ergastId === ergastId);
  const championships = meta?.careerBefore.championships ?? 0;

  return { wins, podiums, poles, fastestLaps, championships, starts };
}

// ─── STEP 2: Build fictional 2026 season data ────────────────────────────────

interface FictionalRaceResult {
  position: number | null;  // null = DNS/DNF not classified, 99 = DSQ
  points: number | null;
  pole: boolean;
  fastestLap: boolean;
}

// Fictional 2026 season results (races 1-7 completed as of your data)
const fictional2026Results: Record<string, Record<string, FictionalRaceResult>> = {
  // Round 1: Australia
  australia: {
    russell:    { position: 1,  points: 25, pole: true,  fastestLap: false },
    antonelli:  { position: 2,  points: 18, pole: false, fastestLap: false },
    leclerc:    { position: 3,  points: 15, pole: false, fastestLap: false },
    hamilton:   { position: 4,  points: 12, pole: false, fastestLap: false },
    norris:     { position: 5,  points: 10, pole: false, fastestLap: false },
    piastri:    { position: 99, points: 0,  pole: false, fastestLap: false },
    gasly:      { position: 99, points: 0,  pole: false, fastestLap: false },
    colapinto:  { position: 99, points: 0,  pole: false, fastestLap: false },
    lawson:     { position: 99, points: 0,  pole: false, fastestLap: false },
    sainz:      { position: 99, points: 0,  pole: false, fastestLap: false },
    albon:      { position: 99, points: 0,  pole: false, fastestLap: false },
    ocon:       { position: 99, points: 0,  pole: false, fastestLap: false },
    bortoleto:  { position: 99, points: 2,  pole: false, fastestLap: false },
    alonso:     { position: 99, points: 0,  pole: false, fastestLap: false },
    stroll:     { position: 99, points: 0,  pole: false, fastestLap: false },
    hulkenberg: { position: 99, points: 0,  pole: false, fastestLap: false },
    perez:      { position: 99, points: 0,  pole: false, fastestLap: false },
    bottas:     { position: 99, points: 0,  pole: false, fastestLap: false },
    hadjar:     { position: 99, points: 0,  pole: false, fastestLap: false },
    lindblad:   { position: 99, points: 0,  pole: false, fastestLap: false },
    bearman:    { position: 99, points: 0,  pole: false, fastestLap: false },
    tsunoda:    { position: null, points: null, pole: false, fastestLap: false },
  },
  // Round 2: China (Sprint)
  china: {
    antonelli:  { position: 1,  points: 25, pole: true,  fastestLap: true },
    russell:    { position: 2,  points: 18, pole: false, fastestLap: false },
    hamilton:   { position: 3,  points: 15, pole: false, fastestLap: false },
    leclerc:    { position: 4,  points: 12, pole: false, fastestLap: false },
    gasly:      { position: 6,  points: 8,  pole: false, fastestLap: false },
    lawson:     { position: 7,  points: 6,  pole: false, fastestLap: false },
    hadjar:     { position: 8,  points: 4,  pole: false, fastestLap: false },
    norris:     { position: 99, points: 0,  pole: false, fastestLap: false },
    piastri:    { position: 99, points: 0,  pole: false, fastestLap: false },
    colapinto:  { position: 99, points: 1,  pole: false, fastestLap: false },
    sainz:      { position: 99, points: 2,  pole: false, fastestLap: false },
    albon:      { position: 99, points: 0,  pole: false, fastestLap: false },
    ocon:       { position: 99, points: 0,  pole: false, fastestLap: false },
    bortoleto:  { position: 99, points: 0,  pole: false, fastestLap: false },
    alonso:     { position: 99, points: 0,  pole: false, fastestLap: false },
    stroll:     { position: 99, points: 0,  pole: false, fastestLap: false },
    hulkenberg: { position: 99, points: 0,  pole: false, fastestLap: false },
    perez:      { position: 99, points: 0,  pole: false, fastestLap: false },
    bottas:     { position: 99, points: 0,  pole: false, fastestLap: false },
    lindblad:   { position: 99, points: 0,  pole: false, fastestLap: false },
    bearman:    { position: 99, points: 0,  pole: false, fastestLap: false },
    tsunoda:    { position: null, points: null, pole: false, fastestLap: false },
  },
  // Round 3: Japan
  japan: {
    antonelli:  { position: 1,  points: 25, pole: true,  fastestLap: true },
    piastri:    { position: 2,  points: 18, pole: false, fastestLap: false },
    leclerc:    { position: 3,  points: 15, pole: false, fastestLap: false },
    russell:    { position: 4,  points: 12, pole: false, fastestLap: false },
    norris:     { position: 5,  points: 10, pole: false, fastestLap: false },
    hamilton:   { position: 6,  points: 8,  pole: false, fastestLap: false },
    gasly:      { position: 7,  points: 6,  pole: false, fastestLap: false },
    lawson:     { position: 9,  points: 2,  pole: false, fastestLap: false },
    ocon:       { position: 10, points: 1,  pole: false, fastestLap: false },
    hulkenberg: { position: 11, points: 0,  pole: false, fastestLap: false },
    hadjar:     { position: 12, points: 0,  pole: false, fastestLap: false },
    bortoleto:  { position: 13, points: 0,  pole: false, fastestLap: false },
    sainz:      { position: 15, points: 0,  pole: false, fastestLap: false },
    colapinto:  { position: 16, points: 0,  pole: false, fastestLap: false },
    perez:      { position: 17, points: 0,  pole: false, fastestLap: false },
    albon:      { position: 99, points: 0,  pole: false, fastestLap: false },
    alonso:     { position: 99, points: 0,  pole: false, fastestLap: false },
    stroll:     { position: 99, points: 0,  pole: false, fastestLap: false },
    lindblad:   { position: 99, points: 0,  pole: false, fastestLap: false },
    bearman:    { position: 99, points: 0,  pole: false, fastestLap: false },
    tsunoda:    { position: null, points: null, pole: false, fastestLap: false },
  },
  // Round 4: Miami (Sprint)
  miami: {
    antonelli:  { position: 1,  points: 25, pole: true,  fastestLap: false },
    norris:     { position: 2,  points: 18, pole: false, fastestLap: true },
    piastri:    { position: 3,  points: 15, pole: false, fastestLap: false },
    russell:    { position: 4,  points: 12, pole: false, fastestLap: false },
    hamilton:   { position: 6,  points: 8,  pole: false, fastestLap: false },
    colapinto:  { position: 7,  points: 6,  pole: false, fastestLap: false },
    leclerc:    { position: 8,  points: 4,  pole: false, fastestLap: false },
    sainz:      { position: 9,  points: 2,  pole: false, fastestLap: false },
    albon:      { position: 10, points: 1,  pole: false, fastestLap: false },
    hadjar:     { position: 99, points: 0,  pole: false, fastestLap: false },
    lawson:     { position: 99, points: 0,  pole: false, fastestLap: false },
    gasly:      { position: 99, points: 0,  pole: false, fastestLap: false },
    ocon:       { position: 99, points: 0,  pole: false, fastestLap: false },
    bortoleto:  { position: 99, points: 0,  pole: false, fastestLap: false },
    alonso:     { position: 99, points: 0,  pole: false, fastestLap: false },
    stroll:     { position: 99, points: 0,  pole: false, fastestLap: false },
    hulkenberg: { position: 99, points: 0,  pole: false, fastestLap: false },
    perez:      { position: 99, points: 0,  pole: false, fastestLap: false },
    bottas:     { position: 99, points: 0,  pole: false, fastestLap: false },
    lindblad:   { position: 99, points: 0,  pole: false, fastestLap: false },
    bearman:    { position: 99, points: 0,  pole: false, fastestLap: false },
    tsunoda:    { position: null, points: null, pole: false, fastestLap: false },
  },
  // Round 5: Canada (Sprint)
  canada: {
    antonelli:  { position: 1,  points: 25, pole: false, fastestLap: true },
    hamilton:   { position: 2,  points: 18, pole: false, fastestLap: false },
    gasly:      { position: 99, points: 4,  pole: false, fastestLap: false },
    colapinto:  { position: 99, points: 8,  pole: false, fastestLap: false },
    lawson:     { position: 99, points: 6,  pole: false, fastestLap: false },
    hadjar:     { position: 99, points: 10, pole: false, fastestLap: false },
    russell:    { position: 99, points: 0,  pole: true,  fastestLap: false },
    leclerc:    { position: 4,  points: 12, pole: false, fastestLap: false },
    piastri:    { position: 99, points: 0,  pole: false, fastestLap: false },
    norris:     { position: 99, points: 0,  pole: false, fastestLap: false },
    sainz:      { position: 99, points: 2,  pole: false, fastestLap: false },
    albon:      { position: 99, points: 0,  pole: false, fastestLap: false },
    ocon:       { position: 99, points: 0,  pole: false, fastestLap: false },
    bortoleto:  { position: 99, points: 0,  pole: false, fastestLap: false },
    alonso:     { position: 99, points: 0,  pole: false, fastestLap: false },
    stroll:     { position: 99, points: 0,  pole: false, fastestLap: false },
    hulkenberg: { position: 99, points: 0,  pole: false, fastestLap: false },
    perez:      { position: 99, points: 0,  pole: false, fastestLap: false },
    bottas:     { position: 99, points: 0,  pole: false, fastestLap: false },
    lindblad:   { position: 99, points: 0,  pole: false, fastestLap: false },
    bearman:    { position: 99, points: 0,  pole: false, fastestLap: false },
    tsunoda:    { position: null, points: null, pole: false, fastestLap: false },
  },
  // Round 6: Monaco
  monaco: {
    antonelli:  { position: 1,  points: 25, pole: true,  fastestLap: true },
    hamilton:   { position: 2,  points: 18, pole: false, fastestLap: false },
    gasly:      { position: 3,  points: 15, pole: false, fastestLap: false },
    hadjar:     { position: 4,  points: 12, pole: false, fastestLap: false },
    piastri:    { position: 5,  points: 10, pole: false, fastestLap: false },
    lawson:     { position: 6,  points: 8,  pole: false, fastestLap: false },
    ocon:       { position: 9,  points: 2,  pole: false, fastestLap: false },
    alonso:     { position: 10, points: 1,  pole: false, fastestLap: false },
    bortoleto:  { position: 11, points: 0,  pole: false, fastestLap: false },
    russell:    { position: 12, points: 0,  pole: false, fastestLap: false },
    hulkenberg: { position: 13, points: 0,  pole: false, fastestLap: false },
    colapinto:  { position: 14, points: 0,  pole: false, fastestLap: false },
    perez:      { position: 15, points: 0,  pole: false, fastestLap: false },
    leclerc:    { position: 99, points: 0,  pole: false, fastestLap: false },
    norris:     { position: 99, points: 0,  pole: false, fastestLap: false },
    sainz:      { position: 99, points: 0,  pole: false, fastestLap: false },
    albon:      { position: 8,  points: 4,  pole: false, fastestLap: false },
    stroll:     { position: 99, points: 0,  pole: false, fastestLap: false },
    lindblad:   { position: 6,  points: 8,  pole: false, fastestLap: false },
    bearman:    { position: 99, points: 0,  pole: false, fastestLap: false },
    tsunoda:    { position: null, points: null, pole: false, fastestLap: false },
  },
  // Round 7: Barcelona
  barcelona: {
    hamilton:   { position: 1,  points: 25, pole: false, fastestLap: true },
    russell:    { position: 2,  points: 18, pole: true,  fastestLap: false },
    norris:     { position: 3,  points: 15, pole: false, fastestLap: false },
    leclerc:    { position: 4,  points: 12, pole: false, fastestLap: false },
    piastri:    { position: 5,  points: 10, pole: false, fastestLap: false },
    lindblad:   { position: 6,  points: 8,  pole: false, fastestLap: false },
    gasly:      { position: 7,  points: 6,  pole: false, fastestLap: false },
    albon:      { position: 8,  points: 4,  pole: false, fastestLap: false },
    ocon:       { position: 9,  points: 2,  pole: false, fastestLap: false },
    hadjar:     { position: 10, points: 1,  pole: false, fastestLap: false },
    bortoleto:  { position: 11, points: 0,  pole: false, fastestLap: false },
    hulkenberg: { position: 12, points: 0,  pole: false, fastestLap: false },
    alonso:     { position: 13, points: 0,  pole: false, fastestLap: false },
    perez:      { position: 14, points: 0,  pole: false, fastestLap: false },
    colapinto:  { position: 15, points: 0,  pole: false, fastestLap: false },
    lawson:     { position: 16, points: 0,  pole: false, fastestLap: false },
    sainz:      { position: 17, points: 0,  pole: false, fastestLap: false },
    stroll:     { position: 99, points: 0,  pole: false, fastestLap: false },
    bearman:    { position: 99, points: 0,  pole: false, fastestLap: false },
    antonelli:  { position: 99, points: 0,  pole: false, fastestLap: false },
    bottas:     { position: 99, points: 0,  pole: false, fastestLap: false },
    tsunoda:    { position: null, points: null, pole: false, fastestLap: false },
  },
  // Round 8: Austria — upcoming
  austria: {},
};

// Race name mapping for seasonStats
const raceLabelMap: Record<string, string> = {
  australia: "Australia",
  china: "China",
  japan: "Japan",
  miami: "Miami",
  canada: "Canada",
  monaco: "Monaco",
  barcelona: "Barcelona",
  austria: "Austrian",
  britain: "British",
  belgium: "Belgian",
  hungary: "Hungarian",
  netherlands: "Dutch",
  italy: "Italian",
  spain: "Spanish",
  azerbaijan: "Azerbaijan",
  singapore: "Singapore",
  "united-states": "United States",
  mexico: "Mexico City",
  brazil: "Brazilian",
  "las-vegas": "Las Vegas",
  qatar: "Qatar",
  "abu-dhabi": "Abu Dhabi",
};

// ─── MAIN SCRIPT ──────────────────────────────────────────────────────────────

async function main() {
  console.log("🏎️  F1 Data Fetcher — Real careers + fictional 2026");
  console.log("=".repeat(60));

  // 1. Fetch real career stats for each driver from Jolpica
  console.log("\n📡 Fetching real career stats from Jolpica...");
  const careerStatsMap: Record<string, Awaited<ReturnType<typeof fetchDriverCareerStats>>> = {};

  for (const meta of driversMeta) {
    await sleep(DELAY_MS);
    const stats = await fetchDriverCareerStats(meta.ergastId);
    careerStatsMap[meta.ergastId] = stats;
    console.log(`    ✅ ${meta.base.lastName}: ${stats.wins}W ${stats.podiums}P ${stats.poles}PO ${stats.fastestLaps}FL`);
  }

  // 2. Build drivers with fictional 2026 season
  console.log("\n🏗️  Building driver data...");
  const drivers: Driver[] = [];

  for (const meta of driversMeta) {
    const career = careerStatsMap[meta.ergastId];
    const seasonStats: SeasonStat[] = [];
    let seasonPoints = 0, seasonWins = 0, seasonPodiums = 0, seasonPoles = 0, seasonFL = 0, seasonStarts = 0;

    // Build seasonStats for each race in the calendar
    for (const race of hardcodedRaces) {
      if (race.status === "cancelled") continue;

      const label = raceLabelMap[race.id] || race.name.replace(" Grand Prix", "");
      const result = fictional2026Results[race.id]?.[meta.base.id];

      if (!result || (result.position === null && result.points === null)) {
        // Race hasn't happened yet
        seasonStats.push({
          race: label,
          position: null,
          points: null,
          pole: null,
          fastestLap: null,
        });
      } else {
        const pos = result.position ?? 99;
        const pts = result.points ?? 0;
        const isClassified = pos !== null && pos !== 99;

        seasonStats.push({
          race: label,
          position: pos,
          points: pts,
          pole: result.pole,
          fastestLap: result.fastestLap,
        });

        if (isClassified) {
          seasonPoints += pts;
          if (pos === 1) seasonWins++;
          if (pos <= 3) seasonPodiums++;
          seasonStarts++;
        }
        if (result.pole) seasonPoles++;
        if (result.fastestLap) seasonFL++;
      }
    }

    // Use Jolpica career stats, fallback to hardcoded if API returned 0s (new drivers)
    const useCareer = career.starts > 0 ? career : meta.careerBefore;

    const driver: Driver = {
      ...meta.base,
      season: {
        year: SEASON,
        points: seasonPoints,
        wins: seasonWins,
        podiums: seasonPodiums,
        poles: seasonPoles,
        fastestLaps: seasonFL,
        starts: seasonStarts,
      },
      allTime: {
        wins: useCareer.wins + seasonWins,
        podiums: useCareer.podiums + seasonPodiums,
        poles: useCareer.poles + seasonPoles,
        fastestLaps: useCareer.fastestLaps + seasonFL,
        championships: useCareer.championships,
        starts: useCareer.starts + seasonStarts,
      },
      seasonStats,
    };

    drivers.push(driver);
  }

  // 3. Build races JSON from hardcoded data
  console.log("\n🏗️  Building race data...");
  const races: Race[] = hardcodedRaces.map((r) => {
    const track = tracks.find(t => t.id === r.trackId);
    return {
      ...r,
      circuitSvg: track?.circuitSvg,
    };
  });

  // 4. Write output
  mkdirSync("public/data", { recursive: true });
  writeFileSync("public/data/drivers.json", JSON.stringify(drivers, null, 2));
  writeFileSync("public/data/races.json", JSON.stringify(races, null, 2));

  console.log("\n✅ Done!");
  console.log(`   Wrote ${drivers.length} drivers to public/data/drivers.json`);
  console.log(`   Wrote ${races.length} races to public/data/races.json`);
  console.log("\n📝 Next steps:");
  console.log("   1. Update fictional2026Results in fetchF1Data.ts as new races happen");
  console.log("   2. Run: npx tsx scripts/fetchF1Data.ts");
  console.log("   3. Your React app will auto-load the new data via useF1Data()");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});