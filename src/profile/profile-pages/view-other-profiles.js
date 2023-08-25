import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PostItem from '../../movie-reviewer/home-screen/home-posts/home-posts-item';
import { findPostByUserIdThunk } from '../../movie-reviewer/services/posts-thunks';
import { fetchUserByIdThunk } from '../../movie-reviewer/services/user-thunks';
import "./view-other-profiles.css";
import { updateUserThunk } from '../../movie-reviewer/services/auth-thunks';
import LoginPostItem
  from "../../movie-reviewer/home-screen/home-posts/login-posts-items";
import ShowMoviesRelated from './show-movies-related';
function ViewOtherProfiles() {
  const dispatch = useDispatch();
  const { id } = useParams(); // Get the id from the URL parameter
  const userPosts = useSelector((state) => state.posts.userPosts);
  const userDetails = useSelector((state) => state.userDetails.userById);
  const currentUser = useSelector((state) => state.user.currentUser);
  const userRole = userDetails?.role; 
  const userDetailsName = userDetails?.username;

  // const [userDetailsLocal, setUserDetailsLocal] = useState(null); 

  useEffect(() => {
    // Fetch the user's posts based on id
    dispatch(findPostByUserIdThunk(id));
  }, [dispatch, id ]);
  
  useEffect(() => {
    // Fetch the user's posts based on id
    dispatch(fetchUserByIdThunk(id));
  }, [dispatch, id ]);

  

  if (!userDetails) {
    return <div>Loading...</div>;
  }


  // console.log('currentUser Following:', currentUser.following);

  const handleFollowClick = async() => {
      if (!currentUser || !currentUser._id) {
        alert('Please Log in to follow an account.');
        return;
      }

      if (currentUser._id === userDetails._id) {
        alert('You cannot follow your own account.');
        return;
      }

      if (currentUser.following &&currentUser.following.includes(userDetails._id)) {
        // Already following, perform unfollow action
        const updatedCurrentUser = {
          ...currentUser,
          following: currentUser.following.filter(userId => userId !== id) // Remove target user ID
        };
    
        const updatedUserDetails = {
          ...userDetails,
          followers: userDetails.followers.filter(userId => userId !== currentUser._id) // Remove current user ID
        };

        dispatch(updateUserThunk(updatedCurrentUser));
        dispatch(updateUserThunk(updatedUserDetails));

      } else {
        // Not following, perform follow action
        const updatedCurrentUser = {
          ...currentUser,
          following: [...currentUser.following, id]
        };
    
        const updatedUserDetails = {
          ...userDetails,
          followers: [...userDetails.followers, currentUser._id]
        };
    
        await dispatch(updateUserThunk(updatedCurrentUser));
        await dispatch(updateUserThunk(updatedUserDetails));

      }

      }
      
      const handleLoginAlert = () => {
        alert('Please log in first to follow an account.');
      };

    
  return (
    <div className="view-other-profiles-profile-container">
    <div className="view-other-profiles-user-info">
      <div className="view-other-profiles-avatar">
        {/* Placeholder for avatar */}
        <img src={userDetails.avatar} alt={`${userDetails.username}'s Avatar`} />
      </div>
      
      <div className="view-other-profiles-user-details">
        <h2>{userDetails.username}'s Profile</h2>
        <p>Followers: {userDetails.followers.length}</p>
        <p>Following: {userDetails.following.length}</p>
        
        {currentUser ? (
          <button className="post-button" onClick={handleFollowClick}>
             {currentUser.following && userDetails._id && currentUser.following.includes(userDetails._id) ? 'Unfollow' : 'Follow'}
            {/* {currentUser.following.includes(userDetails._id) ? 'Unfollow' : 'Follow'} */}
          </button>
        ) : (
          <button className="post-button" onClick={handleLoginAlert}>Follow</button>
        )}

      </div>
    </div>
    {userRole === 'verified' && <ShowMoviesRelated username={userDetailsName} />}
    <div className="view-other-profiles-user-posts">
      <h3>🎬 {userDetails.username}'s Posts</h3>
      {userPosts.map((post) => (
        <LoginPostItem key={post.id} post={post} />
      ))}
    </div>
  </div>
  );
}

export default ViewOtherProfiles;
