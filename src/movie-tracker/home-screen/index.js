import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {useNavigate, useParams} from "react-router";
import HomePosts from "./home-posts";
import "./styles.css"
import { Link } from "react-router-dom";
import {logoutThunk} from "../services/auth-thunks";

const HomeScreen = () => {
  const { currentUser } = useSelector((state) => state.user);
  const id = currentUser ? currentUser.id : null;
  const dispatch = useDispatch();
  const navigate = useNavigate();

 return(
   <>
     <div className="row">
        <h4>Home</h4>
        <div className="position-relative ml-0">
        <h5 className="position-relative  text-primary">Discover, Discuss, and Dive into the World of Movies.</h5>
        
            {/* Buttons to navigate to other routes */}
            <div className="button-container">
            <Link to="/reviewer/search">
              <button className="btn btn-primary">Search Movies</button>
            </Link>

              {!currentUser && <Link to="/reviewer/login">
              <button className="btn btn-primary">Login</button>
            </Link> }

              {!currentUser && <Link to="/reviewer/register">
              <button className="btn btn-primary">Register</button>
            </Link> }

              {currentUser ? (
                  <>
                    <Link to={`/reviewer/profile/${id}`}>
                      <button className="btn btn-primary">Profile</button>
                    </Link>

                    <button className="btn btn-primary" onClick={() => {
                      dispatch(logoutThunk());
                      navigate("/reviewer/home");}
                    }>
                      Logout
                    </button>
                  </>
              ) : null}


            </div>


        <div className="home-posts-container">
          <HomePosts />
        </div>

        </div>
     </div>

     {/* <div className="position-relative mb-2">
       <img src="/images/starship.jpg" className="w-100"/>
       <h1 className="position-absolute wd-nudge-up text-white">
         SpaceX Starship</h1>
     </div> */}
   </>
 );
};
export default HomeScreen;