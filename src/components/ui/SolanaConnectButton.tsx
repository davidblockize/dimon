import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

interface SolanaConnectButtonProps {
  label: string;
  backgroundColor?: string;
  color?: string;
}

const SolanaConnectButton: React.FC<SolanaConnectButtonProps> = ({ label, backgroundColor, color }) => {
  return (
    <WalletMultiButton
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        padding: '0 0.5rem',
        width: '100%',
        border: 'none',
        fontSize: '1rem',
        lineHeight: '1.5rem',
        outline: 'none',
        background: backgroundColor,
        borderRadius: '0.5rem',
        color: color,
        transition: 'background 0.2s',
        cursor: 'pointer',
        fontFamily: 'Comic Neue, Bangers, cursive',
      }}
      startIcon={<img src="/ConnectWallet.png" width="20px" height="20px" />}
    >
      {/* {label} */}
    </WalletMultiButton>
  );
};

export default SolanaConnectButton; 