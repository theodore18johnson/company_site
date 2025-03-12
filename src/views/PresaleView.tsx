import { useState } from "react";
import Button from "../components/common/Button";
import CountdownTimer from "../components/common/CountdownTimer";
import HorseLanding from "../assets/images/horse-landing.jpg";
import AstronautLanding from "../assets/images/astronaut-landing.jpg";
import CarLanding from "../assets/images/landing-car.jpg";
import PresaleLanding from "../assets/images/presale_landing.jpg";

type TokenUtility = {
  id: number;
  title: string;
  description: string;
};

type DistributionItem = {
  label: string;
  percentage: number;
  color: string;
};

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

type PresaleViewProps = {
  presaleData: {
    intro: {
      title: string;
      description: string;
      endDate: string;
    };
    tokenInfo: {
      symbol: string;
      totalSupply: string;
      presaleAllocation: string;
      initialPrice: string;
      expectedLaunchPrice: string;
      minPurchase: string;
      maxPurchase: string;
      acceptedCurrencies: string[];
    };
    tokenUtility: TokenUtility[];
    tokenomics: {
      distribution: DistributionItem[];
      vesting: {
        presale: string;
        team: string;
        development: string;
        marketing: string;
        ecosystem: string;
        reserve: string;
      };
    };
    faq: FAQ[];
  };
  walletInfo: {
    account: string | null;
    connectWallet: () => void;
    disconnectWallet: () => void;
    chainId: number | null;
    balance: string | null;
    isConnecting: boolean;
    error: string | null;
  };
  purchaseInfo: {
    purchaseAmount: number;
    setPurchaseAmount: (amount: number) => void;
    selectedCurrency: string;
    setSelectedCurrency: (currency: string) => void;
    estimatedCost: string;
    handlePurchase: () => void;
  };
};

