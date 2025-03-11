import AboutView from '../views/AboutView';

// Mock data for about page
const aboutData = {
  mission: {
    title: "Our Mission",
    description: "KingOverRoad aims to redefine the boundaries of metaverse gaming by creating a truly dynamic, player-driven world where every action has lasting consequences. Our mission is to build a medieval fantasy universe that evolves naturally through the Zeus AI engine and player interactions, creating a unique experience that blends cutting-edge technology with immersive storytelling."
  },
  story: {
    title: "The Story of Panguea",
    paragraphs: [
      "In the beginning, there was only stone, water, and sand. The continent of Panguea was barren, devoid of life and purpose. Then came the Zeus AI engine, which simulated billions of years of natural evolution in this primitive world.",
      "Through constant interactions between these elements, life began to form. The continent split into three major landmasses and thousands of islands. Different races emerged - Humans with their kingdoms and feudal systems, Orcs with their tribal societies in the mountains, Elves with their connection to nature, and Dwarves with their mastery of crafting.",
      "For centuries, these races have coexisted, sometimes in peace, often in conflict. The continent has seen periods of unification under different banners, only to fragment again as empires crumbled.",
      "Now, a new era begins - one where you, the player, will shape the future of Panguea. Will you unite the continent under your rule? Will you forge alliances or sow discord? The choice is yours in the world of KingOverRoad."
    ]
  },
  team: [
    {
      id: 1,
      name: "Alex Morgan",
      role: "Founder & CEO",
      bio: "Former game developer at major studios with 15 years of experience in MMORPGs.",
      imageSrc: "/images/team/alex-morgan.jpg"
    },
    {
      id: 2,
      name: "Sophia Chen",
      role: "Chief Technology Officer",
      bio: "AI specialist with a background in procedural generation and virtual economies.",
      imageSrc: "/images/team/sophia-chen.jpg"
    },
    {
      id: 3,
      name: "Marcus Williams",
      role: "Creative Director",
      bio: "Award-winning fantasy author and game narrative designer.",
      imageSrc: "/images/team/marcus-williams.jpg"
    },
    {
      id: 4,
      name: "Elena Rodriguez",
      role: "Blockchain Lead",
      bio: "Cryptocurrency expert who previously launched two successful gaming tokens.",
      imageSrc: "/images/team/elena-rodriguez.jpg"
    }
  ],
  roadmap: [
    {
      id: 1,
      phase: "Phase 1: Foundation",
      timeline: "Q1-Q2 2023",
      milestones: [
        "Zeus AI engine development",
        "Initial continent generation",
        "DWAT token creation",
        "Whitepaper release"
      ],
      completed: true
    },
    {
      id: 2,
      phase: "Phase 2: Early Access",
      timeline: "Q3-Q4 2023",
      milestones: [
        "Token presale",
        "Alpha testing with limited player base",
        "Implementation of basic game mechanics",
        "First kingdom establishment"
      ],
      completed: true
    },
    {
      id: 3,
      phase: "Phase 3: Expansion",
      timeline: "Q1-Q2 2024",
      milestones: [
        "Beta launch with all four races",
        "Introduction of crafting and economy systems",
        "Land ownership and castle building",
        "Marketplace for NFT assets"
      ],
      completed: false
    },
    {
      id: 4,
      phase: "Phase 4: Full Release",
      timeline: "Q3-Q4 2024",
      milestones: [
        "Official game launch",
        "Introduction of guild systems",
        "Continental warfare mechanics",
        "Cross-platform support"
      ],
      completed: false
    }
  ]
};

const AboutContainer = () => {
  return <AboutView aboutData={aboutData} />;
};

export default AboutContainer; 