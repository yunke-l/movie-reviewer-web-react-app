import React from 'react';
import FollowSideBar from "../../../follow-side-bar/follow-side-bar";
import PostPage from '../post/post';
import SettingsScreen from "../setting/setting";
const HomePage = () => {
  console.log('HomePage component is being executed.');
  return (
      <>
      <div className="row">
        <div className="col-9">
          {/* <h1> Home Page</h1> */}
          <div className="setting-screen">
            <SettingsScreen/>
          </div>

          <div>

            <PostPage/>
          </div>
        </div>
        <div className="col-3">
          <div className="home-page">
            <FollowSideBar />
          </div>
        </div>
      </div>
      </>


  );
};

export default HomePage;
