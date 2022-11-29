import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosInstance from "@app/services/axiosInstance";

const initialState = {
    status: null,
    userList: []
};

export const getUserList = createAsyncThunk(
    "user/list",
    async (params, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get("users");
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const createUser = createAsyncThunk(
    "create/user",
    async (params, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post("users", params);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const userSlice = createSlice({
    name: "USER",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUserList.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(getUserList.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.userList = action?.payload?.response?.users;
            })
            .addCase(getUserList.rejected, (state, action) => {
                state.status = "rejected";
            })
            .addCase(createUser.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.userList = [
                    ...state.userList,
                    action?.payload?.response?.user
                ];
            })
            .addCase(createUser.rejected, (state, action) => {
                state.status = "rejected";
            })
    }
});

// export const { } = userSlice.actions;
export default userSlice.reducer;
