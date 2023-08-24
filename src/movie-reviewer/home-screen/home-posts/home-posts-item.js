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
        <div className="post-item card mb-4 align-items-center">
          <div className="post-item-content">
            <img
                className="movie-photo img-fluid"
                src={post.moviePoster}
                alt={`${post.movieTitle} Movie Poster`}
            />
            <div className="card-title align-items-center">{post.movieTitle}</div>
          </div>

          <div className="post-content-container card-body">
          <div className="row">
            <div className="post-header d-flex align-items-center justify-content-between">
              <Link to={`/reviewer/profile/${post.userId}`}>
                <img
                    className="user-avatar rounded-circle"
                    src={post.userAvatar}
                    alt={`${post.username}'s Avatar`}
                />
              </Link>
              <div className="post-details">
                <div className="post-title h5 mb-0">{post.title}</div>
                <div className="post-subtitle text-muted">
                  {post.username} - {formattedTime}
                </div>
              </div>
            </div>
            <div className="post-content mt-3" style={{ overflowWrap: 'break-word' }}>
              {post.content}
            </div>
          </div>
        </div>
        </div>



    );
};
export default PostItem;