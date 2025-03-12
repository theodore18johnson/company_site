export interface WalletInfo {
  account: string | null;
  chainId?: number | null;
  balance: string | null;
  isConnecting: boolean;
  error: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

export interface PurchaseInfo {
  purchaseAmount: string;
  setPurchaseAmount: (amount: string) => void;
  selectedCurrency: string;
  setSelectedCurrency: (currency: string) => void;
  estimatedCost: string;
  handlePurchase: () => void;
} 