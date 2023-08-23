import { createAsyncThunk } from "@reduxjs/toolkit";
import {findUserById} from "./user-service";
import * as service from "./user-service";


export const findUserByIdThunk = createAsyncThunk(
    'findUserById',
    (userID) => findUserById(userID)
)

export const fetchUserByIdThunk = createAsyncThunk( 
  
    "users/findUserById",
    // async () => await service.findUserById()
    async (userId) => {
        const userData = await service.findUserById(userId);
        return userData;
      }
   );