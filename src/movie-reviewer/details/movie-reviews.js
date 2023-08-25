
import { useSelector, useDispatch } from "react-redux";
import React, {useEffect} from "react";
import { findPostsThunk } from "../services/posts-thunks";
import './details.css';
import './movie-review.css';
import {Link} from "react-router-dom";
import {format, utcToZonedTime} from "date-fns-tz";

const MovieReviews = ({ imdbid }) => {

    const {posts} = useSelector(state => state.posts)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(findPostsThunk())
    }, [])
    // console.log("Posts state:", posts); // Check the content of the posts array
      // Filter the posts that have the same imdbid as the current movie's imdbid
    const filteredPosts = posts.filter(post => post.imdbid === imdbid);

  // Convert UTC timestamp to Vancouver time
  const vancouverTimeZone = 'America/Vancouver';


  return (
      <div className="movie-reviews">
        <h2 className="reviews-heading mt-4 mb-4">🎬 Movie Reviews</h2>
        {filteredPosts.map((post) => {
          const vancouverCreatedAt = utcToZonedTime(post.createdAt, vancouverTimeZone);
          const formattedTime = format(vancouverCreatedAt, "MMM dd, yyyy HH:mm:ss");

          return (
              // <div key={post._id} className="review-body">
              //   <div>
              //   <div className="review-post-header row">
              //     <div className="col-1 align-items-center">
              //       <div>
              //       <Link to={`/reviewer/profile/${post.userId}`}>
              //         <img
              //             className="user-avatar rounded-circle"
              //             style={{ width: "50px", height: "50px" }}
              //             src={post.userAvatar}
              //             alt={`${post.username}'s Avatar`}
              //         />
              //       </Link>
              //       </div>
              //     </div>
              //     <div className="review-post-details col-11">
              //       <div className="review-post-title">{post.title}</div>
              //       <div className="post-subtitle text-muted">
              //         {post.username} - {formattedTime} {/* Display formatted time */}
              //       </div>
              //     </div>
              //   </div>
              //   <div className="review-post-content mt-3 col-11">
              //     {post.content}
              //   </div>
              //   </div>
              // </div>
              <div key={post._id} className="review-body">
                <div className="review-container">
                  <div className="review-header">
                    <div className="user-avatar-container">
                      <Link to={`/reviewer/profile/${post.userId}`}>
                        <img
                            className="user-avatar"
                            src={post.userAvatar}
                            alt={`${post.username}'s Avatar`}
                        />
                      </Link>
                    </div>
                    <div className="review-details">
                      <div className="review-title">{post.title}</div>
                      <div className="post-subtitle">
                        {post.username} - {formattedTime}
                      </div>
                    </div>
                  </div>
                  <div className="review-content">{post.content}</div>
                </div>
              </div>



          );
        })}
      </div>
  );
};

export default MovieReviews;


  