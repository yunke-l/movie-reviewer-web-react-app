import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { utcToZonedTime, format } from 'date-fns-tz';
import { Link } from "react-router-dom";


import {deletePostThunk} from "../../services/posts-thunks";
import "./style.css";


const PostItem = (
  { post }
  ) => {
  const dispatch = useDispatch();

//   const user = useSelector((state) => state.user); // Assuming your user data is in the Redux state

//   const [userDetails, setUserDetails] = useState({
//       avatar: "",
//       name: "",
//   });

//   useEffect(() => {
//     // Fetch the user details based on userId
//     dispatch(fetchUserById(post.userId))
//         .then((user) => {
//             setUserDetails({
//                 avatar: user.avatar,
//                 name: user.name,
//             });
//         })
//         .catch((error) => {
//             console.error("Error fetching user details:", error);
//         });
// }, [dispatch, post.userId]);


  const deletepostHandler = (id) => {
      dispatch(deletePostThunk(id));
  }
    // Temporary data for user avatar and name
    const tempUser = {
      avatar: "/images/avatar-gwen.jpg",
      name: "John Doe",
    };

    // Convert UTC timestamp to Vancouver time cause MongoDB store UTC time automatically
    const vancouverTimeZone = 'America/Vancouver';
    const vancouverCreatedAt = utcToZonedTime(post.createdAt, vancouverTimeZone);
  
    // Format the Vancouver timestamp
    const formattedTime = format(vancouverCreatedAt, "MMM dd, yyyy HH:mm:ss");

    return (
        <div className="post-item">
        <div className="movie-info">
          <img
            className="movie-photo"
            src={post.moviePoster}
            alt={`${post.movieTitle} Movie Poster`}
          />
          <div className="home-movie-title">{post.movieTitle}</div>
        </div>
        <div className="post-content-container">
          <div className="post-header">
            <Link to={`/reviewer/profile/${post.userId}`}>
              <img
                className="user-avatar"
                src={post.userAvatar}
                alt={`${post.username}'s Avatar`}
              />
            </Link>
            <div className="post-details">
              <div className="post-title">{post.title}</div>
              <div className="post-subtitle">
                {post.username} - {formattedTime}
              </div>
            </div>
          </div>
          <div className="post-content">{post.content}</div>
          {/* <button
            className="delete-button"
            onClick={() => deletepostHandler(post.id)}
          >
            Delete
          </button> */}
        </div>
      </div>

    );
};
export default PostItem;