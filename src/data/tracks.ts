import { Track } from '../types';

export const tracks: Track[] = [
  {
    id: 'albert-park', name: 'Albert Park Circuit', circuit: 'Albert Park',
    location: 'Melbourne', country: 'Australia', length: '5.278 km', laps: 58,
    lapRecord: '1:20.235', lapRecordHolder: 'Charles Leclerc', firstGrandPrix: 1996,
    turns: 14, drsZones: 4,
    description: 'A semi-permanent street circuit around Melbourne\'s Albert Park Lake. The track features fast, flowing sections combined with tight chicanes, making it a challenging season opener.',
    sectorTimes: [
      { sector: 1, bestTime: '27.412', driver: 'Lando Norris' },
      { sector: 2, bestTime: '28.891', driver: 'Max Verstappen' },
      { sector: 3, bestTime: '23.932', driver: 'Oscar Piastri' },
    ],
    elevation: 'Flat', type: 'street',
    circuitSvg: "/circuits/Australia.svg"
  },
  {
    id: 'shanghai', name: 'Shanghai International Circuit', circuit: 'Shanghai',
    location: 'Shanghai', country: 'China', length: '5.451 km', laps: 56,
    lapRecord: '1:32.238', lapRecordHolder: 'Michael Schumacher', firstGrandPrix: 2004,
    turns: 16, drsZones: 2,
    description: 'Designed by Hermann Tilke, this circuit features one of the longest straights in F1 and a unique mix of tight corners and high-speed sections.',
    sectorTimes: [
      { sector: 1, bestTime: '29.123', driver: 'Max Verstappen' },
      { sector: 2, bestTime: '31.445', driver: 'Lando Norris' },
      { sector: 3, bestTime: '31.670', driver: 'Oscar Piastri' },
    ],
    elevation: 'Flat', type: 'permanent',
    circuitSvg: "/circuits/China.svg"
  },
  {
    id: 'suzuka', name: 'Suzuka International Circuit', circuit: 'Suzuka',
    location: 'Suzuka', country: 'Japan', length: '5.807 km', laps: 53,
    lapRecord: '1:30.983', lapRecordHolder: 'Lewis Hamilton', firstGrandPrix: 1987,
    turns: 18, drsZones: 1,
    description: 'One of the most beloved circuits in motorsport, Suzuka features the iconic figure-of-eight layout. The track rewards precision, commitment, and bravery.',
    sectorTimes: [
      { sector: 1, bestTime: '28.234', driver: 'Lando Norris' },
      { sector: 2, bestTime: '32.891', driver: 'Oscar Piastri' },
      { sector: 3, bestTime: '29.858', driver: 'Max Verstappen' },
    ],
    elevation: 'Varied', type: 'permanent',
    circuitSvg: "/circuits/Suzuka.svg"
  },
  {
    id: 'miami', name: 'Miami International Autodrome', circuit: 'Miami',
    location: 'Miami', country: 'USA', length: '5.412 km', laps: 57,
    lapRecord: '1:29.708', lapRecordHolder: 'Max Verstappen', firstGrandPrix: 2022,
    turns: 19, drsZones: 3,
    description: 'A temporary street circuit around the Hard Rock Stadium complex. The track combines tight technical sections with long straights.',
    sectorTimes: [
      { sector: 1, bestTime: '28.901', driver: 'Max Verstappen' },
      { sector: 2, bestTime: '30.234', driver: 'Lando Norris' },
      { sector: 3, bestTime: '30.573', driver: 'Oscar Piastri' },
    ],
    elevation: 'Flat', type: 'street',
    circuitSvg: "/circuits/Miami.svg"
  },
  {
    id: 'montreal', name: 'Circuit Gilles Villeneuve', circuit: 'Montreal',
    location: 'Montreal', country: 'Canada', length: '4.361 km', laps: 70,
    lapRecord: '1:13.078', lapRecordHolder: 'Valtteri Bottas', firstGrandPrix: 1978,
    turns: 14, drsZones: 2,
    description: 'Located on the man-made Ile Notre-Dame, this circuit is known for its high-speed nature and unforgiving walls.',
    sectorTimes: [
      { sector: 1, bestTime: '22.456', driver: 'George Russell' },
      { sector: 2, bestTime: '24.123', driver: 'Lewis Hamilton' },
      { sector: 3, bestTime: '26.499', driver: 'Lando Norris' },
    ],
    elevation: 'Flat', type: 'street',
    circuitSvg: "/circuits/Canada.svg"
  },
  {
    id: 'monaco', name: 'Circuit de Monaco', circuit: 'Monaco',
    location: 'Monte Carlo', country: 'Monaco', length: '3.337 km', laps: 78,
    lapRecord: '1:12.909', lapRecordHolder: 'Lewis Hamilton', firstGrandPrix: 1929,
    turns: 19, drsZones: 1,
    description: 'The crown jewel of Formula 1. The narrow, winding streets of Monte Carlo offer no margin for error.',
    sectorTimes: [
      { sector: 1, bestTime: '18.234', driver: 'Charles Leclerc' },
      { sector: 2, bestTime: '24.567', driver: 'Charles Leclerc' },
      { sector: 3, bestTime: '30.108', driver: 'Max Verstappen' },
    ],
    elevation: 'Varied', type: 'street',
    circuitSvg: "/circuits/Monaco.svg"
  },
  {
    id: 'barcelona', name: 'Circuit de Barcelona-Catalunya', circuit: 'Barcelona-Catalunya',
    location: 'Barcelona', country: 'Spain', length: '4.675 km', laps: 66,
    lapRecord: '1:16.330', lapRecordHolder: 'Max Verstappen', firstGrandPrix: 1991,
    turns: 16, drsZones: 2,
    description: 'A comprehensive test of a Formula 1 car with its mix of high, medium, and low-speed corners.',
    sectorTimes: [
      { sector: 1, bestTime: '25.678', driver: 'Lando Norris' },
      { sector: 2, bestTime: '27.345', driver: 'Max Verstappen' },
      { sector: 3, bestTime: '23.307', driver: 'Oscar Piastri' },
    ],
    elevation: 'Varied', type: 'permanent',
    circuitSvg: "/circuits/Barcelona.svg"
  },
  {
    id: 'red-bull-ring', name: 'Red Bull Ring', circuit: 'Red Bull Ring',
    location: 'Spielberg', country: 'Austria', length: '4.318 km', laps: 71,
    lapRecord: '1:05.619', lapRecordHolder: 'Carlos Sainz', firstGrandPrix: 1970,
    turns: 10, drsZones: 3,
    description: 'One of the shortest laps on the calendar, the Red Bull Ring is all about raw speed and minimal corners.',
    sectorTimes: [
      { sector: 1, bestTime: '21.234', driver: 'Max Verstappen' },
      { sector: 2, bestTime: '23.456', driver: 'Lando Norris' },
      { sector: 3, bestTime: '20.929', driver: 'Oscar Piastri' },
    ],
    elevation: 'Varied', type: 'permanent',
    circuitSvg: "/circuits/Austria.svg"
  },
  {
    id: 'silverstone', name: 'Silverstone Circuit', circuit: 'Silverstone',
    location: 'Silverstone', country: 'United Kingdom', length: '5.891 km', laps: 52,
    lapRecord: '1:27.097', lapRecordHolder: 'Max Verstappen', firstGrandPrix: 1950,
    turns: 18, drsZones: 2,
    description: 'The home of British motorsport and the first-ever World Championship Grand Prix.',
    sectorTimes: [
      { sector: 1, bestTime: '29.123', driver: 'Lando Norris' },
      { sector: 2, bestTime: '33.456', driver: 'Max Verstappen' },
      { sector: 3, bestTime: '24.518', driver: 'Oscar Piastri' },
    ],
    elevation: 'Flat', type: 'permanent',
    circuitSvg: "/circuits/Britian.svg"
  },
  {
    id: 'spa', name: 'Circuit de Spa-Francorchamps', circuit: 'Spa-Francorchamps',
    location: 'Spa', country: 'Belgium', length: '7.004 km', laps: 44,
    lapRecord: '1:46.286', lapRecordHolder: 'Valtteri Bottas', firstGrandPrix: 1925,
    turns: 19, drsZones: 2,
    description: 'The longest circuit on the calendar and one of the most challenging. Eau Rouge and Raidillon remain iconic.',
    sectorTimes: [
      { sector: 1, bestTime: '35.678', driver: 'Max Verstappen' },
      { sector: 2, bestTime: '38.901', driver: 'Lando Norris' },
      { sector: 3, bestTime: '31.707', driver: 'Oscar Piastri' },
    ],
    elevation: 'Varied', type: 'permanent',
    circuitSvg: "/circuits/Belgium.svg"
  },
  {
    id: 'hungaroring', name: 'Hungaroring', circuit: 'Hungaroring',
    location: 'Budapest', country: 'Hungary', length: '4.381 km', laps: 70,
    lapRecord: '1:16.627', lapRecordHolder: 'Lewis Hamilton', firstGrandPrix: 1986,
    turns: 14, drsZones: 2,
    description: 'Often called "Monaco without the walls," the Hungaroring is a tight, twisty circuit.',
    sectorTimes: [
      { sector: 1, bestTime: '24.567', driver: 'Lando Norris' },
      { sector: 2, bestTime: '26.789', driver: 'Max Verstappen' },
      { sector: 3, bestTime: '25.271', driver: 'Oscar Piastri' },
    ],
    elevation: 'Varied', type: 'permanent',
    circuitSvg: "/circuits/Hungary.svg"
  },
  {
    id: 'zandvoort', name: 'Circuit Zandvoort', circuit: 'Zandvoort',
    location: 'Zandvoort', country: 'Netherlands', length: '4.259 km', laps: 72,
    lapRecord: '1:11.097', lapRecordHolder: 'Lewis Hamilton', firstGrandPrix: 1952,
    turns: 14, drsZones: 2,
    description: 'A historic Dutch circuit with a unique character. The banked Tarzan corner is a standout feature.',
    sectorTimes: [
      { sector: 1, bestTime: '23.456', driver: 'Max Verstappen' },
      { sector: 2, bestTime: '25.678', driver: 'Lando Norris' },
      { sector: 3, bestTime: '21.963', driver: 'Oscar Piastri' },
    ],
    elevation: 'Varied', type: 'permanent',
    circuitSvg: "/circuits/Zandvoort.svg"
  },
  {
    id: 'monza', name: 'Autodromo Nazionale Monza', circuit: 'Monza',
    location: 'Monza', country: 'Italy', length: '5.793 km', laps: 53,
    lapRecord: '1:21.046', lapRecordHolder: 'Rubens Barrichello', firstGrandPrix: 1950,
    turns: 11, drsZones: 2,
    description: 'The Temple of Speed. Monza\'s long straights and tight chicanes create a unique challenge.',
    sectorTimes: [
      { sector: 1, bestTime: '27.123', driver: 'Lando Norris' },
      { sector: 2, bestTime: '28.456', driver: 'Max Verstappen' },
      { sector: 3, bestTime: '25.467', driver: 'Oscar Piastri' },
    ],
    elevation: 'Flat', type: 'permanent',
    circuitSvg: "/circuits/Monza.svg"
  },
  {
    id: 'madrid', name: 'Madring Circuit', circuit: 'Madring',
    location: 'Madrid', country: 'Spain', length: '5.475 km', laps: 62,
    lapRecord: 'TBD', lapRecordHolder: 'TBD', firstGrandPrix: 2026,
    turns: 22, drsZones: 3,
    description: 'A brand-new street circuit in the heart of Madrid. The Madring promises to be a spectacular addition.',
    sectorTimes: [
      { sector: 1, bestTime: 'TBD', driver: 'TBD' },
      { sector: 2, bestTime: 'TBD', driver: 'TBD' },
      { sector: 3, bestTime: 'TBD', driver: 'TBD' },
    ],
    elevation: 'Varied', type: 'street',
    circuitSvg: "/circuits/Madrid.svg"
  },
  {
    id: 'baku', name: 'Baku City Circuit', circuit: 'Baku',
    location: 'Baku', country: 'Azerbaijan', length: '6.003 km', laps: 51,
    lapRecord: '1:43.009', lapRecordHolder: 'Charles Leclerc', firstGrandPrix: 2016,
    turns: 20, drsZones: 2,
    description: 'A stunning street circuit combining the narrow Old City with a long blast along the Caspian Sea waterfront.',
    sectorTimes: [
      { sector: 1, bestTime: '31.234', driver: 'Max Verstappen' },
      { sector: 2, bestTime: '38.567', driver: 'Lando Norris' },
      { sector: 3, bestTime: '33.208', driver: 'Charles Leclerc' },
    ],
    elevation: 'Flat', type: 'street',
    circuitSvg: "/circuits/Azerbaijan.svg"
  },
  {
    id: 'singapore', name: 'Marina Bay Street Circuit', circuit: 'Singapore',
    location: 'Singapore', country: 'Singapore', length: '4.940 km', laps: 61,
    lapRecord: '1:35.867', lapRecordHolder: 'Lewis Hamilton', firstGrandPrix: 2008,
    turns: 19, drsZones: 3,
    description: 'The original night race. A physically demanding street circuit with 23 corners and unforgiving walls.',
    sectorTimes: [
      { sector: 1, bestTime: '26.789', driver: 'Lando Norris' },
      { sector: 2, bestTime: '28.123', driver: 'Max Verstappen' },
      { sector: 3, bestTime: '40.955', driver: 'Oscar Piastri' },
    ],
    elevation: 'Flat', type: 'street',
    circuitSvg: "/circuits/Singapore.svg"
  },
  {
    id: 'cota', name: 'Circuit of the Americas', circuit: 'COTA',
    location: 'Austin', country: 'USA', length: '5.513 km', laps: 56,
    lapRecord: '1:36.169', lapRecordHolder: 'Charles Leclerc', firstGrandPrix: 2012,
    turns: 20, drsZones: 2,
    description: 'A modern classic inspired by the best corners from around the world, including a steep uphill run to Turn 1.',
    sectorTimes: [
      { sector: 1, bestTime: '28.901', driver: 'Max Verstappen' },
      { sector: 2, bestTime: '32.456', driver: 'Lando Norris' },
      { sector: 3, bestTime: '34.812', driver: 'Oscar Piastri' },
    ],
    elevation: 'Varied', type: 'permanent',
    circuitSvg: "/circuits/COTA.svg"
  },
  {
    id: 'mexico-city', name: 'Autodromo Hermanos Rodriguez', circuit: 'Mexico City',
    location: 'Mexico City', country: 'Mexico', length: '4.304 km', laps: 71,
    lapRecord: '1:17.774', lapRecordHolder: 'Valtteri Bottas', firstGrandPrix: 1963,
    turns: 17, drsZones: 3,
    description: 'Set at 2,200m altitude, the thin air creates unique challenges for engines and aerodynamics.',
    sectorTimes: [
      { sector: 1, bestTime: '22.345', driver: 'Max Verstappen' },
      { sector: 2, bestTime: '24.678', driver: 'Lando Norris' },
      { sector: 3, bestTime: '30.751', driver: 'Oscar Piastri' },
    ],
    elevation: 'Flat', type: 'permanent',
    circuitSvg: "/circuits/Mexico.svg"
  },
  {
    id: 'interlagos', name: 'Autodromo Jose Carlos Pace', circuit: 'Interlagos',
    location: 'Sao Paulo', country: 'Brazil', length: '4.309 km', laps: 71,
    lapRecord: '1:10.540', lapRecordHolder: 'Valtteri Bottas', firstGrandPrix: 1973,
    turns: 15, drsZones: 2,
    description: 'A rollercoaster ride through the hills of Sao Paulo. Interlagos is a fan favorite for its atmosphere and racing.',
    sectorTimes: [
      { sector: 1, bestTime: '22.567', driver: 'Max Verstappen' },
      { sector: 2, bestTime: '24.123', driver: 'Lando Norris' },
      { sector: 3, bestTime: '23.850', driver: 'Oscar Piastri' },
    ],
    elevation: 'Varied', type: 'permanent',
    circuitSvg: "/circuits/Brazil.svg"
  },
  {
    id: 'las-vegas', name: 'Las Vegas Strip Circuit', circuit: 'Las Vegas',
    location: 'Las Vegas', country: 'USA', length: '6.201 km', laps: 50,
    lapRecord: '1:35.490', lapRecordHolder: 'Oscar Piastri', firstGrandPrix: 2023,
    turns: 17, drsZones: 2,
    description: 'A spectacular night race down the Las Vegas Strip. Long straights and tight corners create a unique challenge.',
    sectorTimes: [
      { sector: 1, bestTime: '30.234', driver: 'Max Verstappen' },
      { sector: 2, bestTime: '32.567', driver: 'Lando Norris' },
      { sector: 3, bestTime: '32.689', driver: 'Oscar Piastri' },
    ],
    elevation: 'Flat', type: 'street',
    circuitSvg: "/circuits/Las-Vegas.svg"
  },
  {
    id: 'losail', name: 'Losail International Circuit', circuit: 'Losail',
    location: 'Lusail', country: 'Qatar', length: '5.419 km', laps: 57,
    lapRecord: '1:24.319', lapRecordHolder: 'Max Verstappen', firstGrandPrix: 2021,
    turns: 16, drsZones: 2,
    description: 'A smooth, flowing permanent circuit with a mix of medium and high-speed corners.',
    sectorTimes: [
      { sector: 1, bestTime: '27.123', driver: 'Max Verstappen' },
      { sector: 2, bestTime: '29.456', driver: 'Lando Norris' },
      { sector: 3, bestTime: '27.740', driver: 'Oscar Piastri' },
    ],
    elevation: 'Flat', type: 'permanent',
    circuitSvg: "/circuits/Qatar.svg"
  },
  {
    id: 'yas-marina', name: 'Yas Marina Circuit', circuit: 'Yas Marina',
    location: 'Abu Dhabi', country: 'UAE', length: '5.281 km', laps: 58,
    lapRecord: '1:26.103', lapRecordHolder: 'Max Verstappen', firstGrandPrix: 2009,
    turns: 16, drsZones: 3,
    description: 'The season finale under the lights. A modern facility with a challenging hotel section and long straights.',
    sectorTimes: [
      { sector: 1, bestTime: '27.456', driver: 'Max Verstappen' },
      { sector: 2, bestTime: '28.789', driver: 'Lando Norris' },
      { sector: 3, bestTime: '29.858', driver: 'Oscar Piastri' },
    ],
    elevation: 'Flat', type: 'permanent',
    circuitSvg: "/circuits/Abu-Dhabi.svg"
  },
  {
    id: 'jeddah', name: 'Jeddah Corniche Circuit', circuit: 'Saudi-arabia',
    location: 'Jeddah', country: 'Saudi Arabia', length: ' km', laps: 0,
    lapRecord: '', lapRecordHolder: '', firstGrandPrix: 0,
    turns: 0, drsZones: 0,
    description: '',
    sectorTimes: [
      { sector: 1, bestTime: '', driver: '' },
      { sector: 2, bestTime: '', driver: '' },
      { sector: 3, bestTime: '', driver: '' },
    ],
    elevation: 'Flat', type: 'permanent',
    circuitSvg: "/circuits/Saudi-Arabia.svg"
  },
  {
    id: 'bahrain', name: 'Bahrain International Circuit', circuit: 'Bahrain',
    location: 'Sakhir', country: 'Bahrain', length: ' km', laps: 0,
    lapRecord: '', lapRecordHolder: '', firstGrandPrix: 0,
    turns: 0, drsZones: 0,
    description: '',
    sectorTimes: [
      { sector: 1, bestTime: '', driver: '' },
      { sector: 2, bestTime: '', driver: '' },
      { sector: 3, bestTime: '', driver: '' },
    ],
    elevation: 'Flat', type: 'permanent',
    circuitSvg: "/circuits/Bahrain.svg"
  },
];

export const getTrackById = (id: string): Track | undefined => tracks.find(t => t.id === id);
