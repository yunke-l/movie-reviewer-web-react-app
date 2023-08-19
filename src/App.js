import { HashRouter, Navigate } from 'react-router-dom';
import {Routes, Route} from "react-router";
import ProfileVerified from "./profile/profile-screen-verified";

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Hello  from "./hello";
import ProfileNormal from "./profile/profile-screen-normal";




function App() {
  return (
    <HashRouter>
      <div className="container">
        <Routes>
          <Route path="/hello"         element={<Hello/>}/>
          <Route path="/profile-normal/*" element={<ProfileNormal/>}/>
          <Route path="/profile-normal"         element={<Navigate to="/profile-normal/home-page"/>}/>
          <Route path="/profile-verified/*" element={<ProfileVerified/>}/>
          <Route path="/profile-verified"         element={<Navigate to="/profile-verified/home-page"/>}/>


        </Routes>

      </div>
    </HashRouter>
  );
}

export default App;
