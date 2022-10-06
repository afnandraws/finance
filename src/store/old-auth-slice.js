import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUserData = createAsyncThunk(
  "auth/getUserData",
  async (userData) => {
    const usernameData = userData.username;
    const passwordData = userData.password;

    const response = await fetch(
      `https://finance-project-1a173-default-rtdb.firebaseio.com/users/${userData.username}.json`
    );

    const responseData = await response.json();

    return { usernameData, passwordData, responseData };
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: null,
    status: "idle", // idle, loading, error, success
  },
  extraReducers: {
    [getUserData.pending]: (state) => {
      state.status = "loading";
      console.log("loading");
    },
    [getUserData.fulfilled]: (state, { payload }) => {
      if (payload.passwordData === payload.responseData.password) {
        state.username = payload.username;
        state.status = "success";
        console.log("success");
      } else {
        state.status = "error";
        console.log("error");
      }
    },
    [getUserData.rejected]: (state) => {
      state.status = "error";
      console.log("error");
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;

//first check if such a directory exists,
// then in getUserData.fulfilled do an if statement
//if payload.password === payload.responseData.password
// then make status = completed
