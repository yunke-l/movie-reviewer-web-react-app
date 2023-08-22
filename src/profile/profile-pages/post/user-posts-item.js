import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findPostByUsernameThunk } from "../../../movie-reviewer/services/posts-thunks";
import PostItem from "../../../movie-reviewer/home-screen/home-posts/home-posts-item";
import PostStats from "../../../movie-reviewer/home-screen/home-posts/post-stats";


const UserPosts = () => {
  const { posts, loading } = useSelector((state) => state.posts);
  const currentUser = useSelector((state) => state.user.currentUser); // Assuming you have user info in the Redux store
  const dispatch = useDispatch();
  const username = currentUser?.username;

  useEffect(() => {
    if (username) {
      dispatch(findPostByUsernameThunk(username)); // Pass the current user's username to the thunk
    }
  }, [currentUser]);

  return (
      <ul className="list-group">
        <h3>Posts by {currentUser.username}</h3>
        {loading && <li className="list-group-item">Loading...</li>}
        {!loading &&
            posts.map((post) => (
                <li key={post._id} className="list-group-item">
                  <div>
                    <PostItem post={post} />
                    <PostStats post={post} />
                  </div>
                </li>
            ))}
      </ul>
  );
};

export default UserPosts;
