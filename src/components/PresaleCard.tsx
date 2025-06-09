import React from "react";
import { useState, useEffect } from "react";
// import { useAnchorWallet } from "@solana/wallet-adapter-react";
// import { LAMPORTS_PER_SOL, Transaction } from '@solana/web3.js'
import { toast } from "react-toastify";
import { waitForTransactionReceipt, writeContract, readContract } from "@wagmi/core"
import { parseEther, parseUnits, createPublicClient, createWalletClient, Chain, erc20Abi } from "viem"
import { config } from "../context/wagmiSetup";
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
// import { useContract } from "../../../../contexts/ContractContext";
// import { TOKEN_DECIMALS } from "../../../../engine/consts";
// import { send, fetchSOLPrice } from "../../../../engine/utils";
// import { connection } from "../../../../engine/config";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import TokenPrice from "./ui/TokenPrice";
import PresaleProgress from "./ui/PresaleProgress";
import PaymentOptions from "./ui/PaymentOptions";

const TokenIcon = () => (
  <span className="text-yellow-300 font-bold flex items-center justify-center w-6 h-6">
    $
  </span>
);
interface ContractContextType {
  createPresale: (
    hardcapAmount: number,
    pricePerToken: number,
    pricePerTokenNext: number,
    startTime: number,
    endTime: number,
    claimTime: number
  ) => Promise<any>;
  updatePresale: (
    pricePerToken: number,
    pricePerTokenNext: number,
    hardcapAmount: number,
    startTime: number,
    endTime: number,
    claimTime: number
  ) => Promise<any>;
  depositToken: (amount: number) => Promise<any>;
  buySol: (amount: number) => Promise<any>;
  buyUsdc: (amount: number) => Promise<any>;
  buyUsdt: (amount: number) => Promise<any>;
  claimToken: () => Promise<any>;
  withdrawToken: () => Promise<any>;
  getPresaleInfo: () => Promise<any>;
  getUserInfo: () => Promise<any>;
}

