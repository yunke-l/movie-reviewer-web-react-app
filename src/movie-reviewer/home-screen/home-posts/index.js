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

    return(
      <ul className="list-group">
              <h3>homepost</h3>
      {loading && (
        <li className="list-group-item">
          Loading...
        </li>
      )}
      {!loading && posts.map(post => (
        <li key={post._id} className="list-group-item">
          <div>
            <PostItem post={post} />
            <PostStats post={post} />
          </div>
        </li>
      ))}

      {/* Conditionally render LoginPosts if the user is logged in */}
      {/* <h3>Your Recent Posts:</h3>
      {currentUser &&  <LoginPosts username={currentUser.username} />} */}

      {/* Conditionally render LoginPosts if the user is logged in */}
      {currentUser ? (
        <>
          <LoginPosts username={currentUser.username} />
        </>
      ) : (
        <h3>Please login to see your recent posts</h3>
      )}
    </ul>

    
      
    );
   };
   export default HomePosts;