import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tags: [],
    search: "",
};

const filterSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        // Main works of the reducers is fetch data from server and push the data into state. Also handle loading and error state.
        tagSelected: (state, action) => {
            state.tags.push(action.payload);
        },
        tagRemoved: (state, action) => {
            const indexToRemove = state.tags.indexOf(action.payload);
            if(indexToRemove !== -1){
                state.tags.splice(indexToRemove, 1);
            }
        },
        searched: (state, action) => {
            state.search = action.payload;
        },
    },
});

export default filterSlice.reducer;
export const {tagRemoved, tagSelected, searched} = filterSlice.actions;