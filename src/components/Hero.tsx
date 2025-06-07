import React from 'react';
import { ArrowRight, Zap, TrendingDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Main Logo */}
          <div className="flex justify-center mb-8">
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
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="text-white">$</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              DIMON
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-2 font-medium">
            Jamie Dimon called crypto worthless... so we named a coin after him.
          </p>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            He mocked the future. We minted it. $DIMON isn’t just a token — it’s poetic payback. From banks to building billions — one moon at a time.
          </p>

          {/* Chase Customer Counter */}
          <div className="bg-red-900/30 border border-red-500/50 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-3">
              <TrendingDown className="w-8 h-8 text-red-400" />
              <h3 className="text-2xl font-bold text-white">Chase Customers Lost Today</h3>
            </div>
            <p className="text-4xl font-bold text-red-400 mb-2">2,847</p>
            <p className="text-sm text-gray-400">
              Every $DIMON purchase = One less Chase customer 📉
            </p>
            <p className="text-xs text-red-300 mt-2">
              "I'd rather bank with a meme coin than Jamie's fees" - Anonymous Ex-Chase Customer
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://app.pancakeswap.org/#/swap?outputCurrency=0x1234567890abcdef1234567890abcdef12345678"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 text-lg"
            >
              <Zap className="w-6 h-6" />
              <span>Buy $DIMON</span>
              <ArrowRight className="w-6 h-6" />
            </a>
            
            <a
              href="#whitepaper"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-lg"
            >
              <span>Read the $DIMON Paper</span>
              <ArrowRight className="w-6 h-6" />
            </a>
            <a
              href="#memes"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-lg"
            >
              <span>Explore the Meme Gallery</span>
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>

          {/* Jamie's Quotes Ticker */}
          <div className="mt-12 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <p className="text-sm text-gray-400 mb-2">💬 Jamie's Greatest Hits:</p>
            <div className="overflow-hidden">
              <div className="animate-pulse text-red-400 font-medium">
                "Bitcoin is a fraud" • "Crypto is worthless" • "I don't personally think Bitcoin is worth anything" • "It's a waste of time"
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-yellow-400 rounded-full mx-auto">
              <div className="w-1 h-3 bg-yellow-400 rounded-full mx-auto mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;