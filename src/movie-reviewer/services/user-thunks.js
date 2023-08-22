import { createAsyncThunk } from "@reduxjs/toolkit";
import {findUserById} from "./user-service";


export const findUserByIdThunk = createAsyncThunk(
    'findUserById',
    (userID) => findUserById(userID)
)