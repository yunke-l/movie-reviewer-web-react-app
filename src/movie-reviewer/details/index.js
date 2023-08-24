import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import './details.css';
import { findMovieByImdbIDThunk } from "../search/search-thunks";
import MovieDetails from "./movie-details"; // Import the MovieDetails component
import PostReview from "./post-reviews";
import MovieReviews from "./movie-reviews";

const DetailsScreen = () => {
    const { imdbID } = useParams()
    const { details } = useSelector((state) => state.omdb)
    const currentUser = useSelector((state) => state.user.currentUser)
    const canPostReview = currentUser !== null && currentUser !== undefined;
    const dispatch = useDispatch()


    const handlePostReview = (review) => {
        // Handle the logic to post the review (e.g., send it to the server)
        console.log("Posting review:", review);
    };

    useEffect(() => {
        dispatch(findMovieByImdbIDThunk(imdbID))
    }, [])

    return (
        <div className="detail-container bg-light">
            <MovieDetails details={details} /> {/* Include the MovieDetails component */}
            {/* Add postreviews and recentreviews components here */}
            {/* <PostReview onPostReview={handlePostReview} /> */}
          {canPostReview && (
            <PostReview
                imdbid={details.imdbID}
                moviePoster={details.Poster}
                movieTitle={details.Title}
                onPostReview={handlePostReview}
            />
          )}

            {!canPostReview && (
                <div className="alert alert-info mt-4">
                    <h2>
                        Please <NavLink to="/reviewer/login">log in</NavLink> to post a review.
                    </h2>
                </div>
            )}

          <MovieReviews imdbid={details.imdbID} />
        </div>
    );
}

export default DetailsScreen;
