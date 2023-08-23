import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { findUserByIdThunk } from '../../movie-reviewer/services/user-thunks';
import PostItem from '../../movie-reviewer/home-screen/home-posts/home-posts-item';
// import { followUser } from './path-to-followUser-action'; // Import the action to follow a user
// import { fetchUserByIdThunk } from './path-to-fetchUserByIdThunk'; // Import the action to fetch user data by ID
// import PostItem from './PostItem'; // Your PostItem component
import { findPostByUserId } from '../../movie-reviewer/services/posts-service';
import { findPostByUserIdThunk } from '../../movie-reviewer/services/posts-thunks';
import { fetchUserByIdThunk } from '../../movie-reviewer/services/user-thunks';

function ViewOtherProfiles() {
  const dispatch = useDispatch();
  const { id } = useParams(); // Get the id from the URL parameter
  const userPosts = useSelector((state) => state.posts.userPosts);
  const [user, setUser] = useState(null);

  // console.log("the id that are viewing is:",id); //id is successfully got.

  useEffect(() => {
    // Fetch the user's posts based on id
    dispatch(findPostByUserIdThunk(id));
  }, [dispatch, id ]);

  const userDetails = useSelector((state) => state.userDetails.userById);
  
  useEffect(() => {
    // Fetch the user's posts based on id
    dispatch(fetchUserByIdThunk(id));
  }, [dispatch, id ]);


  // useEffect(() => {
  //     dispatch(fetchUserByIdThunk(id))
  //   }, [])

  // const user = posts.filter(post => post.username === username);

  if (!userDetails) {
    return <div>Loading...</div>;
  }
    // Print out some user data for testing
    console.log('User Username:', userDetails.username);
    console.log('User First Name:', userDetails.firstName);
  return (
    <div>
      <h1> Hi you are viewing other's profile</h1>
      <h2>{userDetails.username}'s Profile</h2>
      {userPosts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}

      {/* Render the follow button
      <button onClick={handleFollowClick}>Follow</button> */}
    </div>
  );
}

export default ViewOtherProfiles;
