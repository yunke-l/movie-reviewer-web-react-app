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
import ViewOtherProfiles from './profile-pages/view-other-profiles';

const NODE_SERVER_URL = "http://localhost:4000";

function ViewOwnProfile() {
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
  // console.log("current user role is :",currentUser.role);
  
  // switch (currentUser?.role) {
  //   case 'regular':
      
  //     <h2> we are going to profile normal</h2>
  //     ProfileComponent = <ProfileNormal />;
  //     break;
  //   case 'verified':
  //     <h2> we are going to profile verified</h2>
  //     ProfileComponent = <ProfileVerified />;
  //     break;
  //   default:
  //     <h2> we are going to profile Anonymous</h2>
  //     ProfileComponent = <ProfileAnonymous />;
  //     break;
  // }

  if (currentUser?.role === 'regular' || currentUser?.role === 'admin') {
    console.log("Going to profile regular");
    ProfileComponent = <ProfileNormal />;
  } else if (currentUser?.role === 'verified') {
    console.log("Going to profile verified");
    ProfileComponent = <ProfileVerified />;
  }

  return (
      <div>
        {ProfileComponent}
      </div>
  );
}

export default ViewOwnProfile;

