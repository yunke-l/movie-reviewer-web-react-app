import {Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import "./style.css";
import Header from "./header/header";
import HorizontalNavbarNormal from "./navigation/navigation-bar-horizontal-normal";
import HomePage from "./profile-pages/home-page/home-page.js";
import PostPage from "./profile-pages/post/post";
import FavoritePage from "./profile-pages/favorite/favorite";
import SettingPageNormal from "./profile-pages/setting/setting-normal";
import {useDispatch, useSelector} from "react-redux";
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { profileThunk, } from '../movie-reviewer/services/auth-thunks';
import SettingsScreen from './profile-pages/setting/setting';


function ProfileNormal () {

  const user = useSelector((state) => state.user.currentUser);
  const userID = user?._id;
  const userImage = user?.avatar;
  const userName = user?.username;
  const userLevel = user?.level;

  return (
      <div className="profile-page">
        <Header
            backgroundColor="#000000"
            userImage={userImage}
            userName={userName}
            // initialUserSignature="Good good study! Day day up!"
            userLevel={userLevel}
        />

        {/* <div>
          <HomePage />
        </div> */}
      {/* {!user && (
         <h2>Please login to view your profile.</h2>
      )} */}
      {user && (
        <div>
          <HomePage />
        </div>
      )}


        {/* <SettingPageNormal /> */}

      </div>
  );
};

export default ProfileNormal;
