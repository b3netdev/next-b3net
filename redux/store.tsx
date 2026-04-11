import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slicers/menuSlicer"
import idReducer from "./slicers/idSlicer"
import hoverReducer from "./slicers/hoverSlicer"

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    id: idReducer,
    hoverMenu: hoverReducer
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
