import { useState, useEffect } from 'react';
import Button from '../components/common/Button';

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
};

const PresaleView = ({ presaleData }: PresaleViewProps) => {
  const { intro, tokenInfo, tokenUtility, tokenomics, faq } = presaleData;
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [purchaseAmount, setPurchaseAmount] = useState<number>(100);
  const [selectedCurrency, setSelectedCurrency] = useState<string>(tokenInfo.acceptedCurrencies[0]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(intro.endDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [intro.endDate]);

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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">{intro.title}</h1>
            <p className="text-xl text-gray-300 mb-8">
              {intro.description}
            </p>
            
            {/* Countdown Timer */}
            <div className="mb-12">
              <p className="text-lg mb-4">Presale Ends In:</p>
              <div className="flex justify-center gap-4">
                <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 w-20">
                  <div className="text-3xl font-bold">{timeLeft.days}</div>
                  <div className="text-sm text-gray-400">Days</div>
                </div>
                <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 w-20">
                  <div className="text-3xl font-bold">{timeLeft.hours}</div>
                  <div className="text-sm text-gray-400">Hours</div>
                </div>
                <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 w-20">
                  <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-sm text-gray-400">Minutes</div>
                </div>
                <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 w-20">
                  <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                  <div className="text-sm text-gray-400">Seconds</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Purchase Form */}
          <div className="max-w-md mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4">Purchase DWAT Tokens</h3>
              
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Amount (Min: 100 DWAT)</label>
                <input
                  type="number"
                  min="100"
                  value={purchaseAmount}
                  onChange={handleAmountChange}
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {currency}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6 p-4 bg-gray-700/50 rounded-md">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Price per DWAT:</span>
                  <span className="text-white">{tokenInfo.initialPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total:</span>
                  <span className="text-white">${(parseFloat(tokenInfo.initialPrice.replace('$', '')) * purchaseAmount).toFixed(2)}</span>
                </div>
              </div>
              
              <Button size="lg" className="w-full">
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Token Info Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Token Information</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about the DWAT token.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-lg font-semibold mb-2">Symbol</h3>
              <p className="text-2xl font-bold text-purple-400">{tokenInfo.symbol}</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-lg font-semibold mb-2">Total Supply</h3>
              <p className="text-2xl font-bold text-purple-400">{tokenInfo.totalSupply}</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-lg font-semibold mb-2">Presale Price</h3>
              <p className="text-2xl font-bold text-purple-400">{tokenInfo.initialPrice}</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-lg font-semibold mb-2">Expected Launch Price</h3>
              <p className="text-2xl font-bold text-purple-400">{tokenInfo.expectedLaunchPrice}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Utility Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Token Utility</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              DWAT is the backbone of the KingOverRoad ecosystem, powering all in-game transactions and activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tokenUtility.map((utility) => (
              <div 
                key={utility.id} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 transition-transform hover:-translate-y-2 hover:shadow-xl border border-purple-500/20"
              >
                <h3 className="text-xl font-bold mb-3">{utility.title}</h3>
                <p className="text-gray-400">{utility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Tokenomics</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A transparent breakdown of DWAT token distribution and vesting schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Distribution Chart */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Token Distribution</h3>
              <div className="relative w-64 h-64 mx-auto">
                {/* This is a simplified representation - in a real app, you'd use a chart library */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-purple-600 to-blue-600"></div>
                </div>
                <div className="absolute inset-4 rounded-full bg-gray-900"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold">DWAT</span>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                {tokenomics.distribution.map((item) => (
                  <div key={item.label} className="flex items-center">
                    <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm">{item.label}: {item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Vesting Schedule */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Vesting Schedule</h3>
              <div className="space-y-4">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20">
                  <h4 className="font-semibold mb-1">Presale</h4>
                  <p className="text-gray-400 text-sm">{tokenomics.vesting.presale}</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20">
                  <h4 className="font-semibold mb-1">Team & Advisors</h4>
                  <p className="text-gray-400 text-sm">{tokenomics.vesting.team}</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20">
                  <h4 className="font-semibold mb-1">Development</h4>
                  <p className="text-gray-400 text-sm">{tokenomics.vesting.development}</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20">
                  <h4 className="font-semibold mb-1">Marketing</h4>
                  <p className="text-gray-400 text-sm">{tokenomics.vesting.marketing}</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20">
                  <h4 className="font-semibold mb-1">Ecosystem Growth</h4>
                  <p className="text-gray-400 text-sm">{tokenomics.vesting.ecosystem}</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20">
                  <h4 className="font-semibold mb-1">Reserve</h4>
                  <p className="text-gray-400 text-sm">{tokenomics.vesting.reserve}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about the DWAT token presale.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item) => (
              <div 
                key={item.id} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20"
              >
                <div 
                  className="p-6 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleFaq(item.id)}
                >
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <div className="text-gray-400">
                    {expandedFaq === item.id ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Ready to Join the Presale?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't miss your chance to be part of the KingOverRoad ecosystem from the beginning.
            </p>
            <Button size="lg">
              Connect Wallet & Purchase
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PresaleView; 