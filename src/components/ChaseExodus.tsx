import React, { useState, useEffect } from 'react';
import { TrendingDown, Users, DollarSign, ArrowRight } from 'lucide-react';

// Animated number hook
function useAnimatedNumber(target: number, duration = 1000) {
  const [display, setDisplay] = useState(target);
  useEffect(() => {
    let start = display;
    let startTime: number | null = null;
    if (start === target) return;
    function animate(ts: number) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setDisplay(Math.floor(start + (target - start) * progress));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }
    requestAnimationFrame(animate);
    // eslint-disable-next-line
  }, [target]);
  return display;
}

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

  // Animated numbers
  const animatedCustomersLost = useAnimatedNumber(customersLost);
  const animatedFeesAvoided = useAnimatedNumber(feesAvoided);
  const animatedNewHolders = useAnimatedNumber(Math.floor(customersLost * 0.7));

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black font-meme">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-meme font-bold mb-6">
            The Great Chase Exodus
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Join the rebellion. Exit the matrix. Chase no more — choose $DIMON.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Customers Lost */}
          <div className="p-8 text-center shadow-xl relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 via-blue-100/60 to-blue-300/40 border-2 border-blue-400/40 backdrop-blur-md">
            {/* Watermark Emoji */}
            <span className="absolute opacity-10 text-7xl -right-4 -top-4 rotate-12 pointer-events-none select-none">🧍‍♂️</span>
            <div className="flex justify-center items-center mb-4">
              <TrendingDown className="w-20 h-20 text-red-500 drop-shadow-lg bg-white/60 rounded-full p-3 border-4 border-red-200" />
            </div>
            <h3 className="text-2xl font-bold mb-2">🧍‍♂️Chase Customers Lost Today</h3>
            <p className="text-5xl font-extrabold mb-2 text-blue-700 tracking-tight">
              {animatedCustomersLost.toLocaleString()}
            </p>
          </div>

          {/* Fees Avoided */}
          <div className="p-8 text-center shadow-xl relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 via-green-100/60 to-green-300/40 border-2 border-green-400/40 backdrop-blur-md">
            {/* Watermark Emoji */}
            <span className="absolute opacity-10 text-7xl -right-4 -top-4 rotate-12 pointer-events-none select-none">💸</span>
            <div className="flex justify-center items-center mb-4">
              <DollarSign className="w-20 h-20 text-green-500 drop-shadow-lg bg-white/60 rounded-full p-3 border-4 border-green-200" />
            </div>
            <h3 className="text-2xl font-bold mb-2">💸 Paper Handed</h3>
            <p className="text-5xl font-extrabold mb-2 text-green-700 tracking-tight">
              ${animatedFeesAvoided.toLocaleString()}
            </p>
          </div>

          {/* New $DIMON Holders */}
          <div className="p-8 text-center shadow-xl relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 via-yellow-100/60 to-yellow-300/40 border-2 border-yellow-400/40 backdrop-blur-md">
            {/* Watermark Emoji */}
            <span className="absolute opacity-10 text-7xl -right-4 -top-4 rotate-12 pointer-events-none select-none">🚪</span>
            <div className="flex justify-center items-center mb-4">
              <Users className="w-20 h-20 text-yellow-500 drop-shadow-lg bg-white/60 rounded-full p-3 border-4 border-yellow-200" />
            </div>
            <h3 className="text-2xl font-bold mb-2">🚪 Your Exodus Block</h3>
            <p className="text-5xl font-extrabold mb-2 text-yellow-700 tracking-tight">
              {animatedNewHolders.toLocaleString()}
            </p>
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
          <div className="rounded-2xl p-8 border border-gray-500/50 shadow-xl relative overflow-hidden">
            <h3 className="text-3xl font-bold mb-4">Join the Exodus</h3>
            <p className="text-xl mb-6">
              Be part of the movement that's proving Jamie Dimon wrong, one transaction at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-7 justify-center">
              <a
                href="https://app.pancakeswap.org/#/swap?outputCurrency=0x1234567890abcdef1234567890abcdef12345678"
                target="_blank"
                rel="noopener noreferrer"
                // className="font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 text-lg"
                className="space-x-2 bg-[#005FF0] hover:bg-[#005FF0eF] px-3 py-2 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center text-md justify-center"
              >
                <span>Escape Chase Now</span>
                {/* <ArrowRight className="w-6 h-6" /> */}
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#005FF0] text-[#005FF0] hover:text-[#005FF0eF] font-bold px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-md justify-center"
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