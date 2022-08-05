import React, { FC, useEffect, useState } from 'react';

import { API } from 'aws-amplify';
import { createUser } from '../graphql/mutations';

import { useParams } from 'react-router-dom';
import { NavBarWallet } from '../ui-components'

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import logo from '../logo.svg';


require('@solana/wallet-adapter-react-ui/styles.css');



const Header: FC = (props) => {
  const { publicKey } = useWallet();

  const goToProfile = (profileId: string) => {
    document.location.href = profileId;
  }

  const register = async () => {
    try {
      await API.graphql({
        query: createUser,
        variables: {
          input: {
            id: "0004",
            WalletAddress: publicKey,
            Username: publicKey,
            ProfileImage: "https://www.llamojha.com/assets/img/alvaro-llamojha.jpg",
            ProfileBanner: "https://www.llamojha.com/assets/img/alvaro-llamojha.jpg",
            Description: "This user is from the API",
            DonationDescription: "This user is from the API",
            DonationTitle: "This user is from the API"
          }
        }});
      console.log('New User created!');
    } catch (err){
      console.log(err);
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
      onClick: () => register() // TODO: add logic if wallet not connected
    },

  }

return (
  <div className="Header">
    <NavBarWallet overrides={buttonFrameOverride}/>
  </div>
  );
}

export default Header;
