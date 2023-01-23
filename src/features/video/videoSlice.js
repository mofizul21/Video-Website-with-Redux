import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./videoAPI";

const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: "",
};

export const fetchVideo = createAsyncThunk(
    "video/fetchVideo",
    async (id) => {
        const video = await getVideo(id);
        return video;
    });

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        // Main works of the reducers is fetch data from server and push the data into state. Also handle loading and error state.

    },
    extraReducers: (builder) =>
    {
        builder.addCase(fetchVideo.pending, (state) =>
        {
            state.isError = false;
            state.isLoading = true;
        });
        builder.addCase(fetchVideo.fulfilled, (state, action) =>
        {
            state.isLoading = false;
            state.video = action.payload;
        });
        builder.addCase(fetchVideo.rejected, (state, action) =>
        {
            state.isLoading = false;
            state.video = {};
            state.isError = true;
            state.error = action.error?.message;
        });
    },
});

export default videoSlice.reducer;