import React from 'react';
import './navigation-bar-horizontal.css';
import { NavLink, useLocation } from 'react-router-dom';

const HorizontalNavbarNormal = () => {
  const { pathname } = useLocation();
  const [,, active] = pathname.split("/profile-normal/");


  return (
      <div className="horizontal-navbar">
        <div className="nav-items">
          <NavLink to="/profile-normal/home-page" activeClassName="active" end>
            Home Page
          </NavLink>
          <NavLink to="/profile-normal/post" activeClassName="active">
            Post
          </NavLink>
          <NavLink to="/profile-normal/favorite" activeClassName="active">
            Favorite
          </NavLink>
          <NavLink to="/profile-normal/setting" activeClassName="active">
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


export default HorizontalNavbarNormal;

