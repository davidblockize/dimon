import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { readContract } from "@wagmi/core"
import { parseEther, erc20Abi } from "viem"
import { config } from "../context/wagmiSetup";
import { useAccount, useWriteContract, usePublicClient } from 'wagmi'
import { waitForTransactionReceipt } from "viem/actions";
import { Card, CardContent } from "./ui/card";
import TokenPrice from "./ui/TokenPrice";
import PresaleProgress from "./ui/PresaleProgress";
import { ABI } from "../idl/idl";
import { contracts } from '../constants/contracts'
import { ConnectButton } from "./ui/connectButton";
import CountdownTimer from "./CountdownTimer";
import { useCountdown } from "../hooks/useCountdown";

const PresaleCard = (): JSX.Element => {
  const adminAddress = import.meta.env.VITE_PRESALE_ADMIN_ADDRESS;
  const currentPrice = import.meta.env.VITE_PRESALE_PRICE_PER_TOKEN;
  const nextPrice = import.meta.env.VITE_PRESALE_PRICE_PER_TOKEN_NEXT;

  const { address, isConnected } = useAccount()
  const [payAmount, setPayAmount] = useState<string>('0');
  const [receiveAmount, setReceiveAmount] = useState<string>('0');
  const [usdRasiedAmount, setUsdRaisedAmount] = useState(0);
  const [tokenSoldAmount, setTokenSoldAmount] = useState(0);
  const [tokenBalanceAmount, setTokenBalance] = useState(0);
  const [status, setStatus] = useState(false);
  const [presaleStartDate, setPresaleStartDate] = useState(1750366300000)

  const { writeContractAsync } = useWriteContract();
  const publicClient = usePublicClient({ chainId: 97 });
  // const presaleStartDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const countdown = useCountdown(presaleStartDate);

  const getPresaleInfo = async () => {
    const usdRaisedAmount = await readContract(config, {
      abi: ABI,
      address: contracts.presale.TESTNET as `0x${string}`,
      functionName: "overalllRaised",
      args: [],
    });
    const presaleInfo = await readContract(config, {
      abi: ABI,
      address: contracts.presale.TESTNET as `0x${string}`,
      functionName: "presale",
      args: [1],
    });

    setUsdRaisedAmount(Number(usdRaisedAmount));
    if (presaleInfo) {
      const presaleInfoStr = String(presaleInfo);
      const presaleInfoArray = presaleInfoStr.split(",");
      // console.log(":::::::::::::", Number(presaleInfoArray[4]));
      setTokenSoldAmount(Number(presaleInfoArray[4]));
    }

    // console.log("usdRaisedAmount === ", usdRaisedAmount)
    // console.log("presaleInfo === ", presaleInfo)

    if (address) {
      const tokenBalance = await readContract(config, {
        abi: erc20Abi,
        address: contracts.dimon.TESTNET as `0x${string}`,
        functionName: "balanceOf",
        args: [address],
      })

      // console.log("tokenBalance === ", tokenBalance)
        
      setTokenBalance(Number(tokenBalance) / 10 ** 18);
    }
  }

  const getBNBPriceFromCoingecko = async () => {
    try {
      const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd');
      const data = await res.json();

      return Number(data.binancecoin.usd);
    } catch (err) {
      console.error(err);
      // setBnbPrice(0);
      return 0;
    }
  };

  useEffect(() => {
    // const interval = setInterval(() => {
      getPresaleInfo();
    // }, 10000);
  
    // return () => clearInterval(interval);

  }, [address, status])

  const handlePayChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setPayAmount(value);
      if (value) {
        const bnbPrice = await getBNBPriceFromCoingecko();
        const amount = parseFloat(value) * bnbPrice / currentPrice;

        // console.log("amount ===", amount, ", value = ", value, ", bnbprice = ", bnbPrice, ", currentprice = ", currentPrice)

        setReceiveAmount(amount.toFixed(2));
      } else {
        setReceiveAmount('');
      }
    }
  };

  const buyWithEth = async () => {
    // console.log(" payAmount = ", payAmount)
    if (!isConnected) {
      toast.warning('Wallet not connected');
      return;
    }

    if (parseFloat(payAmount) === 0) {
      toast.warning('Please input amount');
      return;
    }

    const id = toast.loading(`Buying DIMON...`);
    try {
      // console.log("aria config = ", config)

      const hash = await writeContractAsync({
        abi: ABI,
        address: contracts.presale.TESTNET as `0x${string}`,
        functionName: "buyWithEth",
        value: parseEther(payAmount),
      })

      if (!hash) {
        toast.dismiss(id);
        toast.error("Transaction hash is undefined.");
        return;
      }

      if (!publicClient) {
        toast.dismiss(id);
        toast.error("Public client is not available.");
        return;
      }
      const receipt = await waitForTransactionReceipt(publicClient, {
        hash,
        confirmations: 1,
      });

      toast.dismiss(id);
      if (receipt.status === 'success') {
        toast.success("Success!");
        setStatus(!status);
      } else {
        toast.error("Transaction reverted.");
      }
      // if (hash) {
      //   toast.success('Success!');
      //   setStatus(!status);
      // } else {
      //   toast.error('Transaction hash is undefined.');
      // }
    } catch (err) {
      console.error(err);
      toast.dismiss(id);
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error('An unknown error occurred.');
      }
    }
  };

  return (
    <section className="flex flex-col items-center pt-5 pb-24 w-full bg-white font-meme">
      <div className="relative max-w-[1200px] w-full">
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {/* Emperor Access Key Card */}
          <Card className="w-[95%] sm:w-[556px] border border-solid border-gray-500/50 bg-white rounded-xl relative shadow-xl overflow-hidden">
            {/* Watermark Emoji */}
            <span className="absolute opacity-10 text-8xl -right-4 -top-4 rotate-12 pointer-events-none select-none">🎟️</span>
            <CardContent className="p-8 flex flex-col items-center">
              {/* <h2
                className="w-80 mx-auto font-bold text-black text-[40px] text-center tracking-[0] leading-[48px] whitespace-nowrap"
                style={{
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "black"
                }}
              >
                Presale Live
              </h2> */}

              <CountdownTimer
                days={countdown.days}
                hours={countdown.hours}
                minutes={countdown.minutes}
                seconds={countdown.seconds}
                isActive={countdown.isActive}
              />

              <div className='flex flex-col gap-10 py-6 w-full'>
                <PresaleProgress
                  percentageSold={usdRasiedAmount / 10 ** 6}
                  totalRaised={usdRasiedAmount / 10 ** 6}
                  // tokensSold={Number(tokenSoldAmount) / 10 ** 18}
                />
                
                <TokenPrice
                  tokensSold={Number(tokenSoldAmount) / 10 ** 18}
                  currentPrice={currentPrice}
                  nextPrice={nextPrice}
                  symbol="$DIMON"
                />
                
                <div className="flex flex-col w-full space-y-2">
                  <div className="flex justify-between w-full gap-3 items-end">
                    <div className="flex flex-col relative w-full">
                      <span className="text-black font-semibold mb-1">BNB in</span>
                      <div className="flex-1 relative">
                        <input
                          type="number"
                          value={payAmount}
                          onChange={handlePayChange}
                          className="w-full bg-white border border-gray-500/50 rounded-lg py-3 pl-3 pr-3 text-black focus:outline-none focus:ring-1 focus:ring-[#005FF0]"
                        />
                        <div className="absolute inset-y-0 right-8 flex items-center pl-3 pointer-events-none">
                          <svg viewBox="0 0 96 96" width="32px" height="32px" color="text" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '8px', width: '32px', height: '32px'}}>
                            <circle cx="48" cy="48" r="48" fill="#F0B90B" />
                            <path d="M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z" fill="white" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col relative w-full">
                      <span className="text-black font-semibold mb-1">rage out</span>
                      <div className="flex-1 relative">
                        <input
                          type="number"
                          value={receiveAmount}
                          readOnly
                          className="w-full border-gray-500/50 border rounded-lg py-3 pl-3 pr-3 text-black focus:outline-none"
                        />
                        <div className="absolute inset-y-0 right-8 flex items-center pl-3 pointer-events-none">
                          <img src={`/dimon.png`} alt="dimon" className="rounded-full" width={36} height={36} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {isConnected ? (
                  <button
                    type='button'
                    className={`${countdown.isActive ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#005FF0] hover:bg-[#005FF0]/90'} text-white rounded-md py-2 text-base font-bold mt-2`}
                    onClick={async () => { await buyWithEth() }}
                    disabled={countdown.isActive}
                  >
                    {countdown.isActive ? 'Presale Not Started' : 'BUY $DIMON'}
                  </button>  
                ) : (
                  <ConnectButton label="Connect Wallet" />
                )}

                
                {/* <div className="text-black self-center">
                  Your Token Amount: {tokenBalanceAmount.toLocaleString()} $DIMON
                </div> */}
                {/* User Stats */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-xl">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-sm text-gray-500">Your Token Amount:</span>
                    <span className="font-bold text-purple-600">
                      {tokenBalanceAmount.toLocaleString()} $DIMON
                    </span>
                  </div>
                </div>

                {/* {address === adminAddress && (
                  <>
                    <div className="flex justify-between w-full gap-3 mt-8 md:mt-10">
                      <Button
                        className="w-full bg-[#a3ff12] hover:bg-[#8fe00f] text-white font-bold text-base md:text-[17.6px] px-6 md:px-8 py-3 md:py-4 rounded"
                        onClick={onCreatePresale}
                      >
                        Create Presale
                      </Button>
              
                      <Button
                        className="w-full bg-[#a3ff12] hover:bg-[#8fe00f] text-white font-bold text-base md:text-[17.6px] px-6 md:px-8 py-3 md:py-4 rounded"
                        onClick={onUpdatePresale}
                      >
                        Update Presale
                      </Button>
                    </div>
                    
                    <div className="flex justify-between w-full gap-3">
                      <input
                        type="number"
                        value={depositTokenAmount}
                        onChange={handleDepositTokenAmountChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded pl-3 pr-3 text-white focus:outline-none focus:ring-1 focus:ring-yellow-400/50"
                      />
                      <Button
                        className="w-full bg-[#a3ff12] hover:bg-[#8fe00f] text-white font-bold text-base md:text-[17.6px] px-6 md:px-8 py-3 md:py-4 rounded"
                        onClick={onDepositToken}
                      >
                        Deposit Token
                      </Button>
                    </div>
                    
                    <Button
                      className="bg-[#a3ff12] hover:bg-[#8fe00f] text-white font-bold text-base md:text-[17.6px] px-6 md:px-8 py-3 md:py-4 rounded"
                      onClick={onWithdrawToken}
                    >
                      Withdraw Token
                    </Button>
                  </>
                )} */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PresaleCard;