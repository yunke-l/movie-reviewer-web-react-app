import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { findMovieBySearchTermThunk } from "./search-thunks";
import { Link, useNavigate } from 'react-router-dom';  // Added useNavigate

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const { movies } = useSelector((state) => state.omdb);
    const dispatch = useDispatch();

    const navigate = useNavigate();  // Use the useNavigate hook

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (props.search) {
            props.search(value);
        }
    };


    const handleSearchClick = async () => {
        try {

            const result = await dispatch(findMovieBySearchTermThunk(searchTerm));
            console.log("result", result);
            if (!result.payload) {
                navigate(`/reviewer/search`);
                throw new Error("No movies found for the given search term");
            }
            else {
                navigate(`/reviewer/search/${searchTerm}`);
                console.log("searchTerm", searchTerm);
            }
        } catch (error) {

            alert(error.message);
            setSearchTerm('');

        }
    };


    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="input-group">
                        <input
                            onChange={handleInputChange}
                            value={searchTerm}
                            type="text"
                            className="form-control"
                            placeholder="Search"
                        />
                        <button
                            className="btn btn-primary"
                            onClick={handleSearchClick}>
                            Search
                        </button>
                    </div>
                </li>
                {/* //{loading && <p>Loading...</p>} */}
                {movies &&
                    movies.map((movie) => (
                        <li key={movie.imdbID} className="list-group-item">
                            <Link to={`/reviewer/details/${movie.imdbID}`}>
                                {movie.Title}
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>

    );
}

export default SearchBar;
