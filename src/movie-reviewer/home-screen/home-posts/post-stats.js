import React from 'react';
import "./style.css";
import { FaRegComment, FaHeart} from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { AiOutlineRetweet, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiShare, FiThumbsDown } from "react-icons/fi";
import { updatePostThunk } from "../../services/posts-thunks";
import {PiThumbsDownDuotone, PiThumbsDownFill} from "react-icons/pi"


const PostStats = ({ post}) => {
    const dispatch = useDispatch();
    const handleLikeToggle = () => {
      const updatedpost = {
          ...post,
          liked : true,
          likes : post.likes + 1,
      };
      dispatch(updatePostThunk(updatedpost))
  }
  const handleDislikeToggle = () => {
    const updatedpost = {
        ...post,
        disliked : true,
        dislikes : post.dislikes + 1,
    };
    dispatch(updatePostThunk(updatedpost))
}

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