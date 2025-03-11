import CareerView from '../views/CareerView';

// Mock data for careers page
const careerData = {
  intro: {
    title: "Join Our Team",
    description: "At KingOverRoad, we're building the future of metaverse gaming. We're looking for passionate, talented individuals who want to push the boundaries of what's possible in virtual worlds."
  },
  benefits: [
    {
      id: 1,
      title: "Remote-First Culture",
      description: "Work from anywhere in the world. Our team is globally distributed and we believe in hiring the best talent regardless of location."
    },
    {
      id: 2,
      title: "Competitive Compensation",
      description: "We offer competitive salaries, equity options, and DWAT token allocations as part of our compensation packages."
    },
    {
      id: 3,
      title: "Cutting-Edge Technology",
      description: "Work with the latest technologies in gaming, AI, and blockchain to create experiences that have never been built before."
    },
    {
      id: 4,
      title: "Growth Opportunities",
      description: "We're growing rapidly, which means plenty of opportunities for career advancement and skill development."
    }
  ],
  openings: [
    {
      id: 1,
      title: "Senior Game Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "We're looking for an experienced game developer with a strong background in Unity or Unreal Engine to help build the core gameplay systems for KingOverRoad.",
      requirements: [
        "5+ years of experience in game development",
        "Strong proficiency in C++ or C#",
        "Experience with Unity or Unreal Engine",
        "Understanding of multiplayer game architecture",
        "Passion for RPGs and medieval fantasy games"
      ],
      responsibilities: [
        "Design and implement core gameplay systems",
        "Optimize performance for large-scale multiplayer interactions",
        "Collaborate with artists and designers to bring game features to life",
        "Participate in code reviews and maintain high code quality standards"
      ]
    },
    {
      id: 2,
      title: "Blockchain Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Join our blockchain team to develop and maintain the DWAT token ecosystem and NFT marketplace that powers the KingOverRoad economy.",
      requirements: [
        "3+ years of experience in blockchain development",
        "Experience with Ethereum, Solidity, and Web3.js",
        "Understanding of NFT standards (ERC-721, ERC-1155)",
        "Knowledge of DeFi protocols and tokenomics",
        "Strong problem-solving skills"
      ],
      responsibilities: [
        "Develop and maintain smart contracts for the DWAT ecosystem",
        "Build secure and efficient NFT marketplace functionality",
        "Implement token staking and reward mechanisms",
        "Ensure security best practices in all blockchain implementations"
      ]
    },
    {
      id: 3,
      title: "3D Character Artist",
      department: "Art",
      location: "Remote",
      type: "Full-time",
      description: "Create stunning character models for the diverse races and classes in the KingOverRoad universe.",
      requirements: [
        "Portfolio demonstrating high-quality 3D character work",
        "Proficiency in ZBrush, Maya, Blender, or similar tools",
        "Experience with PBR texturing workflows",
        "Understanding of game-ready asset optimization",
        "Passion for fantasy art and character design"
      ],
      responsibilities: [
        "Create detailed 3D character models for various races and classes",
        "Design and implement armor and clothing systems",
        "Collaborate with animators to ensure models are rigged properly",
        "Optimize assets for game performance"
      ]
    },
    {
      id: 4,
      title: "Community Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Build and nurture our growing community of players, investors, and enthusiasts across various platforms.",
      requirements: [
        "2+ years of experience in community management for games or crypto projects",
        "Excellent communication and writing skills",
        "Experience with Discord, Twitter, and other social platforms",
        "Understanding of blockchain gaming and NFTs",
        "Ability to work in a fast-paced environment"
      ],
      responsibilities: [
        "Manage and grow our Discord, Twitter, and other community channels",
        "Create engaging content to keep the community informed and excited",
        "Gather feedback from the community and relay it to the development team",
        "Organize community events, AMAs, and contests"
      ]
    }
  ]
};

const CareerContainer = () => {
  return <CareerView careerData={careerData} />;
};

export default CareerContainer; 