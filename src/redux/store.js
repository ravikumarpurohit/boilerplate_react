import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlices";
import businessReducer from "./slices/businessStoreSlices";

const reducer = {
  auth: authReducer,
  business: businessReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
