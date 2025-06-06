import React from 'react';
import { PieChart, Lock, Zap, Users } from 'lucide-react';

const Tokenomics = () => {
  const tokenomicsData = [
    {
      category: 'Liquidity Pool',
      percentage: 95,
      amount: '950M',
      color: 'from-yellow-400 to-yellow-600',
      icon: Lock,
      description: 'Locked forever on UniSwap'
    },
    {
      category: 'Marketing',
      percentage: 3,
      amount: '30M',
      color: 'from-blue-400 to-blue-600',
      icon: Zap,
      description: 'Community growth & partnerships'
    },
    {
      category: 'Team',
      percentage: 2,
      amount: '20M',
      color: 'from-green-400 to-green-600',
      icon: Users,
      description: 'Vested over 12 months'
    }
  ];

  return (
    <section id="tokenomics" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">$DIMON</span> Tokenomics
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fair launch, community-driven, and built to last. 
            No rug pulls, no insider trading - just pure meme magic.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Token Info */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center space-x-4 mb-6">
                <PieChart className="w-8 h-8 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">Token Details</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-400 text-sm">Total Supply</p>
                  <p className="text-2xl font-bold text-white">1,000,000,000</p>
                  <p className="text-yellow-400 text-sm">1 Billion $DIMON</p>
                </div>
                
                <div>
                  <p className="text-gray-400 text-sm">Network</p>
                  <p className="text-2xl font-bold text-white">Ethereum</p>
                  <p className="text-blue-400 text-sm">ERC-20 Token</p>
                </div>
                
                <div>
                  <p className="text-gray-400 text-sm">Dev Wallet</p>
                  <p className="text-2xl font-bold text-green-400">0%</p>
                  <p className="text-green-400 text-sm">Ownership Renounced</p>
                </div>
                
                <div>
                  <p className="text-gray-400 text-sm">Liquidity</p>
                  <p className="text-2xl font-bold text-yellow-400">100%</p>
                  <p className="text-yellow-400 text-sm">Locked Forever</p>
                </div>
              </div>
            </div>

            {/* Tax Info */}
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-2xl p-8 border border-green-500/30">
              <h4 className="text-xl font-bold text-white mb-4">Tax Structure</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-300">Buy Tax</p>
                  <p className="text-3xl font-bold text-green-400">0%</p>
                </div>
                <div>
                  <p className="text-gray-300">Sell Tax</p>
                  <p className="text-3xl font-bold text-green-400">0%</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                No taxes, no fees - just pure $DIMON trading freedom
              </p>
            </div>
          </div>

          {/* Right Side - Distribution */}
          <div className="space-y-6">
            {tokenomicsData.map((item, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 bg-gradient-to-r ${item.color} rounded-lg`}>
                      <item.icon className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{item.category}</h4>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">{item.percentage}%</p>
                    <p className="text-sm text-gray-400">{item.amount} $DIMON</p>
                  </div>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${item.color} h-2 rounded-full transition-all duration-1000`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;