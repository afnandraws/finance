import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { app } from "../firestore";

export const postSignUp = createAsyncThunk(
  "auth/getUserData",
  async (signUpData) => {
    const apiKey = app.options.apiKey;
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: signUpData.email,
          password: signUpData.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseData = await response.json();
    console.log(responseData);
    return { email: responseData.email, idToken: responseData.idToken };
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    idToken: "",
    status: "", // idle, loading, success, error
  },
  extraReducers: {
    [postSignUp.pending]: (state) => {
      state.status = "loading";
      console.log("loading");
    },
    [postSignUp.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.email = payload.email;
      state.idToken = payload.idToken;
      console.log("success");
      console.log(state.idToken);
    },
    [postSignUp.rejected]: (state) => {
      state.status = "error";
      console.log("error");
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
