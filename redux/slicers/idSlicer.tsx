import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type IdState = {
  id: number | null;
  categoryId: any;
  pageCount:any
};

const initialState: IdState = {
  id: null,
  categoryId: null,
  pageCount:null
};

const idSlice = createSlice({
  name: "idStore",
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<number | null>) => {
      state.id = action.payload;
    },

    setCategoryId: (state, action: any) => {
      state.categoryId = action.payload;
    },
    addPageCount: (state, action: any) => {
      state.pageCount = action.payload;
    },

    setIdPayload: (
      state,
      action: PayloadAction<{ id?: number | null; categoryId?: number | null }>
    ) => {
      if ("id" in action.payload) state.id = action.payload.id ?? null;
      if ("categoryId" in action.payload)
        state.categoryId = action.payload.categoryId ?? null;
    },

    clearIdStore: (state) => {
      state.id = null;
      state.categoryId = null;
    },
  },
});

export const { setId, setCategoryId, setIdPayload, clearIdStore,addPageCount } =
  idSlice.actions;

export default idSlice.reducer;
