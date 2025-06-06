import React from 'react';
import { Briefcase, Banknote, Rocket, Shield, TrendingDown, DollarSign } from 'lucide-react';

const WhatIs = () => {
  return (
    <section id="what-is" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">$DIMON</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The ultimate satirical tribute to Jamie Dimon's legendary crypto hatred. 
            While he charges overdraft fees, we're building generational wealth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Story */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">The $DIMON Revolution</h3>
              <p className="text-gray-300 mb-4">
                Jamie Dimon, CEO of JPMorgan Chase, has spent years calling crypto a "fraud," 
                "worthless," and a "waste of time." Meanwhile, his bank charges $35 overdraft fees 
                and keeps your money locked in 0.01% savings accounts.
              </p>
              <p className="text-gray-300 mb-4">
                $DIMON represents everything Jamie fears: decentralized finance, community ownership, 
                and financial freedom without banking middlemen. Every transaction is a vote against 
                traditional banking tyranny.
              </p>
              <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4">
                <p className="text-red-400 font-semibold text-center">
                  🏦 "Bitcoin is a fraud" - Jamie Dimon, 2017
                </p>
                <p className="text-yellow-400 font-semibold text-center mt-2">
                  💰 Bitcoin: +2,400% since then
                </p>
              </div>
            </div>

            {/* Chase vs $DIMON Comparison */}
            <div className="bg-gradient-to-r from-red-900/30 to-yellow-900/30 rounded-2xl p-6 border border-yellow-500/30">
              <h4 className="text-xl font-bold text-white mb-4 text-center">Chase vs $DIMON</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <p className="text-red-400 font-bold">Chase Bank</p>
                  <p className="text-gray-400">$35 overdraft fees</p>
                  <p className="text-gray-400">0.01% savings rate</p>
                  <p className="text-gray-400">Centralized control</p>
                  <p className="text-gray-400">CEO salary: $34M</p>
                </div>
                <div className="text-center">
                  <p className="text-yellow-400 font-bold">$DIMON</p>
                  <p className="text-gray-300">0% transaction fees</p>
                  <p className="text-gray-300">∞% moon potential</p>
                  <p className="text-gray-300">Community owned</p>
                  <p className="text-gray-300">Dev wallet: $0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl p-6 border border-yellow-500/30">
              <TrendingDown className="w-12 h-12 text-red-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Bank Exodus</h4>
              <p className="text-gray-300 text-sm">
                Every $DIMON purchase represents one less Chase customer
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-6 border border-blue-500/30">
              <Banknote className="w-12 h-12 text-blue-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Fee Freedom</h4>
              <p className="text-gray-300 text-sm">
                No overdraft fees, no monthly charges, no Jamie
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-6 border border-green-500/30">
              <Rocket className="w-12 h-12 text-green-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Proving Jamie Wrong</h4>
              <p className="text-gray-300 text-sm">
                Every moon mission is a slap in the face to crypto FUD
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-6 border border-purple-500/30">
              <DollarSign className="w-12 h-12 text-purple-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Generational Wealth</h4>
              <p className="text-gray-300 text-sm">
                Building billions while banks count pennies
              </p>
            </div>
          </div>
        </div>

        {/* Jamie's Worst Takes */}
        <div className="mt-16 bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Jamie's Hall of Shame 🤡</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/50">
              <p className="text-red-400 font-bold mb-2">"Bitcoin is a fraud"</p>
              <p className="text-gray-400 text-sm">September 2017</p>
              <p className="text-yellow-400 text-xs mt-2">Bitcoin was $4,000. Now: $40,000+ 📈</p>
            </div>
            <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/50">
              <p className="text-red-400 font-bold mb-2">"Crypto is worthless"</p>
              <p className="text-gray-400 text-sm">Multiple occasions</p>
              <p className="text-yellow-400 text-xs mt-2">Crypto market cap: $2+ Trillion 💰</p>
            </div>
            <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/50">
              <p className="text-red-400 font-bold mb-2">"It's a waste of time"</p>
              <p className="text-gray-400 text-sm">2021</p>
              <p className="text-yellow-400 text-xs mt-2">Meanwhile: JPM launches JPM Coin 🤔</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;