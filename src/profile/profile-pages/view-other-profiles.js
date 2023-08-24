import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { findUserByIdThunk } from '../../movie-reviewer/services/user-thunks';
import PostItem from '../../movie-reviewer/home-screen/home-posts/home-posts-item';
// import { followUser } from './path-to-followUser-action'; // Import the action to follow a user
// import { fetchUserByIdThunk } from './path-to-fetchUserByIdThunk'; // Import the action to fetch user data by ID
// import PostItem from './PostItem'; // Your PostItem component
import { findPostByUserIdThunk } from '../../movie-reviewer/services/posts-thunks';
import { fetchUserByIdThunk } from '../../movie-reviewer/services/user-thunks';
import Header from '../header/header';
import "./view-other-profiles.css";
import { updateUserThunk } from '../../movie-reviewer/services/auth-thunks';

function ViewOtherProfiles() {
  const dispatch = useDispatch();
  const { id } = useParams(); // Get the id from the URL parameter
  const userPosts = useSelector((state) => state.posts.userPosts);
  const userDetails = useSelector((state) => state.userDetails.userById);
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    // Fetch the user's posts based on id
    dispatch(findPostByUserIdThunk(id));
  }, [dispatch, id ]);
  
  useEffect(() => {
    // Fetch the user's posts based on id
    dispatch(fetchUserByIdThunk(id));
  }, [dispatch, id ]);


  useEffect(() => {
    // This effect will run whenever currentUser changes
    console.log('currentUser Following:', currentUser.following);
  }, [currentUser]);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  console.log('currentUser Following:', currentUser.following);
  console.log('user detail Followers:', userDetails.followers);

  const handleFollowClick = async() => {
      if (!currentUser || !currentUser._id) {
        alert('Please Log in to follow an account.');
        return;
      }

      if (currentUser._id === userDetails._id) {
        alert('You cannot follow your own account.');
        return;
      }
      
      const updatedCurrentUser = {
        ...currentUser,
        following: [...currentUser.following, id] // Spread the existing array and add the followed user's ID
      };
      
      const updatedUserDetails = {
        ...userDetails,
        followers: [...userDetails.followers, currentUser._id] // Spread the existing array and add the current user's ID
      };
      //two arrays are right, but it didn't upload to backend.
      console.log('Updated Current User Following:', updatedCurrentUser.following);
      console.log('Updated Current User name:', updatedCurrentUser.username);
      console.log('Updated User Details Followers:', updatedUserDetails.followers);
      await dispatch(updateUserThunk(updatedCurrentUser));
      
      await dispatch(updateUserThunk(updatedUserDetails));


      }
      
      const handleLoginAlert = () => {
        alert('Please log in first to follow an account.');
      };


  return (
    <div className="view-other-profiles-profile-container">
    {/* <h2>Hi, you are viewing {userDetails.username}'s profile</h2> */}
    
    <div className="view-other-profiles-user-info">
      <div className="view-other-profiles-avatar">
        {/* Placeholder for avatar */}
        <img src={userDetails.avatar} alt={`${userDetails.username}'s Avatar`} />
      </div>
      
      <div className="view-other-profiles-user-details">
        <h2>{userDetails.username}'s Profile</h2>
        {/* <p>Level: {userDetails.level}</p> */}
        <p>Followers: {userDetails.followers.length}</p>
        <p>Following: {userDetails.following.length}</p>
        
        {currentUser ? (
          <button onClick={handleFollowClick}>
            {/* {currentUser.following.includes(userDetails._id) ? 'Unfollow' : 'Follow'} */}
            Follow
          </button>
        ) : (
          <button onClick={handleLoginAlert}>Follow</button>
        )}

      </div>
    </div>
    
    <div className="view-other-profiles-user-posts">
      <h3>{userDetails.username}'s Posts</h3>
      {userPosts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  </div>
  );
}

export default ViewOtherProfiles;
