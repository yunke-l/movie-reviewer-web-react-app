import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { utcToZonedTime, format } from 'date-fns-tz';
import { Link } from "react-router-dom";
import PostStats from "./post-stats";

import {deletePostThunk} from "../../services/posts-thunks";
import "./login-posts.css"


const LoginPostItem = (
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
      <div className="card mb-2">
        <div className="row">
          <div className="post-item-content col-md-4">
            <img
                className="movie-photo img-fluid"
                src={post.moviePoster}
                alt={`${post.movieTitle} Movie Poster`}
            />
            <div className="card-title align-items-center">{post.movieTitle}</div>
          </div>

          <div className="col-md-8" style={{paddingRight: "60px"}}>

            <div className="post-header">
              <div>
                <Link to={`/reviewer/profile/${post.userId}`}>
                  <img
                      className="user-avatar rounded-circle"
                      src={post.userAvatar}
                      alt={`${post.username}'s Avatar`}
                  />
                </Link>
              </div>
              <div className="post-details ">
                <div className="post-title">{post.title}</div>
                <div className="post-subtitle text-muted" >
                  {post.username} - {formattedTime}
                </div>
              </div>
            </div>
            <div className="post-content mt-3">
              {post.content}
            </div>
            <div className="post-footer mt-3">
              <PostStats post={post} />
            </div>
          </div>

        </div>
      </div>



  );
};
export default LoginPostItem;