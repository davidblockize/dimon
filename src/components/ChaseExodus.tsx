import React, { useState, useEffect } from 'react';
import { TrendingDown, Users, DollarSign, ArrowRight } from 'lucide-react';

const ChaseExodus = () => {
  const [customersLost, setCustomersLost] = useState(() => {
    const stored = localStorage.getItem('chase-customers-lost');
    return stored ? parseInt(stored) : 2847;
  });

  const [feesAvoided, setFeesAvoided] = useState(() => {
    const stored = localStorage.getItem('fees-avoided');
    return stored ? parseInt(stored) : 127450;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const lastUpdate = localStorage.getItem('chase-exodus-last-update');
      const timeSinceUpdate = now - (lastUpdate ? parseInt(lastUpdate) : now);
      
      if (timeSinceUpdate > 30000) { // Update every 30 seconds
        const newCustomersLost = customersLost + Math.floor(Math.random() * 3) + 1;
        const newFeesAvoided = feesAvoided + (Math.floor(Math.random() * 105) + 35); // $35-$140 in fees avoided
        
        setCustomersLost(newCustomersLost);
        setFeesAvoided(newFeesAvoided);
        
        localStorage.setItem('chase-customers-lost', newCustomersLost.toString());
        localStorage.setItem('fees-avoided', newFeesAvoided.toString());
        localStorage.setItem('chase-exodus-last-update', now.toString());
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [customersLost, feesAvoided]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 to-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Great <span className="text-red-400">Chase Exodus</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join the rebellion. Exit the matrix. Chase no more — choose $DIMON.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Customers Lost */}
          <div className="bg-red-900/30 rounded-2xl p-8 border border-red-500/50 text-center">
            <TrendingDown className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">🧍‍♂️Chase Customers Lost Today</h3>
            <p className="text-5xl font-bold text-red-400 mb-2">{customersLost.toLocaleString()}</p>
            {/* <p className="text-gray-400">And counting... 📉</p>
            <div className="mt-4 bg-red-800/30 rounded-lg p-3">
              <p className="text-red-300 text-sm">
                "I'd rather trust a meme coin than Jamie's overdraft fees"
              </p>
              <p className="text-gray-500 text-xs mt-1">- Anonymous Ex-Chase Customer</p>
            </div> */}
          </div>

          {/* Fees Avoided */}
          <div className="bg-green-900/30 rounded-2xl p-8 border border-green-500/50 text-center">
            <DollarSign className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">💸 Paper Handed</h3>
            <p className="text-5xl font-bold text-green-400 mb-2">${feesAvoided.toLocaleString()}</p>
            {/* <p className="text-gray-400">Saved from overdrafts 💰</p> */}
            {/* <div className="mt-4 bg-green-800/30 rounded-lg p-3">
              <p className="text-green-300 text-sm">
                Average Chase customer pays $329/year in fees
              </p>
              <p className="text-gray-500 text-xs mt-1">$DIMON holders pay: $0</p>
            </div> */}
          </div>

          {/* New $DIMON Holders */}
          <div className="bg-yellow-900/30 rounded-2xl p-8 border border-yellow-500/50 text-center">
            <Users className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">🚪 Your Exodus Block</h3>
            <p className="text-5xl font-bold text-yellow-400 mb-2">{Math.floor(customersLost * 0.7).toLocaleString()}</p>
            {/* <p className="text-gray-400">Freedom fighters 🚀</p> */}
            {/* <div className="mt-4 bg-yellow-800/30 rounded-lg p-3">
              <p className="text-yellow-300 text-sm">
                70% conversion rate from Chase refugees
              </p>
              <p className="text-gray-500 text-xs mt-1">Welcome to financial freedom!</p>
            </div> */}
          </div>
        </div>

        {/* Comparison Table */}
        {/* <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700 mb-8">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Chase vs $DIMON: The Truth</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-4 px-6 text-gray-400">Feature</th>
                  <th className="py-4 px-6 text-red-400">Chase Bank</th>
                  <th className="py-4 px-6 text-yellow-400">$DIMON</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Overdraft Fees</td>
                  <td className="py-4 px-6 text-red-400">$35 per transaction</td>
                  <td className="py-4 px-6 text-green-400">$0 forever</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Monthly Maintenance</td>
                  <td className="py-4 px-6 text-red-400">$12-25/month</td>
                  <td className="py-4 px-6 text-green-400">$0 forever</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Savings Interest</td>
                  <td className="py-4 px-6 text-red-400">0.01% APY</td>
                  <td className="py-4 px-6 text-green-400">∞% moon potential</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">CEO Salary</td>
                  <td className="py-4 px-6 text-red-400">$34,000,000/year</td>
                  <td className="py-4 px-6 text-green-400">$0 (renounced)</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Crypto Stance</td>
                  <td className="py-4 px-6 text-red-400">"Bitcoin is fraud"</td>
                  <td className="py-4 px-6 text-green-400">Built on blockchain</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Customer Control</td>
                  <td className="py-4 px-6 text-red-400">Zero say in decisions</td>
                  <td className="py-4 px-6 text-green-400">Community governed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400/20 to-red-400/20 rounded-2xl p-8 border border-yellow-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">Join the Exodus</h3>
            <p className="text-xl text-gray-300 mb-6">
              Be part of the movement that's proving Jamie Dimon wrong, one transaction at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.pancakeswap.org/#/swap?outputCurrency=0x1234567890abcdef1234567890abcdef12345678"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 text-lg"
              >
                <span>Escape Chase Now</span>
                <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-lg"
              >
                <span>Share Your Chase Horror Story</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChaseExodus;