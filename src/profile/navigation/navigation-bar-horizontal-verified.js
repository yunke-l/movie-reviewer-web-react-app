import React from 'react';
import './navigation-bar-horizontal.css';
import { NavLink, useLocation } from 'react-router-dom';
import {useSelector} from "react-redux";

const HorizontalNavbarVerified = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const userID = currentUser?._id;
  console.log("userID: ", userID);


  return (
      <div className="horizontal-navbar">
        <div className="nav-items">
          <NavLink to={`/reviewer/profile/home-page`} activeClassName="active" end>
            Home Page
          </NavLink>
          <NavLink to={`/reviewer/profile/movie`} activeClassName="active">
            Movie
          </NavLink>
          <NavLink to={`/reviewer/profile/post`} activeClassName="active">
            Post
          </NavLink>
          <NavLink to={`/reviewer/profile/favorite`} activeClassName="active">
            Favorite
          </NavLink>
          <NavLink to={`/reviewer/profile/setting`} activeClassName="active">
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


export default HorizontalNavbarVerified;

