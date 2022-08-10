import './LandingPage.css';
import React, { FC, useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify'
import { useParams } from 'react-router-dom';
import { ProfileDetail } from '../ui-components';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import Donate from '../custom-components/Donate';
import { Users } from '../models'

const ProfilePage: FC = (props) => {
  const { pageId } = useParams();
  const { publicKey } = useWallet();
  const [user, setUser] = useState<Users>();

  const getUser = async () => {
    if(pageId !== null && pageId !== undefined){
      const data = (await DataStore.query(Users)).filter(u => u.WalletAddress === pageId.toString())[0];
      setUser(data);
    } else {
      console.log("No pageId found");
      // TODO: Redirect to home page or 404 page
    }
  }

  const override = {
    "SolanaPayFrame": {
      children: <Donate PageID={pageId}/>
    },
  }

  useEffect(() => {
    getUser()
  })

return (
  <div className="ProfilePage">
      <ProfileDetail user={user} overrides={override} />
  </div>
  );
}

export default ProfilePage;
