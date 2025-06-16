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
      <header className="fixed top-0 w-full bg-white backdrop-blur-sm border-b border-yellow-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                className="h-14 w-14 object-contain cursor-pointer"
                alt="Dimon Logo"
                src="/logo.png"
              />
              <span className="text-black font-bold text-xl">$DIMON</span>
            </div>
            

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center md:space-x-8">
              <a href="#what-is" className="text-black hover:font-bold transition-colors">What is $DIMON?</a>
              {/* <a href="#whitepaper" className="text-black hover:font-bold transition-colors">Whitepaper</a> */}
              <a href="#tokenomics" className="text-black hover:font-bold transition-colors">Tokenomics</a>
              <a href="#how-to-buy" className="text-black hover:font-bold transition-colors">How to Buy</a>
              <a href="#memes" className="text-black hover:font-bold transition-colors">Memes</a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={copyContract}
                className="flex items-center space-x-2 bg-[#005FF0] hover:bg-[#005FF0eF] px-3 py-2 rounded-lg transition-colors"
              >
                <Copy className="w-4 h-4 text-white" />
                <span className="text-sm text-white">Contract</span>
              </button>
              <button
                onClick={() => setShowQR(true)}
                className="flex items-center space-x-2 bg-[#005FF0] hover:bg-[#005FF0eF] px-3 py-2 rounded-lg transition-colors"
              >
                <QrCode className="w-4 h-4 text-white" />
                <span className="text-sm text-white">QR</span>
              </button>
              <a
                href="#whitepaper"
                className="flex items-center space-x-2 bg-[#005FF0] hover:bg-[#005FF0eF] px-3 py-2 rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4 text-white" />
                <span className="text-sm text-white">Whitepaper</span>
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black transition-colors"
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
          <div className="md:hidden bg-white border-t border-gray-700">
            <div className="px-1 py-2 space-y-2">
              <a href="#what-is" className="block py-2 text-black hover:font-bold transition-colors">What is $DIMON?</a>
              {/* <a href="#whitepaper" className="block py-2 text-black hover:font-bold transition-colors">Whitepaper</a> */}
              <a href="#tokenomics" className="block py-2 text-black hover:font-bold transition-colors">Tokenomics</a>
              <a href="#how-to-buy" className="block py-2 text-black hover:font-bold transition-colors">How to Buy</a>
              <a href="#memes" className="block py-2 text-black hover:font-bold transition-colors">Memes</a>
              <div className="flex items-center space-x-2 pt-2">
                <button
                  onClick={copyContract}
                  className="flex items-center space-x-2 bg-[#005FF0] hover:bg-[#005FF0eF] px-3 py-2 rounded-lg transition-colors"
                >
                  <Copy className="w-4 h-4 text-white" />
                  <span className="text-sm text-white">Contract</span>
                </button>
                <button
                  onClick={() => setShowQR(true)}
                  className="flex items-center space-x-2 bg-[#005FF0] hover:bg-[#005FF0eF] px-3 py-2 rounded-lg transition-colors"
                >
                  <QrCode className="w-4 h-4 text-white" />
                  <span className="text-sm text-white">QR</span>
                </button>
                <a
                  href="#whitepaper"
                  className="flex items-center space-x-2 bg-[#005FF0] hover:bg-[#005FF0eF] px-3 py-2 rounded-lg transition-colors"
                >
                  <FileText className="w-4 h-4 text-white" />
                  <span className="text-sm text-white">Whitepaper</span>
                </a>
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-black transition-colors"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-black transition-colors"
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