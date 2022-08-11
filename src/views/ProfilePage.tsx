import './LandingPage.css';
import React, { FC, useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify'
import { useParams } from 'react-router-dom';
import { ProfileDetail } from '../ui-components';
import { useWallet } from '@solana/wallet-adapter-react';
import Donate from '../custom-components/Donate';
import { Users } from '../models'

const ProfilePage: FC = (props) => {
  const { publicKey } = useWallet();
  const { pageId } = useParams();
  //const { publicKey } = useWallet();
  const [user, setUser] = useState<Users>();

  const getUser = async () => {
    if(pageId !== null && pageId !== undefined){
      const data = (await DataStore.query(Users)).filter(u => u.WalletAddress === pageId.toString())[0];
      console.log(data);
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
          <ProfileDetail user={user} overrides={override} />
      </div>
      );
  }
}

export default ProfilePage;
