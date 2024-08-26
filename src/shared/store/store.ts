import { Store } from "redux";
import { configureStore, ThunkAction, ThunkDispatch, Action, AsyncThunkAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import { carsReducers, carReducers } from "@/entities";
import { GetServerSidePropsResult } from "next";

const makeStore = () => {
  return configureStore({
    reducer: {
      car: carReducers,
      cars: carsReducers,
    },
    devTools: true,
  });
};

export interface FetchingState {
  status: "idle" | "loading" | "success" | "failed";
  error: any;
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type GetAsyncServerSidePropsResult<T> = Promise<GetServerSidePropsResult<null | any | T>>;
export type ThunkApiConfig = {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: RootState;
};

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const appWrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });
