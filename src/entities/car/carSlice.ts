import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { FetchingState } from "@/shared";

export type CarType = {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  price: number;
  fuelType: "Gasoline" | "Diesel" | "Electric";
  transmission: "Automatic" | "CVT" | "Manual";
  engine: string;
  horsepower: number;
  features: string[];
  owners: number;
  image: string;
};

export interface CarState extends FetchingState {
  item: CarType | null;
}

const initialState: CarState = {
  status: "idle",
  error: "",
  item: null,
};

export const getAsyncCar = createAsyncThunk(
  "cars/getAsyncCar",
  async ({ make, model }: { make: string; model: string }) => {
    const url = new URL(`https://rambunctious-able-airbus.glitch.me/cars`);

    if (make && model) {
      url.searchParams.append("make", make);
      url.searchParams.append("model", model);
    }

    const { data } = await axios(url.toString());
    const [car] = data;

    if (car) {
      return car;
    } else {
      // return null;
      throw new Error("Not Found Car");
    }
  }
);

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(HYDRATE, (state, action: any) => {
        state.item = action.payload.car.item;
        state.status = "success";
        state.error = "";
      })
      .addCase(getAsyncCar.pending, state => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(getAsyncCar.fulfilled, (state, action) => {
        state.status = "success";
        state.item = action.payload;
      })
      .addCase(getAsyncCar.rejected, (state, action) => {
        state.status = "failed";
        state.item = null;
        state.error = action.payload || "Not Found";
      });
  },
});

export const carReducers = carSlice.reducer;
