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
}

const initialState: MenuState = {
  showDefault: false,
};

const menuSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    

    setStickyNavMenu: (state, action: PayloadAction<boolean>) => {
      state.showDefault = action.payload;
    },
  },
});

export const {  setStickyNavMenu } = menuSlice.actions;
export default menuSlice.reducer;
