import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuItem {
  slug: string;
  [key: string]: any; 
}

interface HeaderMenu {
  slug: string;
  items?: MenuItem[];
  [key: string]: any;
}

interface MenuState {
  showDefault: boolean;
  showLayout: boolean;
}

const initialState: MenuState = {
  showDefault: false,
  showLayout: true,
};

const menuSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setStickyNavMenu: (state, action: PayloadAction<boolean>) => {
      state.showDefault = action.payload;
    },
    SetshowLayout: (state, action: PayloadAction<boolean>) => {
      state.showLayout = action.payload;
    }
  },
});

export const {  setStickyNavMenu, SetshowLayout } = menuSlice.actions;
export default menuSlice.reducer;
