import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { app } from "../firestore";

export const getUserData = createAsyncThunk(
  "auth/getUserData",
  async (userData) => {
    const apiKey = app.options.apiKey;
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseData = await response.json();

    return {};
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    userID: "",
  },
  extraReducers: {},
});
