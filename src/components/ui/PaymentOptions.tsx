import React from 'react';

interface PaymentOption {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface PaymentOptionsProps {
  options: PaymentOption[];
  selectedOption: string;
  onSelect: (id: string) => void;
}

const PaymentOptions: React.FC<PaymentOptionsProps> = ({ 
  options, 
  selectedOption, 
  onSelect 
}) => {
  return (
    <div className="grid grid-cols-3 w-full gap-4">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option.id)}
          className={`flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all duration-300 w-full
            ${selectedOption === option.id 
              ? 'bg-blue-300 rounded-lg shadow-xl border border-blue-700/30' 
              : 'bg-gray-200 rounded-lg shadow-xl border border-gray-700/30'
            }`}
        >
          <span className={`${selectedOption === option.id ? 'text-blue-600' : 'text-gray-500'}`}>
            {option.icon}
          </span>
          <span className={`font-bold ${selectedOption === option.id ? 'text-blue-600' : 'text-gray-500'}`}>
            {option.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default PaymentOptions;