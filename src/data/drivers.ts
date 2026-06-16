import { Driver } from "../types";

export interface DriverMeta {
  ergastId: string;

  base: Pick<
    Driver,
    | "id" | "number" | "firstName" | "lastName" | "team" | "teamId"
    | "teamColor" | "country" | "countryCode" | "image" | "bio"
  >;

  careerBefore: {
    wins: number;
    podiums: number;
    poles: number;
    fastestLaps: number;
    championships: number;
    starts: number;
  };
}

export const driversMeta: DriverMeta[] = [
  {
    ergastId: "antonelli",
    base: {
      id: "antonelli",
      number: 12,
      firstName: "Kimi",
      lastName: "Antonelli",
      team: "Mercedes",
      teamId: "mercedes",
      teamColor: "#27F4D2",
      country: "Italy",
      countryCode: "IT",
      image: "/drivers/Kimi_Antonelli.png",
      bio: "...",
    },
    careerBefore: {  
      wins: 0,
      podiums: 0,
      poles: 0,
      fastestLaps: 0,
      championships: 0,
      starts: 6      
    },
  },
  {
    ergastId: "hamilton",
    base: {
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
    },
    careerBefore: {    
      wins: 105,
      podiums: 200,
      poles: 104,
      fastestLaps: 65,
      championships: 7,
      starts: 368         
    },
  },
  {
    ergastId: "russell", 
    base: {
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
    },
    careerBefore: { 
      wins: 3,
      podiums: 12,
      poles: 4,
      fastestLaps: 8,
      championships: 0,
      starts: 130      
    },
  },
  {
    ergastId: "leclerc",
    base: {  
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
    },
    careerBefore: {
      wins: 8,
      podiums: 32,
      poles: 23,
      fastestLaps: 10,
      championships: 0, 
      starts: 160        
    },
  },
  {
    ergastId: "piastri",
    base: {
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
    },
    careerBefore: {   
      wins: 2,
      podiums: 8,
      poles: 0,
      fastestLaps: 3,
      championships: 0,
      starts: 60          
    },
  },
  {
    ergastId: "norris",
    base: {
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
    },
    careerBefore: {
      wins: 6,
      podiums: 22,
      poles: 7,
      fastestLaps: 12,
      championships: 1,
      starts: 138
    },
  },
  {
    ergastId: "verstappen",
    base: {
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
    },
    careerBefore: {
      wins: 62,
      podiums: 110,
      poles: 42,
      fastestLaps: 32,
      championships: 4,
      starts: 222
    },
  },
  {
    ergastId: "hadjar",
    base: {
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
    },
    careerBefore: {
      wins: 0,
      podiums: 1,
      poles: 0,
      fastestLaps: 0,
      championships: 0,
      starts: 24
    },
  },
  {
    ergastId: "lawson",
    base: {
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
    },
    careerBefore: {
      wins: 0,
      podiums: 0,
      poles: 0,
      fastestLaps: 0,
      championships: 0,
      starts: 28
    },
  },
  {
    ergastId: "gasly",
    base: {
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
    },
    careerBefore: {
      wins: 1,
      podiums: 5,
      poles: 0,
      fastestLaps: 3,
      championships: 0,
      starts: 168
    },
  },
  {
    ergastId: "bearman",
    base: {
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
    },
    careerBefore: {
      wins: 0,
      podiums: 0,
      poles: 0,
      fastestLaps: 0,
      championships: 0,
      starts: 24
    },
  },
  {
    ergastId: "colapinto",
    base: {
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
    },
    careerBefore: {
      wins: 0,
      podiums: 0,
      poles: 0,
      fastestLaps: 0,
      championships: 0,
      starts: 24
    },
  },
  {
    ergastId: "lindblad",
    base: {
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
    },
    careerBefore: {
      wins: 0,
      podiums: 0,
      poles: 0,
      fastestLaps: 0,
      championships: 0,
      starts: 6
    },
  },
  {
    ergastId: "sainz",
    base: {
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
    },
    careerBefore: {
      wins: 3,
      podiums: 20,
      poles: 5,
      fastestLaps: 4,
      championships: 0,
      starts: 210
    },
  },
  {
    ergastId: "albon",
    base: {
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
    },
    careerBefore: {
      wins: 0,
      podiums: 2,
      poles: 0,
      fastestLaps: 1,
      championships: 0,
      starts: 114
    },
  },
  {
    ergastId: "ocon",
    base: {
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
    },
    careerBefore: {
      wins: 1,
      podiums: 3,
      poles: 0,
      fastestLaps: 1,
      championships: 0,
      starts: 168
    },
  },
  {
    ergastId: "bortoleto",
    base: {
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
    },
    careerBefore: {
      wins: 0,
      podiums: 0,
      poles: 0,
      fastestLaps: 0,
      championships: 0,
      starts: 6
    },
  },
  {
    ergastId: "alonso",
    base: {
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
    },
    careerBefore: {
      wins: 32,
      podiums: 106,
      poles: 22,
      fastestLaps: 24,
      championships: 2,
      starts: 400
    },
  },
  {
    ergastId: "stroll",
    base: {
      id: "stroll",
      number: 18,
      firstName: "Lance",
      lastName: "Stroll",
      team: "Aston Martin",
      teamId: "aston-martin",
      teamColor: "#229971",
      country: "Canada",
      countryCode: "CA",
      image: "/drivers/LanceStroll.png",
      bio: "Lance Stroll continues with Aston Martin in 2026, working alongside Fernando Alonso as the team develops its new generation car.",
    },
    careerBefore: {
      wins: 0,
      podiums: 3,
      poles: 1,
      fastestLaps: 0,
      championships: 0,
      starts: 174
    },
  },
  {
    ergastId: "hulkenberg",
    base: {
      id: "hulkenberg",
      number: 27,
      firstName: "Nico",
      lastName: "Hulkenberg",
      team: "Audi",
      teamId: "audi",
      teamColor: "#52E252",
      country: "Germany",
      countryCode: "DE",
      image: "/drivers/Nico-Hulkenberg-F1-2026.webp",
      bio: "Nico Hulkenberg leads Audi's first Formula 1 campaign with his experience and consistency.",
    },
    careerBefore: {
      wins: 0,
      podiums: 0,
      poles: 1,
      fastestLaps: 2,
      championships: 0,
      starts: 246
    },
  },
  {
    ergastId: "perez",
    base: {
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
    },
    careerBefore: {
      wins: 6,
      podiums: 39,
      poles: 3,
      fastestLaps: 12,
      championships: 0,
      starts: 287
    },
  },
  {
    ergastId: "bottas",
    base: {
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
    },
    careerBefore: {
      wins: 10,
      podiums: 67,
      poles: 20,
      fastestLaps: 19,
      championships: 0,
      starts: 252
    },
  },
  
];

export const getDriverById = (id: string): DriverMeta | undefined =>
  driversMeta.find((d) => d.base.id === id);

export const getDriverByNumber = (number: number): DriverMeta | undefined =>
  driversMeta.find((d) => d.base.number === number);

export const getDriverByLastName = (lastName: string): DriverMeta | undefined =>
  driversMeta.find((d) => d.base.lastName === lastName);

export const getDriversByTeam = (teamId: string): DriverMeta[] =>
  driversMeta.filter((d) => d.base.teamId === teamId);

export const getTopDrivers = (count: number = 10): DriverMeta[] =>
  [...driversMeta].slice(0, count);