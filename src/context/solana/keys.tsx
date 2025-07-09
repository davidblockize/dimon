import { PublicKey } from '@solana/web3.js';
import { PRESALE_PROGRAM_ID, 
    USER_INFO_SEED,
    PRESALE_SEED,
    PRESALE_ID
} from './constants';


const asyncGetPda = async (seeds: Array<Buffer | Uint8Array>, programId: PublicKey) => {
    const [pubKey, bump] = PublicKey.findProgramAddressSync(seeds, programId);
    return [pubKey, bump];
    
};

export const getPresaleInfoKey = async (wallet: PublicKey) => {
    const [presaleInfoKey] = await asyncGetPda(
        [
            Buffer.from(PRESALE_SEED),
            wallet.toBuffer(),
            new Uint8Array([Number(PRESALE_ID)]),
        ],
        PRESALE_PROGRAM_ID
    );
    return presaleInfoKey;
}

export const getUserInfoKey = async (presaleAdmin: PublicKey, buyerKey: PublicKey) => {
    const [userInfoKey] = await asyncGetPda(
        [
            Buffer.from(USER_INFO_SEED),
            presaleAdmin.toBuffer(),
            buyerKey.toBuffer(),
            new Uint8Array([Number(PRESALE_ID)]),
        ],
        PRESALE_PROGRAM_ID
    );
    return userInfoKey;
}
