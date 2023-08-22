import React, { useState } from 'react';
import './anonymous-banner.css';
import {Link} from "react-router-dom";
const AnonymousBanner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
  };

  return (
      isBannerVisible && (
          <div className="anonymous-banner">
            <div className="close-button" onClick={handleCloseBanner}>
              X
            </div>
            <div className="banner-content">
              <h2>Welcome!</h2>
              <p>Unlock more features by creating an account or logging in.</p>
              <div className="button-container">
                <div className="button-container">
                  <button className="register-button">
                    <Link to="/reviewer/register">Register</Link>
                  </button>
                  <button className="login-button">
                    <Link to="/reviewer/login">Login</Link>
                  </button>
                </div>

              </div>
            </div>
          </div>
      )
  );
};

export default AnonymousBanner;
