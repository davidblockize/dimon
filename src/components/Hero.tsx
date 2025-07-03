import React from 'react';
import { ArrowRight, Zap, TrendingDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 font-meme">
      {/* Jamie Emoji Bubble */}
      {/* <div className="absolute top-6 right-6 flex items-center space-x-2 z-20">
        <img src="/jamie-crying.gif" alt="Jamie Crying" className="w-14 h-14 rounded-full border-2 border-white shadow-lg" />
        <span className="bg-white text-gray-900 px-3 py-1 rounded-full shadow text-sm font-bold">"You're ruining my bank!"</span>
      </div> */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className='bg-transparent py-7'>
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
            <h1 className="text-6xl md:text-7xl font-meme font-bold mb-4">
              <span className="text-white">$DIMON</span>
            </h1>

            {/* <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              The Meme Coin Chase Never Saw Coming
            </p> */}

            {/* Tagline */}
            <p className="text-2xl md:text-2xl text-white mb-2 font-meme font-bold">
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
          <div className="border border-gray-500/50 rounded-2xl p-6 my-8 max-w-2xl mx-auto bg-white/80 backdrop-blur-sm">
            <div className="flex items-center justify-center space-x-4 mb-3">
              <TrendingDown className="w-8 h-8 text-red-600" />
              <h3 className="text-2xl font-bold text-black">Chase Customers Lost Today</h3>
            </div>
            <p className="text-4xl font-bold text-black mb-2">
              <span className="dimon-animated-counter">2,847</span>
            </p>
            <p className="text-sm text-black">
              Every $DIMON transaction = one more customer breaking up with Chase
            </p>
            {/* <p className="text-sm text-black">
              Every wallet connected = one less slave to Jamie's fees
            </p>
            <p className="text-sm text-black">
              $DIMON isn't a buy — it's a breakup.
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
              className="space-x-2 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 hover:from-yellow-500 hover:via-red-500 hover:to-pink-600 px-3 py-2 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center text-md justify-center border border-yellow-300 w-[225px] sm:w-auto"
            >
              <span>Buy $DIMON</span>
            </a>
            <a
              href="/litepaper.pdf"
              target='_blank'
              rel='noopener noreferrer'
              className="border border-pink-400 text-pink-600 hover:bg-pink-50 font-bold px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-md justify-center shadow-md bg-white/90 w-[225px] sm:w-auto"
            >
              <span>Read the $DIMON Paper</span>
            </a>
            <a
              href="#memes"
              className="border border-green-400 text-green-600 hover:bg-green-50 font-bold px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-md justify-center shadow-md bg-white/90 w-[225px] sm:w-auto"
            >
              <span>Explore the Meme Gallery</span>
            </a>
          </div>

          {/* Jamie's Quotes Ticker */}
          <div className="mt-12 rounded-lg p-4 border border-gray-500/50 bg-white/80 backdrop-blur-sm">
            <p className="text-sm text-black mb-2">💬 Jamie's Greatest Hits:</p>
            <div className="text-black font-medium">
              "Bitcoin is a fraud" • "Crypto is worthless" • "I don't personally think Bitcoin is worth anything" • "It's a waste of time"
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