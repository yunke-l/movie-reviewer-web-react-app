import PostItem from "./home-posts-item";
import PostStats from "./post-stats";
import LoginPosts from "./login-posts";
import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";


import {findPostsThunk} from "../../services/posts-thunks";
import "./style.css";
import {NavLink} from "react-router-dom";

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
        <div className="row">
          <div className="col-md-12">
            <div className="bg-light text-dark p-4">
              <h2 className="mb-4 text-dark">🎬 Home Posts</h2>
              <div className="row">
                {loading ? (
                    <div className="col-12 text-center">
                      <div className="text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                ) : (
                    posts.map(post => (
                        <div
                            key={post._id}
                            className="col-lg-4 col-md-6 col-sm-12 mb-4 align-items-center"
                        >
                          <div>
                            <PostItem post={post} />
                          </div>
                          <div className="post-stat">
                            <PostStats post={post} />
                          </div>
                        </div>
                    ))
                )}
                <div className="col-12 text-center">
                  <h4>No more content available. We're eager to hear more of your thoughts.</h4>
                </div>
              </div>




  {currentUser ? (
                  <div className="row">
                    <div className="col-12 mt-4">
                      <br className="black-br" />
                      <h2 className="mb-4 mt-4 text-dark">🎬 Your Recent Posts:</h2>
                    </div>
                    <div className="col-12">
                      <LoginPosts username={currentUser.username} />
                    </div>

                  </div>

              ) : (
                  <div className="row">
                    <div className="col-12 text-center">
                      <div className="alert alert-info mt-4">
                        <h3>
                          Please <NavLink to="/reviewer/login">log in</NavLink> to post a review.
                        </h3>
                      </div>
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