import React from 'react';
import { Wallet, ArrowRight, Zap, Shield } from 'lucide-react';

const HowToBuy = () => {
  const steps = [
    {
      step: 1,
      title: 'Get a Wallet',
      // description: 'Download MetaMask or any Ethereum wallet',
      icon: Wallet,
      color: 'from-blue-400 to-blue-600'
    },
    {
      step: 2,
      title: 'Buy BNB',
      // description: 'Purchase Ethereum on any exchange',
      icon: Zap,
      color: 'from-green-400 to-green-600'
    },
    {
      step: 3,
      title: 'Connect to PancakeSwap',
      // description: 'Visit app.pancakeswap.org and connect wallet',
      icon: ArrowRight,
      color: 'from-purple-400 to-purple-600'
    },
    {
      step: 4,
      title: 'Swap BNB for $DIMON',
      // description: 'Enter contract address and swap ETH for $DIMON',
      icon: Shield,
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      step: 5,
      title: 'Laugh at JPMorgan',
      // description: 'Enter contract address and swap ETH for $DIMON',
      icon: Shield,
      color: 'from-yellow-400 to-yellow-600'
    }
  ];

  return (
    <section id="how-to-buy" className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How to Join the $DIMON Rebellion
          </h2>
          {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            How to Join the $DIMON Rebellion
          </p> */}
        </div>

        {/* Steps */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="rounded-2xl p-6 border border-gray-500/50 transition-all duration-300 hover:transform hover:scale-105 w-[232px] h-full">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  <step.icon className="w-10 h-10" />
                </div>
                
                <div className="text-center">
                  <div className="text-sm mb-2">Step {step.step}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                </div>
              </div>
              
              {/* Arrow connector */}
              {/* {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-gray-600" />
                </div>
              )} */}
            </div>
          ))}
        </div>

        {/* Contract Address */}
        <div className="rounded-2xl p-8 border border-gray-500/50 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Contract Address</h3>
            <div className="rounded-lg p-4 border border-gray-500/50">
              <code className="text-sm md:text-base break-all">
                0x1234567890abcdef1234567890abcdef12345678
              </code>
            </div>
            <p className="text-sm mt-2">
              Always verify the contract address before trading!
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-7 justify-center">
          <a
            href="https://app.pancakeswap.org/#/swap?outputCurrency=0x1234567890abcdef1234567890abcdef12345678"
            target="_blank"
            rel="noopener noreferrer"
            className="space-x-2 bg-[#005FF0] hover:bg-[#005FF0eF] px-3 py-2 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center text-md justify-center"
          >
            <Zap className="w-6 h-6" />
            <span>Buy on PancakeSwap</span>
          </a>
          
          <a
            href="https://dextools.io/app/en/ether/pair-explorer/0x1234567890abcdef1234567890abcdef12345678"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#005FF0] text-[#005FF0] hover:text-[#005FF0eF] font-bold px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-md justify-center"
          >
            <span>View Chart</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;