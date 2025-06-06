import React from 'react';
import { Image, Zap } from 'lucide-react';

const MemeGrid = () => {
  const memes = [
    {
      id: 1,
      url: '/dimen_1.png',
      title: 'Jamie vs Crypto',
      description: 'When he said Bitcoin is fraud but $DIMON hits ATH'
    },
    {
      id: 2,
      url: '/dimen_2.png',
      title: 'Chase Overdraft Fees',
      description: '$35 overdraft vs $0 $DIMON transactions'
    },
    {
      id: 3,
      url: '/dimen_3.png',
      title: 'Banking vs DeFi',
      description: '0.01% savings rate vs ∞% moon potential'
    },
    {
      id: 4,
      url: '/dimen_4.png',
      title: 'Crypto is Worthless',
      description: '$DIMON holders: Hold my beer 🍺'
    },
    {
      id: 5,
      url: '/dimen_1.png',
      title: 'CEO Salary Comparison',
      description: 'Jamie: $34M/year | $DIMON Dev: $0 (renounced)'
    },
    {
      id: 6,
      url: '/dimen_2.png',
      title: 'The Great Exodus',
      description: 'Chase customers fleeing to $DIMON daily'
    },
    {
      id: 7,
      url: '/dimen_3.png',
      title: 'JPM Coin Hypocrisy',
      description: 'Crypto is worthless... launches JPM Coin 🤔'
    },
    {
      id: 8,
      url: '/dimen_4.png',
      title: 'Diamond Hands vs Bank Fees',
      description: 'HODLing $DIMON > Paying Chase fees'
    },
    {
      id: 9,
      url: '/dimen_1.png',
      title: 'Financial Freedom',
      description: 'From bank slave to $DIMON millionaire'
    }
  ];

  return (
    <section id="memes" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meme <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The best $DIMON vs Chase Bank memes from our community. Because every revolution needs its laughs!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memes.map((meme, index) => (
            <div key={meme.id} className="group cursor-pointer">
              <div className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="aspect-square bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img 
                    src={meme.url} 
                    alt={meme.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="flex flex-col items-center justify-center h-full text-gray-400">
                            <div class="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center mb-4">
                              <span class="text-gray-900 font-bold text-2xl">$</span>
                            </div>
                            <p class="text-sm text-center px-4">${meme.title}</p>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{meme.title}</h3>
                  <p className="text-gray-400 text-sm">{meme.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-yellow-400/20 to-red-400/20 rounded-2xl p-8 border border-yellow-500/30">
            <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Got a $DIMON vs Chase Meme?</h3>
            <p className="text-gray-300 mb-6">
              Share your best anti-banking, pro-$DIMON memes with the community!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
              >
                Share on Telegram
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
              >
                Share on X
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemeGrid;