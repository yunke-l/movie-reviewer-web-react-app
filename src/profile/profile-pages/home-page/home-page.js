import React from 'react';
import FollowSideBar from "../../../follow-side-bar/follow-side-bar";
import PostPage from '../post/post';
import SettingsScreen from "../setting/setting";
const HomePage = () => {
  console.log('HomePage component is being executed.');
  return (
      <>
        <div className="row">
          <div className="col-lg-9 col-md-12">
            <div className="setting-screen">
              <SettingsScreen/>
            </div>

            <div>
              <PostPage/>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="home-page">
              <FollowSideBar />
            </div>
          </div>
        </div>

      </>


  );
};

export default HomePage;
