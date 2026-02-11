import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slicers/menuSlicer"
import idReducer from "./slicers/idSlicer"

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    id:idReducer
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
