import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: '/',
};

export const ActiveTabSlice = createSlice({
    name: "activeTab",
    initialState,
    reducers: {
        setActiveTab: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setActiveTab } = ActiveTabSlice.actions;
export default ActiveTabSlice.reducer;