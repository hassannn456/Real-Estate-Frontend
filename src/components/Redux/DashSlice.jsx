import { createSlice } from "@reduxjs/toolkit";

const dashSlice= createSlice({
    name: 'dash',
    initialState: { dashIsVisible: '0'},
    reducers: {
        toggle(state, action){
            const value= action.payload;
            state.dashIsVisible = value
        },
    }
})


export const dashActions= dashSlice.actions;
export default dashSlice.reducer;

