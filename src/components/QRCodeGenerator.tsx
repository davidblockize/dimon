import React, { useEffect, useState } from 'react';
import { X, Download, Share2 } from 'lucide-react';
import QRCode from 'qrcode';

interface QRCodeGeneratorProps {
  onClose: () => void;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ onClose }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const siteUrl = window.location.href;

  useEffect(() => {
    const generateQR = async () => {
      try {
        const url = await QRCode.toDataURL(siteUrl, {
          width: 256,
          margin: 2,
          color: {
            dark: '#1F2937',
            light: '#FFFFFF'
          }
        });
        setQrCodeUrl(url);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };

    generateQR();
  }, [siteUrl]);

  const downloadQR = () => {
    if (qrCodeUrl) {
      const link = document.createElement('a');
      link.download = 'dimon-qr-code.png';
      link.href = qrCodeUrl;
      link.click();
    }
  };

  const shareQR = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '$DIMON - From Banks to Building Billions',
          text: 'Check out $DIMON meme coin!',
          url: siteUrl
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(siteUrl);
      alert('URL copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-white">Share $DIMON</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="text-center">
          <div className="bg-white p-4 rounded-xl mb-6 inline-block">
            {qrCodeUrl ? (
              <img src={qrCodeUrl} alt="QR Code" className="w-48 h-48 mx-auto" />
            ) : (
              <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Generating QR...</span>
              </div>
            )}
          </div>

          <p className="text-gray-400 text-sm mb-6">
            Scan this QR code to visit $DIMON website
          </p>

          <div className="flex space-x-4">
            <button
              onClick={downloadQR}
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Download</span>
            </button>
            <button
              onClick={shareQR}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;