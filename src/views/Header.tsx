import React, { FC, useEffect, useState } from 'react';
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

  const buttonFrameOverride = {
    "SolanaWallet": {
      children: <WalletMultiButton />
    },
    "LogoImage": {
      src: logo
    },
    "Button": {
      onClick: () => goToProfile(publicKey ? publicKey.toString() : "") // TODO: add logic if wallet not connected
    }
  }

return (
  <div className="Header">
    <NavBarWallet overrides={buttonFrameOverride}/>
  </div>
  );
}

export default Header;
