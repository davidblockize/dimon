import React from 'react';
import { Wallet, ArrowRight, Zap, Shield } from 'lucide-react';

const HowToBuy = () => {
  const steps = [
    {
      step: 1,
      title: 'Get a Wallet',
      description: 'Download MetaMask or any Ethereum wallet',
      icon: Wallet,
      color: 'from-blue-400 to-blue-600'
    },
    {
      step: 2,
      title: 'Buy ETH',
      description: 'Purchase Ethereum on any exchange',
      icon: Zap,
      color: 'from-green-400 to-green-600'
    },
    {
      step: 3,
      title: 'Connect to UniSwap',
      description: 'Visit app.uniswap.org and connect wallet',
      icon: ArrowRight,
      color: 'from-purple-400 to-purple-600'
    },
    {
      step: 4,
      title: 'Swap for $DIMON',
      description: 'Enter contract address and swap ETH for $DIMON',
      icon: Shield,
      color: 'from-yellow-400 to-yellow-600'
    }
  ];

  return (
    <section id="how-to-buy" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How to Buy <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">$DIMON</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow these simple steps to join the $DIMON revolution and prove Jamie wrong!
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  <step.icon className="w-8 h-8 text-gray-900" />
                </div>
                
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-2">Step {step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              </div>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-gray-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contract Address */}
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Contract Address</h3>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <code className="text-yellow-400 text-sm md:text-base break-all">
                0x1234567890abcdef1234567890abcdef12345678
              </code>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Always verify the contract address before trading!
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://app.uniswap.org/#/swap?outputCurrency=0x1234567890abcdef1234567890abcdef12345678"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 text-lg"
          >
            <Zap className="w-6 h-6" />
            <span>Buy on UniSwap</span>
          </a>
          
          <a
            href="https://dextools.io/app/en/ether/pair-explorer/0x1234567890abcdef1234567890abcdef12345678"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-lg"
          >
            <span>View Chart</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;