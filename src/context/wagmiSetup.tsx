import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider, darkTheme, connectorsForWallets, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { metaMaskWallet, coinbaseWallet, rainbowWallet, walletConnectWallet, trustWallet, phantomWallet } from "@rainbow-me/rainbowkit/wallets"
import { createStorage, cookieStorage } from 'wagmi';
import { createClient } from 'viem';
import { http} from "viem"
import { bsc, bscTestnet, sepolia} from 'wagmi/chains';

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [metaMaskWallet],
    },
    {
      groupName: "Other",
      wallets: [rainbowWallet, walletConnectWallet, coinbaseWallet, phantomWallet].filter(
        (wallet) => wallet !== trustWallet
      ),
    },
  ],
  {
    appName: "DimonPresale",
    projectId: "293a761c6f1f8691938d803059c73e54",
  }
)




// export const config = getDefaultConfig({
//   appName: "DirhamXstaking",
//   connectors,
//   projectId: "7c478498b3bd9f4248f866d080ebb208",
//   chains: [sepolia], //monda
//   transports: {
//     [sepolia.id]:  http("https://ethereum-sepolia-rpc.publicnode.com"),
//   },
//   ssr: true,
//   logging: true, // Enable logging for debugging
//   storage: createStorage({
//     storage: cookieStorage,
//   }),
// })
const IS_MAINNET = import.meta.env.VITE_PUBLIC_IS_MAINNET || "";
const isMainNet = IS_MAINNET === "true";

export const config = getDefaultConfig({
  appName: "DimonPresale",
  projectId: "293a761c6f1f8691938d803059c73e54",
  chains: isMainNet ? [bsc] : [bscTestnet],
  // chains: [bscTestnet],
  transports: {
    [bsc.id]: http(import.meta.env.VITE_ENDPOINT_MAINNET),
    [bscTestnet.id]: http(import.meta.env.VITE_ENDPOINT_TESTNET),
  },
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
})


