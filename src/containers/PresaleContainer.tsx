import PresaleView from '../views/PresaleView';

// Mock data for presale page
const presaleData = {
  intro: {
    title: "DWAT Token Presale",
    description: "Be among the first to own DWAT, the native token that powers the KingOverRoad metaverse economy.",
    endDate: "2024-12-31T23:59:59Z"
  },
  tokenInfo: {
    symbol: "DWAT",
    totalSupply: "1,000,000,000",
    presaleAllocation: "300,000,000",
    initialPrice: "$0.05",
    expectedLaunchPrice: "$0.15",
    minPurchase: "100 DWAT",
    maxPurchase: "1,000,000 DWAT",
    acceptedCurrencies: ["ETH", "USDT", "USDC"]
  },
  tokenUtility: [
    {
      id: 1,
      title: "In-Game Purchases",
      description: "Use DWAT to buy land, items, weapons, and other in-game assets."
    },
    {
      id: 2,
      title: "Governance",
      description: "DWAT holders can vote on important game development decisions and features."
    },
    {
      id: 3,
      title: "Staking Rewards",
      description: "Stake your DWAT to earn passive income and exclusive in-game benefits."
    },
    {
      id: 4,
      title: "NFT Marketplace",
      description: "DWAT is the primary currency for buying and selling NFTs in the KingOverRoad marketplace."
    }
  ],
  tokenomics: {
    distribution: [
      { label: "Presale", percentage: 30, color: "#6a0dad" },
      { label: "Team & Advisors", percentage: 15, color: "#9b59b6" },
      { label: "Development", percentage: 20, color: "#8e44ad" },
      { label: "Marketing", percentage: 10, color: "#a569bd" },
      { label: "Ecosystem Growth", percentage: 15, color: "#bb8fce" },
      { label: "Reserve", percentage: 10, color: "#d2b4de" }
    ],
    vesting: {
      presale: "25% at TGE, 25% monthly for 3 months",
      team: "12-month cliff, then 25% quarterly",
      development: "10% at TGE, then 15% quarterly",
      marketing: "20% at TGE, then 20% quarterly",
      ecosystem: "10% at TGE, then 15% quarterly",
      reserve: "Locked for 24 months, then 10% quarterly"
    }
  },
  faq: [
    {
      id: 1,
      question: "When will the DWAT token be listed on exchanges?",
      answer: "We plan to list DWAT on major decentralized exchanges within 30 days after the presale ends, followed by centralized exchange listings in the subsequent months."
    },
    {
      id: 2,
      question: "How can I participate in the presale?",
      answer: "To participate, connect your wallet, select the amount of DWAT you wish to purchase, and complete the transaction using ETH, USDT, or USDC."
    },
    {
      id: 3,
      question: "Is there a vesting period for presale participants?",
      answer: "Yes, presale participants will receive 25% of their tokens at Token Generation Event (TGE), with the remaining 75% distributed equally over the following 3 months."
    },
    {
      id: 4,
      question: "What blockchain is DWAT built on?",
      answer: "DWAT is an ERC-20 token built on the Ethereum blockchain, ensuring security, transparency, and compatibility with major wallets and exchanges."
    },
    {
      id: 5,
      question: "Will there be a token audit?",
      answer: "Yes, our smart contracts have been audited by CertiK and Hacken to ensure security and reliability."
    }
  ]
};

const PresaleContainer = () => {
  return <PresaleView presaleData={presaleData} />;
};

export default PresaleContainer; 