import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./relatedVideosAPI";

const initialState = {
    relatedVideos: [],
    isLoading: false,
    isError: false,
    error: "",
};

export const fetchRelatedVideos = createAsyncThunk(
    "relatedVideos/fetchRelatedVideos",
    async ({ tags, id }) => {
        const relatedVideos = await getRelatedVideos({ tags, id });
        return relatedVideos;
    });

const relatedVideosSlice = createSlice({
    name: "relatedVideos",
    initialState,
    reducers: {
        // Main works of the reducers is fetch data from server and push the data into state. Also handle loading and error state.

    },
    extraReducers: (builder) =>
    {
        builder.addCase(fetchRelatedVideos.pending, (state) =>
        {
            state.isError = false;
            state.isLoading = true;
        });
        builder.addCase(fetchRelatedVideos.fulfilled, (state, action) =>
        {
            state.isLoading = false;
            state.relatedVideos = action.payload;
        });
        builder.addCase(fetchRelatedVideos.rejected, (state, action) =>
        {
            state.isLoading = false;
            state.relatedVideos = [];
            state.isError = true;
            state.error = action.error?.message;
        });
    },
});

export default relatedVideosSlice.reducer;