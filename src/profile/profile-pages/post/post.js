import React from 'react';
import UserPosts from './user-posts-item';
import { useSelector } from "react-redux";

const PostPage = () => {
  console.log('PostPage component is being executed.');
  const user = useSelector((state) => state.user.currentUser);
  const username = user?.username;

  return (

      <div className="post-page">
        <UserPosts username={username} />
      </div>
  );
};

export default PostPage;