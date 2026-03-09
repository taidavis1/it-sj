import { createSlice } from "@reduxjs/toolkit";

export const ActiveLangSlice = createSlice({
    name: "activeLang",
    initialState: {
        value: "en",
    },
    reducers: {
        setActiveLang: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setActiveLang } = ActiveLangSlice.actions;
export default ActiveLangSlice.reducer;