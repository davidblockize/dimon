
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import * as anchor from '@project-serum/anchor';
import { 
    PublicKey, 
    SystemProgram, 
    Connection
} from '@solana/web3.js';
import {
    TOKEN_PROGRAM_ID, 
    ASSOCIATED_TOKEN_PROGRAM_ID, 
    getAssociatedTokenAddressSync
} from '@solana/spl-token';
import BN from 'bn.js';

import {
    PRESALE_PROGRAM_ID, 
    PRESALE_ID,
    PRESALE_ADMIN_ADDRESS,
    PRESALE_VAULT_ADDRESS,
} from './constants';
import { IDL } from '../../idl/idl_sol';
import * as Keys from './keys';
import { AnchorWallet } from "@solana/wallet-adapter-react";

const IS_MAINNET = import.meta.env.VITE_PUBLIC_IS_MAINNET || "";
const isMainNet = IS_MAINNET === "true";
export const networkUrl = !isMainNet 
    ? import.meta.env.VITE_SOLANA_RPC_DEVNET
    : import.meta.env.VITE_SOLANA_RPC_MAINNET;

export const connection = new Connection(networkUrl, "confirmed");


const getProgram = (wallet: AnchorWallet | undefined) => {
    if (!wallet) {
        return null
    }
    const provider = new anchor.AnchorProvider(
        connection, 
        wallet, 
        anchor.AnchorProvider.defaultOptions()
    );

    const program = new anchor.Program(IDL, PRESALE_PROGRAM_ID, provider);
    return program;
};


export const contract_getPresaleInfo = async (walletCtx: AnchorWallet | undefined) => {
    if (!walletCtx) {
        return null
    }

    const program = getProgram(walletCtx);
    
    const presaleAdminKey = new PublicKey(PRESALE_ADMIN_ADDRESS);
    const presaleInfoKey = await Keys.getPresaleInfoKey(presaleAdminKey);
    if (!(presaleInfoKey instanceof PublicKey) || !program) {
        throw new Error("Invalid presaleInfoKey or Program: must be a PublicKey");
    }

    return await program.account.presaleInfo.fetch(presaleInfoKey);
};

export const contract_getUserInfo = async (walletCtx: AnchorWallet | undefined) => {
    if (!walletCtx) {
        return null
    }

    const program = getProgram(walletCtx);
    const presaleAdminKey = new PublicKey(PRESALE_ADMIN_ADDRESS)
    const userInfoKey = await Keys.getUserInfoKey(presaleAdminKey, walletCtx.publicKey);
    if (!(userInfoKey instanceof PublicKey) || !program) {
        throw new Error("Invalid userInfoKey or Program: must be a PublicKey");
    }

    return await program.account.userInfo.fetch(userInfoKey);
};

export const contract_createPresale = async (
    walletCtx: AnchorWallet | undefined,
    pricePerToken: number,
    pricePerTokenNext: number,
) => {
    if (!walletCtx) {
        console.error("Invalid wallet");
        throw new WalletNotConnectedError();
    }

    const program = getProgram(walletCtx);
    const presaleAdminKey = new PublicKey(PRESALE_ADMIN_ADDRESS);
    
    const presaleInfoKey = await Keys.getPresaleInfoKey(presaleAdminKey);
    if (!(presaleInfoKey instanceof PublicKey) || !program) {
        throw new Error("Invalid presaleInfoKey or Program: must be a PublicKey");
    }

    
    const ix = await program.methods
        .createPresale(
            new BN(pricePerToken * 10 ** 9),
            new BN(pricePerTokenNext * 10 ** 9),
            new BN(Number(PRESALE_ID))
        )
        .accounts({
             presaleInfo: presaleInfoKey,
             authority: walletCtx.publicKey,
             vault: new PublicKey(PRESALE_VAULT_ADDRESS),
             systemProgram: SystemProgram.programId,
             tokenProgram: TOKEN_PROGRAM_ID, 
             associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID
        })
        .instruction();

    return ix;
};

export const contract_updatePresale = async (
    walletCtx: AnchorWallet | undefined,
    pricePerToken: number,
    pricePerTokenNext: number,
) => {
    if (!walletCtx) {
        console.error("Invalid wallet");
        throw new WalletNotConnectedError();
    }

    const program = getProgram(walletCtx);
    const presaleAdminKey = new PublicKey(PRESALE_ADMIN_ADDRESS);
    
    const presaleInfoKey = await Keys.getPresaleInfoKey(presaleAdminKey);
    if (!(presaleInfoKey instanceof PublicKey) || !program) {
        throw new Error("Invalid presaleInfoKey or Program: must be a PublicKey");
    }

    const ix = await program.methods
        .updatePresale(
            new BN(pricePerToken),
            new BN(pricePerTokenNext),
            new BN(Number(PRESALE_ID))
        )
        .accounts({
            presaleInfo: presaleInfoKey,
            authority: walletCtx.publicKey,
            systemProgram: SystemProgram.programId
        })
        .instruction();

    return ix;
};

export const contract_buySol = async (
    walletCtx: AnchorWallet | undefined,
    amount: number,
) => {
    if (!walletCtx) {
        console.error("Invalid wallet");
        throw new WalletNotConnectedError();
    }

    const program = getProgram(walletCtx);
    const presaleAdminKey = new PublicKey(PRESALE_ADMIN_ADDRESS)

    const presaleInfoKey = await Keys.getPresaleInfoKey(presaleAdminKey);
    if (!(presaleInfoKey instanceof PublicKey) || !program) {
        throw new Error("Invalid presaleInfoKey or Program: must be a PublicKey");
    }

    const userInfoKey = await Keys.getUserInfoKey(presaleAdminKey, walletCtx.publicKey);
    if (!(userInfoKey instanceof PublicKey) || !program) {
        throw new Error("Invalid userInfoKey or Program: must be a PublicKey");
    }

    const solUsdPriceFeedAccount =new PublicKey("7UVimffxr9ow1uXYxsr4LHAcV58mLzhmwaeKvJ1pjLiE")
    const ix = await program.methods
        .buySol(
            new BN(amount),
        )
        .accounts({
            presaleInfo: presaleInfoKey,
            priceUpdate: solUsdPriceFeedAccount,
            presaleAuthority: presaleAdminKey,
            userInfo: userInfoKey,
            vault: new PublicKey(PRESALE_VAULT_ADDRESS),
            buyer: walletCtx.publicKey,
            rent: anchor.web3.SYSVAR_RENT_PUBKEY,
            systemProgram: SystemProgram.programId,
            tokenProgram: TOKEN_PROGRAM_ID, 
            associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID
        })
        .instruction();

    return ix;
};
