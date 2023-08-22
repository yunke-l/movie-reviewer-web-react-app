import React, { useState } from 'react';
import './header.css';

// const Header = ({ backgroundImage, userImage, userName, initialUserSignature, userLevel }) => {
const Header = ({ backgroundImage,userImage, userName, userLevel }) => {
  // const [userSignature, setUserSignature] = useState(initialUserSignature);
  // const [isEditing, setIsEditing] = useState(false);

  // const handleSignatureChange = (event) => {
  //   setUserSignature(event.target.value);
  // };
  //
  // const handleEditClick = () => {
  //   setIsEditing(!isEditing);
  // };

  return (
      <header className="profile-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="user-profile">
          <img src={userImage} alt="User" className="user-icon" />
          <div className="user-details">
            <div className="user-header">
              <h1 className="user-name">{userName}</h1>
              <div className="user-level">
                <i className="fas fa-star"></i>
                <span className="level-text">LV{userLevel}</span>
              </div>
            </div>
            {/*<div className="signature-container">*/}
            {/*  {isEditing ? (*/}
            {/*      <textarea*/}
            {/*          className="user-signature"*/}
            {/*          value={userSignature}*/}
            {/*          onChange={handleSignatureChange}*/}
            {/*          rows="3"*/}
            {/*      />*/}
            {/*  ) : (*/}
            {/*      <div className="signature-text">*/}
            {/*        {userSignature}*/}
            {/*        <i className="fas fa-edit" onClick={handleEditClick}></i>*/}
            {/*      </div>*/}
            {/*  )}*/}
            {/*</div>*/}
          </div>
        </div>
      </header>
  );
};

export default Header;
