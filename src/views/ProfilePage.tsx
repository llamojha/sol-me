import './LandingPage.css';
import React, { FC, useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify'
import { useParams } from 'react-router-dom';
import { ProfileDetail } from '../ui-components';

import { Users } from '../models'

const ProfilePage: FC = (props) => {
  const { profileId } = useParams();
  const [users, setUsers] = useState<Array<Users>>([]);

  const getUsers = async () => {
    const data: Users[] = await DataStore.query(Users);
    setUsers(data);
  }

  useEffect(() => {
    getUsers()
  }, [])
  let randomUser: Users = users[Math.floor(Math.random()*users.length)];

return (
  <div className="ProfilePage">
      <ProfileDetail users={randomUser}  />
  </div>
  );
}

export default ProfilePage;
