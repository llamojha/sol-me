import React, { useEffect, useState, useMemo } from "react";
import { Keypair, Transaction } from "@solana/web3.js";
import { findReference, FindReferenceError } from "@solana/pay";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { InfinitySpin } from "react-loader-spinner";
import createTransaction from "../functions/createTransaction";

const STATUS = {
  Initial: "Initial",
  Submitted: "Submitted",
  Paid: "Paid",
};

export default function Donate({ PageID }) {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const orderID = useMemo(() => Keypair.generate().publicKey, []); // Public key used to identify the order

  const [loading, setLoading] = useState(false); // Loading state of all above
  const [status, setStatus] = useState(STATUS.Initial); // Tracking transaction status


  const order = useMemo(
    () => ({
      PageWallet: PageID.toString(),
      UserWallet: publicKey.toString(),
      orderID: orderID.toString(),
    }),
    [PageID, publicKey, orderID]
  );

  // Fetch the transaction object from the server (done to avoid tampering)
  const processTransaction = async () => {
    setLoading(true);
    const txResponse = await createTransaction(PageID, publicKey, orderID ); //TODO: Move Transaction to ServerSide
    const tx = Transaction.from(Buffer.from(txResponse, "base64"));
    console.log("Tx data is", tx);
    // Attempt to send the transaction to the network
    try {
      const txHash = await sendTransaction(tx, connection);
      console.log(`Transaction sent: https://solscan.io/tx/${txHash}?cluster=devnet`);
      setStatus(STATUS.Submitted);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!publicKey) {
    return (
      <div>
        <p>You need to connect your wallet to make donations</p>
      </div>
    );
  }

  if (loading) {
    return <InfinitySpin color="gray" />;
  }

  return (
    <div>
        <button disabled={loading} onClick={processTransaction}
        class="amplify-button amplify-field-group__control amplify-button--primary amplify-button--default">
          Sol Me
        </button>
    </div>
  );
}
