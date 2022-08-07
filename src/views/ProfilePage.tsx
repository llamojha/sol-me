import './LandingPage.css';
import React, { FC, useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify'
import { useParams } from 'react-router-dom';
import { ProfileDetail } from '../ui-components';

import { Users } from '../models'

const ProfilePage: FC = (props) => {
  const { profileId } = useParams();

  const [user, setUser] = useState<Users>();

  const getUser = async () => {
    if(profileId !== null && profileId !== undefined){
      const data = (await DataStore.query(Users)).filter(u => u.WalletAddress === profileId.toString())[0];
      setUser(data);
    } else {
      console.log("No profileId found");
      // TODO: Redirect to home page or 404 page
    }
  }

  useEffect(() => {
    getUser()
  })

return (
  <div className="ProfilePage">
      <ProfileDetail user={user}  />
  </div>
  );
}

export default ProfilePage;
