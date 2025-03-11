import LandingView from '../views/LandingView';
import Human from '../assets/images/human.jpg';
import Orc from '../assets/images/orc.jpg';
import Elf from '../assets/images/elf.jpg';
import Dwarf from '../assets/images/dwarf.jpg';
import BgHuman from '../assets/images/bg/human.png';
import BgOrc from '../assets/images/bg/orcs.jpg';
import BgElf from '../assets/images/bg/elves.jpg';
import BgDwarf from '../assets/images/bg/dwarf.jpg';
// Import icons from react-icons
import { 
  FaHandshake, FaCoins, FaChessKnight, 
  FaDumbbell, FaHiking, FaBabyCarriage,
  FaLeaf, FaBullseye, FaHourglassHalf,
  FaHammer, FaGem, FaShieldAlt,
  FaCrown, FaMountain, FaTree, FaWarehouse
} from 'react-icons/fa';
import { GiCastle, GiCaveEntrance, GiElfEar, GiAnvil } from 'react-icons/gi';

// Mock data for video carousel
const videoSlides = [
  {
    id: 1,
    videoSrc: '/videos/kingdom-trailer.mp4', // Mock video path
    thumbnail: BgHuman,
    title: 'Welcome to KingOverRoad',
    description: 'Experience the thrill of medieval fantasy in a world shaped by the Zeus AI engine.'
  },
  {
    id: 2,
    videoSrc: '/videos/battle-scene.mp4', // Mock video path
    thumbnail: BgOrc,
    title: 'Epic Battles Await',
    description: 'Lead armies, conquer territories, and unify the continent of Panguea.'
  },
  {
    id: 3,
    videoSrc: '/videos/races-showcase.mp4', // Mock video path
    thumbnail: BgElf,
    title: 'Choose Your Race',
    description: 'Play as Humans, Orcs, Elves, or Dwarves - each with unique abilities and cultures.'
  },
  {
    id: 4,
    videoSrc: '/videos/token-economy.mp4', // Mock video path
    thumbnail: BgDwarf,
    title: 'Powered by DWAT Token',
    description: 'The future of our metaverse economy is secured on the blockchain.'
  }
];

// Mock data for features section
const features = [
  {
    id: 1,
    title: 'Zeus AI Engine',
    description: 'Our proprietary AI simulates billions of years of continental evolution, creating a truly organic world.',
    icon: 'brain'
  },
  {
    id: 2,
    title: 'Multiple Races',
    description: 'Choose from Humans, Orcs, Elves, or Dwarves - each with unique abilities and cultures.',
    icon: 'users'
  },
  {
    id: 3,
    title: 'DWAT Token',
    description: 'Our blockchain-based economy ensures fair play and real ownership of in-game assets.',
    icon: 'coin'
  },
  {
    id: 4,
    title: 'Dynamic World',
    description: 'The continent of Panguea evolves naturally, with kingdoms rising and falling based on player actions.',
    icon: 'globe'
  }
];

// Mock data for races section with enhanced luxury styling
const races = [
  {
    id: 1,
    name: 'Humans',
    description: 'The most adaptable race, humans have established five major kingdoms across the continent.',
    imageSrc: Human,
    backgroundImage: BgHuman,
    emblem: <FaCrown />,
    accentColor: '#d4af37', // Royal gold
    secondaryColor: '#800020', // Burgundy
    habitat: 'Kingdoms & Castles',
    habitatIcon: <GiCastle />,
    strengths: [
      { name: 'Diplomacy', icon: <FaHandshake />, description: 'Form alliances with other races and kingdoms' },
      { name: 'Commerce', icon: <FaCoins />, description: 'Generate more gold from trade routes and markets' },
      { name: 'Military Strategy', icon: <FaChessKnight />, description: 'Tactical advantage in large-scale battles' }
    ],
    quote: "Unity through diversity, strength through alliance."
  },
  {
    id: 2,
    name: 'Orcs',
    description: 'Physically powerful but less civilized, orcs excel in combat and hunting in mountainous regions.',
    imageSrc: Orc,
    backgroundImage: BgOrc,
    emblem: <FaMountain />,
    accentColor: '#8B0000', // Dark red
    secondaryColor: '#2F4F4F', // Dark slate gray
    habitat: 'Mountains & Strongholds',
    habitatIcon: <GiCaveEntrance />,
    strengths: [
      { name: 'Physical Strength', icon: <FaDumbbell />, description: 'Deal more damage in close combat' },
      { name: 'Hunting', icon: <FaHiking />, description: 'Superior tracking and resource gathering' },
      { name: 'Reproduction', icon: <FaBabyCarriage />, description: 'Faster population growth and recovery' }
    ],
    quote: "Strength is our birthright, conquest our destiny."
  },
  {
    id: 3,
    name: 'Dwarves',
    description: 'Expert craftsmen specializing in blacksmithing, dwarves create the finest weapons and armor.',
    imageSrc: Dwarf,
    backgroundImage: BgDwarf,
    emblem: <FaWarehouse />,
    accentColor: '#B87333', // Copper
    secondaryColor: '#36454F', // Charcoal
    habitat: 'Mountain Halls & Forges',
    habitatIcon: <GiAnvil />,
    strengths: [
      { name: 'Crafting', icon: <FaHammer />, description: 'Create superior weapons, armor and structures' },
      { name: 'Mining', icon: <FaGem />, description: 'Extract more resources from mineral deposits' },
      { name: 'Resilience', icon: <FaShieldAlt />, description: 'Greater resistance to damage and magical effects' }
    ],
    quote: "From the mountain's heart, we forge our legacy."
  },
  {
    id: 4,
    name: 'Elves',
    description: 'Masters of nature, elves can be found in forests and seas, with unique abilities to manipulate natural elements.',
    imageSrc: Elf,
    backgroundImage: BgElf,
    emblem: <FaTree />,
    accentColor: '#228B22', // Forest green
    secondaryColor: '#4682B4', // Steel blue
    habitat: 'Ancient Forests & Coastal Havens',
    habitatIcon: <GiElfEar />,
    strengths: [
      { name: 'Nature Magic', icon: <FaLeaf />, description: 'Harness the power of nature for healing and defense' },
      { name: 'Archery', icon: <FaBullseye />, description: 'Unmatched accuracy with ranged weapons' },
      { name: 'Longevity', icon: <FaHourglassHalf />, description: 'Wisdom from centuries of life experience' }
    ],
    quote: "In harmony with nature lies our eternal strength."
  },
];

const LandingContainer = () => {
  return <LandingView videoSlides={videoSlides} features={features} races={races} />;
};

export default LandingContainer;
