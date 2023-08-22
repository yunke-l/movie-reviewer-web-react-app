import React from 'react';
import FollowingList from './following/following-list';
import FollowersList from './follower/follower-list';
import './follow-side-bar.css';

const FollowSideBar = () => {
  const followings = [
    { id: 1, icon: '/images/followings/following1.jpeg', name: 'Alice', level: 4 },
    { id: 2, icon: '/images/followings/following2.jpeg', name: 'Bob', level: 7 },
    { id: 3, icon: '/images/followings/following3.jpeg', name: 'Charlie', level: 5 },
    { id: 4, icon: '/images/followings/following4.jpeg', name: 'Diana', level: 3 },
    { id: 5, icon: '/images/followings/following5.jpeg', name: 'Eve', level: 9 },
    { id: 6, icon: '/images/followings/following6.jpeg', name: 'Frank', level: 2 },
    { id: 7, icon: '/images/followings/following7.jpeg', name: 'Grace', level: 6 },
    { id: 8, icon: '/images/followings/following8.jpeg', name: 'Helen', level: 8 },
    // Add more followings as needed
  ];

  const followers = [
    { id: 1, icon: '/images/followers/follower1.jpeg', name: 'Charlie', level: 5 },
    { id: 2, icon: '/images/followers/follower2.jpeg', name: 'Diana', level: 3 },
    { id: 3, icon: '/images/followers/follower3.jpeg', name: 'Eve', level: 9 },
    { id: 4, icon: '/images/followers/follower4.jpeg', name: 'Alice', level: 4 },
    { id: 5, icon: '/images/followers/follower5.jpeg', name: 'Bob', level: 7 },
    { id: 6, icon: '/images/followers/follower6.jpeg', name: 'Grace', level: 6 },
    { id: 7, icon: '/images/followers/follower7.jpeg', name: 'Helen', level: 8 },
    { id: 8, icon: '/images/followers/follower8.jpeg', name: 'Frank', level: 2 },
    { id: 9, icon: '/images/followers/follower9.png', name: 'Ivy', level: 1 },
    { id: 10, icon: '/images/followers/follower10.jpeg', name: 'Judy', level: 10 },
  ];
  return (
      <div className="follow-side-bar container-fluid">
        <FollowingList followings={followings} />
        <FollowersList followers={followers} />
      </div>
  );
};

export default FollowSideBar;
