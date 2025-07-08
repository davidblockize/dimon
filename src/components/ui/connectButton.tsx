import { ConnectButton as RainbowkitConnectButton } from "@rainbow-me/rainbowkit";
import { useTheme } from "../../context/context";
const formatAddress = (addr: string) => {
    return `${addr?.substring(0, 5)}...${addr?.substring(addr.length - 8)}`
  }
interface ConnectButtonProps {
  label: string;
  showBalance?: boolean;
  backgroundColor?: string;
  color?: string;
}

export const ConnectButton = ({ label, showBalance, backgroundColor, color }: ConnectButtonProps) => {
  const {theme, toggleTheme} = useTheme();
  return (
    <RainbowkitConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, mounted }) => {
        const ready = mounted
        const connected = ready && account && chain
        return (
          <div className = {`w-full text-base font-bold ${color}`}>
            {(() => {
              if (!connected) {
                return (
                  <div className="flex justify-center items-center">
                    {/* {theme?<img src="/ConnectWallet.png" width="20px" height="20px" />:<img src="/ConnectWalletWhite.png" width="20px" height="20px" />} */}
                    <button
                      onClick={openConnectModal}
                      type="button"
                      className={`flex justify-center items-center place-contence-center py-3 w-full border-none outline-none ${backgroundColor} px-2 rounded-lg`}
                    >
                      {label}
                    </button>
                  </div>
                  
                )
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button" className={`${backgroundColor} border-none`}>
                    Wrong network
                  </button>
                )
              }
              return (
                <div style={{ display: "flex" }}>
                  {/* {theme?<img src="/ConnectWallet.png" width="20px" height="20px" />:<img src="/ConnectWalletWhite.png" width="20px" height="20px" />} */}
                  <button onClick={openAccountModal} type="button" className={`w-full ${backgroundColor} px-2 py-2 rounded-lg`}>
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
