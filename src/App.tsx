import React from 'react';
import { WagmiProvider } from 'wagmi';
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme 
} from '@rainbow-me/rainbowkit';
import {
  bscTestnet,
  sepolia
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import WhatIs from './components/WhatIs';
import ChaseExodus from './components/ChaseExodus';
import Whitepaper from './components/Whitepaper';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import MemeGrid from './components/MemeGrid';
import Footer from './components/Footer';
import { StatsProvider } from './context/StatsContext';
import PresaleCard from './components/PresaleCard';

const config = getDefaultConfig({
  appName: 'DimonPresale',
  projectId: 'YOUR_PROJECT_ID',
  chains: [bscTestnet],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
const CustomAvatar = () => {
  return (
    <img
      src="/asset/tokenLogo.png"
      width="40px"
      height="40px"
      style={{ borderRadius: 999 }}
    />
  ) 
};
const queryClient = new QueryClient();
function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()} avatar={CustomAvatar}>
          <StatsProvider>
            <div className="min-h-screen bg-gray-900">
              <Header />
              <Hero />
              <StatsBar />
              <PresaleCard />
              <WhatIs />
              <ChaseExodus />
              <Whitepaper />
              <Tokenomics />
              <HowToBuy />
              <MemeGrid />
              <Footer />
            </div>
          </StatsProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;