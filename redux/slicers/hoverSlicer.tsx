import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface HoverState {
    abouthover: boolean;
    wesolvehover: boolean;
}


const initialState: HoverState = {
    abouthover: false,
    wesolvehover: false
}

const hoverSlice = createSlice({
    name: "hover",
    initialState,
    reducers: {
        setAboutHover: (state, action: PayloadAction<boolean>) => {
            state.abouthover = action.payload
        },
        setWesolveHover: (state, action: PayloadAction<boolean>) => {
            state.wesolvehover = action.payload
        }
    }
})

// Export actions
export const { setAboutHover, setWesolveHover } = hoverSlice.actions;


export default hoverSlice.reducer;