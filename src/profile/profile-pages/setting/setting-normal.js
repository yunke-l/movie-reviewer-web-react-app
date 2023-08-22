import React, { useState } from 'react';
import './setting.css';
import { Form, Button } from 'react-bootstrap';

const SettingPageNormal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userIcon, setUserIcon] = useState('');
  const [signature, setSignature] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission and updating user information here
  };

  return (
      <div className="setting-page">
        <h2 className="mb-4">Account Settings</h2>

        <div className="row">
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

        </div>
</div>
  );
};

export default SettingPageNormal;
