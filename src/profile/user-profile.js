import React, { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import axios from 'axios';
import ProfileNormal from './profile-screen-normal';
import ProfileVerified from './profile-screen-verified';
import ProfileAnonymous from "./profile-screen-anonymous";
import NotFoundComponent from './profile-screen-notfound';
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../movie-reviewer/services/auth-thunks";
import {findUserByIdThunk} from "../movie-reviewer/services/user-thunks";

const NODE_SERVER_URL = "http://localhost:4000";

function UserProfile() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const userID = currentUser?._id;

  const dispatch = useDispatch()
  // useEffect(() => {
  //   console.log('Fetching user data for id:', userID)
  //   dispatch(findUserByIdThunk(userID))
  // }, [])

  useEffect(() => {
    if (userID) {
      console.log('Fetching user data for id:', userID);
      dispatch(findUserByIdThunk(userID));
    }
  }, [dispatch, userID]);


  let ProfileComponent;

  switch (currentUser?.role) {
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

