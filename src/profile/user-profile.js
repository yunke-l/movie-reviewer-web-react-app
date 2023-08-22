import React, { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import axios from 'axios';
import ProfileNormal from './profile-screen-normal';
import ProfileVerified from './profile-screen-verified';
import ProfileAnonymous from "./profile-screen-anonymous";
import NotFoundComponent from './profile-screen-notfound';
import {useSelector} from "react-redux";
import {profileThunk} from "../movie-tracker/services/auth-thunks";

const NODE_SERVER_URL = "http://localhost:4000";

function UserProfile() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const id = currentUser?._id;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log('Fetching user data for id:', id);
    axios.get(`${NODE_SERVER_URL}/api/users/${id}`)
    .then(response => {
      setUserData(response.data);
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });

  }, [id]);



  let ProfileComponent;

  switch (userData?.role) {
    case 'regular':
      ProfileComponent = <ProfileNormal />;
      break;
    case 'verified':
      ProfileComponent = <ProfileVerified />;
      break;
    default:
      ProfileComponent = <ProfileAnonymous />;
      break;
  }


  return (
      <div>
        {ProfileComponent}
      </div>
  );
}

export default UserProfile;

