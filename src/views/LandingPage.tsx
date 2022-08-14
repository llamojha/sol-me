import './Amplify.css';
import React, { FC, useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify'
import { HeroLayoutVariant, Features4x1 } from '../ui-components'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Users } from '../models'
import { useBreakpointValue } from '@aws-amplify/ui-react';

require('@solana/wallet-adapter-react-ui/styles.css');

type Variant = "Small" | "Default";

const LandingPage: FC = (props) => {
  // State
  const [users, setUsers] = useState<Array<Users>>([]);

  const variant = useBreakpointValue({
    base: "Small",
    small: "Small",
    medium: "Default",
  });

  const getUsers = async () => {
    const data: Users[] = await DataStore.query(Users);
    setUsers(data);
  }

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
        <HeroLayoutVariant variant={variant as Variant} />
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