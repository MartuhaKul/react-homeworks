import {IPost} from "../../models/IPost.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.ts";

type PostSliceType = {
    posts: IPost[],
}

const loadPosts = createAsyncThunk("loadPosts", async (_, thunkAPI)=>{
    try {
        const posts = await getAll<IPost[]>('/posts');
        return thunkAPI.fulfillWithValue(posts);
    }catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue('error');
    }

});

const initPostSlaceState:PostSliceType = {posts:[]};
export const postSlice = createSlice({
    name: 'userSlice',
    initialState: initPostSlaceState,
    reducers: {},
    extraReducers:builder => builder.addCase(loadPosts.fulfilled, (state, action:PayloadAction<IPost[]>)=>{
        state.posts = action.payload;
    }),
});

export const  postActions = {...postSlice.actions, loadPosts};
