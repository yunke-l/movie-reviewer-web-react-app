import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from "../header/header";
import HorizontalNavbarNormal from "../navigation/navigation-bar-horizontal-normal";
import HomePage from "./profile-pages/home-page/home-page";
import PostPage from "./profile-pages/post/post";
import FavoritePage from "./profile-pages/favorite/favorite";
import SettingPage from "./profile-pages/setting/setting";


function ProfileNormal () {


  return (
      <div className="profile-page">
        <Header
            backgroundImage="/images/headers/header-background4.jpeg"
            userImage="/images/selfies/selfie2.jpeg"
            userName="Yunke Li"
            initialUserSignature="Good good study! Day day up!"
            userLevel={6}
        />
        <HorizontalNavbarNormal/>

        <Routes>
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/setting" element={<SettingPage />} />
        </Routes>
      </div>
  );
};

export default ProfileNormal;
