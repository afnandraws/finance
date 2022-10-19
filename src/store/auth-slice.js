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
    return { email: responseData.email, localId: responseData.localId };
  }
);

export const postSignIn = createAsyncThunk(
  "auth/getUserData",
  async (signInData) => {
    try {
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

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        return {
          email: responseData.email,
          localId: responseData.localid,
          success: "success",
        };
      } else {
        throw new Error("something went wrong");
      }
    } catch (error) {
      return {
        success: "error",
      };
    }
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
    localId: null,
    success: "", // idle, loading, success, error
  },
  extraReducers: {
    [postSignUp.pending]: () => {
      console.log("loading");
    },
    [postSignUp.fulfilled]: (state, { payload }) => {
      console.log(payload);
      if (payload.localId.length === 0) {
        state.success = "error";
        console.log("error");
      } else {
        state.email = payload.email;
        state.localId = payload.localId;
        console.log("success");
      }
    },

    [postSignIn.pending]: () => {
      console.log("loading");
    },
    [postSignIn.fulfilled]: (state, { payload }) => {
      if (payload.success === "success") {
        state.success = "success";
      }
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
