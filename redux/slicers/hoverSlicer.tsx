import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface HoverState {
    abouthover: boolean;
    wesolvehover: boolean;
    servicehover: boolean;
}


const initialState: HoverState = {
    abouthover: false,
    wesolvehover: false,
    servicehover: false
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
        },
        setServiceHover: (state, action: PayloadAction<boolean>) => {
            state.wesolvehover = action.payload
        }
    }
})

// Export actions
export const { setAboutHover, setWesolveHover,setServiceHover } = hoverSlice.actions;


export default hoverSlice.reducer;