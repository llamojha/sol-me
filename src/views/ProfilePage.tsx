import './Amplify.css';
import React, { FC, useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify'
import { useParams } from 'react-router-dom';
import { ProfileDetails } from '../ui-components';
import { useWallet } from '@solana/wallet-adapter-react';
import Donate from '../custom-components/Donate';
import { Users } from '../models'
import { useBreakpointValue } from '@aws-amplify/ui-react';

type Variant = "Small" | "Default";

const ProfilePage: FC = (props) => {
  const { publicKey } = useWallet();
  const { pageId } = useParams();
  const [user, setUser] = useState<Users>();
  const [editing, setEditing] = useState(false);

  let isOwner = false;
  if(user !== undefined && user !== null) {
    isOwner = ( publicKey ? publicKey.toString() === user.WalletAddress : false );
  }


  const variant = useBreakpointValue({
    base: "Small",
    small: "Small",
    medium: "Default",
  });

  const getUser = async () => {
    if(pageId !== null && pageId !== undefined){;
      const dataWallet = (await DataStore.query(Users)).filter(u => u.WalletAddress === pageId.toString())[0]
      const dataUser = (await DataStore.query(Users)).filter(u => u.Username === pageId.toString())[0]
      if(dataWallet === undefined && dataUser === undefined){
        document.location.href = "/404";
      } else if (dataWallet !== undefined){
        setUser(dataWallet);
      } else {
        setUser(dataUser);
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

/*    isOwner && (
  <button className="create-product-button" onClick={() => setEditing(!editing)}>
  {editing ? "Close" : "Edit Profile"}
</button>
)}
*/

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
          <ProfileDetails variant={variant as Variant} user={user} overrides={override}  />
      </div>
      );
  }
}

export default ProfilePage;
