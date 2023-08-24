
import { useSelector, useDispatch } from "react-redux";
import React, {useEffect} from "react";
import { findPostsThunk } from "../services/posts-thunks";
import './details.css';
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
              <div key={post._id} className="review-body">
                <div className="post-header">
                  <div>
                    <Link to={`/reviewer/profile/${post.userId}`}>
                      <img
                          className="user-avatar rounded-circle"
                          src={post.userAvatar}
                          alt={`${post.username}'s Avatar`}
                      />
                    </Link>
                  </div>
                  <div className="post-details ">
                    <div className="post-title">{post.title}</div>
                    <div className="post-subtitle text-muted">
                      {post.username} - {formattedTime} {/* Display formatted time */}
                    </div>
                  </div>
                </div>
                <div className="post-content mt-3">
                  {post.content}
                </div>
              </div>
          );
        })}
      </div>
  );
};

export default MovieReviews;


  