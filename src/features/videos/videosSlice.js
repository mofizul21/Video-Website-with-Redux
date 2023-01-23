import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosApi";

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: "",
};

export const fetchVideos = createAsyncThunk(
    "videos/fetchVideos", 
    async({tags, search}) => {
        const videos = await getVideos(tags, search);
        return videos;
});

const videosSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        // Main works of the reducers is fetch data from server and push the data into state. Also handle loading and error state.

    },
    extraReducers: (builder) => {
        builder.addCase(fetchVideos.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        });
        builder.addCase(fetchVideos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.videos = action.payload;
        });
        builder.addCase(fetchVideos.rejected, (state, action) => {
            state.isLoading = false;
            state.videos = [];
            state.isError = true;
            state.error = action.error?.message;
        });
    },
});

export default videosSlice.reducer;