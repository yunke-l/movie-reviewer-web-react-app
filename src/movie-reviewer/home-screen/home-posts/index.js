import PostItem from "./home-posts-item";
import PostStats from "./post-stats";
import LoginPosts from "./login-posts";
import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";


import {findPostsThunk} from "../../services/posts-thunks";
import "./style.css";

const HomePosts = () => {
  const {posts, loading} = useSelector(state => state.posts)
  const currentUser = useSelector((state) => state.user.currentUser);

  // const { currentUser } = useSelector((state) => state.user);
  
  const dispatch = useDispatch();
  useEffect(() => {
    //console.log('Dispatching findpostsThunk...');
    dispatch(findPostsThunk())
  }, [])

  return (
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="jumbotron bg-dark text-white p-4">
              <h2 className="mb-4 text-primary">🎬 Home Posts</h2>
              <div className="row">
                {loading ? (
                    <div className="col-12 text-center">
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                ) : (
                    posts.map(post => (
                        <div key={post._id} className="col-md-4 mb-4">
                          <PostItem post={post} />
                          <PostStats post={post} />
                        </div>
                    ))
                )}
              </div>
              {currentUser ? (
                  <div className="row">
                    <div className="col-12">
                      <h4 className="mb-3 text-primary">Your Recent Posts:</h4>
                    </div>
                    <div className="col-12">
                      <LoginPosts username={currentUser.username} />
                    </div>
                  </div>
              ) : (
                  <div className="row">
                    <div className="col-12 text-center">
                      <h4>Please login to see your recent posts</h4>
                    </div>
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>

  );
};
  export default HomePosts;