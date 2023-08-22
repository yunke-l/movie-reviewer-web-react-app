import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findPostByUsernameThunk } from "../../../movie-reviewer/services/posts-thunks";
import PostItem from "../../../movie-reviewer/home-screen/home-posts/home-posts-item";
import PostStats from "../../../movie-reviewer/home-screen/home-posts/post-stats";


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
        <h2>Posts by {username}</h2>
        <ul className="list-group">
          {loading && <li className="list-group-item">Loading...</li>}
          {!loading && userPosts.length === 0 && (
              <li className="list-group-item">You haven't posted anything yet. Share your thoughts and experiences!</li>
          )}
          {!loading &&
              userPosts.map((userPost) => (
                  <li key={userPost._id} className="list-group-item">
                    <div>
                      <PostItem post={userPost} />
                      <PostStats post={userPost} />
                    </div>
                  </li>
              ))}
        </ul>
      </div>
  );
};

export default UserPosts;
