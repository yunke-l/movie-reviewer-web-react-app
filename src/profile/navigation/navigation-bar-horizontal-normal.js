import React from 'react';
import './navigation-bar-horizontal.css';
import { NavLink, useLocation } from 'react-router-dom';
import {useSelector} from "react-redux";

const HorizontalNavbarNormal = () => {

  const currentUser = useSelector(state => state.user.currentUser);
  const userID = currentUser?._id;
  console.log("userID: ", userID);

  return (
      <div className="horizontal-navbar">
        <div className="nav-items">
        <NavLink to={`/reviewer/profile/${userID}/home-page`} activeclassname="active" end>
          Home Page
        </NavLink>
        <NavLink to={`/reviewer/profile/${userID}/post`} activeclassname="active">
          Post
        </NavLink>
        <NavLink to={`/reviewer/profile/${userID}/favorite`} activeclassname="active">
          Favorite
        </NavLink>
        <NavLink to={`/reviewer/profile/${userID}/setting`} activeclassname="active">
          Setting
        </NavLink>
      </div>

        {/*<div className="search-bar">*/}
        {/*  <input type="text" placeholder="Search..." />*/}
        {/*  <button>*/}
        {/*    <i className="fas fa-search"></i>*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>
  );
};


export default HorizontalNavbarNormal;

