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
      };
  
      // Dispatch the updateUserThunk with the updated user data
      await dispatch(updateUserThunk(updatedUserData));
  
      // Reset input fields
      setNewFirstName('');
      setNewLastName('');
    }

  return (
    // <div>
    // <h1>Edit Profile</h1>
    // <div>
    //     <label>First Name:</label>
    //     <input
    //     type="text"
    //     value={newFirstName}
    //     onChange={(e) => setNewFirstName(e.target.value)}
    //     />
    // </div>
    // <div>
    //     <label>Last Name:</label>
    //     <input
    //     type="text"
    //     value={newLastName}
    //     onChange={(e) => setNewLastName(e.target.value)}
    //     />
    // </div>
    // <button className='post-button' onClick={handleSaveChanges}>Save Changes</button>
    // </div>
    <div className="setting-profile-edit bg-light">
        <h1 className="setting-edit-title">✏️ Edit Profile</h1>
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