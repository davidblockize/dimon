import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePaymentMethod } from '../context/PaymentMethodContext';

const CardPaymentInfo = () => {
  const navigate = useNavigate();
  const { setSelectedPaymentMethod } = usePaymentMethod();

  const handleBack = () => {
    setSelectedPaymentMethod('bnb');
    navigate('/');
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 font-meme flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-2xl mx-auto">
        {/* Logo and Back Button */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handleBack}
            className="flex items-center text-white hover:text-yellow-300 font-bold text-lg transition-colors"
          >
            <svg className="mr-2" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
            Back
          </button>
          <img src="/logo.png" alt="Dimon Logo" className="h-14 w-14 object-contain" />
        </div>
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-200">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-6">Pay with Card</h1>
          <p className="mb-8 text-lg text-blue-800 text-center">Purchase Dimon tokens ($DIMON) Using a Card</p>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-600 mb-4">New to DeFi?</h2>
            <p className="mb-6 text-gray-700">Getting started is simple! You can buy $DIMON tokens with your credit or debit card—no verification or KYC required.</p>
            <h3 className="text-xl font-bold text-blue-700 mb-2">Step 1: Buy ETH Using Your Card</h3>
            <p className="mb-2 text-gray-800">Head to one of these trusted platforms to purchase Ethereum (ETH):</p>
            <ul className="mb-4 list-disc list-inside space-y-1">
              <li><a href="https://ramp.network/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">Ramp Network</a></li>
              <li><a href="https://transak.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">Transak</a></li>
              <li><a href="https://www.moonpay.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">MoonPay</a></li>
            </ul>
            <p className="mb-4 text-gray-500 text-sm">Follow the platform’s instructions to buy ETH and send it directly to your wallet.</p>
            <p className="mb-8 text-yellow-700 text-sm font-medium">Tip: To cover all costs, including gas fees for buying $DIMON, we recommend purchasing at least $50 worth of ETH.</p>
            <h3 className="text-xl font-bold text-blue-700 mb-2">Step 2: Swap ETH for $DIMON</h3>
            <p className="mb-2 text-gray-800">Once ETH is in your wallet, use it to purchase $DIMON.</p>
            <ul className="mb-4 list-disc list-inside space-y-1">
              <li>Connect your wallet to the Dimon website.</li>
              <li>Follow the steps outlined in the “How to Buy $DIMON” guide.</li>
            </ul>
            <p className="text-gray-500 text-sm mt-4"><span className="font-bold text-yellow-700">Note:</span> Make sure your wallet has enough ETH to cover both the $DIMON purchase and any gas fees.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardPaymentInfo; 