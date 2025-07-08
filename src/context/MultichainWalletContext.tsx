import React, { createContext, useContext, useMemo, ReactNode } from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
  LedgerWalletAdapter,
  TrustWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { Connection } from '@solana/web3.js';

export type ChainType = 'bsc' | 'solana';

interface MultichainWalletContextType {
  // BSC (Wagmi) state
  bscAddress: string | undefined;
  bscIsConnected: boolean;
  bscDisconnect: any;
  
  // Solana state
  solanaWallet: any;
  solanaConnection: Connection | undefined;
  solanaAddress: string | undefined;
  solanaIsConnected: boolean;
  
  // Chain selection
  selectedChain: ChainType;
  setSelectedChain: (chain: ChainType) => void;
  
  // Helper functions
  getCurrentAddress: () => string | undefined;
  getCurrentIsConnected: () => boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => Promise<void>;
}

const MultichainWalletContext = createContext<MultichainWalletContextType | undefined>(undefined);

interface MultichainWalletProviderProps {
  children: ReactNode;
}

export const MultichainWalletProvider: React.FC<MultichainWalletProviderProps> = ({ children }) => {
  // BSC (Wagmi) hooks
  const { address: bscAddress, isConnected: bscIsConnected } = useAccount();
  const { disconnect: bscDisconnect } = useDisconnect();
  
  // Solana hooks
  const solanaWallet = useAnchorWallet();
  const { connection: solanaConnection } = useConnection();
  
  // Chain selection state
  const [selectedChain, setSelectedChain] = React.useState<ChainType>('bsc');
  
  // Computed values
  const solanaAddress = solanaWallet?.publicKey?.toBase58();
  const solanaIsConnected = !!solanaWallet?.publicKey;
  
  // Helper functions
  const getCurrentAddress = () => {
    return selectedChain === 'bsc' ? bscAddress : solanaAddress;
  };
  
  const getCurrentIsConnected = () => {
    return selectedChain === 'bsc' ? bscIsConnected : solanaIsConnected;
  };
  
  const connectWallet = async () => {
    if (selectedChain === 'bsc') {
      // BSC connection is handled by RainbowKit
      return;
    } else {
      // Solana connection is handled by wallet adapter
      return;
    }
  };
  
  const disconnectWallet = async () => {
    if (selectedChain === 'bsc') {
      bscDisconnect();
    } else {
      // Solana disconnection is handled by wallet adapter
      return;
    }
  };
  
  const contextValue = useMemo(() => ({
    // BSC state
    bscAddress,
    bscIsConnected,
    bscDisconnect,
    
    // Solana state
    solanaWallet,
    solanaConnection,
    solanaAddress,
    solanaIsConnected,
    
    // Chain selection
    selectedChain,
    setSelectedChain,
    
    // Helper functions
    getCurrentAddress,
    getCurrentIsConnected,
    connectWallet,
    disconnectWallet,
  }), [
    bscAddress,
    bscIsConnected,
    bscDisconnect,
    solanaWallet,
    solanaConnection,
    solanaAddress,
    solanaIsConnected,
    selectedChain,
  ]);
  
  return (
    <MultichainWalletContext.Provider value={contextValue}>
      {children}
    </MultichainWalletContext.Provider>
  );
};

export const useMultichainWallet = () => {
  const context = useContext(MultichainWalletContext);
  if (context === undefined) {
    throw new Error('useMultichainWallet must be used within a MultichainWalletProvider');
  }
  return context;
}; 