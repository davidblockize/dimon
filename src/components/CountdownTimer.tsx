import React from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isActive: boolean;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  days,
  hours,
  minutes,
  seconds,
  isActive,
}) => {
  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  if (!isActive) {
    return (
      <div className="tems-center justify-center mb-4">
        <div className="flex items-center justify-center">
          <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
          <h2 className="ml-2 font-bold text-black text-[40px] text-center tracking-[0] leading-[48px] whitespace-nowrap">Presale Live</h2>
        </div>
        <h4 className="mt-2 font-bold text-black text-[20px] text-center tracking-[0] leading-[24px]">Secure your spot before Jamie sees this.</h4>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-center mb-4">
        <h2 className="font-bold text-black text-[40px] text-center tracking-[0] leading-[48px] whitespace-nowrap">Presale Starts In</h2>
      </div>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-6 px-3 sm:px-6 rounded-xl shadow-lg w-full">
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: 'Days', value: days },
            { label: 'Hours', value: hours },
            { label: 'Minutes', value: minutes },
            { label: 'Seconds', value: seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/20 backdrop-blur-sm rounded-lg py-3 px-0 sm:px-3 text-center transform transition-all duration-300 hover:scale-105"
            >
              <div className="text-2xl font-bold text-white mb-1 font-mono tabular-nums">
                {formatNumber(item.value)}
              </div>
              <div className="text-xs text-white/80 uppercase tracking-wide">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
    
  );
};

export default CountdownTimer;