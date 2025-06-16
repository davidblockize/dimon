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
      description: 'Locked forever on PancakeSwap'
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
    <section id="tokenomics" className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tokenomics That Slap
          </h2>
          {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fair launch, community-driven, and built to last. 
            No rug pulls, no insider trading - just pure meme magic.
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Token Info */}
          <div className="space-y-8">
            <div className="rounded-2xl p-8 border border-gray-500/50">
              <div className="flex items-center space-x-4 mb-6">
                <PieChart className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Token Details</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm">Total Supply</p>
                  <p className="text-2xl font-bold">1,999,999</p>
                  <p className="text-sm">(one for every Chase customer we’re freeing)</p>
                </div>
                
                <div>
                  <p className="text-sm">Network</p>
                  <p className="text-2xl font-bold">BSC</p>
                  <p className="text-sm">BSC-20 Token</p>
                </div>
                
                <div>
                  {/* <p className="text-gray-400 text-sm">Dev Wallet</p> */}
                  <p className="text-2xl font-bold md:text-nowrap">💰 LP Burned & Ownership Renounced</p>
                  <p className="text-sm"> rugproof & Jamie-proof</p>
                </div>
                
                {/* <div>
                  <p className="text-gray-400 text-sm">Liquidity</p>
                  <p className="text-2xl font-bold text-yellow-400">100%</p>
                  <p className="text-yellow-400 text-sm">Locked Forever</p>
                </div> */}
              </div>
            </div>

            {/* Tax Info */}
            <div className="rounded-2xl p-8 border border-gray-500/50">
              <h4 className="text-xl font-bold mb-4">Tax Structure</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p>Buy Tax</p>
                  <p className="text-3xl font-bold">0%</p>
                </div>
                <div>
                  <p>Sell Tax</p>
                  <p className="text-3xl font-bold">0%</p>
                </div>
              </div>
              <p className="text-sm mt-4">
                No taxes, no fees - just pure $DIMON trading freedom
              </p>
            </div>
          </div>

          {/* Right Side - Distribution */}
          <div className="space-y-6">
            {tokenomicsData.map((item, index) => (
              <div key={index} className="rounded-xl p-6 border border-gray-500/50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 bg-gradient-to-r ${item.color} rounded-lg`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{item.category}</h4>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">{item.percentage}%</p>
                    <p className="text-sm">{item.amount} $DIMON</p>
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