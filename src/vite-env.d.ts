/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PRESALE_PRICE_PER_TOKEN: number;
    readonly VITE_PRESALE_PRICE_PER_TOKEN_NEXT: number;
    readonly VITE_PRESALE_HARDCAP_USD_AMOUNT: number;
    readonly VITE_ENDPOINT_MAINNET: string;
    readonly VITE_ENDPOINT_TESTNET: string;

    readonly VITE_PUBLIC_IS_MAINNET: string;
    readonly VITE_PRESALE_PROGRAM_ID: string;
    readonly VITE_USER_INFO_SEED: string;
    readonly VITE_PRESALE_SEED: string;
    readonly VITE_PRESALE_ID: number;
    readonly VITE_PRESALE_ADMIN_ADDRESS: string;
    readonly VITE_PRESALE_VAULT_ADDRESS: string;
    readonly VITE_SOLANA_RPC_MAINNET: string;
    readonly VITE_SOLANA_RPC_DEVNET: string;
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv;
}