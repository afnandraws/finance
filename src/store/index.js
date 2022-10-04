import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth-slice";
import financeSlice from "./item-slice";

const store = configureStore({
  reducer: { auth: authSlice.reducer, finance: financeSlice.reducer },
});

export default store;
