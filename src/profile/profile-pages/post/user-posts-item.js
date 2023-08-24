import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findPostByUsernameThunk } from "../../../movie-reviewer/services/posts-thunks";
import LoginPostsItems
  from "../../../movie-reviewer/home-screen/home-posts/login-posts-items";
import PostStats from "../../../movie-reviewer/home-screen/home-posts/post-stats";
import "./styles.css";

const UserPosts = () => {
  const { posts, loading } = useSelector((state) => state.posts);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const username = currentUser?.username;

  useEffect(() => {
    // Only fetch posts if a valid username is available
    if (username) {
      dispatch(findPostByUsernameThunk(username));
    }
  }, [dispatch, username]); // Make sure to include 'dispatch' and 'username' in the dependency array

  // Filter the posts to show only those by the current user
  const userPosts = posts.filter((post) => post.username === username);

  return (
      <div>
        <h2 className="post-username">🎬 Posts by {username}</h2>
        <ul className="list-group bg-light">
          {loading && <li className="list-group-item">Loading...</li>}
          {!loading && userPosts.length === 0 && (
              <li className="list-group-item bg-light">You haven't posted anything yet. Share your thoughts and experiences!</li>
          )}
          {!loading &&
              userPosts.map((userPost) => (
                  <li key={userPost._id} className="list-group-item">
                    <div>
                      <LoginPostsItems post={userPost} />
                      <PostStats post={userPost} />
                    </div>
                  </li>
              ))}
        </ul>
      </div>
  );
};

export default UserPosts;
