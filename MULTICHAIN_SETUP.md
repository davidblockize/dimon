# Multichain Presale Setup

This document explains how to set up the multichain presale functionality for the DIMON project.

## Overview

The DIMON project now supports both BSC (Binance Smart Chain) and Solana presales. Users can switch between chains using the payment options in the presale card.

## Architecture

### Components

1. **MultichainContext** (`src/context/MultichainContext.tsx`)
   - Manages chain selection state
   - Provides wallet connection status for both chains
   - Handles chain switching logic

2. **SolanaWalletProvider** (`src/context/SolanaWalletProvider.tsx`)
   - Wraps the Solana wallet adapter
   - Provides Solana wallet connection functionality

3. **SolanaPresaleService** (`src/services/SolanaPresaleService.ts`)
   - Handles Solana-specific presale operations
   - Manages Solana contract interactions
   - Calculates token amounts for SOL payments

4. **PresaleCard** (`src/components/PresaleCard.tsx`)
   - Updated to handle both BSC and Solana workflows
   - Dynamically switches between chains based on payment selection
   - Shows appropriate connect buttons for each chain

## Setup Instructions

### 1. Environment Variables

Add the following environment variables to your `.env` file:

```env
# BSC Configuration (existing)
VITE_PRESALE_ADMIN_ADDRESS=your_bsc_admin_address
VITE_PRESALE_PRICE_PER_TOKEN=0.001
VITE_PRESALE_PRICE_PER_TOKEN_NEXT=0.002

# Solana Configuration (new)
VITE_SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
VITE_SOLANA_PRESALE_PROGRAM_ID=your_solana_presale_program_id
VITE_SOLANA_PRESALE_ADMIN_ADDRESS=your_solana_admin_address
```

### 2. Solana Program Setup

You'll need to deploy a Solana presale program. The current implementation includes placeholder functions that need to be replaced with actual Solana program calls.

Key functions to implement in `SolanaPresaleService.ts`:

- `getPresaleInfo()` - Fetch presale information from Solana program
- `buyWithSOL()` - Execute SOL purchase transaction
- `getTokenBalance()` - Get user's token balance
- `calculateTokensToReceive()` - Calculate tokens based on SOL amount

### 3. Contract Addresses

Replace the placeholder addresses in `SolanaPresaleService.ts`:

```typescript
const SOLANA_PRESALE_PROGRAM_ID = new PublicKey('YOUR_PRESALE_PROGRAM_ID');
const SOLANA_PRESALE_ADMIN_ADDRESS = new PublicKey('YOUR_PRESALE_ADMIN_ADDRESS');
```

## Usage

### For Users

1. **Select Payment Method**: Choose between BNB, SOL, or CARD
2. **Connect Wallet**: 
   - For BNB: Use MetaMask or other EVM wallets
   - For SOL: Use Phantom, Solflare, or other Solana wallets
3. **Enter Amount**: Input the amount of BNB or SOL to spend
4. **Buy Tokens**: Click the buy button to execute the transaction

### For Developers

The multichain functionality is automatically handled by the context providers. The `selectedChain` state determines which blockchain operations to perform.

```typescript
const { selectedChain, setSelectedChain } = useMultichain();

// Switch to Solana
setSelectedChain('solana');

// Switch to BSC
setSelectedChain('bsc');
```

## Dependencies

The following Solana packages have been added to `package.json`:

- `@solana/web3.js` - Solana Web3 library
- `@solana/wallet-adapter-react` - React wallet adapter
- `@solana/wallet-adapter-react-ui` - UI components for wallet connection
- `@solana/wallet-adapter-wallets` - Wallet adapters for various Solana wallets
- `@solana/spl-token` - SPL token utilities
- `@project-serum/anchor` - Anchor framework for Solana programs

## Next Steps

1. **Deploy Solana Program**: Create and deploy the actual Solana presale program
2. **Update Contract Calls**: Replace placeholder functions with real Solana program calls
3. **Testing**: Test both BSC and Solana workflows thoroughly
4. **UI Polish**: Enhance the UI to better indicate which chain is selected
5. **Error Handling**: Add comprehensive error handling for both chains

## Troubleshooting

### Common Issues

1. **Solana Wallet Not Connecting**: Ensure the Solana wallet provider is properly configured
2. **Transaction Failures**: Check RPC endpoint and network configuration
3. **Type Errors**: Make sure all Solana packages are properly installed

### Debug Mode

Enable debug logging by adding console.log statements in the Solana service functions to track transaction flow. 