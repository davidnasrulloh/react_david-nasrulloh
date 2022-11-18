import { createSlice } from "@reduxjs/toolkit";

export const dataSLice = createSlice({
    name: "data",
    initialState: {
        users: [],
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
    },
});

export const { setUsers } = dataSLice.actions;

export default dataSLice.reducer;