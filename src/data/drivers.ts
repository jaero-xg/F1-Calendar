import { Driver } from "../types";

// 2026 F1 season — data accurate after Round 6 (Monaco GP, 7 June 2026)
// Points system: 1st=25, 2nd=18, 3rd=15, 4th=12, 5th=10, 6th=8, 7th=6, 8th=4, 9th=2, 10th=1 + 1pt FL
// Original calendar was 24 races; Bahrain (R4) and Saudi Arabia (R5) were CANCELLED due to the 2026 Iran war
// Remaining calendar = 22 races:
//   R1  Australia      (Melbourne)     — 8  Mar — DONE
//   R2  China          (Shanghai)      — 15 Mar — DONE  [Sprint]
//   R3  Japan          (Suzuka)        — 29 Mar — DONE
//   R4  Miami          (Miami Gardens) — 3  May — DONE
//   R5  Canada         (Montréal)      — 24 May — DONE
//   R6  Monaco                         — 7  Jun — DONE
//   R7  Spain-Barcelona                — 14 Jun — upcoming
//   R8  Austria        (Spielberg)     — 28 Jun — upcoming
//   R9  Great Britain  (Silverstone)   — 5  Jul — upcoming
//   R10 Belgium        (Spa)           — 19 Jul — upcoming
//   R11 Hungary        (Budapest)      — 26 Jul — upcoming
//   R12 Netherlands    (Zandvoort)     — 23 Aug — upcoming  [Sprint]
//   R13 Italy          (Monza)         — 6  Sep — upcoming
//   R14 Spain-Madrid                   — 13 Sep — upcoming  [debut]
//   R15 Azerbaijan     (Baku)          — 26 Sep — upcoming  [Saturday race]
//   R16 Singapore                      — 11 Oct — upcoming
//   R17 USA            (Austin)        — 25 Oct — upcoming
//   R18 Mexico City                    — 1  Nov — upcoming
//   R19 Brazil         (São Paulo)     — 8  Nov — upcoming
//   R20 Las Vegas                      — 21 Nov — upcoming  [Saturday race]
//   R21 Qatar          (Lusail)        — 28 Nov — upcoming
//   R22 Abu Dhabi      (Yas Marina)    — 6  Dec — upcoming

