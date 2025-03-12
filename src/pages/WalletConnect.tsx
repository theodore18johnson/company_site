import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../contexts/WalletContext';
import { motion } from 'framer-motion';
import MetamaskIcon from '../assets/svg/metamask.svg';
import CoinbaseIcon from '../assets/svg/coinbase.svg';

interface WalletOption {
  name: string;
  icon: string;
  installed: boolean;
  id: string;
}

const WalletConnect = () => {
  const navigate = useNavigate();
  const { account, connectWallet, error } = useWallet();
  const [availableWallets, setAvailableWallets] = useState<WalletOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // If already connected, redirect to presale
    if (account) {
      navigate('/presale');
    }
  }, [account, navigate]);

  useEffect(() => {
    const detectWallets = async () => {
      const wallets: WalletOption[] = [
        {
          name: 'MetaMask',
          icon: MetamaskIcon,
          installed: false,
          id: 'metamask'
        },
        {
          name: 'Coinbase Wallet',
          icon: CoinbaseIcon,
          installed: false,
          id: 'coinbase'
        },
        {
          name: 'WalletConnect',
          icon: 'https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Icon/Blue%20(Default)/Icon.svg',
          installed: true, // Always available as it's a protocol
          id: 'walletconnect'
        }
      ];

      // Detect MetaMask
      if (typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask) {
        wallets[0].installed = true;
      }

      // Detect Coinbase Wallet
      if (typeof window.ethereum !== 'undefined' && window.ethereum.isCoinbaseWallet) {
        wallets[1].installed = true;
      }

      setAvailableWallets(wallets);
      setIsLoading(false);
    };

    detectWallets();
  }, []);

  const handleWalletConnect = async (_walletId: string) => {
    try {
      await connectWallet();
      // Navigation to /presale will happen automatically due to the account effect
    } catch (err) {
      console.error('Failed to connect wallet:', err);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-900 px-4">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-primary-500/20"
        >
          <h1 className="text-2xl font-bold text-center mb-2">Connect Your Wallet</h1>
          <p className="text-gray-400 text-center mb-8">
            Connect your wallet to participate in the DWAT token presale
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/40 rounded-lg text-red-200">
              {error}
            </div>
          )}

          <div className="space-y-4">
            {availableWallets.map((wallet) => (
              <motion.button
                key={wallet.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleWalletConnect(wallet.id)}
                disabled={!wallet.installed}
                className={`w-full flex items-center justify-between p-4 rounded-lg border transition-all duration-200 ${
                  wallet.installed
                    ? 'bg-gray-700/50 border-primary-500/30 hover:border-primary-500/60'
                    : 'bg-gray-800/30 border-gray-700/30 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <img src={wallet.icon} alt={wallet.name} className="w-8 h-8" />
                  <span className="font-medium">{wallet.name}</span>
                </div>
                {!wallet.installed && (
                  <span className="text-sm text-gray-500">Not Installed</span>
                )}
              </motion.button>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              New to Ethereum?{' '}
              <a
                href="https://ethereum.org/en/wallets/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300"
              >
                Learn about wallets
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WalletConnect; 