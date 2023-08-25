import './setting.css';
import { Form, Button } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { updateUserThunk } from '../../../movie-reviewer/services/auth-thunks';
// import {
//   profileThunk,
//   logoutThunk,
//   updateUserThunk
// }from '../../../movie-reviewer/services/auth-thunks';



function SettingsScreen() {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user.currentUser);
    // const [newFirstName, setNewFirstName] = useState('');
    // const [newLastName, setNewLastName] = useState('');
      // Initialize the state with the user's existing first name and last name
    const [newFirstName, setNewFirstName] = useState(currentUser.firstName);
    const [newLastName, setNewLastName] = useState(currentUser.lastName);

    const [selectedAvatar, setSelectedAvatar] = useState(currentUser.avatar); // New state for selected avatar



  const handleSaveChanges = async () => {
      if (!currentUser) {
        alert('Please log in to update your profile.');
        return;
      }
  
      // Prepare updated user data
      const updatedUserData = {
        ...currentUser,
        firstName: newFirstName || currentUser.firstName, // Use existing firstName if newFirstName is empty
        lastName: newLastName || currentUser.lastName,   // Use existing lastName if newLastName is empty
        avatar: selectedAvatar || currentUser.avatar      // Use existing avatar if selectedAvatar is empty
      };
  
      // Dispatch the updateUserThunk with the updated user data
      await dispatch(updateUserThunk(updatedUserData));
  
      // Reset input fields
      setNewFirstName('');
      setNewLastName('');
    }

    const handleAvatarClick = (avatarUrl) => {
      setSelectedAvatar(avatarUrl); // Update the selected avatar when an image is clicked
    };


    // List of avatar images
    const avatarList = [
      "/images/avatar/follower1.jpeg",
      "/images/avatar/follower2.jpeg",
      "/images/avatar/follower3.jpeg",
      "/images/avatar/follower4.jpeg",
      "/images/avatar/follower5.jpeg",
      "/images/avatar/follower6.jpeg",
      "/images/avatar/follower7.jpeg",
      "/images/avatar/follower8.jpeg",
      "/images/avatar/follower9.png",
      "/images/avatar/follower10.jpeg",
      "/images/avatar/following1.jpeg",
      "/images/avatar/following2.jpeg",
      "/images/avatar/following3.jpeg",
      "/images/avatar/following4.jpeg",
      "/images/avatar/following5.jpeg",
      "/images/avatar/following6.jpeg",
      "/images/avatar/following7.jpeg",
      "/images/avatar/following8.jpeg",
        ];



  return (
    <div className="setting-profile-edit bg-light">
        <h1 className="setting-edit-title">✏️ Edit Profile</h1>

      <label className="input-label">Avatar from our library:</label>
      <div className="setting-avatar-selection-container">
        <div className="setting-avatar-selection">
          {/* Display a grid of avatar images */}
          {avatarList.map((avatarUrl) => (
              <img
                  key={avatarUrl}
                  src={avatarUrl}
                  alt="Avatar"
                  className={`avatar-image ${selectedAvatar === avatarUrl ? 'selected' : ''}`}
                  onClick={() => handleAvatarClick(avatarUrl)}
              />
          ))}
        </div>
      </div>

        <div className="setting-input-group">
            <label className="input-label">First Name: </label>
            <input
                className="input-field"
                type="text"
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
            />
        </div>
        <div className="setting-input-group">
            <label className="input-label">Last Name: </label>
            <input
                className="input-field"
                type="text"
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
            />
        </div>
        <button className="setting-save-button" onClick={handleSaveChanges}>
            Save Changes
        </button>
    </div>

  );
}
export default SettingsScreen;