import React from 'react';
import { ArrowRight, Zap, TrendingDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className='bg-[#005FF0] py-7'>
          
            {/* Main Logo */}
            <div className="flex justify-center mb-4">
              {/* <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-gray-900 font-bold text-6xl">$</span>
              </div> */}
              <img
                className="h-36 w-36 object-contain cursor-pointer"
                alt="Dimon Logo"
                src="/logo.png"
              />
            </div>

            {/* Title */}
            <h1 className="text-6xl md:text-7xl font-bold mb-4">
              <span className="text-white">$DIMON</span>
            </h1>

            {/* <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              The Meme Coin Chase Never Saw Coming
            </p> */}

            {/* Tagline */}
            <p className="text-2xl md:text-2xl text-white mb-2 font-medium">
              Jamie Dimon mocked crypto. We turned him into a token.
            </p>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              From overdraft fees to generational freedom - Meme Coin Chase Never Saw Coming
            </p>
            {/* <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              Not just a meme. A movement.
            </p> */}
          </div>


          {/* Chase Customer Counter */}
          <div className="border border-gray-500/50 rounded-2xl p-6 my-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-3">
              <TrendingDown className="w-8 h-8 text-red-600" />
              <h3 className="text-2xl font-bold text-black">Chase Customers Lost Today</h3>
            </div>
            <p className="text-4xl font-bold text-black mb-2">2,847</p>
            <p className="text-sm text-black">
              Every $DIMON transaction = one more customer breaking up with Chase
            </p>
            {/* <p className="text-sm text-black">
              Every wallet connected = one less slave to Jamie’s fees
            </p>
            <p className="text-sm text-black">
              $DIMON isn’t a buy — it’s a breakup.
            </p>
            <p className="text-xs text-black mt-2">
              "I'd rather bank with a meme coin than Jamie's fees" - Anonymous Ex-Chase Customer
            </p> */}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-7 justify-center items-center">
            <a
              href="https://app.pancakeswap.org/#/swap?outputCurrency=0x1234567890abcdef1234567890abcdef12345678"
              target="_blank"
              rel="noopener noreferrer"
              className="space-x-2 bg-[#005FF0] hover:bg-[#005FF0eF] px-3 py-2 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center text-md justify-center"
            >
              {/* <Zap className="w-6 h-6" /> */}
              <span>Buy $DIMON</span>
              {/* <ArrowRight className="w-6 h-6" /> */}
            </a>
            
            {/* <a
              href="#whitepaper"
              className="border border-[#005FF0] text-[#005FF0] hover:text-[#005FF0eF] font-bold px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-md justify-center"
            >
              <span>Read the $DIMON Paper</span>
              <ArrowRight className="w-6 h-6" />
            </a> */}
            <a
              href="/litepaper.pdf"
              target='_blank'
              rel='noopener noreferrer'
              className="border border-[#005FF0] text-[#005FF0] hover:text-[#005FF0eF] font-bold px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-md justify-center"
            >
              <span>Read the $DIMON Paper</span>
            </a>
            <a
              href="#memes"
              className="border border-[#005FF0] text-[#005FF0] hover:text-[#005FF0eF] font-bold px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-md justify-center"
            >
              <span>Explore the Meme Gallery</span>
              {/* <ArrowRight className="w-6 h-6" /> */}
            </a>
          </div>

          {/* Jamie's Quotes Ticker */}
          <div className="mt-12 rounded-lg p-4 border border-gray-500/50">
            <p className="text-sm text-black mb-2">💬 Jamie's Greatest Hits:</p>
            <div className="overflow-hidden">
              <div className="animate-pulse text-black font-medium">
                "Bitcoin is a fraud" • "Crypto is worthless" • "I don't personally think Bitcoin is worth anything" • "It's a waste of time"
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          {/* <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-yellow-400 rounded-full mx-auto">
              <div className="w-1 h-3 bg-yellow-400 rounded-full mx-auto mt-2 animate-pulse"></div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;