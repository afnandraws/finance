import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db, app } from "../firestore";
import { collection, getDocs } from "firebase/firestore";

const userCollectionRef = collection(db, "users");

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

export const postSignIn = createAsyncThunk(
  "auth/getUserData",
  async (signInData) => {
    const apiKey = app.options.apiKey;
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: signInData.email,
          password: signInData.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
  }
);

//create getUserData asyncthunk
export const getUserData = createAsyncThunk(
  "auth/getUserData",
  async (userData) => {
    const response = await getDocs(userCollectionRef);
    console.log(response);
  }
);

//create logoutUser asyncthunk

const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: "",
    email: "",
    idToken: null,
    success: "", // idle, loading, success, error
  },
  extraReducers: {
    [postSignUp.pending]: (state) => {
      console.log("loading");
    },
    [postSignUp.fulfilled]: (state, { payload }) => {
      if (payload.idToken.length === 0) {
        console.log("error no token");
      } else {
        state.email = payload.email;
        state.idToken = payload.idToken;
      }

      console.log("success");
    },
    [postSignUp.rejected]: (state) => {
      state.status = "error";
      console.log("error");
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
