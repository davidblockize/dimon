/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PRESALE_PRICE_PER_TOKEN: number;
    readonly VITE_PRESALE_PRICE_PER_TOKEN_NEXT: number;
    readonly VITE_PRESALE_HARDCAP_USD_AMOUNT: number;
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv;
}