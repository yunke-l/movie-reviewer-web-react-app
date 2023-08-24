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
        <div className="position-relative ml-0">

        <div className="home-posts-container">
          <HomePosts />
        </div>
        </div>
     </div>

   </>
 );
};
export default HomeScreen;