import React, { useEffect, useState } from 'react';

interface TokenPriceProps {
  currentPrice: number;
  nextPrice: number;
  symbol: string;
  tokensSold: number;
}

const TokenPrice: React.FC<TokenPriceProps> = ({ tokensSold, currentPrice, nextPrice, symbol }) => {
  const [tokensSoldAmount, setTokensSoldAmount] = useState(0);
  useEffect(() => {
    if (tokensSold) {
      setTokensSoldAmount(tokensSold);
    }
  }, [tokensSold])

  return (
    // <div className="flex flex-col sm:flex-row justify-between items-center w-full py-3 px-4 rounded-lg border border-gray-500/50">
    //   <div className="flex items-center space-x-2">
    //     <span className="text-black font-medium">1 {symbol} = </span>
    //     {/* <span className="text-green-400 font-semibold">${currentPrice}</span> */}
    //     <span className="text-black font-semibold">$ 0.0006</span>
    //   </div>
    //   <div className="flex items-center">
    //     {/* <span className="text-yellow-400 font-medium">Next Price: ${nextPrice}</span> */}
    //     <span className="text-black font-medium">Listing Price: $ 0.0007</span>
    //   </div>
    // </div>

    <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-xl space-y-2 shadow-xl relative overflow-hidden">
      {/* Watermark Emoji */}
      <span className="absolute opacity-10 text-5xl -right-2 -top-2 rotate-12 pointer-events-none select-none">💲</span>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">Tokens Sold</span>
        <span className="font-semibold">{tokensSoldAmount.toLocaleString()}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">Presale Price</span>
        <span className="font-semibold">1 $DIMON = $0.0006</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">Listing Price</span>
        <span className="font-semibold text-green-600">$0.0007</span>
      </div>
    </div>
  );
};

export default TokenPrice;