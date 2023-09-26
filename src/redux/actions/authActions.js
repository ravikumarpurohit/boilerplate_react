import { createAsyncThunk } from "@reduxjs/toolkit";
import { logIn, checkUser, logout } from "../../api/authApi";

export const userLogin = createAsyncThunk("auth/userLogin", async (reqData, thunkAPI) => {
  try {
    const response = await logIn(reqData);
    if (response.error) {
      localStorage.removeItem("userToken");
      return thunkAPI.rejectWithValue();
    } else {
      localStorage.setItem("userToken", response.token);
      return response;
    }
  } catch (error) {
    const message = error?.response?.data?.message || error.message || error.toString();
    thunkAPI.dispatch(message);
    return thunkAPI.rejectWithValue();
  }
});

export const checkUserToken = createAsyncThunk("auth/checkToken", async (token, thunkAPI) => {
  try {
    const response = await checkUser(token);
    console.log(`checkUserToken response ${JSON.stringify(response)}`);
    if (response.error) {
      localStorage.removeItem("userToken");
      return thunkAPI.rejectWithValue();
    } else {
      localStorage.setItem("userToken", response.token);
      return response;
    }
    // store user's token in local storage
  } catch (error) {
    const message = error.toString();
    thunkAPI.dispatch(message);
    return thunkAPI.rejectWithValue();
  }
});

export const userLogout = createAsyncThunk("auth/userLogout", async (reqData, thunkAPI) => {
  try {
    const response = await logout(reqData);
    return response;
  } catch (error) {
    const message = error?.response?.data?.message || error.message || error.toString();
    thunkAPI.dispatch(message);
    return thunkAPI.rejectWithValue();
  }
});
