import React from 'react';
import { FileText, Download, ExternalLink, Zap } from 'lucide-react';

const Whitepaper = () => {
  const downloadWhitepaper = () => {
    // Create a fake PDF download
    const element = document.createElement('a');
    element.href = 'data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVGl0bGUgKCREaW1vbiBXaGl0ZXBhcGVyKQovQ3JlYXRvciAoJERpbW9uIFRlYW0pCi9Qcm9kdWNlciAoJERpbW9uIFRlYW0pCi9DcmVhdGlvbkRhdGUgKEQ6MjAyNDEyMjcpCj4+CmVuZG9iagoyIDAgb2JqCjw8Ci9UeXBlIC9DYXRhbG9nCi9QYWdlcyAzIDAgUgo+PgplbmRvYmoKMyAwIG9iago8PAovVHlwZSAvUGFnZXMKL0tpZHMgWzQgMCBSXQovQ291bnQgMQo+PgplbmRvYmoKNCAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDMgMCBSCi9NZWRpYUJveCBbMCAwIDYxMiA3OTJdCj4+CmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDEwOSAwMDAwMCBuIAowMDAwMDAwMTU4IDAwMDAwIG4gCjAwMDAwMDAyMTUgMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSA1Ci9Sb290IDIgMCBSCi9JbmZvIDEgMCBSCj4+CnN0YXJ0eHJlZgoyODQKJSVFT0Y=';
    element.download = 'DIMON-Whitepaper-v1.0.pdf';
    element.click();
  };

  return (
    <section id="whitepaper" className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black font-meme">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The $DIMON Whitepaper
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            No roadmap. Only rage. One token to burn the banks.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Whitepaper Preview */}
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-2xl">
            <div className="text-center mb-8">
              {/* <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-900 font-bold text-3xl">$</span>
              </div> */}
              <img
                className="h-20 w-20 object-contain cursor-pointer justify-self-center"
                alt="Dimon Logo"
                src="/logo.png"
              />
              <h1 className="text-4xl font-bold text-gray-900 mb-2">The $DIMON Whitepaper(aka The Roast Report)</h1>
              <p className="text-xl text-gray-600">“We trust in Dimon’s hate. No roadmap. Only rage.”</p>
              <p className="text-sm text-gray-500 mt-2">• 1-page satire manifesto</p>
            </div>

            <div className="space-y-6 text-gray-800">
              <div>
                <h2 className="text-2xl font-bold mb-3 text-red-600">Executive Summary</h2>
                <p className="text-gray-700 leading-relaxed">
                  $DIMON represents the ultimate satirical response to traditional banking's resistance to cryptocurrency innovation. 
                  Named after JPMorgan Chase CEO Jamie Dimon, who famously called Bitcoin a "fraud," this token embodies the 
                  community's collective rejection of centralized financial gatekeeping.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3 text-red-600">The Problem</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Traditional banks charge excessive fees ($35 overdraft fees at Chase)</li>
                  <li>Savings accounts offer insulting 0.01% interest rates</li>
                  <li>Banking executives earn millions while customers struggle</li>
                  <li>Centralized control over financial systems</li>
                  <li>Resistance to cryptocurrency adoption despite obvious benefits</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3 text-red-600">The $DIMON Solution</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  $DIMON creates a parallel financial ecosystem where:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Zero transaction fees (unlike Chase's fee structure)</li>
                  <li>Community ownership (no CEO earning $34M annually)</li>
                  <li>Transparent tokenomics (no hidden banking practices)</li>
                  <li>Unlimited growth potential (not 0.01% savings rates)</li>
                  <li>Decentralized governance (power to the people)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3 text-red-600">Tokenomics</h2>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-bold">Total Supply:</p>
                      <p>119,000,000 $DIMON</p>
                    </div>
                    <div>
                      <p className="font-bold">Liquidity Pool:</p>
                      <p>95% (Locked Forever)</p>
                    </div>
                    <div>
                      <p className="font-bold">Marketing:</p>
                      <p>3% (Community Growth)</p>
                    </div>
                    <div>
                      <p className="font-bold">Team:</p>
                      <p>2% (Vested 12 months)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3 text-red-600">Jamie's Greatest Misses</h2>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>"Bitcoin is a fraud" (Sept 2017)</span>
                      <span className="text-green-600 font-bold">BTC was $4,000 → Now $100,000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>"Crypto is worthless" (2018)</span>
                      <span className="text-green-600 font-bold">Market cap: $3+ Trillion</span>
                    </div>
                    <div className="flex justify-between">
                      <span>"It's a waste of time" (2021)</span>
                      <span className="text-green-600 font-bold">JPM launches JPM Coin 🤔</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3 text-red-600">Roadmap</h2>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Phase 1:</strong> Launch & Community Building</p>
                  <p><strong>Phase 2:</strong> Exchange Listings & Partnerships</p>
                  <p><strong>Phase 3:</strong> DeFi Integration & Utility</p>
                  <p><strong>Phase 4:</strong> Global Banking Disruption</p>
                  <p><strong>Phase 5:</strong> Jamie Dimon Apology Tour</p>
                </div>
              </div>

              <div className="text-center pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">
                  "Every $DIMON transaction is a vote against traditional banking tyranny."
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  This is a satirical project. Not financial advice. DYOR.
                </p>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="text-center">
            <div className="rounded-2xl p-8 border border-gray-500/50">
              {/* <FileText className="w-16 h-16 text-yellow-400 mx-auto mb-4" /> */}
              <h3 className="text-2xl font-bold mb-4">Download the $DIMON Paper</h3>
              <p className="mb-6">
                Get the complete 20-page analysis of how $DIMON will revolutionize finance
              </p>
              
              <div className="flex flex-col sm:flex-row gap-7 justify-center">
                <button
                  onClick={downloadWhitepaper}
                  className="space-x-2 bg-[#005FF0] hover:bg-[#005FF0eF] px-3 py-2 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center text-md justify-center"
                >
                  <Download className="w-6 h-6" />
                  <span>Download PDF</span>
                </button>
                
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#005FF0] text-[#005FF0] hover:text-[#005FF0eF] font-bold px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-md justify-center"
                >
                  <ExternalLink className="w-6 h-6" />
                  <span>Discuss on Telegram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whitepaper;