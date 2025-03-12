import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { ethers } from 'ethers';

interface WalletContextType {
  account: string | null;
  chainId: number | null;
  balance: string | null;
  isConnecting: boolean;
  error: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = async () => {
    setIsConnecting(true);
    setError(null);

    try {
      if (!window.ethereum) {
        throw new Error('MetaMask is not installed. Please install MetaMask to connect your wallet.');
      }

      const provider = new ethers.BrowserProvider(window.ethereum as ethers.Eip1193Provider);
      const accounts = await provider.send('eth_requestAccounts', []);
      
      if (accounts.length === 0) {
        throw new Error('No accounts found. Please unlock your MetaMask wallet.');
      }

      const network = await provider.getNetwork();
      const accountBalance = await provider.getBalance(accounts[0]);
      
      setAccount(accounts[0]);
      setChainId(Number(network.chainId));
      setBalance(ethers.formatEther(accountBalance));
    } catch (err: any) {
      console.error('Error connecting wallet:', err);
      setError(err.message || 'Failed to connect wallet');
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setChainId(null);
    setBalance(null);
    setError(null);
  };

  // Listen for account changes
  useEffect(() => {
    if (window.ethereum) {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length === 0) {
          // User disconnected their wallet
          disconnectWallet();
        } else if (accounts[0] !== account) {
          setAccount(accounts[0]);
          updateBalance(accounts[0]);
        }
      };

      const handleChainChanged = (chainIdHex: string) => {
        setChainId(parseInt(chainIdHex, 16));
      };

      const updateBalance = async (address: string) => {
        try {
          if (!window.ethereum) return;
          
          const provider = new ethers.BrowserProvider(window.ethereum as ethers.Eip1193Provider);
          const accountBalance = await provider.getBalance(address);
          setBalance(ethers.formatEther(accountBalance));
        } catch (err) {
          console.error('Error updating balance:', err);
        }
      };

      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);

      return () => {
        if (window.ethereum) {
          window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
          window.ethereum.removeListener('chainChanged', handleChainChanged);
        }
      };
    }
  }, [account]);

  const value = {
    account,
    chainId,
    balance,
    isConnecting,
    error,
    connectWallet,
    disconnectWallet
  };

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
}; 