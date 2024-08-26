import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { FetchingState } from "@/shared";
import { CarType } from "../car/carSlice";

export interface CarsState extends FetchingState {
  list: CarType[];
  page: number;
  notLastPage: boolean;
  error: any;
}

const initialState: CarsState = {
  status: "idle",
  error: "",
  list: [],
  page: 1,
  notLastPage: true,
};

export const getAsyncCarsList = createAsyncThunk(
  "cars/getAsyncCarsList",
  async ({ page, limit = "12" }: { page: string; limit?: string }) => {
    const url = new URL(`https://rambunctious-able-airbus.glitch.me/cars`);

    if (page) {
      url.searchParams.append("_page", page);
      url.searchParams.append("_limit", limit);
    }

    try {
      const { data } = await axios(url.toString());

      return data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
);

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    addCars: (state, action) => {
      state.list = [...state.list, ...action.payload];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(HYDRATE, (state, action: any) => {
        state.list = action.payload.cars.list;
        state.notLastPage = true;
        state.page = 1;
        state.status = "success";
        state.error = "";
      })
      .addCase(getAsyncCarsList.pending, state => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(getAsyncCarsList.fulfilled, (state, action) => {
        state.status = "success";
        state.list = [...state.list, ...action.payload];

        if (!action.payload.length) {
          state.notLastPage = false;
          state.page = state.page - 1;
        }
      })
      .addCase(getAsyncCarsList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setPage, addCars } = carsSlice.actions;

export const carsReducers = carsSlice.reducer;
