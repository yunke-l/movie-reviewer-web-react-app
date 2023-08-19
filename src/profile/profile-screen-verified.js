import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from "../header/header";
import HorizontalNavbarVerified from "../navigation/navigation-bar-horizontal-verified";
import HomePage from "./profile-pages/home-page/home-page";
import PostPage from "./profile-pages/post/post";
import FavoritePage from "./profile-pages/favorite/favorite";
import SettingPage from "./profile-pages/setting/setting";
import MoviesPage from "./profile-pages/movies-posted/movies-posted";


function ProfileVerified () {


  return (
      <div className="profile-page">
        <Header
            backgroundImage="/images/headers/header-background4.jpeg"
            userImage="/images/selfies/selfie2.jpeg"
            userName="Yunke Li"
            initialUserSignature="Good good study! Day day up!"
            userLevel={6}
        />
        <HorizontalNavbarVerified />

        <Routes>
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/movie" element={<MoviesPage />} />
          <Route path="/setting" element={<SettingPage />} />
        </Routes>
      </div>
  );
};

export default ProfileVerified;
