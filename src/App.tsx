import React from 'react';
import { WagmiProvider, createStorage, cookieStorage } from 'wagmi';
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
import { ToastContainer } from "react-toastify";
import { http} from "viem"
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

// const config = getDefaultConfig({
//   appName: 'DimonPresale',
//   projectId: '293a761c6f1f8691938d803059c73e54',
//   chains: [bscTestnet],
//   ssr: true, // If your dApp uses server side rendering (SSR)
// });

const config = getDefaultConfig({
  appName: "DimonPresale",
  projectId: "293a761c6f1f8691938d803059c73e54",
  chains: [bscTestnet],
  transports: {
    [bscTestnet.id]: http("https://bnb-testnet.g.alchemy.com/v2/jJYJsns9CjkrmyIEsM2859AbB-d2cevE"),
  },
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
})
const CustomAvatar = () => {
  return (
    <img
      src="/tokenLogo.png"
      width="40px"
      height="40px"
      style={{ borderRadius: 999 }}
    />
  ) 
};
const queryClient = new QueryClient();
function App() {
  return (
    <>
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
                {/* <Whitepaper /> */}
                <Tokenomics />
                <HowToBuy />
                <MemeGrid />
                <Footer />
              </div>
            </StatsProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
      <ToastContainer
        autoClose={5000}
        hideProgressBar
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
    </>
  );
}

export default App;