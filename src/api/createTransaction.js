import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  clusterApiUrl,
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import BigNumber from "bignumber.js";

// Make sure you replace this with your wallet address!
const sellerAddress = 'DEX13MVXjCSKCNVQe7AKPDMFRrsrHshXVHpGH4FmjxSU'
const sellerPublicKey = new PublicKey(sellerAddress);
const DonationPrice = 3;
const createTransaction = async (req, res) => {
  try {
    // Extract the transaction data from the request body
    const { PageWallet, UserWallet, orderID } = req.body;

    // If we don't have something we need, stop!
    if (!UserWallet) {
      return res.status(400).json({
        message: "Missing User address",
      });
    }

    if (!PageWallet) {
      return res.status(400).json({
        message: "Missing User address",
      });
    }

    if (!orderID) {
      return res.status(400).json({
        message: "Missing order ID",
      });
    }


    // Convert our price to the correct format
    const bigAmount = BigNumber(DonationPrice);
    const buyerPublicKey = new PublicKey(buyer);
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = clusterApiUrl(network);
    const connection = new Connection(endpoint);

    // A blockhash is sort of like an ID for a block. It lets you identify each block.
    const { blockhash } = await connection.getLatestBlockhash("finalized");

    // The first two things we need - a recent block ID
    // and the public key of the fee payer
    const tx = new Transaction({
      recentBlockhash: blockhash,
      feePayer: buyerPublicKey,
    });

    // This is the "action" that the transaction will take
    // We're just going to transfer some SOL
    const transferInstruction = SystemProgram.transfer({
      fromPubkey: buyerPublicKey,
      // Lamports are the smallest unit of SOL, like Gwei with Ethereum
      lamports: bigAmount.multipliedBy(LAMPORTS_PER_SOL).toNumber(),
      toPubkey: sellerPublicKey,
    });

    // We're adding more instructions to the transaction
    transferInstruction.keys.push({
      // We'll use our OrderId to find this transaction later
      pubkey: new PublicKey(orderID),
      isSigner: false,
      isWritable: false,
    });

    tx.add(transferInstruction);

    // Formatting our transaction
    const serializedTransaction = tx.serialize({
      requireAllSignatures: false,
    });
    const base64 = serializedTransaction.toString("base64");

    res.status(200).json({
      transaction: base64,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "error creating tx" });
    return;
  }
}

export default function handler(req, res) {
  if (req.method === "POST") {
    createTransaction(req, res);
  } else {
    res.status(405).end();
  }
}
