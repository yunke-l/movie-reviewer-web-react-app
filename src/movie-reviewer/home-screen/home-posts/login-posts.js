
import PostItem from './home-posts-item';
import { findPostsThunk } from '../../services/posts-thunks';
import { useSelector, useDispatch } from "react-redux";
import React, {useEffect} from "react";
import { useState } from "react";
import PostStats from "./post-stats";

const LoginPosts = ({ username }) => {
    const { posts, loading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findPostsThunk())
      }, [])
  
    const filteredPosts = posts.filter(post => post.username === username);

    return (
    <div>
    <h3>Your Recent Posts:</h3>
    {filteredPosts.map((post) => (
      <li key={post._id} className="list-group-item">
        <div>
          <PostItem post={post} />
        </div>
      </li>
    ))}
    </div>
    );
  };


export default LoginPosts;