Video website with ReduxToolkit and JSON server.

Install React with Redux environment: npx create-react-app . --template redux

const videoSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        // Main works of the reducers is fetch data from server and push the data into state. Also handle loading and error state.
    },
});

Attach the slice file into store.js.

Now work on UI: useDistapch, useSelector, useEffect