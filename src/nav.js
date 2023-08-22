import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import React from 'react';
import { logoutThunk } from "./movie-reviewer/services/auth-thunks"; 
import { useNavigate } from 'react-router-dom'; 

function Nav() {
    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // If you're using React Router
    const id = currentUser ? currentUser.id : null;
  
    return (
      <nav className="nav nav-tabs mb-2">
        <Link className="nav-link" to="/reviewer/home">
          Home
        </Link>
        <Link className="nav-link" to="/reviewer/search">
          Search
        </Link>
        
        {!currentUser ? (
          <>
            <Link className="nav-link" to="/reviewer/login">
              Login
            </Link>
            <Link className="nav-link" to="/reviewer/register">
              Register
            </Link>
          </>
        ) : (
          <>
            <Link className="nav-link" to={`/reviewer/profile/${id}`}>
              Profile
            </Link>
            {/* <div>
              Hi, {currentUser.username}
            </div> */}
            <button
              className="btn nav-link"
              onClick={() => {
                dispatch(logoutThunk());
                navigate('/reviewer/home'); 
              }}
            >
              Logout
            </button>
          </>
        )}
      </nav>
    );
  }
  
export default Nav;