import React from 'react';
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

function App() {
  return (
    <StatsProvider>
      <div className="min-h-screen bg-gray-900">
        <Header />
        <Hero />
        <StatsBar />
        <WhatIs />
        <ChaseExodus />
        <Whitepaper />
        <Tokenomics />
        <HowToBuy />
        <MemeGrid />
        <Footer />
      </div>
    </StatsProvider>
  );
}

export default App;