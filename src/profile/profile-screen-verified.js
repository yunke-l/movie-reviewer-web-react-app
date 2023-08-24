import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from "./header/header";
import HorizontalNavbarVerified from "./navigation/navigation-bar-horizontal-verified";
import HomePage from "./profile-pages/home-page/home-page";
import PostPage from "./profile-pages/post/post";
import FavoritePage from "./profile-pages/favorite/favorite";
import SettingPageVerified from "./profile-pages/setting/setting-verified";
import MoviesPage from "./profile-pages/movies-posted/movies-posted";
import {useDispatch, useSelector} from "react-redux";

function ProfileVerified () {
  const { currentUser } = useSelector((state) => state.user);
  const user = useSelector((state) => state.user.currentUser);
  const userID = user?._id;
  const userImage = user?.avatar;
  const userName = user?.username;
  const userLevel = user?.level;

  return (
      <div className="profile-page">
        <Header
            // backgroundImage="/images/headers/header-background4.jpeg"
            backgroundColor="#000000"
            userImage={userImage}
            userName={userName}
            // initialUserSignature="Good good study! Day day up!"
            userLevel={userLevel}
        />
        <HorizontalNavbarVerified />

        <Routes>
          <Route path={`/home-page`} element={<HomePage />} />
          <Route path={`/movie`} element={<MoviesPage />} />
          <Route path={`/post`} element={<PostPage />} />
          <Route path={`/favorite`} element={<FavoritePage />} />
          <Route path={`/setting`} element={<SettingPageVerified />} />
        </Routes>
      </div>
  );
};

export default ProfileVerified;
