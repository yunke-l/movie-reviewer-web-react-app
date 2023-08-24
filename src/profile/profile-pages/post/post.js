import React from 'react';
import UserPosts from './user-posts-item';
import { useSelector } from "react-redux";
import "./styles.css";
import LoginPosts from "../../../movie-reviewer/home-screen/home-posts/login-posts";

const PostPage = () => {
  console.log('PostPage component is being executed.');
  const user = useSelector((state) => state.user.currentUser);
  const username = user?.username;

  return (

      <div className="post-page">
        <br className={"black-br"}/>
        <h2 className="post-username">🎬 Posts by {username}</h2>
        <LoginPosts username={username}/>
      </div>
  );
};

export default PostPage;