import React, { createContext, useContext } from 'react';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import {
    contract_getPresaleInfo,
    contract_getUserInfo,

    contract_createPresale,
    contract_updatePresale,
    contract_buySol,
} from './solana';


interface ContractContextType {
    getPresaleInfoSol: () => Promise<any>;
    getUserInfo: () => Promise<any>;

    createPresale: (
        pricePerToken: number,
        pricePerTokenNext: number,
    ) => Promise<any>;
    updatePresale: (
        pricePerToken: number,
        pricePerTokenNext: number,
    ) => Promise<any>;
    buySol: (amount: number) => Promise<any>;
}

export const ContractContext = createContext<ContractContextType | null>(null);

const ContractContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const walletCtx = useAnchorWallet();

    const getPresaleInfoSol = async () => {
        return await contract_getPresaleInfo(walletCtx);
    };

    const getUserInfo = async () => {
        return await contract_getUserInfo(walletCtx);
    };

    const createPresale = async (
        pricePerToken: number,
        pricePerTokenNext: number,
    ) => {
        let tx = null;
        try {
            tx = await contract_createPresale(
                walletCtx,
                pricePerToken,
                pricePerTokenNext,
            );
        } catch (err) {
            console.error(err);
            if (err instanceof Error) {
                throw new Error(err.message);
            } else {
                throw new Error(String(err));
            }
        }
        return tx;
    };

    const updatePresale = async (
        pricePerToken: number,
        pricePerTokenNext: number,
    ) => {
        let tx = null;
        try {
            tx = await contract_updatePresale(
                walletCtx,
                pricePerToken,
                pricePerTokenNext,
            );
        } catch (err) {
            console.error(err);
            if (err instanceof Error) {
                throw new Error(err.message);
            } else {
                throw new Error(String(err));
            }
        }
        return tx;
    };

    const buySol = async (amount: number) => {
        let tx = null;
        try {
            tx = await contract_buySol(walletCtx, amount);
        } catch (err) {
            console.error(err);
            if (err instanceof Error) {
                throw new Error(err.message);
            } else {
                throw new Error(String(err));
            }
        }
        return tx;
    };


    const context = {
        getPresaleInfoSol,
        getUserInfo,

        createPresale,
        updatePresale,
        buySol,
    };

    return <ContractContext.Provider value={context}>{children}</ContractContext.Provider>
};

export const useContract = () => {
    const contractManager = useContext(ContractContext);
    return contractManager || [{}, async () => {}];
};

export default ContractContextProvider;
