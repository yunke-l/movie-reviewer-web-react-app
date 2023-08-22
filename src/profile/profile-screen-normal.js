import React from 'react';
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import Header from "./header/header";
import HorizontalNavbarNormal from "./navigation/navigation-bar-horizontal-normal";
import HomePage from "./profile-pages/home-page/home-page.js";
import PostPage from "./profile-pages/post/post";
import FavoritePage from "./profile-pages/favorite/favorite";
import SettingPageNormal from "./profile-pages/setting/setting-normal";
import {useDispatch, useSelector} from "react-redux";



function ProfileNormal () {

  const { currentUser } = useSelector((state) => state.user);
  const user = useSelector((state) => state.user.currentUser);
  const userID = user?._id;
  const userImage = user?.avatar;
  const userName = user?.username;
  const userLevel = user?.level;

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

        <Routes>
          <Route path={`/reviewer/profile/${userID}`} element={<Navigate to={`/reviewer/profile/${userID}/home-page`} />} />
          <Route path={`/reviewer/profile/${userID}/home-page`} element={<HomePage />} />
          <Route path={`/reviewer/profile/${userID}/post`} element={<PostPage />} />
          <Route path={`/reviewer/profile/${userID}/favorite`} element={<FavoritePage />} />
          <Route path={`/reviewer/profile/${userID}/setting`} element={<SettingPageNormal />} />
        </Routes>
      </div>
  );
};

export default ProfileNormal;
