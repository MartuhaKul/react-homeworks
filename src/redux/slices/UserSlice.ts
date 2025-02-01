import {IUser} from "../../models/IUser.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.ts";

type UserSliceType ={
    users: IUser[],
}

const loadUsers = createAsyncThunk ("loadUsers", async (_, thunkAPI) => {
    try {
       const users = await getAll<IUser[]>('/users');
       return thunkAPI.fulfillWithValue(users);
    }catch (e){
        console.error(e);
        return thunkAPI.rejectWithValue('error');
    }

});

const initUserSlaceState:UserSliceType={users:[]};
export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initUserSlaceState,
    reducers: {},
    extraReducers:builder => builder.addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>)=>{
        state.users =action.payload;
    }),
});

export const userActions = {...userSlice.actions, loadUsers};