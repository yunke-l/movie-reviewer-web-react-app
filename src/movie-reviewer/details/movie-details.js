import React from "react";
import { Star, Theaters, ThumbUp, Event } from '@mui/icons-material';
import './details.css';
const MovieDetails = ({ details }) => {
    return (
        <>
            <div className="detail-container">
                <div className="movie-section row">
                    <div className="section-left col-lg-4 col-md-12">
                        <img src={details.Poster} alt={details.Title} className="img-fluid" />
                    </div>
                    <div className="section-right col-lg-8 col-md-12">
                        <div className="movie-title">{details.Title}</div>

                        <div className="movie-rating">
                            <div className="row">
                                <div className="col-md-6">
                                  <span className="detail-item">
                                    IMDB Rating<Star className="star-icon" /> : {details.imdbRating}
                                  </span>
                                </div>
                                <div className="col-md-6">
                                  <span className="detail-item">
                                    IMDB Votes <ThumbUp className="like-icon" /> : {details.imdbVotes}
                                  </span>
                                </div>
                                <div className="col-md-6">
                                  <span className="detail-item">
                                    Runtime <Theaters className="runtime-icon" /> : {details.Runtime}
                                  </span>
                                </div>
                                <div className="col-md-6">
                                  <span className="detail-item">
                                    Year <Event className="year-icon" /> : {details.Year}
                                  </span>
                                </div>
                            </div>
                        </div>

                        <div className="movie-plot">{details.Plot}</div>
                        <div className="movie-info mt-4">
                            <div className="row">
                                <div className="col-md-6">
                                <span>Director</span>
                                <span>{details.Director}</span>
                                </div>
                            <div>
                                <span>Stars </span>
                                <span>{details.Actors}</span>
                            </div>
                            <div>
                                <span>Generes</span>
                                <span>{details.Genre}</span>
                            </div>
                            <div>
                                <span>Country</span>
                                <span>{details.Country}</span>
                            </div>
                            <div>
                                <span>Awards</span>
                                <span>{details.Awards}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default MovieDetails;
