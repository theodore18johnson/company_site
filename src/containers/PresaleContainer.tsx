import { useState, useEffect } from 'react';
import PresaleView from '../views/PresaleView';
import { useWallet } from '../contexts/WalletContext';

// Mock data for presale page
const presaleData = {
  intro: {
    title: "DWAT Token Presale",
    description: "Be among the first to own DWAT, the native token that powers the KingOverRoad metaverse economy.",
    endDate: "2025-06-30T23:59:59Z"
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
      { label: "Presale", percentage: 30, color: "#ffeb00" },
      { label: "Team & Advisors", percentage: 15, color: "#ffd700" },
      { label: "Development", percentage: 20, color: "#ffe135" },
      { label: "Marketing", percentage: 10, color: "#f9e79f" },
      { label: "Ecosystem Growth", percentage: 15, color: "#f7dc6f" },
      { label: "Reserve", percentage: 10, color: "#f4d03f" }
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
  const { 
    account, 
    chainId, 
    balance, 
    isConnecting, 
    error, 
    connectWallet, 
    disconnectWallet 
  } = useWallet();
  
  const [purchaseAmount, setPurchaseAmount] = useState<number>(0);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('ETH');
  const [estimatedCost, setEstimatedCost] = useState<string>('0');

  // Calculate estimated cost when purchase amount or currency changes
  useEffect(() => {
    if (purchaseAmount) {
      // Mock exchange rates (in a real app, you'd get these from an API)
      const rates = {
        ETH: 0.00003, // 1 DWAT = 0.00003 ETH
        USDT: 0.05,   // 1 DWAT = $0.05 USDT
        USDC: 0.05    // 1 DWAT = $0.05 USDC
      };
      
      const amount = purchaseAmount;
      if (!isNaN(amount)) {
        const cost = amount * rates[selectedCurrency as keyof typeof rates];
        setEstimatedCost(cost.toFixed(selectedCurrency === 'ETH' ? 6 : 2));
      }
    } else {
      setEstimatedCost('0');
    }
  }, [purchaseAmount, selectedCurrency]);

  const handlePurchase = async () => {
    // In a real implementation, this would interact with your presale smart contract
    alert(`This would initiate a purchase of ${purchaseAmount} DWAT tokens for ${estimatedCost} ${selectedCurrency}`);
    
    // Example of what a real implementation might look like:
    /*
    try {
      if (!account) {
        await connectWallet();
      }
      
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      
      // Connect to your presale contract
      const presaleContract = new ethers.Contract(PRESALE_CONTRACT_ADDRESS, PRESALE_ABI, signer);
      
      // Call the purchase function on your contract
      const tx = await presaleContract.purchaseTokens({
        value: ethers.utils.parseEther(estimatedCost) // if purchasing with ETH
      });
      
      await tx.wait();
      alert('Purchase successful!');
    } catch (err) {
      console.error('Purchase failed:', err);
      alert(`Purchase failed: ${err.message}`);
    }
    */
  };

  const walletInfo = {
    account,
    chainId,
    balance,
    isConnecting,
    error,
    connectWallet,
    disconnectWallet
  };

  const purchaseInfo = {
    purchaseAmount,
    setPurchaseAmount,
    selectedCurrency,
    setSelectedCurrency,
    estimatedCost,
    handlePurchase
  };

  return (
    <PresaleView 
      presaleData={presaleData} 
      walletInfo={walletInfo}
      purchaseInfo={purchaseInfo}
    />
  );
};

export default PresaleContainer; 