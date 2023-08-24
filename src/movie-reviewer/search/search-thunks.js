import { createAsyncThunk } from "@reduxjs/toolkit";
import { findMovieBySearchTerm, findMovieByImdbID } from "./search-service";

// export const findMovieBySearchTermThunk = createAsyncThunk(
//     'findMovieBySearchTerm',
//     (term) => findMovieBySearchTerm(term)
// )

export const findMovieBySearchTermThunk = createAsyncThunk(
    'findMovieBySearchTerm',
    async (term) => {

        const results = await findMovieBySearchTerm(term);
        console.log(results);
        if (!results) {
            console.log("error");
            throw new Error("No movies found for the given search term");
            return false;
        }
        else {
            return results;

        }
    }
);

export const findMovieByImdbIDThunk = createAsyncThunk(
    'findMovieByImdbID',
    (imdbID) => findMovieByImdbID(imdbID)
)