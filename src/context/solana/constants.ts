import { PublicKey } from '@solana/web3.js';

export const PRESALE_PROGRAM_ID = new PublicKey(import.meta.env.VITE_PRESALE_PROGRAM_ID!);
export const USER_INFO_SEED = import.meta.env.VITE_USER_INFO_SEED!;

export const PRESALE_SEED = import.meta.env.VITE_PRESALE_SEED!;
export const PRESALE_ID = import.meta.env.VITE_PRESALE_ID!;
export const PRESALE_ADMIN_ADDRESS = import.meta.env.VITE_PRESALE_ADMIN_ADDRESS!;
export const PRESALE_VAULT_ADDRESS = import.meta.env.VITE_PRESALE_VAULT_ADDRESS!;
