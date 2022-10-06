import { createSlice } from "@reduxjs/toolkit";

const navSlice= createSlice({
    name: 'nav',
    initialState: { navIsVisible: true},
    reducers: {
        toggle(state){
            state.navIsVisible = true;
        },
        toggleNot(state){
            state.navIsVisible = false;
        },
    }
})


export const navActions= navSlice.actions;
export default navSlice.reducer;

