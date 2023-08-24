import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";

const SEARCH_URL = 'http://www.omdbapi.com/?apikey=1ab715db&s=';
const DEATILS_URL = 'http://www.omdbapi.com/?apikey=1ab715db&i=';

function ShowMoviesRelated(user) {
    // const currentUser = useSelector((state) => state.user.currentUser);
    const [directorMovies, setDirectorMovies] = useState([]);
  
    useEffect(() => {
      async function fetchMoviesByDirector() {
        // const response = await axios.get(`${SEARCH_URL}${user.firstName}+ " " +${user.lastName}`);
        const response = await axios.get(`${SEARCH_URL}${user.username}+ " " +${user.username}`);
        // const directorName = `${user.firstName} ${user.lastName}`;
        const directorName = `${user.username}`;
  
        if (response.data && response.data.Search) {
          const movies = response.data.Search;
          const directorMovies = movies.filter(movie => movie.Director === directorName);
  
          setDirectorMovies(directorMovies);
        }
      }
  
      if (user.firstName && user.lastName) {
        fetchMoviesByDirector();
      }
    }, [user]);
  
    return (
        <div>
        <h1> you are seeing a verified account profile</h1>
        {directorMovies.length > 0 ? (
          <div>
            <h1>Movies Directed by {user.firstName} {user.lastName}</h1>
            <ul>
              {directorMovies.map(movie => (
                <li key={movie.imdbID}>{movie.Title}</li>
              ))}
            </ul>
          </div>
        ) : (
          <h1>No movies found for the director {user.firstName} {user.lastName}</h1>
        )}
      </div>
    );
  }
  
export default ShowMoviesRelated;
  