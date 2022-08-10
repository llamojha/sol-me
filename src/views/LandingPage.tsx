import './LandingPage.css';
import React, { FC, useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify'

import { HeroLayout3, Features4x1 } from '../ui-components'

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

import { Users } from '../models'

require('@solana/wallet-adapter-react-ui/styles.css');

const LandingPage: FC = (props) => {
  // State
  const [walletAddress, setWalletAddress] = useState(null);
  const [users, setUsers] = useState<Array<Users>>([]);

  const getUsers = async () => {
    const data: Users[] = await DataStore.query(Users);
    setUsers(data);
  }

  const goToProfile = (profileId: string) => {
    document.location.href = profileId;
  }

  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const buttonFrameOverride = {
    "ButtonFrame": {
      children: <WalletMultiButton />
    }
  }

  const user1: Users = users[0];
  const user2: Users = users[1];
  const user3: Users = users[2];
  const user4: Users = users[3];

  useEffect(() => {
    getUsers()
  }, [])

  return (
      <div className="LandingPage">
        <HeroLayout3 overrides={buttonFrameOverride} />
        <Features4x1
          user1={user1}
          user2={user2}
          user3={user3}
          user4={user4}
        />
      </div>
  );
};

export default LandingPage;