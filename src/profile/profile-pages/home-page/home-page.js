import React from 'react';
import FollowSideBar from "../../../follow-side-bar/follow-side-bar";
import PostPage from '../post/post';

const HomePage = () => {
  console.log('HomePage component is being executed.');
  return (
      <>
      <div className="row">
        <div className="col-9">
          <h1> Home Page</h1>
          <PostPage/>
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
