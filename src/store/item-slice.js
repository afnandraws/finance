import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getFinanceData = createAsyncThunk(
  "finance/getFinanceData",
  async (financeData) => {
    const response = await fetch(
      `https://finance-project-1a173-default-rtdb.firebaseio.com/users/${financeData.username}/finances.json`
    );

    const responseData = await response.json();
    console.log(responseData);
    return;
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

export const financeActions = financeSlice.actions;

export default financeSlice;
