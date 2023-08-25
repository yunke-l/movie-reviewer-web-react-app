import React from 'react';
import "./style.css";
import { FaRegComment, FaHeart} from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { AiOutlineRetweet, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiShare, FiThumbsDown } from "react-icons/fi";
import { updatePostThunk } from "../../services/posts-thunks";
import {PiThumbsDownDuotone, PiThumbsDownFill} from "react-icons/pi"


const PostStats = ({ post}) => {
    const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.currentUser);
  const isLoggedIn = currentUser !== null && currentUser !== undefined;

    const handleLikeToggle = () => {
        if (!isLoggedIn) {
          return;
        }
      const updatedpost = {
          ...post,
          liked : true,
          likes : post.likes + 1,
      };
      dispatch(updatePostThunk(updatedpost))
  }
  const handleDislikeToggle = () => {
    if (!isLoggedIn) {
      return;
    }
    const updatedpost = {
        ...post,
        disliked : true,
        dislikes : post.dislikes + 1,
    };
    dispatch(updatePostThunk(updatedpost))
}

  // const [liked, setLiked] = useState(post.liked);
  // const [disliked, setDisliked] = useState(post.disliked);


  // const handleLikeToggle = () => {
  //   if (!isLoggedIn) {
  //     return;
  //   }
  //   if (!liked) {
  //     const updatedPost = {
  //       ...post,
  //       liked: true,
  //       dislikes: disliked ? post.dislikes - 1 : post.dislikes,
  //       likes: post.likes + 1,
  //     };
  //     dispatch(updatePostThunk(updatedPost));
  //     setLiked(true);
  //     setDisliked(false); // Reset dislike
  //   } else {
  //     const updatedPost = {
  //       ...post,
  //       liked: false,
  //       likes: post.likes - 1,
  //     };
  //     dispatch(updatePostThunk(updatedPost));
  //     setLiked(false);
  //   }
  // };

  // const handleDislikeToggle = () => {
  //   if (!isLoggedIn) {
  //     return;
  //   }
  //   if (!disliked) {
  //     const updatedPost = {
  //       ...post,
  //       disliked: true,
  //       likes: liked ? post.likes - 1 : post.likes,
  //       dislikes: post.dislikes + 1,
  //     };
  //     dispatch(updatePostThunk(updatedPost));
  //     setDisliked(true);
  //     setLiked(false); // Reset like
  //   } else {
  //     const updatedPost = {
  //       ...post,
  //       disliked: false,
  //       dislikes: post.dislikes - 1,
  //     };
  //     dispatch(updatePostThunk(updatedPost));
  //     setDisliked(false);
  //   }
  // };

  return (
      <div className="wd-footer-container">
        <div className="row ">
          <div className="col-2 wd-footer-item">
            <FaRegComment />
            <span className="ms-1">{post.replies}</span>
          </div>
          <div className="col-2 wd-footer-item">
            <AiOutlineRetweet />
            <span className="ms-1">{post.reposts}</span>
          </div>
          <div className="col-2 wd-footer-item" onClick={handleLikeToggle}>
            {post.liked ? (
                <AiFillHeart className="wd-footer-red-heart" />
            ) : (
                <AiOutlineHeart />
            )}
            <span className="ms-1">{post.likes}</span>
          </div>
          <div className="col-2 wd-footer-item" onClick={handleDislikeToggle}>
            {post.disliked ? <PiThumbsDownFill /> : <PiThumbsDownDuotone />}
            <span className="ms-1">{post.dislikes}</span>
          </div>
          <div className="col-2 wd-footer-item">
            <FiShare className="ms-1" />
          </div>
        </div>
      </div>




  );
};

export default PostStats;