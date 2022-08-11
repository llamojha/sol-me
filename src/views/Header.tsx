import React, { FC, useEffect, useState } from 'react';

import { API } from 'aws-amplify';

import { useParams } from 'react-router-dom';
import { NavBarWallet } from '../ui-components'

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import logo from '../logo.svg';

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
            ProfileImage: "https://www.llamojha.com/assets/img/alvaro-llamojha.jpg",
            ProfileBanner: "https://www.llamojha.com/assets/img/alvaro-llamojha.jpg",
            Description: "This user is from the API",
            DonationDescription: "This user is from the API",
            DonationTitle: "This user is from the API"
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
