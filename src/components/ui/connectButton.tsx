import { ConnectButton as RainbowkitConnectButton } from "@rainbow-me/rainbowkit";
import { useTheme } from "../../context/context";
const formatAddress = (addr: string) => {
    return `${addr?.substring(0, 5)}...${addr?.substring(addr.length - 8)}`
  }
interface ConnectButtonProps {
  label: string;
  showBalance?: boolean;
}

export const ConnectButton = ({ label, showBalance }: ConnectButtonProps) => {
  const {theme, toggleTheme} = useTheme();
  return (
    <RainbowkitConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, mounted }) => {
        const ready = mounted
        const connected = ready && account && chain
        return (
          <div className = "w-full">
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className={`flex justify-center items-center font-bold place-contence-center h-[40px] w-full border-none  text-md outline-none bg-[#005FF0] hover:bg-[#005FF0]/90 px-2 rounded-md text-white`}
                  >
                    {theme?<img src="/ConnectWallet.png" width="20px" height="20px" />:<img src="/ConnectWalletWhite.png" width="20px" height="20px" />}
                    &nbsp;{label}
                  </button>
                )
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                )
              }
              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <button onClick={openAccountModal} type="button" className={`w-full bg-[#005FF0] hover:bg-[#005FF0]/90 h-[40px] px-2 rounded-md`}>
                    {formatAddress(account.address)}
                    {showBalance ? ` (${account.displayBalance})` : ""}
                  </button>
                </div>
              )
            })()}
          </div>
        )
      }}
    </RainbowkitConnectButton.Custom>
  )
}
