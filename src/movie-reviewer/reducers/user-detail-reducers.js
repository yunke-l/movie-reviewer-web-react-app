import { createSlice } from "@reduxjs/toolkit";
import { fetchUserByIdThunk } from "../services/user-thunks";

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: { userById: null },
  reducers: {},
  extraReducers: {
    [fetchUserByIdThunk.fulfilled]: (state, { payload }) => {
      state.userById = payload;
    },
  },
});

export default userDetailsSlice.reducer;
