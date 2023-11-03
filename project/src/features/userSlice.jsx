import { createSlice } from "@reduxjs/toolkit";

const token = sessionStorage.getItem("token");

export const userSlice = createSlice({
    name: "user",
    initialState: {
        token,
        currentUser: undefined,
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
            sessionStorage.setItem('token', state.token);
        },
    }
})

export const { setCurrentUser, setToken } = userSlice.actions

export default userSlice.reducer



