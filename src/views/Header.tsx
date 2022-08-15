import React, { FC, useEffect, useState } from 'react';

import { API } from 'aws-amplify';

import { useParams } from 'react-router-dom';
import { NavBarWallet } from '../ui-components'

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import logo from '../logo.png';

import { DataStore } from 'aws-amplify'
import { Users } from '../models'
import { PublicKey } from '@solana/web3.js';


require('@solana/wallet-adapter-react-ui/styles.css');


const Header: FC = (props) => {

  const [textValue, setTextValue] = useState('Sign Up');
  const { publicKey } = useWallet();

  const goToProfile = (profileId: string) => {
    document.location.href = profileId;
  }

  const register = async () => {
    if(publicKey === null){
      console.log("No wallet found");
      return;
    }
    try {
      const existingUser = (await DataStore.query(Users)).filter(u => u.WalletAddress === publicKey.toString());;
      // If User Already Exists -> Go to Profile Page on Click
      if(existingUser.length > 0){
        console.log("User already registered");
        setTextValue('Profile Page');
        goToProfile(publicKey.toString());
      } else {
      // Else Sign Up the User
        await DataStore.save(
          new Users({
            WalletAddress: publicKey.toString(),
            Username: publicKey.toString(),
            ProfileImage: "https://www.sol-me.com/favicon.ico",
            ProfileBanner: "https://www.sol-me.com/default-banner900x480.png",
            Description: "Welcome to my Sol Me page. ",
            DonationDescription: "Support my work with a donation in Sol or USDC",
            DonationTitle: "Send me some Sol",
          })
        );

        console.log("New User created!");
        setTextValue('Profile Page');
        alert(`User Created`);
      }

    } catch (error) {
      console.log("Error saving user", error);
    }
  }

  const buttonFrameOverride = {
    "SolanaWallet": {
      children: <WalletMultiButton />
    },
    "LogoImage": {
      src: logo
    },
    "Button": {
      onClick: () => register(), // TODO: add logic if wallet not connected
      children: textValue
    },
  }

  const checkUser = async (publicKey: PublicKey) => {
    const existingUser = (await DataStore.query(Users)).filter(u => u.WalletAddress === publicKey.toString());;
    // If User Already Exists -> Go to Profile Page on Click
    if(existingUser.length > 0){
      setTextValue('Profile Page');
    }
  }
  // Check if Wallet is connected
  useEffect(() => {
    if(publicKey !== null){
      checkUser(publicKey);
    }
  }, [publicKey]);

return (
  <div className="Header">
    <NavBarWallet overrides={buttonFrameOverride}/>
  </div>
  );
}

export default Header;
