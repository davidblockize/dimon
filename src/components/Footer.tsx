import React from 'react';
import { Twitter, MessageCircle, Globe, Shield, Lock, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#ECEFF1] border-t border-gray-500/50 py-10 md:py-16 px-4 sm:px-6 lg:px-8 text-black font-meme">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo & Description */}
          <div className="">
            <div className="flex items-center space-x-2 mb-4">
              <img
                className="h-11 w-11 object-contain cursor-pointer"
                alt="Dimon Logo"
                src="/logo.png"
              />
              <span className="font-bold text-xl">DIMON</span>
            </div>
            <p className="mb-2 max-w-md">
              • “Not Financial Advice. Just Financial Revenge.”
            </p>
            <p className="mb-6 max-w-md">
              • 💥 Powered by the rage of 119,999,999 former Chase customers.
            </p>
            
            {/* Social Links */}
            {/* <div className="flex space-x-4">
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400"
              >
                Twitter
              </a>
              <p className='text-gray-400'>|</p>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400"
              >
                Telegram
              </a>
              <p className='text-gray-400'>|</p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400"
              >
                Whitepaper
              </a>
              <p className='text-gray-400'>|</p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400"
              >
                Meme Pack
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#what-is" className="text-gray-400 hover:text-yellow-400 transition-colors">What is $DIMON?</a></li>
              <li><a href="#tokenomics" className="text-gray-400 hover:text-yellow-400 transition-colors">Tokenomics</a></li>
              <li><a href="#how-to-buy" className="text-gray-400 hover:text-yellow-400 transition-colors">How to Buy</a></li>
              <li><a href="#memes" className="text-gray-400 hover:text-yellow-400 transition-colors">Meme Gallery</a></li>
            </ul>
          </div> */}

          {/* Security */}
          {/* <div>
            <h3 className="text-white font-bold text-lg mb-4">Security</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Lock className="w-4 h-4 text-green-400" />
                <span className="text-gray-400 text-sm">100% Liquidity Locked</span>
              </li>
              <li className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-gray-400 text-sm">Ownership Renounced</span>
              </li>
              <li className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-green-400" />
                <span className="text-gray-400 text-sm">0% Buy/Sell Tax</span>
              </li>
            </ul>
          </div> */}
          {/* <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p>© 2025 $DIMON. All rights reserved.</p>
          </div> */}
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-between space-y-5 sm:space-y-0'>
          <div className="flex space-x-2 sm:space-x-4">
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <p>|</p>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
            <p>|</p>
            <a
              href="/whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whitepaper
            </a>
            <p>|</p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meme Pack
            </a>
          </div>
          <div className="text-sm mb-4 md:mb-0">
            <p>© 2025 $DIMON. All rights reserved.</p>
          </div>
        </div>
        
        

        {/* Bottom Section */}
        {/* <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>© 2025 $DIMON. All rights reserved.</p>
              <p className="mt-1">Not financial advice. Do your own research.</p>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>CA: 0x1234...5678</span>
              <button 
                onClick={() => navigator.clipboard.writeText('0x1234567890abcdef1234567890abcdef12345678')}
                className="hover:text-yellow-400 transition-colors"
              >
                Copy Contract
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;