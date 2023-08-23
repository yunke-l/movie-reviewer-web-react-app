import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import Header from './Header';
//import HorizontalNavbarNormal from './HorizontalNavbarNormal';
import { useSelector, useDispatch } from 'react-redux';
 // Import the action to follow a user
import { findUserByIdThunk } from '../../movie-reviewer/services/user-thunks';


function ViewOtherProfiles() {
  // const dispatch = useDispatch();
  // const currentUser = useSelector((state) => state.user.currentUser);
  // const { userId } = useParams(); // Get the userId from the URL parameter
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   if (userId) {
  //     console.log('Fetching user data for id:', userId);
  //     dispatch(findUserByIdThunk(userID));
  //   }
  // }, [dispatch, userId]);


  // const handleFollowClick = () => {
  //   // Dispatch the followUser action with the user's _id as payload
  //   dispatch(followUser(user._id));
  //   // You can also update the local state or user data to reflect the change
  // };

  // if (!user) {
  //   return <div>Loading...</div>; // You can show a loading state while fetching data
  // }

  return (
    // <div className="profile-page">
    //   <Header
    //     backgroundImage="/images/headers/header-background4.jpeg"
    //     userImage={user.avatar}
    //     userName={user.username}
    //     userLevel={user.level}
    //   />
    //   <HorizontalNavbarNormal />
    //   {/* Render the user's posts and other profile details here */}
    //   {userId !== currentUser._id && (
    //     <button onClick={handleFollowClick}>Follow</button>
    //   )}
    // </div>
    <h1> hi you are viewing other user's profile</h1>
  );
}

export default ViewOtherProfiles;
