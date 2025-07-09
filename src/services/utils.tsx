import {
    Transaction,
    VersionedTransaction,
    Connection
} from '@solana/web3.js';

import axios from "axios";
import { AnchorWallet } from '@solana/wallet-adapter-react';

export async function sleep(ms: number | undefined) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const sendTransaction = async (connection: Connection, walletCtx: AnchorWallet, transaction: Transaction | VersionedTransaction) => {
    if (walletCtx.publicKey === null || walletCtx.signTransaction === undefined)
        throw new Error("Invalid wallet!");

    try {
        if (transaction instanceof Transaction) {
            transaction.feePayer = walletCtx.publicKey;
        }
        if (transaction instanceof Transaction) {
            console.log('Transaction +++ 111:', await connection.simulateTransaction(transaction));
        } else if (transaction instanceof VersionedTransaction) {
            console.log('Transaction: +++ 222', await connection.simulateTransaction(transaction));
        }

        const signedTx = await walletCtx.signTransaction(transaction);
        const rawTx = signedTx.serialize();

        // console.log('Sending transaction...');
        const txHash = await connection.sendRawTransaction(rawTx, {
            skipPreflight: false,
            maxRetries: 15
        });
        return txHash;
    } catch (err) {
        console.error('sendTransaction err:', err);
        if (err instanceof Error) {
            throw new Error(err.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};

export const send = async (connection: Connection, walletCtx: AnchorWallet, transaction: Transaction | VersionedTransaction) => {
    if ((transaction instanceof Transaction)) {
        transaction.recentBlockhash = (await connection.getLatestBlockhash("finalized")).blockhash;
    }

    try {
        const txHash = await sendTransaction(connection, walletCtx, transaction);
        if (txHash === null) {
            console.error('Transaction failed');
            return;
        }

        // console.log('Confirming transaction...');
        let res = await connection.confirmTransaction(txHash);
        if (res.value.err)
            console.error('Transaction failed');
        // else
        //     console.log('Transaction confirmed');
        return txHash;
    } catch (err) {
        console.error('send err:', err);
        if (err instanceof Error) {
            throw new Error(err.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};


export function getPassedTime (timestamp: number) {
    let data = timestamp * 1000;
    if (timestamp < 0) {
        data = Math.abs(timestamp) * 1000;
    }
    let ret = '';

    const date = Number((data / 86400000).toString().split(".")[0]);
    if (date) {
        ret += date + 'd';
    }

    const hours = Number(((data - date * 86400000) / 3600000).toString().split(".")[0]);
    if (hours) {
        ret += ' ' + hours + 'h';
    }

    const minutes = Number(((data - date * 86400000 - hours * 3600000) / 60000).toString().split(".")[0]);
    if (minutes) {
        ret += ' ' + minutes + 'm';
    }

    const seconds = Number(((data - date * 86400000 - hours * 3600000 - minutes * 60000) / 1000).toString().split(".")[0]);
    if (seconds) {
        ret += ' ' + seconds + 's';
    }

    return ret;
}

export async function fetchSOLPrice () {
    while (true) {
        try {
            const response = await axios.get('https://api.coinbase.com/v2/prices/SOL-USD/spot');
            const newSolPrice = Number(response.data.data.amount);
            return newSolPrice;
        } catch (err) {
            console.error('Error fetching SOL price:', err);
            await sleep(100);
        }
    }
};