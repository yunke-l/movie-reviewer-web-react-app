
import PostItem from './home-posts-item';
import { findPostsThunk } from '../../services/posts-thunks';
import { useSelector, useDispatch } from "react-redux";
import React, {useEffect} from "react";
import { useState } from "react";

const LoginPosts = ({ username }) => {
    const { posts, loading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findPostsThunk())
      }, [])
  
    const filteredPosts = posts.filter(post => post.username === username);

    return (
    //   <div className="post-content-container">
    //     {filteredPosts.map((post) => (
    //       <PostItem key={post._id} post={post} />
    //     //   <PostItem post={post} />
    //     ))}
    //   </div>
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