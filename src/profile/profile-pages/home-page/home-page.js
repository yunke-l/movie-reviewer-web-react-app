import React from 'react';
import FollowSideBar from "../../../follow-side-bar/follow-side-bar";

function HomePage () {

  return (
      <div className="row">
        <div className="col-9">
          <h1> Home Page</h1>
        </div>
        <div className="col-3">
          <div className="home-page">
            <FollowSideBar />
          </div>
        </div>
      </div>


  );
};

export default HomePage;
