import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ViewOwnProfile from './view-own-profile';
import ViewOtherProfiles from './profile-pages/view-other-profiles';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

function UserProfile() {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user.currentUser);
    const location = useLocation(); // Use useLocation to get the current location
  
    const hashParams = new URLSearchParams(location.hash.slice(1)); // Remove the "#" and create URLSearchParams
  
    const id = hashParams.get('/reviewer/profile/:id'); // Get the value of the parameter
    console.log("I am hereeee!");
console.log("hashParams is :", hashParams);
  console.log("the id got by useParams:", id);

  if (id !== currentUser?._id) {
    return <ViewOtherProfiles />;
  }

  return <UserProfile />;
}

export default UserProfile;
