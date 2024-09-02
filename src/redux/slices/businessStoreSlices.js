import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  // loading: false,
  // user: null,
  // token: null,
  // error: null,
  // success: false,
  selectedBusinessId:null,
};

const businessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {
    setBusinessId: (state, action) => {
      state.businessId = action.payload;
     console.log(" redux set business id ",action.payload)
      localStorage.setItem('businessId', action.payload); // Save to local storage
    },
  },
  
});
export const { setBusinessId } = businessSlice.actions;
const { reducer } = businessSlice;
export default reducer;
