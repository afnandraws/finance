import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const getFinanceData = createAsyncThunk(
  "finance/getFinanceData",
  async (financeData) => {
    const success = useSelector((state) => state.auth.status);
    if (success === "success") {
      const response = await fetch(
        `https://finance-project-1a173-default-rtdb.firebaseio.com/users/${userData.username}/finances.json`
      );

      const responseData = await response.json();
      console.log(responseData);
      return;
    }
  }
);

const financeSlice = createSlice({
  name: "finance",
  initialState: {
    id: 0,
    title: "",
    type: "",
    price: 0,
    genre: "",
  },
  extraReducers: {
    [getFinanceData.pending]: (state) => {},
    [getFinanceData.fulfilled]: (state, { payload }) => {},
    [getFinanceData.rejected]: (state) => {},
  },
});
