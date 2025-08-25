// hooks/useMintNFT.ts
import { useState } from "react";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { nftauction } from "../contracts"; // your deployed CW721 ADO

export function useMintNFT(client: SigningCosmWasmClient, wallet: string) {
  const [loading, setLoading] = useState(false);

  const mintNFT = async (title: string, description: string, image: string) => {
    setLoading(true);
    try {
      const msg = {
        mint: {
          token_id: `${Date.now()}`, // unique ID
          owner: wallet,
          token_uri: image, // URL from IPFS/Cloudinary
          extension: { title, description },
        },
      };

      const res = await client.execute(
        wallet,
        nftauction, // CW721 NFT ADO address
        msg,
        "auto"
      );
      console.log("Mint result:", res);
      return res;
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { mintNFT, loading };
}
