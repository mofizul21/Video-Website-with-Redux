import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./tagsAPI";

const initialState = {
    tags: [],
    isLoading: false,
    isError: false,
    error: "",
};

export const fetchTags = createAsyncThunk(
    "tags/fetchTags",
    async () => {
        const tags = await getTags();
        return tags;
    });

const tagsSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {
        // Main works of the reducers is fetch data from server and push the data into state. Also handle loading and error state.

    },
    extraReducers: (builder) => {
        builder.addCase(fetchTags.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        });
        builder.addCase(fetchTags.fulfilled, (state, action) => {
            state.isLoading = false;
            state.tags = action.payload;
        });
        builder.addCase(fetchTags.rejected, (state, action) => {
            state.isLoading = false;
            state.tags = [];
            state.isLoading = true;
            state.error = action.error?.message;
        });
    },
});

export default tagsSlice.reducer;