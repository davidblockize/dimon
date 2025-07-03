import React, { useEffect, useState } from 'react';
import { BarChart3, DollarSign, Flame, X } from 'lucide-react';
import { useStats } from '../context/StatsContext';

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

const FloatingBadgeStrip = () => {
  const { stats } = useStats();
  const [memeScore, setMemeScore] = useState(42069);
  const [visible, setVisible] = useState(true);

  // Animate numbers
  const animatedVolume = useAnimatedNumber(stats.volume);
  const animatedMarketCap = useAnimatedNumber(stats.marketCap);
  const animatedMemeScore = useAnimatedNumber(memeScore);

  // Update meme score every 5s (mock)
  useEffect(() => {
    const interval = setInterval(() => {
      setMemeScore((prev) => prev + Math.floor(Math.random() * 10) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none px-2 sm:px-0 font-meme">
      <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-8 px-4 sm:px-8 py-3 rounded-2xl shadow-2xl bg-white/80 backdrop-blur-md border border-blue-200/40 pointer-events-auto animate-fade-in-up w-full max-w-md sm:max-w-3xl mx-auto items-center">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 sm:top-2 sm:right-2 p-1 rounded-full hover:bg-gray-200 transition text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Close badge strip"
          onClick={() => setVisible(false)}
        >
          <X className="w-5 h-5" />
        </button>
        {/* Volume */}
        <div className="flex items-center gap-2 min-w-[100px]">
          <BarChart3 className="w-6 h-6 text-blue-500" />
          <span className="font-bold text-blue-700 text-base sm:text-lg">{animatedVolume.toLocaleString()}</span>
          <span className="text-xs text-blue-500 font-semibold hidden sm:inline">Volume</span>
        </div>
        {/* Market Cap */}
        <div className="flex items-center gap-2 min-w-[100px]">
          <DollarSign className="w-6 h-6 text-green-500" />
          <span className="font-bold text-green-700 text-base sm:text-lg">{animatedMarketCap.toLocaleString()}</span>
          <span className="text-xs text-green-500 font-semibold hidden sm:inline">Market Cap</span>
        </div>
        {/* Meme Score */}
        <div className="flex items-center gap-2 min-w-[100px]">
          <Flame className="w-6 h-6 text-pink-500" />
          <span className="font-bold text-pink-700 text-base sm:text-lg">{animatedMemeScore.toLocaleString()}</span>
          <span className="text-xs text-pink-500 font-semibold hidden sm:inline">Meme Score</span>
        </div>
      </div>
    </div>
  );
};

export default FloatingBadgeStrip; 