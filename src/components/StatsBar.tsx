import React from 'react';
import { useStats } from '../context/StatsContext';
import { TrendingUp, Users, Lock, BarChart3 } from 'lucide-react';

const StatsBar = () => {
  const { stats } = useStats();

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(2)}M`;
    } else if (num >= 1000) {
      return `$${(num / 1000).toFixed(0)}K`;
    }
    return `$${num.toLocaleString()}`;
  };

  return (
    <div className="bg-white border-y border-gray-500/60 py-8 px-4 sm:px-6 lg:px-8 font-meme">
      <h3 className="text-2xl font-meme font-bold text-black mb-4 text-center">This Isn't Just Rage. It's Revenue.</h3>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* 24H Volume */}
          <div className="bg-white rounded-lg p-6 border border-gray-500/50 shadow-xl relative overflow-hidden">
            {/* Watermark Emoji */}
            <span className="absolute opacity-10 text-6xl -right-2 -top-2 rotate-12 pointer-events-none select-none">💸</span>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <BarChart3 className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-sm text-black">24H Volume</p>
                <p className="text-2xl font-bold text-black">{formatNumber(stats.volume)}</p>
                <p className="text-xs text-black">📈 Growing...</p>
              </div>
            </div>
          </div>

          {/* Holders */}
          <div className="bg-white rounded-lg p-6 border border-gray-500/50 shadow-xl relative overflow-hidden">
            {/* Watermark Emoji */}
            <span className="absolute opacity-10 text-6xl -right-2 -top-2 rotate-12 pointer-events-none select-none">🔥</span>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-black">Holders</p>
                <p className="text-2xl font-bold text-black">{stats.holders.toLocaleString()}</p>
                <p className="text-xs text-black">🔥 Active</p>
              </div>
            </div>
          </div>

          {/* Liquidity */}
          <div className="bg-white rounded-lg p-6 border border-gray-500/50 shadow-xl relative overflow-hidden">
            {/* Watermark Emoji */}
            <span className="absolute opacity-10 text-6xl -right-2 -top-2 rotate-12 pointer-events-none select-none">🔒</span>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-yellow-500/20 rounded-lg">
                <Lock className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <p className="text-sm text-black">Liquidity Locked</p>
                <p className="text-2xl font-bold text-black">{stats.liquidity}%</p>
                <p className="text-xs text-black">🔒 Secure</p>
              </div>
            </div>
          </div>

          {/* Market Cap */}
          <div className="bg-white rounded-lg p-6 border border-gray-500/50 shadow-xl relative overflow-hidden">
            {/* Watermark Emoji */}
            <span className="absolute opacity-10 text-6xl -right-2 -top-2 rotate-12 pointer-events-none select-none">🚀</span>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <TrendingUp className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-black">Market Cap</p>
                <p className="text-2xl font-bold text-black">{formatNumber(stats.marketCap)}</p>
                <p className="text-xs text-black">🚀 Mooning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;