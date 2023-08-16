import logo from './logo.svg';
import './App.css';
import { HashRouter } from 'react-router-dom';
import {Routes, Route, Navigate} from "react-router";
import React from 'react';

import FAcheck from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { FaReact } from 'react-icons/fa';

function App() {
  return (
    <HashRouter>
      <div className="container">
        <h1>hello</h1>

        < AiOutlineSearch />
      </div>
    </HashRouter>
  );
}

export default App;
