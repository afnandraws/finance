import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getFinanceData = createAsyncThunk(
  "finance/getFinanceData",
  async (financeData) => {
    const response = await fetch(
      `https://finance-project-1a173-default-rtdb.firebaseio.com/users/${financeData.username}/finances.json`
    );

    const responseData = await response.json();
    return { responseData };
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
    [getFinanceData.fulfilled]: (state, { payload }) => {
      const items = Object.getOwnPropertyNames(payload.responseData);
      const loadedItems = [];

      for (const key in items) {
        const id = items[key];
        loadedItems.push({
          id: id,
          title: payload.responseData[`${id}`]["title"],
          type: payload.responseData[`${id}`]["type"],
          price: payload.responseData[`${id}`]["price"],
          genre: payload.responseData[`${id}`]["genre"],
        });
      }

      console.log(loadedItems);
    },
    [getFinanceData.rejected]: (state) => {},
  },
});

export const financeActions = financeSlice.actions;

export default financeSlice;