const PresaleCard = (): JSX.Element => {
  const adminAddress = import.meta.env.VITE_PRESALE_ADMIN_ADDRESS;
  const currentPrice = import.meta.env.VITE_PRESALE_PRICE_PER_TOKEN;
  const nextPrice = import.meta.env.VITE_PRESALE_PRICE_PER_TOKEN_NEXT;

   const { address } = useAccount()

//   const walletCtx = useAnchorWallet();
//   const { buySol, buyUsdc, buyUsdt, createPresale, updatePresale, depositToken, claimToken, withdrawToken, getPresaleInfo, getUserInfo } = useContract() as ContractContextType;

  const [amount, setAmount] = useState<string | ''>('');
  const [payAmount, setPayAmount] = useState<string>('1');
  const [receiveAmount, setReceiveAmount] = useState<string>('1.5');
  const [depositTokenAmount, setDepositTokenAmount] = useState<string>('0');

  const [selectedPayment, setSelectedPayment] = useState('bnb');
  const [presaleInfo, setPresaleInfo] = useState<any>(null);
  const [userInfo, setUserInfo] = useState<any>(null);
  const [claimEnable, setClaimEnable] = useState(false);
  const [buyTokenAmount, setBuyTokenAmount] = useState(0);
  
  const paymentOptions = [
    { 
      id: 'bnb', 
      name: 'BNB',
      icon: <img src="/bnb.png" alt="BNB" className="w-6 h-6 rounded-full" />
    },
    { 
      id: 'usdt', 
      name: 'USDT',
      icon: <img src="/usdt.png" alt="USDT" className="w-6 h-6" />
    },
    { 
      id: 'usdc', 
      name: 'USDC',
      icon: <img src="/usdc.png" alt="USDC" className="w-6 h-6" />
    },
    { 
      id: 'card', 
      name: 'CARD',
      icon: <img src="/card.png" alt="CARD" className="w-6 h-6" />
    }
  ];

//   useEffect(() => {
//     const fetchPresaleInfo = async () => {
//       if (walletCtx?.publicKey !== null) {
//         const presaleInfo = await getPresaleInfo();
//         // console.log("presaleInfo::::", "deposit = ", Number(presaleInfo.depositTokenAmount), "hardcap = ", Number(presaleInfo.hardcapAmount), "bnb = ", Number(presaleInfo.solAmount));
//         // console.log("presaleInfo::::", "sold = ", Number(presaleInfo.soldTokenAmount), "total = ", Number(presaleInfo.totalAmount), "usdc = ", Number(presaleInfo.usdcAmount));
//         // console.log("usdt = ", Number(presaleInfo.usdtAmount));
//         // console.log("presaleInfo :::: ", presaleInfo);

//         if (!presaleInfo) {
//           setPresaleInfo(null);
//         } else {
//           setPresaleInfo(presaleInfo);
//           const now = Date.now() / 1000;
//           if (now > presaleInfo.claimTime) {
//             setClaimEnable(true);
//           } else {
//             setClaimEnable(false);
//           }
//         }

//         const userInfo = await getUserInfo();
//         if (userInfo) {
//           // console.log("userInfo ==== ", Number(userInfo.buyTokenAmount), ", ", Number(userInfo.claimAmount))
//           setUserInfo(userInfo);
//           const buyAnount = Number(userInfo?.buyTokenAmount) / 10 ** TOKEN_DECIMALS;
//           setBuyTokenAmount(buyAnount);
//         } else {
//           setUserInfo(null);
//         }
//       }
//     }
//     fetchPresaleInfo();

//   }, [walletCtx])

  const handlePayChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setPayAmount(value);
      if (value) {
        if (selectedPayment === 'usdt' || selectedPayment === 'usdc') {
          const amount = parseFloat(value) / currentPrice;
          setReceiveAmount(amount.toString());
        } else if (selectedPayment === 'bnb') {
        //   const solPrice = await fetchSOLPrice();
        //   const amount = parseFloat(value) * solPrice / currentPrice;
          const solPrice = 150;
          const amount = parseFloat(value) * solPrice / currentPrice;
          setReceiveAmount(amount.toString());
        }
      } else {
        setReceiveAmount('');
      }
    }
  };

  const onSelectPayment = async (id: string) => {
    setSelectedPayment(id);
    if (payAmount) {
      if (id === 'usdt' || id === 'usdc') {
        const amount = parseFloat(payAmount) / currentPrice;
        setReceiveAmount(amount.toString());
      } else if (id === 'bnb') {
        // const solPrice = await fetchSOLPrice();
        // const amount = parseFloat(payAmount) * solPrice / currentPrice;
        const amount = parseFloat(payAmount) * 150 / currentPrice;
        setReceiveAmount(amount.toString());
      }
    } else {
      setReceiveAmount('');
    }
  }

  const getPaymentDetails = () => {
    switch (selectedPayment) {
      case 'bnb':
        return {
          symbol: 'BNB',
          exchangeRate: 13.21 // 1 BNB = 13.21 $DIMON
        };
      case 'usdt':
        return {
          symbol: 'USDT',
          exchangeRate: 13.21 // Assuming same rate for demo
        };
      case 'card':
        return {
          symbol: 'USD',
          exchangeRate: 13.21 // Assuming same rate for demo
        };
      default:
        return {
          symbol: 'BNB',
          exchangeRate: 13.21
        };
    }
  };

  const handleDepositTokenAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setDepositTokenAmount(value);
    }
  };

  const payment = getPaymentDetails();



  const onTrade = async () => {
    console.log("selectedPayment = ", selectedPayment, ", payAmount = ", payAmount)
    if (!address) {
      toast.error('No Wallet Connected!');
      return;
    }

    if (parseFloat(amount) === 0) {
      toast.warning('Please input amount');
      return;
    }

    const id = toast.loading(`Buying DIMON...`);
    // try {
    //   if (selectedPayment === 'bnb') {
    //     let tx = new Transaction().add(await buySol(parseFloat(payAmount) * LAMPORTS_PER_SOL));
    //     const txHash = await send(connection, walletCtx, tx);
    //     toast.dismiss(id);
    //     if (txHash === "") {
    //       toast.error('Create failed!');
    //       return;
    //     }
    //     toast.success('Success!');
    //   } else if (selectedPayment === 'usdt') {
    //     let tx = new Transaction().add(await buyUsdt(Number(payAmount) * 10 ** TOKEN_DECIMALS));
    //     const txHash = await send(connection, walletCtx, tx);
    //     toast.dismiss(id);
    //     if (txHash === "") {
    //       toast.error('Create failed!');
    //       return;
    //     }
    //     toast.success('Success!');
    //   } else if (selectedPayment === 'usdc') {
    //     let tx = new Transaction().add(await buyUsdc(Number(payAmount) * 10 ** TOKEN_DECIMALS));
    //     const txHash = await send(connection, walletCtx, tx);
    //     toast.dismiss(id);
    //     if (txHash === "") {
    //       toast.error('Create failed!');
    //       return;
    //     }
    //     toast.success('Success!');
    //   } else if (selectedPayment === 'card') {
    //     toast.dismiss(id);
    //     toast.success('Success!');
    //   }
    // } catch (err) {
    //   console.error(err);
    //   toast.dismiss(id);
    //   if (err instanceof Error) {
    //     toast.error(err.message);
    //   } else {
    //     toast.error('An unknown error occurred.');
    //   }
    // }
  };

  const onCreatePresale = async () => {
    console.log("selectedPayment = ", selectedPayment, ", payAmount = ", payAmount)
    if (!address) {
      toast.error('No Wallet Connected!');
      return;
    }

    if (address !== adminAddress) {
      toast.error('No admin wallet!');
      return;
    }

    const hardcap = Number(import.meta.env.VITE_PRESALE_HARDCAP);
    const ppt = Number(import.meta.env.VITE_PRESALE_PRICE_PER_TOKEN);
    const pptn = Number(import.meta.env.VITE_PRESALE_PRICE_PER_TOKEN_NEXT);
    const starttime = Number(import.meta.env.VITE_PRESALE_STARTTIME);
    const endtime = Number(import.meta.env.VITE_PRESALE_ENDTIME);
    const claimtime = Number(import.meta.env.VITE_PRESALE_CLAIMTIME);

    const id = toast.loading(`Creating Presale ...`);
    // try {
    //   let tx = null;
    //   console.log(hardcap, ppt, pptn, starttime, endtime, claimtime)
    //   tx = new Transaction().add(await createPresale(hardcap, ppt, pptn, starttime, endtime, claimtime));
    //   // console.log("transaction ==== ", await connection.simulateTransaction(tx))
      
    //   const txHash = await send(connection, walletCtx, tx);
    //   toast.dismiss(id);
    //   if (txHash === "") {
    //     toast.error('Create failed!');
    //     return;
    //   }
    //   toast.success('Success!');
    // } catch (err) {
    //   console.error(err);
    //   toast.dismiss(id);
    //   if (err instanceof Error) {
    //     toast.error(err.message);
    //   } else {
    //     toast.error('An unknown error occurred.');
    //   }
    // }
  };

  const onUpdatePresale = async () => {
    console.log("selectedPayment = ", selectedPayment, ", payAmount = ", payAmount)
    if (!address) {
      toast.error('No Wallet Connected!');
      return;
    }

    if (address !== adminAddress) {
      toast.error('No admin wallet!');
      return;
    }

    const uhardcap = import.meta.env.VITE_PRESALE_HARDCAP_UPDATE;
    const uppt = import.meta.env.VITE_PRESALE_PRICE_PER_TOKEN_UPDATE;
    const upptn = import.meta.env.VITE_PRESALE_PRICE_PER_TOKEN_NEXT_UPDATE;
    const ustarttime = import.meta.env.VITE_PRESALE_STARTTIME_UPDATE;
    const uendtime = import.meta.env.VITE_PRESALE_ENDTIME_UPDATE;
    const uclaimtime = import.meta.env.VITE_PRESALE_CLAIMTIME_UPDATE;

    const id = toast.loading(`Updating Presale ...`);
    // try {
    //   let tx = null;
    //   tx = new Transaction().add(await updatePresale(uppt, upptn, uhardcap, ustarttime, uendtime, uclaimtime));
    //   const txHash = await send(connection, walletCtx, tx);
    //   toast.dismiss(id);
    //   if (txHash === "") {
    //     toast.error('Update failed!');
    //     return;
    //   }
    //   toast.success('Success!');
    // } catch (err) {
    //   console.error(err);
    //   toast.dismiss(id);
    //   if (err instanceof Error) {
    //     toast.error(err.message);
    //   } else {
    //     toast.error('An unknown error occurred.');
    //   }
    // }
  };

  const onDepositToken = async () => {
    if (!address) {
      toast.error('No Wallet Connected!');
      return;
    }

    if (address !== adminAddress) {
      toast.error('No admin wallet!');
      return;
    }

    const tokenamount = import.meta.env.VITE_DEPOSIT_TOKEN_AMOUNT;

    const id = toast.loading(`Depositing tokens ...`);
    // try {
    //   let tx = new Transaction().add(await depositToken(Number(depositTokenAmount)));
    //   const txHash = await send(connection, walletCtx, tx);
    //   toast.dismiss(id);
    //   if (txHash === "") {
    //     toast.error('Deposit failed!');
    //     return;
    //   }
    //   toast.success('Success!');
    // } catch (err) {
    //   console.error(err);
    //   toast.dismiss(id);
    //   if (err instanceof Error) {
    //     toast.error(err.message);
    //   } else {
    //     toast.error('An unknown error occurred.');
    //   }
    // }
  };

  const onClaimToken = async () => {
    if (!address) {
      toast.error('No Wallet Connected!');
      return;
    }

    const id = toast.loading(`Claiming tokens ...`);
    // try {
    //   let tx = new Transaction().add(await claimToken());
    //   const txHash = await send(connection, walletCtx, tx);
    //   toast.dismiss(id);
    //   if (txHash === "") {
    //     toast.error('Claim failed!');
    //     return;
    //   }
    //   toast.success('Success!');
    // } catch (err) {
    //   console.error(err);
    //   toast.dismiss(id);
    //   if (err instanceof Error) {
    //     toast.error(err.message);
    //   } else {
    //     toast.error('An unknown error occurred.');
    //   }
    // }
  };

  const onWithdrawToken = async () => {
    if (!address) {
      toast.error('No Wallet Connected!');
      return;
    }

    if (address !== adminAddress) {
      toast.error('No admin wallet!');
      return;
    }

    const id = toast.loading(`Withdrawing tokens ...`);
    // try {
    //   let tx = new Transaction().add(await withdrawToken());
    //   const txHash = await send(connection, walletCtx, tx);
    //   toast.dismiss(id);
    //   if (txHash === "") {
    //     toast.error('Withdraw Token failed!');
    //     return;
    //   }
    //   toast.success('Success!');
    // } catch (err) {
    //   console.error(err);
    //   toast.dismiss(id);
    //   if (err instanceof Error) {
    //     toast.error(err.message);
    //   } else {
    //     toast.error('An unknown error occurred.');
    //   }
    // }
  };


  return (
    <section className="flex flex-col items-center pb-24 w-full">
      <div className="relative max-w-[1200px] w-full">
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {/* Emperor Access Key Card */}
          <Card className="w-[95%] sm:w-[556px] border border-solid border-[#141625] shadow-[0px_0px_30px_#a3ff12] [background:linear-gradient(143deg,rgba(7,5,18,1)_0%,rgba(4,5,16,1)_100%)] rounded-xl relative">
            <CardContent className="p-8 flex flex-col items-center">
              <h2
                className="w-80 mx-auto [background:linear-gradient(90deg,rgba(163,255,18,1)_0%,rgba(197,255,107,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Arial-Bold',Helvetica] font-bold text-transparent text-[40px] text-center tracking-[0] leading-[48px] whitespace-nowrap"
                style={{
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Presale Live
              </h2>
              <div className='flex flex-col gap-10 py-6 w-full'>
                <PresaleProgress
                  percentageSold={presaleInfo?.totalAmount / 10 ** 18}
                  totalRaised={presaleInfo?.totalAmount / 10 ** 18}
                  tokensSold={Number(presaleInfo?.soldTokenAmount) / 10 ** 18}
                />
                
                {claimEnable === false ? (
                  <>
                    <TokenPrice 
                      currentPrice={currentPrice}
                      nextPrice={nextPrice}
                      symbol="$DIMON" 
                    />
                    
                    {/* <PaymentOptions 
                      options={paymentOptions} 
                      selectedOption={selectedPayment} 
                      // onSelect={setSelectedPayment} 
                      onSelect={onSelectPayment} 
                    /> */}
                    
                    {/* <TokenCalculator 
                      tokenSymbol="$DIMON" 
                      paymentSymbol={payment.symbol}
                      exchangeRate={payment.exchangeRate}
                      paymentIcon='/bnb.png'
                      tokenIcon={<TokenIcon />}
                    /> */}

                    <div className="flex flex-col w-full space-y-2">
                      <div className="flex justify-between w-full gap-3 items-end">
                        <div className="flex flex-col relative">
                          <span className="text-gray-300 mb-1">{payment.symbol} you pay</span>
                          <div className="flex-1 relative">
                            <input
                              type="number"
                              value={payAmount}
                              onChange={handlePayChange}
                              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-3 pr-3 text-white focus:outline-none focus:ring-1 focus:ring-yellow-400/50"
                            />
                            <div className="absolute inset-y-0 right-8 flex items-center pl-3 pointer-events-none">
                              {/* <img src={`/${selectedPayment}.png`} alt="bnb" className="rounded-full" /> */}
                                <svg viewBox="0 0 96 96" width="32px" height="32px" color="text" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '8px', width: '32px', height: '32px'}}>
                                    <circle cx="48" cy="48" r="48" fill="#F0B90B" />
                                    <path d="M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z" fill="white" />
                                </svg>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col relative">
                          <span className="text-gray-300 mb-1">$DIMON you receive</span>
                          <div className="flex-1 relative">
                            <input
                              type="number"
                              value={receiveAmount}
                              readOnly
                              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-3 pr-3 text-white focus:outline-none"
                            />
                            <div className="absolute inset-y-0 right-8 flex items-center pl-3 pointer-events-none">
                              <img src={`/dimon.png`} alt="dimon" className="rounded-full" width={36} height={36} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button type='button' className="bg-[#a3ff12] hover:bg-[#a3ff12]/90 text-[#040510] [font-family:'Arial-Bold',Helvetica] rounded-md py-2 text-base font-bold mt-2" onClick={onTrade}>BUY</button>
                  </>

                ) : (
                  <button className="w-full bg-[#a3ff12] hover:bg-[#8fe00f] text-[#040510] [font-family:'Arial-Bold',Helvetica] font-bold text-base md:text-[17.6px] px-6 md:px-8 py-2 rounded" onClick={onClaimToken}>
                    Claim Token
                  </button>
                )}
                
                <div className="text-white">
                  Your Token Amount: {buyTokenAmount.toFixed(3)} $DIMON
                </div>

                {/* {address === adminAddress && (
                  <>
                    <div className="flex justify-between w-full gap-3 mt-8 md:mt-10">
                      <Button
                        className="w-full bg-[#a3ff12] hover:bg-[#8fe00f] text-[#040510] [font-family:'Arial-Bold',Helvetica] font-bold text-base md:text-[17.6px] px-6 md:px-8 py-3 md:py-4 rounded"
                        onClick={onCreatePresale}
                      >
                        Create Presale
                      </Button>
              
                      <Button
                        className="w-full bg-[#a3ff12] hover:bg-[#8fe00f] text-[#040510] [font-family:'Arial-Bold',Helvetica] font-bold text-base md:text-[17.6px] px-6 md:px-8 py-3 md:py-4 rounded"
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
                        className="w-full bg-[#a3ff12] hover:bg-[#8fe00f] text-[#040510] [font-family:'Arial-Bold',Helvetica] font-bold text-base md:text-[17.6px] px-6 md:px-8 py-3 md:py-4 rounded"
                        onClick={onDepositToken}
                      >
                        Deposit Token
                      </Button>
                    </div>
                    
                    <Button
                      className="bg-[#a3ff12] hover:bg-[#8fe00f] text-[#040510] [font-family:'Arial-Bold',Helvetica] font-bold text-base md:text-[17.6px] px-6 md:px-8 py-3 md:py-4 rounded"
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