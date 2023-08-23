import React from 'react';
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import Header from "./header/header";
import HorizontalNavbarNormal from "./navigation/navigation-bar-horizontal-normal";
import HomePage from "./profile-pages/home-page/home-page.js";
import PostPage from "./profile-pages/post/post";
import FavoritePage from "./profile-pages/favorite/favorite";
import SettingPageNormal from "./profile-pages/setting/setting-normal";
import {useDispatch, useSelector} from "react-redux";
import { useLocation } from 'react-router-dom';


function ProfileNormal () {

  const user = useSelector((state) => state.user.currentUser);
  const userID = user?._id;
  const userImage = user?.avatar;
  const userName = user?.username;
  const userLevel = user?.level;

  console.log("userID in profilenormal: ", userID)

    // Get the current location object using useLocation
    const location = useLocation();
    console.log('Current path:', location.pathname);

  return (
      <div className="profile-page">
        <Header
            backgroundImage="/images/headers/header-background4.jpeg"
            userImage={userImage}
            userName={userName}
            // initialUserSignature="Good good study! Day day up!"
            userLevel={userLevel}
        />
        <HorizontalNavbarNormal/>
        <h1> we are at profile normal</h1>
        {/* <Routes>
          <Route path={`/home-page`} element={<HomePage />} />
          <Route path={`/post`} element={<PostPage />} />
          <Route path={`/favorite`} element={<FavoritePage />} />
          <Route path={`/setting`} element={<SettingPageNormal />} />
        </Routes> */}
        <HomePage />
        <PostPage />
        <FavoritePage />
        <SettingPageNormal />
      </div>
  );
};

export default ProfileNormal;
