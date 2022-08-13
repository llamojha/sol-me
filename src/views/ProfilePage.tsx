import './Amplify.css';
import React, { FC, useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify'
import { useParams } from 'react-router-dom';
import { ProfileDetailVariants } from '../ui-components';
import { useWallet } from '@solana/wallet-adapter-react';
import Donate from '../custom-components/Donate';
import { Users } from '../models'
import { useBreakpointValue } from '@aws-amplify/ui-react';

type Variant = "Small" | "Default";

const ProfilePage: FC = (props) => {
  const { publicKey } = useWallet();
  const { pageId } = useParams();
  //const { publicKey } = useWallet();
  const [user, setUser] = useState<Users>();

  const variant = useBreakpointValue({
    base: "Small",
    small: "Small",
    medium: "Default",
  });

  const getUser = async () => {
    if(pageId !== null && pageId !== undefined){
      const data = (await DataStore.query(Users)).filter(u => u.WalletAddress === pageId.toString())[0];
      if(data === undefined){
        document.location.href = "/404";
      } else {
        setUser(data);
      }
    } else {
      console.log("No pageId found");
    }
  }

  const override = {
    "SolanaPayFrame": {
      children: <Donate PageID={pageId} />
    },
  }

  useEffect(() => {
    getUser()
  })

  if (!publicKey) {
    return (
      <div>
        <p>You need to connect your wallet to make donations</p>
      </div>
    );
  } else {
    return (
      <div className="ProfilePage">
          <ProfileDetailVariants variant={variant as Variant} user={user} overrides={override}  />
      </div>
      );
  }
}

export default ProfilePage;
