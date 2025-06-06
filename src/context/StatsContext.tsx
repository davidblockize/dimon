import React, { createContext, useContext, useEffect, useState } from 'react';

interface Stats {
  volume: number;
  holders: number;
  liquidity: number;
  marketCap: number;
  lastUpdate: number;
}

interface StatsContextType {
  stats: Stats;
  updateStats: () => void;
}

const StatsContext = createContext<StatsContextType | undefined>(undefined);

export const useStats = () => {
  const context = useContext(StatsContext);
  if (!context) {
    throw new Error('useStats must be used within a StatsProvider');
  }
  return context;
};

export const StatsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stats, setStats] = useState<Stats>(() => {
    // Try to load from localStorage
    const stored = localStorage.getItem('dimon-stats');
    if (stored) {
      return JSON.parse(stored);
    }
    
    // Default values
    return {
      volume: 1012837,
      holders: 982,
      liquidity: 100,
      marketCap: 2500000,
      lastUpdate: Date.now()
    };
  });

  const updateStats = () => {
    const now = Date.now();
    const timeSinceUpdate = now - stats.lastUpdate;
    
    // Update every 30 seconds minimum
    if (timeSinceUpdate < 30000) {
      return;
    }

    // Realistic growth rates per minute
    const minutesPassed = Math.floor(timeSinceUpdate / 60000);
    const volumeGrowth = Math.random() * 1000 * minutesPassed + 100; // $100-$1000 per minute
    const holderGrowth = Math.floor(Math.random() * 2) * minutesPassed; // 0-2 holders per minute
    const marketCapGrowth = volumeGrowth * 0.5; // Market cap grows with volume

    setStats(prevStats => {
      const newStats = {
        volume: Math.floor(prevStats.volume + volumeGrowth),
        holders: prevStats.holders + holderGrowth,
        liquidity: 100, // Always 100%
        marketCap: Math.floor(prevStats.marketCap + marketCapGrowth),
        lastUpdate: now
      };
      
      // Save to localStorage
      localStorage.setItem('dimon-stats', JSON.stringify(newStats));
      
      return newStats;
    });
  };

  useEffect(() => {
    // Update stats on component mount
    updateStats();
    
    // Set up interval for periodic updates
    const interval = setInterval(updateStats, 30000); // Every 30 seconds
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Update stats when page becomes visible
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        updateStats();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [stats]);

  return (
    <StatsContext.Provider value={{ stats, updateStats }}>
      {children}
    </StatsContext.Provider>
  );
};