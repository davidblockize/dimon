import React, { useState } from 'react';
import { Menu, X, Twitter, MessageCircle, Copy, QrCode, FileText } from 'lucide-react';
import QRCodeGenerator from './QRCodeGenerator';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const copyContract = () => {
    navigator.clipboard.writeText('0x1234567890abcdef1234567890abcdef12345678');
    alert('Contract address copied!');
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-yellow-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                className="h-11 w-11 object-contain cursor-pointer"
                alt="Dimon Logo"
                src="/logo.png"
              />
              <span className="text-white font-bold text-xl">DIMON</span>
            </div>
            

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#what-is" className="text-gray-300 hover:text-yellow-400 transition-colors">What is $DIMON?</a>
              <a href="#whitepaper" className="text-gray-300 hover:text-yellow-400 transition-colors">Whitepaper</a>
              <a href="#tokenomics" className="text-gray-300 hover:text-yellow-400 transition-colors">Tokenomics</a>
              <a href="#how-to-buy" className="text-gray-300 hover:text-yellow-400 transition-colors">How to Buy</a>
              <a href="#memes" className="text-gray-300 hover:text-yellow-400 transition-colors">Memes</a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={copyContract}
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors"
              >
                <Copy className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">Contract</span>
              </button>
              <button
                onClick={() => setShowQR(true)}
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors"
              >
                <QrCode className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">QR</span>
              </button>
              <a
                href="#whitepaper"
                className="flex items-center space-x-2 bg-red-800 hover:bg-red-700 px-3 py-2 rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4 text-red-300" />
                <span className="text-sm text-red-300">Whitepaper</span>
              </a>
              <a
                href="https://t.me/dimon_coin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/dimon_coin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-400 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-2 space-y-2">
              <a href="#what-is" className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors">What is $DIMON?</a>
              <a href="#whitepaper" className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors">Whitepaper</a>
              <a href="#tokenomics" className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors">Tokenomics</a>
              <a href="#how-to-buy" className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors">How to Buy</a>
              <a href="#memes" className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors">Memes</a>
              <div className="flex items-center space-x-4 pt-2">
                <button
                  onClick={copyContract}
                  className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg transition-colors"
                >
                  <Copy className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">Contract</span>
                </button>
                <button
                  onClick={() => setShowQR(true)}
                  className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg transition-colors"
                >
                  <QrCode className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">QR</span>
                </button>
                <a
                  href="https://t.me/dimon_coin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/dimon_coin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
      
      {showQR && <QRCodeGenerator onClose={() => setShowQR(false)} />}
    </>
  );
};

export default Header;