import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useAccount } from 'wagmi';
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';

export type ChainType = 'bsc' | 'solana';

interface MultichainContextType {
  // Chain selection
  selectedChain: ChainType;
  setSelectedChain: (chain: ChainType) => void;
  
  // BSC (Wagmi) state
  bscAddress: string | undefined;
  bscIsConnected: boolean;
  
  // Solana state
  solanaWallet: any;
  solanaAddress: string | undefined;
  solanaIsConnected: boolean;
  solanaConnection: any;
  
  // Helper functions
  getCurrentAddress: () => string | undefined;
  getCurrentIsConnected: () => boolean;
}

const MultichainContext = createContext<MultichainContextType | undefined>(undefined);

interface MultichainProviderProps {
  children: ReactNode;
}

export const MultichainProvider: React.FC<MultichainProviderProps> = ({ children }) => {
  // BSC (Wagmi) hooks
  const { address: bscAddress, isConnected: bscIsConnected } = useAccount();
  
  // Chain selection state
  const [selectedChain, setSelectedChain] = useState<ChainType>('bsc');
  
  // Solana hooks
  const solanaWallet = useAnchorWallet();
  const { connection: solanaConnection } = useConnection();
  const solanaAddress = solanaWallet?.publicKey?.toBase58();
  const solanaIsConnected = !!solanaWallet?.publicKey;
  
  // Helper functions
  const getCurrentAddress = () => {
    return selectedChain === 'bsc' ? bscAddress : solanaAddress;
  };
  
  const getCurrentIsConnected = () => {
    return selectedChain === 'bsc' ? bscIsConnected : solanaIsConnected;
  };
  
  const contextValue: MultichainContextType = {
    // Chain selection
    selectedChain,
    setSelectedChain,
    
    // BSC state
    bscAddress,
    bscIsConnected,
    
    // Solana state
    solanaWallet,
    solanaAddress,
    solanaIsConnected,
    solanaConnection,
    
    // Helper functions
    getCurrentAddress,
    getCurrentIsConnected,
  };
  
  return (
    <MultichainContext.Provider value={contextValue}>
      {children}
    </MultichainContext.Provider>
  );
};

export const useMultichain = () => {
  const context = useContext(MultichainContext);
  if (context === undefined) {
    throw new Error('useMultichain must be used within a MultichainProvider');
  }
  return context;
}; 