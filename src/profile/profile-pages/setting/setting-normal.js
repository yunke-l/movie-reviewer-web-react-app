
import './setting.css';
import { Form, Button } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  profileThunk,
  logoutThunk,
  updateUserThunk
}from '../../../movie-reviewer/services/auth-thunks';

const SettingPageNormal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userIcon, setUserIcon] = useState('');
  const [signature, setSignature] = useState('');

  const { currentUser } = useSelector((state) => state.user);
  const [profile, setProfile] = useState(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [savedProfile, setSavedProfile] = useState(currentUser);

  const handleUpdateChange = (event, field) => {
    const newProfile = { ...profile, [field]: event.target.value };
    setProfile(newProfile);
  };

  const save = async () => {
    const updateResponse = await dispatch(updateUserThunk(profile));
    const fetchResponse = await dispatch(profileThunk());
    
    if (updateResponse.payload && fetchResponse.payload) {
      setProfile(fetchResponse.payload); // Updates local state with fetched data
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission and updating user information here
  };

  useEffect( () => {
    const loadProfile = async () => {
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
    };
   loadProfile();
}, []);
  return (
      <div className="setting-page">
        <h2 className="mb-4">Account Settings</h2>

        {/* <div className="row">
          <div className="col-4">
            <div className="avatar">
              <span className="form-label">Avatar</span><br />
              <img src={userIcon} alt="User Icon" className="avatar-img"/>
              <label>
                <input type="file" accept="image/*" />
              </label>
            </div>
          </div>


          <div className="col-8">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username">
                <Form.Label className="form-label">Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>


              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>



              <Form.Group controlId="signature">
                <Form.Label>Signature</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your signature"
                    value={signature}
                    onChange={(e) => setSignature(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Form>
          </div>

        </div> */}
    {profile && (<div>
      <div>
       <label>First Name</label>
       {/* <input type="text" value={profile.firstName}
        onChange={(event) => {
         const newProfile = {
          ...profile, firstName: event.target.value,
         };
         setProfile(newProfile);
        }}/> */}

        <input
            type="text"
            value={profile.firstName}
            onChange={(event) => handleUpdateChange(event, "firstName")}
        />

      </div>
      <div>
       <label>Last Name</label>
       {/* <input type="text" value={profile.lastName}
        onChange={(event) => {
         const newProfile = {
          ...profile, lastName: event.target.value,
         };
         setProfile(newProfile);
        }}/> */}

        <input
            type="text"
            value={profile.lastName}
            onChange={(event) => handleUpdateChange(event, "lastName")}
        />

      </div></div>
    )}
    <button
     onClick={() => {
       dispatch(logoutThunk());
       navigate("/tuiter/login");
     }}>                   Logout</button>
    <button onClick={save}>Save  </button>

</div>
  );
};

export default SettingPageNormal;
