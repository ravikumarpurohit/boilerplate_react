import { createSlice } from "@reduxjs/toolkit";
import { userLogin, checkUserToken, userLogout } from "../actions/authActions";

const initialState = {
  loading: false,
  user: null,
  token: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.data.user;
      state.success = true;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.token = null;
      state.user = null;
      state.success = false;
      state.error = action.payload.error;
    });
    builder.addCase(checkUserToken.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(checkUserToken.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.data.user;
      state.success = true;
    });
    builder.addCase(checkUserToken.rejected, (state) => {
      state.loading = false;
      state.token = null;
      state.user = null;
      state.success = false;
      state.error = true;
    });
    builder.addCase(userLogout.fulfilled, (state) => {
      state.loading = false;
      state.token = null;
      state.user = null;
      state.success = true;
      state.error = true;
    });
    builder.addCase(userLogout.rejected, (state) => {
      state.loading = false;
      state.token = null;
      state.user = null;
      state.success = false;
      state.error = true;
    });
  },
});

const { reducer } = authSlice;
export default reducer;