const PresaleView = ({ presaleData, walletInfo }: PresaleViewProps) => {
  const { intro, tokenInfo, tokenUtility, tokenomics, faq } = presaleData;
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [purchaseAmount, setPurchaseAmount] = useState<number>(100);
  const [selectedCurrency, setSelectedCurrency] = useState<string>(
    tokenInfo.acceptedCurrencies[0]
  );
  const [_isPresaleEnded, setIsPresaleEnded] = useState<boolean>(false);

  const toggleFaq = (id: number) => {
    if (expandedFaq === id) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(id);
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 100) {
      setPurchaseAmount(value);
    }
  };

  const handleCountdownComplete = () => {
    setIsPresaleEnded(true);
  };

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <img
        src={HorseLanding}
        alt="Horse Background"
        className="fixed z-10 inset-0 w-full h-full object-cover opacity-80"
      />
      <section className=" relative z-20">
        <div className="absolute inset-0 presale-gradient z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-20 pt-28 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              {intro.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">{intro.description}</p>

            {/* Countdown Timer */}
            <CountdownTimer
              endDate={intro.endDate}
              onComplete={handleCountdownComplete}
            />
          </div>

          {/* Purchase Form */}
          <div className="max-w-md mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-primary-500/20">
              <h3 className="text-xl font-bold mb-4">Purchase DWAT Tokens</h3>

              <div className="mb-4">
                <label className="block text-gray-400 mb-2">
                  Amount (Min: 100 DWAT)
                </label>
                <input
                  type="number"
                  min="100"
                  value={purchaseAmount}
                  onChange={handleAmountChange}
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-400 mb-2">Pay With</label>
                <div className="flex gap-2">
                  {tokenInfo.acceptedCurrencies.map((currency) => (
                    <button
                      key={currency}
                      onClick={() => setSelectedCurrency(currency)}
                      className={`px-4 py-2 rounded-md ${
                        selectedCurrency === currency
                          ? "bg-primary-600 text-white"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                    >
                      {currency}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6 p-4 bg-gray-700/50 rounded-md relative z-30">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Price per DWAT:</span>
                  <span className="text-white">{tokenInfo.initialPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total:</span>
                  <span className="text-white">
                    $
                    {(
                      parseFloat(tokenInfo.initialPrice.replace("$", "")) *
                      purchaseAmount
                    ).toFixed(2)}
                  </span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full"
                onClick={() => {
                  if (!walletInfo.account) {
                    walletInfo.connectWallet();
                  } else {
                    walletInfo.disconnectWallet();
                  }
                }}
              >
                {walletInfo.account ? "Disconnect Wallet" : "Connect Wallet"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Token Info Section */}
      <section
        className="py-20 relative z-20 overflow-hidden"
        style={{
          backgroundImage: `url(${AstronautLanding})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 presale-gradient z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Token Information
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Everything you need to know about the DWAT token.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-primary-500/30">
              <h3 className="text-lg font-semibold mb-2 text-gray-100">
                Total Supply
              </h3>
              <p className="text-2xl font-bold text-primary-300">
                {tokenInfo.totalSupply}
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-primary-500/20">
              <h3 className="text-lg font-semibold mb-2">Presale Price</h3>
              <p className="text-2xl font-bold text-primary-400">
                {tokenInfo.initialPrice}
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-primary-500/20">
              <h3 className="text-lg font-semibold mb-2">Launch Price</h3>
              <p className="text-2xl font-bold text-primary-400">
                {tokenInfo.expectedLaunchPrice}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Utility Section */}
      <section className="py-20 relative z-20">
        <div className="absolute inset-0 presale-gradient z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Token Utility
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              DWAT is the backbone of the KingOverRoad ecosystem, powering all
              in-game transactions and activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tokenUtility.map((utility) => (
              <div
                key={utility.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 transition-transform hover:-translate-y-2 hover:shadow-xl border border-primary-500/20"
              >
                <h3 className="text-xl font-bold mb-3">{utility.title}</h3>
                <p className="text-gray-400">{utility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section
        className="py-20 relative z-20"
        style={{
          backgroundImage: `url(${CarLanding})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 presale-gradient z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Tokenomics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A transparent breakdown of DWAT token distribution and vesting
              schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Distribution Chart */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">
                Token Distribution
              </h3>
              <div className="relative w-64 h-64 mx-auto">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {tokenomics.distribution.map((item, index) => {
                    const previousSlices = tokenomics.distribution
                      .slice(0, index)
                      .reduce((sum, curr) => sum + curr.percentage, 0);
                    const startAngle = (previousSlices / 100) * 360;
                    const endAngle = ((previousSlices + item.percentage) / 100) * 360;
                    
                    const startRad = (startAngle - 90) * (Math.PI / 180);
                    const endRad = (endAngle - 90) * (Math.PI / 180);
                    
                    const x1 = 50 + 40 * Math.cos(startRad);
                    const y1 = 50 + 40 * Math.sin(startRad);
                    const x2 = 50 + 40 * Math.cos(endRad);
                    const y2 = 50 + 40 * Math.sin(endRad);
                    
                    const largeArcFlag = item.percentage > 50 ? 1 : 0;
                    
                    return (
                      <path
                        key={item.label}
                        d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        fill={item.color}
                      />
                    );
                  })}
                </svg>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {tokenomics.distribution.map((item) => (
                  <div key={item.label} className="flex items-center">
                    <div
                      className="w-4 h-4 rounded-full mr-2"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm">
                      {item.label}: {item.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vesting Schedule */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">
                Vesting Schedule
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-primary-500/20">
                  <h4 className="font-semibold mb-1">Presale</h4>
                  <p className="text-gray-400 text-sm">
                    {tokenomics.vesting.presale}
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-primary-500/20">
                  <h4 className="font-semibold mb-1">Team & Advisors</h4>
                  <p className="text-gray-400 text-sm">
                    {tokenomics.vesting.team}
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-primary-500/20">
                  <h4 className="font-semibold mb-1">Development</h4>
                  <p className="text-gray-400 text-sm">
                    {tokenomics.vesting.development}
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-primary-500/20">
                  <h4 className="font-semibold mb-1">Marketing</h4>
                  <p className="text-gray-400 text-sm">
                    {tokenomics.vesting.marketing}
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-primary-500/20">
                  <h4 className="font-semibold mb-1">Ecosystem Growth</h4>
                  <p className="text-gray-400 text-sm">
                    {tokenomics.vesting.ecosystem}
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-primary-500/20">
                  <h4 className="font-semibold mb-1">Reserve</h4>
                  <p className="text-gray-400 text-sm">
                    {tokenomics.vesting.reserve}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative z-20">
        <div className="absolute inset-0 presale-gradient z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about the DWAT token presale.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-primary-500/20"
              >
                <div
                  className="p-6 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleFaq(item.id)}
                >
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <div className="text-gray-400">
                    {expandedFaq === item.id ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                {expandedFaq === item.id && (
                  <div className="p-6 pt-0 border-t border-gray-700 mt-2">
                    <p className="text-gray-300">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 relative overflow-hidde z-20"
        style={{
          backgroundImage: `url(${PresaleLanding})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 presale-gradient z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Ready to Join the Presale?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't miss your chance to be part of the KingOverRoad ecosystem
              from the beginning.
            </p>
            <Button size="lg">Connect Wallet & Purchase</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PresaleView;
