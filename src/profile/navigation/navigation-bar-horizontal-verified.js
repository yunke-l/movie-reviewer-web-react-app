import React from 'react';
import './navigation-bar-horizontal.css';
import { NavLink, useLocation } from 'react-router-dom';

const HorizontalNavbarVerified = () => {
  const { pathname } = useLocation();
  const [,, active] = pathname.split("/profile-verified/");


  return (
      <div className="horizontal-navbar">
        <div className="nav-items">
          <NavLink to="/profile-verified/home-page" activeClassName="active" end>
            Home Page
          </NavLink>
          <NavLink to="/profile-verified/movie" activeClassName="active">
            Movie
          </NavLink>
          <NavLink to="/profile-verified/post" activeClassName="active">
            Post
          </NavLink>
          <NavLink to="/profile-verified/favorite" activeClassName="active">
            Favorite
          </NavLink>
          <NavLink to="/profile-verified/setting" activeClassName="active">
            Setting
          </NavLink>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
  );
};


export default HorizontalNavbarVerified;

