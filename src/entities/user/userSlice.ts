import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export interface UserState {
  name: string | null;
  expires: string | null;
  error: any;
}

const initialState: UserState = {
  name: null,
  expires: null,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.name = action.payload.user.name;
      state.expires = action.payload.expires;
    },
    userLogout: state => {
      state.name = null;
      state.expires = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(HYDRATE, (state, action: any) => {
      state.name = action.payload.user.name;
      state.error = "";
    });
  },
});

export const { userLogin, userLogout } = userSlice.actions;

export const userReducers = userSlice.reducer;
