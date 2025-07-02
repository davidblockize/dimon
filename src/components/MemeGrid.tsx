import React from 'react';
import { Image, Zap } from 'lucide-react';

const MemeGrid = () => {
  const memes = [
    {
      id: 1,
      url: '/dimon_1.png',
      title: 'Jamie vs Crypto',
      description: 'Jamie said Bitcoin was fraud. Then $DIMON hit ATH.'
    },
    {
      id: 2,
      url: '/dimon_2.png',
      title: 'Chase Overdraft Fees',
      description: '$35 to borrow your own money? Nah, we mint instead.”'
    },
    {
      id: 3,
      url: '/dimon_3.png',
      title: 'Banking vs DeFi',
      description: '0.01% interest vs ∞% moon juice'
    },
    {
      id: 4,
      url: '/dimon_4.png',
      title: 'Crypto is Worthless',
      description: '$DIMON holders: Hold my beer, and my bag.'
    },
    {
      id: 5,
      url: '/dimon_1.png',
      title: 'CEO Salary Comparison',
      description: 'Jamie: $34M. Dev: $0. Vibes: priceless.'
    },
    {
      id: 6,
      url: '/dimon_2.png',
      title: 'The Great Exodus',
      description: '2,847 customers lost today. Guess who they chose?'
    },
    {
      id: 7,
      url: '/dimon_3.png',
      title: 'JPM Coin Hypocrisy',
      description: 'Crypto is a scam... launches JPM Coin'
    },
    {
      id: 8,
      url: '/dimon_4.png',
      title: 'Diamond Hands vs Bank Fees',
      description: '$DIMON to the moon. Chase fees to the floor.'
    },
    {
      id: 9,
      url: '/dimon_1.png',
      title: 'Financial Freedom',
      description: 'From Chase slave to meme-made millionaire.'
    }
  ];

  return (
    <section id="memes" className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meme Gallery - Where the bank jokes print faster than fiat.
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Scroll through. Save your faves. Share the pain of a collapsing fiat system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-32 gap-y-8">
          {memes.map((meme, index) => (
            <div key={meme.id} className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden border border-gray-500/50 transition-all duration-300 transform hover:scale-105 min-h-[453px]">
                <div className="aspect-square flex items-center justify-center overflow-hidden">
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
                          <div class="flex flex-col items-center justify-center h-full">
                            <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4">
                              <span class="font-bold text-2xl">$</span>
                            </div>
                            <p class="text-sm text-center px-4">${meme.title}</p>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{meme.title}</h3>
                  <p className="text-sm">{meme.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="rounded-2xl p-8 border border-gray-500/50">
            <Zap className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Have meme. Will revolt. Drop your best $DIMON vs Jamie slaps.</h3>
            <p className="mb-6 font-medium">
              Share your best anti-banking, pro-$DIMON memes with the community!
            </p>
            <div className="flex flex-col sm:flex-row gap-7 justify-center">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="space-x-2 bg-[#005FF0] hover:bg-[#005FF0eF] px-3 py-2 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center text-md justify-center"
              >
                Share on Telegram
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#005FF0] text-[#005FF0] hover:text-[#005FF0eF] font-bold px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-md justify-center"
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