export const drivers: Driver[] = [
  {
  id: "antonelli",
  number: 12,
  firstName: "Kimi",
  lastName: "Antonelli",
  team: "Mercedes",
  teamId: "mercedes",
  teamColor: "#27F4D2",  // Added missing teamColor
  country: "Italy",
  countryCode: "IT",
  image: "/drivers/Kimi_Antonelli.png",
  bio: "...",  // Keep your existing bio or update it

  season: {
    year: 2026,
    points: 147,
    wins: 5,
    podiums: 6,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  allTime: {
    points: 147,      // Same as season (rookie)
    wins: 5,
    podiums: 6,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6          // Same as season (rookie)
  },

  seasonStats: [
    { race: "Australia", position: 2, points: 18, pole: false, fastestLap: null },
    { race: "China", position: 1, points: 26, pole: false, fastestLap: null },
    { race: "Japan", position: 1, points: 26, pole: false, fastestLap: null },
    { race: "Miami", position: 1, points: 25, pole: false, fastestLap: null },
    { race: "Canada", position: 1, points: 26, pole: false, fastestLap: null },
    { race: "Monaco", position: 1, points: 26, pole: false, fastestLap: null }
  ]
},
{
  id: "hamilton",
  number: 44,
  firstName: "Lewis",
  lastName: "Hamilton",
  team: "Ferrari",
  teamId: "ferrari",
  teamColor: "#E8002D",
  country: "United Kingdom",
  countryCode: "GB",
  image: "/drivers/Lewis-Hamilton.png",
  bio: "The seven-time World Champion continues to show strong form in his first Ferrari season, with consistent podium finishes keeping him firmly in the championship fight. Back-to-back podiums in Canada and Monaco have strengthened his push for an eighth title.",

  season: {
    year: 2026,
    points: 90,
    wins: 0,
    podiums: 3,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  allTime: {
    points: 4800,      // Approximate career total (adjust to your actual data)
    wins: 105,
    podiums: 200,
    poles: 104,
    fastestLaps: 65,
    championships: 7,
    starts: 368         // 362 + 6 races in 2026
  },

  seasonStats: [
    { race: "Australia", position: 4, points: 12, fastestLap: false, pole: false },
    { race: "China", position: 3, points: 15, fastestLap: false, pole: false },
    { race: "Japan", position: 5, points: 10, fastestLap: false, pole: false },
    { race: "Miami", position: 7, points: 6, fastestLap: false, pole: false },
    { race: "Canada", position: 2, points: 18, fastestLap: false, pole: false },
    { race: "Monaco", position: 2, points: 18, fastestLap: false, pole: false },

    { race: "Barcelona", position: null, points: null, fastestLap: null, pole: null },
    { race: "Austria", position: null, points: null, fastestLap: null, pole: null },
    { race: "Britain", position: null, points: null, fastestLap: null, pole: null },
    { race: "Belgium", position: null, points: null, fastestLap: null, pole: null },
    { race: "Hungary", position: null, points: null, fastestLap: null, pole: null },
    { race: "Netherlands", position: null, points: null, fastestLap: null, pole: null },
    { race: "Italy", position: null, points: null, fastestLap: null, pole: null },
    { race: "Madrid", position: null, points: null, fastestLap: null, pole: null },
    { race: "Azerbaijan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Singapore", position: null, points: null, fastestLap: null, pole: null },
    { race: "USA", position: null, points: null, fastestLap: null, pole: null },
    { race: "Mexico City", position: null, points: null, fastestLap: null, pole: null },
    { race: "Brazil", position: null, points: null, fastestLap: null, pole: null },
    { race: "Las Vegas", position: null, points: null, fastestLap: null, pole: null },
    { race: "Qatar", position: null, points: null, fastestLap: null, pole: null },
    { race: "Abu Dhabi", position: null, points: null, fastestLap: null, pole: null }
  ]
},
  {
  id: "russell",
  number: 63,
  firstName: "George",
  lastName: "Russell",
  team: "Mercedes",
  teamId: "mercedes",
  teamColor: "#27F4D2",
  country: "United Kingdom",
  countryCode: "GB",
  image: "/drivers/george-russell.png",
  bio: "George Russell opened the 2026 season in perfect fashion, winning Australia from pole. Two difficult weekends in Canada and Monaco — where a power unit failure and a drive-through penalty cost him dearly — have allowed Hamilton to leapfrog him into second.",

  season: {
    year: 2026,
    points: 88,
    wins: 1,
    podiums: 2,
    poles: 2,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  allTime: {
    points: 880,       // Approximate career total before 2026 + 88 this season
    wins: 3,
    podiums: 12,
    poles: 4,
    fastestLaps: 2,
    championships: 0,
    starts: 130        // 124 + 6 races in 2026
  },

  seasonStats: [
    { race: "Australia", position: 1, points: 25, fastestLap: false, pole: true },
    { race: "China", position: 2, points: 18, fastestLap: false, pole: false },
    { race: "Japan", position: 4, points: 12, fastestLap: false, pole: false },
    { race: "Miami", position: 5, points: 10, fastestLap: false, pole: false },
    { race: "Canada", position: 99, points: 0, fastestLap: false, pole: true }, // DNF (power unit)
    { race: "Monaco", position: 12, points: 0, fastestLap: false, pole: false }, // drive-through penalty
    { race: "Barcelona", position: null, points: null, fastestLap: null, pole: null },
    { race: "Austria", position: null, points: null, fastestLap: null, pole: null },
    { race: "Britain", position: null, points: null, fastestLap: null, pole: null },
    { race: "Belgium", position: null, points: null, fastestLap: null, pole: null },
    { race: "Hungary", position: null, points: null, fastestLap: null, pole: null },
    { race: "Netherlands", position: null, points: null, fastestLap: null, pole: null },
    { race: "Italy", position: null, points: null, fastestLap: null, pole: null },
    { race: "Madrid", position: null, points: null, fastestLap: null, pole: null },
    { race: "Azerbaijan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Singapore", position: null, points: null, fastestLap: null, pole: null },
    { race: "USA", position: null, points: null, fastestLap: null, pole: null },
    { race: "Mexico City", position: null, points: null, fastestLap: null, pole: null },
    { race: "Brazil", position: null, points: null, fastestLap: null, pole: null },
    { race: "Las Vegas", position: null, points: null, fastestLap: null, pole: null },
    { race: "Qatar", position: null, points: null, fastestLap: null, pole: null },
    { race: "Abu Dhabi", position: null, points: null, fastestLap: null, pole: null }
  ]
},
  {
  id: "leclerc",
  number: 16,
  firstName: "Charles",
  lastName: "Leclerc",
  team: "Ferrari",
  teamId: "ferrari",
  teamColor: "#E8002D",
  country: "Monaco",
  countryCode: "MC",
  image: "/drivers/Charles-Leclerc.png",
  bio: "Charles Leclerc started 2026 strongly, claiming two podiums in the opening three races. A late crash at his home Monaco Grand Prix was a painful blow to his championship hopes, leaving him 81 points adrift of Antonelli.",

  season: {
    year: 2026,
    points: 75,
    wins: 0,
    podiums: 2,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  allTime: {
    points: 1420,      // Approximate career total before 2026 + 75 this season
    wins: 8,
    podiums: 32,
    poles: 23,
    fastestLaps: 10,
    championships: 0,
    starts: 160         // 154 + 6 races in 2026
  },

  seasonStats: [
    { race: "Australia", position: 3, points: 15, fastestLap: false, pole: false },
    { race: "China", position: 6, points: 8, fastestLap: false, pole: false },
    { race: "Japan", position: 3, points: 15, fastestLap: false, pole: false },
    { race: "Miami", position: 6, points: 8, fastestLap: false, pole: false },
    { race: "Canada", position: 4, points: 12, fastestLap: false, pole: false },
    { race: "Monaco", position: 99, points: 0, fastestLap: false, pole: false }, // DNF (crash)
    { race: "Barcelona", position: null, points: null, fastestLap: null, pole: null },
    { race: "Austria", position: null, points: null, fastestLap: null, pole: null },
    { race: "Britain", position: null, points: null, fastestLap: null, pole: null },
    { race: "Belgium", position: null, points: null, fastestLap: null, pole: null },
    { race: "Hungary", position: null, points: null, fastestLap: null, pole: null },
    { race: "Netherlands", position: null, points: null, fastestLap: null, pole: null },
    { race: "Italy", position: null, points: null, fastestLap: null, pole: null },
    { race: "Madrid", position: null, points: null, fastestLap: null, pole: null },
    { race: "Azerbaijan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Singapore", position: null, points: null, fastestLap: null, pole: null },
    { race: "USA", position: null, points: null, fastestLap: null, pole: null },
    { race: "Mexico City", position: null, points: null, fastestLap: null, pole: null },
    { race: "Brazil", position: null, points: null, fastestLap: null, pole: null },
    { race: "Las Vegas", position: null, points: null, fastestLap: null, pole: null },
    { race: "Qatar", position: null, points: null, fastestLap: null, pole: null },
    { race: "Abu Dhabi", position: null, points: null, fastestLap: null, pole: null }
  ]
},
  {
  id: "piastri",
  number: 81,
  firstName: "Oscar",
  lastName: "Piastri",
  team: "McLaren",
  teamId: "mclaren",
  teamColor: "#FF8000",
  country: "Australia",
  countryCode: "AU",
  image: "/drivers/oscar-piastri.png",
  bio: "Oscar Piastri has been McLaren's most consistent scorer in 2026, picking up two podiums including a second place in Japan. As Lando Norris has struggled with mechanical issues, Piastri has emerged as the team's championship hope.",

  season: {
    year: 2026,
    points: 60,
    wins: 0,
    podiums: 2,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  allTime: {
    points: 356,       // Career total before 2026 + 60 this season
    wins: 2,
    podiums: 8,
    poles: 0,
    fastestLaps: 2,
    championships: 0,
    starts: 60          // 54 + 6 races in 2026
  },

  seasonStats: [
    { race: "Australia", position: 7, points: 6, fastestLap: false, pole: false },
    { race: "China", position: 5, points: 10, fastestLap: false, pole: false },
    { race: "Japan", position: 2, points: 18, fastestLap: false, pole: false },
    { race: "Miami", position: 3, points: 15, fastestLap: false, pole: false },
    { race: "Canada", position: 5, points: 10, fastestLap: false, pole: false },
    { race: "Monaco", position: 4, points: 12, fastestLap: false, pole: false },
    { race: "Barcelona", position: null, points: null, fastestLap: null, pole: null },
    { race: "Austria", position: null, points: null, fastestLap: null, pole: null },
    { race: "Britain", position: null, points: null, fastestLap: null, pole: null },
    { race: "Belgium", position: null, points: null, fastestLap: null, pole: null },
    { race: "Hungary", position: null, points: null, fastestLap: null, pole: null },
    { race: "Netherlands", position: null, points: null, fastestLap: null, pole: null },
    { race: "Italy", position: null, points: null, fastestLap: null, pole: null },
    { race: "Madrid", position: null, points: null, fastestLap: null, pole: null },
    { race: "Azerbaijan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Singapore", position: null, points: null, fastestLap: null, pole: null },
    { race: "USA", position: null, points: null, fastestLap: null, pole: null },
    { race: "Mexico City", position: null, points: null, fastestLap: null, pole: null },
    { race: "Brazil", position: null, points: null, fastestLap: null, pole: null },
    { race: "Las Vegas", position: null, points: null, fastestLap: null, pole: null },
    { race: "Qatar", position: null, points: null, fastestLap: null, pole: null },
    { race: "Abu Dhabi", position: null, points: null, fastestLap: null, pole: null }
  ]
},
 {
  id: "norris",
  number: 4,
  firstName: "Lando",
  lastName: "Norris",
  team: "McLaren",
  teamId: "mclaren",
  teamColor: "#FF8000",
  country: "United Kingdom",
  countryCode: "GB",
  image: "/drivers/Lando-Norris.png",
  bio: "The reigning World Champion has endured a difficult title defence in 2026. A strong second place in Miami offered hope, but back-to-back mechanical retirements in Canada and Monaco have left Norris 98 points off the lead.",

  season: {
    year: 2026,
    points: 58,
    wins: 0,
    podiums: 1,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  allTime: {
    points: 1080,
    wins: 6,
    podiums: 22,
    poles: 7,
    fastestLaps: 8,
    championships: 1,
    starts: 138
  },

  seasonStats: [
    { race: "Australia", position: 5, points: 10, fastestLap: false, pole: false },
    { race: "China", position: 4, points: 12, fastestLap: false, pole: false },
    { race: "Japan", position: 6, points: 8, fastestLap: false, pole: false },
    { race: "Miami", position: 2, points: 18, fastestLap: false, pole: false },
    { race: "Canada", position: 99, points: 0, fastestLap: false, pole: false },
    { race: "Monaco", position: 99, points: 0, fastestLap: false, pole: false },
    { race: "Barcelona", position: null, points: null, fastestLap: null, pole: null },
    { race: "Austria", position: null, points: null, fastestLap: null, pole: null },
    { race: "Britain", position: null, points: null, fastestLap: null, pole: null },
    { race: "Belgium", position: null, points: null, fastestLap: null, pole: null },
    { race: "Hungary", position: null, points: null, fastestLap: null, pole: null },
    { race: "Netherlands", position: null, points: null, fastestLap: null, pole: null },
    { race: "Italy", position: null, points: null, fastestLap: null, pole: null },
    { race: "Madrid", position: null, points: null, fastestLap: null, pole: null },
    { race: "Azerbaijan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Singapore", position: null, points: null, fastestLap: null, pole: null },
    { race: "USA", position: null, points: null, fastestLap: null, pole: null },
    { race: "Mexico City", position: null, points: null, fastestLap: null, pole: null },
    { race: "Brazil", position: null, points: null, fastestLap: null, pole: null },
    { race: "Las Vegas", position: null, points: null, fastestLap: null, pole: null },
    { race: "Qatar", position: null, points: null, fastestLap: null, pole: null },
    { race: "Abu Dhabi", position: null, points: null, fastestLap: null, pole: null }
  ]
},
  {
  id: "verstappen",
  number: 3,
  firstName: "Max",
  lastName: "Verstappen",
  team: "Red Bull Racing",
  teamId: "red-bull",
  teamColor: "#3671C6",
  country: "Netherlands",
  countryCode: "NL",
  image: "/drivers/Max-Verstappen.png",
  bio: "The four-time World Champion has had a torrid start to 2026. A failure to score in Australia and a first-lap retirement in Monaco have left Verstappen 113 points off the lead, with Red Bull still searching for answers about their car's performance.",

  season: {
    year: 2026,
    points: 43,
    wins: 0,
    podiums: 1,
    poles: 0,
    fastestLaps: 1,
    championships: 0,
    starts: 6
  },

  allTime: {
    points: 2850,
    wins: 62,
    podiums: 110,
    poles: 42,
    fastestLaps: 35,
    championships: 4,
    starts: 222
  },

  seasonStats: [
    { race: "Australia", position: 6, points: 9, fastestLap: true, pole: false },
    { race: "China", position: 8, points: 4, fastestLap: false, pole: false },
    { race: "Japan", position: 7, points: 6, fastestLap: false, pole: false },
    { race: "Miami", position: 4, points: 12, fastestLap: false, pole: false },
    { race: "Canada", position: 3, points: 15, fastestLap: false, pole: false },
    { race: "Monaco", position: 99, points: 0, fastestLap: false, pole: false },
    { race: "Barcelona", position: null, points: null, fastestLap: null, pole: null },
    { race: "Austria", position: null, points: null, fastestLap: null, pole: null },
    { race: "Britain", position: null, points: null, fastestLap: null, pole: null },
    { race: "Belgium", position: null, points: null, fastestLap: null, pole: null },
    { race: "Hungary", position: null, points: null, fastestLap: null, pole: null },
    { race: "Netherlands", position: null, points: null, fastestLap: null, pole: null },
    { race: "Italy", position: null, points: null, fastestLap: null, pole: null },
    { race: "Madrid", position: null, points: null, fastestLap: null, pole: null },
    { race: "Azerbaijan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Singapore", position: null, points: null, fastestLap: null, pole: null },
    { race: "USA", position: null, points: null, fastestLap: null, pole: null },
    { race: "Mexico City", position: null, points: null, fastestLap: null, pole: null },
    { race: "Brazil", position: null, points: null, fastestLap: null, pole: null },
    { race: "Las Vegas", position: null, points: null, fastestLap: null, pole: null },
    { race: "Qatar", position: null, points: null, fastestLap: null, pole: null },
    { race: "Abu Dhabi", position: null, points: null, fastestLap: null, pole: null }
  ]
},
 {
  id: "hadjar",
  number: 6,
  firstName: "Isack",
  lastName: "Hadjar",
  team: "Red Bull Racing",
  teamId: "red-bull",
  teamColor: "#3671C6",
  country: "France",
  countryCode: "FR",
  image: "/drivers/Isack-Hadjar.png",
  bio: "Isack Hadjar has been quietly building his points tally at Red Bull Racing. The French rookie claimed his first F1 podium at Monaco — one of the most prestigious circuits in the world — demonstrating the composure of a seasoned veteran.",

  season: {
    year: 2026,
    points: 29,
    wins: 0,
    podiums: 1,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  allTime: {
    points: 29,
    wins: 0,
    podiums: 1,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 24
  },

  seasonStats: [
    { race: "Australia", position: 99, points: 0, fastestLap: false, pole: false },
    { race: "China", position: 7, points: 6, fastestLap: false, pole: false },
    { race: "Japan", position: 8, points: 4, fastestLap: false, pole: false },
    { race: "Miami", position: 8, points: 4, fastestLap: false, pole: false },
    { race: "Canada", position: 6, points: 8, fastestLap: false, pole: false },
    { race: "Monaco", position: 3, points: 15, fastestLap: false, pole: false },
    { race: "Barcelona", position: null, points: null, fastestLap: null, pole: null },
    { race: "Austria", position: null, points: null, fastestLap: null, pole: null },
    { race: "Britain", position: null, points: null, fastestLap: null, pole: null },
    { race: "Belgium", position: null, points: null, fastestLap: null, pole: null },
    { race: "Hungary", position: null, points: null, fastestLap: null, pole: null },
    { race: "Netherlands", position: null, points: null, fastestLap: null, pole: null },
    { race: "Italy", position: null, points: null, fastestLap: null, pole: null },
    { race: "Madrid", position: null, points: null, fastestLap: null, pole: null },
    { race: "Azerbaijan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Singapore", position: null, points: null, fastestLap: null, pole: null },
    { race: "USA", position: null, points: null, fastestLap: null, pole: null },
    { race: "Mexico City", position: null, points: null, fastestLap: null, pole: null },
    { race: "Brazil", position: null, points: null, fastestLap: null, pole: null },
    { race: "Las Vegas", position: null, points: null, fastestLap: null, pole: null },
    { race: "Qatar", position: null, points: null, fastestLap: null, pole: null },
    { race: "Abu Dhabi", position: null, points: null, fastestLap: null, pole: null }
  ]
},
  {
  id: "lawson",
  number: 30,
  firstName: "Liam",
  lastName: "Lawson",
  team: "Racing Bulls",
  teamId: "rb",
  teamColor: "#6692FF",
  country: "New Zealand",
  countryCode: "NZ",
  image: "/drivers/Liam-Lawson.png",
  bio: "Liam Lawson has been one of the quiet achievers of the 2026 season. The New Zealander equalled the best result of his career with fifth in Monaco, and his consistency has Racing Bulls eyeing a strong mid-table constructors' position.",

  season: {
    year: 2026,
    points: 26,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  allTime: {
    points: 26,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 28
  },

  seasonStats: [
    { race: "Australia", position: 9, points: 2, fastestLap: false, pole: false },
    { race: "China", position: 10, points: 1, fastestLap: false, pole: false },
    { race: "Japan", position: 10, points: 1, fastestLap: false, pole: false },
    { race: "Miami", position: 9, points: 2, fastestLap: false, pole: false },
    { race: "Canada", position: 9, points: 2, fastestLap: false, pole: false },
    { race: "Monaco", position: 5, points: 10, fastestLap: false, pole: false },
    { race: "Barcelona", position: null, points: null, fastestLap: null, pole: null },
    { race: "Austria", position: null, points: null, fastestLap: null, pole: null },
    { race: "Britain", position: null, points: null, fastestLap: null, pole: null },
    { race: "Belgium", position: null, points: null, fastestLap: null, pole: null },
    { race: "Hungary", position: null, points: null, fastestLap: null, pole: null },
    { race: "Netherlands", position: null, points: null, fastestLap: null, pole: null },
    { race: "Italy", position: null, points: null, fastestLap: null, pole: null },
    { race: "Madrid", position: null, points: null, fastestLap: null, pole: null },
    { race: "Azerbaijan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Singapore", position: null, points: null, fastestLap: null, pole: null },
    { race: "USA", position: null, points: null, fastestLap: null, pole: null },
    { race: "Mexico City", position: null, points: null, fastestLap: null, pole: null },
    { race: "Brazil", position: null, points: null, fastestLap: null, pole: null },
    { race: "Las Vegas", position: null, points: null, fastestLap: null, pole: null },
    { race: "Qatar", position: null, points: null, fastestLap: null, pole: null },
    { race: "Abu Dhabi", position: null, points: null, fastestLap: null, pole: null }
  ]
},
 {
  id: "gasly",
  number: 10,
  firstName: "Pierre",
  lastName: "Gasly",
  team: "Alpine",
  teamId: "alpine",
  teamColor: "#FF87BC",
  country: "France",
  countryCode: "FR",
  image: "/drivers/Pierre-Gasly.png",
  bio: "Pierre Gasly leads Alpine's efforts and sits joint ninth in the standings after Monaco, where he was classified seventh after penalties. The Frenchman is a crucial figure in the team's rebuilding project.",

  season: {
    year: 2026,
    points: 26,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  allTime: {
    points: 420,
    wins: 1,
    podiums: 5,
    poles: 0,
    fastestLaps: 3,
    championships: 0,
    starts: 168
  },

  seasonStats: [
    { race: "Australia", position: 8, points: 4, fastestLap: false, pole: false },
    { race: "China", position: 11, points: 0, fastestLap: false, pole: false },
    { race: "Japan", position: 9, points: 2, fastestLap: false, pole: false },
    { race: "Miami", position: 11, points: 0, fastestLap: false, pole: false },
    { race: "Canada", position: 10, points: 1, fastestLap: false, pole: false },
    { race: "Monaco", position: 7, points: 6, fastestLap: false, pole: false },
    { race: "Barcelona", position: null, points: null, fastestLap: null, pole: null },
    { race: "Austria", position: null, points: null, fastestLap: null, pole: null },
    { race: "Britain", position: null, points: null, fastestLap: null, pole: null },
    { race: "Belgium", position: null, points: null, fastestLap: null, pole: null },
    { race: "Hungary", position: null, points: null, fastestLap: null, pole: null },
    { race: "Netherlands", position: null, points: null, fastestLap: null, pole: null },
    { race: "Italy", position: null, points: null, fastestLap: null, pole: null },
    { race: "Madrid", position: null, points: null, fastestLap: null, pole: null },
    { race: "Azerbaijan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Singapore", position: null, points: null, fastestLap: null, pole: null },
    { race: "USA", position: null, points: null, fastestLap: null, pole: null },
    { race: "Mexico City", position: null, points: null, fastestLap: null, pole: null },
    { race: "Brazil", position: null, points: null, fastestLap: null, pole: null },
    { race: "Las Vegas", position: null, points: null, fastestLap: null, pole: null },
    { race: "Qatar", position: null, points: null, fastestLap: null, pole: null },
    { race: "Abu Dhabi", position: null, points: null, fastestLap: null, pole: null }
  ]
},
  {
  id: "bearman",
  number: 87,
  firstName: "Oliver",
  lastName: "Bearman",
  team: "Haas F1 Team",
  teamId: "haas",
  teamColor: "#B6BABD",
  country: "United Kingdom",
  countryCode: "GB",
  image: "/drivers/Oliver-Bearman.png",
  bio: "Oliver Bearman has made a solid impression in his first full F1 season with Haas, impressing on his debut in Australia with seventh. The young Briton retired in Monaco but has shown consistent pace throughout the opening rounds.",

  season: {
    year: 2026,
    points: 18,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  allTime: {
    points: 18,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 24
  },

  seasonStats: [
    { race: "Australia", position: 7, points: 6, fastestLap: false, pole: false },
    { race: "China", position: 9, points: 2, fastestLap: false, pole: false },
    { race: "Japan", position: 11, points: 0, fastestLap: false, pole: false },
    { race: "Miami", position: 10, points: 1, fastestLap: false, pole: false },
    { race: "Canada", position: 8, points: 4, fastestLap: false, pole: false },
    { race: "Monaco", position: 99, points: 0, fastestLap: false, pole: false },
    { race: "Barcelona", position: null, points: null, fastestLap: null, pole: null },
    { race: "Austria", position: null, points: null, fastestLap: null, pole: null },
    { race: "Britain", position: null, points: null, fastestLap: null, pole: null },
    { race: "Belgium", position: null, points: null, fastestLap: null, pole: null },
    { race: "Hungary", position: null, points: null, fastestLap: null, pole: null },
    { race: "Netherlands", position: null, points: null, fastestLap: null, pole: null },
    { race: "Italy", position: null, points: null, fastestLap: null, pole: null },
    { race: "Madrid", position: null, points: null, fastestLap: null, pole: null },
    { race: "Azerbaijan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Singapore", position: null, points: null, fastestLap: null, pole: null },
    { race: "USA", position: null, points: null, fastestLap: null, pole: null },
    { race: "Mexico City", position: null, points: null, fastestLap: null, pole: null },
    { race: "Brazil", position: null, points: null, fastestLap: null, pole: null },
    { race: "Las Vegas", position: null, points: null, fastestLap: null, pole: null },
    { race: "Qatar", position: null, points: null, fastestLap: null, pole: null },
    { race: "Abu Dhabi", position: null, points: null, fastestLap: null, pole: null }
  ]
},
  {
  id: "colapinto",
  number: 43,
  firstName: "Franco",
  lastName: "Colapinto",
  team: "Alpine",
  teamId: "alpine",
  teamColor: "#FF87BC",
  country: "Argentina",
  countryCode: "AR",
  image: "/drivers/Colapinto.png",
  bio: "Franco Colapinto joined Alpine for 2026 after impressing at Williams late in 2024. The Argentine continues to develop, scoring points in Monaco on a weekend where many frontrunners faltered.",

  season: {
    year: 2026,
    points: 15,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  allTime: {
    points: 15,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 24
  },

  seasonStats: [
    { race: "Australia", position: 10, points: 1, fastestLap: false, pole: false },
    { race: "China", position: 12, points: 0, fastestLap: false, pole: false },
    { race: "Japan", position: 12, points: 0, fastestLap: false, pole: false },
    { race: "Miami", position: 12, points: 0, fastestLap: false, pole: false },
    { race: "Canada", position: 11, points: 0, fastestLap: false, pole: false },
    { race: "Monaco", position: 14, points: 0, fastestLap: false, pole: false },
    { race: "Barcelona", position: null, points: null, fastestLap: null, pole: null },
    { race: "Austria", position: null, points: null, fastestLap: null, pole: null },
    { race: "Britain", position: null, points: null, fastestLap: null, pole: null },
    { race: "Belgium", position: null, points: null, fastestLap: null, pole: null },
    { race: "Hungary", position: null, points: null, fastestLap: null, pole: null },
    { race: "Netherlands", position: null, points: null, fastestLap: null, pole: null },
    { race: "Italy", position: null, points: null, fastestLap: null, pole: null },
    { race: "Madrid", position: null, points: null, fastestLap: null, pole: null },
    { race: "Azerbaijan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Singapore", position: null, points: null, fastestLap: null, pole: null },
    { race: "USA", position: null, points: null, fastestLap: null, pole: null },
    { race: "Mexico City", position: null, points: null, fastestLap: null, pole: null },
    { race: "Brazil", position: null, points: null, fastestLap: null, pole: null },
    { race: "Las Vegas", position: null, points: null, fastestLap: null, pole: null },
    { race: "Qatar", position: null, points: null, fastestLap: null, pole: null },
    { race: "Abu Dhabi", position: null, points: null, fastestLap: null, pole: null }
  ]
},
 {
  id: "lindblad",
  number: 7,
  firstName: "Arvid",
  lastName: "Lindblad",
  team: "Racing Bulls",
  teamId: "rb",
  teamColor: "#6692FF",
  country: "United Kingdom",
  countryCode: "GB",
  image: "/drivers/Arvid-Lindblad.png",
  bio: "British rookie Arvid Lindblad has made an immediate impact since joining Racing Bulls, scoring on his debut in Australia. Sixth in Monaco, his best result to date, underlined the youngster's talent on a chaotic street circuit.",

  season: {
    year: 2026,
    points: 13,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  allTime: {
    points: 13,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  seasonStats: [
    { race: "Australia", position: 8, points: 4, fastestLap: false, pole: false },
    { race: "China", position: 13, points: 0, fastestLap: false, pole: false },
    { race: "Japan", position: 13, points: 0, fastestLap: false, pole: false },
    { race: "Miami", position: 13, points: 0, fastestLap: false, pole: false },
    { race: "Canada", position: 99, points: 0, fastestLap: false, pole: false },
    { race: "Monaco", position: 6, points: 8, fastestLap: false, pole: false },
    { race: "Barcelona", position: null, points: null, fastestLap: null, pole: null },
    { race: "Austria", position: null, points: null, fastestLap: null, pole: null },
    { race: "Britain", position: null, points: null, fastestLap: null, pole: null },
    { race: "Belgium", position: null, points: null, fastestLap: null, pole: null },
    { race: "Hungary", position: null, points: null, fastestLap: null, pole: null },
    { race: "Netherlands", position: null, points: null, fastestLap: null, pole: null },
    { race: "Italy", position: null, points: null, fastestLap: null, pole: null },
    { race: "Madrid", position: null, points: null, fastestLap: null, pole: null },
    { race: "Azerbaijan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Singapore", position: null, points: null, fastestLap: null, pole: null },
    { race: "USA", position: null, points: null, fastestLap: null, pole: null },
    { race: "Mexico City", position: null, points: null, fastestLap: null, pole: null },
    { race: "Brazil", position: null, points: null, fastestLap: null, pole: null },
    { race: "Las Vegas", position: null, points: null, fastestLap: null, pole: null },
    { race: "Qatar", position: null, points: null, fastestLap: null, pole: null },
    { race: "Abu Dhabi", position: null, points: null, fastestLap: null, pole: null }
  ]
},
 {
  id: "sainz",
  number: 55,
  firstName: "Carlos",
  lastName: "Sainz",
  team: "Williams",
  teamId: "williams",
  teamColor: "#64C4FF",
  country: "Spain",
  countryCode: "ES",
  image: "/drivers/Carlos-Sainz.png",
  bio: "Carlos Sainz moved to Williams for 2026 and has been a consistent midfield presence. A retirement in Monaco was disappointing, but the Spaniard remains determined to extract the maximum from the Williams package.",

  season: {
    year: 2026,
    points: 6,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  allTime: {
    points: 1100,
    wins: 3,
    podiums: 20,
    poles: 5,
    fastestLaps: 4,
    championships: 0,
    starts: 210
  },

  seasonStats: [
    { race: "Australia", position: 11, points: 0, fastestLap: false, pole: false },
    { race: "China", position: 14, points: 0, fastestLap: false, pole: false },
    { race: "Japan", position: 14, points: 0, fastestLap: false, pole: false },
    { race: "Miami", position: 14, points: 0, fastestLap: false, pole: false },
    { race: "Canada", position: 7, points: 6, fastestLap: false, pole: false },
    { race: "Monaco", position: 99, points: 0, fastestLap: false, pole: false },
    { race: "Barcelona", position: null, points: null, fastestLap: null, pole: null },
    { race: "Austria", position: null, points: null, fastestLap: null, pole: null },
    { race: "Britain", position: null, points: null, fastestLap: null, pole: null },
    { race: "Belgium", position: null, points: null, fastestLap: null, pole: null },
    { race: "Hungary", position: null, points: null, fastestLap: null, pole: null },
    { race: "Netherlands", position: null, points: null, fastestLap: null, pole: null },
    { race: "Italy", position: null, points: null, fastestLap: null, pole: null },
    { race: "Madrid", position: null, points: null, fastestLap: null, pole: null },
    { race: "Azerbaijan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Singapore", position: null, points: null, fastestLap: null, pole: null },
    { race: "USA", position: null, points: null, fastestLap: null, pole: null },
    { race: "Mexico City", position: null, points: null, fastestLap: null, pole: null },
    { race: "Brazil", position: null, points: null, fastestLap: null, pole: null },
    { race: "Las Vegas", position: null, points: null, fastestLap: null, pole: null },
    { race: "Qatar", position: null, points: null, fastestLap: null, pole: null },
    { race: "Abu Dhabi", position: null, points: null, fastestLap: null, pole: null }
  ]
},
  
{
  id: "albon",
  number: 23,
  firstName: "Alexander",
  lastName: "Albon",
  team: "Williams",
  teamId: "williams",
  teamColor: "#64C4FF",
  country: "Thailand",
  countryCode: "TH",
  image: "/drivers/Alex-Albon.png",
  bio: "Alexander Albon continues to be a reliable performer for Williams. Eighth in Monaco is his best result of the year, and the Thai driver remains a key voice in developing the team's 2026 challenger.",

  season: {
    year: 2026,
    points: 5,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  allTime: {
    points: 220,
    wins: 0,
    podiums: 2,
    poles: 0,
    fastestLaps: 1,
    championships: 0,
    starts: 114
  },

  seasonStats: [
    { race: "Australia", position: 12, points: 0, fastestLap: false, pole: false },
    { race: "China", position: 15, points: 0, fastestLap: false, pole: false },
    { race: "Japan", position: 15, points: 0, fastestLap: false, pole: false },
    { race: "Miami", position: 15, points: 0, fastestLap: false, pole: false },
    { race: "Canada", position: 99, points: 0, fastestLap: false, pole: false },
    { race: "Monaco", position: 8, points: 4, fastestLap: false, pole: false },
    { race: "Barcelona", position: null, points: null, fastestLap: null, pole: null },
    { race: "Austria", position: null, points: null, fastestLap: null, pole: null },
    { race: "Britain", position: null, points: null, fastestLap: null, pole: null },
    { race: "Belgium", position: null, points: null, fastestLap: null, pole: null },
    { race: "Hungary", position: null, points: null, fastestLap: null, pole: null },
    { race: "Netherlands", position: null, points: null, fastestLap: null, pole: null },
    { race: "Italy", position: null, points: null, fastestLap: null, pole: null },
    { race: "Madrid", position: null, points: null, fastestLap: null, pole: null },
    { race: "Azerbaijan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Singapore", position: null, points: null, fastestLap: null, pole: null },
    { race: "USA", position: null, points: null, fastestLap: null, pole: null },
    { race: "Mexico City", position: null, points: null, fastestLap: null, pole: null },
    { race: "Brazil", position: null, points: null, fastestLap: null, pole: null },
    { race: "Las Vegas", position: null, points: null, fastestLap: null, pole: null },
    { race: "Qatar", position: null, points: null, fastestLap: null, pole: null },
    { race: "Abu Dhabi", position: null, points: null, fastestLap: null, pole: null }
  ]
},
 
{
  id: "ocon",
  number: 31,
  firstName: "Esteban",
  lastName: "Ocon",
  team: "Haas F1 Team",
  teamId: "haas",
  teamColor: "#B6BABD",
  country: "France",
  countryCode: "FR",
  image: "/drivers/Ocon.png",
  bio: "Esteban Ocon joined Haas for 2026 and has been scoring occasionally in the midfield. Ninth in Monaco is his best result of the season so far.",

  season: {
    year: 2026,
    points: 3,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  allTime: {
    points: 430,
    wins: 1,
    podiums: 3,
    poles: 0,
    fastestLaps: 2,
    championships: 0,
    starts: 168
  },

  seasonStats: [
    { race: "Australia", position: 13, points: 0, fastestLap: false, pole: false },
    { race: "China", position: 16, points: 0, fastestLap: false, pole: false },
    { race: "Japan", position: 16, points: 0, fastestLap: false, pole: false },
    { race: "Miami", position: 16, points: 0, fastestLap: false, pole: false },
    { race: "Canada", position: 12, points: 0, fastestLap: false, pole: false },
    { race: "Monaco", position: 9, points: 2, fastestLap: false, pole: false },
    { race: "Barcelona", position: null, points: null, fastestLap: null, pole: null },
    { race: "Austria", position: null, points: null, fastestLap: null, pole: null },
    { race: "Britain", position: null, points: null, fastestLap: null, pole: null },
    { race: "Belgium", position: null, points: null, fastestLap: null, pole: null },
    { race: "Hungary", position: null, points: null, fastestLap: null, pole: null },
    { race: "Netherlands", position: null, points: null, fastestLap: null, pole: null },
    { race: "Italy", position: null, points: null, fastestLap: null, pole: null },
    { race: "Madrid", position: null, points: null, fastestLap: null, pole: null },
    { race: "Azerbaijan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Singapore", position: null, points: null, fastestLap: null, pole: null },
    { race: "USA", position: null, points: null, fastestLap: null, pole: null },
    { race: "Mexico City", position: null, points: null, fastestLap: null, pole: null },
    { race: "Brazil", position: null, points: null, fastestLap: null, pole: null },
    { race: "Las Vegas", position: null, points: null, fastestLap: null, pole: null },
    { race: "Qatar", position: null, points: null, fastestLap: null, pole: null },
    { race: "Abu Dhabi", position: null, points: null, fastestLap: null, pole: null }
  ]
},
  

{
  id: "bortoleto",
  number: 5,
  firstName: "Gabriel",
  lastName: "Bortoleto",
  team: "Audi",
  teamId: "audi",
  teamColor: "#52E252",
  country: "Brazil",
  countryCode: "BR",
  image: "/drivers/Gabriel-Bortoleto.png",
  bio: "The reigning Formula 2 champion Gabriel Bortoleto has made an encouraging start to his F1 career with Audi (formerly Sauber). Eleventh in Monaco — scored after a pit lane start following a pre-race mechanical issue — is a testament to his fighting spirit.",

  season: {
    year: 2026,
    points: 2,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  allTime: {
    points: 2,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  seasonStats: [
    { race: "Australia", position: 14, points: 0, fastestLap: false, pole: false },
    { race: "China", position: 17, points: 0, fastestLap: false, pole: false },
    { race: "Japan", position: 17, points: 0, fastestLap: false, pole: false },
    { race: "Miami", position: 17, points: 0, fastestLap: false, pole: false },
    { race: "Canada", position: 13, points: 0, fastestLap: false, pole: false },
    { race: "Monaco", position: 11, points: 1, fastestLap: false, pole: false },
    { race: "Barcelona", position: null, points: null, fastestLap: null, pole: null },
    { race: "Austria", position: null, points: null, fastestLap: null, pole: null },
    { race: "Britain", position: null, points: null, fastestLap: null, pole: null },
    { race: "Belgium", position: null, points: null, fastestLap: null, pole: null },
    { race: "Hungary", position: null, points: null, fastestLap: null, pole: null },
    { race: "Netherlands", position: null, points: null, fastestLap: null, pole: null },
    { race: "Italy", position: null, points: null, fastestLap: null, pole: null },
    { race: "Madrid", position: null, points: null, fastestLap: null, pole: null },
    { race: "Azerbaijan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Singapore", position: null, points: null, fastestLap: null, pole: null },
    { race: "USA", position: null, points: null, fastestLap: null, pole: null },
    { race: "Mexico City", position: null, points: null, fastestLap: null, pole: null },
    { race: "Brazil", position: null, points: null, fastestLap: null, pole: null },
    { race: "Las Vegas", position: null, points: null, fastestLap: null, pole: null },
    { race: "Qatar", position: null, points: null, fastestLap: null, pole: null },
    { race: "Abu Dhabi", position: null, points: null, fastestLap: null, pole: null }
  ]
},
  

{
  id: "alonso",
  number: 14,
  firstName: "Fernando",
  lastName: "Alonso",
  team: "Aston Martin",
  teamId: "aston-martin",
  teamColor: "#229971",
  country: "Spain",
  countryCode: "ES",
  image: "/drivers/fernando-alonso.png",
  bio: "Fernando Alonso finally opened his 2026 season points tally thanks to Sergio Pérez's post-race penalty at Monaco. The two-time world champion has endured a frustrating start to the year with Aston Martin, and will be hoping the team makes significant development steps.",

  season: {
    year: 2026,
    points: 1,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  allTime: {
    points: 2150,
    wins: 32,
    podiums: 106,
    poles: 22,
    fastestLaps: 24,
    championships: 2,
    starts: 400
  },

  seasonStats: [
    { race: "Australia", position: 15, points: 0, fastestLap: false, pole: false },
    { race: "China", position: 18, points: 0, fastestLap: false, pole: false },
    { race: "Japan", position: 18, points: 0, fastestLap: false, pole: false },
    { race: "Miami", position: 18, points: 0, fastestLap: false, pole: false },
    { race: "Canada", position: 99, points: 0, fastestLap: false, pole: false },
    { race: "Monaco", position: 10, points: 1, fastestLap: false, pole: false },
    { race: "Barcelona", position: null, points: null, fastestLap: null, pole: null },
    { race: "Austria", position: null, points: null, fastestLap: null, pole: null },
    { race: "Britain", position: null, points: null, fastestLap: null, pole: null },
    { race: "Belgium", position: null, points: null, fastestLap: null, pole: null },
    { race: "Hungary", position: null, points: null, fastestLap: null, pole: null },
    { race: "Netherlands", position: null, points: null, fastestLap: null, pole: null },
    { race: "Italy", position: null, points: null, fastestLap: null, pole: null },
    { race: "Madrid", position: null, points: null, fastestLap: null, pole: null },
    { race: "Azerbaijan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Singapore", position: null, points: null, fastestLap: null, pole: null },
    { race: "USA", position: null, points: null, fastestLap: null, pole: null },
    { race: "Mexico City", position: null, points: null, fastestLap: null, pole: null },
    { race: "Brazil", position: null, points: null, fastestLap: null, pole: null },
    { race: "Las Vegas", position: null, points: null, fastestLap: null, pole: null },
    { race: "Qatar", position: null, points: null, fastestLap: null, pole: null },
    { race: "Abu Dhabi", position: null, points: null, fastestLap: null, pole: null }
  ]
},
  
{
  id: "stroll",
  number: 18,
  firstName: "Lance",
  lastName: "Stroll",
  team: "Aston Martin",
  teamId: "aston-martin",
  teamColor: "#229971",
  country: "Canada",
  countryCode: "CA",
  image: "/drivers/Lance-Stroll.png",
  bio: "Lance Stroll continues with Aston Martin in 2026, working alongside Fernando Alonso as the team develops its new generation car.",

  season: {
    year: 2026,
    points: 0,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  allTime: {
    points: 180,
    wins: 0,
    podiums: 3,
    poles: 1,
    fastestLaps: 0,
    championships: 0,
    starts: 174
  },

  seasonStats: [
    { race: "Australia", position: null, points: null, fastestLap: null, pole: null },
    { race: "China", position: null, points: null, fastestLap: null, pole: null },
    { race: "Japan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Miami", position: null, points: null, fastestLap: null, pole: null },
    { race: "Canada", position: null, points: null, fastestLap: null, pole: null },
    { race: "Monaco", position: null, points: null, fastestLap: null, pole: null },
    { race: "Barcelona", position: null, points: null, fastestLap: null, pole: null },
    { race: "Austria", position: null, points: null, fastestLap: null, pole: null },
    { race: "Britain", position: null, points: null, fastestLap: null, pole: null },
    { race: "Belgium", position: null, points: null, fastestLap: null, pole: null },
    { race: "Hungary", position: null, points: null, fastestLap: null, pole: null },
    { race: "Netherlands", position: null, points: null, fastestLap: null, pole: null },
    { race: "Italy", position: null, points: null, fastestLap: null, pole: null },
    { race: "Madrid", position: null, points: null, fastestLap: null, pole: null },
    { race: "Azerbaijan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Singapore", position: null, points: null, fastestLap: null, pole: null },
    { race: "USA", position: null, points: null, fastestLap: null, pole: null },
    { race: "Mexico City", position: null, points: null, fastestLap: null, pole: null },
    { race: "Brazil", position: null, points: null, fastestLap: null, pole: null },
    { race: "Las Vegas", position: null, points: null, fastestLap: null, pole: null },
    { race: "Qatar", position: null, points: null, fastestLap: null, pole: null },
    { race: "Abu Dhabi", position: null, points: null, fastestLap: null, pole: null }
  ]
},
{
  id: "hulkenberg",
  number: 27,
  firstName: "Nico",
  lastName: "Hulkenberg",
  team: "Audi",
  teamId: "audi",
  teamColor: "#52E252",
  country: "Germany",
  countryCode: "DE",
  image: "/drivers/Nico-Hulkenberg.png",
  bio: "Nico Hulkenberg leads Audi's first Formula 1 campaign with his experience and consistency.",

  season: {
    year: 2026,
    points: 0,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  allTime: {
    points: 530,
    wins: 0,
    podiums: 0,
    poles: 1,
    fastestLaps: 2,
    championships: 0,
    starts: 246
  },

  seasonStats: [
    { race: "Australia", position: null, points: null, fastestLap: null, pole: null },
    { race: "China", position: null, points: null, fastestLap: null, pole: null },
    { race: "Japan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Miami", position: null, points: null, fastestLap: null, pole: null },
    { race: "Canada", position: null, points: null, fastestLap: null, pole: null },
    { race: "Monaco", position: null, points: null, fastestLap: null, pole: null },
    { race: "Barcelona", position: null, points: null, fastestLap: null, pole: null },
    { race: "Austria", position: null, points: null, fastestLap: null, pole: null },
    { race: "Britain", position: null, points: null, fastestLap: null, pole: null },
    { race: "Belgium", position: null, points: null, fastestLap: null, pole: null },
    { race: "Hungary", position: null, points: null, fastestLap: null, pole: null },
    { race: "Netherlands", position: null, points: null, fastestLap: null, pole: null },
    { race: "Italy", position: null, points: null, fastestLap: null, pole: null },
    { race: "Madrid", position: null, points: null, fastestLap: null, pole: null },
    { race: "Azerbaijan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Singapore", position: null, points: null, fastestLap: null, pole: null },
    { race: "USA", position: null, points: null, fastestLap: null, pole: null },
    { race: "Mexico City", position: null, points: null, fastestLap: null, pole: null },
    { race: "Brazil", position: null, points: null, fastestLap: null, pole: null },
    { race: "Las Vegas", position: null, points: null, fastestLap: null, pole: null },
    { race: "Qatar", position: null, points: null, fastestLap: null, pole: null },
    { race: "Abu Dhabi", position: null, points: null, fastestLap: null, pole: null }
  ]
},
{
  id: "perez",
  number: 11,
  firstName: "Sergio",
  lastName: "Perez",
  team: "Cadillac",
  teamId: "cadillac",
  teamColor: "#FFFFFF",
  country: "Mexico",
  countryCode: "MX",
  image: "/drivers/Sergio-Perez.png",
  bio: "Sergio Perez returns to Formula 1 with Cadillac, bringing years of experience to the new team.",

  season: {
    year: 2026,
    points: 0,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  allTime: {
    points: 1650,
    wins: 6,
    podiums: 39,
    poles: 3,
    fastestLaps: 11,
    championships: 0,
    starts: 287
  },

  seasonStats: [
    { race: "Australia", position: null, points: null, fastestLap: null, pole: null },
    { race: "China", position: null, points: null, fastestLap: null, pole: null },
    { race: "Japan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Miami", position: null, points: null, fastestLap: null, pole: null },
    { race: "Canada", position: null, points: null, fastestLap: null, pole: null },
    { race: "Monaco", position: null, points: null, fastestLap: null, pole: null },
    { race: "Barcelona", position: null, points: null, fastestLap: null, pole: null },
    { race: "Austria", position: null, points: null, fastestLap: null, pole: null },
    { race: "Britain", position: null, points: null, fastestLap: null, pole: null },
    { race: "Belgium", position: null, points: null, fastestLap: null, pole: null },
    { race: "Hungary", position: null, points: null, fastestLap: null, pole: null },
    { race: "Netherlands", position: null, points: null, fastestLap: null, pole: null },
    { race: "Italy", position: null, points: null, fastestLap: null, pole: null },
    { race: "Madrid", position: null, points: null, fastestLap: null, pole: null },
    { race: "Azerbaijan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Singapore", position: null, points: null, fastestLap: null, pole: null },
    { race: "USA", position: null, points: null, fastestLap: null, pole: null },
    { race: "Mexico City", position: null, points: null, fastestLap: null, pole: null },
    { race: "Brazil", position: null, points: null, fastestLap: null, pole: null },
    { race: "Las Vegas", position: null, points: null, fastestLap: null, pole: null },
    { race: "Qatar", position: null, points: null, fastestLap: null, pole: null },
    { race: "Abu Dhabi", position: null, points: null, fastestLap: null, pole: null }
  ]
},
{
  id: "bottas",
  number: 77,
  firstName: "Valtteri",
  lastName: "Bottas",
  team: "Cadillac",
  teamId: "cadillac",
  teamColor: "#FFFFFF",
  country: "Finland",
  countryCode: "FI",
  image: "/drivers/Valtteri-Bottas.png",
  bio: "Valtteri Bottas joins Cadillac with extensive Mercedes experience and race-winning pedigree.",

  season: {
    year: 2026,
    points: 0,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  allTime: {
    points: 1850,
    wins: 10,
    podiums: 67,
    poles: 20,
    fastestLaps: 19,
    championships: 0,
    starts: 252
  },

  seasonStats: [
    { race: "Australia", position: null, points: null, fastestLap: null, pole: null },
    { race: "China", position: null, points: null, fastestLap: null, pole: null },
    { race: "Japan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Miami", position: null, points: null, fastestLap: null, pole: null },
    { race: "Canada", position: null, points: null, fastestLap: null, pole: null },
    { race: "Monaco", position: null, points: null, fastestLap: null, pole: null },
    { race: "Barcelona", position: null, points: null, fastestLap: null, pole: null },
    { race: "Austria", position: null, points: null, fastestLap: null, pole: null },
    { race: "Britain", position: null, points: null, fastestLap: null, pole: null },
    { race: "Belgium", position: null, points: null, fastestLap: null, pole: null },
    { race: "Hungary", position: null, points: null, fastestLap: null, pole: null },
    { race: "Netherlands", position: null, points: null, fastestLap: null, pole: null },
    { race: "Italy", position: null, points: null, fastestLap: null, pole: null },
    { race: "Madrid", position: null, points: null, fastestLap: null, pole: null },
    { race: "Azerbaijan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Singapore", position: null, points: null, fastestLap: null, pole: null },
    { race: "USA", position: null, points: null, fastestLap: null, pole: null },
    { race: "Mexico City", position: null, points: null, fastestLap: null, pole: null },
    { race: "Brazil", position: null, points: null, fastestLap: null, pole: null },
    { race: "Las Vegas", position: null, points: null, fastestLap: null, pole: null },
    { race: "Qatar", position: null, points: null, fastestLap: null, pole: null },
    { race: "Abu Dhabi", position: null, points: null, fastestLap: null, pole: null }
  ]
},
{
  id: "tsunoda",
  number: 22,
  firstName: "Yuki",
  lastName: "Tsunoda",
  team: "Red Bull Racing",
  teamId: "red-bull",
  teamColor: "#3671C6",
  country: "Japan",
  countryCode: "JP",
  image: "/drivers/Yuki-Tsunoda.png",
  bio: "Yuki Tsunoda continues his Formula 1 journey with Red Bull after years of development in the junior programme.",

  season: {
    year: 2026,
    points: 0,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    starts: 6
  },

  allTime: {
    points: 85,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 1,
    championships: 0,
    starts: 114
  },

  seasonStats: [
    { race: "Australia", position: null, points: null, fastestLap: null, pole: null },
    { race: "China", position: null, points: null, fastestLap: null, pole: null },
    { race: "Japan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Miami", position: null, points: null, fastestLap: null, pole: null },
    { race: "Canada", position: null, points: null, fastestLap: null, pole: null },
    { race: "Monaco", position: null, points: null, fastestLap: null, pole: null },
    { race: "Barcelona", position: null, points: null, fastestLap: null, pole: null },
    { race: "Austria", position: null, points: null, fastestLap: null, pole: null },
    { race: "Britain", position: null, points: null, fastestLap: null, pole: null },
    { race: "Belgium", position: null, points: null, fastestLap: null, pole: null },
    { race: "Hungary", position: null, points: null, fastestLap: null, pole: null },
    { race: "Netherlands", position: null, points: null, fastestLap: null, pole: null },
    { race: "Italy", position: null, points: null, fastestLap: null, pole: null },
    { race: "Madrid", position: null, points: null, fastestLap: null, pole: null },
    { race: "Azerbaijan", position: null, points: null, fastestLap: null, pole: null },
    { race: "Singapore", position: null, points: null, fastestLap: null, pole: null },
    { race: "USA", position: null, points: null, fastestLap: null, pole: null },
    { race: "Mexico City", position: null, points: null, fastestLap: null, pole: null },
    { race: "Brazil", position: null, points: null, fastestLap: null, pole: null },
    { race: "Las Vegas", position: null, points: null, fastestLap: null, pole: null },
    { race: "Qatar", position: null, points: null, fastestLap: null, pole: null },
    { race: "Abu Dhabi", position: null, points: null, fastestLap: null, pole: null }
  ]
},
];

export const getDriverById = (id: string): Driver | undefined =>
  drivers.find((d) => d.id === id);

export const getDriversByTeam = (teamId: string): Driver[] =>
  drivers.filter((d) => d.teamId === teamId);

export const getTopDrivers = (count: number = 10): Driver[] =>
  [...drivers].sort((a, b) => b.season.points - a.season.points).slice(0, count);

export const getTotalPoints = (driver: Driver) =>
  driver.seasonStats.reduce((sum, race) => sum + (race.points ?? 0), 0);