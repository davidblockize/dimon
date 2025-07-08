import React, { createContext, useContext, useState, ReactNode } from 'react';

export type PaymentMethodType = 'bnb' | 'sol' | 'card';

interface PaymentMethodContextType {
  selectedPaymentMethod: PaymentMethodType;
  setSelectedPaymentMethod: (method: PaymentMethodType) => void;
}

const PaymentMethodContext = createContext<PaymentMethodContextType | undefined>(undefined);

interface PaymentMethodProviderProps {
  children: ReactNode;
}

export const PaymentMethodProvider: React.FC<PaymentMethodProviderProps> = ({ children }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethodType>('bnb');

  const contextValue: PaymentMethodContextType = {
    selectedPaymentMethod,
    setSelectedPaymentMethod,
  };

  return (
    <PaymentMethodContext.Provider value={contextValue}>
      {children}
    </PaymentMethodContext.Provider>
  );
};

export const usePaymentMethod = () => {
  const context = useContext(PaymentMethodContext);
  if (context === undefined) {
    throw new Error('usePaymentMethod must be used within a PaymentMethodProvider');
  }
  return context;
}; 