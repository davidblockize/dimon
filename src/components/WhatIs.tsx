import React from 'react';
import { Briefcase, Banknote, Rocket, Shield, TrendingDown, DollarSign } from 'lucide-react';

const WhatIs = () => {
  return (
    <section id="what-is" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            What is $DIMON?
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            The ultimate satirical tribute to Jamie Dimon's legendary crypto hatred.<br />
            He runs fees. We run memes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Story */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-500/50">
              <h3 className="text-2xl font-bold text-black mb-4">The $DIMON Revolution</h3>
              <p className="text-black mb-4">
                Jamie Dimon spent years calling crypto a “fraud” and “worthless” - while his bank charged $35 overdraft fees and paid 0.01% interest.
              </p>
              <p className="text-black mb-4">
                $DIMON flips the script: community-owned, decentralized, and free from middlemen. Every transaction is a vote against the banking cartel.
              </p>
              <div className="bg-white border border-gray-500/50 rounded-lg p-4">
                <p className="text-black font-semibold text-center">
                  🏦 "Bitcoin is a fraud" - Jamie Dimon, 2017
                </p>
                <p className="text-black font-semibold text-center mt-2">
                  💰 Bitcoin: +2,400% since then
                </p>
              </div>
            </div>

            {/* Chase vs $DIMON Comparison */}
            <div className="rounded-2xl p-6 border border-gray-500/50">
              <h4 className="text-xl font-bold text-black mb-4 text-center">Chase vs $DIMON</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center text-black">
                  <p className="font-bold">Chase Bank</p>
                  <p>$35 overdraft fees</p>
                  <p>0.01% savings rate</p>
                  <p>Centralized control</p>
                  <p>CEO salary: $34M</p>
                </div>
                <div className="text-center text-black">
                  <p className="font-bold">$DIMON</p>
                  <p>0% transaction fees</p>
                  <p>∞% moon potential</p>
                  <p>Community owned</p>
                  <p>Dev wallet: $0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 border border-gray-500/50">
              <TrendingDown className="w-12 h-12 text-red-500 mb-4" />
              <h4 className="text-xl font-bold text-black mb-2">Bank Exodus</h4>
              <p className="text-black text-sm">
                Every wallet opened is a middle finger to Chase.
              </p>
            </div>

            <div className="rounded-xl p-6 border border-gray-500/50">
              <Banknote className="w-12 h-12 text-blue-500 mb-4" />
              <h4 className="text-xl font-bold text-black mb-2">Fee Freedom</h4>
              <p className="text-black text-sm">
                No Jamie. No banks. Just vibes.
              </p>
            </div>

            <div className="rounded-xl p-6 border border-gray-500/50">
              <Rocket className="w-12 h-12 text-green-500 mb-4" />
              <h4 className="text-xl font-bold text-black mb-2">Proving Jamie Wrong</h4>
              <p className="text-black text-sm">
                He said crypto would die. We made him immortal in meme form.
              </p>
            </div>

            <div className="rounded-xl p-6 border border-gray-500/50">
              <DollarSign className="w-12 h-12 text-purple-500 mb-4" />
              <h4 className="text-xl font-bold text-black mb-2">Generational Wealth</h4>
              <p className="text-black text-sm">
                Building generational wealth — one clown coin at a time.
              </p>
            </div>
          </div>
        </div>

        {/* Jamie's Worst Takes */}
        <div className="mt-16 rounded-2xl p-8 border border-gray-500/50 text-black">
          <h3 className="text-2xl font-bold mb-6 text-center">Jamie's Hall of Shame 🤡</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg p-4 border border-gray-500/50">
              <p className="font-bold mb-2">"Bitcoin is a fraud"</p>
              <p className="text-sm">September 2017</p>
              <p className="text-xs mt-2">Bitcoin was $4,000. Now: $100,000+ 📈</p>
            </div>
            <div className="rounded-lg p-4 border border-gray-500/50">
              <p className="font-bold mb-2">"Crypto is worthless"</p>
              <p className="text-sm">Multiple occasions</p>
              <p className="text-xs mt-2">Crypto market cap: $3+ Trillion 💰</p>
            </div>
            <div className="rounded-lg p-4 border border-gray-500/50">
              <p className="font-bold mb-2">"It's a waste of time"</p>
              <p className="text-sm">2021</p>
              <p className="text-xs mt-2">Meanwhile: JPM launches JPM Coin 🤔</p>
            </div>
          </div>
          <h3 className="text-xl font-bold mt-6 text-center">The man who hated crypto now stars in one.</h3>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;